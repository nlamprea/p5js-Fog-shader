let angle = 0;
let img;
let nearSlider, farSlider;

function preload() {
  img = loadImage("https://webglfundamentals.org/webgl/resources/f-texture.png");
}

function setup() {
  createCanvas(300, 200, WEBGL);

  nearSlider = createSlider(0, 255, 150);
  nearSlider.position(10, height + 10);
  let nearLabel = createP('FogNear');
  nearLabel.position(nearSlider.x * 2 + nearSlider.width, height + 5);

  farSlider = createSlider(0, 255, 50);
  farSlider.position(10, height + 40);
  let farLabel = createP('FogFar');
  farLabel.position(farSlider.x * 2 + farSlider.width, height + 35);
}

function draw() {
  background(200);
  rectMode(CENTER);

  let nearVal = nearSlider.value();
  let farVal = farSlider.value();

  if (nearVal === 0 && farVal === 0) {
    return;
  }

  let numBoxes = 20; 
  let initialSpacing = 500; 

  for (let i = 0; i < numBoxes; i++) {
    push();
    let spacing = initialSpacing * pow(0.9, i);
    let offset = map(i, 0, numBoxes - 1, -300, 300);
    translate(offset, 0, -spacing * i);

    let brightness = map(i, 0, numBoxes - 1, nearVal, farVal);
    let opacity = map(i, 0, numBoxes - 1, 255, 50);

    tint(brightness, brightness, brightness, opacity);

    let boxSize = map(i, 0, numBoxes - 1, 100, 20);

    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);

    noStroke();
    texture(img);
    box(boxSize);
    pop();
  }

  angle += 0.02;
}
