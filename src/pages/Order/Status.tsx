import { useContext } from "react";

import { Typography } from "components";
import { OrderContext } from "contexts/orderContext";

const Status = () => {
  const { order } = useContext(OrderContext);

  const checkpoint = order?.checkpoints[0];

  return order ? (
    <div className="status">
      <div className="info">
        <Typography tag="h1" className="title" bold>
          {checkpoint?.status}
        </Typography>
        <Typography tag="h4" bold>
          {checkpoint?.status_details}
        </Typography>
      </div>
      {checkpoint?.meta?.pickup_address_map_url && (
        <div className="map-wrapper">
          <img
            src={checkpoint.meta?.pickup_address_map_url}
            alt="Pickup Map URL"
            className="map"
          />
          <Typography tag="p" className="location">
            {checkpoint.meta?.pickup_address}
          </Typography>

          <a
            href={checkpoint.meta.pickup_address_link}
            target="_blank"
            rel="noreferrer"
            className="action"
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
