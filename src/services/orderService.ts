import { delay } from "utils/api";
import { isString } from "utils/validation";
import { Order } from "./types/Order";
import { logError } from "./logService";

import orders from "data/orders.json";

enum API_ERRORS {
  ORDER_FETCH = "Failed to fetch order data",
  ORDER_EMPTY = "Order data is empty",
}

export const getOrder = async (
  orderNumber: string,
  zipCode: string
): Promise<Order | undefined> => {
  try {
    if (!orders) throw new Error(API_ERRORS.ORDER_FETCH);

    const order = (orders as Order[]).find(
      (item) =>
        item.tracking_number === orderNumber && item.zip_code === zipCode
    );

    await delay(500);

    if (!order) throw new Error(API_ERRORS.ORDER_EMPTY);

    return order;
  } catch (error) {
    if (isString(error)) logError(error);
  }
};
