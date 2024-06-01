precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture;
uniform float u_fogDensity;
uniform vec4 u_fogColor;

varying vec2 vTexCoord;
varying vec3 vWorldPosition;

void main() {
  vec4 texColor = texture2D(u_texture, vTexCoord);

  // Calcular la distancia desde el fragmento hasta la cámara
  float distance = length(vWorldPosition);
  
  // Calcular la cantidad de niebla usando una curva exponencial
  float fogFactor = exp(-u_fogDensity * distance);
  fogFactor = clamp(fogFactor, 0.0, 1.0);
  
  // Aplicar la niebla al color del fragmento
  vec4 finalColor = mix(u_fogColor, texColor, fogFactor);
  
  gl_FragColor = finalColor;
}
