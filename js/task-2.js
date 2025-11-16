function makeArray(firstArray, secondArray, maxLength) {
  const arrayLength = firstArray.length + secondArray.length;
  if (maxLength >= arrayLength) {
    const arrayRes = firstArray.concat(secondArray);
    return arrayRes;
  } else if (maxLength !== 0 && maxLength < arrayLength) {
    const maxLengthArray = maxLength - firstArray.length;
    const secondArrayRes = secondArray.slice(0, maxLengthArray);
    const res = firstArray.concat(secondArrayRes);
    return res;
  } else {
    const emptyArray = [];
    return emptyArray;
  }
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
