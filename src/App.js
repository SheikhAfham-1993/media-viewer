import { RouterProvider } from 'react-router-dom'
import { browserRoutes } from './routes/routes'

const router = browserRoutes

function App() {
  return <RouterProvider router={router} />
}

export default App
