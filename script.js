// declare global variables
let canvas;
let button;
let slider;
let spread;
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 400;

/*
 * setup()
 * This is a standard p5.js function that is automatically called once. As you * can guess by its name, you should put any "setup code" in this function
 * (e.g., initializing the canvas, global variable values, placing characters
 * sprites onto the canvas, etc).
 */
function setup() {
  // assign canvas variable to a new canvas of CANVAS_WIDTH, CANVAS_HEIGHT
  canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // set background to any color you like (r,g,b)
  background(65, 60, 88);
  // attach canvas to the #canvas-area div
  canvas.parent("#canvas-area");
  // attach mousePressed() event to canvas. drawSplatter() is the callback
  canvas.mousePressed(drawEllipse);
  // assign the #clear-button button element to the button variable
  button = select("#clear-button");
  // attach mousePressed() event to button. setup() is the callback
  button.mousePressed(setup);
  // assign #slider input element to the slider variable
  slider = select("#slider");
  // attach input() event to slider. updateSpread() is the callback
  slider.input(updateSpread);
  // finally, call updateSpread()
  updateSpread();
}

/*
 * drawEllipse()
 * This function should draw an ellipse. For the sake of this demo, let's make * it "red" (#ff0000).
 */
 function drawEllipse() {
   // the next shape we draw will be "red" (#ff0000)
   fill("#ff0000");
   // draw an ellipse at mouseX, mouseY, width and height both 100
   ellipse(mouseX, mouseY, 100, 100);
 }

/*
 * updateSpread()
 * This function simply sets the spread variable to the value of the slider.
 * For example, if the slider is at 75, the spread will be set to 75 as well.
 */
function updateSpread() {
  // set spread variable to the value of the slider element
  spread = slider.value();
}

 /*
  * drawSplatter()
  * Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */
  function drawSplatter(){
    fill(random(100, 255), random(100, 255), random(100, 255));
    noStroke();
    // the magic happens below!
    
  }
