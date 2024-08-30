import { useContext } from "react";
import { createBrowserRouter, useNavigate, Outlet } from "react-router-dom";

import { Header } from "components";
import { Home, Order } from "pages";
import { OrderContext, OrderContextProvider } from "contexts/orderContext";

export const enum Routes {
  HOME = "/",
  ORDER = "/orders",
}

const Layout = () => {
  const { order, setOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const signOut = () => {
    setOrder(null);
    navigate(Routes.HOME);
  };

  return (
    <>
      {order && <Header signOut={signOut} />}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: `${Routes.ORDER}/:orderNumber`,
        element: <Order />,
      },
    ],
  },
]);

export default router;
