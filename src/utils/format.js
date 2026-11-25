export const rupiah = (n) => 'Rp' + Number(n).toLocaleString('id-ID')
export const rupiahDecimal = (n) => rupiah(n) + ',00'

export const formatDate = (d) =>
  d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
export const formatDateNumeric = (d) =>
  `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`
export const formatTime = (d) =>
  d.toLocaleTimeString('id-ID', { hour12: false }).replace(/\./g, ':') + ' WIB'

const MASK = '*'
export const maskPhone = (p) => (p.length > 4 ? MASK.repeat(p.length - 4) + p.slice(-4) : p)
export const maskEmail = (e) => {
  const [name, domain] = e.split('@')
  if (!domain) return e
  return MASK.repeat(Math.max(name.length - 3, 3)) + name.slice(-3) + '@' + domain
}
export const randomDigits = (n) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('')

// Harga = harga dasar produk x pengali ukuran data x pengali masa aktif (dibulatkan ke ribuan)
export const calcPrice = (product, dataSize, days) =>
  Math.round((product.price * dataSize.mult * days.mult) / 1000) * 1000