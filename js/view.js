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

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces
    }
}();