import { FC } from "react";

import { Button, Image, Typography } from "components";
import Cat from "images/cat.png";
import Styled from "./styles";

type ErrorUIProps = {
  targetRoute?: string;
};

const ErrorUI: FC<ErrorUIProps> = ({ targetRoute = "/" }) => {
  return (
    <Styled>
      <div className="error">
        <Typography tag="h4" className="error__title" bold>
          Somehing is wrong, please try again...
        </Typography>
        <Image src={Cat} className="error__vector" />
        <Button
          text="Go to Home"
          className="error__navigate"
          onClick={() => (window.location.href = targetRoute)}
          ariaLabel="go to home"
        />
      </div>
    </Styled>
  );
};

export default ErrorUI;
