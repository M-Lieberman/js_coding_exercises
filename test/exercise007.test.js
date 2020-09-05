const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("return error with an empty argument", () => {
        expect(() => { sumDigits(); }).toThrow("n is required");
    });
    test("return error with a non number argument", () => {
        expect(() => { sumDigits('foo'); }).toThrow("a number is required");
        expect(() => { sumDigits(['foo']); }).toThrow("a number is required");
        expect(() => { sumDigits(true); }).toThrow("a number is required");
    });
    test("return same number for single digit", () => {
        expect(sumDigits(2)).toBe(2);
    });
    test("return sum of multiple digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(49785)).toBe(33);
        expect(sumDigits(1206)).toBe(9);
    });
});
/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. 
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
describe("createRange", () => {
    test("return error with empty or non number arguments", () => {
        expect(() => { createRange(); }).toThrow("start is required");
        expect(() => { createRange(['foo']); }).toThrow("a start number is required");
        expect(() => { createRange(true); }).toThrow("a start number is required");
        expect(() => { createRange(4, true); }).toThrow("an end number is required");
    });
    test("return array with step of 1 for two arguments", () => {
        expect(createRange(3, 5)).toEqual([3, 4, 5]);
    });
    test("return array with step of 1 for three arguments", () => {
        expect(createRange(3, 5, 1)).toEqual([3, 4, 5]);
    });
    test("return array with specified step for three arguments", () => {
        expect(createRange(2, 8, 2)).toEqual([2, 4, 6, 8]);
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(14, 49, 7)).toEqual([14, 21, 28, 35, 42, 49]);
    });
    test("return array where step does not reach end of range", () => {
        const expected = [3, 5, 7, 9, 11];
        expect(createRange(3, 12, 2)).toEqual(expected);
    });


});