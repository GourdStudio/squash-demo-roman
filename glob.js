/**
 * Match a string against a glob pattern with wildcards.
 * Supports:
 *   * - matches zero or more characters
 *   ? - matches exactly one character
 * 
 * @param {string} pattern - The glob pattern
 * @param {string} text - The text to match
 * @returns {boolean} - True if the text matches the pattern
 */
function matchGlob(pattern, text) {
  return matchHelper(pattern, 0, text, 0);
}

function matchHelper(pattern, pIdx, text, tIdx) {
  // Base case: end of pattern
  if (pIdx === pattern.length) {
    return tIdx === text.length;
  }

  const pChar = pattern[pIdx];

  // Handle '*' wildcard with backtracking
  if (pChar === '*') {
    // Try matching 0 characters, then 1, then 2, etc.
    for (let i = 0; i <= text.length - tIdx; i++) {
      if (matchHelper(pattern, pIdx + 1, text, tIdx + i)) {
        return true;
      }
    }
    return false;
  }

  // Need at least one character in text for ? or literal
  if (tIdx === text.length) {
    return false;
  }

  // Handle '?' wildcard - matches any single character
  if (pChar === '?') {
    return matchHelper(pattern, pIdx + 1, text, tIdx + 1);
  }

  // Handle literal character
  if (pChar === text[tIdx]) {
    return matchHelper(pattern, pIdx + 1, text, tIdx + 1);
  }

  return false;
}

module.exports = { matchGlob };
