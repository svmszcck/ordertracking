import { FC } from "react";

import Styled from "./styles";
import Typography from "../Typography";

type InputProps = {
  label: string;
};

const Input: FC<InputProps> = ({ label }) => {
  return (
    <Styled>
      <Typography tag="p" className="label">
        {label}
      </Typography>
      <input type="text" />
    </Styled>
  );
};

export default Input;
