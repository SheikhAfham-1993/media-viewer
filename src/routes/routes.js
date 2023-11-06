import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import SearchPage from '../pages/SearchPage/SearchPage'
import SingleMediaView, {
  fetchSingleMedia,
} from '../pages/SingleMediaView/SingleMediaView'

// All the routes in the application
export const browserRoutes = createBrowserRouter([
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
        loader: fetchSingleMedia, // fetches single media data on page load, id will be passed automatically
      },
    ],
  },
])
