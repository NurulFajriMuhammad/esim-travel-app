// Data statis (simulasi, tanpa API)
// "from" / "to" dipakai untuk gradient pengganti foto destinasi.
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

export const PRODUCTS = [
  { id: 'sg', name: 'eSIM Singapore', region: 'Asia', type: 'Instants', price: 69000, coverage: ['Singapore'], emoji: '🏙️', from: '#f6a56b', to: '#1e5b6b' },
  { id: 'id', name: 'eSIM Indonesia', region: 'Asia', type: 'Topupable', price: 52000, coverage: ['Indonesia'], emoji: '🛕', from: '#f2a66a', to: '#1d4a52' },
  { id: 'us', name: 'eSIM USA', region: 'Amerika', type: 'Instants', price: 99000, coverage: ['Amerika Serikat'], emoji: '🗽', from: '#e56b5d', to: '#27324f' },
  { id: 'kr', name: 'eSIM South Korea', region: 'Asia', type: 'Topupable', price: 75000, coverage: ['Korea Selatan'], emoji: '🏘️', from: '#9cc7d9', to: '#c9835a' },
  { id: 'au', name: 'eSIM Australia', region: 'Oseania', type: 'Instants', price: 89000, coverage: ['Australia'], emoji: '🦘', from: '#f7c46c', to: '#2a7ea3' },
  { id: 'eu', name: 'eSIM Europe', region: 'Eropa', type: 'Topupable', price: 119000, coverage: ['Prancis', 'Jerman', 'Italia', 'Spanyol'], emoji: '🏰', from: '#8aa8e8', to: '#3b3f88' },
  { id: 'eg', name: 'eSIM Egypt', region: 'Afrika', type: 'Instants', price: 85000, coverage: ['Mesir'], emoji: '🏜️', from: '#f3c77a', to: '#a8643a' },
  { id: 'jp', name: 'eSIM Japan', region: 'Asia', type: 'Topupable', price: 95000, coverage: ['Jepang'], emoji: '🗻', from: '#f4a4b8', to: '#3f5d8a' },
]

export const PAYMENT_METHODS = [
  { id: 'saldo', name: 'Saldo', badge: 'wallet', note: 'Rp200.000' },
  { id: 'bca', name: 'VA BCA', badge: 'BCA', color: '#005bac' },
  { id: 'mandiri', name: 'VA Mandiri', badge: 'mandiri', color: '#e8a400' },
  { id: 'bri', name: 'VA BRI', badge: 'BRI', color: '#00529c' },
]

export const SERVICE_FEE = 500
