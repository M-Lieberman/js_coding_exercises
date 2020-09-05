const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA
    // isItPrime,
    // createMatrix,
    // areWeCovered
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

