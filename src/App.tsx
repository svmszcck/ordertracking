import { RouterProvider } from "react-router-dom";

import { useAuthentication } from "hooks/useAuthentication";
import { AuthContext } from "contexts/authContext";
import { GlobalStyle } from "globalStyles";
import router from "./Router";

function App() {
  const { signedIn, setSignedIn } = useAuthentication();

  return (
    <>
      <GlobalStyle />
      <AuthContext.Provider value={{ signedIn, setSignedIn }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
