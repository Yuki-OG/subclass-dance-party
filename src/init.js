$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeEgyptianDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addDuckButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var top = Math.random() * (700 - 400) + 400;
    var left = $('body').width() * Math.random();

    var dancer = new dancerMakerFunction(
      top,
      left,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    // console.log(window.dancers);
  });

  $('.addGoatButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var top = Math.random() * (700 - 400) + 400;
    var left = $('body').width() * Math.random();

    var dancer = new dancerMakerFunction(
      top,
      left,
      Math.random() * 1000
    );

    dancer.$node.mouseover(function() {
      // console.log('moused over');
      $('#goat-sound')[0].play();
    });

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addSpinButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var top = Math.random() * (700 - 400) + 400;
    var left = $('body').width() * Math.random();

    var dancer = new dancerMakerFunction(
      top,
      left,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].top = 400;
      window.dancers[i].left = i * 100;
      window.dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left);
    }
  });

  $('.pairUpButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      var spinDancers = [];
      var duckDancers = [];
      window.dancers.forEach(function(element) {
        if (element.constructor === makeSpinDancer) {
          spinDancers.push(element);
        }
        if (element.constructor === makeDuckDancer) {
          duckDancers.push(element);
        }
      });
    }

    spinDancers.forEach(function(spinDancer, index) {
      duckDancers[index].setPosition(spinDancer.top - 60, spinDancer.left);
      duckDancers[index].$node.addClass('pairDance');
      duckDancers[index].$node.on('click', function(event) {
        duckDancers[index].$node.removeClass('pairDance');
      });
    });

    console.log(spinDancers);
    console.log(duckDancers);
  });
});

$('.ClearButton').on('click', function(event) {
  // var parent = window.dancers[0].parentElement;
  for (let i = 0; i < window.dancers.length; i++) {
    dancers[i].$node.remove();
  }
  window.dancers = [];
});
