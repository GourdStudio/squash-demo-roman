// humanBytes(n): format a byte count with 1024-based units (B, KB, MB, GB, TB).
// BUG: it never advances past KB, so 1 MB shows as "1024 KB" and 1 GB as "1048576 KB".
function humanBytes(bytes) {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

  // Hitung indeks unit berdasarkan eksponen basis 1024
  let i = Math.floor(Math.log(bytes) / Math.log(1024));

  // Batasi agar tidak melebihi batas array units
  i = Math.min(i, units.length - 1);

  // Hitung nilai akhir
  const value = bytes / Math.pow(1024, i);

  // Kembalikan string (hapus desimal .0 jika angka bulat)
  return `${parseFloat(value.toFixed(2))} ${units[i]}`;
}
module.exports = { humanBytes };
