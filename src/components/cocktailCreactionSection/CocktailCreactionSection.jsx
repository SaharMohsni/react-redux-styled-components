import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAlcoholicTypesList,
  selectCategoriesList,
  selectCocktailFiltersData,
  selectGlassesList,
  selectIngredientsList,
  selectUserData,
} from "../../features/selectors/coktailBar.selectors";
import CustomizedSteppers from "./stepper/CustomStepper";
import { SectionContainer } from "../styles/SectionContainer.styled";
import CocktailOwnerForm from "./cocktailOwnerForm/CocktailOwnerForm";
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
  const cocktailFiltersData = useSelector(selectCocktailFiltersData);
  const ingredientsList = useSelector(selectIngredientsList);
  const glassesList = useSelector(selectGlassesList);
  const categoriesList = useSelector(selectCategoriesList);
  const alcoholicTypesList = useSelector(selectAlcoholicTypesList);

  const dispatch = useDispatch();
  const [validStep, setValidStep] = React.useState(false);
  const [cocktailDetailsData, setCocktailDetailsData] = React.useState([]);

  // Fetch APIs
  React.useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchGlasses());
    dispatch(fetchCategories());
    dispatch(fetchAlcoholicTypes());
  }, []);


  // Create cocktail details array
  React.useEffect(() => {
    setCocktailDetailsData([
      { isMultiple:true, label: "Ingredients", data: convertKeyValue(ingredientsList) },
      { label: "Glasses", data: convertKeyValue(glassesList) },
      { label: "Categories", data: convertKeyValue(categoriesList) },
      { label: "AlcoholicTypes", data: convertKeyValue(alcoholicTypesList) },
    ]);
  }, [ingredientsList, glassesList, categoriesList, alcoholicTypesList]);


  // Stepper steps data
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
      content: "",
    },
  ];
  return (
    <div id="cocktailCreactionSection" className="cocktail-creaction-section">
      <SectionContainer>
        <CustomizedSteppers steps={steps} validStep={validStep} setValidStep ={setValidStep}/>
      </SectionContainer>
    </div>
  );
};

export default CocktailCreactionSection;
