import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PAYMENT_METHODS, SERVICE_FEE } from '../data/products'
import { useOrder } from '../context/OrderContext'
import { PageWithHeader, PrimaryButton } from '../components/Layout'
import { CopyIcon, SuccessBadge } from '../components/Icons'
import { formatDate, formatTime, maskEmail, maskPhone, rupiah, rupiahDecimal } from '../utils/format'

// Bagian bintang (*) dirender monospace supaya lebar & tinggi tiap bintang seragam
const MaskedValue = ({ value }) =>
  typeof value === 'string' && value.includes('*')
    ? value.split(/(\*+)/).map((part, i) =>
        part.startsWith('*') ? (
          <span key={i} className="font-mono font-bold tracking-tighter">{part}</span>
        ) : (
          part
        ),
      )
    : value

const Row = ({ k, v, children }) => (
  <div className="flex items-center justify-between py-1">
    <dt className="text-slate-500">{k}</dt>
    <dd className="font-medium text-slate-800">{children ?? <MaskedValue value={v} />}</dd>
  </div>
)

export default function Invoice() {
  const navigate = useNavigate()
  const { order, reset } = useOrder()
  const [copied, setCopied] = useState(false)
  if (!order.receipt) return <Navigate to="/" replace />

  const { receipt, product, dataSize, customer, quantity } = order
  const method = PAYMENT_METHODS.find((m) => m.id === order.paymentMethod)

  const copy = async () => {
    try { await navigator.clipboard.writeText(receipt.invoiceNo) } catch { /* abaikan */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  const finish = () => { reset(); navigate('/', { replace: true }) }

  return (
    <PageWithHeader title="Invoice" step={3} onBack={finish} footer={<PrimaryButton onClick={finish}>Selesai</PrimaryButton>}>
      <div className="rounded-xl bg-brand-soft px-4 py-5 text-xs">
        <div className="flex flex-col items-center">
          <SuccessBadge />
          <p className="mt-3 text-2xl font-bold text-brand">{rupiah(receipt.total)}</p>
          <p className="mt-1 flex items-center gap-2 text-slate-600">
            No. {receipt.invoiceNo}
            <button onClick={copy} aria-label="Salin nomor invoice" className="text-brand"><CopyIcon /></button>
            {copied && <span className="text-[10px] text-green-600">Tersalin</span>}
          </p>
        </div>

        <dl className="mt-4 border-t border-dashed border-slate-300 pt-3">
          <Row k="Status"><span className="rounded-md bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">Berhasil</span></Row>
          <Row k="No. Ref" v={receipt.refNo} />
          <Row k="Tgl Transaksi" v={formatDate(receipt.paidAt)} />
          <Row k="Waktu Transaksi" v={formatTime(receipt.paidAt)} />
          <Row k="Metode pembayaran" v={method.name.replace('VA ', 'VA ')} />
        </dl>

        <h3 className="mt-3 border-t border-dashed border-slate-300 pt-3 text-sm font-bold">Detail Transaksi</h3>
        <dl className="mt-1">
          <Row k="Produk" v={product.name} />
          <Row k="Data Tersedia" v={dataSize.label.replace('GB', ' GB')} />
          <Row k="Jumlah" v={quantity} />
          <Row k="Nama Pelanggan" v={customer.name} />
          <Row k="Nomor Whatsapp" v={maskPhone(customer.phone)} />
          <Row k="Email" v={maskEmail(customer.email)} />
        </dl>
        <p className="my-3 text-center text-[11px] text-slate-500">
          Kami akan segera mengirimkan kode QR eSIM ke email Anda. Cek inbox (atau folder spam) ya!
        </p>

        <h3 className="border-t border-dashed border-slate-300 pt-3 text-sm font-bold">Detail Pembayaran</h3>
        <dl className="mt-1">
          <Row k="Harga" v={rupiahDecimal(order.price * quantity)} />
          <Row k="Biaya Transaksi" v={rupiahDecimal(SERVICE_FEE)} />
        </dl>
      </div>
    </PageWithHeader>
  )
}