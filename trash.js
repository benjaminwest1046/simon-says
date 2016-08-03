
function registerClick () {
  userClicks =
}

function checkLoss () {
  if (ready) {
    for (var i = 0; i < userClicks.length; i++) {
      if (userClicks[i] != sequenceArray[i]) {
        alert("You lose");
        //resetBoard();
        userClicks = [];
        i = 100
      } else {
          setTimeout(function() {

          })
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
    console.log("Delayed sequence here")
  }, delay)
  setTimeout(function() {
    resetClasses();
  }, delay + 200)

}

function playSequence() {
    for (var i = 0; i < sequenceArray.length; i++) {
    delayedPlaySequence(sequenceArray[i], i * 1000);
  };
    setTimeout(function() {
      ready = true;
      console.log("Other sequence here")
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













pickButton: function(){
      var currentButton = board.buttons[Math.floor(Math.random() * this.buttons.length)];
      console.log("Pick button function = " + '"' + "#" + currentButton + '"')
      return(currentButton)
    },
    changeColor: function() {
      var buttonToChange = document.getElementById(board.pickButton());
      console.log("Change color function = " + board.pickButton());
      buttonToChange.style.background = activeButton;
    },
    startGame: function() {
    var move = board.changeColor(board.pickButton);
    setTimeout(myFunction,  )

    }

function goToNextButton() {
  var x = 0;
  var ele = document.getElementById(sequenceArray[x]);
  ele.style.background = "white";
}

if (ready) {
    console.log(" I am working")
    for (i = 0; i < buttonClicked.length; i++) {
      buttonClicked[i].addEventListener("click", function(){
      userClicks.push(this.id)
    }
    });
      if (userClicks[i] != sequenceArray[i]) {
        console.log(userClicks[i] + " ------- " + sequenceArray[i])
        console.log("I am also working")
        alert("You lose");
        //resetBoard();
      }
    }
  }
}

function checkLoss () {
  if (ready){
    for (var i = 0; i < sequenceArray.length; i++) {
      if (userClicks[i] != sequenceArray[i]) {
        alert("You lose");
      }
    }
  userClicks = [];
  setTimeout(function() {
    playSequence();
  },100)
  playSequence();
  }
}

document.getElementById('start').addEventListener("click", start());

function start() {
  var sequence = [];
  var copy = [];
  var round = 0;
  var ready = true;
  var newRound();
}

function newRound() {
  sequence.push(Math.floor((Math.random()*4)+1))
  copy = sequence.slice(0)
  console.log(copy)
  playSequence(sequence);
}

function allowClicks() {
  for (var i = 0; i < buttons.length; i++)
}

function playSequence(sequence) {
  var i = 0;
  var interval = setInterval(function() {
    lightUp(sequence[i]);
    i++
    if (i >= sequence.length) {
      clearInterval(interval);
      allowClicks();
    }
  }, 1000);
}

function lightUp(button) {
  var button = getElementById(sequence[i]).className('active');
  setTimeout(function() {
    button.ClassName = ""
  }, 300);
}
