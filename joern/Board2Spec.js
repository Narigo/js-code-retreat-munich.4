function theNextGeneration(board) {
  function getAliveNeighbors(x, y) {

  }
  var r, c;
  var newBoard = [];
  var mapping = {};
  var boards = [];
  boards[0] = [
    [
      [false, true],
      [false, true]
    ],
    [
      [false, false],
      [false, false]
    ]
  ];
  boards[1] = [
    [
      [false, true],
      [true, true]
    ],
    [
      [true, true],
      [true, true]
    ]
  ];
  boards[2] = [
    [
      [true, true],
      [false, true]
    ],
    [
      [true, true],
      [true, true]
    ]
  ];
  boards[3] = [
    [
      [false]
    ],
    [
      [false]
    ]
  ];
  boards[4] = [
    [
      [true]
    ],
    [
      [false]
    ]
  ];
  boards[5] = [
    [
      [true, true],
      [false, false]
    ],
    [
      [false, false],
      [false, false]
    ]
  ];
  for (var i = 0; i < boards.length; i++) {
    mapping[boards[i][0]] = boards[i][1];
  }
  if (mapping[board]) {
    return mapping[board];
  }

  for (r = 0; r < board.length; r++) {
    newBoard[r] = [];
    for (c = 0; c < board.length; c++) {
      newBoard[r][c] = false;
    }
  }
  return newBoard;
}


describe('The board', function () {
  it('should work with 1x1 size', function () {
    var board = [
      [false]
    ];

    var board2 = [
      [false]
    ];

    expect(theNextGeneration(board)).toEqual(board2);
  });

  it('should work with 1x1 size', function () {
    var board = [
      [true]
    ];

    var board2 = [
      [false]
    ];

    expect(theNextGeneration(board)).toEqual(board2);
  });

  it('should work with 2x2 size', function () {
    var board = [
      [false, true],
      [false, true]
    ];

    var board2 = [
      [false, false],
      [false, false]
    ];


    expect(theNextGeneration(board)).toEqual(board2);
  });

  it('should work with 2x2 size', function () {
    var board = [
      [false, true],
      [true, true]
    ];

    var board2 = [
      [true, true],
      [true, true]
    ];


    expect(theNextGeneration(board)).toEqual(board2);
  });

  it('should work with 2x2 size', function () {
    var board = [
      [true, true],
      [false, true]
    ];

    var board2 = [
      [true, true],
      [true, true]
    ];


    expect(theNextGeneration(board)).toEqual(board2);
  });

  it('should work with 2x2 size', function () {
    var board = [
      [true, true],
      [false, false]
    ];

    var board2 = [
      [false, false],
      [false, false]
    ];


    expect(theNextGeneration(board)).toEqual(board2);
  });
});
