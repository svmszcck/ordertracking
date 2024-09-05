import { FC } from "react";

import { Button, Card, Input, Typography } from "components";
import Colors from "constants/colors";
import Logo from "images/logo.png";
import Styled from "./styles";
import { Warning } from ".";

type HomeViewProps = {
  signIn: () => void;
  setOrderNumber: (value: string) => void;
  setZipCode: (value: string) => void;
  orderNumber: string | undefined;
  zipCode: string | undefined;
  warning: Warning | undefined;
};

const HomeView: FC<HomeViewProps> = ({
  signIn,
  setOrderNumber,
  setZipCode,
  orderNumber,
  zipCode,
  warning,
}) => {
  return (
    <Styled>
      <div className="form-wrapper">
        <img src={Logo} width={70} alt="logo" className="logo" />
        <Card className="form">
          <div className="form-info">
            <Typography tag="h5">Track your order</Typography>
            <Typography tag="span" pale>
              Enter your order number and zip code combination to see the order
              details and shipping updates.
            </Typography>
          </div>

          <Input
            label="Order Number"
            onChange={setOrderNumber}
            value={orderNumber || ""}
            aria-invalid={Boolean(warning !== undefined)}
            ariaErrorMsg="form-warning"
            required
          />
          <Input
            label="Zip Code"
            onChange={setZipCode}
            value={zipCode || ""}
            aria-invalid={Boolean(warning !== undefined)}
            ariaErrorMsg="form-warning"
            required
          />

          {warning && (
            <Typography tag="p" className="warning" id="form-warning">
              {warning}
            </Typography>
          )}

          <hr className="divider" color={Colors.GRAY_DARK}></hr>

          <Button
            text="Track"
            onClick={signIn}
            $fullWidth
            ariaLabel="track order"
          />
        </Card>
      </div>
    </Styled>
  );
};

export default HomeView;
