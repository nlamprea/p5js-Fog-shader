// Fragment shader
precision mediump float;

uniform sampler2D uTexture;
uniform float uFogNear;
uniform float uFogFar;

varying vec2 vTexCoord;
varying float vFogDepth;

void main() {
  vec4 texColor = texture2D(uTexture, vTexCoord);

  // Calcular el factor de niebla basado en la profundidad
  float fogFactor = smoothstep(uFogNear, uFogFar, vFogDepth);

  // Color de la niebla (puedes cambiarlo según tus necesidades)
  vec4 fogColor = vec4(0.8, 0.8, 0.8, 1.0);

  // Interpolar entre el color de la textura y el color de la niebla
  gl_FragColor = mix(texColor, fogColor, fogFactor);
}
