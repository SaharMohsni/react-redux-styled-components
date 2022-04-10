import { exist, isStringInArray } from "../../utils/array.helper";
import { isMatch } from "../../utils/string.helper";

export const getCocktailIngridents = (cocktail) => {
  let ingridentsArray = [];

  Object.keys(cocktail).filter((el) => {
    if (isMatch(el, "strIngredient") && cocktail[el] !== null) {
      ingridentsArray.push(cocktail[el]);
    }
  });
  return ingridentsArray;
};

export const filterCocktails = (cocktailsList, cocktailFiltersData) => {
  return cocktailsList.filter((cocktail) => {
    let ingridentsArray = getCocktailIngridents(cocktail);
    return (
    //   exist(ingridentsArray, cocktailFiltersData.ingredients) &&
      isMatch(cocktail.strCategory, cocktailFiltersData.category) &&
      isMatch(cocktail.strAlcoholic, cocktailFiltersData.alcoholicType) &&
      isMatch(cocktail.strGlass, cocktailFiltersData.glass)
    );
  });
};
