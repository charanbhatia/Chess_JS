var Knight = function(config){
    this.type = 'knight';
    this.constructor(config);
};


Knight.prototype = new Piece({});


Knight.prototype.isValidPosition = function(targetPosition,board){
    let currentCol = this.position[0];
    let currentRow = parseInt(this.position[1]);

    let targetCol = targetPosition.col;
    let targetRow = parseInt(targetPosition.row);

    let rowDiff = Math.abs(currentRow - targetRow);
    let colDiff = Math.abs(currentCol.charCodeAt(0) - targetCol.charCodeAt(0));


   if((rowDiff === 2 && colDiff === 1 || rowDiff === 1 && colDiff === 2) && (targetCol>='A' && targetCol<='H') && (targetRow>='1' && targetRow<='8')) {
        return true;
    }

    console.warn("Invalid move for Knight");
    return false;

};

Knight.prototype.moveTo = function(targetPosition, board){    
    if(this.isValidPosition(targetPosition, board)){

        
        this.position = targetPosition.col + targetPosition.row;
        this.render();
        return true
    }else{
        if(board.turn==="white"){
            board.turn="black";
        }else{
            board.turn="white";
        }
        return false
    }
}