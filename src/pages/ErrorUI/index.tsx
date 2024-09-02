import { Button, Image, Typography } from "components";
import { Routes } from "Router";
import Cat from "images/cat.png";
import Styled from "./styles";

const ErrorUI = () => {
  return (
    <Styled>
      <div className="wrapper">
        <Typography tag="h4" className="title" bold>
          Somehing is wrong, please try again...
        </Typography>
        <Image src={Cat} className="vector" />
        <Button
          text="Go to Home"
          className="navigate"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </Styled>
  );
};

export default ErrorUI;
