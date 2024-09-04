import { FC } from "react";

import Styled from "./styles";
import Typography from "../Typography";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const Input: FC<InputProps> = ({ label, value, onChange, required }) => {
  return (
    <Styled>
      <Typography tag="p" className="label">
        {label}
      </Typography>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid="text-input"
        aria-label={label}
        aria-required={required}
      />
    </Styled>
  );
};

export default Input;
