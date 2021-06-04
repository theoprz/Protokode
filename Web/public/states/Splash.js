let Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', '../lib/style.js');
    game.load.script('mixins', '../lib/mixins.js');
    game.load.script('WebFont', '../vendor/webfontloader.js');
    game.load.script('gamemenu','../states/gamemenu.js');
    game.load.script('game', '../states/Game.js');
    game.load.script('gameover','../states/gameover.js');
    game.load.script('gamescreen','../states/gamescreen.js');
    game.load.script('credits', '../states/credits.js');
    game.load.script('options', '../states/options.js');
    game.load.script('niveau1', '../states/niveau1.js');
    game.load.script('niveau2', '../states/niveau2.js');
    game.load.script('niveau3', '../states/niveau3.js');
    game.load.script('niveau4', '../states/niveau4.js');
  },

  loadBgm: function () {
    game.load.audio('credit-musique', '../assets/bgm/Project X.mp3');
  },

  loadImages: function () {
    game.load.image('background3', '../assets/images/background3.png');
    game.load.image('background4', '../assets/images/background4.png');
    game.load.image('background5', '../assets/images/background5.png');
    game.load.image('background6', '../assets/images/background6.png');
    game.load.image('win', '../assets/images/win.png');
  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['../assets/style/theminion.css']
      }
    }
  },

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 480, "loading");
    this.logo       = game.make.sprite(game.world.centerX, 260, 'brand');
    this.status     = game.make.text(game.world.centerX, 530, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
    game.add.sprite(0, 0, 'bg-loading');
    game.add.existing(this.logo).scale.setTo(0.3);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();

  },

  addGameStates: function () {
    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
    game.state.add("gamescreen",gamescreen);
    game.state.add("Credits",Credits);
    game.state.add("Options",Options);
    game.state.add("niveau1",niveau1);
    game.state.add("niveau2",niveau2);
    game.state.add("niveau3",niveau3);
    game.state.add("niveau4",niveau4);
  },

  create: function() {
    this.status.setText('Ready!');
    this.addGameStates();

    setTimeout(function () {
      game.state.start("GameMenu");
    }, 1000);
  }
};
