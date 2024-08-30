import { OrderStatus } from "services/types/Order";

export const paginate = (
  array: unknown[] | undefined,
  page_size: number,
  page_number: number
): unknown[] => {
  if (!array) return [];

  return array.slice(0, page_number * page_size);
};

export const progress = (status: OrderStatus): number => {
  if (status === OrderStatus.COLLECTION) return 100;
  else if (status === OrderStatus.FAILED_DELIVERY) return 75;
  else if (status === OrderStatus.TRANSIT) return 50;
  else if (status === OrderStatus.REGISTERED) return 25;

  return 0;
};

export const isDate = (date: string): boolean => {
  const parsedDate = Date.parse(date);

  return !isNaN(parsedDate);
};

export const parseDate = (date: string): string | undefined => {
  if (!isDate(date)) return;

  return new Date(date).toLocaleString();
};
