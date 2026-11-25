# Travel eSIM – Simulasi Pembelian (React JS + Tailwind CSS)

Soal recruitment Frontend Developer – Mitra Kasih Perkasa.

## Menjalankan
```bash
npm install
npm run dev      # development
npm run build    # production build (folder dist)
```

## Alur
Daftar Produk (cari + filter Region/Jenis) → Detail Produk (ukuran data, hari) → Detail Pemesan → Metode Pembayaran → Invoice.

## Struktur
```
src/
  components/  Layout, ProductCard, BottomSheet, OrderSummary, Cover, Icons
  pages/       ProductList, ProductDetail, CustomerDetail, Payment, Invoice
  context/     OrderContext (state pesanan, tanpa API)
  data/        products.js (data statis)
  utils/       format.js (rupiah, tanggal, masking, harga)
```
Mobile-first; di layar lebar ditampilkan dalam bingkai ponsel. Foto destinasi diganti gradient + emoji (tanpa aset eksternal) – ganti `Cover.jsx` dengan `<img>` jika ingin foto asli.
