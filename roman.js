// intToRoman(n): convert an integer 1..3999 to a Roman numeral string.
//
// BUG: subtractive notation is not implemented. 4 comes out as "IIII" (should be "IV"),
// 9 as "VIIII" (should be "IX"), 1994 as "MDCCCCLXXXXIIII" (should be "MCMXCIV").
// The fix is to add the six subtractive pairs (CM, CD, XC, XL, IX, IV) to the table.
function intToRoman(n) {
  const table = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [value, symbol] of table) {
    while (n >= value) {
      out += symbol;
      n -= value;
    }
  }
  return out;
}

module.exports = { intToRoman };
