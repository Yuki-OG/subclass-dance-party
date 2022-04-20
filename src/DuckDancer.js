var makeDuckDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="images/Randomduck.gif" class="dancer duckDancer"></img>');

  this.setPosition(top, left);
};

makeDuckDancer.prototype = Object.create(makeDancer.prototype);
makeDuckDancer.prototype.constructor = makeDuckDancer;
