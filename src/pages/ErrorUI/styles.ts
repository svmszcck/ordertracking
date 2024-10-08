import styled from "styled-components";

import Colors from "constants/colors";

const Styled = styled.div`
  padding: 2rem;

  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
  }

  .error__title {
    color: ${Colors.PRIMARY};
  }

  .error__vector {
    max-height: 20rem;
    margin-top: 2rem;
  }

  .error__navigate {
    margin-top: 2rem;
  }
`;

export default Styled;
