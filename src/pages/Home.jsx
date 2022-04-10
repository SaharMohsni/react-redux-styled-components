import React from 'react'
import CocktailCreactionSection from '../components/cocktailCreactionSection/CocktailCreactionSection';
import IntroductionSection from "../components/introductionSection/IntroductionSection";
const Home = ()=> {
  return (
    <div className='home' >
      <IntroductionSection />
      <CocktailCreactionSection/>
    </div>
  );
}

export default Home;
