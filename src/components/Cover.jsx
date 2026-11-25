// Pengganti foto destinasi (tanpa aset eksternal): gradient + emoji landmark.
export default function Cover({ product, className = '', big = false }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${product.from}, ${product.to})` }}
      role="img"
      aria-label={product.name}
    >
      <span className={big ? 'text-8xl drop-shadow-lg' : 'text-5xl drop-shadow'}>{product.emoji}</span>
    </div>
  )
}
