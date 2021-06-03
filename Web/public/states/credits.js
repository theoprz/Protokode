<<<<<<< Updated upstream
let Credits = function(game) {};
=======

var Credits = function(game) {};
>>>>>>> Stashed changes

Credits.prototype = {

  init: function () {
    this.optionCount = 1;
    this.creditCount = 0;

  },

  addCredit: function(task, author) {
<<<<<<< Updated upstream
    let authorStyle = { font: '40pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    let taskStyle = { font: '30pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    let authorText = game.add.text(game.world.centerX, 900, author, authorStyle);
    let taskText = game.add.text(game.world.centerX, 950, task, taskStyle);
=======
    var authorStyle = { font: '40pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    var taskStyle = { font: '30pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    var authorText = game.add.text(game.world.centerX, 900, author, authorStyle);
    var taskText = game.add.text(game.world.centerX, 950, task, taskStyle);
>>>>>>> Stashed changes
    authorText.anchor.setTo(0.5);
    authorText.stroke = "rgba(0,0,0,0)";
    authorText.strokeThickness = 4;
    taskText.anchor.setTo(0.5);
    taskText.stroke = "rgba(0,0,0,0)";
    taskText.strokeThickness = 4;
    game.add.tween(authorText).to( { y: -300 }, 20000, Phaser.Easing.Cubic.Out, true, this.creditCount * 4000);
    game.add.tween(taskText).to( { y: -200 }, 20000, Phaser.Easing.Cubic.Out, true, this.creditCount * 4000);
    this.creditCount ++;
  },

  addMenuOption: function(text, callback) {
<<<<<<< Updated upstream
    let optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    let txt = game.add.text(10, (this.optionCount * 80) + 450, text, optionStyle);

    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    let onOver = function (target) {
=======
    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(10, (this.optionCount * 80) + 450, text, optionStyle);

    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
>>>>>>> Stashed changes
      target.fill = "#FF0000";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
<<<<<<< Updated upstream
    let onOut = function (target) {
=======
    var onOut = function (target) {
>>>>>>> Stashed changes
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
    this.stage.disableVisibilityChange = true;
<<<<<<< Updated upstream
    /*if (gameOptions.playMusic) {
      musicPlayer.stop();
      musicPlayer = game.add.audio('exit');
      musicPlayer.play();
    }*/

    let bg = game.add.sprite(0, 0, 'background3');
=======
      music = game.add.audio('exit');
      music.play();
    var bg = game.add.sprite(0, 0, 'background3');
>>>>>>> Stashed changes
    this.addCredit('Game Developer', 'Porzio Theo');
    this.addCredit('Developer', 'Leleu ELiot');
    this.addCredit('Web Developer', 'Danel Theo');
    this.addCredit('Developer', 'Sotoca Corentin');
    this.addCredit('Developer', 'Chafai Djallal');
    this.addCredit('Web Developer', 'Pruvot Quentin');
    this.addCredit('for playing', 'Thank you');
    this.addMenuOption('<- Back', function (e) {
      game.state.start("GameMenu");
    });
    game.add.tween(bg).to({alpha: 0}, 20000, Phaser.Easing.Cubic.Out, true, 40000);
  }

};
