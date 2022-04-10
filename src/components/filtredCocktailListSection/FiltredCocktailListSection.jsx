import React from "react";
import { TitleContiner } from "../styles/cocktailListSection/TitleContiner.styled";
import { SectionBackgroundColor } from "../styles/SectionBackgroundColor.styled";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailCard from "./cocktailCard/CocktailCard";

const FiltredCocktailListSection = ({ filtredCocktailList }) => {
  return (
    <div id="filtred-cocktail-list-section">
      <SectionBackgroundColor color="226, 229, 231 ">
        <SectionContainer>
          <TitleContiner>Cocktail List combination</TitleContiner>
          {filtredCocktailList.map((cocktail) => (
            <CocktailCard cocktail={cocktail} />
          ))}
        </SectionContainer>
      </SectionBackgroundColor>
    </div>
  );
};

export default FiltredCocktailListSection;
