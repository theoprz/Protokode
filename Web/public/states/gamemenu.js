<<<<<<< Updated upstream
let GameMenu = function() {};
=======
var GameMenu = function() {};
>>>>>>> Stashed changes


GameMenu.prototype = {

  menuConfig: {
    startY: 200,
    startX: 670
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Water Sort Puzzle", {
      font: 'bold 60pt TheMinion',
      fill: '#FF0000',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {
<<<<<<< Updated upstream

=======
    music.stop();
>>>>>>> Stashed changes
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'background4');
    game.add.existing(this.titleText);

    this.addMenuOption('Start', function () {
      game.state.start("Game");
    });
    this.addMenuOption('Options', function () {
      game.state.start("Options");
    });
    this.addMenuOption('Credits', function () {
      game.state.start("Credits");
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
