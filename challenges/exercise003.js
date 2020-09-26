function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let sqrs = [];
  nums.map((num) => sqrs.push(Math.pow(num, 2)));
  return sqrs;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // make the first word lowercase, then add the remaining with initial caps
  let word = words[0].toLowerCase();
  // loop through remaining
  for (let i = 1; i < words.length; i++) {
    word += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return word;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjects = 0;
  people.forEach(function (p) {
    subjects += p.subjects.length;
  });
  return subjects;
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // array.some checks for any value matching the expression
  return menu.some((dish) => dish.ingredients.indexOf(ingredient) !== -1);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // return duplicate numbers in ascending order (without duplicates)
  // find matching numbers in arr1
  const result = arr1.filter(element => arr2.includes(element)).sort();
  return [...new Set(result)];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
