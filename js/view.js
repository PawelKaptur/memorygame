var view = function () {
    var numberOfPieces = 4;

    var getInitialNumberOfPieces = function () {
        return numberOfPieces;
    };

    var addPiece  = function () {
        return numberOfPieces++;
    };

    var showNumberOfPieces = function () {
        document.getElementById('numberOfPieces').textContent = numberOfPieces.toString();
    };

    var showNumberOfPiecesToGuess = function (number) {
        document.getElementById('numberToGuess').textContent = number.toString();
    };

    var getTimeOfHighlight = function () {
        return document.getElementById('highlightTime').value;
    };

    var viewPieces;

    var renderPieces = function (pieces) {
        var i;
        viewPieces = [];
        for (i = 0; i < pieces.length; i++) {
            var piece = document.createElement("div");
            piece.classList.add('piece');
            document.getElementById('pieces').appendChild(piece);
            viewPieces.push(piece);
        }
    };

    var resetPieces = function () {
        var pieces = document.getElementsByClassName('piece');
        while (pieces.length > 0) {
            pieces[0].parentNode.removeChild(pieces[0]);
        }
    };

    var highlightPieces = function (pieces) {
        var i;
        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                viewPieces[i].style.backgroundColor = "blue";
            }
        }

        blackoutPieces(pieces);
    };

    var blackoutPieces = function (pieces) {
        setTimeout(function () {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    viewPieces[i].style.backgroundColor = "black";
                }
            }
        }, 1000 * getTimeOfHighlight());
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'resetPieces': resetPieces,
        'highlightPieces': highlightPieces,
        'addPiece': addPiece,
        'showNumberOfPieces': showNumberOfPieces,
        'showNumberOfPiecesToGuess': showNumberOfPiecesToGuess
    }
}();