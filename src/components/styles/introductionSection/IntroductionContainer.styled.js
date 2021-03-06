import styled from 'styled-components'

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  position: relative;
  .introduction-section__scroll-link {
    display: flex;
    justify-content: flex-end;
    @media (min-width: 320px) and (max-width: 992px) {
      justify-content: flex-start;
    }
  }
`;