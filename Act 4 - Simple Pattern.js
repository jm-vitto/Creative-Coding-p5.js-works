var maxCol = 5;
var maxRow = 4;
var circleD = 75 //diameter


function setup() {
  createCanvas(600 , 600); //canvas size
  noStroke();
  background("rgb(139,2,139)"); //bg color
  
  rectMode(CORNER); // 0,0 of the rect
  
  var xSpacing = (width/maxCol); //canvas width
  var ySpacing = (height/maxRow); //canvas height
  
  translate(30, 20);
  
  for(var x=0; x<maxCol; x++) {
    for (var y=0; y<maxRow; y++) {
      
      if ( y == 2) {
        fill ("rgb(250,0,250)");
        
      } else {
        fill ("rgb(64,3,73)");
      }
      
      rect (x*xSpacing, y*ySpacing, circleD, circleD)
    }
      
  }
    
}

