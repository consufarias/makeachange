var game;

window.onload = function () {
    game = new Phaser.Game(960, 480, Phaser.AUTO);

    game.state.add("StateMain", StateMain);
    game.state.start("StateMain");
}
