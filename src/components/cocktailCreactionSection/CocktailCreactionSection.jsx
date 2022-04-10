import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import CustomizedSteppers from "../../shared/components/stepper/CustomStepper";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailOwnerForm from "./cocktailOwnerForm/CocktailOwnerForm";
const CocktailCreactionSection = () => {

    const steps = [
      {
        label: "Personel information",
        description: `Enter your data`,
        content: <CocktailOwnerForm />,
      },
      {
        label: "Cocktail details",
        description: "Choose your selection",
        content: "",
      },
      {
        label: "Overview ",
        description: `Choosed and entered data`,
        content: "",
      },
    ];
  return (
    <div id="cocktailCreactionSection">
      <SectionContainer>
        <CustomizedSteppers steps={steps} />
      </SectionContainer>
    </div>
  );
};

export default CocktailCreactionSection;
