let button1;
let bg = 100;
let img;

function setup() {
  createCanvas(400, 400);
    
  img = loadImage('/images/apple.png');
  button1 = createButton('My Button');
  button1.position(300, 100);
    //absolute position
  button1.style('backgroundColor', '#FF0000');
  button1.style('width', '80px');
  button1.style('height', '40px');
  button1.style('borderRadius', '4px');
    //width, height, borderRadius, fontSize, fontWeight - bold
    //rgba for transparency (0,0,0,0) for invisible
  button1.mousePressed(bgChange);
    //mouseOver for hovering
  createColorPicker();
}

function draw() {
    background(bg);
    image(img, 100, 100);
    //rect(200, 200, 100, 100);
    //button1.position(windowWidth/6, 100);
}

function bgChange(){
    bg = color(random(255), random(255), random(255));
}