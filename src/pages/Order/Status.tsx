import { useContext } from "react";

import { Typography } from "components";
import { OrderContext } from "contexts/orderContext";

const Status = () => {
  const { order } = useContext(OrderContext);

  const checkpoint = order?.checkpoints[0];

  return order ? (
    <div className="order__status">
      <div className="order__status-info">
        <Typography tag="h1" className="order__title" bold>
          {checkpoint?.status}
        </Typography>
        <Typography tag="h4" bold>
          {checkpoint?.status_details}
        </Typography>
      </div>
      {checkpoint?.meta?.pickup_address_map_url && (
        <div className="order__map">
          <img
            src={checkpoint.meta?.pickup_address_map_url}
            alt="Pickup Map URL"
            className="order__map-content"
          />
          <Typography tag="p" className="order__map-location">
            {checkpoint.meta?.pickup_address}
          </Typography>

          <a
            href={checkpoint.meta.pickup_address_link}
            target="_blank"
            rel="noreferrer"
            className="order__map-action"
          >
            <div>
              <Typography tag="span" bold>
                Get Directions
              </Typography>
            </div>
          </a>
        </div>
      )}
    </div>
  ) : (
    <div>There is no data!</div>
  );
};

export default Status;
