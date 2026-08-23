function humanBytes(n) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = n;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const formatted = Number.isInteger(value) ? value : value.toFixed(1);
  return `${formatted} ${units[unitIndex]}`;
}
module.exports = { humanBytes };
