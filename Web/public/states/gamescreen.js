let gamescreen = function(game) {};

gamescreen.prototype = {

    init: function(data){
        this.level = data.level || [[0,0,1,1],[0,0,1,1]];
        this.levelNumber = data.levelNumber;
    },

    preload: function () {
        game.load.image('fiole', 'img/button-bg.png');
        game.load.image('fondBleu', 'img/fond-bleu.png');
        game.load.image('fondRouge', 'img/fond-rouge.png');
        game.load.image('rouge', 'img/rouge.png');
        game.load.image('bleu', 'img/bleu.png');
        game.load.image('fondJaune', 'img/fond-jaune.png');
        game.load.image('jaune', 'img/jaune.png');
        game.load.image('fondViolet', 'img/fond-violet.png');
        game.load.image('violet', 'img/violet.png');
        game.load.image('fondVert', 'img/fond-vert.png');
        game.load.image('vert', 'img/vert.png');
        game.load.spritesheet('button', 'img/restart_button.png', 512, 512);
    },

    create: function () {
    game.stage.backgroundColor = '#56a5e2';

    fioleGroup = game.add.group();

    this.tabToGame(this.level);
    textLvl = game.add.text(game.world.centerX, 30, "Level: " + this.levelNumber);
    button = game.add.button(1450, 0, 'button', this.actionOnClick, this, 2, 1, 0);
    button.scale.setTo(0.2, 0.2);
// Hauteur: (51)

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

    //this.tabToGame(this.gameToTab(this.emptyVials(this.createMatrix(fioleGroup.children.length))));
    if((fioleGroup.children[0] && !fioleGroup.children[0].children[0]) || (fioleGroup.children[1] && !fioleGroup.children[1].children[0]) || (fioleGroup.children[2] && !fioleGroup.children[2].children[0]) || (fioleGroup.children[3] && !fioleGroup.children[3].children[0]) || (fioleGroup.children[4] && !fioleGroup.children[4].children[0])){
        return 0;
    }

    //this.refreshTubes();

    },


    actionOnClick: function(){
        alert("Level Restarted !");
        game.state.restart(true, false, {level: this.level, levelNumber: this.levelNumber});
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
    let higherColor = item.children[draggedHigherPos].key;

    switch(higherColor){
        case "fondRouge": {
            higherColor = "rouge";
            break;
        }
        case "fondBleu": {
            higherColor = "bleu"
            break;
        }
        case "fondJaune": {
            higherColor = "jaune"
            break;
        }
        case "fondVert": {
            higherColor = "vert"
            break;
        }
        case "fondViolet": {
            higherColor = "violet"
            break;
        }
    }
    game.physics.arcade.overlap(item, fioleGroup.children[0], function() {
        let pointerHigherPos = fioleGroup.children[0].children.length;
        switch(higherColor){
            case "fondRouge":
            case "rouge":{
                if(fioleGroup.children[0].children[pointerHigherPos] && fioleGroup.children[0].children[pointerHigherPos].key !== 'rouge' && fioleGroup.children[0].children[pointerHigherPos].key !== 'fondRouge'){
                    return;
                }
                break;
            }
            case "fondBleu":
            case "bleu":{
                if(fioleGroup.children[0].children[pointerHigherPos] && fioleGroup.children[0].children[pointerHigherPos].key !== 'bleu' && fioleGroup.children[0].children[pointerHigherPos].key !== 'fondBleu'){
                    return;
                }
                break;
            }
            case "fondJaune":
            case "jaune":{
                if(fioleGroup.children[0].children[pointerHigherPos] && fioleGroup.children[0].children[pointerHigherPos].key !== 'jaune' && fioleGroup.children[0].children[pointerHigherPos].key !== 'fondJaune'){
                    return;
                }
                break;
            }
            case "fondVert":
            case "vert":{
                if(fioleGroup.children[0].children[pointerHigherPos] && fioleGroup.children[0].children[pointerHigherPos].key !== 'vert' && fioleGroup.children[0].children[pointerHigherPos].key !== 'fondVert'){
                    return;
                }
                break;
            }
            case "fondViolet":
            case "violet":{
                if(fioleGroup.children[0].children[pointerHigherPos] && fioleGroup.children[0].children[pointerHigherPos].key !== 'violet' && fioleGroup.children[0].children[pointerHigherPos].key !== 'fondViolet'){
                    return;
                }
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
        let pointerHigherPos = fioleGroup.children[1].children.length;
        switch(higherColor){
            case "fondRouge":
            case "rouge":{
                if(fioleGroup.children[1].children[pointerHigherPos] && fioleGroup.children[1].children[pointerHigherPos].key !== 'rouge' && fioleGroup.children[1].children[pointerHigherPos].key !== 'fondRouge'){
                    return;
                }
                break;
            }
            case "fondBleu":
            case "bleu":{
                if(fioleGroup.children[1].children[pointerHigherPos] && fioleGroup.children[1].children[pointerHigherPos].key !== 'bleu' && fioleGroup.children[1].children[pointerHigherPos].key !== 'fondBleu'){
                    return;
                }
                break;
            }
            case "fondJaune":
            case "jaune":{
                if(fioleGroup.children[1].children[pointerHigherPos] && fioleGroup.children[1].children[pointerHigherPos].key !== 'jaune' && fioleGroup.children[1].children[pointerHigherPos].key !== 'fondJaune'){
                    return;
                }
                break;
            }
            case "fondVert":
            case "vert":{
                if(fioleGroup.children[1].children[pointerHigherPos] && fioleGroup.children[1].children[pointerHigherPos].key !== 'vert' && fioleGroup.children[1].children[pointerHigherPos].key !== 'fondVert'){
                    return;
                }
                break;
            }
            case "fondViolet":
            case "violet":{
                if(fioleGroup.children[1].children[pointerHigherPos] && fioleGroup.children[1].children[pointerHigherPos].key !== 'violet' && fioleGroup.children[1].children[pointerHigherPos].key !== 'fondViolet'){
                    return;
                }
                break;
            }
        }
        item.children.pop();
        if(fioleGroup.children[1].children.length >= 2){
            fioleGroup.children[1].addChild(game.add.sprite(0,-(fioleGroup.children[1].children.length - 1) * 50, higherColor));
        }else {
            fioleGroup.children[1].addChild(game.add.sprite(0,0, higherColor));
        }
    });
    game.physics.arcade.overlap(item, fioleGroup.children[2], function() {
        let pointerHigherPos = fioleGroup.children[2].children.length;
        switch(higherColor){
            case "fondRouge":
            case "rouge":{
                if(fioleGroup.children[2].children[pointerHigherPos] && fioleGroup.children[2].children[pointerHigherPos].key !== 'rouge' && fioleGroup.children[2].children[pointerHigherPos].key !== 'fondRouge'){
                    return;
                }
                break;
            }
            case "fondBleu":
            case "bleu":{
                if(fioleGroup.children[2].children[pointerHigherPos] && fioleGroup.children[2].children[pointerHigherPos].key !== 'bleu' && fioleGroup.children[2].children[pointerHigherPos].key !== 'fondBleu'){
                    return;
                }
                break;
            }
            case "fondJaune":
            case "jaune":{
                if(fioleGroup.children[2].children[pointerHigherPos] && fioleGroup.children[2].children[pointerHigherPos].key !== 'jaune' && fioleGroup.children[2].children[pointerHigherPos].key !== 'fondJaune'){
                    return;
                }
                break;
            }
            case "fondVert":
            case "vert":{
                if(fioleGroup.children[2].children[pointerHigherPos] && fioleGroup.children[2].children[pointerHigherPos].key !== 'vert' && fioleGroup.children[2].children[pointerHigherPos].key !== 'fondVert'){
                    return;
                }
                break;
            }
            case "fondViolet":
            case "violet":{
                if(fioleGroup.children[2].children[pointerHigherPos] && fioleGroup.children[2].children[pointerHigherPos].key !== 'violet' && fioleGroup.children[2].children[pointerHigherPos].key !== 'fondViolet'){
                    return;
                }
                break;
            }
        }
        item.children.pop();
        if(fioleGroup.children[2].children.length >= 2){
            fioleGroup.children[2].addChild(game.add.sprite(0,-(fioleGroup.children[2].children.length - 1) * 50, higherColor));
        }else {
            fioleGroup.children[2].addChild(game.add.sprite(0,0, higherColor));
        }
    });
    game.physics.arcade.overlap(item, fioleGroup.children[3], function() {
        let pointerHigherPos = fioleGroup.children[3].children.length;
        switch(higherColor){
            case "fondRouge":
            case "rouge":{
                if(fioleGroup.children[3].children[pointerHigherPos] && fioleGroup.children[3].children[pointerHigherPos].key !== 'rouge' && fioleGroup.children[3].children[pointerHigherPos].key !== 'fondRouge'){
                    return;
                }
                break;
            }
            case "fondBleu":
            case "bleu":{
                if(fioleGroup.children[3].children[pointerHigherPos] && fioleGroup.children[3].children[pointerHigherPos].key !== 'bleu' && fioleGroup.children[3].children[pointerHigherPos].key !== 'fondBleu'){
                    return;
                }
                break;
            }
            case "fondJaune":
            case "jaune":{
                if(fioleGroup.children[3].children[pointerHigherPos] && fioleGroup.children[3].children[pointerHigherPos].key !== 'jaune' && fioleGroup.children[3].children[pointerHigherPos].key !== 'fondJaune'){
                    return;
                }
                break;
            }
            case "fondVert":
            case "vert":{
                if(fioleGroup.children[3].children[pointerHigherPos] && fioleGroup.children[3].children[pointerHigherPos].key !== 'vert' && fioleGroup.children[3].children[pointerHigherPos].key !== 'fondVert'){
                    return;
                }
                break;
            }
            case "fondViolet":
            case "violet":{
                if(fioleGroup.children[3].children[pointerHigherPos] && fioleGroup.children[3].children[pointerHigherPos].key !== 'violet' && fioleGroup.children[3].children[pointerHigherPos].key !== 'fondViolet'){
                    return;
                }
                break;
            }
        }
        item.children.pop();
            if(fioleGroup.children[3].children.length >= 2){
                fioleGroup.children[3].addChild(game.add.sprite(0,-(fioleGroup.children[3].children.length - 1) * 50, higherColor));
            }else {
                fioleGroup.children[3].addChild(game.add.sprite(0,0, higherColor));
            }
    });
    game.physics.arcade.overlap(item, fioleGroup.children[4], function() {
        let pointerHigherPos = fioleGroup.children[1].children.length;
        switch(higherColor){
            case "fondRouge":
            case "rouge":{
                if(fioleGroup.children[4].children[pointerHigherPos] && fioleGroup.children[4].children[pointerHigherPos].key !== 'rouge' && fioleGroup.children[4].children[pointerHigherPos].key !== 'fondRouge'){
                    return;
                }
                break;
            }
            case "fondBleu":
            case "bleu":{
                if(fioleGroup.children[4].children[pointerHigherPos] && fioleGroup.children[4].children[pointerHigherPos].key !== 'bleu' && fioleGroup.children[4].children[pointerHigherPos].key !== 'fondBleu'){
                    return;
                }
                break;
            }
            case "fondJaune":
            case "jaune":{
                if(fioleGroup.children[4].children[pointerHigherPos] && fioleGroup.children[4].children[pointerHigherPos].key !== 'jaune' && fioleGroup.children[4].children[pointerHigherPos].key !== 'fondJaune'){
                    return;
                }
                break;
            }
            case "fondVert":
            case "vert":{
                if(fioleGroup.children[4].children[pointerHigherPos] && fioleGroup.children[4].children[pointerHigherPos].key !== 'vert' && fioleGroup.children[4].children[pointerHigherPos].key !== 'fondVert'){
                    return;
                }
                break;
            }
            case "fondViolet":
            case "violet":{
                if(fioleGroup.children[4].children[pointerHigherPos] && fioleGroup.children[4].children[pointerHigherPos].key !== 'violet' && fioleGroup.children[4].children[pointerHigherPos].key !== 'fondViolet'){
                    return;
                }
                break;
            }
        }
        item.children.pop();
        if(fioleGroup.children[4].children.length >= 2){
            fioleGroup.children[4].addChild(game.add.sprite(0,-(fioleGroup.children[4].children.length - 1) * 50, higherColor));
        }else {
            fioleGroup.children[4].addChild(game.add.sprite(0,0, higherColor));
        }
    });

    this.refreshTubes();
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
        for (let j = 0; j < 4; j++) {
            if (j === 0) {
                tmp = tab[i][j];
            }
            if(tab[i][j] !== tmp) {
                isWin = false;
            }
        }
    }
    if(isWin === true){
        console.log("C'est Win !");
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
                case "rouge":
                case "fondRouge":{
                    key = 1;
                    break;
                }
                case "bleu":
                case "fondBleu":{
                    key = 2;
                    break;
                }
                case "jaune":
                case "fondJaune":{
                    key = 3;
                    break;
                }
                case "vert":
                case "fondVert":{
                    key = 4;
                    break;
                }
                case "violet":
                case "fondViolet":{
                    key = 5;
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
},

    tabToGame: function(tab){
        for (let i = 0; i < tab.length; i++) {
            fioleGroup.create(150+(i*234), 234, 'fiole');
        }
        let i = 0;
        tab.forEach(tubes =>{
            tubes.forEach(async colours =>{
                switch(colours){
                    case 1:{ // rouge
                        if(fioleGroup.children[i].children.length < 1){
                            fioleGroup.children[i].addChild(game.add.sprite(0,-(fioleGroup.children[i].children.length) * 50, 'fondRouge'));
                        }else{
                            fioleGroup.children[i].addChild(game.add.sprite(0,(-(fioleGroup.children[i].children.length) + 1) * 50, 'rouge'));
                        }
                        break;
                    }
                    case 2:{ // bleu
                        if(fioleGroup.children[i].children.length <= 0){
                            fioleGroup.children[i].addChild(game.add.sprite(0,-(fioleGroup.children[i].children.length) * 50, 'fondBleu'));
                        }else{
                            fioleGroup.children[i].addChild(game.add.sprite(0,(-(fioleGroup.children[i].children.length) + 1) * 50, 'bleu'));
                        }
                        break;
                    }
                    case 3:{ // bleu
                        if(fioleGroup.children[i].children.length <= 0){
                            fioleGroup.children[i].addChild(game.add.sprite(0,-(fioleGroup.children[i].children.length) * 50, 'fondJaune'));
                        }else{
                            fioleGroup.children[i].addChild(game.add.sprite(0,(-(fioleGroup.children[i].children.length) + 1) * 50, 'jaune'));
                        }
                        break;
                    }
                    case 4:{ // bleu
                        if(fioleGroup.children[i].children.length <= 0){
                            fioleGroup.children[i].addChild(game.add.sprite(0,-(fioleGroup.children[i].children.length) * 50, 'fondVert'));
                        }else{
                            fioleGroup.children[i].addChild(game.add.sprite(0,(-(fioleGroup.children[i].children.length) + 1) * 50, 'vert'));
                        }
                        break;
                    }
                    case 5:{ // bleu
                        if(fioleGroup.children[i].children.length <= 0){
                            fioleGroup.children[i].addChild(game.add.sprite(0,-(fioleGroup.children[i].children.length) * 50, 'fondViolet'));
                        }else{
                            fioleGroup.children[i].addChild(game.add.sprite(0,(-(fioleGroup.children[i].children.length) + 1) * 50, 'violet'));
                        }
                        break;
                    }
                }
            })

            i++;
        })
    },

    refreshTubes: function() {
        fioleGroup.forEach(async items => {
            if (items.children[0].key === "rouge") {
                await items.children.pop();
                items.addChild(game.add.sprite(0, 0, 'fondRouge'));
            }
            if (items.children[0].key === "bleu") {
                items.children.pop();
                items.addChild(game.add.sprite(0, 0, 'fondBleu'));
            }
            if (items.children[0].key === "jaune") {
                items.children.pop();
                items.addChild(game.add.sprite(0, 0, 'fondJaune'));
            }
            if (items.children[0].key === "vert") {
                items.children.pop();
                items.addChild(game.add.sprite(0, 0, 'fondVert'));
            }
            if (items.children[0].key === "violet") {
                items.children.pop();
                items.addChild(game.add.sprite(0, 0, 'fondViolet'));
            }
        })
    }
};
