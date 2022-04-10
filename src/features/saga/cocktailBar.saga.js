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

//Fetch Cocktails
export function* fetchCocktails() {
  try {
    const results = yield call(api.fetchCocktailsList);
    yield put({
      type: ActionTypes.FETCH_COCKTAILS.success,
      data: results,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_COCKTAILS.failure, e });
  }
}

export function* fetchCocktailsWatcher() {
  yield takeEvery(ActionTypes.FETCH_COCKTAILS.request, fetchCocktails);
}

//Fetch Ingredients
export function* fetchIngredients() {
  try {
    const results = yield call(api.fetchIngredientsList);
    yield put({
      type: ActionTypes.FETCH_INGREDIENTS.success,
      data: results,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_INGREDIENTS.failure, e });
  }
}

export function* fetchIngredientsWatcher() {
  yield takeEvery(ActionTypes.FETCH_INGREDIENTS.request, fetchIngredients);
}

// Get Glasses
export function* fetchGlasses(action) {
  try {
    yield put({
      type: ActionTypes.FETCH_GLASSES.success,
      payload: action.payload,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_GLASSES.failure, e });
  }
}

export function* fetchGlassesWatcher() {
  yield takeEvery(ActionTypes.FETCH_GLASSES.request, fetchGlasses);
}

// Fetch Categories
export function* fetchCategories(action) {
  try {
    yield put({
      type: ActionTypes.FETCH_CATEGORIES.success,
      payload: action.payload,
    });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_CATEGORIES.failure, e });
  }
}

export function* fetchCategoriesWatcher() {
  yield takeEvery(ActionTypes.FETCH_CATEGORIES.request, fetchCategories);
}

// Fetch Alcoholic Types
export function* fetchAlcoholicTypes(action) {
  try {
    yield put({
      type: ActionTypes.FETCH_ALCOHOLIC_TYPES.success,
      payload: action.payload,
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
