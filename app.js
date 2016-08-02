window.onload = function() {

  var board = {
    name: "Simon-Says",
    activeButton: "white",
    sequenceArrayasd: ["top-left", "top-right"],
    buttons: [
      topRight    = document.getElementById("top-right").id,
      topLeft     =  document.getElementById("top-left").id,
      bottomRight = document.getElementById("bottom-right").id,
      bottomLeft  = document.getElementById("bottom-left").id
    ]/*,
    sequence: function() {
      //var nextButton = board.buttons[Math.floor(Math.random() * board.buttons.length)];
      //board.sequenceArray.push(nextButton);
      for (i = 0; i < board.sequenceArray.length; i++) {
        var ele = document.getElementById(board.sequenceArray[i]);
        ele.style.background = board.activeButton;
      }
    }*/
  }

}
var userClicks = []
var buttonClicked = document.getElementsByClassName("buttons");
for (var i = 0; i < buttonClicked.length; i++) {
  buttonClicked[i].addEventListener("click", function(){
    userClicks.push(this.id)
    console.log(userClicks)
  });
}

var sequenceArray = ["top-right", "top-left"]
function checkLoss () {
  if (userClicks == sequenceArray) {
    alert("You win ")
  } else {
    alert("You lost" + buttonClicked + " " + sequenceArray)
  }
}
function clearButton() {
  console.log("Is it geting here")
  console.log(sequenceArray)
}

function goToNextButton() {
  var x = 0;
  var ele = document.getElementById(sequenceArray[x]);
  ele.style.background = "white";
  /*for (i = 0; i < sequenceArray.length; i++) {

    var ele = document.getElementById(sequenceArray[i]);
        ele.style.background = "white";
        setInterval(clearButton, 500);*/
  }


function delayedPlaySequenceEnd(button, delay) {
  var ele = document.getElementById(button);
  setTimeout(function() {
      ele.className = "elementToFadeInAndOut";
  }, delay)
}

function playSequence() {
  for (var i = 0; i < sequenceArray.length; i++) {
    delayedPlaySequenceEnd(sequenceArray[i], i * 1000);
  }
}


document.getElementById('checkloss').addEventListener("click", checkLoss);
document.getElementById('start').addEventListener("click", playSequence);







//run set time out in the for loop
/*setTimeout(function(){
  greet("ben", 1)
})

function delayedGreeting (name, cnt, delay) {
  setTimeout (function() {
    greet(name, cnt);
  }, delay)
}
for (var i = 0; i < names.length, i++) {
  delayedGreeting(names[i], i, i * 1000)
}
//clearInterval for sequence
//


//make an array that is static
//can i track when they click
//queryselectorall
*/
