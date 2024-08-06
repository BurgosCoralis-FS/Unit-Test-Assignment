const { total, obscure } = require("./total")


describe("Total Module Test", () => {
    test("As a user I want to get the total after submitting various prices", 
    () => {
        expect(total([2.5,78.12,12.89])).toEqual(93.51)
    })
})

describe("Obscure Module Test", () => {
    test("As a user I want to obscure the credit card number", 
    () => {
        expect(obscure("1234567890123456")).toEqual("XXXXXXXXXXXX3456")
    })

    test("As a user I want to return an error message for invalid credit card numbers", 
    () => {
        expect(obscure("123456789012345678")).toEqual("Invalid credit card number.")
    })
})