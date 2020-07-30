class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        // menu display
        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '28px',
            backgroundColor: '#FACADE', //:D
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- textSpacer, 'ROCK, PAPER, RUNNER', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use arrow keys to chose Rock, Paper, or Scissors', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Right for Rock, Up for Paper, Left for Scissors', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer*2, 'Press F to Start and Restart game', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';  
        
        // define key
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            // Game start
            game.settings = {
                mobSpeed: 3,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
    }
}
}