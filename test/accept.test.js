const { test } = require("node:test");
const assert = require("node:assert");
const { intToRoman } = require("../roman.js");

test("subtractive notation", () => {
  assert.strictEqual(intToRoman(4), "IV");
  assert.strictEqual(intToRoman(9), "IX");
  assert.strictEqual(intToRoman(40), "XL");
  assert.strictEqual(intToRoman(90), "XC");
  assert.strictEqual(intToRoman(400), "CD");
  assert.strictEqual(intToRoman(900), "CM");
  assert.strictEqual(intToRoman(1994), "MCMXCIV");
});

test("additive cases still work", () => {
  assert.strictEqual(intToRoman(3), "III");
  assert.strictEqual(intToRoman(2026), "MMXXVI");
});
