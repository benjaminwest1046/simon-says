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
var sequenceArray = [];
var buttonClicked = document.getElementsByClassName("buttons");
var ready = false

function allowClicks() {
  userClicks = []
  for (var i = 0; i < buttonClicked.length; i++) {
      something();
      function something () {
        buttonClicked[i].addEventListener("click", function(){
        userClicks.push(this.id)
        console.log("user clicks = ", userClicks, "Length = ", userClicks.length)
        if (userClicks.length === sequenceArray.length) {
        checkLoss();
        }
        })

      }
  }
  }
  /*for (var i = 0; i < buttonClicked.length; i++) {
      buttonClicked[i].addEventListener("click", function(){
      userClicks.push(this.id)
      console.log("user clicks = ", userClicks, "Length = ", userClicks.length)
      if (userClicks.length === sequenceArray.length) {
        checkLoss();
      }

      });

  }*/

function checkLoss () {
  if (ready) {
    for (var i = 0; i < userClicks.length; i++) {
      if (userClicks[i] != sequenceArray[i]) {
        alert("You lose");
        //window.location.reload(false);
        userClicks = [];
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
    console.log("Delayed sequence here")
  }, delay)
  setTimeout(function() {
    resetClasses();
  }, delay + 100)

}


function playSequence() {
    var nextButton = buttons[Math.floor(Math.random() * buttons.length)];
    sequenceArray.push(nextButton)
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






























