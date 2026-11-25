import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { DATA_SIZES, DAYS, DESCRIPTION, PRODUCTS } from '../data/products'
import { useOrder } from '../context/OrderContext'
import Cover from '../components/Cover'
import { PrimaryButton } from '../components/Layout'
import { BackIcon, TopupIcon, BoltIcon } from '../components/Icons'
import { calcPrice, rupiah } from '../utils/format'

const Pill = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`rounded-xl px-5 py-2.5 text-sm font-bold transition ${
      active ? 'bg-brand text-white' : 'bg-brand-light text-brand'
    }`}
  >
    {children}
  </button>
)

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { update } = useOrder()
  const product = PRODUCTS.find((p) => p.id === id)
  const [size, setSize] = useState(DATA_SIZES[0])
  const [days, setDays] = useState(DAYS[0])
  if (!product) return <Navigate to="/" replace />

  const price = calcPrice(product, size, days)
  const Icon = product.type === 'Instants' ? BoltIcon : TopupIcon

  const order = () => {
    update({ product, dataSize: size, days: days.value, price, quantity: 1, orderDate: new Date() })
    navigate('/pemesan')
  }

  return (
    <>
      <div className="relative shrink-0">
        <Cover product={product} big hero className="aspect-[5/4] w-full" />
        <button onClick={() => navigate(-1)} aria-label="Kembali"
          className="absolute left-4 top-5 rounded-full bg-black/20 p-1.5 text-white">
          <BackIcon />
        </button>
        <div className="absolute inset-x-0 bottom-10 flex justify-center gap-1.5">
          <span className="h-1.5 w-6 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
      </div>

      {/* relative z-10: supaya sudut melengkung menumpuk di atas foto (seperti Figma) */}
      <main className="relative z-10 -mt-7 flex-1 overflow-y-auto rounded-t-[28px] bg-white px-5 pb-4 pt-6 hide-scrollbar">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-sm text-slate-400">Region {product.region}</p>
          </div>
          <p className="text-lg font-bold text-brand">{rupiah(price)}</p>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-brand">
          <Icon /> {product.type}
        </p>

        <section className="mt-4 rounded-xl bg-brand-soft p-4 ring-1 ring-slate-100">
          <h2 className="text-sm font-bold">Cakupan negara</h2>
          <p className="mt-1 text-sm text-slate-600">{product.coverage.join(', ')}</p>
        </section>

        <h2 className="mb-2 mt-5 text-sm font-bold">Ukuran Data</h2>
        <div className="flex flex-wrap gap-2">
          {DATA_SIZES.map((s) => (
            <Pill key={s.label} active={s.label === size.label} onClick={() => setSize(s)}>{s.label}</Pill>
          ))}
        </div>

        <h2 className="mb-2 mt-5 text-sm font-bold">Pilih Jumlah Hari</h2>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <Pill key={d.value} active={d.value === days.value} onClick={() => setDays(d)}>
              {String(d.value).padStart(2, '0')}
            </Pill>
          ))}
        </div>

        <h2 className="mb-2 mt-5 text-sm font-bold">Deskripsi</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {DESCRIPTION.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </main>

      <footer className="shrink-0 bg-white px-5 pb-5 pt-2 shadow-[0_-6px_12px_rgba(0,0,0,0.04)]">
        <PrimaryButton onClick={order}>Pesan Sekarang</PrimaryButton>
      </footer>
    </>
  )
}