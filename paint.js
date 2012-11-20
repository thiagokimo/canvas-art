var width = window.innerWidth;
var height = window.innerHeight;
var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = width;
c.height = height;

function init(){	
	drawTicTacToe(480,480,width,height);
}
function draw(x,y,w,h,start){

	var newWidth;
	var newHeight; 

	//condition to the first time
	if(start){

		if (w == width && h == height) {
			
			drawTicTacToe(0,0,w,h);

			newWidth = calculateDelta(w);
			newHeight = calculateDelta(h);

			draw(x,y,newWidth,newHeight,false);
		}
		
	}
	else {

		//stop condition
		if(w > 0 && h > 0){
			
			drawTicTacToe(x,y,w,h);

			newWidth = calculateDelta(w);
			newHeight = calculateDelta(h);

			draw(x,y,newWidth,newHeight,false);
		}
			
	}

}

function drawTicTacToe(x, y, w, h){

	var widthDelta = calculateDelta(w);
	var heightDelta = calculateDelta(h);
	
	//vertical lines
	ctx.moveTo(x + widthDelta, y);
	ctx.lineTo(x + widthDelta, h);
	ctx.stroke();

	ctx.moveTo(2 * widthDelta, y);
	ctx.lineTo(2 * widthDelta, h);
	ctx.stroke();

	// //horizontal
	// ctx.moveTo(x, heightDelta);
	// ctx.lineTo(x*3, heightDelta);
	// ctx.stroke();

	// ctx.moveTo(x, 2 * heightDelta);
	// ctx.lineTo(x*3, 2 * heightDelta);
	// ctx.stroke();
}

function calculateDelta(value) {
	return parseInt(value/3);
}

init();
