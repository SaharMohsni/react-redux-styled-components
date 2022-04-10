import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../features/selectors/coktailBar.selectors";
import CustomizedSteppers from "./stepper/CustomStepper";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailOwnerForm from "./cocktailOwnerForm/CocktailOwnerForm";
import "./cocktailCreactionSection.scss";
import CocktailDetails from "./cocktailDetais/CocktailDetails";
import { fetchAlcoholicTypes, fetchCategories, fetchGlasses, fetchIngredients } from "../../features/actions/cocktailBar.actions";
const CocktailCreactionSection = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [validStep, setValidStep] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchGlasses());
    dispatch(fetchCategories());
    dispatch(fetchAlcoholicTypes());
  }, []);
  
  const cocktailDetailsData = [
    { label: "Ingredients", data: [] },
    { label: "Glasses", data: [] },
    { label: "Categories", data: [] },
    { label: "AlcoholicTypes", data: [] },
  ];

  const steps = [
    {
      label: "Personel information",
      content: (
        <CocktailOwnerForm setValidStep={setValidStep} userData={userData} />
      ),
    },
    {
      label: "Cocktail details",
      content:<CocktailDetails/>,
    },
    {
      label: "Overview ",
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
