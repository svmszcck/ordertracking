import React, { useState, FC, PropsWithChildren } from "react";

import { Order } from "services/types/Order";

type OrderState = {
  order: Order | null;
  setOrder: (data: Order | null) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const orderState: OrderState = {
  order: null,
  setOrder: () => {},
  loading: true,
  setLoading: () => {},
};

export const OrderContext = React.createContext(orderState);

export const OrderContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder, loading, setLoading }}>
      {children}
    </OrderContext.Provider>
  );
};
