import React, { MouseEventHandler } from "react";

import Styled from "./styles";

export type ButtonVariants = "primary" | "outline" | "plain";

type ButtonProps = {
  variant?: ButtonVariants;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  $fullWidth?: boolean;
  ariaLabel?: string;
};

const Button = ({
  variant,
  className,
  onClick,
  text,
  $fullWidth,
  ariaLabel,
}: ButtonProps) => {
  return (
    <Styled
      variant={variant}
      className={className}
      onClick={onClick}
      data-testid="custom-button"
      aria-label={ariaLabel}
      $fullWidth={$fullWidth}
    >
      <span>{text}</span>
    </Styled>
  );
};

export default Button;
