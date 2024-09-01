import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainBody from "./Components/MainBody/MainBody";
import Home from "./Pages/Home/Home";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainBody />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //     ],
  //   },
  // ]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainBody />}>
        <Route index={true} element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
