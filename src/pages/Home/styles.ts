import styled from "styled-components";

import { device } from "globalStyles";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 2rem;
    position: relative;

    width: 100%;

    @media ${device.md} {
      width: 25rem;
    }

    .logo {
      position: absolute;
      border-radius: 10px;
      top: -2rem;
    }

    .form {
      padding-top: 2rem;

      .form-info {
        text-align: center;
        margin-bottom: 2rem;
      }

      .divider {
        margin: 2rem 0;
        opacity: 0.5;
      }
    }
  }
`;

export default Styled;
