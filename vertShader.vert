// Vertex shader
attribute vec4 aPosition;
attribute vec2 aTexCoord;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

varying vec2 vTexCoord;
varying float vFogDepth;

void main() {
  vTexCoord = aTexCoord;
 // vec4 worldPosition = uModelViewMatrix * vec4(aPosition, 1.0);
  vFogDepth = (uModelViewMatrix * aPosition).z; // Calcular la profundidad para el efecto de niebla
  gl_Position = uProjectionMatrix * uModelViewMatrix * aPosition;
}
