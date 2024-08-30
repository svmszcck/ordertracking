import { OrderContext } from "contexts/orderContext";
import { useEffect, useContext } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { Routes } from "Router";
import { getOrder } from "services/orderService";

export const useOrder = () => {
  let { orderNumber } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loading, setLoading, order, setOrder } = useContext(OrderContext);

  useEffect(() => {
    setLoading(true);
    const zipCode = searchParams.get("zip");

    if (orderNumber && zipCode) {
      getOrder(orderNumber, zipCode).then((data) => {
        setLoading(false);
        if (!data) navigate(Routes.HOME);
        else {
          setOrder(data || null);
        }
      });
    }
  }, [orderNumber, searchParams, navigate, order, setLoading, setOrder]);

  return { order, setOrder, loading };
};
