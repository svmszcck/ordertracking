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
      <div className="form">
        <img src={Logo} width={70} alt="logo" className="form__logo" />
        <Card className="form__content">
          <div className="form__info">
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
            tabIndex={1}
            required
          />
          <Input
            label="Zip Code"
            onChange={setZipCode}
            value={zipCode || ""}
            aria-invalid={Boolean(warning !== undefined)}
            ariaErrorMsg="form-warning"
            tabIndex={2}
            required
          />

          {warning && (
            <Typography tag="p" className="form__warning" id="form-warning">
              {warning}
            </Typography>
          )}

          <hr className="form__divider" color={Colors.GRAY_DARK}></hr>

          <Button
            text="Track"
            onClick={signIn}
            $fullWidth
            ariaLabel="track order"
            tabIndex={3}
          />
        </Card>
      </div>
    </Styled>
  );
};

export default HomeView;
