precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;
uniform float uTime;


varying vec3 vPosition;
varying vec3 vNewPosition;
varying vec2 vUv;
varying vec3 vNormal;
varying float vTime;
varying float vDisplacement;

void main() 
{
  

  vec2 uv = vUv;

  vec4 textureColor = texture2D(uTexture, uv);
  // uv -= 0.5;
  // uv.x *= 1.0;

  // float freq = (sin(vTime* 4.) + 1.0)/2.;
  // vec2 R = vec2(freq/8.0 + 0.2, freq/9.0 + 0.12);
  // float sdf = length(max(abs(uv) - R,vec2(0)));
  // float waves = smoothstep(0.0, 0.16,sin(sdf*100.0));
  // gl_FragColor = vec4(vec3(waves), 1.0);
  // gl_FragColor = vec4(textureColor.xyz, 1.0);
  // gl_FragColor = vec4(0.2, 1, 1, 1.0);
  gl_FragColor = vec4(vNormal, 1.0);
  // vec3 colorThing = vec3(vDisplacement);
  // colorThing = vec3(vNormal * vDisplacement * 10.0);
  // gl_FragColor = vec4(colorThing, 1.0);
}