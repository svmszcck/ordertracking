import { useState, useMemo } from "react";

import { paginate } from "utils/data";

export const usePagination = (
  data: unknown[] | undefined,
  pageSize: number = 3
) => {
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
