import styled from "styled-components";

import { device } from "globalStyles";
import Colors from "constants/colors";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 2rem;
    position: relative;
    width: 100%;

    @media ${device.md} {
      width: 25rem;
    }
  }

  .form__logo {
    position: absolute;
    border-radius: 10px;
    top: -2rem;
  }

  .form__content {
    padding: 2rem;
  }
  .form__info {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form__warning {
    color: ${Colors.RED};
    margin-top: 2rem;
  }

  .form__divider {
    margin: 2rem 0;
    opacity: 0.5;
  }
`;

export default Styled;
