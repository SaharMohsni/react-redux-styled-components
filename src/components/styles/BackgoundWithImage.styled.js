import styled from "styled-components";

export const BackgoundWithImage = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;

  color:black
`;
