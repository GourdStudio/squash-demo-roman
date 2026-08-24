// humanBytes(n): format a byte count with 1024-based units (B, KB, MB, GB, TB).
function humanBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) {
    const kb = n / 1024;
    return `${Number.isInteger(kb) ? kb : kb.toFixed(1)} KB`;
  }
  if (n < 1024 * 1024 * 1024) {
    const mb = n / (1024 * 1024);
    return `${Number.isInteger(mb) ? mb : mb.toFixed(1)} MB`;
  }
  if (n < 1024 * 1024 * 1024 * 1024) {
    const gb = n / (1024 * 1024 * 1024);
    return `${Number.isInteger(gb) ? gb : gb.toFixed(1)} GB`;
  }
  const tb = n / (1024 * 1024 * 1024 * 1024);
  return `${Number.isInteger(tb) ? tb : tb.toFixed(1)} TB`;
}
module.exports = { humanBytes };
