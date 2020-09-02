function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // substring vs substr vs slice? Seems to produce the same result here
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + '.' + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = (vatRate / 100) * originalPrice;
  let priceIncludingVat = originalPrice + vat;
  return Math.round((priceIncludingVat) *100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let reductionAmount = originalPrice * (reduction / 100);
  return  Math.round((originalPrice - reductionAmount) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middlePosition = Math.abs(str.length / 2);
  if (str.length % 2 == 0) {
    return str.substr(middlePosition-1, 2);
  } else {
    return str.charAt(middlePosition);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // split into an array of strings
  // reverse the array
  // and join them back
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversed = [];
  for (let i = 0; i < words.length; i++) {
    reversed.push(words[i].split('').reverse().join(''));
  }
  return reversed;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // foreach loop through users
  // increment counter if type = linux
  // return counter total
  let counter = 0;
  users.forEach(function (user) {
    if (user.type == 'Linux') {
      counter++;
    }
  });
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
