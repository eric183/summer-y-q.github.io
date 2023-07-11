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
  
    // vec2 uv = fragCoord/iResolution.xy;
    // uv -= 0.5;
    // uv.x *= iResolution.x/iResolution.y;

    // float freq = (sin(iTime* 4.) + 1.0)/2.;
    // vec2 R = vec2(freq/8.0 + 0.2, freq/9.0 + 0.12);
    
    // float sdf = length(max(abs(uv) - R,vec2(0)));
    // float waves = smoothstep(0.0, 0.16,sin(sdf*100.0));
    
    // // Output to screen
    // fragColor = vec4(vec3(waves),1.0);
  vec2 uv = vUv;
  uv -= 0.5;
  uv.x *= 1.0;

  float freq = (sin(vTime* 4.) + 1.0)/2.;
  vec2 R = vec2(freq/8.0 + 0.2, freq/9.0 + 0.12);
  float sdf = length(max(abs(uv) - R,vec2(0)));
  float waves = smoothstep(0.0, 0.16,sin(sdf*100.0));
  gl_FragColor = vec4(vec3(waves), 1.0);
}



// y = mod(x,0.5); // 返回 x 对 0.5 取模的值
//y = fract(x); // 仅仅返回数的小数部分
//y = ceil(x);  // 向正无穷取整
//y = floor(x); // 向负无穷取整
//y = sign(x);  // 提取 x 的正负号
//y = abs(x);   // 返回 x 的绝对值
//y = clamp(x,0.0,1.0); // 把 x 的值限制在 0.0 到 1.0
//y = min(0.0,x);   // 返回 x 和 0.0 中的较小值
//y = max(0.0,x);   // 返回 x 和 0.0 中的较大值  

// void main() 
// {
//   vec3 yellow, magenta, cyan;
  
//   vec3 colorA = vec3(0.9);
//   vec3 colorB = vec3(0.2);

//   float fractTime = vTime;
//   yellow.rg = vec2(1.0);
//   yellow.b = 0.0;

//   magenta = yellow.rbg;

//   // vec4 textureColor = texture2D(uTexture, vUv);
//   // gl_FragColor = vec4(smoothstep(0.1, 1.0, vUv.xy), 1.0, 1.0);  
//   // vec3 viewDirection = cameraPosition - vPosition;
//   // gl_FragColor = vec4(textureColor.rgb, 1.0);
//   // vec3 viewDirection = normalize(cameraPosition - vPosition);
  
//   // float fresnel = 1.0 - dot(viewDirection, vNormal);

//   // gl_FragColor = vec4(vec3(viewDirection), 1.0);
//   // gl_FragColor = vec4(vec3(fresnel), 1.0);

//   gl_FragColor = vec4(mix(magenta, yellow, abs(sin(fractTime))), 1.0);
//   // gl_FragColor = vec4(vec3(dot(colorA, colorB)), 1.0);
// }


// float step(float edge, float x)  
// vec2 step(vec2 edge, vec2 x)  
// vec3 step(vec3 edge, vec3 x)  
// vec4 step(vec4 edge, vec4 x)

// vec2 step(float edge, vec2 x)  
// vec3 step(float edge, vec3 x)  
// vec4 step(float edge, vec4 x)

// float step(float edge, float x)  
// vec2 step(vec2 edge, vec2 x)  
// vec3 step(vec3 edge, vec3 x)  
// vec4 step(vec4 edge, vec4 x)

// vec2 step(float edge, vec2 x)  
// vec3 step(float edge, vec3 x)  
// vec4 step(float edge, vec4 x)