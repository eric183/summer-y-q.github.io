
uniform vec3 uFrequency;
uniform float uTime;

varying vec3 vPosition;
varying vec3 vNewPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vElevation;
varying float vTime;
varying float vPlacement;


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float noise (in vec3 st) {
    vec2 i = floor(st.xy);
    vec2 f = fract(st.xy);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float wave (in vec3 st) {
  return sin(st.x * 10.0 + uTime * 2.0) * 0.5 + 0.5;
}


void main() {
  
  vPosition = position;
  vNormal = normal;
  vUv = uv;
  vTime = uTime;
  float wavePattern = wave(vNormal);

  vec3 noisePattern = vec3(noise(uFrequency * position), noise(uFrequency * position + vec3(5.2, 1.3, 3.7)), noise(uFrequency * position + vec3(1.3, 3.7, 5.2)));


  vElevation = noisePattern.x * 0.5 + 0.5;

  // vec3 newPosition = vNormal + position + noisePattern * 0.5;
  vec3 newPosition = vNormal + position + wavePattern * 0.5;
  // vec3 newPosition = vNormal + position + vElevation * 0.5;

  // vPlacement = noisePattern;
  vNewPosition = newPosition;

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
 
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPos = projectionMatrix * viewPosition;

  gl_Position = projectedPos;

}