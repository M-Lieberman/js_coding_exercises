const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
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
        expect(sumMultiples([1, 2, 4])).toBe(0);
    });
    test("return error with an empty array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });
    test("return an array type error with non array type arguments", () => {
        expect(() => {
            sumMultiples('foo');
        }).toThrow("an array is required");
        expect(() => {
            sumMultiples(42);
        }).toThrow("an array is required");
    });
});

// This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. 
// A valid DNA string may contain characters C, G, T or A only.
describe("isValidDNA", () => {
    test("return error with an empty argument", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });
    test("return error with a non string argument", () => {
        expect(() => {
            isValidDNA(42);
        }).toThrow("a string is required");
        expect(() => {
            isValidDNA(['foo']);
        }).toThrow("a string is required");
        expect(() => {
            isValidDNA(true);
        }).toThrow("a string is required");
    });
    test("return true for valid DNA", () => {
        expect(isValidDNA('GATTACA')).toBe(true);
    });
    test("return false for all invalid DNA", () => {
        expect(isValidDNA('BONOBO')).toBe(false);
    });
    test("return false for including invalid DNA", () => {
        expect(isValidDNA('ABACUS')).toBe(false);
    });
    test("return false for lowercase", () => {
        expect(isValidDNA('Gattaca')).toBe(false);
    });
});

// This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. 
// In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
describe("getComplementaryDNA", () => {
    test("return error with an empty argument", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
    });
    test("return error with a non string argument", () => {
        expect(() => {
            getComplementaryDNA(42);
        }).toThrow("a string is required");
        expect(() => {
            getComplementaryDNA(['foo']);
        }).toThrow("a string is required");
        expect(() => {
            getComplementaryDNA(true);
        }).toThrow("a string is required");
    });
    // valid dna T=A, C=G
    test("return complementary DNA pairs - A <-> T", () => {
        expect(getComplementaryDNA('A')).toBe('T');
        expect(getComplementaryDNA('T')).toBe('A');
        expect(getComplementaryDNA('AT')).toBe('TA');
        expect(getComplementaryDNA('TATTA')).toBe('ATAAT');
    });
    test("return complementary DNA pairs - C <-> G", () => {
        expect(getComplementaryDNA('C')).toBe('G');
        expect(getComplementaryDNA('G')).toBe('C');
        expect(getComplementaryDNA('GCGCGC')).toBe('CGCGCG');
    });
    test("return valid complementary DNA", () => {
        expect(getComplementaryDNA('GATTACA')).toBe('CTAATGT');
    });
    test("return error with invalid DNA", () => {
        expect(() => {
            getComplementaryDNA('GATSBY');
        }).toThrow("valid DNA is required");
    });
    test("return error with invalid DNA - lowecase", () => {
        expect(() => {
            getComplementaryDNA('Gattaca');
        }).toThrow("valid DNA is required");
    });
});

