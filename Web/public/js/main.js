// Global Variables
let
    game = new Phaser.Game(1550, 600, Phaser.CANVAS, 'game'),
    Main = function () {},
    gameOptions = {
        playSound: true,
        playMusic: true
    };

let fioleGroup;
let child;
let startPosX;
let startPosY;


Main.prototype = {

    preload: function () {
        game.load.image('stars',    '../assets/images/stars.jpg');
        game.load.image('loading',  '../assets/images/loading.png');
        game.load.image('brand',    '../assets/images/logo.png');
        game.load.script('polyfill',   '../lib/polyfill.js');
        game.load.script('utils',   '../lib/utils.js');
        game.load.script('splash',  '../states/Splash.js');
        /*images jeu
        game.load.image('fiole', 'img/button-bg.png');
        game.load.image('fondBleu', 'img/fond-bleu.png');
        game.load.image('fondRouge', 'img/fond-rouge.png');
        game.load.image('rouge', 'img/rouge.png');
        game.load.spritesheet('button', 'img/button.png');*/
    },

    create: function () {
        game.state.add('Splash', Splash);
        game.state.start('Splash');
    }

};

game.state.add('Main', Main);
game.state.start('Main');
