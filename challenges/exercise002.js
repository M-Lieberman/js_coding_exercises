function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // filling is an array
  // read in sandwich and return filling array
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  // city 
  return person.city == 'Manchester';
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // A bus can hold 40 people. This function should return how many buses are required for the number of people
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // return the length of the filtered array
  return arr.filter(animal => animal == 'sheep').length;
  
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // regex for Manchester postcodes
  let re = new RegExp('^M\\d');
  return re.test(person.address.postCode);
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
