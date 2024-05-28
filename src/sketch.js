let angle =0;
let image;
let slider;

function preload(){
 image = loadImage("https://webglfundamentals.org/webgl/resources/f-texture.png")
}

function setup() {
  createCanvas(400, 300, WEBGL);
  slider = createSlider(10,100,47)
  slider.position(10, height + 10);
}

function draw() {
  background(200);
  
  rectMode(CENTER);
  //fill(0,0,150);

  let val = slider.value();
  ambientLight(val, val, val);

  //directionalLight(250, 250, 250, 0, -1, 0);

  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)

  noStroke();

  texture(image)
  box(100)

  angle += 0.02;  
}
