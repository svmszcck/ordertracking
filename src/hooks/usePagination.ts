import { useState, useMemo } from "react";

import { paginate } from "utils/data";

type usePaginationType = (
  data: unknown[] | undefined,
  pageSize?: number
) => { paginatedData: unknown[]; loadMore: () => void };

export const usePagination: usePaginationType = (data, pageSize = 3) => {
  const [page, setPage] = useState(1);

  const paginatedData = useMemo(
    () => paginate(data, pageSize, page),
    [data, page, pageSize]
  );

  const loadMore = () => {
    if (!data) return;

    if ((page + 1) * pageSize >= data.length) setPage(page + 1);
  };

  return { paginatedData, loadMore };
};
