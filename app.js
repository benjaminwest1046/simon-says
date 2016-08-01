window.onload = function() {

  var board = {
    name: "Simon-Says",
    activeButton: "black"
    buttons: [
      topRight    = document.getElementById("top-right").id,
      topLeft     =  document.getElementById("top-left").id,
      bottomRight = document.getElementById("bottom-right").id,
      bottomLeft  = document.getElementById("bottom-left").id
    ],
    pickButton: function(){
      var currentButton = board.buttons[Math.floor(Math.random() * this.buttons.length)];
      console.log("Pick button function = " + '"' + "#" + currentButton + '"')
      return(currentButton)
    },
    changeColor: function() {
      var buttonToChange = document.getElementById(board.pickButton());
      console.log("Change color function = " + board.pickButton());
      buttonToChange.style.background = activeButton;
    }
  }

  board.changeColor()

}
