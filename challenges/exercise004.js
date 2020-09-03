function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return num < 1;
  });

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(function (name) {
    return (name.charAt(0) == char);
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // to something
  return words.filter(function (word) {
    return word.length > 3 && word.slice(0, 3) === 'to ';
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return Number.isInteger(num);
  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(function (user) {
    return user.data.city.displayName;
  });
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function (num) {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(function (sentence) {
    return sentence.toUpperCase().indexOf(str.toUpperCase()) !== -1;
  });
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(function (triangle) {
    let longest = 0;
    // for some reason Math.max() returns NaN here so I'm doing this the long way 
    // though this could be done using Array.reduce
    triangle.forEach(function (side) {
      if (side > longest) {
        longest = side;
      }
    });
    return longest;
  });
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
