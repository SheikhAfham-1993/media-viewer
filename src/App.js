import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleMediaView, {
  fetchSingleMedia,
} from './pages/SingleMediaView/SingleMediaView'
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
        loader: fetchSingleMedia, // fetches single media data, id will be passed automatically
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
