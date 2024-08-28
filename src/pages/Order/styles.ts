import styled from "styled-components";

import { device } from "globalStyles";

const Styled = styled.div`
  padding: 0 2rem 2rem 2rem;

  .top-section {
    display: flex;
    align-items: center;

    .sign-out {
      margin-left: auto;
    }
  }

  .wrapper {
    display: grid;
    margin-top: 3rem;
    grid-gap: 1.5rem;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    grid-template-columns: repeat(1, 1fr);

    @media ${device.md} {
      grid-template-columns: repeat(3, 1fr);
    }

    .title {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .progress {
      width: 100%;
      height: 1.5rem;
    }

    .article {
      display: flex;

      .article-img {
        width: 5em;
        height: 4rem;
        margin-right: 1rem;
      }

      .article-info {
        p {
          margin: 0 0 0.3rem 0;
        }
      }
    }
  }
`;

export default Styled;
