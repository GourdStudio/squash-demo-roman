// humanBytes(n): format a byte count with 1024-based units (B, KB, MB, GB, TB).
// BUG: it never advances past KB, so 1 MB shows as "1024 KB" and 1 GB as "1048576 KB".
function humanBytes(n) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = n;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }

  const formatted = Number.isInteger(value) ? value : value.toFixed(1);
  return `${formatted} ${units[unitIndex]}`;
}
module.exports = { humanBytes };