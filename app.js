window.onload = function() {

  var board = {
    name: "Simon-Says",
    activeButton: "white",
  }

}
var topRight    = document.getElementById("top-right").id
var topLeft     =  document.getElementById("top-left").id
var bottomRight = document.getElementById("bottom-right").id
var bottomLeft  = document.getElementById("bottom-left").id
var buttons = [topRight, topLeft, bottomRight, bottomLeft]
var userClicks = [];
var sequenceArray = [topRight, topLeft];
var buttonClicked = document.getElementsByClassName("buttons");
var ready = true

function allowClicks() {
  for (var i = 0; i < buttonClicked.length; i++) {
      buttonClicked[i].addEventListener("click", function(){
      userClicks.push(this.id)
      console.log(userClicks)
      if (userClicks.length == sequenceArray.length) {
        checkLoss();
      }
      });
    }
}
function checkLoss () {
  if (ready) {
    for (var i = 0; i < userClicks.length; i++) {
      console.log("Its looping")
      if (userClicks[i] != sequenceArray[i]) {
        alert("You loose");
        //resetBoard();
        i = 100
      } else {
        userClicks = [];
        playSequence();
      }
    }
  }
}

//Sequencing
function delayedPlaySequence(button, delay) {
  var ele = document.getElementById(button);
  setTimeout(function() {
    ele.classList.add("elementToFadeInAndOut");
  }, delay)
  setTimeout(function() {
    resetClasses();
  }, delay + 200)
}

function playSequence() {
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

document.getElementById('checkloss').addEventListener("click", checkLoss);
document.getElementById('start').addEventListener("click", playSequence);
document.getElementById('resetclasses').addEventListener("click", resetClasses);

allowClicks();
checkLoss();
//wrap click in a function that checks a variable
//check each time they click
//might need to add a delay for variable




