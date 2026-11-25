import { useOrder } from '../context/OrderContext'
import { formatDateNumeric } from '../utils/format'

export default function OrderSummary() {
  const { order } = useOrder()
  const rows = [
    ['Paket Terpilih', order.product.name],
    ['Data Tersedia', `${order.dataSize.label.replace('GB', ' GB')}`],
    ['Tanggal Pesanan', formatDateNumeric(order.orderDate)],
    ['Jumlah', order.quantity],
  ]
  return (
    <section className="border-b border-dashed border-slate-200 pb-3">
      <h2 className="mb-3 text-sm font-bold">Ringkasan Paket</h2>
      <dl className="space-y-1.5 text-xs">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <dt className="text-slate-500">{k}</dt>
            <dd className="text-slate-600">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
