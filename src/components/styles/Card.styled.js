import styled from "styled-components";

export const Card = styled.div`
  width: 50%;
  font-size: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 992px) {
    justify-content: flex-start;
  }
  h3 {
    font-weigth: bold;
  }
  .title {
    text-decoration: underline;
  }
  .label {
    font-weight: 700;
  }
`;
