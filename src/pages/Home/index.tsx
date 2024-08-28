import { useContext } from "react";

import { AuthContext } from "contexts/authContext";
import HomeView from "./view";

const Home = () => {
  const { setSignedIn } = useContext(AuthContext);

  const signIn = () => {
    setSignedIn(true);
  };

  return <HomeView signIn={signIn} />;
};

export default Home;
