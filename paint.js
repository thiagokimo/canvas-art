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

	var widthDelta = w/3;
	var heightDelta = h/3;
	
	//vertical lines
	ctx.moveTo(x + widthDelta, y);
	ctx.lineTo(x + widthDelta, h);
	ctx.stroke();

	ctx.moveTo(2 * widthDelta, y);
	ctx.lineTo(2 * widthDelta, h);
	ctx.stroke();
}

init();
