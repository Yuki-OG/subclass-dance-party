var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="images/dancing-duckdancing.gif" class="dancer spinDancer"></img>');

  this.setPosition(top, left);
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeSpinDancer;