// @ts-check
import * as assert from "node:assert";
import test from "node:test";
import * as exports from "./check-is-truthy.js";

test("exports", () => {
  assert.deepStrictEqual(Object.keys(exports).sort(), [
    "NaN",
    "isFalsy",
    "isNaN",
    "isTruthy",
    "toggle",
  ]);
});

const { isTruthy, isFalsy, toggle } = exports;

test("isTruthy", (t) => {
  assert.strictEqual(isTruthy(true), true);
  assert.strictEqual(isTruthy(false), false);
  assert.strictEqual(isTruthy(1), true);
  assert.strictEqual(isTruthy(0), false);
  assert.strictEqual(isTruthy(-0), false);
  assert.strictEqual(isTruthy(-1), true);
  assert.strictEqual(isTruthy(NaN), false);
  assert.strictEqual(isTruthy(0n), false);
  assert.strictEqual(isTruthy(1n), true);
  assert.strictEqual(isTruthy(-1n), true);
  assert.strictEqual(isTruthy(""), false);
  assert.strictEqual(isTruthy("x"), true);
  assert.strictEqual(isTruthy(" "), true);
  assert.strictEqual(isTruthy(null), false);
  assert.strictEqual(isTruthy(undefined), false);
  assert.strictEqual(isTruthy({}), true);
  assert.strictEqual(isTruthy([]), true);
  assert.strictEqual(isTruthy(new Map()), true);
  assert.deepStrictEqual([0, 1, 2].filter(isTruthy), [1, 2]);
  assert.deepStrictEqual([{}, null, {}].filter(isTruthy), [{}, {}]);
  assert.deepStrictEqual(["hello", "", "world"].filter(isTruthy), [
    "hello",
    "world",
  ]);
});

test("isFalsy", () => {
  assert.strictEqual(isFalsy(true), false);
  assert.strictEqual(isFalsy(false), true);
  assert.strictEqual(isFalsy(1), false);
  assert.strictEqual(isFalsy(0), true);
  assert.strictEqual(isFalsy(-0), true);
  assert.strictEqual(isFalsy(-1), false);
  assert.strictEqual(isFalsy(NaN), true);
  assert.strictEqual(isFalsy(0n), true);
  assert.strictEqual(isFalsy(1n), false);
  assert.strictEqual(isFalsy(-1n), false);
  assert.strictEqual(isFalsy(""), true);
  assert.strictEqual(isFalsy("x"), false);
  assert.strictEqual(isFalsy(" "), false);
  assert.strictEqual(isFalsy(null), true);
  assert.strictEqual(isFalsy(undefined), true);
  assert.strictEqual(isFalsy({}), false);
  assert.strictEqual(isFalsy([]), false);
  assert.strictEqual(isFalsy(new Map()), false);
});

test("toggle", () => {
  assert.strictEqual(toggle(true), false);
  assert.strictEqual(toggle(false), true);
});
