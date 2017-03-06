var model = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  playerOne: "X",
  playerTwo: "O",
  currentPlayer: this.playerOne,

  checkWinning: function(player){
    if ( this.board[0][0] === player && this.board[0][1] === player && this.board[0][2] === player
      || this.board[1][0] === player && this.board[1][1] === player && this.board[1][2] === player
      || this.board[2][0] === player && this.board[2][1] === player && this.board[2][2] === player
      || this.board[0][0] === player && this.board[1][0] === player && this.board[2][0] === player
      || this.board[0][1] === player && this.board[1][1] === player && this.board[2][1] === player
      || this.board[0][2] === player && this.board[1][2] === player && this.board[2][2] === player
      || this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player
      || this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player
    ) {
        console.log(player + " Wins");
        this.reset();
    }
  },
  insertMove: function(x, y, player){
    this.board[x][y] = player
    console.table(this.board)
    this.checkWinning(player)
    this.swapPlayer();
  },
  swapPlayer: function(){
    this.currentPlayer === this.playerOne ?
      this.currentPlayer = this.playerTwo : this.currentPlayer = this.playerOne;
  },
  reset: function(){
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    console.table(this.board);
  }
}
