import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleMediaView from './pages/SingleMediaView/SingleMediaView'
import RootLayout from './pages/RootLayout'
import SearchPage from './pages/SearchPage/SearchPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: '/singlemediaview/:id',
        element: <SingleMediaView />,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
