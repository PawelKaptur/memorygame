var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();

        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.resetPieces();
        view.renderPieces(game.getPieces());
    };
    return{
        'startGame': startGame
    }

}();