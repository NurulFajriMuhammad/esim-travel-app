import { useNavigate } from 'react-router-dom'
import { BackIcon, CheckIcon } from './Icons'

// Bingkai "HP" di tengah layar untuk desktop; full-width di mobile (mobile-first).
export function Screen({ children }) {
  return (
    <div className="min-h-screen sm:flex sm:items-center sm:justify-center sm:py-6">
      <div className="relative mx-auto flex h-screen w-full max-w-[430px] flex-col overflow-hidden bg-white sm:h-[880px] sm:max-h-[95vh] sm:rounded-[2.5rem] sm:shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export function Stepper({ step }) {
  // step: 1 = Detail Pemesan, 2 = Metode Pembayaran, 3 = Invoice
  const dot = (n) => {
    const done = step > n
    const active = step === n
    return (
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
          done || active ? 'bg-white text-brand' : 'bg-white/40 text-white'
        }`}
      >
        {done ? <CheckIcon width={14} height={14} /> : n}
      </span>
    )
  }
  return (
    <div className="flex items-center gap-1" aria-label={`Langkah ${step}`}>
      {dot(1)}
      <span className="h-px w-3 bg-white/70" />
      {dot(2)}
    </div>
  )
}

// Header biru + konten putih dengan sudut atas membulat
export function PageWithHeader({ title, step, onBack, children, footer, headerExtra }) {
  const navigate = useNavigate()
  return (
    <>
      <header className="shrink-0 bg-brand px-5 pb-6 pt-5 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack || (() => navigate(-1))} aria-label="Kembali" className="-ml-1 p-1">
              <BackIcon />
            </button>
            <h1 className="text-lg font-bold">{title}</h1>
          </div>
          {step ? <Stepper step={step} /> : null}
        </div>
        {headerExtra}
      </header>
      <main className="-mt-4 flex-1 overflow-y-auto rounded-t-3xl bg-white px-5 pb-4 pt-5">{children}</main>
      {footer && <footer className="shrink-0 bg-white px-5 pb-5 pt-2">{footer}</footer>}
    </>
  )
}

export const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-white transition active:scale-[0.99] hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-slate-300 ${className}`}
  >
    {children}
  </button>
)
