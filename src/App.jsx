import { Navigate, Route, Routes } from 'react-router-dom'
import { Screen } from './components/Layout'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import CustomerDetail from './pages/CustomerDetail'
import Payment from './pages/Payment'
import Invoice from './pages/Invoice'

export default function App() {
  return (
    <Screen>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/pemesan" element={<CustomerDetail />} />
        <Route path="/pembayaran" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Screen>
  )
}
