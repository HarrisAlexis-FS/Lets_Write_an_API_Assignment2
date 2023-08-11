const {universityService, universityServiceByCountry} = require('./universityService');

jest.mock("./universityService");


describe("University Service Test", () => {
    test("Should return universities and what country they are in", async () => {
        const result = await universityService();
        expect(result.data).toHaveLength(9936)
    });

    test("Should return universities in specified country", async () => {
        const result = await universityService();
        expect(result.data[2].country).toEqual('France');
    });
});

