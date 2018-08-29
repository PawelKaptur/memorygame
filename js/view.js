var view = function () {
    var getInitialNumberOfPieces = function () {
        return document.getElementById('numberOfPieces').value;
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

                viewPieces[i].classList.add('highlight');
            }
        }
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'resetPieces': resetPieces,
        'highlightPieces': highlightPieces
    }
}();