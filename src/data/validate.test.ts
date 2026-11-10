import { test } from "node:test";
import assert from "node:assert/strict";
import { BOILERPLATES, PROJECT_CATEGORIES, PROJECTS, SERVICES, type Project, type Service } from "./site.ts";
import { findContentProblems } from "./validate.ts";

const service = (slug: string): Service => ({
  slug,
  title: slug,
  icon: "smartphone",
  summary: "s",
  keywords: [],
  description: "d",
  audience: "a",
  includes: [],
  stack: [],
  faqs: [],
});

const project = (overrides: Partial<Project> = {}): Project => ({
  slug: "lib",
  name: "lib",
  kind: "npm package",
  category: "Mobile",
  summary: "s",
  keywords: [],
  description: "d",
  highlights: ["h"],
  tags: [],
  links: [{ label: "npm", href: "https://www.npmjs.com/package/lib" }],
  services: ["mobile"],
  ...overrides,
});

const check = (projects: Project[], services = [service("mobile")]) =>
  findContentProblems({ projects, services, categories: PROJECT_CATEGORIES });

test("site content has no problems", () => {
  assert.deepEqual(findContentProblems({ projects: PROJECTS, services: SERVICES, categories: PROJECT_CATEGORIES, boilerplates: BOILERPLATES }), []);
});

test("valid project reports no problems", () => {
  assert.deepEqual(check([project()]), []);
});

test("internal link is accepted", () => {
  assert.deepEqual(check([project({ links: [{ label: "Contact", href: "/contact" }] })]), []);
});

test("duplicate project slug is reported", () => {
  assert.deepEqual(check([project(), project()]), ['project "lib": duplicate slug']);
});

test("unknown service slug is reported", () => {
  assert.deepEqual(check([project({ services: ["nope"] })]), ['project "lib": unknown service "nope"']);
});

test("non-https external link is reported", () => {
  assert.deepEqual(check([project({ links: [{ label: "x", href: "http://example.com" }] })]), [
    'project "lib": link "x" must be https:// or a site path',
  ]);
});

test("protocol-relative link is reported", () => {
  assert.deepEqual(check([project({ links: [{ label: "x", href: "//evil.example" }] })]), [
    'project "lib": link "x" must be https:// or a site path',
  ]);
});

test("project without highlights is reported", () => {
  assert.deepEqual(check([project({ highlights: [] })]), ['project "lib": needs at least one highlight']);
});

test("project with valid benefits, comparison and effort reports no problems", () => {
  const p = project({
    benefits: [{ title: "Fast", text: "Starts quickly." }],
    comparisons: [{ against: "Manual setup", rows: [{ aspect: "Time", them: "Hours", us: "Minutes" }] }],
    effort: [{ task: "Store", hours: { min: 1, max: 2 } }],
  });
  assert.deepEqual(check([p]), []);
});

test("invalid effort range is reported with its task", () => {
  const p = project({ effort: [{ task: "Store", hours: { min: 3, max: 1 } }] });
  assert.deepEqual(check([p]), ['project "lib": effort "Store" has an invalid hour range']);
});

test("empty effort list is reported", () => {
  assert.deepEqual(check([project({ effort: [] })]), ['project "lib": effort must list at least one task']);
});

test("comparison without rows is reported", () => {
  const p = project({ comparisons: [{ against: "Manual setup", rows: [] }] });
  assert.deepEqual(check([p]), ['project "lib": comparison "Manual setup" has no rows']);
});

test("benefit with empty text is reported", () => {
  const p = project({ benefits: [{ title: "Fast", text: " " }] });
  assert.deepEqual(check([p]), ['project "lib": benefit "Fast" needs a title and text']);
});

test("category missing from the filter list is reported", () => {
  assert.deepEqual(
    findContentProblems({ projects: [project()], services: [service("mobile")], categories: ["Mobile Security"] }),
    ['project "lib": category "Mobile" is not in PROJECT_CATEGORIES'],
  );
});

test("boilerplate pointing at an unknown project is reported", () => {
  assert.deepEqual(
    findContentProblems({ projects: [project()], services: [service("mobile")], categories: PROJECT_CATEGORIES, boilerplates: [{ slug: "ghost", platform: "Mobile" }] }),
    ['boilerplate "ghost": no project with that slug'],
  );
});

test("boilerplate without an effort estimate is reported", () => {
  assert.deepEqual(
    findContentProblems({ projects: [project()], services: [service("mobile")], categories: PROJECT_CATEGORIES, boilerplates: [{ slug: "lib", platform: "Mobile" }] }),
    ['boilerplate "lib": project needs an effort estimate'],
  );
});

test("boilerplate with an effort estimate reports no problems", () => {
  const p = project({ effort: [{ task: "Store", hours: { min: 1, max: 2 } }] });
  assert.deepEqual(
    findContentProblems({ projects: [p], services: [service("mobile")], categories: PROJECT_CATEGORIES, boilerplates: [{ slug: "lib", platform: "Mobile" }] }),
    [],
  );
});
