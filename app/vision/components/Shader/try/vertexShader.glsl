// uniform mat4 projectionMatrix;
// uniform mat4 modelMatrix;
// uniform mat4 viewMatrix;

// attribute vec3 position;
// attribute vec2 uv;
uniform vec3 uFrequency;
uniform float uTime;
// uniform vec2 uTexture; 

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
  // float elevation = sin(modelPosition.x * uFrequency.x + uTime * 3.0) * 0.1;
  // elevation = sin(modelPosition.y * uFrequency.y + uTime * 3.0) * 0.1;
  // vElevation = elevation;
  // modelPos.y += 50.0;
  // modelPosition.y += sin(modelPosition.y * uFrequency.y + uTime * 3.0) * 0.1;
  // modelPosition.y += sin(modelPosition.x * uFrequency.x + uTime * 3.0) * 0.1;
  // modelPosition.y += sin(modelPosition.z * uFrequency.z + uTime * 2.0) * 0.1;

  // modelPosition.y = uTime;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPos = projectionMatrix * viewPosition;

  gl_Position = projectedPos;

}