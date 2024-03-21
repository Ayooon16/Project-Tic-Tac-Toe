const Gameboard = {
    defScore: ['', '', '', '', '', '', '', '', ''],
    currentScore: ['x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'x'],
    players: {},
    checkWinner() {
        cs = this.currentScore
        const combs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        combs.forEach(el => {
            if (
                cs[el[0]] == cs[el[1]] && cs[el[1]] == cs[el[2]] && cs[el[0]] != ''
            ) {
                this.gameOver(cs[el[0]])
            }
 })},
    gameOver(winner) {
        if(winner == 'x' || winner == 'o'){
            for (const key in this.players) {
                if (this.players.hasOwnProperty(key)) {
                    const player = this.players[key];
                    if (player.marker === winner) {
                        console.log(player.name + ' has won the game!');
                    }}
        }
    }
}}
function Player(name, marker, name2, marker2) {
    this.name = name;
    this.marker = marker;
}
Gameboard.players.player1 = new Player('Player 1', 'x');
Gameboard.players.player2 = new Player('Player 2', 'o');
console.log(Gameboard.checkWinner())