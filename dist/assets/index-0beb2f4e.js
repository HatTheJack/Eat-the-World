(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ar(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const K={},ft=[],xe=()=>{},Ks=()=>!1,Ys=/^on[^a-z]/,mn=e=>Ys.test(e),fr=e=>e.startsWith("onUpdate:"),Z=Object.assign,cr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qs=Object.prototype.hasOwnProperty,L=(e,t)=>qs.call(e,t),S=Array.isArray,ct=e=>gn(e)==="[object Map]",Pi=e=>gn(e)==="[object Set]",R=e=>typeof e=="function",J=e=>typeof e=="string",ur=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Ti=e=>Y(e)&&R(e.then)&&R(e.catch),Mi=Object.prototype.toString,gn=e=>Mi.call(e),Xs=e=>gn(e).slice(8,-1),ki=e=>gn(e)==="[object Object]",dr=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Js=/-(\w)/g,Me=vn(e=>e.replace(Js,(t,n)=>n?n.toUpperCase():"")),Vs=/\B([A-Z])/g,gt=vn(e=>e.replace(Vs,"-$1").toLowerCase()),bn=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nn=vn(e=>e?`on${bn(e)}`:""),Mt=(e,t)=>!Object.is(e,t),Fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},sn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Zs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Lr;const Wn=()=>Lr||(Lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yn(e){if(S(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=J(r)?to(r):yn(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(J(e))return e;if(Y(e))return e}}const Qs=/;(?![^(]*\))/g,Gs=/:([^]+)/,eo=/\/\*[^]*?\*\//g;function to(e){const t={};return e.replace(eo,"").split(Qs).forEach(n=>{if(n){const r=n.split(Gs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function tt(e){let t="";if(J(e))t=e;else if(S(e))for(let n=0;n<e.length;n++){const r=tt(e[n]);r&&(t+=r+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const no="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ro=ar(no);function Si(e){return!!e||e===""}const de=e=>J(e)?e:e==null?"":S(e)||Y(e)&&(e.toString===Mi||!R(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Pi(t)?{[`Set(${t.size})`]:[...t.values()]}:Y(t)&&!S(t)&&!ki(t)?String(t):t;let ye;class io{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function so(e,t=ye){t&&t.active&&t.effects.push(e)}function oo(){return ye}const hr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fi=e=>(e.w&qe)>0,Ri=e=>(e.n&qe)>0,lo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},ao=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Fi(i)&&!Ri(i)?i.delete(e):t[n++]=i,i.w&=~qe,i.n&=~qe}t.length=n}},Kn=new WeakMap;let Et=0,qe=1;const Yn=30;let _e;const rt=Symbol(""),qn=Symbol("");class pr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,so(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Ke=!0,qe=1<<++Et,Et<=Yn?lo(this):Br(this),this.fn()}finally{Et<=Yn&&ao(this),qe=1<<--Et,_e=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Br(this),this.onStop&&this.onStop(),this.active=!1)}}function Br(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const zi=[];function vt(){zi.push(Ke),Ke=!1}function bt(){const e=zi.pop();Ke=e===void 0?!0:e}function ae(e,t,n){if(Ke&&_e){let r=Kn.get(e);r||Kn.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=hr()),ji(i)}}function ji(e,t){let n=!1;Et<=Yn?Ri(e)||(e.n|=qe,n=!Fi(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function Le(e,t,n,r,i,s){const o=Kn.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&S(e)){const a=Number(r);o.forEach((u,d)=>{(d==="length"||d>=a)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":S(e)?dr(n)&&l.push(o.get("length")):(l.push(o.get(rt)),ct(e)&&l.push(o.get(qn)));break;case"delete":S(e)||(l.push(o.get(rt)),ct(e)&&l.push(o.get(qn)));break;case"set":ct(e)&&l.push(o.get(rt));break}if(l.length===1)l[0]&&Xn(l[0]);else{const a=[];for(const u of l)u&&a.push(...u);Xn(hr(a))}}function Xn(e,t){const n=S(e)?e:[...e];for(const r of n)r.computed&&Dr(r);for(const r of n)r.computed||Dr(r)}function Dr(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const fo=ar("__proto__,__v_isRef,__isVue"),Li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ur)),co=mr(),uo=mr(!1,!0),ho=mr(!0),$r=po();function po(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let s=0,o=this.length;s<o;s++)ae(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){vt();const r=$(this)[t].apply(this,n);return bt(),r}}),e}function mo(e){const t=$(this);return ae(t,"has",e),t.hasOwnProperty(e)}function mr(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?ko:Ui:t?Hi:$i).get(r))return r;const o=S(r);if(!e){if(o&&L($r,i))return Reflect.get($r,i,s);if(i==="hasOwnProperty")return mo}const l=Reflect.get(r,i,s);return(ur(i)?Li.has(i):fo(i))||(e||ae(r,"get",i),t)?l:te(l)?o&&dr(i)?l:l.value:Y(l)?e?Wi(l):br(l):l}}const go=Bi(),vo=Bi(!0);function Bi(e=!1){return function(n,r,i,s){let o=n[r];if(ht(o)&&te(o)&&!te(i))return!1;if(!e&&(!on(i)&&!ht(i)&&(o=$(o),i=$(i)),!S(n)&&te(o)&&!te(i)))return o.value=i,!0;const l=S(n)&&dr(r)?Number(r)<n.length:L(n,r),a=Reflect.set(n,r,i,s);return n===$(s)&&(l?Mt(i,o)&&Le(n,"set",r,i):Le(n,"add",r,i)),a}}function bo(e,t){const n=L(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function yo(e,t){const n=Reflect.has(e,t);return(!ur(t)||!Li.has(t))&&ae(e,"has",t),n}function _o(e){return ae(e,"iterate",S(e)?"length":rt),Reflect.ownKeys(e)}const Di={get:co,set:go,deleteProperty:bo,has:yo,ownKeys:_o},wo={get:ho,set(e,t){return!0},deleteProperty(e,t){return!0}},xo=Z({},Di,{get:uo,set:vo}),gr=e=>e,_n=e=>Reflect.getPrototypeOf(e);function Ht(e,t,n=!1,r=!1){e=e.__v_raw;const i=$(e),s=$(t);n||(t!==s&&ae(i,"get",t),ae(i,"get",s));const{has:o}=_n(i),l=r?gr:n?_r:kt;if(o.call(i,t))return l(e.get(t));if(o.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function Ut(e,t=!1){const n=this.__v_raw,r=$(n),i=$(e);return t||(e!==i&&ae(r,"has",e),ae(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Wt(e,t=!1){return e=e.__v_raw,!t&&ae($(e),"iterate",rt),Reflect.get(e,"size",e)}function Hr(e){e=$(e);const t=$(this);return _n(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function Ur(e,t){t=$(t);const n=$(this),{has:r,get:i}=_n(n);let s=r.call(n,e);s||(e=$(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Mt(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Wr(e){const t=$(this),{has:n,get:r}=_n(t);let i=n.call(t,e);i||(e=$(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&Le(t,"delete",e,void 0),s}function Kr(){const e=$(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function Kt(e,t){return function(r,i){const s=this,o=s.__v_raw,l=$(o),a=t?gr:e?_r:kt;return!e&&ae(l,"iterate",rt),o.forEach((u,d)=>r.call(i,a(u),a(d),s))}}function Yt(e,t,n){return function(...r){const i=this.__v_raw,s=$(i),o=ct(s),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=i[e](...r),d=n?gr:t?_r:kt;return!t&&ae(s,"iterate",a?qn:rt),{next(){const{value:p,done:w}=u.next();return w?{value:p,done:w}:{value:l?[d(p[0]),d(p[1])]:d(p),done:w}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function Oo(){const e={get(s){return Ht(this,s)},get size(){return Wt(this)},has:Ut,add:Hr,set:Ur,delete:Wr,clear:Kr,forEach:Kt(!1,!1)},t={get(s){return Ht(this,s,!1,!0)},get size(){return Wt(this)},has:Ut,add:Hr,set:Ur,delete:Wr,clear:Kr,forEach:Kt(!1,!0)},n={get(s){return Ht(this,s,!0)},get size(){return Wt(this,!0)},has(s){return Ut.call(this,s,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Kt(!0,!1)},r={get(s){return Ht(this,s,!0,!0)},get size(){return Wt(this,!0)},has(s){return Ut.call(this,s,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Kt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Yt(s,!1,!1),n[s]=Yt(s,!0,!1),t[s]=Yt(s,!1,!0),r[s]=Yt(s,!0,!0)}),[e,n,t,r]}const[Eo,Io,Co,Ao]=Oo();function vr(e,t){const n=t?e?Ao:Co:e?Io:Eo;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(L(n,i)&&i in r?n:r,i,s)}const Po={get:vr(!1,!1)},To={get:vr(!1,!0)},Mo={get:vr(!0,!1)},$i=new WeakMap,Hi=new WeakMap,Ui=new WeakMap,ko=new WeakMap;function So(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function No(e){return e.__v_skip||!Object.isExtensible(e)?0:So(Xs(e))}function br(e){return ht(e)?e:yr(e,!1,Di,Po,$i)}function Fo(e){return yr(e,!1,xo,To,Hi)}function Wi(e){return yr(e,!0,wo,Mo,Ui)}function yr(e,t,n,r,i){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=No(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function ut(e){return ht(e)?ut(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function on(e){return!!(e&&e.__v_isShallow)}function Ki(e){return ut(e)||ht(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function Yi(e){return sn(e,"__v_skip",!0),e}const kt=e=>Y(e)?br(e):e,_r=e=>Y(e)?Wi(e):e;function qi(e){Ke&&_e&&(e=$(e),ji(e.dep||(e.dep=hr())))}function Xi(e,t){e=$(e);const n=e.dep;n&&Xn(n)}function te(e){return!!(e&&e.__v_isRef===!0)}function qt(e){return Ro(e,!1)}function Ro(e,t){return te(e)?e:new zo(e,t)}class zo{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:kt(t)}get value(){return qi(this),this._value}set value(t){const n=this.__v_isShallow||on(t)||ht(t);t=n?t:$(t),Mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kt(t),Xi(this))}}function Re(e){return te(e)?e.value:e}const jo={get:(e,t,n)=>Re(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return te(i)&&!te(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ji(e){return ut(e)?e:new Proxy(e,jo)}class Lo{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pr(t,()=>{this._dirty||(this._dirty=!0,Xi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=$(this);return qi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bo(e,t,n=!1){let r,i;const s=R(e);return s?(r=e,i=xe):(r=e.get,i=e.set),new Lo(r,i,s||!i,n)}function Ye(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){wn(s,t,n)}return i}function Oe(e,t,n,r){if(R(e)){const s=Ye(e,t,n,r);return s&&Ti(s)&&s.catch(o=>{wn(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Oe(e[s],t,n,r));return i}function wn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,l=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,l)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){Ye(a,null,10,[e,o,l]);return}}Do(e,n,i,r)}function Do(e,t,n,r=!0){console.error(e)}let St=!1,Jn=!1;const ee=[];let Pe=0;const dt=[];let ze=null,Ge=0;const Vi=Promise.resolve();let wr=null;function $o(e){const t=wr||Vi;return e?t.then(this?e.bind(this):e):t}function Ho(e){let t=Pe+1,n=ee.length;for(;t<n;){const r=t+n>>>1;Nt(ee[r])<e?t=r+1:n=r}return t}function xr(e){(!ee.length||!ee.includes(e,St&&e.allowRecurse?Pe+1:Pe))&&(e.id==null?ee.push(e):ee.splice(Ho(e.id),0,e),Zi())}function Zi(){!St&&!Jn&&(Jn=!0,wr=Vi.then(Gi))}function Uo(e){const t=ee.indexOf(e);t>Pe&&ee.splice(t,1)}function Wo(e){S(e)?dt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?Ge+1:Ge))&&dt.push(e),Zi()}function Yr(e,t=St?Pe+1:0){for(;t<ee.length;t++){const n=ee[t];n&&n.pre&&(ee.splice(t,1),t--,n())}}function Qi(e){if(dt.length){const t=[...new Set(dt)];if(dt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Nt(n)-Nt(r)),Ge=0;Ge<ze.length;Ge++)ze[Ge]();ze=null,Ge=0}}const Nt=e=>e.id==null?1/0:e.id,Ko=(e,t)=>{const n=Nt(e)-Nt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Gi(e){Jn=!1,St=!0,ee.sort(Ko);const t=xe;try{for(Pe=0;Pe<ee.length;Pe++){const n=ee[Pe];n&&n.active!==!1&&Ye(n,null,14)}}finally{Pe=0,ee.length=0,Qi(),St=!1,wr=null,(ee.length||dt.length)&&Gi()}}function Yo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:w}=r[d]||K;w&&(i=n.map(E=>J(E)?E.trim():E)),p&&(i=n.map(Zs))}let l,a=r[l=Nn(t)]||r[l=Nn(Me(t))];!a&&s&&(a=r[l=Nn(gt(t))]),a&&Oe(a,e,6,i);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Oe(u,e,6,i)}}function es(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},l=!1;if(!R(e)){const a=u=>{const d=es(u,t,!0);d&&(l=!0,Z(o,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(Y(e)&&r.set(e,null),null):(S(s)?s.forEach(a=>o[a]=null):Z(o,s),Y(e)&&r.set(e,o),o)}function xn(e,t){return!e||!mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),L(e,t[0].toLowerCase()+t.slice(1))||L(e,gt(t))||L(e,t))}let he=null,On=null;function ln(e){const t=he;return he=e,On=e&&e.type.__scopeId||null,t}function qo(e){On=e}function Xo(){On=null}function Jo(e,t=he,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ri(-1);const s=ln(t);let o;try{o=e(...i)}finally{ln(s),r._d&&ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rn(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:a,emit:u,render:d,renderCache:p,data:w,setupState:E,ctx:F,inheritAttrs:k}=e;let B,x;const C=ln(e);try{if(n.shapeFlag&4){const A=i||r;B=Ae(d.call(A,A,p,s,E,w,F)),x=a}else{const A=t;B=Ae(A.length>1?A(s,{attrs:a,slots:l,emit:u}):A(s,null)),x=t.props?a:Vo(a)}}catch(A){Pt.length=0,wn(A,e,1),B=pe(Ft)}let j=B;if(x&&k!==!1){const A=Object.keys(x),{shapeFlag:V}=j;A.length&&V&7&&(o&&A.some(fr)&&(x=Zo(x,o)),j=pt(j,x))}return n.dirs&&(j=pt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),B=j,ln(C),B}const Vo=e=>{let t;for(const n in e)(n==="class"||n==="style"||mn(n))&&((t||(t={}))[n]=e[n]);return t},Zo=(e,t)=>{const n={};for(const r in e)(!fr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qo(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:a}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?qr(r,o,u):!!o;if(a&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const w=d[p];if(o[w]!==r[w]&&!xn(u,w))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?qr(r,o,u):!0:!!o;return!1}function qr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!xn(n,s))return!0}return!1}function Go({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const el=e=>e.__isSuspense;function tl(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Wo(e)}const Xt={};function en(e,t,n){return ts(e,t,n)}function ts(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=K){var l;const a=oo()===((l=G)==null?void 0:l.scope)?G:null;let u,d=!1,p=!1;if(te(e)?(u=()=>e.value,d=on(e)):ut(e)?(u=()=>e,r=!0):S(e)?(p=!0,d=e.some(A=>ut(A)||on(A)),u=()=>e.map(A=>{if(te(A))return A.value;if(ut(A))return nt(A);if(R(A))return Ye(A,a,2)})):R(e)?t?u=()=>Ye(e,a,2):u=()=>{if(!(a&&a.isUnmounted))return w&&w(),Oe(e,a,3,[E])}:u=xe,t&&r){const A=u;u=()=>nt(A())}let w,E=A=>{w=C.onStop=()=>{Ye(A,a,4)}},F;if(zt)if(E=xe,t?n&&Oe(t,a,3,[u(),p?[]:void 0,E]):u(),i==="sync"){const A=Gl();F=A.__watcherHandles||(A.__watcherHandles=[])}else return xe;let k=p?new Array(e.length).fill(Xt):Xt;const B=()=>{if(C.active)if(t){const A=C.run();(r||d||(p?A.some((V,Q)=>Mt(V,k[Q])):Mt(A,k)))&&(w&&w(),Oe(t,a,3,[A,k===Xt?void 0:p&&k[0]===Xt?[]:k,E]),k=A)}else C.run()};B.allowRecurse=!!t;let x;i==="sync"?x=B:i==="post"?x=()=>oe(B,a&&a.suspense):(B.pre=!0,a&&(B.id=a.uid),x=()=>xr(B));const C=new pr(u,x);t?n?B():k=C.run():i==="post"?oe(C.run.bind(C),a&&a.suspense):C.run();const j=()=>{C.stop(),a&&a.scope&&cr(a.scope.effects,C)};return F&&F.push(j),j}function nl(e,t,n){const r=this.proxy,i=J(e)?e.includes(".")?ns(r,e):()=>r[e]:e.bind(r,r);let s;R(t)?s=t:(s=t.handler,n=t);const o=G;mt(this);const l=ts(i,s.bind(r),n);return o?mt(o):it(),l}function ns(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function nt(e,t){if(!Y(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),te(e))nt(e.value,t);else if(S(e))for(let n=0;n<e.length;n++)nt(e[n],t);else if(Pi(e)||ct(e))e.forEach(n=>{nt(n,t)});else if(ki(e))for(const n in e)nt(e[n],t);return e}function Jt(e,t){const n=he;if(n===null)return e;const r=An(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,l,a,u=K]=t[s];o&&(R(o)&&(o={mounted:o,updated:o}),o.deep&&nt(l),i.push({dir:o,instance:r,value:l,oldValue:void 0,arg:a,modifiers:u}))}return e}function Ve(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let a=l.dir[r];a&&(vt(),Oe(a,n,8,[e.el,l,e,t]),bt())}}function rl(e,t){return R(e)?(()=>Z({name:e.name},t,{setup:e}))():e}const tn=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function il(e,t){is(e,"a",t)}function sl(e,t){is(e,"da",t)}function is(e,t,n=G){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(En(t,r,n),n){let i=n.parent;for(;i&&i.parent;)rs(i.parent.vnode)&&ol(r,t,n,i),i=i.parent}}function ol(e,t,n,r){const i=En(t,e,r,!0);os(()=>{cr(r[t],i)},n)}function En(e,t,n=G,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;vt(),mt(n);const l=Oe(t,n,e,o);return it(),bt(),l});return r?i.unshift(s):i.push(s),s}}const $e=e=>(t,n=G)=>(!zt||e==="sp")&&En(e,(...r)=>t(...r),n),ll=$e("bm"),ss=$e("m"),al=$e("bu"),fl=$e("u"),cl=$e("bum"),os=$e("um"),ul=$e("sp"),dl=$e("rtg"),hl=$e("rtc");function pl(e,t=G){En("ec",e,t)}const ls="components";function ml(e,t){return vl(ls,e,!0,t)||e}const gl=Symbol.for("v-ndc");function vl(e,t,n=!0,r=!1){const i=he||G;if(i){const s=i.type;if(e===ls){const l=Jl(s,!1);if(l&&(l===t||l===Me(t)||l===bn(Me(t))))return s}const o=Xr(i[e]||s[e],t)||Xr(i.appContext[e],t);return!o&&r?s:o}}function Xr(e,t){return e&&(e[t]||e[Me(t)]||e[bn(Me(t))])}function Vt(e,t,n,r){let i;const s=n&&n[r];if(S(e)||J(e)){i=new Array(e.length);for(let o=0,l=e.length;o<l;o++)i[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(Y(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s&&s[l]));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const u=o[l];i[l]=t(e[u],u,l,s&&s[l])}}else i=[];return n&&(n[r]=i),i}const Vn=e=>e?vs(e)?An(e)||e.proxy:Vn(e.parent):null,At=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vn(e.parent),$root:e=>Vn(e.root),$emit:e=>e.emit,$options:e=>Or(e),$forceUpdate:e=>e.f||(e.f=()=>xr(e.update)),$nextTick:e=>e.n||(e.n=$o.bind(e.proxy)),$watch:e=>nl.bind(e)}),zn=(e,t)=>e!==K&&!e.__isScriptSetup&&L(e,t),bl={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const E=o[t];if(E!==void 0)switch(E){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(zn(r,t))return o[t]=1,r[t];if(i!==K&&L(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&L(u,t))return o[t]=3,s[t];if(n!==K&&L(n,t))return o[t]=4,n[t];Zn&&(o[t]=0)}}const d=At[t];let p,w;if(d)return t==="$attrs"&&ae(e,"get",t),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==K&&L(n,t))return o[t]=4,n[t];if(w=a.config.globalProperties,L(w,t))return w[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return zn(i,t)?(i[t]=n,!0):r!==K&&L(r,t)?(r[t]=n,!0):L(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||e!==K&&L(e,o)||zn(t,o)||(l=s[0])&&L(l,o)||L(r,o)||L(At,o)||L(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:L(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Jr(e){return S(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Zn=!0;function yl(e){const t=Or(e),n=e.proxy,r=e.ctx;Zn=!1,t.beforeCreate&&Vr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:l,provide:a,inject:u,created:d,beforeMount:p,mounted:w,beforeUpdate:E,updated:F,activated:k,deactivated:B,beforeDestroy:x,beforeUnmount:C,destroyed:j,unmounted:A,render:V,renderTracked:Q,renderTriggered:ve,errorCaptured:ke,serverPrefetch:yt,expose:ue,inheritAttrs:_t,components:Lt,directives:Bt,filters:Mn}=t;if(u&&_l(u,r,null),o)for(const q in o){const U=o[q];R(U)&&(r[q]=U.bind(n))}if(i){const q=i.call(n,n);Y(q)&&(e.data=br(q))}if(Zn=!0,s)for(const q in s){const U=s[q],Xe=R(U)?U.bind(n,n):R(U.get)?U.get.bind(n,n):xe,Dt=!R(U)&&R(U.set)?U.set.bind(n):xe,Je=We({get:Xe,set:Dt});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ee=>Je.value=Ee})}if(l)for(const q in l)as(l[q],r,n,q);if(a){const q=R(a)?a.call(n):a;Reflect.ownKeys(q).forEach(U=>{Cl(U,q[U])})}d&&Vr(d,e,"c");function ne(q,U){S(U)?U.forEach(Xe=>q(Xe.bind(n))):U&&q(U.bind(n))}if(ne(ll,p),ne(ss,w),ne(al,E),ne(fl,F),ne(il,k),ne(sl,B),ne(pl,ke),ne(hl,Q),ne(dl,ve),ne(cl,C),ne(os,A),ne(ul,yt),S(ue))if(ue.length){const q=e.exposed||(e.exposed={});ue.forEach(U=>{Object.defineProperty(q,U,{get:()=>n[U],set:Xe=>n[U]=Xe})})}else e.exposed||(e.exposed={});V&&e.render===xe&&(e.render=V),_t!=null&&(e.inheritAttrs=_t),Lt&&(e.components=Lt),Bt&&(e.directives=Bt)}function _l(e,t,n=xe){S(e)&&(e=Qn(e));for(const r in e){const i=e[r];let s;Y(i)?"default"in i?s=nn(i.from||r,i.default,!0):s=nn(i.from||r):s=nn(i),te(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Vr(e,t,n){Oe(S(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function as(e,t,n,r){const i=r.includes(".")?ns(n,r):()=>n[r];if(J(e)){const s=t[e];R(s)&&en(i,s)}else if(R(e))en(i,e.bind(n));else if(Y(e))if(S(e))e.forEach(s=>as(s,t,n,r));else{const s=R(e.handler)?e.handler.bind(n):t[e.handler];R(s)&&en(i,s,e)}}function Or(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let a;return l?a=l:!i.length&&!n&&!r?a=t:(a={},i.length&&i.forEach(u=>an(a,u,o,!0)),an(a,t,o)),Y(t)&&s.set(t,a),a}function an(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&an(e,s,n,!0),i&&i.forEach(o=>an(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=wl[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const wl={data:Zr,props:Qr,emits:Qr,methods:It,computed:It,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:It,directives:It,watch:Ol,provide:Zr,inject:xl};function Zr(e,t){return t?e?function(){return Z(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function xl(e,t){return It(Qn(e),Qn(t))}function Qn(e){if(S(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?Z(Object.create(null),e,t):t}function Qr(e,t){return e?S(e)&&S(t)?[...new Set([...e,...t])]:Z(Object.create(null),Jr(e),Jr(t??{})):t}function Ol(e,t){if(!e)return t;if(!t)return e;const n=Z(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function fs(){return{app:null,config:{isNativeTag:Ks,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let El=0;function Il(e,t){return function(r,i=null){R(r)||(r=Z({},r)),i!=null&&!Y(i)&&(i=null);const s=fs(),o=new Set;let l=!1;const a=s.app={_uid:El++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ea,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(a,...d)):R(u)&&(o.add(u),u(a,...d))),a},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),a},component(u,d){return d?(s.components[u]=d,a):s.components[u]},directive(u,d){return d?(s.directives[u]=d,a):s.directives[u]},mount(u,d,p){if(!l){const w=pe(r,i);return w.appContext=s,d&&t?t(w,u):e(w,u,p),l=!0,a._container=u,u.__vue_app__=a,An(w.component)||w.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,d){return s.provides[u]=d,a},runWithContext(u){fn=a;try{return u()}finally{fn=null}}};return a}}let fn=null;function Cl(e,t){if(G){let n=G.provides;const r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[e]=t}}function nn(e,t,n=!1){const r=G||he;if(r||fn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&R(t)?t.call(r&&r.proxy):t}}function Al(e,t,n,r=!1){const i={},s={};sn(s,Cn,1),e.propsDefaults=Object.create(null),cs(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Fo(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Pl(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,l=$(i),[a]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let w=d[p];if(xn(e.emitsOptions,w))continue;const E=t[w];if(a)if(L(s,w))E!==s[w]&&(s[w]=E,u=!0);else{const F=Me(w);i[F]=Gn(a,l,F,E,e,!1)}else E!==s[w]&&(s[w]=E,u=!0)}}}else{cs(e,t,i,s)&&(u=!0);let d;for(const p in l)(!t||!L(t,p)&&((d=gt(p))===p||!L(t,d)))&&(a?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=Gn(a,l,p,void 0,e,!0)):delete i[p]);if(s!==l)for(const p in s)(!t||!L(t,p))&&(delete s[p],u=!0)}u&&Le(e,"set","$attrs")}function cs(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(Gt(a))continue;const u=t[a];let d;i&&L(i,d=Me(a))?!s||!s.includes(d)?n[d]=u:(l||(l={}))[d]=u:xn(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(s){const a=$(n),u=l||K;for(let d=0;d<s.length;d++){const p=s[d];n[p]=Gn(i,a,p,u[p],e,!L(u,p))}}return o}function Gn(e,t,n,r,i,s){const o=e[n];if(o!=null){const l=L(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&R(a)){const{propsDefaults:u}=i;n in u?r=u[n]:(mt(i),r=u[n]=a.call(null,t),it())}else r=a}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===gt(n))&&(r=!0))}return r}function us(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},l=[];let a=!1;if(!R(e)){const d=p=>{a=!0;const[w,E]=us(p,t,!0);Z(o,w),E&&l.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!a)return Y(e)&&r.set(e,ft),ft;if(S(s))for(let d=0;d<s.length;d++){const p=Me(s[d]);Gr(p)&&(o[p]=K)}else if(s)for(const d in s){const p=Me(d);if(Gr(p)){const w=s[d],E=o[p]=S(w)||R(w)?{type:w}:Z({},w);if(E){const F=ni(Boolean,E.type),k=ni(String,E.type);E[0]=F>-1,E[1]=k<0||F<k,(F>-1||L(E,"default"))&&l.push(p)}}}const u=[o,l];return Y(e)&&r.set(e,u),u}function Gr(e){return e[0]!=="$"}function ei(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ti(e,t){return ei(e)===ei(t)}function ni(e,t){return S(t)?t.findIndex(n=>ti(n,e)):R(t)&&ti(t,e)?0:-1}const ds=e=>e[0]==="_"||e==="$stable",Er=e=>S(e)?e.map(Ae):[Ae(e)],Tl=(e,t,n)=>{if(t._n)return t;const r=Jo((...i)=>Er(t(...i)),n);return r._c=!1,r},hs=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ds(i))continue;const s=e[i];if(R(s))t[i]=Tl(i,s,r);else if(s!=null){const o=Er(s);t[i]=()=>o}}},ps=(e,t)=>{const n=Er(t);e.slots.default=()=>n},Ml=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),sn(t,"_",n)):hs(t,e.slots={})}else e.slots={},t&&ps(e,t);sn(e.slots,Cn,1)},kl=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=K;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(Z(i,t),!n&&l===1&&delete i._):(s=!t.$stable,hs(t,i)),o=t}else t&&(ps(e,t),o={default:1});if(s)for(const l in i)!ds(l)&&!(l in o)&&delete i[l]};function er(e,t,n,r,i=!1){if(S(e)){e.forEach((w,E)=>er(w,t&&(S(t)?t[E]:t),n,r,i));return}if(tn(r)&&!i)return;const s=r.shapeFlag&4?An(r.component)||r.component.proxy:r.el,o=i?null:s,{i:l,r:a}=e,u=t&&t.r,d=l.refs===K?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==a&&(J(u)?(d[u]=null,L(p,u)&&(p[u]=null)):te(u)&&(u.value=null)),R(a))Ye(a,l,12,[o,d]);else{const w=J(a),E=te(a);if(w||E){const F=()=>{if(e.f){const k=w?L(p,a)?p[a]:d[a]:a.value;i?S(k)&&cr(k,s):S(k)?k.includes(s)||k.push(s):w?(d[a]=[s],L(p,a)&&(p[a]=d[a])):(a.value=[s],e.k&&(d[e.k]=a.value))}else w?(d[a]=o,L(p,a)&&(p[a]=o)):E&&(a.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,oe(F,n)):F()}}}const oe=tl;function Sl(e){return Nl(e)}function Nl(e,t){const n=Wn();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:a,setText:u,setElementText:d,parentNode:p,nextSibling:w,setScopeId:E=xe,insertStaticContent:F}=e,k=(f,c,h,g=null,m=null,y=null,O=!1,b=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!xt(f,c)&&(g=$t(f),Ee(f,m,y,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:T,shapeFlag:I}=c;switch(v){case In:B(f,c,h,g);break;case Ft:x(f,c,h,g);break;case jn:f==null&&C(c,h,g,O);break;case le:Lt(f,c,h,g,m,y,O,b,_);break;default:I&1?V(f,c,h,g,m,y,O,b,_):I&6?Bt(f,c,h,g,m,y,O,b,_):(I&64||I&128)&&v.process(f,c,h,g,m,y,O,b,_,st)}T!=null&&m&&er(T,f&&f.ref,y,c||f,!c)},B=(f,c,h,g)=>{if(f==null)r(c.el=l(c.children),h,g);else{const m=c.el=f.el;c.children!==f.children&&u(m,c.children)}},x=(f,c,h,g)=>{f==null?r(c.el=a(c.children||""),h,g):c.el=f.el},C=(f,c,h,g)=>{[f.el,f.anchor]=F(f.children,c,h,g,f.el,f.anchor)},j=({el:f,anchor:c},h,g)=>{let m;for(;f&&f!==c;)m=w(f),r(f,h,g),f=m;r(c,h,g)},A=({el:f,anchor:c})=>{let h;for(;f&&f!==c;)h=w(f),i(f),f=h;i(c)},V=(f,c,h,g,m,y,O,b,_)=>{O=O||c.type==="svg",f==null?Q(c,h,g,m,y,O,b,_):yt(f,c,m,y,O,b,_)},Q=(f,c,h,g,m,y,O,b)=>{let _,v;const{type:T,props:I,shapeFlag:M,transition:N,dirs:z}=f;if(_=f.el=o(f.type,y,I&&I.is,I),M&8?d(_,f.children):M&16&&ke(f.children,_,null,g,m,y&&T!=="foreignObject",O,b),z&&Ve(f,null,g,"created"),ve(_,f,f.scopeId,O,g),I){for(const H in I)H!=="value"&&!Gt(H)&&s(_,H,null,I[H],y,f.children,g,m,Se);"value"in I&&s(_,"value",null,I.value),(v=I.onVnodeBeforeMount)&&Ce(v,g,f)}z&&Ve(f,null,g,"beforeMount");const W=(!m||m&&!m.pendingBranch)&&N&&!N.persisted;W&&N.beforeEnter(_),r(_,c,h),((v=I&&I.onVnodeMounted)||W||z)&&oe(()=>{v&&Ce(v,g,f),W&&N.enter(_),z&&Ve(f,null,g,"mounted")},m)},ve=(f,c,h,g,m)=>{if(h&&E(f,h),g)for(let y=0;y<g.length;y++)E(f,g[y]);if(m){let y=m.subTree;if(c===y){const O=m.vnode;ve(f,O,O.scopeId,O.slotScopeIds,m.parent)}}},ke=(f,c,h,g,m,y,O,b,_=0)=>{for(let v=_;v<f.length;v++){const T=f[v]=b?Ue(f[v]):Ae(f[v]);k(null,T,c,h,g,m,y,O,b)}},yt=(f,c,h,g,m,y,O)=>{const b=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:T}=c;_|=f.patchFlag&16;const I=f.props||K,M=c.props||K;let N;h&&Ze(h,!1),(N=M.onVnodeBeforeUpdate)&&Ce(N,h,c,f),T&&Ve(c,f,h,"beforeUpdate"),h&&Ze(h,!0);const z=m&&c.type!=="foreignObject";if(v?ue(f.dynamicChildren,v,b,h,g,z,y):O||U(f,c,b,null,h,g,z,y,!1),_>0){if(_&16)_t(b,c,I,M,h,g,m);else if(_&2&&I.class!==M.class&&s(b,"class",null,M.class,m),_&4&&s(b,"style",I.style,M.style,m),_&8){const W=c.dynamicProps;for(let H=0;H<W.length;H++){const X=W[H],be=I[X],ot=M[X];(ot!==be||X==="value")&&s(b,X,be,ot,m,f.children,h,g,Se)}}_&1&&f.children!==c.children&&d(b,c.children)}else!O&&v==null&&_t(b,c,I,M,h,g,m);((N=M.onVnodeUpdated)||T)&&oe(()=>{N&&Ce(N,h,c,f),T&&Ve(c,f,h,"updated")},g)},ue=(f,c,h,g,m,y,O)=>{for(let b=0;b<c.length;b++){const _=f[b],v=c[b],T=_.el&&(_.type===le||!xt(_,v)||_.shapeFlag&70)?p(_.el):h;k(_,v,T,null,g,m,y,O,!0)}},_t=(f,c,h,g,m,y,O)=>{if(h!==g){if(h!==K)for(const b in h)!Gt(b)&&!(b in g)&&s(f,b,h[b],null,O,c.children,m,y,Se);for(const b in g){if(Gt(b))continue;const _=g[b],v=h[b];_!==v&&b!=="value"&&s(f,b,v,_,O,c.children,m,y,Se)}"value"in g&&s(f,"value",h.value,g.value)}},Lt=(f,c,h,g,m,y,O,b,_)=>{const v=c.el=f?f.el:l(""),T=c.anchor=f?f.anchor:l("");let{patchFlag:I,dynamicChildren:M,slotScopeIds:N}=c;N&&(b=b?b.concat(N):N),f==null?(r(v,h,g),r(T,h,g),ke(c.children,h,T,m,y,O,b,_)):I>0&&I&64&&M&&f.dynamicChildren?(ue(f.dynamicChildren,M,h,m,y,O,b),(c.key!=null||m&&c===m.subTree)&&ms(f,c,!0)):U(f,c,h,T,m,y,O,b,_)},Bt=(f,c,h,g,m,y,O,b,_)=>{c.slotScopeIds=b,f==null?c.shapeFlag&512?m.ctx.activate(c,h,g,O,_):Mn(c,h,g,m,y,O,_):Sr(f,c,_)},Mn=(f,c,h,g,m,y,O)=>{const b=f.component=Wl(f,g,m);if(rs(f)&&(b.ctx.renderer=st),Kl(b),b.asyncDep){if(m&&m.registerDep(b,ne),!f.el){const _=b.subTree=pe(Ft);x(null,_,c,h)}return}ne(b,f,c,h,m,y,O)},Sr=(f,c,h)=>{const g=c.component=f.component;if(Qo(f,c,h))if(g.asyncDep&&!g.asyncResolved){q(g,c,h);return}else g.next=c,Uo(g.update),g.update();else c.el=f.el,g.vnode=c},ne=(f,c,h,g,m,y,O)=>{const b=()=>{if(f.isMounted){let{next:T,bu:I,u:M,parent:N,vnode:z}=f,W=T,H;Ze(f,!1),T?(T.el=z.el,q(f,T,O)):T=z,I&&Fn(I),(H=T.props&&T.props.onVnodeBeforeUpdate)&&Ce(H,N,T,z),Ze(f,!0);const X=Rn(f),be=f.subTree;f.subTree=X,k(be,X,p(be.el),$t(be),f,m,y),T.el=X.el,W===null&&Go(f,X.el),M&&oe(M,m),(H=T.props&&T.props.onVnodeUpdated)&&oe(()=>Ce(H,N,T,z),m)}else{let T;const{el:I,props:M}=c,{bm:N,m:z,parent:W}=f,H=tn(c);if(Ze(f,!1),N&&Fn(N),!H&&(T=M&&M.onVnodeBeforeMount)&&Ce(T,W,c),Ze(f,!0),I&&Sn){const X=()=>{f.subTree=Rn(f),Sn(I,f.subTree,f,m,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=Rn(f);k(null,X,h,g,f,m,y),c.el=X.el}if(z&&oe(z,m),!H&&(T=M&&M.onVnodeMounted)){const X=c;oe(()=>Ce(T,W,X),m)}(c.shapeFlag&256||W&&tn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&oe(f.a,m),f.isMounted=!0,c=h=g=null}},_=f.effect=new pr(b,()=>xr(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ze(f,!0),v()},q=(f,c,h)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Pl(f,c.props,g,h),kl(f,c.children,h),vt(),Yr(),bt()},U=(f,c,h,g,m,y,O,b,_=!1)=>{const v=f&&f.children,T=f?f.shapeFlag:0,I=c.children,{patchFlag:M,shapeFlag:N}=c;if(M>0){if(M&128){Dt(v,I,h,g,m,y,O,b,_);return}else if(M&256){Xe(v,I,h,g,m,y,O,b,_);return}}N&8?(T&16&&Se(v,m,y),I!==v&&d(h,I)):T&16?N&16?Dt(v,I,h,g,m,y,O,b,_):Se(v,m,y,!0):(T&8&&d(h,""),N&16&&ke(I,h,g,m,y,O,b,_))},Xe=(f,c,h,g,m,y,O,b,_)=>{f=f||ft,c=c||ft;const v=f.length,T=c.length,I=Math.min(v,T);let M;for(M=0;M<I;M++){const N=c[M]=_?Ue(c[M]):Ae(c[M]);k(f[M],N,h,null,m,y,O,b,_)}v>T?Se(f,m,y,!0,!1,I):ke(c,h,g,m,y,O,b,_,I)},Dt=(f,c,h,g,m,y,O,b,_)=>{let v=0;const T=c.length;let I=f.length-1,M=T-1;for(;v<=I&&v<=M;){const N=f[v],z=c[v]=_?Ue(c[v]):Ae(c[v]);if(xt(N,z))k(N,z,h,null,m,y,O,b,_);else break;v++}for(;v<=I&&v<=M;){const N=f[I],z=c[M]=_?Ue(c[M]):Ae(c[M]);if(xt(N,z))k(N,z,h,null,m,y,O,b,_);else break;I--,M--}if(v>I){if(v<=M){const N=M+1,z=N<T?c[N].el:g;for(;v<=M;)k(null,c[v]=_?Ue(c[v]):Ae(c[v]),h,z,m,y,O,b,_),v++}}else if(v>M)for(;v<=I;)Ee(f[v],m,y,!0),v++;else{const N=v,z=v,W=new Map;for(v=z;v<=M;v++){const fe=c[v]=_?Ue(c[v]):Ae(c[v]);fe.key!=null&&W.set(fe.key,v)}let H,X=0;const be=M-z+1;let ot=!1,Rr=0;const wt=new Array(be);for(v=0;v<be;v++)wt[v]=0;for(v=N;v<=I;v++){const fe=f[v];if(X>=be){Ee(fe,m,y,!0);continue}let Ie;if(fe.key!=null)Ie=W.get(fe.key);else for(H=z;H<=M;H++)if(wt[H-z]===0&&xt(fe,c[H])){Ie=H;break}Ie===void 0?Ee(fe,m,y,!0):(wt[Ie-z]=v+1,Ie>=Rr?Rr=Ie:ot=!0,k(fe,c[Ie],h,null,m,y,O,b,_),X++)}const zr=ot?Fl(wt):ft;for(H=zr.length-1,v=be-1;v>=0;v--){const fe=z+v,Ie=c[fe],jr=fe+1<T?c[fe+1].el:g;wt[v]===0?k(null,Ie,h,jr,m,y,O,b,_):ot&&(H<0||v!==zr[H]?Je(Ie,h,jr,2):H--)}}},Je=(f,c,h,g,m=null)=>{const{el:y,type:O,transition:b,children:_,shapeFlag:v}=f;if(v&6){Je(f.component.subTree,c,h,g);return}if(v&128){f.suspense.move(c,h,g);return}if(v&64){O.move(f,c,h,st);return}if(O===le){r(y,c,h);for(let I=0;I<_.length;I++)Je(_[I],c,h,g);r(f.anchor,c,h);return}if(O===jn){j(f,c,h);return}if(g!==2&&v&1&&b)if(g===0)b.beforeEnter(y),r(y,c,h),oe(()=>b.enter(y),m);else{const{leave:I,delayLeave:M,afterLeave:N}=b,z=()=>r(y,c,h),W=()=>{I(y,()=>{z(),N&&N()})};M?M(y,z,W):W()}else r(y,c,h)},Ee=(f,c,h,g=!1,m=!1)=>{const{type:y,props:O,ref:b,children:_,dynamicChildren:v,shapeFlag:T,patchFlag:I,dirs:M}=f;if(b!=null&&er(b,null,h,f,!0),T&256){c.ctx.deactivate(f);return}const N=T&1&&M,z=!tn(f);let W;if(z&&(W=O&&O.onVnodeBeforeUnmount)&&Ce(W,c,f),T&6)Ws(f.component,h,g);else{if(T&128){f.suspense.unmount(h,g);return}N&&Ve(f,null,c,"beforeUnmount"),T&64?f.type.remove(f,c,h,m,st,g):v&&(y!==le||I>0&&I&64)?Se(v,c,h,!1,!0):(y===le&&I&384||!m&&T&16)&&Se(_,c,h),g&&Nr(f)}(z&&(W=O&&O.onVnodeUnmounted)||N)&&oe(()=>{W&&Ce(W,c,f),N&&Ve(f,null,c,"unmounted")},h)},Nr=f=>{const{type:c,el:h,anchor:g,transition:m}=f;if(c===le){Us(h,g);return}if(c===jn){A(f);return}const y=()=>{i(h),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:O,delayLeave:b}=m,_=()=>O(h,y);b?b(f.el,y,_):_()}else y()},Us=(f,c)=>{let h;for(;f!==c;)h=w(f),i(f),f=h;i(c)},Ws=(f,c,h)=>{const{bum:g,scope:m,update:y,subTree:O,um:b}=f;g&&Fn(g),m.stop(),y&&(y.active=!1,Ee(O,f,c,h)),b&&oe(b,c),oe(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,h,g=!1,m=!1,y=0)=>{for(let O=y;O<f.length;O++)Ee(f[O],c,h,g,m)},$t=f=>f.shapeFlag&6?$t(f.component.subTree):f.shapeFlag&128?f.suspense.next():w(f.anchor||f.el),Fr=(f,c,h)=>{f==null?c._vnode&&Ee(c._vnode,null,null,!0):k(c._vnode||null,f,c,null,null,null,h),Yr(),Qi(),c._vnode=f},st={p:k,um:Ee,m:Je,r:Nr,mt:Mn,mc:ke,pc:U,pbc:ue,n:$t,o:e};let kn,Sn;return t&&([kn,Sn]=t(st)),{render:Fr,hydrate:kn,createApp:Il(Fr,kn)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ms(e,t,n=!1){const r=e.children,i=t.children;if(S(r)&&S(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Ue(i[s]),l.el=o.el),n||ms(o,l)),l.type===In&&(l.el=o.el)}}function Fl(e){const t=e.slice(),n=[0];let r,i,s,o,l;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,e[n[l]]<u?s=l+1:o=l;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Rl=e=>e.__isTeleport,le=Symbol.for("v-fgt"),In=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),jn=Symbol.for("v-stc"),Pt=[];let we=null;function Ne(e=!1){Pt.push(we=e?null:[])}function zl(){Pt.pop(),we=Pt[Pt.length-1]||null}let Rt=1;function ri(e){Rt+=e}function jl(e){return e.dynamicChildren=Rt>0?we||ft:null,zl(),Rt>0&&we&&we.push(e),e}function Fe(e,t,n,r,i,s){return jl(P(e,t,n,r,i,s,!0))}function tr(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Cn="__vInternal",gs=({key:e})=>e??null,rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||te(e)||R(e)?{i:he,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,r=0,i=null,s=e===le?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gs(t),ref:t&&rn(t),scopeId:On,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:he};return l?(Ir(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=J(n)?8:16),Rt>0&&!o&&we&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&we.push(a),a}const pe=Ll;function Ll(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===gl)&&(e=Ft),tr(e)){const l=pt(e,t,!0);return n&&Ir(l,n),Rt>0&&!s&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag|=-2,l}if(Vl(e)&&(e=e.__vccOpts),t){t=Bl(t);let{class:l,style:a}=t;l&&!J(l)&&(t.class=tt(l)),Y(a)&&(Ki(a)&&!S(a)&&(a=Z({},a)),t.style=yn(a))}const o=J(e)?1:el(e)?128:Rl(e)?64:Y(e)?4:R(e)?2:0;return P(e,t,n,r,i,o,s,!0)}function Bl(e){return e?Ki(e)||Cn in e?Z({},e):e:null}function pt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,l=t?$l(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&gs(l),ref:t&&t.ref?n&&i?S(i)?i.concat(rn(t)):[i,rn(t)]:rn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Dl(e=" ",t=0){return pe(In,null,e,t)}function Ae(e){return e==null||typeof e=="boolean"?pe(Ft):S(e)?pe(le,null,e.slice()):typeof e=="object"?Ue(e):pe(In,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function Ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(S(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ir(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Cn in t)?t._ctx=he:i===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[Dl(t)]):n=8);e.children=t,e.shapeFlag|=n}function $l(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=tt([t.class,r.class]));else if(i==="style")t.style=yn([t.style,r.style]);else if(mn(i)){const s=t[i],o=r[i];o&&s!==o&&!(S(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ce(e,t,n,r=null){Oe(e,t,7,[n,r])}const Hl=fs();let Ul=0;function Wl(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Hl,s={uid:Ul++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new io(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:us(r,i),emitsOptions:es(r,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Yo.bind(null,s),e.ce&&e.ce(s),s}let G=null,Cr,lt,ii="__VUE_INSTANCE_SETTERS__";(lt=Wn()[ii])||(lt=Wn()[ii]=[]),lt.push(e=>G=e),Cr=e=>{lt.length>1?lt.forEach(t=>t(e)):lt[0](e)};const mt=e=>{Cr(e),e.scope.on()},it=()=>{G&&G.scope.off(),Cr(null)};function vs(e){return e.vnode.shapeFlag&4}let zt=!1;function Kl(e,t=!1){zt=t;const{props:n,children:r}=e.vnode,i=vs(e);Al(e,n,i,t),Ml(e,r);const s=i?Yl(e,t):void 0;return zt=!1,s}function Yl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yi(new Proxy(e.ctx,bl));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Xl(e):null;mt(e),vt();const s=Ye(r,e,0,[e.props,i]);if(bt(),it(),Ti(s)){if(s.then(it,it),t)return s.then(o=>{si(e,o,t)}).catch(o=>{wn(o,e,0)});e.asyncDep=s}else si(e,s,t)}else bs(e,t)}function si(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Ji(t)),bs(e,n)}let oi;function bs(e,t,n){const r=e.type;if(!e.render){if(!t&&oi&&!r.render){const i=r.template||Or(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,u=Z(Z({isCustomElement:s,delimiters:l},o),a);r.render=oi(i,u)}}e.render=r.render||xe}mt(e),vt(),yl(e),bt(),it()}function ql(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ae(e,"get","$attrs"),t[n]}}))}function Xl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ql(e)},slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in At)return At[n](e)},has(t,n){return n in t||n in At}}))}function Jl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Vl(e){return R(e)&&"__vccOpts"in e}const We=(e,t)=>Bo(e,t,zt);function Zl(e,t,n){const r=arguments.length;return r===2?Y(t)&&!S(t)?tr(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&tr(n)&&(n=[n]),pe(e,t,n))}const Ql=Symbol.for("v-scx"),Gl=()=>nn(Ql),ea="3.3.4",ta="http://www.w3.org/2000/svg",et=typeof document<"u"?document:null,li=et&&et.createElement("template"),na={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?et.createElementNS(ta,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{li.innerHTML=r?`<svg>${e}</svg>`:e;const l=li.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ra(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ia(e,t,n){const r=e.style,i=J(n);if(n&&!i){if(t&&!J(t))for(const s in t)n[s]==null&&nr(r,s,"");for(const s in n)nr(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const ai=/\s*!important$/;function nr(e,t,n){if(S(n))n.forEach(r=>nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=sa(e,t);ai.test(n)?e.setProperty(gt(r),n.replace(ai,""),"important"):e[r]=n}}const fi=["Webkit","Moz","ms"],Ln={};function sa(e,t){const n=Ln[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return Ln[t]=r;r=bn(r);for(let i=0;i<fi.length;i++){const s=fi[i]+r;if(s in e)return Ln[t]=s}return t}const ci="http://www.w3.org/1999/xlink";function oa(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n);else{const s=ro(t);n==null||s&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function la(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Si(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function aa(e,t,n,r){e.addEventListener(t,n,r)}function fa(e,t,n,r){e.removeEventListener(t,n,r)}function ca(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[l,a]=ua(t);if(r){const u=s[t]=pa(r,i);aa(e,l,u,a)}else o&&(fa(e,l,o,a),s[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function ua(e){let t;if(ui.test(e)){t={};let r;for(;r=e.match(ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let Bn=0;const da=Promise.resolve(),ha=()=>Bn||(da.then(()=>Bn=0),Bn=Date.now());function pa(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(ma(r,n.value),t,5,[r])};return n.value=e,n.attached=ha(),n}function ma(e,t){if(S(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const di=/^on[a-z]/,ga=(e,t,n,r,i=!1,s,o,l,a)=>{t==="class"?ra(e,r,i):t==="style"?ia(e,n,r):mn(t)?fr(t)||ca(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):va(e,t,r,i))?la(e,t,r,s,o,l,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),oa(e,t,r,i))};function va(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&di.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||di.test(t)&&J(n)?!1:t in e}const Zt={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ot(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ot(e,!0),r.enter(e)):r.leave(e,()=>{Ot(e,!1)}):Ot(e,t))},beforeUnmount(e,{value:t}){Ot(e,t)}};function Ot(e,t){e.style.display=t?e._vod:"none"}const ba=Z({patchProp:ga},na);let hi;function ya(){return hi||(hi=Sl(ba))}const _a=(...e)=>{const t=ya().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=wa(r);if(!i)return;const s=t._component;!R(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function wa(e){return J(e)?document.querySelector(e):e}const pi=[{id:0,biome:"Forest",radius:10,radiusPerBeat:1,areaUsed:0,area:314.16,maxArea:1e7,heart:{healthMultiplyer:1,dyingState:!0},resources:{Biomass:{amount:500,perloop:10},Fibre:{amount:0,perloop:1}},harvest:{Plants:{amount:0,perloop:100,max:1e11},Trees:{amount:0,perloop:1},Insects:{amount:0,perloop:1},Animals:{amount:0,perloop:1},Birds:{amount:0,perloop:1},Fish:{amount:0,perloop:1},Humans:{amount:0,perloop:1}}}];function Qe(e,t){return t==="cm"?e>=1e3?(e/=1e3,t="m"):e>=1e6&&(e/=1e6,t="km"):t==="mg"&&(e>=1e3?(e/=1e3,t="g"):e>=1e6&&(e/=1e6,t="kg")),t?numberformat.formatShort(e)+t:numberformat.formatShort(e)}function xa(e,t,n){return e*(n/t)-7}const Oa=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const ge=e=>(qo("data-v-d173da9e"),e=e(),Xo(),e),Ea={class:"flexContainer"},Ia={id:"hiveView",class:"flexChild40 flexChild"},Ca=["value","max"],Aa=ge(()=>P("div",{id:"resourceoverview"},null,-1)),Pa={id:"hives"},Ta={class:"hiveinfo"},Ma=ge(()=>P("span",{class:"hivearea"},"Area:",-1)),ka={style:{"margin-bottom":"-3.5px"},class:"hiveAreaTable"},Sa=ge(()=>P("thead",null,[P("tr",null,[P("th",null,"Used"),P("th"),P("th",null,"Occupied"),P("th"),P("th",null,"Available"),P("th")])],-1)),Na=ge(()=>P("td",{class:"slash"},"/ ",-1)),Fa=ge(()=>P("td",{class:"slash"},"/",-1)),Ra={class:"hiveResources"},za=ge(()=>P("p",null,"-",-1)),ja={class:"harvest"},La=ge(()=>P("h3",null,"Hive total",-1)),Ba={id:"rightHandMenu",class:"flexChild60 flexChild"},Da={id:"appTabs"},$a=ge(()=>P("h3",null,"Mutations are here",-1)),Ha=[$a],Ua=ge(()=>P("h3",null,"Mutations are here",-1)),Wa=[Ua],Ka=ge(()=>P("h3",null,"Research is here",-1)),Ya=[Ka],qa=ge(()=>P("h3",null,"Growing is here",-1)),Xa={id:"dev"},Ja=ge(()=>P("h4",null,"I am some debug info",-1)),Va=10,Za={__name:"App",setup(e){function t(){s.value.hive.some(p=>p.resources.Biomass.amount>=s.value.heart.pertick)?s.value.heart.amount<s.value.heart.max?(s.value.heart.amount+=s.value.heart.pertick,s.value.hive.forEach(p=>{p.resources.Biomass.amount>=s.value.heart.pertick?(p.resources.Biomass.amount-=s.value.heart.pertick,p.heart.dyingState=!1):p.heart.dyingState=!0})):s.value.heart.amount==s.value.heart.max&&(s.value.heart.amount=0):s.value.heart.dyingState=!0}function n(){t(),s.value.heart.dyingState==!0&&s.value.hive.forEach(d=>{d.heart.healthMultiplyer=Math.max(d.heart.healthMultiplyer-.001,-1)})}const r=qt(0),i=qt(null);ss(()=>{setInterval(n,Va)});const s=qt({hive:JSON.parse(JSON.stringify(pi)),heart:{amount:0,max:100,pertick:1,multiplyer:1,dyingState:!1},resources:{Biomass:{amount:120,perloop:10},Fibre:{amount:0,perloop:1}}}),o=We(()=>{const d={};return s.value.hive.forEach(p=>{for(const w in p.resources)d[w]?d[w]+=p.resources[w].amount:d[w]=p.resources[w].amount}),d});s.value.resources=o;function l(d,p){const E=s.value.hive[s.value.hive.length-1].id+1,F=JSON.parse(JSON.stringify(pi[0]));F.id=E,F.biome=d,s.value.hive.push(F)}const a=qt({hive:!0,mutations:!1,research:!1,grow:!1});function u(d){for(const p in a.value)a.value[p]=!1;a.value.hasOwnProperty(d)&&(a.value[d]=!0)}return(d,p)=>{const w=ml("font-awesome-icon");return Ne(),Fe(le,null,[P("div",Ea,[P("div",Ia,[P("div",{class:"heartBeat",ref_key:"heartbeatElement",ref:i},[pe(w,{class:"heartIcon",icon:"heart",style:yn({left:Re(xa)(s.value.heart.amount,s.value.heart.max,r.value)+"px"})},null,8,["style"]),P("progress",{class:"growth-progress",value:s.value.heart.amount,max:s.value.heart.max},null,8,Ca)],512),Aa,P("div",Pa,[(Ne(!0),Fe(le,null,Vt(s.value.hive,E=>(Ne(),Fe("div",Ta,[P("span",null,"Biome: "+de(E.biome),1),P("span",null,"Radius: "+de(Re(Qe)(E.radius,"cm")),1),Ma,P("table",ka,[Sa,P("tbody",null,[P("tr",null,[P("td",null,de(Re(Qe)(E.areaUsed,"cm")),1),Na,P("td",null,de(Re(Qe)(E.area,"cm")),1),Fa,P("td",null,de(Re(Qe)(E.maxArea,"cm"))+" sq",1)])])]),P("div",Ra,[(Ne(!0),Fe(le,null,Vt(E.resources,(F,k)=>(Ne(),Fe("div",null,[P("span",null,de(k),1),P("span",null,de(Re(Qe)(F.amount,"mg")),1)]))),256))]),za,(Ne(!0),Fe(le,null,Vt(E.harvest,(F,k)=>(Ne(),Fe("div",ja,[P("span",null,de(k),1),P("span",null,de(Re(Qe)(F.amount)),1)]))),256))]))),256))]),P("div",null,[La,P("ul",null,[(Ne(!0),Fe(le,null,Vt(s.value.resources,(E,F)=>(Ne(),Fe("li",{key:F},de(F)+": "+de(Re(Qe)(E,"mg")),1))),128))])])]),P("aside",Ba,[P("nav",Da,[P("a",{onClick:p[0]||(p[0]=E=>u("hives")),class:tt({active:a.value.hive}),href:"#"},"Hives",2),P("a",{onClick:p[1]||(p[1]=E=>u("mutations")),class:tt({active:a.value.mutations}),href:"#"},"Mutations",2),P("a",{onClick:p[2]||(p[2]=E=>u("research")),class:tt({active:a.value.research}),href:"#"},"Research",2),P("a",{onClick:p[3]||(p[3]=E=>u("grow")),class:tt({active:a.value.grow}),href:"#"},"Grow",2)]),Jt(P("div",null,Ha,512),[[Zt,a.value.hives]]),Jt(P("div",null,Wa,512),[[Zt,a.value.mutations]]),Jt(P("div",null,Ya,512),[[Zt,a.value.research]]),Jt(P("div",null,[qa,P("button",{onClick:p[4]||(p[4]=E=>l("Desert")),id:"addHive"},"add hive")],512),[[Zt,a.value.grow]])])]),P("div",Xa,[Ja,P("pre",null,de(s.value),1)])],64)}}},Qa=Oa(Za,[["__scopeId","data-v-d173da9e"]]);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Tt(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Tt=function(t){return typeof t}:Tt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt(e)}function Ga(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ef(e,t,n){return t&&mi(e.prototype,t),n&&mi(e,n),e}function tf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){tf(e,i,n[i])})}return e}function ys(e,t){return nf(e)||rf(e,t)||sf()}function nf(e){if(Array.isArray(e))return e}function rf(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o=e[Symbol.iterator](),l;!(r=(l=o.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}function sf(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var gi=function(){},Ar={},_s={},of=null,ws={mark:gi,measure:gi};try{typeof window<"u"&&(Ar=window),typeof document<"u"&&(_s=document),typeof MutationObserver<"u"&&(of=MutationObserver),typeof performance<"u"&&(ws=performance)}catch{}var lf=Ar.navigator||{},vi=lf.userAgent,bi=vi===void 0?"":vi,Pn=Ar,ie=_s,Qt=ws;Pn.document;var Pr=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function";~bi.indexOf("MSIE")||~bi.indexOf("Trident/");var Be="___FONT_AWESOME___",xs="fa",Os="svg-inline--fa",af="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Dn={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Es=Pn.FontAwesomeConfig||{};function ff(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function cf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var uf=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uf.forEach(function(e){var t=ys(e,2),n=t[0],r=t[1],i=cf(ff(n));i!=null&&(Es[r]=i)})}var df={familyPrefix:xs,replacementClass:Os,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},rr=D({},df,Es);rr.autoReplaceSvg||(rr.observeMutations=!1);var ce=D({},rr);Pn.FontAwesomeConfig=ce;var De=Pn||{};De[Be]||(De[Be]={});De[Be].styles||(De[Be].styles={});De[Be].hooks||(De[Be].hooks={});De[Be].shims||(De[Be].shims=[]);var Te=De[Be],hf=[],pf=function e(){ie.removeEventListener("DOMContentLoaded",e),ir=1,hf.map(function(t){return t()})},ir=!1;Pr&&(ir=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),ir||ie.addEventListener("DOMContentLoaded",pf));var Tr="pending",Is="settled",cn="fulfilled",un="rejected",mf=function(){},Cs=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",gf=typeof setImmediate>"u"?setTimeout:setImmediate,Ct=[],sr;function vf(){for(var e=0;e<Ct.length;e++)Ct[e][0](Ct[e][1]);Ct=[],sr=!1}function dn(e,t){Ct.push([e,t]),sr||(sr=!0,gf(vf,0))}function bf(e,t){function n(i){Mr(t,i)}function r(i){jt(t,i)}try{e(n,r)}catch(i){r(i)}}function As(e){var t=e.owner,n=t._state,r=t._data,i=e[n],s=e.then;if(typeof i=="function"){n=cn;try{r=i(r)}catch(o){jt(s,o)}}Ps(s,r)||(n===cn&&Mr(s,r),n===un&&jt(s,r))}function Ps(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||Tt(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(i){n||(n=!0,t===i?Ts(e,i):Mr(e,i))},function(i){n||(n=!0,jt(e,i))}),!0}}catch(i){return n||jt(e,i),!0}return!1}function Mr(e,t){(e===t||!Ps(e,t))&&Ts(e,t)}function Ts(e,t){e._state===Tr&&(e._state=Is,e._data=t,dn(yf,e))}function jt(e,t){e._state===Tr&&(e._state=Is,e._data=t,dn(_f,e))}function Ms(e){e._then=e._then.forEach(As)}function yf(e){e._state=cn,Ms(e)}function _f(e){e._state=un,Ms(e),!e._handled&&Cs&&global.process.emit("unhandledRejection",e._data,e)}function wf(e){global.process.emit("rejectionHandled",e)}function me(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof me))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],bf(e,this)}me.prototype={constructor:me,_state:Tr,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(mf),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===un&&Cs&&dn(wf,this)),this._state===cn||this._state===un?dn(As,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}};me.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new me(function(t,n){var r=[],i=0;function s(a){return i++,function(u){r[a]=u,--i||t(r)}}for(var o=0,l;o<e.length;o++)l=e[o],l&&typeof l.then=="function"?l.then(s(o),n):r[o]=l;i||t(r)})};me.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new me(function(t,n){for(var r=0,i;r<e.length;r++)i=e[r],i&&typeof i.then=="function"?i.then(t,n):t(i)})};me.resolve=function(e){return e&&Tt(e)==="object"&&e.constructor===me?e:new me(function(t){t(e)})};me.reject=function(e){return new me(function(t,n){n(e)})};var at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xf(e){if(!(!e||!Pr)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ie.head.insertBefore(t,r),e}}var Of="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hn(){for(var e=12,t="";e-- >0;)t+=Of[Math.random()*62|0];return t}function ks(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ef(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ks(e[n]),'" ')},"").trim()}function Ss(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Ns(e){return e.size!==at.size||e.x!==at.x||e.y!==at.y||e.rotate!==at.rotate||e.flipX||e.flipY}function Fs(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:u}}var $n={x:0,y:0,width:"100%",height:"100%"};function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function If(e){return e.tag==="g"?e.children:[e]}function Cf(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,s=e.maskId,o=e.transform,l=r.width,a=r.icon,u=i.width,d=i.icon,p=Fs({transform:o,containerWidth:u,iconWidth:l}),w={tag:"rect",attributes:D({},$n,{fill:"white"})},E=a.children?{children:a.children.map(yi)}:{},F={tag:"g",attributes:D({},p.inner),children:[yi(D({tag:a.tag,attributes:D({},a.attributes,p.path)},E))]},k={tag:"g",attributes:D({},p.outer),children:[F]},B="mask-".concat(s||hn()),x="clip-".concat(s||hn()),C={tag:"mask",attributes:D({},$n,{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,k]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:If(d)},C]};return t.push(j,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(B,")")},$n)}),{children:t,attributes:n}}function Af(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,s=e.styles,o=Ss(s);if(o.length>0&&(n.style=o),Ns(i)){var l=Fs({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:D({},l.outer),children:[{tag:"g",attributes:D({},l.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D({},r.icon.attributes,l.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function Pf(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Ns(o)&&n.found&&!r.found){var l=n.width,a=n.height,u={x:l/a/2,y:.5};i.style=Ss(D({},s,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Tf(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(ce.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D({},i,{id:o}),children:r}]}]}function Mf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,l=e.symbol,a=e.title,u=e.maskId,d=e.titleId,p=e.extra,w=e.watchable,E=w===void 0?!1:w,F=r.found?r:n,k=F.width,B=F.height,x=i==="fak",C=x?"":"fa-w-".concat(Math.ceil(k/B*16)),j=[ce.replacementClass,s?"".concat(ce.familyPrefix,"-").concat(s):"",C].filter(function(ue){return p.classes.indexOf(ue)===-1}).filter(function(ue){return ue!==""||!!ue}).concat(p.classes).join(" "),A={children:[],attributes:D({},p.attributes,{"data-prefix":i,"data-icon":s,class:j,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(B)})},V=x&&!~p.classes.indexOf("fa-fw")?{width:"".concat(k/B*16*.0625,"em")}:{};E&&(A.attributes[af]=""),a&&A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(d||hn())},children:[a]});var Q=D({},A,{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:D({},V,p.styles)}),ve=r.found&&n.found?Cf(Q):Af(Q),ke=ve.children,yt=ve.attributes;return Q.children=ke,Q.attributes=yt,l?Tf(Q):Pf(Q)}var _i=function(){};ce.measurePerformance&&Qt&&Qt.mark&&Qt.measure;var kf=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Hn=function(t,n,r,i){var s=Object.keys(t),o=s.length,l=i!==void 0?kf(n,i):n,a,u,d;for(r===void 0?(a=1,d=t[s[0]]):(a=0,d=r);a<o;a++)u=s[a],d=l(d,t[u],u,t);return d};function Rs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Object.keys(t).reduce(function(o,l){var a=t[l],u=!!a.icon;return u?o[a.iconName]=a.icon:o[l]=a,o},{});typeof Te.hooks.addPack=="function"&&!i?Te.hooks.addPack(e,s):Te.styles[e]=D({},Te.styles[e]||{},s),e==="fas"&&Rs("fa",t)}var wi=Te.styles,Sf=Te.shims,zs=function(){var t=function(i){return Hn(wi,function(s,o,l){return s[l]=Hn(o,i,{}),s},{})};t(function(r,i,s){return i[3]&&(r[i[3]]=s),r}),t(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var n="far"in wi;Hn(Sf,function(r,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),r[s]={prefix:o,iconName:l},r},{})};zs();Te.styles;function xi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function js(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?ks(e):"<".concat(t," ").concat(Ef(r),">").concat(s.map(js).join(""),"</").concat(t,">")}var Nf=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],l=s.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n):n};function or(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}or.prototype=Object.create(Error.prototype);or.prototype.constructor=or;var Tn={fill:"currentColor"},Ls={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};D({},Tn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var kr=D({},Ls,{attributeName:"opacity"});D({},Tn,{cx:"256",cy:"364",r:"28"}),D({},Ls,{attributeName:"r",values:"28;14;28;28;14;28;"}),D({},kr,{values:"1;0;1;1;0;1;"});D({},Tn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),D({},kr,{values:"1;0;0;0;0;1;"});D({},Tn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),D({},kr,{values:"0;0;1;1;0;0;"});Te.styles;function Oi(e){var t=e[0],n=e[1],r=e.slice(4),i=ys(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ce.familyPrefix,"-").concat(Dn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.familyPrefix,"-").concat(Dn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ce.familyPrefix,"-").concat(Dn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}Te.styles;var Ff=`svg:not(:root).svg-inline--fa {
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
}`;function Rf(){var e=xs,t=Os,n=ce.familyPrefix,r=ce.replacementClass,i=Ff;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var zf=function(){function e(){Ga(this,e),this.definitions={}}return ef(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=D({},n.definitions[l]||{},o[l]),Rs(l,o[l]),zs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],l=o.prefix,a=o.iconName,u=o.icon;n[l]||(n[l]={}),n[l][a]=u}),n}}]),e}();function jf(){ce.autoAddCss&&!Ii&&(xf(Rf()),Ii=!0)}function Lf(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return js(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Pr){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ei(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return xi(Bs.definitions,n,r)||xi(Te.styles,n,r)}function Bf(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ei(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ei(i||{})),e(r,D({},n,{mask:i}))}}var Bs=new zf,Ii=!1,lr={transform:function(t){return Nf(t)}},Df=Bf(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?at:n,i=t.symbol,s=i===void 0?!1:i,o=t.mask,l=o===void 0?null:o,a=t.maskId,u=a===void 0?null:a,d=t.title,p=d===void 0?null:d,w=t.titleId,E=w===void 0?null:w,F=t.classes,k=F===void 0?[]:F,B=t.attributes,x=B===void 0?{}:B,C=t.styles,j=C===void 0?{}:C;if(e){var A=e.prefix,V=e.iconName,Q=e.icon;return Lf(D({type:"icon"},e),function(){return jf(),ce.autoA11y&&(p?x["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(E||hn()):(x["aria-hidden"]="true",x.focusable="false")),Mf({icons:{main:Oi(Q),mask:l?Oi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:V,transform:D({},at,r),symbol:s,title:p,maskId:u,titleId:E,extra:{attributes:x,styles:j,classes:k}})})}});function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pn(e){"@babel/helpers - typeof";return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pn(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $f(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hf(e,t){if(e==null)return{};var n=$f(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ds={exports:{}};(function(e){(function(t){var n=function(x,C,j){if(!u(C)||p(C)||w(C)||E(C)||a(C))return C;var A,V=0,Q=0;if(d(C))for(A=[],Q=C.length;V<Q;V++)A.push(n(x,C[V],j));else{A={};for(var ve in C)Object.prototype.hasOwnProperty.call(C,ve)&&(A[x(ve,j)]=n(x,C[ve],j))}return A},r=function(x,C){C=C||{};var j=C.separator||"_",A=C.split||/(?=[A-Z])/;return x.split(A).join(j)},i=function(x){return F(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,j){return j?j.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},s=function(x){var C=i(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},l=Object.prototype.toString,a=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},d=function(x){return l.call(x)=="[object Array]"},p=function(x){return l.call(x)=="[object Date]"},w=function(x){return l.call(x)=="[object RegExp]"},E=function(x){return l.call(x)=="[object Boolean]"},F=function(x){return x=x-0,x===x},k=function(x,C){var j=C&&"process"in C?C.process:C;return typeof j!="function"?x:function(A,V){return j(A,x,V)}},B={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(x,C){return n(k(i,C),x)},decamelizeKeys:function(x,C){return n(k(o,C),x,C)},pascalizeKeys:function(x,C){return n(k(s,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=B:t.humps=B})(Uf)})(Ds);var Wf=Ds.exports,Kf=["class","style"];function Yf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Wf.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function qf(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function $s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(a){return $s(a)}),i=Object.keys(e.attributes||{}).reduce(function(a,u){var d=e.attributes[u];switch(u){case"class":a.class=qf(d);break;case"style":a.style=Yf(d);break;default:a.attrs[u]=d}return a},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,l=Hf(n,Kf);return Zl(e.tag,je(je(je({},t),{},{class:i.class,style:je(je({},i.style),o)},i.attrs),l),r)}var Hs=!1;try{Hs=!0}catch{}function Xf(){if(!Hs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Un(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function Jf(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ai(e){if(e&&pn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(lr.icon)return lr.icon(e);if(e===null)return null;if(pn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Vf=rl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=We(function(){return Ai(t.icon)}),s=We(function(){return Un("classes",Jf(t))}),o=We(function(){return Un("transform",typeof t.transform=="string"?lr.transform(t.transform):t.transform)}),l=We(function(){return Un("mask",Ai(t.mask))}),a=We(function(){return Df(i.value,je(je(je(je({},s.value),o.value),l.value),{},{symbol:t.symbol,title:t.title}))});en(a,function(d){if(!d)return Xf("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var u=We(function(){return a.value?$s(a.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Zf={prefix:"fas",iconName:"heart",icon:[512,512,[],"f004","M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]},Qf={prefix:"fas",iconName:"user-secret",icon:[448,512,[],"f21b","M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"]};Bs.add(Qf,Zf);_a(Qa).component("font-awesome-icon",Vf).mount("#app");
