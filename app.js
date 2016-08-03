  var board = {
    sequence: [],
    copy: [],
    active: true,
    /*
    name: "Simon-Says",
    activeButton: "white",
    topRight: document.getElementById("top-right").id,
    topLeft: document.getElementById("top-left").id,
    bottomRight: document.getElementById("bottom-right").id,
    bottomLeft: document.getElementById("bottom-left").id,
    buttons: [topRight, topLeft, bottomRight, bottomLeft],
    userClicks: [],
    sequenceArray: [topRight, topLeft],
    buttonClicked: document.getElementsByClassName("buttons"),
    ready: false,
    */
    init: function() {
      var self = this;
      $('data-action=start]').on('click', function() {
        console.log("this got logged")
        self.newGame()
      })
    },

    newGame: function() {
      this.sequence = [];
      this.copy = [];
      this.round = 0;
      this.activate = true
      this.newRound();
    },

    newRound: function() {
      this.sequence.push(Math.floor((Math.random()*4)+1));
      this.copy = this.sequence.slick(0);
      this.animate(this.sequence);
    },

    animate: function(sequence) {
      var i = 0;
      var self = this;
      var interval = setInterval(function() {
        self.lightUp(sequence[i]);
        i++
        if (i >= sequence.length) {
          clearInterval(interval);
          self.activateBoard();
        }
      }, 500);
    },

    lightUp: function(tile) {
      var $tile = $('[data-tile=' + tile + ']').addClass('lit');
      window.setTimeout(function() {
        $tile.removeClass('lit');
      }, 300);
    },

    activateClicks: function() {
      var self = this;
      $('.wrapper-circle')
        .on('click', '[data-tile]', function(ele) {
          self.registerClick(ele);
        })
    },

    deactivateClicks: function() {
      $('.wrapper-circle')
        .off('click', '[data-tile}')
    },

    trackClick: function(ele) {
      var desiredResponse = this.copy.shift();
      var actualResponse = $(ele.target).data('tile');
      this.active = (desiredResponse === actualResponse);
      this.checkLoss();
    },

    checkLoss: function() {
      if (this.copy.length === 0 && this.active) {
        this.deactivateBoard();
        this.newRound();
      } else if (!this.active) {
        this.deactivateClicks();
      }
    },
  }








































