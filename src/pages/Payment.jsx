import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PAYMENT_METHODS, SERVICE_FEE } from '../data/products'
import { useOrder } from '../context/OrderContext'
import { PageWithHeader, PrimaryButton } from '../components/Layout'
import OrderSummary from '../components/OrderSummary'
import { WalletIcon } from '../components/Icons'
import { randomDigits, rupiahDecimal, rupiah } from '../utils/format'

const Badge = ({ m }) =>
  m.badge === 'wallet' ? (
    <WalletIcon className="text-slate-800" />
  ) : m.id === 'bri' ? (
    <span className="flex w-16 shrink-0 items-center gap-0.5 text-[#00529c]" aria-label="Logo BRI">
      <img src="/logos/bri.svg" alt="" className="h-6 w-6 object-contain" />
      <span className="text-[17px] font-bold tracking-tight">BRI</span>
    </span>
  ) : (
    <img
      src={`/logos/${m.id}.svg`}
      alt={`${m.badge} logo`}
      className="h-7 w-16 shrink-0 object-contain object-left"
    />
  )

export default function Payment() {
  const navigate = useNavigate()
  const { order, update } = useOrder()
  const [method, setMethod] = useState(order.paymentMethod)
  const [loading, setLoading] = useState(false)
  if (!order.product || !order.customer.name) return <Navigate to="/" replace />

  const total = order.price * order.quantity + SERVICE_FEE
  const SALDO = 200000
  const insufficient = method === 'saldo' && total > SALDO

  const pay = () => {
    setLoading(true)
    // simulasi proses pembayaran
    setTimeout(() => {
      update({
        paymentMethod: method,
        receipt: {
          invoiceNo: `INV-000${randomDigits(8)}`,
          refNo: randomDigits(14),
          paidAt: new Date(),
          total,
        },
      })
      navigate('/invoice', { replace: true })
    }, 900)
  }

  return (
    <PageWithHeader
      title="Metode Pembayaran"
      step={2}
      footer={
        <>
          <dl className="mb-3 space-y-1.5 border-t border-dashed border-slate-200 pt-3 text-xs">
            <div className="flex justify-between"><dt className="text-slate-500">Harga</dt><dd className="font-semibold">{rupiahDecimal(order.price * order.quantity)}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Biaya Layanan</dt><dd className="font-semibold">{rupiah(SERVICE_FEE)}</dd></div>
            <div className="flex items-center justify-between pt-1"><dt className="text-sm font-semibold">Total</dt><dd className="text-lg font-bold text-brand">{rupiah(total)}</dd></div>
          </dl>
          {insufficient && <p className="mb-2 text-center text-xs text-red-500">Saldo tidak cukup, pilih metode lain.</p>}
          <PrimaryButton onClick={pay} disabled={loading || insufficient}>{loading ? 'Memproses…' : 'Lanjutkan'}</PrimaryButton>
        </>
      }
    >
      <OrderSummary />
      <h2 className="mb-3 mt-4 text-sm font-bold">Pilih Metode Pembayaran</h2>
      <ul className="space-y-3">
        {PAYMENT_METHODS.map((m) => (
          <li key={m.id}>
            <button
              onClick={() => setMethod(m.id)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors ${method === m.id ? 'border-brand/40 bg-brand-soft' : 'border-slate-200'}`}
            >
              <Badge m={m} />
              <span className="flex-1 text-[15px] font-semibold">{m.name}</span>
              {m.note && <span className="text-xs text-slate-500">{m.note}</span>}
              <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${method === m.id ? 'border-brand' : 'border-slate-200'}`}>
                {method === m.id && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </PageWithHeader>
  )
}
