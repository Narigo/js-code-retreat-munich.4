
function nextGeneration(board) {
  function getAmountOfLiveNeighborCells() {
    var r, c, sum;
    for (r = 0; r < board.length; r++) {
      for (c = 0; c < board[r].length; c++) {
        sum += (board[r][c] && (r != 1 && c != 1)) ? 1 : 0;
      }
    }
    return sum;
  }

  if(getAmountOfLiveNeighborCells() == 2 ||
    getAmountOfLiveNeighborCells() == 3) {
    board[1][1] = true;
  } else {
    board[1][1] = false;
  }
  return board;
}


describe("The board", function () {

  it("should show that living cells can die", function () {
    var board = [
      [false, false, false],
      [false, true, false],
      [false, false, true]
    ];

    var newBoard = nextGeneration(board);
    expect(newBoard[1][1]).toEqual(false);
  });

  it("should keep living cells alive with three neighbors", function () {
    var board = [
      [false, false, false],
      [true, true, false],
      [false, true, true]
    ];

    var newBoard = nextGeneration(board);
    expect(newBoard[1][1]).toEqual(true);
  });

  it("should keep living cells alive with two neighbors", function () {
    var board = [
      [false, false, false],
      [true, true, false],
      [false, true, false]
    ];

    var newBoard = nextGeneration(board);
    expect(newBoard[1][1]).toEqual(true);
  });

  it("should keep living cells alive with two neighbors on different positions", function () {
    var board = [
      [false, true, true],
      [false, true, false],
      [false, false, false]
    ];

    var newBoard = nextGeneration(board);
    expect(newBoard[1][1]).toEqual(true);
  });

  it("should kill a cell if it has a lot of neighbors", function () {
    var board = [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ];

    var newBoard = nextGeneration(board);
    expect(newBoard[1][1]).toEqual(false);
  });

  it("should create a new cell if it has exactly three neighbors", function () {
    var board = [
      [false, false, false],
      [true, false, false],
      [false, true, true]
    ];

    var newBoard = nextGeneration(board);
    expect(newBoard[1][1]).toEqual(true);
  });

});
