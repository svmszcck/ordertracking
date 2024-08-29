import { useEffect } from "react";

import { getOrder } from "services/orderService";
import OrderView from "./view";

const Order = () => {
  useEffect(() => {
    getOrder("AB20221219", "60156");
  }, []);

  return <OrderView />;
};

export default Order;
