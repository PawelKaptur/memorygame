var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();
        view.resetPieces();

        if (initialNumberOfPieces < 4) {
            initialNumberOfPieces = 4;
        }

        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(game.getPieces());
    };
    
    var highlight = function () {
        view.highlightPieces(game.getPieces());
    };

    return {
        'startGame': startGame,
        'highlight': highlight
    }

}();