import { FC } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Input, Typography } from "components";
import Colors from "constants/colors";
import { Routes } from "Router";
import Logo from "images/logo.png";
import Styled from "./styles";

type HomeViewProps = {
  signIn: () => void;
};

const HomeView: FC<HomeViewProps> = ({ signIn }) => {
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

          <Input label="Order Number" />
          <Input label="Zip Code" />

          <hr className="divider" color={Colors.GRAY_DARK}></hr>

          <Link className="link-1" to={`${Routes.Order}/123`}>
            <Button text="Track" onClick={signIn} fullWidth />
          </Link>
        </Card>
      </div>
    </Styled>
  );
};

export default HomeView;
