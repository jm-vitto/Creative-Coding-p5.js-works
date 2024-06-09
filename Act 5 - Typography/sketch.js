var _width = 1000;
var _height = 700;
function setup() {
  createCanvas(_width, _height);
  background(0);

  var w = new Words(80, 30, 30);
  w.setBoarder(80, _width, 30);
  w.write('BATHSPA\n\n\n\nUNIVERSITY');

}