const {
    tvRemote,
    tvRemoteCAVersion
} = require("../../codewars/tvRemote");

describe("TV Remote Control Tests", function () {
    test("single character tests", () => {
        expect(tvRemote("a")).toBe(1);
        expect(tvRemote("c")).toBe(3);
        expect(tvRemote("f")).toBe(2);
    });
    it("example", function () {
        expect(tvRemote("codewars")).toBe(36);
    });
    it("misc", function () {
        expect(tvRemote("does")).toBe(16);
        expect(tvRemote("your")).toBe(23);
        expect(tvRemote("solution")).toBe(33);
        expect(tvRemote("work")).toBe(20);
        expect(tvRemote("for")).toBe(12);
        expect(tvRemote("these")).toBe(27);
        expect(tvRemote("words")).toBe(25);
    });
});

describe("TV Remote Control Tests", function () {
    test("single character tests", () => {
        expect(tvRemoteCAVersion("a")).toBe(1);
        expect(tvRemoteCAVersion("c")).toBe(3);
        expect(tvRemoteCAVersion("f")).toBe(2);
    });
    it("example", function () {
        expect(tvRemoteCAVersion("codewars")).toBe(36);
    });
    it("misc", function () {
        expect(tvRemoteCAVersion("does")).toBe(16);
        expect(tvRemoteCAVersion("your")).toBe(23);
        expect(tvRemoteCAVersion("solution")).toBe(33);
        expect(tvRemoteCAVersion("work")).toBe(20);
        expect(tvRemoteCAVersion("for")).toBe(12);
        expect(tvRemoteCAVersion("these")).toBe(27);
        expect(tvRemoteCAVersion("words")).toBe(25);
    });
});

