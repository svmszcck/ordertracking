import { act } from "react";

import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";

import { usePagination } from "hooks/usePagination";
import { OrderContext } from "contexts/orderContext";
import type { Order } from "services/types/Order";
import { order } from "mock_data";

describe("usePagination hook", () => {
  it("paginates order data correctly", async () => {
    const setOrder = jest.fn();
    const setLoading = jest.fn();
    const orderData = order as Order;

    const { result } = renderHook(() => usePagination(order.checkpoints), {
      wrapper: ({ children }) => (
        <OrderContext.Provider
          value={{ order: orderData, setOrder, loading: false, setLoading }}
        >
          {children}
        </OrderContext.Provider>
      ),
    });

    expect(result.current.paginatedData).toEqual(
      orderData.checkpoints.slice(0, 3)
    );

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.paginatedData).toEqual(
      orderData.checkpoints.slice(0, 6)
    );

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.paginatedData).toEqual(
      orderData.checkpoints.slice(0, 6)
    );
  });
});
