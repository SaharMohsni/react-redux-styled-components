import styled from "styled-components";

export const Title = styled.div`
  font-size: 115px;
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 1366px) and (max-width: 1660px) {
    font-size: 100px;
  }
  @media (min-width: 993px) and (max-width: 1366px) {
    font-size: 50px;
  }
  @media (min-width: 320px) and (max-width: 992px) {
    font-size: 30px;
  }
`;
