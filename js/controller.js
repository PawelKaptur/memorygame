var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();
        view.resetPieces();

        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.showNumberOfPieces();
        view.renderPieces(game.getPieces());
        view.showNumberOfPiecesToGuess(game.calculatePiecesToGet(game.getPieces().length));
        highlight();
    };
    
    var highlight = function () {
        //view.highlightPieces(game.getPieces());
        view.highlightPieces(game.randomizePieces())
    };
    
    var clickOnPiece = function (index) {
       // view.clickOnPiece(index);
    };

    var addPiece = function () {
        view.addPiece();
        view.showNumberOfPieces();
    };

    return {
        'startGame': startGame,
        'highlight': highlight,
        'addPiece': addPiece,
        'clickOnPiece': clickOnPiece
    }
}();