/**
 *
 * Services constants : URL
 *
 */

const URL = {
  baseApiUrl: () => "https://www.thecocktaildb.com/api/json/v1/1",
  cocktailBar: {
    fetchCocktailsList: "/search.php?s",
    fetchIngredientsList: "/list.php?i=list",
    fetchGlassesList: "/list.php?g=list",
    fetchCategoriesList: "/list.php?c=list",
    fetchAlcoholicTypesList: "/list.php?a=list",
  },
};
export default URL;
