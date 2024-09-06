import { RouterProvider } from "react-router-dom";

import { OrderContextProvider } from "contexts/orderContext";
import { GlobalStyle } from "globalStyles";
import { ErrorBoundary } from "components";
import ErrorUI from "pages/ErrorUI";
import router from "./Router";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorUI targetRoute="/" />}>
      <GlobalStyle />
      <OrderContextProvider>
        <RouterProvider router={router} />
      </OrderContextProvider>
    </ErrorBoundary>
  );
}

export default App;
