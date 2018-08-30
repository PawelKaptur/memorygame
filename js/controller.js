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
        },

        clickOnPiece = function (i) {
            var clickedPiece = game.checkClickedPiece(i);
            view.clickOnPiece(i, clickedPiece);
            if (game.checkGuessedPieces()) {
                setTimeout(function () {
                    addPiece();
                }, 1000);
            }

            if(!clickedPiece){
                setTimeout(function () {
                    view.showNumberOfPieces(4);
                    startGame();
                }, 1000)
            }
        },

        addPiece = function () {
            view.showNumberOfPieces(game.getCurrentNumberOfPieces() + 1);
            startGame();
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'clickOnPiece': clickOnPiece
    }
}();