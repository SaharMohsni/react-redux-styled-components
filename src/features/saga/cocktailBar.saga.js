import { put, call, takeEvery } from "redux-saga/effects";
import * as api from "../services/cocktailBar.service";
import ActionTypes from "../constants/cocktailBar.constants";

//Set user data
export function* setUserData(action) {
  try {
    yield put({
      type: ActionTypes.SET_USER_DATA.success,
      payload: action.payload,
    });
  } catch (e) {
    yield put({ type: ActionTypes.SET_USER_DATA.failure, e });
  }
}

export function* setUserDataWatcher() {
  yield takeEvery(ActionTypes.SET_USER_DATA.request, setUserData);
}

//Set cocktail filters data
export function* setCocktailFiltersData(action) {
  try {
    yield put({
      type: ActionTypes.SET_COCKTAIL_FILTERS_DATA.success,
      payload: action.payload,
    });
  } catch (e) {
    yield put({ type: ActionTypes.SET_COCKTAIL_FILTERS_DATA.failure, e });
  }
}

export function* setCocktailFiltersDataWatcher() {
  yield takeEvery(
    ActionTypes.SET_COCKTAIL_FILTERS_DATA.request,
    setCocktailFiltersData
  );
}

//Fetch Cocktails
export function* fetchCocktails() {
  try {
    const results = yield call(api.fetchCocktailsList);
    yield put({
      type: ActionTypes.FETCH_COCKTAILS.success,
      data: results.drinks,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_COCKTAILS.failure, e });
  }
}

export function* fetchCocktailsWatcher() {
  yield takeEvery(ActionTypes.FETCH_COCKTAILS.request, fetchCocktails);
}

//Set Cocktail list after filter
export function* setFiltredCocktailList() {
  try {
    yield put({
      type: ActionTypes.SET_FILTRED_COCKTAIL_LIST.success,
    });
  } catch (e) {
    yield put({ type: ActionTypes.SET_FILTRED_COCKTAIL_LIST.failure, e });
  }
}
export function* setFiltredCocktailListWatcher() {
  yield takeEvery(ActionTypes.SET_FILTRED_COCKTAIL_LIST.request, setFiltredCocktailList);
}



//Fetch Ingredients
export function* fetchIngredients() {
  try {
    const results = yield call(api.fetchIngredientsList);
    yield put({
      type: ActionTypes.FETCH_INGREDIENTS.success,
      data: results.drinks,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_INGREDIENTS.failure, e });
  }
}

export function* fetchIngredientsWatcher() {
  yield takeEvery(ActionTypes.FETCH_INGREDIENTS.request, fetchIngredients);
}

// Fetch Glasses
export function* fetchGlasses() {
  try {
    const results = yield call(api.fetchGlassesList);
    yield put({
      type: ActionTypes.FETCH_GLASSES.success,
      data: results.drinks,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_GLASSES.failure, e });
  }
}

export function* fetchGlassesWatcher() {
  yield takeEvery(ActionTypes.FETCH_GLASSES.request, fetchGlasses);
}

// Fetch Categories
export function* fetchCategories() {
  try {
    const results = yield call(api.fetchCategoriesList);
    yield put({
      type: ActionTypes.FETCH_CATEGORIES.success,
      data: results.drinks,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_CATEGORIES.failure, e });
  }
}

export function* fetchCategoriesWatcher() {
  yield takeEvery(ActionTypes.FETCH_CATEGORIES.request, fetchCategories);
}

// Fetch Alcoholic Types
export function* fetchAlcoholicTypes() {
  try {
    const results = yield call(api.fetchAlcoholicTypesList);
    yield put({
      type: ActionTypes.FETCH_ALCOHOLIC_TYPES.success,
      data: results.drinks,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_ALCOHOLIC_TYPES.failure, e });
  }
}

export function* fetchAlcoholicTypesWatcher() {
  yield takeEvery(
    ActionTypes.FETCH_ALCOHOLIC_TYPES.request,
    fetchAlcoholicTypes
  );
}
