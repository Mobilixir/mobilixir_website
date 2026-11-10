import { test } from "node:test";
import assert from "node:assert/strict";
import { PROJECT_CATEGORIES, PROJECTS, SERVICES, type Project, type Service } from "./site.ts";
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
  assert.deepEqual(findContentProblems({ projects: PROJECTS, services: SERVICES, categories: PROJECT_CATEGORIES }), []);
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

test("category missing from the filter list is reported", () => {
  assert.deepEqual(
    findContentProblems({ projects: [project()], services: [service("mobile")], categories: ["Mobile Security"] }),
    ['project "lib": category "Mobile" is not in PROJECT_CATEGORIES'],
  );
});
