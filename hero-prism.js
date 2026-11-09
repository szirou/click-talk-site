(()=>{var ne=[.299,.587,.114,.299,.587,.114,.299,.587,.114],oe=[.701,-.587,-.114,-.299,.413,-.114,-.3,-.588,.886],re=[.168,-.331,.5,.328,.035,-.5,-.497,.296,.201],ae=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ie=`#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform mat3 uRay;
uniform float uGlow;
uniform vec2 uOffset;
uniform float uColorFreq;
uniform float uCenterShift;
uniform float uInvBaseHalf;
uniform float uInvHeight;
uniform float uMinAxis;
uniform float uPxScale;
uniform sampler2D uPalette;
uniform int uUsePalette;
uniform float uTime;
uniform float uNoise;
uniform float uSaturation;
uniform mat3 uHue;
uniform int uUseHue;
uniform float uLight;
uniform float uNeutral;
out vec4 outColor;

const vec4 PHASE_COS = vec4(1.0, 0.5403023058681398, -0.4161468365471424, -0.9899924966004454);
const vec4 PHASE_SIN = vec4(0.0, 0.8414709848078965, 0.9092974268256817, 0.1411200080598672);

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
}

float pyramid(vec3 p) {
  vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
  return max((q.x + q.y + q.z - 1.0) * uMinAxis * 0.5773502691896258, -p.y);
}

vec3 grade(vec3 col, vec2 seed) {
  col += (rand(seed) - 0.5) * uNoise;
  col = clamp(col, 0.0, 1.0);
  float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);
  if (uUseHue == 1) col = clamp(uHue * col, 0.0, 1.0);
  return col;
}

void main() {
  vec2 f = (gl_FragCoord.xy - 0.5 * uResolution - uOffset) * uPxScale;
  vec3 origin = uRay * vec3(f, 0.0);
  vec3 axis = uRay[2];
  float z = 5.0;
  vec4 o = vec4(0.0);
  for (int i = 0; i < 100; i++) {
    vec3 p = origin + axis * z;
    float d = 0.1 + 0.2 * abs(pyramid(p + vec3(0.0, uCenterShift, 0.0)));
    z -= d;
    float phase = (p.y + z) * uColorFreq;
    vec4 band = sin(phase) * PHASE_COS + cos(phase) * PHASE_SIN + 1.0;
    if (uUsePalette == 1) band.rgb = texture(uPalette, vec2(phase * 0.15915494309189535, 0.5)).rgb * 2.0;
    o += band / d;
  }
  vec4 raw = o * o * uGlow / 1e5;
  vec4 e = exp(2.0 * raw);
  vec4 mapped = (e - 1.0) / (e + 1.0);
  vec2 seed = gl_FragCoord.xy + vec2(uTime);
  if (uLight > 0.5) {
    float peak = max(raw.r, max(raw.g, raw.b));
    vec3 hue = grade(raw.rgb / max(peak, 1e-6), seed);
    vec3 ink = pow(hue, vec3(1.5)) * mix(0.86, 0.32, uNeutral);
    float strength = max(mapped.r, max(mapped.g, mapped.b)) * mapped.a;
    float cover = clamp(strength * 0.95 + (rand(seed.yx) - 0.5) * uNoise * 0.5, 0.0, 1.0);
    outColor = vec4(ink * cover, cover);
  } else {
    outColor = vec4(grade(mapped.rgb, seed) * mapped.a, mapped.a);
  }
}`,k=(t,i,m)=>Math.min(m,Math.max(i,t)),j=(t,i,m)=>{let o=t.createShader(i);return o?(t.shaderSource(o,m),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},ce=t=>{let i=j(t,t.VERTEX_SHADER,ae),m=j(t,t.FRAGMENT_SHADER,ie),o=t.createProgram();if(!i||!m||!o)return null;if(t.attachShader(o,i),t.attachShader(o,m),t.linkProgram(o),t.deleteShader(i),t.deleteShader(m),!t.getProgramParameter(o,t.LINK_STATUS))return t.deleteProgram(o),null;let c={},g=t.getProgramParameter(o,t.ACTIVE_UNIFORMS);for(let p=0;p<g;p++){let u=t.getActiveUniform(o,p);u&&(c[u.name]=t.getUniformLocation(o,u.name))}return{program:o,uniforms:c}},J=(t,i,m)=>{let o=Math.cos(t),c=Math.sin(t),g=Math.cos(i),p=Math.sin(i),u=Math.cos(m),E=Math.sin(m);return[o*u+c*p*E,g*E,-c*u+o*p*E,-o*E+c*p*u,g*u,c*E+o*p*u,c*g,-p,o*g]},Q=(t,i)=>{let m=new Array(9);for(let o=0;o<3;o++)for(let c=0;c<3;c++)m[o*3+c]=t[c]*i[o*3]+t[3+c]*i[o*3+1]+t[6+c]*i[o*3+2];return m};function se(t){let i=t.querySelector("canvas"),m=getComputedStyle(document.documentElement),o=(e,_)=>m.getPropertyValue(e).trim()||_,c={current:{height:3.5,baseWidth:5.5,animationType:"rotate",glow:.7,offsetX:0,offsetY:0,noise:0,scale:3.1,hueShift:0,colorFrequency:.7,colors:[o("--ink","#123a63"),o("--cyan","#075064"),o("--coral","#ff735c")],saturation:1,timeScale:.5,interactive:!1,hoverStrength:0,inertia:.05,intro:!0,resolution:.4,lightMode:!1,dpr:1.25}},g={current:null},p=()=>{let e=i?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!t||!i||!e)return;let _=ce(e);if(!_)return;let s=_.uniforms,q=e.createVertexArray(),N=e.createTexture();e.bindTexture(e.TEXTURE_2D,N),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,64,1,0,e.RGBA,e.UNSIGNED_BYTE,null);let A=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),$=n=>{if(!A)return[255,255,255];A.clearRect(0,0,1,1),A.fillStyle="#000000",A.fillStyle=String(n),A.fillRect(0,0,1,1);let[r,a,l]=A.getImageData(0,0,1,1).data;return[r,a,l]},O="",D=0,ee=n=>{let r=n.join(",");if(r===O||(O=r,D=0,!n.length))return;let a=n.map($);D=1-a.reduce((f,[h,v,x])=>{let w=Math.max(h,v,x);return f+(w>0?(w-Math.min(h,v,x))/w:0)},0)/a.length;let l=new Uint8Array(256);for(let f=0;f<64;f++){let h=f/64*a.length,v=Math.floor(h),x=a[v%a.length],w=a[(v+1)%a.length],U=h-v,Y=U*U*(3-2*U);for(let P=0;P<3;P++)l[f*4+P]=Math.round(x[P]+(w[P]-x[P])*Y);l[f*4+3]=255}e.bindTexture(e.TEXTURE_2D,N),e.texSubImage2D(e.TEXTURE_2D,0,0,0,64,1,e.RGBA,e.UNSIGNED_BYTE,l)},I=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,T={width:1,height:1,scale:1},d={yaw:0,pitch:0,roll:0},y={x:0,y:0,inside:!1},L=0,M=c.current.intro&&!I?0:1,S=0,R=0,H=!1,X=!0,te=n=>{let r=J(d.yaw,d.pitch,d.roll);if(n.animationType==="rotate"){let a=L*n.timeScale,l=Math.cos(a),f=Math.cos(a+33),h=Math.cos(a+11);return Q(r,[l,0,h,0,1,0,f,0,l])}if(n.animationType==="3drotate"){let a=L*n.timeScale;return Q(r,J(a*.55,Math.sin(a*.6+.6)*.6,Math.sin(a*.35+1.9)*.5))}return r},G=()=>{let n=c.current;ee(n.colors);let r=n.baseWidth*.5,a=M*M*(3-2*M),l=Math.cos(n.hueShift),f=Math.sin(n.hueShift);e.bindVertexArray(q),e.viewport(0,0,i.width,i.height),e.useProgram(_.program),e.uniform2f(s.uResolution,i.width,i.height),e.uniformMatrix3fv(s.uRay,!1,te(n)),e.uniform1f(s.uGlow,n.glow*a*a),e.uniform2f(s.uOffset,n.offsetX*T.scale,-n.offsetY*T.scale),e.uniform1f(s.uColorFreq,n.colorFrequency),e.uniform1f(s.uCenterShift,n.height*.25),e.uniform1f(s.uInvBaseHalf,1/r),e.uniform1f(s.uInvHeight,1/n.height),e.uniform1f(s.uMinAxis,Math.min(r,n.height)),e.uniform1f(s.uPxScale,1/(i.height*.1*n.scale)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,N),e.uniform1i(s.uPalette,0),e.uniform1i(s.uUsePalette,n.colors.length?1:0),e.uniform1f(s.uTime,L),e.uniform1f(s.uNoise,n.noise),e.uniform1f(s.uSaturation,n.saturation),e.uniformMatrix3fv(s.uHue,!1,ne.map((h,v)=>h+oe[v]*l+re[v]*f)),e.uniform1i(s.uUseHue,Math.abs(n.hueShift)>1e-4?1:0),e.uniform1f(s.uLight,n.lightMode?1:0),e.uniform1f(s.uNeutral,D),e.drawArrays(e.TRIANGLES,0,3)},F=()=>{let n=c.current;T.width=Math.max(1,t.clientWidth),T.height=Math.max(1,t.clientHeight),T.scale=Math.min(n.dpr||window.devicePixelRatio||1,2)*n.resolution,i.width=Math.max(1,Math.round(T.width*T.scale)),i.height=Math.max(1,Math.round(T.height*T.scale)),G(),b()},z=n=>{if(S=0,!X||!H||document.hidden)return;let r=c.current;if(Math.round(T.width*Math.min(r.dpr||window.devicePixelRatio||1,2)*r.resolution)!==i.width){F();return}let a=R?k((n-R)/1e3,.001,.05):1/60;if(R=n,!I){let K=document.querySelector("[data-infinite-spiral]");L=K?.clickTalkSpiralState?K.clickTalkSpiralState.progress*.85:L+a}M<1&&(M=Math.min(1,M+a/1.4));let l=r.animationType==="hover",f=y.inside&&!I&&(l||r.interactive),h=(l?.6:.09)*r.hoverStrength,v=f?-y.x*h:0,x=f?y.y*h:0,w=1-Math.pow(1-r.inertia,a*60);d.yaw+=(v-d.yaw)*w,d.pitch+=(x-d.pitch)*w,d.roll+=(0-d.roll)*(1-Math.pow(.9,a*60)),G();let U=Math.abs(v-d.yaw)+Math.abs(x-d.pitch)+Math.abs(d.roll)>1e-4;!I&&!l&&r.animationType!=="static"&&r.timeScale>0||U||M<1||!I&&r.noise>0?S=requestAnimationFrame(z):R=0};function b(){X&&!S&&H&&!document.hidden&&(S=requestAnimationFrame(z))}let V=n=>{let r=t.getBoundingClientRect(),a=(n.clientX-r.left)/Math.max(1,r.width)*2-1,l=(n.clientY-r.top)/Math.max(1,r.height)*2-1;y.inside=Math.abs(a)<=1&&Math.abs(l)<=1,y.x=k(a,-1,1),y.y=k(l,-1,1);let f=c.current;(f.interactive||f.animationType==="hover")&&b()},C=()=>{y.inside=!1,b()},B=()=>{R=0,document.hidden?(cancelAnimationFrame(S),S=0):b()},W=new ResizeObserver(F);W.observe(t);let Z=new IntersectionObserver(n=>{H=n.some(r=>r.isIntersecting),H?(R=0,b()):(cancelAnimationFrame(S),S=0,R=0)});return Z.observe(t),c.current.interactive&&window.addEventListener("pointermove",V,{passive:!0}),window.addEventListener("blur",C),document.documentElement.addEventListener("pointerleave",C),document.addEventListener("visibilitychange",B),F(),g.current=b,()=>{X=!1,cancelAnimationFrame(S),g.current=null,W.disconnect(),Z.disconnect(),window.removeEventListener("pointermove",V),window.removeEventListener("blur",C),document.documentElement.removeEventListener("pointerleave",C),document.removeEventListener("visibilitychange",B),e.deleteTexture(N),e.deleteVertexArray(q),e.deleteProgram(_.program)}},u=null;function E(){u?.(),u=null;try{u=p()}catch{}}i.addEventListener("webglcontextlost",e=>{e.preventDefault(),u?.(),u=null}),i.addEventListener("webglcontextrestored",E),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",E),window.addEventListener("pagehide",()=>{u?.(),u=null}),window.addEventListener("pageshow",()=>{u||E()}),E()}document.querySelectorAll("[data-hero-prism]").forEach(se);})();
