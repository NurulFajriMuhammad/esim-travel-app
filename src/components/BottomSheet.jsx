import { useState } from 'react'
import { PrimaryButton } from './Layout'

export default function BottomSheet({ title, options, value, onApply, onClose }) {
  const [draft, setDraft] = useState(value)
  return (
    <div className="absolute inset-0 z-20 flex items-end bg-black/40" onClick={onClose}>
      <div
        className="w-full rounded-t-3xl bg-white px-5 pb-6 pt-3 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={title}
      >
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-200" />
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-bold">{title}</h2>
          <button className="text-sm font-medium text-brand" onClick={() => setDraft(options[0])}>
            Reset
          </button>
        </div>
        <ul>
          {options.map((opt) => (
            <li key={opt}>
              <button
                onClick={() => setDraft(opt)}
                className="flex w-full items-center justify-between py-3 text-sm font-semibold"
              >
                {opt}
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    draft === opt ? 'border-brand' : 'border-slate-200'
                  }`}
                >
                  {draft === opt && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <PrimaryButton className="mt-3" onClick={() => onApply(draft)}>
          Terapkan
        </PrimaryButton>
      </div>
    </div>
  )
}
