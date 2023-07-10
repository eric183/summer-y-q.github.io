precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;
uniform float uTime;


varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;
varying float vTime;

void main() 
{
  vec3 yellow, magenta, cyan;
  
  vec3 colorA = vec3(0.9);
  vec3 colorB = vec3(0.2);

  float fractTime = vTime;
  yellow.rg = vec2(1.0);
  yellow.b = 0.0;

  magenta = yellow.rbg;

  // vec4 textureColor = texture2D(uTexture, vUv);
  // gl_FragColor = vec4(smoothstep(0.1, 1.0, vUv.xy), 1.0, 1.0);  
  // vec3 viewDirection = cameraPosition - vPosition;
  // gl_FragColor = vec4(textureColor.rgb, 1.0);
  // vec3 viewDirection = normalize(cameraPosition - vPosition);
  
  // float fresnel = 1.0 - dot(viewDirection, vNormal);

  // gl_FragColor = vec4(vec3(viewDirection), 1.0);
  // gl_FragColor = vec4(vec3(fresnel), 1.0);

  gl_FragColor = vec4(mix(magenta, yellow, abs(sin(fractTime))), 1.0);
  // gl_FragColor = vec4(vec3(dot(colorA, colorB)), 1.0);
}