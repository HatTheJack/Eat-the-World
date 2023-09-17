(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sr(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const K={},lt=[],we=()=>{},Hs=()=>!1,Us=/^on[^a-z]/,dn=e=>Us.test(e),or=e=>e.startsWith("onUpdate:"),Z=Object.assign,lr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ws=Object.prototype.hasOwnProperty,B=(e,t)=>Ws.call(e,t),S=Array.isArray,at=e=>hn(e)==="[object Map]",Ei=e=>hn(e)==="[object Set]",z=e=>typeof e=="function",J=e=>typeof e=="string",ar=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Ii=e=>Y(e)&&z(e.then)&&z(e.catch),Ai=Object.prototype.toString,hn=e=>Ai.call(e),Ks=e=>hn(e).slice(8,-1),Ci=e=>hn(e)==="[object Object]",fr=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vt=sr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ys=/-(\w)/g,Te=pn(e=>e.replace(Ys,(t,n)=>n?n.toUpperCase():"")),qs=/\B([A-Z])/g,pt=pn(e=>e.replace(qs,"-$1").toLowerCase()),mn=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mn=pn(e=>e?`on${mn(e)}`:""),Pt=(e,t)=>!Object.is(e,t),kn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},tn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Rr;const $n=()=>Rr||(Rr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(S(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=J(r)?Qs(r):gn(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(J(e))return e;if(Y(e))return e}}const Js=/;(?![^(]*\))/g,Vs=/:([^]+)/,Zs=/\/\*[^]*?\*\//g;function Qs(e){const t={};return e.replace(Zs,"").split(Js).forEach(n=>{if(n){const r=n.split(Vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ge(e){let t="";if(J(e))t=e;else if(S(e))for(let n=0;n<e.length;n++){const r=Ge(e[n]);r&&(t+=r+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eo=sr(Gs);function Pi(e){return!!e||e===""}const ce=e=>J(e)?e:e==null?"":S(e)||Y(e)&&(e.toString===Ai||!z(e.toString))?JSON.stringify(e,Ti,2):String(e),Ti=(e,t)=>t&&t.__v_isRef?Ti(e,t.value):at(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ei(t)?{[`Set(${t.size})`]:[...t.values()]}:Y(t)&&!S(t)&&!Ci(t)?String(t):t;let be;class to{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function no(e,t=be){t&&t.active&&t.effects.push(e)}function ro(){return be}const cr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mi=e=>(e.w&Ke)>0,ki=e=>(e.n&Ke)>0,io=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ke},so=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Mi(i)&&!ki(i)?i.delete(e):t[n++]=i,i.w&=~Ke,i.n&=~Ke}t.length=n}},Hn=new WeakMap;let xt=0,Ke=1;const Un=30;let ye;const tt=Symbol(""),Wn=Symbol("");class ur{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,no(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Ue;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Ue=!0,Ke=1<<++xt,xt<=Un?io(this):zr(this),this.fn()}finally{xt<=Un&&so(this),Ke=1<<--xt,ye=this.parent,Ue=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(zr(this),this.onStop&&this.onStop(),this.active=!1)}}function zr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ue=!0;const Si=[];function mt(){Si.push(Ue),Ue=!1}function gt(){const e=Si.pop();Ue=e===void 0?!0:e}function ae(e,t,n){if(Ue&&ye){let r=Hn.get(e);r||Hn.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=cr()),Ni(i)}}function Ni(e,t){let n=!1;xt<=Un?ki(e)||(e.n|=Ke,n=!Mi(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function ze(e,t,n,r,i,s){const o=Hn.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&S(e)){const f=Number(r);o.forEach((u,d)=>{(d==="length"||d>=f)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":S(e)?fr(n)&&l.push(o.get("length")):(l.push(o.get(tt)),at(e)&&l.push(o.get(Wn)));break;case"delete":S(e)||(l.push(o.get(tt)),at(e)&&l.push(o.get(Wn)));break;case"set":at(e)&&l.push(o.get(tt));break}if(l.length===1)l[0]&&Kn(l[0]);else{const f=[];for(const u of l)u&&f.push(...u);Kn(cr(f))}}function Kn(e,t){const n=S(e)?e:[...e];for(const r of n)r.computed&&jr(r);for(const r of n)r.computed||jr(r)}function jr(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const oo=sr("__proto__,__v_isRef,__isVue"),Fi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ar)),lo=dr(),ao=dr(!1,!0),fo=dr(!0),Lr=co();function co(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let s=0,o=this.length;s<o;s++)ae(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){mt();const r=$(this)[t].apply(this,n);return gt(),r}}),e}function uo(e){const t=$(this);return ae(t,"has",e),t.hasOwnProperty(e)}function dr(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?Po:Bi:t?Li:ji).get(r))return r;const o=S(r);if(!e){if(o&&B(Lr,i))return Reflect.get(Lr,i,s);if(i==="hasOwnProperty")return uo}const l=Reflect.get(r,i,s);return(ar(i)?Fi.has(i):oo(i))||(e||ae(r,"get",i),t)?l:te(l)?o&&fr(i)?l:l.value:Y(l)?e?Di(l):mr(l):l}}const ho=Ri(),po=Ri(!0);function Ri(e=!1){return function(n,r,i,s){let o=n[r];if(ut(o)&&te(o)&&!te(i))return!1;if(!e&&(!nn(i)&&!ut(i)&&(o=$(o),i=$(i)),!S(n)&&te(o)&&!te(i)))return o.value=i,!0;const l=S(n)&&fr(r)?Number(r)<n.length:B(n,r),f=Reflect.set(n,r,i,s);return n===$(s)&&(l?Pt(i,o)&&ze(n,"set",r,i):ze(n,"add",r,i)),f}}function mo(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function go(e,t){const n=Reflect.has(e,t);return(!ar(t)||!Fi.has(t))&&ae(e,"has",t),n}function vo(e){return ae(e,"iterate",S(e)?"length":tt),Reflect.ownKeys(e)}const zi={get:lo,set:ho,deleteProperty:mo,has:go,ownKeys:vo},bo={get:fo,set(e,t){return!0},deleteProperty(e,t){return!0}},yo=Z({},zi,{get:ao,set:po}),hr=e=>e,vn=e=>Reflect.getPrototypeOf(e);function Dt(e,t,n=!1,r=!1){e=e.__v_raw;const i=$(e),s=$(t);n||(t!==s&&ae(i,"get",t),ae(i,"get",s));const{has:o}=vn(i),l=r?hr:n?vr:Tt;if(o.call(i,t))return l(e.get(t));if(o.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function $t(e,t=!1){const n=this.__v_raw,r=$(n),i=$(e);return t||(e!==i&&ae(r,"has",e),ae(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ht(e,t=!1){return e=e.__v_raw,!t&&ae($(e),"iterate",tt),Reflect.get(e,"size",e)}function Br(e){e=$(e);const t=$(this);return vn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Dr(e,t){t=$(t);const n=$(this),{has:r,get:i}=vn(n);let s=r.call(n,e);s||(e=$(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Pt(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function $r(e){const t=$(this),{has:n,get:r}=vn(t);let i=n.call(t,e);i||(e=$(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ze(t,"delete",e,void 0),s}function Hr(){const e=$(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function Ut(e,t){return function(r,i){const s=this,o=s.__v_raw,l=$(o),f=t?hr:e?vr:Tt;return!e&&ae(l,"iterate",tt),o.forEach((u,d)=>r.call(i,f(u),f(d),s))}}function Wt(e,t,n){return function(...r){const i=this.__v_raw,s=$(i),o=at(s),l=e==="entries"||e===Symbol.iterator&&o,f=e==="keys"&&o,u=i[e](...r),d=n?hr:t?vr:Tt;return!t&&ae(s,"iterate",f?Wn:tt),{next(){const{value:y,done:g}=u.next();return g?{value:y,done:g}:{value:l?[d(y[0]),d(y[1])]:d(y),done:g}},[Symbol.iterator](){return this}}}}function De(e){return function(...t){return e==="delete"?!1:this}}function _o(){const e={get(s){return Dt(this,s)},get size(){return Ht(this)},has:$t,add:Br,set:Dr,delete:$r,clear:Hr,forEach:Ut(!1,!1)},t={get(s){return Dt(this,s,!1,!0)},get size(){return Ht(this)},has:$t,add:Br,set:Dr,delete:$r,clear:Hr,forEach:Ut(!1,!0)},n={get(s){return Dt(this,s,!0)},get size(){return Ht(this,!0)},has(s){return $t.call(this,s,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Ut(!0,!1)},r={get(s){return Dt(this,s,!0,!0)},get size(){return Ht(this,!0)},has(s){return $t.call(this,s,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Ut(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Wt(s,!1,!1),n[s]=Wt(s,!0,!1),t[s]=Wt(s,!1,!0),r[s]=Wt(s,!0,!0)}),[e,n,t,r]}const[wo,xo,Oo,Eo]=_o();function pr(e,t){const n=t?e?Eo:Oo:e?xo:wo;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(B(n,i)&&i in r?n:r,i,s)}const Io={get:pr(!1,!1)},Ao={get:pr(!1,!0)},Co={get:pr(!0,!1)},ji=new WeakMap,Li=new WeakMap,Bi=new WeakMap,Po=new WeakMap;function To(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mo(e){return e.__v_skip||!Object.isExtensible(e)?0:To(Ks(e))}function mr(e){return ut(e)?e:gr(e,!1,zi,Io,ji)}function ko(e){return gr(e,!1,yo,Ao,Li)}function Di(e){return gr(e,!0,bo,Co,Bi)}function gr(e,t,n,r,i){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Mo(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function ft(e){return ut(e)?ft(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function nn(e){return!!(e&&e.__v_isShallow)}function $i(e){return ft(e)||ut(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function Hi(e){return tn(e,"__v_skip",!0),e}const Tt=e=>Y(e)?mr(e):e,vr=e=>Y(e)?Di(e):e;function Ui(e){Ue&&ye&&(e=$(e),Ni(e.dep||(e.dep=cr())))}function Wi(e,t){e=$(e);const n=e.dep;n&&Kn(n)}function te(e){return!!(e&&e.__v_isRef===!0)}function So(e){return No(e,!1)}function No(e,t){return te(e)?e:new Fo(e,t)}class Fo{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:Tt(t)}get value(){return Ui(this),this._value}set value(t){const n=this.__v_isShallow||nn(t)||ut(t);t=n?t:$(t),Pt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Tt(t),Wi(this))}}function Ro(e){return te(e)?e.value:e}const zo={get:(e,t,n)=>Ro(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return te(i)&&!te(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ki(e){return ft(e)?e:new Proxy(e,zo)}class jo{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ur(t,()=>{this._dirty||(this._dirty=!0,Wi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=$(this);return Ui(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Lo(e,t,n=!1){let r,i;const s=z(e);return s?(r=e,i=we):(r=e.get,i=e.set),new jo(r,i,s||!i,n)}function We(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){bn(s,t,n)}return i}function xe(e,t,n,r){if(z(e)){const s=We(e,t,n,r);return s&&Ii(s)&&s.catch(o=>{bn(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(xe(e[s],t,n,r));return i}function bn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,l=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,l)===!1)return}s=s.parent}const f=t.appContext.config.errorHandler;if(f){We(f,null,10,[e,o,l]);return}}Bo(e,n,i,r)}function Bo(e,t,n,r=!0){console.error(e)}let Mt=!1,Yn=!1;const ee=[];let Ce=0;const ct=[];let Fe=null,Ze=0;const Yi=Promise.resolve();let br=null;function Do(e){const t=br||Yi;return e?t.then(this?e.bind(this):e):t}function $o(e){let t=Ce+1,n=ee.length;for(;t<n;){const r=t+n>>>1;kt(ee[r])<e?t=r+1:n=r}return t}function yr(e){(!ee.length||!ee.includes(e,Mt&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?ee.push(e):ee.splice($o(e.id),0,e),qi())}function qi(){!Mt&&!Yn&&(Yn=!0,br=Yi.then(Ji))}function Ho(e){const t=ee.indexOf(e);t>Ce&&ee.splice(t,1)}function Uo(e){S(e)?ct.push(...e):(!Fe||!Fe.includes(e,e.allowRecurse?Ze+1:Ze))&&ct.push(e),qi()}function Ur(e,t=Mt?Ce+1:0){for(;t<ee.length;t++){const n=ee[t];n&&n.pre&&(ee.splice(t,1),t--,n())}}function Xi(e){if(ct.length){const t=[...new Set(ct)];if(ct.length=0,Fe){Fe.push(...t);return}for(Fe=t,Fe.sort((n,r)=>kt(n)-kt(r)),Ze=0;Ze<Fe.length;Ze++)Fe[Ze]();Fe=null,Ze=0}}const kt=e=>e.id==null?1/0:e.id,Wo=(e,t)=>{const n=kt(e)-kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ji(e){Yn=!1,Mt=!0,ee.sort(Wo);const t=we;try{for(Ce=0;Ce<ee.length;Ce++){const n=ee[Ce];n&&n.active!==!1&&We(n,null,14)}}finally{Ce=0,ee.length=0,Xi(),Mt=!1,br=null,(ee.length||ct.length)&&Ji()}}function Ko(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:y,trim:g}=r[d]||K;g&&(i=n.map(v=>J(v)?v.trim():v)),y&&(i=n.map(Xs))}let l,f=r[l=Mn(t)]||r[l=Mn(Te(t))];!f&&s&&(f=r[l=Mn(pt(t))]),f&&xe(f,e,6,i);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,xe(u,e,6,i)}}function Vi(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},l=!1;if(!z(e)){const f=u=>{const d=Vi(u,t,!0);d&&(l=!0,Z(o,d))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!s&&!l?(Y(e)&&r.set(e,null),null):(S(s)?s.forEach(f=>o[f]=null):Z(o,s),Y(e)&&r.set(e,o),o)}function yn(e,t){return!e||!dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,pt(t))||B(e,t))}let he=null,_n=null;function rn(e){const t=he;return he=e,_n=e&&e.type.__scopeId||null,t}function Yo(e){_n=e}function qo(){_n=null}function Xo(e,t=he,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ei(-1);const s=rn(t);let o;try{o=e(...i)}finally{rn(s),r._d&&ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sn(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:f,emit:u,render:d,renderCache:y,data:g,setupState:v,ctx:R,inheritAttrs:I}=e;let F,O;const C=rn(e);try{if(n.shapeFlag&4){const P=i||r;F=Ae(d.call(P,P,y,s,v,g,R)),O=f}else{const P=t;F=Ae(P.length>1?P(s,{attrs:f,slots:l,emit:u}):P(s,null)),O=t.props?f:Jo(f)}}catch(P){At.length=0,bn(P,e,1),F=pe(St)}let L=F;if(O&&I!==!1){const P=Object.keys(O),{shapeFlag:V}=L;P.length&&V&7&&(o&&P.some(or)&&(O=Vo(O,o)),L=dt(L,O))}return n.dirs&&(L=dt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,rn(C),F}const Jo=e=>{let t;for(const n in e)(n==="class"||n==="style"||dn(n))&&((t||(t={}))[n]=e[n]);return t},Vo=(e,t)=>{const n={};for(const r in e)(!or(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zo(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:f}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return r?Wr(r,o,u):!!o;if(f&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const g=d[y];if(o[g]!==r[g]&&!yn(u,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Wr(r,o,u):!0:!!o;return!1}function Wr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!yn(n,s))return!0}return!1}function Qo({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Go=e=>e.__isSuspense;function el(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Uo(e)}const Kt={};function Zt(e,t,n){return Zi(e,t,n)}function Zi(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=K){var l;const f=ro()===((l=G)==null?void 0:l.scope)?G:null;let u,d=!1,y=!1;if(te(e)?(u=()=>e.value,d=nn(e)):ft(e)?(u=()=>e,r=!0):S(e)?(y=!0,d=e.some(P=>ft(P)||nn(P)),u=()=>e.map(P=>{if(te(P))return P.value;if(ft(P))return et(P);if(z(P))return We(P,f,2)})):z(e)?t?u=()=>We(e,f,2):u=()=>{if(!(f&&f.isUnmounted))return g&&g(),xe(e,f,3,[v])}:u=we,t&&r){const P=u;u=()=>et(P())}let g,v=P=>{g=C.onStop=()=>{We(P,f,4)}},R;if(Ft)if(v=we,t?n&&xe(t,f,3,[u(),y?[]:void 0,v]):u(),i==="sync"){const P=Zl();R=P.__watcherHandles||(P.__watcherHandles=[])}else return we;let I=y?new Array(e.length).fill(Kt):Kt;const F=()=>{if(C.active)if(t){const P=C.run();(r||d||(y?P.some((V,Q)=>Pt(V,I[Q])):Pt(P,I)))&&(g&&g(),xe(t,f,3,[P,I===Kt?void 0:y&&I[0]===Kt?[]:I,v]),I=P)}else C.run()};F.allowRecurse=!!t;let O;i==="sync"?O=F:i==="post"?O=()=>oe(F,f&&f.suspense):(F.pre=!0,f&&(F.id=f.uid),O=()=>yr(F));const C=new ur(u,O);t?n?F():I=C.run():i==="post"?oe(C.run.bind(C),f&&f.suspense):C.run();const L=()=>{C.stop(),f&&f.scope&&lr(f.scope.effects,C)};return R&&R.push(L),L}function tl(e,t,n){const r=this.proxy,i=J(e)?e.includes(".")?Qi(r,e):()=>r[e]:e.bind(r,r);let s;z(t)?s=t:(s=t.handler,n=t);const o=G;ht(this);const l=Zi(i,s.bind(r),n);return o?ht(o):nt(),l}function Qi(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function et(e,t){if(!Y(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),te(e))et(e.value,t);else if(S(e))for(let n=0;n<e.length;n++)et(e[n],t);else if(Ei(e)||at(e))e.forEach(n=>{et(n,t)});else if(Ci(e))for(const n in e)et(e[n],t);return e}function Yt(e,t){const n=he;if(n===null)return e;const r=En(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,l,f,u=K]=t[s];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&et(l),i.push({dir:o,instance:r,value:l,oldValue:void 0,arg:f,modifiers:u}))}return e}function Je(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let f=l.dir[r];f&&(mt(),xe(f,n,8,[e.el,l,e,t]),gt())}}function nl(e,t){return z(e)?(()=>Z({name:e.name},t,{setup:e}))():e}const Qt=e=>!!e.type.__asyncLoader,Gi=e=>e.type.__isKeepAlive;function rl(e,t){es(e,"a",t)}function il(e,t){es(e,"da",t)}function es(e,t,n=G){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(wn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Gi(i.parent.vnode)&&sl(r,t,n,i),i=i.parent}}function sl(e,t,n,r){const i=wn(t,e,r,!0);rs(()=>{lr(r[t],i)},n)}function wn(e,t,n=G,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;mt(),ht(n);const l=xe(t,n,e,o);return nt(),gt(),l});return r?i.unshift(s):i.push(s),s}}const Be=e=>(t,n=G)=>(!Ft||e==="sp")&&wn(e,(...r)=>t(...r),n),ol=Be("bm"),ts=Be("m"),ll=Be("bu"),al=Be("u"),ns=Be("bum"),rs=Be("um"),fl=Be("sp"),cl=Be("rtg"),ul=Be("rtc");function dl(e,t=G){wn("ec",e,t)}const is="components";function hl(e,t){return ml(is,e,!0,t)||e}const pl=Symbol.for("v-ndc");function ml(e,t,n=!0,r=!1){const i=he||G;if(i){const s=i.type;if(e===is){const l=ql(s,!1);if(l&&(l===t||l===Te(t)||l===mn(Te(t))))return s}const o=Kr(i[e]||s[e],t)||Kr(i.appContext[e],t);return!o&&r?s:o}}function Kr(e,t){return e&&(e[t]||e[Te(t)]||e[mn(Te(t))])}function qt(e,t,n,r){let i;const s=n&&n[r];if(S(e)||J(e)){i=new Array(e.length);for(let o=0,l=e.length;o<l;o++)i[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(Y(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s&&s[l]));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,f=o.length;l<f;l++){const u=o[l];i[l]=t(e[u],u,l,s&&s[l])}}else i=[];return n&&(n[r]=i),i}const qn=e=>e?ps(e)?En(e)||e.proxy:qn(e.parent):null,It=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qn(e.parent),$root:e=>qn(e.root),$emit:e=>e.emit,$options:e=>_r(e),$forceUpdate:e=>e.f||(e.f=()=>yr(e.update)),$nextTick:e=>e.n||(e.n=Do.bind(e.proxy)),$watch:e=>tl.bind(e)}),Nn=(e,t)=>e!==K&&!e.__isScriptSetup&&B(e,t),gl={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:f}=e;let u;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Nn(r,t))return o[t]=1,r[t];if(i!==K&&B(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&B(u,t))return o[t]=3,s[t];if(n!==K&&B(n,t))return o[t]=4,n[t];Xn&&(o[t]=0)}}const d=It[t];let y,g;if(d)return t==="$attrs"&&ae(e,"get",t),d(e);if((y=l.__cssModules)&&(y=y[t]))return y;if(n!==K&&B(n,t))return o[t]=4,n[t];if(g=f.config.globalProperties,B(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Nn(i,t)?(i[t]=n,!0):r!==K&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||e!==K&&B(e,o)||Nn(t,o)||(l=s[0])&&B(l,o)||B(r,o)||B(It,o)||B(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Yr(e){return S(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xn=!0;function vl(e){const t=_r(e),n=e.proxy,r=e.ctx;Xn=!1,t.beforeCreate&&qr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:l,provide:f,inject:u,created:d,beforeMount:y,mounted:g,beforeUpdate:v,updated:R,activated:I,deactivated:F,beforeDestroy:O,beforeUnmount:C,destroyed:L,unmounted:P,render:V,renderTracked:Q,renderTriggered:ge,errorCaptured:Me,serverPrefetch:vt,expose:de,inheritAttrs:bt,components:zt,directives:jt,filters:Cn}=t;if(u&&bl(u,r,null),o)for(const q in o){const U=o[q];z(U)&&(r[q]=U.bind(n))}if(i){const q=i.call(n,n);Y(q)&&(e.data=mr(q))}if(Xn=!0,s)for(const q in s){const U=s[q],qe=z(U)?U.bind(n,n):z(U.get)?U.get.bind(n,n):we,Lt=!z(U)&&z(U.set)?U.set.bind(n):we,Xe=He({get:qe,set:Lt});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Oe=>Xe.value=Oe})}if(l)for(const q in l)ss(l[q],r,n,q);if(f){const q=z(f)?f.call(n):f;Reflect.ownKeys(q).forEach(U=>{El(U,q[U])})}d&&qr(d,e,"c");function ne(q,U){S(U)?U.forEach(qe=>q(qe.bind(n))):U&&q(U.bind(n))}if(ne(ol,y),ne(ts,g),ne(ll,v),ne(al,R),ne(rl,I),ne(il,F),ne(dl,Me),ne(ul,Q),ne(cl,ge),ne(ns,C),ne(rs,P),ne(fl,vt),S(de))if(de.length){const q=e.exposed||(e.exposed={});de.forEach(U=>{Object.defineProperty(q,U,{get:()=>n[U],set:qe=>n[U]=qe})})}else e.exposed||(e.exposed={});V&&e.render===we&&(e.render=V),bt!=null&&(e.inheritAttrs=bt),zt&&(e.components=zt),jt&&(e.directives=jt)}function bl(e,t,n=we){S(e)&&(e=Jn(e));for(const r in e){const i=e[r];let s;Y(i)?"default"in i?s=Gt(i.from||r,i.default,!0):s=Gt(i.from||r):s=Gt(i),te(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function qr(e,t,n){xe(S(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ss(e,t,n,r){const i=r.includes(".")?Qi(n,r):()=>n[r];if(J(e)){const s=t[e];z(s)&&Zt(i,s)}else if(z(e))Zt(i,e.bind(n));else if(Y(e))if(S(e))e.forEach(s=>ss(s,t,n,r));else{const s=z(e.handler)?e.handler.bind(n):t[e.handler];z(s)&&Zt(i,s,e)}}function _r(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let f;return l?f=l:!i.length&&!n&&!r?f=t:(f={},i.length&&i.forEach(u=>sn(f,u,o,!0)),sn(f,t,o)),Y(t)&&s.set(t,f),f}function sn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&sn(e,s,n,!0),i&&i.forEach(o=>sn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=yl[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const yl={data:Xr,props:Jr,emits:Jr,methods:Ot,computed:Ot,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Ot,directives:Ot,watch:wl,provide:Xr,inject:_l};function Xr(e,t){return t?e?function(){return Z(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function _l(e,t){return Ot(Jn(e),Jn(t))}function Jn(e){if(S(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?Z(Object.create(null),e,t):t}function Jr(e,t){return e?S(e)&&S(t)?[...new Set([...e,...t])]:Z(Object.create(null),Yr(e),Yr(t??{})):t}function wl(e,t){if(!e)return t;if(!t)return e;const n=Z(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function os(){return{app:null,config:{isNativeTag:Hs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xl=0;function Ol(e,t){return function(r,i=null){z(r)||(r=Z({},r)),i!=null&&!Y(i)&&(i=null);const s=os(),o=new Set;let l=!1;const f=s.app={_uid:xl++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ql,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(f,...d)):z(u)&&(o.add(u),u(f,...d))),f},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),f},component(u,d){return d?(s.components[u]=d,f):s.components[u]},directive(u,d){return d?(s.directives[u]=d,f):s.directives[u]},mount(u,d,y){if(!l){const g=pe(r,i);return g.appContext=s,d&&t?t(g,u):e(g,u,y),l=!0,f._container=u,u.__vue_app__=f,En(g.component)||g.component.proxy}},unmount(){l&&(e(null,f._container),delete f._container.__vue_app__)},provide(u,d){return s.provides[u]=d,f},runWithContext(u){on=f;try{return u()}finally{on=null}}};return f}}let on=null;function El(e,t){if(G){let n=G.provides;const r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[e]=t}}function Gt(e,t,n=!1){const r=G||he;if(r||on){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:on._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function Il(e,t,n,r=!1){const i={},s={};tn(s,On,1),e.propsDefaults=Object.create(null),ls(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:ko(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Al(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,l=$(i),[f]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let g=d[y];if(yn(e.emitsOptions,g))continue;const v=t[g];if(f)if(B(s,g))v!==s[g]&&(s[g]=v,u=!0);else{const R=Te(g);i[R]=Vn(f,l,R,v,e,!1)}else v!==s[g]&&(s[g]=v,u=!0)}}}else{ls(e,t,i,s)&&(u=!0);let d;for(const y in l)(!t||!B(t,y)&&((d=pt(y))===y||!B(t,d)))&&(f?n&&(n[y]!==void 0||n[d]!==void 0)&&(i[y]=Vn(f,l,y,void 0,e,!0)):delete i[y]);if(s!==l)for(const y in s)(!t||!B(t,y))&&(delete s[y],u=!0)}u&&ze(e,"set","$attrs")}function ls(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,l;if(t)for(let f in t){if(Vt(f))continue;const u=t[f];let d;i&&B(i,d=Te(f))?!s||!s.includes(d)?n[d]=u:(l||(l={}))[d]=u:yn(e.emitsOptions,f)||(!(f in r)||u!==r[f])&&(r[f]=u,o=!0)}if(s){const f=$(n),u=l||K;for(let d=0;d<s.length;d++){const y=s[d];n[y]=Vn(i,f,y,u[y],e,!B(u,y))}}return o}function Vn(e,t,n,r,i,s){const o=e[n];if(o!=null){const l=B(o,"default");if(l&&r===void 0){const f=o.default;if(o.type!==Function&&!o.skipFactory&&z(f)){const{propsDefaults:u}=i;n in u?r=u[n]:(ht(i),r=u[n]=f.call(null,t),nt())}else r=f}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===pt(n))&&(r=!0))}return r}function as(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},l=[];let f=!1;if(!z(e)){const d=y=>{f=!0;const[g,v]=as(y,t,!0);Z(o,g),v&&l.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!f)return Y(e)&&r.set(e,lt),lt;if(S(s))for(let d=0;d<s.length;d++){const y=Te(s[d]);Vr(y)&&(o[y]=K)}else if(s)for(const d in s){const y=Te(d);if(Vr(y)){const g=s[d],v=o[y]=S(g)||z(g)?{type:g}:Z({},g);if(v){const R=Gr(Boolean,v.type),I=Gr(String,v.type);v[0]=R>-1,v[1]=I<0||R<I,(R>-1||B(v,"default"))&&l.push(y)}}}const u=[o,l];return Y(e)&&r.set(e,u),u}function Vr(e){return e[0]!=="$"}function Zr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qr(e,t){return Zr(e)===Zr(t)}function Gr(e,t){return S(t)?t.findIndex(n=>Qr(n,e)):z(t)&&Qr(t,e)?0:-1}const fs=e=>e[0]==="_"||e==="$stable",wr=e=>S(e)?e.map(Ae):[Ae(e)],Cl=(e,t,n)=>{if(t._n)return t;const r=Xo((...i)=>wr(t(...i)),n);return r._c=!1,r},cs=(e,t,n)=>{const r=e._ctx;for(const i in e){if(fs(i))continue;const s=e[i];if(z(s))t[i]=Cl(i,s,r);else if(s!=null){const o=wr(s);t[i]=()=>o}}},us=(e,t)=>{const n=wr(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),tn(t,"_",n)):cs(t,e.slots={})}else e.slots={},t&&us(e,t);tn(e.slots,On,1)},Tl=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=K;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(Z(i,t),!n&&l===1&&delete i._):(s=!t.$stable,cs(t,i)),o=t}else t&&(us(e,t),o={default:1});if(s)for(const l in i)!fs(l)&&!(l in o)&&delete i[l]};function Zn(e,t,n,r,i=!1){if(S(e)){e.forEach((g,v)=>Zn(g,t&&(S(t)?t[v]:t),n,r,i));return}if(Qt(r)&&!i)return;const s=r.shapeFlag&4?En(r.component)||r.component.proxy:r.el,o=i?null:s,{i:l,r:f}=e,u=t&&t.r,d=l.refs===K?l.refs={}:l.refs,y=l.setupState;if(u!=null&&u!==f&&(J(u)?(d[u]=null,B(y,u)&&(y[u]=null)):te(u)&&(u.value=null)),z(f))We(f,l,12,[o,d]);else{const g=J(f),v=te(f);if(g||v){const R=()=>{if(e.f){const I=g?B(y,f)?y[f]:d[f]:f.value;i?S(I)&&lr(I,s):S(I)?I.includes(s)||I.push(s):g?(d[f]=[s],B(y,f)&&(y[f]=d[f])):(f.value=[s],e.k&&(d[e.k]=f.value))}else g?(d[f]=o,B(y,f)&&(y[f]=o)):v&&(f.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,oe(R,n)):R()}}}const oe=el;function Ml(e){return kl(e)}function kl(e,t){const n=$n();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:f,setText:u,setElementText:d,parentNode:y,nextSibling:g,setScopeId:v=we,insertStaticContent:R}=e,I=(a,c,h,m=null,p=null,w=null,E=!1,_=null,x=!!c.dynamicChildren)=>{if(a===c)return;a&&!_t(a,c)&&(m=Bt(a),Oe(a,p,w,!0),a=null),c.patchFlag===-2&&(x=!1,c.dynamicChildren=null);const{type:b,ref:T,shapeFlag:A}=c;switch(b){case xn:F(a,c,h,m);break;case St:O(a,c,h,m);break;case Fn:a==null&&C(c,h,m,E);break;case le:zt(a,c,h,m,p,w,E,_,x);break;default:A&1?V(a,c,h,m,p,w,E,_,x):A&6?jt(a,c,h,m,p,w,E,_,x):(A&64||A&128)&&b.process(a,c,h,m,p,w,E,_,x,rt)}T!=null&&p&&Zn(T,a&&a.ref,w,c||a,!c)},F=(a,c,h,m)=>{if(a==null)r(c.el=l(c.children),h,m);else{const p=c.el=a.el;c.children!==a.children&&u(p,c.children)}},O=(a,c,h,m)=>{a==null?r(c.el=f(c.children||""),h,m):c.el=a.el},C=(a,c,h,m)=>{[a.el,a.anchor]=R(a.children,c,h,m,a.el,a.anchor)},L=({el:a,anchor:c},h,m)=>{let p;for(;a&&a!==c;)p=g(a),r(a,h,m),a=p;r(c,h,m)},P=({el:a,anchor:c})=>{let h;for(;a&&a!==c;)h=g(a),i(a),a=h;i(c)},V=(a,c,h,m,p,w,E,_,x)=>{E=E||c.type==="svg",a==null?Q(c,h,m,p,w,E,_,x):vt(a,c,p,w,E,_,x)},Q=(a,c,h,m,p,w,E,_)=>{let x,b;const{type:T,props:A,shapeFlag:M,transition:N,dirs:j}=a;if(x=a.el=o(a.type,w,A&&A.is,A),M&8?d(x,a.children):M&16&&Me(a.children,x,null,m,p,w&&T!=="foreignObject",E,_),j&&Je(a,null,m,"created"),ge(x,a,a.scopeId,E,m),A){for(const H in A)H!=="value"&&!Vt(H)&&s(x,H,null,A[H],w,a.children,m,p,ke);"value"in A&&s(x,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Ie(b,m,a)}j&&Je(a,null,m,"beforeMount");const W=(!p||p&&!p.pendingBranch)&&N&&!N.persisted;W&&N.beforeEnter(x),r(x,c,h),((b=A&&A.onVnodeMounted)||W||j)&&oe(()=>{b&&Ie(b,m,a),W&&N.enter(x),j&&Je(a,null,m,"mounted")},p)},ge=(a,c,h,m,p)=>{if(h&&v(a,h),m)for(let w=0;w<m.length;w++)v(a,m[w]);if(p){let w=p.subTree;if(c===w){const E=p.vnode;ge(a,E,E.scopeId,E.slotScopeIds,p.parent)}}},Me=(a,c,h,m,p,w,E,_,x=0)=>{for(let b=x;b<a.length;b++){const T=a[b]=_?$e(a[b]):Ae(a[b]);I(null,T,c,h,m,p,w,E,_)}},vt=(a,c,h,m,p,w,E)=>{const _=c.el=a.el;let{patchFlag:x,dynamicChildren:b,dirs:T}=c;x|=a.patchFlag&16;const A=a.props||K,M=c.props||K;let N;h&&Ve(h,!1),(N=M.onVnodeBeforeUpdate)&&Ie(N,h,c,a),T&&Je(c,a,h,"beforeUpdate"),h&&Ve(h,!0);const j=p&&c.type!=="foreignObject";if(b?de(a.dynamicChildren,b,_,h,m,j,w):E||U(a,c,_,null,h,m,j,w,!1),x>0){if(x&16)bt(_,c,A,M,h,m,p);else if(x&2&&A.class!==M.class&&s(_,"class",null,M.class,p),x&4&&s(_,"style",A.style,M.style,p),x&8){const W=c.dynamicProps;for(let H=0;H<W.length;H++){const X=W[H],ve=A[X],it=M[X];(it!==ve||X==="value")&&s(_,X,ve,it,p,a.children,h,m,ke)}}x&1&&a.children!==c.children&&d(_,c.children)}else!E&&b==null&&bt(_,c,A,M,h,m,p);((N=M.onVnodeUpdated)||T)&&oe(()=>{N&&Ie(N,h,c,a),T&&Je(c,a,h,"updated")},m)},de=(a,c,h,m,p,w,E)=>{for(let _=0;_<c.length;_++){const x=a[_],b=c[_],T=x.el&&(x.type===le||!_t(x,b)||x.shapeFlag&70)?y(x.el):h;I(x,b,T,null,m,p,w,E,!0)}},bt=(a,c,h,m,p,w,E)=>{if(h!==m){if(h!==K)for(const _ in h)!Vt(_)&&!(_ in m)&&s(a,_,h[_],null,E,c.children,p,w,ke);for(const _ in m){if(Vt(_))continue;const x=m[_],b=h[_];x!==b&&_!=="value"&&s(a,_,b,x,E,c.children,p,w,ke)}"value"in m&&s(a,"value",h.value,m.value)}},zt=(a,c,h,m,p,w,E,_,x)=>{const b=c.el=a?a.el:l(""),T=c.anchor=a?a.anchor:l("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:N}=c;N&&(_=_?_.concat(N):N),a==null?(r(b,h,m),r(T,h,m),Me(c.children,h,T,p,w,E,_,x)):A>0&&A&64&&M&&a.dynamicChildren?(de(a.dynamicChildren,M,h,p,w,E,_),(c.key!=null||p&&c===p.subTree)&&ds(a,c,!0)):U(a,c,h,T,p,w,E,_,x)},jt=(a,c,h,m,p,w,E,_,x)=>{c.slotScopeIds=_,a==null?c.shapeFlag&512?p.ctx.activate(c,h,m,E,x):Cn(c,h,m,p,w,E,x):Tr(a,c,x)},Cn=(a,c,h,m,p,w,E)=>{const _=a.component=Hl(a,m,p);if(Gi(a)&&(_.ctx.renderer=rt),Ul(_),_.asyncDep){if(p&&p.registerDep(_,ne),!a.el){const x=_.subTree=pe(St);O(null,x,c,h)}return}ne(_,a,c,h,p,w,E)},Tr=(a,c,h)=>{const m=c.component=a.component;if(Zo(a,c,h))if(m.asyncDep&&!m.asyncResolved){q(m,c,h);return}else m.next=c,Ho(m.update),m.update();else c.el=a.el,m.vnode=c},ne=(a,c,h,m,p,w,E)=>{const _=()=>{if(a.isMounted){let{next:T,bu:A,u:M,parent:N,vnode:j}=a,W=T,H;Ve(a,!1),T?(T.el=j.el,q(a,T,E)):T=j,A&&kn(A),(H=T.props&&T.props.onVnodeBeforeUpdate)&&Ie(H,N,T,j),Ve(a,!0);const X=Sn(a),ve=a.subTree;a.subTree=X,I(ve,X,y(ve.el),Bt(ve),a,p,w),T.el=X.el,W===null&&Qo(a,X.el),M&&oe(M,p),(H=T.props&&T.props.onVnodeUpdated)&&oe(()=>Ie(H,N,T,j),p)}else{let T;const{el:A,props:M}=c,{bm:N,m:j,parent:W}=a,H=Qt(c);if(Ve(a,!1),N&&kn(N),!H&&(T=M&&M.onVnodeBeforeMount)&&Ie(T,W,c),Ve(a,!0),A&&Tn){const X=()=>{a.subTree=Sn(a),Tn(A,a.subTree,a,p,null)};H?c.type.__asyncLoader().then(()=>!a.isUnmounted&&X()):X()}else{const X=a.subTree=Sn(a);I(null,X,h,m,a,p,w),c.el=X.el}if(j&&oe(j,p),!H&&(T=M&&M.onVnodeMounted)){const X=c;oe(()=>Ie(T,W,X),p)}(c.shapeFlag&256||W&&Qt(W.vnode)&&W.vnode.shapeFlag&256)&&a.a&&oe(a.a,p),a.isMounted=!0,c=h=m=null}},x=a.effect=new ur(_,()=>yr(b),a.scope),b=a.update=()=>x.run();b.id=a.uid,Ve(a,!0),b()},q=(a,c,h)=>{c.component=a;const m=a.vnode.props;a.vnode=c,a.next=null,Al(a,c.props,m,h),Tl(a,c.children,h),mt(),Ur(),gt()},U=(a,c,h,m,p,w,E,_,x=!1)=>{const b=a&&a.children,T=a?a.shapeFlag:0,A=c.children,{patchFlag:M,shapeFlag:N}=c;if(M>0){if(M&128){Lt(b,A,h,m,p,w,E,_,x);return}else if(M&256){qe(b,A,h,m,p,w,E,_,x);return}}N&8?(T&16&&ke(b,p,w),A!==b&&d(h,A)):T&16?N&16?Lt(b,A,h,m,p,w,E,_,x):ke(b,p,w,!0):(T&8&&d(h,""),N&16&&Me(A,h,m,p,w,E,_,x))},qe=(a,c,h,m,p,w,E,_,x)=>{a=a||lt,c=c||lt;const b=a.length,T=c.length,A=Math.min(b,T);let M;for(M=0;M<A;M++){const N=c[M]=x?$e(c[M]):Ae(c[M]);I(a[M],N,h,null,p,w,E,_,x)}b>T?ke(a,p,w,!0,!1,A):Me(c,h,m,p,w,E,_,x,A)},Lt=(a,c,h,m,p,w,E,_,x)=>{let b=0;const T=c.length;let A=a.length-1,M=T-1;for(;b<=A&&b<=M;){const N=a[b],j=c[b]=x?$e(c[b]):Ae(c[b]);if(_t(N,j))I(N,j,h,null,p,w,E,_,x);else break;b++}for(;b<=A&&b<=M;){const N=a[A],j=c[M]=x?$e(c[M]):Ae(c[M]);if(_t(N,j))I(N,j,h,null,p,w,E,_,x);else break;A--,M--}if(b>A){if(b<=M){const N=M+1,j=N<T?c[N].el:m;for(;b<=M;)I(null,c[b]=x?$e(c[b]):Ae(c[b]),h,j,p,w,E,_,x),b++}}else if(b>M)for(;b<=A;)Oe(a[b],p,w,!0),b++;else{const N=b,j=b,W=new Map;for(b=j;b<=M;b++){const fe=c[b]=x?$e(c[b]):Ae(c[b]);fe.key!=null&&W.set(fe.key,b)}let H,X=0;const ve=M-j+1;let it=!1,Sr=0;const yt=new Array(ve);for(b=0;b<ve;b++)yt[b]=0;for(b=N;b<=A;b++){const fe=a[b];if(X>=ve){Oe(fe,p,w,!0);continue}let Ee;if(fe.key!=null)Ee=W.get(fe.key);else for(H=j;H<=M;H++)if(yt[H-j]===0&&_t(fe,c[H])){Ee=H;break}Ee===void 0?Oe(fe,p,w,!0):(yt[Ee-j]=b+1,Ee>=Sr?Sr=Ee:it=!0,I(fe,c[Ee],h,null,p,w,E,_,x),X++)}const Nr=it?Sl(yt):lt;for(H=Nr.length-1,b=ve-1;b>=0;b--){const fe=j+b,Ee=c[fe],Fr=fe+1<T?c[fe+1].el:m;yt[b]===0?I(null,Ee,h,Fr,p,w,E,_,x):it&&(H<0||b!==Nr[H]?Xe(Ee,h,Fr,2):H--)}}},Xe=(a,c,h,m,p=null)=>{const{el:w,type:E,transition:_,children:x,shapeFlag:b}=a;if(b&6){Xe(a.component.subTree,c,h,m);return}if(b&128){a.suspense.move(c,h,m);return}if(b&64){E.move(a,c,h,rt);return}if(E===le){r(w,c,h);for(let A=0;A<x.length;A++)Xe(x[A],c,h,m);r(a.anchor,c,h);return}if(E===Fn){L(a,c,h);return}if(m!==2&&b&1&&_)if(m===0)_.beforeEnter(w),r(w,c,h),oe(()=>_.enter(w),p);else{const{leave:A,delayLeave:M,afterLeave:N}=_,j=()=>r(w,c,h),W=()=>{A(w,()=>{j(),N&&N()})};M?M(w,j,W):W()}else r(w,c,h)},Oe=(a,c,h,m=!1,p=!1)=>{const{type:w,props:E,ref:_,children:x,dynamicChildren:b,shapeFlag:T,patchFlag:A,dirs:M}=a;if(_!=null&&Zn(_,null,h,a,!0),T&256){c.ctx.deactivate(a);return}const N=T&1&&M,j=!Qt(a);let W;if(j&&(W=E&&E.onVnodeBeforeUnmount)&&Ie(W,c,a),T&6)$s(a.component,h,m);else{if(T&128){a.suspense.unmount(h,m);return}N&&Je(a,null,c,"beforeUnmount"),T&64?a.type.remove(a,c,h,p,rt,m):b&&(w!==le||A>0&&A&64)?ke(b,c,h,!1,!0):(w===le&&A&384||!p&&T&16)&&ke(x,c,h),m&&Mr(a)}(j&&(W=E&&E.onVnodeUnmounted)||N)&&oe(()=>{W&&Ie(W,c,a),N&&Je(a,null,c,"unmounted")},h)},Mr=a=>{const{type:c,el:h,anchor:m,transition:p}=a;if(c===le){Ds(h,m);return}if(c===Fn){P(a);return}const w=()=>{i(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(a.shapeFlag&1&&p&&!p.persisted){const{leave:E,delayLeave:_}=p,x=()=>E(h,w);_?_(a.el,w,x):x()}else w()},Ds=(a,c)=>{let h;for(;a!==c;)h=g(a),i(a),a=h;i(c)},$s=(a,c,h)=>{const{bum:m,scope:p,update:w,subTree:E,um:_}=a;m&&kn(m),p.stop(),w&&(w.active=!1,Oe(E,a,c,h)),_&&oe(_,c),oe(()=>{a.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},ke=(a,c,h,m=!1,p=!1,w=0)=>{for(let E=w;E<a.length;E++)Oe(a[E],c,h,m,p)},Bt=a=>a.shapeFlag&6?Bt(a.component.subTree):a.shapeFlag&128?a.suspense.next():g(a.anchor||a.el),kr=(a,c,h)=>{a==null?c._vnode&&Oe(c._vnode,null,null,!0):I(c._vnode||null,a,c,null,null,null,h),Ur(),Xi(),c._vnode=a},rt={p:I,um:Oe,m:Xe,r:Mr,mt:Cn,mc:Me,pc:U,pbc:de,n:Bt,o:e};let Pn,Tn;return t&&([Pn,Tn]=t(rt)),{render:kr,hydrate:Pn,createApp:Ol(kr,Pn)}}function Ve({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ds(e,t,n=!1){const r=e.children,i=t.children;if(S(r)&&S(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=$e(i[s]),l.el=o.el),n||ds(o,l)),l.type===xn&&(l.el=o.el)}}function Sl(e){const t=e.slice(),n=[0];let r,i,s,o,l;const f=e.length;for(r=0;r<f;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,e[n[l]]<u?s=l+1:o=l;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Nl=e=>e.__isTeleport,le=Symbol.for("v-fgt"),xn=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),Fn=Symbol.for("v-stc"),At=[];let _e=null;function Se(e=!1){At.push(_e=e?null:[])}function Fl(){At.pop(),_e=At[At.length-1]||null}let Nt=1;function ei(e){Nt+=e}function Rl(e){return e.dynamicChildren=Nt>0?_e||lt:null,Fl(),Nt>0&&_e&&_e.push(e),e}function Ne(e,t,n,r,i,s){return Rl(k(e,t,n,r,i,s,!0))}function Qn(e){return e?e.__v_isVNode===!0:!1}function _t(e,t){return e.type===t.type&&e.key===t.key}const On="__vInternal",hs=({key:e})=>e??null,en=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||te(e)||z(e)?{i:he,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,r=0,i=null,s=e===le?0:1,o=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hs(t),ref:t&&en(t),scopeId:_n,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:he};return l?(xr(f,n),s&128&&e.normalize(f)):n&&(f.shapeFlag|=J(n)?8:16),Nt>0&&!o&&_e&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&_e.push(f),f}const pe=zl;function zl(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===pl)&&(e=St),Qn(e)){const l=dt(e,t,!0);return n&&xr(l,n),Nt>0&&!s&&_e&&(l.shapeFlag&6?_e[_e.indexOf(e)]=l:_e.push(l)),l.patchFlag|=-2,l}if(Xl(e)&&(e=e.__vccOpts),t){t=jl(t);let{class:l,style:f}=t;l&&!J(l)&&(t.class=Ge(l)),Y(f)&&($i(f)&&!S(f)&&(f=Z({},f)),t.style=gn(f))}const o=J(e)?1:Go(e)?128:Nl(e)?64:Y(e)?4:z(e)?2:0;return k(e,t,n,r,i,o,s,!0)}function jl(e){return e?$i(e)||On in e?Z({},e):e:null}function dt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,l=t?Bl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&hs(l),ref:t&&t.ref?n&&i?S(i)?i.concat(en(t)):[i,en(t)]:en(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ll(e=" ",t=0){return pe(xn,null,e,t)}function Ae(e){return e==null||typeof e=="boolean"?pe(St):S(e)?pe(le,null,e.slice()):typeof e=="object"?$e(e):pe(xn,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(S(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),xr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(On in t)?t._ctx=he:i===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[Ll(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ge([t.class,r.class]));else if(i==="style")t.style=gn([t.style,r.style]);else if(dn(i)){const s=t[i],o=r[i];o&&s!==o&&!(S(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ie(e,t,n,r=null){xe(e,t,7,[n,r])}const Dl=os();let $l=0;function Hl(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Dl,s={uid:$l++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new to(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:as(r,i),emitsOptions:Vi(r,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ko.bind(null,s),e.ce&&e.ce(s),s}let G=null,Or,st,ti="__VUE_INSTANCE_SETTERS__";(st=$n()[ti])||(st=$n()[ti]=[]),st.push(e=>G=e),Or=e=>{st.length>1?st.forEach(t=>t(e)):st[0](e)};const ht=e=>{Or(e),e.scope.on()},nt=()=>{G&&G.scope.off(),Or(null)};function ps(e){return e.vnode.shapeFlag&4}let Ft=!1;function Ul(e,t=!1){Ft=t;const{props:n,children:r}=e.vnode,i=ps(e);Il(e,n,i,t),Pl(e,r);const s=i?Wl(e,t):void 0;return Ft=!1,s}function Wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hi(new Proxy(e.ctx,gl));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Yl(e):null;ht(e),mt();const s=We(r,e,0,[e.props,i]);if(gt(),nt(),Ii(s)){if(s.then(nt,nt),t)return s.then(o=>{ni(e,o,t)}).catch(o=>{bn(o,e,0)});e.asyncDep=s}else ni(e,s,t)}else ms(e,t)}function ni(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Ki(t)),ms(e,n)}let ri;function ms(e,t,n){const r=e.type;if(!e.render){if(!t&&ri&&!r.render){const i=r.template||_r(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:f}=r,u=Z(Z({isCustomElement:s,delimiters:l},o),f);r.render=ri(i,u)}}e.render=r.render||we}ht(e),mt(),vl(e),gt(),nt()}function Kl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function Yl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Kl(e)},slots:e.slots,emit:e.emit,expose:t}}function En(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ki(Hi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in It)return It[n](e)},has(t,n){return n in t||n in It}}))}function ql(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Xl(e){return z(e)&&"__vccOpts"in e}const He=(e,t)=>Lo(e,t,Ft);function Jl(e,t,n){const r=arguments.length;return r===2?Y(t)&&!S(t)?Qn(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qn(n)&&(n=[n]),pe(e,t,n))}const Vl=Symbol.for("v-scx"),Zl=()=>Gt(Vl),Ql="3.3.4",Gl="http://www.w3.org/2000/svg",Qe=typeof document<"u"?document:null,ii=Qe&&Qe.createElement("template"),ea={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Qe.createElementNS(Gl,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ii.innerHTML=r?`<svg>${e}</svg>`:e;const l=ii.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ta(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function na(e,t,n){const r=e.style,i=J(n);if(n&&!i){if(t&&!J(t))for(const s in t)n[s]==null&&Gn(r,s,"");for(const s in n)Gn(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const si=/\s*!important$/;function Gn(e,t,n){if(S(n))n.forEach(r=>Gn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ra(e,t);si.test(n)?e.setProperty(pt(r),n.replace(si,""),"important"):e[r]=n}}const oi=["Webkit","Moz","ms"],Rn={};function ra(e,t){const n=Rn[t];if(n)return n;let r=Te(t);if(r!=="filter"&&r in e)return Rn[t]=r;r=mn(r);for(let i=0;i<oi.length;i++){const s=oi[i]+r;if(s in e)return Rn[t]=s}return t}const li="http://www.w3.org/1999/xlink";function ia(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(li,t.slice(6,t.length)):e.setAttributeNS(li,t,n);else{const s=eo(t);n==null||s&&!Pi(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function sa(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let f=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Pi(n):n==null&&u==="string"?(n="",f=!0):u==="number"&&(n=0,f=!0)}try{e[t]=n}catch{}f&&e.removeAttribute(t)}function oa(e,t,n,r){e.addEventListener(t,n,r)}function la(e,t,n,r){e.removeEventListener(t,n,r)}function aa(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[l,f]=fa(t);if(r){const u=s[t]=da(r,i);oa(e,l,u,f)}else o&&(la(e,l,o,f),s[t]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function fa(e){let t;if(ai.test(e)){t={};let r;for(;r=e.match(ai);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let zn=0;const ca=Promise.resolve(),ua=()=>zn||(ca.then(()=>zn=0),zn=Date.now());function da(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(ha(r,n.value),t,5,[r])};return n.value=e,n.attached=ua(),n}function ha(e,t){if(S(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const fi=/^on[a-z]/,pa=(e,t,n,r,i=!1,s,o,l,f)=>{t==="class"?ta(e,r,i):t==="style"?na(e,n,r):dn(t)?or(t)||aa(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ma(e,t,r,i))?sa(e,t,r,s,o,l,f):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ia(e,t,r,i))};function ma(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&fi.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fi.test(t)&&J(n)?!1:t in e}const Xt={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):wt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),wt(e,!0),r.enter(e)):r.leave(e,()=>{wt(e,!1)}):wt(e,t))},beforeUnmount(e,{value:t}){wt(e,t)}};function wt(e,t){e.style.display=t?e._vod:"none"}const ga=Z({patchProp:pa},ea);let ci;function va(){return ci||(ci=Ml(ga))}const ba=(...e)=>{const t=va().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ya(r);if(!i)return;const s=t._component;!z(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ya(e){return J(e)?document.querySelector(e):e}const _a=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Ye=e=>(Yo("data-v-40f91c4c"),e=e(),qo(),e),wa={id:"appTabs"},xa={id:"hives"},Oa={class:"hiveinfo"},Ea={class:"heartBeat"},Ia=["value","max"],Aa=Ye(()=>k("span",{class:"hivearea"},"Area:",-1)),Ca={class:"hiveAreaTable"},Pa=Ye(()=>k("thead",null,[k("tr",null,[k("th",null,"Used"),k("th"),k("th",null,"Occupied"),k("th"),k("th",null,"Available"),k("th")])],-1)),Ta=Ye(()=>k("td",{class:"slash"},"/ ",-1)),Ma=Ye(()=>k("td",{class:"slash"},"/",-1)),ka=Ye(()=>k("p",null,"-",-1)),Sa={class:"harvest"},Na=Ye(()=>k("div",null,"-------------------------------------------------------------",-1)),Fa=Ye(()=>k("h3",null,"Hive total",-1)),Ra={id:"dev"},za=Ye(()=>k("h4",null,"I am some debug info",-1)),ja=10,La={__name:"App",setup(e){let t;function n(g){return Math.PI*g*g}function r(g,v){return v==="cm"?g>=1e3?(g/=1e3,v="m"):g>=1e6&&(g/=1e6,v="km"):v==="mg"&&(g>=1e3?(g/=1e3,v="g"):g>=1e6&&(g/=1e6,v="kg")),v?numberformat.formatShort(g)+v:numberformat.formatShort(g)}function i(){let g=500;o.value.hive.forEach(v=>{v.growth.amount<v.growth.max&&v.resources.Biomass.amount>=v.area/g&&(v.growth.amount+=v.growth.pertick,v.resources.Biomass.amount-=v.area/g),v.growth.amount>=v.growth.max&&v.resources.Biomass.amount>=v.growth.pertick&&v.area<v.maxArea&&(v.growth.amount=0,v.radius+=v.radiusPerBeat,v.area=Math.min(v.maxArea,n(v.radius)))})}ts(()=>{t=setInterval(i,ja)}),ns(()=>{clearInterval(t)});const s=[{id:0,biome:"Forest",radius:10,radiusPerBeat:1,areaUsed:0,area:314.16,maxArea:1e7,growth:{amount:0,max:100,pertick:1},resources:{Biomass:{amount:500,perloop:10},Fibre:{amount:0,perloop:1}},harvest:{Plants:{amount:0,perloop:100,max:1e11},Trees:{amount:0,perloop:1},Insects:{amount:0,perloop:1},Animals:{amount:0,perloop:1},Birds:{amount:0,perloop:1},Fish:{amount:0,perloop:1},Humans:{amount:0,perloop:1}}}],o=So({hive:JSON.parse(JSON.stringify(s)),resources:{Biomass:{amount:120,perloop:10},Fibre:{amount:0,perloop:1}}}),l=He(()=>{const g={};return o.value.hive.forEach(v=>{for(const R in v.resources)g[R]?g[R]+=v.resources[R].amount:g[R]=v.resources[R].amount}),g});o.value.resources=l;function f(g,v){const I=o.value.hive[o.value.hive.length-1].id+1,F=JSON.parse(JSON.stringify(s[0]));F.id=I,F.biome=g,o.value.hive.push(F)}function u(g,v,R){return g*(R/v)-7}const d={hive:!0,mutations:!1,research:!1,grow:!1};function y(g){d.hive=!1,d.mutations=!1,d.research=!1,d.grow=!1,d.hasOwnProperty(g)&&(d[g]=!0)}return(g,v)=>{const R=hl("font-awesome-icon");return Se(),Ne(le,null,[k("nav",wa,[k("a",{onClick:v[0]||(v[0]=I=>y("hive")),class:Ge({active:d.hive}),href:"#"},"Hives",2),k("a",{onClick:v[1]||(v[1]=I=>y("mutations")),class:Ge({active:d.mutations}),href:"#"},"Mutations",2),k("a",{onClick:v[2]||(v[2]=I=>y("research")),class:Ge({active:d.research}),href:"#"},"Research",2),k("a",{onClick:v[3]||(v[3]=I=>y("grow")),class:Ge({active:d.grow}),href:"#"},"Grow",2)]),Yt(k("div",null,[k("div",xa,[(Se(!0),Ne(le,null,qt(o.value.hive,I=>(Se(),Ne("div",Oa,[k("div",Ea,[pe(R,{class:"heartIcon",icon:"heart",style:gn({left:u(I.growth.amount,I.growth.max,200)+"px"})},null,8,["style"]),k("progress",{class:"growth-progress",value:I.growth.amount,max:I.growth.max},null,8,Ia)]),k("span",null,"Hive "+ce(I.id),1),k("span",null,"Biome: "+ce(I.biome),1),k("span",null,"Radius: "+ce(r(I.radius,"cm")),1),Aa,k("table",Ca,[Pa,k("tbody",null,[k("tr",null,[k("td",null,ce(r(I.areaUsed,"cm")),1),Ta,k("td",null,ce(r(I.area,"cm")),1),Ma,k("td",null,ce(r(I.maxArea,"cm"))+" sq",1)])])]),(Se(!0),Ne(le,null,qt(I.resources,(F,O)=>(Se(),Ne("div",null,[k("span",null,ce(O),1),k("span",null,ce(r(F.amount,"mg")),1)]))),256)),ka,(Se(!0),Ne(le,null,qt(I.harvest,(F,O)=>(Se(),Ne("div",Sa,[k("span",null,ce(O),1),k("span",null,ce(r(F.amount)),1)]))),256))]))),256))]),Na,k("div",null,[Fa,k("ul",null,[(Se(!0),Ne(le,null,qt(o.value.resources,(I,F)=>(Se(),Ne("li",{key:F},ce(F)+": "+ce(r(I,"mg")),1))),128))])]),k("button",{onClick:v[4]||(v[4]=I=>f("Desert")),id:"addHive"},"add hive")],512),[[Xt,d.hive]]),Yt(k("div",null,"Mutations are here",512),[[Xt,d.mutations]]),Yt(k("div",null,"Research is here",512),[[Xt,d.research]]),Yt(k("div",null,"Growing is here",512),[[Xt,d.grow]]),k("div",Ra,[za,k("pre",null,ce(JSON.stringify(o.value,null,2)),1)])],64)}}},Ba=_a(La,[["__scopeId","data-v-40f91c4c"]]);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Ct(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ct=function(t){return typeof t}:Ct=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function Da(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $a(e,t,n){return t&&ui(e.prototype,t),n&&ui(e,n),e}function Ha(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){Ha(e,i,n[i])})}return e}function gs(e,t){return Ua(e)||Wa(e,t)||Ka()}function Ua(e){if(Array.isArray(e))return e}function Wa(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}function Ka(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var di=function(){},Er={},vs={},Ya=null,bs={mark:di,measure:di};try{typeof window<"u"&&(Er=window),typeof document<"u"&&(vs=document),typeof MutationObserver<"u"&&(Ya=MutationObserver),typeof performance<"u"&&(bs=performance)}catch{}var qa=Er.navigator||{},hi=qa.userAgent,pi=hi===void 0?"":hi,In=Er,ie=vs,Jt=bs;In.document;var Ir=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function";~pi.indexOf("MSIE")||~pi.indexOf("Trident/");var je="___FONT_AWESOME___",ys="fa",_s="svg-inline--fa",Xa="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var jn={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ws=In.FontAwesomeConfig||{};function Ja(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Va(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var Za=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Za.forEach(function(e){var t=gs(e,2),n=t[0],r=t[1],i=Va(Ja(n));i!=null&&(ws[r]=i)})}var Qa={familyPrefix:ys,replacementClass:_s,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},er=D({},Qa,ws);er.autoReplaceSvg||(er.observeMutations=!1);var ue=D({},er);In.FontAwesomeConfig=ue;var Le=In||{};Le[je]||(Le[je]={});Le[je].styles||(Le[je].styles={});Le[je].hooks||(Le[je].hooks={});Le[je].shims||(Le[je].shims=[]);var Pe=Le[je],Ga=[],ef=function e(){ie.removeEventListener("DOMContentLoaded",e),tr=1,Ga.map(function(t){return t()})},tr=!1;Ir&&(tr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),tr||ie.addEventListener("DOMContentLoaded",ef));var Ar="pending",xs="settled",ln="fulfilled",an="rejected",tf=function(){},Os=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",nf=typeof setImmediate>"u"?setTimeout:setImmediate,Et=[],nr;function rf(){for(var e=0;e<Et.length;e++)Et[e][0](Et[e][1]);Et=[],nr=!1}function fn(e,t){Et.push([e,t]),nr||(nr=!0,nf(rf,0))}function sf(e,t){function n(i){Cr(t,i)}function r(i){Rt(t,i)}try{e(n,r)}catch(i){r(i)}}function Es(e){var t=e.owner,n=t._state,r=t._data,i=e[n],s=e.then;if(typeof i=="function"){n=ln;try{r=i(r)}catch(o){Rt(s,o)}}Is(s,r)||(n===ln&&Cr(s,r),n===an&&Rt(s,r))}function Is(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||Ct(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(i){n||(n=!0,t===i?As(e,i):Cr(e,i))},function(i){n||(n=!0,Rt(e,i))}),!0}}catch(i){return n||Rt(e,i),!0}return!1}function Cr(e,t){(e===t||!Is(e,t))&&As(e,t)}function As(e,t){e._state===Ar&&(e._state=xs,e._data=t,fn(of,e))}function Rt(e,t){e._state===Ar&&(e._state=xs,e._data=t,fn(lf,e))}function Cs(e){e._then=e._then.forEach(Es)}function of(e){e._state=ln,Cs(e)}function lf(e){e._state=an,Cs(e),!e._handled&&Os&&global.process.emit("unhandledRejection",e._data,e)}function af(e){global.process.emit("rejectionHandled",e)}function me(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof me))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],sf(e,this)}me.prototype={constructor:me,_state:Ar,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(tf),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===an&&Os&&fn(af,this)),this._state===ln||this._state===an?fn(Es,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}};me.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new me(function(t,n){var r=[],i=0;function s(f){return i++,function(u){r[f]=u,--i||t(r)}}for(var o=0,l;o<e.length;o++)l=e[o],l&&typeof l.then=="function"?l.then(s(o),n):r[o]=l;i||t(r)})};me.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new me(function(t,n){for(var r=0,i;r<e.length;r++)i=e[r],i&&typeof i.then=="function"?i.then(t,n):t(i)})};me.resolve=function(e){return e&&Ct(e)==="object"&&e.constructor===me?e:new me(function(t){t(e)})};me.reject=function(e){return new me(function(t,n){n(e)})};var ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ff(e){if(!(!e||!Ir)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ie.head.insertBefore(t,r),e}}var cf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cn(){for(var e=12,t="";e-- >0;)t+=cf[Math.random()*62|0];return t}function Ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ps(e[n]),'" ')},"").trim()}function Ts(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Ms(e){return e.size!==ot.size||e.x!==ot.x||e.y!==ot.y||e.rotate!==ot.rotate||e.flipX||e.flipY}function ks(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:u}}var Ln={x:0,y:0,width:"100%",height:"100%"};function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function df(e){return e.tag==="g"?e.children:[e]}function hf(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,s=e.maskId,o=e.transform,l=r.width,f=r.icon,u=i.width,d=i.icon,y=ks({transform:o,containerWidth:u,iconWidth:l}),g={tag:"rect",attributes:D({},Ln,{fill:"white"})},v=f.children?{children:f.children.map(mi)}:{},R={tag:"g",attributes:D({},y.inner),children:[mi(D({tag:f.tag,attributes:D({},f.attributes,y.path)},v))]},I={tag:"g",attributes:D({},y.outer),children:[R]},F="mask-".concat(s||cn()),O="clip-".concat(s||cn()),C={tag:"mask",attributes:D({},Ln,{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,I]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:df(d)},C]};return t.push(L,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(F,")")},Ln)}),{children:t,attributes:n}}function pf(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,s=e.styles,o=Ts(s);if(o.length>0&&(n.style=o),Ms(i)){var l=ks({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:D({},l.outer),children:[{tag:"g",attributes:D({},l.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D({},r.icon.attributes,l.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function mf(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Ms(o)&&n.found&&!r.found){var l=n.width,f=n.height,u={x:l/f/2,y:.5};i.style=Ts(D({},s,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function gf(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(ue.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D({},i,{id:o}),children:r}]}]}function vf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,l=e.symbol,f=e.title,u=e.maskId,d=e.titleId,y=e.extra,g=e.watchable,v=g===void 0?!1:g,R=r.found?r:n,I=R.width,F=R.height,O=i==="fak",C=O?"":"fa-w-".concat(Math.ceil(I/F*16)),L=[ue.replacementClass,s?"".concat(ue.familyPrefix,"-").concat(s):"",C].filter(function(de){return y.classes.indexOf(de)===-1}).filter(function(de){return de!==""||!!de}).concat(y.classes).join(" "),P={children:[],attributes:D({},y.attributes,{"data-prefix":i,"data-icon":s,class:L,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(F)})},V=O&&!~y.classes.indexOf("fa-fw")?{width:"".concat(I/F*16*.0625,"em")}:{};v&&(P.attributes[Xa]=""),f&&P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(d||cn())},children:[f]});var Q=D({},P,{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:D({},V,y.styles)}),ge=r.found&&n.found?hf(Q):pf(Q),Me=ge.children,vt=ge.attributes;return Q.children=Me,Q.attributes=vt,l?gf(Q):mf(Q)}var gi=function(){};ue.measurePerformance&&Jt&&Jt.mark&&Jt.measure;var bf=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Bn=function(t,n,r,i){var s=Object.keys(t),o=s.length,l=i!==void 0?bf(n,i):n,f,u,d;for(r===void 0?(f=1,d=t[s[0]]):(f=0,d=r);f<o;f++)u=s[f],d=l(d,t[u],u,t);return d};function Ss(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Object.keys(t).reduce(function(o,l){var f=t[l],u=!!f.icon;return u?o[f.iconName]=f.icon:o[l]=f,o},{});typeof Pe.hooks.addPack=="function"&&!i?Pe.hooks.addPack(e,s):Pe.styles[e]=D({},Pe.styles[e]||{},s),e==="fas"&&Ss("fa",t)}var vi=Pe.styles,yf=Pe.shims,Ns=function(){var t=function(i){return Bn(vi,function(s,o,l){return s[l]=Bn(o,i,{}),s},{})};t(function(r,i,s){return i[3]&&(r[i[3]]=s),r}),t(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var n="far"in vi;Bn(yf,function(r,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),r[s]={prefix:o,iconName:l},r},{})};Ns();Pe.styles;function bi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Fs(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Ps(e):"<".concat(t," ").concat(uf(r),">").concat(s.map(Fs).join(""),"</").concat(t,">")}var _f=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],l=s.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n):n};function rr(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}rr.prototype=Object.create(Error.prototype);rr.prototype.constructor=rr;var An={fill:"currentColor"},Rs={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};D({},An,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Pr=D({},Rs,{attributeName:"opacity"});D({},An,{cx:"256",cy:"364",r:"28"}),D({},Rs,{attributeName:"r",values:"28;14;28;28;14;28;"}),D({},Pr,{values:"1;0;1;1;0;1;"});D({},An,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),D({},Pr,{values:"1;0;0;0;0;1;"});D({},An,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),D({},Pr,{values:"0;0;1;1;0;0;"});Pe.styles;function yi(e){var t=e[0],n=e[1],r=e.slice(4),i=gs(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ue.familyPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.familyPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ue.familyPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}Pe.styles;var wf=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function xf(){var e=ys,t=_s,n=ue.familyPrefix,r=ue.replacementClass,i=wf;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Of=function(){function e(){Da(this,e),this.definitions={}}return $a(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=D({},n.definitions[l]||{},o[l]),Ss(l,o[l]),Ns()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],l=o.prefix,f=o.iconName,u=o.icon;n[l]||(n[l]={}),n[l][f]=u}),n}}]),e}();function Ef(){ue.autoAddCss&&!wi&&(ff(xf()),wi=!0)}function If(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fs(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ir){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function _i(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return bi(zs.definitions,n,r)||bi(Pe.styles,n,r)}function Af(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_i(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:_i(i||{})),e(r,D({},n,{mask:i}))}}var zs=new Of,wi=!1,ir={transform:function(t){return _f(t)}},Cf=Af(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?ot:n,i=t.symbol,s=i===void 0?!1:i,o=t.mask,l=o===void 0?null:o,f=t.maskId,u=f===void 0?null:f,d=t.title,y=d===void 0?null:d,g=t.titleId,v=g===void 0?null:g,R=t.classes,I=R===void 0?[]:R,F=t.attributes,O=F===void 0?{}:F,C=t.styles,L=C===void 0?{}:C;if(e){var P=e.prefix,V=e.iconName,Q=e.icon;return If(D({type:"icon"},e),function(){return Ef(),ue.autoA11y&&(y?O["aria-labelledby"]="".concat(ue.replacementClass,"-title-").concat(v||cn()):(O["aria-hidden"]="true",O.focusable="false")),vf({icons:{main:yi(Q),mask:l?yi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:V,transform:D({},ot,r),symbol:s,title:y,maskId:u,titleId:v,extra:{attributes:O,styles:L,classes:I}})})}});function xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function un(e){"@babel/helpers - typeof";return un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},un(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tf(e,t){if(e==null)return{};var n=Pf(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},js={exports:{}};(function(e){(function(t){var n=function(O,C,L){if(!u(C)||y(C)||g(C)||v(C)||f(C))return C;var P,V=0,Q=0;if(d(C))for(P=[],Q=C.length;V<Q;V++)P.push(n(O,C[V],L));else{P={};for(var ge in C)Object.prototype.hasOwnProperty.call(C,ge)&&(P[O(ge,L)]=n(O,C[ge],L))}return P},r=function(O,C){C=C||{};var L=C.separator||"_",P=C.split||/(?=[A-Z])/;return O.split(P).join(L)},i=function(O){return R(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(C,L){return L?L.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},s=function(O){var C=i(O);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(O,C){return r(O,C).toLowerCase()},l=Object.prototype.toString,f=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},d=function(O){return l.call(O)=="[object Array]"},y=function(O){return l.call(O)=="[object Date]"},g=function(O){return l.call(O)=="[object RegExp]"},v=function(O){return l.call(O)=="[object Boolean]"},R=function(O){return O=O-0,O===O},I=function(O,C){var L=C&&"process"in C?C.process:C;return typeof L!="function"?O:function(P,V){return L(P,O,V)}},F={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(O,C){return n(I(i,C),O)},decamelizeKeys:function(O,C){return n(I(o,C),O,C)},pascalizeKeys:function(O,C){return n(I(s,C),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Mf)})(js);var kf=js.exports,Sf=["class","style"];function Nf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=kf.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function Ff(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ls(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(f){return Ls(f)}),i=Object.keys(e.attributes||{}).reduce(function(f,u){var d=e.attributes[u];switch(u){case"class":f.class=Ff(d);break;case"style":f.style=Nf(d);break;default:f.attrs[u]=d}return f},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,l=Tf(n,Sf);return Jl(e.tag,Re(Re(Re({},t),{},{class:i.class,style:Re(Re({},i.style),o)},i.attrs),l),r)}var Bs=!1;try{Bs=!0}catch{}function Rf(){if(!Bs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function zf(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oi(e){if(e&&un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ir.icon)return ir.icon(e);if(e===null)return null;if(un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var jf=nl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=He(function(){return Oi(t.icon)}),s=He(function(){return Dn("classes",zf(t))}),o=He(function(){return Dn("transform",typeof t.transform=="string"?ir.transform(t.transform):t.transform)}),l=He(function(){return Dn("mask",Oi(t.mask))}),f=He(function(){return Cf(i.value,Re(Re(Re(Re({},s.value),o.value),l.value),{},{symbol:t.symbol,title:t.title}))});Zt(f,function(d){if(!d)return Rf("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var u=He(function(){return f.value?Ls(f.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Lf={prefix:"fas",iconName:"heart",icon:[512,512,[],"f004","M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]},Bf={prefix:"fas",iconName:"user-secret",icon:[448,512,[],"f21b","M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"]};zs.add(Bf,Lf);ba(Ba).component("font-awesome-icon",jf).mount("#app");
