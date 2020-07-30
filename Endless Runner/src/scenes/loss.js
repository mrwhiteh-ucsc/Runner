class Loss extends Phaser.Scene {
    constructor() {
        super("lossScene");
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

        this.add.text(centerX, centerY- textSpacer, 'You lost, bro. get rekt', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Press (F) to pay your own respects...', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'and restart', menuConfig).setOrigin(0.5);
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