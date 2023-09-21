import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./layout/ErrorPage";
import TopRated from "./pages/TopRated";
import Cart from "./pages/Cart";
import Root from "./layout/Root";
import Home from "./pages/Home";
import WishList from "./pages/WishList";

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
        path: "wish_list",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
