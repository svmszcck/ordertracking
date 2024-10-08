import styled from "styled-components";

import Colors from "constants/colors";

const Styled = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 10px;
  -webkit-box-shadow: 0px 3px 5px 0px ${Colors.GRAY_DARKER};
  -moz-box-shadow: 0px 3px 5px 0px ${Colors.GRAY_DARKER};
  box-shadow: 0px 3px 5px 0px ${Colors.GRAY_DARKER};
`;

export default Styled;
