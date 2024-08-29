import { useState, useEffect } from "react";

const getInitialState = () => {
  const signedIn = localStorage.getItem("signedIn");

  return signedIn ? JSON.parse(signedIn) : false;
};

export const useAuthentication = () => {
  const [signedIn, setSignedIn] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
  }, [signedIn]);

  return { signedIn, setSignedIn };
};
