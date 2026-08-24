// matchGlob(pattern, str): '*' matches any run of chars (including empty); '?' matches exactly one.
// BUG: '*' is greedy with no backtracking, so it fails cases like matchGlob("*a","aa")
// and matchGlob("a*b*c","axbyc") where '*' must give characters back to match later literals.
function matchGlob(pattern, str) {
  let p = 0, s = 0;
  while (p < pattern.length) {
    const c = pattern[p];
    if (c === "*") { while (s < str.length) s++; p++; }
    else if (c === "?") { if (s >= str.length) return false; s++; p++; }
    else { if (str[s] !== c) return false; s++; p++; }
  }
  return s === str.length;
}
module.exports = { matchGlob };
