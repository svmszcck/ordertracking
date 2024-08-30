import styled from "styled-components";

import { device, subInfo } from "globalStyles";
import Colors from "constants/colors";

const Styled = styled.div`
  padding: 0 2rem 2rem 2rem;

  .wrapper {
    display: grid;
    margin-top: 3rem;
    grid-gap: 1.5rem;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    grid-template-columns: repeat(1, 1fr);

    @media ${device.sm} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.lg} {
      grid-template-columns: repeat(3, 1fr);
    }

    .order-card {
      max-height: 38rem;
      overflow-y: auto;

      .title {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .status {
        display: flex;
        flex-direction: column;
        height: 100%;

        .info {
          padding: 2rem;
        }

        .map-wrapper {
          position: relative;
          margin-top: auto;

          .map {
            width: 100%;
          }

          .location {
            position: absolute;
            max-width: 10rem;
            top: 0;
            right: 1rem;
            font-weight: bold;
            font-size: 0.8rem;
            word-break: break-all;
          }

          .action {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            background-color: ${Colors.PRIMARY};
            color: ${Colors.WHITE};
            text-decoration: none;

            &:hover {
              opacity: 0.9;
            }

            &:focus {
              background-color: ${Colors.SECONDARY};
              color: ${Colors.BLACK};
              outline-color: transparent;
              text-decoration: underline;
            }
          }
        }
      }

      .shipment {
        display: flex;
        flex-direction: column;
        padding: 2rem;

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

        .checkpoint {
          margin-bottom: 2rem;

          p {
            margin: 0.5rem 0;
          }

          .checkpoint-footer {
            ${subInfo}
          }
        }
      }

      .articles {
        padding: 2rem;

        .article {
          display: flex;
          margin-bottom: 1rem;

          .article-img {
            width: 5em;
            height: 4rem;
            margin-right: 1rem;
            border-radius: 5px;

            &:hover {
              opacity: 0.7;
            }
          }

          .article-info {
            p {
              margin: 0 0 0.3rem 0;
            }
          }
        }
      }
    }
  }
`;

export default Styled;
