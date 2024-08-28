import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { AuthContext } from "contexts/authContext";
import { GlobalStyle } from "globalStyles";
import router from "./Router";

function getInitialState() {
  const signedIn = localStorage.getItem("signedIn");

  return signedIn ? JSON.parse(signedIn) : false;
}

function App() {
  const [signedIn, setSignedIn] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
  }, [signedIn]);

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
