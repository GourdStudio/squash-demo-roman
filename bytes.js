// humanBytes(n): format a byte count with 1024-based units (B, KB, MB, GB, TB).
// BUG: it never advances past KB, so 1 MB shows as "1024 KB" and 1 GB as "1048576 KB".
function humanBytes(n) {
  if (n < 1024) return `${n} B`;
  const kb = n / 1024;
  return `${Number.isInteger(kb) ? kb : kb.toFixed(1)} KB`;
}
module.exports = { humanBytes };
