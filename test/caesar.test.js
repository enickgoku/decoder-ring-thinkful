const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Function", () => {
    it("should return false if shift value is 0, > 25, or < -25", () => {
        const message = "'ello guys!";
        const shift = 0;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    })
    
    it("should ignore capital letters", () => {
        const message = "HeY ThErE"
        const shift = 1
        const actual = caesar(message, shift)
        const expected = "ifz uifsf"
        expect(actual).to.equal(expected)
    })

    it("should wrap around the alphabet when necessary.  And maintain spaces and symbols", () => {
        const message = "you are great!"
        const shift = 20
        const actual = caesar(message, shift)
        const expected = "sio uly alyun!"
        expect(actual).to.equal(expected)
    })
})