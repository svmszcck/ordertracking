import { RouterProvider } from "react-router-dom";

import { OrderContextProvider } from "contexts/orderContext";
import { GlobalStyle } from "globalStyles";
import router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />{" "}
      <OrderContextProvider>
        <RouterProvider router={router} />
      </OrderContextProvider>
    </>
  );
}

export default App;
