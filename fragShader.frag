// Fragment shader
precision mediump float;

uniform sampler2D uTexture;
uniform float uFogNear;
uniform float uFogFar;
uniform vec4 u_fogColor;

varying vec2 vTexCoord;
varying float vFogDepth;

void main() {
  vec4 texColor = texture2D(uTexture, vTexCoord);

  // Calcular el factor de niebla basado en la profundidad
  //float fogFactor = smoothstep(uFogNear, uFogFar, vFogDepth);

  vec4 fogColor = vec4(0.8, 0.9, 1, 1);
  float fogFactor = smoothstep(uFogNear, uFogFar, 0.7);
  // Interpolar entre el color de la textura y el color de la niebla
  gl_FragColor = mix(texColor, u_fogColor, fogFactor);
}
