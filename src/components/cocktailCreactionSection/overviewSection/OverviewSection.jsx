import React from "react";
import { convertToString } from "../../../utils/array.helper";
import { Card } from "../../styles/Card.styled";
import { CocktailNameContainer } from "../../styles/cocktailCreationSection/CocktailNameContainer.styled";
import { OverviewSectionContainer } from "../../styles/cocktailCreationSection/OverviewSectionContainer.styled";
import { ContainerWithHorizontalContent } from "../../styles/ContainerWithHorizontalContent.styled";
import { ContainerWithVerticalContent } from "../../styles/ContainerWithVerticalContent.styled";

const OverviewSection = ({ userData, cocktailFiltersData }) => {
  return (
    <OverviewSectionContainer>
      <CocktailNameContainer>
        <h1>{userData.cocktailName}</h1>
      </CocktailNameContainer>

      <ContainerWithHorizontalContent>
        <Card>
          <h3 className="title">Owner details</h3>
          <div>
            <span className="label">First name: </span>
            <span>{userData.firstName}</span>
          </div>
          <div>
            <span className="label">Last name: </span>
            <span>{userData.lastName}</span>
          </div>
          <div>
            <span className="label">Phone number: </span>
            <span>{userData.phoneNumber}</span>
          </div>
          <div>
            <span className="label">Email: </span>
            <span>{userData.email}</span>
          </div>
        </Card>
        <Card>
          <h3 className="title">Cocktail details</h3>
          <div>
            <span className="label">Ingredients: </span>
            <span>{convertToString(cocktailFiltersData.ingredients)}</span>
          </div>
          <div>
            <span className="label">Glass: </span>
            <span>{cocktailFiltersData.glass}</span>
          </div>
          <div>
            <span className="label">Category: </span>
            <span>{cocktailFiltersData.category}</span>
          </div>

          <div>
            <span className="label">Alcoholic Type: </span>
            <span>{cocktailFiltersData.alcoholicType}</span>
          </div>
        </Card>
      </ContainerWithHorizontalContent>
    </OverviewSectionContainer>
  );
};

export default OverviewSection;
