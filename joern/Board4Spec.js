describe('isAlive', function () {

  it('should die if it has less than two neighbors', function () {
    var cell = { value : true, neighbors : 1};
    expect(isAlive(cell).value).toBe(false);
  });

  it('should stay alive if it has two neighbors', function () {
    var cell = { value : true, neighbors : 2};
    expect(isAlive(cell).value).toBe(true);
  });

  it('should stay alive if it has three neighbors', function () {
    var cell = { value : true, neighbors : 3};
    expect(isAlive(cell).value).toBe(true);
  });

  it('should die if it has more than three neighbors', function () {
    var cell = { value : true, neighbors : 4};
    expect(isAlive(cell).value).toBe(false);
  });

  it('should stay dead when we have two neighbors', function () {
    var cell = { value : false, neighbors : 2};
    expect(isAlive(cell).value).toBe(false);
  });

  it('should become alive when we have exactly three neighbors', function () {
    var cell = { value : false, neighbors : 3};
    expect(isAlive(cell).value).toBe(true);
  });
});

describe('countingAliveNeighbors', function () {

  var aliveCell = { value : true };
  var deadCell = { value : false };

  it('should return the number of alive neighbors', function () {
    var neighbors = [
      deadCell, deadCell, deadCell,
      deadCell, deadCell,
      deadCell, deadCell, deadCell
    ];

    expect(getNeighborsCount(neighbors)).toBe(0);
  });

  it('should return the correct number of alive neighbors', function () {
    var neighbors = [
      deadCell, deadCell, aliveCell,
      deadCell, deadCell,
      deadCell, aliveCell, deadCell
    ];
    expect(getNeighborsCount(neighbors)).toBe(2);
  });
});

describe('The center of the board', function () {
  var aliveCell = { value : true };
  var deadCell = { value : false };

  it('should stay dead when everything is dead', function () {
    var board = [
      deadCell, deadCell, deadCell,
      deadCell, deadCell, deadCell,
      deadCell, deadCell, deadCell
    ];

    expect(nextStateOfCenter(board).value).toBe(false);
  });


  it('should stay dead when only two cells are alive', function () {
    var board = [
      deadCell, deadCell, deadCell,
      deadCell, deadCell, aliveCell,
      deadCell, aliveCell, deadCell
    ];

    expect(nextStateOfCenter(board).value).toBe(false);
  });

});

function nextStateOfCenter(board) {
  return {value : false};
}

function getNeighborsCount(array) {
  var count = 0;
  var i;

  for (i = 0; i < 8; i++) {
    if (array[i].value) {
      count++;
    }
  }

  return count;
}

function isAlive(cell) {
  var aliveCell = function (neighbors) {
    return neighbors == 3 || neighbors == 2;
  };
  var deadCell = function (neighbors) {
    return neighbors == 3;
  };
  if (cell.value) {
    return {value : aliveCell(cell.neighbors)};
  } else {
    return {value : deadCell(cell.neighbors)};
  }
}