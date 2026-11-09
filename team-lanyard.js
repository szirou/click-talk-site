(()=>{var nl=0,zo=1,il=2;var ko=1,sl=2,vn=3,Cn=0,Fe=1,Qe=2,In=0,ii=1,Ho=2,Vo=3,Go=4,rl=5,Vn=100,al=101,ol=102,cl=103,ll=104,hl=200,ul=201,dl=202,fl=203,br=204,Er=205,pl=206,ml=207,gl=208,xl=209,vl=210,yl=211,Ml=212,Sl=213,bl=214,Zr=0,Qr=1,jr=2,si=3,$r=4,ta=5,ea=6,na=7,Wo=0,El=1,Tl=2,Pn=0,Al=1,wl=2,_l=3,Cl=4,Rl=5,Il=6,ia=7;var Xo=300,di=301,fi=302,sa=303,ra=304,Ws=306,gn=1e3,fn=1001,Tr=1002,ke=1003,Pl=1004;var Xs=1005;var Je=1006,aa=1007;var yn=1008;var hn=1009,qo=1010,Jo=1011,ji=1012,oa=1013,Kn=1014,Mn=1015,$i=1016,ca=1017,la=1018,ts=1020,Yo=35902,Ko=35899,Zo=1021,Qo=1022,en=1023,Fi=1026,es=1027,jo=1028,ha=1029,$o=1030,ua=1031;var da=1033,qs=33776,Js=33777,Ys=33778,Ks=33779,fa=35840,pa=35841,ma=35842,ga=35843,xa=36196,va=37492,ya=37496,Ma=37808,Sa=37809,ba=37810,Ea=37811,Ta=37812,Aa=37813,wa=37814,_a=37815,Ca=37816,Ra=37817,Ia=37818,Pa=37819,La=37820,Da=37821,Ua=36492,Na=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,ka=36286;var Ms=2300,Ar=2301,Sr=2302,wo=2400,_o=2401,Co=2402;var Ll=3200,Dl=3201;var tc=0,Ul=1,Ln="",Ae="srgb",ri="srgb-linear",Ss="linear",re="srgb";var ni=7680;var Ro=519,Nl=512,Fl=513,Ol=514,ec=515,Bl=516,zl=517,kl=518,Hl=519,Io=35044;var nc="300 es",on=2e3,bs=2001;var Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ja=Math.PI/180,wr=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function $a(i,t,e){return(1-e)*i+e*t}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=M;return}if(u!==M||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*M,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){let R=Math.sqrt(T),C=Math.atan2(R,f*A);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}let S=o*A;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+M*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},to=new I,Pc=new He,Vt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],A=s[1],T=s[4],S=s[7],R=s[2],C=s[5],L=s[8];return r[0]=a*M+o*A+l*R,r[3]=a*m+o*T+l*C,r[6]=a*f+o*S+l*L,r[1]=c*M+h*A+u*R,r[4]=c*m+h*T+u*C,r[7]=c*f+h*S+u*L,r[2]=d*M+p*A+g*R,r[5]=d*m+p*T+g*C,r[8]=d*f+p*S+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},eo=new Vt;function ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vl(){let i=Es("canvas");return i.style.display="block",i}var Lc={};function Oi(i){i in Lc||(Lc[i]=!0,console.warn(i))}function Gl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Dc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){let i={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ri]:{primaries:t,whitePoint:n,transfer:Ss,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),i}var te=Hh();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,_r=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ei===void 0&&(Ei=Es("canvas")),Ei.width=t.width,Ei.height=t.height;let s=Ei.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vh=0,Bi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gh=0,io=new I,Ue=class i extends Rn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fn,s=fn,r=Je,a=yn,o=en,l=hn,c=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ns(),this.name="",this.source=new Bi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gn:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gn:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Xo;Ue.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,S=(p+1)/2,R=(f+1)/2,C=(h+d)/4,L=(u+M)/4,F=(g+m)/4;return T>S&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=L/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=F/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=L/r,s=F/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-M)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cr=class extends Rn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ue(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Cr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ts=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),er.subVectors(this.max,fs),Ti.subVectors(t.a,fs),Ai.subVectors(t.b,fs),wi.subVectors(t.c,fs),Nn.subVectors(Ai,Ti),Fn.subVectors(wi,Ai),jn.subVectors(Ti,wi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-jn.z,jn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,jn.z,0,-jn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-jn.y,jn.x,0];return!so(e,Ti,Ai,wi,er)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Ti,Ai,wi,er))?!1:(nr.crossVectors(Nn,Fn),e=[nr.x,nr.y,nr.z],so(e,Ti,Ai,wi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,tr=new Gn,Ti=new I,Ai=new I,wi=new I,Nn=new I,Fn=new I,jn=new I,fs=new I,er=new I,nr=new I,$n=new I;function so(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);let o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wh=new Gn,ps=new I,ro=new I,zi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ro)),this.expandByPoint(ps.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},En=new I,ao=new I,ir=new I,On=new I,oo=new I,sr=new I,co=new I,As=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),On.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=On.dot(this.direction),l=-On.dot(ir),c=On.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let M=1/h;u*=M,d*=M,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ao).addScaledVector(ir,d),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),sr.subVectors(n,t),co.crossVectors(oo,sr);let a=this.direction.dot(co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);let l=o*this.direction.dot(sr.crossVectors(On,sr));if(l<0)return null;let c=o*this.direction.dot(oo.cross(On));if(c<0||l+c>a)return null;let h=-o*On.dot(co);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,M=c*u;e[0]=d+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-M*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Bn.crossVectors(n,Xe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Bn.crossVectors(n,Xe)),Bn.normalize(),rr.crossVectors(Xe,Bn),s[0]=Bn.x,s[4]=rr.x,s[8]=Xe.x,s[1]=Bn.y,s[5]=rr.y,s[9]=Xe.y,s[2]=Bn.z,s[6]=rr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],A=n[3],T=n[7],S=n[11],R=n[15],C=s[0],L=s[4],F=s[8],E=s[12],v=s[1],_=s[5],z=s[9],G=s[13],q=s[2],X=s[6],W=s[10],rt=s[14],k=s[3],ut=s[7],gt=s[11],Mt=s[15];return r[0]=a*C+o*v+l*q+c*k,r[4]=a*L+o*_+l*X+c*ut,r[8]=a*F+o*z+l*W+c*gt,r[12]=a*E+o*G+l*rt+c*Mt,r[1]=h*C+u*v+d*q+p*k,r[5]=h*L+u*_+d*X+p*ut,r[9]=h*F+u*z+d*W+p*gt,r[13]=h*E+u*G+d*rt+p*Mt,r[2]=g*C+M*v+m*q+f*k,r[6]=g*L+M*_+m*X+f*ut,r[10]=g*F+M*z+m*W+f*gt,r[14]=g*E+M*G+m*rt+f*Mt,r[3]=A*C+T*v+S*q+R*k,r[7]=A*L+T*_+S*X+R*ut,r[11]=A*F+T*z+S*W+R*gt,r[15]=A*E+T*G+S*rt+R*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+M*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],A=u*m*c-M*d*c+M*l*p-o*m*p-u*l*f+o*d*f,T=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*M*c-g*u*c+g*o*p-a*M*p-h*o*f+a*u*f,R=g*u*l-h*M*l-g*o*d+a*M*d+h*o*m-a*u*m,C=e*A+n*T+s*S+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=A*L,t[1]=(M*d*r-u*m*r-M*s*p+n*m*p+u*s*f-n*d*f)*L,t[2]=(o*m*r-M*l*r+M*s*c-n*m*c-o*s*f+n*l*f)*L,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*L,t[4]=T*L,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*L,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*L,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*L,t[8]=S*L,t[9]=(g*u*r-h*M*r-g*n*p+e*M*p+h*n*f-e*u*f)*L,t[10]=(a*M*r-g*o*r+g*n*c-e*M*c-a*n*f+e*o*f)*L,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*L,t[12]=R*L,t[13]=(h*M*s-g*u*s+g*n*d-e*M*d-h*n*m+e*u*m)*L,t[14]=(g*o*s-a*M*s-g*n*l+e*M*l+a*n*m-e*o*m)*L,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,M=a*h,m=a*u,f=o*u,A=l*c,T=l*h,S=l*u,R=n.x,C=n.y,L=n.z;return s[0]=(1-(M+f))*R,s[1]=(p+S)*R,s[2]=(g-T)*R,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(d+f))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+T)*L,s[9]=(m-A)*L,s[10]=(1-(d+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_i.set(s[0],s[1],s[2]).length(),a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);let c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=on,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===bs)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=on,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===on)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===bs)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_i=new I,rn=new ue,Xh=new I(0,0,0),qh=new I(1,1,1),Bn=new I,rr=new I,Xe=new I,Nc=new ue,Fc=new He,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var ki=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jh=0,Oc=new I,Ci=new He,Tn=new ue,ar=new I,ms=new I,Yh=new I,Kh=new He,Bc=new I(1,0,0),zc=new I(0,1,0),kc=new I(0,0,1),Hc={type:"added"},Zh={type:"removed"},Ri={type:"childadded",child:null},lo={type:"childremoved",child:null},Ne=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new cn,n=new He,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Vt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ms,ar,this.up):Tn.lookAt(ar,ms,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new I(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new I,An=new I,ho=new I,wn=new I,Ii=new I,Pi=new I,Vc=new I,uo=new I,fo=new I,po=new I,mo=new me,go=new me,xo=new me,Hn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),An.subVectors(n,e),ho.subVectors(t,e);let a=an.dot(an),o=an.dot(An),l=an.dot(ho),c=An.dot(An),h=An.dot(ho),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return mo.setScalar(0),go.setScalar(0),xo.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),An.subVectors(t,e),an.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),an.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Pi.subVectors(r,n),uo.subVectors(t,n);let l=Ii.dot(uo),c=Pi.dot(uo);if(l<=0&&c<=0)return e.copy(n);fo.subVectors(t,s);let h=Ii.dot(fo),u=Pi.dot(fo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ii,a);po.subVectors(t,r);let p=Ii.dot(po),g=Pi.dot(po);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Vc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Vc,o);let f=1/(m+M+d);return a=M*f,o=d*f,e.copy(n).addScaledVector(Ii,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},or={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=kh(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return te.workingToColorSpace(Re.copy(this),t),Math.round(Kt(Re.r*255,0,255))*65536+Math.round(Kt(Re.g*255,0,255))*256+Math.round(Kt(Re.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Re.copy(this),e);let n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ae){te.workingToColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,s=Re.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(or);let n=$a(zn.h,or.h,e),s=$a(zn.s,or.s,e),r=$a(zn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new Gt;Gt.NAMES=Wl;var Qh=0,Wn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=ii,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=Er,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==br&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ai=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new I,cr=new pt,jh=0,we=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Io,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}};var ws=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _s=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ee=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},$h=0,tn=new ue,yo=new Ne,Li=new I,qe=new Gn,gs=new Gn,be=new I,Ye=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ic(t)?_s:ws)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(qe.min,gs.min),qe.expandByPoint(be),be.addVectors(qe.max,gs.max),qe.expandByPoint(be)):(qe.expandByPoint(gs.min),qe.expandByPoint(gs.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),be.add(Li)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new I,l[F]=new I;let c=new I,h=new I,u=new I,d=new pt,p=new pt,g=new pt,M=new I,m=new I;function f(F,E,v){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let _=1/(p.x*g.y-g.x*p.y);isFinite(_)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(_),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(_),o[F].add(M),o[E].add(M),o[v].add(M),l[F].add(m),l[E].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,E=A.length;F<E;++F){let v=A[F],_=v.start,z=v.count;for(let G=_,q=_+z;G<q;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let T=new I,S=new I,R=new I,C=new I;function L(F){R.fromBufferAttribute(s,F),C.copy(R);let E=o[F];T.copy(E),T.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(C,E);let _=S.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,_)}for(let F=0,E=A.length;F<E;++F){let v=A[F],_=v.start,z=v.count;for(let G=_,q=_+z;G<q;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new we(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gc=new ue,ti=new As,lr=new zi,Wc=new I,hr=new I,ur=new I,dr=new I,Mo=new I,fr=new I,Xc=new I,pr=new I,ge=class extends Ne{constructor(t=new Ye,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mo.fromBufferAttribute(u,t),a?fr.addScaledVector(Mo,h):fr.addScaledVector(Mo.sub(e),h))}e.add(fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(lr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(lr,Wc)===null||ti.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Gc.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=T;S<R;S+=3){let C=o.getX(S),L=o.getX(S+1),F=o.getX(S+2);s=mr(this,f,t,n,c,h,u,C,L,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let A=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);s=mr(this,a,t,n,c,h,u,A,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=T;S<R;S+=3){let C=S,L=S+1,F=S+2;s=mr(this,f,t,n,c,h,u,C,L,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let A=m,T=m+1,S=m+2;s=mr(this,a,t,n,c,h,u,A,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tu(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Cn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,dr);let h=tu(i,t,e,n,hr,ur,dr,Xc);if(h){let u=new I;Hn.getBarycoord(Xc,hr,ur,dr,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,o,l,c,u,new pt)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,o,l,c,u,new pt)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Hn.getNormal(hr,ur,dr,d.normal),h.face=d,h.barycoord=u}return h}var Hi=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(M,m,f,A,T,S,R,C,L,F,E){let v=S/L,_=R/F,z=S/2,G=R/2,q=C/2,X=L+1,W=F+1,rt=0,k=0,ut=new I;for(let gt=0;gt<W;gt++){let Mt=gt*_-G;for(let Bt=0;Bt<X;Bt++){let Jt=Bt*v-z;ut[M]=Jt*A,ut[m]=Mt*T,ut[f]=q,c.push(ut.x,ut.y,ut.z),ut[M]=0,ut[m]=0,ut[f]=C>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Bt/L),u.push(1-gt/F),rt+=1}}for(let gt=0;gt<F;gt++)for(let Mt=0;Mt<L;Mt++){let Bt=d+Mt+X*gt,Jt=d+Mt+X*(gt+1),jt=d+(Mt+1)+X*(gt+1),Yt=d+(Mt+1)+X*gt;l.push(Bt,Jt,Yt),l.push(Jt,jt,Yt),k+=6}o.addGroup(p,k,E),p+=k,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=pi(i[e]);for(let s in n)t[s]=n[s]}return t}function eu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Xl={clone:pi,merge:Pe},nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cs=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new I,qc=new pt,Jc=new pt,Ie=class extends Cs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,qc,Jc),e.subVectors(Jc,qc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ja*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Di=-90,Ui=1,Ir=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Di,Ui,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Di,Ui,t,e);r.layers=this.layers,this.add(r);let a=new Ie(Di,Ui,t,e);a.layers=this.layers,this.add(a);let o=new Ie(Di,Ui,t,e);o.layers=this.layers,this.add(o);let l=new Ie(Di,Ui,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Di,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rs=class extends Ue{constructor(t=[],e=di,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pr=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:In});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===yn&&(e.minFilter=Je),new Ir(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},pn=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},su={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(su)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Gi=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Is=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var So=new I,ru=new I,au=new Vt,dn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=So.subVectors(n,e).cross(ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||au.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new zi,ou=new pt(.5,.5),gr=new I,Wi=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],A=r[12],T=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-a,p-h,f-g,R-A).normalize(),s[1].setComponents(c+a,p+h,f+g,R+A).normalize(),s[2].setComponents(c+o,p+u,f+M,R+T).normalize(),s[3].setComponents(c-o,p-u,f-M,R-T).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,p-d,f-m,R-S).normalize();else if(s[4].setComponents(c-l,p-d,f-m,R-S).normalize(),e===on)s[5].setComponents(c+l,p+d,f+m,R+S).normalize();else if(e===bs)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){ei.center.set(0,0,0);let e=ou.distanceTo(t.center);return ei.radius=.7071067811865476+e,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oi=class extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ps=class extends Ue{constructor(t,e,n=Kn,s,r,a,o=ke,l=ke,c,h=Fi,u=1){if(h!==Fi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ls=class extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ue;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Kt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xi=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lr=class extends Xi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var xr=new I,bo=new rc,Eo=new rc,To=new rc,qi=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xr.subVectors(s[0],s[1]).add(s[0]),c=xr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),M=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),bo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,m),Eo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,m),To.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Eo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),To.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(bo.calc(l),Eo.calc(l),To.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function cu(i,t){let e=1-i;return e*e*t}function lu(i,t){return 2*(1-i)*i*t}function hu(i,t){return i*i*t}function vs(i,t,e,n){return cu(i,t)+lu(i,e)+hu(i,n)}function uu(i,t){let e=1-i;return e*e*e*t}function du(i,t){let e=1-i;return 3*e*e*i*t}function fu(i,t){return 3*(1-i)*i*i*t}function pu(i,t){return i*i*i*t}function ys(i,t,e,n,s){return uu(i,t)+du(i,e)+fu(i,n)+pu(i,s)}var Ds=class extends Ke{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(t,s.x,r.x,a.x,o.x),ys(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dr=class extends Ke{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(t,s.x,r.x,a.x,o.x),ys(t,s.y,r.y,a.y,o.y),ys(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Us=class extends Ke{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends Ke{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ns=class extends Ke{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends Ke{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y),vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fs=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Yc(o,l.x,c.x,h.x,u.x),Yc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Po=Object.freeze({__proto__:null,ArcCurve:Lr,CatmullRomCurve3:qi,CubicBezierCurve:Ds,CubicBezierCurve3:Dr,EllipseCurve:Xi,LineCurve:Us,LineCurve3:Ur,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Nr,SplineCurve:Fs}),Fr=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Po[s.type]().fromJSON(s))}return this}},ci=class extends Fr{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Us(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ns(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ds(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Xi(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xn=class extends ci{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ci().fromJSON(s))}return this}};function mu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ql(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Mu(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Os(r,a,e,o,l,c,0),a}function ql(i,t,e,n,s){let r;if(s===Pu(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Kc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Kc(a/n|0,i[a],i[a+1],r);return r&&Ji(r,r.next)&&(zs(r),r=r.next),r}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ji(e,e.next)||pe(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Os(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Au(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?xu(i,n,s,r):gu(i)){t.push(l.i,i.i,c.i),zs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vu(li(i),t),Os(i,t,e,n,s,r,2)):a===2&&yu(i,t,e,n,s,r):Os(li(i),t,e,n,s,r,1);break}}}function gu(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&xs(s,o,r,l,a,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xu(i,t,e,n){let s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),m=Math.max(h,u,d),f=Lo(p,g,t,e,n),A=Lo(M,m,t,e,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=f&&S&&S.z<=A;){if(T.x>=p&&T.x<=M&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&xs(o,h,l,u,c,d,T.x,T.y)&&pe(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&xs(o,h,l,u,c,d,S.x,S.y)&&pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=M&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&xs(o,h,l,u,c,d,T.x,T.y)&&pe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&xs(o,h,l,u,c,d,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function vu(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ji(n,s)&&Yl(n,e,e.next,s)&&Bs(n,s)&&Bs(s,n)&&(t.push(n.i,e.i,s.i),zs(e),zs(e.next),e=i=s),e=e.next}while(e!==i);return li(e)}function yu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cu(a,o)){let l=Kl(a,o);a=li(a,a.next),l=li(l,l.next),Os(a,t,e,n,s,r,0),Os(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mu(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ql(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_u(c))}s.sort(Su);for(let r=0;r<s.length;r++)e=bu(s[r],e);return e}function Su(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bu(i,t){let e=Eu(i,t);if(!e)return t;let n=Kl(e,i);return li(n,n.next),li(e,e.next)}function Eu(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ji(i,e))return e;do{if(Ji(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Bs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Tu(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Tu(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Au(i,t,e,n){let s=i;do s.z===0&&(s.z=Lo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wu(s)}function wu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Lo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _u(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jl(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function xs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Jl(i,t,e,n,s,r,a,o)}function Cu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ru(i,t)&&(Bs(i,t)&&Bs(t,i)&&Iu(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Ji(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ji(i,t){return i.x===t.x&&i.y===t.y}function Yl(i,t,e,n){let s=yr(pe(i,t,e)),r=yr(pe(i,t,n)),a=yr(pe(e,n,i)),o=yr(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&vr(i,e,t)||r===0&&vr(i,n,t)||a===0&&vr(e,i,n)||o===0&&vr(e,t,n))}function vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yr(i){return i>0?1:i<0?-1:0}function Ru(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bs(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Iu(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kl(i,t){let e=Do(i.i,i.x,i.y),n=Do(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kc(i,t,e,n){let s=Do(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pu(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Uo=class{static triangulate(t,e,n=2){return mu(t,e,n)}},mn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zc(t),Qc(n,t);let a=t.length;e.forEach(Zc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qc(n,e[l]);let o=Uo.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Zc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yi=class i extends Ye{constructor(t=new Xn([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Lu,T,S=!1,R,C,L,F;f&&(T=f.getSpacedPoints(h),S=!0,d=!1,R=f.computeFrenetFrames(h,!1),C=new I,L=new I,F=new I),d||(m=0,p=0,g=0,M=0);let E=o.extractPoints(c),v=E.shape,_=E.holes;if(!mn.isClockWise(v)){v=v.reverse();for(let Z=0,K=_.length;Z<K;Z++){let Y=_[Z];mn.isClockWise(Y)&&(_[Z]=Y.reverse())}}function G(Z){let Y=10000000000000001e-36,Q=Z[0];for(let lt=1;lt<=Z.length;lt++){let at=lt%Z.length,dt=Z[at],Ot=dt.x-Q.x,Ft=dt.y-Q.y,b=Ot*Ot+Ft*Ft,x=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(Q.x),Math.abs(Q.y)),N=Y*x*x;if(b<=N){Z.splice(at,1),lt--;continue}Q=dt}}G(v),_.forEach(G);let q=_.length,X=v;for(let Z=0;Z<q;Z++){let K=_[Z];v=v.concat(K)}function W(Z,K,Y){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(K,Y)}let rt=v.length;function k(Z,K,Y){let Q,lt,at,dt=Z.x-K.x,Ot=Z.y-K.y,Ft=Y.x-Z.x,b=Y.y-Z.y,x=dt*dt+Ot*Ot,N=dt*b-Ot*Ft;if(Math.abs(N)>Number.EPSILON){let H=Math.sqrt(x),et=Math.sqrt(Ft*Ft+b*b),V=K.x-Ot/H,Ct=K.y+dt/H,ht=Y.x-b/et,_t=Y.y+Ft/et,bt=((ht-V)*b-(_t-Ct)*Ft)/(dt*b-Ot*Ft);Q=V+dt*bt-Z.x,lt=Ct+Ot*bt-Z.y;let ot=Q*Q+lt*lt;if(ot<=2)return new pt(Q,lt);at=Math.sqrt(ot/2)}else{let H=!1;dt>Number.EPSILON?Ft>Number.EPSILON&&(H=!0):dt<-Number.EPSILON?Ft<-Number.EPSILON&&(H=!0):Math.sign(Ot)===Math.sign(b)&&(H=!0),H?(Q=-Ot,lt=dt,at=Math.sqrt(x)):(Q=dt,lt=Ot,at=Math.sqrt(x/2))}return new pt(Q/at,lt/at)}let ut=[];for(let Z=0,K=X.length,Y=K-1,Q=Z+1;Z<K;Z++,Y++,Q++)Y===K&&(Y=0),Q===K&&(Q=0),ut[Z]=k(X[Z],X[Y],X[Q]);let gt=[],Mt,Bt=ut.concat();for(let Z=0,K=q;Z<K;Z++){let Y=_[Z];Mt=[];for(let Q=0,lt=Y.length,at=lt-1,dt=Q+1;Q<lt;Q++,at++,dt++)at===lt&&(at=0),dt===lt&&(dt=0),Mt[Q]=k(Y[Q],Y[at],Y[dt]);gt.push(Mt),Bt=Bt.concat(Mt)}let Jt;if(m===0)Jt=mn.triangulateShape(X,_);else{let Z=[],K=[];for(let Y=0;Y<m;Y++){let Q=Y/m,lt=p*Math.cos(Q*Math.PI/2),at=g*Math.sin(Q*Math.PI/2)+M;for(let dt=0,Ot=X.length;dt<Ot;dt++){let Ft=W(X[dt],ut[dt],at);Rt(Ft.x,Ft.y,-lt),Q===0&&Z.push(Ft)}for(let dt=0,Ot=q;dt<Ot;dt++){let Ft=_[dt];Mt=gt[dt];let b=[];for(let x=0,N=Ft.length;x<N;x++){let H=W(Ft[x],Mt[x],at);Rt(H.x,H.y,-lt),Q===0&&b.push(H)}Q===0&&K.push(b)}}Jt=mn.triangulateShape(Z,K)}let jt=Jt.length,Yt=g+M;for(let Z=0;Z<rt;Z++){let K=d?W(v[Z],Bt[Z],Yt):v[Z];S?(L.copy(R.normals[0]).multiplyScalar(K.x),C.copy(R.binormals[0]).multiplyScalar(K.y),F.copy(T[0]).add(L).add(C),Rt(F.x,F.y,F.z)):Rt(K.x,K.y,0)}for(let Z=1;Z<=h;Z++)for(let K=0;K<rt;K++){let Y=d?W(v[K],Bt[K],Yt):v[K];S?(L.copy(R.normals[Z]).multiplyScalar(Y.x),C.copy(R.binormals[Z]).multiplyScalar(Y.y),F.copy(T[Z]).add(L).add(C),Rt(F.x,F.y,F.z)):Rt(Y.x,Y.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){let K=Z/m,Y=p*Math.cos(K*Math.PI/2),Q=g*Math.sin(K*Math.PI/2)+M;for(let lt=0,at=X.length;lt<at;lt++){let dt=W(X[lt],ut[lt],Q);Rt(dt.x,dt.y,u+Y)}for(let lt=0,at=_.length;lt<at;lt++){let dt=_[lt];Mt=gt[lt];for(let Ot=0,Ft=dt.length;Ot<Ft;Ot++){let b=W(dt[Ot],Mt[Ot],Q);S?Rt(b.x,b.y+T[h-1].y,T[h-1].x+Y):Rt(b.x,b.y,u+Y)}}}J(),nt();function J(){let Z=s.length/3;if(d){let K=0,Y=rt*K;for(let Q=0;Q<jt;Q++){let lt=Jt[Q];Tt(lt[2]+Y,lt[1]+Y,lt[0]+Y)}K=h+m*2,Y=rt*K;for(let Q=0;Q<jt;Q++){let lt=Jt[Q];Tt(lt[0]+Y,lt[1]+Y,lt[2]+Y)}}else{for(let K=0;K<jt;K++){let Y=Jt[K];Tt(Y[2],Y[1],Y[0])}for(let K=0;K<jt;K++){let Y=Jt[K];Tt(Y[0]+rt*h,Y[1]+rt*h,Y[2]+rt*h)}}n.addGroup(Z,s.length/3-Z,0)}function nt(){let Z=s.length/3,K=0;tt(X,K),K+=X.length;for(let Y=0,Q=_.length;Y<Q;Y++){let lt=_[Y];tt(lt,K),K+=lt.length}n.addGroup(Z,s.length/3-Z,1)}function tt(Z,K){let Y=Z.length;for(;--Y>=0;){let Q=Y,lt=Y-1;lt<0&&(lt=Z.length-1);for(let at=0,dt=h+m*2;at<dt;at++){let Ot=rt*at,Ft=rt*(at+1),b=K+Q+Ot,x=K+lt+Ot,N=K+lt+Ft,H=K+Q+Ft;Wt(b,x,N,H)}}}function Rt(Z,K,Y){l.push(Z),l.push(K),l.push(Y)}function Tt(Z,K,Y){ie(Z),ie(K),ie(Y);let Q=s.length/3,lt=A.generateTopUV(n,s,Q-3,Q-2,Q-1);w(lt[0]),w(lt[1]),w(lt[2])}function Wt(Z,K,Y,Q){ie(Z),ie(K),ie(Q),ie(K),ie(Y),ie(Q);let lt=s.length/3,at=A.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);w(at[0]),w(at[1]),w(at[3]),w(at[1]),w(at[2]),w(at[3])}function ie(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function w(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Du(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Po[s.type]().fromJSON(s)),new i(n,t.options)}},Lu={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,a),new pt(o,l),new pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pt(a,1-l),new pt(c,1-u),new pt(d,1-g),new pt(M,1-f)]:[new pt(o,1-l),new pt(h,1-u),new pt(p,1-g),new pt(m,1-f)]}};function Du(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hi=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let A=f*d-a;for(let T=0;T<c;T++){let S=T*u-r;g.push(S,-A,0),M.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){let T=A+c*f,S=A+c*(f+1),R=A+1+c*(f+1),C=A+1+c*f;p.push(T,S,C),p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(M,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ks=class i extends Ye{constructor(t=new Xn([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;mn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let A=g[m];mn.isClockWise(A)===!0&&(g[m]=A.reverse())}let M=mn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let A=g[m];p=p.concat(A)}for(let m=0,f=p.length;m<f;m++){let A=p[m];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let m=0,f=M.length;m<f;m++){let A=M[m],T=A[0]+u,S=A[1]+u,R=A[2]+u;n.push(T,S,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Uu(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Uu(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ki=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let M=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,A=(s+1)*p+g;a.push(M,m,A),a.push(m,f,A)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zi=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qn=class extends Zi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Or=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Br=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zr=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:r=t,o=2*e-n;break;case Co:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _o:a=t,l=2*n-e;break;case Co:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-d*m+2*d*M-d*g,A=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,T=(-1-p)*m+(1.5+p)*M+.5*g,S=p*m-p*M;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+A*a[c+R]+T*a[l+R]+S*a[u+R];return r}},kr=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Hr=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case Ar:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Nu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let M=e[u+g];if(M!==e[d+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Ar;var Jn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ms;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Vr.prototype.ValueTypeName="color";var Gr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Gr.prototype.ValueTypeName="number";var Wr=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)He.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hs=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wr(this.times,this.values,this.getValueSize(),t)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Ms;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Xr.prototype.ValueTypeName="vector";var qr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zl=new qr,Jr=class{constructor(t){this.manager=t!==void 0?t:Zl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ao=new ue,jc=new I,$c=new I,No=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vs=class extends Cs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fo=class extends No{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Fo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kr=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ac="\\[\\]\\.:\\/",Fu=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",Ou="[^"+ac.replace("\\.","")+"]",Bu=/((?:WC+[\/:])*)/.source.replace("WC",oc),zu=/(WCOD+)?/.source.replace("WCOD",Ou),ku=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),Hu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),Vu=new RegExp("^"+Bu+zu+ku+Hu+"$"),Gu=["material","materials","bones","map"],Oo=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fu,"")}static parseTrackName(t){let e=Vu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Oo;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kg=new Float32Array(1);var tl=new ue,Gs=class{constructor(t,e,n=0,s=1/0){this.ray=new As(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tl),this}intersectObject(t,e=!0,n=[]){return Bo(t,this,n,e),n.sort(el),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bo(t[s],this,n,e);return n.sort(el),n}};function el(i,t){return i.distance-t.distance}function Bo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Bo(r[a],t,e,!0)}}function cc(i,t,e,n){let s=Wu(n);switch(e){case Zo:return i*t;case jo:return i*t/s.components*s.byteLength;case ha:return i*t/s.components*s.byteLength;case $o:return i*t*2/s.components*s.byteLength;case ua:return i*t*2/s.components*s.byteLength;case Qo:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case da:return i*t*4/s.components*s.byteLength;case qs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wu(i){switch(i){case hn:case qo:return{byteLength:1,components:1};case ji:case Jo:case $i:return{byteLength:2,components:1};case ca:case la:return{byteLength:2,components:4};case Kn:case oa:case Mn:return{byteLength:4,components:1};case Yo:case Ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Mh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],M=u[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let M=u[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ad=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Ju,alphahash_pars_fragment:Yu,alphamap_fragment:Ku,alphamap_pars_fragment:Zu,alphatest_fragment:Qu,alphatest_pars_fragment:ju,aomap_fragment:$u,aomap_pars_fragment:td,batching_pars_vertex:ed,batching_vertex:nd,begin_vertex:id,beginnormal_vertex:sd,bsdfs:rd,iridescence_fragment:ad,bumpmap_pars_fragment:od,clipping_planes_fragment:cd,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:hd,clipping_planes_vertex:ud,color_fragment:dd,color_pars_fragment:fd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:vd,displacementmap_pars_vertex:yd,displacementmap_vertex:Md,emissivemap_fragment:Sd,emissivemap_pars_fragment:bd,colorspace_fragment:Ed,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:wd,envmap_pars_fragment:_d,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Id,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Ud,lightmap_pars_fragment:Nd,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Od,lights_pars_begin:Bd,lights_toon_fragment:kd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Vd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Jd,lights_fragment_end:Yd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:jd,map_fragment:$d,map_pars_fragment:tf,map_particle_fragment:ef,map_particle_pars_fragment:nf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:rf,morphinstance_vertex:af,morphcolor_vertex:of,morphnormal_vertex:cf,morphtarget_pars_vertex:lf,morphtarget_vertex:hf,normal_fragment_begin:uf,normal_fragment_maps:df,normal_pars_fragment:ff,normal_pars_vertex:pf,normal_vertex:mf,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:bf,premultiplied_alpha_fragment:Ef,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:wf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:If,shadowmap_vertex:Pf,shadowmask_pars_fragment:Lf,skinbase_vertex:Df,skinning_pars_vertex:Uf,skinning_vertex:Nf,skinnormal_vertex:Ff,specularmap_fragment:Of,specularmap_pars_fragment:Bf,tonemapping_fragment:zf,tonemapping_pars_fragment:kf,transmission_fragment:Hf,transmission_pars_fragment:Vf,uv_pars_fragment:Gf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Jf,background_frag:Yf,backgroundCube_vert:Kf,backgroundCube_frag:Zf,cube_vert:Qf,cube_frag:jf,depth_vert:$f,depth_frag:tp,distanceRGBA_vert:ep,distanceRGBA_frag:np,equirect_vert:ip,equirect_frag:sp,linedashed_vert:rp,linedashed_frag:ap,meshbasic_vert:op,meshbasic_frag:cp,meshlambert_vert:lp,meshlambert_frag:hp,meshmatcap_vert:up,meshmatcap_frag:dp,meshnormal_vert:fp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:xp,meshphysical_frag:vp,meshtoon_vert:yp,meshtoon_frag:Mp,points_vert:Sp,points_frag:bp,shadow_vert:Ep,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:wp},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Sn={basic:{uniforms:Pe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Pe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Pe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Pe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Pe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Pe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Pe([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Pe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Pe([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Pe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Pe([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Pe([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Pe([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Sn.physical={uniforms:Pe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Ha={r:0,b:0,g:0},mi=new cn,_p=new ue;function Cp(i,t,e,n,s,r,a){let o=new Gt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function M(T){let S=!1,R=g(T);R===null?f(o,l):R&&R.isColor&&(f(R,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===Ws)?(h===void 0&&(h=new ge(new Hi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:pi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(S.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(mi)),h.material.toneMapped=te.getTransfer(R.colorSpace)!==re,(u!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ge(new hi(2,2),new ln({name:"BackgroundMaterial",uniforms:pi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=te.getTransfer(R.colorSpace)!==re,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(Ha,sc(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,S,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:M,addToRenderList:m,dispose:A}}function Rp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,_,z,G,q){let X=!1,W=u(G,z,_);r!==W&&(r=W,c(r.object)),X=p(v,G,z,q),X&&g(v,G,z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(v,_,z,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,_,z){let G=z.wireframe===!0,q=n[v.id];q===void 0&&(q={},n[v.id]=q);let X=q[_.id];X===void 0&&(X={},q[_.id]=X);let W=X[G];return W===void 0&&(W=d(l()),X[G]=W),W}function d(v){let _=[],z=[],G=[];for(let q=0;q<e;q++)_[q]=0,z[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:z,attributeDivisors:G,object:v,attributes:{},index:null}}function p(v,_,z,G){let q=r.attributes,X=_.attributes,W=0,rt=z.getAttributes();for(let k in rt)if(rt[k].location>=0){let gt=q[k],Mt=X[k];if(Mt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function g(v,_,z,G){let q={},X=_.attributes,W=0,rt=z.getAttributes();for(let k in rt)if(rt[k].location>=0){let gt=X[k];gt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));let Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),q[k]=Mt,W++}r.attributes=q,r.attributesNum=W,r.index=G}function M(){let v=r.newAttributes;for(let _=0,z=v.length;_<z;_++)v[_]=0}function m(v){f(v,0)}function f(v,_){let z=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;z[v]=1,G[v]===0&&(i.enableVertexAttribArray(v),G[v]=1),q[v]!==_&&(i.vertexAttribDivisor(v,_),q[v]=_)}function A(){let v=r.newAttributes,_=r.enabledAttributes;for(let z=0,G=_.length;z<G;z++)_[z]!==v[z]&&(i.disableVertexAttribArray(z),_[z]=0)}function T(v,_,z,G,q,X,W){W===!0?i.vertexAttribIPointer(v,_,z,q,X):i.vertexAttribPointer(v,_,z,G,q,X)}function S(v,_,z,G){M();let q=G.attributes,X=z.getAttributes(),W=_.defaultAttributeValues;for(let rt in X){let k=X[rt];if(k.location>=0){let ut=q[rt];if(ut===void 0&&(rt==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),rt==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){let gt=ut.normalized,Mt=ut.itemSize,Bt=t.get(ut);if(Bt===void 0)continue;let Jt=Bt.buffer,jt=Bt.type,Yt=Bt.bytesPerElement,J=jt===i.INT||jt===i.UNSIGNED_INT||ut.gpuType===oa;if(ut.isInterleavedBufferAttribute){let nt=ut.data,tt=nt.stride,Rt=ut.offset;if(nt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<k.locationSize;Tt++)f(k.location+Tt,nt.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)m(k.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Tt=0;Tt<k.locationSize;Tt++)T(k.location+Tt,Mt/k.locationSize,jt,gt,tt*Yt,(Rt+Mt/k.locationSize*Tt)*Yt,J)}else{if(ut.isInstancedBufferAttribute){for(let nt=0;nt<k.locationSize;nt++)f(k.location+nt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let nt=0;nt<k.locationSize;nt++)m(k.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let nt=0;nt<k.locationSize;nt++)T(k.location+nt,Mt/k.locationSize,jt,gt,Mt*Yt,Mt/k.locationSize*nt*Yt,J)}}else if(W!==void 0){let gt=W[rt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(k.location,gt);break;case 3:i.vertexAttrib3fv(k.location,gt);break;case 4:i.vertexAttrib4fv(k.location,gt);break;default:i.vertexAttrib1fv(k.location,gt)}}}}A()}function R(){F();for(let v in n){let _=n[v];for(let z in _){let G=_[z];for(let q in G)h(G[q].object),delete G[q];delete _[z]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;let _=n[v.id];for(let z in _){let G=_[z];for(let q in G)h(G[q].object),delete G[q];delete _[z]}delete n[v.id]}function L(v){for(let _ in n){let z=n[_];if(z[v.id]===void 0)continue;let G=z[v.id];for(let q in G)h(G[q].object),delete G[q];delete z[v.id]}}function F(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function Ip(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==en&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let F=L===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==hn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Mn&&!F)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:C}}function Lp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new dn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,T=A*4,S=f.clippingState||null;l.value=S,S=h(g,d,T,p);for(let R=0;R!==T;++R)S[R]=e[R];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==M;++T,S+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Dp(i){let t=new WeakMap;function e(a,o){return o===sa?a.mapping=di:o===ra&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===sa||o===ra)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Pr(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ss=4,Ql=[.125,.215,.35,.446,.526,.582],vi=20,lc=new Vs,jl=new Gt,hc=null,uc=0,dc=0,fc=!1,xi=(1+Math.sqrt(5))/2,is=1/xi,$l=[new I(-xi,is,0),new I(xi,is,0),new I(-is,0,xi),new I(is,0,xi),new I(0,xi,-is),new I(0,xi,is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Up=new I,as=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Up}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,t.scissorTest=!1,Va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:$i,format:en,colorSpace:ri,depthBuffer:!1},s=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Fp(r,t,e)}return s}_compileMaterial(t){let e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(jl),u.toneMapping=Pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let M=new ai({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new ge(new Hi,M),f=!1,A=t.background;A?A.isColor&&(M.color.copy(A),t.background=null,f=!0):(M.color.copy(jl),f=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let R=this._cubeSize;Va(s,S*R,T>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===di||t.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$l[(s-r-1)%$l.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let f=[],A=0;for(let L=0;L<vi;++L){let F=L/M,E=Math.exp(-F*F/2);f.push(E),L===0?A+=E:L<m&&(A+=2*E)}for(let L=0;L<f.length;L++)f[L]=f[L]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;let S=this._sizeLods[s],R=3*S*(s>T-ss?s-T+ss:0),C=4*(this._cubeSize-S);Va(e,R,C,3*S,2*S),l.setRenderTarget(e),l.render(u,lc)}};function Np(i){let t=[],e=[],n=[],s=i,r=i-ss+1+Ql.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ss?l=Ql[a-i+ss-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,M=3,m=2,f=1,A=new Float32Array(M*g*p),T=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let C=0;C<p;C++){let L=C%3*2/3-1,F=C>2?0:-1,E=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];A.set(E,M*g*C),T.set(d,m*g*C);let v=[C,C,C,C,C,C];S.set(v,f*g*C)}let R=new Ye;R.setAttribute("position",new we(A,M)),R.setAttribute("uv",new we(T,m)),R.setAttribute("faceIndex",new we(S,f)),t.push(R),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fp(i,t,e){let n=new Float32Array(vi),s=new I(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function eh(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function nh(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Op(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===sa||l===ra,h=l===di||l===fi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new as(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new as(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,M=0;if(p!==null){let A=p.array;M=p.version;for(let T=0,S=A.length;T<S;T+=3){let R=A[T+0],C=A[T+1],L=A[T+2];d.push(R,C,C,L,L,R)}}else if(g!==void 0){let A=g.array;M=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){let R=T+0,C=T+1,L=T+2;d.push(R,C,C,L,L,R)}}else return;let m=new(ic(d)?_s:ws)(d,1);m.version=M;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,M){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,M,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*M[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vp(i,t,e){let n=new WeakMap,s=new me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let C=new Float32Array(S*R*4*u),L=new Ts(C,S,R,u);L.type=Mn,L.needsUpdate=!0;let F=T*4;for(let v=0;v<u;v++){let _=m[v],z=f[v],G=A[v],q=S*R*4*v;for(let X=0;X<_.count;X++){let W=X*F;p===!0&&(s.fromBufferAttribute(_,X),C[q+W+0]=s.x,C[q+W+1]=s.y,C[q+W+2]=s.z,C[q+W+3]=0),g===!0&&(s.fromBufferAttribute(z,X),C[q+W+4]=s.x,C[q+W+5]=s.y,C[q+W+6]=s.z,C[q+W+7]=0),M===!0&&(s.fromBufferAttribute(G,X),C[q+W+8]=s.x,C[q+W+9]=s.y,C[q+W+10]=s.z,C[q+W+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new pt(S,R)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Sh=new Ue,ih=new Ps(1,1),bh=new Ts,Eh=new Rr,Th=new Rs,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),ch=new Float32Array(4);function os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sh[s];if(r===void 0&&(r=new Float32Array(s),sh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xa(i,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),Me(e,n)}}function Kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Me(e,n)}}function Zp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;ah.set(n),i.uniformMatrix4fv(this.addr,!1,ah),Me(e,n)}}function Qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=ec,r=ih):r=Sh,e.setTexture2D(t||r,s)}function am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Th,s)}function cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bh,s)}function lm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Jp;case 35674:return Yp;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Qp;case 35667:case 35671:return jp;case 35668:case 35672:return $p;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return cm}}function hm(i,t){i.uniform1fv(this.addr,t)}function um(i,t){let e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function dm(i,t){let e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function fm(i,t){let e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function pm(i,t){let e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mm(i,t){let e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gm(i,t){let e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xm(i,t){i.uniform1iv(this.addr,t)}function vm(i,t){i.uniform2iv(this.addr,t)}function ym(i,t){i.uniform3iv(this.addr,t)}function Mm(i,t){i.uniform4iv(this.addr,t)}function Sm(i,t){i.uniform1uiv(this.addr,t)}function bm(i,t){i.uniform2uiv(this.addr,t)}function Em(i,t){i.uniform3uiv(this.addr,t)}function Tm(i,t){i.uniform4uiv(this.addr,t)}function Am(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Sh,r[a])}function wm(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eh,r[a])}function _m(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Th,r[a])}function Cm(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bh,r[a])}function Rm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return xm;case 35667:case 35671:return vm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return bm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return Cm}}var mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lm(e.type)}},gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rm(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function lh(i,t){i.seq.push(t),i.map[t.id]=t}function Im(i,t,e){let n=i.name,s=n.length;for(pc.lastIndex=0;;){let r=pc.exec(n),a=pc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lh(e,c===void 0?new mc(o,i,t):new gc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new xc(o),lh(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Im(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Pm=37297,Lm=0;function Dm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var uh=new Vt;function Um(i){te._getMatrix(uh,te.workingColorSpace,i);let t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ss:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dm(i.getShaderSource(t),o)}else return r}function Nm(i,t){let e=Um(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fm(i,t){let e;switch(t){case Al:e="Linear";break;case wl:e="Reinhard";break;case _l:e="Cineon";break;case Cl:e="ACESFilmic";break;case Il:e="AgX";break;case ia:e="Neutral";break;case Rl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ga=new I;function Om(){te.getLuminanceCoefficients(Ga);let i=Ga.x.toFixed(4),t=Ga.y.toFixed(4),e=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function zm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function km(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zs(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(Hm,Gm)}var Vm=new Map;function Gm(i,t){let e=qt[t];if(e===void 0){let n=Vm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(Wm,Xm)}function Xm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ym(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fi&&(t="ENVMAP_MODE_REFRACTION"),t}function Km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wo:t="ENVMAP_BLENDING_MULTIPLY";break;case El:t="ENVMAP_BLENDING_MIX";break;case Tl:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=qm(e),c=Jm(e),h=Ym(e),u=Km(e),d=Zm(e),p=Bm(e),g=zm(r),M=s.createProgram(),m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Nm("linearToOutputTexel",e.outputColorSpace),Om(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=vc(a),a=fh(a,e),a=ph(a,e),o=vc(o),o=fh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=A+m+a,S=A+f+o,R=hh(s,s.VERTEX_SHADER,T),C=hh(s,s.FRAGMENT_SHADER,S);s.attachShader(M,R),s.attachShader(M,C),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(_){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(C)||"",X=z.trim(),W=G.trim(),rt=q.trim(),k=!0,ut=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,R,C);else{let gt=dh(s,R,"vertex"),Mt=dh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+X+`
`+gt+`
`+Mt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||rt==="")&&(ut=!1);ut&&(_.diagnostics={runnable:k,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:rt,prefix:f}})}s.deleteShader(R),s.deleteShader(C),F=new rs(s,M),E=km(s,M)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,Pm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=C,this}var jm=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mc(t),e.set(t,n)),n}},Mc=class{constructor(t){this.id=jm++,this.code=t,this.usedTimes=0}};function $m(i,t,e,n,s,r,a){let o=new ki,l=new yc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,_,z,G){let q=z.fog,X=G.geometry,W=E.isMeshStandardMaterial?z.environment:null,rt=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),k=rt&&rt.mapping===Ws?rt.image.height:null,ut=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=gt!==void 0?gt.length:0,Bt=0;X.morphAttributes.position!==void 0&&(Bt=1),X.morphAttributes.normal!==void 0&&(Bt=2),X.morphAttributes.color!==void 0&&(Bt=3);let Jt,jt,Yt,J;if(ut){let $t=Sn[ut];Jt=$t.vertexShader,jt=$t.fragmentShader}else Jt=E.vertexShader,jt=E.fragmentShader,l.update(E),Yt=l.getVertexShaderID(E),J=l.getFragmentShaderID(E);let nt=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),Rt=G.isInstancedMesh===!0,Tt=G.isBatchedMesh===!0,Wt=!!E.map,ie=!!E.matcap,w=!!rt,Z=!!E.aoMap,K=!!E.lightMap,Y=!!E.bumpMap,Q=!!E.normalMap,lt=!!E.displacementMap,at=!!E.emissiveMap,dt=!!E.metalnessMap,Ot=!!E.roughnessMap,Ft=E.anisotropy>0,b=E.clearcoat>0,x=E.dispersion>0,N=E.iridescence>0,H=E.sheen>0,et=E.transmission>0,V=Ft&&!!E.anisotropyMap,Ct=b&&!!E.clearcoatMap,ht=b&&!!E.clearcoatNormalMap,_t=b&&!!E.clearcoatRoughnessMap,bt=N&&!!E.iridescenceMap,ot=N&&!!E.iridescenceThicknessMap,yt=H&&!!E.sheenColorMap,Lt=H&&!!E.sheenRoughnessMap,It=!!E.specularMap,xt=!!E.specularColorMap,kt=!!E.specularIntensityMap,P=et&&!!E.transmissionMap,it=et&&!!E.thicknessMap,ft=!!E.gradientMap,Et=!!E.alphaMap,ct=E.alphaTest>0,$=!!E.alphaHash,At=!!E.extensions,zt=Pn;E.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(zt=i.toneMapping);let se={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:Jt,fragmentShader:jt,defines:E.defines,customVertexShaderID:Yt,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&G._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&G.instanceColor!==null,instancingMorph:Rt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ri,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:ie,envMap:w,envMapMode:w&&rt.mapping,envMapCubeUVHeight:k,aoMap:Z,lightMap:K,bumpMap:Y,normalMap:Q,displacementMap:d&&lt,emissiveMap:at,normalMapObjectSpace:Q&&E.normalMapType===Ul,normalMapTangentSpace:Q&&E.normalMapType===tc,metalnessMap:dt,roughnessMap:Ot,anisotropy:Ft,anisotropyMap:V,clearcoat:b,clearcoatMap:Ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:_t,dispersion:x,iridescence:N,iridescenceMap:bt,iridescenceThicknessMap:ot,sheen:H,sheenColorMap:yt,sheenRoughnessMap:Lt,specularMap:It,specularColorMap:xt,specularIntensityMap:kt,transmission:et,transmissionMap:P,thicknessMap:it,gradientMap:ft,opaque:E.transparent===!1&&E.blending===ii&&E.alphaToCoverage===!1,alphaMap:Et,alphaTest:ct,alphaHash:$,combine:E.combine,mapUv:Wt&&M(E.map.channel),aoMapUv:Z&&M(E.aoMap.channel),lightMapUv:K&&M(E.lightMap.channel),bumpMapUv:Y&&M(E.bumpMap.channel),normalMapUv:Q&&M(E.normalMap.channel),displacementMapUv:lt&&M(E.displacementMap.channel),emissiveMapUv:at&&M(E.emissiveMap.channel),metalnessMapUv:dt&&M(E.metalnessMap.channel),roughnessMapUv:Ot&&M(E.roughnessMap.channel),anisotropyMapUv:V&&M(E.anisotropyMap.channel),clearcoatMapUv:Ct&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ht&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&M(E.sheenRoughnessMap.channel),specularMapUv:It&&M(E.specularMap.channel),specularColorMapUv:xt&&M(E.specularColorMap.channel),specularIntensityMapUv:kt&&M(E.specularIntensityMap.channel),transmissionMapUv:P&&M(E.transmissionMap.channel),thicknessMapUv:it&&M(E.thicknessMap.channel),alphaMapUv:Et&&M(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Q||Ft),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(Wt||Et),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:tt,skinning:G.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&_.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:at&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===Fe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:At&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&E.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function f(E){let v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(let _ in E.defines)v.push(_),v.push(E.defines[_]);return E.isRawShaderMaterial===!1&&(A(v,E),T(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function A(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function T(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){let v=g[E.type],_;if(v){let z=Sn[v];_=Xl.clone(z.uniforms)}else _=E.uniforms;return _}function R(E,v){let _;for(let z=0,G=h.length;z<G;z++){let q=h[z];if(q.cacheKey===v){_=q,++_.usedTimes;break}}return _===void 0&&(_=new Qm(i,v,E,r),h.push(_)),_}function C(E){if(--E.usedTimes===0){let v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function L(E){l.remove(E)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:F}}function tg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function eg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,M,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=M,f.group=m),t++,f}function o(u,d,p,g,M,m){let f=a(u,d,p,g,M,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,M,m){let f=a(u,d,p,g,M,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||eg),n.length>1&&n.sort(d||xh),s.length>1&&s.sort(d||xh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ng(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vh,i.set(n,[a])):s>=r.length?(a=new vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rg=0;function ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){let t=new ig,e=sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ue,a=new ue;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,A=0,T=0,S=0,R=0,C=0,L=0;c.sort(ag);for(let E=0,v=c.length;E<v;E++){let _=c[E],z=_.color,G=_.intensity,q=_.distance,X=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=z.r*G,u+=z.g*G,d+=z.b*G;else if(_.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(_.sh.coefficients[W],G);L++}else if(_.isDirectionalLight){let W=t.get(_);if(W.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let rt=_.shadow,k=e.get(_);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=_.shadow.matrix,A++}n.directional[p]=W,p++}else if(_.isSpotLight){let W=t.get(_);W.position.setFromMatrixPosition(_.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=q,W.coneCos=Math.cos(_.angle),W.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),W.decay=_.decay,n.spot[M]=W;let rt=_.shadow;if(_.map&&(n.spotLightMap[R]=_.map,R++,rt.updateMatrices(_),_.castShadow&&C++),n.spotLightMatrix[M]=rt.matrix,_.castShadow){let k=e.get(_);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=X,S++}M++}else if(_.isRectAreaLight){let W=t.get(_);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(_.width*.5,0,0),W.halfHeight.set(0,_.height*.5,0),n.rectArea[m]=W,m++}else if(_.isPointLight){let W=t.get(_);if(W.color.copy(_.color).multiplyScalar(_.intensity),W.distance=_.distance,W.decay=_.decay,_.castShadow){let rt=_.shadow,k=e.get(_);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,k.shadowCameraNear=rt.camera.near,k.shadowCameraFar=rt.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=_.shadow.matrix,T++}n.point[g]=W,g++}else if(_.isHemisphereLight){let W=t.get(_);W.skyColor.copy(_.color).multiplyScalar(G),W.groundColor.copy(_.groundColor).multiplyScalar(G),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==S||F.numSpotMaps!==R||F.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,F.directionalLength=p,F.pointLength=g,F.spotLength=M,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=S,F.numSpotMaps=R,F.numLightProbes=L,n.version=rg++)}function l(c,h){let u=0,d=0,p=0,g=0,M=0,m=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){let T=c[f];if(T.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let S=n.hemi[M];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:n}}function yh(i){let t=new og(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yh(i),t.set(s,[o])):r>=a.length?(o=new yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ug(i,t,e){let n=new Wi,s=new pt,r=new pt,a=new me,o=new Or({depthPacking:Dl}),l=new Br,c={},h=e.maxTextureSize,u={[Cn]:Fe,[Fe]:Cn,[Qe]:Qe},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:lg,fragmentShader:hg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let f=this.type;this.render=function(C,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=i.getRenderTarget(),v=i.getActiveCubeFace(),_=i.getActiveMipmapLevel(),z=i.state;z.setBlending(In),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=f!==vn&&this.type===vn,q=f===vn&&this.type!==vn;for(let X=0,W=C.length;X<W;X++){let rt=C[X],k=rt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ut=k.getFrameExtents();if(s.multiply(ut),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,k.mapSize.y=r.y)),k.map===null||G===!0||q===!0){let Mt=this.type!==vn?{minFilter:ke,magFilter:ke}:{};k.map!==null&&k.map.dispose(),k.map=new xn(s.x,s.y,Mt),k.map.texture.name=rt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let gt=k.getViewportCount();for(let Mt=0;Mt<gt;Mt++){let Bt=k.getViewport(Mt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(a),k.updateMatrices(rt,Mt),n=k.getFrustum(),S(L,F,k.camera,rt,this.type)}k.isPointLightShadow!==!0&&this.type===vn&&A(k,F),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,_)};function A(C,L){let F=t.update(M);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,F,d,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,F,p,M,null)}function T(C,L,F,E){let v=null,_=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(_!==void 0)v=_;else if(v=F.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=v.uuid,G=L.uuid,q=c[z];q===void 0&&(q={},c[z]=q);let X=q[G];X===void 0&&(X=v.clone(),q[G]=X,L.addEventListener("dispose",R)),v=X}if(v.visible=L.visible,v.wireframe=L.wireframe,E===vn?v.side=L.shadowSide!==null?L.shadowSide:L.side:v.side=L.shadowSide!==null?L.shadowSide:u[L.side],v.alphaMap=L.alphaMap,v.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,v.map=L.map,v.clipShadows=L.clipShadows,v.clippingPlanes=L.clippingPlanes,v.clipIntersection=L.clipIntersection,v.displacementMap=L.displacementMap,v.displacementScale=L.displacementScale,v.displacementBias=L.displacementBias,v.wireframeLinewidth=L.wireframeLinewidth,v.linewidth=L.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=F}return v}function S(C,L,F,E,v){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===vn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let G=t.update(C),q=C.material;if(Array.isArray(q)){let X=G.groups;for(let W=0,rt=X.length;W<rt;W++){let k=X[W],ut=q[k.materialIndex];if(ut&&ut.visible){let gt=T(C,ut,E,v);C.onBeforeShadow(i,C,L,F,G,gt,k),i.renderBufferDirect(F,null,G,gt,C,k),C.onAfterShadow(i,C,L,F,G,gt,k)}}}else if(q.visible){let X=T(C,q,E,v);C.onBeforeShadow(i,C,L,F,G,X,null),i.renderBufferDirect(F,null,G,X,C,null),C.onAfterShadow(i,C,L,F,G,X,null)}}let z=C.children;for(let G=0,q=z.length;G<q;G++)S(z[G],L,F,E,v)}function R(C){C.target.removeEventListener("dispose",R);for(let F in c){let E=c[F],v=C.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}var dg={[Zr]:Qr,[jr]:ea,[$r]:na,[si]:ta,[Qr]:Zr,[ea]:jr,[na]:$r,[ta]:si};function fg(i,t){function e(){let P=!1,it=new me,ft=null,Et=new me(0,0,0,0);return{setMask:function(ct){ft!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),ft=ct)},setLocked:function(ct){P=ct},setClear:function(ct,$,At,zt,se){se===!0&&(ct*=zt,$*=zt,At*=zt),it.set(ct,$,At,zt),Et.equals(it)===!1&&(i.clearColor(ct,$,At,zt),Et.copy(it))},reset:function(){P=!1,ft=null,Et.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,ft=null,Et=null,ct=null;return{setReversed:function($){if(it!==$){let At=t.get("EXT_clip_control");$?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),it=$;let zt=ct;ct=null,this.setClear(zt)}},getReversed:function(){return it},setTest:function($){$?nt(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function($){ft!==$&&!P&&(i.depthMask($),ft=$)},setFunc:function($){if(it&&($=dg[$]),Et!==$){switch($){case Zr:i.depthFunc(i.NEVER);break;case Qr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case si:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=$}},setLocked:function($){P=$},setClear:function($){ct!==$&&(it&&($=1-$),i.clearDepth($),ct=$)},reset:function(){P=!1,ft=null,Et=null,ct=null,it=!1}}}function s(){let P=!1,it=null,ft=null,Et=null,ct=null,$=null,At=null,zt=null,se=null;return{setTest:function($t){P||($t?nt(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!P&&(i.stencilMask($t),it=$t)},setFunc:function($t,_e,Ve){(ft!==$t||Et!==_e||ct!==Ve)&&(i.stencilFunc($t,_e,Ve),ft=$t,Et=_e,ct=Ve)},setOp:function($t,_e,Ve){($!==$t||At!==_e||zt!==Ve)&&(i.stencilOp($t,_e,Ve),$=$t,At=_e,zt=Ve)},setLocked:function($t){P=$t},setClear:function($t){se!==$t&&(i.clearStencil($t),se=$t)},reset:function(){P=!1,it=null,ft=null,Et=null,ct=null,$=null,At=null,zt=null,se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,A=null,T=null,S=null,R=null,C=null,L=new Gt(0,0,0),F=0,E=!1,v=null,_=null,z=null,G=null,q=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=rt>=1):k.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=rt>=2);let ut=null,gt={},Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Jt=new me().fromArray(Mt),jt=new me().fromArray(Bt);function Yt(P,it,ft,Et){let ct=new Uint8Array(4),$=i.createTexture();i.bindTexture(P,$),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ft;At++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return $}let J={};J[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(si),Y(!1),Q(zo),nt(i.CULL_FACE),Z(In);function nt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function tt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Rt(P,it){return u[P]!==it?(i.bindFramebuffer(P,it),u[P]=it,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Tt(P,it){let ft=p,Et=!1;if(P){ft=d.get(it),ft===void 0&&(ft=[],d.set(it,ft));let ct=P.textures;if(ft.length!==ct.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let $=0,At=ct.length;$<At;$++)ft[$]=i.COLOR_ATTACHMENT0+$;ft.length=ct.length,Et=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ft)}function Wt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let ie={[Vn]:i.FUNC_ADD,[al]:i.FUNC_SUBTRACT,[ol]:i.FUNC_REVERSE_SUBTRACT};ie[cl]=i.MIN,ie[ll]=i.MAX;let w={[hl]:i.ZERO,[ul]:i.ONE,[dl]:i.SRC_COLOR,[br]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[fl]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[xl]:i.ONE_MINUS_DST_COLOR,[ml]:i.ONE_MINUS_DST_ALPHA,[yl]:i.CONSTANT_COLOR,[Ml]:i.ONE_MINUS_CONSTANT_COLOR,[Sl]:i.CONSTANT_ALPHA,[bl]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(P,it,ft,Et,ct,$,At,zt,se,$t){if(P===In){M===!0&&(tt(i.BLEND),M=!1);return}if(M===!1&&(nt(i.BLEND),M=!0),P!==rl){if(P!==m||$t!==E){if((f!==Vn||S!==Vn)&&(i.blendEquation(i.FUNC_ADD),f=Vn,S=Vn),$t)switch(P){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Go:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,R=null,C=null,L.set(0,0,0),F=0,m=P,E=$t}return}ct=ct||it,$=$||ft,At=At||Et,(it!==f||ct!==S)&&(i.blendEquationSeparate(ie[it],ie[ct]),f=it,S=ct),(ft!==A||Et!==T||$!==R||At!==C)&&(i.blendFuncSeparate(w[ft],w[Et],w[$],w[At]),A=ft,T=Et,R=$,C=At),(zt.equals(L)===!1||se!==F)&&(i.blendColor(zt.r,zt.g,zt.b,se),L.copy(zt),F=se),m=P,E=!1}function K(P,it){P.side===Qe?tt(i.CULL_FACE):nt(i.CULL_FACE);let ft=P.side===Fe;it&&(ft=!ft),Y(ft),P.blending===ii&&P.transparent===!1?Z(In):Z(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Et=P.stencilWrite;o.setTest(Et),Et&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(P){v!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),v=P)}function Q(P){P!==nl?(nt(i.CULL_FACE),P!==_&&(P===zo?i.cullFace(i.BACK):P===il?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),_=P}function lt(P){P!==z&&(W&&i.lineWidth(P),z=P)}function at(P,it,ft){P?(nt(i.POLYGON_OFFSET_FILL),(G!==it||q!==ft)&&(i.polygonOffset(it,ft),G=it,q=ft)):tt(i.POLYGON_OFFSET_FILL)}function dt(P){P?nt(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function Ot(P){P===void 0&&(P=i.TEXTURE0+X-1),ut!==P&&(i.activeTexture(P),ut=P)}function Ft(P,it,ft){ft===void 0&&(ut===null?ft=i.TEXTURE0+X-1:ft=ut);let Et=gt[ft];Et===void 0&&(Et={type:void 0,texture:void 0},gt[ft]=Et),(Et.type!==P||Et.texture!==it)&&(ut!==ft&&(i.activeTexture(ft),ut=ft),i.bindTexture(P,it||J[P]),Et.type=P,Et.texture=it)}function b(){let P=gt[ut];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(P){Jt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Jt.copy(P))}function Lt(P){jt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),jt.copy(P))}function It(P,it){let ft=c.get(it);ft===void 0&&(ft=new WeakMap,c.set(it,ft));let Et=ft.get(P);Et===void 0&&(Et=i.getUniformBlockIndex(it,P.name),ft.set(P,Et))}function xt(P,it){let Et=c.get(it).get(P);l.get(it)!==Et&&(i.uniformBlockBinding(it,Et,P.__bindingPointIndex),l.set(it,Et))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,gt={},u={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,A=null,T=null,S=null,R=null,C=null,L=new Gt(0,0,0),F=0,E=!1,v=null,_=null,z=null,G=null,q=null,Jt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:tt,bindFramebuffer:Rt,drawBuffers:Tt,useProgram:Wt,setBlending:Z,setMaterial:K,setFlipSided:Y,setCullFace:Q,setLineWidth:lt,setPolygonOffset:at,setScissorTest:dt,activeTexture:Ot,bindTexture:Ft,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:bt,texImage3D:ot,updateUBOMapping:It,uniformBlockBinding:xt,texStorage2D:ht,texStorage3D:_t,texSubImage2D:H,texSubImage3D:et,compressedTexSubImage2D:V,compressedTexSubImage3D:Ct,scissor:yt,viewport:Lt,reset:kt}}function pg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Es("canvas")}function M(b,x,N){let H=1,et=Ft(b);if((et.width>N||et.height>N)&&(H=N/Math.max(et.width,et.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let V=Math.floor(H*et.width),Ct=Math.floor(H*et.height);u===void 0&&(u=g(V,Ct));let ht=x?g(V,Ct):u;return ht.width=V,ht.height=Ct,ht.getContext("2d").drawImage(b,0,0,V,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+V+"x"+Ct+")."),ht}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,x,N,H,et=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=x;if(x===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),x===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),x===i.RGBA){let Ct=et?Ss:te.getTransfer(H);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=Ct===re?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(b,x){let N;return b?x===null||x===Kn||x===ts?N=i.DEPTH24_STENCIL8:x===Mn?N=i.DEPTH32F_STENCIL8:x===ji&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===ts?N=i.DEPTH_COMPONENT24:x===Mn?N=i.DEPTH_COMPONENT32F:x===ji&&(N=i.DEPTH_COMPONENT16),N}function R(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){let x=b.target;x.removeEventListener("dispose",C),F(x),x.isVideoTexture&&h.delete(x)}function L(b){let x=b.target;x.removeEventListener("dispose",L),v(x)}function F(b){let x=n.get(b);if(x.__webglInit===void 0)return;let N=b.source,H=d.get(N);if(H){let et=H[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(b),Object.keys(H).length===0&&d.delete(N)}n.remove(b)}function E(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let N=b.source,H=d.get(N);delete H[x.__cacheKey],a.memory.textures--}function v(b){let x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let et=0;et<x.__webglFramebuffer[H].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[H][et]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=b.textures;for(let H=0,et=N.length;H<et;H++){let V=n.get(N[H]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(b)}let _=0;function z(){_=0}function G(){let b=_;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),_+=1,b}function q(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){let N=n.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(N,b,x);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function W(b,x){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){J(N,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function rt(b,x){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){J(N,b,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function k(b,x){let N=n.get(b);if(b.version>0&&N.__version!==b.version){nt(N,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let ut={[gn]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},gt={[ke]:i.NEAREST,[Pl]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Nl]:i.NEVER,[Hl]:i.ALWAYS,[Fl]:i.LESS,[ec]:i.LEQUAL,[Ol]:i.EQUAL,[kl]:i.GEQUAL,[Bl]:i.GREATER,[zl]:i.NOTEQUAL};function Bt(b,x){if(x.type===Mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===aa||x.magFilter===Xs||x.magFilter===yn||x.minFilter===Je||x.minFilter===aa||x.minFilter===Xs||x.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ut[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ut[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ut[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,gt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==Xs&&x.minFilter!==yn||x.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));let H=x.source,et=d.get(H);et===void 0&&(et={},d.set(H,et));let V=q(x);if(V!==b.__cacheKey){et[V]===void 0&&(et[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),et[V].usedTimes++;let Ct=et[b.__cacheKey];Ct!==void 0&&(et[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(x)),b.__cacheKey=V,b.__webglTexture=et[V].texture}return N}function jt(b,x,N){return Math.floor(Math.floor(b/N)/x)}function Yt(b,x,N,H){let V=b.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,H,x.data);else{V.sort((ot,yt)=>ot.start-yt.start);let Ct=0;for(let ot=1;ot<V.length;ot++){let yt=V[Ct],Lt=V[ot],It=yt.start+yt.count,xt=jt(Lt.start,x.width,4),kt=jt(yt.start,x.width,4);Lt.start<=It+1&&xt===kt&&jt(Lt.start+Lt.count-1,x.width,4)===xt?yt.count=Math.max(yt.count,Lt.start+Lt.count-yt.start):(++Ct,V[Ct]=Lt)}V.length=Ct+1;let ht=i.getParameter(i.UNPACK_ROW_LENGTH),_t=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ot=0,yt=V.length;ot<yt;ot++){let Lt=V[ot],It=Math.floor(Lt.start/4),xt=Math.ceil(Lt.count/4),kt=It%x.width,P=Math.floor(It/x.width),it=xt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,kt,P,it,ft,N,H,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function J(b,x,N){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);let et=Jt(b,x),V=x.source;e.bindTexture(H,b.__webglTexture,i.TEXTURE0+N);let Ct=n.get(V);if(V.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+N);let ht=te.getPrimaries(te.workingColorSpace),_t=x.colorSpace===Ln?null:te.getPrimaries(x.colorSpace),bt=x.colorSpace===Ln||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ot=M(x.image,!1,s.maxTextureSize);ot=Ot(x,ot);let yt=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),It=T(x.internalFormat,yt,Lt,x.colorSpace,x.isVideoTexture);Bt(H,x);let xt,kt=x.mipmaps,P=x.isVideoTexture!==!0,it=Ct.__version===void 0||et===!0,ft=V.dataReady,Et=R(x,ot);if(x.isDepthTexture)It=S(x.format===es,x.type),it&&(P?e.texStorage2D(i.TEXTURE_2D,1,It,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,It,ot.width,ot.height,0,yt,Lt,null));else if(x.isDataTexture)if(kt.length>0){P&&it&&e.texStorage2D(i.TEXTURE_2D,Et,It,kt[0].width,kt[0].height);for(let ct=0,$=kt.length;ct<$;ct++)xt=kt[ct],P?ft&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,yt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,ct,It,xt.width,xt.height,0,yt,Lt,xt.data);x.generateMipmaps=!1}else P?(it&&e.texStorage2D(i.TEXTURE_2D,Et,It,ot.width,ot.height),ft&&Yt(x,ot,yt,Lt)):e.texImage2D(i.TEXTURE_2D,0,It,ot.width,ot.height,0,yt,Lt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,It,kt[0].width,kt[0].height,ot.depth);for(let ct=0,$=kt.length;ct<$;ct++)if(xt=kt[ct],x.format!==en)if(yt!==null)if(P){if(ft)if(x.layerUpdates.size>0){let At=cc(xt.width,xt.height,x.format,x.type);for(let zt of x.layerUpdates){let se=xt.data.subarray(zt*At/xt.data.BYTES_PER_ELEMENT,(zt+1)*At/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,zt,xt.width,xt.height,1,yt,se)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,ot.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,It,xt.width,xt.height,ot.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,ot.depth,yt,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,It,xt.width,xt.height,ot.depth,0,yt,Lt,xt.data)}else{P&&it&&e.texStorage2D(i.TEXTURE_2D,Et,It,kt[0].width,kt[0].height);for(let ct=0,$=kt.length;ct<$;ct++)xt=kt[ct],x.format!==en?yt!==null?P?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ft&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,yt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,ct,It,xt.width,xt.height,0,yt,Lt,xt.data)}else if(x.isDataArrayTexture)if(P){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,It,ot.width,ot.height,ot.depth),ft)if(x.layerUpdates.size>0){let ct=cc(ot.width,ot.height,x.format,x.type);for(let $ of x.layerUpdates){let At=ot.data.subarray($*ct/ot.data.BYTES_PER_ELEMENT,($+1)*ct/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ot.width,ot.height,1,yt,Lt,At)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,Lt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ot.width,ot.height,ot.depth,0,yt,Lt,ot.data);else if(x.isData3DTexture)P?(it&&e.texStorage3D(i.TEXTURE_3D,Et,It,ot.width,ot.height,ot.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,Lt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,It,ot.width,ot.height,ot.depth,0,yt,Lt,ot.data);else if(x.isFramebufferTexture){if(it)if(P)e.texStorage2D(i.TEXTURE_2D,Et,It,ot.width,ot.height);else{let ct=ot.width,$=ot.height;for(let At=0;At<Et;At++)e.texImage2D(i.TEXTURE_2D,At,It,ct,$,0,yt,Lt,null),ct>>=1,$>>=1}}else if(kt.length>0){if(P&&it){let ct=Ft(kt[0]);e.texStorage2D(i.TEXTURE_2D,Et,It,ct.width,ct.height)}for(let ct=0,$=kt.length;ct<$;ct++)xt=kt[ct],P?ft&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,yt,Lt,xt):e.texImage2D(i.TEXTURE_2D,ct,It,yt,Lt,xt);x.generateMipmaps=!1}else if(P){if(it){let ct=Ft(ot);e.texStorage2D(i.TEXTURE_2D,Et,It,ct.width,ct.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Lt,ot)}else e.texImage2D(i.TEXTURE_2D,0,It,yt,Lt,ot);m(x)&&f(H),Ct.__version=V.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function nt(b,x,N){if(x.image.length!==6)return;let H=Jt(b,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let V=n.get(et);if(et.version!==V.__version||H===!0){e.activeTexture(i.TEXTURE0+N);let Ct=te.getPrimaries(te.workingColorSpace),ht=x.colorSpace===Ln?null:te.getPrimaries(x.colorSpace),_t=x.colorSpace===Ln||Ct===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let bt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let $=0;$<6;$++)!bt&&!ot?yt[$]=M(x.image[$],!0,s.maxCubemapSize):yt[$]=ot?x.image[$].image:x.image[$],yt[$]=Ot(x,yt[$]);let Lt=yt[0],It=r.convert(x.format,x.colorSpace),xt=r.convert(x.type),kt=T(x.internalFormat,It,xt,x.colorSpace),P=x.isVideoTexture!==!0,it=V.__version===void 0||H===!0,ft=et.dataReady,Et=R(x,Lt);Bt(i.TEXTURE_CUBE_MAP,x);let ct;if(bt){P&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,kt,Lt.width,Lt.height);for(let $=0;$<6;$++){ct=yt[$].mipmaps;for(let At=0;At<ct.length;At++){let zt=ct[At];x.format!==en?It!==null?P?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,0,0,zt.width,zt.height,It,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,0,0,zt.width,zt.height,It,xt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,kt,zt.width,zt.height,0,It,xt,zt.data)}}}else{if(ct=x.mipmaps,P&&it){ct.length>0&&Et++;let $=Ft(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,kt,$.width,$.height)}for(let $=0;$<6;$++)if(ot){P?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,yt[$].width,yt[$].height,It,xt,yt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,yt[$].width,yt[$].height,0,It,xt,yt[$].data);for(let At=0;At<ct.length;At++){let se=ct[At].image[$].image;P?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,0,0,se.width,se.height,It,xt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,kt,se.width,se.height,0,It,xt,se.data)}}else{P?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,It,xt,yt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,It,xt,yt[$]);for(let At=0;At<ct.length;At++){let zt=ct[At];P?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,0,0,It,xt,zt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,kt,It,xt,zt.image[$])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),V.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function tt(b,x,N,H,et,V){let Ct=r.convert(N.format,N.colorSpace),ht=r.convert(N.type),_t=T(N.internalFormat,Ct,ht,N.colorSpace),bt=n.get(x),ot=n.get(N);if(ot.__renderTarget=x,!bt.__hasExternalTextures){let yt=Math.max(1,x.width>>V),Lt=Math.max(1,x.height>>V);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,V,_t,yt,Lt,x.depth,0,Ct,ht,null):e.texImage2D(et,V,_t,yt,Lt,0,Ct,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),at(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,et,ot.__webglTexture,0,lt(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,et,ot.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let H=x.depthTexture,et=H&&H.isDepthTexture?H.type:null,V=S(x.stencilBuffer,et),Ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=lt(x);at(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,V,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,b)}else{let H=x.textures;for(let et=0;et<H.length;et++){let V=H[et],Ct=r.convert(V.format,V.colorSpace),ht=r.convert(V.type),_t=T(V.internalFormat,Ct,ht,V.colorSpace),bt=lt(x);N&&at(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,_t,x.width,x.height):at(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(x.depthTexture);H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);let et=H.__webglTexture,V=lt(x);if(x.depthTexture.format===Fi)at(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===es)at(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(b){let x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let H=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",et)};H.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=H}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let H=b.texture.mipmaps;H&&H.length>0?Tt(x.__webglFramebuffer[0],b):Tt(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),Rt(x.__webglDepthbuffer[H],b,!1);else{let et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,V)}}else{let H=b.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Rt(x.__webglDepthbuffer,b,!1);else{let et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(b,x,N){let H=n.get(b);x!==void 0&&tt(H.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Wt(b)}function w(b){let x=b.texture,N=n.get(b),H=n.get(x);b.addEventListener("dispose",L);let et=b.textures,V=b.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,a.memory.textures++),V){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let _t=0;_t<x.mipmaps.length;_t++)N.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else N.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[ht]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ht=0,_t=et.length;ht<_t;ht++){let bt=n.get(et[ht]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&at(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let _t=et[ht];N.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ht]);let bt=r.convert(_t.format,_t.colorSpace),ot=r.convert(_t.type),yt=T(_t.internalFormat,bt,ot,_t.colorSpace,b.isXRRenderTarget===!0),Lt=lt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,yt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,N.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)tt(N.__webglFramebuffer[ht][_t],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else tt(N.__webglFramebuffer[ht],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ht=0,_t=et.length;ht<_t;ht++){let bt=et[ht],ot=n.get(bt),yt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(yt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ot.__webglTexture),Bt(yt,bt),tt(N.__webglFramebuffer,b,bt,i.COLOR_ATTACHMENT0+ht,yt,0),m(bt)&&f(yt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,H.__webglTexture),Bt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)tt(N.__webglFramebuffer[_t],b,x,i.COLOR_ATTACHMENT0,ht,_t);else tt(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ht,0);m(x)&&f(ht),e.unbindTexture()}b.depthBuffer&&Wt(b)}function Z(b){let x=b.textures;for(let N=0,H=x.length;N<H;N++){let et=x[N];if(m(et)){let V=A(b),Ct=n.get(et).__webglTexture;e.bindTexture(V,Ct),f(V),e.unbindTexture()}}}let K=[],Y=[];function Q(b){if(b.samples>0){if(at(b)===!1){let x=b.textures,N=b.width,H=b.height,et=i.COLOR_BUFFER_BIT,V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(b),ht=x.length>1;if(ht)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let _t=b.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);let ot=n.get(x[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,et,i.NEAREST),l===!0&&(K.length=0,Y.length=0,K.push(i.COLOR_ATTACHMENT0+bt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(K.push(V),Y.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);let ot=n.get(x[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(b){return Math.min(s.maxSamples,b.samples)}function at(b){let x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function dt(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ot(b,x){let N=b.colorSpace,H=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==ri&&N!==Ln&&(te.getTransfer(N)===re?(H!==en||et!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Ft(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=rt,this.setTextureCube=k,this.rebindTextures=ie,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=at}function mg(i,t){function e(n,s=Ln){let r,a=te.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ko)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qo)return i.BYTE;if(n===Jo)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===Qo)return i.RGB;if(n===en)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===$o)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===qs||n===Js||n===Ys||n===Ks)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===va||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===va)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===Aa||n===wa||n===_a||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Na||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ls(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Rn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new Sc,f={},A=e.getContextAttributes(),T=null,S=null,R=[],C=[],L=new pt,F=null,E=new Ie;E.viewport=new me;let v=new Ie;v.viewport=new me;let _=[E,v],z=new Kr,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=R[J];return nt===void 0&&(nt=new Vi,R[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=R[J];return nt===void 0&&(nt=new Vi,R[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=R[J];return nt===void 0&&(nt=new Vi,R[J]=nt),nt.getHandSpace()};function X(J){let nt=C.indexOf(J.inputSource);if(nt===-1)return;let tt=R[nt];tt!==void 0&&(tt.update(J.inputSource,J.frame,c||a),tt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",rt);for(let J=0;J<R.length;J++){let nt=C[J];nt!==null&&(C[J]=null,R[J].disconnect(nt))}G=null,q=null,m.reset();for(let J in f)delete f[J];t.setRenderTarget(T),p=null,d=null,u=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",rt),A.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,Rt=null,Tt=null;A.depth&&(Tt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=A.stencil?es:Fi,Rt=A.stencil?ts:Kn);let Wt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new xn(d.textureWidth,d.textureHeight,{format:en,type:hn,depthTexture:new Ps(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let tt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new xn(p.framebufferWidth,p.framebufferHeight,{format:en,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(J){for(let nt=0;nt<J.removed.length;nt++){let tt=J.removed[nt],Rt=C.indexOf(tt);Rt>=0&&(C[Rt]=null,R[Rt].disconnect(tt))}for(let nt=0;nt<J.added.length;nt++){let tt=J.added[nt],Rt=C.indexOf(tt);if(Rt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=C.length){C.push(tt),Rt=Wt;break}else if(C[Wt]===null){C[Wt]=tt,Rt=Wt;break}if(Rt===-1)break}let Tt=R[Rt];Tt&&Tt.connect(tt)}}let k=new I,ut=new I;function gt(J,nt,tt){k.setFromMatrixPosition(nt.matrixWorld),ut.setFromMatrixPosition(tt.matrixWorld);let Rt=k.distanceTo(ut),Tt=nt.projectionMatrix.elements,Wt=tt.projectionMatrix.elements,ie=Tt[14]/(Tt[10]-1),w=Tt[14]/(Tt[10]+1),Z=(Tt[9]+1)/Tt[5],K=(Tt[9]-1)/Tt[5],Y=(Tt[8]-1)/Tt[0],Q=(Wt[8]+1)/Wt[0],lt=ie*Y,at=ie*Q,dt=Rt/(-Y+Q),Ot=dt*-Y;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Ft=ie+dt,b=w+dt,x=lt-Ot,N=at+(Rt-Ot),H=Z*w/b*Ft,et=K*w/b*Ft;J.projectionMatrix.makePerspective(x,N,H,et,Ft,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let nt=J.near,tt=J.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(tt=m.depthFar)),z.near=v.near=E.near=nt,z.far=v.far=E.far=tt,(G!==z.near||q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,q=z.far),z.layers.mask=J.layers.mask|6,E.layers.mask=z.layers.mask&3,v.layers.mask=z.layers.mask&5;let Rt=J.parent,Tt=z.cameras;Mt(z,Rt);for(let Wt=0;Wt<Tt.length;Wt++)Mt(Tt[Wt],Rt);Tt.length===2?gt(z,E,v):z.projectionMatrix.copy(E.projectionMatrix),Bt(J,z,Rt)};function Bt(J,nt,tt){tt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return f[J]};let Jt=null;function jt(J,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){let tt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Rt=!1;tt.length!==z.cameras.length&&(z.cameras.length=0,Rt=!0);for(let w=0;w<tt.length;w++){let Z=tt[w],K=null;if(p!==null)K=p.getViewport(Z);else{let Q=u.getViewSubImage(d,Z);K=Q.viewport,w===0&&(t.setRenderTargetTextures(S,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(S))}let Y=_[w];Y===void 0&&(Y=new Ie,Y.layers.enable(w),Y.viewport=new me,_[w]=Y),Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(K.x,K.y,K.width,K.height),w===0&&(z.matrix.copy(Y.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Rt===!0&&z.cameras.push(Y)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let w=u.getDepthInformation(tt[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(Tt&&Tt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let w=0;w<tt.length;w++){let Z=tt[w].camera;if(Z){let K=f[Z];K||(K=new Ls,f[Z]=K);let Y=u.getCameraImage(Z);K.sourceTexture=Y}}}}for(let tt=0;tt<R.length;tt++){let Rt=C[tt],Tt=R[tt];Rt!==null&&Tt!==void 0&&Tt.update(Rt,nt,c||a)}Jt&&Jt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Yt=new Mh;Yt.setAnimationLoop(jt),this.setAnimationLoop=function(J){Jt=J},this.dispose=function(){}}},gi=new cn,vg=new ue;function yg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,A,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=t.get(f),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,gi.copy(S),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(gi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let S=T.program;n.uniformBlockBinding(A,S)}function c(A,T){let S=s[A.id];S===void 0&&(g(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",m));let R=T.program;n.updateUBOMapping(A,R);let C=t.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function h(A){let T=u();A.__bindingPointIndex=T;let S=i.createBuffer(),R=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let T=s[A.id],S=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,L=S.length;C<L;C++){let F=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,v=F.length;E<v;E++){let _=F[E];if(p(_,C,E,R)===!0){let z=_.__offset,G=Array.isArray(_.value)?_.value:[_.value],q=0;for(let X=0;X<G.length;X++){let W=G[X],rt=M(W);typeof W=="number"||typeof W=="boolean"?(_.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+q,_.__data)):W.isMatrix3?(_.__data[0]=W.elements[0],_.__data[1]=W.elements[1],_.__data[2]=W.elements[2],_.__data[3]=0,_.__data[4]=W.elements[3],_.__data[5]=W.elements[4],_.__data[6]=W.elements[5],_.__data[7]=0,_.__data[8]=W.elements[6],_.__data[9]=W.elements[7],_.__data[10]=W.elements[8],_.__data[11]=0):(W.toArray(_.__data,q),q+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,_.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,S,R){let C=A.value,L=T+"_"+S;if(R[L]===void 0)return typeof C=="number"||typeof C=="boolean"?R[L]=C:R[L]=C.clone(),!0;{let F=R[L];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return R[L]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(A){let T=A.uniforms,S=0,R=16;for(let L=0,F=T.length;L<F;L++){let E=Array.isArray(T[L])?T[L]:[T[L]];for(let v=0,_=E.length;v<_;v++){let z=E[v],G=Array.isArray(z.value)?z.value:[z.value];for(let q=0,X=G.length;q<X;q++){let W=G[q],rt=M(W),k=S%R,ut=k%rt.boundary,gt=k+ut;S+=ut,gt!==0&&R-gt<rt.storage&&(S+=R-gt),z.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=rt.storage}}}let C=S%R;return C>0&&(S+=R-C),A.__size=S,A.__cache={},this}function M(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Wa=class{constructor(t={}){let{canvas:e=Vl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),M=new Int32Array(4),m=null,f=null,A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=Ae;let C=0,L=0,F=null,E=-1,v=null,_=new me,z=new me,G=null,q=new Gt(0),X=0,W=e.width,rt=e.height,k=1,ut=null,gt=null,Mt=new me(0,0,W,rt),Bt=new me(0,0,W,rt),Jt=!1,jt=new Wi,Yt=!1,J=!1,nt=new ue,tt=new I,Rt=new me,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ie(){return F===null?k:1}let w=n;function Z(y,D){return e.getContext(y,D)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",ct,!1),w===null){let D="webgl2";if(w=Z(D,y),w===null)throw Z(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let K,Y,Q,lt,at,dt,Ot,Ft,b,x,N,H,et,V,Ct,ht,_t,bt,ot,yt,Lt,It,xt,kt;function P(){K=new Bp(w),K.init(),It=new mg(w,K),Y=new Pp(w,K,t,It),Q=new fg(w,K),Y.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),lt=new Hp(w),at=new tg,dt=new pg(w,K,Q,at,Y,It,lt),Ot=new Dp(S),Ft=new Op(S),b=new qu(w),xt=new Rp(w,b),x=new zp(w,b,lt,xt),N=new Gp(w,x,b,lt),ot=new Vp(w,Y,dt),ht=new Lp(at),H=new $m(S,Ot,Ft,K,Y,xt,ht),et=new yg(S,at),V=new ng,Ct=new cg(K),bt=new Cp(S,Ot,Ft,Q,N,p,l),_t=new ug(S,N,Y),kt=new Mg(w,lt,Y,Q),yt=new Ip(w,K,lt),Lt=new kp(w,K,lt),lt.programs=H.programs,S.capabilities=Y,S.extensions=K,S.properties=at,S.renderLists=V,S.shadowMap=_t,S.state=Q,S.info=lt}P();let it=new bc(S,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let y=K.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=K.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(W,rt,!1))},this.getSize=function(y){return y.set(W,rt)},this.setSize=function(y,D,B=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,rt=D,e.width=Math.floor(y*k),e.height=Math.floor(D*k),B===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*k,rt*k).floor()},this.setDrawingBufferSize=function(y,D,B){W=y,rt=D,k=B,e.width=Math.floor(y*B),e.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,D,B,O){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,D,B,O),Q.viewport(_.copy(Mt).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,D,B,O){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,D,B,O),Q.scissor(z.copy(Bt).multiplyScalar(k).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(y){Q.setScissorTest(Jt=y)},this.setOpaqueSort=function(y){ut=y},this.setTransparentSort=function(y){gt=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,B=!0){let O=0;if(y){let U=!1;if(F!==null){let j=F.texture.format;U=j===da||j===ua||j===ha}if(U){let j=F.texture.type,mt=j===hn||j===Kn||j===ji||j===ts||j===ca||j===la,wt=bt.getClearColor(),St=bt.getClearAlpha(),Ut=wt.r,Dt=wt.g,Pt=wt.b;mt?(g[0]=Ut,g[1]=Dt,g[2]=Pt,g[3]=St,w.clearBufferuiv(w.COLOR,0,g)):(M[0]=Ut,M[1]=Dt,M[2]=Pt,M[3]=St,w.clearBufferiv(w.COLOR,0,M))}else O|=w.COLOR_BUFFER_BIT}D&&(O|=w.DEPTH_BUFFER_BIT),B&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),V.dispose(),Ct.dispose(),at.dispose(),Ot.dispose(),Ft.dispose(),N.dispose(),xt.dispose(),kt.dispose(),H.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ve),it.removeEventListener("sessionend",cs),un.stop()};function ft(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=lt.autoReset,D=_t.enabled,B=_t.autoUpdate,O=_t.needsUpdate,U=_t.type;P(),lt.autoReset=y,_t.enabled=D,_t.autoUpdate=B,_t.needsUpdate=O,_t.type=U}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $(y){let D=y.target;D.removeEventListener("dispose",$),At(D)}function At(y){zt(y),at.remove(y)}function zt(y){let D=at.get(y).programs;D!==void 0&&(D.forEach(function(B){H.releaseProgram(B)}),y.isShaderMaterial&&H.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,O,U,j){D===null&&(D=Tt);let mt=U.isMesh&&U.matrixWorld.determinant()<0,wt=nn(y,D,B,O,U);Q.setMaterial(O,mt);let St=B.index,Ut=1;if(O.wireframe===!0){if(St=x.getWireframeAttribute(B),St===void 0)return;Ut=2}let Dt=B.drawRange,Pt=B.attributes.position,Xt=Dt.start*Ut,ee=(Dt.start+Dt.count)*Ut;j!==null&&(Xt=Math.max(Xt,j.start*Ut),ee=Math.min(ee,(j.start+j.count)*Ut)),St!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,St.count)):Pt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,Pt.count));let ce=ee-Xt;if(ce<0||ce===1/0)return;xt.setup(U,O,wt,B,St);let le,oe=yt;if(St!==null&&(le=b.get(St),oe=Lt,oe.setIndex(le)),U.isMesh)O.wireframe===!0?(Q.setLineWidth(O.wireframeLinewidth*ie()),oe.setMode(w.LINES)):oe.setMode(w.TRIANGLES);else if(U.isLine){let Nt=O.linewidth;Nt===void 0&&(Nt=1),Q.setLineWidth(Nt*ie()),U.isLineSegments?oe.setMode(w.LINES):U.isLineLoop?oe.setMode(w.LINE_LOOP):oe.setMode(w.LINE_STRIP)}else U.isPoints?oe.setMode(w.POINTS):U.isSprite&&oe.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))oe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Nt=U._multiDrawStarts,de=U._multiDrawCounts,ne=U._multiDrawCount,Ge=St?b.get(St).bytesPerElement:1,bi=at.get(O).currentProgram.getUniforms();for(let We=0;We<ne;We++)bi.setValue(w,"_gl_DrawID",We),oe.render(Nt[We]/Ge,de[We])}else if(U.isInstancedMesh)oe.renderInstances(Xt,ce,U.count);else if(B.isInstancedBufferGeometry){let Nt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,de=Math.min(B.instanceCount,Nt);oe.renderInstances(Xt,ce,de)}else oe.render(Xt,ce)};function se(y,D,B){y.transparent===!0&&y.side===Qe&&y.forceSinglePass===!1?(y.side=Fe,y.needsUpdate=!0,Zt(y,D,B),y.side=Cn,y.needsUpdate=!0,Zt(y,D,B),y.side=Qe):Zt(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),f=Ct.get(B),f.init(D),T.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let O=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let mt=0;mt<j.length;mt++){let wt=j[mt];se(wt,B,U),O.add(wt)}else se(j,B,U),O.add(j)}),f=T.pop(),O},this.compileAsync=function(y,D,B=null){let O=this.compile(y,D,B);return new Promise(U=>{function j(){if(O.forEach(function(mt){at.get(mt).currentProgram.isReady()&&O.delete(mt)}),O.size===0){U(y);return}setTimeout(j,10)}K.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let $t=null;function _e(y){$t&&$t(y)}function Ve(){un.stop()}function cs(){un.start()}let un=new Mh;un.setAnimationLoop(_e),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(y){$t=y,it.setAnimationLoop(y),y===null?un.stop():un.start()},it.addEventListener("sessionstart",Ve),it.addEventListener("sessionend",cs),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,D,F),f=Ct.get(y,T.length),f.init(D),T.push(f),nt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),jt.setFromProjectionMatrix(nt,on,D.reversedDepth),J=this.localClippingEnabled,Yt=ht.init(this.clippingPlanes,J),m=V.get(y,A.length),m.init(),A.push(m),it.enabled===!0&&it.isPresenting===!0){let j=S.xr.getDepthSensingMesh();j!==null&&yi(j,D,-1/0,S.sortObjects)}yi(y,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ut,gt),Wt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Wt&&bt.addToRenderList(m,y),this.info.render.frame++,Yt===!0&&ht.beginShadows();let B=f.state.shadowsArray;_t.render(B,y,D),Yt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){let j=D.cameras;if(U.length>0)for(let mt=0,wt=j.length;mt<wt;mt++){let St=j[mt];st(O,U,y,St)}Wt&&bt.render(y);for(let mt=0,wt=j.length;mt<wt;mt++){let St=j[mt];ls(m,y,St,St.viewport)}}else U.length>0&&st(O,U,y,D),Wt&&bt.render(y),ls(m,y,D);F!==null&&L===0&&(dt.updateMultisampleRenderTarget(F),dt.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(S,y,D),xt.resetDefaultState(),E=-1,v=null,T.pop(),T.length>0?(f=T[T.length-1],Yt===!0&&ht.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function yi(y,D,B,O){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||jt.intersectsSprite(y)){O&&Rt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(nt);let mt=N.update(y),wt=y.material;wt.visible&&m.push(y,mt,wt,B,Rt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||jt.intersectsObject(y))){let mt=N.update(y),wt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Rt.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Rt.copy(mt.boundingSphere.center)),Rt.applyMatrix4(y.matrixWorld).applyMatrix4(nt)),Array.isArray(wt)){let St=mt.groups;for(let Ut=0,Dt=St.length;Ut<Dt;Ut++){let Pt=St[Ut],Xt=wt[Pt.materialIndex];Xt&&Xt.visible&&m.push(y,mt,Xt,B,Rt.z,Pt)}}else wt.visible&&m.push(y,mt,wt,B,Rt.z,null)}}let j=y.children;for(let mt=0,wt=j.length;mt<wt;mt++)yi(j[mt],D,B,O)}function ls(y,D,B,O){let U=y.opaque,j=y.transmissive,mt=y.transparent;f.setupLightsView(B),Yt===!0&&ht.setGlobalState(S.clippingPlanes,B),O&&Q.viewport(_.copy(O)),U.length>0&&Ht(U,D,B),j.length>0&&Ht(j,D,B),mt.length>0&&Ht(mt,D,B),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function st(y,D,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new xn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?$i:hn,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let j=f.state.transmissionRenderTarget[O.id],mt=O.viewport||_;j.setSize(mt.z*S.transmissionResolutionScale,mt.w*S.transmissionResolutionScale);let wt=S.getRenderTarget(),St=S.getActiveCubeFace(),Ut=S.getActiveMipmapLevel();S.setRenderTarget(j),S.getClearColor(q),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&bt.render(B);let Dt=S.toneMapping;S.toneMapping=Pn;let Pt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),Yt===!0&&ht.setGlobalState(S.clippingPlanes,O),Ht(y,B,O),dt.updateMultisampleRenderTarget(j),dt.updateRenderTargetMipmap(j),K.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ee=0,ce=D.length;ee<ce;ee++){let le=D[ee],oe=le.object,Nt=le.geometry,de=le.material,ne=le.group;if(de.side===Qe&&oe.layers.test(O.layers)){let Ge=de.side;de.side=Fe,de.needsUpdate=!0,Qt(oe,B,O,Nt,de,ne),de.side=Ge,de.needsUpdate=!0,Xt=!0}}Xt===!0&&(dt.updateMultisampleRenderTarget(j),dt.updateRenderTargetMipmap(j))}S.setRenderTarget(wt,St,Ut),S.setClearColor(q,X),Pt!==void 0&&(O.viewport=Pt),S.toneMapping=Dt}function Ht(y,D,B){let O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,j=y.length;U<j;U++){let mt=y[U],wt=mt.object,St=mt.geometry,Ut=mt.group,Dt=mt.material;Dt.allowOverride===!0&&O!==null&&(Dt=O),wt.layers.test(B.layers)&&Qt(wt,D,B,St,Dt,Ut)}}function Qt(y,D,B,O,U,j){y.onBeforeRender(S,D,B,O,U,j),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,D,B,O,y,j),U.transparent===!0&&U.side===Qe&&U.forceSinglePass===!1?(U.side=Fe,U.needsUpdate=!0,S.renderBufferDirect(B,D,O,U,y,j),U.side=Cn,U.needsUpdate=!0,S.renderBufferDirect(B,D,O,U,y,j),U.side=Qe):S.renderBufferDirect(B,D,O,U,y,j),y.onAfterRender(S,D,B,O,U,j)}function Zt(y,D,B){D.isScene!==!0&&(D=Tt);let O=at.get(y),U=f.state.lights,j=f.state.shadowsArray,mt=U.state.version,wt=H.getParameters(y,U.state,j,D,B),St=H.getProgramCacheKey(wt),Ut=O.programs;O.environment=y.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(y.isMeshStandardMaterial?Ft:Ot).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",$),Ut=new Map,O.programs=Ut);let Dt=Ut.get(St);if(Dt!==void 0){if(O.currentProgram===Dt&&O.lightsStateVersion===mt)return Le(y,wt),Dt}else wt.uniforms=H.getUniforms(y),y.onBeforeCompile(wt,S),Dt=H.acquireProgram(wt,St),Ut.set(St,Dt),O.uniforms=wt.uniforms;let Pt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=ht.uniform),Le(y,wt),O.needsLights=Se(y),O.lightsStateVersion=mt,O.needsLights&&(Pt.ambientLightColor.value=U.state.ambient,Pt.lightProbe.value=U.state.probe,Pt.directionalLights.value=U.state.directional,Pt.directionalLightShadows.value=U.state.directionalShadow,Pt.spotLights.value=U.state.spot,Pt.spotLightShadows.value=U.state.spotShadow,Pt.rectAreaLights.value=U.state.rectArea,Pt.ltc_1.value=U.state.rectAreaLTC1,Pt.ltc_2.value=U.state.rectAreaLTC2,Pt.pointLights.value=U.state.point,Pt.pointLightShadows.value=U.state.pointShadow,Pt.hemisphereLights.value=U.state.hemi,Pt.directionalShadowMap.value=U.state.directionalShadowMap,Pt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pt.spotShadowMap.value=U.state.spotShadowMap,Pt.spotLightMatrix.value=U.state.spotLightMatrix,Pt.spotLightMap.value=U.state.spotLightMap,Pt.pointShadowMap.value=U.state.pointShadowMap,Pt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Dt,O.uniformsList=null,Dt}function Te(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=rs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Le(y,D){let B=at.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function nn(y,D,B,O,U){D.isScene!==!0&&(D=Tt),dt.resetTextureUnits();let j=D.fog,mt=O.isMeshStandardMaterial?D.environment:null,wt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ri,St=(O.isMeshStandardMaterial?Ft:Ot).get(O.envMap||mt),Ut=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pt=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,ee=!!B.morphAttributes.color,ce=Pn;O.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ce=S.toneMapping);let le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=le!==void 0?le.length:0,Nt=at.get(O),de=f.state.lights;if(Yt===!0&&(J===!0||y!==v)){let De=y===v&&O.id===E;ht.setState(O,y,De)}let ne=!1;O.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==de.state.version||Nt.outputColorSpace!==wt||U.isBatchedMesh&&Nt.batching===!1||!U.isBatchedMesh&&Nt.batching===!0||U.isBatchedMesh&&Nt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Nt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Nt.instancing===!1||!U.isInstancedMesh&&Nt.instancing===!0||U.isSkinnedMesh&&Nt.skinning===!1||!U.isSkinnedMesh&&Nt.skinning===!0||U.isInstancedMesh&&Nt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Nt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Nt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Nt.instancingMorph===!1&&U.morphTexture!==null||Nt.envMap!==St||O.fog===!0&&Nt.fog!==j||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ht.numPlanes||Nt.numIntersection!==ht.numIntersection)||Nt.vertexAlphas!==Ut||Nt.vertexTangents!==Dt||Nt.morphTargets!==Pt||Nt.morphNormals!==Xt||Nt.morphColors!==ee||Nt.toneMapping!==ce||Nt.morphTargetsCount!==oe)&&(ne=!0):(ne=!0,Nt.__version=O.version);let Ge=Nt.currentProgram;ne===!0&&(Ge=Zt(O,D,U));let bi=!1,We=!1,us=!1,fe=Ge.getUniforms(),je=Nt.uniforms;if(Q.useProgram(Ge.program)&&(bi=!0,We=!0,us=!0),O.id!==E&&(E=O.id,We=!0),bi||v!==y){Q.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),fe.setValue(w,"projectionMatrix",y.projectionMatrix),fe.setValue(w,"viewMatrix",y.matrixWorldInverse);let Be=fe.map.cameraPosition;Be!==void 0&&Be.setValue(w,tt.setFromMatrixPosition(y.matrixWorld)),Y.logarithmicDepthBuffer&&fe.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&fe.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,We=!0,us=!0)}if(U.isSkinnedMesh){fe.setOptional(w,U,"bindMatrix"),fe.setOptional(w,U,"bindMatrixInverse");let De=U.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),fe.setValue(w,"boneTexture",De.boneTexture,dt))}U.isBatchedMesh&&(fe.setOptional(w,U,"batchingTexture"),fe.setValue(w,"batchingTexture",U._matricesTexture,dt),fe.setOptional(w,U,"batchingIdTexture"),fe.setValue(w,"batchingIdTexture",U._indirectTexture,dt),fe.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&fe.setValue(w,"batchingColorTexture",U._colorsTexture,dt));let $e=B.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&ot.update(U,B,Ge),(We||Nt.receiveShadow!==U.receiveShadow)&&(Nt.receiveShadow=U.receiveShadow,fe.setValue(w,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(je.envMap.value=St,je.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(je.envMapIntensity.value=D.environmentIntensity),We&&(fe.setValue(w,"toneMappingExposure",S.toneMappingExposure),Nt.needsLights&&Un(je,us),j&&O.fog===!0&&et.refreshFogUniforms(je,j),et.refreshMaterialUniforms(je,O,k,rt,f.state.transmissionRenderTarget[y.id]),rs.upload(w,Te(Nt),je,dt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(rs.upload(w,Te(Nt),je,dt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&fe.setValue(w,"center",U.center),fe.setValue(w,"modelViewMatrix",U.modelViewMatrix),fe.setValue(w,"normalMatrix",U.normalMatrix),fe.setValue(w,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let De=O.uniformsGroups;for(let Be=0,Qa=De.length;Be<Qa;Be++){let Qn=De[Be];kt.update(Qn,Ge),kt.bind(Qn,Ge)}}return Ge}function Un(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Se(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,D,B){let O=at.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),at.get(y.texture).__webglTexture=D,at.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let B=at.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};let Mi=w.createFramebuffer();this.setRenderTarget=function(y,D=0,B=0){F=y,C=D,L=B;let O=!0,U=null,j=!1,mt=!1;if(y){let St=at.get(y);if(St.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(St.__webglFramebuffer===void 0)dt.setupRenderTarget(y);else if(St.__hasExternalTextures)dt.rebindTextures(y,at.get(y.texture).__webglTexture,at.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Pt=y.depthTexture;if(St.__boundDepthTexture!==Pt){if(Pt!==null&&at.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(mt=!0);let Dt=at.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?U=Dt[D][B]:U=Dt[D],j=!0):y.samples>0&&dt.useMultisampledRTT(y)===!1?U=at.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[B]:U=Dt,_.copy(y.viewport),z.copy(y.scissor),G=y.scissorTest}else _.copy(Mt).multiplyScalar(k).floor(),z.copy(Bt).multiplyScalar(k).floor(),G=Jt;if(B!==0&&(U=Mi),Q.bindFramebuffer(w.FRAMEBUFFER,U)&&O&&Q.drawBuffers(y,U),Q.viewport(_),Q.scissor(z),Q.setScissorTest(G),j){let St=at.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,B)}else if(mt){let St=D;for(let Ut=0;Ut<y.textures.length;Ut++){let Dt=at.get(y.textures[Ut]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ut,Dt.__webglTexture,B,St)}}else if(y!==null&&B!==0){let St=at.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,St.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(y,D,B,O,U,j,mt,wt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=at.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Q.bindFramebuffer(w.FRAMEBUFFER,St);try{let Ut=y.textures[wt],Dt=Ut.format,Pt=Ut.type;if(!Y.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-O&&B>=0&&B<=y.height-U&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+wt),w.readPixels(D,B,O,U,It.convert(Dt),It.convert(Pt),j))}finally{let Ut=F!==null?at.get(F).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,O,U,j,mt,wt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=at.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St)if(D>=0&&D<=y.width-O&&B>=0&&B<=y.height-U){Q.bindFramebuffer(w.FRAMEBUFFER,St);let Ut=y.textures[wt],Dt=Ut.format,Pt=Ut.type;if(!Y.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.bufferData(w.PIXEL_PACK_BUFFER,j.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+wt),w.readPixels(D,B,O,U,It.convert(Dt),It.convert(Pt),0);let ee=F!==null?at.get(F).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,ee);let ce=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Gl(w,ce,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,j),w.deleteBuffer(Xt),w.deleteSync(ce),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,B=0){let O=Math.pow(2,-B),U=Math.floor(y.image.width*O),j=Math.floor(y.image.height*O),mt=D!==null?D.x:0,wt=D!==null?D.y:0;dt.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,mt,wt,U,j),Q.unbindTexture()};let Si=w.createFramebuffer(),hs=w.createFramebuffer();this.copyTextureToTexture=function(y,D,B=null,O=null,U=0,j=null){j===null&&(U!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=U,U=0):j=0);let mt,wt,St,Ut,Dt,Pt,Xt,ee,ce,le=y.isCompressedTexture?y.mipmaps[j]:y.image;if(B!==null)mt=B.max.x-B.min.x,wt=B.max.y-B.min.y,St=B.isBox3?B.max.z-B.min.z:1,Ut=B.min.x,Dt=B.min.y,Pt=B.isBox3?B.min.z:0;else{let $e=Math.pow(2,-U);mt=Math.floor(le.width*$e),wt=Math.floor(le.height*$e),y.isDataArrayTexture?St=le.depth:y.isData3DTexture?St=Math.floor(le.depth*$e):St=1,Ut=0,Dt=0,Pt=0}O!==null?(Xt=O.x,ee=O.y,ce=O.z):(Xt=0,ee=0,ce=0);let oe=It.convert(D.format),Nt=It.convert(D.type),de;D.isData3DTexture?(dt.setTexture3D(D,0),de=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(dt.setTexture2DArray(D,0),de=w.TEXTURE_2D_ARRAY):(dt.setTexture2D(D,0),de=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let ne=w.getParameter(w.UNPACK_ROW_LENGTH),Ge=w.getParameter(w.UNPACK_IMAGE_HEIGHT),bi=w.getParameter(w.UNPACK_SKIP_PIXELS),We=w.getParameter(w.UNPACK_SKIP_ROWS),us=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,le.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pt);let fe=y.isDataArrayTexture||y.isData3DTexture,je=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let $e=at.get(y),De=at.get(D),Be=at.get($e.__renderTarget),Qa=at.get(De.__renderTarget);Q.bindFramebuffer(w.READ_FRAMEBUFFER,Be.__webglFramebuffer),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,Qa.__webglFramebuffer);for(let Qn=0;Qn<St;Qn++)fe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,at.get(y).__webglTexture,U,Pt+Qn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,at.get(D).__webglTexture,j,ce+Qn)),w.blitFramebuffer(Ut,Dt,mt,wt,Xt,ee,mt,wt,w.DEPTH_BUFFER_BIT,w.NEAREST);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||at.has(y)){let $e=at.get(y),De=at.get(D);Q.bindFramebuffer(w.READ_FRAMEBUFFER,Si),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,hs);for(let Be=0;Be<St;Be++)fe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,$e.__webglTexture,U,Pt+Be):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,$e.__webglTexture,U),je?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,De.__webglTexture,j,ce+Be):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,De.__webglTexture,j),U!==0?w.blitFramebuffer(Ut,Dt,mt,wt,Xt,ee,mt,wt,w.COLOR_BUFFER_BIT,w.NEAREST):je?w.copyTexSubImage3D(de,j,Xt,ee,ce+Be,Ut,Dt,mt,wt):w.copyTexSubImage2D(de,j,Xt,ee,Ut,Dt,mt,wt);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else je?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(de,j,Xt,ee,ce,mt,wt,St,oe,Nt,le.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(de,j,Xt,ee,ce,mt,wt,St,oe,le.data):w.texSubImage3D(de,j,Xt,ee,ce,mt,wt,St,oe,Nt,le):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,j,Xt,ee,mt,wt,oe,Nt,le.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,j,Xt,ee,le.width,le.height,oe,le.data):w.texSubImage2D(w.TEXTURE_2D,j,Xt,ee,mt,wt,oe,Nt,le);w.pixelStorei(w.UNPACK_ROW_LENGTH,ne),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge),w.pixelStorei(w.UNPACK_SKIP_PIXELS,bi),w.pixelStorei(w.UNPACK_SKIP_ROWS,We),w.pixelStorei(w.UNPACK_SKIP_IMAGES,us),j===0&&D.generateMipmaps&&w.generateMipmap(de),Q.unbindTexture()},this.initRenderTarget=function(y){at.get(y).__webglFramebuffer===void 0&&dt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?dt.setTextureCube(y,0):y.isData3DTexture?dt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?dt.setTexture2DArray(y,0):dt.setTexture2D(y,0),Q.unbindTexture()},this.resetState=function(){C=0,L=0,F=null,Q.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ah={portrait:[1.6,2.25],landscape:[2.25,1.6]},bg={left:.27,center:.5,right:.73},$s=.018,Oe=.007,ve=4,wh=1/.05,Eg=1/960,Tg=2,Dn=72,_h=24,Tc=.36,Nh=.095,Ag=.0135,qa=.036,js=.15,Ch=1024,Rh={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Ka=[0,.07,.93,1],wg=[-.95,-.28,.28,.95],_g=9,Cg=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,Rg=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,Ig=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,Pg=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,Ih={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Zn=(i,t,e)=>Math.min(e,Math.max(t,i)),Qs=(i,t,e)=>i+(t-i)*e,Ac=(i,t)=>{try{let e=document.createElement("canvas").getContext("2d");if(!e)return t;e.fillStyle="#000000",e.fillStyle=i;let n=e.fillStyle;if(n.startsWith("#")){let r=parseInt(n.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}let s=n.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},Lg=i=>.2126*i[0]+.7152*i[1]+.0722*i[2],Za=(i,t=1)=>`rgba(${Math.round(i[0]*255)}, ${Math.round(i[1]*255)}, ${Math.round(i[2]*255)}, ${t})`,Fh=i=>{let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}},Rc=(i,t,e,n,s,r)=>{let a=Math.max(0,Math.min(r,n/2,s/2)),o=a*.4477;i.moveTo(t+a,e),i.lineTo(t+n-a,e),i.bezierCurveTo(t+n-o,e,t+n,e+o,t+n,e+a),i.lineTo(t+n,e+s-a),i.bezierCurveTo(t+n,e+s-o,t+n-o,e+s,t+n-a,e+s),i.lineTo(t+a,e+s),i.bezierCurveTo(t+o,e+s,t,e+s-o,t,e+s-a),i.lineTo(t,e+a),i.bezierCurveTo(t,e+o,t+o,e,t+a,e)},wc=(i,t)=>{if(!t)return Promise.resolve(null);if(typeof t!="string")return Promise.resolve(t);let e=i.get(t);if(e)return e;let n=new Promise(s=>{let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>s(r),r.onerror=()=>s(null),r.src=t});return i.set(t,n),n},Ph=(i,t)=>{let[e,n]=Ah[i]||Ah.portrait,s=Qs(.03,Math.min(e,n)*.2,Zn(t,0,1)),r={width:.34,height:.07,y:n/2-.13},a=n/2-.055;return{width:e,height:n,radius:s,slot:r,ringY:a,hangY:a+Nh}},Dg=i=>{let{width:t,height:e,radius:n,slot:s}=i,r=new Xn;Rc(r,-t/2+Oe,-e/2+Oe,t-Oe*2,e-Oe*2,Math.max(n-Oe,.005));let a=new ci;Rc(a,-s.width/2-Oe,s.y-s.height/2-Oe,s.width+Oe*2,s.height+Oe*2,s.height/2+Oe),r.holes.push(a);let o=new Yi(r,{depth:$s,bevelEnabled:!0,bevelThickness:Oe,bevelSize:Oe,bevelSegments:5,curveSegments:24});o.translate(0,0,-$s/2);let l=new ks(r,24),c=l.getAttribute("position"),h=l.getAttribute("uv");for(let u=0;u<c.count;u++)h.setXY(u,(c.getX(u)+t/2)/t,(c.getY(u)+e/2)/e);return h.needsUpdate=!0,{body:o,face:l}},Lh=i=>{let t=new Xn,e=i*1.16;Rc(t,-e/2+.014,-js/2+.014,e-.028,js-.028,.024);let n=new Yi(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return n.translate(0,0,-.01),n},Ug=i=>{let t=Ka.length,e=new Ye;e.setAttribute("position",new we(new Float32Array(i*t*3),3)),e.setAttribute("normal",new we(new Float32Array(i*t*3),3)),e.setAttribute("uv",new we(new Float32Array(i*t*2),2));let n=[];for(let s=0;s<i-1;s++)for(let r=0;r<t-1;r++){let a=s*t+r;n.push(a,a+t,a+1,a+1,a+t,a+t+1)}return e.setIndex(n),e},Ng=i=>{let t=new Gi;t.background=new Gt(.035,.035,.04);let e=new hi(1,1),n=[],s=(o,l,c,h=0)=>{let u=new ai({color:new Gt(o,o,o),side:Qe});n.push(u);let d=new ge(e,u);d.position.set(...l),d.scale.set(c[0],c[1],1),d.lookAt(0,0,0),d.rotateZ(h),t.add(d)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let r=new as(i),a=r.fromScene(t,.035);return r.dispose(),e.dispose(),n.forEach(o=>o.dispose()),a},_c=(i,t)=>{let e=new oi(i);return e.colorSpace=Ae,e.anisotropy=t,e},Fg=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d");if(!e)return new oi(t);let n=Fh(7),s=Float32Array.from({length:16384},()=>n()),r=(l,c)=>{let h=0;for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++)h+=s[(c+u+128)%128*128+(l+d+128)%128];return h/9*1.6},a=e.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=r((c-1+128)%128,l)-r((c+1)%128,l),u=r(c,(l-1+128)%128)-r(c,(l+1)%128),d=Math.hypot(h,u,1),p=(l*128+c)*4;a.data[p]=(h/d*.5+.5)*255,a.data[p+1]=(u/d*.5+.5)*255,a.data[p+2]=(1/d*.5+.5)*255,a.data[p+3]=255}e.putImageData(a,0,0);let o=new oi(t);return o.wrapS=gn,o.wrapT=gn,o.repeat.set(5,7),o},Og=()=>{let e=Fh(19),n=Float32Array.from({length:16384},()=>e()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),r=(l,c)=>{let h=(l%128+128)%128,u=(c%128+128)%128,d=h/128*8,p=u/128*8,g=Math.floor(d),M=Math.floor(p),m=d-g-.5,f=p-M-.5,A=(g+M)%2===0,T=s(m)*(.55+.45*Math.cos(f*Math.PI*(A?1:.6))),S=s(f)*(.55+.45*Math.cos(m*Math.PI*(A?.6:1)));return(A?Math.max(T,S*.7):Math.max(S,T*.7))+n[u*128+h]*.08},a=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=(r(c-1,l)-r(c+1,l))*1.6,u=(r(c,l-1)-r(c,l+1))*1.6,d=Math.hypot(h,u,1),p=(l*128+c)*4;a[p]=(h/d*.5+.5)*255,a[p+1]=(u/d*.5+.5)*255,a[p+2]=(1/d*.5+.5)*255,a[p+3]=255}let o=new Is(a,128,128);return o.wrapS=gn,o.wrapT=gn,o.magFilter=Je,o.minFilter=yn,o.generateMipmaps=!0,o.needsUpdate=!0,o},Bg=(i,t,e,n,s)=>{let r=(s==="contain"?Math.min:Math.max)(e/t.width,n/t.height),a=t.width*r,o=t.height*r;i.drawImage(t,(e-a)/2,(n-o)/2,a,o)},Dh=(i,t,e,n)=>{let s=i.getContext("2d");s&&(s.fillStyle=Za(e),s.fillRect(0,0,i.width,i.height),t&&Bg(s,t,i.width,i.height,n))},zg=(i,t,e)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;i.width=192,i.height=s;let r=i.getContext("2d");if(!r)return s/192;if(r.fillStyle=Za(e),r.fillRect(0,0,192,s),t)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(t,0,0,s,192),r.restore(),s/192;let a=Lg(e)>.5?[0,0,0]:[1,1,1];r.fillStyle=Za(a,.05);for(let o=0;o<s;o+=4)r.fillRect(0,o,192,1);r.fillStyle=Za(a,.2);for(let o=0;o<s;o+=14)r.fillRect(192*.075,o,2,8),r.fillRect(192*.925-2,o,2,8);return s/192},kg=()=>{let i=()=>Array.from({length:ve+1},()=>new I);return{nodes:i(),previous:i(),velocities:i(),lengths:new Float64Array(ve),impulses:new Float64Array(ve),rest:1,anchor:new I,body:{position:new I,previous:new I,velocity:new I,quaternion:new He,previousQuaternion:new He,angular:new I,mass:1,inverseInertia:new I(1,1,1),hang:new I},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},ae={a:new I,b:new I,c:new I,d:new I,e:new I,f:new I,g:new I,pin:new I,q:new He,r:new He},Ic=(i,t,e)=>(ae.r.copy(i.quaternion).invert(),e.copy(t).applyQuaternion(ae.r),e.set(e.x*i.inverseInertia.x,e.y*i.inverseInertia.y,e.z*i.inverseInertia.z),e.applyQuaternion(i.quaternion)),Oh=(i,t)=>{let{x:e,y:n,z:s,w:r}=i;i.x+=.5*(t.x*r+t.y*s-t.z*n),i.y+=.5*(t.y*r+t.z*e-t.x*s),i.z+=.5*(t.z*r+t.x*n-t.y*e),i.w+=.5*(-t.x*e-t.y*n-t.z*s),i.normalize()},Bh=(i,t,e)=>{let n=ae.c.crossVectors(t,e);return 1/i.mass+n.dot(Ic(i,n,ae.d))},zh=(i,t,e)=>{i.position.addScaledVector(e,1/i.mass),Oh(i.quaternion,Ic(i,ae.e.crossVectors(t,e),ae.f))},Hg=(i,t,e,n)=>{let{nodes:s,body:r}=i,a=s[t],o=t===0?0:wh,l=t===ve-1,c=ae.g,h=s[t+1];l&&(c.copy(r.hang).applyQuaternion(r.quaternion),h=ae.b.copy(r.position).add(c));let u=ae.a.subVectors(h,a),d=u.length(),p=d-i.rest;if(p<=0||d<1e-9)return;let g=u.divideScalar(d),M=l?Bh(r,c,g):wh,m=(d-i.lengths[t])/e,A=(n.hold*Math.tanh(n.stiffness*p/n.hold)+n.spring*p+n.bandDamping*Math.max(0,m))*e*e-i.impulses[t];if(A<=0)return;let T=Math.min(p/(o+M),A);i.impulses[t]+=T,o&&a.addScaledVector(g,T*o),l?zh(r,c,g.multiplyScalar(-T)):h.addScaledVector(g,-T*M)},Vg=(i,t,e)=>{let n=ae.g.copy(t.local).applyQuaternion(i.quaternion),s=ae.a.copy(e).sub(i.position).sub(n),r=s.length();if(r<1e-9)return;let a=s.divideScalar(r),o=r/Bh(i,n,a);zh(i,n,a.multiplyScalar(o))},Ja=(i,t,e)=>{let{nodes:n,previous:s,velocities:r,body:a,anchor:o}=i;n[0].copy(o);for(let c=1;c<=ve;c++)n[c].copy(n[c-1]),e?n[c].x+=i.rest:n[c].y-=i.rest;a.quaternion.identity(),e&&a.quaternion.setFromAxisAngle(new I(0,0,1),Math.PI/2),a.hang.set(0,t.hangY,0);let l=ae.a.copy(a.hang).applyQuaternion(a.quaternion);a.position.copy(n[ve]).sub(l),a.previous.copy(a.position),a.previousQuaternion.copy(a.quaternion),a.velocity.set(0,0,0),a.angular.set(0,0,0);for(let c=0;c<=ve;c++)s[c].copy(n[c]),r[c].set(0,0,0);i.lengths.fill(i.rest),i.turn=0,i.twist=0,i.twistRaw=0,i.calm=0},Gg=(i,t,e)=>{i.rest=e/ve;let{width:n,height:s}=t,r=i.body,a=$s+Oe*2;r.mass=1,r.inverseInertia.set(12/(s*s+a*a),12/(n*n+a*a),12/(n*n+s*s)),r.hang.set(0,t.hangY,0)},Wg=(i,t,e,n)=>{let s=Math.max(1,Math.ceil(t/Eg-1e-6)),r=t/s,{nodes:a,previous:o,velocities:l,body:c}=i,h=e.breeze*(Math.sin(n*.53)*.7+Math.sin(n*1.31+1.7)*.3)*3,u=e.breeze*Math.sin(n*.37+.6)*2,d=i.grab,p=ae.pin,g=Math.exp(-e.nodeDrag*r),M=Math.exp(-e.linearDrag*r),m=Math.exp(-e.angularDrag*r);for(let A=0;A<s;A++){for(let v=1;v<ve;v++){let _=l[v];_.y-=e.gravity*r,_.x+=h*r,_.z+=u*r,o[v].copy(a[v]),a[v].addScaledVector(_,r)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let T=c.quaternion;if(d){let v=ae.q.copy(d.rotation).multiply(ae.r.copy(T).invert());v.w<0&&v.set(-v.x,-v.y,-v.z,-v.w);let _=ae.a.set(v.x,v.y,v.z).multiplyScalar(2*e.grip);_.addScaledVector(c.angular,-e.gripDamping),c.angular.addScaledVector(Ic(c,_,ae.b),r)}let S=ae.a.set(0,1,0).applyQuaternion(T),R=ae.b.set(-S.x*S.z,-S.y*S.z,1-S.z*S.z);if(R.lengthSq()>.001){let v=ae.d.set(0,0,1).applyQuaternion(T),_=Math.atan2(ae.e.crossVectors(R,v).dot(S),R.dot(v)),z=_-i.twistRaw;z>Math.PI?z-=Math.PI*2:z<-Math.PI&&(z+=Math.PI*2),i.twist+=z,i.twistRaw=_}if(!d){let v=c.angular.dot(S);c.angular.addScaledVector(S,(e.twist*(i.turn-i.twist)-e.twistDamping*v)*r)}c.velocity.y-=e.gravity*r,c.velocity.x+=h*.35*r,c.velocity.z+=u*.35*r,c.position.addScaledVector(c.velocity,r),Oh(c.quaternion,ae.f.copy(c.angular).multiplyScalar(r)),i.impulses.fill(0),d&&p.lerpVectors(d.from,d.target,(A+1)/s);for(let v=0;v<Tg;v++){for(let _=0;_<ve;_++)Hg(i,_,r,e);d&&Vg(c,d,p)}for(let v=1;v<ve;v++){let _=l[v].subVectors(a[v],o[v]).divideScalar(r).multiplyScalar(g);_.multiplyScalar(1/(1+e.nodeAir*_.length()*r))}c.velocity.subVectors(c.position,c.previous).divideScalar(r);let C=ae.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(C.x,C.y,C.z).multiplyScalar(2/r*(C.w<0?-1:1));let L=ae.a.set(0,0,1).applyQuaternion(c.quaternion),F=c.velocity.dot(L),E=ae.b.copy(c.velocity).addScaledVector(L,-F);E.multiplyScalar(1/(1+e.air*E.length()*r)),c.velocity.copy(E).addScaledVector(L,F/(1+e.broadside*Math.abs(F)*r)).multiplyScalar(M),c.angular.multiplyScalar(m/(1+e.spinAir*c.angular.length()*r)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),a[ve].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let v=0;v<ve;v++)i.lengths[v]=a[v].distanceTo(a[v+1])}d&&d.from.copy(d.target);let f=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let A=1;A<ve;A++)f+=l[A].lengthSq()*.05;i.calm=f<2e-4?i.calm+t:0},Xg="data:image/webp;base64,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",Cc;function qg(){return Cc||(Cc=new Promise((i,t)=>{let e=new Image;e.onload=()=>i(e),e.onerror=()=>t(new Error("Badge portrait could not load")),e.src=Xg})),Cc}function Uh(i,t,e,n,s=600){for(;n>18&&(i.font=`${s} ${n}px "Helvetica Neue", Arial, sans-serif`,!(i.measureText(t).width<=e));)n-=2}function Ya(i,t,e=!1){let n=document.createElement("canvas");n.width=768,n.height=1080;let s=n.getContext("2d");if(s.fillStyle="#f7f6f2",s.fillRect(0,0,768,1080),s.fillStyle="#123a63",s.font="800 28px Arial, sans-serif",s.fillText("CLICK TALK",48,130),s.font="500 15px Arial, sans-serif",s.fillText("THE PEOPLE BEHIND THE WORK",48,160),s.fillStyle="#ff735c",s.fillRect(656,109,64,7),e){s.fillStyle="#123a63",s.font="400 150px Georgia, serif",s.fillText("Hello.",48,355),s.fillStyle="#ff735c",s.fillRect(48,399,100,7),s.fillStyle="#4b6579",s.font="400 40px Arial, sans-serif";let r=i.description.split(/\s+/),a=[];if(r.length<3){let o="";for(let l of i.description)s.measureText(o+l).width>660&&(a.push(o),o=""),o+=l;o&&a.push(o)}else{let o="";for(let l of r)s.measureText(o+l).width>660&&(a.push(o.trim()),o=""),o+=l+" ";o&&a.push(o.trim())}a.slice(0,7).forEach((o,l)=>s.fillText(o,48,466+l*50))}else{s.save(),s.beginPath(),s.rect(0,190,768,610),s.clip();let r=s.createLinearGradient(0,190,768,800);r.addColorStop(0,"#e3ebed"),r.addColorStop(1,"#d3e1e5"),s.fillStyle=r,s.fillRect(0,190,768,610),s.fillStyle="#f0b49e",s.beginPath(),s.arc(690,370,245,0,Math.PI*2),s.fill();let a=700;s.drawImage(t,34,210,a,t.height*a/t.width),s.restore()}return s.fillStyle="#123a63",s.fillRect(0,800,768,280),s.fillStyle="#ff735c",s.fillRect(0,800,768,7),s.fillStyle="#fff",Uh(s,i.name,672,64),s.fillText(i.name,48,896),s.fillStyle="#d9e4ed",Uh(s,i.role,672,26,400),s.fillText(i.role,48,948),s.fillStyle="#90a8bc",s.font="500 16px Arial, sans-serif",s.fillText("HANGZHOU / WORLDWIDE",48,1030),s.fillStyle="#ff957a",s.font="600 19px monospace",s.fillText(String(i.number).padStart(2,"0")+" / 12",610,1030),n}function Jg(){let i=document.createElement("canvas");i.width=768,i.height=128;let t=i.getContext("2d");return t.fillStyle="#123a63",t.fillRect(0,0,768,128),t.fillStyle="#ff735c",t.fillRect(0,6,768,3),t.fillRect(0,119,768,3),t.fillStyle="#f7f6f2",t.font="700 30px Arial, sans-serif",t.textAlign="center",t.fillText("CLICK TALK   /   THE TEAM",384,75),i}function Yg(i,t={}){let e={current:{frontImage:void 0,backImage:void 0,strapImage:void 0,imageFit:"cover",cardColor:"#f7f6f2",orientation:"portrait",finish:"glossy",cornerRadius:.24,size:.74,anchor:"center",strapLength:.13,strapColor:"#123a63",strapWidth:.62,metal:"silver",gravity:.85,damping:.72,elasticity:.35,breeze:.08,interactive:!0,intro:!0,...t}},n={current:null},s={current:null},r={current:null},a=0,l=(()=>{let c;try{c=new Wa({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}c.setClearColor(0,0),c.outputColorSpace=Ae,c.toneMapping=ia,c.toneMappingExposure=1;let h=c.domElement;h.className="lanyard-canvas",h.setAttribute("aria-hidden","true"),i.appendChild(h);let u=Math.min(8,c.capabilities.getMaxAnisotropy()),d=new Gi,p=Ng(c);d.environment=p.texture;let g=new Ie(_h,1,.1,200),M=new Qi(16777215,1.6);M.position.set(-2.5,4,6);let m=new Qi(16777215,.35);m.position.set(3,-1,4),d.add(M,m);let f=new Map,A={front:null,back:null,strap:null},T=document.createElement("canvas"),S=document.createElement("canvas"),R=document.createElement("canvas"),C=_c(T,u),L=_c(S,u),F=_c(R,u);F.wrapS=fn,F.wrapT=gn;let E=Fg(),v=Og(),_={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new I},foilFill:{value:new I},foilTop:{value:new I}},z=st=>{Object.assign(st.uniforms,_),st.vertexShader=st.vertexShader.replace("#include <common>",`#include <common>
${Cg}`).replace("#include <project_vertex>",`#include <project_vertex>
${Rg}`),st.fragmentShader=st.fragmentShader.replace("#include <common>",`#include <common>
${Ig}`).replace("#include <opaque_fragment>",`${Pg}
#include <opaque_fragment>`)},G=new qn({map:C,normalMap:E,normalScale:new pt(.06,.06)}),q=new qn({map:L,normalMap:E,normalScale:new pt(.06,.06)});G.onBeforeCompile=z,q.onBeforeCompile=z;let X=new qn,W=new Zi({metalness:1}),rt=new qn({map:F,normalMap:v,normalScale:new pt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Gt(.32,.32,.34),side:Qe}),k=new pn,ut=new ge(void 0,X),gt=new ge(void 0,G),Mt=new ge(void 0,q),Bt=new ge(new Ki(Nh,Ag,18,72),W);Bt.rotation.y=Math.PI/2-.7,k.add(ut,gt,Mt,Bt),d.add(k);let Jt=Ug(Dn),jt=new ge(Jt,rt);jt.frustumCulled=!1,d.add(jt);let Yt=new pn,J=new ge(Lh(Tc),W);J.position.y=qa+js/2-.004;let nt=new ge(new Ki(qa,.0105,14,40),W);Yt.add(J,nt),d.add(Yt);let tt=kg(),Rt=[],Tt=new I,Wt=new I,ie=new qi(Rt,!1,"centripetal"),w={width:1,height:1},Z=Ph("portrait",.3),K={},Y=Tc,Q=2,lt=0,at=performance.now(),dt=0,Ot=i.getBoundingClientRect().width>0,Ft=!0,b=!1,x=!1,N=null,H=0,et=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,V=()=>{let st=e.current,Ht=Ac(st.cardColor,[1,1,1]),Qt=Ch,Zt=Math.round(Ch*Z.height/Z.width);(T.width!==Qt||T.height!==Zt)&&(T.width=Qt,T.height=Zt,S.width=Qt,S.height=Zt,C.dispose(),L.dispose()),Dh(T,A.front,Ht,st.imageFit),Dh(S,A.back||A.front,Ht,st.imageFit),C.needsUpdate=!0,L.needsUpdate=!0,it()},Ct=()=>{let st=e.current;Q=zg(R,A.strap,Ac(st.strapColor,[.07,.07,.07])),v.repeat.set(2,2*Q),F.dispose(),F.needsUpdate=!0,it()},ht=()=>{let st=e.current,Ht=w.width/w.height,Qt=Z.height/Zn(st.size,.15,.9),Zt=Z.width/.72;Qt*Ht<Zt&&(Qt=Zt/Ht);let Te=Qt*Ht;g.aspect=Ht,g.position.set(0,0,Qt/2/Math.tan(_h*Math.PI/360)),g.lookAt(0,0,0),g.updateProjectionMatrix(),g.updateMatrixWorld(),_.foilKey.value.set(-2.5,4,6).normalize().transformDirection(g.matrixWorldInverse),_.foilFill.value.set(3,-1,4).normalize().transformDirection(g.matrixWorldInverse),_.foilTop.value.set(.5,4.5,8).normalize().transformDirection(g.matrixWorldInverse);let Le=((bg[st.anchor]??.5)-.5)*Te,nn=Qt/2+.2,Se=Qt/2-Qt*Qs(.12,.42,Zn(st.strapLength,0,1))+(Z.hangY-Z.height/2);tt.anchor.set(Le,nn,0),Gg(tt,Z,nn-Se),tt.nodes[0].copy(tt.anchor),tt.previous[0].copy(tt.anchor)},_t=()=>{let st=e.current,Ht=`${st.orientation}|${st.cornerRadius}`;if(Ht!==K.layoutKey){Z=Ph(st.orientation,st.cornerRadius);let Se=Dg(Z);ut.geometry.dispose(),gt.geometry.dispose(),Mt.geometry.dispose(),ut.geometry=Se.body,gt.geometry=Se.face,Mt.geometry=Se.face.clone(),gt.position.z=$s/2+Oe+6e-4,Mt.rotation.y=Math.PI,Mt.position.z=-($s/2+Oe+6e-4),Bt.position.set(0,Z.ringY,0),K.framingKey=""}let Qt=`${Ht}|${st.size}|${st.anchor}|${st.strapLength}|${w.width}|${w.height}`;Qt!==K.framingKey&&(ht(),b?Ht!==K.layoutKey&&Ja(tt,Z,!1):(Ja(tt,Z,st.intro&&!et),b=!0));let Zt=`${st.frontImage}|${st.backImage}|${st.strapImage}|${st.imageRevision||0}`;if(Zt!==K.imageKey){let Se=++H;Promise.all([wc(f,st.frontImage),wc(f,st.backImage),wc(f,st.strapImage)]).then(([Mi,Si,hs])=>{!Ft||Se!==H||(A.front=Mi,A.back=Si,A.strap=hs,V(),Ct())})}let Te=`${Ht}|${st.cardColor}|${st.imageFit}`;Te!==K.faceKey&&V(),st.strapColor!==K.strapColor&&Ct();let Le=Rh[st.finish]||Rh.glossy,nn=Ac(st.cardColor,[1,1,1]);[G,q].forEach(Se=>{Se.roughness=Le.roughness,Se.metalness=Le.metalness,Se.clearcoat=Le.clearcoat,Se.clearcoatRoughness=Le.clearcoatRoughness,Se.anisotropy=Le.anisotropy}),_.foilStrength.value=Le.foil,_.foilAspect.value=Z.height/Z.width,X.color.setRGB(nn[0]*.92,nn[1]*.92,nn[2]*.92,Ae),X.roughness=Math.min(Le.roughness,.35),X.metalness=Le.metalness,X.clearcoat=1,X.clearcoatRoughness=.08;let Un=Ih[st.metal]||Ih.silver;W.color.set(Un.color),W.roughness=Un.roughness,Y=Tc*Zn(st.strapWidth,.4,2),Y!==K.strapScale&&(J.geometry.dispose(),J.geometry=Lh(Y)),h.style.touchAction=st.interactive?"pan-y":"auto",K={layoutKey:Ht,framingKey:Qt,imageKey:Zt,faceKey:Te,strapColor:st.strapColor,strapScale:Y},it()},bt=Array.from({length:Dn},()=>new I),ot=Array.from({length:Dn},()=>new I),yt=wg.map(st=>[Math.cos(st),Math.sin(st)]),Lt={tangent:new I,toCamera:new I,basis:new ue,up:new I,across:new I,facing:new I,end:new I},It=()=>{let st=tt.nodes[ve],Ht=qa+js+.05,Qt=ve-1;for(;Qt>0&&tt.nodes[Qt].distanceTo(st)<Ht*1.1;)Qt--;let Zt=Lt.up.subVectors(tt.nodes[Qt],st);Zt.lengthSq()<1e-8&&Zt.set(0,1,0).applyQuaternion(tt.body.quaternion),Zt.normalize(),Tt.copy(st).addScaledVector(Zt,Ht),Wt.copy(st).addScaledVector(Zt,qa+js*.35),Rt.length=0;for(let j=0;j<=Qt;j++)Rt.push(tt.nodes[j]);Rt.push(Tt,Wt),ie.updateArcLengths();for(let j=0;j<Dn;j++)ie.getPointAt(j/(Dn-1),bt[j]);let Te=ie.getLength(),Le=1-Tt.distanceTo(Wt)/Math.max(Te,.001),nn=Jt.getAttribute("position"),Un=Jt.getAttribute("normal"),Se=Jt.getAttribute("uv"),Mi=Ka.length,Si=tt.rest*ve,hs=Si/(Y*Q),y=Y/Math.pow(Math.max(1,Te/Math.max(Si,.001)),.35),{tangent:D,toCamera:B,across:O,facing:U}=Lt;for(let j=0;j<Dn;j++){D.subVectors(bt[Math.min(Dn-1,j+1)],bt[Math.max(0,j-1)]),D.lengthSq()<1e-12&&D.set(0,-1,0),D.normalize(),B.subVectors(g.position,bt[j]).normalize();let mt=ot[j].crossVectors(B,D);mt.lengthSq()<1e-10&&mt.copy(j>0?ot[j-1]:ae.a.set(1,0,0)),mt.normalize(),j>0&&mt.dot(ot[j-1])<0&&mt.negate();let wt=-tt.twist*Math.pow(Math.min(1,j/(Dn-1)/Le),1.3);U.crossVectors(D,mt),O.copy(mt).multiplyScalar(Math.cos(wt)).addScaledVector(U,Math.sin(wt)),U.crossVectors(D,O);let St=bt[j],Ut=(1-j/(Dn-1))*hs;for(let Dt=0;Dt<Mi;Dt++){let Pt=j*Mi+Dt,Xt=(Ka[Dt]-.5)*y,[ee,ce]=yt[Dt];nn.setXYZ(Pt,St.x+O.x*Xt,St.y+O.y*Xt,St.z+O.z*Xt),Un.setXYZ(Pt,U.x*ee+O.x*ce,U.y*ee+O.y*ce,U.z*ee+O.z*ce),Se.setXY(Pt,Ka[Dt],Ut)}}Lt.end.copy(O),nn.needsUpdate=!0,Un.needsUpdate=!0,Se.needsUpdate=!0,O.copy(Lt.end).addScaledVector(Zt,-Lt.end.dot(Zt)).normalize(),U.crossVectors(O,Zt).normalize(),Lt.basis.makeBasis(O,Zt,U),Yt.quaternion.setFromRotationMatrix(Lt.basis),Yt.position.copy(st)},xt=()=>{k.position.copy(tt.body.position),k.quaternion.copy(tt.body.quaternion),It(),c.render(d,g)},kt=()=>{let st=e.current,Ht=40*Zn(st.gravity,0,3),Qt=Math.max(Ht,20),Zt=Zn(st.elasticity,0,1),Te=Zn(st.damping,0,1);return{gravity:Ht,hold:Qt*Qs(2.2,5.5,Zt),stiffness:Qt*10*ve,spring:Qt*Qs(.1,.4,Zt)*ve,bandDamping:Qt*Qs(.3,.08,Zt)*ve,linearDrag:.25*Math.pow(16,Te),angularDrag:.5*Math.pow(12,Te),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:et?0:Zn(st.breeze,0,1)}},P=st=>{if(lt=0,!Ft||!Ot||document.hidden)return;let Ht=Math.min(1/30,Math.max(1/240,(st-at)/1e3));at=st,dt+=Ht;let Qt=kt();Wg(tt,Ht,Qt,dt);let Zt=tt.body;Number.isFinite(Zt.position.x+Zt.position.y+Zt.position.z+Zt.quaternion.w)||(tt.grab=null,Ja(tt,Z,!1)),xt();let Te=tt.calm>1.2&&!tt.grab&&Qt.breeze===0;Ot&&!Te&&(lt=requestAnimationFrame(P))},it=()=>{lt||!Ot||!Ft||document.hidden||(tt.calm=0,at=performance.now(),lt=requestAnimationFrame(P))},ft=new Gs,Et=new pt,ct=st=>{let Ht=h.getBoundingClientRect();Et.set((st.clientX-Ht.left)/Ht.width*2-1,-((st.clientY-Ht.top)/Ht.height)*2+1),ft.setFromCamera(Et,g)},$=()=>(k.updateMatrixWorld(),ft.intersectObjects([ut,gt,Mt],!1)[0]||null),At=st=>{h.style.cursor!==st&&(h.style.cursor=st)},zt=st=>{let Ht=tt.body,Qt=ae.a.set(0,1,0).applyQuaternion(Ht.quaternion),Zt=tt.turn>0?-1:1;if(tt.turn===0){let Te=ae.c.subVectors(st,g.position).normalize();Zt=ae.b.subVectors(st,Ht.position).cross(Te).dot(Qt)<0?-1:1}tt.turn=tt.turn===0?Math.PI*Zt:0,Ht.angular.addScaledVector(Qt,_g*Zt)},se=st=>{if(!e.current.interactive||st.button>0)return;ct(st);let Ht=$();Ht&&(tt.grab={local:Ht.point.clone().sub(tt.body.position).applyQuaternion(tt.body.quaternion.clone().invert()),rotation:tt.body.quaternion.clone(),reach:Ht.distance,from:Ht.point.clone(),target:Ht.point.clone()},N={x:st.clientX,y:st.clientY,time:performance.now(),point:Ht.point.clone()},h.setPointerCapture?.(st.pointerId),At("grabbing"),st.preventDefault(),it())},$t=st=>{if(e.current.interactive){if(ct(st),tt.grab){N&&Math.hypot(st.clientX-N.x,st.clientY-N.y)>6&&(N=null),ft.ray.at(tt.grab.reach,tt.grab.target),it();return}st.pointerType!=="touch"&&(x=!!$(),At(x?"grab":""))}},_e=st=>{tt.grab&&(tt.grab=null,N&&st.type==="pointerup"&&performance.now()-N.time<450&&zt(N.point),N=null,h.releasePointerCapture?.(st.pointerId),At(x&&st.pointerType!=="touch"?"grab":""),it())},Ve=st=>{!e.current.interactive||st.touches.length!==1||(ct(st.touches[0]),$()&&st.preventDefault())};h.addEventListener("pointerdown",se),h.addEventListener("pointermove",$t),h.addEventListener("pointerup",_e),h.addEventListener("pointercancel",_e),h.addEventListener("lostpointercapture",_e),h.addEventListener("touchstart",Ve,{passive:!1});let cs=()=>{w.width=Math.max(1,i.clientWidth),w.height=Math.max(1,i.clientHeight),c.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),c.setSize(w.width,w.height,!1),_t(),xt()},un=new ResizeObserver(cs);un.observe(i);let yi=new IntersectionObserver(([st])=>{Ot=st.isIntersecting,Ot?it():(cancelAnimationFrame(lt),lt=0)});yi.observe(i);let ls=()=>{document.hidden?(cancelAnimationFrame(lt),lt=0):it()};return document.addEventListener("visibilitychange",ls),n.current=_t,s.current=()=>{tt.grab=null,Ja(tt,Z,!et),it()},r.current=()=>{zt(tt.body.position.clone()),it()},cs(),()=>{Ft=!1,cancelAnimationFrame(lt),n.current=null,un.disconnect(),yi.disconnect(),document.removeEventListener("visibilitychange",ls),h.removeEventListener("pointerdown",se),h.removeEventListener("pointermove",$t),h.removeEventListener("pointerup",_e),h.removeEventListener("pointercancel",_e),h.removeEventListener("lostpointercapture",_e),h.removeEventListener("touchstart",Ve),[ut,gt,Mt,Bt,J,nt,jt].forEach(st=>st.geometry?.dispose()),[G,q,X,W,rt].forEach(st=>st.dispose()),[C,L,F,E,v].forEach(st=>st.dispose()),p.dispose(),c.dispose(),h.parentNode&&h.parentNode.removeChild(h)}})();return l?{update(c){Object.assign(e.current,c,{imageRevision:++a}),n.current?.()},replay(){s.current?.()},flip(){r.current?.()},destroy:l}:null}window.ClickTalkLanyard={async mount(i,t){let e=await qg(),n=Jg(),s=Yg(i,{frontImage:Ya(t,e),backImage:Ya(t,e,!0),strapImage:n});return s?(i.classList.add("is-webgl"),{update(r){s.update({frontImage:Ya(r,e),backImage:Ya(r,e,!0)}),s.replay()},flip:()=>s.flip(),destroy(){s.destroy(),i.classList.remove("is-webgl")}}):null}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
