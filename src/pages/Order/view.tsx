import { Card } from "components";

import Status from "./Status";
import Shipment from "./Shipment";
import Articles from "./Articles";
import Styled from "./styles";

const Order = () => {
  return (
    <Styled>
      <div className="order">
        <Card className="order__card">
          <Status />
        </Card>
        <Card className="order__card">
          <Shipment />
        </Card>
        <Card className="order__card">
          <Articles />
        </Card>
      </div>
    </Styled>
  );
};

export default Order;
