import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailCreactionSection from "../components/cocktailCreactionSection/CocktailCreactionSection";
import FiltredCocktailListSection from "../components/filtredCocktailListSection/FiltredCocktailListSection";
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
  selectFiltredCocktailList,
  selectGlassesList,
  selectIngredientsList,
  selectUserData,
} from "../features/selectors/coktailBar.selectors";
import CustomDialog from "../shared/components/CustomDialog";
import { isStringOrArrayEmpty } from "../utils/isEmpty";
const Home = () => {
  const dispatch = useDispatch();

  // Data Selectors
  const userData = useSelector(selectUserData);
  const cocktailFiltersData = useSelector(selectCocktailFiltersData);
  const ingredientsList = useSelector(selectIngredientsList);
  const glassesList = useSelector(selectGlassesList);
  const categoriesList = useSelector(selectCategoriesList);
  const alcoholicTypesList = useSelector(selectAlcoholicTypesList);
  const filtredCocktailList = useSelector(selectFiltredCocktailList);

  const filtredCocktailListRef = React.useRef(null);

  //Local State
  const [filterIsCreated, setfilterIsCreated] = React.useState(false);
  const [emptyDialogOpen, setEmptyDialogOpen] = React.useState(false);

  // Fetch APIs
  React.useEffect(() => {
    dispatch(fetchCocktails());
    dispatch(fetchIngredients());
    dispatch(fetchGlasses());
    dispatch(fetchCategories());
    dispatch(fetchAlcoholicTypes());
  }, []);

  const scrollToElement = () => filtredCocktailListRef.current.scrollIntoView();
  // Set cocktail list after filter
  React.useEffect(() => {
    if (filterIsCreated) {
      dispatch(setFiltredCocktailList());
    }
    if (filterIsCreated && isStringOrArrayEmpty(filtredCocktailList)) {
      setEmptyDialogOpen(true);
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
      {filterIsCreated && !isStringOrArrayEmpty(filtredCocktailList) && (
        <FiltredCocktailListSection
          filtredCocktailList={filtredCocktailList}
          filtredCocktailListRef={filtredCocktailListRef}
        />
      )}
      <CustomDialog open={emptyDialogOpen} setOpen={setEmptyDialogOpen} />
      <Footer />
    </div>
  );
};

export default Home;
