alert("Ce jeu est encore en cours de développement")

let game = new Phaser.Game(1600, 600, Phaser.CANVAS, 'content', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('fiole', 'img/button-bg.png');
    game.load.image('fondBleu', 'img/fond-bleu.png');
    game.load.image('fondRouge', 'img/fond-rouge.png')

}

let fioleGroup;
let child;

function create() {
    game.stage.backgroundColor = '#56a5e2';

    fioleGroup = game.add.group();

    for (let i = 0; i < 3; i++) {
        fioleGroup.create(150+(i*234), 234, 'fiole');
    }
    fioleGroup.children[0].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[1].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[0].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[0].addChild(game.add.sprite(0,0,'fondBleu'));

    fioleGroup.children[2].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[2].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[1].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[0].addChild(game.add.sprite(0,0,'fondRouge'));

    fioleGroup.forEach(items => {
        items.inputEnabled = true
        items.input.enableDrag();
        game.physics.arcade.enable(items);
        items.events.onDragStart.add(startDrag, this);
        items.events.onDragStop.add(stopDrag, this);
    })

}

function update() {

}

let startPosX;
let startPosY;

function startDrag(item) {
    item.body.moves = false;
    startPosX = item.worldPosition.x;
    startPosY = item.worldPosition.y;
}

function stopDrag(item, pointer) {
    item.position.x = startPosX;
    item.position.y = startPosY;
    item.body.moves = true;

    game.physics.arcade.overlap(item, fioleGroup.children[0], function() {
        item.children.pop();
        fioleGroup.children[0].addChild(game.add.sprite(0,0,'fondBleu'));
    });
    game.physics.arcade.overlap(item, fioleGroup.children[1], function() {
        item.children.pop();
        fioleGroup.children[1].addChild(game.add.sprite(0,0,'fondBleu'));
    });
    game.physics.arcade.overlap(item, fioleGroup.children[2], function() {
        item.children.pop();
        fioleGroup.children[2].addChild(game.add.sprite(0,0,'fondBleu'));
    });
}
