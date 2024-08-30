import { FC } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Input, Typography } from "components";
import Colors from "constants/colors";
import { Routes } from "Router";
import Logo from "images/logo.png";
import Styled from "./styles";

type HomeViewProps = {
  signIn: () => void;
  setOrderNumber: (value: string) => void;
  setZipCode: (value: string) => void;
};

const HomeView: FC<HomeViewProps> = ({
  signIn,
  setOrderNumber,
  setZipCode,
}) => {
  return (
    <Styled>
      <div className="form-wrapper">
        <img src={Logo} width={70} alt="logo" className="logo" />
        <Card className="form">
          <div className="form-info">
            <Typography tag="h5">Track your order</Typography>
            <Typography tag="span" className="">
              Enter your order number and zip code combination to see the order
              details and shipping updates.
            </Typography>
          </div>

          <Input label="Order Number" onChange={setOrderNumber} />
          <Input label="Zip Code" onChange={setZipCode} />

          <hr className="divider" color={Colors.GRAY_DARK}></hr>

          <Button text="Track" onClick={signIn} $fullWidth />
        </Card>
      </div>
    </Styled>
  );
};

export default HomeView;
