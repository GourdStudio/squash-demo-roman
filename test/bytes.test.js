const { test } = require("node:test");
const assert = require("node:assert");
const { humanBytes } = require("../bytes.js");

test("scales through units", () => {
  assert.strictEqual(humanBytes(512), "512 B");
  assert.strictEqual(humanBytes(1024), "1 KB");
  assert.strictEqual(humanBytes(1536), "1.5 KB");
  assert.strictEqual(humanBytes(1048576), "1 MB");
  assert.strictEqual(humanBytes(1073741824), "1 GB");
});
