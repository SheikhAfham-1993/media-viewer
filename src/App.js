import {RouterProvider, createBrowserRouter} from "react-router-dom"
import SearchPage from "./pages/SearchPage";
import SingleMediaView from "./pages/SingleMediaView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage/>
  },
  {
    path: "/singlemediaview/:id",
    element: <SingleMediaView/>
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
