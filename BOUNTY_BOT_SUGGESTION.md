# Saran perbaikan dari analisis AI

Untuk issue #4

Berikut adalah analisis dan solusi teknis singkat untuk memenangkan bounty tersebut.

---

### **Akar Masalah (Root Cause)**
Fungsi `humanBytes` di file `bytes.js` memiliki logika pembagian/penentuan indeks unit yang salah. Kemungkinan besar loop atau kondisi `while/if` berhenti terlalu cepat (hanya melakukan pembagian sekali ke `KB`) atau array unit tidak teriterasi dengan benar ketika angka mencapai $1024^2$ ($1.048.576$) atau lebih tinggi.

---

### **Solusi Teknis (`bytes.js`)**

Buka file `bytes.js` dan perbaiki fungsi `humanBytes` menggunakan kalkulasi eksponen logaritma basis 1024 atau pembagian iteratif yang benar.

#### **Opsi Kode Perbaikan (Gunakan pendekatan paling sesuai dengan gaya kode yang ada):**

```javascript
function humanBytes(bytes) {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  // Hitung indeks unit berdasarkan eksponen basis 1024
  let i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  // Batasi agar tidak melebih batas array units
  i = Math.min(i, units.length - 1);

  // Hitung nilai akhir
  const value = bytes / Math.pow(1024, i);

  // Kembalikan string (hapus desimal .0 jika angka bulat)
  return `${parseFloat(value.toFixed(2))} ${units[i]}`;
}

module.exports = { humanBytes }; // sesuaikan dengan cara export file asli
```

---

### **Langkah Verifikasi & Pengujian**

1. **Tambahkan Unit Test di `test/bytes.test.js`:**
   ```javascript
   // Tambahkan case test ini
   assert.strictEqual(humanBytes(1048576), '1 MB');
   assert.strictEqual(humanBytes(1073741824), '1 GB');
   ```

2. **Jalankan Test:**
   Jalankan perintah pengujian di terminal (misal: `npm test` atau `node test/bytes.test.js`) hingga semua indikator tes berwarna hijau (**green**).

3. **Submit PR:**
   Buat Pull Request ke repository tujuan agar Squash memproses pembayaran bounty $10 Anda.
