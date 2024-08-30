import { useState, useContext, useMemo } from "react";

import { paginate } from "utils/data";
import { OrderContext } from "contexts/orderContext";

const PAGE_SIZE = 3;

export const usePagination = () => {
  const { order } = useContext(OrderContext);

  const [page, setPage] = useState(1);

  const paginatedData = useMemo(
    () => paginate(order?.checkpoints, PAGE_SIZE, page),
    [order, page]
  );

  const loadMore = () => {
    if (!order) return;

    if ((page + 1) * PAGE_SIZE > order.checkpoints.length) setPage(page + 1);
  };

  return { order, paginatedData, loadMore };
};
