const { test } = require("node:test");
const assert = require("node:assert");
const { matchGlob } = require("../glob.js");

test("glob with backtracking", () => {
  assert.strictEqual(matchGlob("*", ""), true);
  assert.strictEqual(matchGlob("*", "abc"), true);
  assert.strictEqual(matchGlob("a*", "a"), true);
  assert.strictEqual(matchGlob("*a", "aa"), true);
  assert.strictEqual(matchGlob("a*b*c", "axbyc"), true);
  assert.strictEqual(matchGlob("a*b*c", "abc"), true);
  assert.strictEqual(matchGlob("a?c", "abc"), true);
  assert.strictEqual(matchGlob("a?c", "ac"), false);
  assert.strictEqual(matchGlob("*.js", "app.js"), true);
  assert.strictEqual(matchGlob("*.js", "app.ts"), false);
  assert.strictEqual(matchGlob("*a*", "b"), false);
});
