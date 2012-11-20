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

	var widthDelta = calculateDelta(w);
	var heightDelta = calculateDelta(h);
	
	//vertical lines
	ctx.moveTo(x + widthDelta, y);
	ctx.lineTo(x + widthDelta, h);
	ctx.stroke();

	ctx.moveTo(2 * widthDelta, y);
	ctx.lineTo(2 * widthDelta, h);
	ctx.stroke();

	//horizontal
	ctx.moveTo(x, heightDelta);
	ctx.lineTo(w, heightDelta);
	ctx.stroke();

	ctx.moveTo(x, 2 * heightDelta);
	ctx.lineTo(w, 2 * heightDelta);
	ctx.stroke();
}

function calculateDelta(value) {
	return value/3;
}

init();
