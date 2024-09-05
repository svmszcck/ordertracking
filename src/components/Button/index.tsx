import React, { MouseEventHandler } from "react";

import Styled from "./styles";

export type ButtonVariants = "primary" | "outline" | "plain";

type ButtonProps = {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  variant?: ButtonVariants;
  $fullWidth?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
};

const Button = ({
  variant,
  className,
  onClick,
  text,
  $fullWidth,
  ariaLabel,
  tabIndex,
}: ButtonProps) => {
  return (
    <Styled
      variant={variant}
      className={className}
      onClick={onClick}
      data-testid="custom-button"
      aria-label={ariaLabel}
      $fullWidth={$fullWidth}
      tabIndex={tabIndex}
    >
      <span>{text}</span>
    </Styled>
  );
};

export default Button;
