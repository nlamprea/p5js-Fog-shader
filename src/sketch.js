let angle =0;
let image;
let slider;

function preload(){
 image = loadImage("https://webglfundamentals.org/webgl/resources/f-texture.png")
}

function setup() {
  createCanvas(400, 300, WEBGL);
  slider = createSlider(10,100,47)
}

function draw() {
  background(175);
  
  rectMode(CENTER);
  noStroke();
  //fill(0,0,150);

  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)

  texture(image)
  //rect(0,0,50,50)
  //translate(mouseX,mouseY)
  //box(100)
  box(slider.value())

  angle += 0.02;
}
