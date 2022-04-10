import React from 'react'
import CocktailCreactionSection from '../components/cocktailCreactionSection/CocktailCreactionSection';
import Footer from '../components/footer/Footer';
import IntroductionSection from "../components/introductionSection/IntroductionSection";
const Home = ()=> {
  return (
    <div className='home' >
      <IntroductionSection />
      <CocktailCreactionSection/>
      <Footer/>
    </div>
  );
}

export default Home;
