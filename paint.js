var width = window.innerWidth;
var height = window.innerHeight;
var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = width;
c.height = height;

function init(){	
	draw(0,0,width,height);
}
function draw(x,y,w,h,start){

	var newWidth;
	var newHeight; 

	//condition to the first time
	if(start){

		if (w == width && h == height) {
			
			drawTicTacToe(y,x,w,h);

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
 	ctx.lineTo(x + widthDelta, y+h);
 	ctx.stroke();

 	ctx.moveTo(x + (2 * widthDelta), y);
 	ctx.lineTo(x + (2 * widthDelta), y+h);
 	ctx.stroke();

 	//horizontal
 	ctx.moveTo(x, y + heightDelta);
 	ctx.lineTo(x + w, y + heightDelta);
 	ctx.stroke();

 	ctx.moveTo(x, y + (2 * heightDelta));
 	ctx.lineTo(x + w, y + (2 * heightDelta));
 	ctx.stroke();
}

function calculateDelta(value) {
	return parseInt(value/3);
}

init();
