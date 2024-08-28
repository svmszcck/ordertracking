import React from "react";

const authState = {
  signedIn: false,
  setSignedIn: (value: boolean) => {},
};

export const AuthContext = React.createContext(authState);
