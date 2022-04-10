import React from 'react'
import { Button } from "../styles/Button.styled";
import { CardDescription } from "../styles/introductionSection/CardDescription.styled";
import { IntroductionContainer } from "../styles/introductionSection/IntroductionContainer.styled";
import { Link as ScrollLink } from "react-scroll";
import { Title } from "../styles/introductionSection/Title.styled";
import { WelcomeCard } from "../styles/introductionSection/WelcomeCard.styled";
import cocktailBarBackground from "../../assets/images/cocktail-bar-background.jpg";
// import "./introductionSection.scss";
const IntroductionSection = () => {
  return (
    <IntroductionContainer backgroundImage={cocktailBarBackground}>
      <WelcomeCard>
        <div></div>
        <CardDescription>
          <h2 className="introduction-section__introduction-title">Join us</h2>
          <Title>Cocktail Bar</Title>
          <ScrollLink
            to={"cocktailCreactionSection"}
            smooth={true}
            duration={1500}
            className="introduction-section__scroll-link"
          >
            <Button>Create your cocktail</Button>
          </ScrollLink>
        </CardDescription>
      </WelcomeCard>
    </IntroductionContainer>
  );
}

export default IntroductionSection;
