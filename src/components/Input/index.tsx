import { FC } from "react";

import Styled from "./styles";
import Typography from "../Typography";

type InputProps = {
  label: string;
  onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({ label, onChange }) => {
  return (
    <Styled>
      <Typography tag="p" className="label">
        {label}
      </Typography>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        data-testid="text-input"
      />
    </Styled>
  );
};

export default Input;
