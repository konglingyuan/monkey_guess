jest.dontMock("../js/model/score");

describe("Score", function() {
  describe("#get4A0B", function() {
    var Score = require("../js/model/score");
    var inputs = "2345";

    it("should return 4A0B", function() {
      var getRandom = jest.genMockFn();
      getRandom.mockReturnValue("2345");

      var result = Score.getScore(inputs, getRandom());

      expect(result).toBe("Congratulation!");
    });
  });
});
