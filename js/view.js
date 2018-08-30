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
                document.getElementById(i).style.backgroundColor = "blue";
                //document.getElementById(i).classList.add('highlight');
            }
        }

        blackoutPieces(pieces);
    };

    var blackoutPieces = function (pieces) {
        setTimeout(function () {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    document.getElementById(i).style.backgroundColor = "black";
                }
            }
        }, 1000 * getTimeOfHighlight());

        addEventListenersToPieces();
    };

    var addEventListenersToPieces = function () {
        var children  = document.getElementById('pieces').children;
        var i;
        for (i = 0; i < children.length; i++){
            children[i].addEventListener("click", clickOnPiece);
        }
    };

    var clickOnPiece = function () {
        //controller.clickOnPiece(index);
        this.style.backgroundColor = 'red';
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'resetPieces': resetPieces,
        'highlightPieces': highlightPieces,
        'addPiece': addPiece,
        'showNumberOfPieces': showNumberOfPieces,
        'showNumberOfPiecesToGuess': showNumberOfPiecesToGuess,
        'clickOnPiece': clickOnPiece
    }
}();