var view = function () {
    var getInitialNumberOfPieces = function () {
        return document.getElementById('numberOfPieces').value;
    };

    var renderPieces = function () {
        var i;
        for (i = 0; i < getInitialNumberOfPieces(); i++) {
            var piece = document.createElement("div");
            piece.setAttribute('class', 'piece');
            document.getElementById('pieces').appendChild(piece);
        }
    };

    var resetPieces = function () {
        var pieces = document.getElementsByClassName('piece');
        while (pieces.length > 0){
            pieces[0].parentNode.removeChild(pieces[0]);
        }
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'resetPieces': resetPieces
    }
}();