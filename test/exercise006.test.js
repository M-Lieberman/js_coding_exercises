const {
    sumMultiples
} = require("../challenges/exercise006");

// This function will receive an array of numbers and should return the sum
// of any numbers which are a multiple of 3 or 5
describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    }); 
    test("return the sum of any decimal numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5, 15.0, 2.567, 3.33]);
        const expected = 23;
        expect(result).toBe(expected);
    }); 
    test("return zero when no numbers are multiples of 3 or 5", () => {
        const result = sumMultiples([1, 2, 4]);
        const expected = 0;
        expect(result).toBe(expected);
    }); 
    test("return error with an empty array", () => {
        expect (() => {
            sumMultiples();
        }).toThrow("arr is required");
    }); 
    test("return error with an no arguments - alternative syntax", () => {
        expect(sumMultiples()).toThrow("arr is required");
    });

    // no numbers are a multiple of 3 or 5
// only one number is a multiple of 3 or 5
// empty array throws error

});

// const {
//     findNextNumber,
//     count1sand0s,
//     reverseNumber,
//     sumArrays,
//     arrShift,
//     findNeedle,
//     getWordFrequencies
//   } = require("../challenges/exercise005");
  
//   describe("findNextNumber", () => {
//     test("returns the next number after the given number in the array", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
//       expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
//       expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
//     });
  
//     test("if the number is not found in the array, returns null", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
//     });
  
//     test("if the number is found more than once, returns the number after the first instance", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
//     });
  
//     test("if the number is found in the final index position of the array, returns null", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
//     });
//   });