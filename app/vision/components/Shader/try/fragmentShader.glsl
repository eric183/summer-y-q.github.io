precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec3 vPosition;
varying vec2 vUv;

void main() 
{
  vec3 colorA = vec3(0.9);
  vec3 colorB = vec3(0.2);
  // vec4 textureColor = texture2D(uTexture, vUv);
  // gl_FragColor = vec4(smoothstep(0.1, 1.0, vUv.xy), 1.0, 1.0);  
  // gl_FragColor = vec4(textureColor.rgb, 1.0);
  vec3 viewDirection = normalize(cameraPosition - vPosition);

  gl_FragColor = vec4(viewDirection, 1.0);
  // gl_FragColor = vec4(vec3(dot(colorA, colorB)), 1.0);
}
 