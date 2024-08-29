import { useContext } from "react";
import { createBrowserRouter, useNavigate, Outlet } from "react-router-dom";

import { Header } from "components";
import { Home, Order } from "pages";
import { AuthContext } from "contexts/authContext";

export const enum Routes {
  HOME = "/",
  ORDER = "/orders",
}

const Layout = () => {
  const { signedIn, setSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    setSignedIn(false);
    navigate(Routes.HOME);
  };

  return (
    <>
      {signedIn && <Header signOut={signOut} />}
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
        path: `${Routes.ORDER}/:id`,
        element: <Order />,
      },
    ],
  },
]);

export default router;
