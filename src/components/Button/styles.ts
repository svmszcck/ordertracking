import styled, { css } from "styled-components";

import Colors from "constants/colors";
import { ButtonVariants } from ".";

type StyledProps = {
  variant?: ButtonVariants;
  fullWidth?: boolean;
};

const parseButtonStyle = (variant?: ButtonVariants) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${Colors.PRIMARY};
        color: ${Colors.WHITE};
      `;
    case "outline":
      return css`
        color: ${Colors.PRIMARY};
        background-color: transparent;
        border: 2px solid ${Colors.PRIMARY};

        &:hover {
          background-color: ${Colors.PRIMARY};
          color: ${Colors.WHITE};
        }
      `;
    default:
      return css`
        background-color: ${Colors.PRIMARY};
        color: ${Colors.WHITE};
      `;
  }
};

const Styled = styled.button<StyledProps>`
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 2.5rem;
  border: none;
  border-radius: 8px;
  ${(props) => parseButtonStyle(props.variant)}
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default Styled;
