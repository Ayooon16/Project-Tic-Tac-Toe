const Gameboard = {
currentScore : ['x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'x'],
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
            cs[el[0]] == cs[el[1]] && cs[el[1]] == cs[el[2]] && cs[el[0]]!=''
        ){
              console.log (cs[el[0]]+' wins')
        }
    
});
}}
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }

console.log(Gameboard.checkWinner())