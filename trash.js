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
  /*for (i = 0; i < sequenceArray.length; i++) {

    var ele = document.getElementById(sequenceArray[i]);
        ele.style.background = "white";
        setInterval(clearButton, 500);*/
  }

/*,
    sequence: function() {
      //var nextButton = board.buttons[Math.floor(Math.random() * board.buttons.length)];
      //board.sequenceArray.push(nextButton);
      for (i = 0; i < board.sequenceArray.length; i++) {
        var ele = document.getElementById(board.sequenceArray[i]);
        ele.style.background = board.activeButton;
      }
    }*/


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
