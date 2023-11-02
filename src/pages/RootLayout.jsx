import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import '../index.css'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
