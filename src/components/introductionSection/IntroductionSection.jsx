import React from 'react'
import { Button } from "../styles/Button.styled";
import { CardDescription } from "../styles/CardDescription.styled";
import { Container } from "../styles/Container.styled";
import { Title } from "../styles/Title.styled";
import { WelcomeCard } from "../styles/WelcomeCard.styled";
import cocktailBarBackground from "../../assets/images/cocktail-bar-background.jpg";

const IntroductionSection = () => {
  return (
    <Container backgroundImage={cocktailBarBackground}>
      <WelcomeCard>
        <div></div>
        <CardDescription>
          <h2 className="home__introduction-title">Join us</h2>
          <Title>Cocktail Bar</Title>
          <Button>Create your cocktail</Button>
        </CardDescription>
      </WelcomeCard>
    </Container>
  );
}

export default IntroductionSection;
