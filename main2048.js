var board = new Array();
var score = 0;
$(document).ready(function(){
	newgame();
});
function newgame(){

	init();
	generateOneNumber();
	generateOneNumber();
}
function init(){
	for(var i = 0; i< 4; i++)
		for(var j=0; j<4; j++){
			var Cell = $("#cell-"+i+"-"+j);
			Cell.css('top',getPosTop(i,j));
			Cell.css('left',getPosLeft(i,j));
		}
		for(var i = 0; i<4; i++){
			board[i] = new Array();
			for(var j=0; j<4; j++)
				board[i][j] = 0;
		}
		updateBoardView();
}
function updateBoardView(){
	$('.number-cell').remove();
	for(var i = 0; i< 4; i++)
		for(var j=0; j<4; j++){
			$("#container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var theNumberCell = $('#number-cell-'+i+'-'+j);

			if(board[i][j]==0){
				theNumberCell.css('width','0px');
				theNumberCell.css('height','0px');
				theNumberCell.css('top',getPosTop(i,j)+50);
				theNumberCell.css('left',getPosLeft(i,j)+50);
			}else{
				theNumberCell.css('width','100px');
				theNumberCell.css('height','100px');
				theNumberCell.css('top',getPosTop(i,j));
				theNumberCell.css('left',getPosLeft(i,j));
				theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color',getNumberColor(board[i][j]));
				theNumberCell.text(board[i][j]);
			}
		}
}

// function generateOneNumber(){
// 	if(nospace(board)){
// 		return false;
// 		var randx = parseInt(Math.floor(Math.random()*4));
// 		var randy = parseInt(Math.floor(Math.random()*4));
// 		while(true){
// 			if(board[randx][randy]==0){

// 				break;
// 			}
// 			else{
// 				randx = parseInt(Math.floor(Math.random()*4));
// 				randy = parseInt(Math.floor(Math.random()*4));
// 			}

// 		}
		
// 	}
// 	else{
// 		var randx = parseInt(Math.floor(Math.random()*4));
// 		var randy = parseInt(Math.floor(Math.random()*4));
// 		var randNumber = Math.random()>0.5?2:4;
// 		board[randx][randy] = randNumber;
// 		showNumberWithAnimation(randx,randy,randNumber);
// 		return true;
// 	}
	
// }
function generateOneNumber(){

    if( nospace( board ) )
        return false;

    //随机一个位置
    var randx = parseInt( Math.floor( Math.random()  * 4 ) );
    var randy = parseInt( Math.floor( Math.random()  * 4 ) );

    while( true ){
        if( board[randx][randy] == 0 )
            break;

        randx = parseInt( Math.floor( Math.random()  * 4 ) );
        randy = parseInt( Math.floor( Math.random()  * 4 ) );
    }

    //随机一个数字
    var randNumber = Math.random() < 0.5 ? 2 : 4;

    //在随机位置显示随机数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation( randx , randy , randNumber );

    return true;
}