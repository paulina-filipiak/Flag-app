import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom"

import { CountriesContextProvider } from "./context/countries.context"
import Layout from "./Layout/Layout.component"
import FlagPage from "./pages/Flag.page"
import Homepage from "./pages/Home.page"
import NotFound from "./pages/NotFound.page"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="details/:name" element={<FlagPage />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="not-found" replace={true} />} />
      </Route>
    )
  )

  return (
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  )
}

export default App
