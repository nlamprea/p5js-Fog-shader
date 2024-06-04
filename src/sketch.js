let angle = 0;
let img;
let nearSlider, farSlider;
let fogShader;

function preload() {
  img = loadImage("https://webglfundamentals.org/webgl/resources/f-texture.png");
  fogShader = loadShader('vertShader.vert', 'fragShader.frag');
}

function setup() {
  createCanvas(300, 200, WEBGL);

  nearSlider = createSlider(4, 50, 13.5);
  nearSlider.position(10, height + 10);
  let nearLabel = createP('FogFar');
  nearLabel.position(nearSlider.x * 2 + nearSlider.width, height + 5);

  farSlider = createSlider(-25, 0, -13.0);
  farSlider.position(10, height + 40);
  let farLabel = createP('FogNear');
  farLabel.position(farSlider.x * 2 + farSlider.width, height + 35);
}

function draw() {
  background(204, 231, 254, 255);


  let nearVal = nearSlider.value();
  let farVal = farSlider.value();


  let numBoxes = 20; 
  let initialSpacing = 300; 

  shader(fogShader);
  
  for (let i = 0; i < numBoxes; i++) {
    push();

    fogShader.setUniform('uTexture', img);
    
    fogShader.setUniform('u_fogColor', [0.8, 0.9, 1, 1]);
    fogShader.setUniform('uFogNear', map(i, 0, numBoxes, 0.3, nearVal));
    fogShader.setUniform('uFogFar', map(i, 0, numBoxes, farVal, 0.3));
    let spacing = initialSpacing * pow(0.96, i);
    let offset = map(i, 0, numBoxes - 1, -300, 300);
    translate(offset, 0, -spacing * i);

    let boxSize = map(i, 0, numBoxes, 100, 20);
    

    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);

    noStroke();
    //texture(img);
    box(boxSize);
    pop();
  }

  resetShader();
  angle += 0.02;
}
