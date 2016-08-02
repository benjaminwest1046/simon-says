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
