import styled from "styled-components";

import Colors from "constants/colors";

const Styled = styled.div`
  padding: 2rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;

    .title {
      color: ${Colors.PRIMARY};
    }

    .vector {
      max-height: 20rem;
      margin-top: 2rem;
    }

    .navigate {
      margin-top: 2rem;
    }
  }
`;

export default Styled;
