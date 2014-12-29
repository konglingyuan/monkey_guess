var _ = require("../../lib/lodash-2.4.1/lodash.js");

function Random() {

}

Random.getRandom = function() {
  var randoms = "";
  var length = 1;

  for(var i = 0; i < length; i++) {
    var random = Math.floor(Math.random()*10);
    randoms += random;

    length += 1;

    this.deleteRepeat(randoms);

    if(randoms.length === 4) {
      break;
    }
  }
  console.log(randoms);
  return randoms;
};

Random.deleteRepeat = function(randoms) {
  var result = [];
  var randomsArray = randoms.split("");
  randomsArray.sort();
  for(var i = 0; i < randomsArray.length; i++) {
    if(randomsArray[i] === randomsArray[i - 1]) {
      randomsArray[i - 1] = randomsArray[i];
      result.push(randomsArray[i - 1]);
    }
  }
  return result.join("");
};

module.exports = Random;
