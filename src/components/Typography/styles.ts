import { ReactNode, createElement } from "react";
import styled, { css } from "styled-components";

import type { TagVariants } from ".";

type StyledProps = {
  tag: TagVariants;
  children: ReactNode;
  className?: string;
  pale?: boolean;
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
    case "pre":
      return css`
        font-family: inherit;
        white-space: pre-wrap;
        margin: 0;
      `;
    default:
      return css`
        font-size: 1rem;
      `;
  }
}

const Styled = styled(({ tag, children, className }: StyledProps) =>
  createElement(tag, { className }, children)
)`
  ${({ tag }) => parseTypographyStyle(tag)}
  font-weight: ${({ pale }) => (pale ? 100 : "inherit")}
`;

export default Styled;
