var game = (function () {
    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            var i,
                pieces = [];
            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }
            pieces[1].toGuess = true;
            return pieces;
        };
    return {
        'startGame': startGame,
        'getPieces': getPieces
    }
})();