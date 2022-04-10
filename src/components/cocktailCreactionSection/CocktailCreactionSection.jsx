import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAlcoholicTypesList,
  selectCategoriesList,
  selectGlassesList,
  selectIngredientsList,
  selectUserData,
} from "../../features/selectors/coktailBar.selectors";
import CustomizedSteppers from "./stepper/CustomStepper";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailOwnerForm from "./cocktailOwnerForm/CocktailOwnerForm";
import "./cocktailCreactionSection.scss";
import CocktailDetails from "./cocktailDetais/CocktailDetails";
import {
  fetchAlcoholicTypes,
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
} from "../../features/actions/cocktailBar.actions";
import { convertKeyValue } from "../../utils/array.helper";
const CocktailCreactionSection = () => {
  // Data Selectors
  const userData = useSelector(selectUserData);
  const ingredientsList = useSelector(selectIngredientsList);
  const glassesList = useSelector(selectGlassesList);
  const categoriesList = useSelector(selectCategoriesList);
  const alcoholicTypesList = useSelector(selectAlcoholicTypesList);

  const dispatch = useDispatch();
  const [validStep, setValidStep] = React.useState(false);
  const [cocktailDetailsData, setCocktailDetailsData] = React.useState([]);

  React.useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchGlasses());
    dispatch(fetchCategories());
    dispatch(fetchAlcoholicTypes());
  }, []);

  React.useEffect(() => {
    setCocktailDetailsData([
      { label: "Ingredients", data: convertKeyValue(ingredientsList) },
      { label: "Glasses", data: convertKeyValue(glassesList) },
      { label: "Categories", data: convertKeyValue(categoriesList) },
      { label: "AlcoholicTypes", data: convertKeyValue(alcoholicTypesList) },
    ]);
  }, [ingredientsList, glassesList, categoriesList, alcoholicTypesList]);

  const steps = [
    {
      label: "Personel information",
      content: (
        <CocktailOwnerForm setValidStep={setValidStep} userData={userData} />
      ),
    },
    {
      label: "Cocktail details",
      content: <CocktailDetails cocktailDetailsData={cocktailDetailsData} />,
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
