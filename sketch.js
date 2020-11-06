let xSlider, ySlider, sSlider;
let inp, button, colorPicker, sel;
let x = 100;
let y = 100;
let w = 150;
let h = 150;
let ap, ba, or, wa;
let fruit = [];

function preload() {
  ap = loadImage('apple.png');
  ba = loadImage('banana.png');
  or = loadImage('orange.png');
  wa = loadImage('watermelon.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //inp = createInput('');
  //inp.position(20, 200);
  //inp.input(inputEvent);
  button = createButton('submit');
  button.mousePressed(printFruit);

  colorPicker = createColorPicker('#dcdcdc');
  rectMode(CENTER);
  xSlider = createSlider(w/2, windowWidth-w/2, windowWidth/2);
  ySlider = createSlider(h/2, windowHeight-h/2, windowHeight/2);
  sSlider = createSlider(10, 310, 160);

  textAlign(CENTER);
  sel = createSelect();
  sel.option('');
  sel.option('apple');
  sel.option('banana');
  sel.option('orange');
  sel.option('watermelon');
}

function printFruit(){
    let item = sel.value();
    x = xSlider.value();
    y = ySlider.value();
    s = sSlider.value();
    if(item == 'apple'){
        fruit.push({
            f: ap,
            x: x,
            y: y,
            s: s,
        });
    } else if (item == 'banana'){
        fruit.push({
            f: ba,
            x: x,
            y: y,
            s: s,
        });
    } else if (item == 'orange'){
        fruit.push({
            f: or,
            x: x,
            y: y,
            s: s,
        });
    } else if (item == 'watermelon'){
        fruit.push({
            f: wa,
            x: x,
            y: y,
            s: s,
        });
    }
    sel.selected('');
    draw();
}

function draw(){
  background(colorPicker.color());
  for (let obj of fruit){
      for(let i = 0; i<10; i++){
          image(fruit[i].f, fruit[i].x, fruit[i].y, fruit[i].s, fruit[i].s);
      }
  }
  
  textSize(14);
  text('Background color:', 100, 60);
  colorPicker.position(160, 40);
  
  text('Pick a fruit:', width/2-60, height*2/3+14);
  sel.position(width/2, height*2/3);
  text('x-position:', width/2 - 75, height*0.745);
  text('y-position:', width/2 - 75, height*0.785);
  sel.position(width/2, height*2/3);
  text('Size:', width/2 - 60, height*0.84);
  sel.position(width/2, height*2/3);
  xSlider.position(width/2 - xSlider.width/2+50, height*0.72);
  ySlider.position(width/2 - ySlider.width/2+50, height*0.76);
  sSlider.position(width/2 - sSlider.width/2+30, height*0.815);
  button.position(width/2 - button.width/2, height*0.88);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}