"use strict";

var view = function () {
    var getInitialNumberOfPieces = function () {
            return parseInt(document.getElementById('numberOfPieces').innerText);
        },

        showNumberOfPieces = function (numberOfPieces) {
            document.getElementById('numberOfPieces').textContent = numberOfPieces.toString();
        },

        showNumberOfPiecesToGuess = function (number) {
            document.getElementById('numberToGuess').textContent = number.toString();
        },

        getTimeOfHighlight = function () {
            return document.getElementById('highlightTime').value;
        },

        getNumberOfMistakes = function(){
            return document.getElementById('numberOfMistakes').value;
        },

        setNumberOfMistakes = function(mistakes){
            document.getElementById('mistakes').textContent = mistakes;
        },

        setAccuracy = function(accuracy){
            document.getElementById('accuracy').textContent = accuracy;
        },

        renderPieces = function (pieces) {
            resetPieces();
            var i;
            for (i = 0; i < pieces.length; i++) {
                var piece = document.createElement("div");
                piece.setAttribute('id', i);
                piece.classList.add('piece');
                document.getElementById('pieces').appendChild(piece);
            }
        },

        resetPieces = function () {
            var pieces = document.getElementsByClassName('piece');
            while (pieces.length > 0) {
                pieces[0].parentNode.removeChild(pieces[0]);
            }
        },

        highlightPieces = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    document.getElementById(i).classList.add('highlight');
                }
            }
            blockAllElements();
            blackoutPieces(pieces);
        },

        blockAllElements = function(){
            document.getElementById('pieces').classList.add('disabled');
            document.getElementById('menu').classList.add('disabled');
        },

        blackoutPieces = function (pieces) {
            setTimeout(function () {
                var i;
                for (i = 0; i < pieces.length; i++) {
                    if (pieces[i].toGuess === true) {
                        document.getElementById(i).classList.remove('highlight');
                    }
                }
                unblockAllElements();
            }, 1000 * getTimeOfHighlight());


            setAttributeForElement();
        },

        unblockAllElements = function(){
            document.getElementById('pieces').classList.remove('disabled');
            document.getElementById('menu').classList.remove('disabled');
        },

        setAttributeForElement = function () {
            var children = document.getElementById('pieces').children;
            var i;
            for (i = 0; i < children.length; i++) {
                document.getElementById(i).setAttribute("onclick", "controller.clickOnPiece(" + i + ")");
            }
        },

        clickOnPiece = function (i, guess) {
            if (guess) {
                document.getElementById(i).classList.add('goodPiece');
            }
            else {
                document.getElementById(i).classList.remove('goodPiece');
                document.getElementById(i).classList.add('wrongPiece');
            }
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlightPieces': highlightPieces,
        'showNumberOfPieces': showNumberOfPieces,
        'showNumberOfPiecesToGuess': showNumberOfPiecesToGuess,
        'clickOnPiece': clickOnPiece,
        'blockAllElements': blockAllElements,
        'getNumberOfMistakes': getNumberOfMistakes,
        'setNumberOfMistakes': setNumberOfMistakes,
        'setAccuracy': setAccuracy
    }
}();