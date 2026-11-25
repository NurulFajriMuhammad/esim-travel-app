import { useNavigate } from 'react-router-dom'
import Cover from './Cover'
import { BoltIcon, TopupIcon } from './Icons'
import { rupiah } from '../utils/format'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const go = () => navigate(`/produk/${product.id}`)
  const Icon = product.type === 'Instants' ? BoltIcon : TopupIcon
  return (
    <article className="flex flex-col rounded-3xl bg-white p-2 shadow-[0_2px_14px_rgba(30,40,120,0.12)]">
      <button onClick={go} className="text-left" aria-label={`Lihat ${product.name}`}>
        <Cover product={product} className="aspect-[4/5] w-full rounded-2xl" />
        <div className="px-1.5 pb-1 pt-3">
          <h3 className="text-sm font-bold">{product.name}</h3>
          <p className="mt-0.5 text-[11px] text-slate-400">Region {product.region}</p>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium">
            <Icon className="text-brand" />
            {product.type === 'Instants' ? 'Instant' : 'Topupable'}
          </p>
          <p className="mt-2 text-sm font-bold text-brand">{rupiah(product.price)}</p>
        </div>
      </button>
      <button
        onClick={go}
        className="mx-1.5 mb-1.5 mt-1 rounded-full bg-brand py-2 text-xs font-semibold text-white hover:bg-brand-dark"
      >
        Beli
      </button>
    </article>
  )
}
