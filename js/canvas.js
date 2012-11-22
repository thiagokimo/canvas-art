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
    	
    	if (window.innerHeight + 80 > window.innerWidth - 100)
      	this.canvas.width = window.innerWidth - 100;
    	else {
      		this.canvas.width = window.innerHeight + 80;
    	}
    	this.canvas.height = window.innerHeight - 100;
    	this.canvas.style.marginLeft = -this.canvas.width/2 + 'px';
    	this.canvas.style.marginTop = -this.canvas.height/2 + 'px';
    	this.canvas.style.display = 'block'
	},

	draw : function() {

		//FIXME
		//this.resizeCanvas(width,height);

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
	},

	/*
  	*  Resizes the canvas to fit within the screen, based on a given image width/height
  	*/
  	resizeCanvas: function( width, height ) {

	    var newWidth, newHeight;

	    var availableWidth = window.innerWidth - 100;
	    var availableHeight = window.innerHeight - 100;

	    // If the image is too big for the screen... scale it down.
	    if ( width > availableWidth || height > availableHeight ) {

	      var maxRatio = Math.max( width / availableWidth , height / availableHeight );
	      newWidth = width / maxRatio;
	      newHeight = height / maxRatio;

	    } 
	    else {
	      newWidth = width;
	      newHeight = height;
	    }

	    this.canvas.width = newWidth//window.innerWidth;
	    this.canvas.height = newHeight//window.innerHeight;
	    this.canvas.style.marginLeft = -this.canvas.width/2 + 'px';
	    this.canvas.style.marginTop = -this.canvas.height/2 + 'px';
	}
}
