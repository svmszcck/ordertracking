import { FC, PropsWithChildren } from "react";

import Styled from "./styles";

type CardProps = {
  className?: string;
};

const Card: FC<PropsWithChildren<CardProps>> = ({ className, children }) => {
  return <Styled className={className}>{children}</Styled>;
};

export default Card;
