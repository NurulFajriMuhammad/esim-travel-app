// Data statis (simulasi, tanpa API)
// "from" / "to" dipakai untuk gradient pengganti jika produk belum punya foto.
export const REGIONS = ['Semua Region', 'Asia', 'Amerika', 'Oseania', 'Eropa', 'Afrika']
export const TYPES = ['Semua Jenis', 'Instants', 'Topupable']

// mult = pengali harga dasar produk (harga dasar = 3GB / 7 hari)
export const DATA_SIZES = [
  { label: '3GB', mult: 1 },
  { label: '5GB', mult: 1.5 },
  { label: '10GB', mult: 2.5 },
  { label: '15GB', mult: 3.5 },
]
export const DAYS = [
  { value: 7, mult: 1 },
  { value: 14, mult: 1.6 },
  { value: 24, mult: 2.2 },
  { value: 30, mult: 2.6 },
]

export const DESCRIPTION = [
  'SIM/eSIM dengan koneksi cepat hingga 4G.',
  'SIM tersedia dalam tiga ukuran; eSIM dilengkapi dengan kode QR dan petunjuk pemasangan.',
  'Terhubung ke operator terbaik untuk cakupan dan kecepatan optimal.',
  'Masa berlaku data dimulai saat pertama kali digunakan di negara tujuan.',
  'Paket mulai dari 500MB/hari hingga 30GB/bulan, dengan durasi dari 1 hari hingga 1 bulan.',
]

// Foto dari Wikimedia Commons (lisensi bebas). Dimuat langsung dari internet, lebar disesuaikan.
// Untuk hasil paling aman (offline), unduh fotonya ke public/images/ lalu ganti dengan 'images/nama.jpg'.
const commons = (file, width = 700) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${width}`

export const PRODUCTS = [
  { id: 'sg', image: commons('Marina_Bay_Sands,_Singapore_1.jpg'), hero: commons('Marina_Bay_Sands,_Singapore_1.jpg', 1200), name: 'eSIM Singapore', region: 'Asia', type: 'Instants', price: 69000, coverage: ['Singapore'], from: '#f6a56b', to: '#1e5b6b' },
  { id: 'id', image: commons('Pura_Ulun_Danu_Bratan,_Bedugul,_Bali.jpg'), hero: commons('Pura_Ulun_Danu_Bratan,_Bedugul,_Bali.jpg', 1200), name: 'eSIM Indonesia', region: 'Asia', type: 'Topupable', price: 52000, coverage: ['Indonesia'], from: '#f2a66a', to: '#1d4a52' },
  { id: 'us', image: commons('Times_Square,New_York_CC-BY-SA.jpg'), hero: commons('Times_Square,New_York_CC-BY-SA.jpg', 1200), name: 'eSIM USA', region: 'Amerika', type: 'Instants', price: 99000, coverage: ['Amerika Serikat'], from: '#e56b5d', to: '#27324f' },
  { id: 'kr', image: commons('Seoul_Gyeongbokgung_palace_exterior_view.jpg'), hero: commons('Seoul_Gyeongbokgung_palace_exterior_view.jpg', 1200), name: 'eSIM South Korea', region: 'Asia', type: 'Topupable', price: 75000, coverage: ['Korea Selatan'], from: '#9cc7d9', to: '#c9835a' },
  { id: 'au', image: commons('Sydney_Opera_House_at_Sunset.jpg'), hero: commons('Sydney_Opera_House_at_Sunset.jpg', 1200), name: 'eSIM Australia', region: 'Oseania', type: 'Instants', price: 89000, coverage: ['Australia'], from: '#f7c46c', to: '#2a7ea3' },
  { id: 'eu', image: commons('Tour_Eiffel_Wikimedia_Commons.jpg'), hero: commons('Tour_Eiffel_Wikimedia_Commons.jpg', 1200), name: 'eSIM Europe', region: 'Eropa', type: 'Topupable', price: 119000, coverage: ['Prancis', 'Jerman', 'Italia', 'Spanyol'], from: '#8aa8e8', to: '#3b3f88' },
  { id: 'eg', image: commons('Giza-pyramids.JPG'), hero: commons('Giza-pyramids.JPG', 1200), name: 'eSIM Egypt', region: 'Afrika', type: 'Instants', price: 85000, coverage: ['Mesir'], from: '#f3c77a', to: '#a8643a' },
  { id: 'jp', image: commons('Chureito_Pagoda_and_Mount_Fuji.jpg'), hero: commons('Chureito_Pagoda_and_Mount_Fuji.jpg', 1200), name: 'eSIM Japan', region: 'Asia', type: 'Topupable', price: 95000, coverage: ['Jepang'], from: '#f4a4b8', to: '#3f5d8a' },
]

export const PAYMENT_METHODS = [
  { id: 'saldo', name: 'Saldo', badge: 'wallet', note: 'Rp200.000' },
  { id: 'bca', name: 'VA BCA', badge: 'BCA', color: '#005bac' },
  { id: 'mandiri', name: 'VA Mandiri', badge: 'mandiri', color: '#e8a400' },
  { id: 'bri', name: 'VA BRI', badge: 'BRI', color: '#00529c' },
]

export const SERVICE_FEE = 2500