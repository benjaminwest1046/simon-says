window.onload = function() {

  var board = {
    name: "Simon-Says",
    activeButton: "white",
    buttons: [
      topRight    = document.getElementById("top-right").id,
      topLeft     =  document.getElementById("top-left").id,
      bottomRight = document.getElementById("bottom-right").id,
      bottomLeft  = document.getElementById("bottom-left").id
    ]
  }

}

var userClicks = [];
var sequenceArray = ["top-right", "top-left", "bottom-left", "bottom-right"];
var buttonClicked = document.getElementsByClassName("buttons");
for (var i = 0; i < buttonClicked.length; i++) {
  buttonClicked[i].addEventListener("click", function(){
    userClicks.push(this.id)
    console.log(userClicks)
  });
}

function checkLoss () {
  for (var i = 0; i < sequenceArray.length; i++) {
    console.log(userClicks[i] + " sequenceArray = " + sequenceArray[i])
    if (userClicks[i] != sequenceArray[i]) {
      alert("You lose");
    }
  }
  console.log(sequenceArray)
  userClicks = [];
  setTimeout(function() {
    playSequence();
  },100)
  playSequence();

}

function delayedPlaySequence(button, delay) {
  var ele = document.getElementById(button);
  setTimeout(function() {
      ele.classList.add("elementToFadeInAndOut");
  }, delay)
}

function playSequence() {
  resetClasses();
  for (var i = 0; i < sequenceArray.length; i++) {
    delayedPlaySequence(sequenceArray[i], i * 1000);
  }
  checkLoss();
}

function resetClasses() {
  var allBoxes = document.getElementsByClassName("buttons");
  console.log(allBoxes)
  for (var i = 0; i < allBoxes.length; i++) {
    console.log(allBoxes[i])
    allBoxes[i].className = 'buttons'
  }
}

document.getElementById('checkloss').addEventListener("click", checkLoss);
document.getElementById('start').addEventListener("click", playSequence);
document.getElementById('resetclasses').addEventListener("click", resetClasses);





