import {
    convertToNum,
    calculateResults
} from './logic.js'

test("that jest is working", () => {
    expect(2+2).toBe(4);
})

describe("test function convertToNum", () => {
    test("that stringified integers convert correctly", () => {
        expect(convertToNum('3')).toBe(3);
        expect(typeof convertToNum('3')).toBe('number');
    });
});

describe("test function calculateResults", () => {
    test("that 12 is 12% of a 100", () => {
        expect(calculateResults('100', '12')).toBe(12);
    });
});