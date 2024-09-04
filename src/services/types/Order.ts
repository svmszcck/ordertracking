export enum OrderStatus {
  REGISTERED = "Registered",
  DELIVERY_DATE_SET = "New delivery date set",
  COLLECTION = "Ready for collection",
  FAILED_DELIVERY = "Failed delivery attempt",
  TRANSIT = "In transit",
}

type Article = {
  articleNo: string;
  articleName: string;
  articleImageUrl: string;
  quantity: number;
  price: number;
};

type CheckPoint = {
  status_details: string;
  event_timestamp: string;
  status: OrderStatus;
  country_iso3: string;
  city: string;
  meta?: {
    pickup_address: string;
    pickup_address_link: string;
    pickup_address_map_url: string;
  };
};

type DeliveryInfo = {
  articles: Array<Article>;
  orderNo: string;
  order_date: string;
  recipient: string;
  recipient_notification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: string;
  announced_delivery_date: string;
};

export type Order = {
  _id: string;
  courier: string;
  tracking_number: string;
  created: string;
  updated: string;
  checkpoints: CheckPoint[];
  delivery_info: DeliveryInfo;
  destination_country_iso3: string;
  zip_code: string;
};
