import { useState } from 'react'

// Foto destinasi dari /public/images (field `image` / `hero` di data/products.js).
// Produk tanpa foto memakai ilustrasi lanskap (gradient + bukit + matahari) dan nama negara.
export default function Cover({ product, className = '', big = false, hero = false }) {
  const [failed, setFailed] = useState(false)
  const src = hero && product.hero ? product.hero : product.image
  if (src && !failed) {
    // URL penuh (https://...) dipakai apa adanya; path lokal diawali BASE_URL
    const url = /^https?:\/\//.test(src) ? src : `${import.meta.env.BASE_URL}${src}`
    return (
      <img
        src={url}
        alt={product.name}
        loading="lazy"
        onError={() => setFailed(true)} // foto gagal dimuat -> pakai ilustrasi cadangan
        className={`object-cover ${className}`}
      />
    )
  }

  const label = product.name.replace(/^eSIM\s+/i, '')
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(170deg, ${product.from}, ${product.to})` }}
      role="img"
      aria-label={product.name}
    >
      <svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="140" cy="80" r="26" fill="#fff" opacity="0.35" />
        <path d="M0 170 Q50 130 100 160 T200 140 V250 H0Z" fill="#000" opacity="0.18" />
        <path d="M0 200 Q60 165 110 190 T200 175 V250 H0Z" fill="#000" opacity="0.28" />
        <path d="M0 225 Q70 200 130 218 T200 210 V250 H0Z" fill="#000" opacity="0.4" />
      </svg>
      <span
        className={`absolute inset-x-0 bottom-0 p-3 text-center font-bold tracking-wide text-white drop-shadow ${
          big ? 'pb-10 text-3xl' : 'text-base'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
