import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getOrder } from "services/orderService";
import { Routes } from "Router";
import HomeView from "./view";

const Home = () => {
  const [orderNumber, setOrderNumber] = useState<string | undefined>();
  const [zipCode, setZipCode] = useState<string | undefined>();
  const [warning, showWarning] = useState<boolean>(false);
  const navigate = useNavigate();

  const signIn = async () => {
    if (!orderNumber || !zipCode) return;

    const order = await getOrder(orderNumber, zipCode);

    if (!order) {
      showWarning(true);
      setOrderNumber(undefined);
      setZipCode(undefined);
      return;
    }

    navigate(`${Routes.ORDER}/${orderNumber}/?zip=${zipCode}`);
  };

  return (
    <HomeView
      signIn={signIn}
      setOrderNumber={(value) => {
        showWarning(false);
        setOrderNumber(value);
      }}
      setZipCode={(value) => {
        showWarning(false);
        setZipCode(value);
      }}
      orderNumber={orderNumber}
      zipCode={zipCode}
      warning={warning}
    />
  );
};

export default Home;
