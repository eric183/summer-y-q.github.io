
uniform vec3 uFrequency;
uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vElevation;
varying float vTime;

void main() {
  
  vPosition = position;
  vNormal = normal;
  vUv = uv;
  vTime = uTime;

  
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
 
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPos = projectionMatrix * viewPosition;

  gl_Position = projectedPos;

}