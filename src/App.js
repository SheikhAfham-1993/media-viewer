import { RouterProvider } from 'react-router-dom'
import { browserRoutes } from './routes/routes'

const router = browserRoutes // All the routes for the application

function App() {
  // Initializing with the Router Provider to manage routing.
  return <RouterProvider router={router} />
}

export default App
