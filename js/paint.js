var width = window.innerWidth;
//var width = 720;
var height = window.innerHeight;
//var height = 720;
var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = width;
c.height = height;

var gradientArray;

function init(){
	
	for(var i = 0; i < width; i++) {

		for(var j = 0; j < height; j++) {
			if(isPixelInsideCenter(i,j,3,3,3)) {

				fillPoint(i,j,'#1B87E0');
			}
		}
	}
}

function isPixelInsideCenter(x,y,fillFactor,XDecrement,YDecrement) {
	while(x>0&&y>0) //stop condition
        {
            if(x%fillFactor===1 && y%fillFactor===1) 
                return 0;
            x = Math.floor(x/XDecrement); 
            y = Math.floor(y/YDecrement);
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

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

init();
