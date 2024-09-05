import { ReactNode, createElement } from "react";
import styled, { css } from "styled-components";

import type { TagVariants } from ".";

type StyledProps = {
  tag: TagVariants;
  children: ReactNode;
  id?: string;
  className?: string;
  pale?: boolean;
  bold?: boolean;
};

function parseTypographyStyle(tag: TagVariants) {
  switch (tag) {
    case "p":
      return css`
        font-size: 1rem;
      `;
    case "h1":
      return css`
        font-size: 2rem;
      `;
    case "h2":
      return css`
        font-size: 1.8rem;
      `;
    case "h3":
      return css`
        font-size: 1.6rem;
      `;
    case "h4":
      return css`
        font-size: 1.4rem;
      `;
    case "h5":
      return css`
        font-size: 1.2rem;
      `;
    case "h6":
      return css`
        font-size: 1rem;
      `;
    default:
      return css`
        font-size: 1rem;
      `;
  }
}

const Styled = styled(({ tag, children, id, className }: StyledProps) =>
  createElement(tag, { id, className }, children)
)`
  ${({ tag }) => parseTypographyStyle(tag)}
  font-weight: ${({ bold }) => (bold ? 500 : "inherit")};
  opacity: ${({ pale }) => (pale ? 0.5 : "inherit")};
`;

export default Styled;
