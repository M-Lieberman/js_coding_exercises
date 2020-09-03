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
  // to something
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3 && words[i].slice(0, 3) === 'to ') {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let ints = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      ints.push(nums[i]);
    }
  }
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqrts = [];
  for (let i = 0; i < nums.length; i++) {
    let sqrt = Math.round(Math.sqrt(nums[i]) * 100) / 100;
    sqrts.push(sqrt);
  }
  return sqrts;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentence = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toUpperCase().indexOf(str.toUpperCase()) !== -1) {
      sentence.push(sentences[i]);
    }
  }
  return sentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let sides = [];
  for (let i = 0; i < triangles.length; i++) {
    let triangle = triangles[i];
    let longest = 0;
    for (let j = 0; j < triangle.length; j++) {
      if (triangle[j] > longest) {
        longest = triangle[j];
      }
    }
    sides.push(longest);
  }
  return sides;
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
