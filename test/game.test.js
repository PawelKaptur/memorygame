describe('Game', function () {
    it('should have 5 pieces after game start', function () {
        var pieces;
        game.startGame();

        pieces = game.getPieces();
        expect(pieces.length).toBe(4);
    });

    it('one piece should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.getPieces());
        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
                numberOfPieces: 6
            };

        game.startGame(config);

        pieces = game.getPieces();
        expect(pieces.length).toBe(6);
    });

    it('should start game and get current number of pieces', function () {
        var pieces,
            config = {
               numberOfPieces: 44
           };

        game.startGame(config);

        game.getPieces();
        pieces = game.getCurrentPieces();
        expect(pieces.length).toBe(44);
    });

    it('should calculate four pieces to guess for ten pieces', function () {
        var pieces,
            piecesToGuess,
            config = {
                numberOfPieces: 10
            };
        game.startGame(config);

        game.getPieces();
        pieces = game.getCurrentPieces();
        piecesToGuess = game.calculatePiecesToGuess(pieces.length);
        expect(piecesToGuess).toBe(4);
    });

    it('should calculate twelve current pieces', function () {
        var numberOfPieces,
            config = {
                numberOfPieces: 12
            };
        game.startGame(config);

        game.getPieces();
        numberOfPieces = game.getCurrentNumberOfPieces();
        expect(numberOfPieces).toBe(12);
    });

    it('should return false, because not all pieces guessed', function () {
        var allPiecesGuessed,
            config = {
                numberOfPieces: 12
            };
        game.startGame(config);

        game.getPieces();
        allPiecesGuessed = game.checkIfAllPiecesGuessed();
        expect(allPiecesGuessed).toBe(false);
    });

    it('should return false, because piece is not to guess', function () {
        var guessedPiece,
            config = {
                numberOfPieces: 12
            };
        game.startGame(config);


        game.getPieces();
        while (game.checkClickedPiece(1)){
            game.getPieces();
        }

        guessedPiece = game.checkClickedPiece(1);
        expect(guessedPiece).toBe(false);
    });

    it('should mock methods and test controller startGame method', function () {
        var object = [{},{},{},{}];
        spyOn(view, 'getInitialNumberOfPieces').and.returnValue(4);
        spyOn(view, 'getNumberOfMistakes').and.returnValue(0);
        spyOn(game, 'startGame');
        spyOn(game, 'getPieces').and.returnValue(object);
        spyOn(view, 'renderPieces');
        spyOn(game, 'getCurrentNumberOfPieces').and.returnValue(4);
        spyOn(view, 'showNumberOfPieces');
        spyOn(game, 'calculatePiecesToGuess').and.returnValue(1);
        spyOn(view, 'showNumberOfPiecesToGuess');
        spyOn(game, 'getCurrentPieces').and.returnValue(object);
        spyOn(view, 'highlightPieces');

        controller.startGame();

        expect(game.startGame).toHaveBeenCalledWith({numberOfPieces: 4, numberOfMistakes: 0});
        expect(view.renderPieces).toHaveBeenCalledWith(object);
        expect(view.showNumberOfPieces).toHaveBeenCalledWith(4);
        expect(view.showNumberOfPiecesToGuess).toHaveBeenCalledWith(1);
        expect(view.highlightPieces).toHaveBeenCalledWith(object);
    });

    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});