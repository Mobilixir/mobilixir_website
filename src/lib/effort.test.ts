import { test } from "node:test";
import assert from "node:assert/strict";
import { formatHours, isValidRange, totalEffort } from "./effort.ts";

test("totalEffort sums the low and high ends separately", () => {
  const total = totalEffort([
    { task: "a", hours: { min: 2, max: 4 } },
    { task: "b", hours: { min: 10, max: 20 } },
  ]);
  assert.deepEqual(total, { min: 12, max: 24 });
});

test("totalEffort of no items is zero", () => {
  assert.deepEqual(totalEffort([]), { min: 0, max: 0 });
});

test("formatHours shows a range with an en dash", () => {
  assert.equal(formatHours({ min: 5, max: 10 }), "5–10 hours");
});

test("formatHours collapses an equal range", () => {
  assert.equal(formatHours({ min: 8, max: 8 }), "8 hours");
});

test("formatHours uses the singular for exactly one hour", () => {
  assert.equal(formatHours({ min: 1, max: 1 }), "1 hour");
});

test("formatHours groups thousands", () => {
  assert.equal(formatHours({ min: 1200, max: 2400 }), "1,200–2,400 hours");
});

test("isValidRange accepts min equal to max", () => {
  assert.equal(isValidRange({ min: 3, max: 3 }), true);
});

test("isValidRange rejects an inverted range", () => {
  assert.equal(isValidRange({ min: 4, max: 3 }), false);
});

test("isValidRange rejects zero, negative and non-finite hours", () => {
  assert.equal(isValidRange({ min: 0, max: 2 }), false);
  assert.equal(isValidRange({ min: -1, max: 2 }), false);
  assert.equal(isValidRange({ min: 1, max: Number.POSITIVE_INFINITY }), false);
  assert.equal(isValidRange({ min: Number.NaN, max: 2 }), false);
});
