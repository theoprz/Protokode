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
<<<<<<< Updated upstream
    let playSound = gameOptions.playSound,
        playMusic = gameOptions.playMusic;

    game.add.sprite(0, 0, 'background3');
    game.add.existing(this.titleText);
    /*
    this.addMenuOption(playMusic ? 'Mute Music' : 'Play Music', function (target) {
      playMusic = !playMusic;
      target.text = playMusic ? 'Mute Music' : 'Play Music';
      musicPlayer.volume = playMusic ? 1 : 0;
    });
    this.addMenuOption(playSound ? 'Mute Sound' : 'Play Sound', function (target) {
      playSound = !playSound;
      target.text = playSound ? 'Mute Sound' : 'Play Sound';
    });
    */
    
=======
    game.add.sprite(0, 0, 'background6');
>>>>>>> Stashed changes
    this.addMenuOption('<- Back', function () {
      game.state.start("GameMenu");
    });
  }
};

<<<<<<< Updated upstream
function actionOnClick () {
  music.paused = !music.paused
}
=======
>>>>>>> Stashed changes

Phaser.Utils.mixinPrototype(Options.prototype, mixins);
