"use strict";

var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = view.getInitialNumberOfPieces(),
                allowedNumberOfMistakes = view.getNumberOfMistakes();

            game.startGame({
                numberOfPieces: initialNumberOfPieces,
                numberOfMistakes: allowedNumberOfMistakes
            });

            view.renderPieces(game.getPieces());
            view.showNumberOfPieces(game.getCurrentNumberOfPieces());
            view.showNumberOfPiecesToGuess(game.calculatePiecesToGuess(game.getCurrentNumberOfPieces()));
            view.highlightPieces(game.getCurrentPieces());
        },

        clickOnPiece = function (i) {
            var clickedPiece = game.checkClickedPiece(i);
            view.clickOnPiece(i, clickedPiece);
            if (game.checkIfAllPiecesGuessed()) {
                view.blockAllElements();
                setTimeout(function () {
                    addPiece();
                }, 1000);
            }

            if(!clickedPiece){
                view.setNumberOfMistakes(game.getNumberOfMistakes());
                if(!game.checkIfGameCanBeContinued()){
                    view.blockAllElements();
                    setTimeout(function () {
                        view.showNumberOfPieces(4);
                        game.resetNumberOfMistakes();
                        view.setNumberOfMistakes(game.getNumberOfMistakes());
                        startGame();
                    }, 1000)
                }
            }

            view.setAccuracy(game.getAccuracy());
        },

        addPiece = function () {
            view.showNumberOfPieces(game.getCurrentNumberOfPieces() + 1);
            startGame();
        },

        startNewGame = function () {
            view.showNumberOfPieces(4);
            startGame();
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'clickOnPiece': clickOnPiece,
        'startNewGame': startNewGame
    }
}();