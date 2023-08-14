export const renameKey = (arr: any[], oldKey: string, newKey: string) => {
  let newArray: any[] = [];

  arr.forEach((obj) => {
    let newObj = {};
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if (key === oldKey) {
        Object.assign(newObj, { [newKey]: obj[oldKey] });
      } else {
        Object.assign(newObj, { [key]: obj[key] });
      }
    });
    newArray.push(newObj);
  });

  return newArray;
};
