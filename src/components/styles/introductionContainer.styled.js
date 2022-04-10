import styled from 'styled-components'

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  position: relative;
`;