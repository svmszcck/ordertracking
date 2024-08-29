import { delay } from "utils/api";
import { isString } from "utils/validation";
import { logError } from "./logService";
import orders from "data/orders.json";

enum API_ERRORS {
  ORDER_FETCH = "Failed to fetch order data",
  ORDER_EMPTY = "Order data is empty",
}

export const getOrder = async (orderNumber: string, zipCode: string) => {
  try {
    if (!orders) throw new Error(API_ERRORS.ORDER_FETCH);

    const order = orders.find(
      (item) =>
        item.tracking_number === orderNumber && item.zip_code === zipCode
    );

    await delay(1000);

    if (!order) throw new Error(API_ERRORS.ORDER_EMPTY);

    return order;
  } catch (error) {
    if (isString(error)) logError(error);
  }
};
