import { Card } from "components";

import Status from "./Status";
import Shipment from "./Shipment";
import Articles from "./Articles";
import Styled from "./styles";

const Order = () => {
  return (
    <Styled>
      <div className="wrapper">
        <Card className="order-card">
          <Status />
        </Card>
        <Card className="order-card">
          <Shipment />
        </Card>
        <Card className="order-card">
          <Articles />
        </Card>
      </div>
    </Styled>
  );
};

export default Order;
