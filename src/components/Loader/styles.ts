import styled from "styled-components";

import { device } from "globalStyles";

const Styled = styled.div`
  padding: 5rem;

  @media ${device.sm} {
    .loader {
      height: 20rem;
    }
  }
`;

export default Styled;
