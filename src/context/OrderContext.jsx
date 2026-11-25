import { createContext, useContext, useState } from 'react'

const OrderContext = createContext(null)

const emptyOrder = {
  product: null,
  dataSize: null, // { label, price }
  days: 7,
  quantity: 1,
  customer: { name: '', email: '', phone: '' },
  paymentMethod: 'saldo',
  orderDate: null,
  receipt: null,
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(emptyOrder)
  const update = (patch) => setOrder((o) => ({ ...o, ...patch }))
  const reset = () => setOrder(emptyOrder)
  return <OrderContext.Provider value={{ order, update, reset }}>{children}</OrderContext.Provider>
}

export const useOrder = () => useContext(OrderContext)
