const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius function", () => {

    it("should convert i and j to 42", () => {
        const message = "hi june"
        const actual = polybius(message)

        expect(actual).to.include("42")
    })

    it("should convert 42 to i or j and maintain spaces", () => {
        const message = "hi june"
        const expected = "3242 42543351"
        const actual = polybius(message)

        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const message = "Hi June"
        const expected = "3242 42543351"
        const actual = polybius(message)

        expect(actual).to.equal(expected)
    })
})