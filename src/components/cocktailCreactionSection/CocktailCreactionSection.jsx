import React from "react";

import CustomizedSteppers from "./stepper/CustomStepper";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailOwnerForm from "./cocktailOwnerForm/CocktailOwnerForm";
import CocktailDetails from "./cocktailDetais/CocktailDetails";

import { convertKeyValue } from "../../utils/array.helper";
import OverviewSection from "./overviewSection/OverviewSection";
const CocktailCreactionSection = ({
  setfilterIsCreated,
  userData,
  cocktailFiltersData,
  ingredientsList,
  glassesList,
  categoriesList,
  alcoholicTypesList,
}) => {
  const [validStep, setValidStep] = React.useState(false);
  const [cocktailDetailsData, setCocktailDetailsData] = React.useState([]);

  // Create cocktail details array
  React.useEffect(() => {
    setCocktailDetailsData([
      {
        isMultiple: true,
        label: "Ingredients",
        key: "ingredients",
        data: convertKeyValue(ingredientsList),
      },
      {
        label: "Glass",
        key: "glass",
        data: convertKeyValue(glassesList),
      },
      {
        label: "Category",
        key: "category",
        data: convertKeyValue(categoriesList),
      },
      {
        label: "Alcoholic Types",
        key: "alcoholicType",
        data: convertKeyValue(alcoholicTypesList),
      },
    ]);
  }, [ingredientsList, glassesList, categoriesList, alcoholicTypesList]);

  // Cocktail creation steps data
  const steps = [
    {
      label: "Personel information",
      content: (
        <CocktailOwnerForm setValidStep={setValidStep} userData={userData} />
      ),
    },
    {
      label: "Cocktail details",
      content: (
        <CocktailDetails
          cocktailDetailsData={cocktailDetailsData}
          setValidStep={setValidStep}
          cocktailFiltersData={cocktailFiltersData}
        />
      ),
    },
    {
      label: "Overview ",
      content: (
        <OverviewSection
          userData={userData}
          cocktailFiltersData={cocktailFiltersData}
        />
      ),
    },
  ];
  return (
    <div id="cocktailCreactionSection" className="cocktail-creaction-section">
      <SectionContainer>
        <CustomizedSteppers
          steps={steps}
          validStep={validStep}
          setValidStep={setValidStep}
          setfilterIsCreated={setfilterIsCreated}
        />
      </SectionContainer>
    </div>
  );
};

export default CocktailCreactionSection;
