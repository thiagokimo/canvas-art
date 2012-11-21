var ImageCanvas = {
	width : window.innerWidth,
	height : window.innerHeight,
	canvas : null,
	context: null,
	//this.c.width: width,
	//this.c.height: height,
	
	setup : function(){
		this.canvas = this.canvas = document.getElementById( 'canvas' );
    	this.context = canvas.getContext( '2d' );
    	
    	this.canvas.height = this.height;
    	this.canvas.width = this.width;
    	this.canvas.style.display = 'block';
	},

	draw : function() {

		for(var i = 0; i < this.width; i++) {
			for(var j = 0; j < this.height; j++) {

				if(this.isPixelInsideCenter(i,j,3,3,3)) {
					this.fillPoint(i,j,'#1B87E0');
				}
			}
		}
	},

	isPixelInsideCenter : function(x,y,fillFactor,XDecrement,YDecrement) {
		while(x>0&&y>0) //stop condition
        	{
            	if(x%fillFactor===1 && y%fillFactor===1) 
                	return 0;
                
            	x = Math.floor(x/XDecrement);
            	y = Math.floor(y/YDecrement);

        	}
       	return 1;   	
	},

	fillPoint : function(x,y,color) {
    	this.context.fillStyle=color;
    	this.context.beginPath();
    	this.context.fillRect(x,y,1,1);
    	this.context.closePath();
    	this.context.fill();
	}
}
