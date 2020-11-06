let slider;
let bg = 200;
let x = 100;
let y = 100;
let w = 150;
let h = 150;
let sel;
let ap;
let ba;
let or;
let wa;
let save = [];

function preload() {
  ap = loadImage('apple.png');
  ba = loadImage('banana.png');
  or = loadImage('orange.png');
  wa = loadImage('watermelon.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //save.push(bg);
  background(bg);
  slider = createSlider(0, 255, 150);
  slider.position(width/2 - slider.width/2, height/2 - slider.height/2);
  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('apple');
  sel.option('banana');
  sel.option('orange');
  sel.option('watermelon');
  sel.changed(printFruit);
}

function draw() {
  background(bg);
  //printFruit();
  for (let obj of save){
      for(let i = 0; i<10; i++){
          image(ap, save[i].x, save[i].y, save[i].w, save[i].h);
      }
  }
  bg = slider.value();
}

function printFruit(){
    //background(bg);
    let item = sel.value();
    if(item == 'apple'){
        save.push({
            f: ap;
            x: x;
            y: y;
            w: w;
            h: h;
        });
        
    } else if (item == 'banana'){
        image(ba, x, y, w, h);
    } else if (item == 'orange'){
        image(or, x, y, w, h);
    } else if (item == 'watermelon'){
        image(wa, x, y, w, h);
    }
}

function bgChange(){
    bg = color(random(255), random(255), random(255));
    //background(save[0]);
    //image(ap, x, y, w, h);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //background(save[0]);
    slider.position(width/2 - slider.width/2, height/2 - slider.height/2);
}