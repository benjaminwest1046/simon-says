// Global Variables
var topRight, topLeft, bottomRight, bottomLeft, buttonArray, buttons;
var userClickCount = 0;
var sequenceArray = [];
var listener = false;

// Wait for DOM ready
$(document).ready(function(){
  console.log("jquery is ready");

  // Read DOM and assign to Global Vars
  topRight    = document.getElementById("top-right").id;
  topLeft     = document.getElementById("top-left").id;
  bottomRight = document.getElementById("bottom-right").id;
  bottomLeft  = document.getElementById("bottom-left").id;
  buttonArray = document.getElementsByClassName("buttons");
  buttons = [topRight, topLeft, bottomRight, bottomLeft];

  registerClickHandlers();
});

function handleClick(button) {
  console.log('You just clicked', button.id);
  console.log('userClickCount:', userClickCount);
  console.log("sequence =  ", sequenceArray);
  if (!checkForMatch(button.id)) {
    alert('You lose!');
  }
  else if (userClickCount === sequenceArray.length-1) {
    setTimeout(function() {
      userClickCount = 0;
      playSequence();
    }, 1000);
  }
  else {
    userClickCount += 1;
  }
}

function registerClickHandlers() {
  console.log('registerClickHandlers');
  for (var i = 0; i < buttonArray.length; i++) {
      buttonArray[i].addEventListener("click", function() {
        console.log('registering click handler for button', this);
        handleClick(this);
      });
  }
  document.getElementById('start').addEventListener("click", newGame);
}

//This was the new method
/*function allowClicks() {
  userClicks = []
  for (var i = 0; i < buttonArray.length; i++) {
    console.log("removing is called")
        buttonArray[i].removeEventListener("click", tryThis)
  }
  for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", tryThis)
  }
}

function tryThis() {
  userClicks.push(this.id)
        console.log("user clicks = ", userClicks, "Length = ", userClicks.length)
        if (userClicks.length === sequenceArray.length) {
          console.log("user clicks", userClicks, "sequenceArray", sequenceArray)
          checkLoss();
        }
}*/

//This was a second way of trying it
/*function allowClicks() {
  loadListeners();
  console.log("user clicks", userClicks.length + "sequence array", sequenceArray.length)
  if (userClicks.length == sequenceArray.length) {
    checkLoss();
  }
}*/
function checkForMatch(buttonId) {
  return buttonId == sequenceArray[userClickCount];
}

//Sequencing
function delayedPlaySequence(button, delay) {
  var ele = document.getElementById(button);
  setTimeout(function() {
    ele.classList.add("elementToFadeInAndOut");
  }, delay)
  setTimeout(function() {
    resetClasses();
  }, delay + 100)

}

function newGame() {
  userClickCount = 0;
  sequenceArray.length = 0;
  playSequence();
}

function playSequence() {
    var nextButton = buttons[Math.floor(Math.random() * buttons.length)];
    sequenceArray.push(nextButton)
    //userClicks = [];
    for (var i = 0; i < sequenceArray.length; i++) {
      delayedPlaySequence(sequenceArray[i], i * 1000);
    };
}

function resetClasses() {
  for (var i = 0; i < buttons.length; i++) {
    var ele = document.getElementById(buttons[i])
    ele.className = "buttons"
  }
}

//wrap click in a function that checks a variable
//check each time they click
//might need to add a delay for variable






























