import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS, REGIONS, TYPES } from '../data/products'
import ProductCard from '../components/ProductCard'
import BottomSheet from '../components/BottomSheet'
import { BackIcon, ChevronDown, SearchIcon } from '../components/Icons'

export default function ProductList() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState(REGIONS[0])
  const [type, setType] = useState(TYPES[0])
  const [sheet, setSheet] = useState(null) // 'region' | 'type' | null

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.trim().toLowerCase()) &&
          (region === REGIONS[0] || p.region === region) &&
          (type === TYPES[0] || p.type === type),
      ),
    [query, region, type],
  )

  const resetFilters = () => {
    setQuery('')
    setRegion(REGIONS[0])
    setType(TYPES[0])
  }

  // chip terisi putih saat filter aktif (bukan "Semua ...")
  const chip = (label, key, active) => (
    <button
      onClick={() => setSheet(key)}
      aria-haspopup="dialog"
      className={`flex items-center gap-2 rounded-full border border-white px-4 py-2 text-xs font-semibold ${
        active ? 'bg-white text-brand' : 'text-white'
      }`}
    >
      {label} <ChevronDown />
    </button>
  )

  return (
    <>
      <header className="shrink-0 bg-brand px-5 pb-8 pt-5 text-white">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} aria-label="Kembali" className="-ml-1 p-1">
            <BackIcon />
          </button>
          <h1 className="text-lg font-bold">Travel eSIM</h1>
        </div>
        <label className="mt-5 flex items-center rounded-xl bg-brand-dark/70 px-4 py-3 ring-1 ring-white/5">
          <input
            type="search"
            aria-label="Cari produk"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari Produk yang Anda Mau"
            className="w-full min-w-0 bg-transparent text-sm text-white placeholder-white/50 outline-none"
          />
          <SearchIcon />
        </label>
        <div className="mt-4 flex gap-3">
          {chip(region, 'region', region !== REGIONS[0])}
          {chip(type, 'type', type !== TYPES[0])}
        </div>
      </header>

      <main className="-mt-4 flex-1 overflow-y-auto rounded-t-3xl bg-white p-4">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm text-slate-400">Produk tidak ditemukan.</p>
            <button onClick={resetFilters} className="mt-3 text-sm font-semibold text-brand">
              Reset pencarian &amp; filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      {sheet === 'region' && (
        <BottomSheet title="Pilih Region" options={REGIONS} value={region}
          onApply={(v) => { setRegion(v); setSheet(null) }} onClose={() => setSheet(null)} />
      )}
      {sheet === 'type' && (
        <BottomSheet title="Pilih Jenis Produk" options={TYPES} value={type}
          onApply={(v) => { setType(v); setSheet(null) }} onClose={() => setSheet(null)} />
      )}
    </>
  )
}