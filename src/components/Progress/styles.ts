import styled from "styled-components";

import Colors from "constants/colors";
import { subInfo } from "globalStyles";

const Styled = styled.div`
  .progress {
    width: 100%;
    height: 1.5rem;
    accent-color: ${Colors.PRIMARY};
  }

  .progress-footer {
    ${subInfo}
    margin-top: -0.8rem;
    opacity: 0.5;
  }
`;

export default Styled;
