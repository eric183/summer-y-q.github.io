precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec3 vPosition;
varying vec2 vUv;

void main() 
{
  vec4 textureColor = texture2D(uTexture, vUv);
  // gl_FragColor = vec4(vec3(-1, 1, 0), 1.0);  
  gl_FragColor = textureColor;  
}
 