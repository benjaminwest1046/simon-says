$(document).ready(function(){
   console.log("jquery is ready")
});
//this was part of the second way
/*function loadListeners() {
    console.log("Did this load")
    for (var i = 0; i < buttonArray.length; i++) {
      buttonArray[i].addEventListener("click", function() {
        userClicks.push(this.id)
        console.log("user clicks: ", userClicks)
      })
    }
  }*/

var topRight    = document.getElementById("top-right").id;
var topLeft     =  document.getElementById("top-left").id;
var bottomRight = document.getElementById("bottom-right").id;
var bottomLeft  = document.getElementById("bottom-left").id;
var buttons = [topRight, topLeft, bottomRight, bottomLeft];
var userClicks = [];
var sequenceArray = [];
var buttonArray = document.getElementsByClassName("buttons");
var ready = false;
var listener = false;

function allowClicks() {
  for (var i = 0; i < buttonArray.length; i++) {
      buttonArray[i].addEventListener("click", function(){
      userClicks.push(this.id)
      console.log("user clicks = ", userClicks, "sequence =  ", sequenceArray)
      if (userClicks.length === sequenceArray.length) {
        checkLoss();
      }
      });

  }
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
function checkLoss () {
  if (ready) {
    for (var i = 0; i < userClicks.length; i++) {
      if (userClicks[i] != sequenceArray[i]) {
        alert("You lose");
        //window.location.reload(false);
        //userClicks = [];
        i = 100
      } else {
          setTimeout(function() {
            playSequence();
          }, 500)
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
  }, delay + 100)

}

function playSequence() {
    var nextButton = buttons[Math.floor(Math.random() * buttons.length)];
    sequenceArray.push(nextButton)
    //userClicks = [];
    for (var i = 0; i < sequenceArray.length; i++) {
      delayedPlaySequence(sequenceArray[i], i * 1000);
    };
    setTimeout(function() {
      ready = true;
      allowClicks();
    }, i * 1000)
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
//wrap click in a function that checks a variable
//check each time they click
//might need to add a delay for variable






























