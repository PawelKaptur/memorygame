var view = function () {
    var getInitialNumberOfPieces = function () {
        return parseInt(document.getElementById('numberOfPieces').innerText);
    };

    var showNumberOfPieces = function (numberOfPieces) {
        document.getElementById('numberOfPieces').textContent = numberOfPieces.toString();
    };

    var showNumberOfPiecesToGuess = function (number) {
        document.getElementById('numberToGuess').textContent = number.toString();
    };

    var getTimeOfHighlight = function () {
        return document.getElementById('highlightTime').value;
    };

    var renderPieces = function (pieces) {
        var i;
        for (i = 0; i < pieces.length; i++) {
            var piece = document.createElement("div");
            piece.setAttribute('id', i);
            piece.classList.add('piece');
            document.getElementById('pieces').appendChild(piece);
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
                document.getElementById(i).classList.add('highlight');
            }
        }

        blackoutPieces(pieces);
    };

    var blackoutPieces = function (pieces) {
        setTimeout(function () {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    document.getElementById(i).classList.remove('highlight');
                }
            }
        }, 1000 * getTimeOfHighlight());

        addEventListenersToPieces();
    };

    var addEventListenersToPieces = function () {
        var children = document.getElementById('pieces').children;
        var i;
        for (i = 0; i < children.length; i++) {
            document.getElementById(i).setAttribute("onclick", "controller.clickOnPiece(" + i + ")");
        }
    };

    var clickOnPiece = function (i, guess) {
        if (guess) {
            document.getElementById(i).classList.add('goodPiece');
        }
        else {
            document.getElementById(i).classList.remove('goodPiece');
            document.getElementById(i).classList.add('wrongPiece');
            setTimeout(function () {
                showNumberOfPieces(4);
                controller.startGame();
            }, 1000);
        }
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'resetPieces': resetPieces,
        'highlightPieces': highlightPieces,
        'showNumberOfPieces': showNumberOfPieces,
        'showNumberOfPiecesToGuess': showNumberOfPiecesToGuess,
        'clickOnPiece': clickOnPiece
    }
}();