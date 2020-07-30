// player prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add an object to existing scene
        scene.add.existing(this);
        //not using yet
        //add rocket sfx
        //this.sfxRocket = scene.sound.add('sfx_rocket');
        //firing status
        this.isRock = false;
        this.isPaper = false;
        this.isScis = false;
    }

    update() {
        //set player to rock paper or scissors
        // rock
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT) && !this.isRock) {
            this.isRock = true;
            //this.sfxRocket.play();  // none yet
        }
        //paper
        if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.isPaper) {
            this.isPaper = true;
        }
        //scissors
        if (Phaser.Input.Keyboard.JustDown(keyLEFT) && !this.isScis) {
            this.isScis = true;
        }
    }
    //reset to bottom - might need later
   // reset() {
   //     this.isFiring = false;
   //     this.y = 431;
   // }
}