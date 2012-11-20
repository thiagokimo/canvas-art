// var width = window.innerWidth;
// var height = window.innerHeight;
// var c = document.getElementById('c');
// var ctx = c.getContext('2d');
// c.width = width;
// c.height = height;

// function

// //ctx.moveTo(0,0);
// //ctx.lineTo(600,300);
// //ctx.stroke();
var width = window.innerWidth;
var height = window.innerHeight;
var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = width;
c.height = height;

function init(){
    drawTicTacToe(0, 0, width, height);
}

function drawTicTacToe(x, y, w, h){
	ctx.moveTo(x, y);	
	
	//vertical lines
	ctx.moveTo(x + w/3, y);
	ctx.lineTo(x + w/3, h);
	ctx.stroke();

	// ctx.moveTo(x + (2* w/3), y);
	// ctx.lineTo(x + (2* w/3), h);
	// ctx.stroke();

	// //horizontal lines
	// ctx.moveTo(x, y + h/3);
	// ctx.lineTo(x, w);
	// ctx.stroke();
}

init();
