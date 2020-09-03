function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smlNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smlNums.push(nums[i]);
    }
  }
  return smlNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let found = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) == char) {
      found.push(names[i]);
    }
  }
  return found;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
