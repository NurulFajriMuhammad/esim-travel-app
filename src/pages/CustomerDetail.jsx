import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useOrder } from '../context/OrderContext'
import { PageWithHeader, PrimaryButton } from '../components/Layout'
import OrderSummary from '../components/OrderSummary'

const Field = ({ label, error, hint, ...props }) => (
  <div className="mb-4">
    <label className="mb-1.5 block text-sm font-semibold">{label}</label>
    <input
      {...props}
      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none placeholder:text-slate-300 focus:border-brand ${
        error ? 'border-red-400' : 'border-slate-200'
      }`}
    />
    {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : hint && <p className="mt-1.5 text-[11px] text-slate-500">{hint}</p>}
  </div>
)

export default function CustomerDetail() {
  const navigate = useNavigate()
  const { order, update } = useOrder()
  const [form, setForm] = useState(order.customer)
  const [errors, setErrors] = useState({})
  if (!order.product) return <Navigate to="/" replace />

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Nama wajib diisi'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Format email tidak valid'
    if (!/^(\+62|62|0)8\d{7,12}$/.test(form.phone)) err.phone = 'Nomor WhatsApp tidak valid (contoh: 081234567890)'
    setErrors(err)
    if (Object.keys(err).length) return
    update({ customer: form })
    navigate('/pembayaran')
  }

  return (
    <PageWithHeader title="Detail Pemesan" step={1} footer={<PrimaryButton onClick={submit}>Lanjutkan</PrimaryButton>}>
      <OrderSummary />
      <h2 className="mb-3 mt-4 text-sm font-bold">Data Pelanggan</h2>
      <Field label="Nama" placeholder="Masukan Nama Pelanggan" value={form.name} onChange={set('name')} error={errors.name} />
      <Field label="Alamat Email" type="email" placeholder="Masukan Email Pelanggan" value={form.email} onChange={set('email')} error={errors.email} />
      <Field label="Nomor Whatsapp" type="tel" inputMode="numeric" placeholder="Masukan Nomor HP Pelanggan" value={form.phone}
        onChange={set('phone')} error={errors.phone} hint="Jika terjadi kendala, kami akan menghubungi ke nomor ini" />
    </PageWithHeader>
  )
}
