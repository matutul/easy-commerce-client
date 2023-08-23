import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import { ErrorPage } from "./layout/ErrorPage";
import TopRated from "./pages/TopRated";
import Cart from "./pages/Cart";
import Root from "./layout/Root";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "top_rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
