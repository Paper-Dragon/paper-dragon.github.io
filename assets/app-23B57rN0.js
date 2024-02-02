/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function No(n,e){const t=new Set(n.split(","));return e?s=>t.has(s.toLowerCase()):s=>t.has(s)}const Dn={},Pt=[],de=()=>{},Wu=()=>!1,gs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mo=n=>n.startsWith("onUpdate:"),Nn=Object.assign,$o=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qu=Object.prototype.hasOwnProperty,vn=(n,e)=>qu.call(n,e),nn=Array.isArray,xt=n=>ha(n)==="[object Map]",fp=n=>ha(n)==="[object Set]",an=n=>typeof n=="function",In=n=>typeof n=="string",jt=n=>typeof n=="symbol",xn=n=>n!==null&&typeof n=="object",bp=n=>(xn(n)||an(n))&&an(n.then)&&an(n.catch),Ep=Object.prototype.toString,ha=n=>Ep.call(n),Qu=n=>ha(n).slice(8,-1),gp=n=>ha(n)==="[object Object]",Uo=n=>In(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,as=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zu=/-(\w)/g,le=va(n=>n.replace(Zu,(e,t)=>t?t.toUpperCase():"")),Ju=/\B([A-Z])/g,at=va(n=>n.replace(Ju,"-$1").toLowerCase()),_s=va(n=>n.charAt(0).toUpperCase()+n.slice(1)),Va=va(n=>n?`on${_s(n)}`:""),Oe=(n,e)=>!Object.is(n,e),Ys=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},na=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},uo=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Yu=n=>{const e=In(n)?Number(n):NaN;return isNaN(e)?n:e};let jr;const _p=()=>jr||(jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(n){if(nn(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],a=In(s)?td(s):Ho(s);if(a)for(const o in a)e[o]=a[o]}return e}else if(In(n)||xn(n))return n}const Xu=/;(?![^(]*\))/g,nd=/:([^]+)/,ed=/\/\*[^]*?\*\//g;function td(n){const e={};return n.replace(ed,"").split(Xu).forEach(t=>{if(t){const s=t.split(nd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Go(n){let e="";if(In(n))e=n;else if(nn(n))for(let t=0;t<n.length;t++){const s=Go(n[t]);s&&(e+=s+" ")}else if(xn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=No(sd);function yp(n){return!!n||n===""}const R8=n=>In(n)?n:n==null?"":nn(n)||xn(n)&&(n.toString===Ep||!an(n.toString))?JSON.stringify(n,Ap,2):String(n),Ap=(n,e)=>e&&e.__v_isRef?Ap(n,e.value):xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,a],o)=>(t[Fa(s,o)+" =>"]=a,t),{})}:fp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fa(t))}:jt(e)?Fa(e):xn(e)&&!nn(e)&&!gp(e)?String(e):e,Fa=(n,e="")=>{var t;return jt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let te;class od{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=te,!e&&te&&(this.index=(te.scopes||(te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=te;try{return te=this,e()}finally{te=t}}}on(){te=this}off(){te=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function rd(n,e=te){e&&e.active&&e.effects.push(n)}function Bp(){return te}function ld(n){te&&te.cleanups.push(n)}let vt;class zo{constructor(e,t,s,a){this.fn=e,this.trigger=t,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rd(this,a)}get dirty(){if(this._dirtyLevel===1){ft();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(pd(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),bt()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=nt,t=vt;try{return nt=!0,vt=this,this._runnings++,Wr(this),this.fn()}finally{qr(this),this._runnings--,vt=t,nt=e}}stop(){var e;this.active&&(Wr(this),qr(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function pd(n){return n.value}function Wr(n){n._trackId++,n._depsLength=0}function qr(n){if(n.deps&&n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)wp(n.deps[e],n);n.deps.length=n._depsLength}}function wp(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let nt=!0,mo=0;const Dp=[];function ft(){Dp.push(nt),nt=!1}function bt(){const n=Dp.pop();nt=n===void 0?!0:n}function Ko(){mo++}function jo(){for(mo--;!mo&&ho.length;)ho.shift()()}function Pp(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const s=n.deps[n._depsLength];s!==e?(s&&wp(s,n),n.deps[n._depsLength++]=e):n._depsLength++}}const ho=[];function xp(n,e,t){Ko();for(const s of n.keys())if(s._dirtyLevel<e&&n.get(s)===s._trackId){const a=s._dirtyLevel;s._dirtyLevel=e,a===0&&(s._shouldSchedule=!0,s.trigger())}Op(n),jo()}function Op(n){for(const e of n.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&n.get(e)===e._trackId&&(e._shouldSchedule=!1,ho.push(e.scheduler))}const Lp=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},ea=new WeakMap,kt=Symbol(""),vo=Symbol("");function Xn(n,e,t){if(nt&&vt){let s=ea.get(n);s||ea.set(n,s=new Map);let a=s.get(t);a||s.set(t,a=Lp(()=>s.delete(t))),Pp(vt,a)}}function Ne(n,e,t,s,a,o){const r=ea.get(n);if(!r)return;let i=[];if(e==="clear")i=[...r.values()];else if(t==="length"&&nn(n)){const c=Number(s);r.forEach((u,d)=>{(d==="length"||!jt(d)&&d>=c)&&i.push(u)})}else switch(t!==void 0&&i.push(r.get(t)),e){case"add":nn(n)?Uo(t)&&i.push(r.get("length")):(i.push(r.get(kt)),xt(n)&&i.push(r.get(vo)));break;case"delete":nn(n)||(i.push(r.get(kt)),xt(n)&&i.push(r.get(vo)));break;case"set":xt(n)&&i.push(r.get(kt));break}Ko();for(const c of i)c&&xp(c,2);jo()}function id(n,e){var t;return(t=ea.get(n))==null?void 0:t.get(e)}const cd=No("__proto__,__v_isRef,__isVue"),Sp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jt)),Qr=ud();function ud(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const s=cn(this);for(let o=0,r=this.length;o<r;o++)Xn(s,"get",o+"");const a=s[e](...t);return a===-1||a===!1?s[e](...t.map(cn)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ft(),Ko();const s=cn(this)[e].apply(this,t);return jo(),bt(),s}}),n}function dd(n){const e=cn(this);return Xn(e,"has",n),e.hasOwnProperty(n)}class Rp{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,s){const a=this._isReadonly,o=this._shallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(a?o?wd:Vp:o?Cp:Ip).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=nn(e);if(!a){if(r&&vn(Qr,t))return Reflect.get(Qr,t,s);if(t==="hasOwnProperty")return dd}const i=Reflect.get(e,t,s);return(jt(t)?Sp.has(t):cd(t))||(a||Xn(e,"get",t),o)?i:Gn(i)?r&&Uo(t)?i:i.value:xn(i)?a?$e(i):Wt(i):i}}class Tp extends Rp{constructor(e=!1){super(!1,e)}set(e,t,s,a){let o=e[t];if(!this._shallow){const c=Vt(o);if(!ta(s)&&!Vt(s)&&(o=cn(o),s=cn(s)),!nn(e)&&Gn(o)&&!Gn(s))return c?!1:(o.value=s,!0)}const r=nn(e)&&Uo(t)?Number(t)<e.length:vn(e,t),i=Reflect.set(e,t,s,a);return e===cn(a)&&(r?Oe(s,o)&&Ne(e,"set",t,s):Ne(e,"add",t,s)),i}deleteProperty(e,t){const s=vn(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&s&&Ne(e,"delete",t,void 0),a}has(e,t){const s=Reflect.has(e,t);return(!jt(t)||!Sp.has(t))&&Xn(e,"has",t),s}ownKeys(e){return Xn(e,"iterate",nn(e)?"length":kt),Reflect.ownKeys(e)}}class md extends Rp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const hd=new Tp,vd=new md,kd=new Tp(!0),Wo=n=>n,ka=n=>Reflect.getPrototypeOf(n);function Vs(n,e,t=!1,s=!1){n=n.__v_raw;const a=cn(n),o=cn(e);t||(Oe(e,o)&&Xn(a,"get",e),Xn(a,"get",o));const{has:r}=ka(a),i=s?Wo:t?Zo:ds;if(r.call(a,e))return i(n.get(e));if(r.call(a,o))return i(n.get(o));n!==a&&n.get(e)}function Fs(n,e=!1){const t=this.__v_raw,s=cn(t),a=cn(n);return e||(Oe(n,a)&&Xn(s,"has",n),Xn(s,"has",a)),n===a?t.has(n):t.has(n)||t.has(a)}function Ns(n,e=!1){return n=n.__v_raw,!e&&Xn(cn(n),"iterate",kt),Reflect.get(n,"size",n)}function Zr(n){n=cn(n);const e=cn(this);return ka(e).has.call(e,n)||(e.add(n),Ne(e,"add",n,n)),this}function Jr(n,e){e=cn(e);const t=cn(this),{has:s,get:a}=ka(t);let o=s.call(t,n);o||(n=cn(n),o=s.call(t,n));const r=a.call(t,n);return t.set(n,e),o?Oe(e,r)&&Ne(t,"set",n,e):Ne(t,"add",n,e),this}function Yr(n){const e=cn(this),{has:t,get:s}=ka(e);let a=t.call(e,n);a||(n=cn(n),a=t.call(e,n)),s&&s.call(e,n);const o=e.delete(n);return a&&Ne(e,"delete",n,void 0),o}function Xr(){const n=cn(this),e=n.size!==0,t=n.clear();return e&&Ne(n,"clear",void 0,void 0),t}function Ms(n,e){return function(s,a){const o=this,r=o.__v_raw,i=cn(r),c=e?Wo:n?Zo:ds;return!n&&Xn(i,"iterate",kt),r.forEach((u,d)=>s.call(a,c(u),c(d),o))}}function $s(n,e,t){return function(...s){const a=this.__v_raw,o=cn(a),r=xt(o),i=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,u=a[n](...s),d=t?Wo:e?Zo:ds;return!e&&Xn(o,"iterate",c?vo:kt),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:i?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function ze(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fd(){const n={get(o){return Vs(this,o)},get size(){return Ns(this)},has:Fs,add:Zr,set:Jr,delete:Yr,clear:Xr,forEach:Ms(!1,!1)},e={get(o){return Vs(this,o,!1,!0)},get size(){return Ns(this)},has:Fs,add:Zr,set:Jr,delete:Yr,clear:Xr,forEach:Ms(!1,!0)},t={get(o){return Vs(this,o,!0)},get size(){return Ns(this,!0)},has(o){return Fs.call(this,o,!0)},add:ze("add"),set:ze("set"),delete:ze("delete"),clear:ze("clear"),forEach:Ms(!0,!1)},s={get(o){return Vs(this,o,!0,!0)},get size(){return Ns(this,!0)},has(o){return Fs.call(this,o,!0)},add:ze("add"),set:ze("set"),delete:ze("delete"),clear:ze("clear"),forEach:Ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=$s(o,!1,!1),t[o]=$s(o,!0,!1),e[o]=$s(o,!1,!0),s[o]=$s(o,!0,!0)}),[n,t,e,s]}const[bd,Ed,gd,_d]=fd();function qo(n,e){const t=e?n?_d:gd:n?Ed:bd;return(s,a,o)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?s:Reflect.get(vn(t,a)&&a in s?t:s,a,o)}const yd={get:qo(!1,!1)},Ad={get:qo(!1,!0)},Bd={get:qo(!0,!1)},Ip=new WeakMap,Cp=new WeakMap,Vp=new WeakMap,wd=new WeakMap;function Dd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pd(n){return n.__v_skip||!Object.isExtensible(n)?0:Dd(Qu(n))}function Wt(n){return Vt(n)?n:Qo(n,!1,hd,yd,Ip)}function Fp(n){return Qo(n,!1,kd,Ad,Cp)}function $e(n){return Qo(n,!0,vd,Bd,Vp)}function Qo(n,e,t,s,a){if(!xn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=a.get(n);if(o)return o;const r=Pd(n);if(r===0)return n;const i=new Proxy(n,r===2?s:t);return a.set(n,i),i}function Ot(n){return Vt(n)?Ot(n.__v_raw):!!(n&&n.__v_isReactive)}function Vt(n){return!!(n&&n.__v_isReadonly)}function ta(n){return!!(n&&n.__v_isShallow)}function Np(n){return Ot(n)||Vt(n)}function cn(n){const e=n&&n.__v_raw;return e?cn(e):n}function Mp(n){return na(n,"__v_skip",!0),n}const ds=n=>xn(n)?Wt(n):n,Zo=n=>xn(n)?$e(n):n;class $p{constructor(e,t,s,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zo(()=>e(this._value),()=>os(this,1),()=>this.dep&&Op(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const e=cn(this);return(!e._cacheable||e.effect.dirty)&&Oe(e._value,e._value=e.effect.run())&&os(e,2),Jo(e),e.effect._dirtyLevel>=1&&os(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function xd(n,e,t=!1){let s,a;const o=an(n);return o?(s=n,a=de):(s=n.get,a=n.set),new $p(s,a,o||!a,t)}function Jo(n){nt&&vt&&(n=cn(n),Pp(vt,n.dep||(n.dep=Lp(()=>n.dep=void 0,n instanceof $p?n:void 0))))}function os(n,e=2,t){n=cn(n);const s=n.dep;s&&xp(s,e)}function Gn(n){return!!(n&&n.__v_isRef===!0)}function W(n){return Up(n,!1)}function Pn(n){return Up(n,!0)}function Up(n,e){return Gn(n)?n:new Od(n,e)}class Od{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:cn(e),this._value=t?e:ds(e)}get value(){return Jo(this),this._value}set value(e){const t=this.__v_isShallow||ta(e)||Vt(e);e=t?e:cn(e),Oe(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ds(e),os(this,2))}}function ge(n){return Gn(n)?n.value:n}const Ld={get:(n,e,t)=>ge(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const a=n[e];return Gn(a)&&!Gn(t)?(a.value=t,!0):Reflect.set(n,e,t,s)}};function Hp(n){return Ot(n)?n:new Proxy(n,Ld)}class Sd{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:s}=e(()=>Jo(this),()=>os(this));this._get=t,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Yo(n){return new Sd(n)}class Rd{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return id(cn(this._object),this._key)}}class Td{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qt(n,e,t){return Gn(n)?n:an(n)?new Td(n):xn(n)&&arguments.length>1?Id(n,e,t):W(n)}function Id(n,e,t){const s=n[e];return Gn(s)?s:new Rd(n,e,t)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function et(n,e,t,s){let a;try{a=s?n(...s):n()}catch(o){ys(o,e,t)}return a}function me(n,e,t,s){if(an(n)){const o=et(n,e,t,s);return o&&bp(o)&&o.catch(r=>{ys(r,e,t)}),o}const a=[];for(let o=0;o<n.length;o++)a.push(me(n[o],e,t,s));return a}function ys(n,e,t,s=!0){const a=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,i=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,r,i)===!1)return}o=o.parent}const c=e.appContext.config.errorHandler;if(c){et(c,null,10,[n,r,i]);return}}Cd(n,t,a,s)}function Cd(n,e,t,s=!0){console.error(n)}let ms=!1,ko=!1;const Kn=[];let Pe=0;const Lt=[];let Qe=null,ut=0;const Gp=Promise.resolve();let Xo=null;function ot(n){const e=Xo||Gp;return n?e.then(this?n.bind(this):n):e}function Vd(n){let e=Pe+1,t=Kn.length;for(;e<t;){const s=e+t>>>1,a=Kn[s],o=hs(a);o<n||o===n&&a.pre?e=s+1:t=s}return e}function fa(n){(!Kn.length||!Kn.includes(n,ms&&n.allowRecurse?Pe+1:Pe))&&(n.id==null?Kn.push(n):Kn.splice(Vd(n.id),0,n),zp())}function zp(){!ms&&!ko&&(ko=!0,Xo=Gp.then(Kp))}function Fd(n){const e=Kn.indexOf(n);e>Pe&&Kn.splice(e,1)}function Nd(n){nn(n)?Lt.push(...n):(!Qe||!Qe.includes(n,n.allowRecurse?ut+1:ut))&&Lt.push(n),zp()}function nl(n,e,t=ms?Pe+1:0){for(;t<Kn.length;t++){const s=Kn[t];if(s&&s.pre){if(n&&s.id!==n.uid)continue;Kn.splice(t,1),t--,s()}}}function sa(n){if(Lt.length){const e=[...new Set(Lt)].sort((t,s)=>hs(t)-hs(s));if(Lt.length=0,Qe){Qe.push(...e);return}for(Qe=e,ut=0;ut<Qe.length;ut++)Qe[ut]();Qe=null,ut=0}}const hs=n=>n.id==null?1/0:n.id,Md=(n,e)=>{const t=hs(n)-hs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Kp(n){ko=!1,ms=!0,Kn.sort(Md);try{for(Pe=0;Pe<Kn.length;Pe++){const e=Kn[Pe];e&&e.active!==!1&&et(e,null,14)}}finally{Pe=0,Kn.length=0,sa(),ms=!1,Xo=null,(Kn.length||Lt.length)&&Kp()}}function $d(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Dn;let a=t;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:v}=s[d]||Dn;v&&(a=t.map(k=>In(k)?k.trim():k)),m&&(a=t.map(uo))}let i,c=s[i=Va(e)]||s[i=Va(le(e))];!c&&o&&(c=s[i=Va(at(e))]),c&&me(c,n,6,a);const u=s[i+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[i])return;n.emitted[i]=!0,me(u,n,6,a)}}function jp(n,e,t=!1){const s=e.emitsCache,a=s.get(n);if(a!==void 0)return a;const o=n.emits;let r={},i=!1;if(!an(n)){const c=u=>{const d=jp(u,e,!0);d&&(i=!0,Nn(r,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!i?(xn(n)&&s.set(n,null),null):(nn(o)?o.forEach(c=>r[c]=null):Nn(r,o),xn(n)&&s.set(n,r),r)}function ba(n,e){return!n||!gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),vn(n,e[0].toLowerCase()+e.slice(1))||vn(n,at(e))||vn(n,e))}let Mn=null,Ea=null;function aa(n){const e=Mn;return Mn=n,Ea=n&&n.type.__scopeId||null,e}function T8(n){Ea=n}function I8(){Ea=null}function Ud(n,e=Mn,t){if(!e||n._n)return n;const s=(...a)=>{s._d&&dl(-1);const o=aa(e);let r;try{r=n(...a)}finally{aa(o),s._d&&dl(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Na(n){const{type:e,vnode:t,proxy:s,withProxy:a,props:o,propsOptions:[r],slots:i,attrs:c,emit:u,render:d,renderCache:m,data:v,setupState:k,ctx:b,inheritAttrs:y}=n;let A,_;const P=aa(n);try{if(t.shapeFlag&4){const x=a||s,M=x;A=Ee(d.call(M,x,m,o,k,v,b)),_=c}else{const x=e;A=Ee(x.length>1?x(o,{attrs:c,slots:i,emit:u}):x(o,null)),_=e.props?c:Hd(c)}}catch(x){ps.length=0,ys(x,n,1),A=Tn(re)}let g=A;if(_&&y!==!1){const x=Object.keys(_),{shapeFlag:M}=g;x.length&&M&7&&(r&&x.some(Mo)&&(_=Gd(_,r)),g=tt(g,_))}return t.dirs&&(g=tt(g),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&(g.transition=t.transition),A=g,aa(P),A}const Hd=n=>{let e;for(const t in n)(t==="class"||t==="style"||gs(t))&&((e||(e={}))[t]=n[t]);return e},Gd=(n,e)=>{const t={};for(const s in n)(!Mo(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function zd(n,e,t){const{props:s,children:a,component:o}=n,{props:r,children:i,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?el(s,r,u):!!r;if(c&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(r[v]!==s[v]&&!ba(u,v))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:s===r?!1:s?r?el(s,r,u):!0:!!r;return!1}function el(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let a=0;a<s.length;a++){const o=s[a];if(e[o]!==n[o]&&!ba(t,o))return!0}return!1}function Kd({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wp="components";function oe(n,e){return Wd(Wp,n,!0,e)||n}const jd=Symbol.for("v-ndc");function Wd(n,e,t=!0,s=!1){const a=Mn||Hn;if(a){const o=a.type;if(n===Wp){const i=Um(o,!1);if(i&&(i===e||i===le(e)||i===_s(le(e))))return o}const r=tl(a[n]||o[n],e)||tl(a.appContext[n],e);return!r&&s?o:r}}function tl(n,e){return n&&(n[e]||n[le(e)]||n[_s(le(e))])}const qd=n=>n.__isSuspense;function qp(n,e){e&&e.pendingBranch?nn(n)?e.effects.push(...n):e.effects.push(n):Nd(n)}const Qd=Symbol.for("v-scx"),Zd=()=>ln(Qd);function Qp(n,e){return ga(n,null,e)}function Jd(n,e){return ga(n,null,{flush:"sync"})}const Us={};function un(n,e,t){return ga(n,e,t)}function ga(n,e,{immediate:t,deep:s,flush:a,once:o,onTrack:r,onTrigger:i}=Dn){if(e&&o){const D=e;e=(...F)=>{D(...F),M()}}const c=Hn,u=D=>s===!0?D:mt(D,s===!1?1:void 0);let d,m=!1,v=!1;if(Gn(n)?(d=()=>n.value,m=ta(n)):Ot(n)?(d=()=>u(n),m=!0):nn(n)?(v=!0,m=n.some(D=>Ot(D)||ta(D)),d=()=>n.map(D=>{if(Gn(D))return D.value;if(Ot(D))return u(D);if(an(D))return et(D,c,2)})):an(n)?e?d=()=>et(n,c,2):d=()=>(k&&k(),me(n,c,3,[b])):d=de,e&&s){const D=d;d=()=>mt(D())}let k,b=D=>{k=g.onStop=()=>{et(D,c,4),k=g.onStop=void 0}},y;if(ws)if(b=de,e?t&&me(e,c,3,[d(),v?[]:void 0,b]):d(),a==="sync"){const D=Zd();y=D.__watcherHandles||(D.__watcherHandles=[])}else return de;let A=v?new Array(n.length).fill(Us):Us;const _=()=>{if(!(!g.active||!g.dirty))if(e){const D=g.run();(s||m||(v?D.some((F,T)=>Oe(F,A[T])):Oe(D,A)))&&(k&&k(),me(e,c,3,[D,A===Us?void 0:v&&A[0]===Us?[]:A,b]),A=D)}else g.run()};_.allowRecurse=!!e;let P;a==="sync"?P=_:a==="post"?P=()=>Jn(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),P=()=>fa(_));const g=new zo(d,de,P),x=Bp(),M=()=>{g.stop(),x&&$o(x.effects,g)};return e?t?_():A=g.run():a==="post"?Jn(g.run.bind(g),c&&c.suspense):g.run(),y&&y.push(M),M}function Yd(n,e,t){const s=this.proxy,a=In(n)?n.includes(".")?Zp(s,n):()=>s[n]:n.bind(s,s);let o;an(e)?o=e:(o=e.handler,t=e);const r=Bs(this),i=ga(a,o.bind(s),t);return r(),i}function Zp(n,e){const t=e.split(".");return()=>{let s=n;for(let a=0;a<t.length&&s;a++)s=s[t[a]];return s}}function mt(n,e,t=0,s){if(!xn(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(s=s||new Set,s.has(n))return n;if(s.add(n),Gn(n))mt(n.value,e,t,s);else if(nn(n))for(let a=0;a<n.length;a++)mt(n[a],e,t,s);else if(fp(n)||xt(n))n.forEach(a=>{mt(a,e,t,s)});else if(gp(n))for(const a in n)mt(n[a],e,t,s);return n}function C8(n,e){if(Mn===null)return n;const t=Aa(Mn)||Mn.proxy,s=n.dirs||(n.dirs=[]);for(let a=0;a<e.length;a++){let[o,r,i,c=Dn]=e[a];o&&(an(o)&&(o={mounted:o,updated:o}),o.deep&&mt(r),s.push({dir:o,instance:t,value:r,oldValue:void 0,arg:i,modifiers:c}))}return n}function De(n,e,t,s){const a=n.dirs,o=e&&e.dirs;for(let r=0;r<a.length;r++){const i=a[r];o&&(i.oldValue=o[r].value);let c=i.dir[s];c&&(ft(),me(c,t,8,[n.el,i,n,e]),bt())}}const Ze=Symbol("_leaveCb"),Hs=Symbol("_enterCb");function Jp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dn(()=>{n.isMounted=!0}),er(()=>{n.isUnmounting=!0}),n}const ie=[Function,Array],Yp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},Xd={name:"BaseTransition",props:Yp,setup(n,{slots:e}){const t=gt(),s=Jp();let a;return()=>{const o=e.default&&nr(e.default(),!0);if(!o||!o.length)return;let r=o[0];if(o.length>1){for(const y of o)if(y.type!==re){r=y;break}}const i=cn(n),{mode:c}=i;if(s.isLeaving)return Ma(r);const u=sl(r);if(!u)return Ma(r);const d=vs(u,i,s,t);ks(u,d);const m=t.subTree,v=m&&sl(m);let k=!1;const{getTransitionKey:b}=u.type;if(b){const y=b();a===void 0?a=y:y!==a&&(a=y,k=!0)}if(v&&v.type!==re&&(!dt(u,v)||k)){const y=vs(v,i,s,t);if(ks(v,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Ma(r);c==="in-out"&&u.type!==re&&(y.delayLeave=(A,_,P)=>{const g=Xp(s,v);g[String(v.key)]=v,A[Ze]=()=>{_(),A[Ze]=void 0,delete d.delayedLeave},d.delayedLeave=P})}return r}}},nm=Xd;function Xp(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function vs(n,e,t,s){const{appear:a,mode:o,persisted:r=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:v,onAfterLeave:k,onLeaveCancelled:b,onBeforeAppear:y,onAppear:A,onAfterAppear:_,onAppearCancelled:P}=e,g=String(n.key),x=Xp(t,n),M=(T,I)=>{T&&me(T,s,9,I)},D=(T,I)=>{const U=I[1];M(T,I),nn(T)?T.every(J=>J.length<=1)&&U():T.length<=1&&U()},F={mode:o,persisted:r,beforeEnter(T){let I=i;if(!t.isMounted)if(a)I=y||i;else return;T[Ze]&&T[Ze](!0);const U=x[g];U&&dt(n,U)&&U.el[Ze]&&U.el[Ze](),M(I,[T])},enter(T){let I=c,U=u,J=d;if(!t.isMounted)if(a)I=A||c,U=_||u,J=P||d;else return;let H=!1;const en=T[Hs]=Rn=>{H||(H=!0,Rn?M(J,[T]):M(U,[T]),F.delayedLeave&&F.delayedLeave(),T[Hs]=void 0)};I?D(I,[T,en]):en()},leave(T,I){const U=String(n.key);if(T[Hs]&&T[Hs](!0),t.isUnmounting)return I();M(m,[T]);let J=!1;const H=T[Ze]=en=>{J||(J=!0,I(),en?M(b,[T]):M(k,[T]),T[Ze]=void 0,x[U]===n&&delete x[U])};x[U]=n,v?D(v,[T,H]):H()},clone(T){return vs(T,e,t,s)}};return F}function Ma(n){if(As(n))return n=tt(n),n.children=null,n}function sl(n){return As(n)?n.children?n.children[0]:void 0:n}function ks(n,e){n.shapeFlag&6&&n.component?ks(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nr(n,e=!1,t){let s=[],a=0;for(let o=0;o<n.length;o++){let r=n[o];const i=t==null?r.key:String(t)+String(r.key!=null?r.key:o);r.type===qn?(r.patchFlag&128&&a++,s=s.concat(nr(r.children,e,i))):(e||r.type!==re)&&s.push(i!=null?tt(r,{key:i}):r)}if(a>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function C(n,e){return an(n)?Nn({name:n.name},e,{setup:n}):n}const St=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function h(n){an(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:s,delay:a=200,timeout:o,suspensible:r=!0,onError:i}=n;let c=null,u,d=0;const m=()=>(d++,c=null,v()),v=()=>{let k;return c||(k=c=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),i)return new Promise((y,A)=>{i(b,()=>y(m()),()=>A(b),d+1)});throw b}).then(b=>k!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return C({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return u},setup(){const k=Hn;if(u)return()=>$a(u,k);const b=P=>{c=null,ys(P,k,13,!s)};if(r&&k.suspense||ws)return v().then(P=>()=>$a(P,k)).catch(P=>(b(P),()=>s?Tn(s,{error:P}):null));const y=W(!1),A=W(),_=W(!!a);return a&&setTimeout(()=>{_.value=!1},a),o!=null&&setTimeout(()=>{if(!y.value&&!A.value){const P=new Error(`Async component timed out after ${o}ms.`);b(P),A.value=P}},o),v().then(()=>{y.value=!0,k.parent&&As(k.parent.vnode)&&(k.parent.effect.dirty=!0,fa(k.parent.update))}).catch(P=>{b(P),A.value=P}),()=>{if(y.value&&u)return $a(u,k);if(A.value&&s)return Tn(s,{error:A.value});if(t&&!_.value)return Tn(t)}}})}function $a(n,e){const{ref:t,props:s,children:a,ce:o}=e.vnode,r=Tn(n,s,a);return r.ref=t,r.ce=o,delete e.vnode.ce,r}const As=n=>n.type.__isKeepAlive;function em(n,e){ni(n,"a",e)}function tm(n,e){ni(n,"da",e)}function ni(n,e,t=Hn){const s=n.__wdc||(n.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(_a(e,s,t),t){let a=t.parent;for(;a&&a.parent;)As(a.parent.vnode)&&sm(s,e,t,a),a=a.parent}}function sm(n,e,t,s){const a=_a(e,n,s,!0);Et(()=>{$o(s[e],a)},t)}function _a(n,e,t=Hn,s=!1){if(t){const a=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...r)=>{if(t.isUnmounted)return;ft();const i=Bs(t),c=me(e,t,n,r);return i(),bt(),c});return s?a.unshift(o):a.push(o),o}}const Ue=n=>(e,t=Hn)=>(!ws||n==="sp")&&_a(n,(...s)=>e(...s),t),am=Ue("bm"),dn=Ue("m"),om=Ue("bu"),ei=Ue("u"),er=Ue("bum"),Et=Ue("um"),rm=Ue("sp"),lm=Ue("rtg"),pm=Ue("rtc");function im(n,e=Hn){_a("ec",n,e)}function V8(n,e,t,s){let a;const o=t&&t[s];if(nn(n)||In(n)){a=new Array(n.length);for(let r=0,i=n.length;r<i;r++)a[r]=e(n[r],r,void 0,o&&o[r])}else if(typeof n=="number"){a=new Array(n);for(let r=0;r<n;r++)a[r]=e(r+1,r,void 0,o&&o[r])}else if(xn(n))if(n[Symbol.iterator])a=Array.from(n,(r,i)=>e(r,i,void 0,o&&o[i]));else{const r=Object.keys(n);a=new Array(r.length);for(let i=0,c=r.length;i<c;i++){const u=r[i];a[i]=e(n[u],u,i,o&&o[i])}}else a=[];return t&&(t[s]=a),a}function F8(n,e,t={},s,a){if(Mn.isCE||Mn.parent&&St(Mn.parent)&&Mn.parent.isCE)return e!=="default"&&(t.name=e),Tn("slot",t,s&&s());let o=n[e];o&&o._c&&(o._d=!1),mi();const r=o&&ti(o(t)),i=vi(qn,{key:t.key||r&&r.key||`_${e}`},r||(s?s():[]),r&&n._===1?64:-2);return!a&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function ti(n){return n.some(e=>pa(e)?!(e.type===re||e.type===qn&&!ti(e.children)):!0)?n:null}const fo=n=>n?Ei(n)?Aa(n)||n.proxy:fo(n.parent):null,rs=Nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fo(n.parent),$root:n=>fo(n.root),$emit:n=>n.emit,$options:n=>tr(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,fa(n.update)}),$nextTick:n=>n.n||(n.n=ot.bind(n.proxy)),$watch:n=>Yd.bind(n)}),Ua=(n,e)=>n!==Dn&&!n.__isScriptSetup&&vn(n,e),cm={get({_:n},e){const{ctx:t,setupState:s,data:a,props:o,accessCache:r,type:i,appContext:c}=n;let u;if(e[0]!=="$"){const k=r[e];if(k!==void 0)switch(k){case 1:return s[e];case 2:return a[e];case 4:return t[e];case 3:return o[e]}else{if(Ua(s,e))return r[e]=1,s[e];if(a!==Dn&&vn(a,e))return r[e]=2,a[e];if((u=n.propsOptions[0])&&vn(u,e))return r[e]=3,o[e];if(t!==Dn&&vn(t,e))return r[e]=4,t[e];bo&&(r[e]=0)}}const d=rs[e];let m,v;if(d)return e==="$attrs"&&Xn(n,"get",e),d(n);if((m=i.__cssModules)&&(m=m[e]))return m;if(t!==Dn&&vn(t,e))return r[e]=4,t[e];if(v=c.config.globalProperties,vn(v,e))return v[e]},set({_:n},e,t){const{data:s,setupState:a,ctx:o}=n;return Ua(a,e)?(a[e]=t,!0):s!==Dn&&vn(s,e)?(s[e]=t,!0):vn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:a,propsOptions:o}},r){let i;return!!t[r]||n!==Dn&&vn(n,r)||Ua(e,r)||(i=o[0])&&vn(i,r)||vn(s,r)||vn(rs,r)||vn(a.config.globalProperties,r)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:vn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function al(n){return nn(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bo=!0;function um(n){const e=tr(n),t=n.proxy,s=n.ctx;bo=!1,e.beforeCreate&&ol(e.beforeCreate,n,"bc");const{data:a,computed:o,methods:r,watch:i,provide:c,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:b,activated:y,deactivated:A,beforeDestroy:_,beforeUnmount:P,destroyed:g,unmounted:x,render:M,renderTracked:D,renderTriggered:F,errorCaptured:T,serverPrefetch:I,expose:U,inheritAttrs:J,components:H,directives:en,filters:Rn}=e;if(u&&dm(u,s,null),r)for(const tn in r){const Q=r[tn];an(Q)&&(s[tn]=Q.bind(t))}if(a){const tn=a.call(t,t);xn(tn)&&(n.data=Wt(tn))}if(bo=!0,o)for(const tn in o){const Q=o[tn],Vn=an(Q)?Q.bind(t,t):an(Q.get)?Q.get.bind(t,t):de,Ae=!an(Q)&&an(Q.set)?Q.set.bind(t):de,pe=B({get:Vn,set:Ae});Object.defineProperty(s,tn,{enumerable:!0,configurable:!0,get:()=>pe.value,set:$n=>pe.value=$n})}if(i)for(const tn in i)si(i[tn],s,t,tn);if(c){const tn=an(c)?c.call(t):c;Reflect.ownKeys(tn).forEach(Q=>{he(Q,tn[Q])})}d&&ol(d,n,"c");function q(tn,Q){nn(Q)?Q.forEach(Vn=>tn(Vn.bind(t))):Q&&tn(Q.bind(t))}if(q(am,m),q(dn,v),q(om,k),q(ei,b),q(em,y),q(tm,A),q(im,T),q(pm,D),q(lm,F),q(er,P),q(Et,x),q(rm,I),nn(U))if(U.length){const tn=n.exposed||(n.exposed={});U.forEach(Q=>{Object.defineProperty(tn,Q,{get:()=>t[Q],set:Vn=>t[Q]=Vn})})}else n.exposed||(n.exposed={});M&&n.render===de&&(n.render=M),J!=null&&(n.inheritAttrs=J),H&&(n.components=H),en&&(n.directives=en)}function dm(n,e,t=de){nn(n)&&(n=Eo(n));for(const s in n){const a=n[s];let o;xn(a)?"default"in a?o=ln(a.from||s,a.default,!0):o=ln(a.from||s):o=ln(a),Gn(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function ol(n,e,t){me(nn(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function si(n,e,t,s){const a=s.includes(".")?Zp(t,s):()=>t[s];if(In(n)){const o=e[n];an(o)&&un(a,o)}else if(an(n))un(a,n.bind(t));else if(xn(n))if(nn(n))n.forEach(o=>si(o,e,t,s));else{const o=an(n.handler)?n.handler.bind(t):e[n.handler];an(o)&&un(a,o,n)}}function tr(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:a,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,i=o.get(e);let c;return i?c=i:!a.length&&!t&&!s?c=e:(c={},a.length&&a.forEach(u=>oa(c,u,r,!0)),oa(c,e,r)),xn(e)&&o.set(e,c),c}function oa(n,e,t,s=!1){const{mixins:a,extends:o}=e;o&&oa(n,o,t,!0),a&&a.forEach(r=>oa(n,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const i=mm[r]||t&&t[r];n[r]=i?i(n[r],e[r]):e[r]}return n}const mm={data:rl,props:ll,emits:ll,methods:ss,computed:ss,beforeCreate:Wn,created:Wn,beforeMount:Wn,mounted:Wn,beforeUpdate:Wn,updated:Wn,beforeDestroy:Wn,beforeUnmount:Wn,destroyed:Wn,unmounted:Wn,activated:Wn,deactivated:Wn,errorCaptured:Wn,serverPrefetch:Wn,components:ss,directives:ss,watch:vm,provide:rl,inject:hm};function rl(n,e){return e?n?function(){return Nn(an(n)?n.call(this,this):n,an(e)?e.call(this,this):e)}:e:n}function hm(n,e){return ss(Eo(n),Eo(e))}function Eo(n){if(nn(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wn(n,e){return n?[...new Set([].concat(n,e))]:e}function ss(n,e){return n?Nn(Object.create(null),n,e):e}function ll(n,e){return n?nn(n)&&nn(e)?[...new Set([...n,...e])]:Nn(Object.create(null),al(n),al(e??{})):e}function vm(n,e){if(!n)return e;if(!e)return n;const t=Nn(Object.create(null),n);for(const s in e)t[s]=Wn(n[s],e[s]);return t}function ai(){return{app:null,config:{isNativeTag:Wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function fm(n,e){return function(s,a=null){an(s)||(s=Nn({},s)),a!=null&&!xn(a)&&(a=null);const o=ai(),r=new WeakSet;let i=!1;const c=o.app={_uid:km++,_component:s,_props:a,_container:null,_context:o,_instance:null,version:Gm,get config(){return o.config},set config(u){},use(u,...d){return r.has(u)||(u&&an(u.install)?(r.add(u),u.install(c,...d)):an(u)&&(r.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,m){if(!i){const v=Tn(s,a);return v.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(v,u):n(v,u,m),i=!0,c._container=u,u.__vue_app__=c,Aa(v.component)||v.component.proxy}},unmount(){i&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){ra=c;try{return u()}finally{ra=null}}};return c}}let ra=null;function he(n,e){if(Hn){let t=Hn.provides;const s=Hn.parent&&Hn.parent.provides;s===t&&(t=Hn.provides=Object.create(s)),t[n]=e}}function ln(n,e,t=!1){const s=Hn||Mn;if(s||ra){const a=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ra._context.provides;if(a&&n in a)return a[n];if(arguments.length>1)return t&&an(e)?e.call(s&&s.proxy):e}}function bm(n,e,t,s=!1){const a={},o={};na(o,ya,1),n.propsDefaults=Object.create(null),oi(n,e,a,o);for(const r in n.propsOptions[0])r in a||(a[r]=void 0);t?n.props=s?a:Fp(a):n.type.props?n.props=a:n.props=o,n.attrs=o}function Em(n,e,t,s){const{props:a,attrs:o,vnode:{patchFlag:r}}=n,i=cn(a),[c]=n.propsOptions;let u=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(ba(n.emitsOptions,v))continue;const k=e[v];if(c)if(vn(o,v))k!==o[v]&&(o[v]=k,u=!0);else{const b=le(v);a[b]=go(c,i,b,k,n,!1)}else k!==o[v]&&(o[v]=k,u=!0)}}}else{oi(n,e,a,o)&&(u=!0);let d;for(const m in i)(!e||!vn(e,m)&&((d=at(m))===m||!vn(e,d)))&&(c?t&&(t[m]!==void 0||t[d]!==void 0)&&(a[m]=go(c,i,m,void 0,n,!0)):delete a[m]);if(o!==i)for(const m in o)(!e||!vn(e,m))&&(delete o[m],u=!0)}u&&Ne(n,"set","$attrs")}function oi(n,e,t,s){const[a,o]=n.propsOptions;let r=!1,i;if(e)for(let c in e){if(as(c))continue;const u=e[c];let d;a&&vn(a,d=le(c))?!o||!o.includes(d)?t[d]=u:(i||(i={}))[d]=u:ba(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,r=!0)}if(o){const c=cn(t),u=i||Dn;for(let d=0;d<o.length;d++){const m=o[d];t[m]=go(a,c,m,u[m],n,!vn(u,m))}}return r}function go(n,e,t,s,a,o){const r=n[t];if(r!=null){const i=vn(r,"default");if(i&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&an(c)){const{propsDefaults:u}=a;if(t in u)s=u[t];else{const d=Bs(a);s=u[t]=c.call(null,e),d()}}else s=c}r[0]&&(o&&!i?s=!1:r[1]&&(s===""||s===at(t))&&(s=!0))}return s}function ri(n,e,t=!1){const s=e.propsCache,a=s.get(n);if(a)return a;const o=n.props,r={},i=[];let c=!1;if(!an(n)){const d=m=>{c=!0;const[v,k]=ri(m,e,!0);Nn(r,v),k&&i.push(...k)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!c)return xn(n)&&s.set(n,Pt),Pt;if(nn(o))for(let d=0;d<o.length;d++){const m=le(o[d]);pl(m)&&(r[m]=Dn)}else if(o)for(const d in o){const m=le(d);if(pl(m)){const v=o[d],k=r[m]=nn(v)||an(v)?{type:v}:Nn({},v);if(k){const b=ul(Boolean,k.type),y=ul(String,k.type);k[0]=b>-1,k[1]=y<0||b<y,(b>-1||vn(k,"default"))&&i.push(m)}}}const u=[r,i];return xn(n)&&s.set(n,u),u}function pl(n){return n[0]!=="$"}function il(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function cl(n,e){return il(n)===il(e)}function ul(n,e){return nn(e)?e.findIndex(t=>cl(t,n)):an(e)&&cl(e,n)?0:-1}const li=n=>n[0]==="_"||n==="$stable",sr=n=>nn(n)?n.map(Ee):[Ee(n)],gm=(n,e,t)=>{if(e._n)return e;const s=Ud((...a)=>sr(e(...a)),t);return s._c=!1,s},pi=(n,e,t)=>{const s=n._ctx;for(const a in n){if(li(a))continue;const o=n[a];if(an(o))e[a]=gm(a,o,s);else if(o!=null){const r=sr(o);e[a]=()=>r}}},ii=(n,e)=>{const t=sr(e);n.slots.default=()=>t},_m=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=cn(e),na(e,"_",t)):pi(e,n.slots={})}else n.slots={},e&&ii(n,e);na(n.slots,ya,1)},ym=(n,e,t)=>{const{vnode:s,slots:a}=n;let o=!0,r=Dn;if(s.shapeFlag&32){const i=e._;i?t&&i===1?o=!1:(Nn(a,e),!t&&i===1&&delete a._):(o=!e.$stable,pi(e,a)),r=e}else e&&(ii(n,e),r={default:1});if(o)for(const i in a)!li(i)&&r[i]==null&&delete a[i]};function la(n,e,t,s,a=!1){if(nn(n)){n.forEach((v,k)=>la(v,e&&(nn(e)?e[k]:e),t,s,a));return}if(St(s)&&!a)return;const o=s.shapeFlag&4?Aa(s.component)||s.component.proxy:s.el,r=a?null:o,{i,r:c}=n,u=e&&e.r,d=i.refs===Dn?i.refs={}:i.refs,m=i.setupState;if(u!=null&&u!==c&&(In(u)?(d[u]=null,vn(m,u)&&(m[u]=null)):Gn(u)&&(u.value=null)),an(c))et(c,i,12,[r,d]);else{const v=In(c),k=Gn(c),b=n.f;if(v||k){const y=()=>{if(b){const A=v?vn(m,c)?m[c]:d[c]:c.value;a?nn(A)&&$o(A,o):nn(A)?A.includes(o)||A.push(o):v?(d[c]=[o],vn(m,c)&&(m[c]=d[c])):(c.value=[o],n.k&&(d[n.k]=c.value))}else v?(d[c]=r,vn(m,c)&&(m[c]=r)):k&&(c.value=r,n.k&&(d[n.k]=r))};a||b?y():(y.id=-1,Jn(y,t))}}}let Ke=!1;const Am=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Bm=n=>n.namespaceURI.includes("MathML"),Gs=n=>{if(Am(n))return"svg";if(Bm(n))return"mathml"},zs=n=>n.nodeType===8;function wm(n){const{mt:e,p:t,o:{patchProp:s,createText:a,nextSibling:o,parentNode:r,remove:i,insert:c,createComment:u}}=n,d=(g,x)=>{if(!x.hasChildNodes()){t(null,g,x),sa(),x._vnode=g;return}Ke=!1,m(x.firstChild,g,null,null,null),sa(),x._vnode=g,Ke&&console.error("Hydration completed but contains mismatches.")},m=(g,x,M,D,F,T=!1)=>{const I=zs(g)&&g.data==="[",U=()=>y(g,x,M,D,F,I),{type:J,ref:H,shapeFlag:en,patchFlag:Rn}=x;let Ln=g.nodeType;x.el=g,Rn===-2&&(T=!1,x.dynamicChildren=null);let q=null;switch(J){case Ft:Ln!==3?x.children===""?(c(x.el=a(""),r(g),g),q=g):q=U():(g.data!==x.children&&(Ke=!0,g.data=x.children),q=o(g));break;case re:P(g)?(q=o(g),_(x.el=g.content.firstChild,g,M)):Ln!==8||I?q=U():q=o(g);break;case ls:if(I&&(g=o(g),Ln=g.nodeType),Ln===1||Ln===3){q=g;const tn=!x.children.length;for(let Q=0;Q<x.staticCount;Q++)tn&&(x.children+=q.nodeType===1?q.outerHTML:q.data),Q===x.staticCount-1&&(x.anchor=q),q=o(q);return I?o(q):q}else U();break;case qn:I?q=b(g,x,M,D,F,T):q=U();break;default:if(en&1)(Ln!==1||x.type.toLowerCase()!==g.tagName.toLowerCase())&&!P(g)?q=U():q=v(g,x,M,D,F,T);else if(en&6){x.slotScopeIds=F;const tn=r(g);if(I?q=A(g):zs(g)&&g.data==="teleport start"?q=A(g,g.data,"teleport end"):q=o(g),e(x,tn,null,M,D,Gs(tn),T),St(x)){let Q;I?(Q=Tn(qn),Q.anchor=q?q.previousSibling:tn.lastChild):Q=g.nodeType===3?bi(""):Tn("div"),Q.el=g,x.component.subTree=Q}}else en&64?Ln!==8?q=U():q=x.type.hydrate(g,x,M,D,F,T,n,k):en&128&&(q=x.type.hydrate(g,x,M,D,Gs(r(g)),F,T,n,m))}return H!=null&&la(H,null,D,x),q},v=(g,x,M,D,F,T)=>{T=T||!!x.dynamicChildren;const{type:I,props:U,patchFlag:J,shapeFlag:H,dirs:en,transition:Rn}=x,Ln=I==="input"||I==="option";if(Ln||J!==-1){en&&De(x,null,M,"created");let q=!1;if(P(g)){q=ci(D,Rn)&&M&&M.vnode.props&&M.vnode.props.appear;const Q=g.content.firstChild;q&&Rn.beforeEnter(Q),_(Q,g,M),x.el=g=Q}if(H&16&&!(U&&(U.innerHTML||U.textContent))){let Q=k(g.firstChild,x,g,M,D,F,T);for(;Q;){Ke=!0;const Vn=Q;Q=Q.nextSibling,i(Vn)}}else H&8&&g.textContent!==x.children&&(Ke=!0,g.textContent=x.children);if(U)if(Ln||!T||J&48)for(const Q in U)(Ln&&(Q.endsWith("value")||Q==="indeterminate")||gs(Q)&&!as(Q)||Q[0]===".")&&s(g,Q,null,U[Q],void 0,void 0,M);else U.onClick&&s(g,"onClick",null,U.onClick,void 0,void 0,M);let tn;(tn=U&&U.onVnodeBeforeMount)&&ce(tn,M,x),en&&De(x,null,M,"beforeMount"),((tn=U&&U.onVnodeMounted)||en||q)&&qp(()=>{tn&&ce(tn,M,x),q&&Rn.enter(g),en&&De(x,null,M,"mounted")},D)}return g.nextSibling},k=(g,x,M,D,F,T,I)=>{I=I||!!x.dynamicChildren;const U=x.children,J=U.length;for(let H=0;H<J;H++){const en=I?U[H]:U[H]=Ee(U[H]);if(g)g=m(g,en,D,F,T,I);else{if(en.type===Ft&&!en.children)continue;Ke=!0,t(null,en,M,null,D,F,Gs(M),T)}}return g},b=(g,x,M,D,F,T)=>{const{slotScopeIds:I}=x;I&&(F=F?F.concat(I):I);const U=r(g),J=k(o(g),x,U,M,D,F,T);return J&&zs(J)&&J.data==="]"?o(x.anchor=J):(Ke=!0,c(x.anchor=u("]"),U,J),J)},y=(g,x,M,D,F,T)=>{if(Ke=!0,x.el=null,T){const J=A(g);for(;;){const H=o(g);if(H&&H!==J)i(H);else break}}const I=o(g),U=r(g);return i(g),t(null,x,U,I,M,D,Gs(U),F),I},A=(g,x="[",M="]")=>{let D=0;for(;g;)if(g=o(g),g&&zs(g)&&(g.data===x&&D++,g.data===M)){if(D===0)return o(g);D--}return g},_=(g,x,M)=>{const D=x.parentNode;D&&D.replaceChild(g,x);let F=M;for(;F;)F.vnode.el===x&&(F.vnode.el=F.subTree.el=g),F=F.parent},P=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[d,m]}const Jn=qp;function Dm(n){return Pm(n,wm)}function Pm(n,e){const t=_p();t.__VUE__=!0;const{insert:s,remove:a,patchProp:o,createElement:r,createText:i,createComment:c,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=de,insertStaticContent:b}=n,y=(f,E,w,S=null,L=null,N=null,z=void 0,V=null,$=!!E.dynamicChildren)=>{if(f===E)return;f&&!dt(f,E)&&(S=O(f),$n(f,L,N,!0),f=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:R,ref:j,shapeFlag:X}=E;switch(R){case Ft:A(f,E,w,S);break;case re:_(f,E,w,S);break;case ls:f==null&&P(E,w,S,z);break;case qn:H(f,E,w,S,L,N,z,V,$);break;default:X&1?M(f,E,w,S,L,N,z,V,$):X&6?en(f,E,w,S,L,N,z,V,$):(X&64||X&128)&&R.process(f,E,w,S,L,N,z,V,$,Z)}j!=null&&L&&la(j,f&&f.ref,N,E||f,!E)},A=(f,E,w,S)=>{if(f==null)s(E.el=i(E.children),w,S);else{const L=E.el=f.el;E.children!==f.children&&u(L,E.children)}},_=(f,E,w,S)=>{f==null?s(E.el=c(E.children||""),w,S):E.el=f.el},P=(f,E,w,S)=>{[f.el,f.anchor]=b(f.children,E,w,S,f.el,f.anchor)},g=({el:f,anchor:E},w,S)=>{let L;for(;f&&f!==E;)L=v(f),s(f,w,S),f=L;s(E,w,S)},x=({el:f,anchor:E})=>{let w;for(;f&&f!==E;)w=v(f),a(f),f=w;a(E)},M=(f,E,w,S,L,N,z,V,$)=>{E.type==="svg"?z="svg":E.type==="math"&&(z="mathml"),f==null?D(E,w,S,L,N,z,V,$):I(f,E,L,N,z,V,$)},D=(f,E,w,S,L,N,z,V)=>{let $,R;const{props:j,shapeFlag:X,transition:Y,dirs:sn}=f;if($=f.el=r(f.type,N,j&&j.is,j),X&8?d($,f.children):X&16&&T(f.children,$,null,S,L,Ha(f,N),z,V),sn&&De(f,null,S,"created"),F($,f,f.scopeId,z,S),j){for(const gn in j)gn!=="value"&&!as(gn)&&o($,gn,null,j[gn],N,f.children,S,L,Fn);"value"in j&&o($,"value",null,j.value,N),(R=j.onVnodeBeforeMount)&&ce(R,S,f)}sn&&De(f,null,S,"beforeMount");const rn=ci(L,Y);rn&&Y.beforeEnter($),s($,E,w),((R=j&&j.onVnodeMounted)||rn||sn)&&Jn(()=>{R&&ce(R,S,f),rn&&Y.enter($),sn&&De(f,null,S,"mounted")},L)},F=(f,E,w,S,L)=>{if(w&&k(f,w),S)for(let N=0;N<S.length;N++)k(f,S[N]);if(L){let N=L.subTree;if(E===N){const z=L.vnode;F(f,z,z.scopeId,z.slotScopeIds,L.parent)}}},T=(f,E,w,S,L,N,z,V,$=0)=>{for(let R=$;R<f.length;R++){const j=f[R]=V?Je(f[R]):Ee(f[R]);y(null,j,E,w,S,L,N,z,V)}},I=(f,E,w,S,L,N,z)=>{const V=E.el=f.el;let{patchFlag:$,dynamicChildren:R,dirs:j}=E;$|=f.patchFlag&16;const X=f.props||Dn,Y=E.props||Dn;let sn;if(w&&it(w,!1),(sn=Y.onVnodeBeforeUpdate)&&ce(sn,w,E,f),j&&De(E,f,w,"beforeUpdate"),w&&it(w,!0),R?U(f.dynamicChildren,R,V,w,S,Ha(E,L),N):z||Q(f,E,V,null,w,S,Ha(E,L),N,!1),$>0){if($&16)J(V,E,X,Y,w,S,L);else if($&2&&X.class!==Y.class&&o(V,"class",null,Y.class,L),$&4&&o(V,"style",X.style,Y.style,L),$&8){const rn=E.dynamicProps;for(let gn=0;gn<rn.length;gn++){const Sn=rn[gn],Un=X[Sn],fe=Y[Sn];(fe!==Un||Sn==="value")&&o(V,Sn,Un,fe,L,f.children,w,S,Fn)}}$&1&&f.children!==E.children&&d(V,E.children)}else!z&&R==null&&J(V,E,X,Y,w,S,L);((sn=Y.onVnodeUpdated)||j)&&Jn(()=>{sn&&ce(sn,w,E,f),j&&De(E,f,w,"updated")},S)},U=(f,E,w,S,L,N,z)=>{for(let V=0;V<E.length;V++){const $=f[V],R=E[V],j=$.el&&($.type===qn||!dt($,R)||$.shapeFlag&70)?m($.el):w;y($,R,j,null,S,L,N,z,!0)}},J=(f,E,w,S,L,N,z)=>{if(w!==S){if(w!==Dn)for(const V in w)!as(V)&&!(V in S)&&o(f,V,w[V],null,z,E.children,L,N,Fn);for(const V in S){if(as(V))continue;const $=S[V],R=w[V];$!==R&&V!=="value"&&o(f,V,R,$,z,E.children,L,N,Fn)}"value"in S&&o(f,"value",w.value,S.value,z)}},H=(f,E,w,S,L,N,z,V,$)=>{const R=E.el=f?f.el:i(""),j=E.anchor=f?f.anchor:i("");let{patchFlag:X,dynamicChildren:Y,slotScopeIds:sn}=E;sn&&(V=V?V.concat(sn):sn),f==null?(s(R,w,S),s(j,w,S),T(E.children||[],w,j,L,N,z,V,$)):X>0&&X&64&&Y&&f.dynamicChildren?(U(f.dynamicChildren,Y,w,L,N,z,V),(E.key!=null||L&&E===L.subTree)&&ui(f,E,!0)):Q(f,E,w,j,L,N,z,V,$)},en=(f,E,w,S,L,N,z,V,$)=>{E.slotScopeIds=V,f==null?E.shapeFlag&512?L.ctx.activate(E,w,S,z,$):Rn(E,w,S,L,N,z,$):Ln(f,E,$)},Rn=(f,E,w,S,L,N,z)=>{const V=f.component=Vm(f,S,L);if(As(f)&&(V.ctx.renderer=Z),Fm(V),V.asyncDep){if(L&&L.registerDep(V,q),!f.el){const $=V.subTree=Tn(re);_(null,$,E,w)}}else q(V,f,E,w,L,N,z)},Ln=(f,E,w)=>{const S=E.component=f.component;if(zd(f,E,w))if(S.asyncDep&&!S.asyncResolved){tn(S,E,w);return}else S.next=E,Fd(S.update),S.effect.dirty=!0,S.update();else E.el=f.el,S.vnode=E},q=(f,E,w,S,L,N,z)=>{const V=()=>{if(f.isMounted){let{next:j,bu:X,u:Y,parent:sn,vnode:rn}=f;{const yt=di(f);if(yt){j&&(j.el=rn.el,tn(f,j,z)),yt.asyncDep.then(()=>{f.isUnmounted||V()});return}}let gn=j,Sn;it(f,!1),j?(j.el=rn.el,tn(f,j,z)):j=rn,X&&Ys(X),(Sn=j.props&&j.props.onVnodeBeforeUpdate)&&ce(Sn,sn,j,rn),it(f,!0);const Un=Na(f),fe=f.subTree;f.subTree=Un,y(fe,Un,m(fe.el),O(fe),f,L,N),j.el=Un.el,gn===null&&Kd(f,Un.el),Y&&Jn(Y,L),(Sn=j.props&&j.props.onVnodeUpdated)&&Jn(()=>ce(Sn,sn,j,rn),L)}else{let j;const{el:X,props:Y}=E,{bm:sn,m:rn,parent:gn}=f,Sn=St(E);if(it(f,!1),sn&&Ys(sn),!Sn&&(j=Y&&Y.onVnodeBeforeMount)&&ce(j,gn,E),it(f,!0),X&&An){const Un=()=>{f.subTree=Na(f),An(X,f.subTree,f,L,null)};Sn?E.type.__asyncLoader().then(()=>!f.isUnmounted&&Un()):Un()}else{const Un=f.subTree=Na(f);y(null,Un,w,S,f,L,N),E.el=Un.el}if(rn&&Jn(rn,L),!Sn&&(j=Y&&Y.onVnodeMounted)){const Un=E;Jn(()=>ce(j,gn,Un),L)}(E.shapeFlag&256||gn&&St(gn.vnode)&&gn.vnode.shapeFlag&256)&&f.a&&Jn(f.a,L),f.isMounted=!0,E=w=S=null}},$=f.effect=new zo(V,de,()=>fa(R),f.scope),R=f.update=()=>{$.dirty&&$.run()};R.id=f.uid,it(f,!0),R()},tn=(f,E,w)=>{E.component=f;const S=f.vnode.props;f.vnode=E,f.next=null,Em(f,E.props,S,w),ym(f,E.children,w),ft(),nl(f),bt()},Q=(f,E,w,S,L,N,z,V,$=!1)=>{const R=f&&f.children,j=f?f.shapeFlag:0,X=E.children,{patchFlag:Y,shapeFlag:sn}=E;if(Y>0){if(Y&128){Ae(R,X,w,S,L,N,z,V,$);return}else if(Y&256){Vn(R,X,w,S,L,N,z,V,$);return}}sn&8?(j&16&&Fn(R,L,N),X!==R&&d(w,X)):j&16?sn&16?Ae(R,X,w,S,L,N,z,V,$):Fn(R,L,N,!0):(j&8&&d(w,""),sn&16&&T(X,w,S,L,N,z,V,$))},Vn=(f,E,w,S,L,N,z,V,$)=>{f=f||Pt,E=E||Pt;const R=f.length,j=E.length,X=Math.min(R,j);let Y;for(Y=0;Y<X;Y++){const sn=E[Y]=$?Je(E[Y]):Ee(E[Y]);y(f[Y],sn,w,null,L,N,z,V,$)}R>j?Fn(f,L,N,!0,!1,X):T(E,w,S,L,N,z,V,$,X)},Ae=(f,E,w,S,L,N,z,V,$)=>{let R=0;const j=E.length;let X=f.length-1,Y=j-1;for(;R<=X&&R<=Y;){const sn=f[R],rn=E[R]=$?Je(E[R]):Ee(E[R]);if(dt(sn,rn))y(sn,rn,w,null,L,N,z,V,$);else break;R++}for(;R<=X&&R<=Y;){const sn=f[X],rn=E[Y]=$?Je(E[Y]):Ee(E[Y]);if(dt(sn,rn))y(sn,rn,w,null,L,N,z,V,$);else break;X--,Y--}if(R>X){if(R<=Y){const sn=Y+1,rn=sn<j?E[sn].el:S;for(;R<=Y;)y(null,E[R]=$?Je(E[R]):Ee(E[R]),w,rn,L,N,z,V,$),R++}}else if(R>Y)for(;R<=X;)$n(f[R],L,N,!0),R++;else{const sn=R,rn=R,gn=new Map;for(R=rn;R<=Y;R++){const ee=E[R]=$?Je(E[R]):Ee(E[R]);ee.key!=null&&gn.set(ee.key,R)}let Sn,Un=0;const fe=Y-rn+1;let yt=!1,Gr=0;const Yt=new Array(fe);for(R=0;R<fe;R++)Yt[R]=0;for(R=sn;R<=X;R++){const ee=f[R];if(Un>=fe){$n(ee,L,N,!0);continue}let we;if(ee.key!=null)we=gn.get(ee.key);else for(Sn=rn;Sn<=Y;Sn++)if(Yt[Sn-rn]===0&&dt(ee,E[Sn])){we=Sn;break}we===void 0?$n(ee,L,N,!0):(Yt[we-rn]=R+1,we>=Gr?Gr=we:yt=!0,y(ee,E[we],w,null,L,N,z,V,$),Un++)}const zr=yt?xm(Yt):Pt;for(Sn=zr.length-1,R=fe-1;R>=0;R--){const ee=rn+R,we=E[ee],Kr=ee+1<j?E[ee+1].el:S;Yt[R]===0?y(null,we,w,Kr,L,N,z,V,$):yt&&(Sn<0||R!==zr[Sn]?pe(we,w,Kr,2):Sn--)}}},pe=(f,E,w,S,L=null)=>{const{el:N,type:z,transition:V,children:$,shapeFlag:R}=f;if(R&6){pe(f.component.subTree,E,w,S);return}if(R&128){f.suspense.move(E,w,S);return}if(R&64){z.move(f,E,w,Z);return}if(z===qn){s(N,E,w);for(let X=0;X<$.length;X++)pe($[X],E,w,S);s(f.anchor,E,w);return}if(z===ls){g(f,E,w);return}if(S!==2&&R&1&&V)if(S===0)V.beforeEnter(N),s(N,E,w),Jn(()=>V.enter(N),L);else{const{leave:X,delayLeave:Y,afterLeave:sn}=V,rn=()=>s(N,E,w),gn=()=>{X(N,()=>{rn(),sn&&sn()})};Y?Y(N,rn,gn):gn()}else s(N,E,w)},$n=(f,E,w,S=!1,L=!1)=>{const{type:N,props:z,ref:V,children:$,dynamicChildren:R,shapeFlag:j,patchFlag:X,dirs:Y}=f;if(V!=null&&la(V,null,w,f,!0),j&256){E.ctx.deactivate(f);return}const sn=j&1&&Y,rn=!St(f);let gn;if(rn&&(gn=z&&z.onVnodeBeforeUnmount)&&ce(gn,E,f),j&6)Be(f.component,w,S);else{if(j&128){f.suspense.unmount(w,S);return}sn&&De(f,null,E,"beforeUnmount"),j&64?f.type.remove(f,E,w,L,Z,S):R&&(N!==qn||X>0&&X&64)?Fn(R,E,w,!1,!0):(N===qn&&X&384||!L&&j&16)&&Fn($,E,w),S&&ne(f)}(rn&&(gn=z&&z.onVnodeUnmounted)||sn)&&Jn(()=>{gn&&ce(gn,E,f),sn&&De(f,null,E,"unmounted")},w)},ne=f=>{const{type:E,el:w,anchor:S,transition:L}=f;if(E===qn){Te(w,S);return}if(E===ls){x(f);return}const N=()=>{a(w),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(f.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:V}=L,$=()=>z(w,N);V?V(f.el,N,$):$()}else N()},Te=(f,E)=>{let w;for(;f!==E;)w=v(f),a(f),f=w;a(E)},Be=(f,E,w)=>{const{bum:S,scope:L,update:N,subTree:z,um:V}=f;S&&Ys(S),L.stop(),N&&(N.active=!1,$n(z,f,E,w)),V&&Jn(V,E),Jn(()=>{f.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Fn=(f,E,w,S=!1,L=!1,N=0)=>{for(let z=N;z<f.length;z++)$n(f[z],E,w,S,L)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let K=!1;const G=(f,E,w)=>{f==null?E._vnode&&$n(E._vnode,null,null,!0):y(E._vnode||null,f,E,null,null,null,w),K||(K=!0,nl(),sa(),K=!1),E._vnode=f},Z={p:y,um:$n,m:pe,r:ne,mt:Rn,mc:T,pc:Q,pbc:U,n:O,o:n};let mn,An;return e&&([mn,An]=e(Z)),{render:G,hydrate:mn,createApp:fm(G,mn)}}function Ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function it({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ci(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ui(n,e,t=!1){const s=n.children,a=e.children;if(nn(s)&&nn(a))for(let o=0;o<s.length;o++){const r=s[o];let i=a[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[o]=Je(a[o]),i.el=r.el),t||ui(r,i)),i.type===Ft&&(i.el=r.el)}}function xm(n){const e=n.slice(),t=[0];let s,a,o,r,i;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(a=t[t.length-1],n[a]<u){e[s]=a,t.push(s);continue}for(o=0,r=t.length-1;o<r;)i=o+r>>1,n[t[i]]<u?o=i+1:r=i;u<n[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}function di(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:di(e)}const Om=n=>n.__isTeleport,qn=Symbol.for("v-fgt"),Ft=Symbol.for("v-txt"),re=Symbol.for("v-cmt"),ls=Symbol.for("v-stc"),ps=[];let _e=null;function mi(n=!1){ps.push(_e=n?null:[])}function Lm(){ps.pop(),_e=ps[ps.length-1]||null}let fs=1;function dl(n){fs+=n}function hi(n){return n.dynamicChildren=fs>0?_e||Pt:null,Lm(),fs>0&&_e&&_e.push(n),n}function N8(n,e,t,s,a,o){return hi(fi(n,e,t,s,a,o,!0))}function vi(n,e,t,s,a){return hi(Tn(n,e,t,s,a,!0))}function pa(n){return n?n.__v_isVNode===!0:!1}function dt(n,e){return n.type===e.type&&n.key===e.key}const ya="__vInternal",ki=({key:n})=>n??null,Xs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?In(n)||Gn(n)||an(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function fi(n,e=null,t=null,s=0,a=null,o=n===qn?0:1,r=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ki(e),ref:e&&Xs(e),scopeId:Ea,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Mn};return i?(ar(c,t),o&128&&n.normalize(c)):t&&(c.shapeFlag|=In(t)?8:16),fs>0&&!r&&_e&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&_e.push(c),c}const Tn=Sm;function Sm(n,e=null,t=null,s=0,a=null,o=!1){if((!n||n===jd)&&(n=re),pa(n)){const i=tt(n,e,!0);return t&&ar(i,t),fs>0&&!o&&_e&&(i.shapeFlag&6?_e[_e.indexOf(n)]=i:_e.push(i)),i.patchFlag|=-2,i}if(Hm(n)&&(n=n.__vccOpts),e){e=Rm(e);let{class:i,style:c}=e;i&&!In(i)&&(e.class=Go(i)),xn(c)&&(Np(c)&&!nn(c)&&(c=Nn({},c)),e.style=Ho(c))}const r=In(n)?1:qd(n)?128:Om(n)?64:xn(n)?4:an(n)?2:0;return fi(n,e,t,s,a,r,o,!0)}function Rm(n){return n?Np(n)||ya in n?Nn({},n):n:null}function tt(n,e,t=!1){const{props:s,ref:a,patchFlag:o,children:r}=n,i=e?Tm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:i,key:i&&ki(i),ref:e&&e.ref?t&&a?nn(a)?a.concat(Xs(e)):[a,Xs(e)]:Xs(e):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tt(n.ssContent),ssFallback:n.ssFallback&&tt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function bi(n=" ",e=0){return Tn(Ft,null,n,e)}function M8(n,e){const t=Tn(ls,null,n);return t.staticCount=e,t}function $8(n="",e=!1){return e?(mi(),vi(re,null,n)):Tn(re,null,n)}function Ee(n){return n==null||typeof n=="boolean"?Tn(re):nn(n)?Tn(qn,null,n.slice()):typeof n=="object"?Je(n):Tn(Ft,null,String(n))}function Je(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tt(n)}function ar(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(nn(e))t=16;else if(typeof e=="object")if(s&65){const a=e.default;a&&(a._c&&(a._d=!1),ar(n,a()),a._c&&(a._d=!0));return}else{t=32;const a=e._;!a&&!(ya in e)?e._ctx=Mn:a===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else an(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),s&64?(t=16,e=[bi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Tm(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const a in s)if(a==="class")e.class!==s.class&&(e.class=Go([e.class,s.class]));else if(a==="style")e.style=Ho([e.style,s.style]);else if(gs(a)){const o=e[a],r=s[a];r&&o!==r&&!(nn(o)&&o.includes(r))&&(e[a]=o?[].concat(o,r):r)}else a!==""&&(e[a]=s[a])}return e}function ce(n,e,t,s=null){me(n,e,7,[t,s])}const Im=ai();let Cm=0;function Vm(n,e,t){const s=n.type,a=(e?e.appContext:n.appContext)||Im,o={uid:Cm++,vnode:n,type:s,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ri(s,a),emitsOptions:jp(s,a),emit:null,emitted:null,propsDefaults:Dn,inheritAttrs:s.inheritAttrs,ctx:Dn,data:Dn,props:Dn,attrs:Dn,slots:Dn,refs:Dn,setupState:Dn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=$d.bind(null,o),n.ce&&n.ce(o),o}let Hn=null;const gt=()=>Hn||Mn;let ia,_o;{const n=_p(),e=(t,s)=>{let a;return(a=n[t])||(a=n[t]=[]),a.push(s),o=>{a.length>1?a.forEach(r=>r(o)):a[0](o)}};ia=e("__VUE_INSTANCE_SETTERS__",t=>Hn=t),_o=e("__VUE_SSR_SETTERS__",t=>ws=t)}const Bs=n=>{const e=Hn;return ia(n),n.scope.on(),()=>{n.scope.off(),ia(e)}},ml=()=>{Hn&&Hn.scope.off(),ia(null)};function Ei(n){return n.vnode.shapeFlag&4}let ws=!1;function Fm(n,e=!1){e&&_o(e);const{props:t,children:s}=n.vnode,a=Ei(n);bm(n,t,a,e),_m(n,s);const o=a?Nm(n,e):void 0;return e&&_o(!1),o}function Nm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Mp(new Proxy(n.ctx,cm));const{setup:s}=t;if(s){const a=n.setupContext=s.length>1?$m(n):null,o=Bs(n);ft();const r=et(s,n,0,[n.props,a]);if(bt(),o(),bp(r)){if(r.then(ml,ml),e)return r.then(i=>{hl(n,i,e)}).catch(i=>{ys(i,n,0)});n.asyncDep=r}else hl(n,r,e)}else gi(n,e)}function hl(n,e,t){an(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xn(e)&&(n.setupState=Hp(e)),gi(n,t)}let vl;function gi(n,e,t){const s=n.type;if(!n.render){if(!e&&vl&&!s.render){const a=s.template||tr(n).template;if(a){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:i,compilerOptions:c}=s,u=Nn(Nn({isCustomElement:o,delimiters:i},r),c);s.render=vl(a,u)}}n.render=s.render||de}{const a=Bs(n);ft();try{um(n)}finally{bt(),a()}}}function Mm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Xn(n,"get","$attrs"),e[t]}}))}function $m(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Mm(n)},slots:n.slots,emit:n.emit,expose:e}}function Aa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Hp(Mp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rs)return rs[t](n)},has(e,t){return t in e||t in rs}}))}function Um(n,e=!0){return an(n)?n.displayName||n.name:n.name||e&&n.__name}function Hm(n){return an(n)&&"__vccOpts"in n}const B=(n,e)=>xd(n,e,ws);function U8(n,e,t=Dn){const s=gt(),a=le(e),o=at(e),r=Yo((c,u)=>{let d;return Jd(()=>{const m=n[e];Oe(d,m)&&(d=m,u())}),{get(){return c(),t.get?t.get(d):d},set(m){const v=s.vnode.props;!(v&&(e in v||a in v||o in v)&&(`onUpdate:${e}`in v||`onUpdate:${a}`in v||`onUpdate:${o}`in v))&&Oe(m,d)&&(d=m,u()),s.emit(`update:${e}`,t.set?t.set(m):m)}}}),i=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return r[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?n[i]||{}:r,done:!1}:{done:!0}}}},r}function p(n,e,t){const s=arguments.length;return s===2?xn(e)&&!nn(e)?pa(e)?Tn(n,null,[e]):Tn(n,e):Tn(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&pa(t)&&(t=[t]),Tn(n,e,t))}const Gm="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const zm="http://www.w3.org/2000/svg",Km="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,kl=Ye&&Ye.createElement("template"),jm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const a=e==="svg"?Ye.createElementNS(zm,n):e==="mathml"?Ye.createElementNS(Km,n):Ye.createElement(n,t?{is:t}:void 0);return n==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:n=>Ye.createTextNode(n),createComment:n=>Ye.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ye.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,a,o){const r=t?t.previousSibling:e.lastChild;if(a&&(a===o||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),t),!(a===o||!(a=a.nextSibling)););else{kl.innerHTML=s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n;const i=kl.content;if(s==="svg"||s==="mathml"){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}e.insertBefore(i,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},je="transition",Xt="animation",Nt=Symbol("_vtc"),st=(n,{slots:e})=>p(nm,yi(n),e);st.displayName="Transition";const _i={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wm=st.props=Nn({},Yp,_i),ct=(n,e=[])=>{nn(n)?n.forEach(t=>t(...e)):n&&n(...e)},fl=n=>n?nn(n)?n.some(e=>e.length>1):n.length>1:!1;function yi(n){const e={};for(const H in n)H in _i||(e[H]=n[H]);if(n.css===!1)return e;const{name:t="v",type:s,duration:a,enterFromClass:o=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:c=o,appearActiveClass:u=r,appearToClass:d=i,leaveFromClass:m=`${t}-leave-from`,leaveActiveClass:v=`${t}-leave-active`,leaveToClass:k=`${t}-leave-to`}=n,b=qm(a),y=b&&b[0],A=b&&b[1],{onBeforeEnter:_,onEnter:P,onEnterCancelled:g,onLeave:x,onLeaveCancelled:M,onBeforeAppear:D=_,onAppear:F=P,onAppearCancelled:T=g}=e,I=(H,en,Rn)=>{qe(H,en?d:i),qe(H,en?u:r),Rn&&Rn()},U=(H,en)=>{H._isLeaving=!1,qe(H,m),qe(H,k),qe(H,v),en&&en()},J=H=>(en,Rn)=>{const Ln=H?F:P,q=()=>I(en,H,Rn);ct(Ln,[en,q]),bl(()=>{qe(en,H?c:o),Ce(en,H?d:i),fl(Ln)||El(en,s,y,q)})};return Nn(e,{onBeforeEnter(H){ct(_,[H]),Ce(H,o),Ce(H,r)},onBeforeAppear(H){ct(D,[H]),Ce(H,c),Ce(H,u)},onEnter:J(!1),onAppear:J(!0),onLeave(H,en){H._isLeaving=!0;const Rn=()=>U(H,en);Ce(H,m),Bi(),Ce(H,v),bl(()=>{H._isLeaving&&(qe(H,m),Ce(H,k),fl(x)||El(H,s,A,Rn))}),ct(x,[H,Rn])},onEnterCancelled(H){I(H,!1),ct(g,[H])},onAppearCancelled(H){I(H,!0),ct(T,[H])},onLeaveCancelled(H){U(H),ct(M,[H])}})}function qm(n){if(n==null)return null;if(xn(n))return[Ga(n.enter),Ga(n.leave)];{const e=Ga(n);return[e,e]}}function Ga(n){return Yu(n)}function Ce(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Nt]||(n[Nt]=new Set)).add(e)}function qe(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[Nt];t&&(t.delete(e),t.size||(n[Nt]=void 0))}function bl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qm=0;function El(n,e,t,s){const a=n._endId=++Qm,o=()=>{a===n._endId&&s()};if(t)return setTimeout(o,t);const{type:r,timeout:i,propCount:c}=Ai(n,e);if(!r)return s();const u=r+"end";let d=0;const m=()=>{n.removeEventListener(u,v),o()},v=k=>{k.target===n&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},i+1),n.addEventListener(u,v)}function Ai(n,e){const t=window.getComputedStyle(n),s=b=>(t[b]||"").split(", "),a=s(`${je}Delay`),o=s(`${je}Duration`),r=gl(a,o),i=s(`${Xt}Delay`),c=s(`${Xt}Duration`),u=gl(i,c);let d=null,m=0,v=0;e===je?r>0&&(d=je,m=r,v=o.length):e===Xt?u>0&&(d=Xt,m=u,v=c.length):(m=Math.max(r,u),d=m>0?r>u?je:Xt:null,v=d?d===je?o.length:c.length:0);const k=d===je&&/\b(transform|all)(,|$)/.test(s(`${je}Property`).toString());return{type:d,timeout:m,propCount:v,hasTransform:k}}function gl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>_l(t)+_l(n[s])))}function _l(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bi(){return document.body.offsetHeight}function Zm(n,e,t){const s=n[Nt];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const or=Symbol("_vod"),H8={beforeMount(n,{value:e},{transition:t}){n[or]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ns(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(n),ns(n,!0),s.enter(n)):s.leave(n,()=>{ns(n,!1)}):ns(n,e))},beforeUnmount(n,{value:e}){ns(n,e)}};function ns(n,e){n.style.display=e?n[or]:"none"}const Jm=Symbol("");function Ym(n,e,t){const s=n.style,a=s.display,o=In(t);if(t&&!o){if(e&&!In(e))for(const r in e)t[r]==null&&yo(s,r,"");for(const r in t)yo(s,r,t[r])}else if(o){if(e!==t){const r=s[Jm];r&&(t+=";"+r),s.cssText=t}}else e&&n.removeAttribute("style");or in n&&(s.display=a)}const yl=/\s*!important$/;function yo(n,e,t){if(nn(t))t.forEach(s=>yo(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=Xm(n,e);yl.test(t)?n.setProperty(at(s),t.replace(yl,""),"important"):n[s]=t}}const Al=["Webkit","Moz","ms"],za={};function Xm(n,e){const t=za[e];if(t)return t;let s=le(e);if(s!=="filter"&&s in n)return za[e]=s;s=_s(s);for(let a=0;a<Al.length;a++){const o=Al[a]+s;if(o in n)return za[e]=o}return e}const Bl="http://www.w3.org/1999/xlink";function n0(n,e,t,s,a){if(s&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Bl,e.slice(6,e.length)):n.setAttributeNS(Bl,e,t);else{const o=ad(e);t==null||o&&!yp(t)?n.removeAttribute(e):n.setAttribute(e,o?"":t)}}function e0(n,e,t,s,a,o,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,a,o),n[e]=t??"";return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){n._value=t;const u=i==="OPTION"?n.getAttribute("value"):n.value,d=t??"";u!==d&&(n.value=d),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=yp(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function At(n,e,t,s){n.addEventListener(e,t,s)}function t0(n,e,t,s){n.removeEventListener(e,t,s)}const wl=Symbol("_vei");function s0(n,e,t,s,a=null){const o=n[wl]||(n[wl]={}),r=o[e];if(s&&r)r.value=s;else{const[i,c]=a0(e);if(s){const u=o[e]=l0(s,a);At(n,i,u,c)}else r&&(t0(n,i,r,c),o[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function a0(n){let e;if(Dl.test(n)){e={};let s;for(;s=n.match(Dl);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):at(n.slice(2)),e]}let Ka=0;const o0=Promise.resolve(),r0=()=>Ka||(o0.then(()=>Ka=0),Ka=Date.now());function l0(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;me(p0(s,t.value),e,5,[s])};return t.value=n,t.attached=r0(),t}function p0(n,e){if(nn(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>a=>!a._stopped&&s&&s(a))}else return e}const Pl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,i0=(n,e,t,s,a,o,r,i,c)=>{const u=a==="svg";e==="class"?Zm(n,s,u):e==="style"?Ym(n,t,s):gs(e)?Mo(e)||s0(n,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c0(n,e,s,u))?e0(n,e,s,o,r,i,c):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),n0(n,e,s,u))};function c0(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pl(e)&&an(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=n.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Pl(e)&&In(t)?!1:e in n}const wi=new WeakMap,Di=new WeakMap,ca=Symbol("_moveCb"),xl=Symbol("_enterCb"),Pi={name:"TransitionGroup",props:Nn({},Wm,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=gt(),s=Jp();let a,o;return ei(()=>{if(!a.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!k0(a[0].el,t.vnode.el,r))return;a.forEach(m0),a.forEach(h0);const i=a.filter(v0);Bi(),i.forEach(c=>{const u=c.el,d=u.style;Ce(u,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=u[ca]=v=>{v&&v.target!==u||(!v||/transform$/.test(v.propertyName))&&(u.removeEventListener("transitionend",m),u[ca]=null,qe(u,r))};u.addEventListener("transitionend",m)})}),()=>{const r=cn(n),i=yi(r);let c=r.tag||qn;a=o,o=e.default?nr(e.default()):[];for(let u=0;u<o.length;u++){const d=o[u];d.key!=null&&ks(d,vs(d,i,s,t))}if(a)for(let u=0;u<a.length;u++){const d=a[u];ks(d,vs(d,i,s,t)),wi.set(d,d.el.getBoundingClientRect())}return Tn(c,null,o)}}},u0=n=>delete n.mode;Pi.props;const d0=Pi;function m0(n){const e=n.el;e[ca]&&e[ca](),e[xl]&&e[xl]()}function h0(n){Di.set(n,n.el.getBoundingClientRect())}function v0(n){const e=wi.get(n),t=Di.get(n),s=e.left-t.left,a=e.top-t.top;if(s||a){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${a}px)`,o.transitionDuration="0s",n}}function k0(n,e,t){const s=n.cloneNode(),a=n[Nt];a&&a.forEach(i=>{i.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),t.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(s);const{hasTransform:r}=Ai(s);return o.removeChild(s),r}const Ol=n=>{const e=n.props["onUpdate:modelValue"]||!1;return nn(e)?t=>Ys(e,t):e};function f0(n){n.target.composing=!0}function Ll(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ja=Symbol("_assign"),G8={created(n,{modifiers:{lazy:e,trim:t,number:s}},a){n[ja]=Ol(a);const o=s||a.props&&a.props.type==="number";At(n,e?"change":"input",r=>{if(r.target.composing)return;let i=n.value;t&&(i=i.trim()),o&&(i=uo(i)),n[ja](i)}),t&&At(n,"change",()=>{n.value=n.value.trim()}),e||(At(n,"compositionstart",f0),At(n,"compositionend",Ll),At(n,"change",Ll))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:s,number:a}},o){if(n[ja]=Ol(o),n.composing)return;const r=a||n.type==="number"?uo(n.value):n.value,i=e??"";r!==i&&(document.activeElement===n&&n.type!=="range"&&(t||s&&n.value.trim()===i)||(n.value=i))}},b0=["ctrl","shift","alt","meta"],E0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>b0.some(t=>n[`${t}Key`]&&!e.includes(t))},z8=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(a,...o)=>{for(let r=0;r<e.length;r++){const i=E0[e[r]];if(i&&i(a,e))return}return n(a,...o)})},g0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},K8=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=a=>{if(!("key"in a))return;const o=at(a.key);if(e.some(r=>r===o||g0[r]===o))return n(a)})},_0=Nn({patchProp:i0},jm);let Wa,Sl=!1;function y0(){return Wa=Sl?Wa:Dm(_0),Sl=!0,Wa}const A0=(...n)=>{const e=y0().createApp(...n),{mount:t}=e;return e.mount=s=>{const a=w0(s);if(a)return t(a,!0,B0(a))},e};function B0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function w0(n){return In(n)?document.querySelector(n):n}const D0="modulepreload",P0=function(n){return"/"+n},Rl={},l=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link");a=Promise.all(t.map(r=>{if(r=P0(r),r in Rl)return;Rl[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!s)for(let m=o.length-1;m>=0;m--){const v=o[m];if(v.href===r&&(!i||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":D0,i||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),i)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>e()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},xi={"v-8daa1a0e":()=>l(()=>import("./index.html-9KcWD-GY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-28f7b2e8":()=>l(()=>import("./001-PyQt介绍与安装.html-UVbG1JRC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-736cf379":()=>l(()=>import("./002-PyQt基本UI.html-t1Zvrgwg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-548167c6":()=>l(()=>import("./003-布局.html-H0K5cp-U.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-30bf7f7c":()=>l(()=>import("./004-布局2.html-LYcASzZf.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-48858f42":()=>l(()=>import("./005-窗口.html-oSuFbKgz.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6c1110d1":()=>l(()=>import("./006-信号与槽.html-wxjawz8C.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2db1247c":()=>l(()=>import("./007-Qt Designer.html-NkVhhDh5.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-580a4400":()=>l(()=>import("./008-PyQt多线程.html-M045JQ3n.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-c47f0884":()=>l(()=>import("./009-打包为可执行程序.html-rDFtheaa.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-fd1808c0":()=>l(()=>import("./friend.html-hIs8RQK-.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-513bdf66":()=>l(()=>import("./me.html-sxZ9X0O5.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5491f884":()=>l(()=>import("./index.html-vf1NBG_l.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2776dc09":()=>l(()=>import("./杀不死的进程.html-RkdLORyM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-d440f426":()=>l(()=>import("./index.html-zIozexga.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-b3591580":()=>l(()=>import("./WARP帮助页面.html-mCdX7gOb.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-50c35cc8":()=>l(()=>import("./Windows_WSL2安装nvidia-cuda驱动.html-x2cDFsbH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-01868d8e":()=>l(()=>import("./torch 环境.html-zwIlrJRs.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9ef1da18":()=>l(()=>import("./英伟达开源驱动和闭源驱动冲突问题.html-mgojlWqb.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0300e138":()=>l(()=>import("./Ubuntu命令行安装Android SDK.html-TXHGqMjA.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-a9b33774":()=>l(()=>import("./index.html-cViYkDRL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1d16fbc1":()=>l(()=>import("./Snapper玩转btrfs文件系统.html-xL9o9Zfc.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-47c36178":()=>l(()=>import("./btrfs的使用.html-4q0xEoCl.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2f2e2cf4":()=>l(()=>import("./some device missing方法.html-pFYgr5HH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-cb5d9150":()=>l(()=>import("./CVE-2024-21626利用场景.html-QN01x5t7.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4b450dee":()=>l(()=>import("./index.html-mVyQC1RK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-756d3903":()=>l(()=>import("./ext-plugin-redis.html-x_JRjbQ9.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2ab375a4":()=>l(()=>import("./理解CoreDNS.html-JVpxFreM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1aecc47a":()=>l(()=>import("./Bind9的使用.html-0fPY2ktb.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6129517b":()=>l(()=>import("./NamedManager.html-9kzPAEwc.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-c388ee4c":()=>l(()=>import("./Docker 2375攻击和解决方案.html-8V7pSuOi.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2f710f9a":()=>l(()=>import("./Docker 的daemon.json.html-hHv-jeco.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7eb73050":()=>l(()=>import("./Docker不死进程.html-yREY--VR.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-19eea71e":()=>l(()=>import("./Docker日志选项配置上去对已运行容器不生效.html-1WOw7_7c.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-74135446":()=>l(()=>import("./Docker环境清理.html-1WZdVKZQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-326d43de":()=>l(()=>import("./Docker逃逸漏洞案例.html-HMWZmJS-.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1380e8c6":()=>l(()=>import("./RockyLinux安装Docker.html-i1My1pC3.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0451b50e":()=>l(()=>import("./docker pull push.html-kFm8tX_V.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-87a56570":()=>l(()=>import("./docker run 命令所有的选项.html-UNYaoYAS.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4c790792":()=>l(()=>import("./docker学习笔记-PDF.html-jVuC4LH8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1fd2b10c":()=>l(()=>import("./docker容器集合.html-pW6gWGGP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-571244d6":()=>l(()=>import("./docker报错bridge-nf-call-iptables内核修整.html-1GqgdtLd.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-50885a84":()=>l(()=>import("./一次构建出x86及arm镜像.html-l9TJoReh.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f9b4903c":()=>l(()=>import("./一键运行web版本vscode.html-tQo94hIA.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-10c9e8f1":()=>l(()=>import("./只使用操作系统创建容器-扫描.html-HGxUHpvN.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6f39f683":()=>l(()=>import("./在Dockerfile里调整时区.html-2qHyxm2v.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4c5c0565":()=>l(()=>import("./手撕Docker容器命令行版.html-5fK90eFF.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2df05220":()=>l(()=>import("./手撕docker容器.html-oAoo3HDo.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-d36c7940":()=>l(()=>import("./手撕docker网络.html-oUGr_HM3.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3b10ae94":()=>l(()=>import("./把容器做成物理机.html-8N_Kq7KZ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-688e4fbe":()=>l(()=>import("./更改docker服务网段分配地址.html-0cg9N84h.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7b7916dd":()=>l(()=>import("./跨宿主机通信overlay和macvlay.html-3-h5sFZL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8e1c3a3e":()=>l(()=>import("./EFK8.4.3部署.html-ywoQrt7j.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3487e284":()=>l(()=>import("./ELK.html-ZyR9vRwn.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4c3279e0":()=>l(()=>import("./ESXI中的网络.html-WcPEog8i.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5c84e740":()=>l(()=>import("./配置案例.html-CZ3Pse0I.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-09de09ac":()=>l(()=>import("./AWK案例入门看这一篇就够了.html-OzS2m7KO.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-128301a5":()=>l(()=>import("./Shell文本处理三剑客-AWK.html-Ncn5UoG4.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-03dfed38":()=>l(()=>import("./awk 入门教程.html-O02OEw0P.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8ff08dec":()=>l(()=>import("./awk 学习  高级输出  02.html-USnAONPN.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7e12b9a6":()=>l(()=>import("./awk语言学习笔记  01.html-BLNKm8d1.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ab5d88e0":()=>l(()=>import("./匹配特定字符并输出其后的若干行.html-NMr6LGrA.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3f1dde92":()=>l(()=>import("./Git 的代理配置.html-exgB0CZx.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-69ef78cb":()=>l(()=>import("./Git分支管理合并与删除命令.html-cMR4PftJ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9382cbf8":()=>l(()=>import("./Git识别项目的语言类型，及文件占比.html-yrf6S0yC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-bae969ea":()=>l(()=>import("./Git高级操作和练习网站.html-B0PM8GOp.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-523bf541":()=>l(()=>import("./index.html-5pAG2Pg5.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-20b8f0f1":()=>l(()=>import("./git 拉取全部远程分支.html-XBTl_wEa.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7726c068":()=>l(()=>import("./git基础命令.html-lXgDpDqO.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2b2f3b07":()=>l(()=>import("./git更新远程分支.html-cQ8zBa1F.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-219bdfe6":()=>l(()=>import("./git统计项目代码行数.html-5L3pRU2o.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-08b82cef":()=>l(()=>import("./git远程仓库回退到指定版本.html-c39ayZLH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-89f58c8e":()=>l(()=>import("./命令行显示gitmoji.html-ckBrftRI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4d6c1094":()=>l(()=>import("./Gitlab二开从而自定义权限系统.html-Hyet15r7.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-736258dc":()=>l(()=>import("./Gitlab备份和恢复.html-4CNpjsyI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ce8e88a6":()=>l(()=>import("./Gitlab安装部署.html--7Lc6l7K.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1affebc9":()=>l(()=>import("./Gitlab的一些问题.html-xfo9qhHM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-edc7031c":()=>l(()=>import("./Gitlab配置邮件服务器.html-97FCnUYK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3251a524":()=>l(()=>import("./ha-lvs-keepalived.html-WHgVL0GC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-72564be3":()=>l(()=>import("./haproxy.html-gbHQuMOk.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6c105dfe":()=>l(()=>import("./keepalived.html-IxljWzXm.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4db786a2":()=>l(()=>import("./Harbor离线搭建.html-BgjooBa5.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-77da57a3":()=>l(()=>import("./Linux内核子系统 - 网络 netfilter.html-StM9dZYV.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4b719180":()=>l(()=>import("./iptables拦截内网奇虎软件病毒上报.html-yW8kGrFe.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5df5e696":()=>l(()=>import("./iptables详解-朱光印.html-m7cRyhGK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f32b6d86":()=>l(()=>import("./linux下IPTABLES配置详解.html-C4-AVgt4.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f8568246":()=>l(()=>import("./内核参数ip_forward.html-1XPLZtlR.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-dcb1d26a":()=>l(()=>import("./jenkins备份.html-Em3askuq.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-07b8030a":()=>l(()=>import("./jenkins构建持续化集成平台.html-1bDAqgaI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-577615d7":()=>l(()=>import("./jenkins的docker部署文档.html-fBcV9pip.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-513bda28":()=>l(()=>import("./修改Jenkins插件为国内源.html-W_rasv_Y.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-77aac963":()=>l(()=>import("./Kubernetes Api Endpoint.html-myjQWAV0.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-c66ad2a6":()=>l(()=>import("./Kubernetes Make Prometheus_Grafana.html-ierRR-ZC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e9469f82":()=>l(()=>import("./Kubernetes Service Account如何生成Token.html-Vi36pNLW.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2ece8d5e":()=>l(()=>import("./Kubernetes crictl管理命令详解.html-IMvHv1jl.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-a0127118":()=>l(()=>import("./Kubernetes最小高可用架构图.html-p8G4wOoP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f5f5d002":()=>l(()=>import("./Kubernetes有哪些组件.html-pvnrAEj1.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-01b130a4":()=>l(()=>import("./Kubernetes的NetworkPlicy.html-8UAq9S3e.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7f271bfb":()=>l(()=>import("./NameSpace 资源隔离隔离了什么.html-dEGmcQSY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-76d4e7bb":()=>l(()=>import("./Request和Limit.html-4hxWx-NI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3d16ea04":()=>l(()=>import("./SSL证书签发.html-up9W1wX9.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6cc6b7c2":()=>l(()=>import("./crictl登录dockerhub.html--8CUSpcW.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-575cf978":()=>l(()=>import("./etcd 二进制三节点集群部署.html-84RWkBIV.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ac04e9ec":()=>l(()=>import("./k8s删除Terminating状态ns.html-Z1GA9wZQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6b0a0620":()=>l(()=>import("./kubeadm部署Kubernetes 1.24步骤.html-A3tn9SCY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-743045a2":()=>l(()=>import("./kubernetes进阶（一）kubectl工具使用详解.html-Ii77kA_H.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-16f9c44f":()=>l(()=>import("./kubernetes进阶（三）服务发现-coredns.html-J_gvnqY_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e9467f60":()=>l(()=>import("./kubernetes进阶（二）核心网络插件Flannel.html-B8SR148M.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-089e219f":()=>l(()=>import("./kubernetes进阶（五）dashboard--WEB管理.html-RDumyXFA.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1c63547c":()=>l(()=>import("./kubernetes进阶（六）k8s平滑升级.html-pmC1yzeh.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-07fca106":()=>l(()=>import("./kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-8gPy0NFH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4baada5c":()=>l(()=>import("./一次kubeadm添加节点出现etcd检查错误.html-gm_FB6me.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5b225804":()=>l(()=>import("./二进制安装kubernetes（七） 部署知识点总结.html-hoi-6vCs.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-aa3e3ee8":()=>l(()=>import("./二进制安装kubernetes（三） kube-controller-manager组件安装.html-tBXilLT_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-81834800":()=>l(()=>import("./二进制安装kubernetes（二） kube-apiserver组件安装.html-xXMP75cG.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7e1d67ea":()=>l(()=>import("./二进制安装kubernetes（五） kubelet组件安装.html-A4RrVUTw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e936c158":()=>l(()=>import("./二进制安装kubernetes（六） kube-proxy组件安装.html-DyvTQKV8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-53c4fe8d":()=>l(()=>import("./二进制安装kubernetes（四） kube-scheduler组件安装.html-zuXlXbWg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-639f36bc":()=>l(()=>import("./二进制部署Kubernetes.html-fyBw_T_8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5823502a":()=>l(()=>import("./什么是Label和Label选择器.html-BMg8EuQ0.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7544ffb4":()=>l(()=>import("./什么是Name和NameSpace.html-Pk6PsjOX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-95889b98":()=>l(()=>import("./什么是Pod和Pod控制器.html-InyP2Lmj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-b33727c8":()=>l(()=>import("./什么是Service和Ingress.html-SBQYlR62.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4f01f3b8":()=>l(()=>import("./使用 vmagent 代替 Prometheus 采集监控指标.html-hWwIq6yP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-23bf45e1":()=>l(()=>import("./常用优化.html-VzYAPCsb.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0a8284ed":()=>l(()=>import("./记一次异常断电造成kubernetes故障.html-4NKmw4sf.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-788034ca":()=>l(()=>import("./LFS-NoteBook.html-kzbrZbYv.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5133ac50":()=>l(()=>import("./Linux备份为liveOS.html-jZKZyve6.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1c82387b":()=>l(()=>import("./bash利用扩展字符集实现rm.html-7ypHleJG.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-759f12ff":()=>l(()=>import("./grub2手动命令引导教程.html-_4tn9lms.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-eeb679e4":()=>l(()=>import("./shell脚本加密解密工具shc.html-oh5Yh8hH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0419e184":()=>l(()=>import("./shell通过函数隐藏命令.html-30Mt_pQJ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-19869778":()=>l(()=>import("./ssh 设置反向代理.html-HbD1ubwE.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0c50d2dd":()=>l(()=>import("./ssh把远程端口映射到本地.html-RyzMtdE0.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e5c7a1ce":()=>l(()=>import("./tcpdump抓包命令.html-9fen8tc0.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-28d01994":()=>l(()=>import("./命令创建虚拟镜像文件.html-IzJPHuxw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-156dfb56":()=>l(()=>import("./按电源软关机要等待60秒设置更短的时间.html-rqSWd_Rx.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3d933afb":()=>l(()=>import("./用shell生成包含大写、小写、数字、特殊字符的随机字符串.html-M-zIqjRz.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7208e0fe":()=>l(()=>import("./让某个命令不输出.html-8RgoZytf.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-91b6e760":()=>l(()=>import("./Nginx变量大全.html-CrnuWULs.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-49be5ae0":()=>l(()=>import("./Nginx正向代理.html-nFs-i1OI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7aa7e66a":()=>l(()=>import("./Nginx正向代理支持https.html-Y7Inon3t.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-45c0ddce":()=>l(()=>import("./Nginx正向代理高并发.html-vQx1dMEN.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-846b5d98":()=>l(()=>import("./Nginx的url过长导致fastcgi协议崩溃.html-S5FnLX1H.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-73768998":()=>l(()=>import("./Nginx的负载均衡和故障转移.html-4Tq9yZmX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e332710c":()=>l(()=>import("./apt安装OpenResty教程.html-BBUKfFkj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5e42cccc":()=>l(()=>import("./nginx-plus-module-lua.html-ZMYgoPr_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-06cf84a8":()=>l(()=>import("./nginx01.html-C5G6tzd3.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-08845d47":()=>l(()=>import("./nginx02.html-Q0RuUps-.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0a3935e6":()=>l(()=>import("./nginx03.html-QltD54UR.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e233a3da":()=>l(()=>import("./nginx单机百万并发.html-t3MhmbHI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6e466380":()=>l(()=>import("./nginx配置示例.html-meCrnP0d.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8ed8a042":()=>l(()=>import("./ngx_stream_ssl_preread_module.html-F57Z2ED4.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3eb55632":()=>l(()=>import("./ssh日志记录登陆密码.html-JzZO-sq8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ce601f4c":()=>l(()=>import("./CPU和内存的架构 UMA和NUMA.html-10wFWynX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5d982049":()=>l(()=>import("./Journal日志服务详解.html-8ZcjRATe.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3e5ab3dc":()=>l(()=>import("./Linux下的ASLR（PIE）内存保护机制和绕过.html-14fT-cu8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2b1ef3ea":()=>l(()=>import("./Linux升级内核的两种方法.html-ijojSenU.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-31ec57f8":()=>l(()=>import("./Linux排查哪个进程和IP在占用网速.html-7ZNa-zHz.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-00524e94":()=>l(()=>import("./Linux普通用户免密码sudo.html-QhT-4dzg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-636408d2":()=>l(()=>import("./Linux网络内核参数优化秘籍.html-RNH_qe0r.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4581fe4c":()=>l(()=>import("./Linux虚拟网络设备之bridge.html-ppmah7Nc.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1c72c74c":()=>l(()=>import("./Shell快捷键.html-Ofjdof5A.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-79d954ee":()=>l(()=>import("./date命令.html-PdRUMkwp.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-b89ca53e":()=>l(()=>import("./grep命令.html-GgcjkTHB.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4977fd20":()=>l(()=>import("./ip命令.html-WXpKeM6Q.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-966b2156":()=>l(()=>import("./macvlan详解.html-uy20Vsae.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8484bb5a":()=>l(()=>import("./proc-sysrq-trigger详解.html-Khr6qKxU.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-92954d86":()=>l(()=>import("./proc详解.html-u4cAsyua.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-00bad121":()=>l(()=>import("./sed.html-u-4iu45s.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-bb5b9e90":()=>l(()=>import("./sysstat Linux状态工具包.html-_wD2nBPJ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-15e0f84a":()=>l(()=>import("./使用curl实现邮件发送.html-3tRn2YvG.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-269af0d2":()=>l(()=>import("./使用dev下的tcp-udp实现socket.html-ARoMyT7q.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5a559594":()=>l(()=>import("./备份Linux系统.html-VsMjHb8W.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-20664f24":()=>l(()=>import("./大量使用swap导致无法切换.html-Lewkt9NX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2741a660":()=>l(()=>import("./常见乱码产生原因.html-9sEyGaWV.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f71e4004":()=>l(()=>import("./更换系统和命令行语言.html-ubBWEh7o.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0a501b28":()=>l(()=>import("./环境变量PATH.html-U3DiBpaR.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-244d585c":()=>l(()=>import("./进程.html-ljU34lXK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-76b130c2":()=>l(()=>import("./逻辑卷无法删除.html-6iMpfLEo.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-794ccb14":()=>l(()=>import("./ps如何去水印的4个方法.html-icM8OGn7.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-b7e1d682":()=>l(()=>import("./Huawei x288系列风扇转速调速.html-BS1WoCPi.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-bf89a59e":()=>l(()=>import("./Portainer 单机部署.html-dOh9138c.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-56a71ded":()=>l(()=>import("./Prometheus监控Windows主机.html-hZus1hEZ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6fa63cee":()=>l(()=>import("./rabbitmq.html-8lbRoSWT.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5a7f9ef1":()=>l(()=>import("./Azure刷写ROS教程.html--OpNQshQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-790a3eba":()=>l(()=>import("./RouterOS利用（L2TP）实现多方异地组网.html-rJr_Celg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-87713e26":()=>l(()=>import("./用ros路由作为中转教程.html-dVb5Bpyc.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0dc78858":()=>l(()=>import("./MiniO_Docker_Deploy.html-5h0BiNwv.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3f2483ac":()=>l(()=>import("./Minio挂载到nfs不成功.html-S6TTyV38.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-b010c524":()=>l(()=>import("./tomcat.html--Wet71kj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-42119fed":()=>l(()=>import("./index.html-D60LSifp.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-69833e9a":()=>l(()=>import("./traefik作为docker边缘路由.html-s4t9gU_e.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-454654c1":()=>l(()=>import("./各个版本的激活密钥.html-S_BZZgyL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5b263b15":()=>l(()=>import("./虚拟化物理机.html-2jS1SQ9u.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-46b48e13":()=>l(()=>import("./PowerShell 打印环境变量.html-Nb2f6a1l.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-24f7c960":()=>l(()=>import("./PowerShell 操作系统禁止运行脚本.html-XqUtMviY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-28c94530":()=>l(()=>import("./Windows系统更改迁移用户目录.html-9PpqxlFg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7aaa8b0e":()=>l(()=>import("./Zabbix-Agent主动模式自动注册.html-Ol7foq8G.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3bb6b138":()=>l(()=>import("./Zabbix-Agent被动模式自动注册.html-zrnSrwAt.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5df449f7":()=>l(()=>import("./zabbix-docker.html-Mhh0aiAl.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-bf02f4a4":()=>l(()=>import("./zabbix.html-Idqigt8d.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8b9d7fba":()=>l(()=>import("./zabbix的VMwareGuest补充缺陷.html-B7joAbX1.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5bece530":()=>l(()=>import("./ebook.html-WP3jlcUU.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-42d1b932":()=>l(()=>import("./goaccess给ftp生成分析图.html-Duo9UWsQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4ae285a4":()=>l(()=>import("./memcache-redis.html-4QZs7OCy.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-17556421":()=>l(()=>import("./中国建设银行u盾使用教程.html-MCKoaajX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-171e9f87":()=>l(()=>import("./CPU鸡血BIOS.html-wK4mg8cq.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4be274e4":()=>l(()=>import("./GPU矿卡体质检测.html-6tvjn6rE.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-04007d38":()=>l(()=>import("./etcd安装etcdkeeper.html-wUC-rAG7.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-350fc342":()=>l(()=>import("./国内源.html-3vv8Qm6_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1187c118":()=>l(()=>import("./查看Mysql数据量大小.html-yHYO3EHw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-11c46d82":()=>l(()=>import("./Centos7.x 安装Python3.9.7  Ansible4.5.html-AUiOg689.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-761ac8fe":()=>l(()=>import("./ansible自动化运维.html-HTObeg96.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-61515108":()=>l(()=>import("./HA_Deploy.html-dZmOzX0-.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5865d184":()=>l(()=>import("./JumperServerDockerDeploy.html-j4lR_tgY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9174ace0":()=>l(()=>import("./index.html-s9akGBqC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-91b5b3e2":()=>l(()=>import("./OpenStack-Queens版搭建详解.html-FZJ0G_Go.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7c8e6e87":()=>l(()=>import("./gitlab ci 编写.html-_NMufjCa.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-eb33cb0a":()=>l(()=>import("./gitlab ci 部署.html-AsiMub7X.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-75d6f0c8":()=>l(()=>import("./部署Kubernetes类型的gitlab-runner.html-aGh3jAQk.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1c751544":()=>l(()=>import("./elk_kfaka.html-6Py7m6Ld.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-37a8ebbd":()=>l(()=>import("./Centos7 yum install git2.x 较新版本.html-wVxNCB7v.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3b5999cf":()=>l(()=>import("./AWK中的字符串操作函数.html-YfiDJfYe.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-66a50361":()=>l(()=>import("./安装Nvidia Runtime.html-XWxNYIbF.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-a467abfa":()=>l(()=>import("./安装Nvidia驱动.html-OHkEJxZk.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-80d561d8":()=>l(()=>import("./Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-L0fGhbUg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0e11c102":()=>l(()=>import("./Linux挂载cifs文件系统.html-88ZVtrTS.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e966fc72":()=>l(()=>import("./Samba共享文件时文件属性nobody.html-44yTUF_1.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-19b6577e":()=>l(()=>import("./Samba配置举例.html-CWJ4d161.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-081b1a63":()=>l(()=>import("./Ubuntu 20.04 安装VNC Server.html-0iKy9G-B.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5c90804c":()=>l(()=>import("./vi编辑器.html-L54368z0.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3352fc98":()=>l(()=>import("./index.html-HUccSXvH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-22a3c8d7":()=>l(()=>import("./CPU的虚拟化.html-6ZfQiNAu.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-050e9cf9":()=>l(()=>import("./操作系统介绍.html-URwhNjpn.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3662114a":()=>l(()=>import("./CentOS7配置支持AUFS文件系统.html-TuOWENhD.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7690a7dc":()=>l(()=>import("./CentOS_7用户账户配置.html-H9BwprzT.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-a6eba2dc":()=>l(()=>import("./Centos8重启网卡的方法.html-pfdWUomp.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1d54df78":()=>l(()=>import("./firewalld配置.html-ppPMY2uM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2bec014a":()=>l(()=>import("./制作CenOS操作系统.html-bH75kPkR.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4de8425e":()=>l(()=>import("./配置SSH免密码验证.html-h3zIc_OD.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2a52f0c8":()=>l(()=>import("./Linux 终端命令格式.html-fRp-5kaD.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2b5b3397":()=>l(()=>import("./Ubuntu_20.04_Server使用命令行设置IP地址.html-Lwj_DAfK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-c8460b72":()=>l(()=>import("./Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html-5PZwHiHN.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6e8771f8":()=>l(()=>import("./Ubuntu更改为24小时制.html-JAnP-g-D.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9a30caae":()=>l(()=>import("./Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.html-Y3i_nrML.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3215b4ba":()=>l(()=>import("./Ubuntu软件包文件管理.html-FgkY6Dul.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1a0079da":()=>l(()=>import("./VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-c6KO-OzW.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-733d9740":()=>l(()=>import("./apt查询某个软件有哪些版本.html-8O9bClqL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-48c517e4":()=>l(()=>import("./linux关闭地址空间随机化（ASLR）.html-N9j4GqSE.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1922adf5":()=>l(()=>import("./ubuntu14.04 忘记了普通用户密码和root密码.html-tmwe7Qno.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7bf7b544":()=>l(()=>import("./ubuntu安装nfs.html-ZEh6AEwF.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4b3aa89e":()=>l(()=>import("./ubuntu查看intel-GPU使用情况.html-NMKwfszP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2e5806d2":()=>l(()=>import("./index.html-fqCyBj26.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4c406808":()=>l(()=>import("./数据结构与算法哔哩哔哩比特就业课.html-S1dTrW0s.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2adac7da":()=>l(()=>import("./C语言volatile关键字详解.html-1gqgAFpj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-cf78e944":()=>l(()=>import("./index.html-rH0nwO2d.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4294bd6d":()=>l(()=>import("./二分查找.html-e7UC6nbL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2b829e3e":()=>l(()=>import("./FastAPI-Python高性能web框架.html-Vt0eUqsj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-66124308":()=>l(()=>import("./PyInstaller带静态依赖文件打包教程.html-9tAv9mG0.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9f71a98a":()=>l(()=>import("./Python之正则表达式细讲.html-vTzSaK85.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-122307df":()=>l(()=>import("./Python代码藏毒.html-q58Cv4Bf.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0556e072":()=>l(()=>import("./Python数据切片例子.html-Lxz-Uhal.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3122a850":()=>l(()=>import("./Python数据格式化format.html-HDDmGQtQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-54218f21":()=>l(()=>import("./python re.Match object的说明.html-qBIzFIwB.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4742da80":()=>l(()=>import("./python re.html-eTnZSZuA.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1302838e":()=>l(()=>import("./新版VSCode中Python设置自动补全函数括号.html-iU9c9g5H.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6a7299b5":()=>l(()=>import("./shell脚本bad substitution.html-gtX0zbS9.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2b73f172":()=>l(()=>import("./基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-CE5lEwr8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1c5b2b34":()=>l(()=>import("./Docker一键部署Clash服务与管理面板.html-g7VyhwEH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4d6f6891":()=>l(()=>import("./cfw-cdn-ssl-ws-tls.html-ykHTlXgg.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2cf74ea8":()=>l(()=>import("./优秀的落地框架 XrayR.html-Rj8ivQTI.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2d398f6b":()=>l(()=>import("./连接WARP为服务器添加IPv4IPv6网络.html-uHjCkRDa.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3ac693d4":()=>l(()=>import("./index.html-Ws4-bjaj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-07a67b62":()=>l(()=>import("./index.html-AyPZLYOt.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2fabe988":()=>l(()=>import("./ACLLib.html-tep5QzAo.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5b349d28":()=>l(()=>import("./01_面向对象（OOP）基本概念.html-bzEhccxX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6111f3f4":()=>l(()=>import("./02_类和对象.html-uar6-dqy.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4f6bf42c":()=>l(()=>import("./03_面相对象基础语法.html-Qo_wOG6s.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5d1813c6":()=>l(()=>import("./04_面向对象封装案例.html-Y-3d0j52.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0cb49670":()=>l(()=>import("./05_面向对象封装案例 II.html-Xt_g7Bgz.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-451b6bb3":()=>l(()=>import("./06_私有属性和私有方法.html-d9vIJ13w.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7741f6f4":()=>l(()=>import("./07_单例.html-cqlRrb7q.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-617feebe":()=>l(()=>import("./08_多态.html-90bjt-f6.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-fc80a980":()=>l(()=>import("./09_继承.html-19m8sw30.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-69880198":()=>l(()=>import("./10_类属性和类方法.html-NAmX2Bs6.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-554537f7":()=>l(()=>import("./11_eval函数.html-l25lVIiz.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-782c286b":()=>l(()=>import("./12_模块和包.html-41nuldfX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-d7023b56":()=>l(()=>import("./13_文件.html--j3R1gvz.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7cbbdb02":()=>l(()=>import("./14_异常.html-28_QkY5N.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-65ddef8e":()=>l(()=>import("./10 Multi-CPU Scheduling.html-JrmhbZNr.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-508b9403":()=>l(()=>import("./13 Address Spaces.html-MIktSpN_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-06f9c988":()=>l(()=>import("./14 Memory API.html-2klmTuQQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-b0fbb1a2":()=>l(()=>import("./15 Address Translation.html-dfwLY0WY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-77255d40":()=>l(()=>import("./16 Segmentation.html-s6ZUWX_j.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-cf9a1e10":()=>l(()=>import("./17 Free Space Management.html-tBWEBMCu.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-247efa59":()=>l(()=>import("./18 Introduction to Paging.html-GH4oLOcJ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-d9307d94":()=>l(()=>import("./19 Translation Lookaside Buffers.html-wb6ZpvFP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5920d9e3":()=>l(()=>import("./20 Advanced Page Tables.html-7E17U0NL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-201aa8de":()=>l(()=>import("./21 Swapping Mechanisms.html-nHm80bhd.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-503a0eb2":()=>l(()=>import("./22 Swapping Policies.html-rCnwAyPH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5b295232":()=>l(()=>import("./23 Complete VM Systems.html-eYSZVeZc.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-319a6cdc":()=>l(()=>import("./4 Processes.html-e7lAfFIY.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-01969508":()=>l(()=>import("./5 Process API.html-O1jWdGLc.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5e65d047":()=>l(()=>import("./6 Direct Execution.html-WhTZHrHC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3d749c17":()=>l(()=>import("./7 CPU Scheduling.html-K0Ifsi71.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-10c4e4cf":()=>l(()=>import("./8 Multi-level Feedback.html-lemCIve-.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ab459502":()=>l(()=>import("./26 Concurrency and Threads.html-84aCoSfX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-afb12a34":()=>l(()=>import("./27 Thread API.html-jo4YH_DJ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-c56826bc":()=>l(()=>import("./28 Locks.html-KygVSwag.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-41728b29":()=>l(()=>import("./29 Locked Data Structures.html-mfA-DU7z.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-01e792c4":()=>l(()=>import("./30 Condition Variables.html-cuSEe_xM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-187d9e5e":()=>l(()=>import("./31 Semaphores.html-1upVYu_A.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-282c901c":()=>l(()=>import("./32 Concurrency Bugs.html-dtID56cC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6773cc80":()=>l(()=>import("./33 Event-based Concurrency.html-o3Fzy8y5.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e1be36c0":()=>l(()=>import("./36 IO Devices.html-WkTOYypw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-47854b8a":()=>l(()=>import("./37 Hard Disk Drives.html-gdmSwWsT.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-58af6e7c":()=>l(()=>import("./39 Files and Directories.html-UnkaHgpG.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6305be1a":()=>l(()=>import("./40 File System Implementation.html-w9SIYpav.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3706649a":()=>l(()=>import("./404.html-2O1D9V_L.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-30ca943e":()=>l(()=>import("./index.html-t3fhRvcW.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-74bc627b":()=>l(()=>import("./index.html-9kai-e98.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-16e944d8":()=>l(()=>import("./index.html-SPLU5DAR.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-82c79f78":()=>l(()=>import("./index.html-_dlcu9k3.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5239d6c1":()=>l(()=>import("./index.html-uUSwpOTK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-523a2eca":()=>l(()=>import("./index.html-nYloaQvw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1a1918eb":()=>l(()=>import("./index.html-yVzhdrDN.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-523a9aaf":()=>l(()=>import("./index.html-ZBH6gL51.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-15a9b468":()=>l(()=>import("./index.html-7iRHOq0u.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1590671a":()=>l(()=>import("./index.html-CYS1bXd6.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-1581bac6":()=>l(()=>import("./index.html-TE3KRzjG.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-a102ac20":()=>l(()=>import("./index.html-tedEYrHi.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2f09dd7f":()=>l(()=>import("./index.html-C26mnaLE.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-52c4c802":()=>l(()=>import("./index.html-QHqIuf9B.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-91099982":()=>l(()=>import("./index.html-ghMpkHHv.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-cbcc4a46":()=>l(()=>import("./index.html--0dTi-mr.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-39379285":()=>l(()=>import("./index.html-7CkRSu1w.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-69ad952f":()=>l(()=>import("./index.html-VcRdKdXj.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4c771b7d":()=>l(()=>import("./index.html-dyESYFYC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-c44c55ec":()=>l(()=>import("./index.html-et9Nhj1M.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9affc6ce":()=>l(()=>import("./index.html-fw1_yfkP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5137394c":()=>l(()=>import("./index.html-cOJCjKGk.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3e4a648b":()=>l(()=>import("./index.html-2BiHIxAF.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0b15a2f0":()=>l(()=>import("./index.html--2fThAZk.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6d21b581":()=>l(()=>import("./index.html-SLeRfteB.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-66058961":()=>l(()=>import("./index.html-kmWt1KCX.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-219c108d":()=>l(()=>import("./index.html-dqbbuCxQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-48fe3284":()=>l(()=>import("./index.html-ZzRo5POx.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-dd55478c":()=>l(()=>import("./index.html-Ogq4glhK.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-69060647":()=>l(()=>import("./index.html-wi_J3P0x.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-cd4c1012":()=>l(()=>import("./index.html-mCt-SX_1.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-760a078c":()=>l(()=>import("./index.html-xhRyGMkH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e4278e96":()=>l(()=>import("./index.html-FKUpdwpP.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-343dc2b6":()=>l(()=>import("./index.html-iHSIyPAH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-74051d42":()=>l(()=>import("./index.html-gWVUGhz6.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e95f27e0":()=>l(()=>import("./index.html-G4c6_pWU.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-114b9a82":()=>l(()=>import("./index.html-ePUlR4rx.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2d6398e4":()=>l(()=>import("./index.html-s3V-JC5e.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-864a1ec4":()=>l(()=>import("./index.html-XQdb3vE_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0814f0c1":()=>l(()=>import("./index.html-WUIJlRak.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-272e57e4":()=>l(()=>import("./index.html-qQmp5J47.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-d8166310":()=>l(()=>import("./index.html-4Q8yeacs.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-4c2cc361":()=>l(()=>import("./index.html-XBYlwdYC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-2f8ddbd2":()=>l(()=>import("./index.html-GJUNVLD7.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f5fa56ce":()=>l(()=>import("./index.html-xlAJpDD5.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7f7597ac":()=>l(()=>import("./index.html-amwxyf_T.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8d1e4126":()=>l(()=>import("./index.html-U9jGnePn.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8716188c":()=>l(()=>import("./index.html-jHVuUqzO.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-aea9109e":()=>l(()=>import("./index.html-nghOWPQM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-75d00417":()=>l(()=>import("./index.html-v25sVsNh.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-f1e41524":()=>l(()=>import("./index.html-LveJ5BEH.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-87094bfe":()=>l(()=>import("./index.html-FEpBhYFx.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8708771c":()=>l(()=>import("./index.html-ZAF1UiIM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-62a96ae9":()=>l(()=>import("./index.html-Uo2Sdtdo.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-380a8ce0":()=>l(()=>import("./index.html-tcQYgxGN.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-54dda6e8":()=>l(()=>import("./index.html-32v8-F9b.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-270d1f92":()=>l(()=>import("./index.html-qmNLl5w3.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-202e1ae1":()=>l(()=>import("./index.html-EDvFiHN3.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ed5a039e":()=>l(()=>import("./index.html-oK0ZdLft.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-27e35532":()=>l(()=>import("./index.html-LvLD4_gw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-ad35a506":()=>l(()=>import("./index.html-sCv6lEaL.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-6f76dcc4":()=>l(()=>import("./index.html-D3G0W23m.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-738568b6":()=>l(()=>import("./index.html-K878tJoF.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-02fff589":()=>l(()=>import("./index.html-GNrzDzdy.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-0f9b9b67":()=>l(()=>import("./index.html-ZKA0Jc6_.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5a14fc0c":()=>l(()=>import("./index.html-kCPubu8G.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-3c38aec7":()=>l(()=>import("./index.html-0MskFnVM.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5bc93818":()=>l(()=>import("./index.html-5vTrbVzw.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-744d024e":()=>l(()=>import("./index.html-aYradXK-.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-e52c881c":()=>l(()=>import("./index.html-Py3FvO87.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-154dc4c4":()=>l(()=>import("./index.html-pAi6ylDk.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-01560935":()=>l(()=>import("./index.html-CJg_OBZh.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-49425445":()=>l(()=>import("./index.html-6Q08uDng.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-07af4466":()=>l(()=>import("./index.html-3Sk5izBs.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-45aa885d":()=>l(()=>import("./index.html-12k03-ax.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9803cb6a":()=>l(()=>import("./index.html-bcuEvtxC.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-a074e84e":()=>l(()=>import("./index.html-B77NVljq.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-9c48d85a":()=>l(()=>import("./index.html-Lt1NVXaF.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-8489a3d2":()=>l(()=>import("./index.html-YBiPV-g8.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-31c48178":()=>l(()=>import("./index.html-UmVhUMSa.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-95b29426":()=>l(()=>import("./index.html-dUonVTHb.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-5e0b61bd":()=>l(()=>import("./index.html-OyH0mrZQ.js"),__vite__mapDeps([])).then(({data:n})=>n),"v-7f09fdf1":()=>l(()=>import("./index.html-T9cZxc5_.js"),__vite__mapDeps([])).then(({data:n})=>n)},Oi=JSON.parse(`{"base":"/","lang":"zh-CN","title":"运维开发绿皮书","description":"运维开发绿皮书,放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重。","head":[["script",{},"\\n      /*禁用F12*/\\n      document.onkeydown = function(){\\n          if(window.event.keyCode==123) {\\n              var x;\\n              var r=confirm('大佬，别扒了！不妨加个友链？\\\\n点击确认键跳转到友链！\\\\n\\\\n执意要做？亦或是再按下F12可调出控制台\\\\n');\\n              if (r==true){\\n                //x=\\"你按下的是\\\\\\"确定\\\\\\"按钮。\\";\\n                window.location.replace(\\"/友链/友链.html\\");\\n              }\\n              else{\\n                x=\\"你按下的是\\\\\\"取消\\\\\\"按钮。\\";\\n              }\\n              // document.write(x)\\n              event.preventDefault(); // 阻止默认事件行为\\n              event.keyCode=0;\\n              event.returnValue=false;\\n          }\\n      }\\n      "]],"locales":{}}`);var x0=["link","meta","script","style","noscript","template"],O0=["title","base"],L0=([n,e,t])=>O0.includes(n)?n:x0.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([s,a])=>typeof a=="boolean"?a?[s,""]:null:[s,a]).filter(s=>s!=null).sort(([s],[a])=>s.localeCompare(a)),t]):null,S0=n=>{const e=new Set,t=[];return n.forEach(s=>{const a=L0(s);a&&!e.has(a)&&(e.add(a),t.push(s))}),t},R0=n=>n[0]==="/"?n:`/${n}`,rr=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,He=n=>/^(https?:)?\/\//.test(n),T0=/.md((\?|#).*)?$/,Mt=(n,e="/")=>!!(He(n)||n.startsWith("/")&&!n.startsWith(e)&&!T0.test(n)),Li=n=>/^[a-z][a-z0-9+.-]*:/.test(n),Me=n=>Object.prototype.toString.call(n)==="[object Object]",lr=n=>n[n.length-1]==="/"?n.slice(0,-1):n,Si=n=>n[0]==="/"?n.slice(1):n,I0=(n,e)=>{const t=Object.keys(n).sort((s,a)=>{const o=a.split("/").length-s.split("/").length;return o!==0?o:a.length-s.length});for(const s of t)if(e.startsWith(s))return s;return"/"},C0=n=>typeof n=="function",fn=n=>typeof n=="string";const Ri={"v-8daa1a0e":h(()=>l(()=>import("./index.html-_o2_6jAf.js"),__vite__mapDeps([0,1]))),"v-28f7b2e8":h(()=>l(()=>import("./001-PyQt介绍与安装.html-zs-7Cx0g.js"),__vite__mapDeps([2,1]))),"v-736cf379":h(()=>l(()=>import("./002-PyQt基本UI.html-AkQW3nd0.js"),__vite__mapDeps([3,1]))),"v-548167c6":h(()=>l(()=>import("./003-布局.html-1oE6ZFFm.js"),__vite__mapDeps([4,1]))),"v-30bf7f7c":h(()=>l(()=>import("./004-布局2.html-yzTAL9R6.js"),__vite__mapDeps([5,1]))),"v-48858f42":h(()=>l(()=>import("./005-窗口.html-UgyCio3U.js"),__vite__mapDeps([6,1]))),"v-6c1110d1":h(()=>l(()=>import("./006-信号与槽.html-MVQR8crq.js"),__vite__mapDeps([7,1]))),"v-2db1247c":h(()=>l(()=>import("./007-Qt Designer.html-02PN3Hox.js"),__vite__mapDeps([8,1]))),"v-580a4400":h(()=>l(()=>import("./008-PyQt多线程.html-e-XAdOND.js"),__vite__mapDeps([9,1]))),"v-c47f0884":h(()=>l(()=>import("./009-打包为可执行程序.html-lNzl97zW.js"),__vite__mapDeps([10,1]))),"v-fd1808c0":h(()=>l(()=>import("./friend.html-wPysDfSU.js"),__vite__mapDeps([11,1]))),"v-513bdf66":h(()=>l(()=>import("./me.html-p8ei9kum.js"),__vite__mapDeps([12,1]))),"v-5491f884":h(()=>l(()=>import("./index.html-xGjQ9Svp.js"),__vite__mapDeps([13,1]))),"v-2776dc09":h(()=>l(()=>import("./杀不死的进程.html-ut90VTGJ.js"),__vite__mapDeps([14,1]))),"v-d440f426":h(()=>l(()=>import("./index.html-H9FRtc0G.js"),__vite__mapDeps([15,1]))),"v-b3591580":h(()=>l(()=>import("./WARP帮助页面.html-0agF6UQp.js"),__vite__mapDeps([16,1]))),"v-50c35cc8":h(()=>l(()=>import("./Windows_WSL2安装nvidia-cuda驱动.html-q63fN9rw.js"),__vite__mapDeps([17,1]))),"v-01868d8e":h(()=>l(()=>import("./torch 环境.html-4uh2Obj_.js"),__vite__mapDeps([18,1]))),"v-9ef1da18":h(()=>l(()=>import("./英伟达开源驱动和闭源驱动冲突问题.html-VxaB7ayA.js"),__vite__mapDeps([19,1]))),"v-0300e138":h(()=>l(()=>import("./Ubuntu命令行安装Android SDK.html-34LqLTrb.js"),__vite__mapDeps([20,1]))),"v-a9b33774":h(()=>l(()=>import("./index.html-xucXAU15.js"),__vite__mapDeps([21,1]))),"v-1d16fbc1":h(()=>l(()=>import("./Snapper玩转btrfs文件系统.html-VjsSV4eR.js"),__vite__mapDeps([22,1]))),"v-47c36178":h(()=>l(()=>import("./btrfs的使用.html-eE34H3S7.js"),__vite__mapDeps([23,1]))),"v-2f2e2cf4":h(()=>l(()=>import("./some device missing方法.html-UvxGD_UD.js"),__vite__mapDeps([24,1]))),"v-cb5d9150":h(()=>l(()=>import("./CVE-2024-21626利用场景.html-fhadXnjI.js"),__vite__mapDeps([25,1]))),"v-4b450dee":h(()=>l(()=>import("./index.html-dHPpqfAu.js"),__vite__mapDeps([26,1]))),"v-756d3903":h(()=>l(()=>import("./ext-plugin-redis.html-P0q1CkAp.js"),__vite__mapDeps([27,1]))),"v-2ab375a4":h(()=>l(()=>import("./理解CoreDNS.html-mJrvxzTH.js"),__vite__mapDeps([28,1]))),"v-1aecc47a":h(()=>l(()=>import("./Bind9的使用.html-MgsDx9Ea.js"),__vite__mapDeps([29,1]))),"v-6129517b":h(()=>l(()=>import("./NamedManager.html-s6HgD8O-.js"),__vite__mapDeps([30,1]))),"v-c388ee4c":h(()=>l(()=>import("./Docker 2375攻击和解决方案.html-CVNHr1Wc.js"),__vite__mapDeps([31,1]))),"v-2f710f9a":h(()=>l(()=>import("./Docker 的daemon.json.html--oJu3cyI.js"),__vite__mapDeps([32,1]))),"v-7eb73050":h(()=>l(()=>import("./Docker不死进程.html-ouqCSchQ.js"),__vite__mapDeps([33,1]))),"v-19eea71e":h(()=>l(()=>import("./Docker日志选项配置上去对已运行容器不生效.html-LaQZmw0V.js"),__vite__mapDeps([34,1]))),"v-74135446":h(()=>l(()=>import("./Docker环境清理.html-tm09i_VF.js"),__vite__mapDeps([35,1]))),"v-326d43de":h(()=>l(()=>import("./Docker逃逸漏洞案例.html-_kqAMExo.js"),__vite__mapDeps([36,1]))),"v-1380e8c6":h(()=>l(()=>import("./RockyLinux安装Docker.html-MRnNtBJB.js"),__vite__mapDeps([37,1]))),"v-0451b50e":h(()=>l(()=>import("./docker pull push.html-6v1pB8JA.js"),__vite__mapDeps([38,1]))),"v-87a56570":h(()=>l(()=>import("./docker run 命令所有的选项.html-JVAW6HRs.js"),__vite__mapDeps([39,1]))),"v-4c790792":h(()=>l(()=>import("./docker学习笔记-PDF.html-WgSpogvJ.js"),__vite__mapDeps([40,1]))),"v-1fd2b10c":h(()=>l(()=>import("./docker容器集合.html-5gouwxlG.js"),__vite__mapDeps([41,1]))),"v-571244d6":h(()=>l(()=>import("./docker报错bridge-nf-call-iptables内核修整.html-zjuPlg28.js"),__vite__mapDeps([42,1]))),"v-50885a84":h(()=>l(()=>import("./一次构建出x86及arm镜像.html-ARqCqnPG.js"),__vite__mapDeps([43,1]))),"v-f9b4903c":h(()=>l(()=>import("./一键运行web版本vscode.html-BkpEdzKQ.js"),__vite__mapDeps([44,1]))),"v-10c9e8f1":h(()=>l(()=>import("./只使用操作系统创建容器-扫描.html-CsOnrqrl.js"),__vite__mapDeps([45,1]))),"v-6f39f683":h(()=>l(()=>import("./在Dockerfile里调整时区.html-lraS-nTA.js"),__vite__mapDeps([46,1]))),"v-4c5c0565":h(()=>l(()=>import("./手撕Docker容器命令行版.html-bbOeG--B.js"),__vite__mapDeps([47,1]))),"v-2df05220":h(()=>l(()=>import("./手撕docker容器.html-bmhPJ64q.js"),__vite__mapDeps([48,1]))),"v-d36c7940":h(()=>l(()=>import("./手撕docker网络.html-3SuGeBcH.js"),__vite__mapDeps([49,1]))),"v-3b10ae94":h(()=>l(()=>import("./把容器做成物理机.html-Fmq0c5yk.js"),__vite__mapDeps([50,1]))),"v-688e4fbe":h(()=>l(()=>import("./更改docker服务网段分配地址.html-E7BfO22q.js"),__vite__mapDeps([51,1]))),"v-7b7916dd":h(()=>l(()=>import("./跨宿主机通信overlay和macvlay.html-WT8YcXLw.js"),__vite__mapDeps([52,1]))),"v-8e1c3a3e":h(()=>l(()=>import("./EFK8.4.3部署.html-9-DALKxi.js"),__vite__mapDeps([53,1]))),"v-3487e284":h(()=>l(()=>import("./ELK.html-G8AsOFPx.js"),__vite__mapDeps([54,1]))),"v-4c3279e0":h(()=>l(()=>import("./ESXI中的网络.html--RSgcarn.js"),__vite__mapDeps([55,1]))),"v-5c84e740":h(()=>l(()=>import("./配置案例.html-WV9rlyvL.js"),__vite__mapDeps([56,1]))),"v-09de09ac":h(()=>l(()=>import("./AWK案例入门看这一篇就够了.html-iDUPFqlZ.js"),__vite__mapDeps([57,1]))),"v-128301a5":h(()=>l(()=>import("./Shell文本处理三剑客-AWK.html-_8cWBQf9.js"),__vite__mapDeps([58,1]))),"v-03dfed38":h(()=>l(()=>import("./awk 入门教程.html-TDXgEpq1.js"),__vite__mapDeps([59,1]))),"v-8ff08dec":h(()=>l(()=>import("./awk 学习  高级输出  02.html-F4AvRMXL.js"),__vite__mapDeps([60,1]))),"v-7e12b9a6":h(()=>l(()=>import("./awk语言学习笔记  01.html-Tj_CgXoq.js"),__vite__mapDeps([61,1]))),"v-ab5d88e0":h(()=>l(()=>import("./匹配特定字符并输出其后的若干行.html-zJMkphLK.js"),__vite__mapDeps([62,1]))),"v-3f1dde92":h(()=>l(()=>import("./Git 的代理配置.html-cXHsY5Gb.js"),__vite__mapDeps([63,1]))),"v-69ef78cb":h(()=>l(()=>import("./Git分支管理合并与删除命令.html-MEQmXxF5.js"),__vite__mapDeps([64,1]))),"v-9382cbf8":h(()=>l(()=>import("./Git识别项目的语言类型，及文件占比.html-0rR2QxN4.js"),__vite__mapDeps([65,1]))),"v-bae969ea":h(()=>l(()=>import("./Git高级操作和练习网站.html-DutKu4ot.js"),__vite__mapDeps([66,1]))),"v-523bf541":h(()=>l(()=>import("./index.html-nIHspFX-.js"),__vite__mapDeps([67,1]))),"v-20b8f0f1":h(()=>l(()=>import("./git 拉取全部远程分支.html-hTd6KqRo.js"),__vite__mapDeps([68,1]))),"v-7726c068":h(()=>l(()=>import("./git基础命令.html-yhebpX3-.js"),__vite__mapDeps([69,1]))),"v-2b2f3b07":h(()=>l(()=>import("./git更新远程分支.html-15yUE7S9.js"),__vite__mapDeps([70,1]))),"v-219bdfe6":h(()=>l(()=>import("./git统计项目代码行数.html-UGAHZsYn.js"),__vite__mapDeps([71,1]))),"v-08b82cef":h(()=>l(()=>import("./git远程仓库回退到指定版本.html-PDdtG9rP.js"),__vite__mapDeps([72,1]))),"v-89f58c8e":h(()=>l(()=>import("./命令行显示gitmoji.html-9QhqVxSo.js"),__vite__mapDeps([73,1]))),"v-4d6c1094":h(()=>l(()=>import("./Gitlab二开从而自定义权限系统.html-D7ngAzVF.js"),__vite__mapDeps([74,1]))),"v-736258dc":h(()=>l(()=>import("./Gitlab备份和恢复.html--tJiMGLR.js"),__vite__mapDeps([75,1]))),"v-ce8e88a6":h(()=>l(()=>import("./Gitlab安装部署.html-q22Guejp.js"),__vite__mapDeps([76,1]))),"v-1affebc9":h(()=>l(()=>import("./Gitlab的一些问题.html-3YR3gAA1.js"),__vite__mapDeps([77,1]))),"v-edc7031c":h(()=>l(()=>import("./Gitlab配置邮件服务器.html-zXDI1aeI.js"),__vite__mapDeps([78,1]))),"v-3251a524":h(()=>l(()=>import("./ha-lvs-keepalived.html-VgmiBYcd.js"),__vite__mapDeps([79,1]))),"v-72564be3":h(()=>l(()=>import("./haproxy.html-Z_u8U_wE.js"),__vite__mapDeps([80,1]))),"v-6c105dfe":h(()=>l(()=>import("./keepalived.html-4N02mTH_.js"),__vite__mapDeps([81,1]))),"v-4db786a2":h(()=>l(()=>import("./Harbor离线搭建.html--sK8bRWE.js"),__vite__mapDeps([82,1]))),"v-77da57a3":h(()=>l(()=>import("./Linux内核子系统 - 网络 netfilter.html-r9zo3G3Q.js"),__vite__mapDeps([83,1]))),"v-4b719180":h(()=>l(()=>import("./iptables拦截内网奇虎软件病毒上报.html-yLnpmL0U.js"),__vite__mapDeps([84,1]))),"v-5df5e696":h(()=>l(()=>import("./iptables详解-朱光印.html-VDYXRXi-.js"),__vite__mapDeps([85,1]))),"v-f32b6d86":h(()=>l(()=>import("./linux下IPTABLES配置详解.html-3DOwhqcB.js"),__vite__mapDeps([86,1]))),"v-f8568246":h(()=>l(()=>import("./内核参数ip_forward.html-jniVJqP4.js"),__vite__mapDeps([87,1]))),"v-dcb1d26a":h(()=>l(()=>import("./jenkins备份.html-l1acG2q4.js"),__vite__mapDeps([88,1]))),"v-07b8030a":h(()=>l(()=>import("./jenkins构建持续化集成平台.html-011xsa9d.js"),__vite__mapDeps([89,1]))),"v-577615d7":h(()=>l(()=>import("./jenkins的docker部署文档.html-UQ0AmfSO.js"),__vite__mapDeps([90,1]))),"v-513bda28":h(()=>l(()=>import("./修改Jenkins插件为国内源.html-Heow2XWe.js"),__vite__mapDeps([91,1]))),"v-77aac963":h(()=>l(()=>import("./Kubernetes Api Endpoint.html-TpmsD1y-.js"),__vite__mapDeps([92,1]))),"v-c66ad2a6":h(()=>l(()=>import("./Kubernetes Make Prometheus_Grafana.html-nLiHn1yN.js"),__vite__mapDeps([93,1]))),"v-e9469f82":h(()=>l(()=>import("./Kubernetes Service Account如何生成Token.html-h4r_Z9Nr.js"),__vite__mapDeps([94,1]))),"v-2ece8d5e":h(()=>l(()=>import("./Kubernetes crictl管理命令详解.html-ziS5cKJh.js"),__vite__mapDeps([95,1]))),"v-a0127118":h(()=>l(()=>import("./Kubernetes最小高可用架构图.html-N_xTyFUm.js"),__vite__mapDeps([96,1]))),"v-f5f5d002":h(()=>l(()=>import("./Kubernetes有哪些组件.html-2iI6h-jZ.js"),__vite__mapDeps([97,1]))),"v-01b130a4":h(()=>l(()=>import("./Kubernetes的NetworkPlicy.html-Gaz_rmCR.js"),__vite__mapDeps([98,1]))),"v-7f271bfb":h(()=>l(()=>import("./NameSpace 资源隔离隔离了什么.html-mTdC5v2R.js"),__vite__mapDeps([99,1]))),"v-76d4e7bb":h(()=>l(()=>import("./Request和Limit.html-5r82sbcV.js"),__vite__mapDeps([100,1]))),"v-3d16ea04":h(()=>l(()=>import("./SSL证书签发.html-WYxudHcY.js"),__vite__mapDeps([101,1]))),"v-6cc6b7c2":h(()=>l(()=>import("./crictl登录dockerhub.html-0fLznrzi.js"),__vite__mapDeps([102,1]))),"v-575cf978":h(()=>l(()=>import("./etcd 二进制三节点集群部署.html-d2cjfG-o.js"),__vite__mapDeps([103,1]))),"v-ac04e9ec":h(()=>l(()=>import("./k8s删除Terminating状态ns.html-31v1G8XC.js"),__vite__mapDeps([104,1]))),"v-6b0a0620":h(()=>l(()=>import("./kubeadm部署Kubernetes 1.24步骤.html-GgLhDJ6-.js"),__vite__mapDeps([105,1]))),"v-743045a2":h(()=>l(()=>import("./kubernetes进阶（一）kubectl工具使用详解.html-Tyn5bkD3.js"),__vite__mapDeps([106,1]))),"v-16f9c44f":h(()=>l(()=>import("./kubernetes进阶（三）服务发现-coredns.html-E2OkRA8i.js"),__vite__mapDeps([107,1]))),"v-e9467f60":h(()=>l(()=>import("./kubernetes进阶（二）核心网络插件Flannel.html-rwZrjAep.js"),__vite__mapDeps([108,1]))),"v-089e219f":h(()=>l(()=>import("./kubernetes进阶（五）dashboard--WEB管理.html-xwKbeNhH.js"),__vite__mapDeps([109,1]))),"v-1c63547c":h(()=>l(()=>import("./kubernetes进阶（六）k8s平滑升级.html-kf-azY0g.js"),__vite__mapDeps([110,1]))),"v-07fca106":h(()=>l(()=>import("./kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-HI4OoUFq.js"),__vite__mapDeps([111,1]))),"v-4baada5c":h(()=>l(()=>import("./一次kubeadm添加节点出现etcd检查错误.html-mr40ij_B.js"),__vite__mapDeps([112,1]))),"v-5b225804":h(()=>l(()=>import("./二进制安装kubernetes（七） 部署知识点总结.html-VFsFAdYR.js"),__vite__mapDeps([113,1]))),"v-aa3e3ee8":h(()=>l(()=>import("./二进制安装kubernetes（三） kube-controller-manager组件安装.html-NqZUiB55.js"),__vite__mapDeps([114,1]))),"v-81834800":h(()=>l(()=>import("./二进制安装kubernetes（二） kube-apiserver组件安装.html-FxLXSDm9.js"),__vite__mapDeps([115,1]))),"v-7e1d67ea":h(()=>l(()=>import("./二进制安装kubernetes（五） kubelet组件安装.html-ROMnADoG.js"),__vite__mapDeps([116,1]))),"v-e936c158":h(()=>l(()=>import("./二进制安装kubernetes（六） kube-proxy组件安装.html-1WnSAGbz.js"),__vite__mapDeps([117,1]))),"v-53c4fe8d":h(()=>l(()=>import("./二进制安装kubernetes（四） kube-scheduler组件安装.html-PjHfhAkb.js"),__vite__mapDeps([118,1]))),"v-639f36bc":h(()=>l(()=>import("./二进制部署Kubernetes.html-nEi9KIQS.js"),__vite__mapDeps([119,1]))),"v-5823502a":h(()=>l(()=>import("./什么是Label和Label选择器.html-DGmtVs9d.js"),__vite__mapDeps([120,1]))),"v-7544ffb4":h(()=>l(()=>import("./什么是Name和NameSpace.html-XHE9G4DI.js"),__vite__mapDeps([121,1]))),"v-95889b98":h(()=>l(()=>import("./什么是Pod和Pod控制器.html-HAwlCaPf.js"),__vite__mapDeps([122,1]))),"v-b33727c8":h(()=>l(()=>import("./什么是Service和Ingress.html-y4Hw2Lbz.js"),__vite__mapDeps([123,1]))),"v-4f01f3b8":h(()=>l(()=>import("./使用 vmagent 代替 Prometheus 采集监控指标.html-Vb1OVHOR.js"),__vite__mapDeps([124,1]))),"v-23bf45e1":h(()=>l(()=>import("./常用优化.html-yw1ppGL8.js"),__vite__mapDeps([125,1]))),"v-0a8284ed":h(()=>l(()=>import("./记一次异常断电造成kubernetes故障.html-s9kQRaCE.js"),__vite__mapDeps([126,1]))),"v-788034ca":h(()=>l(()=>import("./LFS-NoteBook.html-D7NpTc05.js"),__vite__mapDeps([127,1]))),"v-5133ac50":h(()=>l(()=>import("./Linux备份为liveOS.html-30W6ssJM.js"),__vite__mapDeps([128,1]))),"v-1c82387b":h(()=>l(()=>import("./bash利用扩展字符集实现rm.html-dgtx42hf.js"),__vite__mapDeps([129,1]))),"v-759f12ff":h(()=>l(()=>import("./grub2手动命令引导教程.html-cIVObk54.js"),__vite__mapDeps([130,1]))),"v-eeb679e4":h(()=>l(()=>import("./shell脚本加密解密工具shc.html-ZDCS08qS.js"),__vite__mapDeps([131,1]))),"v-0419e184":h(()=>l(()=>import("./shell通过函数隐藏命令.html-6W2BfAPd.js"),__vite__mapDeps([132,1]))),"v-19869778":h(()=>l(()=>import("./ssh 设置反向代理.html-LK4Hh0xW.js"),__vite__mapDeps([133,1]))),"v-0c50d2dd":h(()=>l(()=>import("./ssh把远程端口映射到本地.html-AAATKb_C.js"),__vite__mapDeps([134,1]))),"v-e5c7a1ce":h(()=>l(()=>import("./tcpdump抓包命令.html-MSwGKDJw.js"),__vite__mapDeps([135,1]))),"v-28d01994":h(()=>l(()=>import("./命令创建虚拟镜像文件.html-Z3taSWX4.js"),__vite__mapDeps([136,1]))),"v-156dfb56":h(()=>l(()=>import("./按电源软关机要等待60秒设置更短的时间.html-esYypPS3.js"),__vite__mapDeps([137,1]))),"v-3d933afb":h(()=>l(()=>import("./用shell生成包含大写、小写、数字、特殊字符的随机字符串.html-K-EbQCUR.js"),__vite__mapDeps([138,1]))),"v-7208e0fe":h(()=>l(()=>import("./让某个命令不输出.html-PmRxGHtR.js"),__vite__mapDeps([139,1]))),"v-91b6e760":h(()=>l(()=>import("./Nginx变量大全.html--mplA2Op.js"),__vite__mapDeps([140,1]))),"v-49be5ae0":h(()=>l(()=>import("./Nginx正向代理.html-5jSrUMoQ.js"),__vite__mapDeps([141,1]))),"v-7aa7e66a":h(()=>l(()=>import("./Nginx正向代理支持https.html-7HP-wDoV.js"),__vite__mapDeps([142,1]))),"v-45c0ddce":h(()=>l(()=>import("./Nginx正向代理高并发.html-43pl2Yf1.js"),__vite__mapDeps([143,1]))),"v-846b5d98":h(()=>l(()=>import("./Nginx的url过长导致fastcgi协议崩溃.html-wQsxI9wD.js"),__vite__mapDeps([144,1]))),"v-73768998":h(()=>l(()=>import("./Nginx的负载均衡和故障转移.html-ZjVbB5C-.js"),__vite__mapDeps([145,1]))),"v-e332710c":h(()=>l(()=>import("./apt安装OpenResty教程.html-QjFIz-Ah.js"),__vite__mapDeps([146,1]))),"v-5e42cccc":h(()=>l(()=>import("./nginx-plus-module-lua.html-OMBGcbBw.js"),__vite__mapDeps([147,1]))),"v-06cf84a8":h(()=>l(()=>import("./nginx01.html-CdIZTcZ4.js"),__vite__mapDeps([148,1]))),"v-08845d47":h(()=>l(()=>import("./nginx02.html-k14RAr8S.js"),__vite__mapDeps([149,1]))),"v-0a3935e6":h(()=>l(()=>import("./nginx03.html-ZLpdKnhk.js"),__vite__mapDeps([150,1]))),"v-e233a3da":h(()=>l(()=>import("./nginx单机百万并发.html-guWmCjVN.js"),__vite__mapDeps([151,1]))),"v-6e466380":h(()=>l(()=>import("./nginx配置示例.html-g1CIO42y.js"),__vite__mapDeps([152,1]))),"v-8ed8a042":h(()=>l(()=>import("./ngx_stream_ssl_preread_module.html-bwHZarKa.js"),__vite__mapDeps([153,1]))),"v-3eb55632":h(()=>l(()=>import("./ssh日志记录登陆密码.html-Q0gmIyNQ.js"),__vite__mapDeps([154,1]))),"v-ce601f4c":h(()=>l(()=>import("./CPU和内存的架构 UMA和NUMA.html-Sd7ZPPR6.js"),__vite__mapDeps([155,1]))),"v-5d982049":h(()=>l(()=>import("./Journal日志服务详解.html-0oM22rBk.js"),__vite__mapDeps([156,1]))),"v-3e5ab3dc":h(()=>l(()=>import("./Linux下的ASLR（PIE）内存保护机制和绕过.html-x6NF9feP.js"),__vite__mapDeps([157,1]))),"v-2b1ef3ea":h(()=>l(()=>import("./Linux升级内核的两种方法.html-WeNKp3CR.js"),__vite__mapDeps([158,1]))),"v-31ec57f8":h(()=>l(()=>import("./Linux排查哪个进程和IP在占用网速.html-G61dCd3H.js"),__vite__mapDeps([159,1]))),"v-00524e94":h(()=>l(()=>import("./Linux普通用户免密码sudo.html-7oR1Kflz.js"),__vite__mapDeps([160,1]))),"v-636408d2":h(()=>l(()=>import("./Linux网络内核参数优化秘籍.html-Rt2oCgc7.js"),__vite__mapDeps([161,1]))),"v-4581fe4c":h(()=>l(()=>import("./Linux虚拟网络设备之bridge.html-Iq4Jt28-.js"),__vite__mapDeps([162,1]))),"v-1c72c74c":h(()=>l(()=>import("./Shell快捷键.html-W7mlcYMI.js"),__vite__mapDeps([163,1]))),"v-79d954ee":h(()=>l(()=>import("./date命令.html-Wh-wQg0f.js"),__vite__mapDeps([164,1]))),"v-b89ca53e":h(()=>l(()=>import("./grep命令.html-oOilPw4J.js"),__vite__mapDeps([165,1]))),"v-4977fd20":h(()=>l(()=>import("./ip命令.html-XSbBF04r.js"),__vite__mapDeps([166,1]))),"v-966b2156":h(()=>l(()=>import("./macvlan详解.html-UEIoWlws.js"),__vite__mapDeps([167,1]))),"v-8484bb5a":h(()=>l(()=>import("./proc-sysrq-trigger详解.html-DYKusONa.js"),__vite__mapDeps([168,1]))),"v-92954d86":h(()=>l(()=>import("./proc详解.html-RYoZ3u64.js"),__vite__mapDeps([169,1]))),"v-00bad121":h(()=>l(()=>import("./sed.html-vIvI-vT9.js"),__vite__mapDeps([170,1]))),"v-bb5b9e90":h(()=>l(()=>import("./sysstat Linux状态工具包.html-VoRmrX45.js"),__vite__mapDeps([171,1]))),"v-15e0f84a":h(()=>l(()=>import("./使用curl实现邮件发送.html-mmap2pIG.js"),__vite__mapDeps([172,1]))),"v-269af0d2":h(()=>l(()=>import("./使用dev下的tcp-udp实现socket.html-4IN4QlUY.js"),__vite__mapDeps([173,1]))),"v-5a559594":h(()=>l(()=>import("./备份Linux系统.html-qZm-T_X9.js"),__vite__mapDeps([174,1]))),"v-20664f24":h(()=>l(()=>import("./大量使用swap导致无法切换.html-3t2TbY1A.js"),__vite__mapDeps([175,1]))),"v-2741a660":h(()=>l(()=>import("./常见乱码产生原因.html-LFoqPmgi.js"),__vite__mapDeps([176,1]))),"v-f71e4004":h(()=>l(()=>import("./更换系统和命令行语言.html-V_JC1fkv.js"),__vite__mapDeps([177,1]))),"v-0a501b28":h(()=>l(()=>import("./环境变量PATH.html-eqeQBMJE.js"),__vite__mapDeps([178,1]))),"v-244d585c":h(()=>l(()=>import("./进程.html-BGCtj7ex.js"),__vite__mapDeps([179,1]))),"v-76b130c2":h(()=>l(()=>import("./逻辑卷无法删除.html-a_GcIJBK.js"),__vite__mapDeps([180,1]))),"v-794ccb14":h(()=>l(()=>import("./ps如何去水印的4个方法.html-xclLBJzb.js"),__vite__mapDeps([181,1]))),"v-b7e1d682":h(()=>l(()=>import("./Huawei x288系列风扇转速调速.html-LEeqeJ9Q.js"),__vite__mapDeps([182,1]))),"v-bf89a59e":h(()=>l(()=>import("./Portainer 单机部署.html-31LVwS2f.js"),__vite__mapDeps([183,1]))),"v-56a71ded":h(()=>l(()=>import("./Prometheus监控Windows主机.html-vj5NPMVq.js"),__vite__mapDeps([184,1]))),"v-6fa63cee":h(()=>l(()=>import("./rabbitmq.html-nznMHFSo.js"),__vite__mapDeps([185,1]))),"v-5a7f9ef1":h(()=>l(()=>import("./Azure刷写ROS教程.html-E20Hrx1a.js"),__vite__mapDeps([186,1]))),"v-790a3eba":h(()=>l(()=>import("./RouterOS利用（L2TP）实现多方异地组网.html-mCPlj8IK.js"),__vite__mapDeps([187,1]))),"v-87713e26":h(()=>l(()=>import("./用ros路由作为中转教程.html-_naxQibz.js"),__vite__mapDeps([188,1]))),"v-0dc78858":h(()=>l(()=>import("./MiniO_Docker_Deploy.html-mMVoC_3m.js"),__vite__mapDeps([189,1]))),"v-3f2483ac":h(()=>l(()=>import("./Minio挂载到nfs不成功.html-T6kvg7yQ.js"),__vite__mapDeps([190,1]))),"v-b010c524":h(()=>l(()=>import("./tomcat.html-o776JiRz.js"),__vite__mapDeps([191,1]))),"v-42119fed":h(()=>l(()=>import("./index.html-IPcyOmfS.js"),__vite__mapDeps([192,1]))),"v-69833e9a":h(()=>l(()=>import("./traefik作为docker边缘路由.html-yicxPWFK.js"),__vite__mapDeps([193,1]))),"v-454654c1":h(()=>l(()=>import("./各个版本的激活密钥.html-hh0EmKge.js"),__vite__mapDeps([194,1]))),"v-5b263b15":h(()=>l(()=>import("./虚拟化物理机.html-lLPSH_Rb.js"),__vite__mapDeps([195,1]))),"v-46b48e13":h(()=>l(()=>import("./PowerShell 打印环境变量.html-k2yAe3tb.js"),__vite__mapDeps([196,1]))),"v-24f7c960":h(()=>l(()=>import("./PowerShell 操作系统禁止运行脚本.html-9J1HDd3o.js"),__vite__mapDeps([197,1]))),"v-28c94530":h(()=>l(()=>import("./Windows系统更改迁移用户目录.html-c-fTunrh.js"),__vite__mapDeps([198,1]))),"v-7aaa8b0e":h(()=>l(()=>import("./Zabbix-Agent主动模式自动注册.html-1cMqln9T.js"),__vite__mapDeps([199,1]))),"v-3bb6b138":h(()=>l(()=>import("./Zabbix-Agent被动模式自动注册.html-7YExrL7K.js"),__vite__mapDeps([200,1]))),"v-5df449f7":h(()=>l(()=>import("./zabbix-docker.html-79_MyP6M.js"),__vite__mapDeps([201,1]))),"v-bf02f4a4":h(()=>l(()=>import("./zabbix.html-gZkjzp0V.js"),__vite__mapDeps([202,1]))),"v-8b9d7fba":h(()=>l(()=>import("./zabbix的VMwareGuest补充缺陷.html-nxZW_kiX.js"),__vite__mapDeps([203,1]))),"v-5bece530":h(()=>l(()=>import("./ebook.html-zPo9onNn.js"),__vite__mapDeps([204,1]))),"v-42d1b932":h(()=>l(()=>import("./goaccess给ftp生成分析图.html-kZvD_rKw.js"),__vite__mapDeps([205,1]))),"v-4ae285a4":h(()=>l(()=>import("./memcache-redis.html-zL4u_q1T.js"),__vite__mapDeps([206,1]))),"v-17556421":h(()=>l(()=>import("./中国建设银行u盾使用教程.html-slFt3qLt.js"),__vite__mapDeps([207,1]))),"v-171e9f87":h(()=>l(()=>import("./CPU鸡血BIOS.html-OZL7JsQB.js"),__vite__mapDeps([208,1]))),"v-4be274e4":h(()=>l(()=>import("./GPU矿卡体质检测.html-cxPFlhqD.js"),__vite__mapDeps([209,1]))),"v-04007d38":h(()=>l(()=>import("./etcd安装etcdkeeper.html-Q6xy1f9f.js"),__vite__mapDeps([210,1]))),"v-350fc342":h(()=>l(()=>import("./国内源.html-OsBcplIo.js"),__vite__mapDeps([211,1]))),"v-1187c118":h(()=>l(()=>import("./查看Mysql数据量大小.html-cIHYY9v5.js"),__vite__mapDeps([212,1]))),"v-11c46d82":h(()=>l(()=>import("./Centos7.x 安装Python3.9.7  Ansible4.5.html-ZYLEGFPc.js"),__vite__mapDeps([213,1]))),"v-761ac8fe":h(()=>l(()=>import("./ansible自动化运维.html-DOn9MH1E.js"),__vite__mapDeps([214,1]))),"v-61515108":h(()=>l(()=>import("./HA_Deploy.html-jY-6Ls0n.js"),__vite__mapDeps([215,1]))),"v-5865d184":h(()=>l(()=>import("./JumperServerDockerDeploy.html-wlO6BaGM.js"),__vite__mapDeps([216,1]))),"v-9174ace0":h(()=>l(()=>import("./index.html-UOQpjPKE.js"),__vite__mapDeps([217,1]))),"v-91b5b3e2":h(()=>l(()=>import("./OpenStack-Queens版搭建详解.html-vYdLfjNw.js"),__vite__mapDeps([218,1]))),"v-7c8e6e87":h(()=>l(()=>import("./gitlab ci 编写.html-MPlyBkaj.js"),__vite__mapDeps([219,1]))),"v-eb33cb0a":h(()=>l(()=>import("./gitlab ci 部署.html-EPshsJg9.js"),__vite__mapDeps([220,1]))),"v-75d6f0c8":h(()=>l(()=>import("./部署Kubernetes类型的gitlab-runner.html-bxTDlcBu.js"),__vite__mapDeps([221,1]))),"v-1c751544":h(()=>l(()=>import("./elk_kfaka.html-JF7y1v4Q.js"),__vite__mapDeps([222,1]))),"v-37a8ebbd":h(()=>l(()=>import("./Centos7 yum install git2.x 较新版本.html-ynO_3hPl.js"),__vite__mapDeps([223,1]))),"v-3b5999cf":h(()=>l(()=>import("./AWK中的字符串操作函数.html-qkSSNTlD.js"),__vite__mapDeps([224,1]))),"v-66a50361":h(()=>l(()=>import("./安装Nvidia Runtime.html-Oxd4yL1-.js"),__vite__mapDeps([225,1]))),"v-a467abfa":h(()=>l(()=>import("./安装Nvidia驱动.html-LjLvpQOj.js"),__vite__mapDeps([226,1]))),"v-80d561d8":h(()=>l(()=>import("./Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-pNZH9Gfe.js"),__vite__mapDeps([227,1]))),"v-0e11c102":h(()=>l(()=>import("./Linux挂载cifs文件系统.html-yaUpwO-3.js"),__vite__mapDeps([228,1]))),"v-e966fc72":h(()=>l(()=>import("./Samba共享文件时文件属性nobody.html-6RSxbmeL.js"),__vite__mapDeps([229,1]))),"v-19b6577e":h(()=>l(()=>import("./Samba配置举例.html-vlDt7xEU.js"),__vite__mapDeps([230,1]))),"v-081b1a63":h(()=>l(()=>import("./Ubuntu 20.04 安装VNC Server.html-pY9KLS_d.js"),__vite__mapDeps([231,1]))),"v-5c90804c":h(()=>l(()=>import("./vi编辑器.html-HkyrmFuT.js"),__vite__mapDeps([232,1]))),"v-3352fc98":h(()=>l(()=>import("./index.html-Ia36306t.js"),__vite__mapDeps([233,1]))),"v-22a3c8d7":h(()=>l(()=>import("./CPU的虚拟化.html-yIiH9EfM.js"),__vite__mapDeps([234,1]))),"v-050e9cf9":h(()=>l(()=>import("./操作系统介绍.html-t-iNGJbw.js"),__vite__mapDeps([235,1]))),"v-3662114a":h(()=>l(()=>import("./CentOS7配置支持AUFS文件系统.html-2nZ5ZHmi.js"),__vite__mapDeps([236,1]))),"v-7690a7dc":h(()=>l(()=>import("./CentOS_7用户账户配置.html-OylYp4kP.js"),__vite__mapDeps([237,1]))),"v-a6eba2dc":h(()=>l(()=>import("./Centos8重启网卡的方法.html-yXVjurAN.js"),__vite__mapDeps([238,1]))),"v-1d54df78":h(()=>l(()=>import("./firewalld配置.html-VTjiWiNS.js"),__vite__mapDeps([239,1]))),"v-2bec014a":h(()=>l(()=>import("./制作CenOS操作系统.html-yjgvOJZq.js"),__vite__mapDeps([240,1]))),"v-4de8425e":h(()=>l(()=>import("./配置SSH免密码验证.html-DdgIyvQQ.js"),__vite__mapDeps([241,1]))),"v-2a52f0c8":h(()=>l(()=>import("./Linux 终端命令格式.html-WdJX211_.js"),__vite__mapDeps([242,1]))),"v-2b5b3397":h(()=>l(()=>import("./Ubuntu_20.04_Server使用命令行设置IP地址.html-Fw2uRIH6.js"),__vite__mapDeps([243,1]))),"v-c8460b72":h(()=>l(()=>import("./Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html-7xAxIsRU.js"),__vite__mapDeps([244,1]))),"v-6e8771f8":h(()=>l(()=>import("./Ubuntu更改为24小时制.html-M1iE90mY.js"),__vite__mapDeps([245,1]))),"v-9a30caae":h(()=>l(()=>import("./Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.html-CpPtOaOt.js"),__vite__mapDeps([246,1]))),"v-3215b4ba":h(()=>l(()=>import("./Ubuntu软件包文件管理.html-U8ncTEqh.js"),__vite__mapDeps([247,1]))),"v-1a0079da":h(()=>l(()=>import("./VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-BdgA1408.js"),__vite__mapDeps([248,1]))),"v-733d9740":h(()=>l(()=>import("./apt查询某个软件有哪些版本.html-I5mjVZhs.js"),__vite__mapDeps([249,1]))),"v-48c517e4":h(()=>l(()=>import("./linux关闭地址空间随机化（ASLR）.html-_ORMQJd1.js"),__vite__mapDeps([250,1]))),"v-1922adf5":h(()=>l(()=>import("./ubuntu14.04 忘记了普通用户密码和root密码.html-oc5r79wL.js"),__vite__mapDeps([251,1]))),"v-7bf7b544":h(()=>l(()=>import("./ubuntu安装nfs.html-Hz9p-d77.js"),__vite__mapDeps([252,1]))),"v-4b3aa89e":h(()=>l(()=>import("./ubuntu查看intel-GPU使用情况.html-ZNUlGLWH.js"),__vite__mapDeps([253,1]))),"v-2e5806d2":h(()=>l(()=>import("./index.html-bOkKBo-f.js"),__vite__mapDeps([254,1]))),"v-4c406808":h(()=>l(()=>import("./数据结构与算法哔哩哔哩比特就业课.html-kKQhXQA0.js"),__vite__mapDeps([255,1]))),"v-2adac7da":h(()=>l(()=>import("./C语言volatile关键字详解.html-JbYB1hTD.js"),__vite__mapDeps([256,1]))),"v-cf78e944":h(()=>l(()=>import("./index.html-uWSOCLxr.js"),__vite__mapDeps([257,1]))),"v-4294bd6d":h(()=>l(()=>import("./二分查找.html-nSKKixYw.js"),__vite__mapDeps([258,1]))),"v-2b829e3e":h(()=>l(()=>import("./FastAPI-Python高性能web框架.html-WfdA6pzd.js"),__vite__mapDeps([259,1]))),"v-66124308":h(()=>l(()=>import("./PyInstaller带静态依赖文件打包教程.html-cln3NUqn.js"),__vite__mapDeps([260,1]))),"v-9f71a98a":h(()=>l(()=>import("./Python之正则表达式细讲.html-Q2Jw9RDK.js"),__vite__mapDeps([261,1]))),"v-122307df":h(()=>l(()=>import("./Python代码藏毒.html-QcIu4iW4.js"),__vite__mapDeps([262,1]))),"v-0556e072":h(()=>l(()=>import("./Python数据切片例子.html-xUXZ_05V.js"),__vite__mapDeps([263,1]))),"v-3122a850":h(()=>l(()=>import("./Python数据格式化format.html-VdJ280R7.js"),__vite__mapDeps([264,1]))),"v-54218f21":h(()=>l(()=>import("./python re.Match object的说明.html-4wdL37fs.js"),__vite__mapDeps([265,1]))),"v-4742da80":h(()=>l(()=>import("./python re.html-5TdBuF-v.js"),__vite__mapDeps([266,1]))),"v-1302838e":h(()=>l(()=>import("./新版VSCode中Python设置自动补全函数括号.html-L0dt7SJG.js"),__vite__mapDeps([267,1]))),"v-6a7299b5":h(()=>l(()=>import("./shell脚本bad substitution.html-oJX1nvbZ.js"),__vite__mapDeps([268,1]))),"v-2b73f172":h(()=>l(()=>import("./基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-zCG3sZQt.js"),__vite__mapDeps([269,1]))),"v-1c5b2b34":h(()=>l(()=>import("./Docker一键部署Clash服务与管理面板.html-wamk-EWf.js"),__vite__mapDeps([270,1]))),"v-4d6f6891":h(()=>l(()=>import("./cfw-cdn-ssl-ws-tls.html-lrzV_iug.js"),__vite__mapDeps([271,1]))),"v-2cf74ea8":h(()=>l(()=>import("./优秀的落地框架 XrayR.html-6FfVE4oo.js"),__vite__mapDeps([272,1]))),"v-2d398f6b":h(()=>l(()=>import("./连接WARP为服务器添加IPv4IPv6网络.html-vrmqVb8V.js"),__vite__mapDeps([273,1]))),"v-3ac693d4":h(()=>l(()=>import("./index.html-0YnwShQ3.js"),__vite__mapDeps([274,1]))),"v-07a67b62":h(()=>l(()=>import("./index.html-lzQbi7qO.js"),__vite__mapDeps([275,1]))),"v-2fabe988":h(()=>l(()=>import("./ACLLib.html-S6RTZSQI.js"),__vite__mapDeps([276,1]))),"v-5b349d28":h(()=>l(()=>import("./01_面向对象（OOP）基本概念.html-Nldua47V.js"),__vite__mapDeps([277,1]))),"v-6111f3f4":h(()=>l(()=>import("./02_类和对象.html-LURzSHSf.js"),__vite__mapDeps([278,1]))),"v-4f6bf42c":h(()=>l(()=>import("./03_面相对象基础语法.html-gjCOQWay.js"),__vite__mapDeps([279,1]))),"v-5d1813c6":h(()=>l(()=>import("./04_面向对象封装案例.html-Nx3HkX59.js"),__vite__mapDeps([280,1]))),"v-0cb49670":h(()=>l(()=>import("./05_面向对象封装案例 II.html-VR8igsMJ.js"),__vite__mapDeps([281,1]))),"v-451b6bb3":h(()=>l(()=>import("./06_私有属性和私有方法.html-46R-5tiJ.js"),__vite__mapDeps([282,1]))),"v-7741f6f4":h(()=>l(()=>import("./07_单例.html-cDvOw2N0.js"),__vite__mapDeps([283,1]))),"v-617feebe":h(()=>l(()=>import("./08_多态.html-GeBlEZNE.js"),__vite__mapDeps([284,1]))),"v-fc80a980":h(()=>l(()=>import("./09_继承.html-hv7N4VLU.js"),__vite__mapDeps([285,1]))),"v-69880198":h(()=>l(()=>import("./10_类属性和类方法.html-jPSHkgjH.js"),__vite__mapDeps([286,1]))),"v-554537f7":h(()=>l(()=>import("./11_eval函数.html-RFkNrgyz.js"),__vite__mapDeps([287,1]))),"v-782c286b":h(()=>l(()=>import("./12_模块和包.html-V4G_Qfpl.js"),__vite__mapDeps([288,1]))),"v-d7023b56":h(()=>l(()=>import("./13_文件.html-EhaQtHOk.js"),__vite__mapDeps([289,1]))),"v-7cbbdb02":h(()=>l(()=>import("./14_异常.html-6R8EiQeC.js"),__vite__mapDeps([290,1]))),"v-65ddef8e":h(()=>l(()=>import("./10 Multi-CPU Scheduling.html-5WWyQca-.js"),__vite__mapDeps([291,1]))),"v-508b9403":h(()=>l(()=>import("./13 Address Spaces.html-mDJxpufT.js"),__vite__mapDeps([292,1]))),"v-06f9c988":h(()=>l(()=>import("./14 Memory API.html-CJshqsVi.js"),__vite__mapDeps([293,1]))),"v-b0fbb1a2":h(()=>l(()=>import("./15 Address Translation.html-0S4-2qYN.js"),__vite__mapDeps([294,1]))),"v-77255d40":h(()=>l(()=>import("./16 Segmentation.html-Piz_ap0B.js"),__vite__mapDeps([295,1]))),"v-cf9a1e10":h(()=>l(()=>import("./17 Free Space Management.html-KP3FrbLn.js"),__vite__mapDeps([296,1]))),"v-247efa59":h(()=>l(()=>import("./18 Introduction to Paging.html-zlWV_3Dp.js"),__vite__mapDeps([297,1]))),"v-d9307d94":h(()=>l(()=>import("./19 Translation Lookaside Buffers.html--qTCZCK5.js"),__vite__mapDeps([298,1]))),"v-5920d9e3":h(()=>l(()=>import("./20 Advanced Page Tables.html-KDBT1peB.js"),__vite__mapDeps([299,1]))),"v-201aa8de":h(()=>l(()=>import("./21 Swapping Mechanisms.html-oKcngZnL.js"),__vite__mapDeps([300,1]))),"v-503a0eb2":h(()=>l(()=>import("./22 Swapping Policies.html-tQk2PIG5.js"),__vite__mapDeps([301,1]))),"v-5b295232":h(()=>l(()=>import("./23 Complete VM Systems.html-GE0nx5-T.js"),__vite__mapDeps([302,1]))),"v-319a6cdc":h(()=>l(()=>import("./4 Processes.html-ru8ppAHA.js"),__vite__mapDeps([303,1]))),"v-01969508":h(()=>l(()=>import("./5 Process API.html-qtcg1BoQ.js"),__vite__mapDeps([304,1]))),"v-5e65d047":h(()=>l(()=>import("./6 Direct Execution.html-FbSVi7FB.js"),__vite__mapDeps([305,1]))),"v-3d749c17":h(()=>l(()=>import("./7 CPU Scheduling.html-BmAbtkte.js"),__vite__mapDeps([306,1]))),"v-10c4e4cf":h(()=>l(()=>import("./8 Multi-level Feedback.html-uO0X8KlG.js"),__vite__mapDeps([307,1]))),"v-ab459502":h(()=>l(()=>import("./26 Concurrency and Threads.html-XpQfnjiX.js"),__vite__mapDeps([308,1]))),"v-afb12a34":h(()=>l(()=>import("./27 Thread API.html-g_KXqV34.js"),__vite__mapDeps([309,1]))),"v-c56826bc":h(()=>l(()=>import("./28 Locks.html-8Enoa_VA.js"),__vite__mapDeps([310,1]))),"v-41728b29":h(()=>l(()=>import("./29 Locked Data Structures.html-M3jXTTkH.js"),__vite__mapDeps([311,1]))),"v-01e792c4":h(()=>l(()=>import("./30 Condition Variables.html-KMSEIJal.js"),__vite__mapDeps([312,1]))),"v-187d9e5e":h(()=>l(()=>import("./31 Semaphores.html-3Roziue_.js"),__vite__mapDeps([313,1]))),"v-282c901c":h(()=>l(()=>import("./32 Concurrency Bugs.html-_U2OIQLo.js"),__vite__mapDeps([314,1]))),"v-6773cc80":h(()=>l(()=>import("./33 Event-based Concurrency.html-j654RrQV.js"),__vite__mapDeps([315,1]))),"v-e1be36c0":h(()=>l(()=>import("./36 IO Devices.html-IMRooMT1.js"),__vite__mapDeps([316,1]))),"v-47854b8a":h(()=>l(()=>import("./37 Hard Disk Drives.html-4DXxO1qO.js"),__vite__mapDeps([317,1]))),"v-58af6e7c":h(()=>l(()=>import("./39 Files and Directories.html-X9ztpRDA.js"),__vite__mapDeps([318,1]))),"v-6305be1a":h(()=>l(()=>import("./40 File System Implementation.html-BfQEJ3FP.js"),__vite__mapDeps([319,1]))),"v-3706649a":h(()=>l(()=>import("./404.html-Ma9ypHOS.js"),__vite__mapDeps([320,1]))),"v-30ca943e":h(()=>l(()=>import("./index.html-vb19-sa5.js"),__vite__mapDeps([321,1]))),"v-74bc627b":h(()=>l(()=>import("./index.html-5z0NCr_p.js"),__vite__mapDeps([322,1]))),"v-16e944d8":h(()=>l(()=>import("./index.html-Qotcez4f.js"),__vite__mapDeps([323,1]))),"v-82c79f78":h(()=>l(()=>import("./index.html-5oExVEXB.js"),__vite__mapDeps([324,1]))),"v-5239d6c1":h(()=>l(()=>import("./index.html-jmQADpD5.js"),__vite__mapDeps([325,1]))),"v-523a2eca":h(()=>l(()=>import("./index.html-Awt8YtDr.js"),__vite__mapDeps([326,1]))),"v-1a1918eb":h(()=>l(()=>import("./index.html-hhFf2Ve5.js"),__vite__mapDeps([327,1]))),"v-523a9aaf":h(()=>l(()=>import("./index.html-NHuDqHHJ.js"),__vite__mapDeps([328,1]))),"v-15a9b468":h(()=>l(()=>import("./index.html-jeh2L6qs.js"),__vite__mapDeps([329,1]))),"v-1590671a":h(()=>l(()=>import("./index.html-jfBk7R00.js"),__vite__mapDeps([330,1]))),"v-1581bac6":h(()=>l(()=>import("./index.html-JrogUEcC.js"),__vite__mapDeps([331,1]))),"v-a102ac20":h(()=>l(()=>import("./index.html-h6ie9Bb1.js"),__vite__mapDeps([332,1]))),"v-2f09dd7f":h(()=>l(()=>import("./index.html-uEGxkYbp.js"),__vite__mapDeps([333,1]))),"v-52c4c802":h(()=>l(()=>import("./index.html-ccTqEDWq.js"),__vite__mapDeps([334,1]))),"v-91099982":h(()=>l(()=>import("./index.html-JnCICycq.js"),__vite__mapDeps([335,1]))),"v-cbcc4a46":h(()=>l(()=>import("./index.html-SdlzS6dd.js"),__vite__mapDeps([336,1]))),"v-39379285":h(()=>l(()=>import("./index.html-5d9cukUF.js"),__vite__mapDeps([337,1]))),"v-69ad952f":h(()=>l(()=>import("./index.html-TNvBqQDD.js"),__vite__mapDeps([338,1]))),"v-4c771b7d":h(()=>l(()=>import("./index.html-W_CT0ia8.js"),__vite__mapDeps([339,1]))),"v-c44c55ec":h(()=>l(()=>import("./index.html-_anvoUmI.js"),__vite__mapDeps([340,1]))),"v-9affc6ce":h(()=>l(()=>import("./index.html-TN5s84ZJ.js"),__vite__mapDeps([341,1]))),"v-5137394c":h(()=>l(()=>import("./index.html-6ZjMcZbS.js"),__vite__mapDeps([342,1]))),"v-3e4a648b":h(()=>l(()=>import("./index.html-GMJAGWHm.js"),__vite__mapDeps([343,1]))),"v-0b15a2f0":h(()=>l(()=>import("./index.html-v_tsYZ_0.js"),__vite__mapDeps([344,1]))),"v-6d21b581":h(()=>l(()=>import("./index.html-60USnaJB.js"),__vite__mapDeps([345,1]))),"v-66058961":h(()=>l(()=>import("./index.html-Lv1DOIYY.js"),__vite__mapDeps([346,1]))),"v-219c108d":h(()=>l(()=>import("./index.html-ksKGUYGn.js"),__vite__mapDeps([347,1]))),"v-48fe3284":h(()=>l(()=>import("./index.html-T1AqHaov.js"),__vite__mapDeps([348,1]))),"v-dd55478c":h(()=>l(()=>import("./index.html-2QhFLrMZ.js"),__vite__mapDeps([349,1]))),"v-69060647":h(()=>l(()=>import("./index.html-ONe-SaNF.js"),__vite__mapDeps([350,1]))),"v-cd4c1012":h(()=>l(()=>import("./index.html-jQbqV2dC.js"),__vite__mapDeps([351,1]))),"v-760a078c":h(()=>l(()=>import("./index.html-ywnin2Tv.js"),__vite__mapDeps([352,1]))),"v-e4278e96":h(()=>l(()=>import("./index.html-E_h_ztf6.js"),__vite__mapDeps([353,1]))),"v-343dc2b6":h(()=>l(()=>import("./index.html-DfjU_zSI.js"),__vite__mapDeps([354,1]))),"v-74051d42":h(()=>l(()=>import("./index.html-Ccyk0Bab.js"),__vite__mapDeps([355,1]))),"v-e95f27e0":h(()=>l(()=>import("./index.html-6diHrUBt.js"),__vite__mapDeps([356,1]))),"v-114b9a82":h(()=>l(()=>import("./index.html-5LMmM30y.js"),__vite__mapDeps([357,1]))),"v-2d6398e4":h(()=>l(()=>import("./index.html-NthzVIVY.js"),__vite__mapDeps([358,1]))),"v-864a1ec4":h(()=>l(()=>import("./index.html-DMpUaYLb.js"),__vite__mapDeps([359,1]))),"v-0814f0c1":h(()=>l(()=>import("./index.html-pZYduLws.js"),__vite__mapDeps([360,1]))),"v-272e57e4":h(()=>l(()=>import("./index.html-qPpuURoj.js"),__vite__mapDeps([361,1]))),"v-d8166310":h(()=>l(()=>import("./index.html--l-MWgxs.js"),__vite__mapDeps([362,1]))),"v-4c2cc361":h(()=>l(()=>import("./index.html-w9TzkKUC.js"),__vite__mapDeps([363,1]))),"v-2f8ddbd2":h(()=>l(()=>import("./index.html-TfCyvh8A.js"),__vite__mapDeps([364,1]))),"v-f5fa56ce":h(()=>l(()=>import("./index.html-ZSd6HvNw.js"),__vite__mapDeps([365,1]))),"v-7f7597ac":h(()=>l(()=>import("./index.html-rA6jkK4O.js"),__vite__mapDeps([366,1]))),"v-8d1e4126":h(()=>l(()=>import("./index.html-rYhhWaXM.js"),__vite__mapDeps([367,1]))),"v-8716188c":h(()=>l(()=>import("./index.html-nYbF2pfe.js"),__vite__mapDeps([368,1]))),"v-aea9109e":h(()=>l(()=>import("./index.html--kZjToUK.js"),__vite__mapDeps([369,1]))),"v-75d00417":h(()=>l(()=>import("./index.html-MpAV0sLm.js"),__vite__mapDeps([370,1]))),"v-f1e41524":h(()=>l(()=>import("./index.html-4b1lWaFq.js"),__vite__mapDeps([371,1]))),"v-87094bfe":h(()=>l(()=>import("./index.html-WRsYBh1N.js"),__vite__mapDeps([372,1]))),"v-8708771c":h(()=>l(()=>import("./index.html-0933gw6M.js"),__vite__mapDeps([373,1]))),"v-62a96ae9":h(()=>l(()=>import("./index.html-kgMQ5RVG.js"),__vite__mapDeps([374,1]))),"v-380a8ce0":h(()=>l(()=>import("./index.html-vKch8o85.js"),__vite__mapDeps([375,1]))),"v-54dda6e8":h(()=>l(()=>import("./index.html-m45DQd1t.js"),__vite__mapDeps([376,1]))),"v-270d1f92":h(()=>l(()=>import("./index.html-24rclVUt.js"),__vite__mapDeps([377,1]))),"v-202e1ae1":h(()=>l(()=>import("./index.html-rMkvs6Ir.js"),__vite__mapDeps([378,1]))),"v-ed5a039e":h(()=>l(()=>import("./index.html-d47ovTFU.js"),__vite__mapDeps([379,1]))),"v-27e35532":h(()=>l(()=>import("./index.html-Rf8ACC7_.js"),__vite__mapDeps([380,1]))),"v-ad35a506":h(()=>l(()=>import("./index.html-h9pkS2Wi.js"),__vite__mapDeps([381,1]))),"v-6f76dcc4":h(()=>l(()=>import("./index.html-pAG2Dnm9.js"),__vite__mapDeps([382,1]))),"v-738568b6":h(()=>l(()=>import("./index.html-6yvzPoVX.js"),__vite__mapDeps([383,1]))),"v-02fff589":h(()=>l(()=>import("./index.html-VYGKsLj2.js"),__vite__mapDeps([384,1]))),"v-0f9b9b67":h(()=>l(()=>import("./index.html-KwHlniRy.js"),__vite__mapDeps([385,1]))),"v-5a14fc0c":h(()=>l(()=>import("./index.html-LOpk7ev3.js"),__vite__mapDeps([386,1]))),"v-3c38aec7":h(()=>l(()=>import("./index.html-NqmuaJB2.js"),__vite__mapDeps([387,1]))),"v-5bc93818":h(()=>l(()=>import("./index.html-pAr5H6mI.js"),__vite__mapDeps([388,1]))),"v-744d024e":h(()=>l(()=>import("./index.html-HCaM-7FE.js"),__vite__mapDeps([389,1]))),"v-e52c881c":h(()=>l(()=>import("./index.html-rkYOsGZ3.js"),__vite__mapDeps([390,1]))),"v-154dc4c4":h(()=>l(()=>import("./index.html-tJOzE_ad.js"),__vite__mapDeps([391,1]))),"v-01560935":h(()=>l(()=>import("./index.html-3tftx5RV.js"),__vite__mapDeps([392,1]))),"v-49425445":h(()=>l(()=>import("./index.html-QGcTM0Wi.js"),__vite__mapDeps([393,1]))),"v-07af4466":h(()=>l(()=>import("./index.html-hZyierb0.js"),__vite__mapDeps([394,1]))),"v-45aa885d":h(()=>l(()=>import("./index.html-MioEACjn.js"),__vite__mapDeps([395,1]))),"v-9803cb6a":h(()=>l(()=>import("./index.html-wj_a1Bga.js"),__vite__mapDeps([396,1]))),"v-a074e84e":h(()=>l(()=>import("./index.html-ljG2f3yi.js"),__vite__mapDeps([397,1]))),"v-9c48d85a":h(()=>l(()=>import("./index.html-BlapzadA.js"),__vite__mapDeps([398,1]))),"v-8489a3d2":h(()=>l(()=>import("./index.html-W80lARs3.js"),__vite__mapDeps([399,1]))),"v-31c48178":h(()=>l(()=>import("./index.html-YPqtJ5nt.js"),__vite__mapDeps([400,1]))),"v-95b29426":h(()=>l(()=>import("./index.html-f4dhnqBr.js"),__vite__mapDeps([401,1]))),"v-5e0b61bd":h(()=>l(()=>import("./index.html-kV4Lv7_X.js"),__vite__mapDeps([402,1]))),"v-7f09fdf1":h(()=>l(()=>import("./index.html-S-337kdB.js"),__vite__mapDeps([403,1])))};var V0=Symbol(""),Ti=Symbol(""),F0=$e({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),bn=()=>{const n=ln(Ti);if(!n)throw new Error("pageData() is called without provider.");return n},Ii=Symbol(""),yn=()=>{const n=ln(Ii);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},Ci=Symbol(""),N0=()=>{const n=ln(Ci);if(!n)throw new Error("usePageHead() is called without provider.");return n},M0=Symbol(""),Vi=Symbol(""),pr=()=>{const n=ln(Vi);if(!n)throw new Error("usePageLang() is called without provider.");return n},Fi=Symbol(""),$0=()=>{const n=ln(Fi);if(!n)throw new Error("usePageLayout() is called without provider.");return n},U0=W(xi),ir=Symbol(""),Ge=()=>{const n=ln(ir);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},wt=W(Oi),Ni=()=>wt,Mi=Symbol(""),Qt=()=>{const n=ln(Mi);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},H0=Symbol(""),G0="Layout",z0="NotFound",Ve=Wt({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageData:async n=>{const e=U0.value[n];return await(e==null?void 0:e())??F0},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,t)=>{const s=fn(e.description)?e.description:t.description,a=[...Array.isArray(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:s}]];return S0(a)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||"en-US",resolvePageLayout:(n,e)=>{let t;if(n.path){const s=n.frontmatter.layout;fn(s)?t=s:t=G0}else t=z0;return e[t]},resolveRouteLocale:(n,e)=>I0(n,e),resolveSiteLocaleData:(n,e)=>{var t;return{...n,...n.locales[e],head:[...((t=n.locales[e])==null?void 0:t.head)??[],...n.head??[]]}}}),Ba=C({name:"ClientOnly",setup(n,e){const t=W(!1);return dn(()=>{t.value=!0}),()=>{var s,a;return t.value?(a=(s=e.slots).default)==null?void 0:a.call(s):null}}}),$i=C({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const e=bn(),t=B(()=>Ri[n.pageKey||e.value.key]);return()=>t.value?p(t.value):p("div","404 Not Found")}}),ke=(n={})=>n,Bn=n=>He(n)?n:`/${Si(n)}`;const K0={};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function j0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const En=Object.assign;function qa(n,e){const t={};for(const s in e){const a=e[s];t[s]=ye(a)?a.map(n):n(a)}return t}const is=()=>{},ye=Array.isArray,W0=/\/$/,q0=n=>n.replace(W0,"");function Qa(n,e,t="/"){let s,a={},o="",r="";const i=e.indexOf("#");let c=e.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(s=e.slice(0,c),o=e.slice(c+1,i>-1?i:e.length),a=n(o)),i>-1&&(s=s||e.slice(0,i),r=e.slice(i,e.length)),s=Y0(s??e,t),{fullPath:s+(o&&"?")+o+r,path:s,query:a,hash:r}}function Q0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Tl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Z0(n,e,t){const s=e.matched.length-1,a=t.matched.length-1;return s>-1&&s===a&&$t(e.matched[s],t.matched[a])&&Ui(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function $t(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ui(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!J0(n[t],e[t]))return!1;return!0}function J0(n,e){return ye(n)?Il(n,e):ye(e)?Il(e,n):n===e}function Il(n,e){return ye(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function Y0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let o=t.length-1,r,i;for(r=0;r<s.length;r++)if(i=s[r],i!==".")if(i==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var bs;(function(n){n.pop="pop",n.push="push"})(bs||(bs={}));var cs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(cs||(cs={}));function X0(n){if(!n)if(Bt){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),q0(n)}const n1=/^[^#]+#/;function e1(n,e){return n.replace(n1,"#")+e}function t1(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function s1(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;e=t1(a,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cl(n,e){return(history.state?history.state.position-e:-1)+n}const Ao=new Map;function a1(n,e){Ao.set(n,e)}function o1(n){const e=Ao.get(n);return Ao.delete(n),e}let r1=()=>location.protocol+"//"+location.host;function Hi(n,e){const{pathname:t,search:s,hash:a}=e,o=n.indexOf("#");if(o>-1){let i=a.includes(n.slice(o))?n.slice(o).length:1,c=a.slice(i);return c[0]!=="/"&&(c="/"+c),Tl(c,"")}return Tl(t,n)+s+a}function l1(n,e,t,s){let a=[],o=[],r=null;const i=({state:v})=>{const k=Hi(n,location),b=t.value,y=e.value;let A=0;if(v){if(t.value=k,e.value=v,r&&r===b){r=null;return}A=y?v.position-y.position:0}else s(k);a.forEach(_=>{_(t.value,b,{delta:A,type:bs.pop,direction:A?A>0?cs.forward:cs.back:cs.unknown})})};function c(){r=t.value}function u(v){a.push(v);const k=()=>{const b=a.indexOf(v);b>-1&&a.splice(b,1)};return o.push(k),k}function d(){const{history:v}=window;v.state&&v.replaceState(En({},v.state,{scroll:wa()}),"")}function m(){for(const v of o)v();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:m}}function Vl(n,e,t,s=!1,a=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:a?wa():null}}function p1(n){const{history:e,location:t}=window,s={value:Hi(n,t)},a={value:e.state};a.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,u,d){const m=n.indexOf("#"),v=m>-1?(t.host&&document.querySelector("base")?n:n.slice(m))+c:r1()+n+c;try{e[d?"replaceState":"pushState"](u,"",v),a.value=u}catch(k){console.error(k),t[d?"replace":"assign"](v)}}function r(c,u){const d=En({},e.state,Vl(a.value.back,c,a.value.forward,!0),u,{position:a.value.position});o(c,d,!0),s.value=c}function i(c,u){const d=En({},a.value,e.state,{forward:c,scroll:wa()});o(d.current,d,!0);const m=En({},Vl(s.value,c,null),{position:d.position+1},u);o(c,m,!1),s.value=c}return{location:s,state:a,push:i,replace:r}}function i1(n){n=X0(n);const e=p1(n),t=l1(n,e.state,e.location,e.replace);function s(o,r=!0){r||t.pauseListeners(),history.go(o)}const a=En({location:"",base:n,go:s,createHref:e1.bind(null,n)},e,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function c1(n){return typeof n=="string"||n&&typeof n=="object"}function Gi(n){return typeof n=="string"||typeof n=="symbol"}const Fe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zi=Symbol("");var Fl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fl||(Fl={}));function Ut(n,e){return En(new Error,{type:n,[zi]:!0},e)}function Ie(n,e){return n instanceof Error&&zi in n&&(e==null||!!(n.type&e))}const Nl="[^/]+?",u1={sensitive:!1,strict:!1,start:!0,end:!0},d1=/[.+*?^${}()[\]/\\]/g;function m1(n,e){const t=En({},u1,e),s=[];let a=t.start?"^":"";const o=[];for(const u of n){const d=u.length?[]:[90];t.strict&&!u.length&&(a+="/");for(let m=0;m<u.length;m++){const v=u[m];let k=40+(t.sensitive?.25:0);if(v.type===0)m||(a+="/"),a+=v.value.replace(d1,"\\$&"),k+=40;else if(v.type===1){const{value:b,repeatable:y,optional:A,regexp:_}=v;o.push({name:b,repeatable:y,optional:A});const P=_||Nl;if(P!==Nl){k+=10;try{new RegExp(`(${P})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${P}): `+x.message)}}let g=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;m||(g=A&&u.length<2?`(?:/${g})`:"/"+g),A&&(g+="?"),a+=g,k+=20,A&&(k+=-8),y&&(k+=-20),P===".*"&&(k+=-50)}d.push(k)}s.push(d)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const r=new RegExp(a,t.sensitive?"":"i");function i(u){const d=u.match(r),m={};if(!d)return null;for(let v=1;v<d.length;v++){const k=d[v]||"",b=o[v-1];m[b.name]=k&&b.repeatable?k.split("/"):k}return m}function c(u){let d="",m=!1;for(const v of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const k of v)if(k.type===0)d+=k.value;else if(k.type===1){const{value:b,repeatable:y,optional:A}=k,_=b in u?u[b]:"";if(ye(_)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const P=ye(_)?_.join("/"):_;if(!P)if(A)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);d+=P}}return d||"/"}return{re:r,score:s,keys:o,parse:i,stringify:c}}function h1(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function v1(n,e){let t=0;const s=n.score,a=e.score;for(;t<s.length&&t<a.length;){const o=h1(s[t],a[t]);if(o)return o;t++}if(Math.abs(a.length-s.length)===1){if(Ml(s))return 1;if(Ml(a))return-1}return a.length-s.length}function Ml(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const k1={type:0,value:""},f1=/[a-zA-Z0-9_]/;function b1(n){if(!n)return[[]];if(n==="/")return[[k1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(k){throw new Error(`ERR (${t})/"${u}": ${k}`)}let t=0,s=t;const a=[];let o;function r(){o&&a.push(o),o=[]}let i=0,c,u="",d="";function m(){u&&(t===0?o.push({type:0,value:u}):t===1||t===2||t===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function v(){u+=c}for(;i<n.length;){if(c=n[i++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&m(),r()):c===":"?(m(),t=1):v();break;case 4:v(),t=s;break;case 1:c==="("?t=2:f1.test(c)?v():(m(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:t=3:d+=c;break;case 3:m(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),m(),r(),a}function E1(n,e,t){const s=m1(b1(n.path),t),a=En(s,{record:n,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function g1(n,e){const t=[],s=new Map;e=Hl({strict:!1,end:!0,sensitive:!1},e);function a(d){return s.get(d)}function o(d,m,v){const k=!v,b=_1(d);b.aliasOf=v&&v.record;const y=Hl(e,d),A=[b];if("alias"in d){const g=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of g)A.push(En({},b,{components:v?v.record.components:b.components,path:x,aliasOf:v?v.record:b}))}let _,P;for(const g of A){const{path:x}=g;if(m&&x[0]!=="/"){const M=m.record.path,D=M[M.length-1]==="/"?"":"/";g.path=m.record.path+(x&&D+x)}if(_=E1(g,m,y),v?v.alias.push(_):(P=P||_,P!==_&&P.alias.push(_),k&&d.name&&!Ul(_)&&r(d.name)),b.children){const M=b.children;for(let D=0;D<M.length;D++)o(M[D],_,v&&v.children[D])}v=v||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return P?()=>{r(P)}:is}function r(d){if(Gi(d)){const m=s.get(d);m&&(s.delete(d),t.splice(t.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=t.indexOf(d);m>-1&&(t.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function i(){return t}function c(d){let m=0;for(;m<t.length&&v1(d,t[m])>=0&&(d.record.path!==t[m].record.path||!Ki(d,t[m]));)m++;t.splice(m,0,d),d.record.name&&!Ul(d)&&s.set(d.record.name,d)}function u(d,m){let v,k={},b,y;if("name"in d&&d.name){if(v=s.get(d.name),!v)throw Ut(1,{location:d});y=v.record.name,k=En($l(m.params,v.keys.filter(P=>!P.optional).map(P=>P.name)),d.params&&$l(d.params,v.keys.map(P=>P.name))),b=v.stringify(k)}else if("path"in d)b=d.path,v=t.find(P=>P.re.test(b)),v&&(k=v.parse(b),y=v.record.name);else{if(v=m.name?s.get(m.name):t.find(P=>P.re.test(m.path)),!v)throw Ut(1,{location:d,currentLocation:m});y=v.record.name,k=En({},m.params,d.params),b=v.stringify(k)}const A=[];let _=v;for(;_;)A.unshift(_.record),_=_.parent;return{name:y,path:b,params:k,matched:A,meta:A1(A)}}return n.forEach(d=>o(d)),{addRoute:o,resolve:u,removeRoute:r,getRoutes:i,getRecordMatcher:a}}function $l(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function _1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:y1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function y1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function Ul(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function A1(n){return n.reduce((e,t)=>En(e,t.meta),{})}function Hl(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function Ki(n,e){return e.children.some(t=>t===n||Ki(n,t))}const ji=/#/g,B1=/&/g,w1=/\//g,D1=/=/g,P1=/\?/g,Wi=/\+/g,x1=/%5B/g,O1=/%5D/g,qi=/%5E/g,L1=/%60/g,Qi=/%7B/g,S1=/%7C/g,Zi=/%7D/g,R1=/%20/g;function cr(n){return encodeURI(""+n).replace(S1,"|").replace(x1,"[").replace(O1,"]")}function T1(n){return cr(n).replace(Qi,"{").replace(Zi,"}").replace(qi,"^")}function Bo(n){return cr(n).replace(Wi,"%2B").replace(R1,"+").replace(ji,"%23").replace(B1,"%26").replace(L1,"`").replace(Qi,"{").replace(Zi,"}").replace(qi,"^")}function I1(n){return Bo(n).replace(D1,"%3D")}function C1(n){return cr(n).replace(ji,"%23").replace(P1,"%3F")}function V1(n){return n==null?"":C1(n).replace(w1,"%2F")}function ua(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function F1(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<s.length;++a){const o=s[a].replace(Wi," "),r=o.indexOf("="),i=ua(r<0?o:o.slice(0,r)),c=r<0?null:ua(o.slice(r+1));if(i in e){let u=e[i];ye(u)||(u=e[i]=[u]),u.push(c)}else e[i]=c}return e}function Gl(n){let e="";for(let t in n){const s=n[t];if(t=I1(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(ye(s)?s.map(o=>o&&Bo(o)):[s&&Bo(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function N1(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=ye(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return e}const M1=Symbol(""),zl=Symbol(""),Da=Symbol(""),ur=Symbol(""),wo=Symbol("");function es(){let n=[];function e(s){return n.push(s),()=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Xe(n,e,t,s,a){const o=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((r,i)=>{const c=m=>{m===!1?i(Ut(4,{from:t,to:e})):m instanceof Error?i(m):c1(m)?i(Ut(2,{from:e,to:m})):(o&&s.enterCallbacks[a]===o&&typeof m=="function"&&o.push(m),r())},u=n.call(s&&s.instances[a],e,t,c);let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(m=>i(m))})}function Za(n,e,t,s){const a=[];for(const o of n)for(const r in o.components){let i=o.components[r];if(!(e!=="beforeRouteEnter"&&!o.instances[r]))if($1(i)){const u=(i.__vccOpts||i)[e];u&&a.push(Xe(u,t,s,o,r))}else{let c=i();a.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const d=j0(u)?u.default:u;o.components[r]=d;const v=(d.__vccOpts||d)[e];return v&&Xe(v,t,s,o,r)()}))}}return a}function $1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Do(n){const e=ln(Da),t=ln(ur),s=B(()=>e.resolve(ge(n.to))),a=B(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],m=t.matched;if(!d||!m.length)return-1;const v=m.findIndex($t.bind(null,d));if(v>-1)return v;const k=Kl(c[u-2]);return u>1&&Kl(d)===k&&m[m.length-1].path!==k?m.findIndex($t.bind(null,c[u-2])):v}),o=B(()=>a.value>-1&&z1(t.params,s.value.params)),r=B(()=>a.value>-1&&a.value===t.matched.length-1&&Ui(t.params,s.value.params));function i(c={}){return G1(c)?e[ge(n.replace)?"replace":"push"](ge(n.to)).catch(is):Promise.resolve()}return{route:s,href:B(()=>s.value.href),isActive:o,isExactActive:r,navigate:i}}const U1=C({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Do,setup(n,{slots:e}){const t=Wt(Do(n)),{options:s}=ln(Da),a=B(()=>({[jl(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[jl(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&e.default(t);return n.custom?o:p("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},o)}}}),H1=U1;function G1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function z1(n,e){for(const t in e){const s=e[t],a=n[t];if(typeof s=="string"){if(s!==a)return!1}else if(!ye(a)||a.length!==s.length||s.some((o,r)=>o!==a[r]))return!1}return!0}function Kl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jl=(n,e,t)=>n??e??t,K1=C({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=ln(wo),a=B(()=>n.route||s.value),o=ln(zl,0),r=B(()=>{let u=ge(o);const{matched:d}=a.value;let m;for(;(m=d[u])&&!m.components;)u++;return u}),i=B(()=>a.value.matched[r.value]);he(zl,B(()=>r.value+1)),he(M1,i),he(wo,a);const c=W();return un(()=>[c.value,i.value,n.name],([u,d,m],[v,k,b])=>{d&&(d.instances[m]=u,k&&k!==d&&u&&u===v&&(d.leaveGuards.size||(d.leaveGuards=k.leaveGuards),d.updateGuards.size||(d.updateGuards=k.updateGuards))),u&&d&&(!k||!$t(d,k)||!v)&&(d.enterCallbacks[m]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=a.value,d=n.name,m=i.value,v=m&&m.components[d];if(!v)return Wl(t.default,{Component:v,route:u});const k=m.props[d],b=k?k===!0?u.params:typeof k=="function"?k(u):k:null,A=p(v,En({},b,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(m.instances[d]=null)},ref:c}));return Wl(t.default,{Component:A,route:u})||A}}});function Wl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ji=K1;function j1(n){const e=g1(n.routes,n),t=n.parseQuery||F1,s=n.stringifyQuery||Gl,a=n.history,o=es(),r=es(),i=es(),c=Pn(Fe);let u=Fe;Bt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=qa.bind(null,O=>""+O),m=qa.bind(null,V1),v=qa.bind(null,ua);function k(O,K){let G,Z;return Gi(O)?(G=e.getRecordMatcher(O),Z=K):Z=O,e.addRoute(Z,G)}function b(O){const K=e.getRecordMatcher(O);K&&e.removeRoute(K)}function y(){return e.getRoutes().map(O=>O.record)}function A(O){return!!e.getRecordMatcher(O)}function _(O,K){if(K=En({},K||c.value),typeof O=="string"){const E=Qa(t,O,K.path),w=e.resolve({path:E.path},K),S=a.createHref(E.fullPath);return En(E,w,{params:v(w.params),hash:ua(E.hash),redirectedFrom:void 0,href:S})}let G;if("path"in O)G=En({},O,{path:Qa(t,O.path,K.path).path});else{const E=En({},O.params);for(const w in E)E[w]==null&&delete E[w];G=En({},O,{params:m(E)}),K.params=m(K.params)}const Z=e.resolve(G,K),mn=O.hash||"";Z.params=d(v(Z.params));const An=Q0(s,En({},O,{hash:T1(mn),path:Z.path})),f=a.createHref(An);return En({fullPath:An,hash:mn,query:s===Gl?N1(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:f})}function P(O){return typeof O=="string"?Qa(t,O,c.value.path):En({},O)}function g(O,K){if(u!==O)return Ut(8,{from:K,to:O})}function x(O){return F(O)}function M(O){return x(En(P(O),{replace:!0}))}function D(O){const K=O.matched[O.matched.length-1];if(K&&K.redirect){const{redirect:G}=K;let Z=typeof G=="function"?G(O):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=P(Z):{path:Z},Z.params={}),En({query:O.query,hash:O.hash,params:"path"in Z?{}:O.params},Z)}}function F(O,K){const G=u=_(O),Z=c.value,mn=O.state,An=O.force,f=O.replace===!0,E=D(G);if(E)return F(En(P(E),{state:typeof E=="object"?En({},mn,E.state):mn,force:An,replace:f}),K||G);const w=G;w.redirectedFrom=K;let S;return!An&&Z0(s,Z,G)&&(S=Ut(16,{to:w,from:Z}),pe(Z,Z,!0,!1)),(S?Promise.resolve(S):U(w,Z)).catch(L=>Ie(L)?Ie(L,2)?L:Ae(L):Q(L,w,Z)).then(L=>{if(L){if(Ie(L,2))return F(En({replace:f},P(L.to),{state:typeof L.to=="object"?En({},mn,L.to.state):mn,force:An}),K||w)}else L=H(w,Z,!0,f,mn);return J(w,Z,L),L})}function T(O,K){const G=g(O,K);return G?Promise.reject(G):Promise.resolve()}function I(O){const K=Te.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(O):O()}function U(O,K){let G;const[Z,mn,An]=W1(O,K);G=Za(Z.reverse(),"beforeRouteLeave",O,K);for(const E of Z)E.leaveGuards.forEach(w=>{G.push(Xe(w,O,K))});const f=T.bind(null,O,K);return G.push(f),Fn(G).then(()=>{G=[];for(const E of o.list())G.push(Xe(E,O,K));return G.push(f),Fn(G)}).then(()=>{G=Za(mn,"beforeRouteUpdate",O,K);for(const E of mn)E.updateGuards.forEach(w=>{G.push(Xe(w,O,K))});return G.push(f),Fn(G)}).then(()=>{G=[];for(const E of An)if(E.beforeEnter)if(ye(E.beforeEnter))for(const w of E.beforeEnter)G.push(Xe(w,O,K));else G.push(Xe(E.beforeEnter,O,K));return G.push(f),Fn(G)}).then(()=>(O.matched.forEach(E=>E.enterCallbacks={}),G=Za(An,"beforeRouteEnter",O,K),G.push(f),Fn(G))).then(()=>{G=[];for(const E of r.list())G.push(Xe(E,O,K));return G.push(f),Fn(G)}).catch(E=>Ie(E,8)?E:Promise.reject(E))}function J(O,K,G){i.list().forEach(Z=>I(()=>Z(O,K,G)))}function H(O,K,G,Z,mn){const An=g(O,K);if(An)return An;const f=K===Fe,E=Bt?history.state:{};G&&(Z||f?a.replace(O.fullPath,En({scroll:f&&E&&E.scroll},mn)):a.push(O.fullPath,mn)),c.value=O,pe(O,K,G,f),Ae()}let en;function Rn(){en||(en=a.listen((O,K,G)=>{if(!Be.listening)return;const Z=_(O),mn=D(Z);if(mn){F(En(mn,{replace:!0}),Z).catch(is);return}u=Z;const An=c.value;Bt&&a1(Cl(An.fullPath,G.delta),wa()),U(Z,An).catch(f=>Ie(f,12)?f:Ie(f,2)?(F(f.to,Z).then(E=>{Ie(E,20)&&!G.delta&&G.type===bs.pop&&a.go(-1,!1)}).catch(is),Promise.reject()):(G.delta&&a.go(-G.delta,!1),Q(f,Z,An))).then(f=>{f=f||H(Z,An,!1),f&&(G.delta&&!Ie(f,8)?a.go(-G.delta,!1):G.type===bs.pop&&Ie(f,20)&&a.go(-1,!1)),J(Z,An,f)}).catch(is)}))}let Ln=es(),q=es(),tn;function Q(O,K,G){Ae(O);const Z=q.list();return Z.length?Z.forEach(mn=>mn(O,K,G)):console.error(O),Promise.reject(O)}function Vn(){return tn&&c.value!==Fe?Promise.resolve():new Promise((O,K)=>{Ln.add([O,K])})}function Ae(O){return tn||(tn=!O,Rn(),Ln.list().forEach(([K,G])=>O?G(O):K()),Ln.reset()),O}function pe(O,K,G,Z){const{scrollBehavior:mn}=n;if(!Bt||!mn)return Promise.resolve();const An=!G&&o1(Cl(O.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return ot().then(()=>mn(O,K,An)).then(f=>f&&s1(f)).catch(f=>Q(f,O,K))}const $n=O=>a.go(O);let ne;const Te=new Set,Be={currentRoute:c,listening:!0,addRoute:k,removeRoute:b,hasRoute:A,getRoutes:y,resolve:_,options:n,push:x,replace:M,go:$n,back:()=>$n(-1),forward:()=>$n(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:q.add,isReady:Vn,install(O){const K=this;O.component("RouterLink",H1),O.component("RouterView",Ji),O.config.globalProperties.$router=K,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),Bt&&!ne&&c.value===Fe&&(ne=!0,x(a.location).catch(mn=>{}));const G={};for(const mn in Fe)Object.defineProperty(G,mn,{get:()=>c.value[mn],enumerable:!0});O.provide(Da,K),O.provide(ur,Fp(G)),O.provide(wo,c);const Z=O.unmount;Te.add(O),O.unmount=function(){Te.delete(O),Te.size<1&&(u=Fe,en&&en(),en=null,c.value=Fe,ne=!1,tn=!1),Z()}}};function Fn(O){return O.reduce((K,G)=>K.then(()=>I(G)),Promise.resolve())}return Be}function W1(n,e){const t=[],s=[],a=[],o=Math.max(e.matched.length,n.matched.length);for(let r=0;r<o;r++){const i=e.matched[r];i&&(n.matched.find(u=>$t(u,i))?s.push(i):t.push(i));const c=n.matched[r];c&&(e.matched.find(u=>$t(u,c))||a.push(c))}return[t,s,a]}function Zn(){return ln(Da)}function Se(){return ln(ur)}const Re=n=>{const e=Ge();return B(()=>n[e.value]??{})};var Qn=Uint8Array,Dt=Uint16Array,q1=Int32Array,Yi=new Qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xi=new Qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Q1=new Qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),nc=function(n,e){for(var t=new Dt(31),s=0;s<31;++s)t[s]=e+=1<<n[s-1];for(var a=new q1(t[30]),s=1;s<30;++s)for(var o=t[s];o<t[s+1];++o)a[o]=o-t[s]<<5|s;return{b:t,r:a}},ec=nc(Yi,2),tc=ec.b,Z1=ec.r;tc[28]=258,Z1[258]=28;var J1=nc(Xi,0),Y1=J1.b,Po=new Dt(32768);for(var On=0;On<32768;++On){var We=(On&43690)>>1|(On&21845)<<1;We=(We&52428)>>2|(We&13107)<<2,We=(We&61680)>>4|(We&3855)<<4,Po[On]=((We&65280)>>8|(We&255)<<8)>>1}var us=function(n,e,t){for(var s=n.length,a=0,o=new Dt(e);a<s;++a)n[a]&&++o[n[a]-1];var r=new Dt(e);for(a=1;a<e;++a)r[a]=r[a-1]+o[a-1]<<1;var i;if(t){i=new Dt(1<<e);var c=15-e;for(a=0;a<s;++a)if(n[a])for(var u=a<<4|n[a],d=e-n[a],m=r[n[a]-1]++<<d,v=m|(1<<d)-1;m<=v;++m)i[Po[m]>>c]=u}else for(i=new Dt(s),a=0;a<s;++a)n[a]&&(i[a]=Po[r[n[a]-1]++]>>15-n[a]);return i},Ds=new Qn(288);for(var On=0;On<144;++On)Ds[On]=8;for(var On=144;On<256;++On)Ds[On]=9;for(var On=256;On<280;++On)Ds[On]=7;for(var On=280;On<288;++On)Ds[On]=8;var sc=new Qn(32);for(var On=0;On<32;++On)sc[On]=5;var X1=us(Ds,9,1),nh=us(sc,5,1),Ja=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},be=function(n,e,t){var s=e/8|0;return(n[s]|n[s+1]<<8)>>(e&7)&t},Ya=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},eh=function(n){return(n+7)/8|0},dr=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Qn(n.subarray(e,t))},th=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ue=function(n,e,t){var s=new Error(e||th[n]);if(s.code=n,Error.captureStackTrace&&Error.captureStackTrace(s,ue),!t)throw s;return s},sh=function(n,e,t,s){var a=n.length,o=s?s.length:0;if(!a||e.f&&!e.l)return t||new Qn(0);var r=!t,i=r||e.i!=2,c=e.i;r&&(t=new Qn(a*3));var u=function(mn){var An=t.length;if(mn>An){var f=new Qn(Math.max(An*2,mn));f.set(t),t=f}},d=e.f||0,m=e.p||0,v=e.b||0,k=e.l,b=e.d,y=e.m,A=e.n,_=a*8;do{if(!k){d=be(n,m,1);var P=be(n,m+1,3);if(m+=3,P)if(P==1)k=X1,b=nh,y=9,A=5;else if(P==2){var D=be(n,m,31)+257,F=be(n,m+10,15)+4,T=D+be(n,m+5,31)+1;m+=14;for(var I=new Qn(T),U=new Qn(19),J=0;J<F;++J)U[Q1[J]]=be(n,m+J*3,7);m+=F*3;for(var H=Ja(U),en=(1<<H)-1,Rn=us(U,H,1),J=0;J<T;){var Ln=Rn[be(n,m,en)];m+=Ln&15;var g=Ln>>4;if(g<16)I[J++]=g;else{var q=0,tn=0;for(g==16?(tn=3+be(n,m,3),m+=2,q=I[J-1]):g==17?(tn=3+be(n,m,7),m+=3):g==18&&(tn=11+be(n,m,127),m+=7);tn--;)I[J++]=q}}var Q=I.subarray(0,D),Vn=I.subarray(D);y=Ja(Q),A=Ja(Vn),k=us(Q,y,1),b=us(Vn,A,1)}else ue(1);else{var g=eh(m)+4,x=n[g-4]|n[g-3]<<8,M=g+x;if(M>a){c&&ue(0);break}i&&u(v+x),t.set(n.subarray(g,M),v),e.b=v+=x,e.p=m=M*8,e.f=d;continue}if(m>_){c&&ue(0);break}}i&&u(v+131072);for(var Ae=(1<<y)-1,pe=(1<<A)-1,$n=m;;$n=m){var q=k[Ya(n,m)&Ae],ne=q>>4;if(m+=q&15,m>_){c&&ue(0);break}if(q||ue(2),ne<256)t[v++]=ne;else if(ne==256){$n=m,k=null;break}else{var Te=ne-254;if(ne>264){var J=ne-257,Be=Yi[J];Te=be(n,m,(1<<Be)-1)+tc[J],m+=Be}var Fn=b[Ya(n,m)&pe],O=Fn>>4;Fn||ue(3),m+=Fn&15;var Vn=Y1[O];if(O>3){var Be=Xi[O];Vn+=Ya(n,m)&(1<<Be)-1,m+=Be}if(m>_){c&&ue(0);break}i&&u(v+131072);var K=v+Te;if(v<Vn){var G=o-Vn,Z=Math.min(Vn,K);for(G+v<0&&ue(3);v<Z;++v)t[v]=s[G+v]}for(;v<K;++v)t[v]=t[v-Vn]}}e.l=k,e.p=$n,e.b=v,e.f=d,k&&(d=1,e.m=y,e.d=b,e.n=A)}while(!d);return v!=t.length&&r?dr(t,0,v):t.subarray(0,v)},ah=new Qn(0),oh=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&ue(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&ue(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function rh(n,e){return sh(n.subarray(oh(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var ql=typeof TextEncoder<"u"&&new TextEncoder,xo=typeof TextDecoder<"u"&&new TextDecoder,lh=0;try{xo.decode(ah,{stream:!0}),lh=1}catch{}var ph=function(n){for(var e="",t=0;;){var s=n[t++],a=(s>127)+(s>223)+(s>239);if(t+a>n.length)return{s:e,r:dr(n,t-1)};a?a==3?(s=((s&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|s>>10,56320|s&1023)):a&1?e+=String.fromCharCode((s&31)<<6|n[t++]&63):e+=String.fromCharCode((s&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(s)}};function ih(n,e){if(e){for(var t=new Qn(n.length),s=0;s<n.length;++s)t[s]=n.charCodeAt(s);return t}if(ql)return ql.encode(n);for(var a=n.length,o=new Qn(n.length+(n.length>>1)),r=0,i=function(d){o[r++]=d},s=0;s<a;++s){if(r+5>o.length){var c=new Qn(r+8+(a-s<<1));c.set(o),o=c}var u=n.charCodeAt(s);u<128||e?i(u):u<2048?(i(192|u>>6),i(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|n.charCodeAt(++s)&1023,i(240|u>>18),i(128|u>>12&63),i(128|u>>6&63),i(128|u&63)):(i(224|u>>12),i(128|u>>6&63),i(128|u&63))}return dr(o,0,r)}function ch(n,e){if(e){for(var t="",s=0;s<n.length;s+=16384)t+=String.fromCharCode.apply(null,n.subarray(s,s+16384));return t}else{if(xo)return xo.decode(n);var a=ph(n),o=a.s,t=a.r;return t.length&&ue(8),o}}const da=n=>{const e=atob(n);return ch(rh(ih(e,!0)))},Xa=n=>typeof n=="number",Ht=Array.isArray,Gt=(n,e)=>fn(n)&&n.startsWith(e),Ks=(n,e)=>fn(n)&&n.endsWith(e),rt=Object.entries,uh=Object.fromEntries,ve=Object.keys,Oo=(n,...e)=>{if(e.length===0)return n;const t=e.shift()||null;return t&&rt(t).forEach(([s,a])=>{s==="__proto__"||s==="constructor"||(Me(n[s])&&Me(a)?Oo(n[s],a):Ht(a)?n[s]=[...a]:Me(a)?n[s]={...a}:n[s]=t[s])}),Oo(n,...e)},mr=n=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},Pa=n=>Gt(n,"/"),on=({name:n="",color:e="currentColor"},{slots:t})=>{var s;return p("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(s=t.default)==null?void 0:s.call(t))};on.displayName="IconBase";const Zt=({size:n=48,stroke:e=4,wrapper:t=!0,height:s=2*n})=>{const a=p("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[p("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),p("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[p("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),p("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?p("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},a):a};Zt.displayName="LoadingIcon";const ac=(n,{slots:e})=>{var t;return(t=e.default)==null?void 0:t.call(e)},dh=n=>/\b(?:Android|iPhone)/i.test(n),mh=n=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(n),oc=n=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(e=>e.test(n)),hh=n=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(e=>e.test(n)),vh=n=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(e=>e.test(n)),xa=(n,e)=>{let t=1;for(let s=0;s<n.length;s++)t+=n.charCodeAt(s),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%e};let kh=class{constructor(){this.messageElements={};const e="message-container",t=document.getElementById(e);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,t=2e3){const s=document.createElement("div"),a=Date.now();return s.className="message move-in",s.innerHTML=e,this.containerElement.appendChild(s),this.messageElements[a]=s,t>0&&setTimeout(()=>{this.close(a)},t),a}close(e){if(e){const t=this.messageElements[e];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[e]})}else ve(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const rc=/#.*$/u,fh=n=>{const e=rc.exec(n);return e?e[0]:""},Ql=n=>decodeURI(n).replace(rc,"").replace(/\/index\.html$/i,"/").replace(/\.html$/i,"").replace(/(README|index)?\.md$/i,""),lc=(n,e)=>{if(e===void 0)return!1;const t=Ql(n.path),s=Ql(e),a=fh(e);return a?a===n.hash&&(!s||t===s):t===s},bh=n=>He(n)?n:`https://github.com/${n}`,hr=n=>!He(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,zt=(n,...e)=>{const t=n.resolve(...e),s=t.matched[t.matched.length-1];if(!(s!=null&&s.redirect))return t;const{redirect:a}=s,o=C0(a)?a(t):a,r=fn(o)?{path:o}:o;return zt(n,{hash:t.hash,query:t.query,params:t.params,...r})},Eh=n=>{var e;if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)&&!(n.currentTarget&&((e=n.currentTarget.getAttribute("target"))!=null&&e.match(/\b_blank\b/i))))return n.preventDefault(),!0},gh=n=>(n.endsWith(".md")&&(n=`${n.slice(0,-3)}.html`),!n.endsWith("/")&&!n.endsWith(".html")&&(n=`${n}.html`),n=n.replace(/(^|\/)(?:README|index).html$/i,"$1"),n),pc=n=>{const[e,t=""]=n.split("#");return e?`${gh(e)}${t?`#${t}`:""}`:n},Zl=n=>Me(n)&&fn(n.name),Es=(n,e=!1)=>n?Ht(n)?n.map(t=>fn(t)?{name:t}:Zl(t)?t:null).filter(t=>t!==null):fn(n)?[{name:n}]:Zl(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],ic=(n,e)=>{if(n){if(Ht(n)&&n.every(fn))return n;if(fn(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},cc=n=>ic(n,"category"),uc=n=>ic(n,"tag"),Cn=({to:n="",class:e="",...t},{slots:s})=>{var i;const a=Zn(),o=pc(n),r=(c={})=>Eh(c)?a.push(n).catch():Promise.resolve();return p("a",{...t,class:["vp-link",e],href:Gt(o,"/")?Bn(o):o,onClick:r},(i=s.default)==null?void 0:i.call(s))};Cn.displayName="VPLink";const vr=()=>p(on,{name:"github"},()=>p("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));vr.displayName="GitHubIcon";const kr=()=>p(on,{name:"gitlab"},()=>p("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));kr.displayName="GitLabIcon";const fr=()=>p(on,{name:"gitee"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));fr.displayName="GiteeIcon";const br=()=>p(on,{name:"bitbucket"},()=>p("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));br.displayName="BitbucketIcon";const Er=()=>p(on,{name:"source"},()=>p("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Er.displayName="SourceIcon";const se=(n,e)=>{var s;const t=(s=(e==null?void 0:e._instance)||gt())==null?void 0:s.appContext.components;return t?n in t||le(n)in t||_s(le(n))in t:!1};function _h(){const n=W(!1);return gt()&&dn(()=>{n.value=!0}),n}function yh(n){return _h(),B(()=>!!n())}const Ah=()=>yh(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Bh=()=>{const n=Ah();return B(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))};function gr(n,e){let t,s,a;const o=W(!0),r=()=>{o.value=!0,a()};un(n,r,{flush:"sync"});const i=typeof e=="function"?e:e.get,c=typeof e=="function"?void 0:e.set,u=Yo((d,m)=>(s=d,a=m,{get(){return o.value&&(t=i(),o.value=!1),s(),t},set(v){c==null||c(v)}}));return Object.isExtensible(u)&&(u.trigger=r),u}function Jt(n){return Bp()?(ld(n),!0):!1}function zn(n){return typeof n=="function"?n():ge(n)}const Ps=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const wh=Object.prototype.toString,Dh=n=>wh.call(n)==="[object Object]",xe=()=>{},Lo=Ph();function Ph(){var n,e;return Ps&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function _r(n,e){function t(...s){return new Promise((a,o)=>{Promise.resolve(n(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(a).catch(o)})}return t}const dc=n=>n();function xh(n,e={}){let t,s,a=xe;const o=i=>{clearTimeout(i),a(),a=xe};return i=>{const c=zn(n),u=zn(e.maxWait);return t&&o(t),c<=0||u!==void 0&&u<=0?(s&&(o(s),s=null),Promise.resolve(i())):new Promise((d,m)=>{a=e.rejectOnCancel?m:d,u&&!s&&(s=setTimeout(()=>{t&&o(t),s=null,d(i())},u)),t=setTimeout(()=>{s&&o(s),s=null,d(i())},c)})}}function Oh(n,e=!0,t=!0,s=!1){let a=0,o,r=!0,i=xe,c;const u=()=>{o&&(clearTimeout(o),o=void 0,i(),i=xe)};return m=>{const v=zn(n),k=Date.now()-a,b=()=>c=m();return u(),v<=0?(a=Date.now(),b()):(k>v&&(t||!r)?(a=Date.now(),b()):e&&(c=new Promise((y,A)=>{i=s?A:y,o=setTimeout(()=>{a=Date.now(),r=!0,y(b()),u()},Math.max(0,v-k))})),!t&&!o&&(o=setTimeout(()=>r=!0,v)),r=!1,c)}}function Lh(n=dc){const e=W(!0);function t(){e.value=!1}function s(){e.value=!0}const a=(...o)=>{e.value&&n(...o)};return{isActive:$e(e),pause:t,resume:s,eventFilter:a}}function Sh(n){let e;function t(){return e||(e=n()),e}return t.reset=async()=>{const s=e;e=void 0,s&&await s},t}function mc(n){return n||gt()}function Rh(...n){if(n.length!==1)return qt(...n);const e=n[0];return typeof e=="function"?$e(Yo(()=>({get:e,set:xe}))):W(e)}function hc(n,e=200,t={}){return _r(xh(e,t),n)}function Th(n,e=200,t=!1,s=!0,a=!1){return _r(Oh(e,t,s,a),n)}function Ih(n,e,t={}){const{eventFilter:s=dc,...a}=t;return un(n,_r(s,e),a)}function Ch(n,e,t={}){const{eventFilter:s,...a}=t,{eventFilter:o,pause:r,resume:i,isActive:c}=Lh(s);return{stop:Ih(n,e,{...a,eventFilter:o}),pause:r,resume:i,isActive:c}}function Oa(n,e=!0,t){mc()?dn(n,t):e?n():ot(n)}function Vh(n,e){mc(e)&&Et(n,e)}function Fh(n,e,t={}){const{immediate:s=!0}=t,a=W(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function i(){a.value=!1,r()}function c(...u){r(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,n(...u)},zn(e))}return s&&(a.value=!0,Ps&&c()),Jt(i),{isPending:$e(a),start:c,stop:i}}function ma(n=!1,e={}){const{truthyValue:t=!0,falsyValue:s=!1}=e,a=Gn(n),o=W(n);function r(i){if(arguments.length)return o.value=i,o.value;{const c=zn(t);return o.value=o.value===c?zn(s):c,o.value}}return a?r:[o,r]}function ae(n){var e;const t=zn(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Le=Ps?window:void 0,vc=Ps?window.document:void 0,kc=Ps?window.navigator:void 0;function wn(...n){let e,t,s,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,s,a]=n,e=Le):[e,t,s,a]=n,!e)return xe;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const o=[],r=()=>{o.forEach(d=>d()),o.length=0},i=(d,m,v,k)=>(d.addEventListener(m,v,k),()=>d.removeEventListener(m,v,k)),c=un(()=>[ae(e),zn(a)],([d,m])=>{if(r(),!d)return;const v=Dh(m)?{...m}:m;o.push(...t.flatMap(k=>s.map(b=>i(d,k,b,v))))},{immediate:!0,flush:"post"}),u=()=>{c(),r()};return Jt(u),u}let Jl=!1;function Nh(n,e,t={}){const{window:s=Le,ignore:a=[],capture:o=!0,detectIframe:r=!1}=t;if(!s)return xe;Lo&&!Jl&&(Jl=!0,Array.from(s.document.body.children).forEach(v=>v.addEventListener("click",xe)),s.document.documentElement.addEventListener("click",xe));let i=!0;const c=v=>a.some(k=>{if(typeof k=="string")return Array.from(s.document.querySelectorAll(k)).some(b=>b===v.target||v.composedPath().includes(b));{const b=ae(k);return b&&(v.target===b||v.composedPath().includes(b))}}),d=[wn(s,"click",v=>{const k=ae(n);if(!(!k||k===v.target||v.composedPath().includes(k))){if(v.detail===0&&(i=!c(v)),!i){i=!0;return}e(v)}},{passive:!0,capture:o}),wn(s,"pointerdown",v=>{const k=ae(n);i=!c(v)&&!!(k&&!v.composedPath().includes(k))},{passive:!0}),r&&wn(s,"blur",v=>{setTimeout(()=>{var k;const b=ae(n);((k=s.document.activeElement)==null?void 0:k.tagName)==="IFRAME"&&!(b!=null&&b.contains(s.document.activeElement))&&e(v)},0)})].filter(Boolean);return()=>d.forEach(v=>v())}function Mh(){const n=W(!1);return gt()&&dn(()=>{n.value=!0}),n}function xs(n){const e=Mh();return B(()=>(e.value,!!n()))}function fc(n,e={}){const{window:t=Le}=e,s=xs(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=W(!1),r=u=>{o.value=u.matches},i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",r):a.removeListener(r))},c=Qp(()=>{s.value&&(i(),a=t.matchMedia(zn(n)),"addEventListener"in a?a.addEventListener("change",r):a.addListener(r),o.value=a.matches)});return Jt(()=>{c(),i(),a=void 0}),o}function Yl(n,e={}){const{controls:t=!1,navigator:s=kc}=e,a=xs(()=>s&&"permissions"in s);let o;const r=typeof n=="string"?{name:n}:n,i=W(),c=()=>{o&&(i.value=o.state)},u=Sh(async()=>{if(a.value){if(!o)try{o=await s.permissions.query(r),wn(o,"change",c),c()}catch{i.value="prompt"}return o}});return u(),t?{state:i,isSupported:a,query:u}:i}function $h(n={}){const{navigator:e=kc,read:t=!1,source:s,copiedDuring:a=1500,legacy:o=!1}=n,r=xs(()=>e&&"clipboard"in e),i=Yl("clipboard-read"),c=Yl("clipboard-write"),u=B(()=>r.value||o),d=W(""),m=W(!1),v=Fh(()=>m.value=!1,a);function k(){r.value&&i.value!=="denied"?e.clipboard.readText().then(_=>{d.value=_}):d.value=A()}u.value&&t&&wn(["copy","cut"],k);async function b(_=zn(s)){u.value&&_!=null&&(r.value&&c.value!=="denied"?await e.clipboard.writeText(_):y(_),d.value=_,m.value=!0,v.start())}function y(_){const P=document.createElement("textarea");P.value=_??"",P.style.position="absolute",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),P.remove()}function A(){var _,P,g;return(g=(P=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:P.toString())!=null?g:""}return{isSupported:u,text:d,copied:m,copy:b}}const js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ws="__vueuse_ssr_handlers__",Uh=Hh();function Hh(){return Ws in js||(js[Ws]=js[Ws]||{}),js[Ws]}function Gh(n,e){return Uh[n]||e}function zh(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const Kh={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Xl="vueuse-storage";function La(n,e,t,s={}){var a;const{flush:o="pre",deep:r=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:m=Le,eventFilter:v,onError:k=I=>{console.error(I)},initOnMounted:b}=s,y=(d?Pn:W)(typeof e=="function"?e():e);if(!t)try{t=Gh("getDefaultStorage",()=>{var I;return(I=Le)==null?void 0:I.localStorage})()}catch(I){k(I)}if(!t)return y;const A=zn(e),_=zh(A),P=(a=s.serializer)!=null?a:Kh[_],{pause:g,resume:x}=Ch(y,()=>M(y.value),{flush:o,deep:r,eventFilter:v});return m&&i&&Oa(()=>{wn(m,"storage",T),wn(m,Xl,F),b&&T()}),b||T(),y;function M(I){try{if(I==null)t.removeItem(n);else{const U=P.write(I),J=t.getItem(n);J!==U&&(t.setItem(n,U),m&&m.dispatchEvent(new CustomEvent(Xl,{detail:{key:n,oldValue:J,newValue:U,storageArea:t}})))}}catch(U){k(U)}}function D(I){const U=I?I.newValue:t.getItem(n);if(U==null)return c&&A!=null&&t.setItem(n,P.write(A)),A;if(!I&&u){const J=P.read(U);return typeof u=="function"?u(J,A):_==="object"&&!Array.isArray(J)?{...A,...J}:J}else return typeof U!="string"?U:P.read(U)}function F(I){T(I.detail)}function T(I){if(!(I&&I.storageArea!==t)){if(I&&I.key==null){y.value=A;return}if(!(I&&I.key!==n)){g();try{(I==null?void 0:I.newValue)!==P.write(y.value)&&(y.value=D(I))}catch(U){k(U)}finally{I?ot(x):x()}}}}}function jh(n){return fc("(prefers-color-scheme: dark)",n)}function Wh(n,e,t={}){const{window:s=Le,...a}=t;let o;const r=xs(()=>s&&"ResizeObserver"in s),i=()=>{o&&(o.disconnect(),o=void 0)},c=B(()=>Array.isArray(n)?n.map(m=>ae(m)):[ae(n)]),u=un(c,m=>{if(i(),r.value&&s){o=new ResizeObserver(e);for(const v of m)v&&o.observe(v,a)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{i(),u()};return Jt(d),{isSupported:r,stop:d}}function qh(n,e={width:0,height:0},t={}){const{window:s=Le,box:a="content-box"}=t,o=B(()=>{var m,v;return(v=(m=ae(n))==null?void 0:m.namespaceURI)==null?void 0:v.includes("svg")}),r=W(e.width),i=W(e.height),{stop:c}=Wh(n,([m])=>{const v=a==="border-box"?m.borderBoxSize:a==="content-box"?m.contentBoxSize:m.devicePixelContentBoxSize;if(s&&o.value){const k=ae(n);if(k){const b=s.getComputedStyle(k);r.value=Number.parseFloat(b.width),i.value=Number.parseFloat(b.height)}}else if(v){const k=Array.isArray(v)?v:[v];r.value=k.reduce((b,{inlineSize:y})=>b+y,0),i.value=k.reduce((b,{blockSize:y})=>b+y,0)}else r.value=m.contentRect.width,i.value=m.contentRect.height},t);Oa(()=>{const m=ae(n);m&&(r.value="offsetWidth"in m?m.offsetWidth:e.width,i.value="offsetHeight"in m?m.offsetHeight:e.height)});const u=un(()=>ae(n),m=>{r.value=m?e.width:0,i.value=m?e.height:0});function d(){c(),u()}return{width:r,height:i,stop:d}}const np=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function yr(n,e={}){const{document:t=vc,autoExit:s=!1}=e,a=B(()=>{var _;return(_=ae(n))!=null?_:t==null?void 0:t.querySelector("html")}),o=W(!1),r=B(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(_=>t&&_ in t||a.value&&_ in a.value)),i=B(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(_=>t&&_ in t||a.value&&_ in a.value)),c=B(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(_=>t&&_ in t||a.value&&_ in a.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(_=>t&&_ in t),d=xs(()=>a.value&&t&&r.value!==void 0&&i.value!==void 0&&c.value!==void 0),m=()=>u?(t==null?void 0:t[u])===a.value:!1,v=()=>{if(c.value){if(t&&t[c.value]!=null)return t[c.value];{const _=a.value;if((_==null?void 0:_[c.value])!=null)return!!_[c.value]}}return!1};async function k(){if(!(!d.value||!o.value)){if(i.value)if((t==null?void 0:t[i.value])!=null)await t[i.value]();else{const _=a.value;(_==null?void 0:_[i.value])!=null&&await _[i.value]()}o.value=!1}}async function b(){if(!d.value||o.value)return;v()&&await k();const _=a.value;r.value&&(_==null?void 0:_[r.value])!=null&&(await _[r.value](),o.value=!0)}async function y(){await(o.value?k():b())}const A=()=>{const _=v();(!_||_&&m())&&(o.value=_)};return wn(t,np,A,!1),wn(()=>ae(a),np,A,!1),s&&Jt(k),{isSupported:d,isFullscreen:o,enter:b,exit:k,toggle:y}}function no(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function W8(n,e,t={}){const{window:s=Le}=t;return La(n,e,s==null?void 0:s.localStorage,t)}function eo(n,e=xe,t={}){const{immediate:s=!0,manual:a=!1,type:o="text/javascript",async:r=!0,crossOrigin:i,referrerPolicy:c,noModule:u,defer:d,document:m=vc,attrs:v={}}=t,k=W(null);let b=null;const y=P=>new Promise((g,x)=>{const M=T=>(k.value=T,g(T),T);if(!m){g(!1);return}let D=!1,F=m.querySelector(`script[src="${zn(n)}"]`);F?F.hasAttribute("data-loaded")&&M(F):(F=m.createElement("script"),F.type=o,F.async=r,F.src=zn(n),d&&(F.defer=d),i&&(F.crossOrigin=i),u&&(F.noModule=u),c&&(F.referrerPolicy=c),Object.entries(v).forEach(([T,I])=>F==null?void 0:F.setAttribute(T,I)),D=!0),F.addEventListener("error",T=>x(T)),F.addEventListener("abort",T=>x(T)),F.addEventListener("load",()=>{F.setAttribute("data-loaded","true"),e(F),M(F)}),D&&(F=m.head.appendChild(F)),P||M(F)}),A=(P=!0)=>(b||(b=y(P)),b),_=()=>{if(!m)return;b=null,k.value&&(k.value=null);const P=m.querySelector(`script[src="${zn(n)}"]`);P&&m.head.removeChild(P)};return s&&!a&&Oa(A),a||Vh(_),{scriptTag:k,load:A,unload:_}}function bc(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!t||t.tagName==="BODY"?!1:bc(t)}}function Qh(n){const e=n||window.event,t=e.target;return bc(t)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const qs=new WeakMap;function Ar(n,e=!1){const t=W(e);let s=null,a;un(Rh(n),i=>{const c=no(zn(i));if(c){const u=c;qs.get(u)||qs.set(u,a),t.value&&(u.style.overflow="hidden")}},{immediate:!0});const o=()=>{const i=no(zn(n));!i||t.value||(Lo&&(s=wn(i,"touchmove",c=>{Qh(c)},{passive:!1})),i.style.overflow="hidden",t.value=!0)},r=()=>{var i;const c=no(zn(n));!c||!t.value||(Lo&&(s==null||s()),c.style.overflow=(i=qs.get(c))!=null?i:"",qs.delete(c),t.value=!1)};return Jt(r),B({get(){return t.value},set(i){i?o():r()}})}function Zh(n={}){const{window:e=Le,behavior:t="auto"}=n;if(!e)return{x:W(0),y:W(0)};const s=W(e.scrollX),a=W(e.scrollY),o=B({get(){return s.value},set(i){scrollTo({left:i,behavior:t})}}),r=B({get(){return a.value},set(i){scrollTo({top:i,behavior:t})}});return wn(e,"scroll",()=>{s.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:r}}function Jh(n={}){const{window:e=Le,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:o=!0}=n,r=W(t),i=W(s),c=()=>{e&&(o?(r.value=e.innerWidth,i.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};if(c(),Oa(c),wn("resize",c,{passive:!0}),a){const u=fc("(orientation: portrait)");un(u,()=>c())}return{width:r,height:i}}var Yh=C({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=B(()=>{const s=["font-icon icon"],a=`fas fa-${n.icon}`;return s.push("fa-fw fa-sm"),s.push(n.icon.includes(" ")?n.icon:a),s}),t=B(()=>{const s={};return n.color&&(s.color=n.color),n.size&&(s["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),ve(s).length?s:null});return()=>n.icon?p("span",{key:n.icon,class:e.value,style:t.value}):null}});const ep=n=>fn(n)?n:`${n}px`,Xh=(n,e=0)=>{const t=Pn(),s=B(()=>ep(ge(n.width)||"100%")),a=W("auto"),o=c=>{if(fn(c)){const[u,d]=c.split(":"),m=Number(u)/Number(d);if(!Number.isNaN(m))return m}return typeof c=="number"?c:16/9},r=c=>{const u=ge(n.height),d=o(ge(n.ratio));return u?ep(u):`${Number(c)/d+ge(e)}px`},i=()=>{t.value&&(a.value=r(t.value.clientWidth))};return dn(()=>{i(),Gn(e)&&un(e,i),wn("orientationchange",i),wn("resize",i)}),{el:t,width:s,height:a,resize:i}},nv=n=>He(n)?n:Bn(n);var ev={"/":{hint:"<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>"}};const to=n=>{console.error("[PDF]: "+n)},tv=n=>{for(;n.firstChild;)n.removeChild(n.firstChild)},sv=n=>n==="string"?document.querySelector(n):n instanceof HTMLElement?n:document.body,av=n=>{let e="";return n&&(e+=rt(n).map(([t,s])=>t==="noToolbar"?`toolbar=${s?0:1}`:`${encodeURIComponent(t)}=${encodeURIComponent(s)}`).join("&"),e&&(e=`#${e.slice(0,e.length-1)}`)),e},ov=(n,e,t,s,a)=>{tv(e);const o=`${n==="pdfjs"?`${rr(Bn(null))}web/viewer.html?file=${encodeURIComponent(t)}`:t}${av(s)}`,r=n==="pdfjs"||n==="iframe"?"iframe":"embed",i=document.createElement(r);return i.className="pdf-viewer",i.type="application/pdf",i.title=a,i.src=o,i instanceof HTMLIFrameElement&&(i.allow="fullscreen"),e.classList.add("pdf-viewer-container"),e.appendChild(i),e.getElementsByTagName(r)[0]},rv=(n,e=null,{title:t,hint:s,options:a={}})=>{var b,y;if(typeof window>"u"||!((b=window==null?void 0:window.navigator)!=null&&b.userAgent))return null;const{navigator:o}=window,{userAgent:r}=o,i=window.Promise!==void 0,c=oc(r)||dh(r),u=!c&&mh(r),d=!c&&/firefox/i.test(r)&&r.split("rv:").length>1?parseInt(r.split("rv:")[1].split(".")[0],10)>18:!1,m=!c&&(i||d);if(!fn(n))return to("URL is not valid"),null;const v=sv(e);if(!v)return to("Target element cannot be determined"),null;const k=t||((y=/\/([^/]+).pdf/.exec(n))==null?void 0:y[1])||"PDF Viewer";return m||!c?ov(u?"iframe":"embed",v,n,a,k):(v.innerHTML=s.replace(/\[url\]/g,n),to("This browser does not support embedded PDFs"),null)};var lv=C({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(n){const{el:e,width:t,height:s,resize:a}=Xh(n),o=Re(ev);return dn(()=>{rv(nv(n.url),e.value,{title:n.title,hint:o.value.hint,options:{page:n.page,noToolbar:n.noToolbar,zoom:n.zoom}}),a()}),()=>p("div",{class:"pdf-viewer-wrapper",ref:e,style:{width:t.value,height:s.value}})}}),pv={"/":{source:"源代码"}},iv=C({name:"SiteInfo",components:{BitbucketIcon:br,GiteeIcon:fr,GitHubIcon:vr,GitLabIcon:kr,SourceIcon:Er},props:{name:{type:String,required:!0},desc:{type:String,default:""},logo:{type:String,default:""},url:{type:String,required:!0},preview:{type:String,required:!0},repo:{type:String,default:""}},setup(n){const e=Re(pv),t=B(()=>n.repo?hr(n.repo):null);return()=>p("div",{class:"vp-site-info","data-name":n.name},[p("a",{class:"vp-site-info-navigator",title:n.name,href:n.url,target:"_blank"}),p("div",{class:"vp-site-info-preview",style:{background:`url(${Bn(n.preview)}) center/cover no-repeat`}}),p("div",{class:"vp-site-info-detail"},[n.logo?p("img",{class:"vp-site-info-logo",src:n.logo,alt:"",loading:"lazy","no-view":""}):null,p("div",{class:"vp-site-info-name"},n.name),p("div",{class:"vp-site-info-desc"},n.desc)]),n.repo?p("div",{class:"vp-site-info-source-wrapper"},p("a",{class:"vp-site-info-source",href:n.repo,"aria-label":e.value.source,"data-balloon-pos":"left",title:e.value.source,target:"_blank"},p(oe(`${t.value}Icon`)))):null])}});const Ec=({title:n,desc:e="",logo:t,background:s,color:a,link:o})=>{const r=[t?p("img",{class:"vp-card-logo",src:Bn(t),loading:"lazy","no-view":""}):null,p("div",{class:"vp-card-content"},[p("div",{class:"vp-card-title",innerHTML:n}),p("hr"),p("div",{class:"vp-card-desc",innerHTML:e})])],i={};return s&&(i.background=s),a&&(i.color=a),o?Mt(o)?p("a",{class:"vp-card",href:o,target:"_blank",style:i},r):p(Cn,{to:o,class:"vp-card",style:i},()=>r):p("div",{class:"vp-card",style:i},r)};Ec.displayName="VPCard";const gc=()=>p(on,{name:"back-to-top"},()=>[p("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),p("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);gc.displayName="BackToTopIcon";var cv={"/":{backToTop:"返回顶部"}},uv=C({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(n){const e=yn(),t=Re(cv),s=Pn(),{height:a}=qh(s),{height:o}=Jh(),{y:r}=Zh(),i=B(()=>e.value.backToTop!==!1&&r.value>n.threshold),c=B(()=>r.value/(a.value-o.value)*100);return dn(()=>{s.value=document.body}),()=>p(st,{name:"fade"},()=>i.value?p("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[n.noProgress?null:p("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":c.value},p("svg",p("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),p(gc)]):null)}});const dv=ke({enhance:({app:n})=>{se("FontIcon")||n.component("FontIcon",Yh),se("PDF")||n.component("PDF",lv),se("SiteInfo")||n.component("SiteInfo",iv),se("VPCard")||n.component("VPCard",Ec)},setup:()=>{eo("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),eo("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),eo("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>p(uv,{})]});function mv(n,e,t){var s,a,o;e===void 0&&(e=50),t===void 0&&(t={});var r=(s=t.isImmediate)!=null&&s,i=(a=t.callback)!=null&&a,c=t.maxWait,u=Date.now(),d=[];function m(){if(c!==void 0){var k=Date.now()-u;if(k+e>=c)return c-k}return e}var v=function(){var k=[].slice.call(arguments),b=this;return new Promise(function(y,A){var _=r&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,u=Date.now(),!r){var g=n.apply(b,k);i&&i(g),d.forEach(function(x){return(0,x.resolve)(g)}),d=[]}},m()),_){var P=n.apply(b,k);return i&&i(P),y(P)}d.push({resolve:y,reject:A})})};return v.cancel=function(k){o!==void 0&&clearTimeout(o),d.forEach(function(b){return(0,b.reject)(k)}),d=[]},v}const hv=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:s=5})=>{const a=Zn(),r=mv(()=>{var y,A;const i=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(i-0)<s){tp(a,"");return}const u=window.innerHeight+i,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),m=Math.abs(d-u)<s,v=Array.from(document.querySelectorAll(n)),b=Array.from(document.querySelectorAll(e)).filter(_=>v.some(P=>P.hash===_.hash));for(let _=0;_<b.length;_++){const P=b[_],g=b[_+1],x=i>=(((y=P.parentElement)==null?void 0:y.offsetTop)??0)-s,M=!g||i<(((A=g.parentElement)==null?void 0:A.offsetTop)??0)-s;if(!(x&&M))continue;const F=decodeURIComponent(a.currentRoute.value.hash),T=decodeURIComponent(P.hash);if(F===T)return;if(m){for(let I=_+1;I<b.length;I++)if(F===decodeURIComponent(b[I].hash))return}tp(a,T);return}},t);dn(()=>{window.addEventListener("scroll",r)}),er(()=>{window.removeEventListener("scroll",r)})},tp=async(n,e)=>{const{scrollBehavior:t}=n.options;n.options.scrollBehavior=void 0,await n.replace({query:n.currentRoute.value.query,hash:e}).finally(()=>n.options.scrollBehavior=t)},vv=".vp-sidebar-link, .toc-link",kv=".header-anchor",fv=200,bv=5,Ev=ke({setup(){hv({headerLinkSelector:vv,headerAnchorSelector:kv,delay:fv,offset:bv})}});let _c=n=>fn(n.title)?{title:n.title}:null;const yc=Symbol(""),gv=n=>{_c=n},_v=()=>ln(yc),yv=n=>{n.provide(yc,_c)};var Av={"/":{title:"目录",empty:"暂无目录"}},Bv=C({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(n){const e=_v(),t=Re(Av),s=bn(),a=Zn(),o=Ni(),r=Pn(a.getRoutes().filter(({path:c})=>Ks(c,".html")&&!Ks(c,"/index.html")||Ks(c,"/")).map(({meta:c,path:u})=>{const d=e(c);if(!d)return null;const m=u.split("/").length;return{level:Ks(u,"/")?m-2:m-1,base:u.replace(/\/[^/]+\/?$/,"/"),path:u,...d}}).filter(c=>Me(c)&&fn(c.title))),i=B(()=>{const c=n.base?R0(rr(n.base)):s.value.path.replace(/\/[^/]+$/,"/"),u=c.split("/").length-2,d=[];return r.value.filter(({level:m,path:v})=>{if(!Gt(v,c)||v===c)return!1;if(c==="/"){const k=ve(o.value.locales).filter(b=>b!=="/");if(v==="/404.html"||k.some(b=>Gt(v,b)))return!1}return m-u<=n.level}).sort(({title:m,level:v,order:k},{title:b,level:y,order:A})=>v-y||(Xa(k)?Xa(A)?k>0?A>0?k-A:-1:A<0?k-A:1:k:Xa(A)?A:m.localeCompare(b))).forEach(m=>{var b;const{base:v,level:k}=m;switch(k-u){case 1:{d.push(m);break}case 2:{const y=d.find(A=>A.path===v);y&&(y.children??(y.children=[])).push(m);break}default:{const y=d.find(A=>A.path===v.replace(/\/[^/]+\/$/,"/"));if(y){const A=(b=y.children)==null?void 0:b.find(_=>_.path===v);A&&(A.children??(A.children=[])).push(m)}}}}),d});return()=>{const c=i.value.some(u=>u.children);return p("div",{class:["vp-catalog-wrapper",{index:n.index}]},[n.hideHeading?null:p("h2",{class:"vp-catalog-main-title"},t.value.title),i.value.length?p(n.index?"ol":"ul",{class:["vp-catalogs",{deep:c}]},i.value.map(({children:u=[],title:d,path:m,content:v})=>{const k=p(Cn,{class:"vp-catalog-title",to:m},()=>v?p(v):d);return p("li",{class:"vp-catalog"},c?[p("h3",{id:d,class:["vp-catalog-child-title",{"has-children":u.length}]},[p("a",{href:`#${d}`,class:"header-anchor","aria-hidden":!0},"#"),k]),u.length?p(n.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:b=[],content:y,path:A,title:_})=>p("li",{class:"vp-child-catalog"},[p("div",{class:["vp-catalog-sub-title",{"has-children":b.length}]},[p("a",{href:`#${_}`,class:"header-anchor"},"#"),p(Cn,{class:"vp-catalog-title",to:A},()=>y?p(y):_)]),b.length?p(n.index?"ol":"div",{class:n.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},b.map(({content:P,path:g,title:x})=>n.index?p("li",{class:"vp-sub-catalog"},p(Cn,{to:g},()=>P?p(P):x)):p(Cn,{class:"vp-sub-catalog-link",to:g},()=>P?p(P):x))):null]))):null]:p("div",{class:"vp-catalog-child-title"},k))})):p("p",{class:"vp-empty-catalog"},t.value.empty)])}}}),wv=ke({enhance:({app:n})=>{yv(n),se("AutoCatalog",n)||n.component("AutoCatalog",Bv)}});const Dv=p("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[p("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),p("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Ac=C({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=Ge(),t=B(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>p("span",[Dv,p("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}});var Pv={};const xv=Pv,Ov=ke({enhance({app:n}){n.component("ExternalLinkIcon",p(Ac,{locales:xv}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const hn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=hn.isStarted();n=so(n,hn.settings.minimum,1),hn.status=n===1?null:n;const t=hn.render(!e),s=t.querySelector(hn.settings.barSelector),a=hn.settings.speed,o=hn.settings.easing;return t.offsetWidth,Lv(r=>{Qs(s,{transform:"translate3d("+sp(n)+"%,0,0)",transition:"all "+a+"ms "+o}),n===1?(Qs(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){Qs(t,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){hn.remove(),r()},a)},a)):setTimeout(()=>r(),a)}),hn},isStarted:()=>typeof hn.status=="number",start:()=>{hn.status||hn.set(0);const n=()=>{setTimeout(()=>{hn.status&&(hn.trickle(),n())},hn.settings.trickleSpeed)};return hn.settings.trickle&&n(),hn},done:n=>!n&&!hn.status?hn:hn.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=hn.status;return e?(typeof n!="number"&&(n=(1-e)*so(Math.random()*e,.1,.95)),e=so(e+n,0,.994),hn.set(e)):hn.start()},trickle:()=>hn.inc(Math.random()*hn.settings.trickleRate),render:n=>{if(hn.isRendered())return document.getElementById("nprogress");ap(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=hn.settings.template;const t=e.querySelector(hn.settings.barSelector),s=n?"-100":sp(hn.status||0),a=document.querySelector(hn.settings.parent);return Qs(t,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),a!==document.body&&ap(a,"nprogress-custom-parent"),a==null||a.appendChild(e),e},remove:()=>{op(document.documentElement,"nprogress-busy"),op(document.querySelector(hn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&Sv(n)},isRendered:()=>!!document.getElementById("nprogress")},so=(n,e,t)=>n<e?e:n>t?t:n,sp=n=>(-1+n)*100,Lv=function(){const n=[];function e(){const t=n.shift();t&&t(e)}return function(t){n.push(t),n.length===1&&e()}}(),Qs=function(){const n=["Webkit","O","Moz","ms"],e={};function t(r){return r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(i,c){return c.toUpperCase()})}function s(r){const i=document.body.style;if(r in i)return r;let c=n.length;const u=r.charAt(0).toUpperCase()+r.slice(1);let d;for(;c--;)if(d=n[c]+u,d in i)return d;return r}function a(r){return r=t(r),e[r]??(e[r]=s(r))}function o(r,i,c){i=a(i),r.style[i]=c}return function(r,i){for(const c in i){const u=i[c];u!==void 0&&Object.prototype.hasOwnProperty.call(i,c)&&o(r,c,u)}}}(),Bc=(n,e)=>(typeof n=="string"?n:Br(n)).indexOf(" "+e+" ")>=0,ap=(n,e)=>{const t=Br(n),s=t+e;Bc(t,e)||(n.className=s.substring(1))},op=(n,e)=>{const t=Br(n);if(!Bc(n,e))return;const s=t.replace(" "+e+" "," ");n.className=s.substring(1,s.length-1)},Br=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),Sv=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)},Rv=()=>{dn(()=>{const n=Zn(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(t=>{e.has(t.path)||hn.start()}),n.afterEach(t=>{e.add(t.path),hn.done()})})},Tv=ke({setup(){Rv()}}),Iv=JSON.parse('{"encrypt":{},"fullscreen":true,"author":{"name":"PaperDragon","url":"https://github.com/Paper-Dragon","email":"2678885646@qq.com"},"logo":"/logo.svg","repo":"https://github.com/Paper-Dragon/paper-dragon.github.io","docsDir":"src","docsBranch":"main","footer":"运维开发绿皮书","copyright":"copyleft 2023-至今 PaperDragon","displayFooter":true,"blog":{"timeline":"红了樱桃，绿了芭蕉"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 Github 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"使用指南","icon":"book","link":"/note-book"},{"text":"时间线","icon":"history","link":"/timeline"},{"text":"工具","icon":"splotch","link":"/tools/README.md","ariaLabel":"工具"},{"text":"友链","icon":"link","link":"/about/friend.md","ariaLabel":"友链"},{"text":"开往","icon":"subway","link":"https://www.travellings.cn/go.html","ariaLabel":"开往"},{"text":"实时访客","icon":"chart-simple","link":"https://analytics.umami.is/share/pvHcnC9eaFEzXn99/DevOps-Book"},{"text":"内容分发网络部署状态","icon":"diagram-project","link":"https://cloudflare-cloudnative-pages.geekery.cn/","ariaLabel":"内容分发网络部署状态"}],"sidebar":{"/":["",{"text":"note-book","icon":"book","collapsible":true,"prefix":"note-book/","link":"note-book/","children":"structure"},{"text":"PyQt5快速上手-王铭东","icon":"book","collapsible":true,"prefix":"PyQt5快速上手-王铭东/","link":"PyQt5快速上手-王铭东/","children":"structure"}]}}}}'),Cv=W(Iv),wc=()=>Cv,Dc=Symbol(""),Vv=()=>{const n=ln(Dc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},Fv=(n,e)=>{const{locales:t,...s}=n;return{...s,...t==null?void 0:t[e]}},Nv=ke({enhance({app:n}){const e=wc(),t=n._context.provides[ir],s=B(()=>Fv(e.value,t.value));n.provide(Dc,s),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return s.value}}})}});var Mv={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.18/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.18/templates/giscus/dark.css",repo:"Paper-Dragon/paper-dragon.github.io",repoId:"R_kgDOKGpjZw",category:"blog",categoryId:"DIC_kwDOKGpjZ84CauNO"};const $v=Mv;let Uv=$v;const Pc=Symbol(""),xc=()=>ln(Pc),Hv=xc,Gv=n=>{n.provide(Pc,Uv)},rp=["ar","ca","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var zv=C({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(n){const e=Hv(),t=pr(),s=!!(e.repo&&e.repoId&&e.category&&e.categoryId),{repo:a,repoId:o,category:r,categoryId:i}=e,c=W(!1),u=B(()=>{if(rp.includes(t.value))return t.value;const m=t.value.split("-")[0];return rp.includes(m)?m:"en"}),d=B(()=>({repo:a,repoId:o,category:r,categoryId:i,lang:u.value,theme:n.darkmode?e.darkTheme||"dark":e.lightTheme||"light",mapping:e.mapping||"pathname",term:n.identifier,inputPosition:e.inputPosition||"top",reactionsEnabled:e.reactionsEnabled===!1?"0":"1",strict:e.strict===!1?"0":"1",loading:e.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return dn(async()=>{await l(()=>import("./giscus-hHrgKA30.js"),__vite__mapDeps([])),c.value=!0}),()=>s?p("div",{id:"comment",class:["giscus-wrapper",{"input-top":e.inputPosition!=="bottom"}]},c.value?p("giscus-widget",d.value):p(Zt)):null}}),Kv=C({name:"CommentService",props:{darkmode:Boolean},setup(n){const e=xc(),t=bn(),s=yn(),a=e.comment!==!1,o=B(()=>s.value.comment||a&&s.value.comment!==!1);return()=>p(zv,{identifier:s.value.commentID||t.value.path,darkmode:n.darkmode,style:{display:o.value?"block":"none"}})}}),jv=ke({enhance:({app:n})=>{Gv(n),n.component("CommentService",Kv)}}),Wv={"/":{copy:"复制代码",copied:"已复制"}},qv=['.theme-hope-content div[class*="language-"] pre'];const ao=new Map,Qv=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,Zv=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&Qv.test(navigator.userAgent),Jv=()=>{const{copy:n}=$h({legacy:!0}),e=Re(Wv),t=bn(),s=r=>{if(!r.hasAttribute("copy-code-registered")){const i=document.createElement("button");i.type="button",i.classList.add("copy-code-button"),i.innerHTML='<div class="copy-icon" />',i.setAttribute("aria-label",e.value.copy),i.setAttribute("data-copied",e.value.copied),r.parentElement&&r.parentElement.insertBefore(i,r),r.setAttribute("copy-code-registered","")}},a=()=>{ot().then(()=>setTimeout(()=>{qv.forEach(r=>{document.querySelectorAll(r).forEach(s)})},800))},o=(r,i,c)=>{let{innerText:u=""}=i;/language-(shellscript|shell|bash|sh|zsh)/.test(r.classList.toString())&&(u=u.replace(/^ *(\$|>) /gm,"")),n(u).then(()=>{c.classList.add("copied"),clearTimeout(ao.get(c));const d=setTimeout(()=>{c.classList.remove("copied"),c.blur(),ao.delete(c)},2e3);ao.set(c,d)})};dn(()=>{const r=!Zv()||!1;r&&a(),wn("click",i=>{const c=i.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,d=c.nextElementSibling;d&&o(u,d,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,d=u.parentElement,m=u.nextElementSibling;m&&o(d,m,u)}}),un(()=>t.value.path,()=>{r&&a()})})},Yv=ke({setup:()=>{Jv()}}),Zs=La("VUEPRESS_CODE_TAB_STORE",{});var Xv=C({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const t=W(n.active),s=Pn([]),a=()=>{n.tabId&&(Zs.value[n.tabId]=n.data[t.value].id)},o=(u=t.value)=>{t.value=u<s.value.length-1?u+1:0,s.value[t.value].focus()},r=(u=t.value)=>{t.value=u>0?u-1:s.value.length-1,s.value[t.value].focus()},i=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),t.value=d):u.key==="ArrowRight"?(u.preventDefault(),o()):u.key==="ArrowLeft"&&(u.preventDefault(),r()),n.tabId&&(Zs.value[n.tabId]=n.data[t.value].id)},c=()=>{if(n.tabId){const u=n.data.findIndex(({id:d})=>Zs.value[n.tabId]===d);if(u!==-1)return u}return n.active};return dn(()=>{t.value=c(),un(()=>Zs.value[n.tabId],(u,d)=>{if(n.tabId&&u!==d){const m=n.data.findIndex(({id:v})=>v===u);m!==-1&&(t.value=m)}})}),()=>n.data.length?p("div",{class:"vp-code-tabs"},[p("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:u},d)=>{const m=d===t.value;return p("button",{type:"button",ref:v=>{v&&(s.value[d]=v)},class:["vp-code-tab-nav",{active:m}],role:"tab","aria-controls":`codetab-${n.id}-${d}`,"aria-selected":m,onClick:()=>{t.value=d,a()},onKeydown:v=>i(v,d)},e[`title${d}`]({value:u,isActive:m}))})),n.data.map(({id:u},d)=>{const m=d===t.value;return p("div",{class:["vp-code-tab",{active:m}],id:`codetab-${n.id}-${d}`,role:"tabpanel","aria-expanded":m},[p("div",{class:"vp-code-tab-title"},e[`title${d}`]({value:u,isActive:m})),e[`tab${d}`]({value:u,isActive:m})])})]):null}});const Oc=({active:n=!1},{slots:e})=>{var t;return p("div",{class:["code-group-item",{active:n}],"aria-selected":n},(t=e.default)==null?void 0:t.call(e))};Oc.displayName="CodeGroupItem";const nk=C({name:"CodeGroup",slots:Object,setup(n,{slots:e}){const t=W(-1),s=Pn([]),a=(i=t.value)=>{t.value=i<s.value.length-1?i+1:0,s.value[t.value].focus()},o=(i=t.value)=>{t.value=i>0?i-1:s.value.length-1,s.value[t.value].focus()},r=(i,c)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),t.value=c):i.key==="ArrowRight"?(i.preventDefault(),a(c)):i.key==="ArrowLeft"&&(i.preventDefault(),o(c))};return()=>{var c;const i=(((c=e.default)==null?void 0:c.call(e))||[]).filter(u=>u.type.name==="CodeGroupItem").map(u=>(u.props===null&&(u.props={}),u));return i.length===0?null:(t.value<0||t.value>i.length-1?(t.value=i.findIndex(u=>"active"in u.props),t.value===-1&&(t.value=0)):i.forEach((u,d)=>{u.props.active=d===t.value}),p("div",{class:"code-group"},[p("div",{class:"code-group-nav"},i.map((u,d)=>{const m=d===t.value;return p("button",{type:"button",ref:v=>{v&&(s.value[d]=v)},class:["code-group-nav-tab",{active:m}],"aria-pressed":m,"aria-expanded":m,onClick:()=>{t.value=d},onKeydown:v=>r(v,d)},u.props.title)})),i]))}}}),ek='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',tk='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',sk='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var ak={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const oo=ak,lp={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},ok=(n,e,t)=>{const s=document.createElement(n);return Me(e)&&ve(e).forEach(a=>{if(a.indexOf("data"))s[a]=e[a];else{const o=a.replace("data","");s.dataset[o]=e[a]}}),t&&t.forEach(a=>{s.appendChild(a)}),s},wr=n=>({...oo,...n,jsLib:Array.from(new Set([...oo.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...oo.cssLib||[],...n.cssLib||[]]))}),Rt=(n,e)=>{if(n[e]!==void 0)return n[e];const t=new Promise(s=>{var o;const a=document.createElement("script");a.src=e,(o=document.querySelector("body"))==null||o.appendChild(a),a.onload=()=>{s()}});return n[e]=t,t},rk=(n,e)=>{if(e.css&&Array.from(n.childNodes).every(t=>t.nodeName!=="STYLE")){const t=ok("style",{innerHTML:e.css});n.appendChild(t)}},lk=(n,e,t)=>{const s=t.getScript();if(s&&Array.from(e.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${n} .vp-code-demo-display').shadowRoot;
${s}}`)),e.appendChild(a)}},pk=n=>{const e=ve(n),t={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(s=>{const a=e.filter(o=>lp[s].types.includes(o));if(a.length){const o=a[0];t[s]=[n[o].replace(/^\n|\n$/g,""),lp[s].map[o]||o]}}),t.isLegal=(!t.html.length||t.html[1]==="none")&&(!t.js.length||t.js[1]==="none")&&(!t.css.length||t.css[1]==="none"),t},Lc=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Sc=n=>`<div id="app">
${Lc(n)}
</div>`,ik=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,ck=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Rc=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,uk=(n,e)=>{const t=wr(e),s=n.js[0]||"";return{...t,html:Lc(n.html[0]||""),js:s,css:n.css[0]||"",isLegal:n.isLegal,getScript:()=>{var a;return t.useBabel?((a=window.Babel.transform(s,{presets:["es2015"]}))==null?void 0:a.code)||"":s}}},dk=/<template>([\s\S]+)<\/template>/u,mk=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,hk=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,vk=(n,e)=>{const t=wr(e),s=n.html[0]||"",a=dk.exec(s),o=mk.exec(s),r=hk.exec(s),i=a?a[1].replace(/^\n|\n$/g,""):"",[c="",u=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[d="",m=""]=r?[r[4].replace(/^\n|\n$/g,""),r[3]]:[],v=u===""&&(m===""||m==="css");return{...t,html:Sc(i),js:ck(c),css:d,isLegal:v,jsLib:[t.vue,...t.jsLib],getScript:()=>{var b,y;const k=e.useBabel?((y=(b=window.Babel)==null?void 0:b.transform(c,{presets:["es2015"]}))==null?void 0:y.code)||"":c.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Rc(k)};appOptions.template=\`${i.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},kk=(n,e)=>{const t=wr(e);return{...t,html:Sc(""),js:ik(n.js[0]||""),css:n.css[0]||(n.js[0]?n.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:n.isLegal,jsLib:[t.react,t.reactDOM,...t.jsLib],jsx:!0,getScript:()=>{var a,o;const s=((o=(a=window.Babel)==null?void 0:a.transform(n.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Rc(s)}))`}}},Tt={},fk=n=>Promise.all([Rt(Tt,n.babel),Rt(Tt,n.react),Rt(Tt,n.reactDOM)]),bk=n=>{const e=[Rt(Tt,n.vue)];return n.useBabel&&e.push(Rt(Tt,n.babel)),Promise.all(e)},Ek=n=>n.useBabel?Rt(Tt,n.babel):Promise.resolve();var gk=C({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const[t,s]=ma(!1),a=Pn(),o=Pn(),r=W("0"),i=W(!1),c=B(()=>JSON.parse(n.config?da(n.config):"{}")),u=B(()=>{const b=JSON.parse(da(n.code));return pk(b)}),d=B(()=>n.type==="react"?kk(u.value,c.value):n.type==="vue"?vk(u.value,c.value):uk(u.value,c.value)),m=B(()=>d.value.isLegal),v=(b=!1)=>{const y=a.value.attachShadow({mode:"open"}),A=document.createElement("div");A.classList.add("code-demo-app"),y.appendChild(A),m.value?(b&&(A.innerHTML=d.value.html),rk(y,d.value),lk(n.id,y,d.value),r.value="0"):r.value="auto",i.value=!0},k=()=>{switch(n.type){case"react":return fk(d.value).then(()=>v());case"vue":return bk(d.value).then(()=>v());default:return Ek(d.value).then(()=>v(!0))}};return wn("beforeprint",()=>{s(!0)}),dn(()=>{setTimeout(()=>{k()},800)}),()=>{var b;return p("div",{class:"vp-code-demo",id:n.id},[p("div",{class:"vp-code-demo-header"},[d.value.isLegal?p("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",t.value?"down":"end"],onClick:()=>{r.value=t.value?"0":`${o.value.clientHeight+13.8}px`,s()}}):null,n.title?p("span",{class:"vp-code-demo-title"},decodeURIComponent(n.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?p("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[p("input",{type:"hidden",name:"html",value:d.value.html}),p("input",{type:"hidden",name:"js",value:d.value.js}),p("input",{type:"hidden",name:"css",value:d.value.css}),p("input",{type:"hidden",name:"wrap",value:"1"}),p("input",{type:"hidden",name:"panel_js",value:"3"}),p("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),p("button",{type:"submit",class:"jsfiddle-button",innerHTML:tk,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?p("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[p("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:u.value?u.value.html[1]:"none",js_pre_processor:u.value?u.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:u.value?u.value.css[1]:"none",editors:d.value.codepenEditors})}),p("button",{type:"submit",innerHTML:ek,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),i.value?null:p(Zt,{class:"vp-code-demo-loading"}),p("div",{ref:a,class:"vp-code-demo-display",style:{display:m.value&&i.value?"block":"none"}}),p("div",{class:"vp-code-demo-code-wrapper",style:{height:r.value}},p("div",{ref:o,class:"vp-code-demo-codes"},(b=e.default)==null?void 0:b.call(e)))])}}}),_k=C({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const[t,s]=ma(!1),a=Pn(),o=W("0");return wn("beforeprint",()=>{s(!0)}),()=>{var r,i;return p("div",{class:"vp-md-demo",id:n.id},[p("div",{class:"vp-md-demo-header"},[p("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",t.value?"down":"end"],onClick:()=>{o.value=t.value?"0":`${a.value.clientHeight+13.8}px`,s()}}),n.title?decodeURIComponent(n.title):null]),p("div",{class:"vp-md-demo-display"},(r=e.default)==null?void 0:r.call(e)),p("div",{class:"vp-md-demo-code-wrapper",style:{height:o.value}},p("div",{ref:a,class:"vp-md-demo-codes"},(i=e.code)==null?void 0:i.call(e)))])}}});let Tc={};const Ic=Symbol(""),yk=n=>{Tc=n},Ak=()=>ln(Ic),Bk=n=>{n.provide(Ic,Tc)},wk=(async()=>{}).constructor,Dk=(n,e,t)=>e==="js"?wk("myChart",`let width,height,option,__echarts_config__;
{
${n}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(t):Promise.resolve({option:JSON.parse(n)});var Pk=C({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const e=Ak(),t=W(!0),s=Pn();let a;return wn("resize",hc(()=>a==null?void 0:a.resize(),100)),dn(()=>{Promise.all([l(()=>import("./index-i1JwLi28.js"),__vite__mapDeps([404,405])),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{var c;await((c=e.setup)==null?void 0:c.call(e)),a=o.init(s.value);const{option:r,...i}=await Dk(da(n.config),n.type,a);a.resize(i),a.setOption({...e.option,...r}),t.value=!1})}),Et(()=>{a==null||a.dispose()}),()=>[n.title?p("div",{class:"echarts-title"},decodeURIComponent(n.title)):null,p("div",{class:"echarts-wrapper"},[p("div",{ref:s,class:"echarts-container",id:n.id}),t.value?p(Zt,{class:"echarts-loading",height:360}):null])]}}),Dr={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},xk={...Dr,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},Ok={...Dr,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},Lk={...Dr,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const pp={ant:xk,vue:Lk,pie:Ok},Sk={showCompileOutput:!1,clearConsole:!1,ssr:!1};let Rk=Sk;const Cc=Symbol(""),Tk=()=>ln(Cc),Ik=n=>{n.provide(Cc,Rk)};var Ck=C({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(n){let e=null;const t=Pn(),s=W(!0),a=W(1),o=B(()=>pp[n.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${n.preset}`),pp.vue)),r=i=>i<419?.8:i>1280?1:.9;return dn(()=>{Promise.all([l(()=>import("./flowchart-tiWkQJPF.js"),__vite__mapDeps([])),new Promise(i=>setTimeout(i,800))]).then(([{parse:i}])=>{e=i(da(n.code)),a.value=r(window.innerWidth),s.value=!1,e.draw(n.id,{...o.value,scale:a.value})}),wn("resize",hc(()=>{if(e){const i=r(window.innerWidth);a.value!==i&&(a.value=i,e.draw(n.id,{...o.value,scale:i}))}},100))}),()=>[s.value?p(Zt,{class:"flowchart-loading",height:192}):null,p("div",{ref:t,class:["flowchart-wrapper",n.preset],id:n.id,style:{display:s.value?"none":"block"}})]}});const Vk=()=>{wn("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})})},Vc=({title:n="",link:e})=>p("div",{class:"vp-playground"},[p("div",{class:"vp-playground-header"},[n?p("div",{class:"vp-playground-title"},decodeURIComponent(n)):null,p("div",{class:"vp-playground-actions"},[p("a",{class:"vp-playground-action",href:decodeURIComponent(e),target:"_blank",innerHTML:sk})])]),p("div",{class:"vp-playground-container"},p("iframe",{src:decodeURIComponent(e)}))]);Vc.displayName="Playground";const ro=La("VUEPRESS_TAB_STORE",{});var Fk=C({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const t=W(n.active),s=Pn([]),a=()=>{n.tabId&&(ro.value[n.tabId]=n.data[t.value].id)},o=(u=t.value)=>{t.value=u<s.value.length-1?u+1:0,s.value[t.value].focus()},r=(u=t.value)=>{t.value=u>0?u-1:s.value.length-1,s.value[t.value].focus()},i=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),t.value=d):u.key==="ArrowRight"?(u.preventDefault(),o()):u.key==="ArrowLeft"&&(u.preventDefault(),r()),a()},c=()=>{if(n.tabId){const u=n.data.findIndex(({id:d})=>ro.value[n.tabId]===d);if(u!==-1)return u}return n.active};return dn(()=>{t.value=c(),un(()=>ro.value[n.tabId],(u,d)=>{if(n.tabId&&u!==d){const m=n.data.findIndex(({id:v})=>v===u);m!==-1&&(t.value=m)}})}),()=>n.data.length?p("div",{class:"vp-tabs"},[p("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:u},d)=>{const m=d===t.value;return p("button",{type:"button",ref:v=>{v&&(s.value[d]=v)},class:["vp-tab-nav",{active:m}],role:"tab","aria-controls":`tab-${n.id}-${d}`,"aria-selected":m,onClick:()=>{t.value=d,a()},onKeydown:v=>i(v,d)},e[`title${d}`]({value:u,isActive:m}))})),n.data.map(({id:u},d)=>{const m=d===t.value;return p("div",{class:["vp-tab",{active:m}],id:`tab-${n.id}-${d}`,role:"tabpanel","aria-expanded":m},[p("div",{class:"vp-tab-title"},e[`title${d}`]({value:u,isActive:m})),e[`tab${d}`]({value:u,isActive:m})])})]):null}});const Nk=n=>JSON.parse(decodeURIComponent(n));var Mk=C({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(n){const e=Tk(),t=W(!0),s=Pn(),a=Pn(),o=Pn(),r=B(()=>Oo({},e,Nk(n.settings))),i=async()=>{const[{ReplStore:c,Repl:u},{default:d}]=await Promise.all([l(()=>import("./vue-repl-MFKaSZMe.js"),__vite__mapDeps([406,407])),l(()=>import("./codemirror-editor-GqpnmbJ1.js"),__vite__mapDeps([408,407]))]);s.value=u,o.value=d,a.value=new c({serializedState:decodeURIComponent(n.files)}),r.value.vueVersion&&await a.value.setVueVersion(r.value.vueVersion)};return dn(async()=>{await i(),t.value=!1}),()=>[p("div",{class:"vue-playground-wrapper"},[n.title?p("div",{class:"header"},decodeURIComponent(n.title)):null,p("div",{class:"repl-container"},[t.value?p(Zt,{class:"preview-loading",height:192}):null,s.value?p(s.value,{editor:o.value,store:a.value,autoResize:!0,...r.value,layout:"horizontal"}):null])])]}});const $k=ke({enhance:({app:n})=>{n.component("CodeTabs",Xv),se("CodeGroup",n)||n.component("CodeGroup",nk),se("CodeGroupItem",n)||n.component("CodeGroupItem",Oc),n.component("CodeDemo",gk),n.component("MdDemo",_k),n.component("ECharts",Pk),Bk(n),n.component("FlowChart",Ck),n.component("Playground",Vc),n.component("Tabs",Fk),Ik(n),n.component("VuePlayground",Mk)},setup:()=>{Vk()}});let Uk={};const Fc=Symbol(""),Hk=()=>ln(Fc),Gk=n=>{n.provide(Fc,Uk)};var zk={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const Kk=".theme-hope-content :not(a) > img:not([no-view])",jk=zk,Wk=800,qk='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',Qk=n=>fn(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),Nc=n=>new Promise((e,t)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(Nc(n)),n.onerror=s=>t(s))}),Zk=()=>{const n=Re(jk),e=yn(),t=bn(),{isSupported:s,toggle:a}=yr(),o=Hk();let r;const i=B(()=>e.value.photoSwipe===!1?!1:e.value.photoSwipe||Kk),c=d=>{d.on("uiRegister",()=>{s&&d.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}}),d.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(m,v)=>{m.setAttribute("download",""),m.setAttribute("target","_blank"),m.setAttribute("rel","noopener"),v.on("change",()=>{m.setAttribute("href",v.currSlide.data.src)})}}),d.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(m,v)=>{const k=[];let b=-1;for(let y=0;y<v.getNumItems();y++){const A=document.createElement("div");A.className="photo-swipe-bullet",A.onclick=_=>{v.goTo(k.indexOf(_.target))},k.push(A),m.appendChild(A)}v.on("change",()=>{b>=0&&k[b].classList.remove("active"),k[v.currIndex].classList.add("active"),b=v.currIndex})}})})},u=async()=>{if(i.value)return Promise.all([l(()=>import("./photoswipe.esm-08_zHRDQ.js"),__vite__mapDeps([])),ot().then(()=>new Promise(d=>setTimeout(d,Wk)).then(()=>Qk(i.value)))]).then(([{default:d},m])=>{const v=m.map(k=>({html:qk,element:k,msrc:k.src}));m.forEach((k,b)=>{const y=()=>{r=new d({preloaderDelay:0,showHideAnimationType:"zoom",...n.value,...o,dataSource:v,index:b,closeOnVerticalDrag:!0,wheelToZoom:!1}),c(r),r.addFilter("thumbEl",()=>k),r.addFilter("placeholderSrc",()=>k.src),r.init()};k.style.cursor="zoom-in",k.addEventListener("click",()=>{y()}),k.addEventListener("keypress",({key:A})=>{A==="Enter"&&y()})}),m.forEach((k,b)=>{Nc(k).then(y=>{v.splice(b,1,y),r==null||r.refreshSlideContent(b)})})})};dn(()=>{wn("wheel",()=>{r==null||r.close()}),un(()=>t.value.path,u,{immediate:!0})})};var Jk=ke({enhance:({app:n})=>{Gk(n)},setup:()=>{Zk()}});const Yk=()=>p(on,{name:"heading"},()=>p("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));Yk.displayName="HeadingIcon";const Xk=()=>p(on,{name:"heart"},()=>p("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Xk.displayName="HeartIcon";const nf=()=>p(on,{name:"history"},()=>p("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));nf.displayName="HistoryIcon";const ef=()=>p(on,{name:"title"},()=>p("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));ef.displayName="TitleIcon";const Pr=()=>p(on,{name:"search"},()=>p("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));Pr.displayName="SearchIcon";const Mc=()=>p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[p("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},p("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),p("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},p("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),p("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},p("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Mc.displayName="LoadingIcon";const $c=({hint:n})=>p("div",{class:"search-pro-result-wrapper loading"},[p(Mc),n]);$c.displayName="SearchLoading";const tf='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';var sf={0:"分类: $content"},af={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",searching:"搜索中",defaultTitle:"文档",select:"选择",navigate:"切换",autocomplete:"自动补全",exit:"关闭",queryHistory:"搜索历史",resultHistory:"历史结果",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},of={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro.worker.js"};const Uc=of,q8=sf,Hc=Uc.hotKeys,xr=af;new URL("data:application/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBDLGdldFN0b3JlZEZpZWxkcyBhcyBSLGF1dG9TdWdnZXN0IGFzIFQsbG9hZEpTT05JbmRleCBhcyB3fWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0ICQgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4IjtpbXBvcnR7ZW50cmllcyBhcyBFfWZyb20iQHZ1ZXByZXNzL2hlbHBlci9jbGllbnQiO2NvbnN0IHg9KGwsZSk9Pntjb25zdCBuPWwudG9Mb3dlckNhc2UoKSxzPWUudG9Mb3dlckNhc2UoKSxvPVtdO2xldCB0PTAscj0wO2NvbnN0IGk9KGMsZz0hMSk9PntsZXQgcD0iIjtyPT09MD9wPWMubGVuZ3RoPjIwP2DigKYgJHtjLnNsaWNlKC0yMCl9YDpjOmc/cD1jLmxlbmd0aCtyPjEwMD9gJHtjLnNsaWNlKDAsMTAwLXIpfeKApiBgOmM6cD1jLmxlbmd0aD4yMD9gJHtjLnNsaWNlKDAsMjApfSDigKYgJHtjLnNsaWNlKC0yMCl9YDpjLHAmJm8ucHVzaChwKSxyKz1wLmxlbmd0aCxnfHwoby5wdXNoKFsibWFyayIsZV0pLHIrPWUubGVuZ3RoLHI+PTEwMCYmby5wdXNoKCIg4oCmIikpfTtsZXQgaD1uLmluZGV4T2Yocyx0KTtpZihoPT09LTEpcmV0dXJuIG51bGw7Zm9yKDtoPj0wOyl7Y29uc3QgYz1oK3MubGVuZ3RoO2lmKGkobC5zbGljZSh0LGgpKSx0PWMscj4xMDApYnJlYWs7aD1uLmluZGV4T2Yocyx0KX1yZXR1cm4gcjwxMDAmJmkobC5zbGljZSh0KSwhMCksb30sUz0vW1x1NGUwMC1cdTlmYTVdL2csTT0obD17fSk9Pih7ZnV6enk6LjIscHJlZml4OiEwLHByb2Nlc3NUZXJtOmU9Pntjb25zdCBuPWUubWF0Y2goUyl8fFtdLHM9ZS5yZXBsYWNlKFMsIiIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHM/W3MsLi4ubl06Wy4uLm5dfSwuLi5sfSksRj0obCxlKT0+ZS5jb250ZW50cy5yZWR1Y2UoKG4sWyxzXSk9Pm4rcywwKS1sLmNvbnRlbnRzLnJlZHVjZSgobixbLHNdKT0+bitzLDApLF89KGwsZSk9Pk1hdGgubWF4KC4uLmUuY29udGVudHMubWFwKChbLG5dKT0+bikpLU1hdGgubWF4KC4uLmwuY29udGVudHMubWFwKChbLG5dKT0+bikpLE89KGwsZSxuPXt9KT0+e2NvbnN0IHM9e307cmV0dXJuIEMoZSxsLE0oe2Jvb3N0OntoOjIsdDoxLGM6NH0sLi4ubn0pKS5mb3JFYWNoKG89Pntjb25zdHtpZDp0LHRlcm1zOnIsc2NvcmU6aX09byxoPXQuaW5jbHVkZXMoIkAiKSxjPXQuaW5jbHVkZXMoIiMiKSxbZyxwXT10LnNwbGl0KC9bI0BdLyksbT1yLnNvcnQoKHUsYSk9PnUubGVuZ3RoLWEubGVuZ3RoKS5maWx0ZXIoKHUsYSk9PnIuc2xpY2UoYSsxKS5ldmVyeShmPT4hZi5pbmNsdWRlcyh1KSkpLHtjb250ZW50czpkfT1zW2ddPz89e3RpdGxlOiIiLGNvbnRlbnRzOltdfTtpZihoKWQucHVzaChbe3R5cGU6ImN1c3RvbUZpZWxkIixrZXk6ZyxpbmRleDpwLGRpc3BsYXk6bS5tYXAodT0+by5jLm1hcChhPT54KGEsdSkpKS5mbGF0KCkuZmlsdGVyKHU9PnUhPT1udWxsKX0saV0pO2Vsc2V7Y29uc3QgdT1tLm1hcChhPT54KG8uaCxhKSkuZmlsdGVyKGE9PmEhPT1udWxsKTtpZih1Lmxlbmd0aCYmZC5wdXNoKFt7dHlwZTpjPyJoZWFkaW5nIjoidGl0bGUiLGtleTpnLC4uLmMmJnthbmNob3I6cH0sZGlzcGxheTp1fSxpXSksInQiaW4gbylmb3IoY29uc3QgYSBvZiBvLnQpe2NvbnN0IGY9bS5tYXAoeT0+eChhLHkpKS5maWx0ZXIoeT0+eSE9PW51bGwpO2YubGVuZ3RoJiZkLnB1c2goW3t0eXBlOiJ0ZXh0IixrZXk6ZywuLi5jJiZ7YW5jaG9yOnB9LGRpc3BsYXk6Zn0saV0pfX19KSxFKHMpLnNvcnQoKFssb10sWyx0XSk9PlNFQVJDSF9QUk9fU09SVF9TVFJBVEVHWT09PSJ0b3RhbCI/RihvLHQpOl8obyx0KSkubWFwKChbbyx7dGl0bGU6dCxjb250ZW50czpyfV0pPT57aWYoIXQpe2NvbnN0IGk9UihlLG8pO2kmJih0PWkuaCl9cmV0dXJue3RpdGxlOnQsY29udGVudHM6ci5tYXAoKFtpXSk9PmkpfX0pfSxrPShsLGUsbj17fSk9PlQoZSxsLE0obikpLm1hcCgoe3N1Z2dlc3Rpb246c30pPT5zKTtzZWxmLm9ubWVzc2FnZT1hc3luYyh7ZGF0YTp7dHlwZTpsPSJhbGwiLHF1ZXJ5OmUsbG9jYWxlOm4sb3B0aW9uczpzfX0pPT57Y29uc3R7ZGVmYXVsdDpvfT1hd2FpdCAkW25dKCksdD13KG8se2ZpZWxkczpbImgiLCJ0IiwiYyJdLHN0b3JlRmllbGRzOlsiaCIsInQiLCJjIl19KTtsPT09InN1Z2dlc3QiP3NlbGYucG9zdE1lc3NhZ2UoayhlLHQscykpOmw9PT0ic2VhcmNoIj9zZWxmLnBvc3RNZXNzYWdlKE8oZSx0LHMpKTpzZWxmLnBvc3RNZXNzYWdlKHtzdWdnZXN0aW9uczprKGUsdCxzKSxyZXN1bHRzOk8oZSx0LHMpfSl9OwovLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAK",import.meta.url);let rf={};const Gc=Symbol(""),Q8=()=>ln(Gc),lf=n=>{n.provide(Gc,rf)},Z8=()=>{const n=new Worker(`/${Uc.worker}`,{}),e=[];return n.addEventListener("message",({data:t})=>{const{resolve:s}=e.shift();s(t)}),{search:t=>new Promise((s,a)=>{n.postMessage(t),e.push({resolve:s,reject:a})}),terminate:()=>{n.terminate(),e.forEach(({reject:t})=>t(new Error("Worker has been terminated.")))}}},pf=(n,e=!1)=>{const t=W(0),s=B(()=>n.value[t.value]),a=()=>{t.value=t.value>0?t.value-1:n.value.length-1},o=()=>{t.value=t.value<n.value.length-1?t.value+1:0};return un(n,()=>{e||(t.value=0)}),{index:t,item:s,prev:a,next:o}},Or=Symbol(""),cf=()=>{const n=W(!1);he(Or,n)},uf=n=>n instanceof Element?document.activeElement===n&&(["TEXTAREA","SELECT","INPUT"].includes(n.tagName)||n.hasAttribute("contenteditable")):!1,df=n=>Hc.some(e=>{const{key:t,ctrl:s=!1,shift:a=!1,alt:o=!1,meta:r=!1}=e;return t===n.key&&s===n.ctrlKey&&a===n.shiftKey&&o===n.altKey&&r===n.metaKey}),mf='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',hf='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',vf='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',kf='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',ff=n=>({suggestions:W([])}),lo=Hc[0];var bf=C({name:"SearchBox",setup(){const n=Re(xr),e=ln(Or),t=W(!1),s=B(()=>lo?[(t.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((a,o)=>lo[["ctrl","shift","alt","meta"][o]]),lo.key.toUpperCase()]:null);return wn("keydown",a=>{!e.value&&df(a)&&!uf(a.target)&&(a.preventDefault(),e.value=!0)}),dn(()=>{const{userAgent:a}=navigator;t.value=vh(a)||hh(a)||oc(a)}),()=>[p("button",{type:"button",class:"search-pro-button","aria-label":n.value.search,onClick:()=>{e.value=!0}},[p(Pr),p("div",{class:"search-pro-placeholder"},n.value.search),s.value?p("div",{class:"search-pro-key-hints"},s.value.map(a=>p("kbd",{class:"search-pro-key"},a))):null])]}});const Ef=h({loader:()=>l(()=>import("./SearchResult-c-oK_wg2.js"),__vite__mapDeps([])),loadingComponent:()=>{const n=Re(xr);return p($c,{hint:n.value.loading})}});var gf=C({name:"SearchModal",setup(){const n=ln(Or),e=Qt(),t=Bh(),s=Re(xr),a=W(""),{suggestions:o}=ff(),r=W(!1),{index:i,prev:c,next:u}=pf(o),d=Pn(),m=Pn(),v=(k=i.value)=>{a.value=o.value[k],r.value=!1};return wn("keydown",k=>{r.value?k.key==="ArrowUp"?c():k.key==="ArrowDown"?u():k.key==="Enter"?v():k.key==="Escape"&&(r.value=!1):k.key==="Escape"&&(n.value=!1)}),dn(()=>{const k=Ar(document.body);un(n,async b=>{var y;k.value=b,b&&(await ot(),(y=d.value)==null||y.focus())}),Nh(m,()=>{r.value=!1}),Et(()=>{k.value=!1})}),()=>n.value?p("div",{class:"search-pro-modal-wrapper"},[p("div",{class:"search-pro-mask",onClick:()=>{n.value=!1,a.value=""}}),p("div",{class:"search-pro-modal"},[p("div",{class:"search-pro-box"},[p("form",[p("label",{for:"search-pro","aria-label":s.value.search},p(Pr)),p("input",{ref:d,type:"search",class:"search-pro-input",id:"search-pro",placeholder:s.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${e.value.title}-search`,value:a.value,"aria-controls":"search-pro-results",onKeydown:k=>{const{key:b}=k;o.value.length&&(b==="Tab"?(v(),k.preventDefault()):(b==="ArrowDown"||b==="ArrowUp"||b==="Escape")&&k.preventDefault())},onInput:({target:k})=>{a.value=k.value,r.value=!0,i.value=0}}),a.value?p("button",{type:"reset",class:"search-pro-clear-button",innerHTML:tf,onClick:()=>{a.value=""}}):null,null]),p("button",{type:"button",class:"search-pro-close-button",onClick:()=>{n.value=!1,a.value=""}},s.value.cancel)]),p(Ef,{query:a.value,isFocusing:!r.value,onClose:()=>{n.value=!1},onUpdateQuery:k=>{a.value=k}}),t.value?null:p("div",{class:"search-pro-hints"},[p("span",{class:"search-pro-hint"},[p("kbd",{innerHTML:mf}),s.value.select]),p("span",{class:"search-pro-hint"},[p("kbd",{innerHTML:vf}),p("kbd",{innerHTML:hf}),s.value.navigate]),p("span",{class:"search-pro-hint"},[p("kbd",{innerHTML:kf}),s.value.exit])])])]):null}}),_f=ke({enhance({app:n}){lf(n),n.component("SearchBox",bf)},setup(){cf()},rootComponents:[gf]}),ip={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const zc=()=>{const n=bn();return B(()=>n.value.readingTime??null)},So=typeof ip>"u"?null:ip,Kc=(n,e)=>{const{minutes:t,words:s}=n,{less1Minute:a,word:o,time:r}=e;return{time:t<1?a:r.replace("$time",Math.round(t).toString()),words:o.replace("$word",s.toString())}},cp={words:"",time:""},jc=()=>So?Re(So):B(()=>null),yf=()=>{if(typeof So>"u")return B(()=>cp);const n=zc(),e=jc();return B(()=>n.value&&e.value?Kc(n.value,e.value):cp)},lt=()=>wc(),pn=()=>Vv(),_t=()=>{const n=lt();return B(()=>!!n.value.pure)},po=()=>null,Af="719px",Bf="1440px",wf="true",Lr={mobileBreakPoint:Af,pcBreakPoint:Bf,enableThemeColor:wf,"theme-1":"#2196f3","theme-2":"#f26d6d","theme-3":"#3eaf7c","theme-4":"#fb9b5f"},Sr={"/note-book/":[{text:"AI Training",prefix:"AI-Training/",collapsible:!0,children:["torch 环境","Windows_WSL2安装nvidia-cuda驱动","英伟达开源驱动和闭源驱动冲突问题"]},{text:"Android",prefix:"Android/",collapsible:!0,children:["Ubuntu命令行安装Android SDK"]},{text:"CoreDNS",prefix:"CoreDNS/",collapsible:!0,icon:"laptop-code",children:["ext-plugin-redis","理解CoreDNS"]},{text:"CVE",prefix:"CVE/",collapsible:!0,children:["CVE-2024-21626利用场景"]},{text:"Database System",prefix:"DatabaseSystem/",collapsible:!0,children:[{text:"Etcd",prefix:"Etcd/",collapsible:!0,children:["etcd安装etcdkeeper"]},{text:"My SQL",prefix:"MySQL/",collapsible:!0,children:["国内源","查看Mysql数据量大小"]}]},{text:"Distributed System",prefix:"DistributedSystem/",collapsible:!0,children:[{text:"Ansible",prefix:"Ansible/",collapsible:!0,children:["ansible自动化运维","Centos7.x 安装Python3.9.7  Ansible4.5"]},{text:"JumperServer Insight",prefix:"JumperServer/",collapsible:!0,children:["","JumperServerDockerDeploy","HA_Deploy"]},{text:"Open Stack",prefix:"OpenStack/",collapsible:!0,children:["OpenStack-Queens版搭建详解"]}]},{text:"DNS",prefix:"DNS/",collapsible:!0,children:["Bind9的使用","NamedManager"]},{text:"Docker",prefix:"Docker/",collapsible:!0,children:["Docker 2375攻击和解决方案","Docker 的daemon.json","Docker日志选项配置上去对已运行容器不生效","docker pull push","docker run 命令所有的选项","Docker环境清理","Docker不死进程","docker容器集合","docker报错bridge-nf-call-iptables内核修整","Docker逃逸漏洞案例","docker学习笔记-PDF","一次构建出x86及arm镜像","RockyLinux安装Docker","一键运行web版本vscode","在Dockerfile里调整时区","把容器做成物理机","只使用操作系统创建容器-扫描","手撕Docker容器命令行版","手撕docker网络","更改docker服务网段分配地址","手撕docker容器","跨宿主机通信overlay和macvlay"]},{text:"Ebook",prefix:"ebook/",collapsible:!0,children:["ebook"]},{text:"ELK",prefix:"ELK/",collapsible:!0,children:["EFK8.4.3部署","ELK"]},{text:"Esxi",prefix:"Esxi/",collapsible:!0,children:["ESXI中的网络"]},{text:"Gawk",prefix:"Gawk/",collapsible:!0,children:["awk 入门教程","awk 学习  高级输出  02","AWK案例入门看这一篇就够了","awk语言学习笔记  01","匹配特定字符并输出其后的若干行","Shell文本处理三剑客-AWK"]},{text:"git-tips",prefix:"Git/",collapsible:!0,children:["","git 拉取全部远程分支","git更新远程分支","Git识别项目的语言类型，及文件占比","git远程仓库回退到指定版本","命令行显示gitmoji","git基础命令","Git 的代理配置","Git分支管理合并与删除命令","git统计项目代码行数","Git高级操作和练习网站"]},{text:"Gitlab",prefix:"Gitlab/",collapsible:!0,children:[{text:"CI",prefix:"CI/",collapsible:!0,children:["gitlab ci 编写","部署Kubernetes类型的gitlab-runner","gitlab ci 部署"]},"Gitlab二开从而自定义权限系统","Gitlab备份和恢复","Gitlab安装部署","Gitlab配置邮件服务器","Gitlab的一些问题"]},{text:"Goaccess",prefix:"goaccess/",collapsible:!0,children:["goaccess给ftp生成分析图"]},{text:"GRUB",prefix:"GRUB/",collapsible:!0,children:["配置案例"]},{text:"HA LVS Keepalived",prefix:"HA-LVS-Keepalived/",collapsible:!0,children:["keepalived","haproxy","ha-lvs-keepalived"]},{text:"Harbor",prefix:"Harbor/",collapsible:!0,children:["Harbor离线搭建"]},{text:"Iptables",prefix:"Iptables/",collapsible:!0,children:["iptables拦截内网奇虎软件病毒上报","iptables详解-朱光印","linux下IPTABLES配置详解","Linux内核子系统 - 网络 netfilter","内核参数ip_forward"]},{text:"Jenkins",prefix:"Jenkins/",collapsible:!0,children:["jenkins的docker部署文档","jenkins构建持续化集成平台","jenkins备份","修改Jenkins插件为国内源"]},{text:"Kafka",prefix:"Kafka/",collapsible:!0,children:[{text:"ELK+kafka构建高并发分布式日志收集系统",prefix:"ELK_kafka构建高并发分布式日志收集系统/",collapsible:!0,children:["/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html"]}]},{text:"Kubernetes",prefix:"Kubernetes/",collapsible:!0,children:["Kubernetes最小高可用架构图","kubernetes进阶（三）服务发现-coredns","kubernetes进阶（二）核心网络插件Flannel","kubernetes进阶（五）dashboard--WEB管理","kubernetes进阶（六）k8s平滑升级","kubernetes进阶（四）服务暴露-ingress控制器之traefik","SSL证书签发","二进制安装kubernetes（七） 部署知识点总结","二进制安装kubernetes（三） kube-controller-manager组件安装","二进制安装kubernetes（二） kube-apiserver组件安装","二进制安装kubernetes（六） kube-proxy组件安装","什么是Name和NameSpace","Kubernetes Api Endpoint","crictl登录dockerhub","k8s删除Terminating状态ns","kubeadm部署Kubernetes 1.24步骤","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html","Kubernetes Service Account如何生成Token","什么是Label和Label选择器","NameSpace 资源隔离隔离了什么","Request和Limit","一次kubeadm添加节点出现etcd检查错误","常用优化","什么是Pod和Pod控制器","什么是Service和Ingress","Kubernetes crictl管理命令详解","二进制安装kubernetes（四） kube-scheduler组件安装","etcd 二进制三节点集群部署","记一次异常断电造成kubernetes故障","二进制部署Kubernetes","二进制安装kubernetes（五） kubelet组件安装","使用 vmagent 代替 Prometheus 采集监控指标","Kubernetes的NetworkPlicy","kubernetes进阶（一）kubectl工具使用详解","Kubernetes有哪些组件"]},{text:"Linux From Scratch",prefix:"LinuxFromScratch/",collapsible:!0,children:["LFS-NoteBook"]},{text:"Linux Opera System",prefix:"LinuxOperaSystem/",collapsible:!0,children:["bash利用扩展字符集实现rm",{text:"Git",prefix:"Git/",collapsible:!0,children:["Centos7 yum install git2.x 较新版本"]},"grub2手动命令引导教程",{text:"history命令详解",prefix:"history/",collapsible:!0,children:[""]},{text:"Linux三剑客",prefix:"Linux三剑客/",collapsible:!0,children:["AWK中的字符串操作函数"]},{text:"Nvidia",prefix:"Nvidia/",collapsible:!0,children:["安装Nvidia Runtime","安装Nvidia驱动"]},{text:"Samba",prefix:"Samba/",collapsible:!0,children:["Samba共享文件时文件属性nobody","Linux挂载cifs文件系统","Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法","Samba配置举例"]},"shell脚本加密解密工具shc","shell通过函数隐藏命令","ssh把远程端口映射到本地","tcpdump抓包命令","按电源软关机要等待60秒设置更短的时间",{text:"Vim",prefix:"Vim/",collapsible:!0,children:["vi编辑器"]},{text:"VNC",prefix:"VNC/",collapsible:!0,children:["Ubuntu 20.04 安装VNC Server"]},"ssh 设置反向代理","Linux备份为liveOS","命令创建虚拟镜像文件","用shell生成包含大写、小写、数字、特殊字符的随机字符串","让某个命令不输出"]},{text:"Linux 文件系统的未来 btrfs",prefix:"Btrfs/",collapsible:!0,children:["","some device missing方法","btrfs的使用","Snapper玩转btrfs文件系统"]},{text:"Memcache Redis",prefix:"memcache-redis/",collapsible:!0,children:["memcache-redis"]},{text:"Misc",prefix:"misc/",collapsible:!0,children:["中国建设银行u盾使用教程"]},{text:"Nginx&& Open Resty",prefix:"Nginx__OpenResty/",collapsible:!0,children:["/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html","/note-book/Nginx__OpenResty/nginx03.html","/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/Nginx__OpenResty/nginx01.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html","/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html","/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html","/note-book/Nginx__OpenResty/nginx02.html","/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html","/note-book/Nginx__OpenResty/nginx-plus-module-lua.html"]},{text:"Open SSH Server",prefix:"OpenSSH-Server/",collapsible:!0,children:["ssh日志记录登陆密码"]},{text:"Opera Systems",prefix:"OperaSystems/",collapsible:!0,children:["Linux下的ASLR（PIE）内存保护机制和绕过","proc-sysrq-trigger详解","proc详解","CPU和内存的架构 UMA和NUMA","date命令","grep命令","Journal日志服务详解","Linux升级内核的两种方法","sed","Linux排查哪个进程和IP在占用网速","Linux普通用户免密码sudo","Linux虚拟网络设备之bridge","macvlan详解",{text:"Operating System Principle",prefix:"OperatingSystemPrinciple/",collapsible:!0,children:["CPU的虚拟化","操作系统介绍",{text:"操作系统相关 Operating Systems: Three Easy Pieces 学习笔记",prefix:"ostep-note/",collapsible:!0,children:["",{text:"1virtualization",prefix:"1virtualization/",collapsible:!0,children:["22 Swapping Policies","23 Complete VM Systems","4 Processes","5 Process API","6 Direct Execution","7 CPU Scheduling","8 Multi-level Feedback","10 Multi-CPU Scheduling","13 Address Spaces","14 Memory API","15 Address Translation","16 Segmentation","17 Free Space Management","18 Introduction to Paging","19 Translation Lookaside Buffers","20 Advanced Page Tables","21 Swapping Mechanisms"]},{text:"2concurrency",prefix:"2concurrency/",collapsible:!0,children:["26 Concurrency and Threads","27 Thread API","28 Locks","29 Locked Data Structures","30 Condition Variables","31 Semaphores","32 Concurrency Bugs","33 Event-based Concurrency"]},{text:"3persistent",prefix:"3persistent/",collapsible:!0,children:["36 IO Devices","37 Hard Disk Drives","39 Files and Directories","40 File System Implementation"]}]}]},{text:"Red Hat Enterprise Linux",prefix:"RedHatEnterpriseLinux/",collapsible:!0,children:["CentOS_7用户账户配置","Centos8重启网卡的方法","CentOS7配置支持AUFS文件系统","制作CenOS操作系统","配置SSH免密码验证","firewalld配置"]},"Shell快捷键","大量使用swap导致无法切换",{text:"Ubtuntu",prefix:"Ubtuntu/",collapsible:!0,children:["apt查询某个软件有哪些版本","Linux 终端命令格式","linux关闭地址空间随机化（ASLR）","ubuntu14.04 忘记了普通用户密码和root密码","Ubuntu_20.04_Server使用命令行设置IP地址","Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案","ubuntu安装nfs","Ubuntu更改为24小时制","ubuntu查看intel-GPU使用情况","Ubuntu的系统防火墙ufw和docker并存端口策略无效bug","Ubuntu软件包文件管理","VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容"]},"使用curl实现邮件发送","使用dev下的tcp-udp实现socket","备份Linux系统","常见乱码产生原因","更换系统和命令行语言","环境变量PATH","ip命令","sysstat Linux状态工具包","Linux网络内核参数优化秘籍","进程","逻辑卷无法删除"]},{text:"Photo Shop",prefix:"PhotoShop/",collapsible:!0,children:["ps如何去水印的4个方法"]},{text:"Physical Server",prefix:"Physical_server/",collapsible:!0,children:["Huawei x288系列风扇转速调速"]},{text:"Portainer",prefix:"Portainer/",collapsible:!0,children:["Portainer 单机部署"]},{text:"Prometheus",prefix:"Prometheus/",collapsible:!0,children:["Prometheus监控Windows主机"]},{text:"Rabbit MQ",prefix:"RabbitMQ/",collapsible:!0,children:["rabbitmq"]},{text:"Research& Develop",prefix:"Research_Develop/",collapsible:!0,children:[{text:"C语言学习 翁恺教程",prefix:"C/",collapsible:!0,children:["/note-book/Research_Develop/C/","/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html",{text:"ACLLib",prefix:"ACLLib/",collapsible:!0,children:["/note-book/Research_Develop/C/ACLLib/ACLLib.html"]},"/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html"]},{text:"Python",prefix:"Python/",collapsible:!0,children:["/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html",{text:"Python面向对象",prefix:"python面向对象/",collapsible:!0,children:["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html"]},"/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research_Develop/Python/python%20re.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html"]},{text:"Shell",prefix:"Shell/",collapsible:!0,children:["/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html"]},{text:"算法说明",prefix:"Algorithm/",collapsible:!0,children:["/note-book/Research_Develop/Algorithm/","/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html"]}]},{text:"Router OS",prefix:"RouterOS/",collapsible:!0,children:["RouterOS利用（L2TP）实现多方异地组网","Azure刷写ROS教程","用ros路由作为中转教程"]},{text:"S3 Simple Storage Service",prefix:"S3-SimpleStorageService/",collapsible:!0,children:["Minio挂载到nfs不成功","MiniO_Docker_Deploy"]},{text:"Tomcat",prefix:"Tomcat/",collapsible:!0,children:["tomcat"]},{text:"Traefik",prefix:"Traefik/",collapsible:!0,children:["","traefik作为docker边缘路由"]},{text:"Virtual Private Network",prefix:"VirtualPrivateNetwork/",collapsible:!0,children:[{text:"广义 Virtual Private Network",prefix:"广义VirtualPrivateNetwork/",collapsible:!0,children:["基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"]},{text:"狭义 Virtual Private Network",prefix:"狭义VirtualPrivateNetwork/",collapsible:!0,children:["Docker一键部署Clash服务与管理面板","优秀的落地框架 XrayR","连接WARP为服务器添加IPv4IPv6网络","cfw-cdn-ssl-ws-tls"]}]},{text:"VMware",prefix:"VMware/",collapsible:!0,children:["各个版本的激活密钥","虚拟化物理机"]},{text:"Windows Opera System",prefix:"WindowsOperaSystem/",collapsible:!0,children:["PowerShell 打印环境变量","PowerShell 操作系统禁止运行脚本","Windows系统更改迁移用户目录"]},{text:"Zabbix",prefix:"Zabbix/",collapsible:!0,children:["zabbix","Zabbix-Agent主动模式自动注册","Zabbix-Agent被动模式自动注册","zabbix-docker","zabbix的VMwareGuest补充缺陷",{text:"ZCS认证",prefix:"ebook/",collapsible:!0,children:[""]}]},"杀不死的进程",{text:"洋垃圾主机",prefix:"洋垃圾主机/",collapsible:!0,children:["CPU鸡血BIOS","GPU矿卡体质检测"]}],"/PyQt5快速上手-王铭东/":["001-PyQt介绍与安装","002-PyQt基本UI","003-布局","004-布局2","005-窗口","006-信号与槽","007-Qt Designer","008-PyQt多线程","009-打包为可执行程序"]},Wc=n=>{const{icon:e="",color:t,size:s}=n,a=t||s?{}:null;return t&&(a.color=t),s&&(a.height=Number.isNaN(Number(s))?s:`${s}px`),He(e)?p("img",{class:"icon",src:e,alt:"","no-view":"",style:a}):Pa(e)?p("img",{class:"icon",src:Bn(e),alt:"","aria-hidden":"","no-view":"",style:a}):p(oe("FontIcon"),n)};Wc.displayName="HopeIcon";var jn=Wc;const Os=()=>{const n=Zn(),e=Se();return t=>{if(t)if(Pa(t))e.path!==t&&n.push(t);else if(Li(t))window&&window.open(t);else{const s=e.path.slice(0,e.path.lastIndexOf("/"));n.push(`${s}/${encodeURI(t)}`)}}},qc=()=>{const n=pn(),e=yn();return B(()=>{const{author:t}=e.value;return t?Es(t):t===!1?[]:Es(n.value.author,!1)})},Df=()=>{const n=yn(),e=ln(Symbol.for("categoryMap"));return B(()=>cc(n.value.category).map(t=>{var s;return{name:t,path:((s=e==null?void 0:e.value.map[t])==null?void 0:s.path)||""}}))},Pf=()=>{const n=yn(),e=ln(Symbol.for("tagMap"));return B(()=>uc(n.value.tag).map(t=>{var s;return{name:t,path:((s=e==null?void 0:e.value.map[t])==null?void 0:s.path)||""}}))},xf=()=>{const n=yn(),e=bn();return B(()=>{const t=mr(n.value.date);if(t)return t;const{createdTime:s}=e.value.git||{};return s?new Date(s):null})},Of=()=>{const n=pn(),e=bn(),t=yn(),s=qc(),a=Df(),o=Pf(),r=xf(),i=zc(),c=yf(),u=B(()=>({author:s.value,category:a.value,date:r.value,localizedDate:e.value.localizedDate,tag:o.value,isOriginal:t.value.isOriginal||!1,readingTime:i.value,readingTimeLocale:c.value,pageview:"pageview"in t.value?t.value.pageview:!0})),d=B(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:u,items:d}},{mobileBreakPoint:Lf,pcBreakPoint:Sf}=Lr,up=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,Ls=()=>{const n=W(!1),e=W(!1),t=()=>{n.value=window.innerWidth<=(up(Lf)??719),e.value=window.innerWidth>=(up(Sf)??1440)};return dn(()=>{t(),wn("resize",t,!1),wn("orientationchange",t,!1)}),{isMobile:n,isPC:e}},Qc=Symbol(""),Ss=()=>{const n=ln(Qc);if(!n)throw new Error("useDarkmode() is called without provider.");return n},Rf=n=>{const e=lt(),t=jh(),s=B(()=>e.value.darkmode||"switch"),a=La("vuepress-theme-hope-scheme","auto"),o=B(()=>{const i=s.value;return i==="disable"?!1:i==="enable"?!0:i==="auto"?t.value:i==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&t.value}),r=B(()=>{const i=s.value;return i==="switch"||i==="toggle"});n.provide(Qc,{canToggle:r,config:s,isDarkmode:o,status:a}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},Tf=()=>{const{config:n,isDarkmode:e,status:t}=Ss();Qp(()=>{n.value==="disable"?t.value="light":n.value==="enable"&&(t.value="dark")}),dn(()=>{un(e,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var Yn=C({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:t,slots:s}){const a=Se(),o=Ni(),r=qt(n,"config"),i=B(()=>He(r.value.link)),c=B(()=>!i.value&&Li(r.value.link)),u=B(()=>r.value.target||(i.value?"_blank":void 0)),d=B(()=>u.value==="_blank"),m=B(()=>!i.value&&!c.value&&!d.value),v=B(()=>r.value.rel||(d.value?"noopener noreferrer":void 0)),k=B(()=>r.value.ariaLabel||r.value.text),b=B(()=>{if(n.exact)return!1;const A=ve(o.value.locales);return A.length?A.every(_=>_!==r.value.link):r.value.link!=="/"}),y=B(()=>m.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(a.path):b.value?Gt(a.path,r.value.link):a.path===r.value.link:!1);return()=>{const{before:A,after:_,default:P}=s,{text:g,icon:x,link:M}=r.value;return m.value?p(Cn,{to:M,"aria-label":k.value,...e,class:["nav-link",{active:y.value},e.class],onFocusout:()=>t("focusout")},()=>P?P():[A?A():p(jn,{icon:x}),g,_==null?void 0:_()]):p("a",{href:M,rel:v.value,target:u.value,"aria-label":k.value,...e,class:["nav-link",e.class],onFocusout:()=>t("focusout")},P?P():[A?A():p(jn,{icon:x}),g,n.noExternalLinkIcon?null:p(Ac),_==null?void 0:_()])}}});const Kt=(n,e,t=!1)=>"activeMatch"in e?new RegExp(e.activeMatch).test(n.path):lc(n,e.link)?!0:e.children&&!t?e.children.some(s=>Kt(n,s)):!1,Zc=(n,e)=>e.type==="group"?e.children.some(t=>t.type==="group"?Zc(n,t):t.type==="page"&&Kt(n,t,!0))||"prefix"in e&&lc(n,e.prefix):!1,Jc=(n,e)=>fn(n.link)?p(Yn,{...e,config:n}):p("p",e,[p(jn,{icon:n.icon}),n.text]),Yc=n=>{const e=Se();return n?p("ul",{class:"vp-sidebar-sub-headers"},n.map(t=>p("li",{class:"vp-sidebar-sub-header"},[Jc(t,{class:["vp-sidebar-link","vp-heading",{active:Kt(e,t,!0)}]}),Yc(t.children)]))):null};var _n=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(_n||{}),Xc=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(Xc||{});const ht=(n="",e="")=>Pa(e)?e:`${rr(n)}${e}`,It=(n,e,t=!1)=>{let s=zt(n,pc(encodeURI(e)));s.name==="404"&&(s=zt(n,e));const{fullPath:a,meta:o,name:r}=s;return{text:!t&&o[_n.shortTitle]?o[_n.shortTitle]:o[_n.title]||e,link:r==="404"?e:a,...o[_n.icon]?{icon:o[_n.icon]}:{}}},Sa=(n,e,t)=>t>0?e.map(s=>({type:"heading",text:s.title,link:`${n.path}#${s.slug}`,children:Sa(n,s.children,t-1)})):[],Ro=({config:n,router:e,page:t,headerDepth:s,prefix:a=""})=>{const o=(r,i=a)=>{var u;const c=fn(r)?It(e,ht(i,r)):r.link?{...r,...Mt(r.link)?{}:{link:It(e,ht(i,r.link)).link}}:r;if("children"in c){const d=ht(i,c.prefix),m=c.children==="structure"?Sr[d]:c.children;return{type:"group",...c,prefix:d,children:m.map(v=>o(v,d))}}return{type:"page",...c,children:c.link===t.path?Sa(t,((u=t.headers[0])==null?void 0:u.level)===1?t.headers[0].children:t.headers,s):[]}};return n.map(r=>o(r))},If=({config:n,router:e,page:t,headerDepth:s})=>{const a=ve(n).sort((o,r)=>r.length-o.length);for(const o of a)if(Gt(decodeURI(t.path),o)){const r=n[o];return r?Ro({config:r==="structure"?Sr[o]:r==="heading"?Sa(t,t.headers,s):r,router:e,page:t,headerDepth:s,prefix:o}):[]}return console.warn(`${t.path} is missing sidebar config.`),[]},Cf=({config:n,router:e,routeLocale:t,page:s,headerDepth:a})=>n==="heading"?Sa(s,s.headers,a):n==="structure"?Ro({config:Sr[t],router:e,page:s,headerDepth:a,prefix:t}):Ht(n)?Ro({config:n,router:e,page:s,headerDepth:a}):Me(n)?If({config:n,router:e,page:s,headerDepth:a}):[],nu=Symbol(""),Vf=()=>{const n=yn(),e=pn(),t=bn(),s=Ge(),a=Zn(),o=B(()=>n.value.home?!1:n.value.sidebar??e.value.sidebar??"structure"),r=B(()=>n.value.headerDepth??e.value.headerDepth??2),i=gr(()=>[o.value,r.value,t.value.path,null],()=>Cf({config:o.value,router:a,routeLocale:s.value,page:t.value,headerDepth:r.value}));he(nu,i)},Rr=()=>{const n=ln(nu);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var Ff=C({name:"PageFooter",setup(){const n=lt(),e=pn(),t=yn(),s=qc(),a=B(()=>{const{copyright:u,footer:d}=t.value;return d!==!1&&!!(u||d||e.value.displayFooter)}),o=B(()=>{const{footer:u}=t.value;return u===!1?!1:fn(u)?u:e.value.footer||""}),r=B(()=>s.value.map(({name:u})=>u).join(", ")),i=u=>`Copyright © ${new Date().getFullYear()} ${r.value} ${u?`${u} Licensed`:""}`,c=B(()=>{const{copyright:u,license:d=""}=t.value,{license:m}=n.value,{copyright:v}=e.value;return u??(d?i(d):fn(v)?v:r.value||m?i(m):!1)});return()=>a.value?p("footer",{class:"vp-footer-wrapper"},[o.value?p("div",{class:"vp-footer",innerHTML:o.value}):null,c.value?p("div",{class:"vp-copyright",innerHTML:c.value}):null]):null}}),Nf=C({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const t=bn(),s=qt(n,"config"),a=B(()=>s.value.ariaLabel||s.value.text),o=W(!1);un(()=>t.value.path,()=>{o.value=!1});const r=i=>{i.detail===0&&(o.value=!o.value)};return()=>{var i;return p("div",{class:["dropdown-wrapper",{open:o.value}]},[p("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:r},[((i=e.title)==null?void 0:i.call(e))||p("span",{class:"title"},[p(jn,{icon:s.value.icon}),n.config.text]),p("span",{class:"arrow"}),p("ul",{class:"nav-dropdown"},s.value.children.map((c,u)=>{const d=u===s.value.children.length-1;return p("li",{class:"dropdown-item"},"children"in c?[p("h4",{class:"dropdown-subtitle"},c.link?p(Yn,{config:c,onFocusout:()=>{c.children.length===0&&d&&(o.value=!1)}}):p("span",c.text)),p("ul",{class:"dropdown-subitem-wrapper"},c.children.map((m,v)=>p("li",{class:"dropdown-subitem"},p(Yn,{config:m,onFocusout:()=>{v===c.children.length-1&&d&&(o.value=!1)}}))))]:p(Yn,{config:c,onFocusout:()=>{d&&(o.value=!1)}}))}))])])}}});const eu=(n,e,t="")=>fn(e)?It(n,ht(t,e)):"children"in e?{...e,...e.link&&!Mt(e.link)?It(n,ht(t,e.link)):{},children:e.children.map(s=>eu(n,s,ht(t,e.prefix)))}:{...e,link:Mt(e.link)?e.link:It(n,ht(t,e.link)).link},tu=()=>{const n=pn(),e=Zn(),t=()=>(n.value.navbar||[]).map(s=>eu(e,s));return gr(()=>n.value.navbar,()=>t())},Mf=()=>{const n=pn(),e=B(()=>n.value.repo||null),t=B(()=>e.value?bh(e.value):null),s=B(()=>e.value?hr(e.value):null),a=B(()=>t.value?n.value.repoLabel??(s.value===null?"Source":s.value):null);return B(()=>!t.value||!a.value||n.value.repoDisplay===!1?null:{type:s.value||"Source",label:a.value,link:t.value})};var $f=C({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=bn(),t=qt(n,"config"),s=B(()=>t.value.ariaLabel||t.value.text),a=W(!1);un(()=>e.value.path,()=>{a.value=!1});const o=(r,i)=>i[i.length-1]===r;return()=>[p("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[p("span",{class:"title"},[p(jn,{icon:t.value.icon}),n.config.text]),p("span",{class:["arrow",a.value?"down":"end"]})]),p("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},t.value.children.map(r=>p("li",{class:"dropdown-item"},"children"in r?[p("h4",{class:"dropdown-subtitle"},r.link?p(Yn,{config:r,onFocusout:()=>{o(r,t.value.children)&&r.children.length===0&&(a.value=!1)}}):p("span",r.text)),p("ul",{class:"dropdown-subitem-wrapper"},r.children.map(i=>p("li",{class:"dropdown-subitem"},p(Yn,{config:i,onFocusout:()=>{o(i,r.children)&&o(r,t.value.children)&&(a.value=!1)}}))))]:p(Yn,{config:r,onFocusout:()=>{o(r,t.value.children)&&(a.value=!1)}}))))]}}),Uf=C({name:"NavScreenLinks",setup(){const n=tu();return()=>n.value.length?p("nav",{class:"nav-screen-links"},n.value.map(e=>p("div",{class:"navbar-links-item"},"children"in e?p($f,{config:e}):p(Yn,{config:e})))):null}});const su=()=>p(on,{name:"dark"},()=>p("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));su.displayName="DarkIcon";const au=()=>p(on,{name:"light"},()=>p("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));au.displayName="LightIcon";const ou=()=>p(on,{name:"auto"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));ou.displayName="AutoIcon";const ru=()=>p(on,{name:"enter-fullscreen"},()=>p("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));ru.displayName="EnterFullScreenIcon";const lu=()=>p(on,{name:"cancel-fullscreen"},()=>p("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));lu.displayName="CancelFullScreenIcon";const pu=()=>p(on,{name:"outlook"},()=>[p("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);pu.displayName="OutlookIcon";var iu=C({name:"AppearanceSwitch",setup(){const{config:n,isDarkmode:e,status:t}=Ss(),s=_t(),a=()=>{n.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"},o=async r=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!r){a();return}const i=r.clientX,c=r.clientY,u=Math.hypot(Math.max(i,innerWidth-i),Math.max(c,innerHeight-c)),d=e.value;await document.startViewTransition(async()=>{a(),await ot()}).ready,e.value!==d&&document.documentElement.animate({clipPath:e.value?[`circle(${u}px at ${i}px ${c}px)`,`circle(0px at ${i}px ${c}px)`]:[`circle(0px at ${i}px ${c}px)`,`circle(${u}px at ${i}px ${c}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>p("button",{type:"button",id:"appearance-switch",onClick:o},[p(ou,{style:{display:t.value==="auto"?"block":"none"}}),p(su,{style:{display:t.value==="dark"?"block":"none"}}),p(au,{style:{display:t.value==="light"?"block":"none"}})])}}),Hf=C({name:"AppearanceMode",setup(){const n=pn(),{canToggle:e}=Ss(),t=B(()=>n.value.outlookLocales.darkmode);return()=>e.value?p("div",{class:"appearance-wrapper"},[p("label",{class:"appearance-title",for:"appearance-switch"},t.value),p(iu)]):null}});const io="VUEPRESS_THEME_COLOR";var Gf=C({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const e=(t="")=>{const s=document.documentElement.classList,a=ve(n.themeColor);if(!t){localStorage.removeItem(io),s.remove(...a);return}s.remove(...a.filter(o=>o!==t)),s.add(t),localStorage.setItem(io,t)};return dn(()=>{const t=localStorage.getItem(io);t&&e(t)}),()=>p("ul",{id:"theme-color-picker"},[p("li",p("span",{class:"theme-color",onClick:()=>e()})),rt(n.themeColor).map(([t,s])=>p("li",p("span",{style:{background:s},onClick:()=>e(t)})))])}});const Ct=Lr.enableThemeColor==="true",zf=Ct?uh(rt(Lr).filter(([n])=>n.startsWith("theme-"))):{};var Kf=C({name:"ThemeColor",setup(){const n=pn(),e=B(()=>n.value.outlookLocales.themeColor);return()=>Ct?p("div",{class:"theme-color-wrapper"},[p("label",{class:"theme-color-title",for:"theme-color-picker"},e.value),p(Gf,{themeColor:zf})]):null}}),cu=C({name:"ToggleFullScreenButton",setup(){const n=pn(),{isSupported:e,isFullscreen:t,toggle:s}=yr(),a=B(()=>n.value.outlookLocales.fullscreen);return()=>e?p("div",{class:"full-screen-wrapper"},[p("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),p("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>s()},t.value?p(lu):p(ru))]):null}}),uu=C({name:"OutlookSettings",setup(){const n=lt(),e=_t(),t=B(()=>!e.value&&n.value.fullscreen);return()=>p(Ba,()=>[Ct?p(Kf):null,p(Hf),t.value?p(cu):null])}}),jf=C({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:t}){const s=bn(),{isMobile:a}=Ls(),o=Pn(),r=Ar(o);return dn(()=>{o.value=document.body,un(a,i=>{!i&&n.show&&(r.value=!1,e("close"))}),un(()=>s.value.path,()=>{r.value=!1,e("close")})}),Et(()=>{r.value=!1}),()=>p(st,{name:"fade",onEnter:()=>{r.value=!0},onAfterLeave:()=>{r.value=!1}},()=>{var i,c;return n.show?p("div",{id:"nav-screen"},p("div",{class:"vp-nav-screen-container"},[(i=t.before)==null?void 0:i.call(t),p(Uf),p("div",{class:"vp-outlook-wrapper"},p(uu)),(c=t.after)==null?void 0:c.call(t)])):null})}}),Wf=C({name:"NavbarBrand",setup(){const n=Ge(),e=Qt(),t=pn(),s=B(()=>t.value.home||n.value),a=B(()=>e.value.title),o=B(()=>t.value.navTitle??a.value),r=B(()=>t.value.logo?Bn(t.value.logo):null),i=B(()=>t.value.logoDark?Bn(t.value.logoDark):null);return()=>p(Cn,{to:s.value,class:"vp-brand"},()=>[r.value?p("img",{class:["vp-nav-logo",{light:!!i.value}],src:r.value,alt:""}):null,i.value?p("img",{class:["vp-nav-logo dark"],src:i.value,alt:""}):null,o.value?p("span",{class:["vp-site-name",{"hide-in-pad":r.value&&t.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),qf=C({name:"NavbarLinks",setup(){const n=tu();return()=>n.value.length?p("nav",{class:"vp-nav-links"},n.value.map(e=>p("div",{class:"nav-item hide-in-mobile"},"children"in e?p(Nf,{config:e}):p(Yn,{config:e})))):null}}),Qf=C({name:"RepoLink",components:{BitbucketIcon:br,GiteeIcon:fr,GitHubIcon:vr,GitLabIcon:kr,SourceIcon:Er},setup(){const n=Mf();return()=>n.value?p("div",{class:"nav-item vp-repo"},p("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},p(oe(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const du=({active:n=!1},{emit:e})=>p("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},p("span",[p("span",{class:"vp-top"}),p("span",{class:"vp-middle"}),p("span",{class:"vp-bottom"})]));du.displayName="ToggleNavbarButton";var Zf=du;const To=(n,{emit:e})=>p("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},p("span",{class:"icon"}));To.displayName="ToggleSidebarButton",To.emits=["toggle"];var Jf=To,Yf=C({name:"OutlookButton",setup(){const{isSupported:n}=yr(),e=lt(),t=_t(),s=bn(),{canToggle:a}=Ss(),o=W(!1),r=B(()=>!t.value&&e.value.fullscreen&&n);return un(()=>s.value.path,()=>{o.value=!1}),()=>a.value||r.value||Ct?p("div",{class:"nav-item hide-in-mobile"},a.value&&!r.value&&!Ct?p(iu):r.value&&!a.value&&!Ct?p(cu):p("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[p(pu),p("div",{class:"outlook-dropdown"},p(uu))])):null}}),Xf=C({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:t}){const s=pn(),{isMobile:a}=Ls(),o=W(!1),r=B(()=>{const{navbarAutoHide:d="mobile"}=s.value;return d!=="none"&&(d==="always"||a.value)}),i=B(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:Wf,Language:po,Links:qf,Repo:Qf,Outlook:Yf,Search:se("Docsearch")?oe("Docsearch"):se("SearchBox")?oe("SearchBox"):po},u=d=>c[d]??(se(d)?oe(d):po);return()=>{var d,m,v,k,b,y;return[p("header",{id:"navbar",class:["vp-navbar",{"auto-hide":r.value,"hide-icon":s.value.navbarIcon===!1}]},[p("div",{class:"vp-navbar-start"},[p(Jf,{onToggle:()=>{o.value&&(o.value=!1),e("toggleSidebar")}}),(d=t.startBefore)==null?void 0:d.call(t),(i.value.start||[]).map(A=>p(u(A))),(m=t.startAfter)==null?void 0:m.call(t)]),p("div",{class:"vp-navbar-center"},[(v=t.centerBefore)==null?void 0:v.call(t),(i.value.center||[]).map(A=>p(u(A))),(k=t.centerAfter)==null?void 0:k.call(t)]),p("div",{class:"vp-navbar-end"},[(b=t.endBefore)==null?void 0:b.call(t),(i.value.end||[]).map(A=>p(u(A))),(y=t.endAfter)==null?void 0:y.call(t),p(Zf,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),p(jf,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var A;return(A=t.screenTop)==null?void 0:A.call(t)},after:()=>{var A;return(A=t.screenBottom)==null?void 0:A.call(t)}})]}}}),nb=C({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=Se();return()=>[Jc(n.config,{class:["vp-sidebar-link",`vp-sidebar-${n.config.type}`,{active:Kt(e,n.config,!0)}],exact:!0}),Yc(n.config.children)]}}),eb=C({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const t=Se(),s=B(()=>Kt(t,n.config)),a=B(()=>Kt(t,n.config,!0));return()=>{const{collapsible:o,children:r=[],icon:i,prefix:c,link:u,text:d}=n.config;return p("section",{class:"vp-sidebar-group"},[p(o?"button":"p",{class:["vp-sidebar-heading",{clickable:o||u,exact:a.value,active:s.value}],...o?{type:"button",onClick:()=>e("toggle"),onKeydown:m=>{m.key==="Enter"&&e("toggle")}}:{}},[p(jn,{icon:i}),u?p(Yn,{class:"vp-sidebar-title",config:{text:d,link:u},noExternalLinkIcon:!0}):p("span",{class:"vp-sidebar-title"},d),o?p("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!o?p(mu,{key:c,config:r}):null])}}}),mu=C({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=Se(),t=W(-1),s=a=>{t.value=a===t.value?-1:a};return un(()=>e.path,()=>{const a=n.config.findIndex(o=>Zc(e,o));t.value=a},{immediate:!0,flush:"post"}),()=>p("ul",{class:"vp-sidebar-links"},n.config.map((a,o)=>p("li",a.type==="group"?p(eb,{config:a,open:o===t.value,onToggle:()=>s(o)}):p(nb,{config:a}))))}}),tb=C({name:"SideBar",slots:Object,setup(n,{slots:e}){const t=Se(),s=pn(),a=Rr(),o=Pn();return dn(()=>{un(()=>t.hash,r=>{const i=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${r}"]`);if(!i)return;const{top:c,height:u}=o.value.getBoundingClientRect(),{top:d,height:m}=i.getBoundingClientRect();d<c?i.scrollIntoView(!0):d+m>c+u&&i.scrollIntoView(!1)},{immediate:!0})}),()=>{var r,i,c;return p("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}]},[(r=e.top)==null?void 0:r.call(e),((i=e.default)==null?void 0:i.call(e))||p(mu,{config:a.value}),(c=e.bottom)==null?void 0:c.call(e)])}}}),Tr=C({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const t=Zn(),s=bn(),a=yn(),o=pn(),{isMobile:r,isPC:i}=Ls(),[c,u]=ma(!1),[d,m]=ma(!1),v=Rr(),k=W(!1),b=B(()=>n.noNavbar||a.value.navbar===!1||o.value.navbar===!1?!1:!!(s.value.title||o.value.logo||o.value.repo||o.value.navbar)),y=B(()=>n.noSidebar?!1:a.value.sidebar!==!1&&v.value.length!==0&&!a.value.home),A=B(()=>n.noToc||a.value.home?!1:a.value.toc||o.value.toc!==!1&&a.value.toc!==!1),_={x:0,y:0},P=D=>{_.x=D.changedTouches[0].clientX,_.y=D.changedTouches[0].clientY},g=D=>{const F=D.changedTouches[0].clientX-_.x,T=D.changedTouches[0].clientY-_.y;Math.abs(F)>Math.abs(T)*1.5&&Math.abs(F)>40&&(F>0&&_.x<=80?u(!0):u(!1))},x=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let M=0;return wn("scroll",Th(()=>{const D=x();D<=58||D<M?k.value=!1:M+200<D&&!c.value&&(k.value=!0),M=D},300,!0)),un(r,D=>{D||u(!1)}),dn(()=>{const D=Ar(document.body);un(c,T=>{D.value=T});const F=t.afterEach(()=>{u(!1)});Et(()=>{D.value=!1,F()})}),()=>p(se("GlobalEncrypt")?oe("GlobalEncrypt"):ac,()=>p("div",{class:["theme-container",{"no-navbar":!b.value,"no-sidebar":!y.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":A.value,"hide-navbar":k.value,"sidebar-collapsed":!r.value&&!i.value&&d.value,"sidebar-open":r.value&&c.value},n.containerClass,a.value.containerClass||""],onTouchStart:P,onTouchEnd:g},[b.value?p(Xf,{onToggleSidebar:()=>u()},{startBefore:()=>{var D;return(D=e.navbarStartBefore)==null?void 0:D.call(e)},startAfter:()=>{var D;return(D=e.navbarStartAfter)==null?void 0:D.call(e)},centerBefore:()=>{var D;return(D=e.navbarCenterBefore)==null?void 0:D.call(e)},centerAfter:()=>{var D;return(D=e.navbarCenterAfter)==null?void 0:D.call(e)},endBefore:()=>{var D;return(D=e.navbarEndBefore)==null?void 0:D.call(e)},endAfter:()=>{var D;return(D=e.navbarEndAfter)==null?void 0:D.call(e)},screenTop:()=>{var D;return(D=e.navScreenTop)==null?void 0:D.call(e)},screenBottom:()=>{var D;return(D=e.navScreenBottom)==null?void 0:D.call(e)}}):null,p(st,{name:"fade"},()=>c.value?p("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),p(st,{name:"fade"},()=>r.value?null:p("div",{class:"toggle-sidebar-wrapper",onClick:()=>m()},p("span",{class:["arrow",d.value?"end":"start"]}))),p(tb,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var D;return(D=e.sidebarTop)==null?void 0:D.call(e)},bottom:()=>{var D;return(D=e.sidebarBottom)==null?void 0:D.call(e)}}),e.default(),p(Ff)]))}}),kn=C({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const t=a=>{a.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},s=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>p(n.type==="single"?st:d0,{name:"drop",appear:n.appear,onAppear:t,onAfterAppear:s,onEnter:t,onAfterEnter:s,onBeforeLeave:t},()=>e.default())}});const Io=({custom:n})=>p($i,{class:["theme-hope-content",{custom:n}]});Io.displayName="MarkdownContent",Io.props={custom:Boolean};var Ir=Io;const hu=()=>p(on,{name:"author"},()=>p("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));hu.displayName="AuthorIcon";const vu=()=>p(on,{name:"calendar"},()=>p("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));vu.displayName="CalendarIcon";const ku=()=>p(on,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ku.displayName="CategoryIcon";const fu=()=>p(on,{name:"print"},()=>p("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));fu.displayName="PrintIcon";const bu=()=>p(on,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));bu.displayName="TagIcon";const Eu=()=>p(on,{name:"timer"},()=>p("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Eu.displayName="TimerIcon";const gu=()=>p(on,{name:"word"},()=>[p("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),p("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);gu.displayName="WordIcon";const pt=()=>{const n=pn();return B(()=>n.value.metaLocales)};var sb=C({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=pt();return()=>n.author.length?p("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(hu),p("span",n.author.map(t=>t.url?p("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):p("span",{class:"page-author-item"},t.name))),p("span",{property:"author",content:n.author.map(t=>t.name).join(", ")})]):null}}),ab=C({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=Zn(),t=bn(),s=pt(),a=(o,r="")=>{r&&t.value.path!==r&&(o.preventDefault(),e.push(r))};return()=>n.category.length?p("span",{class:"page-category-info","aria-label":`${s.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(ku),n.category.map(({name:o,path:r})=>p("span",{class:["page-category-item",{[`category${xa(o,9)}`]:!n.pure,clickable:r}],role:r?"navigation":"",onClick:i=>a(i,r)},o)),p("meta",{property:"articleSection",content:n.category.map(({name:o})=>o).join(",")})]):null}}),ob=C({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=pr(),t=pt();return()=>n.date?p("span",{class:"page-date-info","aria-label":`${t.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(vu),p("span",p(Ba,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),p("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),rb=C({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=pt();return()=>n.isOriginal?p("span",{class:"page-original-info"},e.value.origin):null}}),lb=C({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=pt(),t=B(()=>{if(!n.readingTime)return null;const{minutes:s}=n.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,a;return(s=n.readingTimeLocale)!=null&&s.time?p("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(Eu),p("span",(a=n.readingTimeLocale)==null?void 0:a.time),p("meta",{property:"timeRequired",content:t.value})]):null}}}),pb=C({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=Zn(),t=bn(),s=pt(),a=(o,r="")=>{r&&t.value.path!==r&&(o.preventDefault(),e.push(r))};return()=>n.tag.length?p("span",{class:"page-tag-info","aria-label":`${s.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(bu),n.tag.map(({name:o,path:r})=>p("span",{class:["page-tag-item",{[`tag${xa(o,9)}`]:!n.pure,clickable:r}],role:r?"navigation":"",onClick:i=>a(i,r)},o)),p("meta",{property:"keywords",content:n.tag.map(({name:o})=>o).join(",")})]):null}}),ib=C({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=pt();return()=>{var t,s,a;return(t=n.readingTimeLocale)!=null&&t.words?p("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(gu),p("span",(s=n.readingTimeLocale)==null?void 0:s.words),p("meta",{property:"wordCount",content:(a=n.readingTime)==null?void 0:a.words})]):null}}}),_u=C({name:"PageInfo",components:{AuthorInfo:sb,CategoryInfo:ab,DateInfo:ob,OriginalInfo:rb,PageViewInfo:()=>null,ReadingTimeInfo:lb,TagInfo:pb,WordInfo:ib},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=_t();return()=>n.items?p("div",{class:"page-info"},n.items.map(t=>p(oe(`${t}Info`),{...n.info,pure:e.value}))):null}}),cb=C({name:"PrintButton",setup(){const n=lt(),e=pn();return()=>n.value.print===!1?null:p("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},p(fu))}});const ub=({title:n,level:e,slug:t})=>p(Cn,{to:`#${t}`,class:["toc-link",`level${e}`]},()=>n),Co=(n,e)=>{const t=Se();return n.length&&e>0?p("ul",{class:"toc-list"},n.map(s=>{const a=Co(s.children,e-1);return[p("li",{class:["toc-item",{active:t.hash===`#${s.slug}`}]},ub(s)),a?p("li",a):null]})):null};var yu=C({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const t=Se(),s=bn(),a=pt(),o=Pn(),r=W("-1.7rem"),i=u=>{var d;(d=o.value)==null||d.scrollTo({top:u,behavior:"smooth"})},c=()=>{if(o.value){const u=document.querySelector(".toc-item.active");u?r.value=`${u.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:r.value="-1.7rem"}else r.value="-1.7rem"};return dn(()=>{un(()=>t.hash,u=>{if(o.value){const d=document.querySelector(`#toc a.toc-link[href$="${u}"]`);if(!d)return;const{top:m,height:v}=o.value.getBoundingClientRect(),{top:k,height:b}=d.getBoundingClientRect();k<m?i(o.value.scrollTop+k-m):k+b>m+v&&i(o.value.scrollTop+k+b-m-v)}}),un(()=>t.fullPath,c,{flush:"post",immediate:!0})}),()=>{var d,m;const u=n.items.length?Co(n.items,n.headerDepth):s.value.headers?Co(s.value.headers,n.headerDepth):null;return u?p("div",{class:"toc-place-holder"},[p("aside",{id:"toc"},[(d=e.before)==null?void 0:d.call(e),p("div",{class:"toc-header"},[a.value.toc,p(cb)]),p("div",{class:"toc-wrapper",ref:o},[u,p("div",{class:"toc-marker",style:{top:r.value}})]),(m=e.after)==null?void 0:m.call(e)])]):null}}}),Cr=C({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=bn(),t=pn(),s=Pn(),a=({target:o})=>{const r=document.querySelector(o.hash);if(r){const i=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",i)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",i),r.focus(),window.scrollTo(0,0)}};return dn(()=>{un(()=>e.value.path,()=>s.value.focus())}),()=>[p("span",{ref:s,tabindex:"-1"}),p("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:a},t.value.routeLocales.skipToContent)]}});let co=null,ts=null;const db={wait:()=>co,pending:()=>{co=new Promise(n=>ts=n)},resolve:()=>{ts==null||ts(),co=null,ts=null}},Au=()=>db;var mb=C({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:t,pending:s}=Au();return()=>p(st,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:s},()=>{var a;return(a=e.default)==null?void 0:a.call(e)})}});const hb=(n,e)=>{const t=n.replace(e,"/").split("/"),s=[];let a=lr(e);return t.forEach((o,r)=>{r!==t.length-1?(a+=`${o}/`,s.push({link:a,name:o||"Home"})):o!==""&&(a+=o,s.push({link:a,name:o}))}),s},Bu=(n,{slots:e})=>{var m,v;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:o,description:r,image:i,imageDark:c,header:u,features:d=[]}=n;return p("div",{class:"vp-feature-wrapper"},[t?p("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?p("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},a]}):null,p("div",{class:"vp-feature",style:o?{color:o}:{}},[((m=e.image)==null?void 0:m.call(e,n))||[i?p("img",{class:["vp-feature-image",{light:c}],src:Bn(i),alt:""}):null,c?p("img",{class:"vp-feature-image dark",src:Bn(c),alt:""}):null],((v=e.info)==null?void 0:v.call(e,n))||[u?p("h2",{class:"vp-feature-header"},u):null,r?p("p",{class:"vp-feature-description",innerHTML:r}):null],d.length?p("div",{class:"vp-features"},d.map(({icon:k,title:b,details:y,link:A})=>{const _=[p("h3",{class:"vp-feature-title"},[p(jn,{icon:k}),p("span",{innerHTML:b})]),p("p",{class:"vp-feature-details",innerHTML:y})];return A?Mt(A)?p("a",{class:"vp-feature-item link",href:A,"aria-label":b,target:"_blank"},_):p(Cn,{class:"vp-feature-item link",to:A,"aria-label":b},()=>_):p("div",{class:"vp-feature-item"},_)})):null])])};Bu.displayName="FeaturePanel";var dp=Bu,vb=C({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const t=yn(),s=Qt(),a=B(()=>t.value.heroFullScreen??!1),o=B(()=>{const{heroText:u,tagline:d}=t.value;return{text:u??s.value.title??"Hello",tagline:d??s.value.description??"",isFullScreen:a.value}}),r=B(()=>{const{heroText:u,heroImage:d,heroImageDark:m,heroAlt:v,heroImageStyle:k}=t.value;return{image:d?Bn(d):null,imageDark:m?Bn(m):null,heroStyle:k,alt:v||u||"",isFullScreen:a.value}}),i=B(()=>{const{bgImage:u,bgImageDark:d,bgImageStyle:m}=t.value;return{image:fn(u)?Bn(u):null,imageDark:fn(d)?Bn(d):null,bgStyle:m,isFullScreen:a.value}}),c=B(()=>t.value.actions??[]);return()=>{var u,d,m;return p("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((u=e.heroBg)==null?void 0:u.call(e,i.value))||[i.value.image?p("div",{class:["vp-hero-mask",{light:i.value.imageDark}],style:[{"background-image":`url(${i.value.image})`},i.value.bgStyle]}):null,i.value.imageDark?p("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${i.value.imageDark})`},i.value.bgStyle]}):null],p("div",{class:"vp-hero-info"},[((d=e.heroImage)==null?void 0:d.call(e,r.value))||p(kn,{appear:!0,type:"group"},()=>[r.value.image?p("img",{key:"light",class:["vp-hero-image",{light:r.value.imageDark}],style:r.value.heroStyle,src:r.value.image,alt:r.value.alt}):null,r.value.imageDark?p("img",{key:"dark",class:"vp-hero-image dark",style:r.value.heroStyle,src:r.value.imageDark,alt:r.value.alt}):null]),((m=e.heroInfo)==null?void 0:m.call(e,o.value))??p("div",{class:"vp-hero-infos"},[o.value.text?p(kn,{appear:!0,delay:.04},()=>p("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?p(kn,{appear:!0,delay:.08},()=>p("p",{id:"main-description",innerHTML:o.value.tagline})):null,c.value.length?p(kn,{appear:!0,delay:.12},()=>p("p",{class:"vp-hero-actions"},c.value.map(v=>p(Yn,{class:["vp-hero-action",v.type||"default"],config:v,noExternalLinkIcon:!0},v.icon?{before:()=>p(jn,{icon:v.icon})}:{})))):null])])])}}});const wu=(n,{slots:e})=>{var v,k,b;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:o,description:r,image:i,imageDark:c,header:u,highlights:d=[],type:m="un-order"}=n;return p("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[t?p("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?p("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},a]}):null,p("div",{class:"vp-highlight"},[((v=e.image)==null?void 0:v.call(e,n))||[i?p("img",{class:["vp-highlight-image",{light:c}],src:Bn(i),alt:""}):null,c?p("img",{class:"vp-highlight-image dark",src:Bn(c),alt:""}):null],((k=e.info)==null?void 0:k.call(e,n))||[p("div",{class:"vp-highlight-info-wrapper"},p("div",{class:"vp-highlight-info"},[u?p("h2",{class:"vp-highlight-header",innerHTML:u}):null,r?p("p",{class:"vp-highlight-description",innerHTML:r}):null,((b=e.highlights)==null?void 0:b.call(e,d))||p(m==="order"?"ol":m==="no-order"?"dl":"ul",{class:"vp-highlights"},d.map(({icon:y,title:A,details:_,link:P})=>{const g=[p(m==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[y?p(jn,{class:"vp-highlight-icon",icon:y}):null,p("span",{innerHTML:A})]),_?p(m==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:_}):null];return p(m==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:P}]},P?Mt(P)?p("a",{class:"vp-highlight-item link",href:P,"aria-label":A,target:"_blank"},g):p(Cn,{class:"vp-highlight-item link",to:P,"aria-label":A},()=>g):p("div",{class:"vp-highlight-item"},g))}))]))]])])};wu.displayName="HighlightPanel";var kb=wu,fb=C({name:"HomePage",slots:Object,setup(n,{slots:e}){const t=_t(),s=yn(),a=B(()=>{const{features:r}=s.value;return Ht(r)?r:null}),o=B(()=>{const{highlights:r}=s.value;return Ht(r)?r:null});return()=>{var r,i,c,u;return p("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(r=e.top)==null?void 0:r.call(e),p(vb),((i=o.value)==null?void 0:i.map(d=>"features"in d?p(dp,d):p(kb,d)))||(a.value?p(kn,{appear:!0,delay:.24},()=>p(dp,{features:a.value})):null),(c=e.center)==null?void 0:c.call(e),p(kn,{appear:!0,delay:.32},()=>p(Ir)),(u=e.bottom)==null?void 0:u.call(e)])}}}),bb=C({name:"BreadCrumb",setup(){const n=Zn(),e=bn(),t=Ge(),s=yn(),a=pn(),o=Pn([]),r=B(()=>(s.value.breadcrumb||s.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&o.value.length>1),i=B(()=>s.value.breadcrumbIcon||s.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),c=()=>{const u=n.getRoutes(),d=hb(e.value.path,t.value).map(({link:m,name:v})=>{const k=u.find(b=>b.path===m);if(k){const{meta:b,path:y}=zt(n,k.path);return{title:b[_n.shortTitle]||b[_n.title]||v,icon:b[_n.icon],path:y}}return null}).filter(m=>m!==null);d.length>1&&(o.value=d)};return dn(()=>{un(()=>e.value.path,c,{immediate:!0})}),()=>p("nav",{class:["vp-breadcrumb",{disable:!r.value}]},r.value?p("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},o.value.map((u,d)=>p("li",{class:{"is-active":o.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[p(Cn,{to:u.path,property:"item",typeof:"WebPage"},()=>[i.value?p(jn,{icon:u.icon}):null,p("span",{property:"name"},u.title||"Unknown")]),p("meta",{property:"position",content:d+1})]))):[])}});const mp=(n,e)=>e===!1?!1:fn(e)?It(n,e,!0):Me(e)?e:null,Vo=(n,e,t)=>{const s=n.findIndex(a=>a.link===e);if(s!==-1){const a=n[s+t];return a!=null&&a.link?a:null}for(const a of n)if(a.children){const o=Vo(a.children,e,t);if(o)return o}return null};var Eb=C({name:"PageNav",setup(){const n=pn(),e=yn(),t=Rr(),s=bn(),a=Zn(),o=Os(),r=B(()=>{const c=mp(a,e.value.prev);return c===!1?null:c||(n.value.prevLink===!1?null:Vo(t.value,s.value.path,-1))}),i=B(()=>{const c=mp(a,e.value.next);return c===!1?null:c||(n.value.nextLink===!1?null:Vo(t.value,s.value.path,1))});return wn("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?i.value&&(o(i.value.link),c.preventDefault()):c.key==="ArrowLeft"&&r.value&&(o(r.value.link),c.preventDefault()))}),()=>r.value||i.value?p("nav",{class:"vp-page-nav"},[r.value?p(Yn,{class:"prev",config:r.value},()=>{var c,u;return[p("div",{class:"hint"},[p("span",{class:"arrow start"}),n.value.metaLocales.prev]),p("div",{class:"link"},[p(jn,{icon:(c=r.value)==null?void 0:c.icon}),(u=r.value)==null?void 0:u.text])]}):null,i.value?p(Yn,{class:"next",config:i.value},()=>{var c,u;return[p("div",{class:"hint"},[n.value.metaLocales.next,p("span",{class:"arrow end"})]),p("div",{class:"link"},[(c=i.value)==null?void 0:c.text,p(jn,{icon:(u=i.value)==null?void 0:u.icon})])]}):null]):null}});const gb={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},_b=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const o=hr(n);let r;return a?r=a:o!==null&&(r=gb[o]),r?r.replace(/:repo/,He(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,Si(`${lr(t)}/${s}`)):null},yb=()=>{const n=pn(),e=bn(),t=yn();return B(()=>{const{repo:s,docsRepo:a=s,docsBranch:o="main",docsDir:r="",editLink:i,editLinkPattern:c=""}=n.value;if(!(t.value.editLink??i??!0)||!a)return null;const u=_b({docsRepo:a,docsBranch:o,docsDir:r,editLinkPattern:c,filePathRelative:e.value.filePathRelative});return u?{text:n.value.metaLocales.editLink,link:u}:null})},Ab=()=>{const n=Qt(),e=pn(),t=bn(),s=yn();return B(()=>{var a,o;return!(s.value.lastUpdated??e.value.lastUpdated??!0)||!((a=t.value.git)!=null&&a.updatedTime)?null:new Date((o=t.value.git)==null?void 0:o.updatedTime).toLocaleString(n.value.lang)})},Bb=()=>{const n=pn(),e=bn(),t=yn();return B(()=>{var s;return t.value.contributors??n.value.contributors??!0?((s=e.value.git)==null?void 0:s.contributors)??null:null})};var wb=C({name:"PageTitle",setup(){const n=bn(),e=yn(),t=pn(),{info:s,items:a}=Of();return()=>p("div",{class:"vp-page-title"},[p("h1",[t.value.titleIcon===!1?null:p(jn,{icon:e.value.icon}),n.value.title]),p(_u,{info:s.value,...a.value===null?{}:{items:a.value}}),p("hr")])}});const Du=()=>p(on,{name:"edit"},()=>[p("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),p("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Du.displayName="EditIcon";var Db=C({name:"PageMeta",setup(){const n=pn(),e=yb(),t=Ab(),s=Bb();return()=>{const{metaLocales:a}=n.value;return p("footer",{class:"page-meta"},[e.value?p("div",{class:"meta-item edit-link"},p(Yn,{class:"label",config:e.value},{before:()=>p(Du)})):null,p("div",{class:"meta-item git-info"},[t.value?p("div",{class:"update-time"},[p("span",{class:"label"},`${a.lastUpdated}: `),p(Ba,()=>p("span",{class:"info"},t.value))]):null,s.value&&s.value.length?p("div",{class:"contributors"},[p("span",{class:"label"},`${a.contributors}: `),s.value.map(({email:o,name:r},i)=>[p("span",{class:"contributor",title:`email: ${o}`},r),i!==s.value.length-1?",":""])]):null])])}}}),Pb=C({name:"NormalPage",slots:Object,setup(n,{slots:e}){const t=yn(),{isDarkmode:s}=Ss(),a=pn(),o=B(()=>t.value.toc||t.value.toc!==!1&&a.value.toc!==!1);return()=>p("main",{id:"main-content",class:"vp-page"},p(se("LocalEncrypt")?oe("LocalEncrypt"):ac,()=>{var r,i,c,u;return[(r=e.top)==null?void 0:r.call(e),t.value.cover?p("div",{class:"page-cover"},p("img",{src:Bn(t.value.cover),alt:"","no-view":""})):null,p(bb),p(wb),o.value?p(yu,{headerDepth:t.value.headerDepth??a.value.headerDepth??2},{before:()=>{var d;return(d=e.tocBefore)==null?void 0:d.call(e)},after:()=>{var d;return(d=e.tocAfter)==null?void 0:d.call(e)}}):null,(i=e.contentBefore)==null?void 0:i.call(e),p(Ir),(c=e.contentAfter)==null?void 0:c.call(e),p(Db),p(Eb),se("CommentService")?p(oe("CommentService"),{darkmode:s.value}):null,(u=e.bottom)==null?void 0:u.call(e)]}))}}),xb=C({name:"Layout",slots:Object,setup(n,{slots:e}){const t=lt(),s=pn(),a=bn(),o=yn(),{isMobile:r}=Ls(),i=B(()=>{var c,u;return((c=s.value.blog)==null?void 0:c.sidebarDisplay)||((u=t.value.blog)==null?void 0:u.sidebarDisplay)||"mobile"});return()=>[p(Cr),p(Tr,{},{default:()=>{var c;return((c=e.default)==null?void 0:c.call(e))||(o.value.home?p(fb):p(mb,()=>p(Pb,{key:a.value.path},{top:()=>{var u;return(u=e.top)==null?void 0:u.call(e)},bottom:()=>{var u;return(u=e.bottom)==null?void 0:u.call(e)},contentBefore:()=>{var u;return(u=e.contentBefore)==null?void 0:u.call(e)},contentAfter:()=>{var u;return(u=e.contentAfter)==null?void 0:u.call(e)},tocBefore:()=>{var u;return(u=e.tocBefore)==null?void 0:u.call(e)},tocAfter:()=>{var u;return(u=e.tocAfter)==null?void 0:u.call(e)}})))},...i.value!=="none"?{navScreenBottom:()=>p(oe("BloggerInfo"))}:{},...!r.value&&i.value==="always"?{sidebar:()=>p(oe("BloggerInfo"))}:{}})]}}),Ob=C({name:"NotFoundHint",setup(){const n=pn(),e=()=>{const t=n.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>p("div",{class:"not-found-hint"},[p("p",{class:"error-code"},"404"),p("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),p("p",{class:"error-hint"},e())])}}),Lb=C({name:"NotFound",slots:Object,setup(n,{slots:e}){const t=Ge(),s=pn(),{navigate:a}=Do({to:s.value.home??t.value});return()=>[p(Cr),p(Tr,{noSidebar:!0},()=>{var o;return p("main",{id:"main-content",class:"vp-page not-found"},((o=e.default)==null?void 0:o.call(e))||[p(Ob),p("div",{class:"actions"},[p("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},s.value.routeLocales.back),p("button",{type:"button",class:"action-button",onClick:()=>a()},s.value.routeLocales.home)])])})]}});const Sb={},Rb={category:{"/":{path:"/category/",map:{笔记:{path:"/category/%E7%AC%94%E8%AE%B0/",keys:["v-5491f884"]},网络安全:{path:"/category/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/",keys:["v-4b719180","v-2776dc09"]},CoreDNS:{path:"/category/coredns/",keys:["v-4b450dee"]},iptables:{path:"/category/iptables/",keys:["v-4b719180"]},Network:{path:"/category/network/",keys:["v-4b719180"]},Linux:{path:"/category/linux/",keys:["v-0419e184"]},Shell:{path:"/category/shell/",keys:["v-0419e184"]},神操作:{path:"/category/%E7%A5%9E%E6%93%8D%E4%BD%9C/",keys:["v-0419e184"]},Nginx:{path:"/category/nginx/",keys:["v-7aa7e66a"]},数据库:{path:"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-350fc342"]},VirtualPrivateNetwork:{path:"/category/virtualprivatenetwork/",keys:["v-4d6f6891"]}}}},tag:{"/":{path:"/tag/",map:{}}}},Tb={article:{"/":{path:"/article/",keys:["v-cb5d9150","v-1aecc47a","v-6129517b","v-7690a7dc","v-e332710c","v-91b6e760","v-49be5ae0","v-7aa7e66a","v-45c0ddce","v-846b5d98","v-73768998","v-5e42cccc","v-06cf84a8","v-08845d47","v-0a3935e6","v-e233a3da","v-6e466380","v-8ed8a042","v-9a30caae","v-50c35cc8","v-122307df","v-2b5b3397","v-c8460b72","v-3d933afb","v-571244d6","v-17556421","v-7aaa8b0e","v-3bb6b138","v-5df449f7","v-0419e184","v-171e9f87","v-4be274e4","v-3f2483ac","v-4d6f6891","v-2d398f6b","v-4b3aa89e","v-326d43de","v-1c82387b","v-269af0d2","v-4b719180","v-fd1808c0","v-513bdf66","v-1c5b2b34","v-9ef1da18","v-5133ac50","v-759f12ff","v-eeb679e4","v-19869778","v-0c50d2dd","v-e5c7a1ce","v-28d01994","v-156dfb56","v-7208e0fe","v-37a8ebbd","v-3b5999cf","v-66a50361","v-a467abfa","v-80d561d8","v-0e11c102","v-e966fc72","v-19b6577e","v-081b1a63","v-5c90804c","v-3352fc98","v-28f7b2e8","v-736cf379","v-548167c6","v-30bf7f7c","v-48858f42","v-6c1110d1","v-2db1247c","v-580a4400","v-c47f0884","v-66124308","v-42d1b932","v-1187c118","v-3122a850","v-4c3279e0","v-6b0a0620","v-7b7916dd","v-8b9d7fba","v-6cc6b7c2","v-0a8284ed","v-5865d184","v-46b48e13","v-24f7c960","v-28c94530","v-7eb73050","v-5491f884","v-01868d8e","v-0300e138","v-a9b33774","v-1d16fbc1","v-47c36178","v-2f2e2cf4","v-4b450dee","v-756d3903","v-2ab375a4","v-c388ee4c","v-2f710f9a","v-19eea71e","v-74135446","v-1380e8c6","v-0451b50e","v-87a56570","v-4c790792","v-1fd2b10c","v-50885a84","v-f9b4903c","v-10c9e8f1","v-6f39f683","v-4c5c0565","v-2df05220","v-d36c7940","v-3b10ae94","v-688e4fbe","v-8e1c3a3e","v-3487e284","v-5c84e740","v-09de09ac","v-128301a5","v-03dfed38","v-8ff08dec","v-7e12b9a6","v-ab5d88e0","v-3f1dde92","v-69ef78cb","v-9382cbf8","v-bae969ea","v-523bf541","v-20b8f0f1","v-7726c068","v-2b2f3b07","v-219bdfe6","v-08b82cef","v-89f58c8e","v-4d6c1094","v-736258dc","v-ce8e88a6","v-1affebc9","v-edc7031c","v-3251a524","v-72564be3","v-6c105dfe","v-4db786a2","v-77da57a3","v-5df5e696","v-f32b6d86","v-f8568246","v-dcb1d26a","v-07b8030a","v-577615d7","v-513bda28","v-77aac963","v-c66ad2a6","v-e9469f82","v-2ece8d5e","v-a0127118","v-f5f5d002","v-01b130a4","v-7f271bfb","v-76d4e7bb","v-3d16ea04","v-575cf978","v-ac04e9ec","v-743045a2","v-16f9c44f","v-e9467f60","v-089e219f","v-1c63547c","v-07fca106","v-4baada5c","v-5b225804","v-aa3e3ee8","v-81834800","v-7e1d67ea","v-e936c158","v-53c4fe8d","v-639f36bc","v-5823502a","v-7544ffb4","v-95889b98","v-b33727c8","v-4f01f3b8","v-23bf45e1","v-788034ca","v-3eb55632","v-ce601f4c","v-5d982049","v-3e5ab3dc","v-2b1ef3ea","v-31ec57f8","v-00524e94","v-636408d2","v-4581fe4c","v-1c72c74c","v-79d954ee","v-b89ca53e","v-4977fd20","v-966b2156","v-8484bb5a","v-92954d86","v-00bad121","v-bb5b9e90","v-15e0f84a","v-5a559594","v-20664f24","v-2741a660","v-f71e4004","v-0a501b28","v-244d585c","v-76b130c2","v-794ccb14","v-b7e1d682","v-bf89a59e","v-56a71ded","v-6fa63cee","v-5a7f9ef1","v-790a3eba","v-87713e26","v-0dc78858","v-b010c524","v-42119fed","v-69833e9a","v-454654c1","v-5b263b15","v-bf02f4a4","v-5bece530","v-4ae285a4","v-04007d38","v-350fc342","v-11c46d82","v-761ac8fe","v-61515108","v-9174ace0","v-91b5b3e2","v-7c8e6e87","v-eb33cb0a","v-75d6f0c8","v-1c751544","v-22a3c8d7","v-050e9cf9","v-3662114a","v-a6eba2dc","v-1d54df78","v-2bec014a","v-4de8425e","v-2a52f0c8","v-6e8771f8","v-3215b4ba","v-1a0079da","v-733d9740","v-48c517e4","v-1922adf5","v-7bf7b544","v-2e5806d2","v-4c406808","v-2adac7da","v-cf78e944","v-4294bd6d","v-2b829e3e","v-9f71a98a","v-0556e072","v-54218f21","v-4742da80","v-1302838e","v-6a7299b5","v-2b73f172","v-2cf74ea8","v-3ac693d4","v-07a67b62","v-2fabe988","v-5b349d28","v-6111f3f4","v-4f6bf42c","v-5d1813c6","v-0cb49670","v-451b6bb3","v-7741f6f4","v-617feebe","v-fc80a980","v-69880198","v-554537f7","v-782c286b","v-d7023b56","v-7cbbdb02","v-65ddef8e","v-508b9403","v-06f9c988","v-b0fbb1a2","v-77255d40","v-cf9a1e10","v-247efa59","v-d9307d94","v-5920d9e3","v-201aa8de","v-503a0eb2","v-5b295232","v-319a6cdc","v-01969508","v-5e65d047","v-3d749c17","v-10c4e4cf","v-ab459502","v-afb12a34","v-c56826bc","v-41728b29","v-01e792c4","v-187d9e5e","v-282c901c","v-6773cc80","v-e1be36c0","v-47854b8a","v-58af6e7c","v-6305be1a","v-2776dc09"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-cb5d9150","v-1aecc47a","v-6129517b","v-7690a7dc","v-e332710c","v-91b6e760","v-49be5ae0","v-7aa7e66a","v-45c0ddce","v-846b5d98","v-73768998","v-5e42cccc","v-06cf84a8","v-08845d47","v-0a3935e6","v-e233a3da","v-6e466380","v-8ed8a042","v-9a30caae","v-50c35cc8","v-122307df","v-2b5b3397","v-c8460b72","v-3d933afb","v-571244d6","v-17556421","v-7aaa8b0e","v-3bb6b138","v-5df449f7","v-0419e184","v-171e9f87","v-4be274e4","v-3f2483ac","v-4d6f6891","v-2d398f6b","v-4b3aa89e","v-326d43de","v-1c82387b","v-269af0d2","v-4b719180","v-fd1808c0","v-513bdf66","v-1c5b2b34","v-9ef1da18","v-5133ac50","v-759f12ff","v-eeb679e4","v-19869778","v-0c50d2dd","v-e5c7a1ce","v-28d01994","v-156dfb56","v-7208e0fe","v-37a8ebbd","v-3b5999cf","v-66a50361","v-a467abfa","v-80d561d8","v-0e11c102","v-e966fc72","v-19b6577e","v-081b1a63","v-5c90804c","v-3352fc98","v-28f7b2e8","v-736cf379","v-548167c6","v-30bf7f7c","v-48858f42","v-6c1110d1","v-2db1247c","v-580a4400","v-c47f0884","v-66124308","v-42d1b932","v-1187c118","v-3122a850","v-4c3279e0","v-6b0a0620","v-7b7916dd","v-8b9d7fba","v-6cc6b7c2","v-0a8284ed","v-5865d184","v-46b48e13","v-24f7c960","v-28c94530","v-7eb73050","v-5491f884","v-01868d8e","v-0300e138","v-a9b33774","v-1d16fbc1","v-47c36178","v-2f2e2cf4","v-4b450dee","v-756d3903","v-2ab375a4","v-c388ee4c","v-2f710f9a","v-19eea71e","v-74135446","v-1380e8c6","v-0451b50e","v-87a56570","v-4c790792","v-1fd2b10c","v-50885a84","v-f9b4903c","v-10c9e8f1","v-6f39f683","v-4c5c0565","v-2df05220","v-d36c7940","v-3b10ae94","v-688e4fbe","v-8e1c3a3e","v-3487e284","v-5c84e740","v-09de09ac","v-128301a5","v-03dfed38","v-8ff08dec","v-7e12b9a6","v-ab5d88e0","v-3f1dde92","v-69ef78cb","v-9382cbf8","v-bae969ea","v-523bf541","v-20b8f0f1","v-7726c068","v-2b2f3b07","v-219bdfe6","v-08b82cef","v-89f58c8e","v-4d6c1094","v-736258dc","v-ce8e88a6","v-1affebc9","v-edc7031c","v-3251a524","v-72564be3","v-6c105dfe","v-4db786a2","v-77da57a3","v-5df5e696","v-f32b6d86","v-f8568246","v-dcb1d26a","v-07b8030a","v-577615d7","v-513bda28","v-77aac963","v-c66ad2a6","v-e9469f82","v-2ece8d5e","v-a0127118","v-f5f5d002","v-01b130a4","v-7f271bfb","v-76d4e7bb","v-3d16ea04","v-575cf978","v-ac04e9ec","v-743045a2","v-16f9c44f","v-e9467f60","v-089e219f","v-1c63547c","v-07fca106","v-4baada5c","v-5b225804","v-aa3e3ee8","v-81834800","v-7e1d67ea","v-e936c158","v-53c4fe8d","v-639f36bc","v-5823502a","v-7544ffb4","v-95889b98","v-b33727c8","v-4f01f3b8","v-23bf45e1","v-788034ca","v-3eb55632","v-ce601f4c","v-5d982049","v-3e5ab3dc","v-2b1ef3ea","v-31ec57f8","v-00524e94","v-636408d2","v-4581fe4c","v-1c72c74c","v-79d954ee","v-b89ca53e","v-4977fd20","v-966b2156","v-8484bb5a","v-92954d86","v-00bad121","v-bb5b9e90","v-15e0f84a","v-5a559594","v-20664f24","v-2741a660","v-f71e4004","v-0a501b28","v-244d585c","v-76b130c2","v-794ccb14","v-b7e1d682","v-bf89a59e","v-56a71ded","v-6fa63cee","v-5a7f9ef1","v-790a3eba","v-87713e26","v-0dc78858","v-b010c524","v-42119fed","v-69833e9a","v-454654c1","v-5b263b15","v-bf02f4a4","v-5bece530","v-4ae285a4","v-04007d38","v-350fc342","v-11c46d82","v-761ac8fe","v-61515108","v-9174ace0","v-91b5b3e2","v-7c8e6e87","v-eb33cb0a","v-75d6f0c8","v-1c751544","v-22a3c8d7","v-050e9cf9","v-3662114a","v-a6eba2dc","v-1d54df78","v-2bec014a","v-4de8425e","v-2a52f0c8","v-6e8771f8","v-3215b4ba","v-1a0079da","v-733d9740","v-48c517e4","v-1922adf5","v-7bf7b544","v-2e5806d2","v-4c406808","v-2adac7da","v-cf78e944","v-4294bd6d","v-2b829e3e","v-9f71a98a","v-0556e072","v-54218f21","v-4742da80","v-1302838e","v-6a7299b5","v-2b73f172","v-2cf74ea8","v-3ac693d4","v-07a67b62","v-2fabe988","v-5b349d28","v-6111f3f4","v-4f6bf42c","v-5d1813c6","v-0cb49670","v-451b6bb3","v-7741f6f4","v-617feebe","v-fc80a980","v-69880198","v-554537f7","v-782c286b","v-d7023b56","v-7cbbdb02","v-65ddef8e","v-508b9403","v-06f9c988","v-b0fbb1a2","v-77255d40","v-cf9a1e10","v-247efa59","v-d9307d94","v-5920d9e3","v-201aa8de","v-503a0eb2","v-5b295232","v-319a6cdc","v-01969508","v-5e65d047","v-3d749c17","v-10c4e4cf","v-ab459502","v-afb12a34","v-c56826bc","v-41728b29","v-01e792c4","v-187d9e5e","v-282c901c","v-6773cc80","v-e1be36c0","v-47854b8a","v-58af6e7c","v-6305be1a","v-2776dc09"]}}},Ib=Pn(Rb),hp=$e(Ib),Pu=n=>{const e=bn(),t=yn(),s=Zn(),a=Ge();return B(()=>{var u;const o=n??((u=t.value.blog)==null?void 0:u.key)??"";if(!o)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const r=s.getRoutes();if(!hp.value[o])throw new Error(`useBlogCategory: key ${o} is invalid`);const i=hp.value[o][a.value],c={path:i.path,map:{}};for(const d in i.map){const m=i.map[d];c.map[d]={path:m.path,items:[]};for(const v of m.keys){const k=r.find(({name:b})=>b===v);if(k){const b=zt(s,k.path);c.map[d].items.push({path:b.path,info:b.meta})}}e.value.path===m.path&&(c.currentItems=c.map[d].items)}return c})},Cb=Pn(Tb),vp=$e(Cb),Ra=n=>{const e=yn(),t=Zn(),s=Ge();return B(()=>{var c;const a=n??((c=e.value.blog)==null?void 0:c.key)??"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!vp.value[a])throw new Error(`useBlogType: key ${n} is invalid`);const o=t.getRoutes(),r=vp.value[a][s.value],i={path:r.path,items:[]};for(const u of r.keys){const d=o.find(({name:m})=>m===u);if(d){const m=zt(t,d.path);i.items.push({path:m.path,info:m.meta})}}return i})},xu=()=>p(on,{name:"lock"},()=>p("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));xu.displayName="LockIcon";var Vb=[];const Ou=Symbol.for("categoryMap"),Rs=()=>{const n=ln(Ou);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},Fb=()=>{const n=Pu("category");he(Ou,n)},Ts=()=>{const n=lt(),e=pn();return B(()=>({...n.value.blog,...e.value.blog}))},Lu=Symbol.for("tagMap"),Is=()=>{const n=ln(Lu);if(!n)throw new Error("useTagMap() is called without provider.");return n},Nb=()=>{const n=Pu("tag");he(Lu,n)},Mb=n=>{const e=pn();return B(()=>{const{[_n.author]:t}=n.value;return t?Es(t):t===!1?[]:Es(e.value.author,!1)})},$b=n=>{const e=Rs();return B(()=>cc(n.value[_n.category]).map(t=>({name:t,path:e.value.map[t].path})))},Ub=n=>{const e=Is();return B(()=>uc(n.value[_n.tag]).map(t=>({name:t,path:e.value.map[t].path})))},Hb=n=>B(()=>{const{[_n.date]:e}=n.value;return mr(e)}),Gb=n=>{const e=qt(n,"info"),t=Ts(),s=Mb(e),a=$b(e),o=Ub(e),r=Hb(e),i=jc(),c=B(()=>({author:s.value,category:a.value,date:r.value,localizedDate:e.value[_n.localizedDate]||"",tag:o.value,isOriginal:e.value[_n.isOriginal]||!1,readingTime:e.value[_n.readingTime]||null,readingTimeLocale:e.value[_n.readingTime]&&i.value?Kc(e.value[_n.readingTime],i.value):null,pageview:n.path})),u=B(()=>t.value.articleInfo);return{info:c,items:u}},Su=Symbol(""),Cs=()=>{const n=ln(Su);if(!n)throw new Error("useArticles() is called without provider.");return n},zb=()=>{const n=Ra("article");he(Su,n)},Ru=Symbol(""),Vr=()=>{const n=ln(Ru);if(!n)throw new Error("useStars() is called without provider.");return n},Kb=()=>{const n=Ra("star");he(Ru,n)},Tu=Symbol(""),Fr=()=>{const n=ln(Tu);if(!n)throw new Error("useTimelines() is called without provider.");return n},jb=()=>{const n=Ra("timeline"),e=B(()=>{const t=[];return n.value.items.forEach(({info:s,path:a})=>{const o=mr(s[_n.date]);if(o){const r=o.getFullYear(),i=o.getMonth()+1,c=o.getDate();(!t[0]||t[0].year!==r)&&t.unshift({year:r,items:[]}),t[0].items.push({date:`${i}/${c}`,info:s,path:a})}}),{...n.value,config:t.reverse()}});he(Tu,e)},Wb=()=>{zb(),Fb(),Kb(),Nb(),jb()};var qb=C({name:"SocialMedia",setup(){const n=Ts(),e=_t(),t=B(()=>{const s=n.value.medias;return s?rt(s).map(([a,o])=>({name:a,icon:Sb[a],url:o})):[]});return()=>t.value.length?p("div",{class:"vp-social-medias"},t.value.map(({name:s,icon:a,url:o})=>p("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":s,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),Nr=C({name:"BloggerInfo",setup(){const n=Ts(),e=Qt(),t=pn(),s=Cs(),a=Rs(),o=Is(),r=Fr(),i=Os(),c=B(()=>{var v;return n.value.name||((v=Es(t.value.author)[0])==null?void 0:v.name)||e.value.title}),u=B(()=>n.value.avatar||t.value.logo),d=B(()=>t.value.blogLocales),m=B(()=>n.value.intro);return()=>{const{article:v,category:k,tag:b,timeline:y}=d.value,A=[[s.value.path,s.value.items.length,v],[a.value.path,ve(a.value.map).length,k],[o.value.path,ve(o.value.map).length,b],[r.value.path,r.value.items.length,y]];return p("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[p("div",{class:"vp-blogger",...m.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>i(m.value)}:{}},[u.value?p("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:Bn(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,c.value?p("div",{class:"vp-blogger-name",property:"name"},c.value):null,n.value.description?p("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,m.value?p("meta",{property:"url",content:Bn(m.value)}):null]),p("div",{class:"vp-blog-counts"},A.map(([_,P,g])=>p(Cn,{class:"vp-blog-count",to:_},()=>[p("div",{class:"count"},P),p("div",g)]))),p(qb)])}}});const Mr=()=>p(on,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Mr.displayName="CategoryIcon";const $r=()=>p(on,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));$r.displayName="TagIcon";const Ur=()=>p(on,{name:"timeline"},()=>p("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Ur.displayName="TimelineIcon";const Iu=()=>p(on,{name:"slides"},()=>p("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Iu.displayName="SlideIcon";const Cu=()=>p(on,{name:"sticky"},()=>[p("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Cu.displayName="StickyIcon";const Ta=()=>p(on,{name:"article"},()=>p("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Ta.displayName="ArticleIcon";const Vu=()=>p(on,{name:"book"},()=>p("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Vu.displayName="BookIcon";const Fu=()=>p(on,{name:"link"},()=>p("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));Fu.displayName="LinkIcon";const Nu=()=>p(on,{name:"project"},()=>p("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Nu.displayName="ProjectIcon";const Mu=()=>p(on,{name:"friend"},()=>p("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Mu.displayName="FriendIcon";const Fo=()=>p(on,{name:"slide-down"},()=>p("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Fo.displayName="SlideDownIcon";const $u=()=>p("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});$u.displayName="EmptyIcon";var Qb=C({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const t=qt(n,"info"),{info:s,items:a}=Gb(n);return()=>{var v,k,b;const{[_n.title]:o,[_n.type]:r,[_n.isEncrypted]:i=!1,[_n.cover]:c,[_n.excerpt]:u,[_n.sticky]:d}=t.value,m=s.value;return p("div",{class:"vp-article-wrapper"},p("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((v=e.cover)==null?void 0:v.call(e,{cover:c}))||(c?[p("img",{class:"vp-article-cover",src:Bn(c),loading:"lazy"}),p("meta",{property:"image",content:Bn(c)})]:[]),d?p(Cu):null,p(Cn,{to:n.path},()=>{var y;return((y=e.title)==null?void 0:y.call(e,{title:o,isEncrypted:i,type:r}))||p("header",{class:"vp-article-title"},[i?p(xu):null,r===Xc.slide?p(Iu):null,p("span",{property:"headline"},o)])}),((k=e.excerpt)==null?void 0:k.call(e,{excerpt:u}))||(u?p("div",{class:"vp-article-excerpt",innerHTML:u}):null),p("hr",{class:"vp-article-hr"}),((b=e.info)==null?void 0:b.call(e,{info:m}))||p(_u,{info:m,...a.value?{items:a.value}:{}})]))}}}),Zb=C({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let t;const s=pn(),a=W(""),o=B(()=>s.value.paginationLocales),r=B(()=>Math.ceil(n.total/n.perPage)),i=B(()=>!!r.value&&r.value!==1),c=B(()=>r.value<7?!1:n.current>4),u=B(()=>r.value<7?!1:n.current<r.value-3),d=B(()=>{const{current:k}=n;let b=1,y=r.value;const A=[];r.value>=7&&(k<=4&&k<r.value-3?(b=1,y=5):k>4&&k>=r.value-3?(y=r.value,b=r.value-4):r.value>7&&(b=k-2,y=k+2));for(let _=b;_<=y;_++)A.push(_);return A}),m=k=>e("updateCurrentPage",k),v=k=>{const b=parseInt(k);b<=r.value&&b>0?m(b):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/g,r.value.toString())}`)};return dn(()=>{t=new kh}),()=>p("div",{class:"vp-pagination"},i.value?p("nav",{class:"vp-pagination-list"},[p("div",{class:"vp-pagination-number "},[n.current>1?p("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>m(n.current-1)},o.value.prev):null,c.value?[p("div",{role:"navigation",onClick:()=>m(1)},1),p("div",{class:"ellipsis"},"...")]:null,d.value.map(k=>p("div",{key:k,class:{active:n.current===k},role:"navigation",onClick:()=>m(k)},k)),u.value?[p("div",{class:"ellipsis"},"..."),p("div",{role:"navigation",onClick:()=>m(r.value)},r.value)]:null,n.current<r.value?p("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>m(n.current+1)},o.value.next):null]),p("div",{class:"vp-pagination-nav"},[p("label",{for:"navigation-text"},`${o.value.navigate}: `),p("input",{id:"navigation-text",value:a.value,onInput:({target:k})=>{a.value=k.value},onKeydown:k=>{k.key==="Enter"&&(k.preventDefault(),v(a.value))}}),p("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>v(a.value)},o.value.action)])]):[])}}),Hr=C({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=Se(),t=Zn(),s=Ts(),a=W(1),o=B(()=>s.value.articlePerPage||10),r=B(()=>n.items.slice((a.value-1)*o.value,a.value*o.value)),i=async c=>{a.value=c;const u={...e.query};!(u.page===c.toString()||c===1&&!u.page)&&(c===1?delete u.page:u.page=c.toString(),await t.push({path:e.path,query:u}))};return dn(()=>{const{page:c}=e.query;i(c?Number(c):1),un(a,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>p("div",{id:"article-list",class:"vp-article-list",role:"feed"},r.value.length?[...r.value.map(({info:c,path:u},d)=>p(kn,{appear:!0,delay:d*.04},()=>p(Qb,{key:u,info:c,path:u}))),p(Zb,{current:a.value,perPage:o.value,total:n.items.length,onUpdateCurrentPage:i})]:p($u))}}),Uu=C({name:"CategoryList",setup(){const n=bn(),e=Rs();return()=>p("ul",{class:"vp-category-list"},rt(e.value.map).sort(([,t],[,s])=>s.items.length-t.items.length).map(([t,{path:s,items:a}])=>p("li",{class:["vp-category",`vp-category${xa(t,9)}`,{active:s===n.value.path}]},p(Cn,{to:s},()=>[t,p("span",{class:"count"},a.length)]))))}}),Hu=C({name:"TagList",setup(){const n=yn(),e=Is(),t=s=>{var a;return s===((a=n.value.blog)==null?void 0:a.name)};return()=>p("ul",{class:"tag-list-wrapper"},rt(e.value.map).sort(([,s],[,a])=>a.items.length-s.items.length).map(([s,{path:a,items:o}])=>p("li",{class:["tag",`tag${xa(s,9)}`,{active:t(s)}]},p(Cn,{to:a},()=>[s,p("span",{class:"tag-num"},o.length)]))))}}),Jb=C({name:"TimelineList",setup(){const n=pn(),e=Fr(),t=Os(),s=B(()=>n.value.blogLocales.timeline);return()=>p("div",{class:"timeline-list-wrapper"},[p("div",{class:"timeline-list-title",onClick:()=>t(e.value.path)},[p(Ur),p("span",{class:"num"},e.value.items.length),s.value]),p("hr"),p("div",{class:"timeline-content"},p("ul",{class:"timeline-list"},e.value.config.map(({year:a,items:o},r)=>p(kn,{appear:!0,delay:.08*(r+1)},()=>p("li",[p("h3",{class:"timeline-year"},a),p("ul",{class:"timeline-year-wrapper"},o.map(({date:i,info:c,path:u})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},i),p(Cn,{class:"timeline-title",to:u},()=>c[_n.title])])))])))))])}});const Yb={article:Ta,category:Mr,tag:$r,timeline:Ur};var Gu=C({name:"InfoList",setup(){const n=pn(),e=Cs(),t=Rs(),s=B(()=>ve(t.value.map).length),a=Vr(),o=Is(),r=B(()=>ve(o.value.map).length),i=Os(),c=W("article"),u=B(()=>n.value.blogLocales);return()=>p("div",{class:"vp-blog-infos"},[p("div",{class:"vp-blog-type-switcher"},rt(Yb).map(([d,m])=>p("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=d}},p("div",{class:["icon-wrapper",{active:c.value===d}],"aria-label":u.value[d],"data-balloon-pos":"up"},p(m))))),p(kn,()=>c.value==="article"?p("div",{class:"vp-star-article-wrapper"},[p("div",{class:"title",onClick:()=>i(e.value.path)},[p(Ta),p("span",{class:"num"},e.value.items.length),u.value.article]),p("hr"),a.value.items.length?p("ul",{class:"vp-star-articles"},a.value.items.map(({info:d,path:m},v)=>p(kn,{appear:!0,delay:.08*(v+1)},()=>p("li",{class:"vp-star-article"},p(Cn,{to:m},()=>d[_n.title]))))):p("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):c.value==="category"?p("div",{class:"vp-category-wrapper"},[s.value?[p("div",{class:"title",onClick:()=>i(t.value.path)},[p(Mr),p("span",{class:"num"},s.value),u.value.category]),p("hr"),p(kn,{delay:.04},()=>p(Uu))]:p("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):c.value==="tag"?p("div",{class:"vp-tag-wrapper"},[r.value?[p("div",{class:"title",onClick:()=>i(o.value.path)},[p($r),p("span",{class:"num"},r.value),u.value.tag]),p("hr"),p(kn,{delay:.04},()=>p(Hu))]:p("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):p(kn,()=>p(Jb)))])}}),Ia=C({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:t}=Ls();return()=>[p(Cr),p(Tr,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>p(Nr),...t.value?{sidebar:()=>p(Gu)}:{}})]}});const zu=()=>p("aside",{class:"vp-blog-info-wrapper"},[p(kn,()=>p(Nr)),p(kn,{delay:.04},()=>p(Gu))]);zu.displayName="InfoPanel";var Ca=zu,Xb=C({name:"BlogPage",setup(){const n=bn(),e=yn(),t=Rs(),s=Is();return()=>{const{key:a="",name:o=""}=e.value.blog||{},r=o?a==="category"?t.value.map[o].items:a==="tag"?s.value.map[o].items:[]:[];return p(Ia,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(kn,()=>a==="category"?p(Uu):a==="tag"?p(Hu):null),o?p(kn,{appear:!0,delay:.24},()=>p(Hr,{key:n.value.path,items:r})):null]),p(kn,{delay:.16},()=>p(Ca,{key:"blog"}))])))}}});const n8="//theme-hope-assets.vuejs.press/hero/default.jpg";var e8=C({name:"BlogHero",slots:Object,setup(n,{slots:e}){const t=yn(),s=Qt(),a=Pn(),o=B(()=>t.value.heroFullScreen??!1),r=B(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:m,heroImageStyle:v,tagline:k}=t.value;return{text:c??s.value.title??"Hello",image:u?Bn(u):null,imageDark:d?Bn(d):null,heroStyle:v,alt:m||c||"",tagline:k??"",isFullScreen:o.value}}),i=B(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:d}=t.value;return{image:fn(c)?Bn(c):c===!1?null:n8,imageDark:fn(u)?Bn(u):null,bgStyle:d,isFullScreen:o.value}});return()=>{var c,u;return t.value.hero===!1?null:p("div",{ref:a,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!i.value.image}]},[((c=e.heroBg)==null?void 0:c.call(e,i.value))||[i.value.image?p("div",{class:["vp-blog-mask",{light:i.value.imageDark}],style:[{background:`url(${i.value.image}) center/cover no-repeat`},i.value.bgStyle]}):null,i.value.imageDark?p("div",{class:"vp-blog-mask dark",style:[{background:`url(${i.value.imageDark}) center/cover no-repeat`},i.value.bgStyle]}):null],((u=e.heroInfo)==null?void 0:u.call(e,r.value))||[p(kn,{appear:!0,type:"group",delay:.04},()=>[r.value.image?p("img",{key:"light",class:["vp-blog-hero-image",{light:r.value.imageDark}],style:r.value.heroStyle,src:r.value.image,alt:r.value.alt}):null,r.value.imageDark?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:r.value.heroStyle,src:r.value.imageDark,alt:r.value.alt}):null]),p(kn,{appear:!0,delay:.08},()=>r.value.text?p("h1",{class:"vp-blog-hero-title"},r.value.text):null),p(kn,{appear:!0,delay:.12},()=>r.value.tagline?p("p",{class:"vp-blog-hero-description",innerHTML:r.value.tagline}):null)],r.value.isFullScreen?p("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[p(Fo),p(Fo)]):null])}}});const t8=["link","article","book","project","friend"];var s8=C({name:"ProjectPanel",components:{ArticleIcon:Ta,BookIcon:Vu,FriendIcon:Mu,LinkIcon:Fu,ProjectIcon:Nu},props:{items:{type:Array,required:!0}},setup(n){const e=_t(),t=Os(),s=(a="",o="icon")=>t8.includes(a)?p(oe(`${a}-icon`)):He(a)?p("img",{class:"vp-project-image",src:a,alt:o}):Pa(a)?p("img",{class:"vp-project-image",src:Bn(a),alt:o}):p(jn,{icon:a});return()=>p("div",{class:"vp-project-panel"},n.items.map(({icon:a,link:o,name:r,desc:i},c)=>p("div",{class:["vp-project-card",{[`project${c%9}`]:!e.value}],onClick:()=>t(o)},[s(a,r),p("div",{class:"vp-project-name"},r),p("div",{class:"vp-project-desc"},i)])))}}),a8=C({name:"BlogHome",setup(){const n=Cs(),e=yn(),t=B(()=>e.value.projects??[]);return()=>p("div",{class:"vp-page vp-blog"},[p(e8),p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[t.value.length?p(kn,{appear:!0,delay:.16},()=>p(s8,{items:t.value})):null,p(kn,{appear:!0,delay:.24},()=>p(Hr,{items:n.value.items}))]),p(kn,{appear:!0,delay:.16},()=>p(Ca,{key:"blog"}))]),p(kn,{appear:!0,delay:.28},()=>p(Ir))])}});const Ku=()=>p(Ia,()=>p(a8));Ku.displayName="BlogHomeLayout";var o8=Ku,r8=C({name:"ArticleType",setup(){const n=bn(),e=Ge(),t=pn(),s=Cs(),a=Vr(),o=B(()=>{const r=t.value.blogLocales;return[{text:r.all,path:s.value.path},{text:r.star,path:a.value.path},...Vb.map(({key:i,path:c})=>({text:r[i],path:c.replace(/^\//,e.value)}))]});return()=>p("ul",{class:"vp-article-type-wrapper"},o.value.map(r=>p("li",{class:["vp-article-type",{active:r.path===n.value.path}]},p(Cn,{to:r.path},()=>r.text))))}}),l8=C({name:"BlogPage",setup(){const n=Ra(),e=yn(),t=bn(),s=Cs(),a=Vr(),o=B(()=>{const{key:r="",type:i}=e.value.blog||{};return r==="star"?a.value.items:i==="type"&&r?n.value.items:s.value.items});return()=>p(Ia,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(kn,()=>p(r8)),p(kn,{appear:!0,delay:.24},()=>p(Hr,{key:t.value.path,items:o.value}))]),p(kn,{delay:.16},()=>p(Ca,{key:"blog"}))])))}}),p8=C({name:"TimelineItems",setup(){const n=Ts(),e=pn(),t=Fr(),s=B(()=>n.value.timeline||e.value.blogLocales.timelineTitle),a=B(()=>t.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>p("div",{class:"timeline-wrapper"},p("ul",{class:"timeline-content"},[p(kn,()=>p("li",{class:"motto"},s.value)),p(yu,{items:a.value}),t.value.config.map(({year:o,items:r},i)=>p(kn,{appear:!0,delay:.08*(i+1),type:"group"},()=>[p("h3",{key:"title",id:o,class:"timeline-year-title"},p("span",o)),p("li",{key:"content",class:"timeline-year-list"},[p("ul",{class:"timeline-year-wrapper"},r.map(({date:c,info:u,path:d})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},c),p(Cn,{class:"timeline-title",to:d},()=>u[_n.title])])))])]))]))}});const ju=()=>p(Ia,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(kn,{appear:!0,delay:.24},()=>p(p8))]),p(kn,{delay:.16},()=>p(Ca,{key:"blog"}))])));ju.displayName="Timeline";var i8=ju;gv(n=>{const e=n.t,t=n.I!==!1,s=n.i;return t?{title:e,content:s?()=>[p(jn,{icon:s}),e]:null,order:n.O,index:n.I}:null});const c8=ke({enhance:({app:n,router:e})=>{const{scrollBehavior:t}=e.options;e.options.scrollBehavior=async(...s)=>(await Au().wait(),t(...s)),Rf(n),n.component("HopeIcon",jn),n.component("VPLink",Cn),n.component("BloggerInfo",Nr)},setup:()=>{Tf(),Vf(),Wb()},layouts:{Layout:xb,NotFound:Lb,BlogCategory:Xb,BlogHome:o8,BlogType:l8,Timeline:i8}});var u8=([n,e,t])=>n==="meta"&&e.name?`${n}.${e.name}`:["title","base"].includes(n)?n:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,e,t]),d8=n=>{const e=new Set,t=[];return n.forEach(s=>{const a=u8(s);e.has(a)||(e.add(a),t.push(s))}),t},m8=(n,e)=>{const t=Object.keys(n).sort((s,a)=>{const o=a.split("/").length-s.split("/").length;return o!==0?o:a.length-s.length});for(const s of t)if(e.startsWith(s))return s;return"/"},h8=$e({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),v8=W(xi);W(Oi);var k8="Layout",f8="NotFound";Wt({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageData:async n=>{const e=v8.value[n];return await(e==null?void 0:e())??h8},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,t)=>{const s=In(e.description)?e.description:t.description,a=[...nn(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:s}]];return d8(a)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||"en-US",resolvePageLayout:(n,e)=>{let t;if(n.path){const s=n.frontmatter.layout;In(s)?t=s:t=k8}else t=f8;return e[t]},resolveRouteLocale:(n,e)=>m8(n,e),resolveSiteLocaleData:(n,e)=>({...n,...n.locales[e]})});var b8=(n={})=>n;const E8=b8({enhance:()=>{let n=document.createElement("script");n.async=!0,n.src="https://analytics.umami.is/script.js",n.setAttribute("data-website-id","eecd3f56-5668-4c9e-b123-b2853b91a310"),document.body.appendChild(n)}});yk({setup:async()=>{await l(()=>import("./index-EhVijJ_X.js"),__vite__mapDeps([409,405]))}});const g8={},Js=[K0,dv,Ev,wv,Ov,Tv,Nv,jv,Yv,$k,Jk,_f,c8,E8,g8],_8=[["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/README.md"]],["v-28f7b2e8","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/001-PyQt%E4%BB%8B%E7%BB%8D%E4%B8%8E%E5%AE%89%E8%A3%85.html",{d:1698580921e3,e:`
<h2>一、介绍</h2>
<h3>1. Qt</h3>
<figure><figcaption>Qt 是什么</figcaption></figure>
<p>Qt（官方发音 <code>[kju:t]</code>）是一个跨平台的C++开发库，主要用来开发图形用户界面（Graphical User Interface，GUI）程序</p>
<p>Qt 是纯 C++ 开发的，正常情况下需要先学习C语言、然后在学习C++然后才能使用Qt开发带界面的程序</p>
<p>多亏了开源社区使得<strong>Qt 还可以用Python、Ruby、Perl 等脚本语言进行开发。</strong></p>`,r:{minutes:2.75,words:824},y:"a",t:"001-PyQt介绍与安装"},["/PyQt5快速上手-王铭东/001-PyQt介绍与安装.html","/PyQt5快速上手-王铭东/001-PyQt介绍与安装.md",":md"]],["v-736cf379","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/002-PyQt%E5%9F%BA%E6%9C%ACUI.html",{d:1698580921e3,e:`
<h2>一、第一个PyQt程序</h2>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QWidget

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 设置窗口标题</span>
    w<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">"第一个PyQt"</span><span class="token punctuation">)</span>

    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 程序进行循环等待状态</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:3.42,words:1027},y:"a",t:"002-PyQt基本UI"},["/PyQt5快速上手-王铭东/002-PyQt基本UI.html","/PyQt5快速上手-王铭东/002-PyQt基本UI.md",":md"]],["v-548167c6","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/003-%E5%B8%83%E5%B1%80.html",{d:1698580921e3,e:`
<p>在Qt里面布局分为四个大类 ：</p>
<ul>
<li>QBoxLayout</li>
<li>QGridLayout</li>
<li>QFormLayout</li>
<li>QStackedLayout</li>
</ul>
<h2>一、QBoxLayout</h2>
<p>直译为：盒子布局</p>
<p>一般使用它的两个子类<code>QHBoxLayout</code>  和  <code>QVBoxLayout</code> 负责水平和垂直布局</p>
<p>垂直布局示例：</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QVBoxLayout<span class="token punctuation">,</span> QWidget<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QGroupBox<span class="token punctuation">,</span> QMainWindow
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> Qt


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 切记一定要调用父类的__init__方法，因为它里面有很多对UI空间的初始化操作</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 设置大小</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token comment"># 设置标题</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">"垂直布局"</span><span class="token punctuation">)</span>

        <span class="token comment"># 垂直布局</span>
        layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 作用是在布局器中增加一个伸缩量，里面的参数表示QSpacerItem的个数，默认值为零</span>
        <span class="token comment"># 会将你放在layout中的空间压缩成默认的大小</span>
        <span class="token comment"># 下面的笔试1：1：1：2</span>
        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 按钮1</span>
        btn1 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">"按钮1"</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到布局器中</span>
        <span class="token comment"># layout.addWidget(btn1, Qt.AlignmentFlag.AlignTop)</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn1<span class="token punctuation">)</span>

        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 按钮2</span>
        btn2 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">"按钮2"</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到布局器</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn2<span class="token punctuation">)</span>

        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 按钮3</span>
        btn3 <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">"按钮3"</span><span class="token punctuation">)</span>
        <span class="token comment"># 添加到布局器</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>btn3<span class="token punctuation">)</span>

        layout<span class="token punctuation">.</span>addStretch<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>layout<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    <span class="token comment"># 创建一个QWidget子类</span>
    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:2.53,words:759},y:"a",t:"003-布局"},["/PyQt5快速上手-王铭东/003-布局.html","/PyQt5快速上手-王铭东/003-布局.md",":md"]],["v-30bf7f7c","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/004-%E5%B8%83%E5%B1%802.html",{d:1698580921e3,e:`
<h2>一、QFormLayout</h2>
<p>一般适用于提交数据<strong>form表单</strong>。比如： 登录，注册类似的场景</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> Qt
<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QVBoxLayout<span class="token punctuation">,</span> QFormLayout<span class="token punctuation">,</span> QLineEdit<span class="token punctuation">,</span> QPushButton<span class="token punctuation">,</span> QApplication<span class="token punctuation">,</span> QWidget


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 设定当前Widget的宽高(可以拉伸大小)</span>
        <span class="token comment"># self.resize(300, 200)</span>
        <span class="token comment"># 禁止改变宽高（不可以拉伸）</span>
        self<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>

        <span class="token comment"># 外层容器</span>
        container <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 表单容器</span>
        form_layout <span class="token operator">=</span> QFormLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 创建1个输入框</span>
        edit <span class="token operator">=</span> QLineEdit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        edit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">"请输入账号"</span><span class="token punctuation">)</span>
        form_layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">"账号："</span><span class="token punctuation">,</span> edit<span class="token punctuation">)</span>

        <span class="token comment"># 创建另外1个输入框</span>
        edit2 <span class="token operator">=</span> QLineEdit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        edit2<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">"请输入密码"</span><span class="token punctuation">)</span>
        form_layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">"密码："</span><span class="token punctuation">,</span> edit2<span class="token punctuation">)</span>

        <span class="token comment"># 将from_layout添加到垂直布局器中</span>
        container<span class="token punctuation">.</span>addLayout<span class="token punctuation">(</span>form_layout<span class="token punctuation">)</span>

        <span class="token comment"># 按钮</span>
        login_btn <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">"登录"</span><span class="token punctuation">)</span>
        login_btn<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

        <span class="token comment"># 把按钮添加到容器中，并且指定它的对齐方式</span>
        container<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>login_btn<span class="token punctuation">,</span> alignment<span class="token operator">=</span>Qt<span class="token punctuation">.</span>AlignRight<span class="token punctuation">)</span>

        <span class="token comment"># 设置当前Widget的布局器，从而显示这个布局器中的子控件</span>
        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>container<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:2.01,words:603},y:"a",t:"004-布局2"},["/PyQt5快速上手-王铭东/004-布局2.html","/PyQt5快速上手-王铭东/004-布局2.md",":md"]],["v-48858f42","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/005-%E7%AA%97%E5%8F%A3.html",{d:1698580921e3,e:`
<h2>一、分类</h2>
<p>在Qt中，生成窗口有三种方式：  <code>QWidget</code>  |  <code>QMainWindow</code> | <code>QDialog</code></p>
<h3>1. QWidget</h3>
<p>控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域</p>
<h3>2. QMainWindow</h3>
<p>是<code> QWidget</code>的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域</p>
<h3>3. QDialog</h3>
<p>对话框窗口的基类</p>`,r:{minutes:1.66,words:498},y:"a",t:"005-窗口"},["/PyQt5快速上手-王铭东/005-窗口.html","/PyQt5快速上手-王铭东/005-窗口.md",":md"]],["v-6c1110d1","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/006-%E4%BF%A1%E5%8F%B7%E4%B8%8E%E6%A7%BD.html",{d:1698580921e3,e:`
<h2>一、说明</h2>
<p><code>信号</code>和<code>槽</code>是 Qt的核心内容</p>
<h3>1. 信号(signal)</h3>
<p>其实就是事件（按钮点击 、内容发生改变 、窗口的关闭事件） 或者是 状态 （check选中了， togglebutton 切换。）</p>
<p>当程序触发了某种状态或者发生了某种事件（比如：按钮被点击了, 内容改变等等），那么即可发射出来一个<code>信号</code>。</p>
<h3>2. 槽( slot)</h3>
<p>若想捕获这个信号，然后执行相应的逻辑代码，那么就需要使用到 <code>槽</code> ， <code>槽</code>实际上是一个函数， 当<code>信号</code>发射出来后，会执行与之绑定的<code>槽</code>函数</p>`,r:{minutes:3.25,words:976},y:"a",t:"006-信号与槽"},["/PyQt5快速上手-王铭东/006-信号与槽.html","/PyQt5快速上手-王铭东/006-信号与槽.md",":md"]],["v-2db1247c","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/007-Qt%20Designer.html",{d:1698580921e3,e:`
<h2>一、介绍</h2>
<p>纯靠代码来编写界面，效率属实是有点底，今天我们用另外一个辅助设计图形化的软件 <code>QT Designer</code></p>
<h3>1. 下载</h3>
<p>Mac版本：[http://download.codetutor.top/software/Mac/Qt%20Designer.dmg](http://download.codetutor.top/software/Mac/Qt Designer.dmg)</p>
<p>Windows版本：[http://download.codetutor.top/software/win/Qt Designer Setup.exe](http://download.codetutor.top/software/win/Qt Designer Setup.exe)</p>`,r:{minutes:2.98,words:895},y:"a",t:"007-Qt Designer"},["/PyQt5快速上手-王铭东/007-Qt Designer.html","/PyQt5快速上手-王铭东/007-Qt Designer.md",":md"]],["v-580a4400","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/008-PyQt%E5%A4%9A%E7%BA%BF%E7%A8%8B.html",{d:1698580921e3,e:`
<h2>1. 引入</h2>
<p>将上一节课讲解的最后一个FeiQQ登录的按钮，适当修改代码，详细如下</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">import</span> time

<span class="token keyword">from</span> PyQt5<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> PyQt5 <span class="token keyword">import</span> uic


<span class="token keyword">class</span> <span class="token class-name">MyWindow</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>init_ui<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_ui</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>ui <span class="token operator">=</span> uic<span class="token punctuation">.</span>loadUi<span class="token punctuation">(</span><span class="token string">"./login.ui"</span><span class="token punctuation">)</span>
        <span class="token comment"># print(self.ui.__dict__)  # 查看ui文件中有哪些控件</span>

        <span class="token comment"># 提取要操作的控件</span>
        self<span class="token punctuation">.</span>user_name_qwidget <span class="token operator">=</span> self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>lineEdit  <span class="token comment"># 用户名输入框</span>
        self<span class="token punctuation">.</span>password_qwidget <span class="token operator">=</span> self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>lineEdit_2  <span class="token comment"># 密码输入框</span>
        self<span class="token punctuation">.</span>login_btn <span class="token operator">=</span> self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>pushButton  <span class="token comment"># 登录按钮</span>
        self<span class="token punctuation">.</span>forget_password_btn <span class="token operator">=</span> self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>pushButton_2  <span class="token comment"># 忘记密码按钮</span>
        self<span class="token punctuation">.</span>textBrowser <span class="token operator">=</span> self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>textBrowser  <span class="token comment"># 文本显示区域</span>

        <span class="token comment"># 绑定信号与槽函数</span>
        self<span class="token punctuation">.</span>login_btn<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>login<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""登录按钮的槽函数"""</span>
        user_name <span class="token operator">=</span> self<span class="token punctuation">.</span>user_name_qwidget<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
        password <span class="token operator">=</span> self<span class="token punctuation">.</span>password_qwidget<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正在登录服务器....%d"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> user_name <span class="token operator">==</span> <span class="token string">"admin"</span> <span class="token keyword">and</span> password <span class="token operator">==</span> <span class="token string">"123456"</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>textBrowser<span class="token punctuation">.</span>setText<span class="token punctuation">(</span><span class="token string">"欢迎%s"</span> <span class="token operator">%</span> user_name<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>textBrowser<span class="token punctuation">.</span>repaint<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>textBrowser<span class="token punctuation">.</span>setText<span class="token punctuation">(</span><span class="token string">"用户名或密码错误....请重试"</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>textBrowser<span class="token punctuation">.</span>repaint<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

    w <span class="token operator">=</span> MyWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 展示窗口</span>
    w<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:2.17,words:652},y:"a",t:"008-PyQt多线程"},["/PyQt5快速上手-王铭东/008-PyQt多线程.html","/PyQt5快速上手-王铭东/008-PyQt多线程.md",":md"]],["v-c47f0884","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/009-%E6%89%93%E5%8C%85%E4%B8%BA%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F.html",{d:1698580921e3,e:`
<h2>方式1：使用pyinstaller发布(推荐)</h2>
<h4>1. 安装</h4>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre></div><h4>2. 终端运行</h4>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>pyinstaller --windowed --onefile --clean --noconfirm main.py
pyinstaller --windowed --onefile --clean --noconfirm main.spec
</code></pre></div>`,r:{minutes:.98,words:294},y:"a",t:"009-Mac下，发布PyQT为app程序"},["/PyQt5快速上手-王铭东/009-打包为可执行程序.html","/PyQt5快速上手-王铭东/009-打包为可执行程序.md",":md"]],["v-fd1808c0","/about/friend.html",{d:1699861302e3,e:`
<h3>一个模板</h3>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>&lt;VPCard
  title="运维开发绿皮书"
  desc="放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重<span class="token tag">!</span>"
  logo="https<span class="token punctuation">:</span>//www.geekery.cn/logo.svg"
  link="https<span class="token punctuation">:</span>//www.geekery.cn/"
  background="rgba(253<span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> 0.15)"
/<span class="token punctuation">&gt;</span>

<span class="token comment"># 友链申请 https://www.geekery.cn/about/friend.html</span>
</code></pre></div>`,r:{minutes:1.52,words:457},y:"a",t:"友情链接"},[":md"]],["v-513bdf66","/about/me.html",{d:1699861302e3,e:`

`,r:{minutes:.8,words:240},y:"a",t:"我"},[":md"]],["v-5491f884","/note-book/",{d:1691939318e3,c:["笔记"],e:`
<h1>写在最前面的</h1>
<blockquote>
<p>如果你对我的文档有什么看法或者想把自己的文档加进来一起编辑，请点击左上角的编辑此页面编辑，可以在代码仓库直接修改，由作者审核后公布。
本网站使用 git 工具管理的<strong>分布式</strong>笔记，不必担心数据丢失，欢迎各位大佬添加自己的笔记到分布式仓库！！ 顺手可以点一下 <a href="https://gitee.com/PaperDragon/note-book/star" target="_blank" rel="noopener noreferrer">star⭐</a>，这个是对作者的支持！</p>
</blockquote>`,r:{minutes:1.97,words:592},y:"a",t:"笔记",i:"laptop-code"},["/note-book/README.md"]],["v-2776dc09","/note-book/%E6%9D%80%E4%B8%8D%E6%AD%BB%E7%9A%84%E8%BF%9B%E7%A8%8B.html",{d:1688688e6,l:"2023年7月7日",c:"网络安全",e:`
<h2>架构图</h2>
<figure><figcaption>无标题</figcaption></figure>
<h2>从概念上分析</h2>
<blockquote>
<p>概念阐述：</p>
<p>如图所示，该架构的巧妙之处在于永远不会死掉的进程，却又是永远会自杀（自动消失）的进程，来无影去无踪</p>
<p>首先听我讲给你讲一个故事：</p>
<p>​     有个老父亲，是个农民（famer），性格非常平庸，能力极强，但是却不作为，一生只为了孩子，一心只想让他的孩子有所作为，他说”平平淡淡才是真“，他具有修仙小说里那种具有通灵的能力的魔法师，能够召唤一个灵魂与自己作战。这个灵魂至少能发挥自己实力的一半，这个灵魂的名字是（beggar）。他祖上跟上位面大族有些交情，但也因为祖上的交情，结实了非常多的仇家。他曾经有两个孩子，但是后来因为祖上继承仇恨的缘故被仇家杀害。父亲伤心欲绝，这是他的亲生骨肉啊！从此祖上继承下来的仇恨已经坐实了，他决心报仇雪恨。</p>
<p>​    他觉得自己的人生就止步于次了，放弃了所有准备去自杀，路上遇到一个算卦的。算卦的说他气运是人族的极品，不要让他去自杀，背负着人族的未来。他那时只当时玩笑话。于是算卦的给予了这个老父亲一身法器，给老父亲传授傀儡之术，掌握时间仙术，不过算卦的告诉他，尽量不要使用时间法术进行时间逆流，尽量少的使用复活大法，是要遭到上天嫉妒的，防止被位面法则发现，否则后果自负。</p>
<p>​    于是他苦修23年，终于将傀儡之术，复活大法等的仙级仙法练至大成，同样也将通灵法术炼制达成，他先将自己日夜思念的两个孩子使用法术复活。可是这个老父亲感觉到了上天的嫉妒，上天让他的孩子气运减少，或者具有自杀心态，可是他的法术仅仅是大成，没有全部熟练，没有与上天对抗的能力。</p>
<p>​ 时代的变迁与近现代车轮的旋转碾碎了修仙时代。那个时代一去不复返，因为这个老父亲心愿未了，甘愿放下巨额赌注，与上天作对赌，因为对时间的造诣已经是炉火纯青，他愿向上天再借500年。</p>
<p>​    一次次对他孩子的的复活失败，他也掌握了一定的规律，死去的人是不可能复活的，这与大位面法则相悖。</p>
<p>​ 他有一个男孩一个女孩，其中男孩做了博士（Doctor），工作之后竟然是测试岗位，天天（每个生命周期）重复着这样的工作，一旦出现奇奇怪怪的结果（与理论有差别），他就会想尽一切办法去修正实验的结果，最终寿归正寝。另外一个孩子是个女孩，学术层次上没什么造诣，却非常喜欢贪玩，天天想着给别人捣乱（customer command），因为他继承了父亲（famer）聪明的才智，从来没有被抓到过，却惹得别人（user）讨厌，她的职业是啦啦队队员。因为圈内乱象横生，而她天生美丽，经常被其他的啦啦队队员嫉妒，甚至性骚扰，一旦她做的坏事被发现，就会启动自杀机制，她把事情的原由打电话告诉父亲之后，从天台一跃而下（主动自杀）。</p>
<p>​ 老父亲这时叹了一口气，因为这是她不知道接到多少个女儿自杀的电话了。也使用非常多次的重生打法去复活他的女儿。对于他的儿子，他还是比女儿复活的更成功的，虽然气运很差，但是总会都是寿归正寝。</p>
<p>​ 老父亲只能默默承受着仇家的反对和上天的嫉妒。</p>
<p>故事讲完了！灵感来源于生活，生态和生命，你理解了吗？下面我会详细讲解</p>
<p>架构的特点是，各组件所担任的角色会自杀，然后从操作系统中消失，难以追踪。有自愈机制，孩子被杀死（自杀或者故意杀害）之后，父亲经过一段时间的发育，会自动产生下一代。父亲与他的影子组件beggar，形影不离，互相可为下一代。</p>
<p>从宏观角度来讲，该程序具有完成的两个闭环生态，分为大外环和小内环，几个组件交替完成生命周期。</p>
<ul>
<li>大外环： 正常的生育和自杀，完成生命周期</li>
<li>小内环： 两个影子父亲互相取代对方。完成老父亲的生命周期</li>
</ul>
<p>从微观角度来讲，这个架构一共有5个元素和一些操作组成，各组件产生下一代，执行任务，然后完成自杀。</p>
<p>crontab： 系统定时服务</p>
<p>cheerleading:  该程序主要实现在系统中执行某个程序；使命完成或未完成后后将会产生自杀心态，将心态告诉父亲（famer）之后；完成自杀。</p>
<p>famer:  生孩子，不停的生；哪个死了生哪个，不顾一起维护孩子的生命健康；通灵，自己和灵魂可以合为一体，互相继承。</p>
<p>Doctor: 维护生命轮回，防止下一个轮回不生效，启动自然死亡状态</p>
<p>beggar: 通灵术，与famer共同施展，互相医治，相濡以沫。</p>
</blockquote>`,r:{minutes:8.06,words:2419},y:"a",t:"杀不死的进程",i:"computer"},["/note-book/杀不死的进程.html","/note-book/杀不死的进程.md",":md"]],["v-d440f426","/tools/",{y:"p",t:"工具集合",i:"splotch"},["/tools/README.md"]],["v-b3591580","/tools/WARP%E5%B8%AE%E5%8A%A9%E9%A1%B5%E9%9D%A2.html",{y:"p",t:"WARP帮助页面",i:"splotch"},["/tools/WARP帮助页面.html","/tools/WARP帮助页面.md",":md"]],["v-50c35cc8","/note-book/AI-Training/Windows_WSL2%E5%AE%89%E8%A3%85nvidia-cuda%E9%A9%B1%E5%8A%A8.html",{d:1705891627e3,e:`
<blockquote>
<p>部分资料来自： https://www.bilibili.com/read/cv14608547/</p>
<p>感谢作者： https://space.bilibili.com/157323585</p>
</blockquote>
<h2>安装WSL2</h2>
<p>这一步可以参考Windows官网，以及其他B站UP主的安装教程，贴两个链接（一定要装WSL2）。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>https://learn.microsoft.com/zh-cn/windows/wsl/install
</code></pre></div>`,r:{minutes:1.95,words:585},y:"a",t:"Windows10/11 WSL2 安装nvidia-cuda驱动"},["/note-book/AI-Training/Windows_WSL2安装nvidia-cuda驱动.html","/note-book/AI-Training/Windows_WSL2安装nvidia-cuda驱动.md",":md"]],["v-01868d8e","/note-book/AI-Training/torch%20%E7%8E%AF%E5%A2%83.html",{d:1691939318e3,e:`
<h1>安装Anaconda</h1>
<p>推荐直接上官网下载
<a href="https://www.anaconda.com/products/individual" target="_blank" rel="noopener noreferrer">https://www.anaconda.com/products/individua</a></p>
<h1>安装CUDA和cuDNN</h1>
<h2>安装显卡驱动</h2>
<p>首先需要下载和安装显卡驱动，进入下面网址选择合适的显卡驱动下载并按照提示安装。如果已安装此处略过。
<a href="https://www.nvidia.cn/geforce/drivers/" target="_blank" rel="noopener noreferrer">https://www.nvidia.cn/geforce/drivers/</a></p>`,r:{minutes:1.95,words:585},y:"a",t:"Torch部署"},["/note-book/AI-Training/torch 环境.html","/note-book/AI-Training/torch 环境.md",":md"]],["v-9ef1da18","/note-book/AI-Training/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%BC%80%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%92%8C%E9%97%AD%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98.html",{d:1699592127e3,e:`
<h2>起因</h2>
<p>今天朋友安装驱动遇到了一些问题，给了一张日志图片问我怎么办，我看着显示报错最后一行显示 PCI-E xxx.xxxx.xxx
nouveau。就是nvidia显卡驱动的问题八九不离十了。</p>
<p>nvidia给了不同类型的驱动多种版本，开源驱动对Linux支持较差，在切换闭源官方驱动的时候经常出现各种问题。</p>
<figure><figcaption>image-20231110113058910</figcaption></figure>
<p>下面是安装步骤的总结</p>
<h2>正常安装步骤</h2>
<h3>检查开源驱动的存在情况</h3>
<p>运行如下指令：</p>`,r:{minutes:1.47,words:440},y:"a",t:"英伟达开源驱动和闭源驱动冲突问题"},["/note-book/AI-Training/英伟达开源驱动和闭源驱动冲突问题.html","/note-book/AI-Training/英伟达开源驱动和闭源驱动冲突问题.md",":md"]],["v-0300e138","/note-book/Android/Ubuntu%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85Android%20SDK.html",{d:1691939318e3,e:`
<h2>安装步骤</h2>
<ol>
<li>
<p>新建 <strong>android-sdk</strong> 作为工作目录。</p>
</li>
<li>
<p>下载命令行工具 sdkmanager:</p>
<p><code>wget https://dl.google.com/android/repository/commandlinetools-linux-7302050_latest.zip</code></p>
</li>
<li>
<p>解压：</p>
<p><code>unzip commandlinetools-linux-7302050_latest.zip</code>，</p>
<p>进入目录如下所示</p>
</li>
<li>
<figure><figcaption>image-20230620102354072</figcaption></figure>
</li>
<li>
<p>进入 <strong>cmdline-tools</strong> 目录，执行 <code>./bin/sdkmanager</code> 报错 “Error: Could not deter mine SDK root.”</p>
</li>
<li>
<p>在当前目录新建 <strong>latest</strong> 目录，并将原 <strong>cmdline-tools</strong> 下的所有文件移至 <strong>latest</strong>下，操作如下：</p>
</li>
</ol>`,r:{minutes:.6,words:179},y:"a",t:"Ubuntu命令行安装Android SDK"},["/note-book/Android/Ubuntu命令行安装Android SDK.html","/note-book/Android/Ubuntu命令行安装Android SDK.md",":md"]],["v-a9b33774","/note-book/Btrfs/",{d:1691939318e3,e:`
<h2>Btrfs 简介</h2>
<p>文件系统似乎是内核中比较稳定的部分，多年来，人们一直使用 ext2/3，ext 文件系统以其卓越的稳定性成为了事实上的 Linux 标准文件系统。近年来 ext2/3  暴露出了一些扩展性问题，于是便催生了 ext4 。在 2008 年发布的 Linux2.6.19 内核中集成了 ext4 的 dev 版本。  2.6.28 内核发布时，ext4 结束了开发版，开始接受用户的使用。似乎 ext 就将成为 Linux 文件系统的代名词。然而当您阅读很多有关 ext4 的文章时，会发现都不约而同地提到了 btrfs，并认为 ext4 将是一个过渡的文件系统。 ext4 的作者 Theodore  Tso 也盛赞 btrfs 并认为 btrfs 将成为下一代 Linux 标准文件系统。 Oracle，IBM， Intel 等厂商也对  btrfs 表现出了极大的关注，投入了资金和人力。为什么 btrfs 如此受人瞩目呢。这便是本文首先想探讨的问题。</p>`,r:{minutes:24.2,words:7260},y:"a",t:"Linux 文件系统的未来 btrfs"},["/note-book/Btrfs/README.md"]],["v-1d16fbc1","/note-book/Btrfs/Snapper%E7%8E%A9%E8%BD%ACbtrfs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/31082518</p>
</blockquote>
<h2><strong>配置 snapper</strong></h2>
<p>在 Btrfs 中，snapper 是以子卷为单位管理快照的。我们要先为子卷建立配置文件才能管理快照。</p>
<p>这里我们不另外划分子卷，直接以 Btrfs 挂载点的根目录来进行操作（根目录也算是一个子卷）。</p>
<h3>4.1 创建配置文件</h3>
<p>命令基本用法</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>snapper -c &lt;配置名称&gt; create-config &lt;子卷路径&gt; 
</code></pre></div>`,r:{minutes:4.89,words:1467},y:"a",t:"Snapper玩转btrfs文件系统"},["/note-book/Btrfs/Snapper玩转btrfs文件系统.html","/note-book/Btrfs/Snapper玩转btrfs文件系统.md",":md"]],["v-47c36178","/note-book/Btrfs/btrfs%E7%9A%84%E4%BD%BF%E7%94%A8.html",{d:1691939318e3,e:`
<p>了解了 btrfs 的特性，想必您一定想亲身体验一下 btrfs 的使用。本章将简要介绍如何使用 btrfs 。</p>
<h2>创建文件系统</h2>
<p>mkfs.btrfs 命令建立一个 btrfs 格式的文件系统。可以用如下命令在设备 nvme0n2,nvme0n3上建立一个 btrfs 文件系统，并将其挂载到 /mnt 目录下：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs -f -L mydata /dev/nvme0n2 /dev/nvme0n3</span>
btrfs-progs v6.0
See http://btrfs.wiki.kernel.org <span class="token keyword">for</span> <span class="token function">more</span> information.

NOTE: several default settings have changed <span class="token keyword">in</span> version <span class="token number">5.15</span>, please <span class="token function">make</span> sure
      this does not affect your deployments:
      - DUP <span class="token keyword">for</span> metadata <span class="token punctuation">(</span>-m dup<span class="token punctuation">)</span>
      - enabled no-holes <span class="token punctuation">(</span>-O no-holes<span class="token punctuation">)</span>
      - enabled free-space-tree <span class="token punctuation">(</span>-R free-space-tree<span class="token punctuation">)</span>

Label:              mydata
UUID:               92aac6fd-d7c5-4ac3-9ba6-acbe13071611
Node size:          <span class="token number">16384</span>
Sector size:        <span class="token number">4096</span>
Filesystem size:    <span class="token number">40</span>.00GiB
Block group profiles:
  Data:             single            <span class="token number">8</span>.00MiB
  Metadata:         RAID1           <span class="token number">256</span>.00MiB
  System:           RAID1             <span class="token number">8</span>.00MiB
SSD detected:       <span class="token function">yes</span>
Zoned device:       no
Incompat features:  extref, skinny-metadata, no-holes
Runtime features:   free-space-tree
Checksum:           crc32c
Number of devices:  <span class="token number">2</span>
Devices:
   ID        SIZE  <span class="token environment constant">PATH</span>
    <span class="token number">1</span>    <span class="token number">20</span>.00GiB  /dev/nvme0n2
    <span class="token number">2</span>    <span class="token number">20</span>.00GiB  /dev/nvme0n3


<span class="token parameter variable">-f</span> 是 --force的意思
<span class="token parameter variable">-L</span> Labels

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs --help</span>
用法：mkfs.btrfs <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> dev <span class="token punctuation">[</span> dev <span class="token punctuation">..</span>. <span class="token punctuation">]</span>
选项：
   分配概况：
         -d<span class="token operator">|</span>--data PROFILE 数据配置文件，raid0, raid1, raid1c3, raid1c4, raid5, raid6, raid10, dup or single
         -m<span class="token operator">|</span>--metadata PROFILE 元数据配置文件，类似于数据配置文件的值
         -M<span class="token operator">|</span>--mixed 将元数据和数据混合在一起
   特征：
         <span class="token parameter variable">--csum</span> 类型
         <span class="token parameter variable">--checksum</span> TYPE 使用的校验和算法，crc32c（默认），xxhash，sha256，blake2
         -n<span class="token operator">|</span>--nodesize SIZE btree节点的大小
         -s<span class="token operator">|</span>--sectorsize SIZE 数据块大小（当前内核可能无法挂载）
         -O<span class="token operator">|</span>--features LIST 逗号分隔的文件系统功能列表（使用“-O list-all”列出功能）
         -R<span class="token operator">|</span>--runtime-features LIST 逗号分隔的运行时特性列表（使用“-R list-all”列出运行时特性）
         -L<span class="token operator">|</span>--label LABEL 设置文件系统标签
         -U<span class="token operator">|</span>--uuid UUID 指定文件系统的UUID（必须是唯一的）
   创建：
         -b<span class="token operator">|</span>--byte-count SIZE 将每个设备的大小设置为 SIZE（文件系统大小是所有设备大小的总和）
         -r<span class="token operator">|</span>--rootdir DIR 从DIR复制文件到镜像根目录
         <span class="token parameter variable">--shrink</span> <span class="token punctuation">(</span>with --rootdir<span class="token punctuation">)</span> 将填充的文件系统缩小到最小尺寸
         -K<span class="token operator">|</span>--nodiscard 不执行整个设备TRIM
         -f<span class="token operator">|</span>--force 强制覆盖现有文件系统
   一般的：
         -q<span class="token operator">|</span>--quiet 除错误外没有消息
         -v<span class="token operator">|</span>--verbose 增加详细级别，默认为1
         -V<span class="token operator">|</span>--version 打印 mkfs.btrfs 版本并退出
         <span class="token parameter variable">--help</span> 打印帮助并退出
   弃用：
         -l<span class="token operator">|</span>--leafsize SIZE 在 <span class="token number">6.0</span> 中移除，使用 <span class="token parameter variable">--nodesize</span>
<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs -O list-all</span>
可用的文件系统功能：
mixed-bg - 混合数据和元数据块组（compat<span class="token operator">=</span><span class="token number">2.6</span>.37，safe<span class="token operator">=</span><span class="token number">2.6</span>.37）
extref - 将每个文件的硬链接限制增加到 <span class="token number">65536</span>（compat<span class="token operator">=</span><span class="token number">3.7</span>，safe<span class="token operator">=</span><span class="token number">3.12</span>，默认<span class="token operator">=</span><span class="token number">3.12</span>）
raid56 - raid56 扩展格式 <span class="token punctuation">(</span>compat<span class="token operator">=</span><span class="token number">3.9</span><span class="token punctuation">)</span>
skinny-metadata - 减小大小的元数据范围 refs（compat<span class="token operator">=</span><span class="token number">3.10</span>，safe<span class="token operator">=</span><span class="token number">3.18</span>，default<span class="token operator">=</span><span class="token number">3.18</span>）
no-holes - 文件没有明确的洞范围（compat<span class="token operator">=</span><span class="token number">3.14</span>，safe<span class="token operator">=</span><span class="token number">4.0</span>，默认<span class="token operator">=</span><span class="token number">5.15</span>）
raid1c34 - 具有 <span class="token number">3</span> 或 <span class="token number">4</span> 个副本的 RAID1 <span class="token punctuation">(</span>compat<span class="token operator">=</span><span class="token number">5.5</span><span class="token punctuation">)</span>
zoned - 支持分区设备 <span class="token punctuation">(</span>compat<span class="token operator">=</span><span class="token number">5.12</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
Label: <span class="token string">'mydata'</span>  uuid: 92aac6fd-d7c5-4ac3-9ba6-acbe13071611
        Total devices <span class="token number">2</span> FS bytes used <span class="token number">144</span>.00KiB
        devid    <span class="token number">1</span> size <span class="token number">20</span>.00GiB used <span class="token number">272</span>.00MiB path /dev/nvme0n2
        devid    <span class="token number">2</span> size <span class="token number">20</span>.00GiB used <span class="token number">264</span>.00MiB path /dev/nvme0n3

<span class="token function">mount</span> <span class="token parameter variable">-t</span> btrfs /dev/nvme0n2 /mnt

<span class="token comment">#支持多种透明压缩机制</span>
  - zlib
  - lzo
  - zstd
<span class="token function">mount</span> <span class="token parameter variable">-t</span> btrfs <span class="token parameter variable">-o</span> <span class="token assign-left variable">compress</span><span class="token operator">=</span><span class="token operator">&lt;</span>type<span class="token punctuation">[</span>:level<span class="token punctuation">]</span><span class="token operator">&gt;</span>, compress-force, compress-force<span class="token operator">=</span><span class="token operator">&lt;</span>type<span class="token punctuation">[</span>:level<span class="token punctuation">]</span><span class="token operator">&gt;</span>

<span class="token comment">#If compression is enabled, nodatacow and nodatasum are disabled.</span>

<span class="token comment"># SSD支持</span>
用户可以使用 <span class="token function">mount</span> 参数打开 btrfs 针对 SSD 的优化。命令如下：
<span class="token function">mount</span> – t btrfs – o SSD /dev/sda5 /btrfsdisk

<span class="token comment">#同步文件系统</span>
为了提高效率，btrfs 的 IO 操作由一些内核线程异步处理。这使得用户对文件的操作并不会立即反应到磁盘上。您可以做一个实验，在 btrfs 上创建一个文件后，稍等 <span class="token number">5</span> 到 <span class="token number">10</span> 秒将系统电源切断，再次重启后，新建的文件并没有出现。
对于多数应用这并不是问题，但有些时候用户希望 IO 操作立即执行，此时就需要对文件系统进行同步。下面的 btrfs 命令用来同步文件系统：
btrfsctl –c /btrfsdisk
</code></pre></div>`,r:{minutes:12.08,words:3623},y:"a",t:"BTRFS 使用简介"},["/note-book/Btrfs/btrfs的使用.html","/note-book/Btrfs/btrfs的使用.md",":md"]],["v-2f2e2cf4","/note-book/Btrfs/some%20device%20missing%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`
<h2>问题原因：</h2>
<p>因为创建btrfs时使用了-f，所以硬盘被另一个btrfs抢走了，blkid改变</p>
<h2>问题描述</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
warning, device <span class="token number">2</span> is missing
warning, device <span class="token number">1</span> is missing
WARNING: could not setup csum tree, skipping it
Label: <span class="token string">'mydata'</span>  uuid: b2daf230-bd04-4ca5-ac2f-2b7c4a8f1ac4
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">256</span>.00KiB
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">144</span>.00MiB path /dev/nvme0n4
        *** Some devices missing

</code></pre></div>`,r:{minutes:.61,words:182},y:"a",t:"*** Some devices missing"},["/note-book/Btrfs/some device missing方法.html","/note-book/Btrfs/some device missing方法.md",":md"]],["v-cb5d9150","/note-book/CVE/CVE-2024-21626%E5%88%A9%E7%94%A8%E5%9C%BA%E6%99%AF.html",{d:1706774001e3,e:`
<h2>影响组件</h2>
<p>runc是一个根据OCI规范，在Linux上生成和运行容器的命令行工具。runc的使用非常灵活，可以与各种容器工具和平台集成，如Docker、Kubernetes等。它支持多种容器格式，包括OCI规范定义的标准格式，以及其他格式如Docker镜像格式。作为开源项目，runc受到全球开发者社区的广泛参与和贡献，被广泛应用于生产环境中的容器化部署。</p>
<h2>漏洞描述</h2>
<p>近日，奇安信CERT监测到runc官方发布安全通告修复了<strong>runc容器逃逸漏洞(CVE-2024-21626)</strong>，由于runc存在内部文件描述符泄露，本地攻击者可以通过多种方式进行容器逃逸：</p>`,r:{minutes:2.08,words:625},y:"a",t:"CVE-2024-21626 利用场景"},["/note-book/CVE/CVE-2024-21626利用场景.html","/note-book/CVE/CVE-2024-21626利用场景.md",":md"]],["v-4b450dee","/note-book/CoreDNS/",{d:1691939318e3,c:["CoreDNS"],r:{minutes:.03,words:9},y:"a",t:"CoreDNS",i:"laptop-code"},["/note-book/CoreDNS/README.md"]],["v-756d3903","/note-book/CoreDNS/ext-plugin-redis.html",{d:1691939318e3,e:`
<h2>Description</h2>
<p><em>redis</em> enables reading zone data from redis database.
this plugin should be located right next to <em>etcd</em> in <em>plugins.cfg</em></p>
<h2>Syntax</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>redis
</code></pre></div>`,r:{minutes:1.57,words:472},y:"a",t:"使用Redis插件"},[":md"]],["v-2ab375a4","/note-book/CoreDNS/%E7%90%86%E8%A7%A3CoreDNS.html",{d:1691939318e3,e:`
<h2>什么是CoreDNS【官方解释】</h2>
<p>CoreDNS 是一个 DNS 服务器。它是用<a href="https://golang.org/" target="_blank" rel="noopener noreferrer">Go</a>编写的。</p>
<p>CoreDNS 不同于其他 DNS 服务器，例如（所有优秀的） <a href="https://www.isc.org/bind/" target="_blank" rel="noopener noreferrer">BIND</a>、 <a href="https://www.knot-dns.cz/" target="_blank" rel="noopener noreferrer">Knot</a>、 <a href="https://www.powerdns.com/" target="_blank" rel="noopener noreferrer">PowerDNS</a>和 <a href="https://www.unbound.net/" target="_blank" rel="noopener noreferrer">Unbound</a>（技术上是解析器，但仍然值得一提），因为它非常灵活，几乎所有功能都外包到插件中。</p>`,r:{minutes:11.54,words:3462},y:"a",t:"理解CoreDNS"},["/note-book/CoreDNS/理解CoreDNS.html","/note-book/CoreDNS/理解CoreDNS.md",":md"]],["v-1aecc47a","/note-book/DNS/Bind9%E7%9A%84%E4%BD%BF%E7%94%A8.html",{d:1706422344e3,e:`
<p>CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述：</p>
<pre><code>Description : BIND (Berkeley Internet Name Domain) is an implementation of the DNS
            : (Domain Name System) protocols. BIND includes a DNS server (named),
            : which resolves host names to IP addresses; a resolver library
            : (routines for applications to use when interfacing with DNS); and
            : tools for verifying that the DNS server is operating properly.
</code></pre>`,r:{minutes:5.83,words:1748},y:"a",t:"Bind9安装和使用"},["/note-book/DNS/Bind9的使用.html","/note-book/DNS/Bind9的使用.md",":md"]],["v-6129517b","/note-book/DNS/NamedManager.html",{d:1706422344e3,e:`
<p>NamedManager 是一个基于Web的DNS管理系统，**可用来添加、调整和删除DNS的zones/records数据。**它使用Bind作为底层DNS服务，提供一个现代Ajax的Web界面，支持 IPv4和IPv6。该应用程序很稳定，在生产环境中使用没有任何问题。过多的介绍在此就不做说明了，下面说下NamedManager环境部署过程：</p>
<h2><strong>1）下载NamedManager的rpm安装包</strong></h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># hostname</span>
dns.kevin.cn
 
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># cat /etc/hosts</span>
<span class="token number">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
<span class="token number">192.168</span>.10.206 dns.kevin.cn
 
<span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># ifconfig |grep 192.168</span>
          inet addr:192.168.10.206  Bcast:192.168.10.255  Mask:255.255.255.0
 
<span class="token punctuation">[</span>root@dns named<span class="token punctuation">]</span><span class="token comment"># ping dns.kevin.cn</span>
PING dns.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.206<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from dns.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.206<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.027</span> ms
<span class="token number">64</span> bytes from dns.kevin.cn <span class="token punctuation">(</span><span class="token number">192.168</span>.10.206<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.043</span> ms
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
  
<span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/src/</span>
<span class="token punctuation">[</span>root@dns src<span class="token punctuation">]</span><span class="token comment"># wget http://repos.jethrocarr.com/pub/amberdms/linux/centos/6/amberdms-custom/i386/namedmanager-bind-1.8.0-1.el6.noarch.rpm</span>
<span class="token punctuation">[</span>root@dns src<span class="token punctuation">]</span><span class="token comment"># wget http://repos.jethrocarr.com/pub/amberdms/linux/centos/6/amberdms-custom/i386/namedmanager-www-1.8.0-1.el6.noarch.rpm</span>
  
<span class="token punctuation">[</span>root@dns src<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">1352</span>
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">109584</span> Dec <span class="token number">22</span>  <span class="token number">2013</span> namedmanager-bind-1.8.0-1.el6.noarch.rpm
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1270108</span> Dec <span class="token number">22</span>  <span class="token number">2013</span> namedmanager-www-1.8.0-1.el6.noarch.rpm
</code></pre></div>`,r:{minutes:8.28,words:2485},y:"a",t:"Linux下Bind9之Web管理-NamedManager部署"},[":md"]],["v-c388ee4c","/note-book/Docker/Docker%202375%E6%94%BB%E5%87%BB%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{d:1691939318e3,e:`
<p>相信了解过<a href="https://so.csdn.net/so/search?q=docker&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">docker</a> remote API的同学对2375端口都不陌生了，2375是docker远程操控的默认端口，通过这个端口可以直接对远程的docker daemon进行操作。</p>
<p>当$HOST主机以**<code>docker daemon -H=0.0.0.0:2375</code>**方式启动daemon时，可以在外部机器对 $HOST 的docker daemon进行直接操作：</p>`,r:{minutes:5.82,words:1747},y:"a",t:"2375攻击"},["/note-book/Docker/Docker 2375攻击和解决方案.html","/note-book/Docker/Docker 2375攻击和解决方案.md",":md"]],["v-2f710f9a","/note-book/Docker/Docker%20%E7%9A%84daemon.json.html",{d:1691939318e3,e:`
<h2>All</h2>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  #用一组新的注册表替换守护程序将向其推送不可分发工件的注册表集
  <span class="token property">"allow-nondistributable-artifacts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"api-cors-header"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #指定要使用的授权插件
  <span class="token property">"authorization-plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"bip"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #标志设置docker0为默认桥接网络
  <span class="token property">"bridge"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"cgroup-parent"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"cluster-advertise"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #使用新地址重新加载发现存储。
  <span class="token property">"cluster-store"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #使用新选项重新加载发现存储。
  <span class="token property">"cluster-store-opts"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"containerd"</span><span class="token operator">:</span> <span class="token string">"/run/containerd/containerd.sock"</span><span class="token punctuation">,</span>
  <span class="token property">"containerd-namespace"</span><span class="token operator">:</span> <span class="token string">"docker"</span><span class="token punctuation">,</span>
  <span class="token property">"containerd-plugin-namespace"</span><span class="token operator">:</span> <span class="token string">"docker-plugins"</span><span class="token punctuation">,</span>
  <span class="token property">"data-root"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #当设置为 <span class="token boolean">true</span> 时，它将守护程序更改为调试模式
  <span class="token property">"debug"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"default-address-pools"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"base"</span><span class="token operator">:</span> <span class="token string">"172.30.0.0/16"</span><span class="token punctuation">,</span>
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">24</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"base"</span><span class="token operator">:</span> <span class="token string">"172.31.0.0/16"</span><span class="token punctuation">,</span>
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">24</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"default-cgroupns-mode"</span><span class="token operator">:</span> <span class="token string">"private"</span><span class="token punctuation">,</span>
  <span class="token property">"default-gateway"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"default-gateway-v6"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"default-runtime"</span><span class="token operator">:</span> <span class="token string">"runc"</span><span class="token punctuation">,</span>
  <span class="token property">"default-shm-size"</span><span class="token operator">:</span> <span class="token string">"64M"</span><span class="token punctuation">,</span>
  <span class="token property">"default-ulimits"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"nofile"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"Hard"</span><span class="token operator">:</span> <span class="token number">64000</span><span class="token punctuation">,</span>
      <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"nofile"</span><span class="token punctuation">,</span>
      <span class="token property">"Soft"</span><span class="token operator">:</span> <span class="token number">64000</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  #设定容器DNS的地址，在容器的 /etc/resolv.conf文件中可查看
  <span class="token property">"dns"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"dns-opts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  #设定容器的搜索域
  <span class="token property">"dns-search"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"exec-opts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"exec-root"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"experimental"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #明确启用或禁用特定功能
  <span class="token property">"features"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"fixed-cidr"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"fixed-cidr-v6"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"group"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"hosts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"icc"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"init"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"init-path"</span><span class="token operator">:</span> <span class="token string">"/usr/libexec/docker-init"</span><span class="token punctuation">,</span>
  <span class="token property">"insecure-registries"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"ip-forward"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"ip-masq"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #阻止 Docker 守护进程添加 iptables 规则
  <span class="token property">"iptables"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"ip6tables"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"ipv6"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #docker主机的标签，很实用的功能<span class="token punctuation">,</span>例如定义：–label nodeName=host<span class="token number">-121</span>
  <span class="token property">"labels"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  #启用在守护进程停机期间保持容器活动
  <span class="token property">"live-restore"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  #Default driver for container logs (default <span class="token string">"json-file"</span>)
  <span class="token property">"log-driver"</span><span class="token operator">:</span> <span class="token string">"json-file"</span><span class="token punctuation">,</span>
  <span class="token property">"log-level"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #日志配置
  <span class="token property">"log-opts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cache-disabled"</span><span class="token operator">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
    <span class="token property">"cache-max-file"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
    <span class="token property">"cache-max-size"</span><span class="token operator">:</span> <span class="token string">"20m"</span><span class="token punctuation">,</span>
    <span class="token property">"cache-compress"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"os,customer"</span><span class="token punctuation">,</span>
    <span class="token property">"labels"</span><span class="token operator">:</span> <span class="token string">"somelabel"</span><span class="token punctuation">,</span>
    <span class="token property">"max-file"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
    <span class="token property">"max-size"</span><span class="token operator">:</span> <span class="token string">"10m"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  #每次拉取的最大并发下载量
  <span class="token property">"max-concurrent-downloads"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  #每次推送的最大并发上传量
  <span class="token property">"max-concurrent-uploads"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  #每次拉取的最大下载尝试次数
  <span class="token property">"max-download-attempts"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">"mtu"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"no-new-privileges"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"node-generic-resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"NVIDIA-GPU=UUID1"</span><span class="token punctuation">,</span>
    <span class="token string">"NVIDIA-GPU=UUID2"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"oom-score-adjust"</span><span class="token operator">:</span> <span class="token number">-500</span><span class="token punctuation">,</span>
  <span class="token property">"pidfile"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"raw-logs"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  #镜像源管理
  <span class="token property">"registry-mirrors"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  #可用于运行容器的可用OCI运行时列表
  <span class="token property">"runtimes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cc-runtime"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/usr/bin/cc-runtime"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/usr/local/bin/my-runc-replacement"</span><span class="token punctuation">,</span>
      <span class="token property">"runtimeArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"--debug"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"seccomp-profile"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #默认 <span class="token boolean">false</span>，启用selinux支持
  <span class="token property">"selinux-enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"shutdown-timeout"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token property">"storage-driver"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"storage-opts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"swarm-default-advertise-addr"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  #启动TLS认证开关
  <span class="token property">"tls"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"tlscacert"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"tlscert"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"tlskey"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"tlsverify"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"userland-proxy"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"userland-proxy-path"</span><span class="token operator">:</span> <span class="token string">"/usr/libexec/docker-proxy"</span><span class="token punctuation">,</span>
  <span class="token property">"userns-remap"</span><span class="token operator">:</span> <span class="token string">""</span>
<span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:2.46,words:738},y:"a",t:"Deamon.json Simple"},["/note-book/Docker/Docker 的daemon.json.html","/note-book/Docker/Docker 的daemon.json.md",":md"]],["v-7eb73050","/note-book/Docker/Docker%E4%B8%8D%E6%AD%BB%E8%BF%9B%E7%A8%8B.html",{d:1691989632e3,e:`
<h2>问题描述</h2>
<p>执行docker run image-id bash后，容器退出</p>
<h2>解决方法</h2>
<p>docker容器的主线程（dockfile中CMD执行的命令）结束，容器会退出</p>
<p>有以下几种解决方法：</p>
<p>使主进程无法结束</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos /bin/bash <span class="token parameter variable">-c</span> <span class="token string">"while true;do echo hello docker;sleep 1;done"</span>
</code></pre></div>`,r:{minutes:.37,words:111},y:"a",t:"Docker不死进程"},["/note-book/Docker/Docker不死进程.html","/note-book/Docker/Docker不死进程.md",":md"]],["v-19eea71e","/note-book/Docker/Docker%E6%97%A5%E5%BF%97%E9%80%89%E9%A1%B9%E9%85%8D%E7%BD%AE%E4%B8%8A%E5%8E%BB%E5%AF%B9%E5%B7%B2%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E4%B8%8D%E7%94%9F%E6%95%88.html",{d:1691939318e3,e:`
<h2>在/etc/docker/daemon.json中修改或添加log-opts参数</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">"log-driver"</span><span class="token builtin class-name">:</span><span class="token string">"json-file"</span>,
  <span class="token string">"log-opts"</span>:<span class="token punctuation">{</span> <span class="token string">"max-size"</span> <span class="token builtin class-name">:</span><span class="token string">"50m"</span>,<span class="token string">"max-file"</span><span class="token builtin class-name">:</span><span class="token string">"1"</span><span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.35,words:104},y:"a",t:"docker log配置不生效"},["/note-book/Docker/Docker日志选项配置上去对已运行容器不生效.html","/note-book/Docker/Docker日志选项配置上去对已运行容器不生效.md",":md"]],["v-74135446","/note-book/Docker/Docker%E7%8E%AF%E5%A2%83%E6%B8%85%E7%90%86.html",{d:1691939318e3,e:`
<p><strong>开始清理，需要慎重！</strong></p>
<p>列出无用的卷</p>
<blockquote>
<p>docker volume ls -qf dangling=true</p>
</blockquote>
<p>清理无用的卷</p>
<blockquote>
<p>docker volume rm $(docker volume ls -qf dangling=true)</p>
</blockquote>
<p>清理无用的镜像</p>
<blockquote>
<p>docker rmi $(docker images | grep '^&lt;none&gt;' | awk '{print $3}')</p>
</blockquote>`,r:{minutes:1.84,words:553},y:"a",t:"Docker 清理环境操作"},["/note-book/Docker/Docker环境清理.html","/note-book/Docker/Docker环境清理.md",":md"]],["v-326d43de","/note-book/Docker/Docker%E9%80%83%E9%80%B8%E6%BC%8F%E6%B4%9E%E6%A1%88%E4%BE%8B.html",{d:1700560048e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/588513910</p>
</blockquote>
<h2><strong>什么是Docker</strong></h2>
<p>Docker是一个开源的引擎,可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署,包括VMs(虚拟机)、bare metal、OpenStack 集群和其他的基础应用平台。</p>
<h3><strong>判断当前是否为docker环境</strong></h3>
<p>首先在我们拿到一个主机权限之后，需要判断该权限所处环境是不是docker，可以使用下面两条命令</p>`,r:{minutes:14.27,words:4281},y:"a",t:"Docker逃逸漏洞案例漏洞案例"},["/note-book/Docker/Docker逃逸漏洞案例.html","/note-book/Docker/Docker逃逸漏洞案例.md",":md"]],["v-1380e8c6","/note-book/Docker/RockyLinux%E5%AE%89%E8%A3%85Docker.html",{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum makecache <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl status <span class="token function">docker</span> <span class="token parameter variable">-l</span>
</code></pre></div>`,r:{minutes:.64,words:193},y:"a",t:"一键安装docker"},["/note-book/Docker/RockyLinux安装Docker.html","/note-book/Docker/RockyLinux安装Docker.md",":md"]],["v-0451b50e","/note-book/Docker/docker%20pull%20push.html",{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> pull <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token operator">|</span>@DIGEST<span class="token punctuation">]</span>
  
  从注册表中拉取镜像或镜像仓库

选项：
   -a, --all-tags 下载存储库中所有标记的镜像
       --disable-content-trust 跳过镜像验证（默认为 true）
       <span class="token parameter variable">--platform</span> string 如果服务器支持多平台则设置平台
   -q, <span class="token parameter variable">--quiet</span> 抑制详细输出
</code></pre></div>`,r:{minutes:1,words:300},y:"a",t:"docker pull"},["/note-book/Docker/docker pull push.html","/note-book/Docker/docker pull push.md",":md"]],["v-87a56570","/note-book/Docker/docker%20run%20%E5%91%BD%E4%BB%A4%E6%89%80%E6%9C%89%E7%9A%84%E9%80%89%E9%A1%B9.html",{d:1691939318e3,e:`
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>
--add-host list 添加自定义主机到 IP 映射 (host:ip)
  -a, --attach list 附加到 STDIN、STDOUT 或 STDERR
      --blkio-weight uint16 块 IO（相对权重），介于 10 和 1000 之间，或 0 禁用（默认 0）
      --blkio-weight-device list Block IO weight（相对设备权重）（默认[]）
      --cap-add list 添加 Linux 功能
      --cap-drop list 删除 Linux 功能
      --cgroup-parent string 容器的可选父 cgroup
      --cgroupns string 要使用的 Cgroup 命名空间（host|private）
                        'host'：在 Docker 主机的 cgroup 命名空间中运行容器
                        'private'：在自己的私有 cgroup 命名空间中运行容器
                        ''：使用由守护进程上的 default-cgroupns-mode 选项配置的 cgroup 命名空间（默认）
      --cidfile string 将容器ID写入文件
      --cpu-period int 限制 CPU CFS（完全公平调度器）周期
      --cpu-quota int 限制 CPU CFS（完全公平调度器）配额
      --cpu-rt-period int 以微秒为单位限制 CPU 实时周期
      --cpu-rt-runtime int 以微秒为单位限制 CPU 实时运行时间
  -c, --cpu-shares int CPU 份额（相对权重）
      --cpus 十进制 CPU 数量
      --cpuset-cpus 字符串允许执行的 CPU (0-3, 0,1)
      --cpuset-mems string 允许执行的 MEM (0-3, 0,1)
  -d, --detach 在后台运行容器并打印容器 ID
      --detach-keys string 覆盖分离容器的键序列
      --device list 将主机设备添加到容器中
      --device-cgroup-rule list 将规则添加到 cgroup 允许的设备列表
      --device-read-bps list 限制设备的读取速率（每秒字节数）（默认 []）
      --device-read-iops list 限制设备的读取速率（每秒 IO）（默认 []）
      --device-write-bps list 限制设备的写入速率（每秒字节数）（默认 []）
      --device-write-iops list 限制设备的写入速率（每秒 IO）（默认 []）
      --disable-content-trust 跳过图像验证（默认为 true）
      --dns list 设置自定义DNS服务器
      --dns-option list 设置DNS选项
      --dns-search list 设置自定义 DNS 搜索域
      --domainname string 容器 NIS 域名
      --entrypoint string 覆盖图片的默认ENTRYPOINT
  -e, --env list 设置环境变量
      --env-file list 读入环境变量文件
      --expose list 公开一个端口或一系列端口
      --gpus gpu-request GPU设备添加到容器（'all' 传递所有 GPU） # 讲gpu和nvidia-smi都传进容器
      --group-add list 添加要加入的其他组
      --health-cmd string 运行检查健康状况的命令
      --health-interval duration 运行检查之间的时间 (ms|s|m|h) (默认 0s)
      --health-retries int 需要报告不健康的连续失败
      --health-start-period duration 容器在开始健康重试倒计时之前初始化的开始时间（ms|s|m|h）（默认 0s）
      --health-timeout duration 允许运行一项检查的最长时间 (ms|s|m|h) (默认 0s)
      --help 打印用法
  -h, --hostname 字符串 容器主机名
      --init 在容器中运行一个 init 来转发信号并获取进程
  -i, --interactive 保持 STDIN 打开，即使没有附加
      --ip 字符串 IPv4 地址（例如，172.30.100.104）
      --ip6 字符串 IPv6 地址（例如，2001:db8::33）
      --ipc string 要使用的 IPC 模式
      --isolation string 容器隔离技术
      --kernel-memory bytes 内核内存限制
  -l, --label list 在容器上设置元数据
      --label-file list 读取以行分隔的标签文件
      --link list 添加到另一个容器的链接
      --link-local-ip list 容器 IPv4/IPv6 链接本地地址
      --log-driver string 容器的日志驱动
      --log-opt list 日志驱动选项
      --mac-address string 容器 MAC 地址（例如，92:d0:c6:0a:29:33）
-m, --memory bytes 内存限制
      --memory-reservation bytes 内存软限制
      --memory-swap bytes 交换限制等于内存加上交换：'-1' 启用无限交换
      --memory-swappiness int 调整容器内存交换量（0 到 100）（默认 -1）
      --mount mount 将文件系统挂载附加到容器
      --name string 为容器分配一个名称
      --network network 将容器连接到网络
      --network-alias list 为容器添加网络范围的别名
      --no-healthcheck 禁用任何容器指定的 HEALTHCHECK
      --oom-kill-disable 禁用 OOM 杀手
      --oom-score-adj int 调整主机的 OOM 首选项（-1000 到 1000）
      --pid 字符串 要使用的 PID 命名空间
      --pids-limit int 调整容器 pids 限制（设置 -1 表示无限制）
      --platform string 如果服务器支持多平台，则设置平台
      --privileged 给这个容器扩展权限
  -p, --publish list 将容器的端口发布到主机
  -P, --publish-all 将所有暴露的端口发布到随机端口
      --pull string 运行前拉取图片 ("always"|"missing"|"never") (默认"missing")
      --read-only 将容器的根文件系统挂载为只读
      --restart string 容器退出时应用的重启策略（默认“no”）
      --rm 容器退出时自动删除
      --runtime string 用于此容器的运行时间
      --security-opt 列出安全选项
      --shm-size bytes /dev/shm 的大小
      --sig-proxy 代理接收到进程的信号（默认为真）
      --stop-signal string 停止容器的信号（默认“SIGTERM”）
      --stop-timeout int 停止容器的超时时间（以秒为单位）
      --storage-opt 列出容器的存储驱动程序选项
      --sysctl map Sysctl 选项（默认 map[]）
      --tmpfs list 挂载一个 tmpfs 目录
  -t, --tty 分配一个伪 TTY
      --ulimit ulimit Ulimit 选项（默认 []）
  -u, --user 字符串用户名或 UID（格式：&lt;name|uid&gt;[:&lt;group|gid&gt;]）
      --userns string 要使用的用户命名空间
      --uts string 要使用的 UTS 命名空间
  -v, --volume list 绑定挂载一个卷
      --volume-driver string 容器的可选卷驱动程序
      --volumes-from list 从指定容器挂载卷
  -w, --workdir string 容器内的工作目录

</code></pre></div>`,r:{minutes:4.45,words:1336},y:"a",t:"docker run --help"},["/note-book/Docker/docker run 命令所有的选项.html","/note-book/Docker/docker run 命令所有的选项.md",":md"]],["v-4c790792","/note-book/Docker/docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-PDF.html",{d:1691939318e3,e:`
<p><a href="./docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.pdf">Docker学习笔记</a></p>
`,r:{minutes:.04,words:12},y:"a",t:"PDF"},["/note-book/Docker/docker学习笔记-PDF.html","/note-book/Docker/docker学习笔记-PDF.md",":md"]],["v-1fd2b10c","/note-book/Docker/docker%E5%AE%B9%E5%99%A8%E9%9B%86%E5%90%88.html",{d:1691939318e3,e:`
<h2>docker 部署和镜像仓库优化</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com  <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">sh</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
EOF</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre></div>`,r:{minutes:4.49,words:1347},y:"a",t:"docker容器集合"},["/note-book/Docker/docker容器集合.html","/note-book/Docker/docker容器集合.md",":md"]],["v-571244d6","/note-book/Docker/docker%E6%8A%A5%E9%94%99bridge-nf-call-iptables%E5%86%85%E6%A0%B8%E4%BF%AE%E6%95%B4.html",{d:1704856939e3,e:`
<h2>bridge-nf-call-iptables</h2>
<p>1）警告信息如下：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>WARNING: bridge-nf-call-iptables is disabled

WARNING: bridge-nf-call-ip6tables is disabled
</code></pre></div><p>2）解决方法：</p>
<p>修改系统文件是的机器bridge模式开启</p>
<p>设置机器开机启动的时候执行下面两条命令</p>`,r:{minutes:.66,words:199},y:"a",t:"docker报错bridge-nf-call-iptables内核修整"},["/note-book/Docker/docker报错bridge-nf-call-iptables内核修整.html","/note-book/Docker/docker报错bridge-nf-call-iptables内核修整.md",":md"]],["v-50885a84","/note-book/Docker/%E4%B8%80%E6%AC%A1%E6%9E%84%E5%BB%BA%E5%87%BAx86%E5%8F%8Aarm%E9%95%9C%E5%83%8F.html",{d:1691939318e3,e:`
<h2>CPU指令集介绍及不同的指令集的使用场景</h2>
<figure><figcaption>image-20230220093413271</figcaption></figure>
<figure><figcaption>image-20230220093440387</figcaption></figure>
<figure><figcaption>image-20230220093458512</figcaption></figure>
<figure><figcaption>image-20230220093511276</figcaption></figure>
<h2>镜像构建基础环境及不同CPU指令集实现环境准备</h2>`,r:{minutes:.91,words:272},y:"a",t:"一次构建出x86及arm镜像"},["/note-book/Docker/一次构建出x86及arm镜像.html","/note-book/Docker/一次构建出x86及arm镜像.md",":md"]],["v-f9b4903c","/note-book/Docker/%E4%B8%80%E9%94%AE%E8%BF%90%E8%A1%8Cweb%E7%89%88%E6%9C%ACvscode.html",{d:1691939318e3,e:`
<h2>安装docker-compose</h2>
<p>以centos上可以直接用yum安装docker-compose的，在rocky linux上有冲突，只好手动安装了。 手工安装的这个docker-compose版本，交互效果更好看些，不过也有问题“会多出一些莫名的空容器，状态为Created”。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">docker_compose_version</span><span class="token operator">=</span>v2.2.2 <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">"https://github.com/docker/compose/releases/download/<span class="token variable">\${docker_compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>"</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre></div>`,r:{minutes:.68,words:203},y:"a",t:"一键运行web版本的vscode"},["/note-book/Docker/一键运行web版本vscode.html","/note-book/Docker/一键运行web版本vscode.md",":md"]],["v-10c9e8f1","/note-book/Docker/%E5%8F%AA%E4%BD%BF%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9B%E5%BB%BA%E5%AE%B9%E5%99%A8-%E6%89%AB%E6%8F%8F.html",{d:1691939318e3,e:`
<figure><figcaption>docker</figcaption></figure>
`,r:{minutes:.06,words:17},y:"a",t:"手写笔记"},["/note-book/Docker/只使用操作系统创建容器-扫描.html","/note-book/Docker/只使用操作系统创建容器-扫描.md",":md"]],["v-6f39f683","/note-book/Docker/%E5%9C%A8Dockerfile%E9%87%8C%E8%B0%83%E6%95%B4%E6%97%B6%E5%8C%BA.html",{d:1691939318e3,e:`
<h2>docker已运行容器里的时区修改</h2>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>ln <span class="token punctuation">-</span>sf /usr/share/zoneinfo/Asia/Shanghai    /etc/localtime
或者
cp /usr/share/zoneinfo/Asia/Shanghai    /etc/localtime
重启容器即可 <span class="token comment"># 创建并运行容器，通过 -e TZ="Asia/Shanghai" 设置时区 docker run -e TZ="Asia/Shanghai" -d -p 80:80 --name nginx nginx</span>
</code></pre></div>`,r:{minutes:.91,words:272},y:"a",t:"在Dockerfile里调整时区"},["/note-book/Docker/在Dockerfile里调整时区.html","/note-book/Docker/在Dockerfile里调整时区.md",":md"]],["v-4c5c0565","/note-book/Docker/%E6%89%8B%E6%92%95Docker%E5%AE%B9%E5%99%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%89%88.html",{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 宿主机</span>
<span class="token comment"># 防止namespace共享，默认创建新的rootfs，会被复制过去</span>
<span class="token function">mount</span> --make-rprivate /
unshare <span class="token parameter variable">--mount</span> <span class="token parameter variable">--uts</span> <span class="token parameter variable">--ipc</span> <span class="token parameter variable">--net</span> <span class="token parameter variable">--pid</span> <span class="token parameter variable">--fork</span> /bin/bash
<span class="token comment"># bind mount 为当前挂载点绑定一个新的挂载点。</span>
<span class="token function">mount</span> <span class="token parameter variable">--bind</span> /root/alpine-3.17.3 /root/alpine-3.17.3

<span class="token comment"># 交换rootfs挂载点</span>
<span class="token function">mkdir</span> oldroot
<span class="token comment"># 更新挂载点</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token builtin class-name">cd</span> alpine-3.17.3/
<span class="token comment"># 交换rootfs挂载点</span>
pivot_root <span class="token builtin class-name">.</span> oldroot/
------------进入容器---------

<span class="token comment"># 更新环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

<span class="token comment"># 挂入内存</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> proc none /proc

<span class="token comment"># 删除无效挂载点</span>
<span class="token function">umount</span> <span class="token parameter variable">-a</span>


<span class="token comment"># lazy mount 删除老的rootfs挂载点</span>
<span class="token function">umount</span> <span class="token parameter variable">-l</span> oldroot/



<span class="token comment"># 网络</span>

root@k8s-master:~<span class="token comment"># pidof unshare</span>
<span class="token number">12202</span>
<span class="token comment"># CPID=12202</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token function">add</span> name h<span class="token variable">$CPID</span> <span class="token builtin class-name">type</span> veth peer name c<span class="token variable">$CPID</span>
<span class="token function">ip</span> <span class="token function">link</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> c<span class="token variable">$CPID</span> netns <span class="token variable">$CPID</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> h<span class="token variable">$CPID</span> master docker0 up

<span class="token comment"># 容器内执行</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> lo up
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> c12202 name eth0 up
<span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">172.17</span>.0.10/16 dev eth0
<span class="token function">ip</span> route <span class="token function">add</span> default via <span class="token number">172.17</span>.0.1
<span class="token function">ping</span> <span class="token number">8.8</span>.8.8
<span class="token builtin class-name">echo</span> <span class="token string">"nameserver 8.8.8.8"</span> <span class="token operator">&gt;</span> /etc/resolv.conf
<span class="token function">ping</span> baidu.com


</code></pre></div>`,r:{minutes:.71,words:213},y:"a",t:"手撕Docker容器"},["/note-book/Docker/手撕Docker容器命令行版.html","/note-book/Docker/手撕Docker容器命令行版.md",":md"]],["v-2df05220","/note-book/Docker/%E6%89%8B%E6%92%95docker%E5%AE%B9%E5%99%A8.html",{d:1691939318e3,e:`
<h2>前提</h2>
<div class="language-bsah" data-ext="bsah" data-title="bsah"><pre class="language-bsah"><code># 删除share选项防止mnt共享
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime shared:1 - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
[root@out-container ~]# mount --make-rprivate /
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
</code></pre></div>`,r:{minutes:9.32,words:2795},y:"a",t:"纯手工制作容器【Docker原理】"},["/note-book/Docker/手撕docker容器.html","/note-book/Docker/手撕docker容器.md",":md"]],["v-d36c7940","/note-book/Docker/%E6%89%8B%E6%92%95docker%E7%BD%91%E7%BB%9C.html",{d:1691939318e3,e:`
<blockquote>
<p>docker网络使用的是iptables实现</p>
<p>docker0是个网桥</p>
<p>veth-pair技术绑定和跨越netns</p>
</blockquote>
<h1>前提</h1>
<blockquote>
<p>本文并非小白所看懂的,有一定的门槛，如果不熟悉以下的前提，你可能看不懂本文，如果有什么困难请巩固基础，前提如下：</p>
</blockquote>
<ul>
<li>熟练使用iptables基本模块</li>
<li>熟练使用docker命令</li>
<li>熟练使用基本的docker网络</li>
<li>懂基本的docker网络</li>
<li>对net - namespace有一定的了解</li>
</ul>`,r:{minutes:17.16,words:5149},y:"a",t:"手撕docker网络"},["/note-book/Docker/手撕docker网络.html","/note-book/Docker/手撕docker网络.md",":md"]],["v-3b10ae94","/note-book/Docker/%E6%8A%8A%E5%AE%B9%E5%99%A8%E5%81%9A%E6%88%90%E7%89%A9%E7%90%86%E6%9C%BA.html",{d:1691939318e3,e:`
<p>本文的主题是把容器变成物理机，根据所学的知识。以及通过各种搜索引擎。他们都告诉我们，这是不可能的。这真的是不可能的吗？我不信，那我就要创造奇迹。请继续往下看。本文将教你如何把容器变成物理机。</p>
<p>这里只讲硬货，不废话！！！</p>
<h2>什么是容器</h2>
<figure><figcaption>img</figcaption></figure>
<p>​    简单来说，容器是一个隔离的操作系统沙盒，目的是<a href="https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504" target="_blank" rel="noopener noreferrer">隔离所有操作系统的进程</a>，那么我们也可以称容器的名称为<strong>被隔离的进程</strong>，在不同维度隔离级别有6个。隔离进程的名称空间是内核提供的功能，必须内核支持才可以。也就是说容器的内核跟宿主机的是同一个内核。Docker官方把它称作集装箱，我觉得这非常的形象，他们都工作在Linux 内核这条船上。</p>`,r:{minutes:11.96,words:3587},y:"a",t:"如何把容器变成物理机"},["/note-book/Docker/把容器做成物理机.html","/note-book/Docker/把容器做成物理机.md",":md"]],["v-688e4fbe","/note-book/Docker/%E6%9B%B4%E6%94%B9docker%E6%9C%8D%E5%8A%A1%E7%BD%91%E6%AE%B5%E5%88%86%E9%85%8D%E5%9C%B0%E5%9D%80.html",{d:1691939318e3,e:`
<h2>在docker配置文件中追加参数</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
<span class="token string">"bip"</span><span class="token builtin class-name">:</span> <span class="token string">"172.66.1.1/24"</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.9,words:271},y:"a",t:"更改docker服务网段分配地址"},["/note-book/Docker/更改docker服务网段分配地址.html","/note-book/Docker/更改docker服务网段分配地址.md",":md"]],["v-7b7916dd","/note-book/Docker/%E8%B7%A8%E5%AE%BF%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1overlay%E5%92%8Cmacvlay.html",{d:1693036275e3,e:`
<h1>前言</h1>
<blockquote>
<p>本讲是从Docker系列讲解课程，单独抽离出来的一个小节，带你一起 深入了解在编排工具出现前，跨宿主机通信的两大得力干将overlay、macvlay，这也会后期学好K8s做好基本功铺垫，打下一个坚实的基础。</p>
</blockquote>
<h1>一、overlay</h1>
<blockquote>
<p>Overlay网络模式相比于桥接模式的特别之处在于，它可以自定多个--subnet子网网段，只有同一网络/段中的容器才可以相互交换信息（相互通信）。</p>
<p>需要注意的是如果设置了多个--subnet，也需要同步设定对应个数的--gateway网关，需要确保各子网网段不重叠。</p>
<p>如何查看容器的子网网段，docker insect contain_name即可，当然在docker run 容器时，也可以通过--subnet 指定子网网段 。</p>
<p>示例（了解范畴）：</p>
</blockquote>`,r:{minutes:13.94,words:4182},y:"a",t:"跨宿主机通信overlay和macvlay"},["/note-book/Docker/跨宿主机通信overlay和macvlay.html","/note-book/Docker/跨宿主机通信overlay和macvlay.md",":md"]],["v-8e1c3a3e","/note-book/ELK/EFK8.4.3%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`
<h2>说明</h2>
<p>一般我们需要进行日志分析场景：直接在日志文件中 grep、awk 就可以获得自己想要的信息。但在规模较大也就是日志量多而复杂的场景中，此方法效率低下，面临问题包括日志量太大如何归档、文本搜索太慢怎么办、如何多维度查询。需要集中化的日志管理，所有服务器上的日志收集汇总。常见解决思路是建立集中式日志收集系统，将所有节点上的日志统一收集，管理，访问。
Elastic Stack包含：</p>
<ul>
<li>Elasticsearch 是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有：分布式，零配置，自动发现，索引自动分片，索引副本机制，restful风格接口，多数据源，自动搜索负载等。详细可参考Elasticsearch权威指南</li>
<li>Logstash 主要是用来日志的搜集、分析、过滤日志的工具，支持大量的数据获取方式。一般工作方式为c/s架构，client端安装在需要收集日志的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch上去。
Kibana 也是一个开源和免费的工具，Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助汇总、分析和搜索重要数据日志。</li>
<li>Beats在这里是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集、解析日志，但是Logstash对内存、cpu、io等资源消耗比较高。相比</li>
<li>Logstash，Beats所占系统的CPU和内存几乎可以忽略不计</li>
</ul>`,r:{minutes:5.16,words:1549},y:"a",t:"EFK安装过程记录，监听netflow"},["/note-book/ELK/EFK8.4.3部署.html","/note-book/ELK/EFK8.4.3部署.md",":md"]],["v-3487e284","/note-book/ELK/ELK.html",{d:1691939318e3,e:`
<figure><figcaption>image-20211116145510909</figcaption></figure>
<figure><figcaption>image-20211116145621627</figcaption></figure>
<h1>E Elasticsearch</h1>
<p>弹性搜索，日志<strong>存储</strong></p>
<h1>L Logstash</h1>
<p>日志收集</p>
<h1>K Kibana</h1>
<p>日志展示</p>
<figure><figcaption></figcaption></figure>
<h1>实战</h1>`,r:{minutes:6.02,words:1806},y:"a",t:"ELK日志分析系统"},[":md"]],["v-4c3279e0","/note-book/Esxi/ESXI%E4%B8%AD%E7%9A%84%E7%BD%91%E7%BB%9C.html",{d:1697001346e3,e:`
<h3>VLAN常识：</h3>
<p>vlan的范围: 一共有4096个vlan,vlan 1为默认vlan.
但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。
vlan 0：不携带VLAN ID
vlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN</p>
<h3>ESXI的网络配置：</h3>
<p><strong>虚拟交换机</strong> &gt;&gt;绑定&gt;&gt; 物理网卡
<strong>端口组</strong> &gt;&gt;绑定&gt;&gt; 虚拟交换机
<strong>虚拟机的网卡</strong> &gt;&gt;绑定&gt;&gt; 端口组</p>`,r:{minutes:.57,words:172},y:"a",t:"ESXI中的网络"},["/note-book/Esxi/ESXI中的网络.html","/note-book/Esxi/ESXI中的网络.md",":md"]],["v-5c84e740","/note-book/GRUB/%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B.html",{d:1691939318e3,e:`
<h2>开机显示菜单</h2>
<p>/etc/default/grub</p>
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code>GRUB_DEFAULT<span class="token operator">=</span><span class="token number">0</span>
GRUB_TIMEOUT_STYLE<span class="token operator">=</span>menu # <span class="token keyword">default</span><span class="token operator">:</span>menu config hidden
GRUB_TIMEOUT<span class="token operator">=</span><span class="token number">6</span> # <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">0</span>
GRUB_DISTRIBUTOR<span class="token operator">=</span>\`lsb_release <span class="token operator">-</span>i <span class="token operator">-</span>s <span class="token number">2</span><span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span>null <span class="token operator">||</span> echo Debian\`
GRUB_CMDLINE_LINUX_DEFAULT<span class="token operator">=</span><span class="token string">""</span>
GRUB_CMDLINE_LINUX<span class="token operator">=</span><span class="token string">""</span>
</code></pre></div>`,r:{minutes:.24,words:72},y:"a",t:"开机显示菜单"},["/note-book/GRUB/配置案例.html","/note-book/GRUB/配置案例.md",":md"]],["v-09de09ac","/note-book/Gawk/AWK%E6%A1%88%E4%BE%8B%E5%85%A5%E9%97%A8%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86.html",{d:1691939318e3,e:`<h2>简介</h2>
<ul>
<li>awk 擅长对列进行操作/进行数据信息操作</li>
<li>awk 的基本使用（高级使用在shell)</li>
<li>awk把文本文档看作是数据库，每一行看作一条数据库中的记录，可以指定数据列的分隔符，默认的分隔符是”\\t”,即Tab。</li>
<li>awk工作流程是这样的：读入有’\\n’换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，$0则表示所有域, 1 表 示</li>
<li>第 一 个 域 , 1表示第一个域, 1表示第一个域,n表示第n个域。默认域分隔符是”空白键” 或 “[tab]键”</li>
<li>awk的执行模式是： awk '{pattern + action}' {filenames}</li>
</ul>`,r:{minutes:24.81,words:7444},y:"a",t:""},["/note-book/Gawk/AWK案例入门看这一篇就够了.html","/note-book/Gawk/AWK案例入门看这一篇就够了.md",":md"]],["v-128301a5","/note-book/Gawk/Shell%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E4%B8%89%E5%89%91%E5%AE%A2-AWK.html",{d:1691939318e3,e:`
<h2><strong>2.1awk简介</strong></h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>awk 是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。
</code></pre></div>`,r:{minutes:7.29,words:2186},y:"a",t:"文本处理 awk"},["/note-book/Gawk/Shell文本处理三剑客-AWK.html","/note-book/Gawk/Shell文本处理三剑客-AWK.md",":md"]],["v-03dfed38","/note-book/Gawk/awk%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html",{d:1691939318e3,e:`<h2>一、基本用法</h2>
<p>作者： <a href="http://www.ruanyifeng.com" target="_blank" rel="noopener noreferrer">阮一峰</a></p>
<p><code>awk</code>的基本用法就是下面的形式。</p>
<blockquote>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 格式</span>
$ <span class="token function">awk</span> 动作 文件名

<span class="token comment"># 示例</span>
$ <span class="token function">awk</span> <span class="token string">'{print $0}'</span> demo.txt
</code></pre></div></blockquote>`,r:{minutes:3.45,words:1035},y:"a",t:""},["/note-book/Gawk/awk 入门教程.html","/note-book/Gawk/awk 入门教程.md",":md"]],["v-8ff08dec","/note-book/Gawk/awk%20%E5%AD%A6%E4%B9%A0%20%20%E9%AB%98%E7%BA%A7%E8%BE%93%E5%87%BA%20%2002.html",{d:1691939318e3,e:`<h2>awk高级输入输出 读取下一条记录</h2>
<p>awk中<code>next</code>语句使用：在循环逐行匹配，如果遇到next，就会跳过当前行，直接忽略下面语句。而进行下一行匹配。net语句一般用于多行合并：</p>
<div class="language-abap" data-ext="abap" data-title="abap"><pre class="language-abap"><code>cat <span class="token keyword">text</span><span class="token punctuation">.</span>txt
a
b
<span class="token keyword">c</span>
d
<span class="token keyword">e</span>

awk <span class="token string">'NR%2==1{next}{print NR,$0;}'</span> <span class="token keyword">text</span><span class="token punctuation">.</span>txt
<span class="token number">2</span> b
<span class="token number">4</span> d
</code></pre></div>`,r:{minutes:6.52,words:1956},y:"a",t:""},["/note-book/Gawk/awk 学习  高级输出  02.html","/note-book/Gawk/awk 学习  高级输出  02.md",":md"]],["v-7e12b9a6","/note-book/Gawk/awk%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%20%2001.html",{d:1691939318e3,e:`<p><strong>awk</strong>是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入(stdin)、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk有很多内建的功能，比如数组、函数等，这是它和C语言的相同之处，灵活性是awk最大的优势。</p>
<h2>awk命令格式和选项</h2>
<p><strong>语法形式</strong></p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>awk [options] 'script' var=value file(s)
awk [options] -f scriptfile var=value file(s)
</code></pre></div>`,r:{minutes:8.24,words:2473},y:"a",t:""},["/note-book/Gawk/awk语言学习笔记  01.html","/note-book/Gawk/awk语言学习笔记  01.md",":md"]],["v-ab5d88e0","/note-book/Gawk/%E5%8C%B9%E9%85%8D%E7%89%B9%E5%AE%9A%E5%AD%97%E7%AC%A6%E5%B9%B6%E8%BE%93%E5%87%BA%E5%85%B6%E5%90%8E%E7%9A%84%E8%8B%A5%E5%B9%B2%E8%A1%8C.html",{d:1691939318e3,e:`
<h2>用法：</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'/xxoo/{p=4}p--&gt;0'</span>
</code></pre></div><h2>实践</h2>
<h3>示例：</h3>
<pre><code># cat /etc/passwd

root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
</code></pre>`,r:{minutes:.46,words:139},y:"a",t:"awk 输出配行及匹配下面的三行"},["/note-book/Gawk/匹配特定字符并输出其后的若干行.html","/note-book/Gawk/匹配特定字符并输出其后的若干行.md",":md"]],["v-3f1dde92","/note-book/Git/Git%20%E7%9A%84%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE.html",{d:1691939318e3,e:`
<p>Git 是我经常用的软件。出于某些原因我经常要从 GitHub 这些网站上下载文件。但是 Git 不会从终端中继承代理设置。所以我平时用 export 设置的代理就用不上了。之后在网上找了几种给 Git 设置代理的方法。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">'http://192.168.0.1:1080'</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">'http://192.168.0.1:1080'</span>
</code></pre></div>`,r:{minutes:.73,words:218},y:"a",t:"Git 的代理配置"},["/note-book/Git/Git 的代理配置.html","/note-book/Git/Git 的代理配置.md",":md"]],["v-69ef78cb","/note-book/Git/Git%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86%E5%90%88%E5%B9%B6%E4%B8%8E%E5%88%A0%E9%99%A4%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`
<p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。 在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本。对于大项目来说，这样的过程会耗费很多时间。而Git的分支模型则别具一格，创建分支非常的快，在不同分支之间切换也十分的快，这一优势也使得Git鼓励人们更多地使用分支。</p>
<h3>Git保存数据的方式</h3>
<p>在了解分支之前，让我们先来看看Git是如何保存数据的。我的理解是我们每次提交到Git的文件，它并不是只保存每次文件中的差异，而是类似于照片那样将整个文件都在重新保存一份</p>`,r:{minutes:3.99,words:1198},y:"a",t:"Git分支"},["/note-book/Git/Git分支管理合并与删除命令.html","/note-book/Git/Git分支管理合并与删除命令.md",":md"]],["v-9382cbf8","/note-book/Git/Git%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%AF%AD%E8%A8%80%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%8F%8A%E6%96%87%E4%BB%B6%E5%8D%A0%E6%AF%94.html",{d:1691939318e3,e:`<p>最近在做代码分析，想知道一个git仓库的语言类型，相信大家都见过这个：

图中列出了不同的文件类型在代码仓中的占比，那如何实现这个功能呢？</p>
<p>结果研究，我写了一个脚本如下：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># git查询文件后缀的数量，用以区分项目使用的语言。</span>

<span class="token comment"># 列出git的文件</span>
<span class="token comment"># git ls-files \\</span>

<span class="token comment"># 按照‘/’分割并取出最后一个，即文件名</span>
<span class="token comment"># |awk -F/ '{print $NF}' \\</span>
<span class="token comment"># 筛选出有后缀的文件</span>
<span class="token comment"># |grep \\\\. \\</span>
<span class="token comment"># 按照‘.’分割并取出最后一个，即后缀名</span>
<span class="token comment"># |awk -F. '{print $NF}' \\</span>
<span class="token comment"># 排序去重统计</span>
<span class="token comment"># |sort|uniq -c \\</span>
<span class="token comment"># 按统计结果再次排序</span>
<span class="token comment"># |sort -rk 1</span>
</code></pre></div>`,r:{minutes:1,words:300},y:"a",t:""},["/note-book/Git/Git识别项目的语言类型，及文件占比.html","/note-book/Git/Git识别项目的语言类型，及文件占比.md",":md"]],["v-bae969ea","/note-book/Git/Git%E9%AB%98%E7%BA%A7%E6%93%8D%E4%BD%9C%E5%92%8C%E7%BB%83%E4%B9%A0%E7%BD%91%E7%AB%99.html",{d:1691939318e3,e:`
<h2>动画练习网站</h2>
<p>https://learngitbranching.js.org/?locale=zh_CN</p>
<h2>操作和答案</h2>
<p><a href="https://www.zhihu.com/column/c_1561431080028381184" target="_blank" rel="noopener noreferrer">git学习笔记 - 知乎 (zhihu.com)</a></p>
`,r:{minutes:.12,words:35},y:"a",t:"Git高级操作和练习网站"},["/note-book/Git/Git高级操作和练习网站.html","/note-book/Git/Git高级操作和练习网站.md",":md"]],["v-523bf541","/note-book/Git/",{d:1691939318e3,e:`
<hr>
<p>这里是我的笔记，记录一些 git 常用和一些记不住的命令，这个笔记原本是基于 <a href="http://yanhaijing.com/git/2014/11/01/my-git-note" target="_blank" rel="noopener noreferrer">颜海镜的文章</a>增加的，后面慢慢增加了许多内容，独立一个仓库维护，方便查询和使用。</p>
<h2>安装卸载</h2>
<p><a href="https://git-scm.com/download/linux" target="_blank" rel="noopener noreferrer">官方教程</a>，在 Linux/Unix 系统中，通过工具在中安装 <code>git</code>,这种方式比较简单，便于升级卸载工具。</p>`,r:{minutes:26.12,words:7835},y:"a",t:"git-tips"},["/note-book/Git/README.md"]],["v-20b8f0f1","/note-book/Git/git%20%E6%8B%89%E5%8F%96%E5%85%A8%E9%83%A8%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html",{d:1691939318e3,e:`<p>for i in <code>git branch -r</code>; do git checkout <code>basename $i</code> &amp;&amp; git pull --all; done</p>
`,r:{minutes:.05,words:15},y:"a",t:""},["/note-book/Git/git 拉取全部远程分支.html","/note-book/Git/git 拉取全部远程分支.md",":md"]],["v-7726c068","/note-book/Git/git%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`
<h1>Git 基本操作</h1>
<p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。</p>
<p>本章将对有关创建与提交你的项目快照的命令作介绍。</p>
<p>Git 常用的是以下 6 个命令：<strong>git clone</strong>、<strong>git push</strong>、<strong>git add</strong> 、<strong>git commit</strong>、<strong>git checkout</strong>、<strong>git pull</strong>，后面我们会详细介绍。</p>
<p><strong>说明：</strong></p>`,r:{minutes:15.59,words:4677},y:"a",t:"git 基础命令"},["/note-book/Git/git基础命令.html","/note-book/Git/git基础命令.md",":md"]],["v-2b2f3b07","/note-book/Git/git%E6%9B%B4%E6%96%B0%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html",{d:1691939318e3,e:`<p>同事创建出新的分支后，我这边用sourcetree刷新，始终看不到最新的。上网查了一下，可以用命令刷新，刷新之后就可以看到新创建的分支了。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote update origin <span class="token parameter variable">--prune</span>
</code></pre></div>`,r:{minutes:.26,words:78},y:"a",t:""},["/note-book/Git/git更新远程分支.html","/note-book/Git/git更新远程分支.md",":md"]],["v-219bdfe6","/note-book/Git/git%E7%BB%9F%E8%AE%A1%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81%E8%A1%8C%E6%95%B0.html",{d:1691939318e3,e:`
<h2>只统计项目代码的总行数</h2>
<div class="language-ruby" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>git ls<span class="token operator">-</span>files <span class="token operator">|</span> xargs cat <span class="token operator">|</span> wc <span class="token operator">-</span>l
</code></pre></div>`,r:{minutes:.2,words:60},y:"a",t:"git统计项目代码行数"},["/note-book/Git/git统计项目代码行数.html","/note-book/Git/git统计项目代码行数.md",":md"]],["v-08b82cef","/note-book/Git/git%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9B%9E%E9%80%80%E5%88%B0%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC.html",{d:1691939318e3,e:`<h2>step1：查看提交记录，获得版本号</h2>
<p><code>git log</code></p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>commit 36cc122f5a2218d2b2d4109593a4ec5de589f807
Author: yhl <span class="token operator">&lt;</span>xxx.com<span class="token operator">&gt;</span>
Date:   Thu Sep <span class="token number">23</span> 09:51:54 <span class="token number">2021</span> +0800
 
    ignore
 
commit 203738c9ccad7d95b728c8d9d287f2ff24eaaca2
Author: chen1234520 <span class="token operator">&lt;</span>xxx.com.cn<span class="token operator">&gt;</span>
Date:   Wed Sep <span class="token number">22</span> <span class="token number">18</span>:14:18 <span class="token number">2021</span> +0800
 
    更新头文件路径
 
commit a9b26683996b88c2bb87cff9cc1bdae38b9c5708
Author: chen1234520 <span class="token operator">&lt;</span>xxx.com.cn<span class="token operator">&gt;</span>
Date:   Wed Sep <span class="token number">22</span> <span class="token number">17</span>:30:07 <span class="token number">2021</span> +0800
 
    上传测试样例图
</code></pre></div>`,r:{minutes:.44,words:133},y:"a",t:""},["/note-book/Git/git远程仓库回退到指定版本.html","/note-book/Git/git远程仓库回退到指定版本.md",":md"]],["v-89f58c8e","/note-book/Git/%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%98%BE%E7%A4%BAgitmoji.html",{d:1691939318e3,e:`
<h2><a class="header-anchor" href="#emoji-on-the-command-line-😱"><span></span></a><a href="https://www.mianshigee.com/project/emojify/#emoji-on-the-command-line-scream" target="_blank" rel="noopener noreferrer">Emoji on the command line    😱 </a></h2>
<p>THIS IS A VERY USEFUL SCRIPT. IT WILL ABSOLUTELY BOOST YOUR PRODUCTIVITY AND HELP YOU IN YOUR DAILY WORK.</p>`,r:{minutes:1.24,words:371},y:"a",t:"emojify"},["/note-book/Git/命令行显示gitmoji.html","/note-book/Git/命令行显示gitmoji.md",":md"]],["v-4d6c1094","/note-book/Gitlab/Gitlab%E4%BA%8C%E5%BC%80%E4%BB%8E%E8%80%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`
<blockquote>
<p>Gitlab所给的权限太少了，因为业务需要，二开gitlab，自定义权限系统。</p>
<p>下面给guest角色删除源码访问权限。并保留提出issue的权限。查看label的权限</p>
</blockquote>
<h2>前言</h2>
<p>我们都知道gitlab社区版和商业版本的内核是相同的，所以说社区版本的功能是企业版本的全部。只是部分配置没有放到web界面，需要命令行去修改</p>
<h2>修改</h2>
<p>经过查询，gitlab的权限以文本文件的形式存储在目录中,下面是权限系统的配置文件。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@83f572345d3c:/<span class="token comment"># cd  /opt/gitlab/embedded/service/gitlab-rails/app/policies/</span>
root@83f572345d3c:/opt/gitlab/embedded/service/gitlab-rails/app/policies<span class="token comment"># ll</span>
total <span class="token number">344</span>
drwxr-xr-x <span class="token number">1</span> root root  <span class="token number">4096</span> Jul <span class="token number">12</span> 08:05 ./
drwxr-xr-x <span class="token number">1</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> <span class="token punctuation">..</span>/
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> alert_management/
drwxr-xr-x <span class="token number">3</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> analytics/
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> application_setting/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">170</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> application_setting_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">307</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> award_emoji_policy.rb
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">2245</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> base_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">148</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> blob_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">905</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> board_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> ci/
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> clusters/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">204</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> commit_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">234</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> commit_status_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> concerns/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">118</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> container_expiration_policy_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> container_registry/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">112</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> container_repository_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">102</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> custom_emoji_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">416</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> deploy_key_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">304</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> deploy_keys_project_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">320</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> deploy_token_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">573</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> deployment_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> design_management/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">279</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> draft_note_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">653</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> environment_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> error_tracking/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">228</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> event_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">106</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> external_issue_policy.rb
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">2940</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> global_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">111</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> grafana_integration_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">261</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> group_deploy_key_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">297</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> group_deploy_keys_group_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">101</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> group_label_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">822</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> group_member_policy.rb
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">7217</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> group_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">435</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> identity_provider_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">100</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> instance_metadata_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">863</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> issuable_policy.rb
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">1199</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> issue_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">890</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> merge_request_policy.rb
drwxr-xr-x <span class="token number">3</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> metrics/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">110</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> milestone_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> namespace/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">825</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> namespace_policy.rb
-rw-r--r-- <span class="token number">1</span> root root    <span class="token number">95</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> nil_policy.rb
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">2736</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> note_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> operations/
drwxr-xr-x <span class="token number">3</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> packages/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">248</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> personal_access_token_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">846</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> personal_snippet_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">111</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> project_ci_cd_setting_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">105</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> project_label_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">681</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> project_member_policy.rb
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">23137</span> Jul <span class="token number">12</span> 08:05 project_policy.rb
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">22271</span> Jan <span class="token number">20</span>  <span class="token number">2022</span> project_policy.rb.bak
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">1868</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> project_snippet_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">110</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> project_statistics_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">110</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> prometheus_alert_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">332</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> protected_branch_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">100</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> release_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> releases/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">103</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> repository_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">445</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> resource_label_event_policy.rb
-rw-r--r-- <span class="token number">1</span> root root    <span class="token number">89</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> service_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">302</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> suggestion_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> terraform/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">240</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> timebox_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">256</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> todo_policy.rb
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">1294</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> user_policy.rb
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> wiki_page/
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">160</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> wiki_page_policy.rb
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">178</span> Apr <span class="token number">27</span>  <span class="token number">2021</span> wiki_policy.rb


</code></pre></div>`,r:{minutes:4.77,words:1430},y:"a",t:"Gitlab二开从而自定义权限系统"},["/note-book/Gitlab/Gitlab二开从而自定义权限系统.html","/note-book/Gitlab/Gitlab二开从而自定义权限系统.md",":md"]],["v-736258dc","/note-book/Gitlab/Gitlab%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D.html",{d:1691939318e3,e:`
<h2>配置备份</h2>
<blockquote>
<p>参考链接 https://docs.gitlab.com/omnibus/settings/backups.html</p>
</blockquote>
<p>编辑用户根目录的 cron 表</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">crontab</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-u</span> root
</code></pre></div>`,r:{minutes:.83,words:249},y:"a",t:"Gitlab备份和恢复"},["/note-book/Gitlab/Gitlab备份和恢复.html","/note-book/Gitlab/Gitlab备份和恢复.md",":md"]],["v-ce8e88a6","/note-book/Gitlab/Gitlab%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`
<h2>安装部署</h2>
<blockquote>
<p>参考链接</p>
<ul>
<li>https://blog.csdn.net/qq_35844177/article/details/106876923</li>
<li>官网 https://docs.gitlab.com/omnibus/installation/</li>
<li></li>
</ul>
</blockquote>
<h2>优化过程</h2>
<p>xxxxx</p>
<p>已经执行的优化</p>
<ul>
<li>关闭Prometheus</li>
<li>关闭alertmanager</li>
<li>关闭exporter包括 node_exporter，redis_exporter，postgres_exporter，pgbouncer_exporter，gitlab_exporter</li>
<li>关闭prometheus_monitoring</li>
<li>关闭grafana</li>
<li>puma线程调整</li>
<li>nginx线程调整</li>
<li>nginx缓存调整</li>
</ul>`,r:{minutes:.23,words:68},y:"a",t:"Gitlab安装部署"},["/note-book/Gitlab/Gitlab安装部署.html","/note-book/Gitlab/Gitlab安装部署.md",":md"]],["v-1affebc9","/note-book/Gitlab/Gitlab%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html",{d:1691939318e3,e:`
<p>破案了,新版本从命令行看：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/gitlab/init_xxx  
</code></pre></div><p>以下是更改的方法：：</p>
<p>进入 GitLab 控制台</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gitlab-rails console <span class="token parameter variable">-e</span> production
</code></pre></div>`,r:{minutes:2.53,words:758},y:"a",t:"第一次使用gitlab登陆网页没有提示更改密码"},["/note-book/Gitlab/Gitlab的一些问题.html","/note-book/Gitlab/Gitlab的一些问题.md",":md"]],["v-edc7031c","/note-book/Gitlab/Gitlab%E9%85%8D%E7%BD%AE%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8.html",{d:1691939318e3,e:`
<h2>outlook</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Email Settings</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'gitlab_email_enabled'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'gitlab_email_from'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'gerrit@xxxx.com'</span>
<span class="token comment"># gitlab_rails['gitlab_email_display_name'] = 'Example'</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'gitlab_email_reply_to'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'gerrit@xxxx.com'</span>
<span class="token comment"># gitlab_rails['gitlab_email_subject_suffix'] = ''</span>


<span class="token comment">### GitLab email server settings</span>
<span class="token comment">###! Docs: https://docs.gitlab.com/omnibus/settings/smtp.html</span>
<span class="token comment">###! **Use smtp instead of sendmail/postfix.**</span>

gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_enable'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_address'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"smtp.office365.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_port'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">587</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_user_name'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"gerrit@xxxx.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_password'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"xxxx"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_domain'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"xxxx.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_authentication'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"login"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_enable_starttls_auto'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">#gitlab_rails['smtp_tls'] = false</span>

<span class="token comment">###! **Can be: 'none', 'peer', 'client_once', 'fail_if_no_peer_cert'**</span>
<span class="token comment">###! Docs: http://api.rubyonrails.org/classes/ActionMailer/Base.html</span>
<span class="token comment"># gitlab_rails['smtp_openssl_verify_mode'] = 'none'</span>

<span class="token comment"># gitlab_rails['smtp_ca_path'] = "/etc/ssl/certs"</span>
<span class="token comment"># gitlab_rails['smtp_ca_file'] = "/etc/ssl/certs/ca-certificates.crt"</span>

<span class="token comment">################################################################################</span>
<span class="token comment">## Container Registry settings</span>
<span class="token comment">##! Docs: https://docs.gitlab.com/ce/administration/container_registry.html</span>
<span class="token comment">################################################################################</span>

<span class="token comment"># registry_external_url 'https://registry.gitlab.example.com'</span>

</code></pre></div>`,r:{minutes:.85,words:255},y:"a",t:"Gitlab配置邮件服务器"},["/note-book/Gitlab/Gitlab配置邮件服务器.html","/note-book/Gitlab/Gitlab配置邮件服务器.md",":md"]],["v-3251a524","/note-book/HA-LVS-Keepalived/ha-lvs-keepalived.html",{d:1691939318e3,e:`
<h1>负载均衡</h1>
<h2>集群功能分类：</h2>
<h3>LB： Load Balance</h3>
<p>有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点</p>
<p>负载均衡产品分类</p>
<figure><figcaption>image-20211113162334546</figcaption></figure>
<p>软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、nginx、</p>
<p>对比：</p>
<p>软件负载均衡设备（廉价解决方案）：</p>
<figure><figcaption>image-20211113163036742</figcaption></figure>`,r:{minutes:3.72,words:1116},y:"a",t:"大型网站高并发解决方案LVS"},[":md"]],["v-72564be3","/note-book/HA-LVS-Keepalived/haproxy.html",{d:1691939318e3,e:`
<h2>概述</h2>
<figure><figcaption>image-20211115094625216</figcaption></figure>
<h2>特点</h2>
<figure><figcaption>image-20211115103530945</figcaption></figure>
<h2>实例1</h2>
<p>环境</p>
<figure><figcaption>image-20211115110133707</figcaption></figure>
<div class="language-hosts" data-ext="hosts" data-title="hosts"><pre class="language-hosts"><code>172.16.100.14 web1
172.16.100.15 web2
172.16.100.21 haproxy

172.16.100.13 windows client
</code></pre></div>`,r:{minutes:2.89,words:866},y:"a",t:"HAproxy 七层负载均衡"},[":md"]],["v-6c105dfe","/note-book/HA-LVS-Keepalived/keepalived.html",{d:1691939318e3,e:`
<figure><figcaption>image-20211114172234554</figcaption></figure>
<h2>什么是高可用集群HA</h2>
<figure><figcaption>image-20211114172407050</figcaption></figure>
<h2>高可用集群衡量标准</h2>
<figure><figcaption>image-20211114172435055</figcaption></figure>
<h3>具体衡量标准</h3>
<figure><figcaption>image-20211114172601221</figcaption></figure>`,r:{minutes:6.28,words:1883},y:"a",t:"HA"},[":md"]],["v-4db786a2","/note-book/Harbor/Harbor%E7%A6%BB%E7%BA%BF%E6%90%AD%E5%BB%BA.html",{d:1691939318e3,e:`
<blockquote>
<p>使用离线安装包安装Harbor和</p>
</blockquote>
<h1>先要条件</h1>
<h2>1.下载haobor安装包和docker-compose安装包</h2>
<p>harbor载地址：http://harbor.orientsoft.cn/</p>
<p>本次下载后放入的目录是/home/carter，解压安装包</p>
<pre><code>tar xf harbor-offline-installer-v1.10.10.tgz
</code></pre>
<p>下载docker-composer，存放到/usr/local/bin目录下。</p>`,r:{minutes:5.03,words:1508},y:"a",t:"Harbor离线搭建"},["/note-book/Harbor/Harbor离线搭建.html","/note-book/Harbor/Harbor离线搭建.md",":md"]],["v-77da57a3","/note-book/Iptables/Linux%E5%86%85%E6%A0%B8%E5%AD%90%E7%B3%BB%E7%BB%9F%20-%20%E7%BD%91%E7%BB%9C%20netfilter.html",{d:1691939318e3,e:`
<blockquote>
<p>某教育内核讨论区：https://kernel.0voice.com/forum.php?mod=guide&amp;view=newthread</p>
<p>netfilter参数详解： https://www.kernel.org/doc/html/latest/networking/nf_conntrack-sysctl.html#proc-sys-net-netfilter-nf-conntrack-variables 已经摘录部分</p>
<p>部分来源： https://zhuanlan.zhihu.com/p/561781463</p>
<p>致谢： https://www.zhihu.com/people/linuxwang-xian-sheng</p>
<p>源地址： https://juejin.cn/post/6993124663878484005</p>
</blockquote>`,r:{minutes:11.5,words:3449},y:"a",t:"Linux内核子系统 - 网络"},["/note-book/Iptables/Linux内核子系统 - 网络 netfilter.html","/note-book/Iptables/Linux内核子系统 - 网络 netfilter.md",":md"]],["v-4b719180","/note-book/Iptables/iptables%E6%8B%A6%E6%88%AA%E5%86%85%E7%BD%91%E5%A5%87%E8%99%8E%E8%BD%AF%E4%BB%B6%E7%97%85%E6%AF%92%E4%B8%8A%E6%8A%A5.html",{d:1700469858e3,c:["iptables","Network","网络安全"],e:`
<h2>案例初衷</h2>
<p>整理旧的项目，手里的内容实在太多了，整理一下这个案例。</p>
<p>这个东西开始是别人介绍的一个小项目，作用是要从中间流量阻止来自客户机 <strong>奇虎360</strong>的查毒软件向主服务器病毒上报。</p>
<figure><figcaption>image-20231120150307670</figcaption></figure>
<p>具体是这样的流程</p>
<p>经过<code>tcpdump</code>抓包显示<strong>奇虎360</strong>客户机向服务器上报病毒的渠道是http协议，</p>
<p>信息如下：</p>`,r:{minutes:10.3,words:3090},y:"a",t:"iptables拦截内网奇虎软件病毒上报"},["/note-book/Iptables/iptables拦截内网奇虎软件病毒上报.html","/note-book/Iptables/iptables拦截内网奇虎软件病毒上报.md",":md"]],["v-5df5e696","/note-book/Iptables/iptables%E8%AF%A6%E8%A7%A3-%E6%9C%B1%E5%85%89%E5%8D%B0.html",{d:1691939318e3,e:`
<p><a href="https://www.zsythink.net/archives/category/%E8%BF%90%E7%BB%B4%E7%9B%B8%E5%85%B3/iptables" target="_blank" rel="noopener noreferrer">IPtables</a></p>
<p>https://www.zsythink.net/archives/category/运维相关/iptables</p>
`,r:{minutes:.07,words:21},y:"a",t:"iptables详解-朱光印"},["/note-book/Iptables/iptables详解-朱光印.html","/note-book/Iptables/iptables详解-朱光印.md",":md"]],["v-f32b6d86","/note-book/Iptables/linux%E4%B8%8BIPTABLES%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>**-A RH-Firewall-1-INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">24000</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token parameter variable">-A</span> RH-Firewall-1-INPUT <span class="token parameter variable">-s</span> <span class="token number">121.10</span>.120.24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">18612</span> <span class="token parameter variable">-j</span> ACCEPT**
</code></pre></div>`,r:{minutes:10.92,words:3277},y:"a",t:"linux下IPTABLES配置详解"},["/note-book/Iptables/linux下IPTABLES配置详解.html","/note-book/Iptables/linux下IPTABLES配置详解.md",":md"]],["v-f8568246","/note-book/Iptables/%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0ip_forward.html",{d:1691939318e3,e:`
<figure><figcaption>image-20221025095802270</figcaption></figure>
`,r:{minutes:.06,words:19},y:"a",t:"内核参数ip_forward刨根问底"},["/note-book/Iptables/内核参数ip_forward.html","/note-book/Iptables/内核参数ip_forward.md",":md"]],["v-dcb1d26a","/note-book/Jenkins/jenkins%E5%A4%87%E4%BB%BD.html",{d:1691939318e3,e:`
<p><strong>1.手动备份</strong></p>
<p>比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了jenkins，我们可以到backups下找回原始数据；第二种是将打包的文件拷贝到另外一台物理机上，这样做的好处是如果原始机器宕机了，我们可以在另外一台机器上找到备份文件，在最短的时间内恢复工作。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>


</code></pre></div>`,r:{minutes:3.35,words:1006},y:"a",t:"Jenkins备份"},["/note-book/Jenkins/jenkins备份.html","/note-book/Jenkins/jenkins备份.md",":md"]],["v-07b8030a","/note-book/Jenkins/jenkins%E6%9E%84%E5%BB%BA%E6%8C%81%E7%BB%AD%E5%8C%96%E9%9B%86%E6%88%90%E5%B9%B3%E5%8F%B0.html",{d:1691939318e3,e:`
<h1>一、CI/CD持续集成/持续发布</h1>
<p>开发(git) --&gt;git主库–&gt;jenkins(git+jdk+tomcat+maven打包+测试）–&gt;发布到tomcat服务器
英文全称：Continuous Integration
　　CI：中文全称：持续集成工具
　　持续集成是一种软件开发实践。在持续集成中，团队成员频繁集成他们的工作成果，一般每人每天至少集成一次，也可以多次。每次集成会经过自动构建（包括自动测试）的检验，以尽快发现集成错误。</p>
<h1>二、Jenkins</h1>
<h2>１、Jenkins概述</h2>
<p>Jenkins是帮我们将代码进行统一的编译打包、还可以放到tomcat容器中进行发布。意思是我们通过配置，将以前：编译、打包、上传、部署到Tomcat中的过程交由Jenkins，Jenkins通过给定的代码地址URL，将代码拉取到其“宿主服务器”（Jenkins的安装位置），进行编译、打包和发布到web容器中。 是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson(Hudson是商用的)，主要用于持续、自动的构建/测试软件项目、监控一些定时执行的任务。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。</p>`,r:{minutes:14.44,words:4333},y:"a",t:"CICD-jenkins构建持续化集成平台"},["/note-book/Jenkins/jenkins构建持续化集成平台.html","/note-book/Jenkins/jenkins构建持续化集成平台.md",":md"]],["v-577615d7","/note-book/Jenkins/jenkins%E7%9A%84docker%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.html",{d:1691939318e3,e:`<p>起一个 jenkins</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-u</span> root  <span class="token parameter variable">-it</span>   <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token parameter variable">-v</span> jenkins-data:/var/jenkins_home <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean
</code></pre></div>`,r:{minutes:1.27,words:382},y:"a",t:""},["/note-book/Jenkins/jenkins的docker部署文档.html","/note-book/Jenkins/jenkins的docker部署文档.md",":md"]],["v-513bda28","/note-book/Jenkins/%E4%BF%AE%E6%94%B9Jenkins%E6%8F%92%E4%BB%B6%E4%B8%BA%E5%9B%BD%E5%86%85%E6%BA%90.html",{d:1691939318e3,e:`
<p>首页 --&gt; configure --&gt; Manage Jenkins --&gt; Advanced --&gt; Update Site（页面最下方‘升级站点’）替换URL为
清华大学仓库地址：</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://updates.jenkins.io/update-center.json
改为
https://mirror.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
</code></pre></div>`,r:{minutes:.15,words:45},y:"a",t:"修改Jenkins插件为国内"},["/note-book/Jenkins/修改Jenkins插件为国内源.html","/note-book/Jenkins/修改Jenkins插件为国内源.md",":md"]],["v-77aac963","/note-book/Kubernetes/Kubernetes%20Api%20Endpoint.html",{d:1691939318e3,e:`
<h2>总体检查</h2>
<h3>/livez?verbose 存活检查</h3>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/livez?verbose <span class="token parameter variable">-k</span>

<span class="token comment">#--cacert /etc/kubernetes/pki/ca.pem </span>
<span class="token comment">#--cert /etc/kubernetes/pki/apiserver.pem </span>
<span class="token comment">#--key /etc/kubernetes/pki/apiserver-key.pem</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre></div>`,r:{minutes:2.3,words:691},y:"a",t:"API规范"},["/note-book/Kubernetes/Kubernetes Api Endpoint.html","/note-book/Kubernetes/Kubernetes Api Endpoint.md",":md"]],["v-c66ad2a6","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html",{d:1691939318e3,e:`
<h3>Kubernetes Create Prometheus+Grafana</h3>
<h4>一、背景</h4>
<p>Prometheus作为一个采用tidb时序数据库为数据存储的监控软件，因为嵌合当前主流容器化，所以一直处于广泛使用的状态，常用监控面板grafana，可以接收多种dataresource，结合数据源支持的语法可以对数据进行分析，实时展示监控值。</p>
<h4>二、准备工作</h4>
<h5>1、主机分布</h5>
192.168.52.135(master)nfs-server
<p>nfs-server</p>
192.168.52.136(node01)nfs-client
`,r:{minutes:14.92,words:4477},y:"a",t:"Kubernetes Make Prometheus+Grafana"},["/note-book/Kubernetes/Kubernetes Make Prometheus_Grafana.html","/note-book/Kubernetes/Kubernetes Make Prometheus+Grafana.html","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus+Grafana.html","/note-book/Kubernetes/Kubernetes Make Prometheus+Grafana.md","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus+Grafana.md"]],["v-e9469f82","/note-book/Kubernetes/Kubernetes%20Service%20Account%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90Token.html",{d:1691939318e3,e:`
<p>果然两天不看就跟不上了，我的集群版本是 1.25.3，今天需要用 token 来做些事情，创建 serviceAccount 的时候发现没有生成 secret，查了一下发现从 1.24 开始就不会自动生成 secret 了，<a href="https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.24.md#urgent-upgrade-notes" target="_blank" rel="noopener noreferrer">chanagelog 在这里.</a></p>
<p>内容如下 LegacyServiceAccountTokenNoAutoGeneration 功能门是测试版，默认启用。启用后，不再为每个 ServiceAccount 自动生成包含服务帐户令牌的 Secret API 对象。使用 <a href="https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/authentication-resources/token-request-v1/" target="_blank" rel="noopener noreferrer">TokenRequest API</a> 获取服务帐户令牌，或者如果需要未过期的令牌，请按照<a href="https://kubernetes.io/docs/concepts/configuration/secret/#service-account-token-secrets" target="_blank" rel="noopener noreferrer">本指南</a>为令牌控制器创建一个 Secret API 对象以填充服务帐户令牌</p>`,r:{minutes:1.07,words:321},y:"a",t:"Kubernetes Service Account如何生成Token"},["/note-book/Kubernetes/Kubernetes Service Account如何生成Token.html","/note-book/Kubernetes/Kubernetes Service Account如何生成Token.md",":md"]],["v-2ece8d5e","/note-book/Kubernetes/Kubernetes%20crictl%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<ol>
<li>
<h1>介绍</h1>
</li>
</ol>
<p>crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。
2. # 安装 crictl</p>
<p>下载：https://github.com/kubernetes-sigs/cri-tools/releases
3. # 配置</p>
<p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p>`,r:{minutes:3.22,words:966},y:"a",t:"介绍"},["/note-book/Kubernetes/Kubernetes crictl管理命令详解.html","/note-book/Kubernetes/Kubernetes crictl管理命令详解.md",":md"]],["v-a0127118","/note-book/Kubernetes/Kubernetes%E6%9C%80%E5%B0%8F%E9%AB%98%E5%8F%AF%E7%94%A8%E6%9E%B6%E6%9E%84%E5%9B%BE.html",{d:1691939318e3,e:`<figure><figcaption>image-20220516192554705</figcaption></figure>
`,r:{minutes:.04,words:13},y:"a",t:""},["/note-book/Kubernetes/Kubernetes最小高可用架构图.html","/note-book/Kubernetes/Kubernetes最小高可用架构图.md",":md"]],["v-f5f5d002","/note-book/Kubernetes/Kubernetes%E6%9C%89%E5%93%AA%E4%BA%9B%E7%BB%84%E4%BB%B6.html",{d:1691939318e3,e:`
<figure><figcaption>image-20220516192342353</figcaption></figure>
<h1>Kube-scheduler</h1>
<figure><figcaption>image-20220516192353808</figcaption></figure>
<h1>Kube-kubelet</h1>
<figure><figcaption>image-20220516192411578</figcaption></figure>
<h1>Kube-proxy</h1>
<figure><figcaption>image-20220516192431476</figcaption></figure>`,r:{minutes:.32,words:96},y:"a",t:"组件汇总"},["/note-book/Kubernetes/Kubernetes有哪些组件.html","/note-book/Kubernetes/Kubernetes有哪些组件.md",":md"]],["v-01b130a4","/note-book/Kubernetes/Kubernetes%E7%9A%84NetworkPlicy.html",{d:1691939318e3,e:`
<p>网络策略（NetworkPolicy）是一种关于 Pod 间及与其他网络端点间所允许的通信规则的规范。</p>
<p>NetworkPolicy 资源使用 标签 选择 Pod，并定义选定 Pod 所允许的通信规则。</p>
<h1>语法</h1>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> NetworkPolicy
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>network<span class="token punctuation">-</span>policy
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">podSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">role</span><span class="token punctuation">:</span> db
  <span class="token key atrule">policyTypes</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> Ingress
 <span class="token punctuation">-</span> Egress
    <span class="token key atrule">ingress</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> <span class="token key atrule">from</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">ipBlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">cidr</span><span class="token punctuation">:</span> 172.17.0.0/16
        <span class="token key atrule">except</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 172.17.1.0/24
    <span class="token punctuation">-</span> <span class="token key atrule">namespaceSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
          <span class="token key atrule">project</span><span class="token punctuation">:</span> myproject
    <span class="token punctuation">-</span> <span class="token key atrule">podSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
          <span class="token key atrule">role</span><span class="token punctuation">:</span> frontend
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">egress</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">ipBlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">cidr</span><span class="token punctuation">:</span> 10.0.0.0/24
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5978</span>

</code></pre></div>`,r:{minutes:16.01,words:4803},y:"a",t:"简介"},["/note-book/Kubernetes/Kubernetes的NetworkPlicy.html","/note-book/Kubernetes/Kubernetes的NetworkPlicy.md",":md"]],["v-7f271bfb","/note-book/Kubernetes/NameSpace%20%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB%E9%9A%94%E7%A6%BB%E4%BA%86%E4%BB%80%E4%B9%88.html",{d:1691939318e3,e:`
<ul>
<li>只有实现如下隔离才能说应用程序是完全隔离的</li>
</ul>
<table>
<thead>
<tr>
<th>内容</th>
<th>备注</th>
<th>内核版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>PID</td>
<td>进程编号</td>
<td>2.6.24</td>
</tr>
<tr>
<td>NET</td>
<td>网络设备、网络协议栈、端口</td>
<td>2.6.29</td>
</tr>
<tr>
<td>IPC</td>
<td>信号量、消息队列、共享内存</td>
<td>2.6.19</td>
</tr>
<tr>
<td>MOUNT</td>
<td>文件系统</td>
<td>2.4.19</td>
</tr>
<tr>
<td>UTS</td>
<td>用户名和主机域</td>
<td>2.6.19</td>
</tr>
<tr>
<td>USER</td>
<td>操作系统的用户和用户组</td>
<td>3.8.x</td>
</tr>
</tbody>
</table>`,r:{minutes:.49,words:146},y:"a",t:"NameSpace 资源隔离"},["/note-book/Kubernetes/NameSpace 资源隔离隔离了什么.html","/note-book/Kubernetes/NameSpace 资源隔离隔离了什么.md",":md"]],["v-76d4e7bb","/note-book/Kubernetes/Request%E5%92%8CLimit.html",{d:1691939318e3,e:`
<p>一个问题是K8s里在定义容器资源时候的Request和Limit有啥联系和区别。</p>
<p>就是字面上的意思，request里定义的是k8s必须要保证的启动资源，limit是将来容器运行可能使用的资源上限。</p>
<p>Kube-scheduler通过request的定义来寻找一个可以满足需求的node，从而在node上启动对应的pod里所用的容器；但是容器运行之后因为业务的增长是可以使用超过request的资源的，但是最高只能用到limit里定义的资源，但是limit里定义的资源k8s是不能给确保提供的。</p>
<figure><figcaption>img</figcaption></figure>`,r:{minutes:.59,words:178},y:"a",t:"Requests和Limits"},["/note-book/Kubernetes/Request和Limit.html","/note-book/Kubernetes/Request和Limit.md",":md"]],["v-3d16ea04","/note-book/Kubernetes/SSL%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%8F%91.html",{d:1691939318e3,e:`<p>按照架构设计，在hdss7-12，hdss7-21, hdss7-22三台上部署etcd服务：</p>
<p>首先创建etcd用户：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># useradd -s /sbin/nologin -M etcd</span>
</code></pre></div><p>创建应用包存放目录</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir -p /opt/src
# cd /opt/src
</code></pre></div>`,r:{minutes:2.13,words:639},y:"a",t:""},["/note-book/Kubernetes/SSL证书签发.html","/note-book/Kubernetes/SSL证书签发.md",":md"]],["v-6cc6b7c2","/note-book/Kubernetes/crictl%E7%99%BB%E5%BD%95dockerhub.html",{d:1692599091e3,e:`
<h2>例子</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl pull <span class="token parameter variable">--creds</span> jockerdragon:xxxxxxx  eipwork/kuboard:v3


<span class="token parameter variable">--cert</span> username<span class="token punctuation">[</span>:password<span class="token punctuation">]</span> lai's
</code></pre></div>`,r:{minutes:.06,words:19},y:"a",t:"crictl登录dockerhub"},["/note-book/Kubernetes/crictl登录dockerhub.html","/note-book/Kubernetes/crictl登录dockerhub.md",":md"]],["v-575cf978","/note-book/Kubernetes/etcd%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%89%E8%8A%82%E7%82%B9%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> /opt/certs/ca-config.json
<span class="token punctuation">[</span>root@master1 cert<span class="token punctuation">]</span><span class="token comment"># cat ca-config.json</span>
<span class="token punctuation">{</span>
    <span class="token string">"signing"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"default"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"expiry"</span><span class="token builtin class-name">:</span> <span class="token string">"175200h"</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"profiles"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"kubernetes"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"usages"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"signing"</span>,
                    <span class="token string">"key encipherment"</span>,
                    <span class="token string">"server auth"</span>,
                    <span class="token string">"client auth"</span>
                <span class="token punctuation">]</span>,
                <span class="token string">"expiry"</span><span class="token builtin class-name">:</span> <span class="token string">"175200h"</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"server"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"expiry"</span><span class="token builtin class-name">:</span> <span class="token string">"175200h"</span>,
                <span class="token string">"usages"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"signing"</span>,
                    <span class="token string">"key encipherment"</span>,
                    <span class="token string">"server auth"</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"client"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"expiry"</span><span class="token builtin class-name">:</span> <span class="token string">"175200h"</span>,
                <span class="token string">"usages"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"signing"</span>,
                    <span class="token string">"key encipherment"</span>,
                    <span class="token string">"client auth"</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"peer"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"expiry"</span><span class="token builtin class-name">:</span> <span class="token string">"175200h"</span>,
                <span class="token string">"usages"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"signing"</span>,
                    <span class="token string">"key encipherment"</span>,
                    <span class="token string">"server auth"</span>,
                    <span class="token string">"client auth"</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

创建生成证书签名请求的csr文件；
<span class="token function">vi</span> /opt/certs/etcd-peer-csr.json
<span class="token punctuation">{</span>
    <span class="token string">"CN"</span><span class="token builtin class-name">:</span> <span class="token string">"etcd-peer"</span>,
    <span class="token string">"hosts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">"10.4.7.11"</span>,
        <span class="token string">"10.4.7.12"</span>,
        <span class="token string">"10.4.7.21"</span>,
        <span class="token string">"10.4.7.22"</span>
    <span class="token punctuation">]</span>,
    <span class="token string">"key"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"algo"</span><span class="token builtin class-name">:</span> <span class="token string">"rsa"</span>,
        <span class="token string">"size"</span><span class="token builtin class-name">:</span> <span class="token number">2048</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"names"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"C"</span><span class="token builtin class-name">:</span> <span class="token string">"CN"</span>,
            <span class="token string">"ST"</span><span class="token builtin class-name">:</span> <span class="token string">"beijing"</span>,
            <span class="token string">"L"</span><span class="token builtin class-name">:</span> <span class="token string">"beijing"</span>,
            <span class="token string">"O"</span><span class="token builtin class-name">:</span> <span class="token string">"od"</span>,
            <span class="token string">"OU"</span><span class="token builtin class-name">:</span> <span class="token string">"ops"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
生成证书：
<span class="token builtin class-name">cd</span> /opt/certs
certs<span class="token punctuation">]</span><span class="token comment"># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=peer etcd-peer-csr.json | cfssl-json -bare etcd-peer</span>
</code></pre></div>`,r:{minutes:2.63,words:789},y:"a",t:"在200的运维主机上创建生成CA证书的JSON配置文件"},["/note-book/Kubernetes/etcd 二进制三节点集群部署.html","/note-book/Kubernetes/etcd 二进制三节点集群部署.md",":md"]],["v-ac04e9ec","/note-book/Kubernetes/k8s%E5%88%A0%E9%99%A4Terminating%E7%8A%B6%E6%80%81ns.html",{d:1691939318e3,e:`
<h1>假设你要删掉ns资源，发现一直删不了处于terminating状态</h1>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># kubectl get ns</span>
NAME              STATUS        AGE
default           Active        7h11m
kube-flannel      Terminating   6h41m
kube-node-lease   Active        7h11m
kube-public       Active        7h11m
kube-system       Active        7h11m
</code></pre></div>`,r:{minutes:1.35,words:406},y:"a",t:"k8s删除Terminating状态ns"},["/note-book/Kubernetes/k8s删除Terminating状态ns.html","/note-book/Kubernetes/k8s删除Terminating状态ns.md",":md"]],["v-6b0a0620","/note-book/Kubernetes/kubeadm%E9%83%A8%E7%BD%B2Kubernetes%201.24%E6%AD%A5%E9%AA%A4.html",{d:1693278768e3,e:`
<h1>前言</h1>
<p>kubeadm 是 Kubernetes 官方提供的用于快速安部署 Kubernetes 集群的工具，伴随 Kubernetes 每个版本的发布都会同步更新，kubeadm 会对集群配置方面的一些实践做调整，通过实验 kubeadm 可以学习到 Kubernetes 官方在集群配置上一些新的最佳实践。</p>
<h1>一、准备</h1>
<h2>1.1、系统配置</h2>
<p>在安装之前，需要先做好如下准备。3 台 CentOS 7.9 主机如下：</p>
<pre><code>cat /etc/hosts
192.168.96.151    node1
192.168.96.152    node2
192.168.96.153    node3
</code></pre>`,r:{minutes:13.8,words:4140},y:"a",t:"kubeadm部署Kubernetes 1.24步骤"},["/note-book/Kubernetes/kubeadm部署Kubernetes 1.24步骤.html","/note-book/Kubernetes/kubeadm部署Kubernetes 1.24步骤.md",":md"]],["v-743045a2","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%80%EF%BC%89kubectl%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<h2>陈述式-主要依赖命令行工具</h2>
<p>--可以满足90%以上的使用场景，但是缺点也很明显：</p>
<p>命令冗长，复杂，难以记忆</p>
<p>特定场景下，无法实现管理需求</p>
<p>对资源的增、删、查操作比较容易，改比较麻烦，需要patch来使用json串来更改。</p>
<p><strong>1.1 查看名称空间</strong> 查询时，为了避免重名，需要指定名称空间。</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get namespace
简写：
# kubectl get ns
</code></pre></div>`,r:{minutes:4.68,words:1405},y:"a",t:"管理k8s核心资源的三种基本方法："},["/note-book/Kubernetes/kubernetes进阶（一）kubectl工具使用详解.html","/note-book/Kubernetes/kubernetes进阶（一）kubectl工具使用详解.md",":md"]],["v-16f9c44f","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html",{d:1691939318e3,e:`<p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p>
<p>服务发现需要解决的问题：</p>
<p>1、服务动态性强--容器在k8s中ip变化或迁移</p>
<p>2、更新发布频繁--版本迭代快</p>
<p>3、支持自动伸缩--大促或流量高峰</p>
<p>我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资源暴露的固定地址，来解决以上问题，</p>
<p>那么，如何解决service资源名称和service资源暴露出来的集群网络IP做自动的对应呢，从而达到服务的自动发现呢？</p>
<p>在k8s中，coredns就是为了解决以上问题。</p>`,r:{minutes:3.75,words:1125},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（三）服务发现-coredns.html","/note-book/Kubernetes/kubernetes进阶（三）服务发现-coredns.md",":md"]],["v-e9467f60","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%BA%8C%EF%BC%89%E6%A0%B8%E5%BF%83%E7%BD%91%E7%BB%9C%E6%8F%92%E4%BB%B6Flannel.html",{d:1691939318e3,e:`<p><strong>网络插件Flannel介绍：https://www.kubernetes.org.cn/3682.html</strong></p>
<p>首先，flannel利用Kubernetes API或者etcd用于存储整个集群的网络配置，其中最主要的内容为设置集群的网络地址空间。例如，设定整个集群内所有容器的IP都取自网段“10.1.0.0/16”。</p>
<p>接着，flannel在每个主机中运行flanneld作为agent，它会为所在主机从集群的网络地址空间中，获取一个小的网段subnet，本主机内所有容器的IP地址都将从中分配。</p>
<p>然后，flanneld再将本主机获取的subnet以及用于主机间通信的Public IP，同样通过kubernetes API或者etcd存储起来。</p>`,r:{minutes:3.01,words:902},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（二）核心网络插件Flannel.html","/note-book/Kubernetes/kubernetes进阶（二）核心网络插件Flannel.md",":md"]],["v-089e219f","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%BA%94%EF%BC%89dashboard--WEB%E7%AE%A1%E7%90%86.html",{d:1691939318e3,e:`<p>dashboard是k8s的可视化管理平台，是三种管理k8s集群方法之一</p>
<p>首先下载镜像上传到我们的私有仓库中：hdss7-200</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># docker pull k8scn/kubernetes-dashboard-amd64:v1.8.3
# docker tag fcac9aa03fd6 harbor.od.com/public/dashboard:v1.8.3
# docker push harbor.od.com/public/dashboard:v1.8.3
</code></pre></div>`,r:{minutes:3.43,words:1029},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（五）dashboard--WEB管理.html","/note-book/Kubernetes/kubernetes进阶（五）dashboard--WEB管理.md",":md"]],["v-1c63547c","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%85%AD%EF%BC%89k8s%E5%B9%B3%E6%BB%91%E5%8D%87%E7%BA%A7.html",{d:1691939318e3,e:`<p>当我们遇到K8S有漏洞的时候，或者为了满足需求，有时候可能会需要升级或者降级版本，</p>
<p>为了减少对业务的影响，尽量选择在业务低谷的时候来升级：</p>
<p>首先准备好文件：我这里选择的是内网文件服务器上下载的，请自行下载所需的k8s源文件：3</p>
<p>这里演示更换一个节点：7-21</p>
<p>查看版本：将7-21更换成1.15.2</p>
<figure><figcaption>img</figcaption></figure>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/src
</code></pre></div>`,r:{minutes:1.54,words:463},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（六）k8s平滑升级.html","/note-book/Kubernetes/kubernetes进阶（六）k8s平滑升级.md",":md"]],["v-07fca106","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%9B%9B%EF%BC%89%E6%9C%8D%E5%8A%A1%E6%9A%B4%E9%9C%B2-ingress%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B9%8Btraefik.html",{d:1691939318e3,e:`<p>上一章我们测试了在集群内部解析service名称，</p>
<p>下面我们测试在集群外部解析：</p>
<figure><figcaption>img</figcaption></figure>
<p>根本解析不到，因为我们外部用的dns是10.4.7.11，也就是我们的自建bind dns，这个DNS服务器上也没有响应的搜索域。</p>
<p>如何能让集群外部访问nginx-dp？</p>
<p>这里有两种服务暴露方式：修改工作模式，在kube-proxy中修改，并重启</p>
<p>1、使用nodeport方式，但是这种方式不能使用ipvs，只能使用iptables，iptables只能使用rr调度方式。原理相当于端口映射，将容器内的端口映射到宿主机上的某个端口。</p>`,r:{minutes:2.51,words:753},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（四）服务暴露-ingress控制器之traefik.html","/note-book/Kubernetes/kubernetes进阶（四）服务暴露-ingress控制器之traefik.md",":md"]],["v-4baada5c","/note-book/Kubernetes/%E4%B8%80%E6%AC%A1kubeadm%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9%E5%87%BA%E7%8E%B0etcd%E6%A3%80%E6%9F%A5%E9%94%99%E8%AF%AF.html",{d:1691939318e3,e:`
<blockquote>
<p>错误关键字</p>
<p>执行 kubeadm join... 时</p>
<p>[check-etcd] Checking that the etcd cluster is healthy</p>
<p>error execution phase check-etcd: etcd cluster is not healthy: failed to dial endpoint https://10.8.18.105:2379 with maintenance client: context deadline exceeded To see the stack trace of this error execute with --v=5 or higher</p>
</blockquote>`,r:{minutes:3.92,words:1175},y:"a",t:"一次kubeadm添加节点出现etcd检查错误"},["/note-book/Kubernetes/一次kubeadm添加节点出现etcd检查错误.html","/note-book/Kubernetes/一次kubeadm添加节点出现etcd检查错误.md",":md"]],["v-5b225804","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%83%EF%BC%89%20%E9%83%A8%E7%BD%B2%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.html",{d:1691939318e3,e:`<p>1、k8s各个组件之间通信，在高版本中，基本都是使用TSL通信，所以申请证书，是必不可少的，而且建议使用二进制安装，或者在接手一套K8S集群的时候，第一件事情是检查证书有效期，证书过期或者TSL通信问题会报x509相关错误。</p>
<p>可以从k8s kubelet-kuberconfig 使用 echo '证书' | base64 -d 反解获得k8s证书(比如阿里云)</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl-certinfo -domain=ca.pem -cert=client.pem
</code></pre></div>`,r:{minutes:1.62,words:485},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（七） 部署知识点总结.html","/note-book/Kubernetes/二进制安装kubernetes（七） 部署知识点总结.md",":md"]],["v-aa3e3ee8","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%89%EF%BC%89%20kube-controller-manager%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<h3>Controller Manager简介</h3>
<p>详细介绍请参考链接：<a href="https://blog.csdn.net/bbwangj/article/details/82557705" target="_blank" rel="noopener noreferrer">Kubernetes组件之kube-controller-manager</a></p>
<p>Controller  Manager作为集群内部的管理控制中心，负责集群内的Node、Pod副本、服务端点（Endpoint）、命名空间（Namespace）、服务账号（ServiceAccount）、资源定额（ResourceQuota）的管理，当某个Node意外宕机时，Controller Manager会及时发现并执行自动化修复流程，确保集群始终处于预期的工作状态。</p>`,r:{minutes:1.17,words:352},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（三） kube-controller-manager组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（三） kube-controller-manager组件安装.md",":md"]],["v-81834800","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%8C%EF%BC%89%20kube-apiserver%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<p>根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上：</p>
<p>首先在hdss7-200上申请证书并拷贝到21和22上：</p>
<p>创建证书文件：</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/certs
# vi client-csr.json
</code></pre></div><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>{
    "CN": "k8s-node",
    "hosts": [
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "ST": "beijing",
            "L": "beijing",
            "O": "od",
            "OU": "ops"
        }
    ]
}
</code></pre></div>`,r:{minutes:5.15,words:1544},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（二） kube-apiserver组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（二） kube-apiserver组件安装.md",":md"]],["v-7e1d67ea","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%94%EF%BC%89%20kubelet%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`
<p>![img](二进制安装kubernetes（五） kubelet组件安装.assets/1034759-20191113174751232-1888238592-16918405999271.png)</p>
<p>Kubelet组件运行在Node节点上，维持运行中的Pods以及提供kuberntes运行时环境，主要完成以下使命：
１．监视分配给该Node节点的pods
２．挂载pod所需要的volumes
３．下载pod的secret
４．通过docker/rkt来运行pod中的容器
５．周期的执行pod中为容器定义的liveness探针
６．上报pod的状态给系统的其他组件
７．上报Node的状态</p>`,r:{minutes:2.77,words:830},y:"a",t:"概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350"},["/note-book/Kubernetes/二进制安装kubernetes（五） kubelet组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（五） kubelet组件安装.md",":md"]],["v-e936c158","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89%20kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<p><strong>Kube-Proxy简述</strong></p>
<p>参考文献：
https://ywnz.com/linuxyffq/2530.html</p>
<p>运行在每个节点上，监听 API Server 中服务对象的变化，再通过管理 IPtables 来实现网络的转发
Kube-Proxy 目前支持三种模式：</p>
<ul>
<li>
<p>UserSpace</p>
<ul>
<li>k8s v1.2 后就已经淘汰</li>
</ul>
</li>
<li>
<p>IPtables</p>
<ul>
<li>目前默认方式</li>
</ul>
</li>
<li>
<p>IPVS--推荐，支持7层</p>
<ul>
<li>需要安装ipvsadm、ipset 工具包和加载 ip_vs 内核模块</li>
</ul>
</li>
</ul>`,r:{minutes:2.4,words:720},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（六） kube-proxy组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（六） kube-proxy组件安装.md",":md"]],["v-53c4fe8d","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%9B%9B%EF%BC%89%20kube-scheduler%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`
<h1>kube-scheduler在集群中的作用</h1>
<p>kube-scheduler是以插件形式存在的组件，正因为以插件形式存在，所以其具有可扩展可定制的特性。kube-scheduler相当于整个集群的调度决策者，其通过预选和优选两个过程决定容器的最佳调度位置。</p>
<h1>kube-scheduler源码中的关键性调用链</h1>
<p>![img](二进制安装kubernetes（四） kube-scheduler组件安装.assets/webp-16918409243531.webp)</p>
<p>kube-scheduler部署在hdss7-21,22上：</p>`,r:{minutes:1.45,words:436},y:"a",t:"介绍资料转载地址：https://www.jianshu.com/p/c4c60ccda8d0"},["/note-book/Kubernetes/二进制安装kubernetes（四） kube-scheduler组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（四） kube-scheduler组件安装.md",":md"]],["v-639f36bc","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E9%83%A8%E7%BD%B2Kubernetes.html",{d:1691939318e3,e:`
<table>
<thead>
<tr>
<th>主机名</th>
<th>ip</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>harbor.cidana.com</td>
<td>192.168.0.94/24</td>
<td>签发证书，容器仓库，NFS</td>
</tr>
<tr>
<td>master1.cidana.com</td>
<td>192.168.0.84/24</td>
<td></td>
</tr>
<tr>
<td>master2.cidana.com</td>
<td>192.168.0.172/24</td>
<td></td>
</tr>
<tr>
<td>worker1.cidana.com</td>
<td>192.168.0.88/24</td>
<td></td>
</tr>
<tr>
<td>worker2.cidana.com</td>
<td>192.168.0.86/24</td>
<td></td>
</tr>
<tr>
<td>DNS&amp;&amp;DHCP&amp;&amp;smb</td>
<td>192.168.0.543/24</td>
<td>Fileserver</td>
</tr>
</tbody>
</table>`,r:{minutes:2.97,words:891},y:"a",t:"架构"},["/note-book/Kubernetes/二进制部署Kubernetes.html","/note-book/Kubernetes/二进制部署Kubernetes.md",":md"]],["v-5823502a","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFLabel%E5%92%8CLabel%E9%80%89%E6%8B%A9%E5%99%A8.html",{d:1691939318e3,e:`<figure><figcaption>image-20220516192131245</figcaption></figure>
<h1>Label：</h1>
<ul>
<li>Label value 最多63个字节</li>
<li>并且只能是字母和数字开头</li>
</ul>
<h1>Label Select：</h1>
<ul>
<li>有两种选择方式</li>
</ul>
`,r:{minutes:.15,words:44},y:"a",t:"Label："},["/note-book/Kubernetes/什么是Label和Label选择器.html","/note-book/Kubernetes/什么是Label和Label选择器.md",":md"]],["v-7544ffb4","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFName%E5%92%8CNameSpace.html",{d:1691939318e3,e:`<figure><figcaption>image-20220516192028904</figcaption></figure>
`,r:{minutes:.03,words:10},y:"a",t:""},["/note-book/Kubernetes/什么是Name和NameSpace.html","/note-book/Kubernetes/什么是Name和NameSpace.md",":md"]],["v-95889b98","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFPod%E5%92%8CPod%E6%8E%A7%E5%88%B6%E5%99%A8.html",{d:1691939318e3,e:`
<figure><figcaption>image-20220516191925621</figcaption></figure>
<h1>Deployment 部署</h1>
<h1>DaemonSet 每个运算节点都起一份</h1>
<h1>ReplicaSet -管理-&gt; DaemonSet -管理-&gt; Pod</h1>
<h1>StatefulSet 管理有状态应用</h1>
<h1>Job 任务</h1>
<h1>Cronjob 定时周期任务</h1>
`,r:{minutes:.21,words:62},y:"a",t:"什么是Pod和Pod控制器"},["/note-book/Kubernetes/什么是Pod和Pod控制器.html","/note-book/Kubernetes/什么是Pod和Pod控制器.md",":md"]],["v-b33727c8","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFService%E5%92%8CIngress.html",{d:1691939318e3,e:`
<figure><figcaption>image-20220516192235849</figcaption></figure>
<h1>流量调度</h1>
<p>4层和7层  业务域流量调度</p>
`,r:{minutes:.11,words:32},y:"a",t:"什么是Service和Ingress"},["/note-book/Kubernetes/什么是Service和Ingress.html","/note-book/Kubernetes/什么是Service和Ingress.md",":md"]],["v-4f01f3b8","/note-book/Kubernetes/%E4%BD%BF%E7%94%A8%20vmagent%20%E4%BB%A3%E6%9B%BF%20Prometheus%20%E9%87%87%E9%9B%86%E7%9B%91%E6%8E%A7%E6%8C%87%E6%A0%87.html",{d:1691939318e3,e:`<p>vmagent 可以帮助我们从各种来源收集指标并将它们存储在 VM 或者任何其他支持 remote write 协议的 Prometheus 兼容的存储系统中。</p>
<h1>特性</h1>
<p>vmagent 相比于 Prometheus 抓取指标来说具有更多的灵活性，比如除了拉取（pull）指标还可以推送（push）指标，此外还有很多其他特性：</p>
<ul>
<li>可以替换 prometheus 的 scraping target</li>
<li>支持从 Kafka 读写数据</li>
<li>支持基于 prometheus relabeling 的模式添加、移除、修改 labels，可以在数据发送到远端存储之前进行数据的过滤</li>
<li>支持多种数据协议，influx line 协议，graphite 文本协议，opentsdb 协议，prometheus remote write 协议，json lines 协议，csv 数据等</li>
<li>支持收集数据的同时，并复制到多种远端存储系统</li>
<li>支持不可靠远端存储，如果远程存储不可用，收集的指标会在 <code>-remoteWrite.tmpDataPath</code> 缓冲，一旦与远程存储的连接被修复，缓冲的指标就会被发送到远程存储，缓冲区的最大磁盘用量可以用 <code>-remoteWrite.maxDiskUsagePerURL</code> 来限制。</li>
<li>相比 prometheus 使用更少的内存、cpu、磁盘 io 以及网络带宽</li>
<li>当需要抓取大量目标时，抓取目标可以分散到多个 vmagent 实例中</li>
<li>可以通过在抓取时间和将其发送到远程存储系统之前限制唯一时间序列的数量来处理高基数和高流失率问题</li>
<li>可以从多个文件中加载 scrape 配置</li>
</ul>`,r:{minutes:8.74,words:2623},y:"a",t:"特性"},["/note-book/Kubernetes/使用 vmagent 代替 Prometheus 采集监控指标.html","/note-book/Kubernetes/使用 vmagent 代替 Prometheus 采集监控指标.md",":md"]],["v-23bf45e1","/note-book/Kubernetes/%E5%B8%B8%E7%94%A8%E4%BC%98%E5%8C%96.html",{d:1691939318e3,e:`
<pre><code>limit优化

ulimit -SHn 65535
</code></pre>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf

* soft nofile <span class="token number">655360</span>
* hard nofile <span class="token number">131072</span>
* soft nproc <span class="token number">655350</span>
* hard nproc <span class="token number">655350</span>
* soft memlock unlimited
* hard memlock unlimited
  EOF
</code></pre></div>`,r:{minutes:1.13,words:340},y:"a",t:"主机系统优化"},["/note-book/Kubernetes/常用优化.html","/note-book/Kubernetes/常用优化.md",":md"]],["v-0a8284ed","/note-book/Kubernetes/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%BC%82%E5%B8%B8%E6%96%AD%E7%94%B5%E9%80%A0%E6%88%90kubernetes%E6%95%85%E9%9A%9C.html",{d:1692346453e3,e:`
<blockquote>
<p>http://31mwww.linuxea.com/2580.html
https://blog.csdn.net/liuyij3430448/article/details/130406844
因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电。总共30几台吧。</p>
<p>经过检查和擦拭内存金手指，服务器正常开机。</p>
<p>老家伙你不能倒下啊。你不run了我就得run啊。。。</p>
</blockquote>
<h2>服务器显示状态</h2>
<figure><figcaption>image-20230818150814096</figcaption></figure>`,r:{minutes:5.26,words:1579},y:"a",t:"断电造成kubernetes故障"},["/note-book/Kubernetes/记一次异常断电造成kubernetes故障.html","/note-book/Kubernetes/记一次异常断电造成kubernetes故障.md",":md"]],["v-788034ca","/note-book/LinuxFromScratch/LFS-NoteBook.html",{d:1691939318e3,e:`
<h2>LF规定的包</h2>
<table>
<thead>
<tr>
<th>类型</th>
<th>包</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>LSB Core:</em></td>
<td>Bash, Bc, Binutils, Coreutils, Diffutils, File, Findutils,Gawk, Grep, Gzip, M4, Man-DB, Ncurses, Procps, Psmisc, Sed,Shadow, Tar, Util-linux, Zlib</td>
</tr>
<tr>
<td><em>LSB Desktop:</em></td>
<td>无</td>
</tr>
<tr>
<td><em>LSB Runtime Languages:</em></td>
<td>Perl, Python</td>
</tr>
<tr>
<td><em>LSB Imaging:</em></td>
<td>无</td>
</tr>
<tr>
<td><em>LSB Gtk3和LSB Graphics (试用):</em></td>
<td>无</td>
</tr>
</tbody>
</table>`,r:{minutes:62.72,words:18816},y:"a",t:"LFS编译笔记以深入了解Linux"},[":md"]],["v-5133ac50","/note-book/LinuxOperaSystem/Linux%E5%A4%87%E4%BB%BD%E4%B8%BAliveOS.html",{d:1698989873e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/375912899</p>
</blockquote>
<p>#基于Systemback⼯具实现ubuntu系统的镜像归档、复制和克隆安装#</p>
<h2>⼀、准备⼯作</h2>
<ol>
<li>待克隆的ubuntu系统主机</li>
<li>U盘，≥8G</li>
<li>新的主机（什么操作系统⽆限制）</li>
</ol>
<h2>⼆、注意事项</h2>
<p>⾃主程序不要安装在系统根⽬录“/”下，否则可能导致程序克隆不成功，建议安装在/opt⽬录下三、步骤：安装systemback⼯具 -&gt; 制作镜像 -&gt; 刻录U盘 -&gt; U盘启动安装</p>`,r:{minutes:3.39,words:1017},y:"a",t:"使用Systemback克隆Ubuntu系统"},["/note-book/LinuxOperaSystem/Linux备份为liveOS.html","/note-book/LinuxOperaSystem/Linux备份为liveOS.md",":md"]],["v-1c82387b","/note-book/LinuxOperaSystem/bash%E5%88%A9%E7%94%A8%E6%89%A9%E5%B1%95%E5%AD%97%E7%AC%A6%E9%9B%86%E5%AE%9E%E7%8E%B0rm.html",{d:1700560048e3,e:`
<h2>事出有因</h2>
<p>昨天在群里看到一个暴躁老哥遇到了一个恶搞教程,使用一段特殊的代码删除了自己的/home目录。气的他直骂自己是傻逼。</p>
<p>果然，自己的快乐是建立在别人的痛苦之上的，不好意思我笑出声来了。</p>
<figure><figcaption>image-20231121165908477</figcaption></figure>
<figure><figcaption>5FEC69FE77FFF255977FC97C31C2E6D7</figcaption></figure>
<p>这个是什么意思呢？我这边查了一些资料然后把过程记录下来。</p>
<h2>过程</h2>`,r:{minutes:6.5,words:1949},y:"a",t:"bash利用扩展字符集实现rm"},["/note-book/LinuxOperaSystem/bash利用扩展字符集实现rm.html","/note-book/LinuxOperaSystem/bash利用扩展字符集实现rm.md",":md"]],["v-759f12ff","/note-book/LinuxOperaSystem/grub2%E6%89%8B%E5%8A%A8%E5%91%BD%E4%BB%A4%E5%BC%95%E5%AF%BC%E6%95%99%E7%A8%8B.html",{d:1698989873e3,e:`
<h2>手动引导ubuntu的iso镜像文件</h2>
<p>从而安装ubuntu，grub&gt;代表命令的开始</p>
<p>假设ubuntu镜像在U盘的第一个分区的根目录下即：(hd0,1)/ubuntu-18.04-desktop-amd64.iso</p>
<p>手动引导下可以按TAB键补全命令、目录以及文件名</p>
<pre><code>#查询所有已安装磁盘并打印详细信息
grub&gt;ls -l
 
 #设置根目录分区
grub&gt;set root=(hd0,1)
 
#将Ubuntu.iso位置赋值给变量isofile （这里用变量方便下面不用打一长串文件名）
grub&gt;set isofile=/ubuntu-18.04-desktop-amd64.iso
 
#使用grub2的回放技术，把ubuntu.iso的文件内容，投射（挂载）到loop上。在使用这个命令时，你得考虑你的内存足够的大。(hd0,1)iso镜像文件所在分区
grub&gt;loopback loop (hd0,1)$isofile
 
#加载内核，其中(loop),是使用了上一句所投射的设备，其访问的是ubuntu.iso文件的内容，boor=casper将目录casper挂载为boot，iso-scan/filename=$isofile 是利用iso-scan来寻找到你的ubuntu.iso文件所在位置并把所找到的iso文件挂到光驱设备
grub&gt;linux (loop)/casper/vmlinuz boot=casper iso-scan/filename=$isofile quiet splash
 
#initrid.lz是一个镜象文件，里面存的是一些内核要加载的重要文件
grub&gt;initrd (loop)/casper/initrd.lz
 
#根据上面的参数启动系统
grub&gt;boot
</code></pre>`,r:{minutes:2.96,words:889},y:"a",t:"grub2各种手动命令引导教程"},["/note-book/LinuxOperaSystem/grub2手动命令引导教程.html","/note-book/LinuxOperaSystem/grub2手动命令引导教程.md",":md"]],["v-eeb679e4","/note-book/LinuxOperaSystem/shell%E8%84%9A%E6%9C%AC%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%B7%A5%E5%85%B7shc.html",{d:1698989873e3,e:`
<h1>一.简单介绍</h1>
<p>shc是linux的一款加密脚本的插件，将shc放到系统的可执行目录下我们可以直接运行shc命令</p>
<h1>二.shc的安装</h1>
<div class="language-less" data-ext="less" data-title="less"><pre class="language-less"><code>[root<span class="token variable">@disk</span> ~]#yum install gcc <span class="token operator">-</span>y
[root<span class="token variable">@disk</span> ~]#curl <span class="token operator">-</span>fsSl <span class="token property">http</span><span class="token punctuation">:</span><span class="token comment">//www.datsi.fi.upm.es/~frosal/sources/shc-3.8.9.tgz &gt; shc-3.8.9.tgz</span>
[root<span class="token variable">@disk</span> ~]#tar zxf shc<span class="token operator">-</span>3.8.9.tgz
[root<span class="token variable">@disk</span> ~]#cd shc<span class="token operator">-</span>3.8.9
[root<span class="token variable">@disk</span> ~]#make
[root<span class="token variable">@disk</span> ~]#mv shc <span class="token operator">/</span>bin<span class="token operator">/</span>
[root<span class="token variable">@disk</span> ~]#cd
</code></pre></div>`,r:{minutes:1.81,words:544},y:"a",t:"shc 脚本加密解密工具"},["/note-book/LinuxOperaSystem/shell脚本加密解密工具shc.html","/note-book/LinuxOperaSystem/shell脚本加密解密工具shc.md",":md"]],["v-0419e184","/note-book/LinuxOperaSystem/shell%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E9%9A%90%E8%97%8F%E5%91%BD%E4%BB%A4.html",{d:1703659344e3,c:["Linux","Shell","神操作"],e:`
<h2>隐藏命令</h2>
<p>当这个函数被调用时，无论传入什么命令，该命令的输出和错误信息都不会显示在终端上，而是会被丢弃。用户不会在终端上看到任何内容。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">ls</span> <span class="token punctuation">{</span>
    <span class="token comment"># 将命令的标准输出和标准错误重定向到 /dev/null 中</span>
    <span class="token string">"<span class="token variable">$@</span>"</span> <span class="token operator">&amp;&gt;</span>/dev/null    <span class="token comment"># 删除斜线，因为jinja2冲突</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.36,words:109},y:"a",t:"shell通过函数隐藏命令"},["/note-book/LinuxOperaSystem/shell通过函数隐藏命令.html","/note-book/LinuxOperaSystem/shell通过函数隐藏命令.md",":md"]],["v-19869778","/note-book/LinuxOperaSystem/ssh%20%E8%AE%BE%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html",{d:1698989873e3,e:`
<blockquote>
<p>SSH -R是一种SSH远程端口转发技术，它可以将本地端口转发到远程服务器上，从而实现远程访问本地服务的功能。具体来说，SSH  -R会在远程服务器上启动一个监听指定端口的进程，并将所有传入的连接转发到本地主机的指定端口。这样，您就可以在远程服务器上访问本地主机上运行的服务，而无需将服务直接暴露在公共网络中。</p>
</blockquote>
<h2>什么是ssh -R</h2>
<p>SSH -R是一种远程端口转发技术，它可以将本地端口转发到远程服务器上，从而实现远程访问本地服务的功能。</p>
<h2>目标</h2>
<p>在本文中，我们将使用SSH -R来更新私有服务器的hosts文件，并让mirrors.aliyun.com可用。</p>`,r:{minutes:2.09,words:628},y:"a",t:"使用SSH -R将私有服务器上网"},["/note-book/LinuxOperaSystem/ssh 设置反向代理.html","/note-book/LinuxOperaSystem/ssh 设置反向代理.md",":md"]],["v-0c50d2dd","/note-book/LinuxOperaSystem/ssh%E6%8A%8A%E8%BF%9C%E7%A8%8B%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%88%B0%E6%9C%AC%E5%9C%B0.html",{d:1698989873e3,e:`
<h2>应用场景1： docker容器端口映射到本地</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">80</span>:172.18.0.3:80 root@43.136.116.195
</code></pre></div>`,r:{minutes:1.33,words:398},y:"a",t:"ssh把远程端口映射到本地"},["/note-book/LinuxOperaSystem/ssh把远程端口映射到本地.html","/note-book/LinuxOperaSystem/ssh把远程端口映射到本地.md",":md"]],["v-e5c7a1ce","/note-book/LinuxOperaSystem/tcpdump%E6%8A%93%E5%8C%85%E5%91%BD%E4%BB%A4.html",{d:1698989873e3,e:`
<blockquote>
<p>简介：tcpdump是一个可以根据需求来抓取网络上传输的数据包的工具</p>
</blockquote>
<h1>常用的命令选项有：</h1>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>-c：设定抓取的数量
-i：指定监听的网口
-w：将抓取的数据包保存到文件
-s：截取报文的内容，默认截取96字节，-s0表示截取全部
-r：读取数据包内容
-C 10：每10M保存一个包
-G 600：每10分钟保存一个包

过滤的参数规则：
host：指定主机名
net：指定网段
port：指定端口
portrange：指定端口范围

连接运算符
and：所有的条件都满足
or：只要满足一个条件
not：取反，也可以用！
</code></pre></div>`,r:{minutes:.91,words:273},y:"a",t:"tcpdump抓包命令"},["/note-book/LinuxOperaSystem/tcpdump抓包命令.html","/note-book/LinuxOperaSystem/tcpdump抓包命令.md",":md"]],["v-28d01994","/note-book/LinuxOperaSystem/%E5%91%BD%E4%BB%A4%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9F%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html",{d:1698989873e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/81767176</p>
</blockquote>
<h2>1.使用 dd 命令创建虚拟镜像文件</h2>
<figure><figcaption>img</figcaption></figure>
<h2>2.使用 mkfs 命令格式化磁盘（我们这里是自己创建的虚拟磁盘镜像）</h2>
<figure><figcaption>img</figcaption></figure>
<p>查看Linux 支持哪些文件系统</p>
<figure><figcaption>img</figcaption></figure>`,r:{minutes:1.42,words:427},y:"a",t:"使用命令创建虚拟镜像文件"},["/note-book/LinuxOperaSystem/命令创建虚拟镜像文件.html","/note-book/LinuxOperaSystem/命令创建虚拟镜像文件.md",":md"]],["v-156dfb56","/note-book/LinuxOperaSystem/%E6%8C%89%E7%94%B5%E6%BA%90%E8%BD%AF%E5%85%B3%E6%9C%BA%E8%A6%81%E7%AD%89%E5%BE%8560%E7%A7%92%E8%AE%BE%E7%BD%AE%E6%9B%B4%E7%9F%AD%E7%9A%84%E6%97%B6%E9%97%B4.html",{d:1698989873e3,e:`
<p>Ubuntu 20.04默认情况下按电源键软关机会等待60秒，但是你可以通过修改系统配置文件来更改这个时间。具体步骤如下：</p>
<h2>打开终端（快捷键：Ctrl+Alt+T）。</h2>
<h2>输入以下命令打开配置文件：</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>sudo nano /etc/systemd/system.conf
</code></pre></div><h2>在打开的文件中找到以下行：</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>#DefaultTimeoutStopSec=90s
</code></pre></div>`,r:{minutes:.67,words:201},y:"a",t:"Ubuntu20.04按电源软关机要等待60秒，可以设置更短的时间吗?"},["/note-book/LinuxOperaSystem/按电源软关机要等待60秒设置更短的时间.html","/note-book/LinuxOperaSystem/按电源软关机要等待60秒设置更短的时间.md",":md"]],["v-3d933afb","/note-book/LinuxOperaSystem/%E7%94%A8shell%E7%94%9F%E6%88%90%E5%8C%85%E5%90%AB%E5%A4%A7%E5%86%99%E3%80%81%E5%B0%8F%E5%86%99%E3%80%81%E6%95%B0%E5%AD%97%E3%80%81%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E7%9A%84%E9%9A%8F%E6%9C%BA%E5%AD%97%E7%AC%A6%E4%B8%B2.html",{d:1705037861e3,e:`
<h1><strong>tr命令</strong></h1>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># &lt;/dev/urandom tr -dc  'A-Za-z0-9!"#$%&amp;'\\''()*+,-./:;&lt;=&gt;?@[\\]^_\`{|}~' | head -c 15 ; echo</span>

<span class="token comment"># tr -dc   'A-Za-z0-9!"#$%&amp;'\\''()*+,-./:;&lt;=&gt;?@[\\]^_\`{|}~'   &lt;/dev/urandom | head -c 15; echo</span>
</code></pre></div>`,r:{minutes:.18,words:54},y:"a",t:"用shell生成包含大写、小写、数字、特殊字符的随机字符串"},["/note-book/LinuxOperaSystem/用shell生成包含大写、小写、数字、特殊字符的随机字符串.html","/note-book/LinuxOperaSystem/用shell生成包含大写、小写、数字、特殊字符的随机字符串.md",":md"]],["v-7208e0fe","/note-book/LinuxOperaSystem/%E8%AE%A9%E6%9F%90%E4%B8%AA%E5%91%BD%E4%BB%A4%E4%B8%8D%E8%BE%93%E5%87%BA.html",{d:1698989873e3,e:`
<p>假如让ls命令不输出</p>
<p>正常情况下</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token operator">&amp;&gt;</span>/dev/null
</code></pre></div><p>但是这并不符合我们的要求,ls -l，就会失效</p>
<p>~/.bashrc</p>
<div class="language-bashrc" data-ext="bashrc" data-title="bashrc"><pre class="language-bashrc"><code>function ls {
    # 将命令的标准输出和标准错误重定向到 /dev/null 中
    "$@" &amp;&gt;/dev/null
}


printf "\\n"
printf "   %s\\n" "用户名: $(echo $USER)"
printf "   %s\\n" "日期: $(date)"
printf "   %s\\n" "运行时间: $(uptime -p)"
printf "   %s\\n" "主机名: $(hostname -f)"
printf "   %s\\n" "内核: $(uname -rms)"
printf "   %s\\n" "包个数: $(rpm -qa | wc -l)"
printf "   %s\\n" "分辨率: $(xrandr | awk '/\\*/{printf $1" "}')"
printf "   %s\\n" "内存: $(free -m -h | awk '/内存/{print $3"/"$2}')"
printf "\\n"




</code></pre></div>`,r:{minutes:.5,words:149},y:"a",t:"让某个命令不输出"},["/note-book/LinuxOperaSystem/让某个命令不输出.html","/note-book/LinuxOperaSystem/让某个命令不输出.md",":md"]],["v-91b6e760","/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html",{d:1705981137e3,e:`
<h2>参数</h2>
<div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>$args                    <span class="token comment">#请求中的参数值</span>
$query_string            <span class="token comment">#同 $args</span>
$arg_NAME                <span class="token comment">#GET请求中NAME的值</span>
$is_args                 <span class="token comment">#如果请求中有参数，值为"?"，否则为空字符串</span>
$uri                     <span class="token comment">#请求中的当前URI(不带请求参数，参数位于$args)，可以不同于浏览器传递的$request_uri的值，它可以通过内部重定向，或者使用index指令进行修改，$uri不包含主机名，如"/foo/bar.html"。</span>
$document_uri            <span class="token comment">#同 $uri</span>
$document_root           <span class="token comment">#当前请求的文档根目录或别名</span>
$host                    <span class="token comment">#优先级：HTTP请求行的主机名&gt;"HOST"请求头字段&gt;符合请求的服务器名.请求中的主机头字段，如果请求中的主机头不可用，则为服务器处理请求的服务器名称</span>
$hostname                <span class="token comment">#主机名</span>
$https                   <span class="token comment">#如果开启了SSL安全模式，值为"on"，否则为空字符串。</span>
$binary_remote_addr      <span class="token comment">#客户端地址的二进制形式，固定长度为4个字节</span>
$body_bytes_sent         <span class="token comment">#传输给客户端的字节数，响应头不计算在内；这个变量和Apache的mod_log_config模块中的"%B"参数保持兼容</span>
$bytes_sent              <span class="token comment">#传输给客户端的字节数</span>
$connection              <span class="token comment">#TCP连接的序列号</span>
$connection_requests     <span class="token comment">#TCP连接当前的请求数量</span>
$content_length          <span class="token comment">#"Content-Length" 请求头字段</span>
$content_type            <span class="token comment">#"Content-Type" 请求头字段</span>
$cookie_name             <span class="token comment">#cookie名称</span>
$limit_rate              <span class="token comment">#用于设置响应的速度限制</span>
$msec                    <span class="token comment">#当前的Unix时间戳</span>
$nginx_version           <span class="token comment">#nginx版本</span>
$pid                     <span class="token comment">#工作进程的PID</span>
$pipe                    <span class="token comment">#如果请求来自管道通信，值为"p"，否则为"."</span>
$proxy_protocol_addr     <span class="token comment">#获取代理访问服务器的客户端地址，如果是直接访问，该值为空字符串</span>
$realpath_root           <span class="token comment">#当前请求的文档根目录或别名的真实路径，会将所有符号连接转换为真实路径</span>
$remote_addr             <span class="token comment">#客户端地址</span>
$remote_port             <span class="token comment">#客户端端口</span>
$remote_user             <span class="token comment">#用于HTTP基础认证服务的用户名</span>
$request                 <span class="token comment">#代表客户端的请求地址</span>
$request_body            <span class="token comment">#客户端的请求主体：此变量可在location中使用，将请求主体通过proxy_pass，fastcgi_pass，uwsgi_pass和scgi_pass传递给下一级的代理服务器</span>
$request_body_file       <span class="token comment">#将客户端请求主体保存在临时文件中。文件处理结束后，此文件需删除。如果需要之一开启此功能，需要设置client_body_in_file_only。如果将次文件传 递给后端的代理服务器，需要禁用request body，即设置proxy_pass_request_body off，fastcgi_pass_request_body off，uwsgi_pass_request_body off，or scgi_pass_request_body off</span>
$request_completion      <span class="token comment">#如果请求成功，值为"OK"，如果请求未完成或者请求不是一个范围请求的最后一部分，则为空</span>
$request_filename        <span class="token comment">#当前连接请求的文件路径，由root或alias指令与URI请求生成</span>
$request_length          <span class="token comment">#请求的长度 (包括请求的地址，http请求头和请求主体)</span>
$request_method          <span class="token comment">#HTTP请求方法，通常为"GET"或"POST"</span>
$request_time            <span class="token comment">#处理客户端请求使用的时间,单位为秒，精度毫秒； 从读入客户端的第一个字节开始，直到把最后一个字符发送给客户端后进行日志写入为止。</span>
$request_uri             <span class="token comment">#这个变量等于包含一些客户端请求参数的原始URI，它无法修改，请查看$uri更改或重写URI，不包含主机名，例如："/cnphp/test.php?arg=freemouse"</span>
$scheme                  <span class="token comment">#请求使用的Web协议，"http" 或 "https"</span>
$server_addr             <span class="token comment">#服务器端地址，需要注意的是：为了避免访问linux系统内核，应将ip地址提前设置在配置文件中</span>
$server_name             <span class="token comment">#服务器名</span>
$server_port             <span class="token comment">#服务器端口</span>
$server_protocol         <span class="token comment">#服务器的HTTP版本，通常为 "HTTP/1.0" 或 "HTTP/1.1"</span>
$status                  <span class="token comment">#HTTP响应代码</span>
$time_iso8601            <span class="token comment">#服务器时间的ISO 8610格式</span>
$time_local              <span class="token comment">#服务器时间（LOG Format 格式）</span>
$cookie_NAME             <span class="token comment">#客户端请求Header头中的cookie变量，前缀"$cookie_"加上cookie名称的变量，该变量的值即为cookie名称的值</span>
$http_NAME               <span class="token comment">#匹配任意请求头字段；变量名中的后半部分NAME可以替换成任意请求头字段，如在配置文件中需要获取http请求头："Accept-Language"，$http_accept_language即可</span>
$http_cookie
$http_host               <span class="token comment">#请求地址，即浏览器中你输入的地址（IP或域名）</span>
$http_referer            <span class="token comment">#url跳转来源,用来记录从那个页面链接访问过来的</span>
$http_user_agent         <span class="token comment">#用户终端浏览器等信息</span>
$http_x_forwarded_for
$sent_http_NAME          <span class="token comment">#可以设置任意http响应头字段；变量名中的后半部分NAME可以替换成任意响应头字段，如需要设置响应头Content-length，$sent_http_content_length即可</span>
$sent_http_cache_control
$sent_http_connection
$sent_http_content_type
$sent_http_keep_alive
$sent_http_last_modified
$sent_http_location
$sent_http_transfer_encoding
</code></pre></div>`,r:{minutes:4.17,words:1251},y:"a",t:"Nginx的变量参数 详解"},["/note-book/Nginx__OpenResty/Nginx变量大全.html","/note-book/Nginx&&OpenResty/Nginx变量大全.html","/note-book/Nginx&&OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html","/note-book/Nginx&&OpenResty/Nginx变量大全.md","/note-book/Nginx&&OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.md"]],["v-49be5ae0","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html",{d:1705981137e3,e:`
<blockquote>
<p>nginx本身是不支持https协议请求转发，为了让nginx能达到这一效果需要借助第三方模块ngx_http_proxy_connect_module</p>
</blockquote>
<h2>配置</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>
<span class="token comment">#pid        logs/nginx.pid;</span>
events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    <span class="token comment">#access_log  logs/access.log  main;</span>
    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    <span class="token comment">#gzip  on;</span>
 
server <span class="token punctuation">{</span>
        listen <span class="token number">88</span><span class="token punctuation">;</span>                <span class="token comment">#监听端口</span>
        resolver <span class="token number">183.60</span>.82.98<span class="token punctuation">;</span>   <span class="token comment">#dns解析地址</span>
        server_name  _<span class="token punctuation">;</span>
        <span class="token comment">#charset koi8-r;</span>
        <span class="token comment">#access_log  logs/host.access.log  main;</span>
        location / <span class="token punctuation">{</span>
             proxy_pass https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>     <span class="token comment">#设定http代理服务器的协议和地址</span>
             proxy_set_header HOST <span class="token variable">$host</span><span class="token punctuation">;</span>
             proxy_buffers <span class="token number">256</span> 4k<span class="token punctuation">;</span>
             proxy_max_temp_file_size 0k<span class="token punctuation">;</span>
             proxy_connect_timeout <span class="token number">30</span><span class="token punctuation">;</span>
             proxy_send_timeout <span class="token number">60</span><span class="token punctuation">;</span>
             proxy_read_timeout <span class="token number">60</span><span class="token punctuation">;</span>
             proxy_next_upstream error <span class="token function">timeout</span> invalid_header http_502<span class="token punctuation">;</span>
            <span class="token comment">#root   html;</span>
            <span class="token comment">#index  index.html index.htm;</span>
        <span class="token punctuation">}</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
 
 
 
server <span class="token punctuation">{</span>
       resolver <span class="token number">8.8</span>.8.8<span class="token punctuation">;</span>   <span class="token comment">#dns解析地址</span>
       listen <span class="token number">89</span><span class="token punctuation">;</span>          <span class="token comment">#代理监听端口</span>
       proxy_connect<span class="token punctuation">;</span>
       proxy_connect_allow            <span class="token number">443</span> <span class="token number">563</span><span class="token punctuation">;</span>
       location / <span class="token punctuation">{</span>
             proxy_pass https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>     <span class="token comment">#设定https代理服务器的协议和地址</span>
             proxy_set_header HOST <span class="token variable">$host</span><span class="token punctuation">;</span>
             proxy_buffers <span class="token number">256</span> 4k<span class="token punctuation">;</span>
             proxy_max_temp_file_size 0k<span class="token punctuation">;</span>
             proxy_connect_timeout <span class="token number">30</span><span class="token punctuation">;</span>
             proxy_send_timeout <span class="token number">60</span><span class="token punctuation">;</span>
             proxy_read_timeout <span class="token number">60</span><span class="token punctuation">;</span>
             proxy_next_upstream error <span class="token function">timeout</span> invalid_header http_502<span class="token punctuation">;</span>
 
       <span class="token punctuation">}</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>  
 
<span class="token punctuation">}</span>　　
</code></pre></div>`,r:{minutes:.81,words:242},y:"a",t:"nginx代理"},["/note-book/Nginx__OpenResty/Nginx正向代理.html","/note-book/Nginx&&OpenResty/Nginx正向代理.html","/note-book/Nginx&&OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/Nginx&&OpenResty/Nginx正向代理.md","/note-book/Nginx&&OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.md"]],["v-7aa7e66a","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html",{d:1705981137e3,c:"Nginx",e:`
<blockquote>
<p><a href="/nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86https.zip">脚本中用到的文件压缩包</a></p>
<p>模块：https://github.com/chobits/ngx_http_proxy_connect_module</p>
<p>nginx源码： http://nginx.org/download/</p>
<p>tcp优化文档： https://blog.csdn.net/guyue35/article/details/131465652</p>
</blockquote>
<h2>环境搭建</h2>`,r:{minutes:4.53,words:1358},y:"a",t:"Nginx正向代理支持https"},["/note-book/Nginx__OpenResty/Nginx正向代理支持https.html","/note-book/Nginx&&OpenResty/Nginx正向代理支持https.html","/note-book/Nginx&&OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","/note-book/Nginx&&OpenResty/Nginx正向代理支持https.md","/note-book/Nginx&&OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.md"]],["v-45c0ddce","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html",{d:1705981137e3,e:`
<h2>Proxy</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
yum makecache <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> epel-* <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> nginx <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> yum clean all


systemctl start nginx
systemctl <span class="token builtin class-name">enable</span> nginx
<span class="token comment"># 检查是否已经存在listen 3126;字段</span>

<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">"listen 3126;"</span> /etc/nginx/nginx.conf<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"代理服务器 listen 3126; 已经安装"</span>
<span class="token keyword">else</span>
  <span class="token comment"># 在http字段后插入新的server块</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'/http {/a\\    server {\\n    listen 3126;\\n    server_name _;\\n    location / {\\n    resolver 8.8.8.8;\\n    proxy_pass $scheme://$http_host$request_uri;\\n    }\\n}'</span> /etc/nginx/nginx.conf
  <span class="token builtin class-name">echo</span> <span class="token string">"已配置代理服务器"</span>
<span class="token keyword">fi</span>
nginx <span class="token parameter variable">-s</span> reload

<span class="token comment"># 将以下配置写入 /etc/sysctl.conf</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span>/etc/sysctl.conf</span>
net.ipv4.tcp_fin_timeout = 5
net.ipv4.tcp_keepalive_time = 5
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_max_syn_backlog = 3240000
net.ipv4.tcp_max_tw_buckets = 10000

net.ipv4.tcp_mem = 768432 2097152 15242880
net.ipv4.tcp_rmem = 4096 4096 33554432
net.ipv4.tcp_wmem = 4096 4096 33554432
net.ipv4.ip_local_port_range = 2048 64500
net.core.wmem_default = 183888608
net.core.rmem_default = 183888608
net.core.rmem_max = 33554432
net.core.wmem_max = 33554432
net.core.netdev_max_backlog = 2621244

kernel.sem=250 65536 100 2048
kernel.msgmax = 65536
kernel.msgmnb = 65536
kernel.perf_cpu_time_max_percent = 60
kernel.perf_event_max_sample_rate = 6250
net.ipv4.tcp_max_orphans = 1048576
kernel.sched_migration_cost_ns = 5000000
net.core.optmem_max = 25165824
net.core.somaxconn = 60000
net.ipv4.tcp_window_scaling = 1
EOF</span>

<span class="token comment"># 应用新的配置</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"应用系统优化策略成功"</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"部分系统优化策略应用失败"</span>
</code></pre></div>`,r:{minutes:.96,words:289},y:"a",t:"Nginx正向代理高并发"},["/note-book/Nginx__OpenResty/Nginx正向代理高并发.html","/note-book/Nginx&&OpenResty/Nginx正向代理高并发.html","/note-book/Nginx&&OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","/note-book/Nginx&&OpenResty/Nginx正向代理高并发.md","/note-book/Nginx&&OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.md"]],["v-846b5d98","/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html",{d:1705981137e3,e:`
<blockquote>
<p>研发写了个非常脑残的功能，竟然要把图片变成base64编码然后通过patch方法去发送给服务端。我人麻了。竟然要把这么复制的东西放到http head里，这尼玛离谱。下面是这件事的解决过程。</p>
</blockquote>
<h2>事件原因</h2>
<p>研发的postman发出了414错误，报错内容如下：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">414</span> Request-URI Too Large
<span class="token comment"># 414请求url太大</span>
</code></pre></div>`,r:{minutes:1.25,words:376},y:"a",t:"Nginx的url过长出现的问题 414 Request-URI Too Large"},["/note-book/Nginx__OpenResty/Nginx的url过长导致fastcgi协议崩溃.html","/note-book/Nginx&&OpenResty/Nginx的url过长导致fastcgi协议崩溃.html","/note-book/Nginx&&OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html","/note-book/Nginx&&OpenResty/Nginx的url过长导致fastcgi协议崩溃.md","/note-book/Nginx&&OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.md"]],["v-73768998","/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html",{d:1705981137e3,e:`
<h2>1、轮询（默认）</h2>
<p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</p>
<div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> tomcatserver</span> <span class="token punctuation">{</span>
                      <span class="token directive"><span class="token keyword">server</span> 11.11.11.11:8081</span> <span class="token punctuation">;</span>
                      <span class="token directive"><span class="token keyword">server</span> 12.12.12.12:8082</span> <span class="token punctuation">;</span>
					  <span class="token directive"><span class="token keyword">server</span> 13.13.13.13:8083</span> <span class="token punctuation">;</span>
					  <span class="token directive"><span class="token keyword">server</span> 14.14.14.14:8085</span> <span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8080</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> /smartupdate</span> <span class="token punctuation">{</span>
            <span class="token comment">#proxy_pass   http://11.12.12.12:8081;</span>
			<span class="token directive"><span class="token keyword">proxy_pass</span>   http://tomcatserver</span><span class="token punctuation">;</span>
			<span class="token directive"><span class="token keyword">proxy_set_header</span>  Host <span class="token variable">$host</span>:8080</span><span class="token punctuation">;</span>
			<span class="token comment">#proxy_connect_timeout 20000;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:5.79,words:1737},y:"a",t:"Nginx的负载均衡和故障转移"},["/note-book/Nginx__OpenResty/Nginx的负载均衡和故障转移.html","/note-book/Nginx&&OpenResty/Nginx的负载均衡和故障转移.html","/note-book/Nginx&&OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","/note-book/Nginx&&OpenResty/Nginx的负载均衡和故障转移.md","/note-book/Nginx&&OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.md"]],["v-e332710c","/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html",{d:1705983643e3,e:`
<blockquote>
<p>参考链接： https://blog.openresty.com.cn/cn/ubuntu20-or-install/</p>
<p>适合于Ubuntu各个版本，并非只有20.04。都可以被成功an'z</p>
</blockquote>
<p>今天我想演示一下如何通过 <code>apt-get</code> 在 Ubuntu 20.04 上安装 OpenResty 。</p>
<figure><figcaption>截图 1</figcaption></figure>
<p>我们将在这个视频中使用这个全新安装的 Ubuntu 20.04 。</p>
<p>我们可以到 <a href="http://openresty.org/cn/linux-packages.html#ubuntu" target="_blank" rel="noopener noreferrer">openresty.org 网站</a>上找到相关的说明，这里可以找到所有启用 APT 仓库和安装 OpenResty Deb 包的命令。</p>`,r:{minutes:4.03,words:1209},y:"a",t:"apt安装OpenResty教程"},["/note-book/Nginx__OpenResty/apt安装OpenResty教程.html","/note-book/Nginx&&OpenResty/apt安装OpenResty教程.html","/note-book/Nginx&&OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html","/note-book/Nginx&&OpenResty/apt安装OpenResty教程.md","/note-book/Nginx&&OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.md"]],["v-5e42cccc","/note-book/Nginx__OpenResty/nginx-plus-module-lua.html",{d:1705981137e3,e:`
<blockquote>
<p>将Lua联合例程集成到NGINX事件处理模型中，使用由NGINX,Inc。编写和支持的Lua动态模块。</p>
<p>http://openresty.org</p>
<p>这个开源 Web 平台主要由章亦春（<a href="http://agentzh.org" target="_blank" rel="noopener noreferrer">agentzh</a>）维护。在 2011 年之前曾由雅虎中国和<a href="http://www.taobao.com" target="_blank" rel="noopener noreferrer">淘宝网</a>赞助，在后来的 2012 ~ 2016 年间主要由美国的 <a href="http://www.cloudflare.com" target="_blank" rel="noopener noreferrer">CloudFlare 公司</a> 提供支持。目前，OpenResty® 主要由 OpenResty 软件基金会和 OpenResty Inc. 公司提供支持。</p>
<p>2009年，agentzh &amp; chaoslawful一起基于Nginx用C语言开发OpenResty
2011年，agentzh离职专心维护OpenResty
2012-2016年，Cloudflare赞助支持agentzh专心开发OpenResty，快速发展
2016年，锤子科技赞助OpenResty软件基金会（发布会的门票收入100万元）以支持OpenResty开发</p>
<p>https://blog.csdn.net/shasharoman/article/details/120069206</p>
</blockquote>`,r:{minutes:3.05,words:914},y:"a",t:"动态模块Lua"},["/note-book/Nginx&&OpenResty/nginx-plus-module-lua.html","/note-book/Nginx&&OpenResty/nginx-plus-module-lua.md"]],["v-06cf84a8","/note-book/Nginx__OpenResty/nginx01.html",{d:1705981137e3,e:`
<h1>1、Nginx 的优势</h1>
<p>Nginx (engine x) 是一个高性能的HTTP(解决C10k的问题)和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。反代图示</p>
<p>nginx的web优势</p>
<h2>1、io多路复用</h2>
<p>理论方法</p>
<h3>第一种方法：</h3>
<p>最传统的多进程并发模型 (每进来一个新的I/O流会分配一个新的进程管理）。</p>
<h3>第二种方法：</h3>
<p>I/O多路复用 (单个线程，通过记录跟踪每个I/O流(sock)的状态，来同时管理多个I/O流 。)发明它的原因，是尽量多的提高服务器的吞吐能力。在同一个线程里面， 通过拨开关的方式，来同时传输多个I/O流</p>`,r:{minutes:32.95,words:9886},y:"a",t:"Nginx初级篇"},["/note-book/Nginx&&OpenResty/nginx01.html","/note-book/Nginx&&OpenResty/nginx01.md"]],["v-08845d47","/note-book/Nginx__OpenResty/nginx02.html",{d:1705981137e3,e:`
<h2>Nginx Web服务器</h2>
<h2>Nginx Proxy 服务器</h2>
<h3>原理</h3>
<h4>正向代理</h4>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>内网客户机通过代理访问互联网，通常需要设置代理服务器的地址和端口
</code></pre></div><figure><figcaption>image-20211109120422697</figcaption></figure>
<p>squid：</p>
<h4>反向代理</h4>`,r:{minutes:7.09,words:2126},y:"a",t:"Nginx高级进阶篇"},["/note-book/Nginx&&OpenResty/nginx02.html","/note-book/Nginx&&OpenResty/nginx02.md"]],["v-0a3935e6","/note-book/Nginx__OpenResty/nginx03.html",{d:1705981137e3,e:`
<h2>动态网站架构</h2>
<table>
<thead>
<tr>
<th>文件</th>
<th>语言</th>
<th>架构</th>
</tr>
</thead>
<tbody>
<tr>
<td>index.py</td>
<td>开源python</td>
<td>apache+python+mysql</td>
</tr>
<tr>
<td>index.jsp</td>
<td>商业java</td>
<td>tomcat+jdk+oracle</td>
</tr>
<tr>
<td>index.asp</td>
<td>商业C#</td>
<td>iis+asp.net+sqlserver/oracle/mongodb</td>
</tr>
<tr>
<td>index.html</td>
<td>html</td>
<td>html</td>
</tr>
<tr>
<td>index.php</td>
<td>开源php</td>
<td>nginx+php+mysql</td>
</tr>
</tbody>
</table>`,r:{minutes:22.1,words:6630},y:"a",t:"Nginx Web架构实战"},["/note-book/Nginx&&OpenResty/nginx03.html","/note-book/Nginx&&OpenResty/nginx03.md"]],["v-e233a3da","/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html",{d:1705981137e3,e:`
<p>https://www.freesion.com/article/18981262639/</p>
`,r:{minutes:.04,words:12},y:"a",t:"Nginx 单机百万QPS环境搭建"},["/note-book/Nginx__OpenResty/nginx单机百万并发.html","/note-book/Nginx&&OpenResty/nginx单机百万并发.html","/note-book/Nginx&&OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html","/note-book/Nginx&&OpenResty/nginx单机百万并发.md","/note-book/Nginx&&OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.md"]],["v-6e466380","/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html",{d:1705981137e3,e:`
<h2>book.itrusts.top.conf</h2>
<pre><code>server {
    listen 80;
   listen 443 ssl http2;
    server_name book.itools.top book.itrusts.top book.todesk.top 42.192.117.251;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/book.itools.top;

    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    ssl_certificate    /www/server/panel/vhost/cert/book.itools.top/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/book.itools.top/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;

    #SSL-END
   #Directory protection rules, do not manually delete
   include /www/server/panel/vhost/nginx/dir_auth/book.itools.top/*.conf;

    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #PHP-INFO-START  PHP引用配置，可以注释或修改
    include enable-php-00.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/book.itools.top.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \\.well-known{
        allow all;
    }

    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
        error_log /dev/null;
        access_log /dev/null;
    }

    location ~ .*\\.(js|css)?$
    {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null;
    }
    access_log  /www/wwwlogs/book.itools.top.log;
    error_log  /www/wwwlogs/book.itools.top.error.log;
}
</code></pre>`,r:{minutes:11.3,words:3389},y:"a",t:"Nginx配置示例"},["/note-book/Nginx__OpenResty/nginx配置示例.html","/note-book/Nginx&&OpenResty/nginx配置示例.html","/note-book/Nginx&&OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html","/note-book/Nginx&&OpenResty/nginx配置示例.md","/note-book/Nginx&&OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.md"]],["v-8ed8a042","/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html",{d:1705981137e3,e:`
<blockquote>
<p>https://docshome.gitbook.io/nginx-docs/he-xin-gong-neng/stream/ngx_stream_ssl_preread_module</p>
</blockquote>
<p>允许从clienthello中提取信息，而不会终止SSL/TLS,例如通过sni请求的服务器名称</p>
<div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">map</span> <span class="token variable">$ssl_preread_server_name</span> <span class="token variable">$name</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">backend.example.com</span>      backend</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default</span>                  backend2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.0.1:12345</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.0.2:12345</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">upstream</span> backend2</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.0.3:12345</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.0.4:12345</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">12346</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>  <span class="token variable">$name</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_preread</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.22,words:66},y:"a",t:"ngx_stream_ssl_preread_module"},["/note-book/Nginx&&OpenResty/ngx_stream_ssl_preread_module.html","/note-book/Nginx&&OpenResty/ngx_stream_ssl_preread_module.md"]],["v-3eb55632","/note-book/OpenSSH-Server/ssh%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E7%99%BB%E9%99%86%E5%AF%86%E7%A0%81.html",{d:1691939318e3,e:`
<h1>ssh记录登陆密码</h1>
<p>了解到ssh自身不记录登陆的用户名密码</p>
<p>但我们可以通过修改ssh源码或者打补丁的方式来实现对远程登陆用户密码的记录</p>
<p>只需修改ssh源码或者打补丁重新编译，安装</p>
<p>即可获得一个新的ssh用户端</p>
<h2>过程</h2>
<h3>1、准备环境</h3>
<p>安装对应的openssh源码包</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://mirror.leaseweb.com/pub/OpenBSD/OpenSSH/portable/openssh-7.5p1.tar.gz


<span class="token comment"># 各个版本源码下载</span>
<span class="token comment"># https://mirror.leaseweb.com/pub/OpenBSD/OpenSSH/portable/</span>
</code></pre></div>`,r:{minutes:2.83,words:848},y:"a",t:"ssh日志记录登陆密码"},["/note-book/OpenSSH-Server/ssh日志记录登陆密码.html","/note-book/OpenSSH-Server/ssh日志记录登陆密码.md",":md"]],["v-ce601f4c","/note-book/OperaSystems/CPU%E5%92%8C%E5%86%85%E5%AD%98%E7%9A%84%E6%9E%B6%E6%9E%84%20UMA%E5%92%8CNUMA.html",{d:1691939318e3,e:`
<h2>1、UMA</h2>
<p>UMA全称为 Uniform Memory Access，叫做一致性内存访问</p>
<p>多个CPU通过同一根总线来访问内存。无论多个CPU是访问内存的不同内存单元还是相同的内存单元，同一时刻，只有一个CPU能够访问内存。</p>
<p>CPU之间通过总线串行的访问内存，所以会出现访问瓶颈！
![在这里插入图片描述](CPU和内存的架构 UMA和NUMA.assets/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5byg5a2f5rWpX2pheQ==,size_20,color_FFFFFF,t_70,g_se,x_16-16918414601881.png)</p>`,r:{minutes:1.4,words:421},y:"a",t:"CPU和内存之间的架构分为两种："},["/note-book/OperaSystems/CPU和内存的架构 UMA和NUMA.html","/note-book/OperaSystems/CPU和内存的架构 UMA和NUMA.md",":md"]],["v-5d982049","/note-book/OperaSystems/Journal%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<h2>Journal日志服务</h2>
<blockquote>
<p>journalctl 用来查询 systemd-journald 服务收集到的日志。systemd-journald 服务是 systemd init 系统提供的收集系统日志的服务。</p>
</blockquote>
<p>常用命令行</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl 查看所有日志

journalctl --disk-usage 用于查看目前日志占用了多少磁盘空间

journalctl <span class="token parameter variable">-n</span> <span class="token number">4</span> 查看最新的4行日志

journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">2020</span>-06-23 查看从2020-06-23开始的日志

journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">13</span>:00 查看从13:00开始的日志

journalctl <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token number">2020</span>-06-23 查看截止到2020-06-23的日志

journalctl <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token number">13</span>:00 查看截止到13:00的日志

journalctl <span class="token parameter variable">--since</span> <span class="token function">time</span> <span class="token parameter variable">--until</span> <span class="token function">time</span> 查看某一时间段内的日志

journalctl <span class="token parameter variable">-p</span> err 查看error级别的日志（同理可改为info、warning等级别）

journalctl <span class="token parameter variable">-o</span> verbose 查看日志详细信息

journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span>num <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd 查看特定pid和特定命令的日志信息

<span class="token builtin class-name">echo</span> <span class="token string">""</span><span class="token operator">&gt;</span> /var/log/journal/2019100817110995251777489178452/system.journal 清空当前正在记录的日志文件

journalctl --vacuum-time<span class="token operator">=</span>1m 仅保留最近一个月的日志文件

journalctl --vacuum-size<span class="token operator">=</span>500M 仅保留500MB大小的日志文件

systemctl restart systemd-journald 服务控制
</code></pre></div>`,r:{minutes:2.99,words:897},y:"a",t:"Journal日志服务详解"},["/note-book/OperaSystems/Journal日志服务详解.html","/note-book/OperaSystems/Journal日志服务详解.md",":md"]],["v-3e5ab3dc","/note-book/OperaSystems/Linux%E4%B8%8B%E7%9A%84ASLR%EF%BC%88PIE%EF%BC%89%E5%86%85%E5%AD%98%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6%E5%92%8C%E7%BB%95%E8%BF%87.html",{d:1691939318e3,e:`<h3>1.1  Linux下的ASLR内存保护机制</h3>
<h4>1.1.1  Linux下的ASLR工作原理</h4>
<p>工作原理与window下的aslr类似</p>
<figure><figcaption>img</figcaption></figure>
<h4>1.1.2 Linux下利用内存地址泄露绕过ASLR</h4>
<h5>⑴. 原理分析：</h5>
<p>那么如何解决地址随机化的问题呢？</p>
<p>思路是：我们需要先泄漏出libc.so某些函数在内存中的地址，然后再利用泄漏出的函数地址根据偏移量计算出system()函数和/bin/sh字符串在内存中的地址，然后再执行我们的ret2libc的shellcode。既然栈，libc，heap的地址都是随机的。我们怎么才能泄露出libc.so的地址呢？方法还是有的，因为程序本身在内存中的地址并不是随机的，所以我们只要把返回值设置到程序本身就可执行我们期望的指令了。</p>`,r:{minutes:3.63,words:1090},y:"a",t:""},["/note-book/OperaSystems/Linux下的ASLR（PIE）内存保护机制和绕过.html","/note-book/OperaSystems/Linux下的ASLR（PIE）内存保护机制和绕过.md",":md"]],["v-2b1ef3ea","/note-book/OperaSystems/Linux%E5%8D%87%E7%BA%A7%E5%86%85%E6%A0%B8%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`
<p>Linux的内核概念不用说大家也很清楚，正是内核版本的不同，才有Linux发行版本的说法，现在主流的centos应该都是centos7了，从centos7.2开始，内核版本为3.10，越往后内核版本越高。高版本的内核修复了许多的低版本内核的bug，因此，系统是需要提高内核版本的，从而提高安全性，稳定性，并增加更多的功能。</p>
<p>通常来说，Linux是支持多版本内核共存的，无非是系统启动的时候应用哪个版本内核而已。
关于内核：</p>
<p>Linux 内核分两种：官方内核（通常是内核开发人员用）和各大 Linux 发行版内核（一般用户常用）。
关于Linux内核版本号：</p>`,r:{minutes:7.97,words:2391},y:"a",t:"Linux centos7升级内核 两种方法"},["/note-book/OperaSystems/Linux升级内核的两种方法.html","/note-book/OperaSystems/Linux升级内核的两种方法.md",":md"]],["v-31ec57f8","/note-book/OperaSystems/Linux%E6%8E%92%E6%9F%A5%E5%93%AA%E4%B8%AA%E8%BF%9B%E7%A8%8B%E5%92%8CIP%E5%9C%A8%E5%8D%A0%E7%94%A8%E7%BD%91%E9%80%9F.html",{d:1691939318e3,e:`
<p>本教程适用于Centos7,Centos8</p>
<h2>使用NetHogs定位哪个进程在占用流量</h2>
<h3>安装NetHogs</h3>
<pre><code># 安装NetHogs。
yum install nethogs -y   
</code></pre>
<h3>查看进程流量</h3>
<pre><code># 执行以下命令，查看占用内网带宽的进程。
nethogs eth0

# 查询间隔(-d)5秒
nethogs eth1 -d 5
</code></pre>
<figure><figcaption></figcaption></figure>
<h3>显示界面说明</h3>`,r:{minutes:2.14,words:642},y:"a",t:"Linux排查哪个进程在占用网速"},["/note-book/OperaSystems/Linux排查哪个进程和IP在占用网速.html","/note-book/OperaSystems/Linux排查哪个进程和IP在占用网速.md",":md"]],["v-00524e94","/note-book/OperaSystems/Linux%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%85%8D%E5%AF%86%E7%A0%81sudo.html",{d:1691939318e3,e:`
<blockquote>
<p>该操作为越权操作，仅适用于个人单用户操作系统</p>
</blockquote>
<h2>进入root身份</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> 
</code></pre></div><h2>执行的操作</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> visudo
<span class="token comment"># 或者</span>
<span class="token function">vim</span> /etc/sudoers
</code></pre></div>`,r:{minutes:.35,words:105},y:"a",t:"Linux普通用户免密码sudo"},["/note-book/OperaSystems/Linux普通用户免密码sudo.html","/note-book/OperaSystems/Linux普通用户免密码sudo.md",":md"]],["v-636408d2","/note-book/OperaSystems/Linux%E7%BD%91%E7%BB%9C%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96%E7%A7%98%E7%B1%8D.html",{d:1691939318e3,e:`
<p>最近很多使用Linux系统的小伙伴在后台提问，老师呀，我好烦恼！</p>
<p><strong>你说企业服务器在进行网络通讯过程中，为了避免网络性能瓶颈对网络通讯的影响，我该如何对系统内核中网络参数进行优化调整从而提高网络的安全性和并发性！</strong></p>
<p><strong>具体来说是这样的要求：</strong></p>
<ul>
<li>**提高安全性：**避免恶意的网络攻击行为对系统网络资源造成影响；</li>
<li>**提高并发性：**使服务器设备可以承载更多的客户端主机的访问；</li>
</ul>
<p>从而提升网络性能，增加服务器中网络服务的稳定性与高效性。</p>`,r:{minutes:8.85,words:2654},y:"a",t:"超全Linux网络内核参数优化秘籍"},["/note-book/OperaSystems/Linux网络内核参数优化秘籍.html","/note-book/OperaSystems/Linux网络内核参数优化秘籍.md",":md"]],["v-4581fe4c","/note-book/OperaSystems/Linux%E8%99%9A%E6%8B%9F%E7%BD%91%E7%BB%9C%E8%AE%BE%E5%A4%87%E4%B9%8Bbridge.html",{d:1691939318e3,e:`
<p>转自：https://segmentfault.com/a/1190000009491002</p>
<p>继前两篇介绍了<a href="https://segmentfault.com/a/1190000009249039" target="_blank" rel="noopener noreferrer">tun/tap</a>和<a href="https://segmentfault.com/a/1190000009251098" target="_blank" rel="noopener noreferrer">veth</a>之后，本篇将介绍Linux下常用的一种虚拟网络设备，那就是bridge(桥)。</p>`,r:{minutes:13.37,words:4010},y:"a",t:"Linux虚拟网络设备之bridge(桥)"},["/note-book/OperaSystems/Linux虚拟网络设备之bridge.html","/note-book/OperaSystems/Linux虚拟网络设备之bridge.md",":md"]],["v-1c72c74c","/note-book/OperaSystems/Shell%E5%BF%AB%E6%8D%B7%E9%94%AE.html",{d:1691939318e3,e:`
<h2>光标移动</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Ctrl + <span class="token operator">&lt;</span> 移动到前一个单词开头
Ctrl + <span class="token operator">&gt;</span> 移动到后一个单词结尾
Ctrl + A 移动到开头
Ctrl + E 移动到结尾
alt + B 向左移动一个单词
alt + F 向右移动一个单词
Ctrl + B 向左移动一个字符
Ctrl + F 向右移动一个字符
esc + B 向左移动一个单词
esc + F 向右移动一个单词
Ctrl + XX 在上次光和当前光标所在字符间跳转
esc + T 交换光标位置前的两个单词
</code></pre></div>`,r:{minutes:1.35,words:406},y:"a",t:"shell快捷键总结"},["/note-book/OperaSystems/Shell快捷键.html","/note-book/OperaSystems/Shell快捷键.md",":md"]],["v-79d954ee","/note-book/OperaSystems/date%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`
<h2>显示时间</h2>
<p>按照我们要求的格式显示当前日期: 年-月-日</p>
<pre><code>2019-04-10
[root@oldboyedu59 ~]# date  +%Y-%m-%d
2019-04-10
[root@oldboyedu59 ~]# date +%T
09:57:23
[root@oldboyedu59 ~]# date +%H:%M:%S
09:57:39
[root@oldboyedu59 ~]# date +%w
3
 
+%F === +%Y-%m-%d
          year month  day 
+%T === +%H:%M:%S
          hour min(minute)  sec(second)       
+%w === week 周几 
</code></pre>`,r:{minutes:1,words:301},y:"a",t:"date 显示或设置时间"},["/note-book/OperaSystems/date命令.html","/note-book/OperaSystems/date命令.md",":md"]],["v-b89ca53e","/note-book/OperaSystems/grep%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`
<h2>开始结束符号</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># #在 /etc/services 文件中过滤出包含3306的行</span>
<span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># grep '3306'   /etc/services </span>
mysql           <span class="token number">3306</span>/tcp                        <span class="token comment"># MySQL</span>
mysql           <span class="token number">3306</span>/udp                        <span class="token comment"># MySQL</span>
<span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># #在这个文件中找出以ssh开头的行</span>
<span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># grep '^ssh' /etc/services</span>
<span class="token function">ssh</span>             <span class="token number">22</span>/tcp                          <span class="token comment"># The Secure Shell (SSH) Protocol</span>
<span class="token function">ssh</span>             <span class="token number">22</span>/udp                          <span class="token comment"># The Secure Shell (SSH) Protocol</span>
<span class="token function">ssh</span>             <span class="token number">22</span>/sctp                 <span class="token comment"># SSH</span>
sshell          <span class="token number">614</span>/tcp                 <span class="token comment"># SSLshell</span>
sshell          <span class="token number">614</span>/udp                 <span class="token comment">#       SSLshell</span>
ssh-mgmt        <span class="token number">17235</span>/tcp               <span class="token comment"># SSH Tectia Manager</span>
ssh-mgmt        <span class="token number">17235</span>/udp               <span class="token comment"># SSH Tectia Manager </span>
</code></pre></div>`,r:{minutes:3.4,words:1020},y:"a",t:"grep 中级"},["/note-book/OperaSystems/grep命令.html","/note-book/OperaSystems/grep命令.md",":md"]],["v-4977fd20","/note-book/OperaSystems/ip%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`
<h2>link</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ip link add name bridge_name type bridge 也可以简化 ip link add bridge_name type bridge</span>
<span class="token comment"># ip link set bridge_name up</span>
想要添加Interface到网桥上，interface状态必须是Up
<span class="token comment"># ip link set eth0 up</span>
添加eth0 interface到网桥上
<span class="token comment"># ip link set eth0 master bridge_name</span>
从网桥解绑eth0
<span class="token comment"># ip link set eth0 nomaster</span>
eth0 可以关闭的
<span class="token comment"># ip link set eth0 down</span>
删除网桥可以用
<span class="token comment"># ip link delete bridge_name type bridge</span>
也可以简化为
<span class="token comment"># ip link del bridge_name</span>
</code></pre></div>`,r:{minutes:.97,words:292},y:"a",t:"用IP命令管理网桥bridge"},["/note-book/OperaSystems/ip命令.html","/note-book/OperaSystems/ip命令.md",":md"]],["v-966b2156","/note-book/OperaSystems/macvlan%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<p>https://blog.csdn.net/hzj_001/article/details/100182686    macvlan 详解</p>
<p>https://cloud.tencent.com/developer/article/1432601    Docker 网络模型之 macvlan 详解，图解，实验完整</p>
<p>https://www.cnblogs.com/4a8a08f09d37b73795649038408b5f33/p/12200769.html     <a href="https://www.cnblogs.com/4a8a08f09d37b73795649038408b5f33/p/12200769.html" target="_blank" rel="noopener noreferrer">macvlan几种模式</a></p>`,r:{minutes:.16,words:49},y:"a",t:"macvlan"},["/note-book/OperaSystems/macvlan详解.html","/note-book/OperaSystems/macvlan详解.md",":md"]],["v-8484bb5a","/note-book/OperaSystems/proc-sysrq-trigger%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<h2>立即重新启动计算机</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> b <span class="token operator">&gt;</span> /proc/sysrq-trigger
</code></pre></div><h2>立即关闭计算机</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> o <span class="token operator">&gt;</span> /proc/sysrq-trigger
</code></pre></div>`,r:{minutes:.45,words:136},y:"a",t:"/proc/sysrq-trigger详解"},["/note-book/OperaSystems/proc-sysrq-trigger详解.html","/note-book/OperaSystems/proc-sysrq-trigger详解.md",":md"]],["v-92954d86","/note-book/OperaSystems/proc%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<blockquote>
<p>如果哪里都找不到就来内核文档看看吧</p>
<ul>
<li>https://docs.kernel.org/filesystems/proc.html</li>
</ul>
</blockquote>
<blockquote>
<ul>
<li>内容摘要：Linux系统上的/proc目录是一种文件系统，即proc文件系统。</li>
</ul>
<p>Linux系统上的/proc目录是一种文件系统，即proc文件系统。与其它常见的文件系统不同的是，/proc是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，用户可以通过这些文件查看有关系统硬件及当前正在运行进程的信息，甚至可以通过更改其中某些文件来改变内核的运行状态。</p>
<p>基于/proc文件系统如上所述的特殊性，其内的文件也常被称作虚拟文件，并具有一些独特的特点。例如，其中有些文件虽然使用查看命令查看时会返回大量信息，但文件本身的大小却会显示为0字节。此外，这些特殊文件中大多数文件的时间及日期属性通常为当前系统时间和日期，这跟它们随时会被刷新（存储于RAM中）有关。</p>
<p>为了查看及使用上的方便，这些文件通常会按照相关性进行分类存储于不同的目录甚至子目录中，如/proc/scsi目录中存储的就是当前系统上所有SCSI设备的相关信息，/proc/N中存储的则是系统当前正在运行的进程的相关信息，其中N为正在运行的进程（可以想象得到，在某进程结束后其相关目录则会消失）。</p>
<p>大多数虚拟文件可以使用文件查看命令如cat、more或者less进行查看，有些文件信息表述的内容可以一目了然，但也有文件的信息却不怎么具有可读性。不过，这些可读性较差的文件在使用一些命令如apm、free、lspci或top查看时却可以有着不错的表现。</p>
</blockquote>`,r:{minutes:42.71,words:12813},y:"a",t:"/proc详解"},["/note-book/OperaSystems/proc详解.html","/note-book/OperaSystems/proc详解.md",":md"]],["v-00bad121","/note-book/OperaSystems/sed.html",{d:1691939318e3,e:`
<pre><code>19999,9999,9999,9999
[root@handsome-man ~]# 
</code></pre>
<h2>sed命令执行过程</h2>
<p>https://www.processon.com/view/link/5bea32c5e4b0ad314e894f53</p>
<p>sed -n '3 p' oldboy.txt
参数 条件 命令</p>
<p>print
sed取范围</p>
<pre><code>[root@oldboyedu59 /oldboy]# sed -n '5p' lidao.txt
105,feixue,CIO
[root@oldboyedu59 /oldboy]# sed -n '1,5p' lidao.txt
101,oldboy,CEO
102,zhangyao,CTO
103,Alex,COO
104,yy,CFO
105,feixue,CIO
</code></pre>`,r:{minutes:2.17,words:651},y:"a",t:"Linux三剑客-sed"},[":md"]],["v-bb5b9e90","/note-book/OperaSystems/sysstat%20Linux%E7%8A%B6%E6%80%81%E5%B7%A5%E5%85%B7%E5%8C%85.html",{d:1691939318e3,e:`
<p>sysstat提供了Linux性能监控的工具集，包括sar、sadf、mpstat、iostat、pidstat等，这些工具可以监控系统性能和使用情况。各工具的作用如下：
iostat - 提供CPU统计，存储I/O统计（磁盘设备，分区及网络文件系统）
mpstat - 提供单个或组合CPU相关统计
pidstat - 提供Linux进程级别统计：I/O、CPU、内存等
sar - 收集、报告、保存系统活动信息：CPU、内存、磁盘、中断、网络接口、TTY、内核表等
sadc - 系统活动数据收集器，作为sar后端使用
sa1 - 收集系统活动日常数据，并二进制格式存储，它作为sadc的工具的前端，可以通过cron来调用
sa2 - 生成系统每日活动报告，同样可作为sadc的工具的前端，可以通过cron来调用
sadf - 可以以CSV、XML格式等显示sar收集的性能数据，这样非常方便的将系统数据导入到数据库中，或导入到Excel中来生成图表
nfsiostat-sysstat: 提供NFS I/O统计
cifsiostat: 提供CIFS统计
sysstat功能强大，功能也在不断的增强，每个版本提供了不同的功能，用户可以到sysstat官网了解工具最先发展情况和获得相应的帮助手册。官网地址： http://sebastien.godard.pagesperso-orange.fr/</p>`,r:{minutes:2.56,words:769},y:"a",t:"简介"},["/note-book/OperaSystems/sysstat Linux状态工具包.html","/note-book/OperaSystems/sysstat Linux状态工具包.md",":md"]],["v-15e0f84a","/note-book/OperaSystems/%E4%BD%BF%E7%94%A8curl%E5%AE%9E%E7%8E%B0%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81.html",{d:1691939318e3,e:`
<h1>概述</h1>
<p>本文讲解如何通过curl实现邮件发送功能，通过此功能，可以将一些配置信息自动发送到指定邮箱，满足自动运维要求。
测试发件邮箱：sina
测试收件邮箱：qq</p>
<h1>脚本实例</h1>
<p>curl_send_mail.bat</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>@echo off
rem 使用curl实现邮件发送
rem -------------------------------------------
rem 参数
<span class="token builtin class-name">set</span> <span class="token assign-left variable">smtp</span><span class="token operator">=</span><span class="token string">"smtp://smtp.sina.com"</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">mail_from</span><span class="token operator">=</span>发件地址@sina.com
<span class="token builtin class-name">set</span> <span class="token assign-left variable">mail_to</span><span class="token operator">=</span>收件地址@sina.com
<span class="token builtin class-name">set</span> <span class="token assign-left variable">data</span><span class="token operator">=</span>mail.txt
<span class="token builtin class-name">set</span> <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">"发件人用户名:发件人密码"</span>
rem -------------------------------------------
rem 编写邮件头消息
<span class="token builtin class-name">echo</span> From:%mail_from% <span class="token operator">&gt;</span> %data%
<span class="token builtin class-name">echo</span> To:%mail_to% <span class="token operator">&gt;&gt;</span> %data%
<span class="token builtin class-name">echo</span> Subject:邮件内容标题 %date%<span class="token operator">&gt;&gt;</span> %data%
echo.<span class="token operator">&gt;&gt;</span> %data%

<span class="token builtin class-name">echo</span> 这里填写具体的邮件内容 <span class="token operator">&gt;&gt;</span> %data%
rem 例如：获取当前的外网地址信息
rem <span class="token function">curl</span> ifconfig.me <span class="token operator">&gt;&gt;</span> %data%
rem -------------------------------------------
rem 发送邮件
<span class="token function">curl</span> <span class="token parameter variable">--verbose</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">--url</span> <span class="token string">"%smtp%"</span> --mail-from %mail_from% --mail-rcpt %mail_to% --upload-file %data% <span class="token parameter variable">--user</span> %user%

rem 删除临时文件
del %data%
pause

</code></pre></div>`,r:{minutes:.87,words:261},y:"a",t:"使用curl实现邮件发送"},["/note-book/OperaSystems/使用curl实现邮件发送.html","/note-book/OperaSystems/使用curl实现邮件发送.md",":md"]],["v-269af0d2","/note-book/OperaSystems/%E4%BD%BF%E7%94%A8dev%E4%B8%8B%E7%9A%84tcp-udp%E5%AE%9E%E7%8E%B0socket.html",{d:1700537497e3,e:`
<h1>一、背景</h1>
<p>Linux中的一个特殊文件： /dev/tcp  打开这个文件就类似于发出了一个socket调用，建立一个socket连接，读写这个文件就相当于在这个socket连接中传输数据。</p>
<p>我们可以通过重定向实现基于tcp/udp协议的软件通讯，/dev/tcp/host/port  只要读取或者写入这个文件，相当于系统会尝试连接:host 这台机器，对应port端口。</p>
<p>如果主机以及端口存在，就建立一个socket 连接，将在 /proc/self/fd 目录下面，有对应的文件出现。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span>/dev/tcp/8.8.8.8/53
</code></pre></div>`,r:{minutes:4.76,words:1429},y:"a",t:"关于 /dev/(tcp|udp)/${HOST}/${PORT}"},["/note-book/OperaSystems/使用dev下的tcp-udp实现socket.html","/note-book/OperaSystems/使用dev下的tcp-udp实现socket.md",":md"]],["v-5a559594","/note-book/OperaSystems/%E5%A4%87%E4%BB%BDLinux%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`
<p>在前面的一些文章中，我反复提到经常会把Linux系统搞崩溃，所以备份系统就是一件不容忽视的事情。由于Linux系统本身的优越性，系统的备份和还原还是比较容易的。主要表现在以下方面：</p>
<ul>
<li>Linux系统所有的数据都以文件的形式存在，所以备份就是直接拷贝文件；硬盘分区也被当成文件，所以可以直接克隆硬盘数据。</li>
<li>Linux系统自带很多实用工具，比如tar、dd、rsync等，备份还原系统不需要购买或下载第三方软件。</li>
<li>Linux系统在运行时其硬盘上的文件可以直接被覆盖，所以还原系统的时候不需要另外的引导盘。（当然，系统完全挂掉到无法启动这种情况还是需要另外的引导盘的。）</li>
</ul>`,r:{minutes:3.38,words:1014},y:"a",t:"备份Linux系统"},["/note-book/OperaSystems/备份Linux系统.html","/note-book/OperaSystems/备份Linux系统.md",":md"]],["v-20664f24","/note-book/OperaSystems/%E5%A4%A7%E9%87%8F%E4%BD%BF%E7%94%A8swap%E5%AF%BC%E8%87%B4%E6%97%A0%E6%B3%95%E5%88%87%E6%8D%A2.html",{d:1691939318e3,e:`
<h2>一、报错：</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span> <span class="token parameter variable">-v</span>
swapoff /www/swap
swapoff: /www/swap: swapoff failed: Cannot allocate memory
</code></pre></div>`,r:{minutes:.27,words:81},y:"a",t:"swapoff failed: Cannot allocate memory"},["/note-book/OperaSystems/大量使用swap导致无法切换.html","/note-book/OperaSystems/大量使用swap导致无法切换.md",":md"]],["v-2741a660","/note-book/OperaSystems/%E5%B8%B8%E8%A7%81%E4%B9%B1%E7%A0%81%E4%BA%A7%E7%94%9F%E5%8E%9F%E5%9B%A0.html",{d:1691939318e3,e:`
<h2>常见乱码产生原因</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>示例</th>
<th>特点</th>
<th>原因</th>
</tr>
</thead>
<tbody>
<tr>
<td>古文码</td>
<td>浜屽紶涓夋潕鍥旇档鍏</td>
<td>大多为不认识的古文，夹杂日韩文</td>
<td>以GBK方式读取UTF-8编码的中文</td>
</tr>
<tr>
<td>方块码</td>
<td>�������</td>
<td>大部分字符为方块问号</td>
<td>以UTF-8方式读取GBK编码的中文</td>
</tr>
<tr>
<td>符号码</td>
<td>å¼ä¸æåçäºèµµ­èä¸</td>
<td>大部分字符为各种符号</td>
<td>以ISO8859-1方式读取UTF-8编码的中文</td>
</tr>
<tr>
<td>拼音码</td>
<td>ÕÅÈýÀîËÄÍõÎåÕÔÁ</td>
<td>大部分字符为带着声调的字母</td>
<td>以ISO8859-1方式读取GBK编码的中文</td>
</tr>
<tr>
<td>问句码</td>
<td>犱笁鏉庡洓鐜嬩簲叚鑰?</td>
<td>基本和古文码一致，字符串为偶数时正常，长度为奇数时结尾会带上问号</td>
<td>以GBK方式读取UTF-8编码的中文，然后又用GBK的格式再次读取</td>
</tr>
<tr>
<td>锟拷码</td>
<td>锟斤拷锟斤拷锟斤拷</td>
<td>基本都是锟斤拷三个字符</td>
<td>以GBK方式读取UTF-8编码的��</td>
</tr>
</tbody>
</table>`,r:{minutes:1.37,words:412},y:"a",t:"常见乱码产生原因"},["/note-book/OperaSystems/常见乱码产生原因.html","/note-book/OperaSystems/常见乱码产生原因.md",":md"]],["v-f71e4004","/note-book/OperaSystems/%E6%9B%B4%E6%8D%A2%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AF%AD%E8%A8%80.html",{d:1691939318e3,e:`
<h1>一.背景信息</h1>
<p>在安装完 kali linux 2020.1 时，其操作系统默认语言为英文的，我们操作起来比较麻烦，为了以后操作方便起见，这边将其操作系统默认语言更改为中文。本篇文章将带领各位小伙伴们一起去将操作系统默认语言更改为中文</p>
<h1>二.操作步骤</h1>
<pre><code>打开Terminal Emulator 界面，查看当前系统语言为默认英文



在Terminal Emulator 中执行dpkg-reconfigure locales命令

注意：如果是root用户可直接执行dpkg-reconfigure locales命令，如果是kali用户则需先切换成root用户登陆再进行执行
具体切换成root用户登陆请参考下列链接地址：https://blog.csdn.net/weixin_46192679/article/details/104474829
</code></pre>`,r:{minutes:1.45,words:436},y:"a",t:"更换系统和命令行语言"},["/note-book/OperaSystems/更换系统和命令行语言.html","/note-book/OperaSystems/更换系统和命令行语言.md",":md"]],["v-0a501b28","/note-book/OperaSystems/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8FPATH.html",{d:1691939318e3,e:`
<h2>修改环境变量</h2>
<p>export PS1="[[\\e[34;1m]\\u@[\\e[0m][\\e[32;1m]\\H[\\e[0m] [\\e[31;1m]\\w[\\e[0m]]$ " 基本优化命令行 颜色</p>
<h3>1、临时-重新登录系统后失效。</h3>
<p>export PS1="[[\\e[34;1m]\\u@[\\e[0m][\\e[32;1m]\\H[\\e[0m] [\\e[31;1m]\\w[\\e[0m]]\\$ "</p>
<h3>2、永久-写入文件/etc/profile 与生效</h3>
<pre><code>[root@VM-4-4-centos ~]# tail -1  /etc/profile
export PS1="[\\[\\e[34;1m\\]\\u@\\[\\e[0m\\]\\[\\e[32;1m\\]\\H\\[\\e[0m\\] \\[\\e[31;1m\\]\\w\\[\\e[0m\\]]\\\\$ "
[root@VM-4-4-centos ~]# source  /etc/profile
</code></pre>`,r:{minutes:.47,words:142},y:"a",t:"环境变量"},["/note-book/OperaSystems/环境变量PATH.html","/note-book/OperaSystems/环境变量PATH.md",":md"]],["v-244d585c","/note-book/OperaSystems/%E8%BF%9B%E7%A8%8B.html",{d:1691939318e3,e:`
<h2>什么是进程:</h2>
<p>进程:</p>
<p>​		运行中的程序的一个副本，是被载入内存的一个指令集合，是资源分配的单位
​		进程ID（Process ID，PID）号码被用来标记各个进程
​		UID、GID、和SELinux语境决定对文件系统的存取和访问权限
​		通常从执行进程的用户来继承
​		存在生命周期</p>
<h2>进程创建：</h2>
<p>​		init：第一个进程，从 CentOS7 以后为systemd
​		进程：都由其父进程创建，fork()，父子关系，CoW：Copy On Write
​		刚创建时，共用父进程的内存，有新数据像刚创建的子进程写入时，单独开辟一个内存空间，把父进程内存复制一份给子进程做数据修改
​</p>`,r:{minutes:8.16,words:2449},y:"a",t:"进程"},["/note-book/OperaSystems/进程.html","/note-book/OperaSystems/进程.md",":md"]],["v-76b130c2","/note-book/OperaSystems/%E9%80%BB%E8%BE%91%E5%8D%B7%E6%97%A0%E6%B3%95%E5%88%A0%E9%99%A4.html",{d:1691939318e3,e:`
<p>存储池名称：fs2
逻辑卷名称：fs2
逻辑卷文件系统被占用(Logical volume /dev/<em>/</em> contains a filesystem in use.)</p>
<p>[root@f1s2001 ldnas]# lvremove -f /dev/fs2/fs2
Logical volume fs2/fs2 contains a filesystem in use.</p>
<h1>逻辑卷可能被挂载了</h1>
<p>​        df 查看挂载详情，找到对应逻辑卷进行卸载操作后，再执行删除
​        若挂载信息为：
​            /dev/fs2/fs2   1038336    32996   1005340   4% /mnt
​        执行 umount /dev/fs2/fs2 或 umount /mnt 进行卸载</p>`,r:{minutes:1.38,words:415},y:"a",t:"逻辑卷删除问题"},["/note-book/OperaSystems/逻辑卷无法删除.html","/note-book/OperaSystems/逻辑卷无法删除.md",":md"]],["v-794ccb14","/note-book/PhotoShop/ps%E5%A6%82%E4%BD%95%E5%8E%BB%E6%B0%B4%E5%8D%B0%E7%9A%844%E4%B8%AA%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`
<h2>方法一：</h2>
<p>1、 双击打开photoshop软件，导入含有水印的图片</p>
<figure><figcaption>1-导入含有水印的图片</figcaption></figure>
<p>2、 然后，在左侧工具栏中选择矩形选框工具，如图所示，框中水印部分</p>
<figure><figcaption>2-1选择矩形选框工具</figcaption></figure>
<figure><figcaption>2-2框中水印部分</figcaption></figure>
<p>3、 接着，执行编辑-填充，也可以直接按下Shift+F5，选择内容识别</p>
<figure><figcaption>3-选择内容识别</figcaption></figure>`,r:{minutes:2.39,words:718},y:"a",t:"PhotoShop如何去水印的4个方法"},["/note-book/PhotoShop/ps如何去水印的4个方法.html","/note-book/PhotoShop/ps如何去水印的4个方法.md",":md"]],["v-b7e1d682","/note-book/Physical_server/Huawei%20x288%E7%B3%BB%E5%88%97%E9%A3%8E%E6%89%87%E8%BD%AC%E9%80%9F%E8%B0%83%E9%80%9F.html",{d:1691939318e3,e:`
<p>登录web imana--实时监控---部件---风扇--控制模式</p>
<p>首先用ssh登录服务器的idrac</p>
<p>原文：</p>
<p>设置风扇的官方命令
https://support.huawei.com/enterprise/zh/doc/EDOC1000038841/688375b5</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>设置风扇的工作模式为手动，并设置手动的时间为1亿秒，大概3年多
ipmcset <span class="token parameter variable">-d</span> fanmode <span class="token parameter variable">-v</span> <span class="token number">1</span> <span class="token number">100000000</span>
设置风扇转速是百分之多少，默认是20%，设置必须设置最少30。。。。。所以敲上面的命令即可。
ipmcset <span class="token parameter variable">-d</span> fanlevel <span class="token parameter variable">-v</span> <span class="token number">20</span>

获取风扇的当前模式，自动还是手动，手动剩余多少秒，风扇当前？%
ipmcget <span class="token parameter variable">-d</span> fanmode

获取风扇的当前模式，自动还是手动，手动剩余多少秒，风扇当前？%
ipmcget <span class="token parameter variable">-d</span> fanlevel
</code></pre></div>`,r:{minutes:.66,words:197},y:"a",t:"华为服务器2288H V2的IPMI设置风扇转速和工作模式的命令"},["/note-book/Physical_server/Huawei x288系列风扇转速调速.html","/note-book/Physical_server/Huawei x288系列风扇转速调速.md",":md"]],["v-bf89a59e","/note-book/Portainer/Portainer%20%E5%8D%95%E6%9C%BA%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`
<p>Portainer是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面，基本能满足中小型单位对容器管理的全部需求。</p>
<h1>二、本地模式部署</h1>
<h2>1、查询当前有哪些Portainer镜像</h2>
<pre><code>docker search portainer
</code></pre>
<p>![image-20220512153403266](Portainer 单机部署.assets/image-20220512153403266-16918417647751.png)</p>`,r:{minutes:1.05,words:316},y:"a",t:"一、介绍"},["/note-book/Portainer/Portainer 单机部署.html","/note-book/Portainer/Portainer 单机部署.md",":md"]],["v-56a71ded","/note-book/Prometheus/Prometheus%E7%9B%91%E6%8E%A7Windows%E4%B8%BB%E6%9C%BA.html",{d:1691939318e3,e:`
<p><strong>1. 基本说明</strong></p>
<p>使用Prometheus监控Windows主机和Linux主机并无太大区别，都是使用社区的Exporter进行采集数据，之后暴露一个接口，可以让Prometheus采集到主机的数据。</p>
<p>其中监控Linux的Exporter是：https://github.com/prometheus/node_exporter</p>
<p>监控Windows主机的Exporter是：https://github.com/prometheus-community/windows_exporter</p>
<p><strong>2. 安装Windows Exporter</strong></p>`,r:{minutes:1.16,words:348},y:"a",t:"[Prometheus监控Windows主机]"},["/note-book/Prometheus/Prometheus监控Windows主机.html","/note-book/Prometheus/Prometheus监控Windows主机.md",":md"]],["v-6fa63cee","/note-book/RabbitMQ/rabbitmq.html",{d:1691939318e3,e:`
<h2>消息队列/中间件</h2>
<figure><figcaption>image-20211120102031495</figcaption></figure>
<h2>RabbitMQ详解</h2>
<h3>传递模式</h3>
<p>消息队列中间件有<strong>两种传递模式</strong>：【点对点 安全】 和 【发布/订阅(Pub/Sub)分支模式 并发】
点对点依靠队列的原理；发布/订阅则可以用于一对多的广播</p>
<h3>中间件作用</h3>
<p>消息中间件的作用：解耦、冗余(存储)、扩展性、削峰、可恢复性、顺序保证、缓冲、异步通信</p>
<h3>RabbitMQ的具体特点</h3>`,r:{minutes:9.77,words:2931},y:"a",t:"大型网站高并发架构-RabbitMQ消息队列"},[":md"]],["v-5a7f9ef1","/note-book/RouterOS/Azure%E5%88%B7%E5%86%99ROS%E6%95%99%E7%A8%8B.html",{d:1691939318e3,e:`
<h2>①先决条件</h2>
<ul>
<li>必须为root身份</li>
<li>必须使用第一代VM虚拟机</li>
<li>必须使用 chr-7.0beta5.img 这个镜像（新版 chr-7.4.img 因为文件格式更改，刷写难度较高）</li>
</ul>
<h2>②刷写过程</h2>
<h3>1. 首先准备一个可以使用的Azure账户,创建虚拟机</h3>
<figure><figcaption>image-20220805194541186</figcaption></figure>
<h3>2.在如图位置点击配置生成按钮，选择第一代（重要）</h3>
<blockquote>
<ul>
<li>需要选择第一代</li>
<li>测试环境使用的Debian 11 Gen1（其他环境自测）</li>
</ul>
</blockquote>`,r:{minutes:1.71,words:512},y:"a",t:"Azure刷写ROS教程"},["/note-book/RouterOS/Azure刷写ROS教程.html","/note-book/RouterOS/Azure刷写ROS教程.md",":md"]],["v-790a3eba","/note-book/RouterOS/RouterOS%E5%88%A9%E7%94%A8%EF%BC%88L2TP%EF%BC%89%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%96%B9%E5%BC%82%E5%9C%B0%E7%BB%84%E7%BD%91.html",{d:1691939318e3,e:`<h2>RouterOS利用V-P-N（L2TP）实现多方异地组网</h2>
<p>去年一个做网商的朋友找到我要搞定多方异地组网实现互通，还要实现在家办公。</p>
<p>当前环境是</p>
<p>A总部，RouterOS（ROS-A）当作主路由，使用的是CCR1009，100M专线；</p>
<p>B工厂，RouterOS（ROS-B）主路由，使用的是J1900软路由，200M商宽；</p>
<p>C办事处，RouterOS（ROS-C）主路由，使用的是J1900软路由，200M商宽，各自上网不互通。</p>
<h3>一、新网络规划</h3>
<p>经过和朋友的商量，需要不花钱的方案，对安全性也没太多的要求，只求能组网能用。</p>`,r:{minutes:5.3,words:1589},y:"a",t:""},["/note-book/RouterOS/RouterOS利用（L2TP）实现多方异地组网.html","/note-book/RouterOS/RouterOS利用（L2TP）实现多方异地组网.md",":md"]],["v-87713e26","/note-book/RouterOS/%E7%94%A8ros%E8%B7%AF%E7%94%B1%E4%BD%9C%E4%B8%BA%E4%B8%AD%E8%BD%AC%E6%95%99%E7%A8%8B.html",{d:1691939318e3,e:`
<blockquote>
<p>ros路由相信对大佬级别很简单，对我们这群小白还是有点难度的，接触ros路由也有1年了，基本都是作为国内NAT小鸡中转用的，今天看有人需要就简单的说明一下，供MJJ们也能用上，减少折腾吧。</p>
</blockquote>
<h2>步骤一：注册试用账号</h2>
<p>去ros官网注册个试用账号，不登录的话会被限速带宽1M，虽然试用一个月，但是到期后还是维持试用时期设置的配置。</p>
<p>ROS路由官网:https://mikrotik.com/client</p>
<h2>步骤二：国内小鸡DD成ROS路由</h2>
<p>把国内小鸡DD成ROS路由，这里感谢方总的教学，详细教学出于一位大佬，我只是搬运工。</p>`,r:{minutes:4.4,words:1320},y:"a",t:"用ros路由作为中转教程"},["/note-book/RouterOS/用ros路由作为中转教程.html","/note-book/RouterOS/用ros路由作为中转教程.md",":md"]],["v-0dc78858","/note-book/S3-SimpleStorageService/MiniO_Docker_Deploy.html",{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>docker
<span class="token assign-left variable">MINIO_ROOT</span><span class="token operator">=</span>/local_data/minio
<span class="token variable">\${ENGINE}</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> s3_minio <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9005</span>:9005 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9006</span>:9006 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">"MINIO_ROOT_USER=shoulong.zhang"</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">"MINIO_ROOT_PASSWORD=Sz@20211217"</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">\${MINIO_ROOT}</span>/data:/data <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">\${MINIO_ROOT}</span>/config:/root/.minio <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    minio/minio:RELEASE.2022-01-04T07-41-07Z server /data --console-address <span class="token string">":9006"</span> <span class="token parameter variable">--address</span> <span class="token string">":9005"</span>
    

</code></pre></div>`,r:{minutes:.21,words:63},y:"a",t:"使用Docker部署minio"},[":md"]],["v-3f2483ac","/note-book/S3-SimpleStorageService/Minio%E6%8C%82%E8%BD%BD%E5%88%B0nfs%E4%B8%8D%E6%88%90%E5%8A%9F.html",{d:1702539742e3,e:`
<h2>ERROR Unable to initialize backend: no locks available.</h2>
<figure><figcaption>001.png</figcaption></figure>
<p>服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示：</p>
<p>从这个日志来看，应该是minio拿不到nfs文件系统的锁。
解决方案</p>
<pre><code>nfs挂载时加nolock参数

使用nfsv4,而不是用nfsv3
</code></pre>
<p>参考</p>
<p>gitlab底层也是用的minio,gitlab官方文档是这么写的</p>`,r:{minutes:.69,words:208},y:"a",t:"Minio挂载到nfs不成功"},["/note-book/S3-SimpleStorageService/Minio挂载到nfs不成功.html","/note-book/S3-SimpleStorageService/Minio挂载到nfs不成功.md",":md"]],["v-b010c524","/note-book/Tomcat/tomcat.html",{d:1691939318e3,e:`
<h2>前言</h2>
<h3>什么是JAVA虚拟机</h3>
<pre><code>所谓虚拟机，就是一台虚拟的计算机。他是一款软件，用来执行一系列虚拟计算机指令。大体上，虚拟机可以分为系统虚拟机和程序虚拟机。大名鼎鼎的VisualBox、VMware就属于系统虚拟机。他们完全是对物理计算机的仿真。提供了一个可以运行完整操作系统的软件平台。
程序虚拟机的典型代表就是Java虚拟机，它专门为执行单个计算机程序而设计，在Java虚拟机中执行的指令我们称为Java字节码指令。无论是系统虚拟机还是程序虚拟机，在上面运行的软件都呗限制于虚拟机提供的资源中。
</code></pre>
<h3>JAVA 如何做到跨平台</h3>`,r:{minutes:12.14,words:3643},y:"a",t:"TOMCAT构建企业级高负载服务器"},[":md"]],["v-42119fed","/note-book/Traefik/",{d:1691939318e3,e:`
<h2>概览</h2>
<p>Traefik 是一种开源<em>边缘路由器</em>，它使您发布服务成为一种有趣而轻松的体验。它代表您的系统接收请求并找出哪些组件负责处理它们。</p>
<p>支持以下路由转发</p>
<ul>
<li>
<p>4层（数据链路层）</p>
</li>
<li>
<p>7层（应用层）</p>
</li>
</ul>
<p>具有</p>
<ul>
<li>拦截和路由每个传入请求，通过规则：  <a href="https://doc.traefik.io/traefik/routing/routers/#rule" target="_blank" rel="noopener noreferrer">https://doc.traefik.io/traefik/routing/routers/#rule</a></li>
<li>自动服务发现，通过provider，基础组件被删除，规则也会被删除</li>
<li>中间件实现功能： 调整请求，比如授权等等的。</li>
<li>丰富的插件</li>
</ul>`,r:{minutes:.59,words:177},y:"a",t:"Traefik"},["/note-book/Traefik/README.md"]],["v-69833e9a","/note-book/Traefik/traefik%E4%BD%9C%E4%B8%BAdocker%E8%BE%B9%E7%BC%98%E8%B7%AF%E7%94%B1.html",{d:1691939318e3,e:`
<blockquote>
<p>即： provider为docker</p>
</blockquote>
<h2>方案设计</h2>
<p>流量想象成流动的水，我们的目的是把水进行分流到每个需要服务的地方，就如下图所示，我们要做的是需要利用Traefik的自动发现机制自动发现服务，然后自动注册到管道处：</p>
<figure><figcaption>image-20230112131250935</figcaption></figure>
<p>有以下几个要点：</p>
<ul>
<li>主管道： 外部nginx做第一次流量筛选，作为手动控制的开关</li>
<li>二级管道： Treafik，自动将水管接到服务处
<ul>
<li>http</li>
<li>tcp</li>
<li>udp</li>
</ul>
</li>
</ul>`,r:{minutes:3.24,words:972},y:"a",t:"Traefik作为docker的边缘路由"},["/note-book/Traefik/traefik作为docker边缘路由.html","/note-book/Traefik/traefik作为docker边缘路由.md",":md"]],["v-454654c1","/note-book/VMware/%E5%90%84%E4%B8%AA%E7%89%88%E6%9C%AC%E7%9A%84%E6%BF%80%E6%B4%BB%E5%AF%86%E9%92%A5.html",{d:1691939318e3,e:`
<p>注：如果是WinXP或32位系统请用 10.0 版本；11.0 版本之后支持Win7或更高版64位系统。</p>
<p>VMware 所有版本永久许可证激活密钥：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>VMware Workstation v17 <span class="token keyword">for</span> Windows
MC60H-DWHD5-H80U9-6V85M-8280D
4A4RR-813DK-M81A9-4U35H-06KND
NZ4RR-FTK5H-H81C1-Q30QH-1V2LA
JU090-6039P-08409-8J0QH-2YR7F
4Y09U-AJK97-089Z0-A3054-83KLA
4C21U-2KK9Q-M8130-4V2QH-CF810


VMware Workstation v16 <span class="token keyword">for</span> Windows
ZF3R0-FHED2-M80TY-8QYGC-NPKYF
YF390-0HF8P-M81RQ-2DXQE-M2UT6
ZF71R-DMX85-08DQY-8YMNC-PPHV8
FA1M0-89YE3-081TQ-AFNX9-NKUC0

VMware Workstation v15 <span class="token keyword">for</span> Windows
GV7N2-DQZ00-4897Y-27ZNX-NV0TD
ZC10K-8EF57-084QZ-VXYXE-ZF2XF
UF71K-2TW5J-M88QZ-8WMNT-WKUY4
AZ7MK-44Y1J-H819Z-WMYNC-N7ATF
CU702-DRD1M-H89GP-JFW5E-YL8X6
YY5EA-00XDJ-480RP-35QQV-XY8F6
VA510-23F57-M85PY-7FN7C-MCRG0
 
VMware Workstation v14 <span class="token keyword">for</span> Windows 
FF31K-AHZD1-H8ETZ-8WWEZ-WUUVA
CV7T2-6WY5Q-48EWP-ZXY7X-QGUWD

VMware Workstation v12 <span class="token keyword">for</span> Windows 
5A02H-AU243-TZJ49-GTC7K-3C61N 
VF5XA-FNDDJ-085GZ-4NXZ9-N20E6
UC5MR-8NE16-H81WY-R7QGV-QG2D8
ZG1WH-ATY96-H80QP-X7PEX-Y30V4
AA3E0-0VDE1-0893Z-KGZ59-QGAVF

VMware Workstation v11 <span class="token keyword">for</span> Windows 
1F04Z-6D111-7Z029-AV0Q4-3AEH8 

VMware Workstation v10 <span class="token keyword">for</span> Windows 
1Z0G9-67285-FZG78-ZL3Q2-234JG 
4C4EK-89KDL-5ZFP9-1LA5P-2A0J0 
HY086-4T01N-CZ3U0-CV0QM-13DNU 
MA491-6NL5Q-AZAM0-ZH0N2-AAJ5A
5A6F6-88247-XZH59-HL0Q6-8CD2V
HF6QX-20187-2Z391-522NH-9AELT
5F29M-48312-8ZDF9-A8A5K-2AM0Z

VMware Workstation v9 <span class="token keyword">for</span> Windows 
4U434-FD00N-5ZCN0-4L0NH-820HJ 
4V0CP-82153-9Z1D0-AVCX4-1AZLV 
0A089-2Z00L-AZU40-3KCQ2-2CJ2T 
4F2AG-A0HEJ-JZWH8-L01N6-8C3Q3
JV0GK-8C3EM-5ZD21-U89NM-03K0L
5G47N-48H13-VZX61-728Q2-93TJX
5F4JV-A804M-4Z421-0V1N2-33EMY
0V6UY-4Z29L-8ZNQ1-R80QK-ACWL6
MZ2RU-D1K50-PZAX9-UK176-82Q7H
4A25F-4010Q-5ZQJ9-21CNH-AATJH

VMware Workstation v8 <span class="token keyword">for</span> Windows 
A61D-8Y0E4-QZTU0-ZR8XP-CC71Z 
MY0E0-D2L43-6ZDZ8-HA8EH-CAR30 
MA4XL-FZ116-NZ1C9-T2C5K-AAZNR 

VMware Workstation v7 <span class="token keyword">for</span> Windows 
VZ3X0-AAZ81-48D4Z-0YPGV-M3UC4 
VU10H-4HY97-488FZ-GPNQ9-MU8GA 
ZZ5NU-4LD45-48DZY-0FNGE-X6U86 

VMware Workstation v6 <span class="token keyword">for</span> Windows 
UV16D-UUC6A-49H6E-4E8DY 
C3J4N-3R22V-J0H5R-4NWPQ 
A15YE-5250L-LD24E-47E7C 

VMware Workstation v6 ACE Edition <span class="token keyword">for</span> Windows 
TK08J-ADW6W-PGH7V-4F8FP 
YJ8YH-6D4F8-9EPGV-4DZNA 
YCX8N-4MDD2-G130C-4GR4L
</code></pre></div>`,r:{minutes:1.27,words:382},y:"a",t:"VMware各个版本的激活密钥"},["/note-book/VMware/各个版本的激活密钥.html","/note-book/VMware/各个版本的激活密钥.md",":md"]],["v-5b263b15","/note-book/VMware/%E8%99%9A%E6%8B%9F%E5%8C%96%E7%89%A9%E7%90%86%E6%9C%BA.html",{d:1691939318e3,e:`
<h2>一、工具介绍</h2>
<p>使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点：</p>
<p>1、该过程对物理机无损</p>
<p>2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性</p>
<p>3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息</p>
<p>4、转换windows xp和windows server2008以上的版本（server 2003不确定是否可以）</p>
<h2>二、转换原理</h2>
<figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627165200680-1510240940.png" target="_blank" rel="noopener noreferrer"></a><figcaption>img</figcaption></figure>`,r:{minutes:3.55,words:1065},y:"a",t:"虚拟化物理机"},["/note-book/VMware/虚拟化物理机.html","/note-book/VMware/虚拟化物理机.md",":md"]],["v-46b48e13","/note-book/WindowsOperaSystem/PowerShell%20%E6%89%93%E5%8D%B0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html",{d:169199284e4,e:`
<div class="language-powershell" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\Users\\IT-Desktop&gt; <span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Path Env:

Name                           Value
<span class="token operator">--</span><span class="token operator">--</span>                           <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
ALLUSERSPROFILE                C:\\ProgramData
APPDATA                        C:\\Users\\IT-Desktop\\AppData\\Roaming
CLion                          C:\\Program Files\\JetBrains\\CLion 2022<span class="token punctuation">.</span>2\\bin<span class="token punctuation">;</span>
CommonProgramFiles             C:\\Program Files\\Common Files
CommonProgramFiles<span class="token punctuation">(</span>x86<span class="token punctuation">)</span>        C:\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\Common Files
CommonProgramW6432             C:\\Program Files\\Common Files
COMPUTERNAME                   SHOULONG-DESK
ComSpec                        C:\\Windows\\system32\\cmd<span class="token punctuation">.</span>exe
DriverData                     C:\\Windows\\System32\\Drivers\\DriverData
FPS_BROWSER_APP_PROFILE_STRING Internet Explorer
FPS_BROWSER_USER_PROFILE_ST<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> Default
HOMEDRIVE                      C:
HOMEPATH                       \\Users\\IT-Desktop
LOCALAPPDATA                   C:\\Users\\IT-Desktop\\AppData\\Local
LOGONSERVER                    \\\\SHOULONG-DESK
NUMBER_OF_PROCESSORS           4
OneDrive                       C:\\Users\\IT-Desktop\\OneDrive
OS                             Windows_NT
Path                           C:\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>\\VMware\\VMware Workstation\\bin\\<span class="token punctuation">;</span>C:\\Program Files\\Python37\\Scrip<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
PATHEXT                        <span class="token punctuation">.</span>COM<span class="token punctuation">;</span><span class="token punctuation">.</span>EXE<span class="token punctuation">;</span><span class="token punctuation">.</span>BAT<span class="token punctuation">;</span><span class="token punctuation">.</span>CMD<span class="token punctuation">;</span><span class="token punctuation">.</span>VBS<span class="token punctuation">;</span><span class="token punctuation">.</span>VBE<span class="token punctuation">;</span><span class="token punctuation">.</span>JS<span class="token punctuation">;</span><span class="token punctuation">.</span>JSE<span class="token punctuation">;</span><span class="token punctuation">.</span>WSF<span class="token punctuation">;</span><span class="token punctuation">.</span>WSH<span class="token punctuation">;</span><span class="token punctuation">.</span>MSC<span class="token punctuation">;</span><span class="token punctuation">.</span>PY<span class="token punctuation">;</span><span class="token punctuation">.</span>PYW<span class="token punctuation">;</span><span class="token punctuation">.</span>CPL
PROCESSOR_ARCHITECTURE         AMD64
PROCESSOR_IDENTIFIER           Intel64 Family 6 Model 158 Stepping 9<span class="token punctuation">,</span> GenuineIntel
PROCESSOR_LEVEL                6
PROCESSOR_REVISION             9e09
ProgramData                    C:\\ProgramData
ProgramFiles                   C:\\Program Files
ProgramFiles<span class="token punctuation">(</span>x86<span class="token punctuation">)</span>              C:\\Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>
ProgramW6432                   C:\\Program Files
PSModulePath                   C:\\Users\\IT-Desktop\\Documents\\WindowsPowerShell\\Modules<span class="token punctuation">;</span>C:\\Program Files\\WindowsPower<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
PUBLIC                         C:\\Users\\Public
PyCharm                        C:\\Program Files\\JetBrains\\PyCharm 2022<span class="token punctuation">.</span>2<span class="token punctuation">.</span>2\\bin<span class="token punctuation">;</span>
SESSIONNAME                    Console
SystemDrive                    C:
SystemRoot                     C:\\Windows
TEMP                           C:\\Users\\IT-DES~1\\AppData\\Local\\Temp
TMP                            C:\\Users\\IT-DES~1\\AppData\\Local\\Temp
USERDOMAIN                     SHOULONG-DESK
USERDOMAIN_ROAMINGPROFILE      SHOULONG-DESK
USERNAME                       IT-Desktop
USERPROFILE                    C:\\Users\\IT-Desktop
windir                         C:\\Windows
ZES_ENABLE_SYSMAN              1

</code></pre></div>`,r:{minutes:.77,words:231},y:"a",t:"PowerShell 打印环境变量"},["/note-book/WindowsOperaSystem/PowerShell 打印环境变量.html","/note-book/WindowsOperaSystem/PowerShell 打印环境变量.md",":md"]],["v-24f7c960","/note-book/WindowsOperaSystem/PowerShell%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html",{d:169199284e4,e:`
<blockquote>
<p>在使用 VS code 自带终端的时会报出"系统禁止脚本运行的错误"，原因是因为 PowerShell 执行策略的问题。</p>
</blockquote>
<h2>解决方法：</h2>
<pre><code>管理员身份运行 PowerShell
执行：get-ExecutionPolicy，若显示 Restricted 表示状态是禁止的
执行：set-ExecutionPolicy，会提示输入参数
输入 RemoteSigned 会提示进行选择
输入：Y，回车
</code></pre>
`,r:{minutes:.34,words:103},y:"a",t:"PowerShell 操作系统禁止运行脚本"},["/note-book/WindowsOperaSystem/PowerShell 操作系统禁止运行脚本.html","/note-book/WindowsOperaSystem/PowerShell 操作系统禁止运行脚本.md",":md"]],["v-28c94530","/note-book/WindowsOperaSystem/Windows%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%94%B9%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7%E7%9B%AE%E5%BD%95.html",{d:169199284e4,e:`
<p>系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现<code>C:\\Users</code>目录占用几十个GB，以下方法可将<code>Users</code>目录大部分空间转移。</p>
<h3>1. 准备工作</h3>
<p>更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！</p>
<h3>2. 修改注册表</h3>
<p>更改默认用户目录路径，快捷键<code>Win+R</code>输入<code>regedit</code>打开系统注册表，切换至如下路径：</p>
<div class="language-BAT" data-ext="BAT" data-title="BAT"><pre class="language-BAT"><code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList\\
</code></pre></div>`,r:{minutes:1.91,words:572},y:"a",t:"Windows系统更改/迁移用户目录"},["/note-book/WindowsOperaSystem/Windows系统更改迁移用户目录.html","/note-book/WindowsOperaSystem/Windows系统更改迁移用户目录.md",":md"]],["v-7aaa8b0e","/note-book/Zabbix/Zabbix-Agent%E4%B8%BB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C.html",{d:1704339444e3,e:`
<p>TODO</p>
`,r:{minutes:.04,words:11},y:"a",t:"Zabbix-Agent主动模式自动注册"},["/note-book/Zabbix/Zabbix-Agent主动模式自动注册.html","/note-book/Zabbix/Zabbix-Agent主动模式自动注册.md",":md"]],["v-3bb6b138","/note-book/Zabbix/Zabbix-Agent%E8%A2%AB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C.html",{d:1704339444e3,e:`
<p>TODO</p>
`,r:{minutes:.04,words:11},y:"a",t:"Zabbix-Agent被动模式自动注册"},["/note-book/Zabbix/Zabbix-Agent被动模式自动注册.html","/note-book/Zabbix/Zabbix-Agent被动模式自动注册.md",":md"]],["v-5df449f7","/note-book/Zabbix/zabbix-docker.html",{d:1704338647e3,e:`
<blockquote>
<p>近期做了一些民间项目，不需要极好的可靠性，要求快速部署和删除。所以做了个Docker方案。进行记录</p>
<p>参考资料：</p>
<ul>
<li>zabbix-docker镜像构建的文档在这里
<ul>
<li>https://github.com/zabbix/zabbix-docker</li>
</ul>
</li>
<li>该页面所有资料来自官网
<ul>
<li>https://www.zabbix.com/documentation/current/zh/manual/installation/containers</li>
</ul>
</li>
</ul>
</blockquote>`,r:{minutes:7.81,words:2344},y:"a",t:"zabbix使用容器方式部署"},[":md"]],["v-bf02f4a4","/note-book/Zabbix/zabbix.html",{d:1691939318e3,e:`
<h2>Zabbix 构建企业级监控告警平台</h2>
<h3>一. 简介</h3>
<p>Zabbix 是一个基于 WEB 界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。它能监视各种网络参数，保证服务器系统的安全运营；并提供灵活的通知机制以让系统管理员快速定位/解决存在的各种问题。</p>
<h3>二.监控对象</h3>
<hr>
<p>源代码: *.html *.jsp *.php *.py
数据库： MySQL,MariaDB,Oracle,SQL Server,DB2
应用软件：Nginx,Apache,PHP,Tomcat agent</p>
<hr>
<p>集群： LVS,Keepalived,HAproxy,RHCS,F5
虚拟化层/云层： VMware,KVM,XEN agent
操作系统：Linux,Unix,Windows性能参数</p>`,r:{minutes:11.94,words:3582},y:"a",t:"Zabbix 构建企业级监控告警平台"},[":md"]],["v-8b9d7fba","/note-book/Zabbix/zabbix%E7%9A%84VMwareGuest%E8%A1%A5%E5%85%85%E7%BC%BA%E9%99%B7.html",{d:1692674203e3,e:`
<h2>主机丢失</h2>
<p><strong>删除</strong>powerstate的自动删除机制，删除这个</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Discard unchanged with heartbeat
</code></pre></div><p>名称： 主机丢失  Power state no data</p>
<p>表达式：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nodata<span class="token punctuation">(</span>/VMware Guest/vmware.vm.powerstate<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$VMWARE</span>.URL<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$VMWARE</span>.VM.UUID<span class="token punctuation">}</span><span class="token punctuation">]</span>,3m<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre></div>`,r:{minutes:.41,words:123},y:"a",t:"zabbix的VMwareGuest补充缺陷"},["/note-book/Zabbix/zabbix的VMwareGuest补充缺陷.html","/note-book/Zabbix/zabbix的VMwareGuest补充缺陷.md",":md"]],["v-5bece530","/note-book/ebook/ebook.html",{d:1691939318e3,e:`
<ul>
<li>
<p><a href="Linux%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98%E6%8C%87%E5%8D%97.pdf">Linux性能调优指南.pdf</a></p>
</li>
<li>
<p><a href="28%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AFdocker.pdf">28企业级容器技术docker.pdf</a></p>
</li>
</ul>
<h2>面试经典</h2>
<ul>
<li><a href="Q%E6%8A%80%E8%83%BD.pdf">Q技能.pdf</a></li>
<li><a href="W%E6%8A%80%E8%83%BD.pdf">W技能.pdf</a></li>
<li><a href="E%E6%8A%80%E8%83%BD.pdf">E技能.pdf</a></li>
<li><a href="%E7%BB%88%E6%9E%81%E5%A4%A7%E6%8B%9BR.pdf">终极大招R.pdf</a></li>
</ul>`,r:{minutes:.25,words:74},y:"a",t:"目录"},[":md"]],["v-42d1b932","/note-book/goaccess/goaccess%E7%BB%99ftp%E7%94%9F%E6%88%90%E5%88%86%E6%9E%90%E5%9B%BE.html",{d:1697698698e3,e:`
<blockquote>
<p>官网：https://goaccess.io/</p>
<p>源码： https://github.com/allinurl/goaccess</p>
</blockquote>
<h2>日志格式</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Sat Oct <span class="token number">7</span> <span class="token number">2023</span> <span class="token number">14</span>:41:57 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">61</span> /catfish.txt b _ POST g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:20:24 <span class="token number">24</span> <span class="token number">113.57</span>.80.113 <span class="token number">62537788</span> /textbook/ppts/L4-数据集成技术基础.pptx b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:19:15 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">137039</span> /textbook/works/作业3_catfish.pdf b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:18:09 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">137039</span> /textbook/works/作业3_catfish.pdf b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:16:45 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">267</span> /salmon_score.txt b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Sat Sep <span class="token number">23</span> <span class="token number">2023</span> <span class="token number">17</span>:57:18 <span class="token number">1</span> <span class="token number">113.57</span>.80.8 <span class="token number">61</span> /salmon.txt b _ POST g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>


</code></pre></div>`,r:{minutes:3.43,words:1030},y:"a",t:"goaccess给ftp生成分析图"},["/note-book/goaccess/goaccess给ftp生成分析图.html","/note-book/goaccess/goaccess给ftp生成分析图.md",":md"]],["v-4ae285a4","/note-book/memcache-redis/memcache-redis.html",{d:1691939318e3,e:`
<h1>前言</h1>
<figure><figcaption>image-20211117093651109</figcaption></figure>
<h1>简介</h1>
<h2>缓存服务器作用</h2>
<p>加快访问速度，缓解数据库压力</p>
<h2>NoSQL</h2>
<p>net only sql</p>
<figure><figcaption>image-20211117094009409</figcaption></figure>
<h2>nosql产品</h2>
<p>redis</p>
<p>memcached</p>
<p>mongodb</p>
<h1>memcached</h1>`,r:{minutes:16.86,words:5057},y:"a",t:"Memcache-Redis缓解数据库压力"},[":md"]],["v-17556421","/note-book/misc/%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8Cu%E7%9B%BE%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B.html",{d:1704691254e3,e:`
<blockquote>
<p>因为建设银行落后的系统，使用Windows 7操作系统是百分百成功，其他os不成功。不建议尝试。</p>
</blockquote>
<h2>step1</h2>
<p>在链接 http://ebank1.ccb.com/chn/home/ebank/company/wsyx/xzzq/index.shtml</p>
<p>下载驱动 <strong>E路护航网银安全组件</strong></p>
<figure><figcaption>image-20231213153117416</figcaption></figure>
<h2>step2</h2>
<p>安装浏览器插件，Windows默认未edge浏览器。</p>`,r:{minutes:.93,words:278},y:"a",t:"中国建设银行u盾使用教程"},["/note-book/misc/中国建设银行u盾使用教程.html","/note-book/misc/中国建设银行u盾使用教程.md",":md"]],["v-171e9f87","/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/CPU%E9%B8%A1%E8%A1%80BIOS.html",{d:1702978415e3,e:`
<p>鸡血bios能提升性能，获得更大好处。现在对一些关键操作的参数进行解释。</p>
<p>这是我们本文的主角</p>
<figure><figcaption>image-20231219170358590</figcaption></figure>
<p>参数介绍</p>
<p>2696v3是e5 v3系列最强的cpu 它是2699v3的 oem定制版
2699v3是 18核36线程  睿频  （ 12-36）单核3.6G 全核2.8G  tdp 145w
2696v3是  18核36线程  睿频  （12-38）  单核3.8G 全核 2.8G tdp  145w
所以他们唯一的区别就四单核睿频从3.6g提升到了3.8G
但是因为E5 V3鸡血bios的出现 可以全核最大睿频 即单核3.6G就可以全核3.6G 单核3.8G就可以全核3.8G.但是全核睿频功耗不能超过tdp功耗 就是145w 所以18核满载超过145w就会降频</p>`,r:{minutes:5.9,words:1769},y:"a",t:"CPU鸡血BIOS"},["/note-book/洋垃圾主机/CPU鸡血BIOS.html","/note-book/洋垃圾主机/CPU鸡血BIOS.md",":md"]],["v-4be274e4","/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/GPU%E7%9F%BF%E5%8D%A1%E4%BD%93%E8%B4%A8%E6%A3%80%E6%B5%8B.html",{d:1702978415e3,e:`
<blockquote>
<p>矿难已过，便宜显卡满天飞。 矿卡价格确实很香，同时坑也很多。我准备做一次垃圾佬踩一下这些坑。</p>
<p>作为一个垃圾佬，最喜欢体验这一些机遇与风险并存刺激的东西。</p>
<p>于是，我购买了一片 AMD 讯景 RX6600XT 花费 1179.00元，店保2年，看起来非常诱人。这价格还要啥自行车？就是用着用着爆了，我都能夸它爆的真响。</p>
<p>享受价格红利的同时也不能忘记巨大风险的存在，我们如何为矿卡检测体质呢？这是本文的主题。</p>
</blockquote>
<p>矿卡型号一览表 来自 https://www.bilibili.com/read/cv21654310/</p>`,r:{minutes:3.16,words:949},y:"a",t:"GPU矿卡体质检测"},["/note-book/洋垃圾主机/GPU矿卡体质检测.html","/note-book/洋垃圾主机/GPU矿卡体质检测.md",":md"]],["v-04007d38","/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html",{d:1691939318e3,e:`
<h2>安装etcd keeper</h2>
<p>github地址：https://github.com/evildecay/etcdkeeper</p>
<p>安装简单，步骤简短。</p>
<h2>获取安装包</h2>
<p>wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</p>
<h2>解压安装包</h2>
<pre><code>unzip etcdkeeper-v0.7.6-linux_x86_64.zip 
mv etcdkeeper /usr/local/ 
cd /usr/local/etcdkeeper 
chmod +x etcdkeeper
</code></pre>`,r:{minutes:.92,words:275},y:"a",t:"etcd安装dashboard-etcdkeeper"},["/note-book/DatabaseSystem/Etcd/etcd安装etcdkeeper.html","/note-book/DatabaseSystem/Etcd/etcd安装etcdkeeper.md",":md"]],["v-350fc342","/note-book/DatabaseSystem/MySQL/%E5%9B%BD%E5%86%85%E6%BA%90.html",{d:1691939318e3,c:"数据库",e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> localinstall http://mirrors.ustc.edu.cn/mysql-repo/mysql57-community-release-el7.rpm

</code></pre></div><h2>更改用户密码</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
ALTER <span class="token environment constant">USER</span> <span class="token string">'jeffrey'</span>@<span class="token string">'localhost'</span> IDENTIFIED BY <span class="token string">'password'</span><span class="token punctuation">;</span> //记得修改自己的账户
flush privileges<span class="token punctuation">;</span> //修改成功后刷新权限
quit<span class="token punctuation">;</span> //最后退出

</code></pre></div>`,r:{minutes:.22,words:67},y:"a",t:"国内源"},["/note-book/DatabaseSystem/MySQL/国内源.html","/note-book/DatabaseSystem/MySQL/国内源.md",":md"]],["v-1187c118","/note-book/DatabaseSystem/MySQL/%E6%9F%A5%E7%9C%8BMysql%E6%95%B0%E6%8D%AE%E9%87%8F%E5%A4%A7%E5%B0%8F.html",{d:1697513393e3,e:`
<p>以MB为单位统计，查询当前全部数据库的数据量大小。</p>
<p>data_length：数据大小
index_length：索引大小</p>
<p>括号被转义了，记得转回来</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>SELECT table_schema <span class="token string">"Data Base Name"</span>,
    sum<span class="token punctuation">\\</span><span class="token punctuation">(</span>data_length+index_length<span class="token punctuation">\\</span><span class="token punctuation">)</span>/1024/1024 <span class="token string">"Data Base Size in MB"</span>
FROM information_schema.TABLES
</code></pre></div>`,r:{minutes:.23,words:68},y:"a",t:"查看Mysql数据量大小"},["/note-book/DatabaseSystem/MySQL/查看Mysql数据量大小.html","/note-book/DatabaseSystem/MySQL/查看Mysql数据量大小.md",":md"]],["v-11c46d82","/note-book/DistributedSystem/Ansible/Centos7.x%20%E5%AE%89%E8%A3%85Python3.9.7%20%20Ansible4.5.html",{d:1691939318e3,e:`
<h2>1、环境信息</h2>
<p>前期安装Ansible失败报"Failed to validate the SSL certificate"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>安装环境： 　Centos7.9
SSH/SSL:　　OpenSSH_8.7p1, OpenSSL <span class="token number">1.1</span>.1l  <span class="token number">24</span> Aug <span class="token number">2021</span>

<span class="token comment">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span>

<span class="token comment"># python --version</span>

Python <span class="token number">2.7</span>.5

<span class="token comment"># python3 --version</span>

Python <span class="token number">3.9</span>.7
</code></pre></div>`,r:{minutes:1.38,words:415},y:"a",t:"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证）"},["/note-book/DistributedSystem/Ansible/Centos7.x 安装Python3.9.7  Ansible4.5.html","/note-book/DistributedSystem/Ansible/Centos7.x 安装Python3.9.7  Ansible4.5.md",":md"]],["v-761ac8fe","/note-book/DistributedSystem/Ansible/ansible%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%90%E7%BB%B4.html",{d:1691939318e3,e:`
<h1>1-简介</h1>
<h2><strong>Logo</strong></h2>
<figure><figcaption>image-20211106190344512</figcaption></figure>
<h2>介绍</h2>
<p>ansible是新出现的自动化运维工具，基于<strong>Python</strong>开发，集合了众多运维工具（puppet、cfengine、chef、func、fabric）的优点，
实现了批量系统配置、批量程序部署、批量运行命令等功能。
无客户端。</p>
<p>我们要学一些Ansible的安装和一些基本概念,然后我们会开始研究一些真正有意思的东西 – <strong>playbook</strong>,配置管理,部署以及语法编排.我们将会学习如何使用/usr/bin/ansible执行ad-hoc并行命令,我们还会学习ansible的核心有什么样的模块可供使用.当然以后你也可以写你自己的模块,我们会在后期讲到.</p>`,r:{minutes:16.88,words:5065},y:"a",t:"ansible自动化运维"},["/note-book/DistributedSystem/Ansible/ansible自动化运维.html","/note-book/DistributedSystem/Ansible/ansible自动化运维.md",":md"]],["v-61515108","/note-book/DistributedSystem/JumperServer/HA_Deploy.html",{d:1691939318e3,e:`
<p>环境说明</p>
<ul>
<li>除 JumpServer 自身组件外，其他组件的高可用请参考对应的官方文档进行部署</li>
<li>按照此方式部署后，后续只需要根据需要扩容 JumpServer 节点然后添加节点到 HAProxy 即可</li>
<li>如果已经有 HLB 或者 SLB 可以跳过 HAProxy 部署，第三方 LB 要注意 session 和 websocket 问题</li>
<li>如果已经有 云存储 (* S3/Ceph/Swift/OSS/Azure) 可以跳过 MinIO 部署，MySQL Redis 也一样</li>
<li>生产环境中，应该使用 Ceph 等替代 NFS，或者部署高可用的 NFS 防止单点故障</li>
<li><a href="https://github.com/wojiushixiaobai/redis-sentinel" target="_blank" rel="noopener noreferrer">Redis 高可用快速部署可以参考此项目</a></li>
</ul>`,r:{minutes:16.87,words:5062},y:"a",t:"负载均衡"},[":md"]],["v-5865d184","/note-book/DistributedSystem/JumperServer/JumperServerDockerDeploy.html",{d:169215496e4,e:`
<h2>环境展示和配置如下</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release</span>
Rocky Linux release <span class="token number">8.5</span> <span class="token punctuation">(</span>Green Obsidian<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed -i 's/SELINUX=.*$/SELINUX=disabled/g' /etc/selinux/config</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep SELINUX /etc/selinux/config</span>
<span class="token comment"># SELINUX=disabled</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
<span class="token comment"># SELINUXTYPE= can take one of these three values:</span>
<span class="token assign-left variable">SELINUXTYPE</span><span class="token operator">=</span>targeted
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># setenforce 0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># getenforce</span>
Permissive
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl status firewalld</span>
● firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/firewalld.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Sat <span class="token number">2022</span>-04-23 <span class="token number">12</span>:21:01 CST<span class="token punctuation">;</span> 3min 39s ago
     Docs: man:firewalld<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
 Main PID: <span class="token number">1011</span> <span class="token punctuation">(</span>firewalld<span class="token punctuation">)</span>
    Tasks: <span class="token number">2</span> <span class="token punctuation">(</span>limit: <span class="token number">24736</span><span class="token punctuation">)</span>
   Memory: <span class="token number">30</span>.5M
   CGroup: /system.slice/firewalld.service
           └─1011 /usr/libexec/platform-python <span class="token parameter variable">-s</span> /usr/sbin/firewalld <span class="token parameter variable">--nofork</span> <span class="token parameter variable">--nopid</span>

Apr <span class="token number">23</span> <span class="token number">12</span>:21:01 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting firewalld - dynamic firewall daemon<span class="token punctuation">..</span>.
Apr <span class="token number">23</span> <span class="token number">12</span>:21:01 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started firewalld - dynamic firewall daemon.
Apr <span class="token number">23</span> <span class="token number">12</span>:21:01 localhost.localdomain firewalld<span class="token punctuation">[</span><span class="token number">1011</span><span class="token punctuation">]</span>: WARNING: AllowZoneDrifting is enabled. This is considered an insecure configuration option. It will be removed <span class="token keyword">in</span> a future release. Please consider di<span class="token operator">&gt;</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: ens160
  sources:
  services: cockpit dhcpv6-client <span class="token function">ssh</span>
  ports:
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre></div>`,r:{minutes:6.08,words:1823},y:"a",t:"JumperServer Docker容器部署"},[":md"]],["v-9174ace0","/note-book/DistributedSystem/JumperServer/",{d:1691939318e3,e:`
<figure><figcaption>!界面展示</figcaption></figure>
<h2>Over View</h2>
<ul>
<li>开源：零门槛，线上快速获取和安装；</li>
<li>分布式：轻松支持大规模并发访问；</li>
<li>无插件：仅需浏览器，极致的 Web Terminal 使用体验；</li>
<li>多云支持：一套系统，同时管理不同云上面的资产；</li>
<li>云端存储：审计录像云端存储，永不丢失；</li>
<li>多租户：一套系统，多个子公司和部门同时使用；</li>
<li>多应用支持：数据库，Windows远程应用，Kubernetes。</li>
</ul>`,r:{minutes:3.9,words:1170},y:"a",t:"JumperServer Insight"},["/note-book/DistributedSystem/JumperServer/README.md"]],["v-91b5b3e2","/note-book/DistributedSystem/OpenStack/OpenStack-Queens%E7%89%88%E6%90%AD%E5%BB%BA%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`
<h1>1.基础环境配置</h1>
<h2>1.1 节点硬件规划</h2>
<p>本次搭建使用VMware Workstation虚拟出3台CentOS7虚拟机作为主机节点，节点架构：1个controller控制节点、1个compute计算节点、1个cinder块存储节点。硬件配置具体如下：</p>
<table>
<thead>
<tr>
<th>节点名称</th>
<th>CPU</th>
<th>内存</th>
<th>磁盘</th>
<th>操作系统镜像</th>
</tr>
</thead>
<tbody>
<tr>
<td>controller节点</td>
<td>2VCPU</td>
<td>4GB</td>
<td>50GB</td>
<td>CentOS-7-x86_64-Minimal-1804.iso</td>
</tr>
<tr>
<td>compute1节点</td>
<td>2VCPU</td>
<td>4GB</td>
<td>50GB</td>
<td>CentOS-7-x86_64-Minimal-1804.iso</td>
</tr>
<tr>
<td>cinder1节点</td>
<td>2VCPU</td>
<td>4GB</td>
<td>50GB系统盘，50GB存储盘</td>
<td>CentOS-7-x86_64-Minimal-1804.iso</td>
</tr>
</tbody>
</table>`,r:{minutes:93.18,words:27955},y:"a",t:"OpenStack-Queens版搭建详解"},["/note-book/DistributedSystem/OpenStack/OpenStack-Queens版搭建详解.html","/note-book/DistributedSystem/OpenStack/OpenStack-Queens版搭建详解.md",":md"]],["v-7c8e6e87","/note-book/Gitlab/CI/gitlab%20ci%20%E7%BC%96%E5%86%99.html",{d:1691939318e3,e:`
<ul>
<li>gitlab runner</li>
<li>gitlab-ci.yml</li>
</ul>
<p>.gitlab-ci.yml 基本关键词的使用</p>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>before_script
script
after_script

allow_failure 
artifiacts 
cache
coverage 
dependencies
environment
except
extends
image
include
interruprible
only
pages
parallel
release
resource_group
retry
rules
services
stage
tags
timeout
trigger
variables
when

</code></pre></div>`,r:{minutes:32.42,words:9726},y:"a",t:"gitlab ci/cd 的两大要素"},["/note-book/Gitlab/CI/gitlab ci 编写.html","/note-book/Gitlab/CI/gitlab ci 编写.md",":md"]],["v-eb33cb0a","/note-book/Gitlab/CI/gitlab%20ci%20%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`<figure><figcaption>Gitlab-ci:从零开始的前端自动化部署</figcaption></figure>
<p>官方文档url：https://docs.gitlab.com/ee/ci</p>
<h1><strong>一.</strong> 概念介绍</h1>
<h2><strong>0.</strong>   <strong>Gitlab</strong> <strong>触发</strong> <strong>CI</strong> 流程图</h2>
<figure><figcaption>img</figcaption></figure>
<h2>1.1 gitlab-ci &amp;&amp; 自动化部署工具的运行机制</h2>`,r:{minutes:4.6,words:1379},y:"a",t:"一. 概念介绍"},["/note-book/Gitlab/CI/gitlab ci 部署.html","/note-book/Gitlab/CI/gitlab ci 部署.md",":md"]],["v-75d6f0c8","/note-book/Gitlab/CI/%E9%83%A8%E7%BD%B2Kubernetes%E7%B1%BB%E5%9E%8B%E7%9A%84gitlab-runner.html",{d:1691939318e3,e:`
<h2>（1）下载软件包</h2>
<pre><code>wget https://get.helm.sh/helm-v3.8.0-linux-amd64.tar.gz
</code></pre>
<h2>（2）解压并拷贝文件位置</h2>
<pre><code>tar -zxvf helm-v3.8.0-linux-amd64.tar.gz

mv linux-amd64/helm /usr/local/bin/helm
</code></pre>
<p>这里需要注意的是将 /usr/local/bin 添加到环境变量中</p>
<h1>二、配置chart存储库</h1>
<h2>（1）添加chart存储库</h2>`,r:{minutes:10.08,words:3025},y:"a",t:"一、安装helm工具"},["/note-book/Gitlab/CI/部署Kubernetes类型的gitlab-runner.html","/note-book/Gitlab/CI/部署Kubernetes类型的gitlab-runner.md",":md"]],["v-1c751544","/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html",{d:1691939318e3,e:`
<h1>ELK+Kafka集群</h1>
<h2>前言</h2>
<h3>前言</h3>
<p>业务层可以直接写入到kafka队列中，不用担心elasticsearch的写入效率问题。
图示</p>
<figure><figcaption>在这里插入图片描述</figcaption></figure>
<h1>Kafka</h1>
<p>Apache kafka是消息中间件的一种，是一种分布式的，基于发布/订阅的消息系统。能实现一个为处理实时数据提供一个统一、高吞吐、低延迟的平台，且拥有分布式的，可划分的，冗余备份的持久性的日志服务等特点。</p>
<h2>术语</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>1、kafka是一个消息队列服务器。kafka服务称为broker（中间人）, 消息发送者称为producer（生产者）, 消息接收者称为consumer（消费者）;通常我们部署多个broker以提供高可用性的消息服务集群.典型的是3个broker;消息以topic的形式发送到broker,消费者订阅topic,实现按需取用的消费模式;创建topic需要指定replication-factor(复制数目, 通常=broker数目);每个topic可能有多个分区(partition), 每个分区的消息内容不会重复

2、kafka-broker-中间人

3、webserver/logstash-producer[prəˈdu:sə®]-消息生产者/消息发送者
Producer：
kafka集群中的任何一个broker都可以向producer提供metadata信息,这些metadata中包含"集群中存活的servers列表"/“partitions leader列表"等信息；
当producer获取到metadata信息之后, producer将会和Topic下所有partition leader保持socket连接；
消息由producer直接通过socket发送到broker，中间不会经过任何"路由层”，事实上，消息被路由到哪个partition上由producer客户端决定；比如可以采用"random"“key-hash”"轮询"等,如果一个topic中有多个partitions,那么在producer端实现"消息均衡分发"是必要的。
在producer端的配置文件中,开发者可以指定partition路由的方式。
Producer消息发送的应答机制设置发送数据是否需要服务端的反馈,有三个值0,1,-1
0:producer不会等待broker发送ack
1:当leader接收到消息之后发送ack
-1:当所有的follower都同步消息成功后发送ack

4、elasticsearch-consumer-消费者

5、logs-topic-话题

6、replication-facter-复制数目-中间人存储消息的副本数=broker数目

7、一个topic有多个分区partition
partition：
（1）、Partition：为了实现扩展性，一个非常大的topic可以分布到多个broker（即服务器）上，一个topic可以分为多个partition，每个partition是一个有序的队列。partition中的每条消息都会被分配一个有序的id（offset）。kafka只保证按一个partition中的顺序将消息发给consumer，不保证一个topic的整体（多个partition间）的顺序。
（2）、在kafka中,一个partition中的消息只会被group中的一个consumer消费(同一时刻)；一个Topic中的每个partions，只会被一个consumer消费，不过一个consumer可以同时消费多个partitions中的消息。
</code></pre></div>`,r:{minutes:15.02,words:4507},y:"a",t:"ELK+kafka构建高并发分布式日志收集系统"},["/note-book/Kafka/ELK_kafka构建高并发分布式日志收集系统/elk_kfaka.html","/note-book/Kafka/ELK+kafka构建高并发分布式日志收集系统/elk+kfaka.html","/note-book/Kafka/ELK+kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk+kfaka.html","/note-book/Kafka/ELK+kafka构建高并发分布式日志收集系统/elk+kfaka.md","/note-book/Kafka/ELK+kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk+kfaka.md"]],["v-37a8ebbd","/note-book/LinuxOperaSystem/Git/Centos7%20yum%20install%20git2.x%20%E8%BE%83%E6%96%B0%E7%89%88%E6%9C%AC.html",{d:1698989873e3,e:`
<p>centos7 默认的git版本是1.8.x</p>
<pre><code># git --version
git version 1.8.3.1
</code></pre>
<p>升级依然没有升级到2.x版本</p>
<pre><code>yum -y upgrade git
</code></pre>
<p>在Git的官网上，对Red Hat Linux安装git建议有两种</p>
<pre><code>1、下载源代码、编译、构建、配置环境变量
2、第三方仓库IUS
</code></pre>
<p>对于第一种方式，可以参考其他人的博客，例如https://blog.csdn.net/Juladoe/article/details/76170193
Git第三方仓库安装方式（IUS）</p>`,r:{minutes:.84,words:253},y:"a",t:"Centos7 yum install git2.x(较新版本)"},["/note-book/LinuxOperaSystem/Git/Centos7 yum install git2.x 较新版本.html","/note-book/LinuxOperaSystem/Git/Centos7 yum install git2.x 较新版本.md",":md"]],["v-3b5999cf","/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/AWK%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0.html",{d:1698989873e3,e:`
<ul>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#gensub_18" target="_blank" rel="noopener noreferrer">gensub()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#gsub_86" target="_blank" rel="noopener noreferrer">gsub()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#index_101" target="_blank" rel="noopener noreferrer">index()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#length_111" target="_blank" rel="noopener noreferrer">length()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#match_136" target="_blank" rel="noopener noreferrer">match()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#split_193" target="_blank" rel="noopener noreferrer">split()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#sub_227" target="_blank" rel="noopener noreferrer">sub()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#substr_269" target="_blank" rel="noopener noreferrer">substr()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#tolower_298" target="_blank" rel="noopener noreferrer">tolower()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#toupper_308" target="_blank" rel="noopener noreferrer">toupper()</a></li>
<li><a href="https://blog.csdn.net/zsx0728/article/details/104040922#_319" target="_blank" rel="noopener noreferrer">参考文档</a></li>
</ul>`,r:{minutes:.19,words:57},y:"a",t:"AWK中的字符串操作函数"},["/note-book/LinuxOperaSystem/Linux三剑客/AWK中的字符串操作函数.html","/note-book/LinuxOperaSystem/Linux三剑客/AWK中的字符串操作函数.md",":md"]],["v-66a50361","/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%20Runtime.html",{d:1698989873e3,e:`
<blockquote>
<p>参考链接</p>
<ul>
<li>https://nvidia.github.io/nvidia-container-runtime/</li>
<li>https://github.com/NVIDIA/nvidia-container-runtime</li>
</ul>
</blockquote>
<h2>导入软件库</h2>
<h3>根据操作系统分类导入</h3>
<h4>基于Debian的操作系统</h4>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>curl -s -L https://nvidia.github.io/nvidia-container-runtime/gpgkey | \\
  sudo apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-container-runtime/$distribution/nvidia-container-runtime.list | \\
  sudo tee /etc/apt/sources.list.d/nvidia-container-runtime.list
sudo apt-get update
</code></pre></div>`,r:{minutes:1.76,words:527},y:"a",t:"安装Nvidia Runtime"},["/note-book/LinuxOperaSystem/Nvidia/安装Nvidia Runtime.html","/note-book/LinuxOperaSystem/Nvidia/安装Nvidia Runtime.md",":md"]],["v-a467abfa","/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%E9%A9%B1%E5%8A%A8.html",{d:1698989873e3,e:`
<h2>安装驱动依赖</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> gcc g++ <span class="token function">make</span> <span class="token parameter variable">-y</span>

<span class="token comment"># 删除原有开源驱动包</span>
<span class="token function">apt-get</span> remove <span class="token parameter variable">--purge</span> nvidia*
</code></pre></div>`,r:{minutes:.54,words:162},y:"a",t:"安装Nvidia驱动"},["/note-book/LinuxOperaSystem/Nvidia/安装Nvidia驱动.html","/note-book/LinuxOperaSystem/Nvidia/安装Nvidia驱动.md",":md"]],["v-80d561d8","/note-book/LinuxOperaSystem/Samba/Linux%E4%BA%8EWindows%E4%BD%BF%E7%94%A8Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody%20nogroup%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html",{d:1698989873e3,e:`
<p>Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/samba/smb.conf修改配置文件如下:
在 <span class="token punctuation">[</span>global<span class="token punctuation">]</span> 放入以下内容
force user <span class="token operator">=</span> 帐号
force group <span class="token operator">=</span> 群组
create mask <span class="token operator">=</span> 0664
directory mask <span class="token operator">=</span> 0775
存档，重启smbd
<span class="token function">sudo</span> <span class="token function">service</span> smbd restart
</code></pre></div>`,r:{minutes:.25,words:75},y:"a",t:"Samba共享文件时文件属性nobody"},["/note-book/LinuxOperaSystem/Samba/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html","/note-book/LinuxOperaSystem/Samba/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.md",":md"]],["v-0e11c102","/note-book/LinuxOperaSystem/Samba/Linux%E6%8C%82%E8%BD%BDcifs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{d:1698989873e3,e:`
<p><strong>1、挂载方法</strong></p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># mount -t cifc "windows共享文件夹" "Linux /mnt路径"


</code></pre></div><p>Linux 会要求输入访问Windows 共享文件夹上的密码。</p>
<p>注意：</p>
<p>如果Linux中提示：</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Unable to find suitable address. 
</code></pre></div>`,r:{minutes:1.1,words:331},y:"a",t:"Linux挂载cifs共享存储"},["/note-book/LinuxOperaSystem/Samba/Linux挂载cifs文件系统.html","/note-book/LinuxOperaSystem/Samba/Linux挂载cifs文件系统.md",":md"]],["v-e966fc72","/note-book/LinuxOperaSystem/Samba/Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody.html",{d:1698989873e3,e:`
<p>inux下面的samba非常的好用，很多人拿它来作共享文件服务器，</p>
<p>缺省配置下，samba必须提供用户名密码来访问，如果是所有人都可以访问的内容，那么是比较麻烦的，其实通过一个设置，即可实现不用输入用户名密码的匿名访问</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@linux-01 ~<span class="token punctuation">]</span><span class="token comment">#mkdir /home/myshare //建立共享文件夹share</span>
<span class="token punctuation">[</span>root@linux-01 ~<span class="token punctuation">]</span><span class="token comment">#vi /etc/samba/smb.conf //打开smb.conf配置文件</span>
workgroup <span class="token operator">=</span> WORKGROUP //修改为与windows主机同一个默认工作组
security <span class="token operator">=</span> share //将安全级别修改为“share”然后按PageDown键到文件末尾添加如下配置内容：<span class="token punctuation">[</span>myshare<span class="token punctuation">]</span>comment <span class="token operator">=</span> This is myshare //文件夹注释信息
path <span class="token operator">=</span> /home/myshare //设置共享文件夹在服务器重的路径
browseable <span class="token operator">=</span> <span class="token function">yes</span> //设置该共享文件夹在“网上邻居”中是否可见，设置为no时相当于隐藏共享文件夹。
guest ok <span class="token operator">=</span> <span class="token function">yes</span> //设置该共享文件夹是否所有人都可以访问，同public配置项
<span class="token builtin class-name">read</span> only <span class="token operator">=</span> <span class="token function">yes</span> //设置该共享文件夹权限为只读
writeable <span class="token operator">=</span> <span class="token function">yes</span>  //设置匿名用户可写
</code></pre></div>`,r:{minutes:1.13,words:340},y:"a",t:"Linux samba服务器设置简单匿名共享"},["/note-book/LinuxOperaSystem/Samba/Samba共享文件时文件属性nobody.html","/note-book/LinuxOperaSystem/Samba/Samba共享文件时文件属性nobody.md",":md"]],["v-19b6577e","/note-book/LinuxOperaSystem/Samba/Samba%E9%85%8D%E7%BD%AE%E4%B8%BE%E4%BE%8B.html",{d:1698989873e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>YOUR-SHARE-NAME<span class="token punctuation">]</span>
        path <span class="token operator">=</span> /home/NAME/
        available <span class="token operator">=</span> <span class="token function">yes</span>
        browsable <span class="token operator">=</span> <span class="token function">yes</span>
        public    <span class="token operator">=</span> <span class="token function">yes</span>
        writable  <span class="token operator">=</span> <span class="token function">yes</span>
</code></pre></div>`,r:{minutes:.47,words:141},y:"a",t:"Samba配置举例"},["/note-book/LinuxOperaSystem/Samba/Samba配置举例.html","/note-book/LinuxOperaSystem/Samba/Samba配置举例.md",":md"]],["v-081b1a63","/note-book/LinuxOperaSystem/VNC/Ubuntu%2020.04%20%E5%AE%89%E8%A3%85VNC%20Server.html",{d:1698989873e3,e:`
<h2>1.确保安装了GNOME DESKTOP</h2>
<p>对于桌面版是不用说了，服务器版操作系统需要安装一下桌面</p>
<pre><code># apt install ubuntu-gnome-desktop
 
# systemctl set-default multi-user.target
 
$ startx
</code></pre>
<h2>2.Installing VNC</h2>
<p>不要安装tigervncserver</p>
<p>一定要安装这个 standalone的，会有一点区别（不识别 下面的 -localhost no)</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> tigervnc-standalone-server
</code></pre></div>`,r:{minutes:1.23,words:370},y:"a",t:"Ubuntu 20.04 安装VNC Server超简单教程"},["/note-book/LinuxOperaSystem/VNC/Ubuntu 20.04 安装VNC Server.html","/note-book/LinuxOperaSystem/VNC/Ubuntu 20.04 安装VNC Server.md",":md"]],["v-5c90804c","/note-book/LinuxOperaSystem/Vim/vi%E7%BC%96%E8%BE%91%E5%99%A8.html",{d:1698989873e3,e:`
<h1><code>vi</code> —— 终端中的编辑器</h1>
<h2>目标</h2>
<ul>
<li><code>vi</code> 简介</li>
<li>打开和新建文件</li>
<li>三种工作模式</li>
<li>常用命令</li>
<li>分屏命令</li>
<li>常用命令速查图</li>
</ul>
<h2>01. <code>vi</code> 简介</h2>
<h3>1.1 学习 <code>vi</code> 的目的</h3>
<ul>
<li>在工作中，要对 <strong>服务器</strong> 上的文件进行 <strong>简单</strong> 的修改，可以使用 <code>ssh</code> 远程登录到服务器上，并且使用 <code>vi</code> 进行快速的编辑即可</li>
<li>常见需要修改的文件包括：
<ul>
<li><strong>源程序</strong></li>
<li><strong>配置文件</strong>，例如 <code>ssh</code> 的配置文件 <code>~/.ssh/config</code></li>
</ul>
</li>
</ul>`,r:{minutes:14,words:4200},y:"a",t:"vi编辑器"},["/note-book/LinuxOperaSystem/Vim/vi编辑器.html","/note-book/LinuxOperaSystem/Vim/vi编辑器.md",":md"]],["v-3352fc98","/note-book/LinuxOperaSystem/history/",{d:1698989873e3,e:`
<p>https://blog.csdn.net/qq_42623156/article/details/110184465</p>
`,r:{minutes:.02,words:7},y:"a",t:"history命令详解"},["/note-book/LinuxOperaSystem/history/README.md"]],["v-22a3c8d7","/note-book/OperaSystems/OperatingSystemPrinciple/CPU%E7%9A%84%E8%99%9A%E6%8B%9F%E5%8C%96.html",{d:1691939318e3,e:`
<p>CPU虚拟化的技术目标就是产生一种存在无限多CPU的假象，这一目标主要通过<strong>时分共享</strong>（time sharing）实现。时分共享中的执行单位/调度单位就是进程。</p>
<blockquote>
<p>（摘自MIT6.S081课）进程本身不是CPU，但是它们对应了CPU，它们使得你可以在CPU上运行计算任务。应用程序不能直接与CPU交互，只能与进程交互。操作系统内核会完成不同进程在CPU上的切换。所以，操作系统不是直接将CPU提供给应用程序，而是向应用程序提供“进程”，进程抽象了CPU，这样操作系统才能在多个应用程序之间复用一个或者多个CPU。</p>
</blockquote>`,r:{minutes:12.28,words:3684},y:"a",t:"4 CPU虚拟化"},["/note-book/OperaSystems/OperatingSystemPrinciple/CPU的虚拟化.html","/note-book/OperaSystems/OperatingSystemPrinciple/CPU的虚拟化.md",":md"]],["v-050e9cf9","/note-book/OperaSystems/OperatingSystemPrinciple/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%BB%8B%E7%BB%8D.html",{d:1691939318e3,e:`
<p>在冯诺伊曼体系中，程序对机器码读取并执行，而在现代的操作系统设计中（意味着需要考虑到多程序同时运行），程序并不直接访问硬件（需要保护硬件资源），这时就需要一个软件来协调二者：通过受保护的方式分配资源给各个程序；这一软件就是操作系统，因此操作系统也可以看作硬件与应用程序间的抽象层。</p>
<p>操作系统这一抽象（abstraction）的设计原则也是计算机科学中的常用手法。本节开头引述的David  Wheeler的这句名言超前地预言了计算机科学的现状。这句名言中的‘level of  indirection’也会被故意错误地被引用为‘layer of  abstraction’（后者的说法更接近当下流行的语言）。实际上，抽象使得构建一个更大型的系统更加容易，例如在使用高级语言编程的时候不用去关心下层的汇编、数字电路或者晶体管的细节；在网络栈中传输应用数据的时候不需考虑物理电缆是否可靠；在操作系统中运行程序的时候也不用去关心硬件资源的使用和保护。</p>`,r:{minutes:4.77,words:1432},y:"a",t:"操作系统介绍"},["/note-book/OperaSystems/OperatingSystemPrinciple/操作系统介绍.html","/note-book/OperaSystems/OperatingSystemPrinciple/操作系统介绍.md",":md"]],["v-3662114a","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7%E9%85%8D%E7%BD%AE%E6%94%AF%E6%8C%81AUFS%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`
<p>CentOS7 默认不支持<code>aufs</code>文件系统, 有时候我们需要使用, 就必须自己去安装内核了</p>
<ol>
<li>添加<code>yum</code>源</li>
</ol>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入repo目录</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/
yum <span class="token function">install</span> <span class="token function">wget</span> <span class="token parameter variable">-y</span>
<span class="token comment"># 下载文件</span>
<span class="token function">wget</span> https://yum.spaceduck.org/kernel-ml-aufs/kernel-ml-aufs.repo
<span class="token comment"># 安装</span>
yum <span class="token function">install</span> kernel-ml-aufs
</code></pre></div>`,r:{minutes:.6,words:180},y:"a",t:"使得内核支持AUFS"},["/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7配置支持AUFS文件系统.html","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7配置支持AUFS文件系统.md",":md"]],["v-7690a7dc","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS_7%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E9%85%8D%E7%BD%AE.html",{d:1706078578e3,e:`
<p><strong>说明：</strong></p>
<p>1、这篇博文记录的是CentOS 7 用户账户的配置，包括添加用户、添加用户组、删除用户、删除用户组等。其中包括分析用户的配置文件、目录以及对安全的思考。</p>
<p>2、用户配置方面CentOS 7与以往版本感觉没有差别。</p>
<h2><strong>第一部分 认识用户</strong></h2>
<p>Centos 7 系统最小化安装，默认配置，是没有创建其他用户的。作为服务器操作系统，为了安全起见，一般是使用一般用户。这就牵涉到用户、用户组的创建以及删除。</p>
<p>此外，CentOS 7 和其他版本的Linux一样，都具有相应用户的配置文件及目录，如下：</p>`,r:{minutes:7.77,words:2330},y:"a",t:"CentOS_7 用户账户配置"},["/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS_7用户账户配置.html","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS_7用户账户配置.md",":md"]],["v-a6eba2dc","/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8%E9%87%8D%E5%90%AF%E7%BD%91%E5%8D%A1%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`
<h2>问题情况：</h2>
<p>1、虚机centos8 修改为静态ip后，由于网卡网段变更，无法上网</p>
<p>2、最小化安装，没有ifconfig</p>
<p>3、firewalld，selinux关闭</p>
<p>4、ping 不通物理机</p>
<p>根本原因：</p>
<p>静态路由配置错误</p>
<h2>解决方案：</h2>
<p>1、linux命令==&gt; ip:ip addr　　查看网络配置</p>
<p>nmcli:　　　查看网络配置</p>
<p>2、修改为DHCP或修改默认路由为正确的默认路由地址</p>
<p>修改配置文件：vi /etc/sysconfig/network-scripts/ifcfg-ens160</p>`,r:{minutes:.93,words:280},y:"a",t:"Centos8 重启网卡方法"},["/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8重启网卡的方法.html","/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8重启网卡的方法.md",":md"]],["v-1d54df78","/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld%E9%85%8D%E7%BD%AE.html",{d:1691939318e3,e:`
<p>1、查看防火墙状态：<code>firewall-cmd --state</code></p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --state </span>
running
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre></div>`,r:{minutes:3.45,words:1035},y:"a",t:"防火墙状态及规则"},["/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld配置.html","/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld配置.md",":md"]],["v-2bec014a","/note-book/OperaSystems/RedHatEnterpriseLinux/%E5%88%B6%E4%BD%9CCenOS%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`
<h2>基础安装</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># mkdir mkRootfs</span>
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># cd mkRootfs/</span>
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># mount /dev/sr0 /root/mkRootfs/iso/</span>
mount: /dev/sr0 is write-protected, mounting read-only
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># ls iso/</span>
CentOS_BuildTag  EFI  EULA  GPL  images  isolinux  LiveOS  Packages  repodata  RPM-GPG-KEY-CentOS-7  RPM-GPG-KEY-CentOS-Testing-7  TRANS.TBL
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># mkdir rootfs</span>
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># ls</span>
iso  rootfs
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># cp iso/Packages/centos-release-7-7.1908.0.el7.centos.x86_64.rpm .</span>
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># ls</span>
centos-release-7-7.1908.0.el7.centos.x86_64.rpm  iso  rootfs
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># rpm --root=/root/mkRootfs/rootfs/ -ivh --nodeps /root/mkRootfs/centos-release-7-7.1908.0.el7.centos.x86_64.rpm</span>
warning: /root/mkRootfs/centos-release-7-7.1908.0.el7.centos.x86_64.rpm: Header V3 RSA/SHA256 Signature, key ID f4a80eb5: NOKEY
Preparing<span class="token punctuation">..</span>.                          <span class="token comment">################################# [100%]</span>
Updating / installing<span class="token punctuation">..</span>.
   <span class="token number">1</span>:centos-release-7-7.1908.0.el7.cen<span class="token comment">################################# [100%]</span>
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># ls rootfs/</span>
etc  usr  var
<span class="token punctuation">[</span>root@monther mkRootfs<span class="token punctuation">]</span><span class="token comment"># yum -y --installroot=/root/mkRootfs/rootfs/ install basesystem filesystem bash kernel passwd @base @core</span>
Loaded plugins: fastestmirror
Determining fastest mirrors
 * base: mirrors.aliyun.com
 * extras: mirrors.aliyun.com
 * updates: mirrors.aliyun.com
base                                                                                                                                                 <span class="token operator">|</span> <span class="token number">3.6</span> kB  00:00:00
extras                                                                                                                                               <span class="token operator">|</span> <span class="token number">2.9</span> kB  00:00:00
updates                                                                                                                                              <span class="token operator">|</span> <span class="token number">2.9</span> kB  00:00:00
<span class="token punctuation">(</span><span class="token number">1</span>/4<span class="token punctuation">)</span>: base/7/x86_64/primary_db                                                                                                                      <span class="token operator">|</span> <span class="token number">6.1</span> MB  00:00:00
<span class="token punctuation">(</span><span class="token number">2</span>/4<span class="token punctuation">)</span>: base/7/x86_64/group_gz                                                                                                                        <span class="token operator">|</span> <span class="token number">153</span> kB  00:00:01
<span class="token punctuation">(</span><span class="token number">3</span>/4<span class="token punctuation">)</span>: extras/7/x86_64/primary_db                                                                                                                    <span class="token operator">|</span> <span class="token number">250</span> kB  00:00:01
<span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>: updates/7/x86_64/primary_db                                                                                                                   <span class="token operator">|</span>  <span class="token number">17</span> MB  00:01:56
                                           <span class="token operator">|</span>  <span class="token number">17</span> MB  00:01:56
Resolving Dependencies
--<span class="token operator">&gt;</span> Running transaction check
-<span class="token operator">&gt;</span> Processing Dependency: libglib-2.0.so.0<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> <span class="token keyword">for</span> package: <span class="token number">1</span>:NetworkManager-1.18.8-2.el7_9.x86_64
<span class="token punctuation">..</span><span class="token punctuation">..</span>.


</code></pre></div>`,r:{minutes:.91,words:273},y:"a",t:"制作CentOS操作系统RootFS"},["/note-book/OperaSystems/RedHatEnterpriseLinux/制作CenOS操作系统.html","/note-book/OperaSystems/RedHatEnterpriseLinux/制作CenOS操作系统.md",":md"]],["v-4de8425e","/note-book/OperaSystems/RedHatEnterpriseLinux/%E9%85%8D%E7%BD%AESSH%E5%85%8D%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81.html",{d:1691939318e3,e:`
<p>ssh-keygen -t rsa&nbsp;（然后接四个回车）</p>
<p>例：输入生成ssh命令后，接着按四个回车即可。</p>
<figure><figcaption>wps5B4.tmp[4]</figcaption></figure>
<p>执行完这个命令后，linux会自动创建~/.ssh目录，</p>
<p>其中包含了成两个文件：id_rsa（私钥）、id_rsa.pub（公钥)</p>
<p>进入到.ssh目录中：</p>
<p>cd ~/.ssh</p>
<figure><figcaption>wps5D4.tmp[4]</figcaption></figure>
`,r:{minutes:.55,words:165},y:"a",t:"生成ssh密钥："},["/note-book/OperaSystems/RedHatEnterpriseLinux/配置SSH免密码验证.html","/note-book/OperaSystems/RedHatEnterpriseLinux/配置SSH免密码验证.md",":md"]],["v-2a52f0c8","/note-book/OperaSystems/Ubtuntu/Linux%20%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E6%A0%BC%E5%BC%8F.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>了解终端命令格式</li>
<li>知道如何查阅终端命令帮助信息</li>
</ul>
<h2>01. 终端命令格式</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>parameter<span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:1.01,words:303},y:"a",t:"Linux 终端命令格式"},["/note-book/OperaSystems/Ubtuntu/Linux 终端命令格式.html","/note-book/OperaSystems/Ubtuntu/Linux 终端命令格式.md",":md"]],["v-2b5b3397","/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04_Server%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AE%BE%E7%BD%AEIP%E5%9C%B0%E5%9D%80.html",{d:1705041743e3,e:`
<blockquote>
<p>转载From ： https://blog.csdn.net/justidle/article/details/114372558</p>
</blockquote>
<h2>确认 IP 文件</h2>
<p>我们只需要使用命令行来配置修改 IP 配置即可。</p>
<div class="language-cpp" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token operator">~</span>$ ls <span class="token operator">/</span>etc<span class="token operator">/</span>netplan
<span class="token number">00</span><span class="token operator">-</span>installer<span class="token operator">-</span>config<span class="token punctuation">.</span>yaml
</code></pre></div>`,r:{minutes:.87,words:262},y:"a",t:"Ubuntu 20.04 Server 使用命令行设置 IP 地址"},["/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04_Server使用命令行设置IP地址.html","/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04_Server使用命令行设置IP地址.md",":md"]],["v-c8460b72","/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E7%BD%91%E7%BB%9C%EF%BC%88%E7%BD%91%E7%BB%9C%E5%9B%BE%E6%A0%87%E4%B8%A2%E5%A4%B1%EF%BC%89%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{d:1705041743e3,e:`
<blockquote>
<p>from csdn: 罗伯特祥</p>
</blockquote>
<h2>问题复述：</h2>
<p>Ubuntu 20.04无法连接到网络，网络连接图标丢失，网络设置中无网络设置选项。
</p>
<h2>解决方案</h2>
<pre><code>sudo service network-manager stop

sudo rm /var/lib/NetworkManager/NetworkManager.state

sudo service network-manager start
</code></pre>
<figure><figcaption>image-20221124112145118</figcaption></figure>`,r:{minutes:.42,words:127},y:"a",t:"Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案"},["/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html","/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.md",":md"]],["v-6e8771f8","/note-book/OperaSystems/Ubtuntu/Ubuntu%E6%9B%B4%E6%94%B9%E4%B8%BA24%E5%B0%8F%E6%97%B6%E5%88%B6.html",{d:1691939318e3,e:`
<p>https://blog.csdn.net/weixin_43824829/article/details/126978600</p>
`,r:{minutes:.03,words:10},y:"a",t:"Ubuntu更改为24小时制"},["/note-book/OperaSystems/Ubtuntu/Ubuntu更改为24小时制.html","/note-book/OperaSystems/Ubtuntu/Ubuntu更改为24小时制.md",":md"]],["v-9a30caae","/note-book/OperaSystems/Ubtuntu/Ubuntu%E7%9A%84%E7%B3%BB%E7%BB%9F%E9%98%B2%E7%81%AB%E5%A2%99ufw%E5%92%8Cdocker%E5%B9%B6%E5%AD%98%E7%AB%AF%E5%8F%A3%E7%AD%96%E7%95%A5%E6%97%A0%E6%95%88bug.html",{d:170598102e4,e:`
<blockquote>
<p>UFW 是 Ubuntu 上很流行的一个 iptables 前端，可以非常方便的管理防火墙的规则。但是当安装了 Docker，UFW 无法管理 Docker 发布出来的端口了。</p>
</blockquote>
<h2>具体现象</h2>
<ul>
<li>
<p>在一个对外提供服务的服务器上启用了 UFW，并且默认阻止所有未被允许的传入连接。</p>
</li>
<li>
<p>运行了一个 Docker 容器，并且使用 <code>-p</code> 选项来把该容器的某个端口发布到服务器的所有 IP 地址上。</p>
<p>比如：<code>docker run -d --name nginx -p 8080:80 nginx</code> 将会运行一个 nginx服务，并且将容器的 <code>80</code> 端口发布到服务器的 <code>8080</code> 端口上。UFW 将不会阻止所有对 <code>8080</code> 端口访问的请求，用命令 <code>ufw deny 8080</code> 也无法阻止外部访问这个端口。</p>
</li>
</ul>`,r:{minutes:1.05,words:316},y:"a",t:"Ubuntu的系统防火墙ufw和docker并存端口策略无效bug"},["/note-book/OperaSystems/Ubtuntu/Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.html","/note-book/OperaSystems/Ubtuntu/Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.md",":md"]],["v-3215b4ba","/note-book/OperaSystems/Ubtuntu/Ubuntu%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html",{d:1691939318e3,e:`
<h2>Debian/Ubuntu Linux 如何查看文件属于哪个软件包</h2>
<p>如何查找哪个软件包提供了/bin/ifconfig命令？
在Debian或Ubuntu Linux中，如何搜索某个命令所属的软件包？</p>
<p>在Red Hat CentOS Linux中，我们可以使用 <code>rpm -qf /bin/ls</code> 找出命令所在的软件包名称。</p>
<p>在Ubuntu中，
dpkg是一个命令行工具，可用于安装，构建，删除和管理Debian软件包。
dpkg维护有关可用软件包的一些可用信息。
dpkg-query是用于查看dpkg数据库中列出的软件包的信息的命令行工具。
apt-file是用于在APT软件包管理系统的软件包中搜索文件的命令行工具。</p>`,r:{minutes:5.07,words:1521},y:"a",t:"Ubuntu软件包文件管理"},["/note-book/OperaSystems/Ubtuntu/Ubuntu软件包文件管理.html","/note-book/OperaSystems/Ubtuntu/Ubuntu软件包文件管理.md",":md"]],["v-1a0079da","/note-book/OperaSystems/Ubtuntu/VMware%E8%99%9A%E6%8B%9F%E6%9C%BA%20Linux%E7%B3%BB%E7%BB%9F%20Ubuntu%2020.04%20%E7%A1%AC%E7%9B%98-%E7%A3%81%E7%9B%98%E6%89%A9%E5%AE%B9.html",{d:1691939318e3,e:`
<pre><code>虚拟机 – VMware Workstation Pro 16
Linux系统 – Ubuntu 20.04 LTS
</code></pre>
<h1>目的</h1>
<pre><code>硬盘扩容
硬盘容量从40G 扩容到 100G
</code></pre>
<p>效果</p>
<p>查看硬盘大小及使用情况</p>
<pre><code>终端：df -h
</code></pre>
<p>没有扩容前：
![image-20221119125553250](VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.assets/image-20221119125553250.png)
成功扩容后：</p>`,r:{minutes:5.13,words:1539},y:"a",t:"配置"},["/note-book/OperaSystems/Ubtuntu/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html","/note-book/OperaSystems/Ubtuntu/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.md",":md"]],["v-733d9740","/note-book/OperaSystems/Ubtuntu/apt%E6%9F%A5%E8%AF%A2%E6%9F%90%E4%B8%AA%E8%BD%AF%E4%BB%B6%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%88%E6%9C%AC.html",{d:1691939318e3,e:`
<blockquote>
<p>https://blog.csdn.net/quantum7/article/details/103417643</p>
</blockquote>
<p>安装默认，有时候会出问题。怎么办？查询一下版本：</p>
<pre><code>sudo apt update
sudo apt-cache madison g++
 
       g++ |  4:8.3.0-1 | http://deb.debian.org/debian buster/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirrors.ustc.edu.cn/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirrors.tuna.tsinghua.edu.cn/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirror.sjtu.edu.cn/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | http://mirrors.aliyun.com/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirrors.huaweicloud.com/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | http://mirrors.163.com/debian stretch/main amd64 Packages
gcc-defaults |      1.168 | https://mirrors.ustc.edu.cn/debian stretch/main Sources
gcc-defaults |      1.168 | https://mirrors.tuna.tsinghua.edu.cn/debian stretch/main Sources
gcc-defaults |      1.168 | https://mirror.sjtu.edu.cn/debian stretch/main Sources
gcc-defaults |      1.168 | http://mirrors.aliyun.com/debian stretch/main Sources
gcc-defaults |      1.168 | https://mirrors.huaweicloud.com/debian stretch/main Sources
gcc-defaults |      1.168 | http://mirrors.163.com/debian stretch/main Sources
gcc-defaults |      1.181 | http://deb.debian.org/debian buster/main Sources
</code></pre>`,r:{minutes:.55,words:165},y:"a",t:"apt查询某个软件有哪些版本"},["/note-book/OperaSystems/Ubtuntu/apt查询某个软件有哪些版本.html","/note-book/OperaSystems/Ubtuntu/apt查询某个软件有哪些版本.md",":md"]],["v-48c517e4","/note-book/OperaSystems/Ubtuntu/linux%E5%85%B3%E9%97%AD%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4%E9%9A%8F%E6%9C%BA%E5%8C%96%EF%BC%88ASLR%EF%BC%89.html",{d:1691939318e3,e:`
<h2>0x00 背景知识</h2>
<p>ASLR(Address Space Layout Randomization)在2005年被引入到Linux的内核 kernel 2.6.12 中，当然早在2004年就以patch的形式被引入。随着内存地址的随机化，使得响应的应用变得随机。这意味着同一应用多次执行所使用内存空间完全不同，也意味着简单的缓冲区溢出攻击无法达到目的。</p>
<p>GDB从版本7开始，第一次在Ubuntu 9.10（Karmic）上，被调试的程序可以被关闭ASLR（通过标记位ADDR_NO_RANDOMIZE ）。</p>
<p>此处有坑，笔者有一个Ubuntu 9.10的虚拟机，用了下面将要介绍的全部姿势，死活关闭不了ASLR，后来换成Ubuntu 10.04就没问题了，说明Ubuntu 9.10的版本控制ASLR的方法还不成熟，需要重源码层面确认是否可以关闭开启，真是坑到家了。</p>`,r:{minutes:3.84,words:1151},y:"a",t:"Linux关闭地址空间随机化（ASLR）"},["/note-book/OperaSystems/Ubtuntu/linux关闭地址空间随机化（ASLR）.html","/note-book/OperaSystems/Ubtuntu/linux关闭地址空间随机化（ASLR）.md",":md"]],["v-1922adf5","/note-book/OperaSystems/Ubtuntu/ubuntu14.04%20%E5%BF%98%E8%AE%B0%E4%BA%86%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%AF%86%E7%A0%81%E5%92%8Croot%E5%AF%86%E7%A0%81.html",{d:1691939318e3,e:`
<p>1.在VMware Workstatiom中点击“开启此虚拟机”，注意，进入系统自启时随即先点击一下屏幕，目的是让鼠标从VM切换到ubuntu启动（否则下面长按shift时可能不会进入GNU GRUN界面）；</p>
<p>2.点击屏幕后随即长按shift，系统会进入GUN GRUB界面（对此界面的操作可看界面下面的说明），如图 1所示；如果进入图 2 所示的界面则此步骤的操作失败，不要着急再试一下。</p>
<figure><figcaption>img</figcaption></figure>
<p>​                               图 1</p>
`,r:{minutes:1.53,words:458},y:"a",t:"ubuntu 14.04 忘记用户登录密码"},["/note-book/OperaSystems/Ubtuntu/ubuntu14.04 忘记了普通用户密码和root密码.html","/note-book/OperaSystems/Ubtuntu/ubuntu14.04 忘记了普通用户密码和root密码.md",":md"]],["v-7bf7b544","/note-book/OperaSystems/Ubtuntu/ubuntu%E5%AE%89%E8%A3%85nfs.html",{d:1691939318e3,e:`
<ol>
<li>
<h2>安装</h2>
</li>
</ol>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># 安装nfs服务端
apt-get install nfs-kernel-server -y
</code></pre></div><ol start="2">
<li>
<h2>修改配置</h2>
</li>
</ol>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>vim /etc/exports

# 添加数据
# 路径为挂载路径
/data/nfs/sshw *(async,insecure,no_root_squash,no_subtree_check,rw)
</code></pre></div>`,r:{minutes:.38,words:115},y:"a",t:"ubuntu安装nfs"},["/note-book/OperaSystems/Ubtuntu/ubuntu安装nfs.html","/note-book/OperaSystems/Ubtuntu/ubuntu安装nfs.md",":md"]],["v-4b3aa89e","/note-book/OperaSystems/Ubtuntu/ubuntu%E6%9F%A5%E7%9C%8Bintel-GPU%E4%BD%BF%E7%94%A8%E6%83%85%E5%86%B5.html",{d:1700883342e3,e:`
<p>最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt-get install intel-gpu-tools
</code></pre></div><p>安装后，用muon看看。可使用的工具列表还是很多的。</p>
<figure><figcaption>intel-gpu-tools</figcaption></figure>`,r:{minutes:.58,words:175},y:"a",t:"ubuntu查看intel GPU使用情况"},["/note-book/OperaSystems/Ubtuntu/ubuntu查看intel-GPU使用情况.html","/note-book/OperaSystems/Ubtuntu/ubuntu查看intel-GPU使用情况.md",":md"]],["v-2e5806d2","/note-book/Research_Develop/Algorithm/",{d:1691939318e3,e:`
<p>本章节所有练习过程中所使用的例子在这个仓库 <a href="https://gitee.com/PaperDragon/clang-struct-and-algorithm" target="_blank" rel="noopener noreferrer">https://gitee.com/PaperDragon/clang-struct-and-algorithm</a></p>
<p>欢迎给我纠错！！</p>
<p>2022年8月14日</p>
`,r:{minutes:.16,words:47},y:"a",t:"算法说明"},["/note-book/Research&Develop/Algorithm/","/note-book/Research&Develop/Algorithm/README.md"]],["v-4c406808","/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html",{d:1691939318e3,e:`
<p>参考链接 <a href="https://cplusplus.com/" target="_blank" rel="noopener noreferrer">https://cplusplus.com/</a></p>
<table>
<thead>
<tr>
<th>文档名称</th>
<th>来源</th>
<th>地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据结构零基础教程数据结构与算法</td>
<td>Bilibili</td>
<td>https://www.bilibili.com/video/BV12a411i7Hd</td>
</tr>
<tr>
<td><a href="Lesson1--%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%89%8D%E8%A8%80.pdf">Lesson1--数据结构前言.pdf</a></td>
<td></td>
<td>https://www.bilibili.com/video/BV12a411i7Hd</td>
</tr>
<tr>
<td><a href="Lesson2--%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.pdf">Lesson2--时间复杂度空间复杂度.pdf</a></td>
<td></td>
<td>https://www.bilibili.com/video/BV12a411i7Hd</td>
</tr>
<tr>
<td><a href="Lesson3--%E9%A1%BA%E5%BA%8F%E8%A1%A8_%E9%93%BE%E8%A1%A8.pdf">Lesson3--顺序表_链表.pdf</a></td>
<td></td>
<td>https://www.bilibili.com/video/BV12a411i7Hd</td>
</tr>
<tr>
<td><a href="Lesson4--%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97.pdf">Lesson4--栈和队列.pdf</a></td>
<td></td>
<td>https://www.bilibili.com/video/BV12a411i7Hd</td>
</tr>
<tr>
<td><a href="5--%E6%A0%91%E5%92%8C%E4%BA%8C%E5%8F%89%E6%A0%91.pdf">5--树和二叉树.pdf</a></td>
<td></td>
<td>付费课程</td>
</tr>
<tr>
<td><a href="6--%E6%8E%92%E5%BA%8F.pdf">6--排序.pdf</a></td>
<td></td>
<td>付费课程</td>
</tr>
<tr>
<td><a href="7--%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0-%E8%BF%B7%E5%AE%AB%E9%97%AE%E9%A2%98.pdf">7--实践练习-迷宫问题.pdf</a></td>
<td></td>
<td>付费课程</td>
</tr>
</tbody>
</table>`,r:{minutes:.6,words:180},y:"a",t:"数据结构考研数据结构算法与基础"},["/note-book/Research_Develop/Algorithm/数据结构与算法哔哩哔哩比特就业课.html","/note-book/Research&Develop/Algorithm/数据结构与算法哔哩哔哩比特就业课.html","/note-book/Research&Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html","/note-book/Research&Develop/Algorithm/数据结构与算法哔哩哔哩比特就业课.md","/note-book/Research&Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.md"]],["v-2adac7da","/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<p>1.volatile和什么有关</p>
<p>百度翻译是这样子翻译volatile的：</p>
<figure><figcaption>img</figcaption></figure>
<p>volatile属于C语言的关键字，《C Primer Plus》 是这样解释关键字的：关键字是C语言的词汇，由于编译器不具备真正的智能，所以你必须用编译器能理解的术语表示你的意图。开发者告诉编译器该变量是易变的，无非就是希望编译器去注意该变量的状态，时刻注意该变量是易变的，每次读取该变量的值都重新从内存中读取。（ahhhh，是不是一脸蒙蔽，举个例子吧）</p>
<pre><code>int i = 10;
int main(void){
 
    int a, b;
 
    a = i;
    ...//伪代码，里面不含有对 a 、 b 以及 i的操作
    b = i;
 
    if(a == b){
        printf("a = b");
    }
    else {
        printf("a != b");
    }
    
    return 0;
}
</code></pre>`,r:{minutes:6.7,words:2009},y:"a",t:""},["/note-book/Research_Develop/C/C语言volatile关键字详解.html","/note-book/Research&Develop/C/C语言volatile关键字详解.html","/note-book/Research&Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html","/note-book/Research&Develop/C/C语言volatile关键字详解.md","/note-book/Research&Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.md"]],["v-cf78e944","/note-book/Research_Develop/C/",{d:1691939318e3,e:`
<h2>目录和文件说明</h2>
<h3>note-1</h3>
<ul>
<li>1.c
<ul>
<li>嵌入式赋值
<ul>
<li>不利于阅读</li>
<li>容易出现错误</li>
</ul>
</li>
<li>猜数字游戏
<ul>
<li>100以内的数字最多7次会被猜出来 2^7</li>
<li>rand() % 100 + 1 是1-100 的数字</li>
</ul>
</li>
<li>算最简分数
<ul>
<li>基础算法</li>
<li>欧几里得算法</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>note-2</h3>
<ul>
<li><a href="note-2/include/function.h" title="title">include/function.h</a> <a href="note-2/1.c">1.c</a>;
<ul>
<li>求素数</li>
<li>数组与大小计算问题</li>
<li>搜索数组问题</li>
</ul>
</li>
</ul>`,r:{minutes:21.13,words:6338},y:"a",t:"C语言学习 翁恺教程"},["/note-book/Research&Develop/C/","/note-book/Research&Develop/C/README.md"]],["v-4294bd6d","/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",{d:1691939318e3,e:`
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">BinSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">Pop</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d  "</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	ret <span class="token operator">=</span> <span class="token function">BinSearch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>  <span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d  %d"</span><span class="token punctuation">,</span> ret<span class="token punctuation">,</span> a<span class="token punctuation">[</span>ret<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">return</span> ret<span class="token punctuation">;</span> 
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> swap<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i <span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				swap <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> swap<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">BinSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> high <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
			high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
			low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"In Bin Search: Index:%d\\n"</span><span class="token punctuation">,</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.09,words:327},y:"a",t:"Source Code"},["/note-book/Research_Develop/C/二分查找.html","/note-book/Research&Develop/C/二分查找.html","/note-book/Research&Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html","/note-book/Research&Develop/C/二分查找.md","/note-book/Research&Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md"]],["v-2b829e3e","/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html",{d:1691939318e3,e:`
<blockquote>
<p>https://github.com/Paper-Dragon/learn-fastapi</p>
<p>https://www.bilibili.com/video/BV1iN411X72b</p>
</blockquote>
<h2>第2章 FastAPI介绍和项目准备</h2>
<h3>2.1 Starlette，Pydantic 与 FastAPI 框架是什么关系？</h3>
<p>python的类型提示，基于类型提示type hints</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>
from typing import List
def func(name:str,age:int,l:List):
    
    print(name,age)
    print(l)    
# Python的类型提示使用方法，使用的好能够提高代码的健壮性
</code></pre></div>`,r:{minutes:21.41,words:6424},y:"a",t:"FastAPI--python高性能web框架"},["/note-book/Research_Develop/Python/FastAPI-Python高性能web框架.html","/note-book/Research&Develop/Python/FastAPI-Python高性能web框架.html","/note-book/Research&Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research&Develop/Python/FastAPI-Python高性能web框架.md","/note-book/Research&Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.md"]],["v-66124308","/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html",{d:1698482265e3,e:`
<h2>方法一：通过命令行参数</h2>
<pre><code>--add-data "欲打包的源文件路径（可以是相对路径，也可以是绝对路径）;.（打包后对应的程序内的路径，一个.代表打包至程序运行时根目录）"

--add-data 参数 可以多次使用，注意格式为引号里面有一个文件名，有一个分号，一个点。

例： pyinstaller -F --add-data '.\\32x32.ico;.' '.\\main.py'
</code></pre>
<h2>方法二：通过修改 spec 打包配置脚本文件</h2>
<h3>通过命令生成 spec 文件</h3>
<h4>OneFolder 单文件夹模式</h4>`,r:{minutes:1.73,words:518},y:"a",t:"PyInstaller 带静态依赖文件打包教程"},["/note-book/Research_Develop/Python/PyInstaller带静态依赖文件打包教程.html","/note-book/Research&Develop/Python/PyInstaller带静态依赖文件打包教程.html","/note-book/Research&Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research&Develop/Python/PyInstaller带静态依赖文件打包教程.md","/note-book/Research&Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.md"]],["v-9f71a98a","/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html",{d:1691939318e3,e:`
<h2>一、行定位符</h2>
<p>行定位符就是用来描述字符串的边界，“^” 表示行的开始，“$” 表示行的结尾。比如：</p>
<pre><code>^Ha
</code></pre>
<p>该表达式表示要匹配字符串的开头位置是 Ha，如 “Hangzhou is a very beautiful city” 可以匹配，而 “Your words are very funny, Ha” 则不匹配。但如果使用：</p>
<pre><code>Ha$
</code></pre>
<p>后者可以匹配而前者不能匹配。如果要匹配的字符串可以出现在字符串的任意部分，那么可以写成下面的格式，这样两个字符串都能匹配上。</p>`,r:{minutes:12.21,words:3663},y:"a",t:"Python之正则表达式细讲"},["/note-book/Research_Develop/Python/Python之正则表达式细讲.html","/note-book/Research&Develop/Python/Python之正则表达式细讲.html","/note-book/Research&Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research&Develop/Python/Python之正则表达式细讲.md","/note-book/Research&Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.md"]],["v-122307df","/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html",{d:1705054813e3,e:`
<p>今天看到一段非常狗的代码，在这里进行记录。</p>
<p>这段代码一运行会直接关机</p>
<h2>实例</h2>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 不要运行！！！！！</span>
a <span class="token operator">=</span> <span class="token string">"^^hlonqs^^'!nr!(-rxrsdl'!rgtscnvm,r,s0/!("</span>
<span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token builtin">ord</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:.61,words:184},y:"a",t:"Python代码藏毒"},["/note-book/Research_Develop/Python/Python代码藏毒.html","/note-book/Research&Develop/Python/Python代码藏毒.html","/note-book/Research&Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html","/note-book/Research&Develop/Python/Python代码藏毒.md","/note-book/Research&Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.md"]],["v-0556e072","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html",{d:1691939318e3,e:`
<h2>字符串切片</h2>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">'Hello World'</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 索引从0开始</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 负数从-1开始，代表从后往前</span>

<span class="token comment"># 切片 类似range</span>
<span class="token comment"># [start:end:step]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># Hello</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># Hello</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># Hello World</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># HloWrd</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># dlroW olleH</span>

<span class="token comment"># 求1000以内所有类似 121 212 的数字, 回文数</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>



</code></pre></div>`,r:{minutes:6.42,words:1927},y:"a",t:"数据切片"},["/note-book/Research_Develop/Python/Python数据切片例子.html","/note-book/Research&Develop/Python/Python数据切片例子.html","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research&Develop/Python/Python数据切片例子.md","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.md"]],["v-3122a850","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html",{d:1697097494e3,e:`
<p>format从python 2.6开始支持</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"name {}, age {}, occupatical {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">"lucy"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"developer"</span><span class="token punctuation">)</span>
<span class="token comment"># s = "name {0}, age {2}, occupatical {1}".format("lucy", 18, "developer")</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># {参数序列：格式控制标记}</span>
<span class="token comment"># &lt;填充&gt; &lt;对其&gt; &lt;宽度&gt; &lt;千分位分隔符&gt; &lt;精度&gt; &lt;类型&gt;</span>
a <span class="token operator">=</span> <span class="token string">"Hello"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:c&lt;20}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0: }"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:15}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 对其 &lt;&gt;^</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:&gt;15}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:*^15}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 居中对其</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:*^3}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 居中对其</span>

<span class="token comment"># 千分分割位</span>
a <span class="token operator">=</span> <span class="token number">20231012</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:,}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:#&gt;18,}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 精度</span>
<span class="token comment"># 对于浮点数是小数位数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:.2f}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 对于字符串是输出的最大长度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:.2}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 格式类型的标志</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{:b}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 二进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{:d}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 十进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{:o}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 八进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{:x}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 十六进制 b</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'{:X}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 十六进制 B</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:.2e}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 科学计数法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:.2E}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 科学计数法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:.2%}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 百分比</span>

</code></pre></div>`,r:{minutes:.76,words:227},y:"a",t:"Python数据格式化format"},["/note-book/Research_Develop/Python/Python数据格式化format.html","/note-book/Research&Develop/Python/Python数据格式化format.html","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html","/note-book/Research&Develop/Python/Python数据格式化format.md","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.md"]],["v-54218f21","/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html",{d:1691939318e3,e:`
<h2>re.match()到底会返回什么?</h2>
<p>现在我们通过python编程实验来看看到底会返回什么：</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'www'</span><span class="token punctuation">,</span> <span class="token string">'www.runoob.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 在起始位置匹配</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'com'</span><span class="token punctuation">,</span> <span class="token string">'www.runoob.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 不在起始位置匹配</span>
</code></pre></div>`,r:{minutes:1.28,words:383},y:"a",t:"re.match()到底会返回什么?"},["/note-book/Research_Develop/Python/python re.Match object的说明.html","/note-book/Research&Develop/Python/python re.Match object的说明.html","/note-book/Research&Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research&Develop/Python/python re.Match object的说明.md","/note-book/Research&Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.md"]],["v-4742da80","/note-book/Research_Develop/Python/python%20re.html",{d:1691939318e3,e:`
<blockquote>
<p>原文地址： https://blog.csdn.net/2201_75641637/article/details/129319151</p>
</blockquote>
<h2>使用 re 模块匹配字符串</h2>
<p>re 模块中提供了 match()、search() 和 findall() 等方法专门用来匹配字符串，可以从海量数据中精确筛选出需要的对象，我们逐一来看看每种方法的具体实现。</p>
<h3>使用 match() 方法进行匹配</h3>
<p>match() 方法用于从字符串的开始处进行匹配，如果在起始位置匹配成功，则返回 Match 对象，否则返回 None。其语法格式如下：</p>`,r:{minutes:7.56,words:2269},y:"a",t:"re库用法细讲"},["/note-book/Research_Develop/Python/python re.html","/note-book/Research&Develop/Python/python re.html","/note-book/Research&Develop/Python/python%20re.html","/note-book/Research&Develop/Python/python re.md","/note-book/Research&Develop/Python/python%20re.md"]],["v-1302838e","/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html",{d:1691939318e3,e:`
<blockquote>
<p>https://blog.csdn.net/w11231/article/details/123586558</p>
</blockquote>
<h1>前言</h1>
<p>在网上能找到的关于如何让VSCode中Python自动补全函数括号的方法都是同样的，但基本上都是几年前的方法了，在VSCode更新后引入了Pylance，使得之前的设置项不存在了。在自己摸索了很久后终于发现了相同功能的选项👇</p>
<p>如果不确定自己用的哪种，可以都试一下，在Settings.json中如果有不存在的设置项会报错</p>
<h2>一、旧版的方法(Jedi)</h2>`,r:{minutes:.87,words:260},y:"a",t:"新版VSCode中Python设置自动补全函数括号"},["/note-book/Research_Develop/Python/新版VSCode中Python设置自动补全函数括号.html","/note-book/Research&Develop/Python/新版VSCode中Python设置自动补全函数括号.html","/note-book/Research&Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html","/note-book/Research&Develop/Python/新版VSCode中Python设置自动补全函数括号.md","/note-book/Research&Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.md"]],["v-6a7299b5","/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html",{d:1691939318e3,e:`
<p>初接触shell脚本，在vim中写代码，出现了好几次 Bad substitution。</p>
<p>我的错误有两种：</p>
<pre><code>开始的的指定脚本环境 应该是#!/bin/bash
在编译运行时 也应该用 bash
\${}的使用错误，$() 是引用（）中运行的结果。
\${} 仅仅是用{}中的内容，是参数，不执行
</code></pre>
`,r:{minutes:.27,words:82},y:"a",t:"bad substitution"},["/note-book/Research_Develop/Shell/shell脚本bad substitution.html","/note-book/Research&Develop/Shell/shell脚本bad substitution.html","/note-book/Research&Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html","/note-book/Research&Develop/Shell/shell脚本bad substitution.md","/note-book/Research&Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.md"]],["v-2b73f172","/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/%E5%9F%BA%E4%BA%8EWireguard%E6%8A%80%E6%9C%AF%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E6%90%AD%E5%BB%BA%EF%BC%88%E5%9F%BA%E4%BA%8ELighthouse%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%89.html",{d:1691939318e3,e:`
<h2>服务端安装 （强烈推荐 docker 安装）</h2>
<h2>Docker安装Wireguard  (更简单更方便)</h2>
<h3>通过容器安装wg-easy</h3>
<p>括号里面的的是你需要修改的，修改完删掉就可以了</p>
<h4>关于CentOS7 模块安装</h4>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> epel-release elrepo-release
$ <span class="token function">sudo</span> yum <span class="token function">install</span> yum-plugin-elrepo
$ <span class="token function">sudo</span> yum <span class="token function">install</span> kmod-wireguard wireguard-tools
</code></pre></div>`,r:{minutes:2.29,words:686},y:"a",t:"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"},["/note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html","/note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.md",":md"]],["v-1c5b2b34","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/Docker%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2Clash%E6%9C%8D%E5%8A%A1%E4%B8%8E%E7%AE%A1%E7%90%86%E9%9D%A2%E6%9D%BF.html",{d:1699694698e3,e:`
<blockquote>
<p>转载自： https://blog.laoyutang.cn/linux/clash.html</p>
</blockquote>
<p>官方Clash部署需要采用两个镜像分别启动服务和面板，博主使用官方server镜像和官方管理面板前端代码，重新修改打包构建，使用一个镜像可以直接启动服务和管理面板，简单轻量。</p>
<h2>镜像地址</h2>
<p><a href="https://hub.docker.com/r/laoyutang/clash-and-dashboard" target="_blank" rel="noopener noreferrer">laoyutang/clash-and-dashboard</a></p>`,r:{minutes:1.34,words:402},y:"a",t:"Docker一键部署Clash服务与管理面板"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/Docker一键部署Clash服务与管理面板.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/Docker一键部署Clash服务与管理面板.md",":md"]],["v-4d6f6891","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/cfw-cdn-ssl-ws-tls.html",{d:1702051173e3,c:["VirtualPrivateNetwork"],e:`
<h2>边缘计算系统构建</h2>
<h3>将域名绑定到CDN上</h3>
<h4><a class="header-anchor" href="#_1-登录cdn网站-找到增加域名选项"><span>1.</span></a><a href="https://dash.cloudflare.com/login/" target="_blank" rel="noopener noreferrer">登录CDN网站</a>，找到增加域名选项</h4>
<figure><figcaption>image-20220819194959187</figcaption></figure>
<h4>2.点击添加域名</h4>`,r:{minutes:2.49,words:747},y:"a",t:"通过cdn流量伪装防止防火墙封ip和端口"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/cfw-cdn-ssl-ws-tls.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/cfw-cdn-ssl-ws-tls.md",":md"]],["v-2cf74ea8","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E4%BC%98%E7%A7%80%E7%9A%84%E8%90%BD%E5%9C%B0%E6%A1%86%E6%9E%B6%20XrayR.html",{d:1691939318e3,e:`
<blockquote>
<p>原项目地址 https://github.com/XrayR-project</p>
<p>因为一个月前有人骂作者广告有问题，作者直接删库跑路了，这里找到几个接盘侠替代</p>
<p>找了个克隆仓库 https://github.com/Misaka-blog/XrayR-script</p>
<p>一键脚本 https://github.com/Misaka-blog/XrayR-script</p>
<p>文档 https://github.com/ximliu/XrayR-doc</p>
</blockquote>
<h1>关于XrayR</h1>
<h2>XrayR</h2>`,r:{minutes:12.86,words:3858},y:"a",t:"一个优秀的流量落地框架XrayR"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/优秀的落地框架 XrayR.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/优秀的落地框架 XrayR.md",":md"]],["v-2d398f6b","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E8%BF%9E%E6%8E%A5WARP%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B7%BB%E5%8A%A0IPv4IPv6%E7%BD%91%E7%BB%9C.html",{d:1702051155e3,e:`
<blockquote>
<p>通常ip被污染之后使用 WARP进行增加ip复活</p>
<p>使用warp有概率刷出原生ip</p>
<p>开源地址 https://github.com/fscarmen/warp</p>
</blockquote>
<h2>脚本特点</h2>
<ul>
<li>支持 WARP+ 账户，附带第三方刷 WARP+ 流量和升级内核 BBR 脚本</li>
<li>普通用户友好的菜单，进阶者通过后缀选项快速搭建</li>
<li>智能判断vps操作系统：Ubuntu 16.04、18.04、20.04; Debian 9、10、11，CentOS 7、8; Alpine 和 Arch Linux，请务必选择 LTS 系统
智能判断硬件结构类型：AMD、ARM 和 s390x</li>
<li>结合 Linux 版本和虚拟化方式，自动优选三个 WireGuard 方案。
网络性能方面：内核集成 WireGuard＞安装内核模块＞BoringTun＞wireguard-go</li>
<li>智能判断 WGCF 作者 github库的最新版本 （Latest release）</li>
<li>智能分析内网和公网IP生成 WGCF 配置文件</li>
<li>输出结果，提示是否使用 WARP IP ，IP 归属地</li>
</ul>`,r:{minutes:8.08,words:2425},y:"a",t:"连接WARP为服务器添加IPv4/IPv6网络"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/连接WARP为服务器添加IPv4IPv6网络.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/连接WARP为服务器添加IPv4IPv6网络.md",":md"]],["v-3ac693d4","/note-book/Zabbix/ebook/",{d:1691939318e3,e:`
<ul>
<li><a href="ZCS5_Day_1.pdf">ZCS5_Day_1.pdf</a></li>
</ul>
`,r:{minutes:.3,words:90},y:"a",t:"ZCS认证"},["/note-book/Zabbix/ebook/README.md"]],["v-07a67b62","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/",{d:1691939318e3,e:`
<p>作者地址  https://github.com/koihuang/ostep-note</p>
<p>Operating Systems: Three Easy Pieces这本书从 虚拟化(virtualization), 并发(concurrency), 持久化(persistent) 三方面对操作系统在抽象层面上做了很好的分析介绍.
此书能让读者对操作系统有一个综合的感性认识,特别是在抽象层面上,关键还免费,免费,免费!!!.
感兴趣的读者可以读一下 http://pages.cs.wisc.edu/~remzi/OSTEP/</p>
<p>作为学习巩固,分享一下自己的学习笔记,有兴趣的也可以看一下.(蓝色有链接的为已经写好的笔记,后面逐步更新中,有些不重要的选择性跳过)</p>`,r:{minutes:1.81,words:543},y:"a",t:"操作系统相关 Operating Systems: Three Easy Pieces 学习笔记"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/README.md"]],["v-2fabe988","/note-book/Research_Develop/C/ACLLib/ACLLib.html",{d:1691939318e3,e:`
<ul>
<li>是一个基于Win32API的函数库，提供了相对较为简单的方式来做Windows程序</li>
<li>实际提供了一个c和两个h文件，可以在msvc和dev c++（MingGW）中使用</li>
<li>以GPL的方式开源放在了github中</li>
<li>纯教学用途，但是变成模型和思想开源借鉴</li>
</ul>
<h2>main()?</h2>
<ul>
<li>main() 成为c语言的入口函数其实和c语言本身无关，你的代码是被一小段叫做启动代码的程序所调用的，它需要一个叫main的地方</li>
<li>操作系统把你的可执行程序装载到内存里，启动运行，然后调用你的main函数</li>
</ul>`,r:{minutes:.99,words:298},y:"a",t:"ACLLIb"},["/note-book/Research&Develop/C/ACLLib/ACLLib.html","/note-book/Research&Develop/C/ACLLib/ACLLib.md"]],["v-5b349d28","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",{d:1691939318e3,e:`
<p><strong>面向对象编程</strong> —— <code>Object Oriented Programming</code> 简写 <code>OOP</code></p>
<h2>目标</h2>
<ul>
<li>了解 <strong>面向对象</strong> 基本概念</li>
</ul>
<h2>01. 面向对象基本概念</h2>
<ul>
<li>我们之前学习的编程方式就是 <strong>面向过程</strong> 的</li>
<li><strong>面相过程</strong> 和 <strong>面相对象</strong>，是两种不同的 <strong>编程方式</strong></li>
<li>对比 <strong>面向过程</strong> 的特点，可以更好地了解什么是 <strong>面向对象</strong></li>
</ul>`,r:{minutes:1.78,words:533},y:"a",t:"面向对象(OOP)基本概念"},["/note-book/Research_Develop/Python/python面向对象/01_面向对象（OOP）基本概念.html","/note-book/Research&Develop/Python/python面向对象/01_面向对象（OOP）基本概念.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research&Develop/Python/python面向对象/01_面向对象（OOP）基本概念.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md"]],["v-6111f3f4","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>类和对象的概念</li>
<li>类和对象的关系</li>
<li>类的设计</li>
</ul>
<h2>01. 类和对象的概念</h2>
<p><strong>类</strong> 和 <strong>对象</strong> 是 <strong>面向对象编程的 两个 核心概念</strong></p>
<h3>1.1 类</h3>
<ul>
<li><strong>类</strong> 是对一群具有 <strong>相同 特征</strong> 或者 <strong>行为</strong> 的事物的一个统称，是抽象的，<strong>不能直接使用</strong>
<ul>
<li><strong>特征</strong> 被称为 <strong>属性</strong></li>
<li><strong>行为</strong> 被称为 <strong>方法</strong></li>
</ul>
</li>
<li><strong>类</strong> 就相当于制造飞机时的<strong>图纸</strong>，是一个 <strong>模板</strong>，是 <strong>负责创建对象的</strong></li>
</ul>`,r:{minutes:2.27,words:681},y:"a",t:"类和对象"},["/note-book/Research_Develop/Python/python面向对象/02_类和对象.html","/note-book/Research&Develop/Python/python面向对象/02_类和对象.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research&Develop/Python/python面向对象/02_类和对象.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.md"]],["v-4f6bf42c","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li><code>dir</code> 内置函数</li>
<li>定义简单的类（只包含方法）</li>
<li>方法中的 <code>self</code> 参数</li>
<li>初始化方法</li>
<li>内置方法和属性</li>
</ul>
<h2>01. <code>dir</code> 内置函数（知道）</h2>
<ul>
<li>在 <code>Python</code> 中 <strong>对象几乎是无所不在的</strong>，我们之前学习的 <strong>变量</strong>、<strong>数据</strong>、<strong>函数</strong> 都是对象</li>
</ul>`,r:{minutes:7.27,words:2180},y:"a",t:"面相对象基础语法"},["/note-book/Research_Develop/Python/python面向对象/03_面相对象基础语法.html","/note-book/Research&Develop/Python/python面向对象/03_面相对象基础语法.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/03_面相对象基础语法.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.md"]],["v-5d1813c6","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>封装</li>
<li>小明爱跑步</li>
<li>存放家具</li>
</ul>
<h3>01. 封装</h3>
<ol>
<li><strong>封装</strong> 是面向对象编程的一大特点</li>
<li>面向对象编程的 <strong>第一步</strong> —— 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li>
<li><strong>外界</strong> 使用 <strong>类</strong> 创建 <strong>对象</strong>，然后 <strong>让对象调用方法</strong></li>
<li><strong>对象方法的细节</strong> 都被 <strong>封装</strong> 在 <strong>类的内部</strong></li>
</ol>`,r:{minutes:3.85,words:1154},y:"a",t:"面向对象封装案例"},["/note-book/Research_Develop/Python/python面向对象/04_面向对象封装案例.html","/note-book/Research&Develop/Python/python面向对象/04_面向对象封装案例.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/04_面向对象封装案例.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.md"]],["v-0cb49670","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>士兵突击案例</li>
<li>身份运算符</li>
</ul>
<p><strong>封装</strong></p>
<ol>
<li><strong>封装</strong> 是面向对象编程的一大特点</li>
<li>面向对象编程的 <strong>第一步</strong> —— 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li>
<li><strong>外界</strong> 使用 <strong>类</strong> 创建 <strong>对象</strong>，然后 <strong>让对象调用方法</strong></li>
<li><strong>对象方法的细节</strong> 都被 <strong>封装</strong> 在 <strong>类的内部</strong></li>
</ol>`,r:{minutes:2.57,words:770},y:"a",t:"面向对象封装案例 II"},["/note-book/Research_Develop/Python/python面向对象/05_面向对象封装案例 II.html","/note-book/Research&Develop/Python/python面向对象/05_面向对象封装案例 II.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research&Develop/Python/python面向对象/05_面向对象封装案例 II.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.md"]],["v-451b6bb3","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`
<h2>01. 应用场景及定义方式</h2>
<p><strong>应用场景</strong></p>
<ul>
<li>在实际开发中，<strong>对象</strong> 的 <strong>某些属性或方法</strong> 可能只希望 <strong>在对象的内部被使用</strong>，而 <strong>不希望在外部被访问到</strong></li>
<li><strong>私有属性</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>属性</strong></li>
<li><strong>私有方法</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>方法</strong></li>
</ul>`,r:{minutes:1.17,words:352},y:"a",t:"私有属性和私有方法"},["/note-book/Research_Develop/Python/python面向对象/06_私有属性和私有方法.html","/note-book/Research&Develop/Python/python面向对象/06_私有属性和私有方法.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/06_私有属性和私有方法.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.md"]],["v-7741f6f4","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>单例设计模式</li>
<li><code>__new__</code> 方法</li>
<li>Python 中的单例</li>
</ul>
<h2>01. 单例设计模式</h2>
<ul>
<li>
<p>设计模式</p>
<ul>
<li><strong>设计模式</strong> 是 <strong>前人工作的总结和提炼</strong>，通常，被人们广泛流传的设计模式都是针对 <strong>某一特定问题</strong> 的成熟的解决方案</li>
<li>使用 <strong>设计模式</strong> 是为了可重用代码、让代码更容易被他人理解、保证代码可靠性</li>
</ul>
</li>
<li>
<p>单例设计模式</p>
<ul>
<li><strong>目的</strong> —— 让 <strong>类</strong> 创建的对象，在系统中 <strong>只有</strong> <strong>唯一的一个实例</strong></li>
<li>每一次执行 <code>类名()</code> 返回的对象，<strong>内存地址是相同的</strong></li>
</ul>
</li>
</ul>`,r:{minutes:3.07,words:920},y:"a",t:"单例"},["/note-book/Research_Develop/Python/python面向对象/07_单例.html","/note-book/Research&Develop/Python/python面向对象/07_单例.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/07_单例.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.md"]],["v-617feebe","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>多态</li>
</ul>
<p><strong>面向对象三大特性</strong></p>
<ol>
<li>
<p><strong>封装</strong> 根据 <strong>职责</strong> 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</p>
<ul>
<li>定义类的准则</li>
</ul>
</li>
<li>
<p><strong>继承</strong> <strong>实现代码的重用</strong>，相同的代码不需要重复的编写</p>
<ul>
<li>设计类的技巧</li>
<li>子类针对自己特有的需求，编写特定的代码</li>
</ul>
</li>
<li>
<p><strong>多态</strong> 不同的 <strong>子类对象</strong> 调用相同的 <strong>父类方法</strong>，产生不同的执行结果</p>
<ul>
<li><strong>多态</strong> 可以 <strong>增加代码的灵活度</strong></li>
<li>以 <strong>继承</strong> 和 <strong>重写父类方法</strong> 为前提</li>
<li>是调用方法的技巧，<strong>不会影响到类的内部设计</strong></li>
</ul>
<figure><figcaption>016_多态示意图</figcaption></figure>
</li>
</ol>`,r:{minutes:1.61,words:483},y:"a",t:"多态"},["/note-book/Research_Develop/Python/python面向对象/08_多态.html","/note-book/Research&Develop/Python/python面向对象/08_多态.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research&Develop/Python/python面向对象/08_多态.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.md"]],["v-fc80a980","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>单继承</li>
<li>多继承</li>
</ul>
<p><strong>面向对象三大特性</strong></p>
<ol>
<li><strong>封装</strong> 根据 <strong>职责</strong> 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li>
<li><strong>继承</strong> <strong>实现代码的重用</strong>，相同的代码不需要重复的编写</li>
<li><strong>多态</strong> 不同的对象调用相同的方法，产生不同的执行结果，<strong>增加代码的灵活度</strong></li>
</ol>`,r:{minutes:5.79,words:1736},y:"a",t:"继承"},["/note-book/Research_Develop/Python/python面向对象/09_继承.html","/note-book/Research&Develop/Python/python面向对象/09_继承.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research&Develop/Python/python面向对象/09_继承.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.md"]],["v-69880198","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>类的结构</li>
<li>类属性和实例属性</li>
<li>类方法和静态方法</li>
</ul>
<h2>01. 类的结构</h2>
<h3>1.1 术语 —— 实例</h3>
<ol>
<li>使用面相对象开发，<strong>第 1 步</strong> 是设计 <strong>类</strong></li>
<li>使用 <strong>类名()</strong> 创建对象，<strong>创建对象</strong> 的动作有两步：
<ul>
<li>
<ol>
<li>在内存中为对象 <strong>分配空间</strong></li>
</ol>
</li>
<li>
<ol start="2">
<li>调用初始化方法 <code>__init__</code> 为 <strong>对象初始化</strong></li>
</ol>
</li>
</ul>
</li>
<li>对象创建后，<strong>内存</strong> 中就有了一个对象的 <strong>实实在在</strong> 的存在 —— <strong>实例</strong></li>
</ol>`,r:{minutes:5.97,words:1790},y:"a",t:"类属性和类方法"},["/note-book/Research_Develop/Python/python面向对象/10_类属性和类方法.html","/note-book/Research&Develop/Python/python面向对象/10_类属性和类方法.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/10_类属性和类方法.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.md"]],["v-554537f7","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html",{d:1691939318e3,e:`
<p><code>eval()</code> 函数十分强大 —— <strong>将字符串</strong> 当成 <strong>有效的表达式</strong> 来求值 并 <strong>返回计算结果</strong></p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 基本的数学计算</span>
In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">"1 + 1"</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>

<span class="token comment"># 字符串重复</span>
In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">"'*' * 10"</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">'**********'</span>

<span class="token comment"># 将字符串转换成列表</span>
In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">"[1, 2, 3, 4, 5]"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">list</span>

<span class="token comment"># 将字符串转换成字典</span>
In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">"{'name': 'xiaoming', 'age': 18}"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">dict</span>
</code></pre></div>`,r:{minutes:.68,words:203},y:"a",t:"eval 函数"},["/note-book/Research_Develop/Python/python面向对象/11_eval函数.html","/note-book/Research&Develop/Python/python面向对象/11_eval函数.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research&Develop/Python/python面向对象/11_eval函数.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.md"]],["v-782c286b","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>模块</li>
<li>包</li>
<li>发布模块</li>
</ul>
<h2>01. 模块</h2>
<h3>1.1 模块的概念</h3>
<blockquote>
<p><strong>模块是 Python 程序架构的一个核心概念</strong></p>
</blockquote>
<ul>
<li>每一个以扩展名 <code>py</code> 结尾的 <code>Python</code> 源代码文件都是一个 <strong>模块</strong></li>
<li><strong>模块名</strong> 同样也是一个 <strong>标识符</strong>，需要符合标识符的命名规则</li>
<li>在模块中定义的 <strong>全局变量</strong> 、<strong>函数</strong>、<strong>类</strong> 都是提供给外界直接使用的 <strong>工具</strong></li>
<li><strong>模块</strong> 就好比是 <strong>工具包</strong>，要想使用这个工具包中的工具，就需要先 <strong>导入</strong> 这个模块</li>
</ul>`,r:{minutes:5.32,words:1597},y:"a",t:"模块和包"},["/note-book/Research_Develop/Python/python面向对象/12_模块和包.html","/note-book/Research&Develop/Python/python面向对象/12_模块和包.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research&Develop/Python/python面向对象/12_模块和包.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.md"]],["v-d7023b56","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>文件的概念</li>
<li>文件的基本操作</li>
<li>文件/文件夹的常用操作</li>
<li>文本文件的编码方式</li>
</ul>
<h2>01. 文件的概念</h2>
<h3>1.1 文件的概念和作用</h3>
<ul>
<li>计算机的 <strong>文件</strong>，就是存储在某种 <strong>长期储存设备</strong> 上的一段 <strong>数据</strong></li>
<li>长期存储设备包括：硬盘、U 盘、移动硬盘、光盘...</li>
</ul>
<p><strong>文件的作用</strong></p>`,r:{minutes:7.37,words:2210},y:"a",t:"文件"},["/note-book/Research_Develop/Python/python面向对象/13_文件.html","/note-book/Research&Develop/Python/python面向对象/13_文件.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research&Develop/Python/python面向对象/13_文件.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.md"]],["v-7cbbdb02","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html",{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>异常的概念</li>
<li>捕获异常</li>
<li>异常的传递</li>
<li>抛出异常</li>
</ul>
<h2>01. 异常的概念</h2>
<ul>
<li>程序在运行时，如果 <code>Python 解释器</code> <strong>遇到</strong> 到一个错误，<strong>会停止程序的执行，并且提示一些错误信息</strong>，这就是 <strong>异常</strong></li>
<li><strong>程序停止执行并且提示错误信息</strong> 这个动作，我们通常称之为：<strong>抛出(raise)异常</strong></li>
</ul>`,r:{minutes:5.27,words:1582},y:"a",t:"异常"},["/note-book/Research_Develop/Python/python面向对象/14_异常.html","/note-book/Research&Develop/Python/python面向对象/14_异常.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/Research&Develop/Python/python面向对象/14_异常.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.md"]],["v-65ddef8e","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10%20Multi-CPU%20Scheduling.html",{d:1691939318e3,e:`
<p><strong>概述</strong><br>
当有多个cpu时,进程调度不可避免就会有并发问题出现.目前大概有两种调度策略,一种是单队列调度,一种是多队列调度.二者各有利弊,都有系统采用.</p>
<p><strong>概念解释</strong></p>
<ul>
<li>缓存:<br>
为了加快cpu对内存的访问,每个cpu都有自己的缓存cache,第一次访问内存的数据会拷贝一份到缓存中,第二次访问时直接从缓存中取<br>
</li>
<li>缓存一致性
假设多个cpu缓存都有同一份数据,某一cpu更改该数据时,更改之前会将其它cpu缓存的该数据缓存置为无效,然后再更新.在硬件层面保证共享内存的唯一性</li>
</ul>`,r:{minutes:2.05,words:616},y:"a",t:"10 多处理器调度"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10 Multi-CPU Scheduling.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10 Multi-CPU Scheduling.md",":md"]],["v-508b9403","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13%20Address%20Spaces.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
内存memory可以看作是一个长长的数组(i.e.,4GB,8GB或更多),为了让每个进程都有自己独立的内存空间.操作系统给每个进程都分配了物理内存空间,但只提供给进程虚拟地址,用户能看到的都是虚拟地址,至于虚拟地址和真实物理地址的映射则由操作系统完成,这部分对用户是透明的,用户其实也不用关心简单的分配方式如下图所示,可以看出物理层面,内存都隔离开了.
</p>
<ol>
<li><strong>地址空间</strong><br>
地址空间包含运行的程序的所有内存状态.包括程序代码,堆,栈.代码是静态的,不会动态增加会减少,直接放在最上面.堆和栈会动态变化,放在上面和下面,可以往中间动态增加.栈用来保存当前的函数调用信息,局部变量,方法参数和返回值.堆用于动态分配的,用户管理的内存.比如c语言的molloc()或Java的new 对象创建等.
</li>
</ol>`,r:{minutes:1.02,words:305},y:"a",t:"13 抽象:地址空间"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13 Address Spaces.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13 Address Spaces.md",":md"]],["v-06f9c988","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14%20Memory%20API.html",{d:1691939318e3,e:`
<ol>
<li>
<p><strong>内存类型</strong></p>
<ul>
<li>栈内存<br>
内存的申请和释放由编译器隐式管理,不需要用户操作.当调用函数时,会在栈上开辟空间存储参数,本地变量,返回值,当函数退出时,释放内存.</li>
<li>堆内存<br>
堆内存的申请和释放需要由编程者显示管理(虽然高级语言Java会帮忙完成),栈内存的作用范围都在函数内,存活时间都比较短.堆的内存作用范围比较大,存活时间比较长.</li>
</ul>
</li>
<li>
<p><strong>内存申请malloc()调用</strong><br>
malloc的函数定义是: void *malloc(size_t size); malloc通过传入字节数申请内存.返回类型为void是为了方便程序员根据需要转换返回类型,比如转换成double,int等</p>
</li>
<li>
<p><strong>内存释放free()调用</strong><br>
free(指针),传入free内存指针,则可以释放改指针占用的堆内存</p>
</li>
<li>
<p><strong>常见错误</strong><br>
忘记分配内存,没有分配足够的内存,忘记初始化分配的内存等</p>
</li>
</ol>`,r:{minutes:.93,words:279},y:"a",t:"14 内存操作接口 Memory API"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14 Memory API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14 Memory API.md",":md"]],["v-b0fbb1a2","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15%20Address%20Translation.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
不管有多少个进程在执行,它们都是共享一大块4GB或更多内存.操作系统和硬件结合,通过地址转换技术,一起高效,灵活,并有效控制着内存分配管理.硬件层面,</p>
<ol>
<li>
<p><strong>硬件层面</strong><br>
每个cpu都有一对[基址(base)寄存器] + [界限(bound)寄存器],base决定进程内存的实际物理地址起点,bound决定虚拟地址的范围,即进程不能访问
超过范围的内存.实际运行时,cpu 通过 base+虚拟地址 = 实际物理地址 访问真实地址的数据,达到地址转化的目的. 通过这种机制,虽然进程的内存空间都是独立分散在整个
内存的各个地方,但是每个进程的虚拟地址都是从0开始,这部分对进程是透明的,同时提供修改base和bound的功能,当然这也属于内核特权操作.</p>
</li>
<li>
<p><strong>操作系统层面</strong><br>
硬件提供的base+bound机制,方便高效的转化虚拟地址,但是对内存的精细管理还需要操作系统介入. 哪些内存地址是可用的,哪些是不可用的,都需要
操作系统进行追踪. 进程运行之前,操作系统需要指定该进程的实际物理地址起点(即base)和范围(bound). 根据内存的分配使用情况,为了提高内存的
利用率,操作系统还可能会动态的转移内存.</p>
</li>
</ol>`,r:{minutes:1.4,words:419},y:"a",t:"15 地址转换 Address Translation"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15 Address Translation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15 Address Translation.md",":md"]],["v-77255d40","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16%20Segmentation.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
假设每个进程的内存空间都占用的是一整段连续的内存,容易造成内存空间的浪费,比如heap和stack中间那一段.为了避免大量的内存浪费,采用分段机制,将进程的内存切分为三个逻辑段:代码段,heap段,stack段.同时也可以方便内存共享,进一步节省内存,尤其是代码共享. 将代码段设置成只可读,则可以在不同进程间共享. 当然这样做也有缺点,比如可能会造成很多未使用的内存碎片造成浪费,称为外部碎片问题.解决这个问题的一种方法是终止运行的进程,将它们的数据复制到连续的内存去,紧凑使用内存.</p>
<p><strong>分段内存分配例:</strong><br>
</p>`,r:{minutes:.76,words:227},y:"a",t:"16 Segmentation 分段"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16 Segmentation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16 Segmentation.md",":md"]],["v-cf9a1e10","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17%20Free%20Space%20Management.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
操作系统可通过维护一个空闲列表来管理维护空闲内存空间. 空闲列表相当于一个链表,每一个节点指向空闲空间,并指向下一空闲空间节点.当用户调用
malloc()申请内存时,操作系统根据策略分配空闲空间.分配空间时会按照申请内存大小对分配的空闲空间进行切分,返回申请大小的内存指针,剩余部分
作为新的空闲节点加入空闲列表中</p>
<ol>
<li>
<p><strong>几种分配策略</strong></p>
<ul>
<li>最优匹配:匹配大小一样或最接近的节点,实现简单,但是遍历列表比较费时</li>
<li>最差匹配:返回最大的节点,缺点是遍历费时和容易导致内存碎片</li>
<li>首次匹配:匹配第一个能满足需求的节点,优点是不需要遍历全部节点,缺点还是会造成内存碎片</li>
</ul>
</li>
<li>
<p><strong>其它改进内存管理的方法</strong></p>
<ul>
<li>分离空闲列表<br>
用一个独立的列表管理经常被申请大小的内存空间.其它大小的分配交给通用的内存分配处理,比如锁和文件系统inode等.独立列表会在系统
启动时初始化,减少了空闲列表初始化的开销,同时分配和销毁操作都比较快,可以提高空闲空间管理性能</li>
<li>伙伴系统<br>
伙伴系统通过将空闲空间抽象成2^N大小的抽象空间.通过递归将内存一分为二,直到刚好匹配内存申请大小(或大一点).这个系统的优点在于
方便空闲节点的合并.释放空间时,通过检测旁边的空间节点是否空闲,如果空闲则合并为一个大的空闲空间节点<br>
例:
</li>
</ul>
</li>
</ol>`,r:{minutes:1.66,words:497},y:"a",t:"17 Free Space Management 空闲空间管理"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17 Free Space Management.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17 Free Space Management.md",":md"]],["v-247efa59","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18%20Introduction%20to%20Paging.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
前面说到的分段管理空闲空间的方式是非常灵活方便的,但同时也容易造成内存碎片问题. 采用内存分页,则可以解决这个问题. 分页是把内存分成很多固定大小(一般比较小)的分片. 通过分片组合来分配内存,可有效降低内存碎片化的问题. 但同时也会带来运行速度慢,分页映射表(即页表)占用内存过大的问题.为了记录地址空间的每个虚拟页放在物理内存中的位置，操作系统为每个进程保存一个数据结构，称为页表（page table),用于虚拟地址到真实地址的转化,因为每个进程都有一个页表管理,所以所有进程的页表加起来会占用不少的内存,接下来的两章节会介绍怎么解决这方面的问题.
</p>`,r:{minutes:.87,words:260},y:"a",t:"18 Introduction to Paging 分页介绍"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18 Introduction to Paging.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18 Introduction to Paging.md",":md"]],["v-d9307d94","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19%20Translation%20Lookaside%20Buffers.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
类似内存缓存cache,为了加速分页地址转化,在硬件cpu的管理内存单元(MMU)增加地址转换旁路缓冲存储器即TLB,缓存分页虚拟地址映射. 当内存访问时,先访问tlb是否已经缓存,如果有则转化(很快),没有则访问页表(page table)将其缓存在tlb中重新快速获取.TLB也利用时间空间局部性原理,会同时缓存邻近的分页映射.</p>
`,r:{minutes:.47,words:140},y:"a",t:"19 Translation Lookaside Buffers 快速地址转化(TLB)"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19 Translation Lookaside Buffers.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19 Translation Lookaside Buffers.md",":md"]],["v-5920d9e3","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20%20Advanced%20Page%20Tables.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
分页的第二个问题:内存消耗太大.这个问题有以下几种方案</p>
<ol>
<li>
<p><strong>更大的分页</strong><br>
一种简单的解决方案是采用更大的分页,这样页数则变少,页表占用内存自然就变小,但是更大的分页会造成内部碎片问题,即分页内部有很多未真正使用的内存.</p>
</li>
<li>
<p><strong>分段+分页</strong><br>
还有一种解决方案是采用前面介绍的分段+分页的方式来管理内存. 单独有页表来管理内存有一个问题是,比如堆heap和栈stack之间可能会有很多未使用的页,但分页的项还是存在页表中占用空间. 使用逻辑分段:代码段,堆段,栈段,每个段都有属于自己的页表,这种方式可以避免未使用的分页项占用页表空间.但是分段始终会造成外部内存碎片问题.</p>
</li>
<li>
<p><strong>多级页表</strong><br>
简单来说,就是将线性页表转化成树的结构. 首先将页表分成页大小的单元,即将页表本身再次分页,如果分页中的所有项都是无效的,则不分配项管理,因此可以减少无效分页的内存浪费.当然因为采用了多级结构,在分页查找上会有一些消耗,但综合考虑是非常有效的方案,很多现代系统都采用它.<br>
多级页表例:
</p>
</li>
</ol>`,r:{minutes:1.34,words:401},y:"a",t:"20 Advanced Page Tables 分页:较小的表"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20 Advanced Page Tables.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20 Advanced Page Tables.md",":md"]],["v-201aa8de","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/21%20Swapping%20Mechanisms.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
早期的机器不能把所有进程需要的所有页同时放在内存中,因此,多进程系统需要操作系统支持比物理内存更大的地址空间.让所有进程不必担心程序的数据是否有足够空间存储.交换机制则可以达到这个目的.简单来说,在物理内存不够的时候,交换机制通过交换物理内存中不常用的分页到硬盘的交换空间(提前开辟好的)中,提供内存.</p>
<ol>
<li>
<p><strong>交换空间</strong><br>
一般存在硬盘上,空间比内存大很多.为了方便分页的写入和读出,操作系统一般会以页大小为单位读取或写入</p>
</li>
<li>
<p><strong>存在位</strong><br>
我们知道分页的位置信息是存在分页表中的,如果分页被交换到交换空间了,在分页项中如何体现呢?这就用到存在位了,分页项会有一个比特位来表示该分页是否被交换了,1代表存在物理内存中,0代表被交换了.访问被交换的分页时,会产生页错误中断(page fault)</p>
</li>
<li>
<p><strong>页错误</strong><br>
当页错误产生时,操作系统会被唤醒,用以存在操作系统的页错误处理程序(page-fault handler)处理. 操作系统会读取分页项中查找交换地址,读入内存,然后更新分页表的存在位,并重新开始读取分页指令.</p>
</li>
</ol>`,r:{minutes:1.69,words:508},y:"a",t:"21 Swapping Mechanisms 超越物理内存:交换机制"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/21 Swapping Mechanisms.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/21 Swapping Mechanisms.md",":md"]],["v-503a0eb2","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/22%20Swapping%20Policies.html",{d:1691939318e3,e:`<p>22 Swapping Policies 交换策略</p>
<p><strong>概述:</strong><br>
首先,交换内存到磁盘交换空间的消耗是比较大的,所以有必要尽量减少交换. 一种最有的策略是,将未来最晚访问的页交换,则可以达到缓存未命中率最低,或者说缓存命中率最高.</p>
<ol>
<li>
<p><strong>简单策略: FIFO</strong><br>
先入页先交换,优点是实现简单,缺点就是可能会把频繁访问的页频繁交换出去.</p>
</li>
<li>
<p><strong>随机</strong><br>
优点是实现简单,缺点是缓存命中率页时好时坏.但在循环引用内存分页,需要交换内存的场景下,效果是最好的. 因为循环引用的时候,不管LRU还是FIFO都会把之前的页交换出去,随机则可能交换可能不交换,相比之下,命中率则会高一些.</p>
</li>
<li>
<p><strong>利用历史数据:LRU</strong><br>
FIFO和随机都有可能交换出频繁访问的重要的页.LRU基于分页访问频率,交换出不经常访问的分页,保留经常访问的分页. 缺点在于实现复杂,统计访问频次也比较消耗性能.</p>
</li>
<li>
<p><strong>近似LRU</strong><br>
完整的LRU实现比较复杂也比较消耗性能. 近似LRU通过硬件为每个页增加一个使用位,1代表最近被访问,0代表没有被使用. 当需要交换内存时,错做系统通过扫描分页列表,如果使用位是1则不交换并改为0,如果是0则交换.虽然这种方式不如完整的LRU完美,但是性能消耗低,同时可以基于一定的历史信息做交换决策,比一般的没有基于历史信息的策略效果要好.</p>
</li>
</ol>`,r:{minutes:1.55,words:466},y:"a",t:""},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/22 Swapping Policies.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/22 Swapping Policies.md",":md"]],["v-5b295232","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23%20Complete%20VM%20Systems.html",{d:1691939318e3,e:`<p>23 Complete VM Systems 完整的虚拟内存系统</p>
<p><strong>概述:</strong><br>
以70年代诞生的VMS操作系统为例,介绍真实的完整虚拟内存系统,真是的虚拟操作系统跟之前讨论的一个重要区别在于,内核虚拟空间是每个用户地址空间的一部分,实际上只是一个空间,通过映射到每个地址空间.</p>
<p>vms地址空间:
</p>
<ol>
<li>
<p><strong>页交换</strong><br>
vms采用分段FIFO交换策略.每个进程都有一个保存在内存的最大页数,成为RSS. 当一个进程的页数超过RSS时,先入的页被交换. 纯粹的FIFO性能不好,VMS引入二次机会列表机制,分为干净页列表和脏页列表.页在被交换之前放在二次列表中.当页被交换时,如果干净(未修改),则将其放在干净页表末尾,如果修改过则放在脏页列表末尾. 如果另一进程需要空闲页,则从干净页表取. 如果原来的进程在回收之前在该页上出现页错误,则会从空闲(或脏)列表中回收,避免昂贵的磁盘访问.同时VMS通过将大批量的页从脏列表分组在一起,将它们一举写入磁盘,以页聚集的方式执行更少和更大的写入,提高性能.</p>
</li>
<li>
<p><strong>其他虚拟内存技巧</strong></p>
<ul>
<li>
<p>按需置零<br>
简单来说就是现在页表中放入一个不可访问的条目,当进程读取或写入该页时,引发跳转,然后操作系统才寻找物理页,放入页表中.好处在于,可以节省进程加载了但不使用页的空间.</p>
</li>
<li>
<p>写时复制(copy-on-write COW)
如果需要一个页面从一个空间复制到另一个空间,实际不复制,而是将其映射到目标地址空间,当需要写入修改时,再重新分配页,真正复制填充数据,如果只是读取数据,这种方式可以省下内存.</p>
</li>
</ul>
</li>
</ol>`,r:{minutes:1.83,words:549},y:"a",t:""},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23 Complete VM Systems.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23 Complete VM Systems.md",":md"]],["v-319a6cdc","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4%20Processes.html",{d:1691939318e3,e:`
<p>=
<strong>概述</strong>:<br>
进程的定义:运行的程序<br>
我们知道程序的运行都需要靠CPU运行,但是我们平时用电脑都是很多个程序同时(至少给人感觉)在运行,难道计算机有很多很多CPU? 当然我们知道计算机只有一个或几个有限的CPU,计算机通过虚拟化CPU,来回迅速的切换运行不同的进程,从而达到同时运行多个任务的目的.<br>
为了实现这个目的,操作系统需要底层的机器机制和上层的策略.<br>
底层的机器机制举例:环境切换(context switch),分时机制(time sharing)...<br>
上层策略: 调度策略...</p>
<ol>
<li>
<p><strong>存储在磁盘里的程序是怎么加载运行变成进程的?</strong></p>
<ul>
<li>操作系统首先将代码和静态数据加载到进程的内存地址空间</li>
<li>分配一些内存作为进程运行时的栈(用于存放局部变量,函数参数,返回地址))</li>
<li>分配一些内存作为进程的堆(heap),(用于存放动态分配的数据)</li>
<li>其它初始任务:
<ul>
<li>一般会默认分配三个输出流:标准输入流(input),标准输出流(output),标准错误流(error)</li>
</ul>
</li>
<li>最后:跳到程序执行入口即main()运行<br>
</li>
</ul>
</li>
<li>
<p><strong>进程的状态(简单来说有3种)</strong></p>
<ul>
<li>运行(Running):正在运行</li>
<li>就绪(Ready):运行就绪,因为某些原因操作系统没选择它运行</li>
<li>阻塞(Block):执行了某些操作(比如I/O操作),直到某些事件发生才会准备运行
</li>
</ul>
</li>
<li>
<p><strong>进程相关的数据结构</strong></p>
<ul>
<li>context : 进程相关的寄存器内容,当切换进程时会将该进程的寄存器内容存起来,当再次切换回来的时候将之前存起来的寄存器内容一一加载到真实的寄存器中
</li>
<li>proc_state: 进程的状态枚举
</li>
<li>proc: 进程的相关信息,包括进程id,父进程id,context的引用,proc_state值等
</li>
</ul>
</li>
</ol>`,r:{minutes:1.75,words:526},y:"a",t:"4 抽象:进程"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4 Processes.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4 Processes.md",":md"]],["v-01969508","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5%20Process%20API.html",{d:1691939318e3,e:`
<p><strong>概述</strong><br>
进程的创建是通过底层fork()和exec()系统调用
进程可通过wait()系统调用可以等待其创建的子进程执行完成</p>
<ol>
<li>
<p><strong>fork()系统调用</strong>
fork()用于创建进程,当进程调用fork()时,会复制当前进程所有环境条件参数,生成新的进程.他们有同样的环境参数,但是pid(进程id)不同,同时拥有自己的内存空间</p>
</li>
<li>
<p><strong>exec()系统调用</strong>
fork()调用创建新的进程后,exec()系统调用加载其它程序,覆写代码和静态数据,同时堆,栈和其它内存空间都会重新初始化</p>
</li>
<li>
<p><strong>wait()系统调用</strong>
父进程通过调用wait(),等待其创建的子进程执行完成,然后再运行自己后续操作</p>
</li>
<li>
<p><strong>fork()和exec()的组合</strong>
通过fork()和exec()组合创建新进程运行不同的程序. 通过分离的步骤给予了系统对进程的创建添加操作的可能. 比如通过shell操作时,fork()返回后,通过wait()该进程id,可以等待该进程执行,打印该进程的输出到屏幕. 再比如可以fork()之后可以通过命令改变(ie,wc p3.c &gt; newFile.txt) 重定向输出结果到文件中.</p>
</li>
<li>
<p><strong>其它Api</strong></p>
<ul>
<li>kill:向进程发送信号,包括睡眠,终止等</li>
<li>ps:查看当前运行的进程</li>
<li>top:当前系统进程的消耗</li>
</ul>
</li>
</ol>`,r:{minutes:1.25,words:376},y:"a",t:"5 进程接口"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5 Process API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5 Process API.md",":md"]],["v-5e65d047","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6%20Direct%20Execution.html",{d:1691939318e3,e:`
<p><strong>概述</strong>
问题1:操作系统怎么能确保程序不做我们不希望它做的事请,比如擅自更改操作系统内部文件
问题2:运行一个进程时,操作系统如何让它停下来,并切换到另一个进程,从而实现虚拟化cpu所需的时分共享</p>
<ol>
<li><strong>受限制的操作</strong>
操作系统采用用户模式和内核模式来限制进程操作. 系统会暴露只有内核模式才能执行的系统调用命令编号,但是不会暴露具体的系统调用代码地址.用户模式的进程想执行I/O等系统调用时,通过调用trap(陷阱)命令切换到内核模式执行. 内核会初始化一个trap(陷阱)命令表,表里有命令编号,和响应的处理代码地址. 用户模式只知道命令编号,但不知道命令代码地址,从而防止程序直接执行特殊操作
<ul>
<li>用户模式
程序会收到限制,比如不能直接执行I/O请求等特权操作</li>
<li>内核模式
程序不受限制</li>
<li>用户模式和内核模式的切换**
用户模式切换到内核模式时,用户模式的寄存器值会保存到内核栈,当内核操作完成后,切换会用户模式时会重新加载.
</li>
</ul>
</li>
<li><strong>进程之间的切换</strong>
操作系统通过每隔几毫秒就产生的时钟中断(timer interrupt)机制,中断运行中的进程,重获cpu的控制权,可以启动任一操作系统想启动的进程,达到进程切换的目的.如果操作系统决定切换进程,会执行上下文切换操作.即保存当前执行进程的寄存器值,程序计数器,内核栈指针等,然后加载即将运行进程的寄存器值,程序计数器,内核栈指针等
</li>
</ol>`,r:{minutes:1.72,words:516},y:"a",t:"6 受限直接执行"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6 Direct Execution.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6 Direct Execution.md",":md"]],["v-3d749c17","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7%20CPU%20Scheduling.html",{d:1691939318e3,e:`
<p><strong>概述</strong><br>
比较好的调度策略是能优先处理对响应时间要求高的任务,同时不让需要长时间计算的任务饥饿<br>
(i.e.,键盘打字就属于对响应时间要求高的任务,拷贝文件就属于需要长时间计算cpu密集的任务)<br>
下面分析几种不同的调度策略,并分析它们的利弊</p>
<p><strong>概念解释</strong></p>
<ul>
<li>周转时间<br>
任务从到来到执行结束时间,可以想象如果任务中途不被打断一直执行,则周转时间短</li>
<li>响应时间
任务到来到第一次被调度执行的时间</li>
</ul>
<ol>
<li><strong>FIFO</strong><br>
First in First out 先进先出策略,有点是简单,但也只是简单,缺点很明显,任务的周转时间和响应时间都很差,假设cpu计算时间长的任务先到,则其它任务就只能干等了,非常不友好</li>
<li><strong>SJF</strong><br>
Shortest Job First 最短任务优先策略, 前提是知道任务的执行时间,然后任务同时到来的时候,优先执行需要时间短的任务
缺点:先不说现实情况下,基本不可能一开始就知道任务的执行时间. 当大任务先到时,也不可避免其它任务等待</li>
<li><strong>STCF</strong><br>
Shortest Time-to-Completion First 最短完成时间优先策略,前提是知道任务的执行时间长短,让任务的执行时间比当前任务短,则切换到该任务执行,这种方法优化了任务的平均周转时间,缺点是容易引起任务饥饿,假设一直都有短任务到来,则长任务就会得不到执行,引发饥饿</li>
<li><strong>RR</strong><br>
Round Robin 轮转策略,不管什么任务,都每隔一段时间轮流执行,可优化任务的响应时间,缺点很明显,任务的平均周转时间很糟糕,同时进程的切换比较频繁,切换的消耗也比较大</li>
</ol>`,r:{minutes:1.73,words:518},y:"a",t:"7 调度策略"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7 CPU Scheduling.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7 CPU Scheduling.md",":md"]],["v-10c4e4cf","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8%20Multi-level%20Feedback.html",{d:1691939318e3,e:`
<p><strong>概述</strong><br>
上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下:</p>
<ol>
<li>规则1: 如果任务A的优先级&gt;B的优先级,则执行A</li>
<li>规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B</li>
<li>规则3: 任务进入系统时,放在最高优先级</li>
<li>规则4: 一旦任务用完了其在所属级别队列的时间配额,则降低其优先级</li>
<li>规则5: 经过一段时间后,所有任务都放在最高优先级队列(避免任务饥饿)</li>
</ol>`,r:{minutes:.89,words:268},y:"a",t:"8 调度:多级反馈队"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8 Multi-level Feedback.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8 Multi-level Feedback.md",":md"]],["v-ab459502","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26%20Concurrency%20and%20Threads.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
为什么需要线程?一是因为有并行运算的需求,通过多线程可以提高运算速度;二是提高cpu的使用率,特别是有I/O的情况,以前只有进程的时候,
发生I/0时,进程就只能被阻塞,不能干其它的事情,有了多线程,则可以切换到其它线程运行.</p>
<ol>
<li>
<p>线程与进程的不同<br>
一个进程通常包含多个线程.线程可以想象成是小型的进程.</p>
<ul>
<li>内存共享<br>
同一进程里的多线程共享内存空间,可以访问相同的数据,而进程与进程之前是不共享内存的.</li>
<li>环境切换
每个线程都有自己栈内存,有自己的寄存器,发生环境切换时,线程将状态保存到TCB(Thread Control Block),但不会切换地址空间(因为共享内存),
而进程将状态保存在PCB(Process Control Block),会切换地址空间(因为有各自的内存空间)</li>
</ul>
<figure><figcaption></figcaption></figure>
</li>
<li>
<p>共享数据问题
线程虽然可以提高程序运算速度和cpu的使用率,但是因为可以访问相同的数据,并发更新数据时就容易出现问题.问题的根本在于更新数据的代码执行并非原子性,而线程切换调度又是不可确定性.
比如:counter = counter + 1,编译成汇编语言可能就像下面这样<br>
<br>
每一条指令执行后都有可能被切换到其它同样执行这一代码的线程,从而引发共享数据问题.<br>
可能的结果是下面这样的:<br>
</p>
</li>
<li>
<p>原子性愿望
上述的共享数据问题,原因在于更新数据的代码没有一步执行到位.解决的方案就是使用一种机制让产生数据共享问题的代码,在多线程的环境下,即使发生环境切换,同时只让一个线程完整执行这段代码.这种机制成为原子性.要么全部执行完,要么不执行,没有中间状态.现代系统通过硬件提供有用的指令(同步原语),和操作系统的帮助来构建多线程系统.</p>
</li>
</ol>`,r:{minutes:1.99,words:596},y:"a",t:"26 Concurrency and Threads 并发和线程"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26 Concurrency and Threads.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26 Concurrency and Threads.md",":md"]],["v-afb12a34","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27%20Thread%20API.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
要创建线程首先要知道线程相关的Api</p>
<ol>
<li>
<p>线程创建<br>
在posix中,线程创建的api声明如下:<br>
</p>
<ul>
<li>第一个参数是指向创建好线程的指针,通过该指针与线程交互</li>
<li>第二个参数是配置线程相关的参数,比如栈的大小,线程优先级等</li>
<li>第三个参数是该线程运行的函数,参数两边声明的void*,代表函数的传参类型和返回类型可以是任意的</li>
<li>第四个参数是传递给函数的参数</li>
</ul>
</li>
<li>
<p>线程完成
如果想等另外一个线程完成的时候,可以调用pthread_join接口<br>
</p>
<ul>
<li>第一个参数是等待完成的线程指针</li>
<li>第二个参数是等待线程函数的返回值指针(因为栈内分配的内存在函数调用结束后会被回收,所以用指针)</li>
</ul>
</li>
<li>
<p>锁<br>
为了保证临界区的共享数据安全,一般都会用锁(lock)来保障数据安全.基本的一对函数如下:<br>
<br>
通常的使用方式如下:<br>
<br>
先通过pthread_mutex_lock(),获取锁,如果获取成功则进入临界区,如果另外线程持有锁,则不会返回,直到获取该锁.</p>
</li>
<li>
<p>条件变量
当线程之间需要发生某种信号时,条件变量就会很有用. 主要函数为下:<br>
<br>
使用条件变量时,需要一个相关的锁,以保障不会出现共享数据问题.使用例子如下:<br>
当ready为0时线程会sleep.<br>
<br>
设置ready=1,唤醒等待的线程<br>

通过ready变量的变化,使用条件condition和锁来唤醒或让线程沉睡.</p>
</li>
</ol>`,r:{minutes:1.49,words:448},y:"a",t:"27 Thread API 线程API"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27 Thread API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27 Thread API.md",":md"]],["v-c56826bc","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28%20Locks.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
单纯的锁一般有自旋锁和互斥锁.自旋锁和互斥锁都可以达到锁的目的.区别在于自旋锁并不将没有获得锁的线程陷入沉睡,互斥锁一般(也可能等待一段时间再让其睡眠)会让没有获得锁的线程陷入沉睡,放入等待队列中,当有锁释放时,再唤醒其中一个.二者各有利弊,自旋锁不会陷入沉睡但是如果等待的线程比较多,且等待时间比较长,会浪费cpu资源,比较适用于多数线程占用锁时间比较短的场景.互斥锁则相反.不论哪种锁都需要硬件提供支持,即需要硬件提供类似能原子性更改变量操作的指令.不同的锁则利用这些原子指令来实现不同的策略.</p>
<ol>
<li>
<p><strong>Test-And-Set</strong><br>
Test-And-Set硬件指令能提供类似下面c代码的原子性操作.能返回旧的值,并将变量设置成新的值.
<br>
利用它可实现类似下面的自旋锁:<br>
</p>
</li>
<li>
<p><strong>Compare-And-Swap</strong><br>
Compare-And-Swap硬件指令能提供类似下面c代码的原子性操作.返回旧的值,如果变量的值与期望值相等,则设置成新的值.
</p>
</li>
<li>
<p><strong>yield</strong><br>
自旋锁的问题在于线程多的时候比较浪费cpu资源.那么自然想到的解决方案时,不让未获得锁的线程占用cpu.适用yield可能让线程放弃暂用cpu.虽说效果比自旋锁好,但也有可能造成很多线程执行yield浪费资源,也可能造成线程饥饿.
</p>
</li>
<li>
<p><strong>Using Queues:Sleeping Instead Of Spinning</strong><br>
自旋锁和yield的问题在于调度程序可能选择调度的进程不是最优的线程,因此可能造成cpu浪费和线程饥饿.解决方案就是将未获取锁的线程睡眠,并放入队列,当有锁释放时,将队列中的某一线程唤醒.这个方案的缺点是,为了达到期望的效果,操作系统需要做的事情会比较多,有一定的性能消耗,因此适用于线程比较多,且多数线程持有锁的持续时间都比较长的场景.</p>
</li>
</ol>`,r:{minutes:2.07,words:620},y:"a",t:"28 Locks 锁"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28 Locks.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28 Locks.md",":md"]],["v-41728b29","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29%20Locked%20Data%20Structures.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
在应用中我们经常适用一些数据结构,比如列表,队列等.如何保障这些数据结构在多线程环境下线程安全,同时又不太消耗性能.本章介绍几种数据机构和加锁的方式于技巧.</p>
<ol>
<li><strong>并发计数器</strong><br>
简单的实现可能会想到下面这种方式:<br>
<br>
在增减查的地方都加了同一把锁确保了线程安全.但是比起另一种方案,性能要低不少.另一钟方案成为近似并发计数器,它的思路是,全局有一个计数器,有一把全局锁,每一个线程有一把锁,有一个本地计数器.本地计数器用本地锁来确保线程安全.当本地计数器达到提前设定好的阈值,则把本地计数器的值传递给全局计数器,然后设置本地计数器的值为0.优点在于可以利用多cpu并发计数,性能大大提升.缺点在于全局计数器的值并不是实时的.如果对计数的实时性要求不高,则可以采取这种方案.
近似并发计数器的代码实现:<br>
<br>
简单并发计数器和近似并发计数器的性能比较:<br>
<br>
值得注意的是,近似并发计数的阈值越大,则它的性能表现越好.因为阈值越低,对全局锁的获取释放操作就会越频繁,从而降低性能.<br>
阈值于性能的相关变化:<br>
</li>
<li><strong>并发链表</strong><br>
并发链表的实现方式如下.值得注意的是,加锁和释放锁的操作只在临界区的范围进行.一方面提高性能,一方面减少加锁范围内出错的机会.
<br>
</li>
<li><strong>并发队列</strong><br>
简单的实现方案略过.作为比较好的实现方案,看下下面的实现方案.它的思路是设置头尾节点,头节点有一把锁,尾节点有一把锁来保证线程安全.头节点用于取数据,尾节点用于插入数据.优点在于取数据和插入数据因为用不同的锁,所以不会互相影响.
</li>
<li><strong>并发散列表</strong><br>
并发散列表使用并发链表实现.并发散列表拥有几个并发链表,基于一定的规则计算插入的元素应该插入到哪个列表中.使用多列表,提高并发性,提高性能.<br>
简单的实现如下:(忽略了并发链表的代码和扩容的代码)<br>
</li>
</ol>`,r:{minutes:2.36,words:709},y:"a",t:"29 Locked Data Structures 基于锁的并发数据结构"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29 Locked Data Structures.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29 Locked Data Structures.md",":md"]],["v-01e792c4","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30%20Condition%20Variables.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
当你想根据某些状态,条件的变化来更改不同线程的沉睡或运行状态,这种情况下用条件变量就比较合适.当不满足期望的条件时,条件变量可以让线程沉睡在附带的队列中,当满足条件时再唤醒.条件变量的典型应用是生产者/消费者模型.下面通过例子一步步分析条件变量是怎么正确使用的.</p>
<ol>
<li><strong>没有加锁也没有加条件变量</strong><br>
<br>
为了方便起见,缓存buffer就设为1个整数.这个实现明显线程不安全.但如果只是单纯的加锁,数据安全可以保证,但是不能达到很好的效果.因为生产者/消费者模型希望负责生产的线程和负责消费的线程能够交替执行.而不是随机的切换.因此单纯的锁不能满足期望.</li>
<li><strong>加锁,加条件变量</strong><br>
假设只有两个线程,一个线程负责生产,一个线程负责消费,则下面的实现可以达到期望的效果.当缓存buffer满了(有一个数),则让生产线程沉睡,唤醒消费线程.消费线程消费后唤醒生产线程,因为缓存已经空了,所以消费线程陷入沉睡.<br>
<br>
但是当有多个消费线程的时候,上面的实现就会出现问题.首先使用if来判断条件会出现问题,假如有一个消费线程C1在wait的地方陷入沉睡,生产线程添加数据唤醒消费线程C1,但在C1执行之前,另外一个消费线程C2进来并消费了数据陷入沉睡,这时刚好轮到C1线程运行,唤醒后会从wait的下一条指令运行,即消费数据,但数据已经被C2消费掉了,所以会出错,错误的执行流程如下图所示.因此不能用if,用while则可以解决这个问题.如果用while的话,刚才假设的场景,C1唤醒执行时还会再次检测缓存buffer是否有数据,因此不会发生错误.<br>
<br>
即使改用while之后,还是会出现问题.因为只有一个条件变量,当生产线程P1添加数据沉睡,唤醒消费线程时,有另外两个在等数据的消费线程C1,C2在等待,假设C1被唤醒然后消费数据,因为没有数据会沉睡,并会唤醒一个线程,但这时会唤醒哪个线程呢?答案时不确定的,虽然期望唤醒的是生产线程P1.假设唤醒的是C2,C2因为没有数据所以又会沉睡,这时会出现P1,C1,C2都陷入沉睡的糟糕状态.错误的流程如下图:<br>
</li>
<li><strong>完整正确的生产者/消费者模型</strong><br>
当只有一个条件变量时,会出现上述的问题.解决方案就是使用两个条件变量.其实只要消费线程只唤醒生产线程,生产线程只唤醒消费线程,就不会出现问题.所以使用两个条件变量即可达到这种效果.如下实现方案,生产线程等待empty条件变量,唤醒full条件变量;消费线程则相反.同时还扩展了缓存数量,符合现实中的需求场景.当缓存满了之后生产线程才沉睡,缓存空了之后,消费线程才沉睡,这样可以让生产或消费线程每次可以多处理一些数据,减少线程切换以及沉睡唤醒等操作的代价.<br>
</li>
</ol>`,r:{minutes:3.3,words:990},y:"a",t:"30 Condition Variables 条件变量"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30 Condition Variables.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30 Condition Variables.md",":md"]],["v-187d9e5e","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31%20Semaphores.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
根据前面章节的介绍,我们往往需要锁(lock)和条件变量(condition variable)的结合使用来应付多种并发问题,对于开发者而言,多少还是有点复杂的.信号(Semaphore)是一种可替代的并发问题的解决手段.比起锁和条件变量的组合复杂使用,信号只对一种变量进行操作,相对而言可能对于开发者来说更简单一些.信号是一个带有整数的对象,它的定义与初始化如下:</p>
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token class-name">sem_t</span> s<span class="token punctuation">;</span>
<span class="token function">sem_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:4.47,words:1340},y:"a",t:"31 Semaphores 信号"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31 Semaphores.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31 Semaphores.md",":md"]],["v-282c901c","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32%20Concurrency%20Bugs.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
由于并发的复杂性和不可控性,很容易产生并发bug.并发bug主要分为死锁bug和非死锁bug.非死锁bug又主要有两类,一类是违背原子性bug,一类是违背顺序性bug.</p>
<ol>
<li><strong>非死锁bug</strong>
<ul>
<li><strong>违背原子性bug</strong><br>
类似下面的场景,假如Thread1执行 if判断语句后被中断,线程切换到Thread2,共享数据被置为null,再切换到Thread1执行时就会产生null错误的bug.
<br>
解决方案就是直接再临界区上下加锁.
</li>
<li><strong>违背顺序性bug</strong><br>
类似下面的场景,假如Thread1还没初始化完成,就切换到Thread2执行,会产生null错误.
<br>
如下所示,可以用条件变量解决.<br>
</li>
</ul>
</li>
<li><strong>死锁bug</strong><br>
类似下面的代码,假设Thread1和Thread2先分别获得L1,L2锁,此时Thread1想获取L2,Thread2想获取L1,但都互相被对方占用的状态,双方都不能获取完整的锁,陷入持续的等待中.这种状态即死锁.<br>
<br>
下图展示了死锁状态.

解决方案就是让所有线程按照同样的顺序获取锁,则可预防死锁.</li>
</ol>`,r:{minutes:1.08,words:323},y:"a",t:"32 Concurrency Bugs 并发bug"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32 Concurrency Bugs.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32 Concurrency Bugs.md",":md"]],["v-6773cc80","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33%20Event-based%20Concurrency.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
基于线程开发的多线程有两个问题.一是比较容易出错,死锁,阻塞,资源浪费等问题需要特别小心处理;二是多线程的调度是由操作管理的,可能不会按照开发者期望的调度方式运行,因此不能精细控制程序的运行.基于事件并发是一种替代方案.它的思路是等待某些事件发生,然后判断事件类型,使用相应的代码处理.基于事件的并发有一个非常重要的架构:eventLoop().典型的基于事件的服务器的伪代码如下:</p>
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    events <span class="token operator">=</span> <span class="token function">getEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>e in events<span class="token punctuation">)</span> 
        <span class="token function">processEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:4.35,words:1305},y:"a",t:"33 Event-based Concurrency 基于事件的并发"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33 Event-based Concurrency.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33 Event-based Concurrency.md",":md"]],["v-e1be36c0","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36%20IO%20Devices.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
现代计算机系统都集成了IO设备.生活中我们发现IO设备是多种多样的,有磁盘,有ssd,有u盘,有显卡等多类设备,计算机系统是怎么高效管理并运用这些IO设备的?</p>
<ol>
<li>
<p><strong>系统架构</strong><br>
典型的系统架构如下:</p>
<figure><figcaption></figcaption></figure>
<p>由于物理布局和造假成本的原因,要求高性能的设备离CPU比较近,低性能的设备离CPU远一些.</p>
</li>
<li>
<p><strong>标准设备</strong><br>
一个简单的标准设备的架构如下:</p>
<figure><figcaption></figcaption></figure>
<p>上面部分是设备对外提供的接口,一般设备都至少会有状态,命令,数据这三个寄存器.下面部分是设备内部具体的实现.不同的设备有不同的实现,也会有不同的设备组件.</p>
</li>
<li>
<p><strong>标准协议</strong><br>
协议如下:<br>
<br>
第一步:反复读取设备状态寄存器,直到设备可以进入接收命令的就绪状态;<br>
第二步:写入数据到数据寄存器;<br>
第三步:写入命令到命令寄存器;<br>
第四布:反复读取设备状态寄存器,等待是否指令是否执行完成;</p>
</li>
<li>
<p><strong>中断</strong><br>
标准协议中,轮询检查设备状态是比较费时的.采用中断,cpu不需要反复检查设备状态,当发生IO请求时,让当前线程睡眠,切换到其它线程,当IO完成时,会产生中断信号,唤醒线程继续执行.通过中断可以提高cpu的利用率.<br>
注意中断并非总是最佳方案,假如有一个高性能的设备往往在第一次轮询时就返回.这种情况如果用中断反而影响性能,因为中断带来的诸如线程切换等额外操作也是由代价的.有时候综合使用轮询和中断可能是更好的方案.</p>
</li>
<li>
<p><strong>DMA</strong><br>
标准协议中还有一点需要注意,将数据传给设备时,cpu需要执行拷贝数据操作,如果数据比较大时,cpu的负担会很大.解决方案就是DMA.操作系统通过告诉DMA数据传输的相关信息,DMA会自动完成数据拷贝操作.拷贝完成后会通过中断通知操作系统.DMA拷贝数据的期间,cpu就可以执行其它任务了.</p>
</li>
<li>
<p><strong>设备交互方法</strong></p>
<ul>
<li>特定指令in和out
使用特定指令in或out,将数据传入或输出到指定寄存器及一个代表设备的特定端口,系统可以自动实现期望的行为.</li>
<li>内存映射
将设备寄存器作为内存地址提供.操作系统直接将数据装入/存入到该映射地址,然后硬件从该地址装载/存入数据到设备.</li>
</ul>
</li>
<li>
<p><strong>设备驱动</strong><br>
设备的种类有千千万万,写程序的时候不可能一一去适配不同的设备接口.操作系统的解决方案是,不管是什么设备同一提供一套接口给上层应用使用,比如文件系统.不同的设备通过不同的设备驱动程序实现统一的接口,从而向上层应用隐藏了实现细节,上层应用也无须关心不同设备的实现细节.下图展示了linux的文件系统栈.
</p>
</li>
</ol>`,r:{minutes:3,words:899},y:"a",t:"36 IO Devices IO设备"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36 IO Devices.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36 IO Devices.md",":md"]],["v-47854b8a","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37%20Hard%20Disk%20Drives.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
因为有通用的抽象接口,实际编码时不会关心磁盘驱动器的细节实现问题,但是了解磁盘驱动器的原理和特征,有助于我们更好更高效地高效利用通用接口.</p>
<ol>
<li>
<p><strong>接口</strong><br>
驱动器由大量扇区组成,每个扇区512byte.现代操作系统往往是多扇区操作.但驱动器制造商唯一保证的是单个512byte的的写入是原子的.</p>
</li>
<li>
<p><strong>基本几何形状</strong><br>
磁盘往往由多个盘面构成.盘面是一种坚硬的表面,有正面和反面两面,通过表面的磁性材料的变化来编码数据.多个盘面围绕着主轴围绕在一起.表面分布着非常多,非常细的同心圆轨道,轨道又分为若干512byte的扇区.
扇区数据的读写是通过附着表面的磁头.磁头通过磁盘臂移动轨道,盘面围绕着主轴旋转移动.简单的磁盘驱动器如下:<br>

如图所示,要想将磁头移动到期望的扇区,往往需要两个步骤,盘面的转动和磁头的移动,因此会带来相应的延迟,旋转延迟和寻道延迟.</p>
</li>
<li>
<p><strong>IO时间</strong>
IO时间可分为三部分,一是盘面旋转时间,二是磁头寻道时间,三时IO数据传输时间.简单的公式如下:</p>
<p>
当然不同的设备往往有不同的性能.下图展示了两个设备的IO性能对比:</p>
<figure><figcaption></figcaption></figure>
</li>
<li>
<p><strong>磁盘调度策略</strong><br>
由于IO的旋转时间和寻道时间的高成本,操作系统可以通过决定IO任务的执行顺序,来减少不必要的扇区定位时间.与进程切换调度不同,进程的执行时间是无法预判的,但是IO的扇区定位时间是可以预先计算的,操作系统应该遵循最短任务时间的原则进行调度.下面介绍一些策略:</p>
<ul>
<li>
<p>SSTF:最短寻道时间优先
优先执行离磁头近的轨道的IO请求.缺点是忽略了旋转时间的影响,以及可能会引发某些IO请求的饥饿.</p>
</li>
<li>
<p>SCAN:电梯调度算法
简单的以跨越磁道的顺序反复扫描盘面磁道,当遇到IO请求时则处理IO请求,扫描过的磁道有请求时则会等下次扫描时执行,优点是实现简单,且不会引发饥饿.</p>
</li>
<li>
<p>SPTF:最短定位时间算法
综合考虑了旋转和寻道时间,优先执行二者时间所需较少的IO请求.</p>
</li>
</ul>
</li>
</ol>`,r:{minutes:2.38,words:713},y:"a",t:"37 Hard Disk Drives 磁盘驱动器"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37 Hard Disk Drives.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37 Hard Disk Drives.md",":md"]],["v-58af6e7c","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39%20Files%20and%20Directories.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
前面我们介绍了cpu和内存的虚拟化,就差对存储设备的虚拟化了. 存储设备的虚拟化是通过文件系统来实现的.文件系统主要又分为文件和目录.</p>
<ol>
<li><strong>文件</strong><br>
文件是由一组二进制数据构成的集合体.文件系统为每一个文件分配一个唯一的inumber数字,通过被称为inode的数据结构对文件信息进行管理和追踪.我们在显示所看到的文件名,其实是一种映射指向底层的inode文件.<br>
操作文件的接口如下:
<ul>
<li>
<p>创建文件
文件通过open函数创建.创建方式类似这样: int fd = open("foo", O_CREAT | O_WRONLY | O_TRUNC); open函数第一个参数为文件名,第二个参数指定创建模式.open返回的数字为文件描述符,为进程私有,通过该描述符操作底层文件.</p>
</li>
<li>
<p>读写文件
介绍读写文件接口之前先介绍open file table (打开文件表).每一个进程都会有一个文件描述符表用来记录打开的文件映射,每一个文件描述符指向系统全局共享的open file table,它里面每一项又指向底层文件并记录当前文件的已经读写到的位置.当调用读写接口时就会用到这个位置信息offset,指明从哪里读或写.同时还记录被多少个文件描述符所引用.它的示意图如下:</p>
<p>
有了open file table就能更好理解读写接口了.读写接口都是系统调用.读接口是read,写接口是write.它们都是通过操作文件描述来对文件进行读写操作.具体的参数信息略过.</p>
</li>
<li>
<p>lseek 非顺序读写文件
当我们想从文件的特定位置开始读/写数据时,可以通过lseek接口来更改open file table所对应的offset来指定位置.</p>
</li>
<li>
<p>fsync立即写入
有一点我们需要注意的是,写接口write并不是立即将数据写入磁盘.因为写数据入磁盘是代价比较大的操作.系统会先缓存数据然后统一写入磁盘,以提高性能.但有一些应用比如关系数据库,对数据的正确存储要求比较高,它们可以使用fsync立即写入接口,来确保数据的写入完成.</p>
</li>
<li>
<p>文件重命名
文件重命名通过rename(char<em>old, char</em>new)接口,它的操作是原子性的.常用的linux命令mv的底层就是调用这个接口.</p>
</li>
<li>
<p>获取文件信息
通过stat接口可以获取以下数据结构的文件相关信息.</p>
<figure><figcaption></figcaption></figure>
</li>
<li>
<p>删除文件
删除文件调用的是unlink()接口,作用是删除文件名和底层inode文件的映射.inode文件会记录有多少个文件名引用它,当引用数为0时,才会真正删除文件.</p>
</li>
<li>
<p>硬链接
可以通过ln链接接口,将文件名映射到底层inode文件.一个inode文件可以有多个文件名映射. 比如命令ln file file2, 将文件名file2映射到file指向的inode文件.</p>
</li>
</ul>
</li>
<li><strong>目录</strong><br>
目录是管理文件和子目录的集合体.文件系统也为每个目录分配唯一的inumber数字.也通过inode数据结构进行信息管理和追踪.但它里面的信息主要包括文件或目录的可视化名称和底层的inumber映射信息.
操作目录的接口如下:
<ul>
<li>创建目录
创建目录通过mkdir接口.目录创建后默认带有指向自己和上级目录的空目录文件 "." 和 ".."</li>
<li>读取目录
读取目录一般步骤是调用opendir打开目录,readdir读取目录,closedir关闭目录三个调用完成.</li>
<li>删除目录
因为目录一般都有很多文件和子目录数据,为防止误删,一般只允许删除空目录.当然使用一些命令参数可以强制删除有数据的目录.</li>
</ul>
</li>
<li><strong>挂载文件系统</strong><br>
有些系统可能有多个存储设备,为了方便管理,可以通过mount调用将设备的目录挂载到文件系统的某一目录下达到统一管理的目的.调用方式类似这样:mount /dev/sda1 /home/user 将设备分区/dev/sda1目录挂载到/home/user下,原来在/dev/sda1下的文件目录就可以通过/home/user访问了.</li>
</ol>`,r:{minutes:4.03,words:1209},y:"a",t:"39 Files and Directories 文件和目录"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39 Files and Directories.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39 Files and Directories.md",":md"]],["v-6305be1a","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40%20File%20System%20Implementation.html",{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
这一章主要介绍文件系统是通过什么组织形式,数据结构来管理文件的.</p>
<ol>
<li>
<p><strong>简单的文件系统模型</strong><br>
简单的文件系统模型如下图所示:<br>
<br>
首先可以想到的是,文件系统必须要有存储数据的地方,即上图的数据区域.为了方便管理,文件系统把存储空间分为定长的块block(为了简单,假设统一成4kb大小),文件都由这些块构成.有了这些块当然也得有管理这些块的地方,即上图的inodes区域.inodes区域占用了几个块(上图是5个).每个inode是定长(假设统一为256byte)的数据结构,负责管理一个文件的信息,包括包含多少个块,具体是哪些块,最近访问时间等信息.<br>
在给新文件分配inode和数据块时,需要知道空闲的inode和数据块信息,所以也需要有地方来记录inode和数据块block的分配情况.上图的inodes旁边的i和d数据块则分别用来标记inode和数据库的分配情况.它们都是用bitmap位图结构来标记,每一个位用于指示相应对象/块是否被分配,1表示分配.<br>
最前面的S超级块用来记录文件系统的元数据,包括有多少个inode和block,inodes的起始位置等.</p>
</li>
<li>
<p><strong>文件组织inode</strong><br>
inode负责管理详细的文件信息.inode的存储方式的概念图如下:<br>
,每一个inode都有一个编号按顺序排列.因为inode是定长的所以根据inode编号可以很容易计算除inode的具体物理地址.<br>
inode主要管理类似下面的信息:<br>

其中最主要的就是block的指针信息,它表示构成文件的具体块的位置信息.通过它我们才能定位到真实的block.</p>
</li>
<li>
<p><strong>文件的读写</strong></p>
<ul>
<li><strong>读文件</strong><br>
读文件要经历两个步骤open和read.open打开文件的意思是根据文件路径先找到文件的inode,步骤是从根目录逐层读取文件的上层目录信息直到最终找到inode文件.读取下一个目录的步骤一般分为两步,首先在当前目录的数据块找到该目录的目录名与inode的映射,然后读取该目录的inode.<br>
找到文件inode后就可以开始read了,读取每一个块会现在inode里查询该块的位置然后再读取,读取完成后还要更新inode的最新访问时间.<br>
读取/foo/bar文件3个块的流程图如下:<br>
</li>
<li><strong>写文件</strong><br>
写入文件的步骤要比读取文件的步骤多一些,因为涉及到块的分配.除了打开文件的操作,在写入新块时,会更新块位图标记使用了哪个块,还会更新inode的块位置信息.<br>
创建一个/foo/bar文件并写入3个块数据的流程类似下图:<br>
</li>
</ul>
</li>
<li>
<p><strong>文件系统的缓存</strong>
在上面介绍的文件读写过程中,文件的打开操作以及文件inode的更新操作都比较多,而这些数据都是存放在磁盘里的,因此会引发很多IO操作.为了避免过多的IO,提高性能,自然想到将数据缓存.现代系统通常将文件系统常用的块缓存,将写入缓冲若干秒.从而可批量写入减少IO次数.</p>
</li>
</ol>`,r:{minutes:3.15,words:944},y:"a",t:"40 File System Implementation 文件系统实现"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40 File System Implementation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40 File System Implementation.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-30ca943e","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/",{y:"p",t:"Py Qt5快速上手 王铭东"},["/PyQt5快速上手-王铭东/"]],["v-74bc627b","/about/",{y:"p",t:"About"},[]],["v-16e944d8","/note-book/AI-Training/",{y:"p",t:"AI Training"},[]],["v-82c79f78","/note-book/Android/",{y:"p",t:"Android"},[]],["v-5239d6c1","/note-book/CVE/",{y:"p",t:"CVE"},[]],["v-523a2eca","/note-book/DNS/",{y:"p",t:"DNS"},[]],["v-1a1918eb","/note-book/Docker/",{y:"p",t:"Docker"},[]],["v-523a9aaf","/note-book/ELK/",{y:"p",t:"ELK"},[]],["v-15a9b468","/note-book/Esxi/",{y:"p",t:"Esxi"},[]],["v-1590671a","/note-book/GRUB/",{y:"p",t:"GRUB"},[]],["v-1581bac6","/note-book/Gawk/",{y:"p",t:"Gawk"},[]],["v-a102ac20","/note-book/Gitlab/",{y:"p",t:"Gitlab"},[]],["v-2f09dd7f","/note-book/HA-LVS-Keepalived/",{y:"p",t:"HA LVS Keepalived"},[]],["v-52c4c802","/note-book/Harbor/",{y:"p",t:"Harbor"},[]],["v-91099982","/note-book/Iptables/",{y:"p",t:"Iptables"},[]],["v-cbcc4a46","/note-book/Jenkins/",{y:"p",t:"Jenkins"},[]],["v-39379285","/note-book/Kubernetes/",{y:"p",t:"Kubernetes"},[]],["v-69ad952f","/note-book/LinuxFromScratch/",{y:"p",t:"Linux From Scratch"},[]],["v-4c771b7d","/note-book/LinuxOperaSystem/",{y:"p",t:"Linux Opera System"},[]],["v-c44c55ec","/note-book/Nginx__OpenResty/",{y:"p",t:"Nginx Open Resty"},[]],["v-9affc6ce","/note-book/OpenSSH-Server/",{y:"p",t:"Open SSH Server"},[]],["v-5137394c","/note-book/OperaSystems/",{y:"p",t:"Opera Systems"},[]],["v-3e4a648b","/note-book/PhotoShop/",{y:"p",t:"Photo Shop"},[]],["v-0b15a2f0","/note-book/Physical_server/",{y:"p",t:"Physical Server"},[]],["v-6d21b581","/note-book/Portainer/",{y:"p",t:"Portainer"},[]],["v-66058961","/note-book/Prometheus/",{y:"p",t:"Prometheus"},[]],["v-219c108d","/note-book/RabbitMQ/",{y:"p",t:"Rabbit MQ"},[]],["v-48fe3284","/note-book/RouterOS/",{y:"p",t:"Router OS"},[]],["v-dd55478c","/note-book/S3-SimpleStorageService/",{y:"p",t:"S3 Simple Storage Service"},[]],["v-69060647","/note-book/Tomcat/",{y:"p",t:"Tomcat"},[]],["v-cd4c1012","/note-book/VMware/",{y:"p",t:"VMware"},[]],["v-760a078c","/note-book/WindowsOperaSystem/",{y:"p",t:"Windows Opera System"},[]],["v-e4278e96","/note-book/Zabbix/",{y:"p",t:"Zabbix"},[]],["v-343dc2b6","/note-book/ebook/",{y:"p",t:"Ebook"},[]],["v-74051d42","/note-book/goaccess/",{y:"p",t:"Goaccess"},[]],["v-e95f27e0","/note-book/memcache-redis/",{y:"p",t:"Memcache Redis"},[]],["v-114b9a82","/note-book/misc/",{y:"p",t:"Misc"},[]],["v-2d6398e4","/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/",{y:"p",t:"洋垃圾主机"},["/note-book/洋垃圾主机/"]],["v-864a1ec4","/note-book/DatabaseSystem/Etcd/",{y:"p",t:"Etcd"},[]],["v-0814f0c1","/note-book/DatabaseSystem/",{y:"p",t:"Database System"},[]],["v-272e57e4","/note-book/DatabaseSystem/MySQL/",{y:"p",t:"My SQL"},[]],["v-d8166310","/note-book/DistributedSystem/Ansible/",{y:"p",t:"Ansible"},[]],["v-4c2cc361","/note-book/DistributedSystem/",{y:"p",t:"Distributed System"},[]],["v-2f8ddbd2","/note-book/DistributedSystem/OpenStack/",{y:"p",t:"Open Stack"},[]],["v-f5fa56ce","/note-book/Gitlab/CI/",{y:"p",t:"CI"},[]],["v-7f7597ac","/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/",{y:"p",t:"ELK Kafka构建高并发分布式日志收集系统"},["/note-book/Kafka/ELK_kafka构建高并发分布式日志收集系统/"]],["v-8d1e4126","/note-book/Kafka/",{y:"p",t:"Kafka"},[]],["v-8716188c","/note-book/LinuxOperaSystem/Git/",{y:"p",t:"Git"},[]],["v-aea9109e","/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/",{y:"p",t:"Linux三剑客"},["/note-book/LinuxOperaSystem/Linux三剑客/"]],["v-75d00417","/note-book/LinuxOperaSystem/Nvidia/",{y:"p",t:"Nvidia"},[]],["v-f1e41524","/note-book/LinuxOperaSystem/Samba/",{y:"p",t:"Samba"},[]],["v-87094bfe","/note-book/LinuxOperaSystem/VNC/",{y:"p",t:"VNC"},[]],["v-8708771c","/note-book/LinuxOperaSystem/Vim/",{y:"p",t:"Vim"},[]],["v-62a96ae9","/note-book/OperaSystems/OperatingSystemPrinciple/",{y:"p",t:"Operating System Principle"},[]],["v-380a8ce0","/note-book/OperaSystems/RedHatEnterpriseLinux/",{y:"p",t:"Red Hat Enterprise Linux"},[]],["v-54dda6e8","/note-book/OperaSystems/Ubtuntu/",{y:"p",t:"Ubtuntu"},[]],["v-270d1f92","/note-book/Research_Develop/",{y:"p",t:"Research Develop"},[]],["v-202e1ae1","/note-book/Research_Develop/Python/",{y:"p",t:"Python"},[]],["v-ed5a039e","/note-book/Research_Develop/Shell/",{y:"p",t:"Shell"},[]],["v-27e35532","/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/",{y:"p",t:"广义 Virtual Private Network"},["/note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/"]],["v-ad35a506","/note-book/VirtualPrivateNetwork/",{y:"p",t:"Virtual Private Network"},[]],["v-6f76dcc4","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/",{y:"p",t:"狭义 Virtual Private Network"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/"]],["v-738568b6","/note-book/Research_Develop/C/ACLLib/",{y:"p",t:"ACLLib"},[]],["v-02fff589","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/",{y:"p",t:"Python面向对象"},["/note-book/Research_Develop/Python/python面向对象/"]],["v-0f9b9b67","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/",{y:"p",t:"1virtualization"},[]],["v-5a14fc0c","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/",{y:"p",t:"2concurrency"},[]],["v-3c38aec7","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/",{y:"p",t:"3persistent"},[]],["v-5bc93818","/category/",{y:"p",t:"分类",I:!1},[]],["v-744d024e","/tag/",{y:"p",t:"标签",I:!1},[]],["v-e52c881c","/article/",{y:"p",t:"文章",I:!1},[]],["v-154dc4c4","/star/",{y:"p",t:"星标",I:!1},[]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:!1},[]],["v-49425445","/category/%E7%AC%94%E8%AE%B0/",{y:"p",t:"笔记 分类",I:!1},["/category/笔记/"]],["v-07af4466","/category/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/",{y:"p",t:"网络安全 分类",I:!1},["/category/网络安全/"]],["v-45aa885d","/category/coredns/",{y:"p",t:"CoreDNS 分类",I:!1},[]],["v-9803cb6a","/category/iptables/",{y:"p",t:"iptables 分类",I:!1},[]],["v-a074e84e","/category/network/",{y:"p",t:"Network 分类",I:!1},[]],["v-9c48d85a","/category/linux/",{y:"p",t:"Linux 分类",I:!1},[]],["v-8489a3d2","/category/shell/",{y:"p",t:"Shell 分类",I:!1},[]],["v-31c48178","/category/%E7%A5%9E%E6%93%8D%E4%BD%9C/",{y:"p",t:"神操作 分类",I:!1},["/category/神操作/"]],["v-95b29426","/category/nginx/",{y:"p",t:"Nginx 分类",I:!1},[]],["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",t:"数据库 分类",I:!1},["/category/数据库/"]],["v-7f09fdf1","/category/virtualprivatenetwork/",{y:"p",t:"VirtualPrivateNetwork 分类",I:!1},[]]];var kp=C({name:"Vuepress",setup(){const n=$0();return()=>p(n.value)}}),y8=()=>_8.reduce((n,[e,t,s,a])=>(n.push({name:e,path:t,component:kp,meta:s},{path:t.endsWith("/")?t+"index.html":t.substring(0,t.length-5),redirect:t},...a.map(o=>({path:o===":md"?t.substring(0,t.length-5)+".md":o,redirect:t}))),n),[{name:"404",path:"/:catchAll(.*)",component:kp}]),A8=i1,B8=()=>{const n=j1({history:A8(lr("/")),routes:y8(),scrollBehavior:(e,t,s)=>s||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{var s;(e.path!==t.path||t===Fe)&&([e.meta._data]=await Promise.all([Ve.resolvePageData(e.name),(s=Ri[e.name])==null?void 0:s.__asyncLoader()]))}),n},w8=n=>{n.component("ClientOnly",Ba),n.component("Content",$i)},D8=(n,e,t)=>{const s=B(()=>e.currentRoute.value.path),a=gr(s,()=>e.currentRoute.value.meta._data),o=B(()=>Ve.resolveLayouts(t)),r=B(()=>Ve.resolveRouteLocale(wt.value.locales,s.value)),i=B(()=>Ve.resolveSiteLocaleData(wt.value,r.value)),c=B(()=>Ve.resolvePageFrontmatter(a.value)),u=B(()=>Ve.resolvePageHeadTitle(a.value,i.value)),d=B(()=>Ve.resolvePageHead(u.value,c.value,i.value)),m=B(()=>Ve.resolvePageLang(a.value,i.value)),v=B(()=>Ve.resolvePageLayout(a.value,o.value));return n.provide(V0,o),n.provide(Ti,a),n.provide(Ii,c),n.provide(M0,u),n.provide(Ci,d),n.provide(Vi,m),n.provide(Fi,v),n.provide(ir,r),n.provide(Mi,i),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>d.value},$headTitle:{get:()=>u.value},$lang:{get:()=>m.value},$page:{get:()=>a.value},$routeLocale:{get:()=>r.value},$site:{get:()=>wt.value},$siteLocale:{get:()=>i.value},$withBase:{get:()=>Bn}}),{layouts:o,pageData:a,pageFrontmatter:c,pageHead:d,pageHeadTitle:u,pageLang:m,pageLayout:v,routeLocale:r,siteData:wt,siteLocaleData:i}},P8=()=>{const n=N0(),e=pr();let t=[];const s=()=>{n.value.forEach(r=>{const i=x8(r);i&&t.push(i)})},a=()=>{const r=[];return n.value.forEach(i=>{const c=O8(i);c&&r.push(c)}),r},o=()=>{document.documentElement.lang=e.value;const r=a();t.forEach((i,c)=>{const u=r.findIndex(d=>i.isEqualNode(d));u===-1?(i.remove(),delete t[c]):r.splice(u,1)}),r.forEach(i=>document.head.appendChild(i)),t=[...t.filter(i=>!!i),...r]};he(H0,o),dn(()=>{s(),un(n,o,{immediate:!1})})},x8=([n,e,t=""])=>{const s=Object.entries(e).map(([i,c])=>fn(c)?`[${i}=${JSON.stringify(c)}]`:c===!0?`[${i}]`:"").join(""),a=`head > ${n}${s}`;return Array.from(document.querySelectorAll(a)).find(i=>i.innerText===t)||null},O8=([n,e,t])=>{if(!fn(n))return null;const s=document.createElement(n);return Me(e)&&Object.entries(e).forEach(([a,o])=>{fn(o)?s.setAttribute(a,o):o===!0&&s.setAttribute(a,"")}),fn(t)&&s.appendChild(document.createTextNode(t)),s},L8=A0,S8=async()=>{var t;const n=L8({name:"VuepressApp",setup(){var s;P8();for(const a of Js)(s=a.setup)==null||s.call(a);return()=>[p(Ji),...Js.flatMap(({rootComponents:a=[]})=>a.map(o=>p(o)))]}}),e=B8();w8(n),D8(n,e,Js);for(const s of Js)await((t=s.enhance)==null?void 0:t.call(s,{app:n,router:e,siteData:wt}));return n.use(e),{app:n,router:e}};S8().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{qn as $,Xk as A,Pn as B,dn as C,Et as D,fn as E,q8 as F,Me as G,Uc as H,hc as I,Gm as J,Qp as K,he as L,ln as M,F8 as N,Z8 as O,z8 as P,Ho as Q,Q8 as R,Cn as S,R8 as T,Go as U,C8 as V,H8 as W,ge as X,vi as Y,$8 as Z,l as _,Tn as a,V8 as a0,st as a1,G8 as a2,K8 as a3,U8 as a4,T8 as a5,I8 as a6,fi as b,N8 as c,S8 as createVueApp,M8 as d,bi as e,C as f,Zn as g,Ge as h,Re as i,xr as j,Wt as k,W as l,B as m,wn as n,mi as o,un as p,p as q,oe as r,nf as s,qt as t,W8 as u,tf as v,Ud as w,$c as x,ef as y,Yk as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-_o2_6jAf.js","assets/plugin-vue_export-helper-x3n3nnut.js","assets/001-PyQt介绍与安装.html-zs-7Cx0g.js","assets/002-PyQt基本UI.html-AkQW3nd0.js","assets/003-布局.html-1oE6ZFFm.js","assets/004-布局2.html-yzTAL9R6.js","assets/005-窗口.html-UgyCio3U.js","assets/006-信号与槽.html-MVQR8crq.js","assets/007-Qt Designer.html-02PN3Hox.js","assets/008-PyQt多线程.html-e-XAdOND.js","assets/009-打包为可执行程序.html-lNzl97zW.js","assets/friend.html-wPysDfSU.js","assets/me.html-p8ei9kum.js","assets/index.html-xGjQ9Svp.js","assets/杀不死的进程.html-ut90VTGJ.js","assets/index.html-H9FRtc0G.js","assets/WARP帮助页面.html-0agF6UQp.js","assets/Windows_WSL2安装nvidia-cuda驱动.html-q63fN9rw.js","assets/torch 环境.html-4uh2Obj_.js","assets/英伟达开源驱动和闭源驱动冲突问题.html-VxaB7ayA.js","assets/Ubuntu命令行安装Android SDK.html-34LqLTrb.js","assets/index.html-xucXAU15.js","assets/Snapper玩转btrfs文件系统.html-VjsSV4eR.js","assets/btrfs的使用.html-eE34H3S7.js","assets/some device missing方法.html-UvxGD_UD.js","assets/CVE-2024-21626利用场景.html-fhadXnjI.js","assets/index.html-dHPpqfAu.js","assets/ext-plugin-redis.html-P0q1CkAp.js","assets/理解CoreDNS.html-mJrvxzTH.js","assets/Bind9的使用.html-MgsDx9Ea.js","assets/NamedManager.html-s6HgD8O-.js","assets/Docker 2375攻击和解决方案.html-CVNHr1Wc.js","assets/Docker 的daemon.json.html--oJu3cyI.js","assets/Docker不死进程.html-ouqCSchQ.js","assets/Docker日志选项配置上去对已运行容器不生效.html-LaQZmw0V.js","assets/Docker环境清理.html-tm09i_VF.js","assets/Docker逃逸漏洞案例.html-_kqAMExo.js","assets/RockyLinux安装Docker.html-MRnNtBJB.js","assets/docker pull push.html-6v1pB8JA.js","assets/docker run 命令所有的选项.html-JVAW6HRs.js","assets/docker学习笔记-PDF.html-WgSpogvJ.js","assets/docker容器集合.html-5gouwxlG.js","assets/docker报错bridge-nf-call-iptables内核修整.html-zjuPlg28.js","assets/一次构建出x86及arm镜像.html-ARqCqnPG.js","assets/一键运行web版本vscode.html-BkpEdzKQ.js","assets/只使用操作系统创建容器-扫描.html-CsOnrqrl.js","assets/在Dockerfile里调整时区.html-lraS-nTA.js","assets/手撕Docker容器命令行版.html-bbOeG--B.js","assets/手撕docker容器.html-bmhPJ64q.js","assets/手撕docker网络.html-3SuGeBcH.js","assets/把容器做成物理机.html-Fmq0c5yk.js","assets/更改docker服务网段分配地址.html-E7BfO22q.js","assets/跨宿主机通信overlay和macvlay.html-WT8YcXLw.js","assets/EFK8.4.3部署.html-9-DALKxi.js","assets/ELK.html-G8AsOFPx.js","assets/ESXI中的网络.html--RSgcarn.js","assets/配置案例.html-WV9rlyvL.js","assets/AWK案例入门看这一篇就够了.html-iDUPFqlZ.js","assets/Shell文本处理三剑客-AWK.html-_8cWBQf9.js","assets/awk 入门教程.html-TDXgEpq1.js","assets/awk 学习  高级输出  02.html-F4AvRMXL.js","assets/awk语言学习笔记  01.html-Tj_CgXoq.js","assets/匹配特定字符并输出其后的若干行.html-zJMkphLK.js","assets/Git 的代理配置.html-cXHsY5Gb.js","assets/Git分支管理合并与删除命令.html-MEQmXxF5.js","assets/Git识别项目的语言类型，及文件占比.html-0rR2QxN4.js","assets/Git高级操作和练习网站.html-DutKu4ot.js","assets/index.html-nIHspFX-.js","assets/git 拉取全部远程分支.html-hTd6KqRo.js","assets/git基础命令.html-yhebpX3-.js","assets/git更新远程分支.html-15yUE7S9.js","assets/git统计项目代码行数.html-UGAHZsYn.js","assets/git远程仓库回退到指定版本.html-PDdtG9rP.js","assets/命令行显示gitmoji.html-9QhqVxSo.js","assets/Gitlab二开从而自定义权限系统.html-D7ngAzVF.js","assets/Gitlab备份和恢复.html--tJiMGLR.js","assets/Gitlab安装部署.html-q22Guejp.js","assets/Gitlab的一些问题.html-3YR3gAA1.js","assets/Gitlab配置邮件服务器.html-zXDI1aeI.js","assets/ha-lvs-keepalived.html-VgmiBYcd.js","assets/haproxy.html-Z_u8U_wE.js","assets/keepalived.html-4N02mTH_.js","assets/Harbor离线搭建.html--sK8bRWE.js","assets/Linux内核子系统 - 网络 netfilter.html-r9zo3G3Q.js","assets/iptables拦截内网奇虎软件病毒上报.html-yLnpmL0U.js","assets/iptables详解-朱光印.html-VDYXRXi-.js","assets/linux下IPTABLES配置详解.html-3DOwhqcB.js","assets/内核参数ip_forward.html-jniVJqP4.js","assets/jenkins备份.html-l1acG2q4.js","assets/jenkins构建持续化集成平台.html-011xsa9d.js","assets/jenkins的docker部署文档.html-UQ0AmfSO.js","assets/修改Jenkins插件为国内源.html-Heow2XWe.js","assets/Kubernetes Api Endpoint.html-TpmsD1y-.js","assets/Kubernetes Make Prometheus_Grafana.html-nLiHn1yN.js","assets/Kubernetes Service Account如何生成Token.html-h4r_Z9Nr.js","assets/Kubernetes crictl管理命令详解.html-ziS5cKJh.js","assets/Kubernetes最小高可用架构图.html-N_xTyFUm.js","assets/Kubernetes有哪些组件.html-2iI6h-jZ.js","assets/Kubernetes的NetworkPlicy.html-Gaz_rmCR.js","assets/NameSpace 资源隔离隔离了什么.html-mTdC5v2R.js","assets/Request和Limit.html-5r82sbcV.js","assets/SSL证书签发.html-WYxudHcY.js","assets/crictl登录dockerhub.html-0fLznrzi.js","assets/etcd 二进制三节点集群部署.html-d2cjfG-o.js","assets/k8s删除Terminating状态ns.html-31v1G8XC.js","assets/kubeadm部署Kubernetes 1.24步骤.html-GgLhDJ6-.js","assets/kubernetes进阶（一）kubectl工具使用详解.html-Tyn5bkD3.js","assets/kubernetes进阶（三）服务发现-coredns.html-E2OkRA8i.js","assets/kubernetes进阶（二）核心网络插件Flannel.html-rwZrjAep.js","assets/kubernetes进阶（五）dashboard--WEB管理.html-xwKbeNhH.js","assets/kubernetes进阶（六）k8s平滑升级.html-kf-azY0g.js","assets/kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-HI4OoUFq.js","assets/一次kubeadm添加节点出现etcd检查错误.html-mr40ij_B.js","assets/二进制安装kubernetes（七） 部署知识点总结.html-VFsFAdYR.js","assets/二进制安装kubernetes（三） kube-controller-manager组件安装.html-NqZUiB55.js","assets/二进制安装kubernetes（二） kube-apiserver组件安装.html-FxLXSDm9.js","assets/二进制安装kubernetes（五） kubelet组件安装.html-ROMnADoG.js","assets/二进制安装kubernetes（六） kube-proxy组件安装.html-1WnSAGbz.js","assets/二进制安装kubernetes（四） kube-scheduler组件安装.html-PjHfhAkb.js","assets/二进制部署Kubernetes.html-nEi9KIQS.js","assets/什么是Label和Label选择器.html-DGmtVs9d.js","assets/什么是Name和NameSpace.html-XHE9G4DI.js","assets/什么是Pod和Pod控制器.html-HAwlCaPf.js","assets/什么是Service和Ingress.html-y4Hw2Lbz.js","assets/使用 vmagent 代替 Prometheus 采集监控指标.html-Vb1OVHOR.js","assets/常用优化.html-yw1ppGL8.js","assets/记一次异常断电造成kubernetes故障.html-s9kQRaCE.js","assets/LFS-NoteBook.html-D7NpTc05.js","assets/Linux备份为liveOS.html-30W6ssJM.js","assets/bash利用扩展字符集实现rm.html-dgtx42hf.js","assets/grub2手动命令引导教程.html-cIVObk54.js","assets/shell脚本加密解密工具shc.html-ZDCS08qS.js","assets/shell通过函数隐藏命令.html-6W2BfAPd.js","assets/ssh 设置反向代理.html-LK4Hh0xW.js","assets/ssh把远程端口映射到本地.html-AAATKb_C.js","assets/tcpdump抓包命令.html-MSwGKDJw.js","assets/命令创建虚拟镜像文件.html-Z3taSWX4.js","assets/按电源软关机要等待60秒设置更短的时间.html-esYypPS3.js","assets/用shell生成包含大写、小写、数字、特殊字符的随机字符串.html-K-EbQCUR.js","assets/让某个命令不输出.html-PmRxGHtR.js","assets/Nginx变量大全.html--mplA2Op.js","assets/Nginx正向代理.html-5jSrUMoQ.js","assets/Nginx正向代理支持https.html-7HP-wDoV.js","assets/Nginx正向代理高并发.html-43pl2Yf1.js","assets/Nginx的url过长导致fastcgi协议崩溃.html-wQsxI9wD.js","assets/Nginx的负载均衡和故障转移.html-ZjVbB5C-.js","assets/apt安装OpenResty教程.html-QjFIz-Ah.js","assets/nginx-plus-module-lua.html-OMBGcbBw.js","assets/nginx01.html-CdIZTcZ4.js","assets/nginx02.html-k14RAr8S.js","assets/nginx03.html-ZLpdKnhk.js","assets/nginx单机百万并发.html-guWmCjVN.js","assets/nginx配置示例.html-g1CIO42y.js","assets/ngx_stream_ssl_preread_module.html-bwHZarKa.js","assets/ssh日志记录登陆密码.html-Q0gmIyNQ.js","assets/CPU和内存的架构 UMA和NUMA.html-Sd7ZPPR6.js","assets/Journal日志服务详解.html-0oM22rBk.js","assets/Linux下的ASLR（PIE）内存保护机制和绕过.html-x6NF9feP.js","assets/Linux升级内核的两种方法.html-WeNKp3CR.js","assets/Linux排查哪个进程和IP在占用网速.html-G61dCd3H.js","assets/Linux普通用户免密码sudo.html-7oR1Kflz.js","assets/Linux网络内核参数优化秘籍.html-Rt2oCgc7.js","assets/Linux虚拟网络设备之bridge.html-Iq4Jt28-.js","assets/Shell快捷键.html-W7mlcYMI.js","assets/date命令.html-Wh-wQg0f.js","assets/grep命令.html-oOilPw4J.js","assets/ip命令.html-XSbBF04r.js","assets/macvlan详解.html-UEIoWlws.js","assets/proc-sysrq-trigger详解.html-DYKusONa.js","assets/proc详解.html-RYoZ3u64.js","assets/sed.html-vIvI-vT9.js","assets/sysstat Linux状态工具包.html-VoRmrX45.js","assets/使用curl实现邮件发送.html-mmap2pIG.js","assets/使用dev下的tcp-udp实现socket.html-4IN4QlUY.js","assets/备份Linux系统.html-qZm-T_X9.js","assets/大量使用swap导致无法切换.html-3t2TbY1A.js","assets/常见乱码产生原因.html-LFoqPmgi.js","assets/更换系统和命令行语言.html-V_JC1fkv.js","assets/环境变量PATH.html-eqeQBMJE.js","assets/进程.html-BGCtj7ex.js","assets/逻辑卷无法删除.html-a_GcIJBK.js","assets/ps如何去水印的4个方法.html-xclLBJzb.js","assets/Huawei x288系列风扇转速调速.html-LEeqeJ9Q.js","assets/Portainer 单机部署.html-31LVwS2f.js","assets/Prometheus监控Windows主机.html-vj5NPMVq.js","assets/rabbitmq.html-nznMHFSo.js","assets/Azure刷写ROS教程.html-E20Hrx1a.js","assets/RouterOS利用（L2TP）实现多方异地组网.html-mCPlj8IK.js","assets/用ros路由作为中转教程.html-_naxQibz.js","assets/MiniO_Docker_Deploy.html-mMVoC_3m.js","assets/Minio挂载到nfs不成功.html-T6kvg7yQ.js","assets/tomcat.html-o776JiRz.js","assets/index.html-IPcyOmfS.js","assets/traefik作为docker边缘路由.html-yicxPWFK.js","assets/各个版本的激活密钥.html-hh0EmKge.js","assets/虚拟化物理机.html-lLPSH_Rb.js","assets/PowerShell 打印环境变量.html-k2yAe3tb.js","assets/PowerShell 操作系统禁止运行脚本.html-9J1HDd3o.js","assets/Windows系统更改迁移用户目录.html-c-fTunrh.js","assets/Zabbix-Agent主动模式自动注册.html-1cMqln9T.js","assets/Zabbix-Agent被动模式自动注册.html-7YExrL7K.js","assets/zabbix-docker.html-79_MyP6M.js","assets/zabbix.html-gZkjzp0V.js","assets/zabbix的VMwareGuest补充缺陷.html-nxZW_kiX.js","assets/ebook.html-zPo9onNn.js","assets/goaccess给ftp生成分析图.html-kZvD_rKw.js","assets/memcache-redis.html-zL4u_q1T.js","assets/中国建设银行u盾使用教程.html-slFt3qLt.js","assets/CPU鸡血BIOS.html-OZL7JsQB.js","assets/GPU矿卡体质检测.html-cxPFlhqD.js","assets/etcd安装etcdkeeper.html-Q6xy1f9f.js","assets/国内源.html-OsBcplIo.js","assets/查看Mysql数据量大小.html-cIHYY9v5.js","assets/Centos7.x 安装Python3.9.7  Ansible4.5.html-ZYLEGFPc.js","assets/ansible自动化运维.html-DOn9MH1E.js","assets/HA_Deploy.html-jY-6Ls0n.js","assets/JumperServerDockerDeploy.html-wlO6BaGM.js","assets/index.html-UOQpjPKE.js","assets/OpenStack-Queens版搭建详解.html-vYdLfjNw.js","assets/gitlab ci 编写.html-MPlyBkaj.js","assets/gitlab ci 部署.html-EPshsJg9.js","assets/部署Kubernetes类型的gitlab-runner.html-bxTDlcBu.js","assets/elk_kfaka.html-JF7y1v4Q.js","assets/Centos7 yum install git2.x 较新版本.html-ynO_3hPl.js","assets/AWK中的字符串操作函数.html-qkSSNTlD.js","assets/安装Nvidia Runtime.html-Oxd4yL1-.js","assets/安装Nvidia驱动.html-LjLvpQOj.js","assets/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-pNZH9Gfe.js","assets/Linux挂载cifs文件系统.html-yaUpwO-3.js","assets/Samba共享文件时文件属性nobody.html-6RSxbmeL.js","assets/Samba配置举例.html-vlDt7xEU.js","assets/Ubuntu 20.04 安装VNC Server.html-pY9KLS_d.js","assets/vi编辑器.html-HkyrmFuT.js","assets/index.html-Ia36306t.js","assets/CPU的虚拟化.html-yIiH9EfM.js","assets/操作系统介绍.html-t-iNGJbw.js","assets/CentOS7配置支持AUFS文件系统.html-2nZ5ZHmi.js","assets/CentOS_7用户账户配置.html-OylYp4kP.js","assets/Centos8重启网卡的方法.html-yXVjurAN.js","assets/firewalld配置.html-VTjiWiNS.js","assets/制作CenOS操作系统.html-yjgvOJZq.js","assets/配置SSH免密码验证.html-DdgIyvQQ.js","assets/Linux 终端命令格式.html-WdJX211_.js","assets/Ubuntu_20.04_Server使用命令行设置IP地址.html-Fw2uRIH6.js","assets/Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html-7xAxIsRU.js","assets/Ubuntu更改为24小时制.html-M1iE90mY.js","assets/Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.html-CpPtOaOt.js","assets/Ubuntu软件包文件管理.html-U8ncTEqh.js","assets/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-BdgA1408.js","assets/apt查询某个软件有哪些版本.html-I5mjVZhs.js","assets/linux关闭地址空间随机化（ASLR）.html-_ORMQJd1.js","assets/ubuntu14.04 忘记了普通用户密码和root密码.html-oc5r79wL.js","assets/ubuntu安装nfs.html-Hz9p-d77.js","assets/ubuntu查看intel-GPU使用情况.html-ZNUlGLWH.js","assets/index.html-bOkKBo-f.js","assets/数据结构与算法哔哩哔哩比特就业课.html-kKQhXQA0.js","assets/C语言volatile关键字详解.html-JbYB1hTD.js","assets/index.html-uWSOCLxr.js","assets/二分查找.html-nSKKixYw.js","assets/FastAPI-Python高性能web框架.html-WfdA6pzd.js","assets/PyInstaller带静态依赖文件打包教程.html-cln3NUqn.js","assets/Python之正则表达式细讲.html-Q2Jw9RDK.js","assets/Python代码藏毒.html-QcIu4iW4.js","assets/Python数据切片例子.html-xUXZ_05V.js","assets/Python数据格式化format.html-VdJ280R7.js","assets/python re.Match object的说明.html-4wdL37fs.js","assets/python re.html-5TdBuF-v.js","assets/新版VSCode中Python设置自动补全函数括号.html-L0dt7SJG.js","assets/shell脚本bad substitution.html-oJX1nvbZ.js","assets/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-zCG3sZQt.js","assets/Docker一键部署Clash服务与管理面板.html-wamk-EWf.js","assets/cfw-cdn-ssl-ws-tls.html-lrzV_iug.js","assets/优秀的落地框架 XrayR.html-6FfVE4oo.js","assets/连接WARP为服务器添加IPv4IPv6网络.html-vrmqVb8V.js","assets/index.html-0YnwShQ3.js","assets/index.html-lzQbi7qO.js","assets/ACLLib.html-S6RTZSQI.js","assets/01_面向对象（OOP）基本概念.html-Nldua47V.js","assets/02_类和对象.html-LURzSHSf.js","assets/03_面相对象基础语法.html-gjCOQWay.js","assets/04_面向对象封装案例.html-Nx3HkX59.js","assets/05_面向对象封装案例 II.html-VR8igsMJ.js","assets/06_私有属性和私有方法.html-46R-5tiJ.js","assets/07_单例.html-cDvOw2N0.js","assets/08_多态.html-GeBlEZNE.js","assets/09_继承.html-hv7N4VLU.js","assets/10_类属性和类方法.html-jPSHkgjH.js","assets/11_eval函数.html-RFkNrgyz.js","assets/12_模块和包.html-V4G_Qfpl.js","assets/13_文件.html-EhaQtHOk.js","assets/14_异常.html-6R8EiQeC.js","assets/10 Multi-CPU Scheduling.html-5WWyQca-.js","assets/13 Address Spaces.html-mDJxpufT.js","assets/14 Memory API.html-CJshqsVi.js","assets/15 Address Translation.html-0S4-2qYN.js","assets/16 Segmentation.html-Piz_ap0B.js","assets/17 Free Space Management.html-KP3FrbLn.js","assets/18 Introduction to Paging.html-zlWV_3Dp.js","assets/19 Translation Lookaside Buffers.html--qTCZCK5.js","assets/20 Advanced Page Tables.html-KDBT1peB.js","assets/21 Swapping Mechanisms.html-oKcngZnL.js","assets/22 Swapping Policies.html-tQk2PIG5.js","assets/23 Complete VM Systems.html-GE0nx5-T.js","assets/4 Processes.html-ru8ppAHA.js","assets/5 Process API.html-qtcg1BoQ.js","assets/6 Direct Execution.html-FbSVi7FB.js","assets/7 CPU Scheduling.html-BmAbtkte.js","assets/8 Multi-level Feedback.html-uO0X8KlG.js","assets/26 Concurrency and Threads.html-XpQfnjiX.js","assets/27 Thread API.html-g_KXqV34.js","assets/28 Locks.html-8Enoa_VA.js","assets/29 Locked Data Structures.html-M3jXTTkH.js","assets/30 Condition Variables.html-KMSEIJal.js","assets/31 Semaphores.html-3Roziue_.js","assets/32 Concurrency Bugs.html-_U2OIQLo.js","assets/33 Event-based Concurrency.html-j654RrQV.js","assets/36 IO Devices.html-IMRooMT1.js","assets/37 Hard Disk Drives.html-4DXxO1qO.js","assets/39 Files and Directories.html-X9ztpRDA.js","assets/40 File System Implementation.html-BfQEJ3FP.js","assets/404.html-Ma9ypHOS.js","assets/index.html-vb19-sa5.js","assets/index.html-5z0NCr_p.js","assets/index.html-Qotcez4f.js","assets/index.html-5oExVEXB.js","assets/index.html-jmQADpD5.js","assets/index.html-Awt8YtDr.js","assets/index.html-hhFf2Ve5.js","assets/index.html-NHuDqHHJ.js","assets/index.html-jeh2L6qs.js","assets/index.html-jfBk7R00.js","assets/index.html-JrogUEcC.js","assets/index.html-h6ie9Bb1.js","assets/index.html-uEGxkYbp.js","assets/index.html-ccTqEDWq.js","assets/index.html-JnCICycq.js","assets/index.html-SdlzS6dd.js","assets/index.html-5d9cukUF.js","assets/index.html-TNvBqQDD.js","assets/index.html-W_CT0ia8.js","assets/index.html-_anvoUmI.js","assets/index.html-TN5s84ZJ.js","assets/index.html-6ZjMcZbS.js","assets/index.html-GMJAGWHm.js","assets/index.html-v_tsYZ_0.js","assets/index.html-60USnaJB.js","assets/index.html-Lv1DOIYY.js","assets/index.html-ksKGUYGn.js","assets/index.html-T1AqHaov.js","assets/index.html-2QhFLrMZ.js","assets/index.html-ONe-SaNF.js","assets/index.html-jQbqV2dC.js","assets/index.html-ywnin2Tv.js","assets/index.html-E_h_ztf6.js","assets/index.html-DfjU_zSI.js","assets/index.html-Ccyk0Bab.js","assets/index.html-6diHrUBt.js","assets/index.html-5LMmM30y.js","assets/index.html-NthzVIVY.js","assets/index.html-DMpUaYLb.js","assets/index.html-pZYduLws.js","assets/index.html-qPpuURoj.js","assets/index.html--l-MWgxs.js","assets/index.html-w9TzkKUC.js","assets/index.html-TfCyvh8A.js","assets/index.html-ZSd6HvNw.js","assets/index.html-rA6jkK4O.js","assets/index.html-rYhhWaXM.js","assets/index.html-nYbF2pfe.js","assets/index.html--kZjToUK.js","assets/index.html-MpAV0sLm.js","assets/index.html-4b1lWaFq.js","assets/index.html-WRsYBh1N.js","assets/index.html-0933gw6M.js","assets/index.html-kgMQ5RVG.js","assets/index.html-vKch8o85.js","assets/index.html-m45DQd1t.js","assets/index.html-24rclVUt.js","assets/index.html-rMkvs6Ir.js","assets/index.html-d47ovTFU.js","assets/index.html-Rf8ACC7_.js","assets/index.html-h9pkS2Wi.js","assets/index.html-pAG2Dnm9.js","assets/index.html-6yvzPoVX.js","assets/index.html-VYGKsLj2.js","assets/index.html-KwHlniRy.js","assets/index.html-LOpk7ev3.js","assets/index.html-NqmuaJB2.js","assets/index.html-pAr5H6mI.js","assets/index.html-HCaM-7FE.js","assets/index.html-rkYOsGZ3.js","assets/index.html-tJOzE_ad.js","assets/index.html-3tftx5RV.js","assets/index.html-QGcTM0Wi.js","assets/index.html-hZyierb0.js","assets/index.html-MioEACjn.js","assets/index.html-wj_a1Bga.js","assets/index.html-ljG2f3yi.js","assets/index.html-BlapzadA.js","assets/index.html-W80lARs3.js","assets/index.html-YPqtJ5nt.js","assets/index.html-f4dhnqBr.js","assets/index.html-kV4Lv7_X.js","assets/index.html-S-337kdB.js","assets/index-i1JwLi28.js","assets/install--lHbKx-E.js","assets/vue-repl-MFKaSZMe.js","assets/utils-obz1_5fQ-XOQqDqQW.js","assets/codemirror-editor-GqpnmbJ1.js","assets/index-EhVijJ_X.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
