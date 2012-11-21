var width = window.innerWidth;
//var width = 720;
var height = window.innerHeight;
//var height = 720;
var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = width;
c.height = height;

function init(){
	
	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			if(isPixelInsideCenter(i,j,2,2,2)) {
				fillPoint(i,j,'#000000');
			}
		}
	}
}

function isPixelInsideCenter(x,y,fillFactor,XDecrementFactor,YDecrementFactor) {
	while(x>0&&y>0) //stop condition
        {
            if(x%fillFactor===1 && y%fillFactor===1) 
                return 0;
            x = Math.floor(x/XDecrementFactor); 
            y = Math.floor(y/YDecrementFactor);
        }
        return 1;
}

function fillPoint (x,y,color) {
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.fillRect(x,y,1,1);
    ctx.closePath();
    ctx.fill();
}

init();
