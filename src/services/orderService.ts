import orders from "data/orders.json";

export const getOrder = (orderNumber: string, zipCode: string) => {
  try {
    if (!orders) throw new Error("Failed to fetch order data");

    const order = orders.find(
      (item) => item.tracking_number === orderNumber && item.zip_code
    );

    if (!order) throw new Error("Order data is empty");

    return order;
  } catch (error) {
    console.log("xxx: ", error);
  }
};
