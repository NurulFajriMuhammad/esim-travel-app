const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const BackIcon = (p) => (<svg {...base} {...p}><path d="M15 18l-6-6 6-6" /></svg>)
export const SearchIcon = (p) => (<svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>)
export const ChevronDown = (p) => (<svg {...base} width={16} height={16} {...p}><path d="M6 9l6 6 6-6" /></svg>)
export const BoltIcon = (p) => (<svg {...base} width={16} height={16} {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>)
export const TopupIcon = (p) => (<svg {...base} width={16} height={16} {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M7 6V4M17 6V4" /></svg>)
export const CopyIcon = (p) => (<svg {...base} width={16} height={16} {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 012-2h9" /></svg>)
export const CheckIcon = (p) => (<svg {...base} strokeWidth={3} {...p}><path d="M5 12l5 5 9-10" /></svg>)
export const WalletIcon = (p) => (<svg {...base} {...p}><rect x="3" y="6" width="18" height="13" rx="2.5" fill="currentColor" stroke="none" /><rect x="14" y="11" width="7" height="4" rx="1" fill="white" stroke="none" /></svg>)

export const SuccessBadge = () => (
  <svg width="84" height="84" viewBox="0 0 100 100">
    <path fill="#34a83a" d="M50 4l9 7 11-2 6 10 11 3 1 12 8 8-5 11 2 11-10 6-3 11-12 1-8 8-11-5-11 5-8-8-12-1-3-11-10-6 2-11-5-11 8-8 1-12 11-3 6-10 11 2z" />
    <path d="M30 52l14 14 26-30" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)
