function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smlNums = [];
  nums.forEach(function (num) {
    if (num < 1) {
      smlNums.push(num);
    }
  });
  return smlNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let found = [];
  names.forEach(function (name) {
    if (name.charAt(0) == char) {
      found.push(name);
    }
  });
  return found;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // to something
  let verbs = [];
  words.forEach(function (word) {
    if (word.length > 3 && word.slice(0, 3) === 'to ') {
      verbs.push(word);
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let ints = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      ints.push(num);
    }
  });
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqrts = [];
  nums.forEach(function (num) {
    let sqrt = Math.round(Math.sqrt(num) * 100) / 100;
    sqrts.push(sqrt);
  })
  return sqrts;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let found = [];
  sentences.forEach(function (sentence) {
    if (sentence.toUpperCase().indexOf(str.toUpperCase()) !== -1) {
      found.push(sentence);
    }
  });
  return found;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let sides = [];
  triangles.forEach(function (triangle) {
    let longest = 0;
    triangle.forEach(function (side) {
      if (side > longest) {
        longest = side;
      }
    });
    sides.push(longest);
  });
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
