<<<<<<< Updated upstream
let Game = function(game) {};
=======
var Game = function(game) {};
>>>>>>> Stashed changes

Game.prototype = {

  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
<<<<<<< Updated upstream
    var txt = game.add.text(120, (this.optionCount * 80) + 50, text, optionStyle);
=======
    var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 50, text, optionStyle);
>>>>>>> Stashed changes
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#FF0000";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "white";
      target.stroke = "rgba(0,0,0,0)";
      txt.useHandCursor = false;
    };
    //txt.useHandCursor = true;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback, this);
    txt.events.onInputOver.add(onOver, this);
    txt.events.onInputOut.add(onOut, this);

    this.optionCount ++;
  },

  create: function () {
    this.stage.disableVisibilityChange = false;
    game.add.sprite(0, 0, 'background5');

<<<<<<< Updated upstream



    this.addMenuOption('Level 1', function (e) {
      this.game.state.start("gamescreen");
    });
    this.addMenuOption('Level 2', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 3', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 4', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 5', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 6', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 7', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 8', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 9', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 10', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 11', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 12', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 13', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 14', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 15', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 16', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 17', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 18', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 19', function (e) {
      this.game.state.start("GameOver");
    });
    this.addMenuOption('Level 20', function (e) {
      this.game.state.start("GameOver");
    });

  }
};
=======
    

    
    this.addMenuOption('Level 1-5', function (e) {
      this.game.state.start("niveau1");
    });
    this.addMenuOption('Level 6-10', function (e) {
      this.game.state.start("niveau2");
    });
    this.addMenuOption('Level 11-15', function (e) {
      this.game.state.start("niveau3");
    });
    this.addMenuOption('Level 16-20', function (e) {
      this.game.state.start("niveau4");
    });
    this.addMenuOption('<- Back', function () {
        game.state.start("Game");
      });
    
  }
};
>>>>>>> Stashed changes
