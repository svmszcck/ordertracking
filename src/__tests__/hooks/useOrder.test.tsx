import { renderHook, waitFor } from "@testing-library/react";
import * as router from "react-router";
import { MemoryRouter, Routes, Route } from "react-router";
import "@testing-library/jest-dom";

import { useOrder } from "hooks/useOrder";
import { OrderContextProvider } from "contexts/orderContext";

describe("useOrder hook", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("fetches & renders order data correctly", async () => {
    const { result } = renderHook(() => useOrder(), {
      wrapper: ({ children }) => (
        <OrderContextProvider>
          <MemoryRouter initialEntries={["/orders/AB20221219?zip=60156"]}>
            <Routes>
              <Route path="orders/:orderNumber" element={children} />
            </Routes>
          </MemoryRouter>
        </OrderContextProvider>
      ),
    });

    // Normally api calls shouldn't be tested in the unit tests but as we are using mock api it is acceptable with a timeout value
    await waitFor(
      () => {
        expect(result.current.order).toBeTruthy();
      },
      { timeout: 5000 }
    );
  });
});
