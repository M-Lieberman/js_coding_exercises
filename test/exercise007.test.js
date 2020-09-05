const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("return error with an empty argument", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
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