// This function should receive a number and return true/false depending on whether it is a prime number or not. 
// A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
describe("isItPrime", () => {
    test("return error with an empty argument", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");
    });
    test("return error with a non number argument", () => {
        expect(() => {
            isItPrime('foo');
        }).toThrow("a number is required");
        expect(() => {
            isItPrime(['foo']);
        }).toThrow("a number is required");
        expect(() => {
            isItPrime(true);
        }).toThrow("a number is required");
    });
    test("return true for prime number", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(43)).toBe(true);
        expect(isItPrime(97)).toBe(true);
        expect(isItPrime(613)).toBe(true);
        expect(isItPrime(797)).toBe(true);
    });
    test("return false for 1", () => {
        expect(isItPrime(1)).toBe(false);
    });
    test("return false for zero", () => {
        expect(isItPrime(0)).toBe(false);
    });
    test("return false for non-prime numbers", () => {
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(100)).toBe(false);
        expect(isItPrime(9999)).toBe(false);
    });
    test("return false for fractions", () => {
        expect(isItPrime(0.5)).toBe(false);
    });
    test("return false for negative numbers", () => {
        expect(isItPrime(-7)).toBe(false);
        expect(isItPrime(-0)).toBe(false);  // negative zero!
    });
});
/**
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. 
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
describe("createMatrix", () => {
    test("return error with an empty arguments", () => {
        expect(() => { createMatrix(); }).toThrow("n is required");
        expect(() => { createMatrix(3); }).toThrow("fill is required");
        expect(() => { createMatrix('foo'); }).toThrow("a number is required");
    });
    test("return error if n is not a positive integer (no fractions, negative numbers or zero)", () => {
        expect(() => { createMatrix(0); }).toThrow("n must be a positive integer");
        expect(() => { createMatrix(-2); }).toThrow("n must be a positive integer");
        expect(() => { createMatrix(3.5); }).toThrow("n must be a positive integer");
    });

    test("return array with one element", () => {
        const array1x1 = [
            ['foo']
        ];
        expect(createMatrix(1, 'foo')).toEqual(array1x1);
    });
    test("return array with multiple elements", () => {
        const array2x2 = [
            ['foo', 'foo'],
            ['foo', 'foo']
        ];
        expect(createMatrix(2, 'foo')).toEqual(array2x2);
    });
    test("return array with multiple elements", () => {
        const array3x3 = [
            ['baa baa', 'baa baa', 'baa baa'],
            ['baa baa', 'baa baa', 'baa baa'],
            ['baa baa', 'baa baa', 'baa baa']
        ];
        expect(createMatrix(3, 'baa baa')).toEqual(array3x3);
    });
    test("return array with multiple number elements", () => {
        const array3x3 = [
            [42, 42, 42],
            [42, 42, 42],
            [42, 42, 42]
        ];
        expect(createMatrix(3, 42)).toEqual(array3x3);
    });
    test("return array with multiple object elements", () => {
        const person = {
            firstName: "Ada",
            lastName: "Lovelace"
        };
        const array2x2 = [
            [person, person],
            [person, person]
        ];
        expect(createMatrix(2,
            {
                firstName: "Ada",
                lastName: "Lovelace"
            }
        )).toEqual(array2x2);
    });
});
/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
describe("areWeCovered", () => {
    test("return error with an empty arguments", () => {
        const staff = [
            { name: "Ruby", rota: ["Tuesday"] },
            { name: "Bob", rota: ["Tuesday"] },
            { name: "Michael", rota: ["Tuesday"] }
        ];
        expect(() => { areWeCovered(); }).toThrow("staff is required");
        expect(() => { areWeCovered('foo'); }).toThrow("an array of staff is required");
        expect(() => { areWeCovered(staff, 3); }).toThrow("day is required");
    });
    test("return true for minimum staff cover on Tuesday", () => {
        const staff = [
            { name: "Ruby", rota: ["Tuesday"] },
            { name: "Bob", rota: ["Tuesday"] },
            { name: "Michael", rota: ["Tuesday"] }
        ];
        expect(areWeCovered(staff, 'Tuesday')).toBe(true);
    });
    test("return true for more than minimum staff cover on Thursday", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Thursday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Ava", rota: ["Monday", "Wednesday", "Thursday", "Friday"] },
            { name: "Eve", rota: ["Sunday", "Tuesday", "Thursday", "Friday"] },
            { name: "Wally", rota: ["Saturday", "Monday", "Thursday", "Friday"] }
        ];
        expect(areWeCovered(staff, 'Thursday')).toBe(true);
    });
    test("return false for empty staff array on Wednesday", () => {
        expect(areWeCovered([], 'Wednesday')).toBe(false);
    });

    test("return false for minimum staff cover on Wednesday", () => {
        const staff = [
            { name: "Ruby", rota: ["Wednesday"] },
            { name: "Bob", rota: ["Tuesday"] },
            { name: "Michael", rota: ["Tuesday"] }
        ];
        expect(areWeCovered(staff, 'Wednesday')).toBe(false);
    });
    test("return false for no staff cover on Wednesday", () => {
        const staff = [
            { name: "Ruby", rota: ["Tuesday"] },
            { name: "Bob", rota: ["Tuesday"] },
            { name: "Michael", rota: ["Tuesday"] }
        ];
        expect(areWeCovered(staff, 'Wednesday')).toBe(false);
    });
});