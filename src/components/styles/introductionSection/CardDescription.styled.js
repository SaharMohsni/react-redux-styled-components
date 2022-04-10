import styled from "styled-components";

export const CardDescription = styled.div`
  width: calc(60% - 240px);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 993px) and (max-width: 1660px) {
    padding: 10% 80px;
    width: calc(60% - 160px);
  }

  @media (min-width: 320px) and (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20% 20px;
    width: calc(60% - 40px);
  }
  @media (min-width: 320px) and (max-width: 699px) {
    width: 100%;
  }
`;
