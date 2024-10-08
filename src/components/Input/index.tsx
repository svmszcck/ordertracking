import { FC } from "react";

import Styled from "./styles";
import Typography from "../Typography";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  ariaErrorMsg?: string;
  tabIndex?: number;
};

const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  required,
  ariaErrorMsg,
  tabIndex,
}) => {
  return (
    <Styled>
      <Typography tag="p" className="input__label">
        {label}
      </Typography>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input__text"
        data-testid="text-input"
        aria-label={label}
        aria-required={required}
        aria-errormessage={ariaErrorMsg}
        tabIndex={tabIndex}
      />
    </Styled>
  );
};

export default Input;
