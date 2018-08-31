var game = (function () {
    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        piecesToGuess = 1,
        guessedPieces = 0,
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            guessedPieces = 0;
        },

        currentPieces = [],

        getPieces = function () {
            var i,
                pieces = [];
            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }

            randomizePieces(pieces);

            currentPieces = pieces;
            return pieces;
        },

        getCurrentPieces = function () {
            return currentPieces;
        },

        randomizePieces = function (pieces) {
            piecesToGuess = calculatePiecesToGuess(pieces.length);
            var i;
            for (i = 0; i < piecesToGuess; i++) {
                var randomNumber = randomizePiecesToGuess(pieces.length);
                while (pieces[randomNumber].toGuess === true) {
                    randomNumber = randomizePiecesToGuess(pieces.length);
                }
                pieces[randomNumber].toGuess = true;
            }

            return pieces;
        },

        calculatePiecesToGuess = function (currentPieces) {
            return Math.floor(currentPieces / 2 - 1);
        },

        randomizePiecesToGuess = function (length) {
            return Math.floor(Math.random() * length);
        },

        checkClickedPiece = function (index) {
            if (currentPieces[index].toGuess === true) {
                guessedPieces++;
                currentPieces[index].toGuess = false;
                return true;
            }

            return false;
        },

        getCurrentNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        checkIfAllPiecesGuessed = function () {
            return guessedPieces === calculatePiecesToGuess(currentNumberOfPieces);
        };

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'calculatePiecesToGuess': calculatePiecesToGuess,
        'getCurrentPieces': getCurrentPieces,
        'checkClickedPiece': checkClickedPiece,
        'checkIfAllPiecesGuessed': checkIfAllPiecesGuessed,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces
    }
})();