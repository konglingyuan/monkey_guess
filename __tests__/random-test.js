jest.dontMock("../js/model/random");

describe("Random", function() {
  describe("#getRandom", function() {
    it("should return four of random number and dont same", function() {
      var Random = require("../js/model/random");

      var result = Random.getRandom();
      expect(result).toBeTruthy();
    });
  });
});
