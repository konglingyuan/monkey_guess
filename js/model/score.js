function Score(inputs, randoms) {
  this.inputs = inputs;
  this.randoms = randoms;
}

Score.getScore = function() {

  var score_A = 0;
  var score_B = 0;

  var inputsArray = this.inputs.split("");
  var randomsArray = this.randoms.split("");

  if(this.inputs === this.randoms) {
    console.log("Congratulation!");
  }

  if(this.inputs !== this.randoms) {
    console.log("0A0B");
    console.log("Game Over!");
  }

};
