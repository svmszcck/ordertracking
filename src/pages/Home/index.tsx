import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getOrder } from "services/orderService";
import { Routes } from "Router";
import HomeView from "./view";

const Home = () => {
  const [orderNumber, setOrderNumber] = useState<string | undefined>();
  const [zipCode, setZipCode] = useState<string | undefined>();
  const navigate = useNavigate();

  const signIn = async () => {
    if (!orderNumber || !zipCode) return;

    const order = await getOrder(orderNumber, zipCode);

    if (!order) return;

    navigate(`${Routes.ORDER}/${orderNumber}/?zip=${zipCode}`);
  };

  return (
    <HomeView
      signIn={signIn}
      setOrderNumber={setOrderNumber}
      setZipCode={setZipCode}
    />
  );
};

export default Home;
