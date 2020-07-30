// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);

        //store pointValue
        this.points = pointValue;

        //to match up against player
        this.isRock = false;
        this.isPaper = false;
        this.isScis = false;
    }

    update() {
        // move mobs left
        this.x -= game.settings.mobSpeed;
        // if an enemy ties with player it will be sent back to the edge
        //if (this.x <= 0 - this.width) {
        //    this.x = game.config.width;
        //}
    }

    reset() {
        this.x = game.config.width;
    }
}