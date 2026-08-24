const { describe, it } = require('node:test');
const assert = require('node:assert');
const { matchGlob } = require('../glob.js');

describe('matchGlob', () => {
  it('should match "*a" with "aa"', () => {
    assert.strictEqual(matchGlob('*a', 'aa'), true);
  });

  it('should match "a*b*c" with "axbyc"', () => {
    assert.strictEqual(matchGlob('a*b*c', 'axbyc'), true);
  });

  it('should match exact strings', () => {
    assert.strictEqual(matchGlob('abc', 'abc'), true);
    assert.strictEqual(matchGlob('abc', 'abd'), false);
  });

  it('should match "?" for single character', () => {
    assert.strictEqual(matchGlob('a?c', 'abc'), true);
    assert.strictEqual(matchGlob('a?c', 'ac'), false);
  });

  it('should match "*" for zero or more characters', () => {
    assert.strictEqual(matchGlob('*', ''), true);
    assert.strictEqual(matchGlob('*', 'anything'), true);
    assert.strictEqual(matchGlob('a*', 'a'), true);
    assert.strictEqual(matchGlob('a*', 'abc'), true);
    assert.strictEqual(matchGlob('*c', 'abc'), true);
  });

  it('should handle multiple wildcards', () => {
    assert.strictEqual(matchGlob('*a*', 'xax'), true);
    assert.strictEqual(matchGlob('*a*b*', 'xaxbx'), true);
    assert.strictEqual(matchGlob('a*b*c*d', 'aXbYcZd'), true);
  });

  it('should handle edge cases', () => {
    assert.strictEqual(matchGlob('', ''), true);
    assert.strictEqual(matchGlob('*', ''), true);
    assert.strictEqual(matchGlob('', 'a'), false);
    assert.strictEqual(matchGlob('a', ''), false);
  });
});
