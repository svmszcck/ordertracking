import { useContext } from "react";

import { progress, parseDate } from "utils/data";
import { Order } from "services/types/Order";
import { Button, Progress, Typography } from "components";
import { usePagination } from "hooks/usePagination";
import { OrderContext } from "contexts/orderContext";

const Shipment = () => {
  const { order } = useContext(OrderContext);
  const { loadMore, paginatedData } = usePagination(order?.checkpoints, 3);

  return order ? (
    <div className="shipment">
      <Typography tag="h5" className="title" bold>
        Shipping updates
      </Typography>
      <Progress
        value={progress((paginatedData as Order["checkpoints"])[0].status)}
        startText="Processed"
        endText="Delivered"
        ariaLabel="Order Delivery Progress"
      />

      {(paginatedData as Order["checkpoints"]).map((checkpoint) => (
        <div className="checkpoint" key={checkpoint.event_timestamp}>
          <Typography tag="p">{checkpoint.status}</Typography>
          <Typography tag="p" pale>
            {checkpoint.status_details}
          </Typography>
          <div className="checkpoint-footer">
            <Typography tag="span" pale bold>
              {checkpoint.city}
            </Typography>

            <Typography tag="span" pale bold>
              {parseDate(checkpoint.event_timestamp)}
            </Typography>
          </div>
        </div>
      ))}

      {paginatedData.length < order.checkpoints.length && (
        <Button
          onClick={loadMore}
          className="load-more"
          text="More"
          variant="plain"
          ariaLabel="load more"
        />
      )}
    </div>
  ) : (
    <div>There is no data!</div>
  );
};

export default Shipment;
