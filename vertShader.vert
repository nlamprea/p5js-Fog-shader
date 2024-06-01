
precision mediump float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTexCoord;
varying vec3 vWorldPosition;

void main() {
  vTexCoord = aTexCoord;
  vec4 worldPosition = uModelViewMatrix * vec4(aPosition, 1.0);
  vWorldPosition = worldPosition.xyz;

  gl_Position = uProjectionMatrix * worldPosition;
}
