let Credits = function(game) {};

Credits.prototype = {

  init: function () {
    this.optionCount = 1;
    this.creditCount = 0;

  },

  addCredit: function(task, author) {
    let authorStyle = { font: '40pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    let taskStyle = { font: '30pt TheMinion', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    let authorText = game.add.text(game.world.centerX, 900, author, authorStyle);
    let taskText = game.add.text(game.world.centerX, 950, task, taskStyle);
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
    let optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    let txt = game.add.text(10, (this.optionCount * 80) + 450, text, optionStyle);

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
    this.stage.disableVisibilityChange = true;
    let music = game.add.audio('credit-musique');
    music.play();


    let bg = game.add.sprite(0, 0, 'background3');
    this.addCredit('Game Developer', 'Porzio Theo');
    this.addCredit('Developer', 'Leleu ELiot');
    this.addCredit('Web Developer', 'Danel Theo');
    this.addCredit('Developer', 'Sotoca Corentin');
    this.addCredit('Developer', 'Chafai Djallal');
    this.addCredit('Web Developer', 'Pruvot Quentin');
    this.addCredit('for playing', 'Thank you');
    this.addMenuOption('<- Back', function (e) {
      music.stop();
      game.state.start("GameMenu");
    });
    game.add.tween(bg).to({alpha: 0}, 20000, Phaser.Easing.Cubic.Out, true, 40000);
  }

};
