import { Card } from "components";

import Status from "./Status";
import Shipment from "./Shipment";
import Article from "./Article";
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
          <Article />
        </Card>
      </div>
    </Styled>
  );
};

export default Order;
