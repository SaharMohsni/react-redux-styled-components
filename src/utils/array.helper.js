import { isStringOrArrayEmpty } from "./isEmpty";
import { isMatch } from "./string.helper";


export const convertKeyValue = (array) => {
  if (!isStringOrArrayEmpty(array)) {
    return array.map((el, index) => {
      let obj = { key: index, value: Object.values(el)[0] };
      return obj;
    });
  }
};

export const convertToString = (array) => array.join(",");

// Test if a specific string is in array
export const isStringInArray = (array, string) => {
  let res = array.filter((element) => {
    return isMatch(element, string);
  });

  return res.length > 0;
};

// Test if element from first array one exist in second array
export const exist = (firstArray, secondArray) =>  firstArray.some((element) => isStringInArray(secondArray, element));
 

