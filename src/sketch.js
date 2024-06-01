let angle = 0;
let img;
let slider;
let fogShader;

function preload() {
  img = loadImage("https://webglfundamentals.org/webgl/resources/f-texture.png");
  fogShader = loadShader('vertShader.vert', 'fragShader.frag');
}

function setup() {
  createCanvas(400, 300, WEBGL);
  slider = createSlider(0, 1, 0.47, 0.01); 
  slider.position(10, height + 10);
  noStroke();
}

function draw() {
  background(200);

  shader(fogShader);
  fogShader.setUniform('u_time', millis() / 1000.0);
  fogShader.setUniform('u_resolution', [width, height]);
  fogShader.setUniform('u_fogDensity', slider.value());
  fogShader.setUniform('u_texture', img);
  fogShader.setUniform('u_fogColor', [0.8, 0.8, 0.8, 1.0]);

  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

  beginShape();
  texture(img);
  box(100);
  endShape(CLOSE);

  angle += 0.02;
}
