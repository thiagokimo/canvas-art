var ImageCanvas = {
	width : window.innerWidth,
	height : window.innerHeight,
	canvas : null,
	context: null,
	color: "#000000",
	fillFactor: 3,
	XDecrement: 3,
	YDecrement: 3,

	setup : function(){

		this.canvas = this.canvas = document.getElementById( 'canvas' );
    this.context = canvas.getContext( '2d' );

    this.resizeCanvas(this.width,this.height);
    	
  	this.canvas.style.marginLeft = -this.canvas.width/2 + 'px';
  	this.canvas.style.marginTop = -this.canvas.height/2 + 'px';
  	this.canvas.style.display = 'block'
	},

	draw : function() {

		this.resizeCanvas(this.width,this.height);

		this.clear();

		if (this.XDecrement <= 1 || this.YDecrement <= 1) {
			alert('X and Y decrement values needs to be greater than 1');
		} 
		else{
			for(var i = 0; i < this.width; i++) {
				for(var j = 0; j < this.height; j++) {

					if(this.isPixelInsideCenter(i,j,this.fillFactor,this.XDecrement,this.YDecrement)) {
						this.fillPoint(i,j,this.color);
					}
				}
			}
		}
		
	},

	isPixelInsideCenter : function(x,y,fillFactor,XDecrement,YDecrement) {
		while(x>0&&y>0) //stop condition
        	{
            	if(x%fillFactor===1 && y%fillFactor===1) {
                return 0;
              }
                
                
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

	save: function() {
    window.open( this.canvas.toDataURL('image/png'), 'mywindow' );
  	},

	/*
  	*  Resizes the canvas to fit within the screen, based on a given image width/height
  	*/
  	resizeCanvas: function( width, height ) {

	    var newWidth, newHeight;

	    var availableWidth = window.innerWidth - 350;
	    var availableHeight = window.innerHeight - 350;

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
	},

  clear : function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }  
}
