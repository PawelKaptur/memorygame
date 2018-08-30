var game = (function () {
    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        piecesToGuess = 1,
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
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

        //losowanie klockow do zgadywaina to powinna byc osobna funkcja w ogole, ktora jest wywolwana w kontrolerze na starcie i po highlight
        //pieces deklarowac wczesniej i w get pieces inicjaliowac
        //moze wywolywac w randomizowaniu get piece, albo zrobic metode addPieces i getpieces osobno, getPieces zwracaloby juz powstale piecy


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

        calculatePiecesToGuess = function (piecesToGuess) {
            return Math.floor(piecesToGuess / 2 - 1);
        },

        randomizePiecesToGuess = function (length) {
            return Math.floor(Math.random() * length);
        };

        checkClickedPiece = function (index) {
            return currentPieces[index].toGuess === true;
        };

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'calculatePiecesToGet': calculatePiecesToGuess,
        'getCurrentPieces': getCurrentPieces,
        'checkClickedPiece': checkClickedPiece
    }
})();