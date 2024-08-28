import styled from "styled-components";

import Colors from "constants/colors";

const Styled = styled.div`
  display: flex;
  flex-direction: column;

  .label {
    font-weight: bold;
  }

  input[type="text"] {
    background-color: ${Colors.GRAY};
    border-radius: 10px;
    border: 2px solid ${Colors.GRAY_DARK};
    padding: 1rem;
  }
`;

export default Styled;
