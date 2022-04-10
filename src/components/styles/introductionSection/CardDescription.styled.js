import styled from "styled-components";

export const CardDescription = styled.div`
  width: calc(60% - 160px);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30%;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
  @media (min-width: 993px) and (max-width: 1366px) {
    padding: 30% 80px;
  }
  @media (min-width: 320px) and (max-width: 992px) {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 50% 20px;
  }
`;
