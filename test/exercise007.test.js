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

/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"]
 *  as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
describe("getScreentimeAlertList", () => {
    // invalid args
    test("return error with an empty arguments", () => {
        expect(() => { getScreentimeAlertList(); }).toThrow("users is required");
    });
    test("return simple array of username with over 100 minutes screentime on date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
    });
    test("return array of usernames with over 100 minutes screentime on date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });
    test("return array of usernames with over 100 minutes screentime on date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 45, whatsApp: 20, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 35, whatsApp: 80, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 90, facebook: 0, safari: 31 } },
                ]
            },
            {
                username: "agarcia4",
                name: "Ana Garcia",
                screenTime: [
                    { date: "2019-06-11", usage: { tikTok: 65, whatsApp: 40, instagram: 32, safari: 10 } },
                    { date: "2019-06-13", usage: { tikTok: 120, whatsApp: 15, instagram: 100, safari: 0 } },
                    { date: "2019-06-14", usage: { tikTok: 90, whatsApp: 32, instagram: 45, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2019-06-13")).toEqual(["sam_j_1989", "agarcia4"]);
    });

});

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
describe("hexToRGB", () => {
    test("return error with an empty argument", () => {
        expect(() => { hexToRGB(); }).toThrow("hexStr is required");
    });
    test("return error with a non hex string argument", () => {
        expect(() => { hexToRGB(42); }).toThrow("a hex color code is required");
        expect(() => { hexToRGB(['foo']); }).toThrow("a hex color code is required");
        expect(() => { hexToRGB(true); }).toThrow("a hex color code is required");
    });
    test("return error with invalid hex argument", () => {
        expect(() => { hexToRGB('FF1133'); }).toThrow("a valid hex color code is required");
        expect(() => { hexToRGB('#######'); }).toThrow("a valid hex color code is required");
        expect(() => { hexToRGB('#GGGGGG'); }).toThrow("a valid hex color code is required");
        expect(() => { hexToRGB('1234ff'); }).toThrow("a valid hex color code is required");
    });
    test("return rbg values for valid hex colour codes (not case sensitive)", () => {
        expect(hexToRGB('#FF1133')).toBe("rgb(255,17,51)");
        expect(hexToRGB('#ff1133')).toBe("rgb(255,17,51)");
        expect(hexToRGB('#000000')).toBe("rgb(0,0,0)");
        expect(hexToRGB('#FFFFFF')).toBe("rgb(255,255,255)");
        expect(hexToRGB('#00bfff')).toBe("rgb(0,191,255)");
    });
});

