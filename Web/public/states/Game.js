let Game = function(game) {};

Game.prototype = {

  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    let optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    let txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 50, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    let onOver = function (target) {
      target.fill = "#FF0000";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    let onOut = function (target) {
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




    this.addMenuOption('Level 1 -5', function (e) {
      this.game.state.start("niveau1");
    });
    this.addMenuOption('Level 6 -10', function (e) {
      this.game.state.start("niveau2");
    });
    this.addMenuOption('Level 11 -15', function (e) {
      this.game.state.start("niveau3");
    });
    this.addMenuOption('Level 16 -20', function (e) {
      this.game.state.start("niveau4");
    });
    this.addMenuOption('Menu', function (e) {
      this.game.state.start("GameMenu");
    });

  }
};
