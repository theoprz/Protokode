let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
    backgroundColor: '#56a5e2',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};
alert("Ce jeu est encore en cours de développement")

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('buttonBG', 'img/button-bg.png');
    this.load.image('fioleB', 'img/fiole-b.png');
}

function create ()
{
    //let glass1 = this.add.image(0, 0, 'buttonBG');
    let glass11 = this.add.image(0, 0, 'fioleB');
    let glass2 = this.add.image(0, 0, 'buttonBG');
    let glass3 = this.add.image(0, 0, 'buttonBG');
    let glass4 = this.add.image(0, 0, 'buttonBG');

    let container = this.add.container(72, 234, [ glass11 ]);
    let container2 = this.add.container(272, 234, [ glass2 ]);
    let container3 = this.add.container(472, 234, [ glass3 ]);
    let container4 = this.add.container(672, 234, [ glass4 ]);

    container.setSize(glass11.width, glass11.height);
    container2.setSize(glass2.width, glass2.height);
    container3.setSize(glass3.width, glass3.height);
    container4.setSize(glass4.width, glass4.height);

    container.setInteractive();
    container2.setInteractive();
    container3.setInteractive();
    container4.setInteractive();

    this.input.setDraggable(container);
    this.input.setDraggable(container2);
    this.input.setDraggable(container3);
    this.input.setDraggable(container4);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    let posx = 0;
    let posy = 0;

    this.input.on('dragstart', function (pointer, gameObject) {

        posx = gameObject.x;
        posy = gameObject.y;

    });

    this.input.on('dragend', function (pointer, gameObject) {

        gameObject.x = posx;
        gameObject.y = posy;

    });
}
