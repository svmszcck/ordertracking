import { Card, Typography } from "components";

import Status from "./Status";
import Shipment from "./Shipment";
import Article from "./Article";
import Styled from "./styles";

const Order = () => {
  return (
    <Styled>
      <div className="wrapper">
        <Card>
          <Typography tag="h2" className="title">
            Ready for collection
          </Typography>

          <Typography tag="h5">
            The goods will be ready for collection on the next working day.
          </Typography>

          <Status />
        </Card>
        <Card>
          <Typography tag="h5" className="title">
            Shipping updates
          </Typography>

          <Shipment />
        </Card>
        <Card>
          <Typography tag="h5" className="title">
            Articles
          </Typography>
          <Article />
        </Card>
      </div>
    </Styled>
  );
};

export default Order;
