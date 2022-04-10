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

export const isStringInArray = (array, string) => array.includes(string);

export const exist = (firstArray, secondArray) => {
    // Comparing each element of array
    for (var i = 0; i < firstArray.length; i++) {
     if(isStringInArray(firstArray[i],secondArray)){
       return true
     }
     else return false
    }
  
}