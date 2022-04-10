import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailCreactionSection from "../components/cocktailCreactionSection/CocktailCreactionSection";
import Footer from "../components/footer/Footer";
import IntroductionSection from "../components/introductionSection/IntroductionSection";
import {
  fetchAlcoholicTypes,
  fetchCategories,
  fetchCocktails,
  fetchGlasses,
  fetchIngredients,
  setFiltredCocktailList,
} from "../features/actions/cocktailBar.actions";
import {
  selectAlcoholicTypesList,
  selectCategoriesList,
  selectCocktailFiltersData,
  selectGlassesList,
  selectIngredientsList,
  selectUserData,
} from "../features/selectors/coktailBar.selectors";
const Home = () => {
  const dispatch = useDispatch();
  // Data Selectors
  const userData = useSelector(selectUserData);
  const cocktailFiltersData = useSelector(selectCocktailFiltersData);
  const ingredientsList = useSelector(selectIngredientsList);
  const glassesList = useSelector(selectGlassesList);
  const categoriesList = useSelector(selectCategoriesList);
  const alcoholicTypesList = useSelector(selectAlcoholicTypesList);
  const [filterIsCreated, setfilterIsCreated] = React.useState(false);
  // Fetch APIs
  React.useEffect(() => {
    dispatch(fetchCocktails());
    dispatch(fetchIngredients());
    dispatch(fetchGlasses());
    dispatch(fetchCategories());
    dispatch(fetchAlcoholicTypes());
  }, []);

  // Set cocktail list after filter
  React.useEffect(() => {
    if (filterIsCreated) {
      dispatch(setFiltredCocktailList());
    }
  }, [filterIsCreated, cocktailFiltersData]);

  return (
    <div className="home">
      <IntroductionSection />
      <CocktailCreactionSection
        setfilterIsCreated={setfilterIsCreated}
        userData={userData}
        cocktailFiltersData={cocktailFiltersData}
        ingredientsList={ingredientsList}
        glassesList={glassesList}
        categoriesList={categoriesList}
        alcoholicTypesList={alcoholicTypesList}
      />
      <Footer />
    </div>
  );
};

export default Home;
