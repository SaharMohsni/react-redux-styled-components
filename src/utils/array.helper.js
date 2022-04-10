import { isStringOrArrayEmpty } from "./isEmpty";

export const convertKeyValue = (array) => {
  if (!isStringOrArrayEmpty(array)) {
    return array.map((el, index) => {
      let obj = { key: index, value: Object.values(el)[0] };
      return obj;
    });
  }
};


export const convertToString = (array) => array.join(',')