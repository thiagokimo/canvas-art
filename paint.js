var width = window.innerWidth;
var height = window.innerHeight;
var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = width;
c.height = height;

function init(){
	
	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			if(isSierpinskiCarpetPixelFilled(i,j)) {
				drawRect(i,j,'#000000');
			}
		}
	}
}

function isSierpinskiCarpetPixelFilled(x,y) {
	while(x>0&&y>0) //when either of these reaches zero the pixel is determined to be on the edge at that square level and must be filled
        {
            if(x%3===1 && y%3===1) //checks if the pixel is in the center for the current square level
                return 0;
            x = Math.floor(x/3); //x and y are decremented to check the next larger square level
            y = Math.floor(y/3);
        }
        return 1; //if all possible square levels are checked and the pixel is not determined to be open it must be filled
}

function drawRect (x,y,color) {
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.fillRect(x,y,1,1);
    ctx.closePath();
    ctx.fill();
}

init();
