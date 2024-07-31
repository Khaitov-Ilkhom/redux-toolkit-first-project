import {Navigate, useRoutes} from "react-router-dom";
import {SuspenseElement as Suspense} from "../utils/Index.jsx";
import {lazy} from "react";


const Home = lazy(() => import("./home/Home.jsx"))
const SinglePage = lazy(() => import("./single-page/Single.jsx"))
const LikedProducts = lazy(() => import("./liked-product/LikedProducts.jsx"))
const Cart = lazy(() => import("./cart/Cart.jsx"))
const NotFound = lazy(() => import("./not-found/NotFound.jsx"))

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "single-page/:id",
      element: <Suspense><SinglePage/></Suspense>
    },
    {
      path: "liked-products",
      element: <Suspense><LikedProducts/></Suspense>
    },
    {
      path: "carts",
      element: <Suspense><Cart/></Suspense>
    },
    {
      path: "notfound",
      element: <Suspense><NotFound/></Suspense>
    },
    {
      path: "*",
      element: <Suspense><Navigate to="notfound"/></Suspense>
    }
  ])
}
export default RouteController
