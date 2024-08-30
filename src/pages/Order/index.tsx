import { useOrder } from "hooks/useOrder";

import OrderView from "./view";
import Loader from "components/Loader";

const Order = () => {
  const { order, loading } = useOrder();

  return !order && loading ? <Loader /> : <OrderView />;
};

export default Order;
