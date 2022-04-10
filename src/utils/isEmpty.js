export const isObjctEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const isStringOrArrayEmpty = (data) => {
  return data.length === 0;
};

export const hasKey = (obj, key) => {
  return Object.keys(obj).includes(key);
};
