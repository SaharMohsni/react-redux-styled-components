import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../features/selectors/coktailBar.selectors";
import CustomizedSteppers from "../../shared/components/stepper/CustomStepper";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailOwnerForm from "./cocktailOwnerForm/CocktailOwnerForm";
import "./cocktailCreactionSection.scss";
const CocktailCreactionSection = () => {
  const userData = useSelector(selectUserData);
  const [validStep, setValidStep] = React.useState(false);

  const steps = [
    {
      label: "Personel information",
      description: `Enter your data`,
      content: (
        <CocktailOwnerForm setValidStep={setValidStep} userData={userData} />
      ),
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
    <div id="cocktailCreactionSection" className="cocktail-creaction-section">
      <SectionContainer>
        <CustomizedSteppers steps={steps} validStep={validStep} />
      </SectionContainer>
    </div>
  );
};

export default CocktailCreactionSection;
