var makeGoatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img src="images/goat.gif" class="dancer goatDancer"></img>');

  this.setPosition(top, left);
};

makeGoatDancer.prototype = Object.create(makeDancer.prototype);
makeGoatDancer.prototype.constructor = makeGoatDancer;