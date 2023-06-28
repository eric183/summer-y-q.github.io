export const vertexShader = `uniform float amplitude;
uniform float frequency;
uniform float speed;
uniform float time;
attribute float size;
varying float vSize;

void main() {
  vSize = size;
  vec3 newPosition = position;
  newPosition.z = sin(position.x * frequency + time * speed) * amplitude * size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}`;

export const fragmentShader = `uniform vec3 color;
varying float vSize;

void main() {
  gl_FragColor = vec4(color, vSize);
}`;
