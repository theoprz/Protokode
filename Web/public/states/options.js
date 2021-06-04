var Options = function(game) {};

Options.prototype = {

  menuConfig: {
    className: "default",
    startY: 260,
    startX: "center"
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
    game.add.sprite(0, 0, 'background3');
    game.add.existing(this.titleText);

    this.addMenuOption('<- Back', function () {
      game.state.start("GameMenu");
    });
  }
};


Phaser.Utils.mixinPrototype(Options.prototype, mixins);
