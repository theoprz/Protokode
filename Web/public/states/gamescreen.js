let gamescreen = function(game) {};

gamescreen.prototype = {

    preload: function () {
        game.load.image('fiole', 'img/button-bg.png');
        game.load.image('fondBleu', 'img/fond-bleu.png');
        game.load.image('fondRouge', 'img/fond-rouge.png');
        game.load.image('rouge', 'img/rouge.png');
        game.load.image('bleu', 'img/bleu.png');
    },

    create: function () {
    game.stage.backgroundColor = '#56a5e2';

    fioleGroup = game.add.group();

    for (let i = 0; i < 3; i++) {
        fioleGroup.create(150+(i*234), 234, 'fiole');
    }
// Hauteur: (51)
    fioleGroup.children[0].addChild(game.add.sprite(0,0,'fondBleu'));
    fioleGroup.children[0].addChild(game.add.sprite(0,0, 'rouge'));
    fioleGroup.children[0].addChild(game.add.sprite(0,-50,'bleu'));
    fioleGroup.children[0].addChild(game.add.sprite(0,-100,'rouge'));
    fioleGroup.children[2].addChild(game.add.sprite(0,0,'fondRouge'));
    fioleGroup.children[2].addChild(game.add.sprite(0,0,'bleu'));
    fioleGroup.children[2].addChild(game.add.sprite(0,-50,'rouge'));
    fioleGroup.children[2].addChild(game.add.sprite(0,-100,'bleu'));

    fioleGroup.forEach(items => {
        items.inputEnabled = true
        items.input.enableDrag();
        game.physics.arcade.enable(items);
        items.events.onDragStart.add(this.startDrag, this);
        items.events.onDragStop.add(this.stopDrag, this);
    })

    },

    update: function () {
    //tubeToTab(fioleGroup.children[0]);
    if(this.win(this.gameToTab(this.emptyVials(this.createMatrix(fioleGroup.children.length))))){
        game.state.start("GameOver");
    }

    if(!fioleGroup.children[0].children[0] || !fioleGroup.children[1].children[0] || !fioleGroup.children[2].children[0] || !fioleGroup.children[0]){
        return;
    }
    fioleGroup.forEach(items => {
        if(items.children[0].key === "rouge"){
            items.children.pop();
            items.addChild(game.add.sprite(0, 0, 'fondRouge'));
        }
        if(items.children[0].key === "bleu"){
            items.children.pop();
            items.addChild(game.add.sprite(0, 0, 'fondBleu'));
        }
    })

    },


    startDrag: function (item) {
    item.body.moves = false;
    startPosX = item.worldPosition.x;
    startPosY = item.worldPosition.y;
},

    stopDrag: async function(item) {
    item.position.x = startPosX;
    item.position.y = startPosY;
    item.body.moves = true;
    let draggedHigherPos = item.children.length - 1;
    if(item.children.length === 0) return;
    let higherColor = item.children[draggedHigherPos].key;

    if(draggedHigherPos < 0) draggedHigherPos = 0;

    switch(higherColor){
        case "fondRouge": {
            higherColor = "rouge";
            break;
        }
        case "fondBleu": {
            higherColor = "bleu"
            break;
        }
    }
    game.physics.arcade.overlap(item, fioleGroup.children[0], function() {
        let pointerHigherPos = fioleGroup.children[0].children.length - 1;
        switch(higherColor){
            case "fondRouge":{
                if(fioleGroup.children[0].children[pointerHigherPos].key !== ("rouge" || "fondRouge")){
                    return;
                }
                break;
            }
            case "fondBleu":{
                break;
            }
            case "rouge":{
                break;
            }
            case "bleu":{
                break;
            }
        }
        item.children.pop();
        if(fioleGroup.children[0].children.length >= 2){
            fioleGroup.children[0].addChild(game.add.sprite(0,-(fioleGroup.children[0].children.length - 1) * 50, higherColor));
        }else {
            fioleGroup.children[0].addChild(game.add.sprite(0,0, higherColor));
        }
    });

    game.physics.arcade.overlap(item, fioleGroup.children[1], function() {
        console.log(item.key);
        item.children.pop();
        if(fioleGroup.children[1].children.length >= 2){
            fioleGroup.children[1].addChild(game.add.sprite(0,-(fioleGroup.children[1].children.length - 1) * 50, higherColor));
        }else {
            fioleGroup.children[1].addChild(game.add.sprite(0,0, higherColor));
        }
    });
    game.physics.arcade.overlap(item, fioleGroup.children[2], function() {
        item.children.pop();
        if(fioleGroup.children[2].children.length >= 2){
            fioleGroup.children[2].addChild(game.add.sprite(0,-(fioleGroup.children[2].children.length - 1) * 50, higherColor));
        }else {
            fioleGroup.children[2].addChild(game.add.sprite(0,0, higherColor));
        }
    });
},

    isEmpty: function (tube){
    return tube.children.length === 0;
},

    isFull: function (tube){
    return tube.children.length === 4;
},

    win: function (tab) {
    let isWin = true;
    let tmp = 0;

    for (let i = 0; i < fioleGroup.children.length; i++) {
        if(tab[i][0] === undefined) tab[i][0] = 0;
        console.log(tab[1][0]);
        for (let j = 0; j < 4; j++) {
            if (j === 0) {
                tmp = tab[i][j];
                console.log("Tmp:" + tmp);
            }
            if(tab[i][j] !== tmp) {
                isWin = false;
            }
        }
    }
    if(isWin === true){
        console.log("C'est Win !");
    }else{
        console.log("Pas encore win....");
    }
    return isWin;
},

    tubeToTab: function (tube){
    let perfectTab = new Array(4);
    tube.children.every(async colors => {
        await perfectTab.push(colors);
    });
    return perfectTab;
},

    createMatrix: function (rows) {
    let x = new Array(rows);

    for (let i = 0; i < x.length; i++) {
        x[i] = new Array(4);
    }

    return x;
},

    emptyVials: function (tab){
    for(let i = 0; i < fioleGroup.children.length; i++){
        for(let j = 0; j < 4; j++){
            while(tab[i][j] == null){
                tab[i][j] = 0;
            }
        }
    }
    return tab;
},

    gameToTab: function (tab){
    let i = 0;
    let j = 0;
    fioleGroup.children.every(async tubes => {
        i++;
        j=0;
        await tubes.children.every(async colours=>{
            j++;
            let key;
            if(colours.key == null) {
                tab[i-1][j-1] = 0;
                return;
            }
            switch(colours.key){
                case "rouge":{
                    key = 1;
                    break;
                }
                case "fondRouge":{
                    key = 1;
                    break;
                }
                case "bleu":{
                    key = 2;
                    break;
                }
                case "fondBleu":{
                    key = 2;
                    break;
                }
                default:{
                    key = 0;
                    break;
                }
            }

            tab[i-1][j-1] = key;
        })
    });
    return tab;
}

};
