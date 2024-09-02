import { OrderContext } from "contexts/orderContext";
import { useEffect, useContext } from "react";
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

import { Routes } from "Router";
import { getOrder } from "services/orderService";
import { delay } from "utils/api";
import type { Order } from "services/types/Order";

const DEFAULT_TIMEOUT = 250;

type useOrderType = () => {
  order: Order | null;
  setOrder: (data: Order | null) => void;
  loading: boolean;
};

export const useOrder: useOrderType = () => {
  let { orderNumber } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const { loading, setLoading, order, setOrder } = useContext(OrderContext);

  useEffect(() => {
    setLoading(true);

    if (state) {
      // Delay function is used to provide the users with a better UX by showing a dummy loading UI
      delay(DEFAULT_TIMEOUT).then(() => {
        setOrder(state);
        setLoading(false);
      });
      return;
    }

    const zipCode = searchParams.get("zip");

    if (orderNumber && zipCode) {
      getOrder(orderNumber, zipCode)
        .then((data) => {
          setLoading(false);
          if (!data) navigate(Routes.HOME);
          else {
            setOrder(data || null);
          }
        })
        .catch(() => {
          navigate(Routes.HOME);
        });
    }
  }, [state, orderNumber, searchParams, navigate, order, setLoading, setOrder]);

  return { order, setOrder, loading };
};
