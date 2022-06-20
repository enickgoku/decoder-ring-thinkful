const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Function", () => {

    it("returns false if the substitution alphabet is not 26 characters", () => {
        const alphabet = "asdfghjklopiuytrewqvbnmxc5"
        const message = "Hello"
        const actual = substitution(alphabet, message)

        expect(actual).to.be.false
    })

    it("returns false if the substitution alphabet has duplicate characters", () => {
        const alphabet = "aaafghjklopiuytrewqvbnmxc5"
        const message = "Hello"
        const actual = substitution(alphabet, message)
        
        expect(actual).to.be.false
    })

    it("should maintain spaces throughout",  () => {
        const message = "hello world"
        const alphabet = "qwertyuiopasdfghjklzxcvbnm"
        const actual = substitution(message, alphabet)
        
        expect(actual).to.include(" ")
    })

    it("should ignore caps", () => {
      const message = "Yp Ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should decode a message", () => {
        const message = "jkvvc scxvo";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "hello world";
  
        expect(actual).to.equal(expected);
    });

    it("should encode a message", () => {
        const message = "hello world";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "jkvvc scxvo";
  
        expect(actual).to.equal(expected);
    });
})