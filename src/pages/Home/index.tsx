import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getOrder } from "services/orderService";
import { Routes } from "Router";
import HomeView from "./view";

export enum Warning {
  INPUT_EMPTY = "Order Number or Zip Code can't be empty!",
  ORDER_NOT_FOUND = "Order couldn't be found. Please try again!",
}

const Home = () => {
  const [orderNumber, setOrderNumber] = useState<string | undefined>();
  const [zipCode, setZipCode] = useState<string | undefined>();
  const [warning, showWarning] = useState<Warning>();
  const navigate = useNavigate();

  const signIn = async () => {
    if (!orderNumber || !zipCode) {
      showWarning(Warning.INPUT_EMPTY);
      return;
    }

    const order = await getOrder(orderNumber, zipCode);

    if (!order) {
      showWarning(Warning.ORDER_NOT_FOUND);
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
        showWarning(undefined);
        setOrderNumber(value);
      }}
      setZipCode={(value) => {
        showWarning(undefined);
        setZipCode(value);
      }}
      orderNumber={orderNumber}
      zipCode={zipCode}
      warning={warning}
    />
  );
};

export default Home;
