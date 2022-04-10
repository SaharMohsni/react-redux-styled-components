import styled from "styled-components";

export const WelcomeCard = styled.div`
  margin: 70px;
  width: calc(100% - 140px);
  height: calc(100vh - 140px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  justify-content: space-between;
  font-family: cursive;
  @media (min-width: 320px) and (max-width: 992px) {
    right: 0;
  }
  @media (min-width: 320px) and (max-width: 699px) {
    margin: 70px 0px 70px 70px;
    width: calc(100% - 70px);
  }
`;
