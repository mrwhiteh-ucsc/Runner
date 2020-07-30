
//wanna make a rock paper scissors game because nothing screams mad skill
//like some  RPS

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Loss ]
}

//game declaration statement
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    mobSpeed: 3,
    gameTimer: 60000   
}

// reserve keyboard bindings
let keyF, keyLEFT, keyRIGHT, keyUP;