var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();

        view.resetPieces();

        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(game.getPieces());
        view.showNumberOfPieces(game.getCurrentNumberOfPieces());
        view.showNumberOfPiecesToGuess(game.calculatePiecesToGet(game.getCurrentNumberOfPieces()));
        view.highlightPieces(game.getCurrentPieces());
    };

    var clickOnPiece = function (i) {
        view.clickOnPiece(i, game.checkClickedPiece(i));
        if(game.checkGuessedPieces()){
            setTimeout(function () {
                addPiece();
            }, 1000);
        };
    };

    var addPiece = function () {
        view.showNumberOfPieces(game.getCurrentNumberOfPieces() + 1);
        startGame();
    };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'clickOnPiece': clickOnPiece
    }
}();