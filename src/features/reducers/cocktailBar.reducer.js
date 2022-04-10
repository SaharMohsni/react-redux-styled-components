/* eslint-disable no-case-declarations */
/*
 *
 * Cocktail bar reducer
 *
 */
import produce from "immer";
import ActionTypes from "../constants/cocktailBar.constants";

const initialLocal = {
  loading: {
    fetchCocktailsLoading: false,
    fetchIngredientsLoading: false,
    fetchGlassesLoading: false,
    fetchCategoriesLoading: false,
    fetchAlcoholicTypesLoading: false,
  },
  errors: {
    fetchCocktailsErrors: "",
    fetchIngredientsErrors: "",
    fetchGlassesErrors: "",
    fetchCategoriesErrors: "",
    fetchAlcoholicTypesErrors: "",
  },
};

export const initialState = {
  local: initialLocal,
  data: {
    userData: {},
    cocktailsList: [],
    ingredientsList: [],
    glassesList: [],
    CategoriesList: [],
    alcoholicTypesList: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const cocktailBarReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //Set user data
      case ActionTypes.SET_USER_DATA.success:
        draft.data.userData = action.payload;
        break;

      //Fetch Cocktails list
      case ActionTypes.FETCH_COCKTAILS.request:
        draft.local.loading.fetchCocktailsLoading = true;
        draft.local.errors.fetchCocktailsErrors = "";
        break;
      case ActionTypes.FETCH_COCKTAILS.success:
        draft.local.loading.fetchCocktailsLoading = false;
        draft.data.cocktailsList = action.data;
        break;
      case ActionTypes.FETCH_COCKTAILS.failure:
        draft.local.loading.fetchCocktailsLoading = false;
        draft.local.errors.fetchCocktailsErrors = action.e.response.data.error;
        break;

      //Fetch Ingredients list
      case ActionTypes.FETCH_INGREDIENTS.request:
        draft.local.loading.fetchIngredientsLoading = true;
        draft.local.errors.fetchIngredientsErrors = "";
        break;
      case ActionTypes.FETCH_INGREDIENTS.success:
        draft.local.loading.fetchIngredientsLoading = false;
        draft.data.ingredientsList = action.data;
        break;
      case ActionTypes.FETCH_INGREDIENTS.failure:
        draft.local.loading.fetchIngredientsLoading = false;
        draft.local.errors.fetchIngredientsErrors =
          action.e.response.data.error;
        break;

      //Fetch Glasses list
      case ActionTypes.FETCH_GLASSES.request:
        draft.local.loading.fetchGlassesLoading = true;
        draft.local.errors.fetchGlassesErrors = "";
        break;
      case ActionTypes.FETCH_GLASSES.success:
        draft.local.loading.fetchGlassesLoading = false;
        draft.data.glassesList = action.data;
        break;
      case ActionTypes.FETCH_GLASSES.failure:
        draft.local.loading.fetchGlassesLoading = false;
        draft.local.errors.fetchGlassesErrors = action.e.response.data.error;
        break;

      //Fetch Categories  list
      case ActionTypes.FETCH_CATEGORIES.request:
        draft.local.loading.fetchCategoriesLoading = true;
        draft.local.errors.fetchCategoriesErrors = "";
        break;
      case ActionTypes.FETCH_CATEGORIES.success:
        draft.local.loading.fetchCategoriesLoading = false;
        draft.data.alcoholicTypesList = action.data;
        break;
      case ActionTypes.FETCH_CATEGORIES.failure:
        draft.local.loading.fetchCategoriesLoading = false;
        draft.local.errors.fetchCategoriesErrors = action.e.response.data.error;
        break;

      //Fetch Alcoholic types list
      case ActionTypes.FETCH_ALCOHOLIC_TYPES.request:
        draft.local.loading.fetchAlcoholicTypesLoading = true;
        draft.local.errors.fetchAlcoholicTypesErrors = "";
        break;
      case ActionTypes.FETCH_ALCOHOLIC_TYPES.success:
        draft.local.loading.fetchAlcoholicTypesLoading = false;
        draft.data.alcoholicTypesList = action.data;
        break;
      case ActionTypes.FETCH_ALCOHOLIC_TYPES.failure:
        draft.local.loading.fetchAlcoholicTypesLoading = false;
        draft.local.errors.fetchAlcoholicTypesErrors =
          action.e.response.data.error;
        break;
    }
  });

export default cocktailBarReducer;
