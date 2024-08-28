import React, { ReactNode, CSSProperties } from "react";

import Styled from "./styles";

export type TagVariants =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "pre";

type TypographyProps = {
  tag?: TagVariants;
  className?: string;
  children: ReactNode;
  pale?: boolean;
};

const Typography = ({
  tag = "p",
  className,
  children,
  pale,
  ...props
}: TypographyProps & CSSProperties) => {
  return (
    <Styled
      tag={tag}
      className={className}
      pale={pale}
      data-testid="typography"
    >
      {children}
    </Styled>
  );
};

export default Typography;
