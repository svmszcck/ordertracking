import styled from "styled-components";

import { device, subInfo } from "globalStyles";
import Colors from "constants/colors";

const Styled = styled.div`
  padding: 0 2rem 2rem 2rem;

  .order {
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
  }

  .order__card {
    max-height: 38rem;
    overflow-y: auto;
  }

  .order__title {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  // Order Status Styles
  .order__status {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .order__status-info {
    padding: 2rem;
  }

  .order__map {
    position: relative;
    margin-top: auto;
  }

  .order__map-content {
    width: 100%;
  }

  .order__map-location {
    position: absolute;
    max-width: 10rem;
    top: 0;
    right: 1rem;
    font-weight: bold;
    font-size: 0.8rem;
    word-break: break-all;
  }

  .order__map-action {
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

    &:focus-visible {
      background-color: ${Colors.SECONDARY};
      color: ${Colors.BLACK};
      outline-color: transparent;
      text-decoration: underline;
    }
  }

  // Order Shipment Styles
  .order__shipment {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .order__checkpoint {
    margin-bottom: 2rem;

    p {
      margin: 0.5rem 0;
    }
  }

  .order__checkpoint-footer {
    ${subInfo}
  }

  // Order Article Styles

  .order__articles {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .order__article {
    display: flex;
    margin-bottom: 1rem;
  }

  .order__article-info {
    p {
      margin: 0 0 0.3rem 0;
    }
  }

  .order__article-img {
    width: 5em;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 5px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Styled;
