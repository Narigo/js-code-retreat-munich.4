describe('The board', function () {

//  it('should stay clean if no neighbors', function () {
//    var board = new Board();
////    [
////      [{v : false}, {v : false}, {v : false}],
////      [{v : false}, {v : false}, {v : false}],
////      [{v : false}, {v : false}, {v : false}]
////    ];
//    var result = {v:false};
//
//    nextGeneration(board, function (middleResult) {
//      expect(middleResult).toEqual(result);
//    });
//  });
//
//  it('should kill cells with no neighbors', function () {
//    var board = [
//      [{v : false}, {v : false}, {v : false}],
//      [{v : false}, {v : true},  {v : false}],
//      [{v : false}, {v : false}, {v : false}]
//    ];
//    var result = {v:false};
//
//    nextGeneration(board, function (middleResult) {
//      expect(middleResult).toEqual(result);
//    });
//  });

  it('dies if alive but less than two neighbors', function () {
    isAlive({ v : true, neighbours : 0 }, function (cell) {
      expect(cell.v).toBe(false);
    });
    isAlive({ v : true, neighbours : 1 }, function (cell) {
      expect(cell.v).toBe(false);
    });
  });

  it('lives if alive and two or three neighbors are alive', function () {
    isAlive({ v : true, neighbours : 2 }, function (cell) {
      expect(cell.v).toBe(true);
    });
    isAlive({ v : true, neighbours : 3 }, function (cell) {
      expect(cell.v).toBe(true);
    });
  });

  it('dies if alive and three or more neighbors are alive', function () {
    [4, 5, 6, 7, 8].forEach(function (i) {
      isAlive({ v : true, neighbours : i }, function (cell) {
        expect(cell.v).toBe(false);
      });
    });
  });

  it('lives if dead and exactly three neighbors are alive', function () {
    isAlive({ v : false, neighbours : 3 }, function (cell) {
      expect(cell.v).toBe(true);
    });
  });


  it('stays dead and not exactly three neighbors are alive', function () {
    [0, 1, 2, 4, 5, 6, 7, 8].forEach(function (i) {
      isAlive({ v : false, neighbours : i }, function (cell) {
        expect(cell.v).toBe(false);
      });
    });
  });


});


describe('Board mechanics', function() {

  it('should count the neighbors')

});

function isAlive(cell, callback) {

  callback({v : (cell.v && cell.neighbours >= 2 && cell.neighbours <= 3) || (!cell.v && cell.neighbours == 3)});

}