var Player = function () { }

Player.clear = function (player) {
    player.uid = '';
    player.score = 0;
    player.finish = false;
    player.blocks = [];
}

Player.start = function (player) {
    player.blocks = [];
    player.score = 0;
    player.finish = false;
    for(let block = 0; block < 21; block++) {
        // if(block === 19 || block == 18) {
        //     continue;
        // }
        player.blocks.push(block);
    }
}

module.exports = Player;