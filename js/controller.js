var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();
        view.resetPieces();

        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.showNumberOfPieces();
        view.renderPieces(game.getPieces());
        view.showNumberOfPiecesToGuess(game.calculatePiecesToGet(game.getCurrentPieces().length));
        view.highlightPieces(game.getCurrentPieces());
    };
    
    var highlight = function () {
        startGame();
    };

    var clickOnPiece = function (i) {
        view.clickOnPiece(i, game.checkClickedPiece(i));
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