const Gameboard = {
    currentScore: ['', '', '', '', '', '', '', '', ''],
    players: {},
    won: false,
    player: 'x',
    winner:'',
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
                this.won = true
this.winner=cs[el[0]]

            }
        }
        )
        if(this.won){
            this.gameOver(this.winner)

        }
        else if (
            !this.won && !cs.includes('')
        ) {
            console.log(this.win)
            this.gameOver('draw')
        }
    },
    gameOver(winner) {
        if (winner == 'x' || winner == 'o') {
            for (const key in this.players) {
                const player = this.players[key];
                if (player.marker === winner) {
                    console.log(player.name + ' has won the game!');
                }
            }
        }
        else if (winner == 'draw') {
            console.log('Draw')
        }
        this.resetBoard()
    },
    editBoard(cell) {
        this.currentScore[cell] = this.player
        cell = document.getElementById(cell)
        cell.classList.add(this.player)
        cell.onclick=null
        this.player = ((this.player == 'x') ? 'o' : 'x')
        this.checkWinner()
    },
    addOnclick() {
        var elems = document.querySelectorAll('.cell')
        elems.forEach(element => {
            element.onclick = function () {
                Gameboard.editBoard(this.id)
            }
        })
    },
    resetBoard(){
        this.currentScore=['', '', '', '', '', '', '', '', '']
        this.player='x'
        this.won=(false)
this.winner=''
        var elems = document.querySelectorAll('.cell')
        elems.forEach(element => {
    element.className='cell'
        },
    this.addOnclick()
        )
    }
}
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

window.onload = function(){
    Gameboard.addOnclick()
}
    Gameboard.players.player1 = new Player(prompt("First player's name"), 'x');
Gameboard.players.player2 = new Player(prompt("Second player's name"), 'o');