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
  
  vec3 color = vec3(0.0);

  // // Each result will return 1.0 (white) or 0.0 (black).
  // // float left = step(0.1,vPosition.x);   // Similar to ( X greater than 0.1 )
  // // float bottom = step(0.1,vPosition.y); // Similar to ( Y greater than 0.1 )
  // vec3 borders = smoothstep(vec3(0.1), vec3(0.9), vPosition);
  // // The multiplication of left*bottom will be similar to the logical AND.
  // color = borders;

   float pct = 0.0;

    // a. The DISTANCE from the pixel to the center
    pct = distance(vPosition,vec3(0.5));

    // b. The LENGTH of the vector
    //    from the pixel to the center
    // vec2 toCenter = vec2(0.5)-st;
    // pct = length(toCenter);

    // c. The SQUARE ROOT of the vector
    //    from the pixel to the center
    // vec2 tC = vec2(0.5)-st;
    // pct = sqrt(tC.x*tC.x+tC.y*tC.y);

   color = vec3(pct);


  gl_FragColor = vec4(color,1.0);
}


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
