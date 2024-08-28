import { useContext } from "react";
import { createBrowserRouter, useNavigate, Outlet } from "react-router-dom";

import { Header } from "components";
import { Home, Order } from "pages";
import { AuthContext } from "contexts/authContext";

export const enum Routes {
  Home = "/",
  Order = "/orders",
}

const Layout = () => {
  const { signedIn, setSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    setSignedIn(false);
    navigate(Routes.Home);
  };

  console.log("signedIn: ", signedIn);

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
        path: Routes.Home,
        element: <Home />,
      },
      {
        path: `${Routes.Order}/:id`,
        element: <Order />,
      },
    ],
  },
]);

export default router;
