import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import '../index.css'

/**
 * Main layout with the Outlet to display pages.
 *
 * @return {JSX.Element} The root layout component.
 */
const RootLayout = () => {
  return (
    <div className="root-content">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
