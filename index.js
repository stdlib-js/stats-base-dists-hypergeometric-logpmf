// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function v(r){return r!=r}var s=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function b(r){return r===s||r===p}function w(r){return Math.abs(r)}var d,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,h=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return A.call(r);t=r[_],u=_,n=null!=(o=r)&&h.call(o,u);try{r[_]=void 0}catch(n){return A.call(r)}return e=A.call(r),n?r[_]=t:delete r[_],e}:function(r){return A.call(r)},g="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(g&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O=d,S="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),t=n,r=(S&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,L=T,M="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y,C={uint16:x,uint8:L};(Y=new C.uint16(1))[0]=4660;var q=52===new C.uint8(Y.buffer)[0],z=!0===q?1:0,B=new H(1),D=new O(B.buffer);function J(r){return B[0]=r,D[z]}var K=!0===q?1:0,Q=new H(1),R=new O(Q.buffer),X=1023,Z=.6931471803691238,$=1.9082149292705877e-10,rr=1048575;function nr(r){var n,t,e,o,u,i,f,a,c,l,y,s;return 0===r?p:v(r)||r<0?NaN:(u=0,(t=J(r))<1048576&&(u-=54,t=J(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-X|0,u+=(a=614244+(t&=rr)&1048576|0)>>20|0,f=(r=function(r,n){return Q[0]=r,R[K]=n>>>0,Q[0]}(r,t|1072693248^a))-1,(rr&2+t)<3?0===f?0===u?0:u*Z+u*$:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Z-(i-u*$-f)):(a=t-398458|0,c=440401-t|0,o=(y=(s=(l=f/(2+f))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Z-(n-(l*(n+i)+u*$)-f)):0===u?f-l*(f-i):u*Z-(l*(f-i)-u*$-f))))}var tr=Math.ceil;function er(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var or=-.16666666666666632;function ur(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(or+o*t):r-(o*(.5*n-e*t)-n-e*or)}var ir,fr,ar=!0===q?0:1,cr=new H(1),lr=new O(cr.buffer);!0===q?(ir=1,fr=0):(ir=0,fr=1);var yr,vr,sr={HIGH:ir,LOW:fr},pr=new H(1),br=new O(pr.buffer),wr=sr.HIGH,dr=sr.LOW;function Nr(r,n){return br[wr]=r,br[dr]=n,pr[0]}!0===q?(yr=1,vr=0):(yr=0,vr=1);var Ar={HIGH:yr,LOW:vr},hr=new H(1),_r=new O(hr.buffer),mr=Ar.HIGH,gr=Ar.LOW;function Ur(r,n,t,e){return hr[0]=r,n[e]=_r[mr],n[e+t]=_r[gr],n}function jr(r){return Ur(r,[0,0],1,0)}c(jr,"assign",Ur);var Ir=[0,0];function Or(r,n){var t,e;return jr.assign(r,Ir,1,0),t=Ir[0],t&=2147483647,e=J(n),Nr(t|=e&=2147483648,Ir[1])}function Sr(r,n,t,e){return v(r)||b(r)?(n[e]=r,n[e+t]=0,n):0!==r&&w(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Fr=[0,0];function Tr(r,n){var t,e;return 0===n||0===r||v(r)||b(r)?r:(Sr(r,Er,1,0),n+=Er[1],n+=function(r){var n=J(r);return(n=(2146435072&n)>>>20)-X|0}(r=Er[0]),n<-1074?Or(0,r):n>1023?r<0?p:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,jr.assign(r,Fr,1,0),t=Fr[0],t&=2148532223,e*Nr(t|=n+X<<20,Fr[1])))}function Hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],kr=16777216,xr=5.960464477539063e-8,Lr=Hr(20),Mr=Hr(20),Vr=Hr(20),Wr=Hr(20);function Yr(r,n,t,e,o,u,i,f,a){var c,y,v,s,p,b,w,d,N;for(s=u,N=e[t],d=t,p=0;d>0;p++)y=xr*N|0,Wr[p]=N-kr*y|0,N=e[d-1]+y,d-=1;if(N=Tr(N,o),N-=8*l(.125*N),N-=w=0|N,v=0,o>0?(w+=p=Wr[t-1]>>24-o,Wr[t-1]-=p<<24-o,v=Wr[t-1]>>23-o):0===o?v=Wr[t-1]>>23:N>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)d=Wr[p],0===c?0!==d&&(c=1,Wr[p]=16777216-d):Wr[p]=16777215-d;if(o>0)switch(o){case 1:Wr[t-1]&=8388607;break;case 2:Wr[t-1]&=4194303}2===v&&(N=1-N,0!==c&&(N-=Tr(1,o)))}if(0===N){for(d=0,p=t-1;p>=u;p--)d|=Wr[p];if(0===d){for(b=1;0===Wr[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=Gr[i+p],y=0,d=0;d<=f;d++)y+=r[d]*a[f+(p-d)];e[p]=y}return Yr(r,n,t+=b,e,o,u,i,f,a)}}if(0===N)for(t-=1,o-=24;0===Wr[t];)t-=1,o-=24;else(N=Tr(N,-o))>=kr?(y=xr*N|0,Wr[t]=N-kr*y|0,o+=24,Wr[t+=1]=y):Wr[t]=0|N;for(y=Tr(1,o),p=t;p>=0;p--)e[p]=y*Wr[p],y*=xr;for(p=t;p>=0;p--){for(y=0,b=0;b<=s&&b<=t-p;b++)y+=Pr[b]*e[p+b];Vr[t-p]=y}for(y=0,p=t;p>=0;p--)y+=Vr[p];for(n[0]=0===v?y:-y,y=Vr[0]-y,p=1;p<=t;p++)y+=Vr[p];return n[1]=0===v?y:-y,7&w}function Cr(r,n,t,e){var o,u,i,f,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Lr[a]=c<0?0:Gr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Lr[i+(a-c)];Mr[a]=o}return Yr(r,n,4,Mr,f,4,u,i,Lr)}var qr=Math.round;function zr(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=qr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(J(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(J(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Br=1.5707963267341256,Dr=6077100506506192e-26,Jr=2*Dr,Kr=3*Dr,Qr=4*Dr,Rr=[0,0,0],Xr=[0,0];function Zr(r,n){var t,e,o,u,i,f,a;if((o=2147483647&J(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?zr(r,o,n):o<=1073928572?r>0?(a=r-Br,n[0]=a-Dr,n[1]=a-n[0]-Dr,1):(a=r+Br,n[0]=a+Dr,n[1]=a-n[0]+Dr,-1):r>0?(a=r-2*Br,n[0]=a-Jr,n[1]=a-n[0]-Jr,2):(a=r+2*Br,n[0]=a+Jr,n[1]=a-n[0]+Jr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?zr(r,o,n):r>0?(a=r-3*Br,n[0]=a-Kr,n[1]=a-n[0]-Kr,3):(a=r+3*Br,n[0]=a+Kr,n[1]=a-n[0]+Kr,-3):1075388923===o?zr(r,o,n):r>0?(a=r-4*Br,n[0]=a-Qr,n[1]=a-n[0]-Qr,4):(a=r+4*Br,n[0]=a+Qr,n[1]=a-n[0]+Qr,-4);if(o<1094263291)return zr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return cr[0]=r,lr[ar]}(r),a=Nr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Rr[i]=0|a,a=16777216*(a-Rr[i]);for(Rr[2]=a,u=3;0===Rr[u-1];)u-=1;return f=Cr(Rr,Xr,e,u),r<0?(n[0]=-Xr[0],n[1]=-Xr[1],-f):(n[0]=Xr[0],n[1]=Xr[1],f)}var $r=[0,0];function rn(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1044381696?1:er(r,0);if(n>=2146435072)return NaN;switch(3&Zr(r,$r)){case 0:return er($r[0],$r[1]);case 1:return-ur($r[0],$r[1]);case 2:return-er($r[0],$r[1]);default:return ur($r[0],$r[1])}}var nn=[0,0];function tn(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ur(r,0);if(n>=2146435072)return NaN;switch(3&Zr(r,nn)){case 0:return ur(nn[0],nn[1]);case 1:return er(nn[0],nn[1]);case 2:return-ur(nn[0],nn[1]);default:return-er(nn[0],nn[1])}}var en=3.141592653589793,on=1.4616321449683622,un=1.4616321449683622;function fn(r){var n,t,e,o,u,i,f,a,c,y,p,d,N;if(v(r)||b(r))return r;if(0===r)return s;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-nr(r);if(n){if(r>=4503599627370496)return s;if(c=function(r){var n,t;return v(r)||b(r)?NaN:0===(n=w(t=r%2))||1===n?Or(0,t):n<.25?tn(en*t):n<.75?Or(rn(en*(n=.5-n)),t):n<1.25?(t=Or(1,t)-t,tn(en*t)):n<1.75?-Or(rn(en*(n-=1.5)),t):(t-=Or(2,t),tn(en*t))}(r),0===c)return s;t=nr(en/w(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(N=-nr(r),r>=on-1+.27?(p=1-r,e=0):r>=on-1-.27?(p=r-(un-1),e=1):(p=r,e=2)):(N=0,r>=on+.27?(p=2-r,e=0):r>=on-.27?(p=r-un,e=1):(p=r-1,e=2)),e){case 0:i=.07721566490153287+(d=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(d),u=d*(.3224670334241136+d*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(d)),N+=(f=p*i+u)-.5*p;break;case 1:i=.48383612272381005+(y=(d=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),u=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,o=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),N+=(f=d*i-(-3638676997039505e-33-y*(u+p*o)))-.12148629053584961;break;case 2:i=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),u=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),N+=-.5*p+i/u}else if(r<8)switch(e=function(r){return r<0?tr(r):l(r)}(r),f=(p=r-e)*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),a=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),N=.5*p+f/a,d=1,e){case 7:d*=p+6;case 6:d*=p+5;case 5:d*=p+4;case 4:d*=p+3;case 3:N+=nr(d*=p+2)}else r<0x400000000000000?(c=nr(r),y=.4189385332046727+(d=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=d*d),N=(r-.5)*(c-1)+y):N=r*(nr(r)-1);return n&&(N=t-N),N}function an(r){return function(r){return l(r)===r&&r<0}(r)?NaN:fn(r+1)}function cn(r){return 0===r&&1/r===s}function ln(r,n){var t,e,o,u;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===s||n===s?s:r===n&&0===r?cn(r)?r:n:r>n?r:n;for(e=p,u=0;u<t;u++){if(v(o=arguments[u])||o===s)return o;(o>e||o===e&&0===o&&cn(o))&&(e=o)}return e}function yn(r){return 0===r&&1/r===p}function vn(r,n){var t,e,o,u;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===p||n===p?p:r===n&&0===r?yn(r)?r:n:r<n?r:n;for(e=s,u=0;u<t;u++){if(v(o=arguments[u])||o===p)return o;(o<e||o===e&&0===o&&yn(o))&&(e=o)}return e}function sn(r,n,t,e){var o,u,i,f;return v(r)||v(n)||v(t)||v(e)||!y(n)||!y(t)||!y(e)||n===s||t===s||t>n||e>n?NaN:(f=ln(0,e+t-n),i=vn(t,e),y(r)&&f<=r&&r<=i?(u=an(e)+an(t)+an(n-e)+an(n-t),o=an(n)+an(r)+an(e-r),u-(o+=an(t-r)+an(n-t+r-e))):p)}return c(sn,"factory",(function(r,n,t){var e,o,u;return v(r)||v(n)||v(t)||!y(r)||!y(n)||!y(t)||r===s||n===s||n>r||t>r?(u=NaN,function(){return u}):(o=ln(0,t+n-r),e=vn(n,t),function(u){var i,f;return v(u)?NaN:y(u)&&o<=u&&u<=e?(f=an(t)+an(n)+an(r-t)+an(r-n),i=an(r)+an(u)+an(t-u),i+=an(n-u)+an(r-n+u-t),f-i):p})})),sn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpmf=n();
//# sourceMappingURL=index.js.map
