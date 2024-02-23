/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(n,e){const t=new Set(n.split(","));return e?s=>t.has(s.toLowerCase()):s=>t.has(s)}const xn={},Ot=[],ue=()=>{},ad=()=>!1,Ls=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qo=n=>n.startsWith("onUpdate:"),In=Object.assign,Qo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},od=Object.prototype.hasOwnProperty,dn=(n,e)=>od.call(n,e),J=Array.isArray,Rt=n=>Os(n)==="[object Map]",Zt=n=>Os(n)==="[object Set]",tl=n=>Os(n)==="[object Date]",sn=n=>typeof n=="function",Nn=n=>typeof n=="string",lt=n=>typeof n=="symbol",_n=n=>n!==null&&typeof n=="object",Pp=n=>(_n(n)||sn(n))&&sn(n.then)&&sn(n.catch),Lp=Object.prototype.toString,Os=n=>Lp.call(n),rd=n=>Os(n).slice(8,-1),Op=n=>Os(n)==="[object Object]",Zo=n=>Nn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tt=Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ld=/-(\w)/g,oe=wa(n=>n.replace(ld,(e,t)=>t?t.toUpperCase():"")),pd=/\B([A-Z])/g,ut=wa(n=>n.replace(pd,"-$1").toLowerCase()),Rs=wa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ka=wa(n=>n?`on${Rs(n)}`:""),Re=(n,e)=>!Object.is(n,e),ca=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},da=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},fs=n=>{const e=parseFloat(n);return isNaN(e)?n:e},id=n=>{const e=Nn(n)?Number(n):NaN;return isNaN(e)?n:e};let sl;const Rp=()=>sl||(sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yo(n){if(J(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],a=Nn(s)?md(s):Yo(s);if(a)for(const o in a)e[o]=a[o]}return e}else if(Nn(n)||_n(n))return n}const cd=/;(?![^(]*\))/g,ud=/:([^]+)/,dd=/\/\*[^]*?\*\//g;function md(n){const e={};return n.replace(dd,"").split(cd).forEach(t=>{if(t){const s=t.split(ud);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jo(n){let e="";if(Nn(n))e=n;else if(J(n))for(let t=0;t<n.length;t++){const s=Jo(n[t]);s&&(e+=s+" ")}else if(_n(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const hd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ed=Wo(hd);function Tp(n){return!!n||n===""}function kd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=_t(n[s],e[s]);return t}function _t(n,e){if(n===e)return!0;let t=tl(n),s=tl(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=lt(n),s=lt(e),t||s)return n===e;if(t=J(n),s=J(e),t||s)return t&&s?kd(n,e):!1;if(t=_n(n),s=_n(e),t||s){if(!t||!s)return!1;const a=Object.keys(n).length,o=Object.keys(e).length;if(a!==o)return!1;for(const r in n){const l=n.hasOwnProperty(r),c=e.hasOwnProperty(r);if(l&&!c||!l&&c||!_t(n[r],e[r]))return!1}}return String(n)===String(e)}function Xo(n,e){return n.findIndex(t=>_t(t,e))}const pf=n=>Nn(n)?n:n==null?"":J(n)||_n(n)&&(n.toString===Lp||!sn(n.toString))?JSON.stringify(n,Fp,2):String(n),Fp=(n,e)=>e&&e.__v_isRef?Fp(n,e.value):Rt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,a],o)=>(t[Wa(s,o)+" =>"]=a,t),{})}:Zt(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wa(t))}:lt(e)?Wa(e):_n(e)&&!J(e)&&!Op(e)?String(e):e,Wa=(n,e="")=>{var t;return lt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ee;class fd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ee,!e&&ee&&(this.index=(ee.scopes||(ee.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=ee;try{return ee=this,e()}finally{ee=t}}}on(){ee=this}off(){ee=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function gd(n,e=ee){e&&e.active&&e.effects.push(n)}function Ip(){return ee}function bd(n){ee&&ee.cleanups.push(n)}let At;class nr{constructor(e,t,s,a){this.fn=e,this.trigger=t,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,gd(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,wt();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(vd(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=at,t=At;try{return at=!0,At=this,this._runnings++,al(this),this.fn()}finally{ol(this),this._runnings--,At=t,at=e}}stop(){var e;this.active&&(al(this),ol(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function vd(n){return n.value}function al(n){n._trackId++,n._depsLength=0}function ol(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Np(n.deps[e],n);n.deps.length=n._depsLength}}function Np(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let at=!0,Ao=0;const Vp=[];function wt(){Vp.push(at),at=!1}function xt(){const n=Vp.pop();at=n===void 0?!0:n}function er(){Ao++}function tr(){for(Ao--;!Ao&&yo.length;)yo.shift()()}function Mp(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const s=n.deps[n._depsLength];s!==e?(s&&Np(s,n),n.deps[n._depsLength++]=e):n._depsLength++}}const yo=[];function $p(n,e,t){er();for(const s of n.keys()){let a;s._dirtyLevel<e&&(a??(a=n.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(a??(a=n.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&yo.push(s.scheduler)))}tr()}const Up=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},ma=new WeakMap,yt=Symbol(""),_o=Symbol("");function Jn(n,e,t){if(at&&At){let s=ma.get(n);s||ma.set(n,s=new Map);let a=s.get(t);a||s.set(t,a=Up(()=>s.delete(t))),Mp(At,a)}}function Ue(n,e,t,s,a,o){const r=ma.get(n);if(!r)return;let l=[];if(e==="clear")l=[...r.values()];else if(t==="length"&&J(n)){const c=Number(s);r.forEach((i,u)=>{(u==="length"||!lt(u)&&u>=c)&&l.push(i)})}else switch(t!==void 0&&l.push(r.get(t)),e){case"add":J(n)?Zo(t)&&l.push(r.get("length")):(l.push(r.get(yt)),Rt(n)&&l.push(r.get(_o)));break;case"delete":J(n)||(l.push(r.get(yt)),Rt(n)&&l.push(r.get(_o)));break;case"set":Rt(n)&&l.push(r.get(yt));break}er();for(const c of l)c&&$p(c,4);tr()}function Ad(n,e){var t;return(t=ma.get(n))==null?void 0:t.get(e)}const yd=Wo("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(lt)),rl=_d();function _d(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const s=pn(this);for(let o=0,r=this.length;o<r;o++)Jn(s,"get",o+"");const a=s[e](...t);return a===-1||a===!1?s[e](...t.map(pn)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){wt(),er();const s=pn(this)[e].apply(this,t);return tr(),xt(),s}}),n}function Bd(n){const e=pn(this);return Jn(e,"has",n),e.hasOwnProperty(n)}class zp{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,s){const a=this._isReadonly,o=this._shallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(a?o?Nd:Wp:o?Kp:jp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=J(e);if(!a){if(r&&dn(rl,t))return Reflect.get(rl,t,s);if(t==="hasOwnProperty")return Bd}const l=Reflect.get(e,t,s);return(lt(t)?Hp.has(t):yd(t))||(a||Jn(e,"get",t),o)?l:Vn(l)?r&&Zo(t)?l:l.value:_n(l)?a?He(l):Ts(l):l}}class Gp extends zp{constructor(e=!1){super(!1,e)}set(e,t,s,a){let o=e[t];if(!this._shallow){const c=Ht(o);if(!ha(s)&&!Ht(s)&&(o=pn(o),s=pn(s)),!J(e)&&Vn(o)&&!Vn(s))return c?!1:(o.value=s,!0)}const r=J(e)&&Zo(t)?Number(t)<e.length:dn(e,t),l=Reflect.set(e,t,s,a);return e===pn(a)&&(r?Re(s,o)&&Ue(e,"set",t,s):Ue(e,"add",t,s)),l}deleteProperty(e,t){const s=dn(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&s&&Ue(e,"delete",t,void 0),a}has(e,t){const s=Reflect.has(e,t);return(!lt(t)||!Hp.has(t))&&Jn(e,"has",t),s}ownKeys(e){return Jn(e,"iterate",J(e)?"length":yt),Reflect.ownKeys(e)}}class wd extends zp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xd=new Gp,Dd=new wd,Cd=new Gp(!0),sr=n=>n,xa=n=>Reflect.getPrototypeOf(n);function qs(n,e,t=!1,s=!1){n=n.__v_raw;const a=pn(n),o=pn(e);t||(Re(e,o)&&Jn(a,"get",e),Jn(a,"get",o));const{has:r}=xa(a),l=s?sr:t?rr:gs;if(r.call(a,e))return l(n.get(e));if(r.call(a,o))return l(n.get(o));n!==a&&n.get(e)}function Qs(n,e=!1){const t=this.__v_raw,s=pn(t),a=pn(n);return e||(Re(n,a)&&Jn(s,"has",n),Jn(s,"has",a)),n===a?t.has(n):t.has(n)||t.has(a)}function Zs(n,e=!1){return n=n.__v_raw,!e&&Jn(pn(n),"iterate",yt),Reflect.get(n,"size",n)}function ll(n){n=pn(n);const e=pn(this);return xa(e).has.call(e,n)||(e.add(n),Ue(e,"add",n,n)),this}function pl(n,e){e=pn(e);const t=pn(this),{has:s,get:a}=xa(t);let o=s.call(t,n);o||(n=pn(n),o=s.call(t,n));const r=a.call(t,n);return t.set(n,e),o?Re(e,r)&&Ue(t,"set",n,e):Ue(t,"add",n,e),this}function il(n){const e=pn(this),{has:t,get:s}=xa(e);let a=t.call(e,n);a||(n=pn(n),a=t.call(e,n)),s&&s.call(e,n);const o=e.delete(n);return a&&Ue(e,"delete",n,void 0),o}function cl(){const n=pn(this),e=n.size!==0,t=n.clear();return e&&Ue(n,"clear",void 0,void 0),t}function Ys(n,e){return function(s,a){const o=this,r=o.__v_raw,l=pn(r),c=e?sr:n?rr:gs;return!n&&Jn(l,"iterate",yt),r.forEach((i,u)=>s.call(a,c(i),c(u),o))}}function Js(n,e,t){return function(...s){const a=this.__v_raw,o=pn(a),r=Rt(o),l=n==="entries"||n===Symbol.iterator&&r,c=n==="keys"&&r,i=a[n](...s),u=t?sr:e?rr:gs;return!e&&Jn(o,"iterate",c?_o:yt),{next(){const{value:d,done:h}=i.next();return h?{value:d,done:h}:{value:l?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function qe(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Sd(){const n={get(o){return qs(this,o)},get size(){return Zs(this)},has:Qs,add:ll,set:pl,delete:il,clear:cl,forEach:Ys(!1,!1)},e={get(o){return qs(this,o,!1,!0)},get size(){return Zs(this)},has:Qs,add:ll,set:pl,delete:il,clear:cl,forEach:Ys(!1,!0)},t={get(o){return qs(this,o,!0)},get size(){return Zs(this,!0)},has(o){return Qs.call(this,o,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Ys(!0,!1)},s={get(o){return qs(this,o,!0,!0)},get size(){return Zs(this,!0)},has(o){return Qs.call(this,o,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Js(o,!1,!1),t[o]=Js(o,!0,!1),e[o]=Js(o,!1,!0),s[o]=Js(o,!0,!0)}),[n,t,e,s]}const[Pd,Ld,Od,Rd]=Sd();function ar(n,e){const t=e?n?Rd:Od:n?Ld:Pd;return(s,a,o)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?s:Reflect.get(dn(t,a)&&a in s?t:s,a,o)}const Td={get:ar(!1,!1)},Fd={get:ar(!1,!0)},Id={get:ar(!0,!1)},jp=new WeakMap,Kp=new WeakMap,Wp=new WeakMap,Nd=new WeakMap;function Vd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Md(n){return n.__v_skip||!Object.isExtensible(n)?0:Vd(rd(n))}function Ts(n){return Ht(n)?n:or(n,!1,xd,Td,jp)}function qp(n){return or(n,!1,Cd,Fd,Kp)}function He(n){return or(n,!0,Dd,Id,Wp)}function or(n,e,t,s,a){if(!_n(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=a.get(n);if(o)return o;const r=Md(n);if(r===0)return n;const l=new Proxy(n,r===2?s:t);return a.set(n,l),l}function Ft(n){return Ht(n)?Ft(n.__v_raw):!!(n&&n.__v_isReactive)}function Ht(n){return!!(n&&n.__v_isReadonly)}function ha(n){return!!(n&&n.__v_isShallow)}function Qp(n){return Ft(n)||Ht(n)}function pn(n){const e=n&&n.__v_raw;return e?pn(e):n}function Zp(n){return Object.isExtensible(n)&&da(n,"__v_skip",!0),n}const gs=n=>_n(n)?Ts(n):n,rr=n=>_n(n)?He(n):n;class Yp{constructor(e,t,s,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new nr(()=>e(this._value),()=>is(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const e=pn(this);return(!e._cacheable||e.effect.dirty)&&Re(e._value,e._value=e.effect.run())&&is(e,4),lr(e),e.effect._dirtyLevel>=2&&is(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $d(n,e,t=!1){let s,a;const o=sn(n);return o?(s=n,a=ue):(s=n.get,a=n.set),new Yp(s,a,o||!a,t)}function lr(n){var e;at&&At&&(n=pn(n),Mp(At,(e=n.dep)!=null?e:n.dep=Up(()=>n.dep=void 0,n instanceof Yp?n:void 0)))}function is(n,e=4,t){n=pn(n);const s=n.dep;s&&$p(s,e)}function Vn(n){return!!(n&&n.__v_isRef===!0)}function K(n){return Jp(n,!1)}function En(n){return Jp(n,!0)}function Jp(n,e){return Vn(n)?n:new Ud(n,e)}class Ud{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:pn(e),this._value=t?e:gs(e)}get value(){return lr(this),this._value}set value(e){const t=this.__v_isShallow||ha(e)||Ht(e);e=t?e:pn(e),Re(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:gs(e),is(this,4))}}function ve(n){return Vn(n)?n.value:n}const Hd={get:(n,e,t)=>ve(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const a=n[e];return Vn(a)&&!Vn(t)?(a.value=t,!0):Reflect.set(n,e,t,s)}};function Xp(n){return Ft(n)?n:new Proxy(n,Hd)}class zd{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:s}=e(()=>lr(this),()=>is(this));this._get=t,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Da(n){return new zd(n)}class Gd{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ad(pn(this._object),this._key)}}class jd{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Yt(n,e,t){return Vn(n)?n:sn(n)?new jd(n):_n(n)&&arguments.length>1?Kd(n,e,t):K(n)}function Kd(n,e,t){const s=n[e];return Vn(s)?s:new Gd(n,e,t)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ot(n,e,t,s){try{return s?n(...s):n()}catch(a){Fs(a,e,t)}}function de(n,e,t,s){if(sn(n)){const o=ot(n,e,t,s);return o&&Pp(o)&&o.catch(r=>{Fs(r,e,t)}),o}const a=[];for(let o=0;o<n.length;o++)a.push(de(n[o],e,t,s));return a}function Fs(n,e,t,s=!0){const a=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const i=o.ec;if(i){for(let u=0;u<i.length;u++)if(i[u](n,r,l)===!1)return}o=o.parent}const c=e.appContext.config.errorHandler;if(c){ot(c,null,10,[n,r,l]);return}}Wd(n,t,a,s)}function Wd(n,e,t,s=!0){console.error(n)}let bs=!1,Bo=!1;const Gn=[];let Le=0;const It=[];let Xe=null,ft=0;const ni=Promise.resolve();let pr=null;function Be(n){const e=pr||ni;return n?e.then(this?n.bind(this):n):e}function qd(n){let e=Le+1,t=Gn.length;for(;e<t;){const s=e+t>>>1,a=Gn[s],o=vs(a);o<n||o===n&&a.pre?e=s+1:t=s}return e}function Ca(n){(!Gn.length||!Gn.includes(n,bs&&n.allowRecurse?Le+1:Le))&&(n.id==null?Gn.push(n):Gn.splice(qd(n.id),0,n),ei())}function ei(){!bs&&!Bo&&(Bo=!0,pr=ni.then(ti))}function Qd(n){const e=Gn.indexOf(n);e>Le&&Gn.splice(e,1)}function Zd(n){J(n)?It.push(...n):(!Xe||!Xe.includes(n,n.allowRecurse?ft+1:ft))&&It.push(n),ei()}function ul(n,e,t=bs?Le+1:0){for(;t<Gn.length;t++){const s=Gn[t];if(s&&s.pre){if(n&&s.id!==n.uid)continue;Gn.splice(t,1),t--,s()}}}function Ea(n){if(It.length){const e=[...new Set(It)].sort((t,s)=>vs(t)-vs(s));if(It.length=0,Xe){Xe.push(...e);return}for(Xe=e,ft=0;ft<Xe.length;ft++)Xe[ft]();Xe=null,ft=0}}const vs=n=>n.id==null?1/0:n.id,Yd=(n,e)=>{const t=vs(n)-vs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ti(n){Bo=!1,bs=!0,Gn.sort(Yd);try{for(Le=0;Le<Gn.length;Le++){const e=Gn[Le];e&&e.active!==!1&&ot(e,null,14)}}finally{Le=0,Gn.length=0,Ea(),bs=!1,pr=null,(Gn.length||It.length)&&ti()}}function Jd(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||xn;let a=t;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:h}=s[u]||xn;h&&(a=t.map(E=>Nn(E)?E.trim():E)),d&&(a=t.map(fs))}let l,c=s[l=Ka(e)]||s[l=Ka(oe(e))];!c&&o&&(c=s[l=Ka(ut(e))]),c&&de(c,n,6,a);const i=s[l+"Once"];if(i){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,de(i,n,6,a)}}function si(n,e,t=!1){const s=e.emitsCache,a=s.get(n);if(a!==void 0)return a;const o=n.emits;let r={},l=!1;if(!sn(n)){const c=i=>{const u=si(i,e,!0);u&&(l=!0,In(r,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!l?(_n(n)&&s.set(n,null),null):(J(o)?o.forEach(c=>r[c]=null):In(r,o),_n(n)&&s.set(n,r),r)}function Sa(n,e){return!n||!Ls(e)?!1:(e=e.slice(2).replace(/Once$/,""),dn(n,e[0].toLowerCase()+e.slice(1))||dn(n,ut(e))||dn(n,e))}let Mn=null,Pa=null;function ka(n){const e=Mn;return Mn=n,Pa=n&&n.type.__scopeId||null,e}function cf(n){Pa=n}function uf(){Pa=null}function Xd(n,e=Mn,t){if(!e||n._n)return n;const s=(...a)=>{s._d&&_l(-1);const o=ka(e);let r;try{r=n(...a)}finally{ka(o),s._d&&_l(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function qa(n){const{type:e,vnode:t,proxy:s,withProxy:a,props:o,propsOptions:[r],slots:l,attrs:c,emit:i,render:u,renderCache:d,data:h,setupState:E,ctx:g,inheritAttrs:y}=n;let _,b;const x=ka(n);try{if(t.shapeFlag&4){const D=a||s,N=D;_=be(u.call(N,D,d,o,E,h,g)),b=c}else{const D=e;_=be(D.length>1?D(o,{attrs:c,slots:l,emit:i}):D(o,null)),b=e.props?c:nm(c)}}catch(D){ms.length=0,Fs(D,n,1),_=On(ae)}let v=_;if(b&&y!==!1){const D=Object.keys(b),{shapeFlag:N}=v;D.length&&N&7&&(r&&D.some(qo)&&(b=em(b,r)),v=pt(v,b))}return t.dirs&&(v=pt(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),_=v,ka(x),_}const nm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ls(t))&&((e||(e={}))[t]=n[t]);return e},em=(n,e)=>{const t={};for(const s in n)(!qo(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function tm(n,e,t){const{props:s,children:a,component:o}=n,{props:r,children:l,patchFlag:c}=e,i=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?dl(s,r,i):!!r;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(r[h]!==s[h]&&!Sa(i,h))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?dl(s,r,i):!0:!!r;return!1}function dl(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let a=0;a<s.length;a++){const o=s[a];if(e[o]!==n[o]&&!Sa(t,o))return!0}return!1}function sm({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const ai="components";function se(n,e){return om(ai,n,!0,e)||n}const am=Symbol.for("v-ndc");function om(n,e,t=!0,s=!1){const a=Mn||zn;if(a){const o=a.type;if(n===ai){const l=Xm(o,!1);if(l&&(l===e||l===oe(e)||l===Rs(oe(e))))return o}const r=ml(a[n]||o[n],e)||ml(a.appContext[n],e);return!r&&s?o:r}}function ml(n,e){return n&&(n[e]||n[oe(e)]||n[Rs(oe(e))])}const rm=n=>n.__isSuspense;function oi(n,e){e&&e.pendingBranch?J(n)?e.effects.push(...n):e.effects.push(n):Zd(n)}const lm=Symbol.for("v-scx"),pm=()=>kn(lm);function ri(n,e){return La(n,null,e)}function im(n,e){return La(n,null,{flush:"sync"})}const Xs={};function on(n,e,t){return La(n,e,t)}function La(n,e,{immediate:t,deep:s,flush:a,once:o,onTrack:r,onTrigger:l}=xn){if(e&&o){const w=e;e=(...F)=>{w(...F),N()}}const c=zn,i=w=>s===!0?w:bt(w,s===!1?1:void 0);let u,d=!1,h=!1;if(Vn(n)?(u=()=>n.value,d=ha(n)):Ft(n)?(u=()=>i(n),d=!0):J(n)?(h=!0,d=n.some(w=>Ft(w)||ha(w)),u=()=>n.map(w=>{if(Vn(w))return w.value;if(Ft(w))return i(w);if(sn(w))return ot(w,c,2)})):sn(n)?e?u=()=>ot(n,c,2):u=()=>(E&&E(),de(n,c,3,[g])):u=ue,e&&s){const w=u;u=()=>bt(w())}let E,g=w=>{E=v.onStop=()=>{ot(w,c,4),E=v.onStop=void 0}},y;if(Vs)if(g=ue,e?t&&de(e,c,3,[u(),h?[]:void 0,g]):u(),a==="sync"){const w=pm();y=w.__watcherHandles||(w.__watcherHandles=[])}else return ue;let _=h?new Array(n.length).fill(Xs):Xs;const b=()=>{if(!(!v.active||!v.dirty))if(e){const w=v.run();(s||d||(h?w.some((F,O)=>Re(F,_[O])):Re(w,_)))&&(E&&E(),de(e,c,3,[w,_===Xs?void 0:h&&_[0]===Xs?[]:_,g]),_=w)}else v.run()};b.allowRecurse=!!e;let x;a==="sync"?x=b:a==="post"?x=()=>Qn(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),x=()=>Ca(b));const v=new nr(u,ue,x),D=Ip(),N=()=>{v.stop(),D&&Qo(D.effects,v)};return e?t?b():_=v.run():a==="post"?Qn(v.run.bind(v),c&&c.suspense):v.run(),y&&y.push(N),N}function cm(n,e,t){const s=this.proxy,a=Nn(n)?n.includes(".")?li(s,n):()=>s[n]:n.bind(s,s);let o;sn(e)?o=e:(o=e.handler,t=e);const r=Ns(this),l=La(a,o.bind(s),t);return r(),l}function li(n,e){const t=e.split(".");return()=>{let s=n;for(let a=0;a<t.length&&s;a++)s=s[t[a]];return s}}function bt(n,e,t=0,s){if(!_n(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(s=s||new Set,s.has(n))return n;if(s.add(n),Vn(n))bt(n.value,e,t,s);else if(J(n))for(let a=0;a<n.length;a++)bt(n[a],e,t,s);else if(Zt(n)||Rt(n))n.forEach(a=>{bt(a,e,t,s)});else if(Op(n))for(const a in n)bt(n[a],e,t,s);return n}function df(n,e){if(Mn===null)return n;const t=Ta(Mn)||Mn.proxy,s=n.dirs||(n.dirs=[]);for(let a=0;a<e.length;a++){let[o,r,l,c=xn]=e[a];o&&(sn(o)&&(o={mounted:o,updated:o}),o.deep&&bt(r),s.push({dir:o,instance:t,value:r,oldValue:void 0,arg:l,modifiers:c}))}return n}function Pe(n,e,t,s){const a=n.dirs,o=e&&e.dirs;for(let r=0;r<a.length;r++){const l=a[r];o&&(l.oldValue=o[r].value);let c=l.dir[s];c&&(wt(),de(c,t,8,[n.el,l,n,e]),xt())}}const nt=Symbol("_leaveCb"),na=Symbol("_enterCb");function pi(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mn(()=>{n.isMounted=!0}),mi(()=>{n.isUnmounting=!0}),n}const pe=[Function,Array],ii={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pe,onEnter:pe,onAfterEnter:pe,onEnterCancelled:pe,onBeforeLeave:pe,onLeave:pe,onAfterLeave:pe,onLeaveCancelled:pe,onBeforeAppear:pe,onAppear:pe,onAfterAppear:pe,onAppearCancelled:pe},um={name:"BaseTransition",props:ii,setup(n,{slots:e}){const t=Dt(),s=pi();let a;return()=>{const o=e.default&&ir(e.default(),!0);if(!o||!o.length)return;let r=o[0];if(o.length>1){for(const y of o)if(y.type!==ae){r=y;break}}const l=pn(n),{mode:c}=l;if(s.isLeaving)return Qa(r);const i=hl(r);if(!i)return Qa(r);const u=As(i,l,s,t);ys(i,u);const d=t.subTree,h=d&&hl(d);let E=!1;const{getTransitionKey:g}=i.type;if(g){const y=g();a===void 0?a=y:y!==a&&(a=y,E=!0)}if(h&&h.type!==ae&&(!gt(i,h)||E)){const y=As(h,l,s,t);if(ys(h,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Qa(r);c==="in-out"&&i.type!==ae&&(y.delayLeave=(_,b,x)=>{const v=ci(s,h);v[String(h.key)]=h,_[nt]=()=>{b(),_[nt]=void 0,delete u.delayedLeave},u.delayedLeave=x})}return r}}},dm=um;function ci(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function As(n,e,t,s){const{appear:a,mode:o,persisted:r=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:i,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:E,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:b,onAppearCancelled:x}=e,v=String(n.key),D=ci(t,n),N=(O,I)=>{O&&de(O,s,9,I)},w=(O,I)=>{const U=I[1];N(O,I),J(O)?O.every(Z=>Z.length<=1)&&U():O.length<=1&&U()},F={mode:o,persisted:r,beforeEnter(O){let I=l;if(!t.isMounted)if(a)I=y||l;else return;O[nt]&&O[nt](!0);const U=D[v];U&&gt(n,U)&&U.el[nt]&&U.el[nt](),N(I,[O])},enter(O){let I=c,U=i,Z=u;if(!t.isMounted)if(a)I=_||c,U=b||i,Z=x||u;else return;let M=!1;const nn=O[na]=Ln=>{M||(M=!0,Ln?N(Z,[O]):N(U,[O]),F.delayedLeave&&F.delayedLeave(),O[na]=void 0)};I?w(I,[O,nn]):nn()},leave(O,I){const U=String(n.key);if(O[na]&&O[na](!0),t.isUnmounting)return I();N(d,[O]);let Z=!1;const M=O[nt]=nn=>{Z||(Z=!0,I(),nn?N(g,[O]):N(E,[O]),O[nt]=void 0,D[U]===n&&delete D[U])};D[U]=n,h?w(h,[O,M]):M()},clone(O){return As(O,e,t,s)}};return F}function Qa(n){if(Is(n))return n=pt(n),n.children=null,n}function hl(n){return Is(n)?n.children?n.children[0]:void 0:n}function ys(n,e){n.shapeFlag&6&&n.component?ys(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ir(n,e=!1,t){let s=[],a=0;for(let o=0;o<n.length;o++){let r=n[o];const l=t==null?r.key:String(t)+String(r.key!=null?r.key:o);r.type===Wn?(r.patchFlag&128&&a++,s=s.concat(ir(r.children,e,l))):(e||r.type!==ae)&&s.push(l!=null?pt(r,{key:l}):r)}if(a>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function R(n,e){return sn(n)?In({name:n.name},e,{setup:n}):n}const Nt=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function cr(n){sn(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:s,delay:a=200,timeout:o,suspensible:r=!0,onError:l}=n;let c=null,i,u=0;const d=()=>(u++,c=null,h()),h=()=>{let E;return c||(E=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((y,_)=>{l(g,()=>y(d()),()=>_(g),u+1)});throw g}).then(g=>E!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),i=g,g)))};return R({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return i},setup(){const E=zn;if(i)return()=>Za(i,E);const g=x=>{c=null,Fs(x,E,13,!s)};if(r&&E.suspense||Vs)return h().then(x=>()=>Za(x,E)).catch(x=>(g(x),()=>s?On(s,{error:x}):null));const y=K(!1),_=K(),b=K(!!a);return a&&setTimeout(()=>{b.value=!1},a),o!=null&&setTimeout(()=>{if(!y.value&&!_.value){const x=new Error(`Async component timed out after ${o}ms.`);g(x),_.value=x}},o),h().then(()=>{y.value=!0,E.parent&&Is(E.parent.vnode)&&(E.parent.effect.dirty=!0,Ca(E.parent.update))}).catch(x=>{g(x),_.value=x}),()=>{if(y.value&&i)return Za(i,E);if(_.value&&s)return On(s,{error:_.value});if(t&&!b.value)return On(t)}}})}function Za(n,e){const{ref:t,props:s,children:a,ce:o}=e.vnode,r=On(n,s,a);return r.ref=t,r.ce=o,delete e.vnode.ce,r}const Is=n=>n.type.__isKeepAlive;function mm(n,e){ui(n,"a",e)}function hm(n,e){ui(n,"da",e)}function ui(n,e,t=zn){const s=n.__wdc||(n.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(Oa(e,s,t),t){let a=t.parent;for(;a&&a.parent;)Is(a.parent.vnode)&&Em(s,e,t,a),a=a.parent}}function Em(n,e,t,s){const a=Oa(e,n,s,!0);dt(()=>{Qo(s[e],a)},t)}function Oa(n,e,t=zn,s=!1){if(t){const a=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...r)=>{if(t.isUnmounted)return;wt();const l=Ns(t),c=de(e,t,n,r);return l(),xt(),c});return s?a.unshift(o):a.push(o),o}}const ze=n=>(e,t=zn)=>(!Vs||n==="sp")&&Oa(n,(...s)=>e(...s),t),km=ze("bm"),mn=ze("m"),fm=ze("bu"),di=ze("u"),mi=ze("bum"),dt=ze("um"),gm=ze("sp"),bm=ze("rtg"),vm=ze("rtc");function Am(n,e=zn){Oa("ec",n,e)}function mf(n,e,t,s){let a;const o=t&&t[s];if(J(n)||Nn(n)){a=new Array(n.length);for(let r=0,l=n.length;r<l;r++)a[r]=e(n[r],r,void 0,o&&o[r])}else if(typeof n=="number"){a=new Array(n);for(let r=0;r<n;r++)a[r]=e(r+1,r,void 0,o&&o[r])}else if(_n(n))if(n[Symbol.iterator])a=Array.from(n,(r,l)=>e(r,l,void 0,o&&o[l]));else{const r=Object.keys(n);a=new Array(r.length);for(let l=0,c=r.length;l<c;l++){const i=r[l];a[l]=e(n[i],i,l,o&&o[l])}}else a=[];return t&&(t[s]=a),a}function hf(n,e,t={},s,a){if(Mn.isCE||Mn.parent&&Nt(Mn.parent)&&Mn.parent.isCE)return e!=="default"&&(t.name=e),On("slot",t,s&&s());let o=n[e];o&&o._c&&(o._d=!1),wi();const r=o&&hi(o(t)),l=Di(Wn,{key:t.key||r&&r.key||`_${e}`},r||(s?s():[]),r&&n._===1?64:-2);return!a&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function hi(n){return n.some(e=>ba(e)?!(e.type===ae||e.type===Wn&&!hi(e.children)):!0)?n:null}const wo=n=>n?Li(n)?Ta(n)||n.proxy:wo(n.parent):null,cs=In(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wo(n.parent),$root:n=>wo(n.root),$emit:n=>n.emit,$options:n=>ur(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Ca(n.update)}),$nextTick:n=>n.n||(n.n=Be.bind(n.proxy)),$watch:n=>cm.bind(n)}),Ya=(n,e)=>n!==xn&&!n.__isScriptSetup&&dn(n,e),ym={get({_:n},e){const{ctx:t,setupState:s,data:a,props:o,accessCache:r,type:l,appContext:c}=n;let i;if(e[0]!=="$"){const E=r[e];if(E!==void 0)switch(E){case 1:return s[e];case 2:return a[e];case 4:return t[e];case 3:return o[e]}else{if(Ya(s,e))return r[e]=1,s[e];if(a!==xn&&dn(a,e))return r[e]=2,a[e];if((i=n.propsOptions[0])&&dn(i,e))return r[e]=3,o[e];if(t!==xn&&dn(t,e))return r[e]=4,t[e];xo&&(r[e]=0)}}const u=cs[e];let d,h;if(u)return e==="$attrs"&&Jn(n,"get",e),u(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==xn&&dn(t,e))return r[e]=4,t[e];if(h=c.config.globalProperties,dn(h,e))return h[e]},set({_:n},e,t){const{data:s,setupState:a,ctx:o}=n;return Ya(a,e)?(a[e]=t,!0):s!==xn&&dn(s,e)?(s[e]=t,!0):dn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:a,propsOptions:o}},r){let l;return!!t[r]||n!==xn&&dn(n,r)||Ya(e,r)||(l=o[0])&&dn(l,r)||dn(s,r)||dn(cs,r)||dn(a.config.globalProperties,r)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function El(n){return J(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xo=!0;function _m(n){const e=ur(n),t=n.proxy,s=n.ctx;xo=!1,e.beforeCreate&&kl(e.beforeCreate,n,"bc");const{data:a,computed:o,methods:r,watch:l,provide:c,inject:i,created:u,beforeMount:d,mounted:h,beforeUpdate:E,updated:g,activated:y,deactivated:_,beforeDestroy:b,beforeUnmount:x,destroyed:v,unmounted:D,render:N,renderTracked:w,renderTriggered:F,errorCaptured:O,serverPrefetch:I,expose:U,inheritAttrs:Z,components:M,directives:nn,filters:Ln}=e;if(i&&Bm(i,s,null),r)for(const en in r){const q=r[en];sn(q)&&(s[en]=q.bind(t))}if(a){const en=a.call(t,t);_n(en)&&(n.data=Ts(en))}if(xo=!0,o)for(const en in o){const q=o[en],Tn=sn(q)?q.bind(t,t):sn(q.get)?q.get.bind(t,t):ue,De=!sn(q)&&sn(q.set)?q.set.bind(t):ue,le=A({get:Tn,set:De});Object.defineProperty(s,en,{enumerable:!0,configurable:!0,get:()=>le.value,set:Un=>le.value=Un})}if(l)for(const en in l)Ei(l[en],s,t,en);if(c){const en=sn(c)?c.call(t):c;Reflect.ownKeys(en).forEach(q=>{me(q,en[q])})}u&&kl(u,n,"c");function W(en,q){J(q)?q.forEach(Tn=>en(Tn.bind(t))):q&&en(q.bind(t))}if(W(km,d),W(mn,h),W(fm,E),W(di,g),W(mm,y),W(hm,_),W(Am,O),W(vm,w),W(bm,F),W(mi,x),W(dt,D),W(gm,I),J(U))if(U.length){const en=n.exposed||(n.exposed={});U.forEach(q=>{Object.defineProperty(en,q,{get:()=>t[q],set:Tn=>t[q]=Tn})})}else n.exposed||(n.exposed={});N&&n.render===ue&&(n.render=N),Z!=null&&(n.inheritAttrs=Z),M&&(n.components=M),nn&&(n.directives=nn)}function Bm(n,e,t=ue){J(n)&&(n=Do(n));for(const s in n){const a=n[s];let o;_n(a)?"default"in a?o=kn(a.from||s,a.default,!0):o=kn(a.from||s):o=kn(a),Vn(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function kl(n,e,t){de(J(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ei(n,e,t,s){const a=s.includes(".")?li(t,s):()=>t[s];if(Nn(n)){const o=e[n];sn(o)&&on(a,o)}else if(sn(n))on(a,n.bind(t));else if(_n(n))if(J(n))n.forEach(o=>Ei(o,e,t,s));else{const o=sn(n.handler)?n.handler.bind(t):e[n.handler];sn(o)&&on(a,o,n)}}function ur(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:a,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,l=o.get(e);let c;return l?c=l:!a.length&&!t&&!s?c=e:(c={},a.length&&a.forEach(i=>fa(c,i,r,!0)),fa(c,e,r)),_n(e)&&o.set(e,c),c}function fa(n,e,t,s=!1){const{mixins:a,extends:o}=e;o&&fa(n,o,t,!0),a&&a.forEach(r=>fa(n,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const l=wm[r]||t&&t[r];n[r]=l?l(n[r],e[r]):e[r]}return n}const wm={data:fl,props:gl,emits:gl,methods:ls,computed:ls,beforeCreate:Kn,created:Kn,beforeMount:Kn,mounted:Kn,beforeUpdate:Kn,updated:Kn,beforeDestroy:Kn,beforeUnmount:Kn,destroyed:Kn,unmounted:Kn,activated:Kn,deactivated:Kn,errorCaptured:Kn,serverPrefetch:Kn,components:ls,directives:ls,watch:Dm,provide:fl,inject:xm};function fl(n,e){return e?n?function(){return In(sn(n)?n.call(this,this):n,sn(e)?e.call(this,this):e)}:e:n}function xm(n,e){return ls(Do(n),Do(e))}function Do(n){if(J(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kn(n,e){return n?[...new Set([].concat(n,e))]:e}function ls(n,e){return n?In(Object.create(null),n,e):e}function gl(n,e){return n?J(n)&&J(e)?[...new Set([...n,...e])]:In(Object.create(null),El(n),El(e??{})):e}function Dm(n,e){if(!n)return e;if(!e)return n;const t=In(Object.create(null),n);for(const s in e)t[s]=Kn(n[s],e[s]);return t}function ki(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cm=0;function Sm(n,e){return function(s,a=null){sn(s)||(s=In({},s)),a!=null&&!_n(a)&&(a=null);const o=ki(),r=new WeakSet;let l=!1;const c=o.app={_uid:Cm++,_component:s,_props:a,_container:null,_context:o,_instance:null,version:Ri,get config(){return o.config},set config(i){},use(i,...u){return r.has(i)||(i&&sn(i.install)?(r.add(i),i.install(c,...u)):sn(i)&&(r.add(i),i(c,...u))),c},mixin(i){return o.mixins.includes(i)||o.mixins.push(i),c},component(i,u){return u?(o.components[i]=u,c):o.components[i]},directive(i,u){return u?(o.directives[i]=u,c):o.directives[i]},mount(i,u,d){if(!l){const h=On(s,a);return h.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(h,i):n(h,i,d),l=!0,c._container=i,i.__vue_app__=c,Ta(h.component)||h.component.proxy}},unmount(){l&&(n(null,c._container),delete c._container.__vue_app__)},provide(i,u){return o.provides[i]=u,c},runWithContext(i){const u=us;us=c;try{return i()}finally{us=u}}};return c}}let us=null;function me(n,e){if(zn){let t=zn.provides;const s=zn.parent&&zn.parent.provides;s===t&&(t=zn.provides=Object.create(s)),t[n]=e}}function kn(n,e,t=!1){const s=zn||Mn;if(s||us){const a=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:us._context.provides;if(a&&n in a)return a[n];if(arguments.length>1)return t&&sn(e)?e.call(s&&s.proxy):e}}function Pm(n,e,t,s=!1){const a={},o={};da(o,Ra,1),n.propsDefaults=Object.create(null),fi(n,e,a,o);for(const r in n.propsOptions[0])r in a||(a[r]=void 0);t?n.props=s?a:qp(a):n.type.props?n.props=a:n.props=o,n.attrs=o}function Lm(n,e,t,s){const{props:a,attrs:o,vnode:{patchFlag:r}}=n,l=pn(a),[c]=n.propsOptions;let i=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Sa(n.emitsOptions,h))continue;const E=e[h];if(c)if(dn(o,h))E!==o[h]&&(o[h]=E,i=!0);else{const g=oe(h);a[g]=Co(c,l,g,E,n,!1)}else E!==o[h]&&(o[h]=E,i=!0)}}}else{fi(n,e,a,o)&&(i=!0);let u;for(const d in l)(!e||!dn(e,d)&&((u=ut(d))===d||!dn(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(a[d]=Co(c,l,d,void 0,n,!0)):delete a[d]);if(o!==l)for(const d in o)(!e||!dn(e,d))&&(delete o[d],i=!0)}i&&Ue(n,"set","$attrs")}function fi(n,e,t,s){const[a,o]=n.propsOptions;let r=!1,l;if(e)for(let c in e){if(Tt(c))continue;const i=e[c];let u;a&&dn(a,u=oe(c))?!o||!o.includes(u)?t[u]=i:(l||(l={}))[u]=i:Sa(n.emitsOptions,c)||(!(c in s)||i!==s[c])&&(s[c]=i,r=!0)}if(o){const c=pn(t),i=l||xn;for(let u=0;u<o.length;u++){const d=o[u];t[d]=Co(a,c,d,i[d],n,!dn(i,d))}}return r}function Co(n,e,t,s,a,o){const r=n[t];if(r!=null){const l=dn(r,"default");if(l&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&sn(c)){const{propsDefaults:i}=a;if(t in i)s=i[t];else{const u=Ns(a);s=i[t]=c.call(null,e),u()}}else s=c}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===ut(t))&&(s=!0))}return s}function gi(n,e,t=!1){const s=e.propsCache,a=s.get(n);if(a)return a;const o=n.props,r={},l=[];let c=!1;if(!sn(n)){const u=d=>{c=!0;const[h,E]=gi(d,e,!0);In(r,h),E&&l.push(...E)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!c)return _n(n)&&s.set(n,Ot),Ot;if(J(o))for(let u=0;u<o.length;u++){const d=oe(o[u]);bl(d)&&(r[d]=xn)}else if(o)for(const u in o){const d=oe(u);if(bl(d)){const h=o[u],E=r[d]=J(h)||sn(h)?{type:h}:In({},h);if(E){const g=yl(Boolean,E.type),y=yl(String,E.type);E[0]=g>-1,E[1]=y<0||g<y,(g>-1||dn(E,"default"))&&l.push(d)}}}const i=[r,l];return _n(n)&&s.set(n,i),i}function bl(n){return n[0]!=="$"&&!Tt(n)}function vl(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Al(n,e){return vl(n)===vl(e)}function yl(n,e){return J(e)?e.findIndex(t=>Al(t,n)):sn(e)&&Al(e,n)?0:-1}const bi=n=>n[0]==="_"||n==="$stable",dr=n=>J(n)?n.map(be):[be(n)],Om=(n,e,t)=>{if(e._n)return e;const s=Xd((...a)=>dr(e(...a)),t);return s._c=!1,s},vi=(n,e,t)=>{const s=n._ctx;for(const a in n){if(bi(a))continue;const o=n[a];if(sn(o))e[a]=Om(a,o,s);else if(o!=null){const r=dr(o);e[a]=()=>r}}},Ai=(n,e)=>{const t=dr(e);n.slots.default=()=>t},Rm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=pn(e),da(e,"_",t)):vi(e,n.slots={})}else n.slots={},e&&Ai(n,e);da(n.slots,Ra,1)},Tm=(n,e,t)=>{const{vnode:s,slots:a}=n;let o=!0,r=xn;if(s.shapeFlag&32){const l=e._;l?t&&l===1?o=!1:(In(a,e),!t&&l===1&&delete a._):(o=!e.$stable,vi(e,a)),r=e}else e&&(Ai(n,e),r={default:1});if(o)for(const l in a)!bi(l)&&r[l]==null&&delete a[l]};function ga(n,e,t,s,a=!1){if(J(n)){n.forEach((h,E)=>ga(h,e&&(J(e)?e[E]:e),t,s,a));return}if(Nt(s)&&!a)return;const o=s.shapeFlag&4?Ta(s.component)||s.component.proxy:s.el,r=a?null:o,{i:l,r:c}=n,i=e&&e.r,u=l.refs===xn?l.refs={}:l.refs,d=l.setupState;if(i!=null&&i!==c&&(Nn(i)?(u[i]=null,dn(d,i)&&(d[i]=null)):Vn(i)&&(i.value=null)),sn(c))ot(c,l,12,[r,u]);else{const h=Nn(c),E=Vn(c);if(h||E){const g=()=>{if(n.f){const y=h?dn(d,c)?d[c]:u[c]:c.value;a?J(y)&&Qo(y,o):J(y)?y.includes(o)||y.push(o):h?(u[c]=[o],dn(d,c)&&(d[c]=u[c])):(c.value=[o],n.k&&(u[n.k]=c.value))}else h?(u[c]=r,dn(d,c)&&(d[c]=r)):E&&(c.value=r,n.k&&(u[n.k]=r))};r?(g.id=-1,Qn(g,t)):g()}}}let Qe=!1;const Fm=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Im=n=>n.namespaceURI.includes("MathML"),ea=n=>{if(Fm(n))return"svg";if(Im(n))return"mathml"},ta=n=>n.nodeType===8;function Nm(n){const{mt:e,p:t,o:{patchProp:s,createText:a,nextSibling:o,parentNode:r,remove:l,insert:c,createComment:i}}=n,u=(v,D)=>{if(!D.hasChildNodes()){t(null,v,D),Ea(),D._vnode=v;return}Qe=!1,d(D.firstChild,v,null,null,null),Ea(),D._vnode=v,Qe&&console.error("Hydration completed but contains mismatches.")},d=(v,D,N,w,F,O=!1)=>{const I=ta(v)&&v.data==="[",U=()=>y(v,D,N,w,F,I),{type:Z,ref:M,shapeFlag:nn,patchFlag:Ln}=D;let Sn=v.nodeType;D.el=v,Ln===-2&&(O=!1,D.dynamicChildren=null);let W=null;switch(Z){case zt:Sn!==3?D.children===""?(c(D.el=a(""),r(v),v),W=v):W=U():(v.data!==D.children&&(Qe=!0,v.data=D.children),W=o(v));break;case ae:x(v)?(W=o(v),b(D.el=v.content.firstChild,v,N)):Sn!==8||I?W=U():W=o(v);break;case ds:if(I&&(v=o(v),Sn=v.nodeType),Sn===1||Sn===3){W=v;const en=!D.children.length;for(let q=0;q<D.staticCount;q++)en&&(D.children+=W.nodeType===1?W.outerHTML:W.data),q===D.staticCount-1&&(D.anchor=W),W=o(W);return I?o(W):W}else U();break;case Wn:I?W=g(v,D,N,w,F,O):W=U();break;default:if(nn&1)(Sn!==1||D.type.toLowerCase()!==v.tagName.toLowerCase())&&!x(v)?W=U():W=h(v,D,N,w,F,O);else if(nn&6){D.slotScopeIds=F;const en=r(v);if(I?W=_(v):ta(v)&&v.data==="teleport start"?W=_(v,v.data,"teleport end"):W=o(v),e(D,en,null,N,w,ea(en),O),Nt(D)){let q;I?(q=On(Wn),q.anchor=W?W.previousSibling:en.lastChild):q=v.nodeType===3?Pi(""):On("div"),q.el=v,D.component.subTree=q}}else nn&64?Sn!==8?W=U():W=D.type.hydrate(v,D,N,w,F,O,n,E):nn&128&&(W=D.type.hydrate(v,D,N,w,ea(r(v)),F,O,n,d))}return M!=null&&ga(M,null,w,D),W},h=(v,D,N,w,F,O)=>{O=O||!!D.dynamicChildren;const{type:I,props:U,patchFlag:Z,shapeFlag:M,dirs:nn,transition:Ln}=D,Sn=I==="input"||I==="option";if(Sn||Z!==-1){nn&&Pe(D,null,N,"created");let W=!1;if(x(v)){W=yi(w,Ln)&&N&&N.vnode.props&&N.vnode.props.appear;const q=v.content.firstChild;W&&Ln.beforeEnter(q),b(q,v,N),D.el=v=q}if(M&16&&!(U&&(U.innerHTML||U.textContent))){let q=E(v.firstChild,D,v,N,w,F,O);for(;q;){Qe=!0;const Tn=q;q=q.nextSibling,l(Tn)}}else M&8&&v.textContent!==D.children&&(Qe=!0,v.textContent=D.children);if(U)if(Sn||!O||Z&48)for(const q in U)(Sn&&(q.endsWith("value")||q==="indeterminate")||Ls(q)&&!Tt(q)||q[0]===".")&&s(v,q,null,U[q],void 0,void 0,N);else U.onClick&&s(v,"onClick",null,U.onClick,void 0,void 0,N);let en;(en=U&&U.onVnodeBeforeMount)&&ie(en,N,D),nn&&Pe(D,null,N,"beforeMount"),((en=U&&U.onVnodeMounted)||nn||W)&&oi(()=>{en&&ie(en,N,D),W&&Ln.enter(v),nn&&Pe(D,null,N,"mounted")},w)}return v.nextSibling},E=(v,D,N,w,F,O,I)=>{I=I||!!D.dynamicChildren;const U=D.children,Z=U.length;for(let M=0;M<Z;M++){const nn=I?U[M]:U[M]=be(U[M]);if(v)v=d(v,nn,w,F,O,I);else{if(nn.type===zt&&!nn.children)continue;Qe=!0,t(null,nn,N,null,w,F,ea(N),O)}}return v},g=(v,D,N,w,F,O)=>{const{slotScopeIds:I}=D;I&&(F=F?F.concat(I):I);const U=r(v),Z=E(o(v),D,U,N,w,F,O);return Z&&ta(Z)&&Z.data==="]"?o(D.anchor=Z):(Qe=!0,c(D.anchor=i("]"),U,Z),Z)},y=(v,D,N,w,F,O)=>{if(Qe=!0,D.el=null,O){const Z=_(v);for(;;){const M=o(v);if(M&&M!==Z)l(M);else break}}const I=o(v),U=r(v);return l(v),t(null,D,U,I,N,w,ea(U),F),I},_=(v,D="[",N="]")=>{let w=0;for(;v;)if(v=o(v),v&&ta(v)&&(v.data===D&&w++,v.data===N)){if(w===0)return o(v);w--}return v},b=(v,D,N)=>{const w=D.parentNode;w&&w.replaceChild(v,D);let F=N;for(;F;)F.vnode.el===D&&(F.vnode.el=F.subTree.el=v),F=F.parent},x=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[u,d]}const Qn=oi;function Vm(n){return Mm(n,Nm)}function Mm(n,e){const t=Rp();t.__VUE__=!0;const{insert:s,remove:a,patchProp:o,createElement:r,createText:l,createComment:c,setText:i,setElementText:u,parentNode:d,nextSibling:h,setScopeId:E=ue,insertStaticContent:g}=n,y=(k,f,B,P=null,S=null,V=null,z=void 0,T=null,$=!!f.dynamicChildren)=>{if(k===f)return;k&&!gt(k,f)&&(P=C(k),Un(k,S,V,!0),k=null),f.patchFlag===-2&&($=!1,f.dynamicChildren=null);const{type:L,ref:j,shapeFlag:X}=f;switch(L){case zt:_(k,f,B,P);break;case ae:b(k,f,B,P);break;case ds:k==null&&x(f,B,P,z);break;case Wn:M(k,f,B,P,S,V,z,T,$);break;default:X&1?N(k,f,B,P,S,V,z,T,$):X&6?nn(k,f,B,P,S,V,z,T,$):(X&64||X&128)&&L.process(k,f,B,P,S,V,z,T,$,Q)}j!=null&&S&&ga(j,k&&k.ref,V,f||k,!f)},_=(k,f,B,P)=>{if(k==null)s(f.el=l(f.children),B,P);else{const S=f.el=k.el;f.children!==k.children&&i(S,f.children)}},b=(k,f,B,P)=>{k==null?s(f.el=c(f.children||""),B,P):f.el=k.el},x=(k,f,B,P)=>{[k.el,k.anchor]=g(k.children,f,B,P,k.el,k.anchor)},v=({el:k,anchor:f},B,P)=>{let S;for(;k&&k!==f;)S=h(k),s(k,B,P),k=S;s(f,B,P)},D=({el:k,anchor:f})=>{let B;for(;k&&k!==f;)B=h(k),a(k),k=B;a(f)},N=(k,f,B,P,S,V,z,T,$)=>{f.type==="svg"?z="svg":f.type==="math"&&(z="mathml"),k==null?w(f,B,P,S,V,z,T,$):I(k,f,S,V,z,T,$)},w=(k,f,B,P,S,V,z,T)=>{let $,L;const{props:j,shapeFlag:X,transition:Y,dirs:tn}=k;if($=k.el=r(k.type,V,j&&j.is,j),X&8?u($,k.children):X&16&&O(k.children,$,null,P,S,Ja(k,V),z,T),tn&&Pe(k,null,P,"created"),F($,k,k.scopeId,z,P),j){for(const vn in j)vn!=="value"&&!Tt(vn)&&o($,vn,null,j[vn],V,k.children,P,S,Fn);"value"in j&&o($,"value",null,j.value,V),(L=j.onVnodeBeforeMount)&&ie(L,P,k)}tn&&Pe(k,null,P,"beforeMount");const rn=yi(S,Y);rn&&Y.beforeEnter($),s($,f,B),((L=j&&j.onVnodeMounted)||rn||tn)&&Qn(()=>{L&&ie(L,P,k),rn&&Y.enter($),tn&&Pe(k,null,P,"mounted")},S)},F=(k,f,B,P,S)=>{if(B&&E(k,B),P)for(let V=0;V<P.length;V++)E(k,P[V]);if(S){let V=S.subTree;if(f===V){const z=S.vnode;F(k,z,z.scopeId,z.slotScopeIds,S.parent)}}},O=(k,f,B,P,S,V,z,T,$=0)=>{for(let L=$;L<k.length;L++){const j=k[L]=T?et(k[L]):be(k[L]);y(null,j,f,B,P,S,V,z,T)}},I=(k,f,B,P,S,V,z)=>{const T=f.el=k.el;let{patchFlag:$,dynamicChildren:L,dirs:j}=f;$|=k.patchFlag&16;const X=k.props||xn,Y=f.props||xn;let tn;if(B&&ht(B,!1),(tn=Y.onVnodeBeforeUpdate)&&ie(tn,B,f,k),j&&Pe(f,k,B,"beforeUpdate"),B&&ht(B,!0),L?U(k.dynamicChildren,L,T,B,P,Ja(f,S),V):z||q(k,f,T,null,B,P,Ja(f,S),V,!1),$>0){if($&16)Z(T,f,X,Y,B,P,S);else if($&2&&X.class!==Y.class&&o(T,"class",null,Y.class,S),$&4&&o(T,"style",X.style,Y.style,S),$&8){const rn=f.dynamicProps;for(let vn=0;vn<rn.length;vn++){const Pn=rn[vn],Hn=X[Pn],fe=Y[Pn];(fe!==Hn||Pn==="value")&&o(T,Pn,Hn,fe,S,k.children,B,P,Fn)}}$&1&&k.children!==f.children&&u(T,f.children)}else!z&&L==null&&Z(T,f,X,Y,B,P,S);((tn=Y.onVnodeUpdated)||j)&&Qn(()=>{tn&&ie(tn,B,f,k),j&&Pe(f,k,B,"updated")},P)},U=(k,f,B,P,S,V,z)=>{for(let T=0;T<f.length;T++){const $=k[T],L=f[T],j=$.el&&($.type===Wn||!gt($,L)||$.shapeFlag&70)?d($.el):B;y($,L,j,null,P,S,V,z,!0)}},Z=(k,f,B,P,S,V,z)=>{if(B!==P){if(B!==xn)for(const T in B)!Tt(T)&&!(T in P)&&o(k,T,B[T],null,z,f.children,S,V,Fn);for(const T in P){if(Tt(T))continue;const $=P[T],L=B[T];$!==L&&T!=="value"&&o(k,T,L,$,z,f.children,S,V,Fn)}"value"in P&&o(k,"value",B.value,P.value,z)}},M=(k,f,B,P,S,V,z,T,$)=>{const L=f.el=k?k.el:l(""),j=f.anchor=k?k.anchor:l("");let{patchFlag:X,dynamicChildren:Y,slotScopeIds:tn}=f;tn&&(T=T?T.concat(tn):tn),k==null?(s(L,B,P),s(j,B,P),O(f.children||[],B,j,S,V,z,T,$)):X>0&&X&64&&Y&&k.dynamicChildren?(U(k.dynamicChildren,Y,B,S,V,z,T),(f.key!=null||S&&f===S.subTree)&&_i(k,f,!0)):q(k,f,B,j,S,V,z,T,$)},nn=(k,f,B,P,S,V,z,T,$)=>{f.slotScopeIds=T,k==null?f.shapeFlag&512?S.ctx.activate(f,B,P,z,$):Ln(f,B,P,S,V,z,$):Sn(k,f,$)},Ln=(k,f,B,P,S,V,z)=>{const T=k.component=qm(k,P,S);if(Is(k)&&(T.ctx.renderer=Q),Qm(T),T.asyncDep){if(S&&S.registerDep(T,W),!k.el){const $=T.subTree=On(ae);b(null,$,f,B)}}else W(T,k,f,B,S,V,z)},Sn=(k,f,B)=>{const P=f.component=k.component;if(tm(k,f,B))if(P.asyncDep&&!P.asyncResolved){en(P,f,B);return}else P.next=f,Qd(P.update),P.effect.dirty=!0,P.update();else f.el=k.el,P.vnode=f},W=(k,f,B,P,S,V,z)=>{const T=()=>{if(k.isMounted){let{next:j,bu:X,u:Y,parent:tn,vnode:rn}=k;{const St=Bi(k);if(St){j&&(j.el=rn.el,en(k,j,z)),St.asyncDep.then(()=>{k.isUnmounted||T()});return}}let vn=j,Pn;ht(k,!1),j?(j.el=rn.el,en(k,j,z)):j=rn,X&&ca(X),(Pn=j.props&&j.props.onVnodeBeforeUpdate)&&ie(Pn,tn,j,rn),ht(k,!0);const Hn=qa(k),fe=k.subTree;k.subTree=Hn,y(fe,Hn,d(fe.el),C(fe),k,S,V),j.el=Hn.el,vn===null&&sm(k,Hn.el),Y&&Qn(Y,S),(Pn=j.props&&j.props.onVnodeUpdated)&&Qn(()=>ie(Pn,tn,j,rn),S)}else{let j;const{el:X,props:Y}=f,{bm:tn,m:rn,parent:vn}=k,Pn=Nt(f);if(ht(k,!1),tn&&ca(tn),!Pn&&(j=Y&&Y.onVnodeBeforeMount)&&ie(j,vn,f),ht(k,!0),X&&Bn){const Hn=()=>{k.subTree=qa(k),Bn(X,k.subTree,k,S,null)};Pn?f.type.__asyncLoader().then(()=>!k.isUnmounted&&Hn()):Hn()}else{const Hn=k.subTree=qa(k);y(null,Hn,B,P,k,S,V),f.el=Hn.el}if(rn&&Qn(rn,S),!Pn&&(j=Y&&Y.onVnodeMounted)){const Hn=f;Qn(()=>ie(j,vn,Hn),S)}(f.shapeFlag&256||vn&&Nt(vn.vnode)&&vn.vnode.shapeFlag&256)&&k.a&&Qn(k.a,S),k.isMounted=!0,f=B=P=null}},$=k.effect=new nr(T,ue,()=>Ca(L),k.scope),L=k.update=()=>{$.dirty&&$.run()};L.id=k.uid,ht(k,!0),L()},en=(k,f,B)=>{f.component=k;const P=k.vnode.props;k.vnode=f,k.next=null,Lm(k,f.props,P,B),Tm(k,f.children,B),wt(),ul(k),xt()},q=(k,f,B,P,S,V,z,T,$=!1)=>{const L=k&&k.children,j=k?k.shapeFlag:0,X=f.children,{patchFlag:Y,shapeFlag:tn}=f;if(Y>0){if(Y&128){De(L,X,B,P,S,V,z,T,$);return}else if(Y&256){Tn(L,X,B,P,S,V,z,T,$);return}}tn&8?(j&16&&Fn(L,S,V),X!==L&&u(B,X)):j&16?tn&16?De(L,X,B,P,S,V,z,T,$):Fn(L,S,V,!0):(j&8&&u(B,""),tn&16&&O(X,B,P,S,V,z,T,$))},Tn=(k,f,B,P,S,V,z,T,$)=>{k=k||Ot,f=f||Ot;const L=k.length,j=f.length,X=Math.min(L,j);let Y;for(Y=0;Y<X;Y++){const tn=f[Y]=$?et(f[Y]):be(f[Y]);y(k[Y],tn,B,null,S,V,z,T,$)}L>j?Fn(k,S,V,!0,!1,X):O(f,B,P,S,V,z,T,$,X)},De=(k,f,B,P,S,V,z,T,$)=>{let L=0;const j=f.length;let X=k.length-1,Y=j-1;for(;L<=X&&L<=Y;){const tn=k[L],rn=f[L]=$?et(f[L]):be(f[L]);if(gt(tn,rn))y(tn,rn,B,null,S,V,z,T,$);else break;L++}for(;L<=X&&L<=Y;){const tn=k[X],rn=f[Y]=$?et(f[Y]):be(f[Y]);if(gt(tn,rn))y(tn,rn,B,null,S,V,z,T,$);else break;X--,Y--}if(L>X){if(L<=Y){const tn=Y+1,rn=tn<j?f[tn].el:P;for(;L<=Y;)y(null,f[L]=$?et(f[L]):be(f[L]),B,rn,S,V,z,T,$),L++}}else if(L>Y)for(;L<=X;)Un(k[L],S,V,!0),L++;else{const tn=L,rn=L,vn=new Map;for(L=rn;L<=Y;L++){const ne=f[L]=$?et(f[L]):be(f[L]);ne.key!=null&&vn.set(ne.key,L)}let Pn,Hn=0;const fe=Y-rn+1;let St=!1,Xr=0;const ts=new Array(fe);for(L=0;L<fe;L++)ts[L]=0;for(L=tn;L<=X;L++){const ne=k[L];if(Hn>=fe){Un(ne,S,V,!0);continue}let Se;if(ne.key!=null)Se=vn.get(ne.key);else for(Pn=rn;Pn<=Y;Pn++)if(ts[Pn-rn]===0&&gt(ne,f[Pn])){Se=Pn;break}Se===void 0?Un(ne,S,V,!0):(ts[Se-rn]=L+1,Se>=Xr?Xr=Se:St=!0,y(ne,f[Se],B,null,S,V,z,T,$),Hn++)}const nl=St?$m(ts):Ot;for(Pn=nl.length-1,L=fe-1;L>=0;L--){const ne=rn+L,Se=f[ne],el=ne+1<j?f[ne+1].el:P;ts[L]===0?y(null,Se,B,el,S,V,z,T,$):St&&(Pn<0||L!==nl[Pn]?le(Se,B,el,2):Pn--)}}},le=(k,f,B,P,S=null)=>{const{el:V,type:z,transition:T,children:$,shapeFlag:L}=k;if(L&6){le(k.component.subTree,f,B,P);return}if(L&128){k.suspense.move(f,B,P);return}if(L&64){z.move(k,f,B,Q);return}if(z===Wn){s(V,f,B);for(let X=0;X<$.length;X++)le($[X],f,B,P);s(k.anchor,f,B);return}if(z===ds){v(k,f,B);return}if(P!==2&&L&1&&T)if(P===0)T.beforeEnter(V),s(V,f,B),Qn(()=>T.enter(V),S);else{const{leave:X,delayLeave:Y,afterLeave:tn}=T,rn=()=>s(V,f,B),vn=()=>{X(V,()=>{rn(),tn&&tn()})};Y?Y(V,rn,vn):vn()}else s(V,f,B)},Un=(k,f,B,P=!1,S=!1)=>{const{type:V,props:z,ref:T,children:$,dynamicChildren:L,shapeFlag:j,patchFlag:X,dirs:Y}=k;if(T!=null&&ga(T,null,B,k,!0),j&256){f.ctx.deactivate(k);return}const tn=j&1&&Y,rn=!Nt(k);let vn;if(rn&&(vn=z&&z.onVnodeBeforeUnmount)&&ie(vn,f,k),j&6)Ce(k.component,B,P);else{if(j&128){k.suspense.unmount(B,P);return}tn&&Pe(k,null,f,"beforeUnmount"),j&64?k.type.remove(k,f,B,S,Q,P):L&&(V!==Wn||X>0&&X&64)?Fn(L,f,B,!1,!0):(V===Wn&&X&384||!S&&j&16)&&Fn($,f,B),P&&Xn(k)}(rn&&(vn=z&&z.onVnodeUnmounted)||tn)&&Qn(()=>{vn&&ie(vn,f,k),tn&&Pe(k,null,f,"unmounted")},B)},Xn=k=>{const{type:f,el:B,anchor:P,transition:S}=k;if(f===Wn){Ie(B,P);return}if(f===ds){D(k);return}const V=()=>{a(B),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(k.shapeFlag&1&&S&&!S.persisted){const{leave:z,delayLeave:T}=S,$=()=>z(B,V);T?T(k.el,V,$):$()}else V()},Ie=(k,f)=>{let B;for(;k!==f;)B=h(k),a(k),k=B;a(f)},Ce=(k,f,B)=>{const{bum:P,scope:S,update:V,subTree:z,um:T}=k;P&&ca(P),S.stop(),V&&(V.active=!1,Un(z,k,f,B)),T&&Qn(T,f),Qn(()=>{k.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Fn=(k,f,B,P=!1,S=!1,V=0)=>{for(let z=V;z<k.length;z++)Un(k[z],f,B,P,S)},C=k=>k.shapeFlag&6?C(k.component.subTree):k.shapeFlag&128?k.suspense.next():h(k.anchor||k.el);let G=!1;const H=(k,f,B)=>{k==null?f._vnode&&Un(f._vnode,null,null,!0):y(f._vnode||null,k,f,null,null,null,B),G||(G=!0,ul(),Ea(),G=!1),f._vnode=k},Q={p:y,um:Un,m:le,r:Xn,mt:Ln,mc:O,pc:q,pbc:U,n:C,o:n};let cn,Bn;return e&&([cn,Bn]=e(Q)),{render:H,hydrate:cn,createApp:Sm(H,cn)}}function Ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ht({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function yi(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _i(n,e,t=!1){const s=n.children,a=e.children;if(J(s)&&J(a))for(let o=0;o<s.length;o++){const r=s[o];let l=a[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[o]=et(a[o]),l.el=r.el),t||_i(r,l)),l.type===zt&&(l.el=r.el)}}function $m(n){const e=n.slice(),t=[0];let s,a,o,r,l;const c=n.length;for(s=0;s<c;s++){const i=n[s];if(i!==0){if(a=t[t.length-1],n[a]<i){e[s]=a,t.push(s);continue}for(o=0,r=t.length-1;o<r;)l=o+r>>1,n[t[l]]<i?o=l+1:r=l;i<n[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}function Bi(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bi(e)}const Um=n=>n.__isTeleport,Wn=Symbol.for("v-fgt"),zt=Symbol.for("v-txt"),ae=Symbol.for("v-cmt"),ds=Symbol.for("v-stc"),ms=[];let Ae=null;function wi(n=!1){ms.push(Ae=n?null:[])}function Hm(){ms.pop(),Ae=ms[ms.length-1]||null}let _s=1;function _l(n){_s+=n}function xi(n){return n.dynamicChildren=_s>0?Ae||Ot:null,Hm(),_s>0&&Ae&&Ae.push(n),n}function Ef(n,e,t,s,a,o){return xi(Si(n,e,t,s,a,o,!0))}function Di(n,e,t,s,a){return xi(On(n,e,t,s,a,!0))}function ba(n){return n?n.__v_isVNode===!0:!1}function gt(n,e){return n.type===e.type&&n.key===e.key}const Ra="__vInternal",Ci=({key:n})=>n??null,ua=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nn(n)||Vn(n)||sn(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function Si(n,e=null,t=null,s=0,a=null,o=n===Wn?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ci(e),ref:e&&ua(e),scopeId:Pa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Mn};return l?(mr(c,t),o&128&&n.normalize(c)):t&&(c.shapeFlag|=Nn(t)?8:16),_s>0&&!r&&Ae&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ae.push(c),c}const On=zm;function zm(n,e=null,t=null,s=0,a=null,o=!1){if((!n||n===am)&&(n=ae),ba(n)){const l=pt(n,e,!0);return t&&mr(l,t),_s>0&&!o&&Ae&&(l.shapeFlag&6?Ae[Ae.indexOf(n)]=l:Ae.push(l)),l.patchFlag|=-2,l}if(n1(n)&&(n=n.__vccOpts),e){e=Gm(e);let{class:l,style:c}=e;l&&!Nn(l)&&(e.class=Jo(l)),_n(c)&&(Qp(c)&&!J(c)&&(c=In({},c)),e.style=Yo(c))}const r=Nn(n)?1:rm(n)?128:Um(n)?64:_n(n)?4:sn(n)?2:0;return Si(n,e,t,s,a,r,o,!0)}function Gm(n){return n?Qp(n)||Ra in n?In({},n):n:null}function pt(n,e,t=!1){const{props:s,ref:a,patchFlag:o,children:r}=n,l=e?jm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Ci(l),ref:e&&e.ref?t&&a?J(a)?a.concat(ua(e)):[a,ua(e)]:ua(e):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pt(n.ssContent),ssFallback:n.ssFallback&&pt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Pi(n=" ",e=0){return On(zt,null,n,e)}function kf(n,e){const t=On(ds,null,n);return t.staticCount=e,t}function ff(n="",e=!1){return e?(wi(),Di(ae,null,n)):On(ae,null,n)}function be(n){return n==null||typeof n=="boolean"?On(ae):J(n)?On(Wn,null,n.slice()):typeof n=="object"?et(n):On(zt,null,String(n))}function et(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pt(n)}function mr(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(J(e))t=16;else if(typeof e=="object")if(s&65){const a=e.default;a&&(a._c&&(a._d=!1),mr(n,a()),a._c&&(a._d=!0));return}else{t=32;const a=e._;!a&&!(Ra in e)?e._ctx=Mn:a===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else sn(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),s&64?(t=16,e=[Pi(e)]):t=8);n.children=e,n.shapeFlag|=t}function jm(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const a in s)if(a==="class")e.class!==s.class&&(e.class=Jo([e.class,s.class]));else if(a==="style")e.style=Yo([e.style,s.style]);else if(Ls(a)){const o=e[a],r=s[a];r&&o!==r&&!(J(o)&&o.includes(r))&&(e[a]=o?[].concat(o,r):r)}else a!==""&&(e[a]=s[a])}return e}function ie(n,e,t,s=null){de(n,e,7,[t,s])}const Km=ki();let Wm=0;function qm(n,e,t){const s=n.type,a=(e?e.appContext:n.appContext)||Km,o={uid:Wm++,vnode:n,type:s,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new fd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gi(s,a),emitsOptions:si(s,a),emit:null,emitted:null,propsDefaults:xn,inheritAttrs:s.inheritAttrs,ctx:xn,data:xn,props:xn,attrs:xn,slots:xn,refs:xn,setupState:xn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Jd.bind(null,o),n.ce&&n.ce(o),o}let zn=null;const Dt=()=>zn||Mn;let va,So;{const n=Rp(),e=(t,s)=>{let a;return(a=n[t])||(a=n[t]=[]),a.push(s),o=>{a.length>1?a.forEach(r=>r(o)):a[0](o)}};va=e("__VUE_INSTANCE_SETTERS__",t=>zn=t),So=e("__VUE_SSR_SETTERS__",t=>Vs=t)}const Ns=n=>{const e=zn;return va(n),n.scope.on(),()=>{n.scope.off(),va(e)}},Bl=()=>{zn&&zn.scope.off(),va(null)};function Li(n){return n.vnode.shapeFlag&4}let Vs=!1;function Qm(n,e=!1){e&&So(e);const{props:t,children:s}=n.vnode,a=Li(n);Pm(n,t,a,e),Rm(n,s);const o=a?Zm(n,e):void 0;return e&&So(!1),o}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Zp(new Proxy(n.ctx,ym));const{setup:s}=t;if(s){const a=n.setupContext=s.length>1?Jm(n):null,o=Ns(n);wt();const r=ot(s,n,0,[n.props,a]);if(xt(),o(),Pp(r)){if(r.then(Bl,Bl),e)return r.then(l=>{wl(n,l,e)}).catch(l=>{Fs(l,n,0)});n.asyncDep=r}else wl(n,r,e)}else Oi(n,e)}function wl(n,e,t){sn(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_n(e)&&(n.setupState=Xp(e)),Oi(n,t)}let xl;function Oi(n,e,t){const s=n.type;if(!n.render){if(!e&&xl&&!s.render){const a=s.template||ur(n).template;if(a){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:l,compilerOptions:c}=s,i=In(In({isCustomElement:o,delimiters:l},r),c);s.render=xl(a,i)}}n.render=s.render||ue}{const a=Ns(n);wt();try{_m(n)}finally{xt(),a()}}}function Ym(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Jn(n,"get","$attrs"),e[t]}}))}function Jm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Ym(n)},slots:n.slots,emit:n.emit,expose:e}}function Ta(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Xp(Zp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in cs)return cs[t](n)},has(e,t){return t in e||t in cs}}))}function Xm(n,e=!0){return sn(n)?n.displayName||n.name:n.name||e&&n.__name}function n1(n){return sn(n)&&"__vccOpts"in n}const A=(n,e)=>$d(n,e,Vs);function gf(n,e,t=xn){const s=Dt(),a=oe(e),o=ut(e),r=Da((c,i)=>{let u;return im(()=>{const d=n[e];Re(u,d)&&(u=d,i())}),{get(){return c(),t.get?t.get(u):u},set(d){const h=s.vnode.props;!(h&&(e in h||a in h||o in h)&&(`onUpdate:${e}`in h||`onUpdate:${a}`in h||`onUpdate:${o}`in h))&&Re(d,u)&&(u=d,i()),s.emit(`update:${e}`,t.set?t.set(d):d)}}}),l=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return r[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?n[l]||{}:r,done:!1}:{done:!0}}}},r}function p(n,e,t){const s=arguments.length;return s===2?_n(e)&&!J(e)?ba(e)?On(n,null,[e]):On(n,e):On(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ba(t)&&(t=[t]),On(n,e,t))}const Ri="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const e1="http://www.w3.org/2000/svg",t1="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,Dl=tt&&tt.createElement("template"),s1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const a=e==="svg"?tt.createElementNS(e1,n):e==="mathml"?tt.createElementNS(t1,n):tt.createElement(n,t?{is:t}:void 0);return n==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:n=>tt.createTextNode(n),createComment:n=>tt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>tt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,a,o){const r=t?t.previousSibling:e.lastChild;if(a&&(a===o||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),t),!(a===o||!(a=a.nextSibling)););else{Dl.innerHTML=s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n;const l=Dl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ze="transition",ss="animation",Gt=Symbol("_vtc"),it=(n,{slots:e})=>p(dm,Fi(n),e);it.displayName="Transition";const Ti={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},a1=it.props=In({},ii,Ti),Et=(n,e=[])=>{J(n)?n.forEach(t=>t(...e)):n&&n(...e)},Cl=n=>n?J(n)?n.some(e=>e.length>1):n.length>1:!1;function Fi(n){const e={};for(const M in n)M in Ti||(e[M]=n[M]);if(n.css===!1)return e;const{name:t="v",type:s,duration:a,enterFromClass:o=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=o,appearActiveClass:i=r,appearToClass:u=l,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:E=`${t}-leave-to`}=n,g=o1(a),y=g&&g[0],_=g&&g[1],{onBeforeEnter:b,onEnter:x,onEnterCancelled:v,onLeave:D,onLeaveCancelled:N,onBeforeAppear:w=b,onAppear:F=x,onAppearCancelled:O=v}=e,I=(M,nn,Ln)=>{Je(M,nn?u:l),Je(M,nn?i:r),Ln&&Ln()},U=(M,nn)=>{M._isLeaving=!1,Je(M,d),Je(M,E),Je(M,h),nn&&nn()},Z=M=>(nn,Ln)=>{const Sn=M?F:x,W=()=>I(nn,M,Ln);Et(Sn,[nn,W]),Sl(()=>{Je(nn,M?c:o),Ve(nn,M?u:l),Cl(Sn)||Pl(nn,s,y,W)})};return In(e,{onBeforeEnter(M){Et(b,[M]),Ve(M,o),Ve(M,r)},onBeforeAppear(M){Et(w,[M]),Ve(M,c),Ve(M,i)},onEnter:Z(!1),onAppear:Z(!0),onLeave(M,nn){M._isLeaving=!0;const Ln=()=>U(M,nn);Ve(M,d),Ni(),Ve(M,h),Sl(()=>{M._isLeaving&&(Je(M,d),Ve(M,E),Cl(D)||Pl(M,s,_,Ln))}),Et(D,[M,Ln])},onEnterCancelled(M){I(M,!1),Et(v,[M])},onAppearCancelled(M){I(M,!0),Et(O,[M])},onLeaveCancelled(M){U(M),Et(N,[M])}})}function o1(n){if(n==null)return null;if(_n(n))return[Xa(n.enter),Xa(n.leave)];{const e=Xa(n);return[e,e]}}function Xa(n){return id(n)}function Ve(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Gt]||(n[Gt]=new Set)).add(e)}function Je(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[Gt];t&&(t.delete(e),t.size||(n[Gt]=void 0))}function Sl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let r1=0;function Pl(n,e,t,s){const a=n._endId=++r1,o=()=>{a===n._endId&&s()};if(t)return setTimeout(o,t);const{type:r,timeout:l,propCount:c}=Ii(n,e);if(!r)return s();const i=r+"end";let u=0;const d=()=>{n.removeEventListener(i,h),o()},h=E=>{E.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},l+1),n.addEventListener(i,h)}function Ii(n,e){const t=window.getComputedStyle(n),s=g=>(t[g]||"").split(", "),a=s(`${Ze}Delay`),o=s(`${Ze}Duration`),r=Ll(a,o),l=s(`${ss}Delay`),c=s(`${ss}Duration`),i=Ll(l,c);let u=null,d=0,h=0;e===Ze?r>0&&(u=Ze,d=r,h=o.length):e===ss?i>0&&(u=ss,d=i,h=c.length):(d=Math.max(r,i),u=d>0?r>i?Ze:ss:null,h=u?u===Ze?o.length:c.length:0);const E=u===Ze&&/\b(transform|all)(,|$)/.test(s(`${Ze}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:E}}function Ll(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>Ol(t)+Ol(n[s])))}function Ol(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ni(){return document.body.offsetHeight}function l1(n,e,t){const s=n[Gt];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Bs=Symbol("_vod"),bf={beforeMount(n,{value:e},{transition:t}){n[Bs]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):as(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:s}){!e==!t&&(n.style.display===n[Bs]||!e)||(s?e?(s.beforeEnter(n),as(n,!0),s.enter(n)):s.leave(n,()=>{as(n,!1)}):as(n,e))},beforeUnmount(n,{value:e}){as(n,e)}};function as(n,e){n.style.display=e?n[Bs]:"none"}const p1=Symbol(""),i1=/(^|;)\s*display\s*:/;function c1(n,e,t){const s=n.style,a=Nn(t),o=s.display;let r=!1;if(t&&!a){if(e&&!Nn(e))for(const l in e)t[l]==null&&Po(s,l,"");for(const l in t)l==="display"&&(r=!0),Po(s,l,t[l])}else if(a){if(e!==t){const l=s[p1];l&&(t+=";"+l),s.cssText=t,r=i1.test(t)}}else e&&n.removeAttribute("style");Bs in n&&(n[Bs]=r?s.display:"",s.display=o)}const Rl=/\s*!important$/;function Po(n,e,t){if(J(t))t.forEach(s=>Po(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=u1(n,e);Rl.test(t)?n.setProperty(ut(s),t.replace(Rl,""),"important"):n[s]=t}}const Tl=["Webkit","Moz","ms"],no={};function u1(n,e){const t=no[e];if(t)return t;let s=oe(e);if(s!=="filter"&&s in n)return no[e]=s;s=Rs(s);for(let a=0;a<Tl.length;a++){const o=Tl[a]+s;if(o in n)return no[e]=o}return e}const Fl="http://www.w3.org/1999/xlink";function d1(n,e,t,s,a){if(s&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Fl,e.slice(6,e.length)):n.setAttributeNS(Fl,e,t);else{const o=Ed(e);t==null||o&&!Tp(t)?n.removeAttribute(e):n.setAttribute(e,o?"":t)}}function m1(n,e,t,s,a,o,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,a,o),n[e]=t??"";return}const l=n.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){n._value=t;const i=l==="OPTION"?n.getAttribute("value"):n.value,u=t??"";i!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const i=typeof n[e];i==="boolean"?t=Tp(t):t==null&&i==="string"?(t="",c=!0):i==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function $e(n,e,t,s){n.addEventListener(e,t,s)}function h1(n,e,t,s){n.removeEventListener(e,t,s)}const Il=Symbol("_vei");function E1(n,e,t,s,a=null){const o=n[Il]||(n[Il]={}),r=o[e];if(s&&r)r.value=s;else{const[l,c]=k1(e);if(s){const i=o[e]=b1(s,a);$e(n,l,i,c)}else r&&(h1(n,l,r,c),o[e]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function k1(n){let e;if(Nl.test(n)){e={};let s;for(;s=n.match(Nl);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ut(n.slice(2)),e]}let eo=0;const f1=Promise.resolve(),g1=()=>eo||(f1.then(()=>eo=0),eo=Date.now());function b1(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;de(v1(s,t.value),e,5,[s])};return t.value=n,t.attached=g1(),t}function v1(n,e){if(J(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>a=>!a._stopped&&s&&s(a))}else return e}const Vl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,A1=(n,e,t,s,a,o,r,l,c)=>{const i=a==="svg";e==="class"?l1(n,s,i):e==="style"?c1(n,t,s):Ls(e)?qo(e)||E1(n,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):y1(n,e,s,i))?m1(n,e,s,o,r,l,c):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),d1(n,e,s,i))};function y1(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Vl(e)&&sn(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=n.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Vl(e)&&Nn(t)?!1:e in n}const Vi=new WeakMap,Mi=new WeakMap,Aa=Symbol("_moveCb"),Ml=Symbol("_enterCb"),$i={name:"TransitionGroup",props:In({},a1,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Dt(),s=pi();let a,o;return di(()=>{if(!a.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!C1(a[0].el,t.vnode.el,r))return;a.forEach(w1),a.forEach(x1);const l=a.filter(D1);Ni(),l.forEach(c=>{const i=c.el,u=i.style;Ve(i,r),u.transform=u.webkitTransform=u.transitionDuration="";const d=i[Aa]=h=>{h&&h.target!==i||(!h||/transform$/.test(h.propertyName))&&(i.removeEventListener("transitionend",d),i[Aa]=null,Je(i,r))};i.addEventListener("transitionend",d)})}),()=>{const r=pn(n),l=Fi(r);let c=r.tag||Wn;a=o,o=e.default?ir(e.default()):[];for(let i=0;i<o.length;i++){const u=o[i];u.key!=null&&ys(u,As(u,l,s,t))}if(a)for(let i=0;i<a.length;i++){const u=a[i];ys(u,As(u,l,s,t)),Vi.set(u,u.el.getBoundingClientRect())}return On(c,null,o)}}},_1=n=>delete n.mode;$i.props;const B1=$i;function w1(n){const e=n.el;e[Aa]&&e[Aa](),e[Ml]&&e[Ml]()}function x1(n){Mi.set(n,n.el.getBoundingClientRect())}function D1(n){const e=Vi.get(n),t=Mi.get(n),s=e.left-t.left,a=e.top-t.top;if(s||a){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${a}px)`,o.transitionDuration="0s",n}}function C1(n,e,t){const s=n.cloneNode(),a=n[Gt];a&&a.forEach(l=>{l.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),t.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(s);const{hasTransform:r}=Ii(s);return o.removeChild(s),r}const ct=n=>{const e=n.props["onUpdate:modelValue"]||!1;return J(e)?t=>ca(e,t):e};function S1(n){n.target.composing=!0}function $l(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const he=Symbol("_assign"),Ul={created(n,{modifiers:{lazy:e,trim:t,number:s}},a){n[he]=ct(a);const o=s||a.props&&a.props.type==="number";$e(n,e?"change":"input",r=>{if(r.target.composing)return;let l=n.value;t&&(l=l.trim()),o&&(l=fs(l)),n[he](l)}),t&&$e(n,"change",()=>{n.value=n.value.trim()}),e||($e(n,"compositionstart",S1),$e(n,"compositionend",$l),$e(n,"change",$l))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:s,number:a}},o){if(n[he]=ct(o),n.composing)return;const r=a||n.type==="number"?fs(n.value):n.value,l=e??"";r!==l&&(document.activeElement===n&&n.type!=="range"&&(t||s&&n.value.trim()===l)||(n.value=l))}},P1={deep:!0,created(n,e,t){n[he]=ct(t),$e(n,"change",()=>{const s=n._modelValue,a=jt(n),o=n.checked,r=n[he];if(J(s)){const l=Xo(s,a),c=l!==-1;if(o&&!c)r(s.concat(a));else if(!o&&c){const i=[...s];i.splice(l,1),r(i)}}else if(Zt(s)){const l=new Set(s);o?l.add(a):l.delete(a),r(l)}else r(Ui(n,o))})},mounted:Hl,beforeUpdate(n,e,t){n[he]=ct(t),Hl(n,e,t)}};function Hl(n,{value:e,oldValue:t},s){n._modelValue=e,J(e)?n.checked=Xo(e,s.props.value)>-1:Zt(e)?n.checked=e.has(s.props.value):e!==t&&(n.checked=_t(e,Ui(n,!0)))}const L1={created(n,{value:e},t){n.checked=_t(e,t.props.value),n[he]=ct(t),$e(n,"change",()=>{n[he](jt(n))})},beforeUpdate(n,{value:e,oldValue:t},s){n[he]=ct(s),e!==t&&(n.checked=_t(e,s.props.value))}},O1={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const a=Zt(e);$e(n,"change",()=>{const o=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?fs(jt(r)):jt(r));n[he](n.multiple?a?new Set(o):o:o[0]),n._assigning=!0,Be(()=>{n._assigning=!1})}),n[he]=ct(s)},mounted(n,{value:e,oldValue:t,modifiers:{number:s}}){zl(n,e,t,s)},beforeUpdate(n,e,t){n[he]=ct(t)},updated(n,{value:e,oldValue:t,modifiers:{number:s}}){n._assigning||zl(n,e,t,s)}};function zl(n,e,t,s){const a=n.multiple,o=J(e);if(!(a&&!o&&!Zt(e))){for(let r=0,l=n.options.length;r<l;r++){const c=n.options[r],i=jt(c);if(a)if(o){const u=typeof i;u==="string"||u==="number"?c.selected=e.includes(s?fs(i):i):c.selected=Xo(e,i)>-1}else c.selected=e.has(i);else if(_t(jt(c),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!a&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function jt(n){return"_value"in n?n._value:n.value}function Ui(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const vf={created(n,e,t){sa(n,e,t,null,"created")},mounted(n,e,t){sa(n,e,t,null,"mounted")},beforeUpdate(n,e,t,s){sa(n,e,t,s,"beforeUpdate")},updated(n,e,t,s){sa(n,e,t,s,"updated")}};function R1(n,e){switch(n){case"SELECT":return O1;case"TEXTAREA":return Ul;default:switch(e){case"checkbox":return P1;case"radio":return L1;default:return Ul}}}function sa(n,e,t,s,a){const r=R1(n.tagName,t.props&&t.props.type)[a];r&&r(n,e,t,s)}const T1=["ctrl","shift","alt","meta"],F1={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>T1.some(t=>n[`${t}Key`]&&!e.includes(t))},Af=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(a,...o)=>{for(let r=0;r<e.length;r++){const l=F1[e[r]];if(l&&l(a,e))return}return n(a,...o)})},I1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=a=>{if(!("key"in a))return;const o=ut(a.key);if(e.some(r=>r===o||I1[r]===o))return n(a)})},N1=In({patchProp:A1},s1);let to,Gl=!1;function V1(){return to=Gl?to:Vm(N1),Gl=!0,to}const M1=(...n)=>{const e=V1().createApp(...n),{mount:t}=e;return e.mount=s=>{const a=U1(s);if(a)return t(a,!0,$1(a))},e};function $1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function U1(n){return Nn(n)?document.querySelector(n):n}var H1=["link","meta","script","style","noscript","template"],z1=["title","base"],G1=([n,e,t])=>z1.includes(n)?n:H1.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([s,a])=>typeof a=="boolean"?a?[s,""]:null:[s,a]).filter(s=>s!=null).sort(([s],[a])=>s.localeCompare(a)),t]):null,j1=n=>{const e=new Set,t=[];return n.forEach(s=>{const a=G1(s);a&&!e.has(a)&&(e.add(a),t.push(s))}),t},K1=n=>n[0]==="/"?n:`/${n}`,hr=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,Ge=n=>/^(https?:)?\/\//.test(n),W1=/.md((\?|#).*)?$/,Kt=(n,e="/")=>!!(Ge(n)||n.startsWith("/")&&!n.startsWith(e)&&!W1.test(n)),Hi=n=>/^[a-z][a-z0-9+.-]*:/.test(n),rt=n=>Object.prototype.toString.call(n)==="[object Object]",q1=n=>{const[e,...t]=n.split(/(\?|#)/);if(!e||e.endsWith("/"))return n;let s=e.replace(/(^|\/)README.md$/i,"$1index.html");return s.endsWith(".md")?s=s.substring(0,s.length-3)+".html":s.endsWith(".html")||(s=s+".html"),s.endsWith("/index.html")&&(s=s.substring(0,s.length-10)),s+t.join("")},Er=n=>n[n.length-1]==="/"?n.slice(0,-1):n,zi=n=>n[0]==="/"?n.slice(1):n,Q1=(n,e)=>{const t=Object.keys(n).sort((s,a)=>{const o=a.split("/").length-s.split("/").length;return o!==0?o:a.length-s.length});for(const s of t)if(e.startsWith(s))return s;return"/"},Dn=n=>typeof n=="string";const Z1="modulepreload",Y1=function(n){return"/"+n},jl={},m=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link");a=Promise.all(t.map(r=>{if(r=Y1(r),r in jl)return;jl[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const h=o[d];if(h.href===r&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Z1,l||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),l)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>e()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},J1=JSON.parse('{"/note-book/Kubernetes/Kubernetes Make Prometheus+Grafana.html":"/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html","/note-book/Kubernetes/Kubernetes Make Prometheus+Grafana.md":"/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html","/note-book/Nginx&&OpenResty/Nginx作为推流服务器.html":"/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/note-book/Nginx&&OpenResty/Nginx作为推流服务器.md":"/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/note-book/Nginx&&OpenResty/Nginx变量大全.html":"/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html","/note-book/Nginx&&OpenResty/Nginx变量大全.md":"/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html","/note-book/Nginx&&OpenResty/Nginx正向代理.html":"/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/Nginx&&OpenResty/Nginx正向代理.md":"/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/Nginx&&OpenResty/Nginx正向代理支持https.html":"/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","/note-book/Nginx&&OpenResty/Nginx正向代理支持https.md":"/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","/note-book/Nginx&&OpenResty/Nginx正向代理高并发.html":"/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","/note-book/Nginx&&OpenResty/Nginx正向代理高并发.md":"/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","/note-book/Nginx&&OpenResty/Nginx的url过长导致fastcgi协议崩溃.html":"/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html","/note-book/Nginx&&OpenResty/Nginx的url过长导致fastcgi协议崩溃.md":"/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html","/note-book/Nginx&&OpenResty/Nginx的负载均衡和故障转移.html":"/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","/note-book/Nginx&&OpenResty/Nginx的负载均衡和故障转移.md":"/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","/note-book/Nginx&&OpenResty/apt安装OpenResty教程.html":"/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html","/note-book/Nginx&&OpenResty/apt安装OpenResty教程.md":"/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html","/note-book/Nginx&&OpenResty/nginx-plus-module-lua.html":"/note-book/Nginx__OpenResty/nginx-plus-module-lua.html","/note-book/Nginx&&OpenResty/nginx-plus-module-lua.md":"/note-book/Nginx__OpenResty/nginx-plus-module-lua.html","/note-book/Nginx&&OpenResty/nginx01.html":"/note-book/Nginx__OpenResty/nginx01.html","/note-book/Nginx&&OpenResty/nginx01.md":"/note-book/Nginx__OpenResty/nginx01.html","/note-book/Nginx&&OpenResty/nginx02.html":"/note-book/Nginx__OpenResty/nginx02.html","/note-book/Nginx&&OpenResty/nginx02.md":"/note-book/Nginx__OpenResty/nginx02.html","/note-book/Nginx&&OpenResty/nginx03.html":"/note-book/Nginx__OpenResty/nginx03.html","/note-book/Nginx&&OpenResty/nginx03.md":"/note-book/Nginx__OpenResty/nginx03.html","/note-book/Nginx&&OpenResty/nginx单机百万并发.html":"/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html","/note-book/Nginx&&OpenResty/nginx单机百万并发.md":"/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html","/note-book/Nginx&&OpenResty/nginx配置示例.html":"/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html","/note-book/Nginx&&OpenResty/nginx配置示例.md":"/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html","/note-book/Nginx&&OpenResty/ngx_stream_ssl_preread_module.html":"/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html","/note-book/Nginx&&OpenResty/ngx_stream_ssl_preread_module.md":"/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html","/note-book/Kafka/ELK+kafka构建高并发分布式日志收集系统/elk+kfaka.html":"/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html","/note-book/Kafka/ELK+kafka构建高并发分布式日志收集系统/elk+kfaka.md":"/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html","/note-book/Research&Develop/Algorithm/":"/note-book/Research_Develop/Algorithm/","/note-book/Research&Develop/Algorithm/README.md":"/note-book/Research_Develop/Algorithm/","/note-book/Research&Develop/Algorithm/数据结构与算法哔哩哔哩比特就业课.html":"/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html","/note-book/Research&Develop/Algorithm/数据结构与算法哔哩哔哩比特就业课.md":"/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html","/note-book/Research&Develop/C/C语言volatile关键字详解.html":"/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html","/note-book/Research&Develop/C/C语言volatile关键字详解.md":"/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html","/note-book/Research&Develop/C/":"/note-book/Research_Develop/C/","/note-book/Research&Develop/C/README.md":"/note-book/Research_Develop/C/","/note-book/Research&Develop/C/二分查找.html":"/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html","/note-book/Research&Develop/C/二分查找.md":"/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html","/note-book/Research&Develop/Python/FastAPI-Python高性能web框架.html":"/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research&Develop/Python/FastAPI-Python高性能web框架.md":"/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research&Develop/Python/PyInstaller带静态依赖文件打包教程.html":"/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research&Develop/Python/PyInstaller带静态依赖文件打包教程.md":"/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research&Develop/Python/Python之正则表达式细讲.html":"/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research&Develop/Python/Python之正则表达式细讲.md":"/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research&Develop/Python/Python代码藏毒.html":"/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html","/note-book/Research&Develop/Python/Python代码藏毒.md":"/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html","/note-book/Research&Develop/Python/Python数据切片例子.html":"/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research&Develop/Python/Python数据切片例子.md":"/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research&Develop/Python/Python数据格式化format.html":"/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html","/note-book/Research&Develop/Python/Python数据格式化format.md":"/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html","/note-book/Research&Develop/Python/python re.Match object的说明.html":"/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research&Develop/Python/python re.Match object的说明.md":"/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research&Develop/Python/python re.html":"/note-book/Research_Develop/Python/python%20re.html","/note-book/Research&Develop/Python/python re.md":"/note-book/Research_Develop/Python/python%20re.html","/note-book/Research&Develop/Python/新版VSCode中Python设置自动补全函数括号.html":"/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html","/note-book/Research&Develop/Python/新版VSCode中Python设置自动补全函数括号.md":"/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html","/note-book/Research&Develop/Shell/shell脚本bad substitution.html":"/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html","/note-book/Research&Develop/Shell/shell脚本bad substitution.md":"/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html","/note-book/Research&Develop/C/ACLLib/ACLLib.html":"/note-book/Research_Develop/C/ACLLib/ACLLib.html","/note-book/Research&Develop/C/ACLLib/ACLLib.md":"/note-book/Research_Develop/C/ACLLib/ACLLib.html","/note-book/Research&Develop/Python/python面向对象/01_面向对象（OOP）基本概念.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research&Develop/Python/python面向对象/01_面向对象（OOP）基本概念.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research&Develop/Python/python面向对象/02_类和对象.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research&Develop/Python/python面向对象/02_类和对象.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research&Develop/Python/python面向对象/03_面相对象基础语法.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/03_面相对象基础语法.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/04_面向对象封装案例.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/04_面向对象封装案例.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/05_面向对象封装案例 II.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research&Develop/Python/python面向对象/05_面向对象封装案例 II.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research&Develop/Python/python面向对象/06_私有属性和私有方法.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/06_私有属性和私有方法.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/07_单例.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/07_单例.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/08_多态.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research&Develop/Python/python面向对象/08_多态.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research&Develop/Python/python面向对象/09_继承.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research&Develop/Python/python面向对象/09_继承.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research&Develop/Python/python面向对象/10_类属性和类方法.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/10_类属性和类方法.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/11_eval函数.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research&Develop/Python/python面向对象/11_eval函数.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research&Develop/Python/python面向对象/12_模块和包.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research&Develop/Python/python面向对象/12_模块和包.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research&Develop/Python/python面向对象/13_文件.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research&Develop/Python/python面向对象/13_文件.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research&Develop/Python/python面向对象/14_异常.html":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/Research&Develop/Python/python面向对象/14_异常.md":"/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html"}'),X1=Object.fromEntries([["/",{loader:()=>m(()=>import("./index.html-DWG_Hdhq.js"),__vite__mapDeps([0,1])),meta:{y:"h",t:"主页",i:"home"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/001-PyQt%E4%BB%8B%E7%BB%8D%E4%B8%8E%E5%AE%89%E8%A3%85.html",{loader:()=>m(()=>import("./001-PyQt介绍与安装.html-BAIki6Gp.js"),__vite__mapDeps([2,1])),meta:{d:1698580921e3,e:`
<h2>一、介绍</h2>
<h3>1. Qt</h3>
<figure><figcaption>Qt 是什么</figcaption></figure>
<p>Qt（官方发音 <code>[kju:t]</code>）是一个跨平台的C++开发库，主要用来开发图形用户界面（Graphical User Interface，GUI）程序</p>
<p>Qt 是纯 C++ 开发的，正常情况下需要先学习C语言、然后在学习C++然后才能使用Qt开发带界面的程序</p>
<p>多亏了开源社区使得<strong>Qt 还可以用Python、Ruby、Perl 等脚本语言进行开发。</strong></p>`,r:{minutes:2.75,words:824},y:"a",t:"001-PyQt介绍与安装"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/002-PyQt%E5%9F%BA%E6%9C%ACUI.html",{loader:()=>m(()=>import("./002-PyQt基本UI.html-uJU2pVLU.js"),__vite__mapDeps([3,1])),meta:{d:1698580921e3,e:`
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
</code></pre></div>`,r:{minutes:3.42,words:1027},y:"a",t:"002-PyQt基本UI"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/003-%E5%B8%83%E5%B1%80.html",{loader:()=>m(()=>import("./003-布局.html-DhpcVPJu.js"),__vite__mapDeps([4,1])),meta:{d:1698580921e3,e:`
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
</code></pre></div>`,r:{minutes:2.53,words:759},y:"a",t:"003-布局"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/004-%E5%B8%83%E5%B1%802.html",{loader:()=>m(()=>import("./004-布局2.html-Dt-8n1l_.js"),__vite__mapDeps([5,1])),meta:{d:1698580921e3,e:`
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
</code></pre></div>`,r:{minutes:2.01,words:603},y:"a",t:"004-布局2"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/005-%E7%AA%97%E5%8F%A3.html",{loader:()=>m(()=>import("./005-窗口.html-D9jhbKvB.js"),__vite__mapDeps([6,1])),meta:{d:1698580921e3,e:`
<h2>一、分类</h2>
<p>在Qt中，生成窗口有三种方式：  <code>QWidget</code>  |  <code>QMainWindow</code> | <code>QDialog</code></p>
<h3>1. QWidget</h3>
<p>控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域</p>
<h3>2. QMainWindow</h3>
<p>是<code> QWidget</code>的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域</p>
<h3>3. QDialog</h3>
<p>对话框窗口的基类</p>`,r:{minutes:1.66,words:498},y:"a",t:"005-窗口"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/006-%E4%BF%A1%E5%8F%B7%E4%B8%8E%E6%A7%BD.html",{loader:()=>m(()=>import("./006-信号与槽.html-D18wrSTR.js"),__vite__mapDeps([7,1])),meta:{d:1698580921e3,e:`
<h2>一、说明</h2>
<p><code>信号</code>和<code>槽</code>是 Qt的核心内容</p>
<h3>1. 信号(signal)</h3>
<p>其实就是事件（按钮点击 、内容发生改变 、窗口的关闭事件） 或者是 状态 （check选中了， togglebutton 切换。）</p>
<p>当程序触发了某种状态或者发生了某种事件（比如：按钮被点击了, 内容改变等等），那么即可发射出来一个<code>信号</code>。</p>
<h3>2. 槽( slot)</h3>
<p>若想捕获这个信号，然后执行相应的逻辑代码，那么就需要使用到 <code>槽</code> ， <code>槽</code>实际上是一个函数， 当<code>信号</code>发射出来后，会执行与之绑定的<code>槽</code>函数</p>`,r:{minutes:3.25,words:976},y:"a",t:"006-信号与槽"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/007-Qt%20Designer.html",{loader:()=>m(()=>import("./007-Qt Designer.html-D-FSdb1W.js"),__vite__mapDeps([8,1])),meta:{d:1698580921e3,e:`
<h2>一、介绍</h2>
<p>纯靠代码来编写界面，效率属实是有点底，今天我们用另外一个辅助设计图形化的软件 <code>QT Designer</code></p>
<h3>1. 下载</h3>
<p>Mac版本：[http://download.codetutor.top/software/Mac/Qt%20Designer.dmg](http://download.codetutor.top/software/Mac/Qt Designer.dmg)</p>
<p>Windows版本：[http://download.codetutor.top/software/win/Qt Designer Setup.exe](http://download.codetutor.top/software/win/Qt Designer Setup.exe)</p>`,r:{minutes:2.98,words:895},y:"a",t:"007-Qt Designer"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/008-PyQt%E5%A4%9A%E7%BA%BF%E7%A8%8B.html",{loader:()=>m(()=>import("./008-PyQt多线程.html-CP5Pnwxp.js"),__vite__mapDeps([9,1])),meta:{d:1698580921e3,e:`
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
</code></pre></div>`,r:{minutes:2.17,words:652},y:"a",t:"008-PyQt多线程"}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/009-%E6%89%93%E5%8C%85%E4%B8%BA%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F.html",{loader:()=>m(()=>import("./009-打包为可执行程序.html-B5wHI2MU.js"),__vite__mapDeps([10,1])),meta:{d:1698580921e3,e:`
<h2>方式1：使用pyinstaller发布(推荐)</h2>
<h4>1. 安装</h4>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre></div><h4>2. 终端运行</h4>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>pyinstaller --windowed --onefile --clean --noconfirm main.py
pyinstaller --windowed --onefile --clean --noconfirm main.spec
</code></pre></div>`,r:{minutes:.98,words:294},y:"a",t:"009-Mac下，发布PyQT为app程序"}}],["/about/friend.html",{loader:()=>m(()=>import("./friend.html-BR2VFHF8.js"),__vite__mapDeps([11,1])),meta:{d:1699861302e3,e:`
<h3>一个模板</h3>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>&lt;VPCard
  title="运维开发绿皮书"
  desc="放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重<span class="token tag">!</span>"
  logo="https<span class="token punctuation">:</span>//www.geekery.cn/logo.svg"
  link="https<span class="token punctuation">:</span>//www.geekery.cn/"
  background="rgba(253<span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> 0.15)"
/<span class="token punctuation">&gt;</span>

<span class="token comment"># 友链申请 https://www.geekery.cn/about/friend.html</span>
</code></pre></div>`,r:{minutes:1.71,words:514},y:"a",t:"友情链接"}}],["/about/me.html",{loader:()=>m(()=>import("./me.html-DfQ_yREt.js"),__vite__mapDeps([12,1])),meta:{d:1699861302e3,e:`

`,r:{minutes:.8,words:240},y:"a",t:"我"}}],["/free-service/cloudflare-warp.html",{loader:()=>m(()=>import("./cloudflare-warp.html-BzW2cB-E.js"),__vite__mapDeps([13,1])),meta:{y:"p",t:"Cloudflare Warp 团队服务",i:"fa-brands fa-cloudflare"}}],["/free-service/docker-hub-mirror.html",{loader:()=>m(()=>import("./docker-hub-mirror.html-CcWJPZ6S.js"),__vite__mapDeps([14,1])),meta:{d:1707206102e3,e:`
<p>免费Docker镜像拉取加速服务，需要按照以下步骤进行配置：</p>
<h2>Linux</h2>
<p>在Linux系统中，运行以下命令来配置镜像加速服务：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://www.geekery.cn/sh/docker/set_mirror.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre></div>`,r:{minutes:1.28,words:385},y:"a",t:"DockerHub镜像加速",i:"fa-brands fa-docker"}}],["/free-service/github-direct.html",{loader:()=>m(()=>import("./github-direct.html-DdBjmRE_.js"),__vite__mapDeps([15,1])),meta:{d:1708492851e3,e:`
<p>在Linux上下载GitHub文件太慢了，直接受不了。于是我做了一个用于加速 GitHub 文件下载速度的代理服务，旨在帮助用户更快地获取 GitHub 上的文件、Releases、archive、gist以及raw.githubusercontent.com 文件。通过我们的代理服务，您可以更快地下载这些文件，提高效率，节省时间。</p>
<p>地址： https://github.geekery.cn/
项目源码： https://github.com/Paper-Dragon/github-proxy</p>
<h2>主要功能</h2>
<ul>
<li>加速 GitHub 文件下载</li>
<li>提供对 Releases 的加速访问</li>
<li>加速 archive 和 gist 的下载</li>
<li>优化 raw.githubusercontent.com 文件的下载速度</li>
<li>加速 https://codeload.github.com 的下载</li>
</ul>`,r:{minutes:.95,words:285},y:"a",t:"GitHub加速下载",i:"fa-brands fa-github"}}],["/free-service/tools.html",{loader:()=>m(()=>import("./tools.html-C9Q6f7uY.js"),__vite__mapDeps([16,1])),meta:{y:"p",t:"小工具",i:"wrench"}}],["/note-book/",{loader:()=>m(()=>import("./index.html-CZOsG3N9.js"),__vite__mapDeps([17,1])),meta:{d:1691939318e3,c:["笔记"],e:`
<h1>写在最前面的</h1>
<blockquote>
<p>如果你对我的文档有什么看法或者想把自己的文档加进来一起编辑，请点击左上角的编辑此页面编辑，可以在代码仓库直接修改，由作者审核后公布。
本网站使用 git 工具管理的<strong>分布式</strong>笔记，不必担心数据丢失，欢迎各位大佬添加自己的笔记到分布式仓库！！ 顺手可以点一下 <a href="https://gitee.com/PaperDragon/note-book/star" target="_blank" rel="noopener noreferrer">star⭐</a>，这个是对作者的支持！</p>
</blockquote>`,r:{minutes:1.97,words:592},y:"a",t:"笔记",i:"laptop-code"}}],["/note-book/%E6%9D%80%E4%B8%8D%E6%AD%BB%E7%9A%84%E8%BF%9B%E7%A8%8B.html",{loader:()=>m(()=>import("./杀不死的进程.html-C2jZg6pi.js"),__vite__mapDeps([18,1])),meta:{d:1688688e6,l:"2023年7月7日",c:"网络安全",e:`
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
</blockquote>`,r:{minutes:8.06,words:2419},y:"a",t:"杀不死的进程",i:"computer"}}],["/note-book/AI-Training/Windows_WSL2%E5%AE%89%E8%A3%85nvidia-cuda%E9%A9%B1%E5%8A%A8.html",{loader:()=>m(()=>import("./Windows_WSL2安装nvidia-cuda驱动.html-BWdRHr8q.js"),__vite__mapDeps([19,1])),meta:{d:1705891627e3,e:`
<blockquote>
<p>部分资料来自： https://www.bilibili.com/read/cv14608547/</p>
<p>感谢作者： https://space.bilibili.com/157323585</p>
</blockquote>
<h2>安装WSL2</h2>
<p>这一步可以参考Windows官网，以及其他B站UP主的安装教程，贴两个链接（一定要装WSL2）。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>https://learn.microsoft.com/zh-cn/windows/wsl/install
</code></pre></div>`,r:{minutes:1.95,words:585},y:"a",t:"Windows10/11 WSL2 安装nvidia-cuda驱动"}}],["/note-book/AI-Training/torch%20%E7%8E%AF%E5%A2%83.html",{loader:()=>m(()=>import("./torch 环境.html-C9-DrVuX.js"),__vite__mapDeps([20,1])),meta:{d:1691939318e3,e:`
<h1>安装Anaconda</h1>
<p>推荐直接上官网下载
<a href="https://www.anaconda.com/products/individual" target="_blank" rel="noopener noreferrer">https://www.anaconda.com/products/individua</a></p>
<h1>安装CUDA和cuDNN</h1>
<h2>安装显卡驱动</h2>
<p>首先需要下载和安装显卡驱动，进入下面网址选择合适的显卡驱动下载并按照提示安装。如果已安装此处略过。
<a href="https://www.nvidia.cn/geforce/drivers/" target="_blank" rel="noopener noreferrer">https://www.nvidia.cn/geforce/drivers/</a></p>`,r:{minutes:1.95,words:585},y:"a",t:"Torch部署"}}],["/note-book/AI-Training/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%BC%80%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%92%8C%E9%97%AD%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98.html",{loader:()=>m(()=>import("./英伟达开源驱动和闭源驱动冲突问题.html-BVvO2Np3.js"),__vite__mapDeps([21,1])),meta:{d:1699592127e3,e:`
<h2>起因</h2>
<p>今天朋友安装驱动遇到了一些问题，给了一张日志图片问我怎么办，我看着显示报错最后一行显示 PCI-E xxx.xxxx.xxx
nouveau。就是nvidia显卡驱动的问题八九不离十了。</p>
<p>nvidia给了不同类型的驱动多种版本，开源驱动对Linux支持较差，在切换闭源官方驱动的时候经常出现各种问题。</p>
<figure><figcaption>image-20231110113058910</figcaption></figure>
<p>下面是安装步骤的总结</p>
<h2>正常安装步骤</h2>
<h3>检查开源驱动的存在情况</h3>
<p>运行如下指令：</p>`,r:{minutes:1.47,words:440},y:"a",t:"英伟达开源驱动和闭源驱动冲突问题"}}],["/note-book/Android/Ubuntu%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85Android%20SDK.html",{loader:()=>m(()=>import("./Ubuntu命令行安装Android SDK.html-lvwNHtfR.js"),__vite__mapDeps([22,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:.6,words:179},y:"a",t:"Ubuntu命令行安装Android SDK"}}],["/note-book/Btrfs/",{loader:()=>m(()=>import("./index.html-GrFDHNvD.js"),__vite__mapDeps([23,1])),meta:{d:1691939318e3,e:`
<h2>Btrfs 简介</h2>
<p>文件系统似乎是内核中比较稳定的部分，多年来，人们一直使用 ext2/3，ext 文件系统以其卓越的稳定性成为了事实上的 Linux 标准文件系统。近年来 ext2/3  暴露出了一些扩展性问题，于是便催生了 ext4 。在 2008 年发布的 Linux2.6.19 内核中集成了 ext4 的 dev 版本。  2.6.28 内核发布时，ext4 结束了开发版，开始接受用户的使用。似乎 ext 就将成为 Linux 文件系统的代名词。然而当您阅读很多有关 ext4 的文章时，会发现都不约而同地提到了 btrfs，并认为 ext4 将是一个过渡的文件系统。 ext4 的作者 Theodore  Tso 也盛赞 btrfs 并认为 btrfs 将成为下一代 Linux 标准文件系统。 Oracle，IBM， Intel 等厂商也对  btrfs 表现出了极大的关注，投入了资金和人力。为什么 btrfs 如此受人瞩目呢。这便是本文首先想探讨的问题。</p>`,r:{minutes:24.2,words:7260},y:"a",t:"Linux 文件系统的未来 btrfs"}}],["/note-book/Btrfs/Snapper%E7%8E%A9%E8%BD%ACbtrfs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{loader:()=>m(()=>import("./Snapper玩转btrfs文件系统.html-Bsv-V-J8.js"),__vite__mapDeps([24,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/31082518</p>
</blockquote>
<h2><strong>配置 snapper</strong></h2>
<p>在 Btrfs 中，snapper 是以子卷为单位管理快照的。我们要先为子卷建立配置文件才能管理快照。</p>
<p>这里我们不另外划分子卷，直接以 Btrfs 挂载点的根目录来进行操作（根目录也算是一个子卷）。</p>
<h3>4.1 创建配置文件</h3>
<p>命令基本用法</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>snapper -c &lt;配置名称&gt; create-config &lt;子卷路径&gt; 
</code></pre></div>`,r:{minutes:4.89,words:1467},y:"a",t:"Snapper玩转btrfs文件系统"}}],["/note-book/Btrfs/btrfs%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>m(()=>import("./btrfs的使用.html-B6bL1jyO.js"),__vite__mapDeps([25,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:12.08,words:3623},y:"a",t:"BTRFS 使用简介"}}],["/note-book/Btrfs/some%20device%20missing%E6%96%B9%E6%B3%95.html",{loader:()=>m(()=>import("./some device missing方法.html-B2WFJhC3.js"),__vite__mapDeps([26,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:.61,words:182},y:"a",t:"*** Some devices missing"}}],["/note-book/CVE/CVE-2023-32233.html",{loader:()=>m(()=>import("./CVE-2023-32233.html-CwD-rnUp.js"),__vite__mapDeps([27,1])),meta:{d:1706940111e3,e:`
<p>:TODO</p>
`,r:{minutes:.01,words:4},y:"a",t:"CVE-2023-32233"}}],["/note-book/CVE/CVE-2024-21626%E5%88%A9%E7%94%A8%E5%9C%BA%E6%99%AF.html",{loader:()=>m(()=>import("./CVE-2024-21626利用场景.html-DsTNTM6o.js"),__vite__mapDeps([28,1])),meta:{d:1706774001e3,e:`
<h2>影响组件</h2>
<p>runc是一个根据OCI规范，在Linux上生成和运行容器的命令行工具。runc的使用非常灵活，可以与各种容器工具和平台集成，如Docker、Kubernetes等。它支持多种容器格式，包括OCI规范定义的标准格式，以及其他格式如Docker镜像格式。作为开源项目，runc受到全球开发者社区的广泛参与和贡献，被广泛应用于生产环境中的容器化部署。</p>
<h2>漏洞描述</h2>
<p>近日，奇安信CERT监测到runc官方发布安全通告修复了<strong>runc容器逃逸漏洞(CVE-2024-21626)</strong>，由于runc存在内部文件描述符泄露，本地攻击者可以通过多种方式进行容器逃逸：</p>`,r:{minutes:2.47,words:741},y:"a",t:"CVE-2024-21626 利用场景"}}],["/note-book/CoreDNS/",{loader:()=>m(()=>import("./index.html-8YStyZ1Z.js"),__vite__mapDeps([29,1])),meta:{d:1691939318e3,c:["CoreDNS"],r:{minutes:.03,words:9},y:"a",t:"CoreDNS",i:"laptop-code"}}],["/note-book/CoreDNS/ext-plugin-redis.html",{loader:()=>m(()=>import("./ext-plugin-redis.html-DQTAltUZ.js"),__vite__mapDeps([30,1])),meta:{d:1691939318e3,e:`
<h2>Description</h2>
<p><em>redis</em> enables reading zone data from redis database.
this plugin should be located right next to <em>etcd</em> in <em>plugins.cfg</em></p>
<h2>Syntax</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>redis
</code></pre></div>`,r:{minutes:1.57,words:472},y:"a",t:"使用Redis插件"}}],["/note-book/CoreDNS/%E7%90%86%E8%A7%A3CoreDNS.html",{loader:()=>m(()=>import("./理解CoreDNS.html-Qx5_7csB.js"),__vite__mapDeps([31,1])),meta:{d:1691939318e3,e:`
<h2>什么是CoreDNS【官方解释】</h2>
<p>CoreDNS 是一个 DNS 服务器。它是用<a href="https://golang.org/" target="_blank" rel="noopener noreferrer">Go</a>编写的。</p>
<p>CoreDNS 不同于其他 DNS 服务器，例如（所有优秀的） <a href="https://www.isc.org/bind/" target="_blank" rel="noopener noreferrer">BIND</a>、 <a href="https://www.knot-dns.cz/" target="_blank" rel="noopener noreferrer">Knot</a>、 <a href="https://www.powerdns.com/" target="_blank" rel="noopener noreferrer">PowerDNS</a>和 <a href="https://www.unbound.net/" target="_blank" rel="noopener noreferrer">Unbound</a>（技术上是解析器，但仍然值得一提），因为它非常灵活，几乎所有功能都外包到插件中。</p>`,r:{minutes:11.54,words:3462},y:"a",t:"理解CoreDNS"}}],["/note-book/DNS/Bind9%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>m(()=>import("./Bind9的使用.html-ClP0vOVS.js"),__vite__mapDeps([32,1])),meta:{d:1706422344e3,e:`
<p>CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述：</p>
<pre><code>Description : BIND (Berkeley Internet Name Domain) is an implementation of the DNS
            : (Domain Name System) protocols. BIND includes a DNS server (named),
            : which resolves host names to IP addresses; a resolver library
            : (routines for applications to use when interfacing with DNS); and
            : tools for verifying that the DNS server is operating properly.
</code></pre>`,r:{minutes:5.83,words:1748},y:"a",t:"Bind9安装和使用"}}],["/note-book/DNS/NamedManager.html",{loader:()=>m(()=>import("./NamedManager.html-DT9AF_4K.js"),__vite__mapDeps([33,1])),meta:{d:1706422344e3,e:`
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
</code></pre></div>`,r:{minutes:8.28,words:2485},y:"a",t:"Linux下Bind9之Web管理-NamedManager部署"}}],["/note-book/Docker/Docker%202375%E6%94%BB%E5%87%BB%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{loader:()=>m(()=>import("./Docker 2375攻击和解决方案.html-VMTD1kV3.js"),__vite__mapDeps([34,1])),meta:{d:1691939318e3,e:`
<p>相信了解过<a href="https://so.csdn.net/so/search?q=docker&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">docker</a> remote API的同学对2375端口都不陌生了，2375是docker远程操控的默认端口，通过这个端口可以直接对远程的docker daemon进行操作。</p>
<p>当$HOST主机以**<code>docker daemon -H=0.0.0.0:2375</code>**方式启动daemon时，可以在外部机器对 $HOST 的docker daemon进行直接操作：</p>`,r:{minutes:5.82,words:1747},y:"a",t:"2375攻击"}}],["/note-book/Docker/Docker%20%E7%9A%84daemon.json.html",{loader:()=>m(()=>import("./Docker 的daemon.json.html-B5h_tZjH.js"),__vite__mapDeps([35,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:2.46,words:738},y:"a",t:"Deamon.json Simple"}}],["/note-book/Docker/Docker%E4%B8%8D%E6%AD%BB%E8%BF%9B%E7%A8%8B.html",{loader:()=>m(()=>import("./Docker不死进程.html-KEYbStZD.js"),__vite__mapDeps([36,1])),meta:{d:1691989632e3,e:`
<h2>问题描述</h2>
<p>执行docker run image-id bash后，容器退出</p>
<h2>解决方法</h2>
<p>docker容器的主线程（dockfile中CMD执行的命令）结束，容器会退出</p>
<p>有以下几种解决方法：</p>
<p>使主进程无法结束</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos /bin/bash <span class="token parameter variable">-c</span> <span class="token string">"while true;do echo hello docker;sleep 1;done"</span>
</code></pre></div>`,r:{minutes:.37,words:111},y:"a",t:"Docker不死进程"}}],["/note-book/Docker/Docker%E6%97%A5%E5%BF%97%E9%80%89%E9%A1%B9%E9%85%8D%E7%BD%AE%E4%B8%8A%E5%8E%BB%E5%AF%B9%E5%B7%B2%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E4%B8%8D%E7%94%9F%E6%95%88.html",{loader:()=>m(()=>import("./Docker日志选项配置上去对已运行容器不生效.html-j6OsrJOo.js"),__vite__mapDeps([37,1])),meta:{d:1691939318e3,e:`
<h2>在/etc/docker/daemon.json中修改或添加log-opts参数</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">"log-driver"</span><span class="token builtin class-name">:</span><span class="token string">"json-file"</span>,
  <span class="token string">"log-opts"</span>:<span class="token punctuation">{</span> <span class="token string">"max-size"</span> <span class="token builtin class-name">:</span><span class="token string">"50m"</span>,<span class="token string">"max-file"</span><span class="token builtin class-name">:</span><span class="token string">"1"</span><span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.35,words:104},y:"a",t:"docker log配置不生效"}}],["/note-book/Docker/Docker%E7%8E%AF%E5%A2%83%E6%B8%85%E7%90%86.html",{loader:()=>m(()=>import("./Docker环境清理.html-CiG0QmNA.js"),__vite__mapDeps([38,1])),meta:{d:1691939318e3,e:`
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
</blockquote>`,r:{minutes:1.84,words:553},y:"a",t:"Docker 清理环境操作"}}],["/note-book/Docker/Docker%E9%80%83%E9%80%B8%E6%BC%8F%E6%B4%9E%E6%A1%88%E4%BE%8B.html",{loader:()=>m(()=>import("./Docker逃逸漏洞案例.html-cyWUUjY4.js"),__vite__mapDeps([39,1])),meta:{d:1700560048e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/588513910</p>
</blockquote>
<h2><strong>什么是Docker</strong></h2>
<p>Docker是一个开源的引擎,可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署,包括VMs(虚拟机)、bare metal、OpenStack 集群和其他的基础应用平台。</p>
<h3><strong>判断当前是否为docker环境</strong></h3>
<p>首先在我们拿到一个主机权限之后，需要判断该权限所处环境是不是docker，可以使用下面两条命令</p>`,r:{minutes:14.27,words:4281},y:"a",t:"Docker逃逸漏洞案例漏洞案例"}}],["/note-book/Docker/RockyLinux%E5%AE%89%E8%A3%85Docker.html",{loader:()=>m(()=>import("./RockyLinux安装Docker.html-VyZPhjid.js"),__vite__mapDeps([40,1])),meta:{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum makecache <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl status <span class="token function">docker</span> <span class="token parameter variable">-l</span>
</code></pre></div>`,r:{minutes:.64,words:193},y:"a",t:"一键安装docker"}}],["/note-book/Docker/docker%20pull%20push.html",{loader:()=>m(()=>import("./docker pull push.html-C54Yaun-.js"),__vite__mapDeps([41,1])),meta:{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> pull <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token operator">|</span>@DIGEST<span class="token punctuation">]</span>
  
  从注册表中拉取镜像或镜像仓库

选项：
   -a, --all-tags 下载存储库中所有标记的镜像
       --disable-content-trust 跳过镜像验证（默认为 true）
       <span class="token parameter variable">--platform</span> string 如果服务器支持多平台则设置平台
   -q, <span class="token parameter variable">--quiet</span> 抑制详细输出
</code></pre></div>`,r:{minutes:1,words:300},y:"a",t:"docker pull"}}],["/note-book/Docker/docker%20run%20%E5%91%BD%E4%BB%A4%E6%89%80%E6%9C%89%E7%9A%84%E9%80%89%E9%A1%B9.html",{loader:()=>m(()=>import("./docker run 命令所有的选项.html-B3xawU38.js"),__vite__mapDeps([42,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:4.45,words:1336},y:"a",t:"docker run --help"}}],["/note-book/Docker/docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-PDF.html",{loader:()=>m(()=>import("./docker学习笔记-PDF.html-CjZUiJ3A.js"),__vite__mapDeps([43,1])),meta:{d:1691939318e3,e:`
<p><a href="./docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.pdf">Docker学习笔记</a></p>
`,r:{minutes:.04,words:12},y:"a",t:"PDF"}}],["/note-book/Docker/docker%E5%AE%B9%E5%99%A8%E9%9B%86%E5%90%88.html",{loader:()=>m(()=>import("./docker容器集合.html-kWW67hyc.js"),__vite__mapDeps([44,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:4.49,words:1347},y:"a",t:"docker容器集合"}}],["/note-book/Docker/docker%E6%8A%A5%E9%94%99bridge-nf-call-iptables%E5%86%85%E6%A0%B8%E4%BF%AE%E6%95%B4.html",{loader:()=>m(()=>import("./docker报错bridge-nf-call-iptables内核修整.html-BMZzAy7t.js"),__vite__mapDeps([45,1])),meta:{d:1704856939e3,e:`
<h2>bridge-nf-call-iptables</h2>
<p>1）警告信息如下：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>WARNING: bridge-nf-call-iptables is disabled

WARNING: bridge-nf-call-ip6tables is disabled
</code></pre></div><p>2）解决方法：</p>
<p>修改系统文件是的机器bridge模式开启</p>
<p>设置机器开机启动的时候执行下面两条命令</p>`,r:{minutes:.66,words:199},y:"a",t:"docker报错bridge-nf-call-iptables内核修整"}}],["/note-book/Docker/%E4%B8%80%E6%AC%A1%E6%9E%84%E5%BB%BA%E5%87%BAx86%E5%8F%8Aarm%E9%95%9C%E5%83%8F.html",{loader:()=>m(()=>import("./一次构建出x86及arm镜像.html-DXoArO9w.js"),__vite__mapDeps([46,1])),meta:{d:1691939318e3,e:`
<h2>CPU指令集介绍及不同的指令集的使用场景</h2>
<figure><figcaption>image-20230220093413271</figcaption></figure>
<figure><figcaption>image-20230220093440387</figcaption></figure>
<figure><figcaption>image-20230220093458512</figcaption></figure>
<figure><figcaption>image-20230220093511276</figcaption></figure>
<h2>镜像构建基础环境及不同CPU指令集实现环境准备</h2>`,r:{minutes:.91,words:272},y:"a",t:"一次构建出x86及arm镜像"}}],["/note-book/Docker/%E4%B8%80%E9%94%AE%E8%BF%90%E8%A1%8Cweb%E7%89%88%E6%9C%ACvscode.html",{loader:()=>m(()=>import("./一键运行web版本vscode.html-BwawqiYs.js"),__vite__mapDeps([47,1])),meta:{d:1691939318e3,e:`
<h2>安装docker-compose</h2>
<p>以centos上可以直接用yum安装docker-compose的，在rocky linux上有冲突，只好手动安装了。 手工安装的这个docker-compose版本，交互效果更好看些，不过也有问题“会多出一些莫名的空容器，状态为Created”。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">docker_compose_version</span><span class="token operator">=</span>v2.2.2 <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">"https://github.com/docker/compose/releases/download/<span class="token variable">\${docker_compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>"</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre></div>`,r:{minutes:.68,words:203},y:"a",t:"一键运行web版本的vscode"}}],["/note-book/Docker/%E5%8F%AA%E4%BD%BF%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9B%E5%BB%BA%E5%AE%B9%E5%99%A8-%E6%89%AB%E6%8F%8F.html",{loader:()=>m(()=>import("./只使用操作系统创建容器-扫描.html-BG4198JQ.js"),__vite__mapDeps([48,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>docker</figcaption></figure>
`,r:{minutes:.06,words:17},y:"a",t:"手写笔记"}}],["/note-book/Docker/%E5%9C%A8Dockerfile%E9%87%8C%E8%B0%83%E6%95%B4%E6%97%B6%E5%8C%BA.html",{loader:()=>m(()=>import("./在Dockerfile里调整时区.html-DoQXcwxr.js"),__vite__mapDeps([49,1])),meta:{d:1691939318e3,e:`
<h2>docker已运行容器里的时区修改</h2>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>ln <span class="token punctuation">-</span>sf /usr/share/zoneinfo/Asia/Shanghai    /etc/localtime
或者
cp /usr/share/zoneinfo/Asia/Shanghai    /etc/localtime
重启容器即可 <span class="token comment"># 创建并运行容器，通过 -e TZ="Asia/Shanghai" 设置时区 docker run -e TZ="Asia/Shanghai" -d -p 80:80 --name nginx nginx</span>
</code></pre></div>`,r:{minutes:.91,words:272},y:"a",t:"在Dockerfile里调整时区"}}],["/note-book/Docker/%E6%89%8B%E6%92%95Docker%E5%AE%B9%E5%99%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%89%88.html",{loader:()=>m(()=>import("./手撕Docker容器命令行版.html-D98C_d6v.js"),__vite__mapDeps([50,1])),meta:{d:1691939318e3,e:`
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


</code></pre></div>`,r:{minutes:.71,words:213},y:"a",t:"手撕Docker容器"}}],["/note-book/Docker/%E6%89%8B%E6%92%95docker%E5%AE%B9%E5%99%A8.html",{loader:()=>m(()=>import("./手撕docker容器.html-BvhiA7FW.js"),__vite__mapDeps([51,1])),meta:{d:1691939318e3,e:`
<h2>前提</h2>
<div class="language-bsah" data-ext="bsah" data-title="bsah"><pre class="language-bsah"><code># 删除share选项防止mnt共享
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime shared:1 - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
[root@out-container ~]# mount --make-rprivate /
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
</code></pre></div>`,r:{minutes:9.32,words:2795},y:"a",t:"纯手工制作容器【Docker原理】"}}],["/note-book/Docker/%E6%89%8B%E6%92%95docker%E7%BD%91%E7%BB%9C.html",{loader:()=>m(()=>import("./手撕docker网络.html-KKokU1SU.js"),__vite__mapDeps([52,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:17.16,words:5149},y:"a",t:"手撕docker网络"}}],["/note-book/Docker/%E6%8A%8A%E5%AE%B9%E5%99%A8%E5%81%9A%E6%88%90%E7%89%A9%E7%90%86%E6%9C%BA.html",{loader:()=>m(()=>import("./把容器做成物理机.html-CNTGgIBU.js"),__vite__mapDeps([53,1])),meta:{d:1691939318e3,e:`
<p>本文的主题是把容器变成物理机，根据所学的知识。以及通过各种搜索引擎。他们都告诉我们，这是不可能的。这真的是不可能的吗？我不信，那我就要创造奇迹。请继续往下看。本文将教你如何把容器变成物理机。</p>
<p>这里只讲硬货，不废话！！！</p>
<h2>什么是容器</h2>
<figure><figcaption>img</figcaption></figure>
<p>​    简单来说，容器是一个隔离的操作系统沙盒，目的是<a href="https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504" target="_blank" rel="noopener noreferrer">隔离所有操作系统的进程</a>，那么我们也可以称容器的名称为<strong>被隔离的进程</strong>，在不同维度隔离级别有6个。隔离进程的名称空间是内核提供的功能，必须内核支持才可以。也就是说容器的内核跟宿主机的是同一个内核。Docker官方把它称作集装箱，我觉得这非常的形象，他们都工作在Linux 内核这条船上。</p>`,r:{minutes:11.96,words:3587},y:"a",t:"如何把容器变成物理机"}}],["/note-book/Docker/%E6%9B%B4%E6%94%B9docker%E6%9C%8D%E5%8A%A1%E7%BD%91%E6%AE%B5%E5%88%86%E9%85%8D%E5%9C%B0%E5%9D%80.html",{loader:()=>m(()=>import("./更改docker服务网段分配地址.html-DpM4zpsU.js"),__vite__mapDeps([54,1])),meta:{d:1691939318e3,e:`
<h2>在docker配置文件中追加参数</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
<span class="token string">"bip"</span><span class="token builtin class-name">:</span> <span class="token string">"172.66.1.1/24"</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.9,words:271},y:"a",t:"更改docker服务网段分配地址"}}],["/note-book/Docker/%E8%B7%A8%E5%AE%BF%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1overlay%E5%92%8Cmacvlay.html",{loader:()=>m(()=>import("./跨宿主机通信overlay和macvlay.html-DO9AFLgi.js"),__vite__mapDeps([55,1])),meta:{d:1693036275e3,e:`
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
</blockquote>`,r:{minutes:13.94,words:4182},y:"a",t:"跨宿主机通信overlay和macvlay"}}],["/note-book/ELK/EFK8.4.3%E9%83%A8%E7%BD%B2.html",{loader:()=>m(()=>import("./EFK8.4.3部署.html-Di8OGOFM.js"),__vite__mapDeps([56,1])),meta:{d:1691939318e3,e:`
<h2>说明</h2>
<p>一般我们需要进行日志分析场景：直接在日志文件中 grep、awk 就可以获得自己想要的信息。但在规模较大也就是日志量多而复杂的场景中，此方法效率低下，面临问题包括日志量太大如何归档、文本搜索太慢怎么办、如何多维度查询。需要集中化的日志管理，所有服务器上的日志收集汇总。常见解决思路是建立集中式日志收集系统，将所有节点上的日志统一收集，管理，访问。
Elastic Stack包含：</p>
<ul>
<li>Elasticsearch 是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有：分布式，零配置，自动发现，索引自动分片，索引副本机制，restful风格接口，多数据源，自动搜索负载等。详细可参考Elasticsearch权威指南</li>
<li>Logstash 主要是用来日志的搜集、分析、过滤日志的工具，支持大量的数据获取方式。一般工作方式为c/s架构，client端安装在需要收集日志的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch上去。
Kibana 也是一个开源和免费的工具，Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助汇总、分析和搜索重要数据日志。</li>
<li>Beats在这里是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集、解析日志，但是Logstash对内存、cpu、io等资源消耗比较高。相比</li>
<li>Logstash，Beats所占系统的CPU和内存几乎可以忽略不计</li>
</ul>`,r:{minutes:5.16,words:1549},y:"a",t:"EFK安装过程记录，监听netflow"}}],["/note-book/ELK/ELK.html",{loader:()=>m(()=>import("./ELK.html-BnexSrUI.js"),__vite__mapDeps([57,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>image-20211116145510909</figcaption></figure>
<figure><figcaption>image-20211116145621627</figcaption></figure>
<h1>E Elasticsearch</h1>
<p>弹性搜索，日志<strong>存储</strong></p>
<h1>L Logstash</h1>
<p>日志收集</p>
<h1>K Kibana</h1>
<p>日志展示</p>
<figure><figcaption></figcaption></figure>
<h1>实战</h1>`,r:{minutes:6.02,words:1806},y:"a",t:"ELK日志分析系统"}}],["/note-book/Esxi/ESXI%E4%B8%AD%E7%9A%84%E7%BD%91%E7%BB%9C.html",{loader:()=>m(()=>import("./ESXI中的网络.html-BLJgm94W.js"),__vite__mapDeps([58,1])),meta:{d:1697001346e3,e:`
<h3>VLAN常识：</h3>
<p>vlan的范围: 一共有4096个vlan,vlan 1为默认vlan.
但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。
vlan 0：不携带VLAN ID
vlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN</p>
<h3>ESXI的网络配置：</h3>
<p><strong>虚拟交换机</strong> &gt;&gt;绑定&gt;&gt; 物理网卡
<strong>端口组</strong> &gt;&gt;绑定&gt;&gt; 虚拟交换机
<strong>虚拟机的网卡</strong> &gt;&gt;绑定&gt;&gt; 端口组</p>`,r:{minutes:.57,words:172},y:"a",t:"ESXI中的网络"}}],["/note-book/GRUB/%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B.html",{loader:()=>m(()=>import("./配置案例.html-Cyeh8s4_.js"),__vite__mapDeps([59,1])),meta:{d:1691939318e3,e:`
<h2>开机显示菜单</h2>
<p>/etc/default/grub</p>
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code>GRUB_DEFAULT<span class="token operator">=</span><span class="token number">0</span>
GRUB_TIMEOUT_STYLE<span class="token operator">=</span>menu # <span class="token keyword">default</span><span class="token operator">:</span>menu config hidden
GRUB_TIMEOUT<span class="token operator">=</span><span class="token number">6</span> # <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">0</span>
GRUB_DISTRIBUTOR<span class="token operator">=</span>\`lsb_release <span class="token operator">-</span>i <span class="token operator">-</span>s <span class="token number">2</span><span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span>null <span class="token operator">||</span> echo Debian\`
GRUB_CMDLINE_LINUX_DEFAULT<span class="token operator">=</span><span class="token string">""</span>
GRUB_CMDLINE_LINUX<span class="token operator">=</span><span class="token string">""</span>
</code></pre></div>`,r:{minutes:.24,words:72},y:"a",t:"开机显示菜单"}}],["/note-book/Gawk/AWK%E6%A1%88%E4%BE%8B%E5%85%A5%E9%97%A8%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86.html",{loader:()=>m(()=>import("./AWK案例入门看这一篇就够了.html-BRkwbW2O.js"),__vite__mapDeps([60,1])),meta:{d:1691939318e3,e:`<h2>简介</h2>
<ul>
<li>awk 擅长对列进行操作/进行数据信息操作</li>
<li>awk 的基本使用（高级使用在shell)</li>
<li>awk把文本文档看作是数据库，每一行看作一条数据库中的记录，可以指定数据列的分隔符，默认的分隔符是”\\t”,即Tab。</li>
<li>awk工作流程是这样的：读入有’\\n’换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，$0则表示所有域, 1 表 示</li>
<li>第 一 个 域 , 1表示第一个域, 1表示第一个域,n表示第n个域。默认域分隔符是”空白键” 或 “[tab]键”</li>
<li>awk的执行模式是： awk '{pattern + action}' {filenames}</li>
</ul>`,r:{minutes:24.81,words:7444},y:"a",t:""}}],["/note-book/Gawk/Shell%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E4%B8%89%E5%89%91%E5%AE%A2-AWK.html",{loader:()=>m(()=>import("./Shell文本处理三剑客-AWK.html-CgkAeYDa.js"),__vite__mapDeps([61,1])),meta:{d:1691939318e3,e:`
<h2><strong>2.1awk简介</strong></h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>awk 是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。
</code></pre></div>`,r:{minutes:7.29,words:2186},y:"a",t:"文本处理 awk"}}],["/note-book/Gawk/awk%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./awk 入门教程.html-Bpc9zIWx.js"),__vite__mapDeps([62,1])),meta:{d:1691939318e3,e:`<h2>一、基本用法</h2>
<p>作者： <a href="http://www.ruanyifeng.com" target="_blank" rel="noopener noreferrer">阮一峰</a></p>
<p><code>awk</code>的基本用法就是下面的形式。</p>
<blockquote>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 格式</span>
$ <span class="token function">awk</span> 动作 文件名

<span class="token comment"># 示例</span>
$ <span class="token function">awk</span> <span class="token string">'{print $0}'</span> demo.txt
</code></pre></div></blockquote>`,r:{minutes:3.45,words:1035},y:"a",t:""}}],["/note-book/Gawk/awk%20%E5%AD%A6%E4%B9%A0%20%20%E9%AB%98%E7%BA%A7%E8%BE%93%E5%87%BA%20%2002.html",{loader:()=>m(()=>import("./awk 学习  高级输出  02.html-DDlAsgdC.js"),__vite__mapDeps([63,1])),meta:{d:1691939318e3,e:`<h2>awk高级输入输出 读取下一条记录</h2>
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
</code></pre></div>`,r:{minutes:6.52,words:1956},y:"a",t:""}}],["/note-book/Gawk/awk%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%20%2001.html",{loader:()=>m(()=>import("./awk语言学习笔记  01.html-TgwpaHya.js"),__vite__mapDeps([64,1])),meta:{d:1691939318e3,e:`<p><strong>awk</strong>是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入(stdin)、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk有很多内建的功能，比如数组、函数等，这是它和C语言的相同之处，灵活性是awk最大的优势。</p>
<h2>awk命令格式和选项</h2>
<p><strong>语法形式</strong></p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>awk [options] 'script' var=value file(s)
awk [options] -f scriptfile var=value file(s)
</code></pre></div>`,r:{minutes:8.24,words:2473},y:"a",t:""}}],["/note-book/Gawk/%E5%8C%B9%E9%85%8D%E7%89%B9%E5%AE%9A%E5%AD%97%E7%AC%A6%E5%B9%B6%E8%BE%93%E5%87%BA%E5%85%B6%E5%90%8E%E7%9A%84%E8%8B%A5%E5%B9%B2%E8%A1%8C.html",{loader:()=>m(()=>import("./匹配特定字符并输出其后的若干行.html-DQ0dVc2A.js"),__vite__mapDeps([65,1])),meta:{d:1691939318e3,e:`
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
</code></pre>`,r:{minutes:.46,words:139},y:"a",t:"awk 输出配行及匹配下面的三行"}}],["/note-book/Git/Git%20%E7%9A%84%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE.html",{loader:()=>m(()=>import("./Git 的代理配置.html-X8-_ensB.js"),__vite__mapDeps([66,1])),meta:{d:1691939318e3,e:`
<p>Git 是我经常用的软件。出于某些原因我经常要从 GitHub 这些网站上下载文件。但是 Git 不会从终端中继承代理设置。所以我平时用 export 设置的代理就用不上了。之后在网上找了几种给 Git 设置代理的方法。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">'http://192.168.0.1:1080'</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">'http://192.168.0.1:1080'</span>
</code></pre></div>`,r:{minutes:.73,words:218},y:"a",t:"Git 的代理配置"}}],["/note-book/Git/Git%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86%E5%90%88%E5%B9%B6%E4%B8%8E%E5%88%A0%E9%99%A4%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./Git分支管理合并与删除命令.html-BOJ-YYag.js"),__vite__mapDeps([67,1])),meta:{d:1691939318e3,e:`
<p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。 在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本。对于大项目来说，这样的过程会耗费很多时间。而Git的分支模型则别具一格，创建分支非常的快，在不同分支之间切换也十分的快，这一优势也使得Git鼓励人们更多地使用分支。</p>
<h3>Git保存数据的方式</h3>
<p>在了解分支之前，让我们先来看看Git是如何保存数据的。我的理解是我们每次提交到Git的文件，它并不是只保存每次文件中的差异，而是类似于照片那样将整个文件都在重新保存一份</p>`,r:{minutes:3.99,words:1198},y:"a",t:"Git分支"}}],["/note-book/Git/Git%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%AF%AD%E8%A8%80%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%8F%8A%E6%96%87%E4%BB%B6%E5%8D%A0%E6%AF%94.html",{loader:()=>m(()=>import("./Git识别项目的语言类型，及文件占比.html-DKJ8eqlE.js"),__vite__mapDeps([68,1])),meta:{d:1691939318e3,e:`<p>最近在做代码分析，想知道一个git仓库的语言类型，相信大家都见过这个：

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
</code></pre></div>`,r:{minutes:1,words:300},y:"a",t:""}}],["/note-book/Git/Git%E9%AB%98%E7%BA%A7%E6%93%8D%E4%BD%9C%E5%92%8C%E7%BB%83%E4%B9%A0%E7%BD%91%E7%AB%99.html",{loader:()=>m(()=>import("./Git高级操作和练习网站.html-CoKd_vJ7.js"),__vite__mapDeps([69,1])),meta:{d:1691939318e3,e:`
<h2>动画练习网站</h2>
<p>https://learngitbranching.js.org/?locale=zh_CN</p>
<h2>操作和答案</h2>
<p><a href="https://www.zhihu.com/column/c_1561431080028381184" target="_blank" rel="noopener noreferrer">git学习笔记 - 知乎 (zhihu.com)</a></p>
`,r:{minutes:.12,words:35},y:"a",t:"Git高级操作和练习网站"}}],["/note-book/Git/",{loader:()=>m(()=>import("./index.html-DvrII0O9.js"),__vite__mapDeps([70,1])),meta:{d:1691939318e3,e:`
<hr>
<p>这里是我的笔记，记录一些 git 常用和一些记不住的命令，这个笔记原本是基于 <a href="http://yanhaijing.com/git/2014/11/01/my-git-note" target="_blank" rel="noopener noreferrer">颜海镜的文章</a>增加的，后面慢慢增加了许多内容，独立一个仓库维护，方便查询和使用。</p>
<h2>安装卸载</h2>
<p><a href="https://git-scm.com/download/linux" target="_blank" rel="noopener noreferrer">官方教程</a>，在 Linux/Unix 系统中，通过工具在中安装 <code>git</code>,这种方式比较简单，便于升级卸载工具。</p>`,r:{minutes:26.12,words:7835},y:"a",t:"git-tips"}}],["/note-book/Git/git%20%E6%8B%89%E5%8F%96%E5%85%A8%E9%83%A8%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html",{loader:()=>m(()=>import("./git 拉取全部远程分支.html-CtFk0Vjx.js"),__vite__mapDeps([71,1])),meta:{d:1691939318e3,e:`<p>for i in <code>git branch -r</code>; do git checkout <code>basename $i</code> &amp;&amp; git pull --all; done</p>
`,r:{minutes:.05,words:15},y:"a",t:""}}],["/note-book/Git/git%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./git基础命令.html-DhTsMSoB.js"),__vite__mapDeps([72,1])),meta:{d:1691939318e3,e:`
<h1>Git 基本操作</h1>
<p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。</p>
<p>本章将对有关创建与提交你的项目快照的命令作介绍。</p>
<p>Git 常用的是以下 6 个命令：<strong>git clone</strong>、<strong>git push</strong>、<strong>git add</strong> 、<strong>git commit</strong>、<strong>git checkout</strong>、<strong>git pull</strong>，后面我们会详细介绍。</p>
<p><strong>说明：</strong></p>`,r:{minutes:15.59,words:4677},y:"a",t:"git 基础命令"}}],["/note-book/Git/git%E6%9B%B4%E6%96%B0%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html",{loader:()=>m(()=>import("./git更新远程分支.html-DjV_t42G.js"),__vite__mapDeps([73,1])),meta:{d:1691939318e3,e:`<p>同事创建出新的分支后，我这边用sourcetree刷新，始终看不到最新的。上网查了一下，可以用命令刷新，刷新之后就可以看到新创建的分支了。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote update origin <span class="token parameter variable">--prune</span>
</code></pre></div>`,r:{minutes:.26,words:78},y:"a",t:""}}],["/note-book/Git/git%E7%BB%9F%E8%AE%A1%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81%E8%A1%8C%E6%95%B0.html",{loader:()=>m(()=>import("./git统计项目代码行数.html-Dwfbjo2a.js"),__vite__mapDeps([74,1])),meta:{d:1691939318e3,e:`
<h2>只统计项目代码的总行数</h2>
<div class="language-ruby" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>git ls<span class="token operator">-</span>files <span class="token operator">|</span> xargs cat <span class="token operator">|</span> wc <span class="token operator">-</span>l
</code></pre></div>`,r:{minutes:.2,words:60},y:"a",t:"git统计项目代码行数"}}],["/note-book/Git/git%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9B%9E%E9%80%80%E5%88%B0%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC.html",{loader:()=>m(()=>import("./git远程仓库回退到指定版本.html-CGVQiCP6.js"),__vite__mapDeps([75,1])),meta:{d:1691939318e3,e:`<h2>step1：查看提交记录，获得版本号</h2>
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
</code></pre></div>`,r:{minutes:.44,words:133},y:"a",t:""}}],["/note-book/Git/%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%98%BE%E7%A4%BAgitmoji.html",{loader:()=>m(()=>import("./命令行显示gitmoji.html-CwHLD3eD.js"),__vite__mapDeps([76,1])),meta:{d:1691939318e3,e:`
<h2><a class="header-anchor" href="#emoji-on-the-command-line-😱"><span></span></a><a href="https://www.mianshigee.com/project/emojify/#emoji-on-the-command-line-scream" target="_blank" rel="noopener noreferrer">Emoji on the command line    😱 </a></h2>
<p>THIS IS A VERY USEFUL SCRIPT. IT WILL ABSOLUTELY BOOST YOUR PRODUCTIVITY AND HELP YOU IN YOUR DAILY WORK.</p>`,r:{minutes:1.24,words:371},y:"a",t:"emojify"}}],["/note-book/Gitlab/Gitlab%E4%BA%8C%E5%BC%80%E4%BB%8E%E8%80%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F.html",{loader:()=>m(()=>import("./Gitlab二开从而自定义权限系统.html-ColIkFNJ.js"),__vite__mapDeps([77,1])),meta:{d:1691939318e3,e:`
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


</code></pre></div>`,r:{minutes:4.77,words:1430},y:"a",t:"Gitlab二开从而自定义权限系统"}}],["/note-book/Gitlab/Gitlab%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D.html",{loader:()=>m(()=>import("./Gitlab备份和恢复.html-DxyuBe_V.js"),__vite__mapDeps([78,1])),meta:{d:1691939318e3,e:`
<h2>配置备份</h2>
<blockquote>
<p>参考链接 https://docs.gitlab.com/omnibus/settings/backups.html</p>
</blockquote>
<p>编辑用户根目录的 cron 表</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">crontab</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-u</span> root
</code></pre></div>`,r:{minutes:.83,words:249},y:"a",t:"Gitlab备份和恢复"}}],["/note-book/Gitlab/Gitlab%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2.html",{loader:()=>m(()=>import("./Gitlab安装部署.html-B5ljP5Yb.js"),__vite__mapDeps([79,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:.23,words:68},y:"a",t:"Gitlab安装部署"}}],["/note-book/Gitlab/Gitlab%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html",{loader:()=>m(()=>import("./Gitlab的一些问题.html-DXFmAgEH.js"),__vite__mapDeps([80,1])),meta:{d:1691939318e3,e:`
<p>破案了,新版本从命令行看：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/gitlab/init_xxx  
</code></pre></div><p>以下是更改的方法：：</p>
<p>进入 GitLab 控制台</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gitlab-rails console <span class="token parameter variable">-e</span> production
</code></pre></div>`,r:{minutes:2.53,words:758},y:"a",t:"第一次使用gitlab登陆网页没有提示更改密码"}}],["/note-book/Gitlab/Gitlab%E9%85%8D%E7%BD%AE%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8.html",{loader:()=>m(()=>import("./Gitlab配置邮件服务器.html-UQEZWsGp.js"),__vite__mapDeps([81,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:.85,words:255},y:"a",t:"Gitlab配置邮件服务器"}}],["/note-book/HA-LVS-Keepalived/ha-lvs-keepalived.html",{loader:()=>m(()=>import("./ha-lvs-keepalived.html-BfleGCL3.js"),__vite__mapDeps([82,1])),meta:{d:1691939318e3,e:`
<h1>负载均衡</h1>
<h2>集群功能分类：</h2>
<h3>LB： Load Balance</h3>
<p>有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点</p>
<p>负载均衡产品分类</p>
<figure><figcaption>image-20211113162334546</figcaption></figure>
<p>软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、nginx、</p>
<p>对比：</p>
<p>软件负载均衡设备（廉价解决方案）：</p>
<figure><figcaption>image-20211113163036742</figcaption></figure>`,r:{minutes:3.72,words:1116},y:"a",t:"大型网站高并发解决方案LVS"}}],["/note-book/HA-LVS-Keepalived/haproxy.html",{loader:()=>m(()=>import("./haproxy.html-Bg6YwfF-.js"),__vite__mapDeps([83,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:2.89,words:866},y:"a",t:"HAproxy 七层负载均衡"}}],["/note-book/HA-LVS-Keepalived/keepalived.html",{loader:()=>m(()=>import("./keepalived.html-CEwxGedF.js"),__vite__mapDeps([84,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>image-20211114172234554</figcaption></figure>
<h2>什么是高可用集群HA</h2>
<figure><figcaption>image-20211114172407050</figcaption></figure>
<h2>高可用集群衡量标准</h2>
<figure><figcaption>image-20211114172435055</figcaption></figure>
<h3>具体衡量标准</h3>
<figure><figcaption>image-20211114172601221</figcaption></figure>`,r:{minutes:6.28,words:1883},y:"a",t:"HA"}}],["/note-book/Harbor/Harbor%E7%A6%BB%E7%BA%BF%E6%90%AD%E5%BB%BA.html",{loader:()=>m(()=>import("./Harbor离线搭建.html-CDJuI9nQ.js"),__vite__mapDeps([85,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>使用离线安装包安装Harbor和</p>
</blockquote>
<h1>先要条件</h1>
<h2>1.下载haobor安装包和docker-compose安装包</h2>
<p>harbor载地址：http://harbor.orientsoft.cn/</p>
<p>本次下载后放入的目录是/home/carter，解压安装包</p>
<pre><code>tar xf harbor-offline-installer-v1.10.10.tgz
</code></pre>
<p>下载docker-composer，存放到/usr/local/bin目录下。</p>`,r:{minutes:5.03,words:1508},y:"a",t:"Harbor离线搭建"}}],["/note-book/Iptables/Linux%E5%86%85%E6%A0%B8%E5%AD%90%E7%B3%BB%E7%BB%9F%20-%20%E7%BD%91%E7%BB%9C%20netfilter.html",{loader:()=>m(()=>import("./Linux内核子系统 - 网络 netfilter.html-CskGVFjG.js"),__vite__mapDeps([86,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>某教育内核讨论区：https://kernel.0voice.com/forum.php?mod=guide&amp;view=newthread</p>
<p>netfilter参数详解： https://www.kernel.org/doc/html/latest/networking/nf_conntrack-sysctl.html#proc-sys-net-netfilter-nf-conntrack-variables 已经摘录部分</p>
<p>部分来源： https://zhuanlan.zhihu.com/p/561781463</p>
<p>致谢： https://www.zhihu.com/people/linuxwang-xian-sheng</p>
<p>源地址： https://juejin.cn/post/6993124663878484005</p>
</blockquote>`,r:{minutes:11.5,words:3449},y:"a",t:"Linux内核子系统 - 网络"}}],["/note-book/Iptables/iptables%E6%8B%A6%E6%88%AA%E5%86%85%E7%BD%91%E5%A5%87%E8%99%8E%E8%BD%AF%E4%BB%B6%E7%97%85%E6%AF%92%E4%B8%8A%E6%8A%A5.html",{loader:()=>m(()=>import("./iptables拦截内网奇虎软件病毒上报.html-CdAZSda4.js"),__vite__mapDeps([87,1])),meta:{d:1700469858e3,c:["iptables","Network","网络安全"],e:`
<h2>案例初衷</h2>
<p>整理旧的项目，手里的内容实在太多了，整理一下这个案例。</p>
<p>这个东西开始是别人介绍的一个小项目，作用是要从中间流量阻止来自客户机 <strong>奇虎360</strong>的查毒软件向主服务器病毒上报。</p>
<figure><figcaption>image-20231120150307670</figcaption></figure>
<p>具体是这样的流程</p>
<p>经过<code>tcpdump</code>抓包显示<strong>奇虎360</strong>客户机向服务器上报病毒的渠道是http协议，</p>
<p>信息如下：</p>`,r:{minutes:10.3,words:3090},y:"a",t:"iptables拦截内网奇虎软件病毒上报"}}],["/note-book/Iptables/iptables%E8%AF%A6%E8%A7%A3-%E6%9C%B1%E5%85%89%E5%8D%B0.html",{loader:()=>m(()=>import("./iptables详解-朱光印.html-DCCAHX71.js"),__vite__mapDeps([88,1])),meta:{d:1691939318e3,e:`
<p><a href="https://www.zsythink.net/archives/category/%E8%BF%90%E7%BB%B4%E7%9B%B8%E5%85%B3/iptables" target="_blank" rel="noopener noreferrer">IPtables</a></p>
<p>https://www.zsythink.net/archives/category/运维相关/iptables</p>
`,r:{minutes:.07,words:21},y:"a",t:"iptables详解-朱光印"}}],["/note-book/Iptables/linux%E4%B8%8BIPTABLES%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./linux下IPTABLES配置详解.html-CjpssTIE.js"),__vite__mapDeps([89,1])),meta:{d:1691939318e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>**-A RH-Firewall-1-INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">24000</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token parameter variable">-A</span> RH-Firewall-1-INPUT <span class="token parameter variable">-s</span> <span class="token number">121.10</span>.120.24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">18612</span> <span class="token parameter variable">-j</span> ACCEPT**
</code></pre></div>`,r:{minutes:10.92,words:3277},y:"a",t:"linux下IPTABLES配置详解"}}],["/note-book/Iptables/%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0ip_forward.html",{loader:()=>m(()=>import("./内核参数ip_forward.html-DAGctXWW.js"),__vite__mapDeps([90,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>image-20221025095802270</figcaption></figure>
`,r:{minutes:.06,words:19},y:"a",t:"内核参数ip_forward刨根问底"}}],["/note-book/Jenkins/jenkins%E5%A4%87%E4%BB%BD.html",{loader:()=>m(()=>import("./jenkins备份.html-BmOwXkyN.js"),__vite__mapDeps([91,1])),meta:{d:1691939318e3,e:`
<p><strong>1.手动备份</strong></p>
<p>比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了jenkins，我们可以到backups下找回原始数据；第二种是将打包的文件拷贝到另外一台物理机上，这样做的好处是如果原始机器宕机了，我们可以在另外一台机器上找到备份文件，在最短的时间内恢复工作。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>


</code></pre></div>`,r:{minutes:3.35,words:1006},y:"a",t:"Jenkins备份"}}],["/note-book/Jenkins/jenkins%E6%9E%84%E5%BB%BA%E6%8C%81%E7%BB%AD%E5%8C%96%E9%9B%86%E6%88%90%E5%B9%B3%E5%8F%B0.html",{loader:()=>m(()=>import("./jenkins构建持续化集成平台.html-DKEYjSTF.js"),__vite__mapDeps([92,1])),meta:{d:1691939318e3,e:`
<h1>一、CI/CD持续集成/持续发布</h1>
<p>开发(git) --&gt;git主库–&gt;jenkins(git+jdk+tomcat+maven打包+测试）–&gt;发布到tomcat服务器
英文全称：Continuous Integration
　　CI：中文全称：持续集成工具
　　持续集成是一种软件开发实践。在持续集成中，团队成员频繁集成他们的工作成果，一般每人每天至少集成一次，也可以多次。每次集成会经过自动构建（包括自动测试）的检验，以尽快发现集成错误。</p>
<h1>二、Jenkins</h1>
<h2>１、Jenkins概述</h2>
<p>Jenkins是帮我们将代码进行统一的编译打包、还可以放到tomcat容器中进行发布。意思是我们通过配置，将以前：编译、打包、上传、部署到Tomcat中的过程交由Jenkins，Jenkins通过给定的代码地址URL，将代码拉取到其“宿主服务器”（Jenkins的安装位置），进行编译、打包和发布到web容器中。 是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson(Hudson是商用的)，主要用于持续、自动的构建/测试软件项目、监控一些定时执行的任务。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。</p>`,r:{minutes:14.44,words:4333},y:"a",t:"CICD-jenkins构建持续化集成平台"}}],["/note-book/Jenkins/jenkins%E7%9A%84docker%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.html",{loader:()=>m(()=>import("./jenkins的docker部署文档.html-DPfbSwIq.js"),__vite__mapDeps([93,1])),meta:{d:1691939318e3,e:`<p>起一个 jenkins</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-u</span> root  <span class="token parameter variable">-it</span>   <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token parameter variable">-v</span> jenkins-data:/var/jenkins_home <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean
</code></pre></div>`,r:{minutes:1.27,words:382},y:"a",t:""}}],["/note-book/Jenkins/%E4%BF%AE%E6%94%B9Jenkins%E6%8F%92%E4%BB%B6%E4%B8%BA%E5%9B%BD%E5%86%85%E6%BA%90.html",{loader:()=>m(()=>import("./修改Jenkins插件为国内源.html-d9Etvnrp.js"),__vite__mapDeps([94,1])),meta:{d:1691939318e3,e:`
<p>首页 --&gt; configure --&gt; Manage Jenkins --&gt; Advanced --&gt; Update Site（页面最下方‘升级站点’）替换URL为
清华大学仓库地址：</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://updates.jenkins.io/update-center.json
改为
https://mirror.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
</code></pre></div>`,r:{minutes:.15,words:45},y:"a",t:"修改Jenkins插件为国内"}}],["/note-book/Kubernetes/Kubernetes%20Api%20Endpoint.html",{loader:()=>m(()=>import("./Kubernetes Api Endpoint.html-DES812D6.js"),__vite__mapDeps([95,1])),meta:{d:1691939318e3,e:`
<h2>总体检查</h2>
<h3>/livez?verbose 存活检查</h3>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/livez?verbose <span class="token parameter variable">-k</span>

<span class="token comment">#--cacert /etc/kubernetes/pki/ca.pem </span>
<span class="token comment">#--cert /etc/kubernetes/pki/apiserver.pem </span>
<span class="token comment">#--key /etc/kubernetes/pki/apiserver-key.pem</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre></div>`,r:{minutes:2.3,words:691},y:"a",t:"API规范"}}],["/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html",{loader:()=>m(()=>import("./Kubernetes Make Prometheus_Grafana.html-BNT1U_cl.js"),__vite__mapDeps([96,1])),meta:{d:1691939318e3,e:`
<h3>Kubernetes Create Prometheus+Grafana</h3>
<h4>一、背景</h4>
<p>Prometheus作为一个采用tidb时序数据库为数据存储的监控软件，因为嵌合当前主流容器化，所以一直处于广泛使用的状态，常用监控面板grafana，可以接收多种dataresource，结合数据源支持的语法可以对数据进行分析，实时展示监控值。</p>
<h4>二、准备工作</h4>
<h5>1、主机分布</h5>
192.168.52.135(master)nfs-server
<p>nfs-server</p>
192.168.52.136(node01)nfs-client
`,r:{minutes:14.92,words:4477},y:"a",t:"Kubernetes Make Prometheus+Grafana"}}],["/note-book/Kubernetes/Kubernetes%20Service%20Account%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90Token.html",{loader:()=>m(()=>import("./Kubernetes Service Account如何生成Token.html-DV6cT6Sw.js"),__vite__mapDeps([97,1])),meta:{d:1691939318e3,e:`
<p>果然两天不看就跟不上了，我的集群版本是 1.25.3，今天需要用 token 来做些事情，创建 serviceAccount 的时候发现没有生成 secret，查了一下发现从 1.24 开始就不会自动生成 secret 了，<a href="https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.24.md#urgent-upgrade-notes" target="_blank" rel="noopener noreferrer">chanagelog 在这里.</a></p>
<p>内容如下 LegacyServiceAccountTokenNoAutoGeneration 功能门是测试版，默认启用。启用后，不再为每个 ServiceAccount 自动生成包含服务帐户令牌的 Secret API 对象。使用 <a href="https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/authentication-resources/token-request-v1/" target="_blank" rel="noopener noreferrer">TokenRequest API</a> 获取服务帐户令牌，或者如果需要未过期的令牌，请按照<a href="https://kubernetes.io/docs/concepts/configuration/secret/#service-account-token-secrets" target="_blank" rel="noopener noreferrer">本指南</a>为令牌控制器创建一个 Secret API 对象以填充服务帐户令牌</p>`,r:{minutes:1.07,words:321},y:"a",t:"Kubernetes Service Account如何生成Token"}}],["/note-book/Kubernetes/Kubernetes%20crictl%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./Kubernetes crictl管理命令详解.html-Bc1-sKDy.js"),__vite__mapDeps([98,1])),meta:{d:1691939318e3,e:`<ol>
<li>
<h1>介绍</h1>
</li>
</ol>
<p>crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。
2. # 安装 crictl</p>
<p>下载：https://github.com/kubernetes-sigs/cri-tools/releases
3. # 配置</p>
<p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p>`,r:{minutes:3.22,words:966},y:"a",t:"介绍"}}],["/note-book/Kubernetes/Kubernetes%E6%9C%80%E5%B0%8F%E9%AB%98%E5%8F%AF%E7%94%A8%E6%9E%B6%E6%9E%84%E5%9B%BE.html",{loader:()=>m(()=>import("./Kubernetes最小高可用架构图.html-Dv4BKfjl.js"),__vite__mapDeps([99,1])),meta:{d:1691939318e3,e:`<figure><figcaption>image-20220516192554705</figcaption></figure>
`,r:{minutes:.04,words:13},y:"a",t:""}}],["/note-book/Kubernetes/Kubernetes%E6%9C%89%E5%93%AA%E4%BA%9B%E7%BB%84%E4%BB%B6.html",{loader:()=>m(()=>import("./Kubernetes有哪些组件.html-D78dapt2.js"),__vite__mapDeps([100,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>image-20220516192342353</figcaption></figure>
<h1>Kube-scheduler</h1>
<figure><figcaption>image-20220516192353808</figcaption></figure>
<h1>Kube-kubelet</h1>
<figure><figcaption>image-20220516192411578</figcaption></figure>
<h1>Kube-proxy</h1>
<figure><figcaption>image-20220516192431476</figcaption></figure>`,r:{minutes:.32,words:96},y:"a",t:"组件汇总"}}],["/note-book/Kubernetes/Kubernetes%E7%9A%84NetworkPlicy.html",{loader:()=>m(()=>import("./Kubernetes的NetworkPlicy.html-wL6nr2j1.js"),__vite__mapDeps([101,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:16.01,words:4803},y:"a",t:"简介"}}],["/note-book/Kubernetes/NameSpace%20%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB%E9%9A%94%E7%A6%BB%E4%BA%86%E4%BB%80%E4%B9%88.html",{loader:()=>m(()=>import("./NameSpace 资源隔离隔离了什么.html-4mH5VbvS.js"),__vite__mapDeps([102,1])),meta:{d:1691939318e3,e:`
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
</table>`,r:{minutes:.49,words:146},y:"a",t:"NameSpace 资源隔离"}}],["/note-book/Kubernetes/Request%E5%92%8CLimit.html",{loader:()=>m(()=>import("./Request和Limit.html-BeXdei_h.js"),__vite__mapDeps([103,1])),meta:{d:1691939318e3,e:`
<p>一个问题是K8s里在定义容器资源时候的Request和Limit有啥联系和区别。</p>
<p>就是字面上的意思，request里定义的是k8s必须要保证的启动资源，limit是将来容器运行可能使用的资源上限。</p>
<p>Kube-scheduler通过request的定义来寻找一个可以满足需求的node，从而在node上启动对应的pod里所用的容器；但是容器运行之后因为业务的增长是可以使用超过request的资源的，但是最高只能用到limit里定义的资源，但是limit里定义的资源k8s是不能给确保提供的。</p>
<figure><figcaption>img</figcaption></figure>`,r:{minutes:.59,words:178},y:"a",t:"Requests和Limits"}}],["/note-book/Kubernetes/SSL%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%8F%91.html",{loader:()=>m(()=>import("./SSL证书签发.html-CZnbnuxQ.js"),__vite__mapDeps([104,1])),meta:{d:1691939318e3,e:`<p>按照架构设计，在hdss7-12，hdss7-21, hdss7-22三台上部署etcd服务：</p>
<p>首先创建etcd用户：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># useradd -s /sbin/nologin -M etcd</span>
</code></pre></div><p>创建应用包存放目录</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># mkdir -p /opt/src
# cd /opt/src
</code></pre></div>`,r:{minutes:2.13,words:639},y:"a",t:""}}],["/note-book/Kubernetes/crictl%E7%99%BB%E5%BD%95dockerhub.html",{loader:()=>m(()=>import("./crictl登录dockerhub.html-CtU45GAc.js"),__vite__mapDeps([105,1])),meta:{d:1692599091e3,e:`
<h2>例子</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>crictl pull <span class="token parameter variable">--creds</span> jockerdragon:xxxxxxx  eipwork/kuboard:v3


<span class="token parameter variable">--cert</span> username<span class="token punctuation">[</span>:password<span class="token punctuation">]</span> lai's
</code></pre></div>`,r:{minutes:.06,words:19},y:"a",t:"crictl登录dockerhub"}}],["/note-book/Kubernetes/etcd%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%89%E8%8A%82%E7%82%B9%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2.html",{loader:()=>m(()=>import("./etcd 二进制三节点集群部署.html-B1H-SFGF.js"),__vite__mapDeps([106,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:2.63,words:789},y:"a",t:"在200的运维主机上创建生成CA证书的JSON配置文件"}}],["/note-book/Kubernetes/k8s%E5%88%A0%E9%99%A4Terminating%E7%8A%B6%E6%80%81ns.html",{loader:()=>m(()=>import("./k8s删除Terminating状态ns.html-w38YZc3V.js"),__vite__mapDeps([107,1])),meta:{d:1691939318e3,e:`
<h1>假设你要删掉ns资源，发现一直删不了处于terminating状态</h1>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># kubectl get ns</span>
NAME              STATUS        AGE
default           Active        7h11m
kube-flannel      Terminating   6h41m
kube-node-lease   Active        7h11m
kube-public       Active        7h11m
kube-system       Active        7h11m
</code></pre></div>`,r:{minutes:1.35,words:406},y:"a",t:"k8s删除Terminating状态ns"}}],["/note-book/Kubernetes/kubeadm%E9%83%A8%E7%BD%B2Kubernetes%201.24%E6%AD%A5%E9%AA%A4.html",{loader:()=>m(()=>import("./kubeadm部署Kubernetes 1.24步骤.html-HaaKZWrd.js"),__vite__mapDeps([108,1])),meta:{d:1693278768e3,e:`
<h1>前言</h1>
<p>kubeadm 是 Kubernetes 官方提供的用于快速安部署 Kubernetes 集群的工具，伴随 Kubernetes 每个版本的发布都会同步更新，kubeadm 会对集群配置方面的一些实践做调整，通过实验 kubeadm 可以学习到 Kubernetes 官方在集群配置上一些新的最佳实践。</p>
<h1>一、准备</h1>
<h2>1.1、系统配置</h2>
<p>在安装之前，需要先做好如下准备。3 台 CentOS 7.9 主机如下：</p>
<pre><code>cat /etc/hosts
192.168.96.151    node1
192.168.96.152    node2
192.168.96.153    node3
</code></pre>`,r:{minutes:13.8,words:4140},y:"a",t:"kubeadm部署Kubernetes 1.24步骤"}}],["/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%80%EF%BC%89kubectl%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./kubernetes进阶（一）kubectl工具使用详解.html-DEr5SNFN.js"),__vite__mapDeps([109,1])),meta:{d:1691939318e3,e:`
<h2>陈述式-主要依赖命令行工具</h2>
<p>--可以满足90%以上的使用场景，但是缺点也很明显：</p>
<p>命令冗长，复杂，难以记忆</p>
<p>特定场景下，无法实现管理需求</p>
<p>对资源的增、删、查操作比较容易，改比较麻烦，需要patch来使用json串来更改。</p>
<p><strong>1.1 查看名称空间</strong> 查询时，为了避免重名，需要指定名称空间。</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># kubectl get namespace
简写：
# kubectl get ns
</code></pre></div>`,r:{minutes:4.68,words:1405},y:"a",t:"管理k8s核心资源的三种基本方法："}}],["/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html",{loader:()=>m(()=>import("./kubernetes进阶（三）服务发现-coredns.html-CUOC7dZn.js"),__vite__mapDeps([110,1])),meta:{d:1691939318e3,e:`<p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p>
<p>服务发现需要解决的问题：</p>
<p>1、服务动态性强--容器在k8s中ip变化或迁移</p>
<p>2、更新发布频繁--版本迭代快</p>
<p>3、支持自动伸缩--大促或流量高峰</p>
<p>我们为了解决pod地址变化的问题，我们之前部署了service资源，将pod地址通过service资源暴露的固定地址，来解决以上问题，</p>
<p>那么，如何解决service资源名称和service资源暴露出来的集群网络IP做自动的对应呢，从而达到服务的自动发现呢？</p>
<p>在k8s中，coredns就是为了解决以上问题。</p>`,r:{minutes:3.75,words:1125},y:"a",t:""}}],["/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%BA%8C%EF%BC%89%E6%A0%B8%E5%BF%83%E7%BD%91%E7%BB%9C%E6%8F%92%E4%BB%B6Flannel.html",{loader:()=>m(()=>import("./kubernetes进阶（二）核心网络插件Flannel.html-BN_UEK4J.js"),__vite__mapDeps([111,1])),meta:{d:1691939318e3,e:`<p><strong>网络插件Flannel介绍：https://www.kubernetes.org.cn/3682.html</strong></p>
<p>首先，flannel利用Kubernetes API或者etcd用于存储整个集群的网络配置，其中最主要的内容为设置集群的网络地址空间。例如，设定整个集群内所有容器的IP都取自网段“10.1.0.0/16”。</p>
<p>接着，flannel在每个主机中运行flanneld作为agent，它会为所在主机从集群的网络地址空间中，获取一个小的网段subnet，本主机内所有容器的IP地址都将从中分配。</p>
<p>然后，flanneld再将本主机获取的subnet以及用于主机间通信的Public IP，同样通过kubernetes API或者etcd存储起来。</p>`,r:{minutes:3.01,words:902},y:"a",t:""}}],["/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%BA%94%EF%BC%89dashboard--WEB%E7%AE%A1%E7%90%86.html",{loader:()=>m(()=>import("./kubernetes进阶（五）dashboard--WEB管理.html-DckF2Jer.js"),__vite__mapDeps([112,1])),meta:{d:1691939318e3,e:`<p>dashboard是k8s的可视化管理平台，是三种管理k8s集群方法之一</p>
<p>首先下载镜像上传到我们的私有仓库中：hdss7-200</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># docker pull k8scn/kubernetes-dashboard-amd64:v1.8.3
# docker tag fcac9aa03fd6 harbor.od.com/public/dashboard:v1.8.3
# docker push harbor.od.com/public/dashboard:v1.8.3
</code></pre></div>`,r:{minutes:3.43,words:1029},y:"a",t:""}}],["/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%85%AD%EF%BC%89k8s%E5%B9%B3%E6%BB%91%E5%8D%87%E7%BA%A7.html",{loader:()=>m(()=>import("./kubernetes进阶（六）k8s平滑升级.html-CcpHFXur.js"),__vite__mapDeps([113,1])),meta:{d:1691939318e3,e:`<p>当我们遇到K8S有漏洞的时候，或者为了满足需求，有时候可能会需要升级或者降级版本，</p>
<p>为了减少对业务的影响，尽量选择在业务低谷的时候来升级：</p>
<p>首先准备好文件：我这里选择的是内网文件服务器上下载的，请自行下载所需的k8s源文件：3</p>
<p>这里演示更换一个节点：7-21</p>
<p>查看版本：将7-21更换成1.15.2</p>
<figure><figcaption>img</figcaption></figure>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># cd /opt/src
</code></pre></div>`,r:{minutes:1.54,words:463},y:"a",t:""}}],["/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%9B%9B%EF%BC%89%E6%9C%8D%E5%8A%A1%E6%9A%B4%E9%9C%B2-ingress%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B9%8Btraefik.html",{loader:()=>m(()=>import("./kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-ULpYh6I2.js"),__vite__mapDeps([114,1])),meta:{d:1691939318e3,e:`<p>上一章我们测试了在集群内部解析service名称，</p>
<p>下面我们测试在集群外部解析：</p>
<figure><figcaption>img</figcaption></figure>
<p>根本解析不到，因为我们外部用的dns是10.4.7.11，也就是我们的自建bind dns，这个DNS服务器上也没有响应的搜索域。</p>
<p>如何能让集群外部访问nginx-dp？</p>
<p>这里有两种服务暴露方式：修改工作模式，在kube-proxy中修改，并重启</p>
<p>1、使用nodeport方式，但是这种方式不能使用ipvs，只能使用iptables，iptables只能使用rr调度方式。原理相当于端口映射，将容器内的端口映射到宿主机上的某个端口。</p>`,r:{minutes:2.51,words:753},y:"a",t:""}}],["/note-book/Kubernetes/%E4%B8%80%E6%AC%A1kubeadm%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9%E5%87%BA%E7%8E%B0etcd%E6%A3%80%E6%9F%A5%E9%94%99%E8%AF%AF.html",{loader:()=>m(()=>import("./一次kubeadm添加节点出现etcd检查错误.html-DMiF06xh.js"),__vite__mapDeps([115,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>错误关键字</p>
<p>执行 kubeadm join... 时</p>
<p>[check-etcd] Checking that the etcd cluster is healthy</p>
<p>error execution phase check-etcd: etcd cluster is not healthy: failed to dial endpoint https://10.8.18.105:2379 with maintenance client: context deadline exceeded To see the stack trace of this error execute with --v=5 or higher</p>
</blockquote>`,r:{minutes:3.92,words:1175},y:"a",t:"一次kubeadm添加节点出现etcd检查错误"}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%83%EF%BC%89%20%E9%83%A8%E7%BD%B2%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.html",{loader:()=>m(()=>import("./二进制安装kubernetes（七） 部署知识点总结.html-4HKeAxvj.js"),__vite__mapDeps([116,1])),meta:{d:1691939318e3,e:`<p>1、k8s各个组件之间通信，在高版本中，基本都是使用TSL通信，所以申请证书，是必不可少的，而且建议使用二进制安装，或者在接手一套K8S集群的时候，第一件事情是检查证书有效期，证书过期或者TSL通信问题会报x509相关错误。</p>
<p>可以从k8s kubelet-kuberconfig 使用 echo '证书' | base64 -d 反解获得k8s证书(比如阿里云)</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># cfssl-certinfo -domain=ca.pem -cert=client.pem
</code></pre></div>`,r:{minutes:1.62,words:485},y:"a",t:""}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%89%EF%BC%89%20kube-controller-manager%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{loader:()=>m(()=>import("./二进制安装kubernetes（三） kube-controller-manager组件安装.html-D9qznKuR.js"),__vite__mapDeps([117,1])),meta:{d:1691939318e3,e:`<h3>Controller Manager简介</h3>
<p>详细介绍请参考链接：<a href="https://blog.csdn.net/bbwangj/article/details/82557705" target="_blank" rel="noopener noreferrer">Kubernetes组件之kube-controller-manager</a></p>
<p>Controller  Manager作为集群内部的管理控制中心，负责集群内的Node、Pod副本、服务端点（Endpoint）、命名空间（Namespace）、服务账号（ServiceAccount）、资源定额（ResourceQuota）的管理，当某个Node意外宕机时，Controller Manager会及时发现并执行自动化修复流程，确保集群始终处于预期的工作状态。</p>`,r:{minutes:1.17,words:352},y:"a",t:""}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%8C%EF%BC%89%20kube-apiserver%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{loader:()=>m(()=>import("./二进制安装kubernetes（二） kube-apiserver组件安装.html-Bk7OcMrk.js"),__vite__mapDeps([118,1])),meta:{d:1691939318e3,e:`<p>根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上：</p>
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
</code></pre></div>`,r:{minutes:5.15,words:1544},y:"a",t:""}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%94%EF%BC%89%20kubelet%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{loader:()=>m(()=>import("./二进制安装kubernetes（五） kubelet组件安装.html-EIb_QaWs.js"),__vite__mapDeps([119,1])),meta:{d:1691939318e3,e:`
<p>![img](二进制安装kubernetes（五） kubelet组件安装.assets/1034759-20191113174751232-1888238592-16918405999271.png)</p>
<p>Kubelet组件运行在Node节点上，维持运行中的Pods以及提供kuberntes运行时环境，主要完成以下使命：
１．监视分配给该Node节点的pods
２．挂载pod所需要的volumes
３．下载pod的secret
４．通过docker/rkt来运行pod中的容器
５．周期的执行pod中为容器定义的liveness探针
６．上报pod的状态给系统的其他组件
７．上报Node的状态</p>`,r:{minutes:2.77,words:830},y:"a",t:"概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350"}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89%20kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{loader:()=>m(()=>import("./二进制安装kubernetes（六） kube-proxy组件安装.html-DNqMifCu.js"),__vite__mapDeps([120,1])),meta:{d:1691939318e3,e:`<p><strong>Kube-Proxy简述</strong></p>
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
</ul>`,r:{minutes:2.4,words:720},y:"a",t:""}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%9B%9B%EF%BC%89%20kube-scheduler%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{loader:()=>m(()=>import("./二进制安装kubernetes（四） kube-scheduler组件安装.html-RfgAB5u4.js"),__vite__mapDeps([121,1])),meta:{d:1691939318e3,e:`
<h1>kube-scheduler在集群中的作用</h1>
<p>kube-scheduler是以插件形式存在的组件，正因为以插件形式存在，所以其具有可扩展可定制的特性。kube-scheduler相当于整个集群的调度决策者，其通过预选和优选两个过程决定容器的最佳调度位置。</p>
<h1>kube-scheduler源码中的关键性调用链</h1>
<p>![img](二进制安装kubernetes（四） kube-scheduler组件安装.assets/webp-16918409243531.webp)</p>
<p>kube-scheduler部署在hdss7-21,22上：</p>`,r:{minutes:1.45,words:436},y:"a",t:"介绍资料转载地址：https://www.jianshu.com/p/c4c60ccda8d0"}}],["/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E9%83%A8%E7%BD%B2Kubernetes.html",{loader:()=>m(()=>import("./二进制部署Kubernetes.html-Dj-h6V00.js"),__vite__mapDeps([122,1])),meta:{d:1691939318e3,e:`
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
</table>`,r:{minutes:2.97,words:891},y:"a",t:"架构"}}],["/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFLabel%E5%92%8CLabel%E9%80%89%E6%8B%A9%E5%99%A8.html",{loader:()=>m(()=>import("./什么是Label和Label选择器.html-BoAbFm2j.js"),__vite__mapDeps([123,1])),meta:{d:1691939318e3,e:`<figure><figcaption>image-20220516192131245</figcaption></figure>
<h1>Label：</h1>
<ul>
<li>Label value 最多63个字节</li>
<li>并且只能是字母和数字开头</li>
</ul>
<h1>Label Select：</h1>
<ul>
<li>有两种选择方式</li>
</ul>
`,r:{minutes:.15,words:44},y:"a",t:"Label："}}],["/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFName%E5%92%8CNameSpace.html",{loader:()=>m(()=>import("./什么是Name和NameSpace.html-BELP5S6g.js"),__vite__mapDeps([124,1])),meta:{d:1691939318e3,e:`<figure><figcaption>image-20220516192028904</figcaption></figure>
`,r:{minutes:.03,words:10},y:"a",t:""}}],["/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFPod%E5%92%8CPod%E6%8E%A7%E5%88%B6%E5%99%A8.html",{loader:()=>m(()=>import("./什么是Pod和Pod控制器.html-C6esP71V.js"),__vite__mapDeps([125,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>image-20220516191925621</figcaption></figure>
<h1>Deployment 部署</h1>
<h1>DaemonSet 每个运算节点都起一份</h1>
<h1>ReplicaSet -管理-&gt; DaemonSet -管理-&gt; Pod</h1>
<h1>StatefulSet 管理有状态应用</h1>
<h1>Job 任务</h1>
<h1>Cronjob 定时周期任务</h1>
`,r:{minutes:.21,words:62},y:"a",t:"什么是Pod和Pod控制器"}}],["/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFService%E5%92%8CIngress.html",{loader:()=>m(()=>import("./什么是Service和Ingress.html-CU1wcGTL.js"),__vite__mapDeps([126,1])),meta:{d:1691939318e3,e:`
<figure><figcaption>image-20220516192235849</figcaption></figure>
<h1>流量调度</h1>
<p>4层和7层  业务域流量调度</p>
`,r:{minutes:.11,words:32},y:"a",t:"什么是Service和Ingress"}}],["/note-book/Kubernetes/%E4%BD%BF%E7%94%A8%20vmagent%20%E4%BB%A3%E6%9B%BF%20Prometheus%20%E9%87%87%E9%9B%86%E7%9B%91%E6%8E%A7%E6%8C%87%E6%A0%87.html",{loader:()=>m(()=>import("./使用 vmagent 代替 Prometheus 采集监控指标.html-Dsd4iG8b.js"),__vite__mapDeps([127,1])),meta:{d:1691939318e3,e:`<p>vmagent 可以帮助我们从各种来源收集指标并将它们存储在 VM 或者任何其他支持 remote write 协议的 Prometheus 兼容的存储系统中。</p>
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
</ul>`,r:{minutes:8.74,words:2623},y:"a",t:"特性"}}],["/note-book/Kubernetes/%E5%B8%B8%E7%94%A8%E4%BC%98%E5%8C%96.html",{loader:()=>m(()=>import("./常用优化.html-C2Hs02md.js"),__vite__mapDeps([128,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:1.13,words:340},y:"a",t:"主机系统优化"}}],["/note-book/Kubernetes/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%BC%82%E5%B8%B8%E6%96%AD%E7%94%B5%E9%80%A0%E6%88%90kubernetes%E6%95%85%E9%9A%9C.html",{loader:()=>m(()=>import("./记一次异常断电造成kubernetes故障.html-Df4BxGto.js"),__vite__mapDeps([129,1])),meta:{d:1692346453e3,e:`
<blockquote>
<p>http://31mwww.linuxea.com/2580.html
https://blog.csdn.net/liuyij3430448/article/details/130406844
因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电。总共30几台吧。</p>
<p>经过检查和擦拭内存金手指，服务器正常开机。</p>
<p>老家伙你不能倒下啊。你不run了我就得run啊。。。</p>
</blockquote>
<h2>服务器显示状态</h2>
<figure><figcaption>image-20230818150814096</figcaption></figure>`,r:{minutes:5.26,words:1579},y:"a",t:"断电造成kubernetes故障"}}],["/note-book/LinuxFromScratch/LFS-NoteBook.html",{loader:()=>m(()=>import("./LFS-NoteBook.html-BreNUzyn.js"),__vite__mapDeps([130,1])),meta:{d:1691939318e3,e:`
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
</table>`,r:{minutes:62.72,words:18816},y:"a",t:"LFS编译笔记以深入了解Linux"}}],["/note-book/LinuxOperaSystem/Linux%E5%A4%87%E4%BB%BD%E4%B8%BAliveOS.html",{loader:()=>m(()=>import("./Linux备份为liveOS.html-Df9qS4MB.js"),__vite__mapDeps([131,1])),meta:{d:1698989873e3,e:`
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
<p>⾃主程序不要安装在系统根⽬录“/”下，否则可能导致程序克隆不成功，建议安装在/opt⽬录下三、步骤：安装systemback⼯具 -&gt; 制作镜像 -&gt; 刻录U盘 -&gt; U盘启动安装</p>`,r:{minutes:3.39,words:1017},y:"a",t:"使用Systemback克隆Ubuntu系统"}}],["/note-book/LinuxOperaSystem/bash%E5%88%A9%E7%94%A8%E6%89%A9%E5%B1%95%E5%AD%97%E7%AC%A6%E9%9B%86%E5%AE%9E%E7%8E%B0rm.html",{loader:()=>m(()=>import("./bash利用扩展字符集实现rm.html-eviwE-Nm.js"),__vite__mapDeps([132,1])),meta:{d:1700560048e3,e:`
<h2>事出有因</h2>
<p>昨天在群里看到一个暴躁老哥遇到了一个恶搞教程,使用一段特殊的代码删除了自己的/home目录。气的他直骂自己是傻逼。</p>
<p>果然，自己的快乐是建立在别人的痛苦之上的，不好意思我笑出声来了。</p>
<figure><figcaption>image-20231121165908477</figcaption></figure>
<figure><figcaption>5FEC69FE77FFF255977FC97C31C2E6D7</figcaption></figure>
<p>这个是什么意思呢？我这边查了一些资料然后把过程记录下来。</p>
<h2>过程</h2>`,r:{minutes:6.5,words:1949},y:"a",t:"bash利用扩展字符集实现rm"}}],["/note-book/LinuxOperaSystem/grub2%E6%89%8B%E5%8A%A8%E5%91%BD%E4%BB%A4%E5%BC%95%E5%AF%BC%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./grub2手动命令引导教程.html-CfilCHDr.js"),__vite__mapDeps([133,1])),meta:{d:1698989873e3,e:`
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
</code></pre>`,r:{minutes:2.96,words:889},y:"a",t:"grub2各种手动命令引导教程"}}],["/note-book/LinuxOperaSystem/shell%E8%84%9A%E6%9C%AC%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%B7%A5%E5%85%B7shc.html",{loader:()=>m(()=>import("./shell脚本加密解密工具shc.html-BOY_OpiV.js"),__vite__mapDeps([134,1])),meta:{d:1698989873e3,e:`
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
</code></pre></div>`,r:{minutes:1.81,words:544},y:"a",t:"shc 脚本加密解密工具"}}],["/note-book/LinuxOperaSystem/shell%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E9%9A%90%E8%97%8F%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./shell通过函数隐藏命令.html-CazQLBxY.js"),__vite__mapDeps([135,1])),meta:{d:1703659344e3,c:["Linux","Shell","神操作"],e:`
<h2>隐藏命令</h2>
<p>当这个函数被调用时，无论传入什么命令，该命令的输出和错误信息都不会显示在终端上，而是会被丢弃。用户不会在终端上看到任何内容。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">ls</span> <span class="token punctuation">{</span>
    <span class="token comment"># 将命令的标准输出和标准错误重定向到 /dev/null 中</span>
    <span class="token string">"<span class="token variable">$@</span>"</span> <span class="token operator">&amp;&gt;</span>/dev/null    <span class="token comment"># 删除斜线，因为jinja2冲突</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.36,words:109},y:"a",t:"shell通过函数隐藏命令"}}],["/note-book/LinuxOperaSystem/ssh%20%E8%AE%BE%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html",{loader:()=>m(()=>import("./ssh 设置反向代理.html-DEsuqXbQ.js"),__vite__mapDeps([136,1])),meta:{d:1698989873e3,e:`
<blockquote>
<p>SSH -R是一种SSH远程端口转发技术，它可以将本地端口转发到远程服务器上，从而实现远程访问本地服务的功能。具体来说，SSH  -R会在远程服务器上启动一个监听指定端口的进程，并将所有传入的连接转发到本地主机的指定端口。这样，您就可以在远程服务器上访问本地主机上运行的服务，而无需将服务直接暴露在公共网络中。</p>
</blockquote>
<h2>什么是ssh -R</h2>
<p>SSH -R是一种远程端口转发技术，它可以将本地端口转发到远程服务器上，从而实现远程访问本地服务的功能。</p>
<h2>目标</h2>
<p>在本文中，我们将使用SSH -R来更新私有服务器的hosts文件，并让mirrors.aliyun.com可用。</p>`,r:{minutes:2.09,words:628},y:"a",t:"使用SSH -R将私有服务器上网"}}],["/note-book/LinuxOperaSystem/ssh%E6%8A%8A%E8%BF%9C%E7%A8%8B%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%88%B0%E6%9C%AC%E5%9C%B0.html",{loader:()=>m(()=>import("./ssh把远程端口映射到本地.html-BiQ20V8c.js"),__vite__mapDeps([137,1])),meta:{d:1698989873e3,e:`
<h2>应用场景1： docker容器端口映射到本地</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">80</span>:172.18.0.3:80 root@43.136.116.195
</code></pre></div>`,r:{minutes:1.33,words:398},y:"a",t:"ssh把远程端口映射到本地"}}],["/note-book/LinuxOperaSystem/tcpdump%E6%8A%93%E5%8C%85%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./tcpdump抓包命令.html-C5Sx1h9Q.js"),__vite__mapDeps([138,1])),meta:{d:1698989873e3,e:`
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
</code></pre></div>`,r:{minutes:.91,words:273},y:"a",t:"tcpdump抓包命令"}}],["/note-book/LinuxOperaSystem/%E5%91%BD%E4%BB%A4%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9F%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html",{loader:()=>m(()=>import("./命令创建虚拟镜像文件.html-Dq279hk8.js"),__vite__mapDeps([139,1])),meta:{d:1698989873e3,e:`
<blockquote>
<p>https://zhuanlan.zhihu.com/p/81767176</p>
</blockquote>
<h2>1.使用 dd 命令创建虚拟镜像文件</h2>
<figure><figcaption>img</figcaption></figure>
<h2>2.使用 mkfs 命令格式化磁盘（我们这里是自己创建的虚拟磁盘镜像）</h2>
<figure><figcaption>img</figcaption></figure>
<p>查看Linux 支持哪些文件系统</p>
<figure><figcaption>img</figcaption></figure>`,r:{minutes:1.42,words:427},y:"a",t:"使用命令创建虚拟镜像文件"}}],["/note-book/LinuxOperaSystem/%E6%8C%89%E7%94%B5%E6%BA%90%E8%BD%AF%E5%85%B3%E6%9C%BA%E8%A6%81%E7%AD%89%E5%BE%8560%E7%A7%92%E8%AE%BE%E7%BD%AE%E6%9B%B4%E7%9F%AD%E7%9A%84%E6%97%B6%E9%97%B4.html",{loader:()=>m(()=>import("./按电源软关机要等待60秒设置更短的时间.html-CX0awZxe.js"),__vite__mapDeps([140,1])),meta:{d:1698989873e3,e:`
<p>Ubuntu 20.04默认情况下按电源键软关机会等待60秒，但是你可以通过修改系统配置文件来更改这个时间。具体步骤如下：</p>
<h2>打开终端（快捷键：Ctrl+Alt+T）。</h2>
<h2>输入以下命令打开配置文件：</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>sudo nano /etc/systemd/system.conf
</code></pre></div><h2>在打开的文件中找到以下行：</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>#DefaultTimeoutStopSec=90s
</code></pre></div>`,r:{minutes:.67,words:201},y:"a",t:"Ubuntu20.04按电源软关机要等待60秒，可以设置更短的时间吗?"}}],["/note-book/LinuxOperaSystem/%E7%94%A8shell%E7%94%9F%E6%88%90%E5%8C%85%E5%90%AB%E5%A4%A7%E5%86%99%E3%80%81%E5%B0%8F%E5%86%99%E3%80%81%E6%95%B0%E5%AD%97%E3%80%81%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E7%9A%84%E9%9A%8F%E6%9C%BA%E5%AD%97%E7%AC%A6%E4%B8%B2.html",{loader:()=>m(()=>import("./用shell生成包含大写、小写、数字、特殊字符的随机字符串.html-Bcsja8_y.js"),__vite__mapDeps([141,1])),meta:{d:1705037861e3,e:`
<h1><strong>tr命令</strong></h1>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># &lt;/dev/urandom tr -dc  'A-Za-z0-9!"#$%&amp;'\\''()*+,-./:;&lt;=&gt;?@[\\]^_\`{|}~' | head -c 15 ; echo</span>

<span class="token comment"># tr -dc   'A-Za-z0-9!"#$%&amp;'\\''()*+,-./:;&lt;=&gt;?@[\\]^_\`{|}~'   &lt;/dev/urandom | head -c 15; echo</span>
</code></pre></div>`,r:{minutes:.18,words:54},y:"a",t:"用shell生成包含大写、小写、数字、特殊字符的随机字符串"}}],["/note-book/LinuxOperaSystem/%E8%AE%A9%E6%9F%90%E4%B8%AA%E5%91%BD%E4%BB%A4%E4%B8%8D%E8%BE%93%E5%87%BA.html",{loader:()=>m(()=>import("./让某个命令不输出.html-Dc5ci2GN.js"),__vite__mapDeps([142,1])),meta:{d:1698989873e3,e:`
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




</code></pre></div>`,r:{minutes:.5,words:149},y:"a",t:"让某个命令不输出"}}],["/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html",{loader:()=>m(()=>import("./Nginx作为推流服务器.html-B8baz2c0.js"),__vite__mapDeps([143,1])),meta:{d:1708251032e3,e:`
<blockquote>
<p>本文档参考文档制作： https://www.fnmqs.work/archives/161/</p>
<p>感谢云梦工具箱，因为教程里使用的 https://github.com/arut/nginx-rtmp-module.git 这个模块太老了，3年之前更新过，所以重新更改方案使用了https://github.com/winshining/nginx-http-flv-module，这个模块在实现前者的功能的同时还实现了flv拉流量的功能，功能上强很多，而且更新及时。</p>
</blockquote>
<h2>功能对比</h2>
<ul>
<li><a href="https://github.com/arut/nginx-rtmp-module" target="_blank" rel="noopener noreferrer">nginx-rtmp-module</a> 提供的所有功能。</li>
<li>nginx-http-flv-module 的其他功能与 <a href="https://github.com/arut/nginx-rtmp-module" target="_blank" rel="noopener noreferrer">nginx-rtmp-module</a> 的对比：</li>
</ul>`,r:{minutes:7.11,words:2134},y:"a",t:"Nginx作为推流服务器"}}],["/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html",{loader:()=>m(()=>import("./Nginx变量大全.html-CmvViy01.js"),__vite__mapDeps([144,1])),meta:{d:1705981137e3,e:`
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
</code></pre></div>`,r:{minutes:4.17,words:1251},y:"a",t:"Nginx的变量参数 详解"}}],["/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html",{loader:()=>m(()=>import("./Nginx正向代理.html-DrSFnz0z.js"),__vite__mapDeps([145,1])),meta:{d:1705981137e3,e:`
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
</code></pre></div>`,r:{minutes:.81,words:242},y:"a",t:"nginx代理"}}],["/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html",{loader:()=>m(()=>import("./Nginx正向代理支持https.html-D3P_mYNy.js"),__vite__mapDeps([146,1])),meta:{d:1705981137e3,c:"Nginx",e:`
<blockquote>
<p><a href="/nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86https.zip">脚本中用到的文件压缩包</a></p>
<p>模块：https://github.com/chobits/ngx_http_proxy_connect_module</p>
<p>nginx源码： http://nginx.org/download/</p>
<p>tcp优化文档： https://blog.csdn.net/guyue35/article/details/131465652</p>
</blockquote>
<h2>环境搭建</h2>`,r:{minutes:4.53,words:1358},y:"a",t:"Nginx正向代理支持https"}}],["/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html",{loader:()=>m(()=>import("./Nginx正向代理高并发.html-BOSDWO9b.js"),__vite__mapDeps([147,1])),meta:{d:1705981137e3,e:`
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
</code></pre></div>`,r:{minutes:.96,words:289},y:"a",t:"Nginx正向代理高并发"}}],["/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html",{loader:()=>m(()=>import("./Nginx的url过长导致fastcgi协议崩溃.html-BHqU_e5m.js"),__vite__mapDeps([148,1])),meta:{d:1705981137e3,e:`
<blockquote>
<p>研发写了个非常脑残的功能，竟然要把图片变成base64编码然后通过patch方法去发送给服务端。我人麻了。竟然要把这么复制的东西放到http head里，这尼玛离谱。下面是这件事的解决过程。</p>
</blockquote>
<h2>事件原因</h2>
<p>研发的postman发出了414错误，报错内容如下：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">414</span> Request-URI Too Large
<span class="token comment"># 414请求url太大</span>
</code></pre></div>`,r:{minutes:1.25,words:376},y:"a",t:"Nginx的url过长出现的问题 414 Request-URI Too Large"}}],["/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html",{loader:()=>m(()=>import("./Nginx的负载均衡和故障转移.html-B8T_C8iH.js"),__vite__mapDeps([149,1])),meta:{d:1705981137e3,e:`
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

</code></pre></div>`,r:{minutes:5.79,words:1737},y:"a",t:"Nginx的负载均衡和故障转移"}}],["/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./apt安装OpenResty教程.html-BcofEukK.js"),__vite__mapDeps([150,1])),meta:{d:1705983643e3,e:`
<blockquote>
<p>参考链接： https://blog.openresty.com.cn/cn/ubuntu20-or-install/</p>
<p>适合于Ubuntu各个版本，并非只有20.04。都可以被成功an'z</p>
</blockquote>
<p>今天我想演示一下如何通过 <code>apt-get</code> 在 Ubuntu 20.04 上安装 OpenResty 。</p>
<figure><figcaption>截图 1</figcaption></figure>
<p>我们将在这个视频中使用这个全新安装的 Ubuntu 20.04 。</p>
<p>我们可以到 <a href="http://openresty.org/cn/linux-packages.html#ubuntu" target="_blank" rel="noopener noreferrer">openresty.org 网站</a>上找到相关的说明，这里可以找到所有启用 APT 仓库和安装 OpenResty Deb 包的命令。</p>`,r:{minutes:4.03,words:1209},y:"a",t:"apt安装OpenResty教程"}}],["/note-book/Nginx__OpenResty/nginx-plus-module-lua.html",{loader:()=>m(()=>import("./nginx-plus-module-lua.html-D1aPGEua.js"),__vite__mapDeps([151,1])),meta:{d:1705981137e3,e:`
<blockquote>
<p>将Lua联合例程集成到NGINX事件处理模型中，使用由NGINX,Inc。编写和支持的Lua动态模块。</p>
<p>http://openresty.org</p>
<p>这个开源 Web 平台主要由章亦春（<a href="http://agentzh.org" target="_blank" rel="noopener noreferrer">agentzh</a>）维护。在 2011 年之前曾由雅虎中国和<a href="http://www.taobao.com" target="_blank" rel="noopener noreferrer">淘宝网</a>赞助，在后来的 2012 ~ 2016 年间主要由美国的 <a href="http://www.cloudflare.com" target="_blank" rel="noopener noreferrer">CloudFlare 公司</a> 提供支持。目前，OpenResty® 主要由 OpenResty 软件基金会和 OpenResty Inc. 公司提供支持。</p>
<p>2009年，agentzh &amp; chaoslawful一起基于Nginx用C语言开发OpenResty
2011年，agentzh离职专心维护OpenResty
2012-2016年，Cloudflare赞助支持agentzh专心开发OpenResty，快速发展
2016年，锤子科技赞助OpenResty软件基金会（发布会的门票收入100万元）以支持OpenResty开发</p>
<p>https://blog.csdn.net/shasharoman/article/details/120069206</p>
</blockquote>`,r:{minutes:3.05,words:914},y:"a",t:"动态模块Lua"}}],["/note-book/Nginx__OpenResty/nginx01.html",{loader:()=>m(()=>import("./nginx01.html-BUwxjVtH.js"),__vite__mapDeps([152,1])),meta:{d:1705981137e3,e:`
<h1>1、Nginx 的优势</h1>
<p>Nginx (engine x) 是一个高性能的HTTP(解决C10k的问题)和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。反代图示</p>
<p>nginx的web优势</p>
<h2>1、io多路复用</h2>
<p>理论方法</p>
<h3>第一种方法：</h3>
<p>最传统的多进程并发模型 (每进来一个新的I/O流会分配一个新的进程管理）。</p>
<h3>第二种方法：</h3>
<p>I/O多路复用 (单个线程，通过记录跟踪每个I/O流(sock)的状态，来同时管理多个I/O流 。)发明它的原因，是尽量多的提高服务器的吞吐能力。在同一个线程里面， 通过拨开关的方式，来同时传输多个I/O流</p>`,r:{minutes:32.95,words:9886},y:"a",t:"Nginx初级篇"}}],["/note-book/Nginx__OpenResty/nginx02.html",{loader:()=>m(()=>import("./nginx02.html-DKdKGFF_.js"),__vite__mapDeps([153,1])),meta:{d:1705981137e3,e:`
<h2>Nginx Web服务器</h2>
<h2>Nginx Proxy 服务器</h2>
<h3>原理</h3>
<h4>正向代理</h4>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>内网客户机通过代理访问互联网，通常需要设置代理服务器的地址和端口
</code></pre></div><figure><figcaption>image-20211109120422697</figcaption></figure>
<p>squid：</p>
<h4>反向代理</h4>`,r:{minutes:7.09,words:2126},y:"a",t:"Nginx高级进阶篇"}}],["/note-book/Nginx__OpenResty/nginx03.html",{loader:()=>m(()=>import("./nginx03.html-eH8nWPjv.js"),__vite__mapDeps([154,1])),meta:{d:1705981137e3,e:`
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
</table>`,r:{minutes:22.1,words:6630},y:"a",t:"Nginx Web架构实战"}}],["/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html",{loader:()=>m(()=>import("./nginx单机百万并发.html-BFpa9RiP.js"),__vite__mapDeps([155,1])),meta:{d:1705981137e3,e:`
<p>https://www.freesion.com/article/18981262639/</p>
`,r:{minutes:.04,words:12},y:"a",t:"Nginx 单机百万QPS环境搭建"}}],["/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html",{loader:()=>m(()=>import("./nginx配置示例.html-CwuEhHPm.js"),__vite__mapDeps([156,1])),meta:{d:1705981137e3,e:`
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
</code></pre>`,r:{minutes:11.3,words:3389},y:"a",t:"Nginx配置示例"}}],["/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html",{loader:()=>m(()=>import("./ngx_stream_ssl_preread_module.html-COyXRyQc.js"),__vite__mapDeps([157,1])),meta:{d:1705981137e3,e:`
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
</code></pre></div>`,r:{minutes:.22,words:66},y:"a",t:"ngx_stream_ssl_preread_module"}}],["/note-book/OpenSSH-Server/ssh%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E7%99%BB%E9%99%86%E5%AF%86%E7%A0%81.html",{loader:()=>m(()=>import("./ssh日志记录登陆密码.html-f96bInSw.js"),__vite__mapDeps([158,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:2.83,words:848},y:"a",t:"ssh日志记录登陆密码"}}],["/note-book/OperaSystems/CPU%E5%92%8C%E5%86%85%E5%AD%98%E7%9A%84%E6%9E%B6%E6%9E%84%20UMA%E5%92%8CNUMA.html",{loader:()=>m(()=>import("./CPU和内存的架构 UMA和NUMA.html-CvjcHRXd.js"),__vite__mapDeps([159,1])),meta:{d:1691939318e3,e:`
<h2>1、UMA</h2>
<p>UMA全称为 Uniform Memory Access，叫做一致性内存访问</p>
<p>多个CPU通过同一根总线来访问内存。无论多个CPU是访问内存的不同内存单元还是相同的内存单元，同一时刻，只有一个CPU能够访问内存。</p>
<p>CPU之间通过总线串行的访问内存，所以会出现访问瓶颈！
![在这里插入图片描述](CPU和内存的架构 UMA和NUMA.assets/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5byg5a2f5rWpX2pheQ==,size_20,color_FFFFFF,t_70,g_se,x_16-16918414601881.png)</p>`,r:{minutes:1.4,words:421},y:"a",t:"CPU和内存之间的架构分为两种："}}],["/note-book/OperaSystems/Journal%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./Journal日志服务详解.html-Bc9jzqPl.js"),__vite__mapDeps([160,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:2.99,words:897},y:"a",t:"Journal日志服务详解"}}],["/note-book/OperaSystems/Linux%E4%B8%8B%E7%9A%84ASLR%EF%BC%88PIE%EF%BC%89%E5%86%85%E5%AD%98%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6%E5%92%8C%E7%BB%95%E8%BF%87.html",{loader:()=>m(()=>import("./Linux下的ASLR（PIE）内存保护机制和绕过.html-Ua6zp-Hj.js"),__vite__mapDeps([161,1])),meta:{d:1691939318e3,e:`
<h3>1.1  Linux下的ASLR内存保护机制</h3>
<h4>1.1.1  Linux下的ASLR工作原理</h4>
<p>工作原理与window下的aslr类似</p>
<figure><figcaption>img</figcaption></figure>
<h4>1.1.2 Linux下利用内存地址泄露绕过ASLR</h4>
<h5>⑴. 原理分析：</h5>
<p>那么如何解决地址随机化的问题呢？</p>
<p>思路是：我们需要先泄漏出libc.so某些函数在内存中的地址，然后再利用泄漏出的函数地址根据偏移量计算出system()函数和/bin/sh字符串在内存中的地址，然后再执行我们的ret2libc的shellcode。既然栈，libc，heap的地址都是随机的。我们怎么才能泄露出libc.so的地址呢？方法还是有的，因为程序本身在内存中的地址并不是随机的，所以我们只要把返回值设置到程序本身就可执行我们期望的指令了。</p>`,r:{minutes:3.68,words:1104},y:"a",t:"Linux下的ASLR（PIE）内存保护机制和绕过"}}],["/note-book/OperaSystems/Linux%E5%8D%87%E7%BA%A7%E5%86%85%E6%A0%B8%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95.html",{loader:()=>m(()=>import("./Linux升级内核的两种方法.html-Hgf87R79.js"),__vite__mapDeps([162,1])),meta:{d:1691939318e3,e:`
<p>Linux的内核概念不用说大家也很清楚，正是内核版本的不同，才有Linux发行版本的说法，现在主流的centos应该都是centos7了，从centos7.2开始，内核版本为3.10，越往后内核版本越高。高版本的内核修复了许多的低版本内核的bug，因此，系统是需要提高内核版本的，从而提高安全性，稳定性，并增加更多的功能。</p>
<p>通常来说，Linux是支持多版本内核共存的，无非是系统启动的时候应用哪个版本内核而已。
关于内核：</p>
<p>Linux 内核分两种：官方内核（通常是内核开发人员用）和各大 Linux 发行版内核（一般用户常用）。
关于Linux内核版本号：</p>`,r:{minutes:7.97,words:2391},y:"a",t:"Linux centos7升级内核 两种方法"}}],["/note-book/OperaSystems/Linux%E6%8E%92%E6%9F%A5%E5%93%AA%E4%B8%AA%E8%BF%9B%E7%A8%8B%E5%92%8CIP%E5%9C%A8%E5%8D%A0%E7%94%A8%E7%BD%91%E9%80%9F.html",{loader:()=>m(()=>import("./Linux排查哪个进程和IP在占用网速.html-DdFcF_yQ.js"),__vite__mapDeps([163,1])),meta:{d:1691939318e3,e:`
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
<h3>显示界面说明</h3>`,r:{minutes:2.14,words:642},y:"a",t:"Linux排查哪个进程在占用网速"}}],["/note-book/OperaSystems/Linux%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%85%8D%E5%AF%86%E7%A0%81sudo.html",{loader:()=>m(()=>import("./Linux普通用户免密码sudo.html-kpwBociD.js"),__vite__mapDeps([164,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>该操作为越权操作，仅适用于个人单用户操作系统</p>
</blockquote>
<h2>进入root身份</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> 
</code></pre></div><h2>执行的操作</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> visudo
<span class="token comment"># 或者</span>
<span class="token function">vim</span> /etc/sudoers
</code></pre></div>`,r:{minutes:.35,words:105},y:"a",t:"Linux普通用户免密码sudo"}}],["/note-book/OperaSystems/Linux%E7%BD%91%E7%BB%9C%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96%E7%A7%98%E7%B1%8D.html",{loader:()=>m(()=>import("./Linux网络内核参数优化秘籍.html-DIdUUUbu.js"),__vite__mapDeps([165,1])),meta:{d:1691939318e3,e:`
<p>最近很多使用Linux系统的小伙伴在后台提问，老师呀，我好烦恼！</p>
<p><strong>你说企业服务器在进行网络通讯过程中，为了避免网络性能瓶颈对网络通讯的影响，我该如何对系统内核中网络参数进行优化调整从而提高网络的安全性和并发性！</strong></p>
<p><strong>具体来说是这样的要求：</strong></p>
<ul>
<li>**提高安全性：**避免恶意的网络攻击行为对系统网络资源造成影响；</li>
<li>**提高并发性：**使服务器设备可以承载更多的客户端主机的访问；</li>
</ul>
<p>从而提升网络性能，增加服务器中网络服务的稳定性与高效性。</p>`,r:{minutes:8.85,words:2654},y:"a",t:"超全Linux网络内核参数优化秘籍"}}],["/note-book/OperaSystems/Linux%E8%99%9A%E6%8B%9F%E7%BD%91%E7%BB%9C%E8%AE%BE%E5%A4%87%E4%B9%8Bbridge.html",{loader:()=>m(()=>import("./Linux虚拟网络设备之bridge.html-DnsMN218.js"),__vite__mapDeps([166,1])),meta:{d:1691939318e3,e:`
<p>转自：https://segmentfault.com/a/1190000009491002</p>
<p>继前两篇介绍了<a href="https://segmentfault.com/a/1190000009249039" target="_blank" rel="noopener noreferrer">tun/tap</a>和<a href="https://segmentfault.com/a/1190000009251098" target="_blank" rel="noopener noreferrer">veth</a>之后，本篇将介绍Linux下常用的一种虚拟网络设备，那就是bridge(桥)。</p>`,r:{minutes:13.37,words:4010},y:"a",t:"Linux虚拟网络设备之bridge(桥)"}}],["/note-book/OperaSystems/Shell%E5%BF%AB%E6%8D%B7%E9%94%AE.html",{loader:()=>m(()=>import("./Shell快捷键.html-Jc2qSF03.js"),__vite__mapDeps([167,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:1.35,words:406},y:"a",t:"shell快捷键总结"}}],["/note-book/OperaSystems/date%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./date命令.html-C8xi4Ljw.js"),__vite__mapDeps([168,1])),meta:{d:1691939318e3,e:`
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
</code></pre>`,r:{minutes:1,words:301},y:"a",t:"date 显示或设置时间"}}],["/note-book/OperaSystems/grep%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./grep命令.html-B888QbPg.js"),__vite__mapDeps([169,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:3.4,words:1020},y:"a",t:"grep 中级"}}],["/note-book/OperaSystems/ip%E5%91%BD%E4%BB%A4.html",{loader:()=>m(()=>import("./ip命令.html-CA0FqYkg.js"),__vite__mapDeps([170,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:.97,words:292},y:"a",t:"用IP命令管理网桥bridge"}}],["/note-book/OperaSystems/macvlan%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./macvlan详解.html-DHDu5rim.js"),__vite__mapDeps([171,1])),meta:{d:1691939318e3,e:`
<p>https://blog.csdn.net/hzj_001/article/details/100182686    macvlan 详解</p>
<p>https://cloud.tencent.com/developer/article/1432601    Docker 网络模型之 macvlan 详解，图解，实验完整</p>
<p>https://www.cnblogs.com/4a8a08f09d37b73795649038408b5f33/p/12200769.html     <a href="https://www.cnblogs.com/4a8a08f09d37b73795649038408b5f33/p/12200769.html" target="_blank" rel="noopener noreferrer">macvlan几种模式</a></p>`,r:{minutes:.16,words:49},y:"a",t:"macvlan"}}],["/note-book/OperaSystems/proc-sysrq-trigger%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./proc-sysrq-trigger详解.html-BTp6LlSt.js"),__vite__mapDeps([172,1])),meta:{d:1691939318e3,e:`
<h2>立即重新启动计算机</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> b <span class="token operator">&gt;</span> /proc/sysrq-trigger
</code></pre></div><h2>立即关闭计算机</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> o <span class="token operator">&gt;</span> /proc/sysrq-trigger
</code></pre></div>`,r:{minutes:.45,words:136},y:"a",t:"/proc/sysrq-trigger详解"}}],["/note-book/OperaSystems/proc%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./proc详解.html-B7IJngJo.js"),__vite__mapDeps([173,1])),meta:{d:1691939318e3,e:`
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
</blockquote>`,r:{minutes:42.71,words:12813},y:"a",t:"/proc详解"}}],["/note-book/OperaSystems/sed.html",{loader:()=>m(()=>import("./sed.html-BhVvXyZS.js"),__vite__mapDeps([174,1])),meta:{d:1691939318e3,e:`
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
</code></pre>`,r:{minutes:2.17,words:651},y:"a",t:"Linux三剑客-sed"}}],["/note-book/OperaSystems/sysstat%20Linux%E7%8A%B6%E6%80%81%E5%B7%A5%E5%85%B7%E5%8C%85.html",{loader:()=>m(()=>import("./sysstat Linux状态工具包.html-BgGzQH15.js"),__vite__mapDeps([175,1])),meta:{d:1691939318e3,e:`
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
sysstat功能强大，功能也在不断的增强，每个版本提供了不同的功能，用户可以到sysstat官网了解工具最先发展情况和获得相应的帮助手册。官网地址： http://sebastien.godard.pagesperso-orange.fr/</p>`,r:{minutes:2.56,words:769},y:"a",t:"简介"}}],["/note-book/OperaSystems/%E4%BD%BF%E7%94%A8curl%E5%AE%9E%E7%8E%B0%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81.html",{loader:()=>m(()=>import("./使用curl实现邮件发送.html-B0EpjANS.js"),__vite__mapDeps([176,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:.87,words:261},y:"a",t:"使用curl实现邮件发送"}}],["/note-book/OperaSystems/%E4%BD%BF%E7%94%A8dev%E4%B8%8B%E7%9A%84tcp-udp%E5%AE%9E%E7%8E%B0socket.html",{loader:()=>m(()=>import("./使用dev下的tcp-udp实现socket.html-C0-7nvzf.js"),__vite__mapDeps([177,1])),meta:{d:1700537497e3,e:`
<h1>一、背景</h1>
<p>Linux中的一个特殊文件： /dev/tcp  打开这个文件就类似于发出了一个socket调用，建立一个socket连接，读写这个文件就相当于在这个socket连接中传输数据。</p>
<p>我们可以通过重定向实现基于tcp/udp协议的软件通讯，/dev/tcp/host/port  只要读取或者写入这个文件，相当于系统会尝试连接:host 这台机器，对应port端口。</p>
<p>如果主机以及端口存在，就建立一个socket 连接，将在 /proc/self/fd 目录下面，有对应的文件出现。</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span>/dev/tcp/8.8.8.8/53
</code></pre></div>`,r:{minutes:4.76,words:1429},y:"a",t:"关于 /dev/(tcp|udp)/${HOST}/${PORT}"}}],["/note-book/OperaSystems/%E5%A4%87%E4%BB%BDLinux%E7%B3%BB%E7%BB%9F.html",{loader:()=>m(()=>import("./备份Linux系统.html-CqdfO9sF.js"),__vite__mapDeps([178,1])),meta:{d:1691939318e3,e:`
<p>在前面的一些文章中，我反复提到经常会把Linux系统搞崩溃，所以备份系统就是一件不容忽视的事情。由于Linux系统本身的优越性，系统的备份和还原还是比较容易的。主要表现在以下方面：</p>
<ul>
<li>Linux系统所有的数据都以文件的形式存在，所以备份就是直接拷贝文件；硬盘分区也被当成文件，所以可以直接克隆硬盘数据。</li>
<li>Linux系统自带很多实用工具，比如tar、dd、rsync等，备份还原系统不需要购买或下载第三方软件。</li>
<li>Linux系统在运行时其硬盘上的文件可以直接被覆盖，所以还原系统的时候不需要另外的引导盘。（当然，系统完全挂掉到无法启动这种情况还是需要另外的引导盘的。）</li>
</ul>`,r:{minutes:3.38,words:1014},y:"a",t:"备份Linux系统"}}],["/note-book/OperaSystems/%E5%A4%A7%E9%87%8F%E4%BD%BF%E7%94%A8swap%E5%AF%BC%E8%87%B4%E6%97%A0%E6%B3%95%E5%88%87%E6%8D%A2.html",{loader:()=>m(()=>import("./大量使用swap导致无法切换.html-JH4WYVy_.js"),__vite__mapDeps([179,1])),meta:{d:1691939318e3,e:`
<h2>一、报错：</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span> <span class="token parameter variable">-v</span>
swapoff /www/swap
swapoff: /www/swap: swapoff failed: Cannot allocate memory
</code></pre></div>`,r:{minutes:.27,words:81},y:"a",t:"swapoff failed: Cannot allocate memory"}}],["/note-book/OperaSystems/%E5%B8%B8%E8%A7%81%E4%B9%B1%E7%A0%81%E4%BA%A7%E7%94%9F%E5%8E%9F%E5%9B%A0.html",{loader:()=>m(()=>import("./常见乱码产生原因.html-Cp-M6cP6.js"),__vite__mapDeps([180,1])),meta:{d:1691939318e3,e:`
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
</table>`,r:{minutes:1.37,words:412},y:"a",t:"常见乱码产生原因"}}],["/note-book/OperaSystems/%E6%9B%B4%E6%8D%A2%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AF%AD%E8%A8%80.html",{loader:()=>m(()=>import("./更换系统和命令行语言.html-CDNSf6Vo.js"),__vite__mapDeps([181,1])),meta:{d:1691939318e3,e:`
<h1>一.背景信息</h1>
<p>在安装完 kali linux 2020.1 时，其操作系统默认语言为英文的，我们操作起来比较麻烦，为了以后操作方便起见，这边将其操作系统默认语言更改为中文。本篇文章将带领各位小伙伴们一起去将操作系统默认语言更改为中文</p>
<h1>二.操作步骤</h1>
<pre><code>打开Terminal Emulator 界面，查看当前系统语言为默认英文



在Terminal Emulator 中执行dpkg-reconfigure locales命令

注意：如果是root用户可直接执行dpkg-reconfigure locales命令，如果是kali用户则需先切换成root用户登陆再进行执行
具体切换成root用户登陆请参考下列链接地址：https://blog.csdn.net/weixin_46192679/article/details/104474829
</code></pre>`,r:{minutes:1.45,words:436},y:"a",t:"更换系统和命令行语言"}}],["/note-book/OperaSystems/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8FPATH.html",{loader:()=>m(()=>import("./环境变量PATH.html-B7jgWhEa.js"),__vite__mapDeps([182,1])),meta:{d:1691939318e3,e:`
<h2>修改环境变量</h2>
<p>export PS1="[[\\e[34;1m]\\u@[\\e[0m][\\e[32;1m]\\H[\\e[0m] [\\e[31;1m]\\w[\\e[0m]]$ " 基本优化命令行 颜色</p>
<h3>1、临时-重新登录系统后失效。</h3>
<p>export PS1="[[\\e[34;1m]\\u@[\\e[0m][\\e[32;1m]\\H[\\e[0m] [\\e[31;1m]\\w[\\e[0m]]\\$ "</p>
<h3>2、永久-写入文件/etc/profile 与生效</h3>
<pre><code>[root@VM-4-4-centos ~]# tail -1  /etc/profile
export PS1="[\\[\\e[34;1m\\]\\u@\\[\\e[0m\\]\\[\\e[32;1m\\]\\H\\[\\e[0m\\] \\[\\e[31;1m\\]\\w\\[\\e[0m\\]]\\\\$ "
[root@VM-4-4-centos ~]# source  /etc/profile
</code></pre>`,r:{minutes:.47,words:142},y:"a",t:"环境变量"}}],["/note-book/OperaSystems/%E8%BF%9B%E7%A8%8B.html",{loader:()=>m(()=>import("./进程.html-ZBVdBoAf.js"),__vite__mapDeps([183,1])),meta:{d:1691939318e3,e:`
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
​</p>`,r:{minutes:8.16,words:2449},y:"a",t:"进程"}}],["/note-book/OperaSystems/%E9%80%BB%E8%BE%91%E5%8D%B7%E6%97%A0%E6%B3%95%E5%88%A0%E9%99%A4.html",{loader:()=>m(()=>import("./逻辑卷无法删除.html-CusKKRWx.js"),__vite__mapDeps([184,1])),meta:{d:1691939318e3,e:`
<p>存储池名称：fs2
逻辑卷名称：fs2
逻辑卷文件系统被占用(Logical volume /dev/<em>/</em> contains a filesystem in use.)</p>
<p>[root@f1s2001 ldnas]# lvremove -f /dev/fs2/fs2
Logical volume fs2/fs2 contains a filesystem in use.</p>
<h1>逻辑卷可能被挂载了</h1>
<p>​        df 查看挂载详情，找到对应逻辑卷进行卸载操作后，再执行删除
​        若挂载信息为：
​            /dev/fs2/fs2   1038336    32996   1005340   4% /mnt
​        执行 umount /dev/fs2/fs2 或 umount /mnt 进行卸载</p>`,r:{minutes:1.38,words:415},y:"a",t:"逻辑卷删除问题"}}],["/note-book/PhotoShop/ps%E5%A6%82%E4%BD%95%E5%8E%BB%E6%B0%B4%E5%8D%B0%E7%9A%844%E4%B8%AA%E6%96%B9%E6%B3%95.html",{loader:()=>m(()=>import("./ps如何去水印的4个方法.html-WrwWqDyM.js"),__vite__mapDeps([185,1])),meta:{d:1691939318e3,e:`
<h2>方法一：</h2>
<p>1、 双击打开photoshop软件，导入含有水印的图片</p>
<figure><figcaption>1-导入含有水印的图片</figcaption></figure>
<p>2、 然后，在左侧工具栏中选择矩形选框工具，如图所示，框中水印部分</p>
<figure><figcaption>2-1选择矩形选框工具</figcaption></figure>
<figure><figcaption>2-2框中水印部分</figcaption></figure>
<p>3、 接着，执行编辑-填充，也可以直接按下Shift+F5，选择内容识别</p>
<figure><figcaption>3-选择内容识别</figcaption></figure>`,r:{minutes:2.39,words:718},y:"a",t:"PhotoShop如何去水印的4个方法"}}],["/note-book/Physical_server/Huawei%20x288%E7%B3%BB%E5%88%97%E9%A3%8E%E6%89%87%E8%BD%AC%E9%80%9F%E8%B0%83%E9%80%9F.html",{loader:()=>m(()=>import("./Huawei x288系列风扇转速调速.html-CD6QZuZ8.js"),__vite__mapDeps([186,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:.66,words:197},y:"a",t:"华为服务器2288H V2的IPMI设置风扇转速和工作模式的命令"}}],["/note-book/Portainer/Portainer%20%E5%8D%95%E6%9C%BA%E9%83%A8%E7%BD%B2.html",{loader:()=>m(()=>import("./Portainer 单机部署.html-C2WTDONC.js"),__vite__mapDeps([187,1])),meta:{d:1691939318e3,e:`
<h1>一、介绍</h1>
<p>Portainer是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面，基本能满足中小型单位对容器管理的全部需求。</p>
<h1>二、本地模式部署</h1>
<h2>1、查询当前有哪些Portainer镜像</h2>
<pre><code>docker search portainer
</code></pre>
<p>![image-20220512153403266](Portainer 单机部署.assets/image-20220512153403266-16918417647751.png)</p>`,r:{minutes:1.07,words:321},y:"a",t:"Portainer 单机部署"}}],["/note-book/Prometheus/Prometheus%E7%9B%91%E6%8E%A7Windows%E4%B8%BB%E6%9C%BA.html",{loader:()=>m(()=>import("./Prometheus监控Windows主机.html-DwIWl68-.js"),__vite__mapDeps([188,1])),meta:{d:1691939318e3,e:`
<p><strong>1. 基本说明</strong></p>
<p>使用Prometheus监控Windows主机和Linux主机并无太大区别，都是使用社区的Exporter进行采集数据，之后暴露一个接口，可以让Prometheus采集到主机的数据。</p>
<p>其中监控Linux的Exporter是：https://github.com/prometheus/node_exporter</p>
<p>监控Windows主机的Exporter是：https://github.com/prometheus-community/windows_exporter</p>
<p><strong>2. 安装Windows Exporter</strong></p>`,r:{minutes:1.16,words:348},y:"a",t:"[Prometheus监控Windows主机]"}}],["/note-book/RabbitMQ/rabbitmq.html",{loader:()=>m(()=>import("./rabbitmq.html-DKCJfBVR.js"),__vite__mapDeps([189,1])),meta:{d:1691939318e3,e:`
<h2>消息队列/中间件</h2>
<figure><figcaption>image-20211120102031495</figcaption></figure>
<h2>RabbitMQ详解</h2>
<h3>传递模式</h3>
<p>消息队列中间件有<strong>两种传递模式</strong>：【点对点 安全】 和 【发布/订阅(Pub/Sub)分支模式 并发】
点对点依靠队列的原理；发布/订阅则可以用于一对多的广播</p>
<h3>中间件作用</h3>
<p>消息中间件的作用：解耦、冗余(存储)、扩展性、削峰、可恢复性、顺序保证、缓冲、异步通信</p>
<h3>RabbitMQ的具体特点</h3>`,r:{minutes:9.77,words:2931},y:"a",t:"大型网站高并发架构-RabbitMQ消息队列"}}],["/note-book/RouterOS/Azure%E5%88%B7%E5%86%99ROS%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./Azure刷写ROS教程.html-Bc82IMY3.js"),__vite__mapDeps([190,1])),meta:{d:1691939318e3,e:`
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
</blockquote>`,r:{minutes:1.71,words:512},y:"a",t:"Azure刷写ROS教程"}}],["/note-book/RouterOS/RouterOS%E5%88%A9%E7%94%A8%EF%BC%88L2TP%EF%BC%89%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%96%B9%E5%BC%82%E5%9C%B0%E7%BB%84%E7%BD%91.html",{loader:()=>m(()=>import("./RouterOS利用（L2TP）实现多方异地组网.html-CkWf7xm9.js"),__vite__mapDeps([191,1])),meta:{d:1691939318e3,e:`
<p>去年一个做网商的朋友找到我要搞定多方异地组网实现互通，还要实现在家办公。</p>
<p>当前环境是</p>
<p>A总部，RouterOS（ROS-A）当作主路由，使用的是CCR1009，100M专线；</p>
<p>B工厂，RouterOS（ROS-B）主路由，使用的是J1900软路由，200M商宽；</p>
<p>C办事处，RouterOS（ROS-C）主路由，使用的是J1900软路由，200M商宽，各自上网不互通。</p>
<h3>一、新网络规划</h3>
<p>经过和朋友的商量，需要不花钱的方案，对安全性也没太多的要求，只求能组网能用。</p>
<p>1、各个区域独自上网[break]</p>`,r:{minutes:5.3,words:1589},y:"a",t:"RouterOS利用V-P-N（L2TP）实现多方异地组网"}}],["/note-book/RouterOS/%E7%94%A8ros%E8%B7%AF%E7%94%B1%E4%BD%9C%E4%B8%BA%E4%B8%AD%E8%BD%AC%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./用ros路由作为中转教程.html-B_x7Q6_i.js"),__vite__mapDeps([192,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>ros路由相信对大佬级别很简单，对我们这群小白还是有点难度的，接触ros路由也有1年了，基本都是作为国内NAT小鸡中转用的，今天看有人需要就简单的说明一下，供MJJ们也能用上，减少折腾吧。</p>
</blockquote>
<h2>步骤一：注册试用账号</h2>
<p>去ros官网注册个试用账号，不登录的话会被限速带宽1M，虽然试用一个月，但是到期后还是维持试用时期设置的配置。</p>
<p>ROS路由官网:https://mikrotik.com/client</p>
<h2>步骤二：国内小鸡DD成ROS路由</h2>
<p>把国内小鸡DD成ROS路由，这里感谢方总的教学，详细教学出于一位大佬，我只是搬运工。</p>`,r:{minutes:4.4,words:1320},y:"a",t:"用ros路由作为中转教程"}}],["/note-book/S3-SimpleStorageService/MiniO_Docker_Deploy.html",{loader:()=>m(()=>import("./MiniO_Docker_Deploy.html-CuzvIXhH.js"),__vite__mapDeps([193,1])),meta:{d:1691939318e3,e:`
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
    

</code></pre></div>`,r:{minutes:.21,words:63},y:"a",t:"使用Docker部署minio"}}],["/note-book/S3-SimpleStorageService/Minio%E6%8C%82%E8%BD%BD%E5%88%B0nfs%E4%B8%8D%E6%88%90%E5%8A%9F.html",{loader:()=>m(()=>import("./Minio挂载到nfs不成功.html-D4vIiii3.js"),__vite__mapDeps([194,1])),meta:{d:1702539742e3,e:`
<h2>ERROR Unable to initialize backend: no locks available.</h2>
<figure><figcaption>001.png</figcaption></figure>
<p>服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示：</p>
<p>从这个日志来看，应该是minio拿不到nfs文件系统的锁。
解决方案</p>
<pre><code>nfs挂载时加nolock参数

使用nfsv4,而不是用nfsv3
</code></pre>
<p>参考</p>
<p>gitlab底层也是用的minio,gitlab官方文档是这么写的</p>`,r:{minutes:.69,words:208},y:"a",t:"Minio挂载到nfs不成功"}}],["/note-book/Tomcat/tomcat.html",{loader:()=>m(()=>import("./tomcat.html-C19mM003.js"),__vite__mapDeps([195,1])),meta:{d:1691939318e3,e:`
<h2>前言</h2>
<h3>什么是JAVA虚拟机</h3>
<pre><code>所谓虚拟机，就是一台虚拟的计算机。他是一款软件，用来执行一系列虚拟计算机指令。大体上，虚拟机可以分为系统虚拟机和程序虚拟机。大名鼎鼎的VisualBox、VMware就属于系统虚拟机。他们完全是对物理计算机的仿真。提供了一个可以运行完整操作系统的软件平台。
程序虚拟机的典型代表就是Java虚拟机，它专门为执行单个计算机程序而设计，在Java虚拟机中执行的指令我们称为Java字节码指令。无论是系统虚拟机还是程序虚拟机，在上面运行的软件都呗限制于虚拟机提供的资源中。
</code></pre>
<h3>JAVA 如何做到跨平台</h3>`,r:{minutes:12.14,words:3643},y:"a",t:"TOMCAT构建企业级高负载服务器"}}],["/note-book/Traefik/",{loader:()=>m(()=>import("./index.html-DRLodwxY.js"),__vite__mapDeps([196,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:.59,words:177},y:"a",t:"Traefik"}}],["/note-book/Traefik/traefik%E4%BD%9C%E4%B8%BAdocker%E8%BE%B9%E7%BC%98%E8%B7%AF%E7%94%B1.html",{loader:()=>m(()=>import("./traefik作为docker边缘路由.html-DnMIRp3q.js"),__vite__mapDeps([197,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:3.24,words:972},y:"a",t:"Traefik作为docker的边缘路由"}}],["/note-book/VMware/%E5%90%84%E4%B8%AA%E7%89%88%E6%9C%AC%E7%9A%84%E6%BF%80%E6%B4%BB%E5%AF%86%E9%92%A5.html",{loader:()=>m(()=>import("./各个版本的激活密钥.html-DNMIgKUO.js"),__vite__mapDeps([198,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:1.27,words:382},y:"a",t:"VMware各个版本的激活密钥"}}],["/note-book/VMware/%E8%99%9A%E6%8B%9F%E5%8C%96%E7%89%A9%E7%90%86%E6%9C%BA.html",{loader:()=>m(()=>import("./虚拟化物理机.html-D-Rxy0tX.js"),__vite__mapDeps([199,1])),meta:{d:1691939318e3,e:`
<h2>一、工具介绍</h2>
<p>使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点：</p>
<p>1、该过程对物理机无损</p>
<p>2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性</p>
<p>3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息</p>
<p>4、转换windows xp和windows server2008以上的版本（server 2003不确定是否可以）</p>
<h2>二、转换原理</h2>
<figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627165200680-1510240940.png" target="_blank" rel="noopener noreferrer"></a><figcaption>img</figcaption></figure>`,r:{minutes:3.55,words:1065},y:"a",t:"虚拟化物理机"}}],["/note-book/WindowsOperaSystem/PowerShell%20%E6%89%93%E5%8D%B0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html",{loader:()=>m(()=>import("./PowerShell 打印环境变量.html-DM-2-WMm.js"),__vite__mapDeps([200,1])),meta:{d:169199284e4,e:`
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

</code></pre></div>`,r:{minutes:.77,words:231},y:"a",t:"PowerShell 打印环境变量"}}],["/note-book/WindowsOperaSystem/PowerShell%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html",{loader:()=>m(()=>import("./PowerShell 操作系统禁止运行脚本.html-B8Yq85uO.js"),__vite__mapDeps([201,1])),meta:{d:169199284e4,e:`
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
`,r:{minutes:.34,words:103},y:"a",t:"PowerShell 操作系统禁止运行脚本"}}],["/note-book/WindowsOperaSystem/Windows%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%94%B9%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7%E7%9B%AE%E5%BD%95.html",{loader:()=>m(()=>import("./Windows系统更改迁移用户目录.html-DKHgW7m8.js"),__vite__mapDeps([202,1])),meta:{d:169199284e4,e:`
<p>系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现<code>C:\\Users</code>目录占用几十个GB，以下方法可将<code>Users</code>目录大部分空间转移。</p>
<h3>1. 准备工作</h3>
<p>更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！</p>
<h3>2. 修改注册表</h3>
<p>更改默认用户目录路径，快捷键<code>Win+R</code>输入<code>regedit</code>打开系统注册表，切换至如下路径：</p>
<div class="language-BAT" data-ext="BAT" data-title="BAT"><pre class="language-BAT"><code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList\\
</code></pre></div>`,r:{minutes:1.91,words:572},y:"a",t:"Windows系统更改/迁移用户目录"}}],["/note-book/Zabbix/Zabbix-Agent%E4%B8%BB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C.html",{loader:()=>m(()=>import("./Zabbix-Agent主动模式自动注册.html-B5UMs8yZ.js"),__vite__mapDeps([203,1])),meta:{d:1704339444e3,e:`
<p>TODO</p>
`,r:{minutes:.04,words:11},y:"a",t:"Zabbix-Agent主动模式自动注册"}}],["/note-book/Zabbix/Zabbix-Agent%E8%A2%AB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C.html",{loader:()=>m(()=>import("./Zabbix-Agent被动模式自动注册.html-DyJMcC-w.js"),__vite__mapDeps([204,1])),meta:{d:1704339444e3,e:`
<p>TODO</p>
`,r:{minutes:.04,words:11},y:"a",t:"Zabbix-Agent被动模式自动注册"}}],["/note-book/Zabbix/zabbix-docker.html",{loader:()=>m(()=>import("./zabbix-docker.html-BbWJlElF.js"),__vite__mapDeps([205,1])),meta:{d:1704338647e3,e:`
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
</blockquote>`,r:{minutes:7.81,words:2344},y:"a",t:"zabbix使用容器方式部署"}}],["/note-book/Zabbix/zabbix.html",{loader:()=>m(()=>import("./zabbix.html-X0zsQzP9.js"),__vite__mapDeps([206,1])),meta:{d:1691939318e3,e:`
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
操作系统：Linux,Unix,Windows性能参数</p>`,r:{minutes:11.94,words:3582},y:"a",t:"Zabbix 构建企业级监控告警平台"}}],["/note-book/Zabbix/zabbix%E7%9A%84VMwareGuest%E8%A1%A5%E5%85%85%E7%BC%BA%E9%99%B7.html",{loader:()=>m(()=>import("./zabbix的VMwareGuest补充缺陷.html-7Fqqoza4.js"),__vite__mapDeps([207,1])),meta:{d:1692674203e3,e:`
<h2>主机丢失</h2>
<p><strong>删除</strong>powerstate的自动删除机制，删除这个</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Discard unchanged with heartbeat
</code></pre></div><p>名称： 主机丢失  Power state no data</p>
<p>表达式：</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nodata<span class="token punctuation">(</span>/VMware Guest/vmware.vm.powerstate<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$VMWARE</span>.URL<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$VMWARE</span>.VM.UUID<span class="token punctuation">}</span><span class="token punctuation">]</span>,3m<span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre></div>`,r:{minutes:.41,words:123},y:"a",t:"zabbix的VMwareGuest补充缺陷"}}],["/note-book/ebook/ebook.html",{loader:()=>m(()=>import("./ebook.html-BnsY9Mkp.js"),__vite__mapDeps([208,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:.25,words:74},y:"a",t:"目录"}}],["/note-book/goaccess/goaccess%E7%BB%99ftp%E7%94%9F%E6%88%90%E5%88%86%E6%9E%90%E5%9B%BE.html",{loader:()=>m(()=>import("./goaccess给ftp生成分析图.html-uPkAGQfG.js"),__vite__mapDeps([209,1])),meta:{d:1697698698e3,e:`
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


</code></pre></div>`,r:{minutes:3.43,words:1030},y:"a",t:"goaccess给ftp生成分析图"}}],["/note-book/memcache-redis/memcache-redis.html",{loader:()=>m(()=>import("./memcache-redis.html-Cf2O0-UK.js"),__vite__mapDeps([210,1])),meta:{d:1691939318e3,e:`
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
<h1>memcached</h1>`,r:{minutes:16.86,words:5057},y:"a",t:"Memcache-Redis缓解数据库压力"}}],["/note-book/misc/%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8Cu%E7%9B%BE%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./中国建设银行u盾使用教程.html-Diez_kSe.js"),__vite__mapDeps([211,1])),meta:{d:1704691254e3,e:`
<blockquote>
<p>因为建设银行落后的系统，使用Windows 7操作系统是百分百成功，其他os不成功。不建议尝试。</p>
</blockquote>
<h2>step1</h2>
<p>在链接 http://ebank1.ccb.com/chn/home/ebank/company/wsyx/xzzq/index.shtml</p>
<p>下载驱动 <strong>E路护航网银安全组件</strong></p>
<figure><figcaption>image-20231213153117416</figcaption></figure>
<h2>step2</h2>
<p>安装浏览器插件，Windows默认未edge浏览器。</p>`,r:{minutes:.93,words:278},y:"a",t:"中国建设银行u盾使用教程"}}],["/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/CPU%E9%B8%A1%E8%A1%80BIOS.html",{loader:()=>m(()=>import("./CPU鸡血BIOS.html-DkyEeOP4.js"),__vite__mapDeps([212,1])),meta:{d:1702978415e3,e:`
<p>鸡血bios能提升性能，获得更大好处。现在对一些关键操作的参数进行解释。</p>
<p>这是我们本文的主角</p>
<figure><figcaption>image-20231219170358590</figcaption></figure>
<p>参数介绍</p>
<p>2696v3是e5 v3系列最强的cpu 它是2699v3的 oem定制版
2699v3是 18核36线程  睿频  （ 12-36）单核3.6G 全核2.8G  tdp 145w
2696v3是  18核36线程  睿频  （12-38）  单核3.8G 全核 2.8G tdp  145w
所以他们唯一的区别就四单核睿频从3.6g提升到了3.8G
但是因为E5 V3鸡血bios的出现 可以全核最大睿频 即单核3.6G就可以全核3.6G 单核3.8G就可以全核3.8G.但是全核睿频功耗不能超过tdp功耗 就是145w 所以18核满载超过145w就会降频</p>`,r:{minutes:5.9,words:1769},y:"a",t:"CPU鸡血BIOS"}}],["/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/GPU%E7%9F%BF%E5%8D%A1%E4%BD%93%E8%B4%A8%E6%A3%80%E6%B5%8B.html",{loader:()=>m(()=>import("./GPU矿卡体质检测.html-DKA5I5Ww.js"),__vite__mapDeps([213,1])),meta:{d:1702978415e3,e:`
<blockquote>
<p>矿难已过，便宜显卡满天飞。 矿卡价格确实很香，同时坑也很多。我准备做一次垃圾佬踩一下这些坑。</p>
<p>作为一个垃圾佬，最喜欢体验这一些机遇与风险并存刺激的东西。</p>
<p>于是，我购买了一片 AMD 讯景 RX6600XT 花费 1179.00元，店保2年，看起来非常诱人。这价格还要啥自行车？就是用着用着爆了，我都能夸它爆的真响。</p>
<p>享受价格红利的同时也不能忘记巨大风险的存在，我们如何为矿卡检测体质呢？这是本文的主题。</p>
</blockquote>
<p>矿卡型号一览表 来自 https://www.bilibili.com/read/cv21654310/</p>`,r:{minutes:3.16,words:949},y:"a",t:"GPU矿卡体质检测"}}],["/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html",{loader:()=>m(()=>import("./etcd安装etcdkeeper.html-Dm5P27if.js"),__vite__mapDeps([214,1])),meta:{d:1691939318e3,e:`
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
</code></pre>`,r:{minutes:.92,words:275},y:"a",t:"etcd安装dashboard-etcdkeeper"}}],["/note-book/DatabaseSystem/MySQL/%E5%9B%BD%E5%86%85%E6%BA%90.html",{loader:()=>m(()=>import("./国内源.html-WfXmt1gb.js"),__vite__mapDeps([215,1])),meta:{d:1691939318e3,c:"数据库",e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> localinstall http://mirrors.ustc.edu.cn/mysql-repo/mysql57-community-release-el7.rpm

</code></pre></div><h2>更改用户密码</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
ALTER <span class="token environment constant">USER</span> <span class="token string">'jeffrey'</span>@<span class="token string">'localhost'</span> IDENTIFIED BY <span class="token string">'password'</span><span class="token punctuation">;</span> //记得修改自己的账户
flush privileges<span class="token punctuation">;</span> //修改成功后刷新权限
quit<span class="token punctuation">;</span> //最后退出

</code></pre></div>`,r:{minutes:.22,words:67},y:"a",t:"国内源"}}],["/note-book/DatabaseSystem/MySQL/%E6%9F%A5%E7%9C%8BMysql%E6%95%B0%E6%8D%AE%E9%87%8F%E5%A4%A7%E5%B0%8F.html",{loader:()=>m(()=>import("./查看Mysql数据量大小.html-D7pzy_oI.js"),__vite__mapDeps([216,1])),meta:{d:1697513393e3,e:`
<p>以MB为单位统计，查询当前全部数据库的数据量大小。</p>
<p>data_length：数据大小
index_length：索引大小</p>
<p>括号被转义了，记得转回来</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>SELECT table_schema <span class="token string">"Data Base Name"</span>,
    sum<span class="token punctuation">\\</span><span class="token punctuation">(</span>data_length+index_length<span class="token punctuation">\\</span><span class="token punctuation">)</span>/1024/1024 <span class="token string">"Data Base Size in MB"</span>
FROM information_schema.TABLES
</code></pre></div>`,r:{minutes:.23,words:68},y:"a",t:"查看Mysql数据量大小"}}],["/note-book/DistributedSystem/Ansible/Centos7.x%20%E5%AE%89%E8%A3%85Python3.9.7%20%20Ansible4.5.html",{loader:()=>m(()=>import("./Centos7.x 安装Python3.9.7  Ansible4.5.html-7UP3p_fn.js"),__vite__mapDeps([217,1])),meta:{d:1691939318e3,e:`
<h2>1、环境信息</h2>
<p>前期安装Ansible失败报"Failed to validate the SSL certificate"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>安装环境： 　Centos7.9
SSH/SSL:　　OpenSSH_8.7p1, OpenSSL <span class="token number">1.1</span>.1l  <span class="token number">24</span> Aug <span class="token number">2021</span>

<span class="token comment">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span>

<span class="token comment"># python --version</span>

Python <span class="token number">2.7</span>.5

<span class="token comment"># python3 --version</span>

Python <span class="token number">3.9</span>.7
</code></pre></div>`,r:{minutes:1.38,words:415},y:"a",t:"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证）"}}],["/note-book/DistributedSystem/Ansible/ansible%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%90%E7%BB%B4.html",{loader:()=>m(()=>import("./ansible自动化运维.html-WZHEI7zR.js"),__vite__mapDeps([218,1])),meta:{d:1691939318e3,e:`
<h1>1-简介</h1>
<h2><strong>Logo</strong></h2>
<figure><figcaption>image-20211106190344512</figcaption></figure>
<h2>介绍</h2>
<p>ansible是新出现的自动化运维工具，基于<strong>Python</strong>开发，集合了众多运维工具（puppet、cfengine、chef、func、fabric）的优点，
实现了批量系统配置、批量程序部署、批量运行命令等功能。
无客户端。</p>
<p>我们要学一些Ansible的安装和一些基本概念,然后我们会开始研究一些真正有意思的东西 – <strong>playbook</strong>,配置管理,部署以及语法编排.我们将会学习如何使用/usr/bin/ansible执行ad-hoc并行命令,我们还会学习ansible的核心有什么样的模块可供使用.当然以后你也可以写你自己的模块,我们会在后期讲到.</p>`,r:{minutes:16.88,words:5065},y:"a",t:"ansible自动化运维"}}],["/note-book/DistributedSystem/JumperServer/HA_Deploy.html",{loader:()=>m(()=>import("./HA_Deploy.html-DbsvelcQ.js"),__vite__mapDeps([219,1])),meta:{d:1691939318e3,e:`
<p>环境说明</p>
<ul>
<li>除 JumpServer 自身组件外，其他组件的高可用请参考对应的官方文档进行部署</li>
<li>按照此方式部署后，后续只需要根据需要扩容 JumpServer 节点然后添加节点到 HAProxy 即可</li>
<li>如果已经有 HLB 或者 SLB 可以跳过 HAProxy 部署，第三方 LB 要注意 session 和 websocket 问题</li>
<li>如果已经有 云存储 (* S3/Ceph/Swift/OSS/Azure) 可以跳过 MinIO 部署，MySQL Redis 也一样</li>
<li>生产环境中，应该使用 Ceph 等替代 NFS，或者部署高可用的 NFS 防止单点故障</li>
<li><a href="https://github.com/wojiushixiaobai/redis-sentinel" target="_blank" rel="noopener noreferrer">Redis 高可用快速部署可以参考此项目</a></li>
</ul>`,r:{minutes:16.87,words:5062},y:"a",t:"负载均衡"}}],["/note-book/DistributedSystem/JumperServer/JumperServerDockerDeploy.html",{loader:()=>m(()=>import("./JumperServerDockerDeploy.html-BYVblXkf.js"),__vite__mapDeps([220,1])),meta:{d:169215496e4,e:`
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

</code></pre></div>`,r:{minutes:6.08,words:1823},y:"a",t:"JumperServer Docker容器部署"}}],["/note-book/DistributedSystem/JumperServer/",{loader:()=>m(()=>import("./index.html-AW07m5AW.js"),__vite__mapDeps([221,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:3.9,words:1170},y:"a",t:"JumperServer Insight"}}],["/note-book/DistributedSystem/OpenStack/OpenStack-Queens%E7%89%88%E6%90%AD%E5%BB%BA%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./OpenStack-Queens版搭建详解.html-CuecMbwP.js"),__vite__mapDeps([222,1])),meta:{d:1691939318e3,e:`
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
</table>`,r:{minutes:93.18,words:27955},y:"a",t:"OpenStack-Queens版搭建详解"}}],["/note-book/Gitlab/CI/gitlab%20ci%20%E7%BC%96%E5%86%99.html",{loader:()=>m(()=>import("./gitlab ci 编写.html-DmMKWBkU.js"),__vite__mapDeps([223,1])),meta:{d:1691939318e3,e:`
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

</code></pre></div>`,r:{minutes:32.42,words:9726},y:"a",t:"gitlab ci/cd 的两大要素"}}],["/note-book/Gitlab/CI/gitlab%20ci%20%E9%83%A8%E7%BD%B2.html",{loader:()=>m(()=>import("./gitlab ci 部署.html-zUQ9R4jr.js"),__vite__mapDeps([224,1])),meta:{d:1691939318e3,e:`<figure><figcaption>Gitlab-ci:从零开始的前端自动化部署</figcaption></figure>
<p>官方文档url：https://docs.gitlab.com/ee/ci</p>
<h1><strong>一.</strong> 概念介绍</h1>
<h2><strong>0.</strong>   <strong>Gitlab</strong> <strong>触发</strong> <strong>CI</strong> 流程图</h2>
<figure><figcaption>img</figcaption></figure>
<h2>1.1 gitlab-ci &amp;&amp; 自动化部署工具的运行机制</h2>`,r:{minutes:4.6,words:1379},y:"a",t:"一. 概念介绍"}}],["/note-book/Gitlab/CI/%E9%83%A8%E7%BD%B2Kubernetes%E7%B1%BB%E5%9E%8B%E7%9A%84gitlab-runner.html",{loader:()=>m(()=>import("./部署Kubernetes类型的gitlab-runner.html-DPYg-Ssu.js"),__vite__mapDeps([225,1])),meta:{d:1691939318e3,e:`
<h2>（1）下载软件包</h2>
<pre><code>wget https://get.helm.sh/helm-v3.8.0-linux-amd64.tar.gz
</code></pre>
<h2>（2）解压并拷贝文件位置</h2>
<pre><code>tar -zxvf helm-v3.8.0-linux-amd64.tar.gz

mv linux-amd64/helm /usr/local/bin/helm
</code></pre>
<p>这里需要注意的是将 /usr/local/bin 添加到环境变量中</p>
<h1>二、配置chart存储库</h1>
<h2>（1）添加chart存储库</h2>`,r:{minutes:10.08,words:3025},y:"a",t:"一、安装helm工具"}}],["/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html",{loader:()=>m(()=>import("./elk_kfaka.html-CCeoEMZH.js"),__vite__mapDeps([226,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:15.02,words:4507},y:"a",t:"ELK+kafka构建高并发分布式日志收集系统"}}],["/note-book/LinuxOperaSystem/Git/Centos7%20yum%20install%20git2.x%20%E8%BE%83%E6%96%B0%E7%89%88%E6%9C%AC.html",{loader:()=>m(()=>import("./Centos7 yum install git2.x 较新版本.html-Rgf_WXIV.js"),__vite__mapDeps([227,1])),meta:{d:1698989873e3,e:`
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
Git第三方仓库安装方式（IUS）</p>`,r:{minutes:.84,words:253},y:"a",t:"Centos7 yum install git2.x(较新版本)"}}],["/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/AWK%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0.html",{loader:()=>m(()=>import("./AWK中的字符串操作函数.html-BoP-SEhb.js"),__vite__mapDeps([228,1])),meta:{d:1698989873e3,e:`
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
</ul>`,r:{minutes:.19,words:57},y:"a",t:"AWK中的字符串操作函数"}}],["/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%20Runtime.html",{loader:()=>m(()=>import("./安装Nvidia Runtime.html-BFsPvmCp.js"),__vite__mapDeps([229,1])),meta:{d:1698989873e3,e:`
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
</code></pre></div>`,r:{minutes:1.76,words:527},y:"a",t:"安装Nvidia Runtime"}}],["/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%E9%A9%B1%E5%8A%A8.html",{loader:()=>m(()=>import("./安装Nvidia驱动.html-CoejJmy1.js"),__vite__mapDeps([230,1])),meta:{d:1698989873e3,e:`
<h2>安装驱动依赖</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> gcc g++ <span class="token function">make</span> <span class="token parameter variable">-y</span>

<span class="token comment"># 删除原有开源驱动包</span>
<span class="token function">apt-get</span> remove <span class="token parameter variable">--purge</span> nvidia*
</code></pre></div>`,r:{minutes:.54,words:162},y:"a",t:"安装Nvidia驱动"}}],["/note-book/LinuxOperaSystem/Samba/Linux%E4%BA%8EWindows%E4%BD%BF%E7%94%A8Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody%20nogroup%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html",{loader:()=>m(()=>import("./Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-pkhmkN9g.js"),__vite__mapDeps([231,1])),meta:{d:1698989873e3,e:`
<p>Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/samba/smb.conf修改配置文件如下:
在 <span class="token punctuation">[</span>global<span class="token punctuation">]</span> 放入以下内容
force user <span class="token operator">=</span> 帐号
force group <span class="token operator">=</span> 群组
create mask <span class="token operator">=</span> 0664
directory mask <span class="token operator">=</span> 0775
存档，重启smbd
<span class="token function">sudo</span> <span class="token function">service</span> smbd restart
</code></pre></div>`,r:{minutes:.25,words:75},y:"a",t:"Samba共享文件时文件属性nobody"}}],["/note-book/LinuxOperaSystem/Samba/Linux%E6%8C%82%E8%BD%BDcifs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{loader:()=>m(()=>import("./Linux挂载cifs文件系统.html-1LLqeMHw.js"),__vite__mapDeps([232,1])),meta:{d:1698989873e3,e:`
<p><strong>1、挂载方法</strong></p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># mount -t cifc "windows共享文件夹" "Linux /mnt路径"


</code></pre></div><p>Linux 会要求输入访问Windows 共享文件夹上的密码。</p>
<p>注意：</p>
<p>如果Linux中提示：</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Unable to find suitable address. 
</code></pre></div>`,r:{minutes:1.1,words:331},y:"a",t:"Linux挂载cifs共享存储"}}],["/note-book/LinuxOperaSystem/Samba/Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody.html",{loader:()=>m(()=>import("./Samba共享文件时文件属性nobody.html-nwlDmQZc.js"),__vite__mapDeps([233,1])),meta:{d:1698989873e3,e:`
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
</code></pre></div>`,r:{minutes:1.13,words:340},y:"a",t:"Linux samba服务器设置简单匿名共享"}}],["/note-book/LinuxOperaSystem/Samba/Samba%E9%85%8D%E7%BD%AE%E4%B8%BE%E4%BE%8B.html",{loader:()=>m(()=>import("./Samba配置举例.html-Bjk0exvP.js"),__vite__mapDeps([234,1])),meta:{d:1698989873e3,e:`
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>YOUR-SHARE-NAME<span class="token punctuation">]</span>
        path <span class="token operator">=</span> /home/NAME/
        available <span class="token operator">=</span> <span class="token function">yes</span>
        browsable <span class="token operator">=</span> <span class="token function">yes</span>
        public    <span class="token operator">=</span> <span class="token function">yes</span>
        writable  <span class="token operator">=</span> <span class="token function">yes</span>
</code></pre></div>`,r:{minutes:.47,words:141},y:"a",t:"Samba配置举例"}}],["/note-book/LinuxOperaSystem/VNC/Ubuntu%2020.04%20%E5%AE%89%E8%A3%85VNC%20Server.html",{loader:()=>m(()=>import("./Ubuntu 20.04 安装VNC Server.html-1_RnbCwD.js"),__vite__mapDeps([235,1])),meta:{d:1698989873e3,e:`
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
</code></pre></div>`,r:{minutes:1.23,words:370},y:"a",t:"Ubuntu 20.04 安装VNC Server超简单教程"}}],["/note-book/LinuxOperaSystem/Vim/vi%E7%BC%96%E8%BE%91%E5%99%A8.html",{loader:()=>m(()=>import("./vi编辑器.html-B13oQH0j.js"),__vite__mapDeps([236,1])),meta:{d:1698989873e3,e:`
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
</ul>`,r:{minutes:14,words:4200},y:"a",t:"vi编辑器"}}],["/note-book/LinuxOperaSystem/history/",{loader:()=>m(()=>import("./index.html-kpqoMS8N.js"),__vite__mapDeps([237,1])),meta:{d:1698989873e3,e:`
<p>https://blog.csdn.net/qq_42623156/article/details/110184465</p>
`,r:{minutes:.02,words:7},y:"a",t:"history命令详解"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/CPU%E7%9A%84%E8%99%9A%E6%8B%9F%E5%8C%96.html",{loader:()=>m(()=>import("./CPU的虚拟化.html-3BYlfDYo.js"),__vite__mapDeps([238,1])),meta:{d:1691939318e3,e:`
<p>CPU虚拟化的技术目标就是产生一种存在无限多CPU的假象，这一目标主要通过<strong>时分共享</strong>（time sharing）实现。时分共享中的执行单位/调度单位就是进程。</p>
<blockquote>
<p>（摘自MIT6.S081课）进程本身不是CPU，但是它们对应了CPU，它们使得你可以在CPU上运行计算任务。应用程序不能直接与CPU交互，只能与进程交互。操作系统内核会完成不同进程在CPU上的切换。所以，操作系统不是直接将CPU提供给应用程序，而是向应用程序提供“进程”，进程抽象了CPU，这样操作系统才能在多个应用程序之间复用一个或者多个CPU。</p>
</blockquote>`,r:{minutes:12.28,words:3684},y:"a",t:"4 CPU虚拟化"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%BB%8B%E7%BB%8D.html",{loader:()=>m(()=>import("./操作系统介绍.html-CWl8H0ef.js"),__vite__mapDeps([239,1])),meta:{d:1691939318e3,e:`
<p>在冯诺伊曼体系中，程序对机器码读取并执行，而在现代的操作系统设计中（意味着需要考虑到多程序同时运行），程序并不直接访问硬件（需要保护硬件资源），这时就需要一个软件来协调二者：通过受保护的方式分配资源给各个程序；这一软件就是操作系统，因此操作系统也可以看作硬件与应用程序间的抽象层。</p>
<p>操作系统这一抽象（abstraction）的设计原则也是计算机科学中的常用手法。本节开头引述的David  Wheeler的这句名言超前地预言了计算机科学的现状。这句名言中的‘level of  indirection’也会被故意错误地被引用为‘layer of  abstraction’（后者的说法更接近当下流行的语言）。实际上，抽象使得构建一个更大型的系统更加容易，例如在使用高级语言编程的时候不用去关心下层的汇编、数字电路或者晶体管的细节；在网络栈中传输应用数据的时候不需考虑物理电缆是否可靠；在操作系统中运行程序的时候也不用去关心硬件资源的使用和保护。</p>`,r:{minutes:4.77,words:1432},y:"a",t:"操作系统介绍"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7%E9%85%8D%E7%BD%AE%E6%94%AF%E6%8C%81AUFS%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{loader:()=>m(()=>import("./CentOS7配置支持AUFS文件系统.html-Bru3a3yP.js"),__vite__mapDeps([240,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:.6,words:180},y:"a",t:"使得内核支持AUFS"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS_7%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E9%85%8D%E7%BD%AE.html",{loader:()=>m(()=>import("./CentOS_7用户账户配置.html-rTciE6IQ.js"),__vite__mapDeps([241,1])),meta:{d:1706078578e3,e:`
<p><strong>说明：</strong></p>
<p>1、这篇博文记录的是CentOS 7 用户账户的配置，包括添加用户、添加用户组、删除用户、删除用户组等。其中包括分析用户的配置文件、目录以及对安全的思考。</p>
<p>2、用户配置方面CentOS 7与以往版本感觉没有差别。</p>
<h2><strong>第一部分 认识用户</strong></h2>
<p>Centos 7 系统最小化安装，默认配置，是没有创建其他用户的。作为服务器操作系统，为了安全起见，一般是使用一般用户。这就牵涉到用户、用户组的创建以及删除。</p>
<p>此外，CentOS 7 和其他版本的Linux一样，都具有相应用户的配置文件及目录，如下：</p>`,r:{minutes:7.77,words:2330},y:"a",t:"CentOS_7 用户账户配置"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8%E9%87%8D%E5%90%AF%E7%BD%91%E5%8D%A1%E7%9A%84%E6%96%B9%E6%B3%95.html",{loader:()=>m(()=>import("./Centos8重启网卡的方法.html-zuLsG7Vs.js"),__vite__mapDeps([242,1])),meta:{d:1691939318e3,e:`
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
<p>修改配置文件：vi /etc/sysconfig/network-scripts/ifcfg-ens160</p>`,r:{minutes:.93,words:280},y:"a",t:"Centos8 重启网卡方法"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld%E9%85%8D%E7%BD%AE.html",{loader:()=>m(()=>import("./firewalld配置.html-Cd8otIgI.js"),__vite__mapDeps([243,1])),meta:{d:1691939318e3,e:`
<p>1、查看防火墙状态：<code>firewall-cmd --state</code></p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --state </span>
running
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre></div>`,r:{minutes:3.45,words:1035},y:"a",t:"防火墙状态及规则"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/%E5%88%B6%E4%BD%9CCenOS%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{loader:()=>m(()=>import("./制作CenOS操作系统.html-BkIpGCtL.js"),__vite__mapDeps([244,1])),meta:{d:1691939318e3,e:`
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


</code></pre></div>`,r:{minutes:.91,words:273},y:"a",t:"制作CentOS操作系统RootFS"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/%E9%85%8D%E7%BD%AESSH%E5%85%8D%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81.html",{loader:()=>m(()=>import("./配置SSH免密码验证.html-B9TfeWZ0.js"),__vite__mapDeps([245,1])),meta:{d:1691939318e3,e:`
<p>ssh-keygen -t rsa&nbsp;（然后接四个回车）</p>
<p>例：输入生成ssh命令后，接着按四个回车即可。</p>
<figure><figcaption>wps5B4.tmp[4]</figcaption></figure>
<p>执行完这个命令后，linux会自动创建~/.ssh目录，</p>
<p>其中包含了成两个文件：id_rsa（私钥）、id_rsa.pub（公钥)</p>
<p>进入到.ssh目录中：</p>
<p>cd ~/.ssh</p>
<figure><figcaption>wps5D4.tmp[4]</figcaption></figure>
`,r:{minutes:.55,words:165},y:"a",t:"生成ssh密钥："}}],["/note-book/OperaSystems/Ubtuntu/Linux%20%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E6%A0%BC%E5%BC%8F.html",{loader:()=>m(()=>import("./Linux 终端命令格式.html-B5PF-rwN.js"),__vite__mapDeps([246,1])),meta:{d:1691939318e3,e:`
<h2>目标</h2>
<ul>
<li>了解终端命令格式</li>
<li>知道如何查阅终端命令帮助信息</li>
</ul>
<h2>01. 终端命令格式</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>parameter<span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:1.01,words:303},y:"a",t:"Linux 终端命令格式"}}],["/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04_Server%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AE%BE%E7%BD%AEIP%E5%9C%B0%E5%9D%80.html",{loader:()=>m(()=>import("./Ubuntu_20.04_Server使用命令行设置IP地址.html-BgROzks2.js"),__vite__mapDeps([247,1])),meta:{d:1705041743e3,e:`
<blockquote>
<p>转载From ： https://blog.csdn.net/justidle/article/details/114372558</p>
</blockquote>
<h2>确认 IP 文件</h2>
<p>我们只需要使用命令行来配置修改 IP 配置即可。</p>
<div class="language-cpp" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token operator">~</span>$ ls <span class="token operator">/</span>etc<span class="token operator">/</span>netplan
<span class="token number">00</span><span class="token operator">-</span>installer<span class="token operator">-</span>config<span class="token punctuation">.</span>yaml
</code></pre></div>`,r:{minutes:.87,words:262},y:"a",t:"Ubuntu 20.04 Server 使用命令行设置 IP 地址"}}],["/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E7%BD%91%E7%BB%9C%EF%BC%88%E7%BD%91%E7%BB%9C%E5%9B%BE%E6%A0%87%E4%B8%A2%E5%A4%B1%EF%BC%89%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{loader:()=>m(()=>import("./Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html-D12aD8qd.js"),__vite__mapDeps([248,1])),meta:{d:1705041743e3,e:`
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
<figure><figcaption>image-20221124112145118</figcaption></figure>`,r:{minutes:.42,words:127},y:"a",t:"Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案"}}],["/note-book/OperaSystems/Ubtuntu/Ubuntu%E6%9B%B4%E6%94%B9%E4%B8%BA24%E5%B0%8F%E6%97%B6%E5%88%B6.html",{loader:()=>m(()=>import("./Ubuntu更改为24小时制.html-Dc6R3qmv.js"),__vite__mapDeps([249,1])),meta:{d:1691939318e3,e:`
<p>https://blog.csdn.net/weixin_43824829/article/details/126978600</p>
`,r:{minutes:.03,words:10},y:"a",t:"Ubuntu更改为24小时制"}}],["/note-book/OperaSystems/Ubtuntu/Ubuntu%E7%9A%84%E7%B3%BB%E7%BB%9F%E9%98%B2%E7%81%AB%E5%A2%99ufw%E5%92%8Cdocker%E5%B9%B6%E5%AD%98%E7%AB%AF%E5%8F%A3%E7%AD%96%E7%95%A5%E6%97%A0%E6%95%88bug.html",{loader:()=>m(()=>import("./Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.html-BqEjz3FD.js"),__vite__mapDeps([250,1])),meta:{d:170598102e4,e:`
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
</ul>`,r:{minutes:1.05,words:316},y:"a",t:"Ubuntu的系统防火墙ufw和docker并存端口策略无效bug"}}],["/note-book/OperaSystems/Ubtuntu/Ubuntu%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html",{loader:()=>m(()=>import("./Ubuntu软件包文件管理.html-BjVZYJbG.js"),__vite__mapDeps([251,1])),meta:{d:1691939318e3,e:`
<h2>Debian/Ubuntu Linux 如何查看文件属于哪个软件包</h2>
<p>如何查找哪个软件包提供了/bin/ifconfig命令？
在Debian或Ubuntu Linux中，如何搜索某个命令所属的软件包？</p>
<p>在Red Hat CentOS Linux中，我们可以使用 <code>rpm -qf /bin/ls</code> 找出命令所在的软件包名称。</p>
<p>在Ubuntu中，
dpkg是一个命令行工具，可用于安装，构建，删除和管理Debian软件包。
dpkg维护有关可用软件包的一些可用信息。
dpkg-query是用于查看dpkg数据库中列出的软件包的信息的命令行工具。
apt-file是用于在APT软件包管理系统的软件包中搜索文件的命令行工具。</p>`,r:{minutes:5.07,words:1521},y:"a",t:"Ubuntu软件包文件管理"}}],["/note-book/OperaSystems/Ubtuntu/VMware%E8%99%9A%E6%8B%9F%E6%9C%BA%20Linux%E7%B3%BB%E7%BB%9F%20Ubuntu%2020.04%20%E7%A1%AC%E7%9B%98-%E7%A3%81%E7%9B%98%E6%89%A9%E5%AE%B9.html",{loader:()=>m(()=>import("./VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-DcT0OwVz.js"),__vite__mapDeps([252,1])),meta:{d:1691939318e3,e:`
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
成功扩容后：</p>`,r:{minutes:5.13,words:1539},y:"a",t:"配置"}}],["/note-book/OperaSystems/Ubtuntu/apt%E6%9F%A5%E8%AF%A2%E6%9F%90%E4%B8%AA%E8%BD%AF%E4%BB%B6%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%88%E6%9C%AC.html",{loader:()=>m(()=>import("./apt查询某个软件有哪些版本.html-C8b7kXNP.js"),__vite__mapDeps([253,1])),meta:{d:1691939318e3,e:`
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
</code></pre>`,r:{minutes:.55,words:165},y:"a",t:"apt查询某个软件有哪些版本"}}],["/note-book/OperaSystems/Ubtuntu/linux%E5%85%B3%E9%97%AD%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4%E9%9A%8F%E6%9C%BA%E5%8C%96%EF%BC%88ASLR%EF%BC%89.html",{loader:()=>m(()=>import("./linux关闭地址空间随机化（ASLR）.html-UHmJiOhP.js"),__vite__mapDeps([254,1])),meta:{d:1691939318e3,e:`
<h2>0x00 背景知识</h2>
<p>ASLR(Address Space Layout Randomization)在2005年被引入到Linux的内核 kernel 2.6.12 中，当然早在2004年就以patch的形式被引入。随着内存地址的随机化，使得响应的应用变得随机。这意味着同一应用多次执行所使用内存空间完全不同，也意味着简单的缓冲区溢出攻击无法达到目的。</p>
<p>GDB从版本7开始，第一次在Ubuntu 9.10（Karmic）上，被调试的程序可以被关闭ASLR（通过标记位ADDR_NO_RANDOMIZE ）。</p>
<p>此处有坑，笔者有一个Ubuntu 9.10的虚拟机，用了下面将要介绍的全部姿势，死活关闭不了ASLR，后来换成Ubuntu 10.04就没问题了，说明Ubuntu 9.10的版本控制ASLR的方法还不成熟，需要重源码层面确认是否可以关闭开启，真是坑到家了。</p>`,r:{minutes:3.84,words:1151},y:"a",t:"Linux关闭地址空间随机化（ASLR）"}}],["/note-book/OperaSystems/Ubtuntu/ubuntu14.04%20%E5%BF%98%E8%AE%B0%E4%BA%86%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%AF%86%E7%A0%81%E5%92%8Croot%E5%AF%86%E7%A0%81.html",{loader:()=>m(()=>import("./ubuntu14.04 忘记了普通用户密码和root密码.html-HD5adKCC.js"),__vite__mapDeps([255,1])),meta:{d:1691939318e3,e:`
<p>1.在VMware Workstatiom中点击“开启此虚拟机”，注意，进入系统自启时随即先点击一下屏幕，目的是让鼠标从VM切换到ubuntu启动（否则下面长按shift时可能不会进入GNU GRUN界面）；</p>
<p>2.点击屏幕后随即长按shift，系统会进入GUN GRUB界面（对此界面的操作可看界面下面的说明），如图 1所示；如果进入图 2 所示的界面则此步骤的操作失败，不要着急再试一下。</p>
<figure><figcaption>img</figcaption></figure>
<p>​                               图 1</p>
`,r:{minutes:1.53,words:458},y:"a",t:"ubuntu 14.04 忘记用户登录密码"}}],["/note-book/OperaSystems/Ubtuntu/ubuntu%E5%AE%89%E8%A3%85nfs.html",{loader:()=>m(()=>import("./ubuntu安装nfs.html-fMuvoIm0.js"),__vite__mapDeps([256,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:.38,words:115},y:"a",t:"ubuntu安装nfs"}}],["/note-book/OperaSystems/Ubtuntu/ubuntu%E6%9F%A5%E7%9C%8Bintel-GPU%E4%BD%BF%E7%94%A8%E6%83%85%E5%86%B5.html",{loader:()=>m(()=>import("./ubuntu查看intel-GPU使用情况.html-xcusR1dp.js"),__vite__mapDeps([257,1])),meta:{d:1700883342e3,e:`
<p>最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt-get install intel-gpu-tools
</code></pre></div><p>安装后，用muon看看。可使用的工具列表还是很多的。</p>
<figure><figcaption>intel-gpu-tools</figcaption></figure>`,r:{minutes:.58,words:175},y:"a",t:"ubuntu查看intel GPU使用情况"}}],["/note-book/Research_Develop/Algorithm/",{loader:()=>m(()=>import("./index.html-DHsXpTtl.js"),__vite__mapDeps([258,1])),meta:{d:1691939318e3,e:`
<p>本章节所有练习过程中所使用的例子在这个仓库 <a href="https://gitee.com/PaperDragon/clang-struct-and-algorithm" target="_blank" rel="noopener noreferrer">https://gitee.com/PaperDragon/clang-struct-and-algorithm</a></p>
<p>欢迎给我纠错！！</p>
<p>2022年8月14日</p>
`,r:{minutes:.16,words:47},y:"a",t:"算法说明"}}],["/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html",{loader:()=>m(()=>import("./数据结构与算法哔哩哔哩比特就业课.html-fjw0YF9d.js"),__vite__mapDeps([259,1])),meta:{d:1691939318e3,e:`
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
</table>`,r:{minutes:.6,words:180},y:"a",t:"数据结构考研数据结构算法与基础"}}],["/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html",{loader:()=>m(()=>import("./C语言volatile关键字详解.html-nnqVwgr6.js"),__vite__mapDeps([260,1])),meta:{d:1691939318e3,e:`<p>1.volatile和什么有关</p>
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
</code></pre>`,r:{minutes:6.7,words:2009},y:"a",t:""}}],["/note-book/Research_Develop/C/",{loader:()=>m(()=>import("./index.html-Ce4WTErU.js"),__vite__mapDeps([261,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:21.13,words:6338},y:"a",t:"C语言学习 翁恺教程"}}],["/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",{loader:()=>m(()=>import("./二分查找.html-CPA9_N8i.js"),__vite__mapDeps([262,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:1.09,words:327},y:"a",t:"Source Code"}}],["/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html",{loader:()=>m(()=>import("./FastAPI-Python高性能web框架.html-BCnp-6f2.js"),__vite__mapDeps([263,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:21.41,words:6424},y:"a",t:"FastAPI--python高性能web框架"}}],["/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html",{loader:()=>m(()=>import("./PyInstaller带静态依赖文件打包教程.html-Cq_KBrIG.js"),__vite__mapDeps([264,1])),meta:{d:1698482265e3,e:`
<h2>方法一：通过命令行参数</h2>
<pre><code>--add-data "欲打包的源文件路径（可以是相对路径，也可以是绝对路径）;.（打包后对应的程序内的路径，一个.代表打包至程序运行时根目录）"

--add-data 参数 可以多次使用，注意格式为引号里面有一个文件名，有一个分号，一个点。

例： pyinstaller -F --add-data '.\\32x32.ico;.' '.\\main.py'
</code></pre>
<h2>方法二：通过修改 spec 打包配置脚本文件</h2>
<h3>通过命令生成 spec 文件</h3>
<h4>OneFolder 单文件夹模式</h4>`,r:{minutes:1.73,words:518},y:"a",t:"PyInstaller 带静态依赖文件打包教程"}}],["/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html",{loader:()=>m(()=>import("./Python之正则表达式细讲.html-BT7qE2er.js"),__vite__mapDeps([265,1])),meta:{d:1691939318e3,e:`
<h2>一、行定位符</h2>
<p>行定位符就是用来描述字符串的边界，“^” 表示行的开始，“$” 表示行的结尾。比如：</p>
<pre><code>^Ha
</code></pre>
<p>该表达式表示要匹配字符串的开头位置是 Ha，如 “Hangzhou is a very beautiful city” 可以匹配，而 “Your words are very funny, Ha” 则不匹配。但如果使用：</p>
<pre><code>Ha$
</code></pre>
<p>后者可以匹配而前者不能匹配。如果要匹配的字符串可以出现在字符串的任意部分，那么可以写成下面的格式，这样两个字符串都能匹配上。</p>`,r:{minutes:12.21,words:3663},y:"a",t:"Python之正则表达式细讲"}}],["/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html",{loader:()=>m(()=>import("./Python代码藏毒.html-BpGkvAXk.js"),__vite__mapDeps([266,1])),meta:{d:1705054813e3,e:`
<p>今天看到一段非常狗的代码，在这里进行记录。</p>
<p>这段代码一运行会直接关机</p>
<h2>实例</h2>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 不要运行！！！！！</span>
a <span class="token operator">=</span> <span class="token string">"^^hlonqs^^'!nr!(-rxrsdl'!rgtscnvm,r,s0/!("</span>
<span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token builtin">ord</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:.61,words:184},y:"a",t:"Python代码藏毒"}}],["/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html",{loader:()=>m(()=>import("./Python数据切片例子.html-D2m6rgnC.js"),__vite__mapDeps([267,1])),meta:{d:1691939318e3,e:`
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



</code></pre></div>`,r:{minutes:6.42,words:1927},y:"a",t:"数据切片"}}],["/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html",{loader:()=>m(()=>import("./Python数据格式化format.html-CB_IkPI-.js"),__vite__mapDeps([268,1])),meta:{d:1697097494e3,e:`
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

</code></pre></div>`,r:{minutes:.76,words:227},y:"a",t:"Python数据格式化format"}}],["/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html",{loader:()=>m(()=>import("./python re.Match object的说明.html-Ds0SCP-o.js"),__vite__mapDeps([269,1])),meta:{d:1691939318e3,e:`
<h2>re.match()到底会返回什么?</h2>
<p>现在我们通过python编程实验来看看到底会返回什么：</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'www'</span><span class="token punctuation">,</span> <span class="token string">'www.runoob.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 在起始位置匹配</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'com'</span><span class="token punctuation">,</span> <span class="token string">'www.runoob.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 不在起始位置匹配</span>
</code></pre></div>`,r:{minutes:1.28,words:383},y:"a",t:"re.match()到底会返回什么?"}}],["/note-book/Research_Develop/Python/python%20re.html",{loader:()=>m(()=>import("./python re.html-Ca8NRehD.js"),__vite__mapDeps([270,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>原文地址： https://blog.csdn.net/2201_75641637/article/details/129319151</p>
</blockquote>
<h2>使用 re 模块匹配字符串</h2>
<p>re 模块中提供了 match()、search() 和 findall() 等方法专门用来匹配字符串，可以从海量数据中精确筛选出需要的对象，我们逐一来看看每种方法的具体实现。</p>
<h3>使用 match() 方法进行匹配</h3>
<p>match() 方法用于从字符串的开始处进行匹配，如果在起始位置匹配成功，则返回 Match 对象，否则返回 None。其语法格式如下：</p>`,r:{minutes:7.56,words:2269},y:"a",t:"re库用法细讲"}}],["/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html",{loader:()=>m(()=>import("./新版VSCode中Python设置自动补全函数括号.html-sCHdxmKz.js"),__vite__mapDeps([271,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>https://blog.csdn.net/w11231/article/details/123586558</p>
</blockquote>
<h1>前言</h1>
<p>在网上能找到的关于如何让VSCode中Python自动补全函数括号的方法都是同样的，但基本上都是几年前的方法了，在VSCode更新后引入了Pylance，使得之前的设置项不存在了。在自己摸索了很久后终于发现了相同功能的选项👇</p>
<p>如果不确定自己用的哪种，可以都试一下，在Settings.json中如果有不存在的设置项会报错</p>
<h2>一、旧版的方法(Jedi)</h2>`,r:{minutes:.87,words:260},y:"a",t:"新版VSCode中Python设置自动补全函数括号"}}],["/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html",{loader:()=>m(()=>import("./shell脚本bad substitution.html-VT9A9wGv.js"),__vite__mapDeps([272,1])),meta:{d:1691939318e3,e:`
<p>初接触shell脚本，在vim中写代码，出现了好几次 Bad substitution。</p>
<p>我的错误有两种：</p>
<pre><code>开始的的指定脚本环境 应该是#!/bin/bash
在编译运行时 也应该用 bash
\${}的使用错误，$() 是引用（）中运行的结果。
\${} 仅仅是用{}中的内容，是参数，不执行
</code></pre>
`,r:{minutes:.27,words:82},y:"a",t:"bad substitution"}}],["/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/%E5%9F%BA%E4%BA%8EWireguard%E6%8A%80%E6%9C%AF%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E6%90%AD%E5%BB%BA%EF%BC%88%E5%9F%BA%E4%BA%8ELighthouse%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%89.html",{loader:()=>m(()=>import("./基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-CYw7_JAX.js"),__vite__mapDeps([273,1])),meta:{d:1691939318e3,e:`
<h2>服务端安装 （强烈推荐 docker 安装）</h2>
<h2>Docker安装Wireguard  (更简单更方便)</h2>
<h3>通过容器安装wg-easy</h3>
<p>括号里面的的是你需要修改的，修改完删掉就可以了</p>
<h4>关于CentOS7 模块安装</h4>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> epel-release elrepo-release
$ <span class="token function">sudo</span> yum <span class="token function">install</span> yum-plugin-elrepo
$ <span class="token function">sudo</span> yum <span class="token function">install</span> kmod-wireguard wireguard-tools
</code></pre></div>`,r:{minutes:2.29,words:686},y:"a",t:"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"}}],["/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/Docker%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2Clash%E6%9C%8D%E5%8A%A1%E4%B8%8E%E7%AE%A1%E7%90%86%E9%9D%A2%E6%9D%BF.html",{loader:()=>m(()=>import("./Docker一键部署Clash服务与管理面板.html-DnBjNaZM.js"),__vite__mapDeps([274,1])),meta:{d:1699694698e3,e:`
<blockquote>
<p>转载自： https://blog.laoyutang.cn/linux/clash.html</p>
</blockquote>
<p>官方Clash部署需要采用两个镜像分别启动服务和面板，博主使用官方server镜像和官方管理面板前端代码，重新修改打包构建，使用一个镜像可以直接启动服务和管理面板，简单轻量。</p>
<h2>镜像地址</h2>
<p><a href="https://hub.docker.com/r/laoyutang/clash-and-dashboard" target="_blank" rel="noopener noreferrer">laoyutang/clash-and-dashboard</a></p>`,r:{minutes:1.34,words:402},y:"a",t:"Docker一键部署Clash服务与管理面板"}}],["/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/cfw-cdn-ssl-ws-tls.html",{loader:()=>m(()=>import("./cfw-cdn-ssl-ws-tls.html-CKcGYEr1.js"),__vite__mapDeps([275,1])),meta:{d:1702051173e3,c:["VirtualPrivateNetwork"],e:`
<h2>边缘计算系统构建</h2>
<h3>将域名绑定到CDN上</h3>
<h4><a class="header-anchor" href="#_1-登录cdn网站-找到增加域名选项"><span>1.</span></a><a href="https://dash.cloudflare.com/login/" target="_blank" rel="noopener noreferrer">登录CDN网站</a>，找到增加域名选项</h4>
<figure><figcaption>image-20220819194959187</figcaption></figure>
<h4>2.点击添加域名</h4>`,r:{minutes:2.49,words:747},y:"a",t:"通过cdn流量伪装防止防火墙封ip和端口"}}],["/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E4%BC%98%E7%A7%80%E7%9A%84%E8%90%BD%E5%9C%B0%E6%A1%86%E6%9E%B6%20XrayR.html",{loader:()=>m(()=>import("./优秀的落地框架 XrayR.html-wpr-EWmF.js"),__vite__mapDeps([276,1])),meta:{d:1691939318e3,e:`
<blockquote>
<p>原项目地址 https://github.com/XrayR-project</p>
<p>因为一个月前有人骂作者广告有问题，作者直接删库跑路了，这里找到几个接盘侠替代</p>
<p>找了个克隆仓库 https://github.com/Misaka-blog/XrayR-script</p>
<p>一键脚本 https://github.com/Misaka-blog/XrayR-script</p>
<p>文档 https://github.com/ximliu/XrayR-doc</p>
</blockquote>
<h1>关于XrayR</h1>
<h2>XrayR</h2>`,r:{minutes:12.86,words:3858},y:"a",t:"一个优秀的流量落地框架XrayR"}}],["/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E8%BF%9E%E6%8E%A5WARP%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B7%BB%E5%8A%A0IPv4IPv6%E7%BD%91%E7%BB%9C.html",{loader:()=>m(()=>import("./连接WARP为服务器添加IPv4IPv6网络.html-HKqjq-Wd.js"),__vite__mapDeps([277,1])),meta:{d:1702051155e3,e:`
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
</ul>`,r:{minutes:8.08,words:2425},y:"a",t:"连接WARP为服务器添加IPv4/IPv6网络"}}],["/note-book/Zabbix/ebook/",{loader:()=>m(()=>import("./index.html-CrR8GjHW.js"),__vite__mapDeps([278,1])),meta:{d:1691939318e3,e:`
<ul>
<li><a href="ZCS5_Day_1.pdf">ZCS5_Day_1.pdf</a></li>
</ul>
`,r:{minutes:.3,words:90},y:"a",t:"ZCS认证"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/",{loader:()=>m(()=>import("./index.html-ajgf1ymS.js"),__vite__mapDeps([279,1])),meta:{d:1691939318e3,e:`
<p>作者地址  https://github.com/koihuang/ostep-note</p>
<p>Operating Systems: Three Easy Pieces这本书从 虚拟化(virtualization), 并发(concurrency), 持久化(persistent) 三方面对操作系统在抽象层面上做了很好的分析介绍.
此书能让读者对操作系统有一个综合的感性认识,特别是在抽象层面上,关键还免费,免费,免费!!!.
感兴趣的读者可以读一下 http://pages.cs.wisc.edu/~remzi/OSTEP/</p>
<p>作为学习巩固,分享一下自己的学习笔记,有兴趣的也可以看一下.(蓝色有链接的为已经写好的笔记,后面逐步更新中,有些不重要的选择性跳过)</p>`,r:{minutes:1.81,words:543},y:"a",t:"操作系统相关 Operating Systems: Three Easy Pieces 学习笔记"}}],["/note-book/Research_Develop/C/ACLLib/ACLLib.html",{loader:()=>m(()=>import("./ACLLib.html-BYKCw3ip.js"),__vite__mapDeps([280,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:.99,words:298},y:"a",t:"ACLLIb"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",{loader:()=>m(()=>import("./01_面向对象（OOP）基本概念.html-aTNLhIjH.js"),__vite__mapDeps([281,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:1.78,words:533},y:"a",t:"面向对象(OOP)基本概念"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html",{loader:()=>m(()=>import("./02_类和对象.html-BmoVtUuI.js"),__vite__mapDeps([282,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:2.27,words:681},y:"a",t:"类和对象"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html",{loader:()=>m(()=>import("./03_面相对象基础语法.html-BRSPJV3I.js"),__vite__mapDeps([283,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:7.27,words:2180},y:"a",t:"面相对象基础语法"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html",{loader:()=>m(()=>import("./04_面向对象封装案例.html-tVxB2DtP.js"),__vite__mapDeps([284,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:3.85,words:1154},y:"a",t:"面向对象封装案例"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html",{loader:()=>m(()=>import("./05_面向对象封装案例 II.html-CNJdnsga.js"),__vite__mapDeps([285,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:2.57,words:770},y:"a",t:"面向对象封装案例 II"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html",{loader:()=>m(()=>import("./06_私有属性和私有方法.html-q0pyEI8a.js"),__vite__mapDeps([286,1])),meta:{d:1691939318e3,e:`
<h2>01. 应用场景及定义方式</h2>
<p><strong>应用场景</strong></p>
<ul>
<li>在实际开发中，<strong>对象</strong> 的 <strong>某些属性或方法</strong> 可能只希望 <strong>在对象的内部被使用</strong>，而 <strong>不希望在外部被访问到</strong></li>
<li><strong>私有属性</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>属性</strong></li>
<li><strong>私有方法</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>方法</strong></li>
</ul>`,r:{minutes:1.17,words:352},y:"a",t:"私有属性和私有方法"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html",{loader:()=>m(()=>import("./07_单例.html-LWLne3vV.js"),__vite__mapDeps([287,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:3.07,words:920},y:"a",t:"单例"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html",{loader:()=>m(()=>import("./08_多态.html-B8kCh1An.js"),__vite__mapDeps([288,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.61,words:483},y:"a",t:"多态"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html",{loader:()=>m(()=>import("./09_继承.html-DFyfJqR9.js"),__vite__mapDeps([289,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:5.79,words:1736},y:"a",t:"继承"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html",{loader:()=>m(()=>import("./10_类属性和类方法.html-Beva7kSC.js"),__vite__mapDeps([290,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:5.97,words:1790},y:"a",t:"类属性和类方法"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html",{loader:()=>m(()=>import("./11_eval函数.html-CGDRHcX9.js"),__vite__mapDeps([291,1])),meta:{d:1691939318e3,e:`
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
</code></pre></div>`,r:{minutes:.68,words:203},y:"a",t:"eval 函数"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html",{loader:()=>m(()=>import("./12_模块和包.html-gb5Vo8Xu.js"),__vite__mapDeps([292,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:5.32,words:1597},y:"a",t:"模块和包"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html",{loader:()=>m(()=>import("./13_文件.html-Cm4iqDT4.js"),__vite__mapDeps([293,1])),meta:{d:1691939318e3,e:`
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
<p><strong>文件的作用</strong></p>`,r:{minutes:7.37,words:2210},y:"a",t:"文件"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html",{loader:()=>m(()=>import("./14_异常.html-DE8gIJog.js"),__vite__mapDeps([294,1])),meta:{d:1691939318e3,e:`
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
</ul>`,r:{minutes:5.27,words:1582},y:"a",t:"异常"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10%20Multi-CPU%20Scheduling.html",{loader:()=>m(()=>import("./10 Multi-CPU Scheduling.html-BLNvEJw7.js"),__vite__mapDeps([295,1])),meta:{d:1691939318e3,e:`
<p><strong>概述</strong><br>
当有多个cpu时,进程调度不可避免就会有并发问题出现.目前大概有两种调度策略,一种是单队列调度,一种是多队列调度.二者各有利弊,都有系统采用.</p>
<p><strong>概念解释</strong></p>
<ul>
<li>缓存:<br>
为了加快cpu对内存的访问,每个cpu都有自己的缓存cache,第一次访问内存的数据会拷贝一份到缓存中,第二次访问时直接从缓存中取<br>
</li>
<li>缓存一致性
假设多个cpu缓存都有同一份数据,某一cpu更改该数据时,更改之前会将其它cpu缓存的该数据缓存置为无效,然后再更新.在硬件层面保证共享内存的唯一性</li>
</ul>`,r:{minutes:2.05,words:616},y:"a",t:"10 多处理器调度"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13%20Address%20Spaces.html",{loader:()=>m(()=>import("./13 Address Spaces.html-6YHipUdD.js"),__vite__mapDeps([296,1])),meta:{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
内存memory可以看作是一个长长的数组(i.e.,4GB,8GB或更多),为了让每个进程都有自己独立的内存空间.操作系统给每个进程都分配了物理内存空间,但只提供给进程虚拟地址,用户能看到的都是虚拟地址,至于虚拟地址和真实物理地址的映射则由操作系统完成,这部分对用户是透明的,用户其实也不用关心简单的分配方式如下图所示,可以看出物理层面,内存都隔离开了.
</p>
<ol>
<li><strong>地址空间</strong><br>
地址空间包含运行的程序的所有内存状态.包括程序代码,堆,栈.代码是静态的,不会动态增加会减少,直接放在最上面.堆和栈会动态变化,放在上面和下面,可以往中间动态增加.栈用来保存当前的函数调用信息,局部变量,方法参数和返回值.堆用于动态分配的,用户管理的内存.比如c语言的molloc()或Java的new 对象创建等.
</li>
</ol>`,r:{minutes:1.02,words:305},y:"a",t:"13 抽象:地址空间"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14%20Memory%20API.html",{loader:()=>m(()=>import("./14 Memory API.html-SUewis0Z.js"),__vite__mapDeps([297,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:.93,words:279},y:"a",t:"14 内存操作接口 Memory API"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15%20Address%20Translation.html",{loader:()=>m(()=>import("./15 Address Translation.html-DJkyy6Fg.js"),__vite__mapDeps([298,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.4,words:419},y:"a",t:"15 地址转换 Address Translation"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16%20Segmentation.html",{loader:()=>m(()=>import("./16 Segmentation.html-COeXKOFF.js"),__vite__mapDeps([299,1])),meta:{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
假设每个进程的内存空间都占用的是一整段连续的内存,容易造成内存空间的浪费,比如heap和stack中间那一段.为了避免大量的内存浪费,采用分段机制,将进程的内存切分为三个逻辑段:代码段,heap段,stack段.同时也可以方便内存共享,进一步节省内存,尤其是代码共享. 将代码段设置成只可读,则可以在不同进程间共享. 当然这样做也有缺点,比如可能会造成很多未使用的内存碎片造成浪费,称为外部碎片问题.解决这个问题的一种方法是终止运行的进程,将它们的数据复制到连续的内存去,紧凑使用内存.</p>
<p><strong>分段内存分配例:</strong><br>
</p>`,r:{minutes:.76,words:227},y:"a",t:"16 Segmentation 分段"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17%20Free%20Space%20Management.html",{loader:()=>m(()=>import("./17 Free Space Management.html-ClQx_YJw.js"),__vite__mapDeps([300,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.66,words:497},y:"a",t:"17 Free Space Management 空闲空间管理"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18%20Introduction%20to%20Paging.html",{loader:()=>m(()=>import("./18 Introduction to Paging.html-EiDEurnM.js"),__vite__mapDeps([301,1])),meta:{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
前面说到的分段管理空闲空间的方式是非常灵活方便的,但同时也容易造成内存碎片问题. 采用内存分页,则可以解决这个问题. 分页是把内存分成很多固定大小(一般比较小)的分片. 通过分片组合来分配内存,可有效降低内存碎片化的问题. 但同时也会带来运行速度慢,分页映射表(即页表)占用内存过大的问题.为了记录地址空间的每个虚拟页放在物理内存中的位置，操作系统为每个进程保存一个数据结构，称为页表（page table),用于虚拟地址到真实地址的转化,因为每个进程都有一个页表管理,所以所有进程的页表加起来会占用不少的内存,接下来的两章节会介绍怎么解决这方面的问题.
</p>`,r:{minutes:.87,words:260},y:"a",t:"18 Introduction to Paging 分页介绍"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19%20Translation%20Lookaside%20Buffers.html",{loader:()=>m(()=>import("./19 Translation Lookaside Buffers.html-DtnPifoE.js"),__vite__mapDeps([302,1])),meta:{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
类似内存缓存cache,为了加速分页地址转化,在硬件cpu的管理内存单元(MMU)增加地址转换旁路缓冲存储器即TLB,缓存分页虚拟地址映射. 当内存访问时,先访问tlb是否已经缓存,如果有则转化(很快),没有则访问页表(page table)将其缓存在tlb中重新快速获取.TLB也利用时间空间局部性原理,会同时缓存邻近的分页映射.</p>
`,r:{minutes:.47,words:140},y:"a",t:"19 Translation Lookaside Buffers 快速地址转化(TLB)"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20%20Advanced%20Page%20Tables.html",{loader:()=>m(()=>import("./20 Advanced Page Tables.html-wGf30Idj.js"),__vite__mapDeps([303,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.34,words:401},y:"a",t:"20 Advanced Page Tables 分页:较小的表"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/21%20Swapping%20Mechanisms.html",{loader:()=>m(()=>import("./21 Swapping Mechanisms.html-CEMaZsCn.js"),__vite__mapDeps([304,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.69,words:508},y:"a",t:"21 Swapping Mechanisms 超越物理内存:交换机制"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/22%20Swapping%20Policies.html",{loader:()=>m(()=>import("./22 Swapping Policies.html-BQ-nKpGR.js"),__vite__mapDeps([305,1])),meta:{d:1691939318e3,e:`<p>22 Swapping Policies 交换策略</p>
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
</ol>`,r:{minutes:1.55,words:466},y:"a",t:""}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23%20Complete%20VM%20Systems.html",{loader:()=>m(()=>import("./23 Complete VM Systems.html-C8DXkrQ_.js"),__vite__mapDeps([306,1])),meta:{d:1691939318e3,e:`<p>23 Complete VM Systems 完整的虚拟内存系统</p>
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
</ol>`,r:{minutes:1.83,words:549},y:"a",t:""}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4%20Processes.html",{loader:()=>m(()=>import("./4 Processes.html-qNt80zKX.js"),__vite__mapDeps([307,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.75,words:526},y:"a",t:"4 抽象:进程"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5%20Process%20API.html",{loader:()=>m(()=>import("./5 Process API.html-DJclMt92.js"),__vite__mapDeps([308,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.25,words:376},y:"a",t:"5 进程接口"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6%20Direct%20Execution.html",{loader:()=>m(()=>import("./6 Direct Execution.html-DVIGxZHm.js"),__vite__mapDeps([309,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.72,words:516},y:"a",t:"6 受限直接执行"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7%20CPU%20Scheduling.html",{loader:()=>m(()=>import("./7 CPU Scheduling.html-DeYa-PXb.js"),__vite__mapDeps([310,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.73,words:518},y:"a",t:"7 调度策略"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8%20Multi-level%20Feedback.html",{loader:()=>m(()=>import("./8 Multi-level Feedback.html-BGxoqqir.js"),__vite__mapDeps([311,1])),meta:{d:1691939318e3,e:`
<p><strong>概述</strong><br>
上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下:</p>
<ol>
<li>规则1: 如果任务A的优先级&gt;B的优先级,则执行A</li>
<li>规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B</li>
<li>规则3: 任务进入系统时,放在最高优先级</li>
<li>规则4: 一旦任务用完了其在所属级别队列的时间配额,则降低其优先级</li>
<li>规则5: 经过一段时间后,所有任务都放在最高优先级队列(避免任务饥饿)</li>
</ol>`,r:{minutes:.89,words:268},y:"a",t:"8 调度:多级反馈队"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26%20Concurrency%20and%20Threads.html",{loader:()=>m(()=>import("./26 Concurrency and Threads.html-2UfKxHMi.js"),__vite__mapDeps([312,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.99,words:596},y:"a",t:"26 Concurrency and Threads 并发和线程"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27%20Thread%20API.html",{loader:()=>m(()=>import("./27 Thread API.html-Djs3VfBK.js"),__vite__mapDeps([313,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.49,words:448},y:"a",t:"27 Thread API 线程API"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28%20Locks.html",{loader:()=>m(()=>import("./28 Locks.html-Bjz8dKRU.js"),__vite__mapDeps([314,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:2.07,words:620},y:"a",t:"28 Locks 锁"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29%20Locked%20Data%20Structures.html",{loader:()=>m(()=>import("./29 Locked Data Structures.html-DgVjaK_q.js"),__vite__mapDeps([315,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:2.36,words:709},y:"a",t:"29 Locked Data Structures 基于锁的并发数据结构"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30%20Condition%20Variables.html",{loader:()=>m(()=>import("./30 Condition Variables.html-Ledr9CBz.js"),__vite__mapDeps([316,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:3.3,words:990},y:"a",t:"30 Condition Variables 条件变量"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31%20Semaphores.html",{loader:()=>m(()=>import("./31 Semaphores.html-BM47iBmQ.js"),__vite__mapDeps([317,1])),meta:{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
根据前面章节的介绍,我们往往需要锁(lock)和条件变量(condition variable)的结合使用来应付多种并发问题,对于开发者而言,多少还是有点复杂的.信号(Semaphore)是一种可替代的并发问题的解决手段.比起锁和条件变量的组合复杂使用,信号只对一种变量进行操作,相对而言可能对于开发者来说更简单一些.信号是一个带有整数的对象,它的定义与初始化如下:</p>
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token class-name">sem_t</span> s<span class="token punctuation">;</span>
<span class="token function">sem_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:4.47,words:1340},y:"a",t:"31 Semaphores 信号"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32%20Concurrency%20Bugs.html",{loader:()=>m(()=>import("./32 Concurrency Bugs.html-nbjEL8NL.js"),__vite__mapDeps([318,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:1.08,words:323},y:"a",t:"32 Concurrency Bugs 并发bug"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33%20Event-based%20Concurrency.html",{loader:()=>m(()=>import("./33 Event-based Concurrency.html-CvJ2MHkU.js"),__vite__mapDeps([319,1])),meta:{d:1691939318e3,e:`
<p><strong>概述:</strong><br>
基于线程开发的多线程有两个问题.一是比较容易出错,死锁,阻塞,资源浪费等问题需要特别小心处理;二是多线程的调度是由操作管理的,可能不会按照开发者期望的调度方式运行,因此不能精细控制程序的运行.基于事件并发是一种替代方案.它的思路是等待某些事件发生,然后判断事件类型,使用相应的代码处理.基于事件的并发有一个非常重要的架构:eventLoop().典型的基于事件的服务器的伪代码如下:</p>
<div class="language-c" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    events <span class="token operator">=</span> <span class="token function">getEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>e in events<span class="token punctuation">)</span> 
        <span class="token function">processEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:4.35,words:1305},y:"a",t:"33 Event-based Concurrency 基于事件的并发"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36%20IO%20Devices.html",{loader:()=>m(()=>import("./36 IO Devices.html-CSTkbQah.js"),__vite__mapDeps([320,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:3,words:899},y:"a",t:"36 IO Devices IO设备"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37%20Hard%20Disk%20Drives.html",{loader:()=>m(()=>import("./37 Hard Disk Drives.html-DDGR-LyS.js"),__vite__mapDeps([321,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:2.38,words:713},y:"a",t:"37 Hard Disk Drives 磁盘驱动器"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39%20Files%20and%20Directories.html",{loader:()=>m(()=>import("./39 Files and Directories.html-DEiHoUji.js"),__vite__mapDeps([322,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:4.03,words:1209},y:"a",t:"39 Files and Directories 文件和目录"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40%20File%20System%20Implementation.html",{loader:()=>m(()=>import("./40 File System Implementation.html-CXxTzHYf.js"),__vite__mapDeps([323,1])),meta:{d:1691939318e3,e:`
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
</ol>`,r:{minutes:3.15,words:944},y:"a",t:"40 File System Implementation 文件系统实现"}}],["/404.html",{loader:()=>m(()=>import("./404.html-DAa5KxEE.js"),__vite__mapDeps([324,1])),meta:{y:"p",t:""}}],["/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/",{loader:()=>m(()=>import("./index.html-BMUOTUz3.js"),__vite__mapDeps([325,1])),meta:{y:"p",t:"Py Qt5快速上手 王铭东"}}],["/about/",{loader:()=>m(()=>import("./index.html-BVvzlfgX.js"),__vite__mapDeps([326,1])),meta:{y:"p",t:"About"}}],["/free-service/",{loader:()=>m(()=>import("./index.html-D0xYA2a_.js"),__vite__mapDeps([327,1])),meta:{y:"p",t:"Free Service"}}],["/note-book/AI-Training/",{loader:()=>m(()=>import("./index.html-CZMBDlvF.js"),__vite__mapDeps([328,1])),meta:{y:"p",t:"AI Training"}}],["/note-book/Android/",{loader:()=>m(()=>import("./index.html-Csk8tTPL.js"),__vite__mapDeps([329,1])),meta:{y:"p",t:"Android"}}],["/note-book/CVE/",{loader:()=>m(()=>import("./index.html-DxJtn_Ql.js"),__vite__mapDeps([330,1])),meta:{y:"p",t:"CVE"}}],["/note-book/DNS/",{loader:()=>m(()=>import("./index.html-D9JykAf9.js"),__vite__mapDeps([331,1])),meta:{y:"p",t:"DNS"}}],["/note-book/Docker/",{loader:()=>m(()=>import("./index.html-BAC0S7EZ.js"),__vite__mapDeps([332,1])),meta:{y:"p",t:"Docker"}}],["/note-book/ELK/",{loader:()=>m(()=>import("./index.html-BuNNQQTy.js"),__vite__mapDeps([333,1])),meta:{y:"p",t:"ELK"}}],["/note-book/Esxi/",{loader:()=>m(()=>import("./index.html-CJRr0dsk.js"),__vite__mapDeps([334,1])),meta:{y:"p",t:"Esxi"}}],["/note-book/GRUB/",{loader:()=>m(()=>import("./index.html-CAwhwWES.js"),__vite__mapDeps([335,1])),meta:{y:"p",t:"GRUB"}}],["/note-book/Gawk/",{loader:()=>m(()=>import("./index.html-Cdw2iWfm.js"),__vite__mapDeps([336,1])),meta:{y:"p",t:"Gawk"}}],["/note-book/Gitlab/",{loader:()=>m(()=>import("./index.html-X-QJW60n.js"),__vite__mapDeps([337,1])),meta:{y:"p",t:"Gitlab"}}],["/note-book/HA-LVS-Keepalived/",{loader:()=>m(()=>import("./index.html-Bvqbe14k.js"),__vite__mapDeps([338,1])),meta:{y:"p",t:"HA LVS Keepalived"}}],["/note-book/Harbor/",{loader:()=>m(()=>import("./index.html-IXEEnU0-.js"),__vite__mapDeps([339,1])),meta:{y:"p",t:"Harbor"}}],["/note-book/Iptables/",{loader:()=>m(()=>import("./index.html-Dwc1K6Gn.js"),__vite__mapDeps([340,1])),meta:{y:"p",t:"Iptables"}}],["/note-book/Jenkins/",{loader:()=>m(()=>import("./index.html-BHRPLgfb.js"),__vite__mapDeps([341,1])),meta:{y:"p",t:"Jenkins"}}],["/note-book/Kubernetes/",{loader:()=>m(()=>import("./index.html-PjewX3s2.js"),__vite__mapDeps([342,1])),meta:{y:"p",t:"Kubernetes"}}],["/note-book/LinuxFromScratch/",{loader:()=>m(()=>import("./index.html-B4z7pElC.js"),__vite__mapDeps([343,1])),meta:{y:"p",t:"Linux From Scratch"}}],["/note-book/LinuxOperaSystem/",{loader:()=>m(()=>import("./index.html-DPJVqOAP.js"),__vite__mapDeps([344,1])),meta:{y:"p",t:"Linux Opera System"}}],["/note-book/Nginx__OpenResty/",{loader:()=>m(()=>import("./index.html-gw8Feo6d.js"),__vite__mapDeps([345,1])),meta:{y:"p",t:"Nginx Open Resty"}}],["/note-book/OpenSSH-Server/",{loader:()=>m(()=>import("./index.html-CY2Qg8wJ.js"),__vite__mapDeps([346,1])),meta:{y:"p",t:"Open SSH Server"}}],["/note-book/OperaSystems/",{loader:()=>m(()=>import("./index.html-D8wi6bQI.js"),__vite__mapDeps([347,1])),meta:{y:"p",t:"Opera Systems"}}],["/note-book/PhotoShop/",{loader:()=>m(()=>import("./index.html-CENt7woN.js"),__vite__mapDeps([348,1])),meta:{y:"p",t:"Photo Shop"}}],["/note-book/Physical_server/",{loader:()=>m(()=>import("./index.html-C-1ppk-b.js"),__vite__mapDeps([349,1])),meta:{y:"p",t:"Physical Server"}}],["/note-book/Portainer/",{loader:()=>m(()=>import("./index.html-Dd--a1nR.js"),__vite__mapDeps([350,1])),meta:{y:"p",t:"Portainer"}}],["/note-book/Prometheus/",{loader:()=>m(()=>import("./index.html-CuDVnpqG.js"),__vite__mapDeps([351,1])),meta:{y:"p",t:"Prometheus"}}],["/note-book/RabbitMQ/",{loader:()=>m(()=>import("./index.html-beuMr60M.js"),__vite__mapDeps([352,1])),meta:{y:"p",t:"Rabbit MQ"}}],["/note-book/RouterOS/",{loader:()=>m(()=>import("./index.html-D_WVGkK-.js"),__vite__mapDeps([353,1])),meta:{y:"p",t:"Router OS"}}],["/note-book/S3-SimpleStorageService/",{loader:()=>m(()=>import("./index.html-DZnQ2rQ8.js"),__vite__mapDeps([354,1])),meta:{y:"p",t:"S3 Simple Storage Service"}}],["/note-book/Tomcat/",{loader:()=>m(()=>import("./index.html-CxvPBNpb.js"),__vite__mapDeps([355,1])),meta:{y:"p",t:"Tomcat"}}],["/note-book/VMware/",{loader:()=>m(()=>import("./index.html-R7DEa5Vp.js"),__vite__mapDeps([356,1])),meta:{y:"p",t:"VMware"}}],["/note-book/WindowsOperaSystem/",{loader:()=>m(()=>import("./index.html-DfxxHJEo.js"),__vite__mapDeps([357,1])),meta:{y:"p",t:"Windows Opera System"}}],["/note-book/Zabbix/",{loader:()=>m(()=>import("./index.html-Bh8CrmAM.js"),__vite__mapDeps([358,1])),meta:{y:"p",t:"Zabbix"}}],["/note-book/ebook/",{loader:()=>m(()=>import("./index.html-CSPAQNkL.js"),__vite__mapDeps([359,1])),meta:{y:"p",t:"Ebook"}}],["/note-book/goaccess/",{loader:()=>m(()=>import("./index.html-K8kjWfFJ.js"),__vite__mapDeps([360,1])),meta:{y:"p",t:"Goaccess"}}],["/note-book/memcache-redis/",{loader:()=>m(()=>import("./index.html-DozymOjx.js"),__vite__mapDeps([361,1])),meta:{y:"p",t:"Memcache Redis"}}],["/note-book/misc/",{loader:()=>m(()=>import("./index.html-BJYa_Lrt.js"),__vite__mapDeps([362,1])),meta:{y:"p",t:"Misc"}}],["/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/",{loader:()=>m(()=>import("./index.html-CIZ4iSuP.js"),__vite__mapDeps([363,1])),meta:{y:"p",t:"洋垃圾主机"}}],["/note-book/DatabaseSystem/Etcd/",{loader:()=>m(()=>import("./index.html-C58OdHtY.js"),__vite__mapDeps([364,1])),meta:{y:"p",t:"Etcd"}}],["/note-book/DatabaseSystem/",{loader:()=>m(()=>import("./index.html-CJXZwnAB.js"),__vite__mapDeps([365,1])),meta:{y:"p",t:"Database System"}}],["/note-book/DatabaseSystem/MySQL/",{loader:()=>m(()=>import("./index.html-ClClCtqB.js"),__vite__mapDeps([366,1])),meta:{y:"p",t:"My SQL"}}],["/note-book/DistributedSystem/Ansible/",{loader:()=>m(()=>import("./index.html-PFdw3_Ya.js"),__vite__mapDeps([367,1])),meta:{y:"p",t:"Ansible"}}],["/note-book/DistributedSystem/",{loader:()=>m(()=>import("./index.html-DOgW7wiW.js"),__vite__mapDeps([368,1])),meta:{y:"p",t:"Distributed System"}}],["/note-book/DistributedSystem/OpenStack/",{loader:()=>m(()=>import("./index.html-BDjjmcQG.js"),__vite__mapDeps([369,1])),meta:{y:"p",t:"Open Stack"}}],["/note-book/Gitlab/CI/",{loader:()=>m(()=>import("./index.html-z0zjAguY.js"),__vite__mapDeps([370,1])),meta:{y:"p",t:"CI"}}],["/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/",{loader:()=>m(()=>import("./index.html-B9Arr7hI.js"),__vite__mapDeps([371,1])),meta:{y:"p",t:"ELK Kafka构建高并发分布式日志收集系统"}}],["/note-book/Kafka/",{loader:()=>m(()=>import("./index.html-D0dB2soE.js"),__vite__mapDeps([372,1])),meta:{y:"p",t:"Kafka"}}],["/note-book/LinuxOperaSystem/Git/",{loader:()=>m(()=>import("./index.html-3xhBxM7I.js"),__vite__mapDeps([373,1])),meta:{y:"p",t:"Git"}}],["/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/",{loader:()=>m(()=>import("./index.html-DNEHt6lr.js"),__vite__mapDeps([374,1])),meta:{y:"p",t:"Linux三剑客"}}],["/note-book/LinuxOperaSystem/Nvidia/",{loader:()=>m(()=>import("./index.html-CIyx2ZvU.js"),__vite__mapDeps([375,1])),meta:{y:"p",t:"Nvidia"}}],["/note-book/LinuxOperaSystem/Samba/",{loader:()=>m(()=>import("./index.html-BA2dqLpZ.js"),__vite__mapDeps([376,1])),meta:{y:"p",t:"Samba"}}],["/note-book/LinuxOperaSystem/VNC/",{loader:()=>m(()=>import("./index.html-DVc-oZYc.js"),__vite__mapDeps([377,1])),meta:{y:"p",t:"VNC"}}],["/note-book/LinuxOperaSystem/Vim/",{loader:()=>m(()=>import("./index.html-UcPKTOFa.js"),__vite__mapDeps([378,1])),meta:{y:"p",t:"Vim"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/",{loader:()=>m(()=>import("./index.html-oBGS5MQU.js"),__vite__mapDeps([379,1])),meta:{y:"p",t:"Operating System Principle"}}],["/note-book/OperaSystems/RedHatEnterpriseLinux/",{loader:()=>m(()=>import("./index.html-DP_jfwzd.js"),__vite__mapDeps([380,1])),meta:{y:"p",t:"Red Hat Enterprise Linux"}}],["/note-book/OperaSystems/Ubtuntu/",{loader:()=>m(()=>import("./index.html-BhheJRTT.js"),__vite__mapDeps([381,1])),meta:{y:"p",t:"Ubtuntu"}}],["/note-book/Research_Develop/",{loader:()=>m(()=>import("./index.html-DSMzhjk-.js"),__vite__mapDeps([382,1])),meta:{y:"p",t:"Research Develop"}}],["/note-book/Research_Develop/Python/",{loader:()=>m(()=>import("./index.html-BTGBltxb.js"),__vite__mapDeps([383,1])),meta:{y:"p",t:"Python"}}],["/note-book/Research_Develop/Shell/",{loader:()=>m(()=>import("./index.html-CP-7hb5w.js"),__vite__mapDeps([384,1])),meta:{y:"p",t:"Shell"}}],["/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/",{loader:()=>m(()=>import("./index.html-BN7BtKLe.js"),__vite__mapDeps([385,1])),meta:{y:"p",t:"广义 Virtual Private Network"}}],["/note-book/VirtualPrivateNetwork/",{loader:()=>m(()=>import("./index.html-JUnXO4q8.js"),__vite__mapDeps([386,1])),meta:{y:"p",t:"Virtual Private Network"}}],["/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/",{loader:()=>m(()=>import("./index.html-Bd5fin-1.js"),__vite__mapDeps([387,1])),meta:{y:"p",t:"狭义 Virtual Private Network"}}],["/note-book/Research_Develop/C/ACLLib/",{loader:()=>m(()=>import("./index.html-D-Bw0921.js"),__vite__mapDeps([388,1])),meta:{y:"p",t:"ACLLib"}}],["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/",{loader:()=>m(()=>import("./index.html-DDT2HwiH.js"),__vite__mapDeps([389,1])),meta:{y:"p",t:"Python面向对象"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/",{loader:()=>m(()=>import("./index.html-BMTw0zGB.js"),__vite__mapDeps([390,1])),meta:{y:"p",t:"1virtualization"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/",{loader:()=>m(()=>import("./index.html-CgM7ywey.js"),__vite__mapDeps([391,1])),meta:{y:"p",t:"2concurrency"}}],["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/",{loader:()=>m(()=>import("./index.html-CWeVXB3T.js"),__vite__mapDeps([392,1])),meta:{y:"p",t:"3persistent"}}],["/category/",{loader:()=>m(()=>import("./index.html-C6VZkbj2.js"),__vite__mapDeps([393,1])),meta:{y:"p",t:"分类",I:!1}}],["/category/%E7%AC%94%E8%AE%B0/",{loader:()=>m(()=>import("./index.html-BNmxrH8l.js"),__vite__mapDeps([394,1])),meta:{y:"p",t:"笔记 分类",I:!1}}],["/category/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/",{loader:()=>m(()=>import("./index.html-qzszmAVf.js"),__vite__mapDeps([395,1])),meta:{y:"p",t:"网络安全 分类",I:!1}}],["/category/coredns/",{loader:()=>m(()=>import("./index.html-CbEJbKh4.js"),__vite__mapDeps([396,1])),meta:{y:"p",t:"CoreDNS 分类",I:!1}}],["/category/iptables/",{loader:()=>m(()=>import("./index.html-7zBxjboi.js"),__vite__mapDeps([397,1])),meta:{y:"p",t:"iptables 分类",I:!1}}],["/category/network/",{loader:()=>m(()=>import("./index.html-B9Hq7DaQ.js"),__vite__mapDeps([398,1])),meta:{y:"p",t:"Network 分类",I:!1}}],["/category/linux/",{loader:()=>m(()=>import("./index.html-CfqEqvAM.js"),__vite__mapDeps([399,1])),meta:{y:"p",t:"Linux 分类",I:!1}}],["/category/shell/",{loader:()=>m(()=>import("./index.html-BinwPNnr.js"),__vite__mapDeps([400,1])),meta:{y:"p",t:"Shell 分类",I:!1}}],["/category/%E7%A5%9E%E6%93%8D%E4%BD%9C/",{loader:()=>m(()=>import("./index.html-BxwpsqPo.js"),__vite__mapDeps([401,1])),meta:{y:"p",t:"神操作 分类",I:!1}}],["/category/nginx/",{loader:()=>m(()=>import("./index.html-2in5Ye0G.js"),__vite__mapDeps([402,1])),meta:{y:"p",t:"Nginx 分类",I:!1}}],["/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{loader:()=>m(()=>import("./index.html-BvLpk1xD.js"),__vite__mapDeps([403,1])),meta:{y:"p",t:"数据库 分类",I:!1}}],["/category/virtualprivatenetwork/",{loader:()=>m(()=>import("./index.html-sHKZlNif.js"),__vite__mapDeps([404,1])),meta:{y:"p",t:"VirtualPrivateNetwork 分类",I:!1}}],["/tag/",{loader:()=>m(()=>import("./index.html-DWmnh7Pf.js"),__vite__mapDeps([405,1])),meta:{y:"p",t:"标签",I:!1}}],["/article/",{loader:()=>m(()=>import("./index.html-BTT-1k8I.js"),__vite__mapDeps([406,1])),meta:{y:"p",t:"文章",I:!1}}],["/star/",{loader:()=>m(()=>import("./index.html-B59MAFVw.js"),__vite__mapDeps([407,1])),meta:{y:"p",t:"星标",I:!1}}],["/timeline/",{loader:()=>m(()=>import("./index.html-D3KUhjgb.js"),__vite__mapDeps([408,1])),meta:{y:"p",t:"时间轴",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Pt=typeof document<"u";function n0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const fn=Object.assign;function so(n,e){const t={};for(const s in e){const a=e[s];t[s]=ye(a)?a.map(n):n(a)}return t}const hs=()=>{},ye=Array.isArray,Gi=/#/g,e0=/&/g,t0=/\//g,s0=/=/g,a0=/\?/g,ji=/\+/g,o0=/%5B/g,r0=/%5D/g,Ki=/%5E/g,l0=/%60/g,Wi=/%7B/g,p0=/%7C/g,qi=/%7D/g,i0=/%20/g;function kr(n){return encodeURI(""+n).replace(p0,"|").replace(o0,"[").replace(r0,"]")}function c0(n){return kr(n).replace(Wi,"{").replace(qi,"}").replace(Ki,"^")}function Lo(n){return kr(n).replace(ji,"%2B").replace(i0,"+").replace(Gi,"%23").replace(e0,"%26").replace(l0,"`").replace(Wi,"{").replace(qi,"}").replace(Ki,"^")}function u0(n){return Lo(n).replace(s0,"%3D")}function d0(n){return kr(n).replace(Gi,"%23").replace(a0,"%3F")}function m0(n){return n==null?"":d0(n).replace(t0,"%2F")}function ws(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const h0=/\/$/,E0=n=>n.replace(h0,"");function ao(n,e,t="/"){let s,a={},o="",r="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),o=e.slice(c+1,l>-1?l:e.length),a=n(o)),l>-1&&(s=s||e.slice(0,l),r=e.slice(l,e.length)),s=b0(s??e,t),{fullPath:s+(o&&"?")+o+r,path:s,query:a,hash:ws(r)}}function k0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Kl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function f0(n,e,t){const s=e.matched.length-1,a=t.matched.length-1;return s>-1&&s===a&&Wt(e.matched[s],t.matched[a])&&Qi(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Wt(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Qi(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!g0(n[t],e[t]))return!1;return!0}function g0(n,e){return ye(n)?Wl(n,e):ye(e)?Wl(e,n):n===e}function Wl(n,e){return ye(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function b0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let o=t.length-1,r,l;for(r=0;r<s.length;r++)if(l=s[r],l!==".")if(l==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+s.slice(r).join("/")}var xs;(function(n){n.pop="pop",n.push="push"})(xs||(xs={}));var Es;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Es||(Es={}));function v0(n){if(!n)if(Pt){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),E0(n)}const A0=/^[^#]+#/;function y0(n,e){return n.replace(A0,"#")+e}function _0(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Fa=()=>({left:window.scrollX,top:window.scrollY});function B0(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;e=_0(a,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ql(n,e){return(history.state?history.state.position-e:-1)+n}const Oo=new Map;function w0(n,e){Oo.set(n,e)}function x0(n){const e=Oo.get(n);return Oo.delete(n),e}let D0=()=>location.protocol+"//"+location.host;function Zi(n,e){const{pathname:t,search:s,hash:a}=e,o=n.indexOf("#");if(o>-1){let l=a.includes(n.slice(o))?n.slice(o).length:1,c=a.slice(l);return c[0]!=="/"&&(c="/"+c),Kl(c,"")}return Kl(t,n)+s+a}function C0(n,e,t,s){let a=[],o=[],r=null;const l=({state:h})=>{const E=Zi(n,location),g=t.value,y=e.value;let _=0;if(h){if(t.value=E,e.value=h,r&&r===g){r=null;return}_=y?h.position-y.position:0}else s(E);a.forEach(b=>{b(t.value,g,{delta:_,type:xs.pop,direction:_?_>0?Es.forward:Es.back:Es.unknown})})};function c(){r=t.value}function i(h){a.push(h);const E=()=>{const g=a.indexOf(h);g>-1&&a.splice(g,1)};return o.push(E),E}function u(){const{history:h}=window;h.state&&h.replaceState(fn({},h.state,{scroll:Fa()}),"")}function d(){for(const h of o)h();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:i,destroy:d}}function Ql(n,e,t,s=!1,a=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:a?Fa():null}}function S0(n){const{history:e,location:t}=window,s={value:Zi(n,t)},a={value:e.state};a.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,i,u){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:D0()+n+c;try{e[u?"replaceState":"pushState"](i,"",h),a.value=i}catch(E){console.error(E),t[u?"replace":"assign"](h)}}function r(c,i){const u=fn({},e.state,Ql(a.value.back,c,a.value.forward,!0),i,{position:a.value.position});o(c,u,!0),s.value=c}function l(c,i){const u=fn({},a.value,e.state,{forward:c,scroll:Fa()});o(u.current,u,!0);const d=fn({},Ql(s.value,c,null),{position:u.position+1},i);o(c,d,!1),s.value=c}return{location:s,state:a,push:l,replace:r}}function P0(n){n=v0(n);const e=S0(n),t=C0(n,e.state,e.location,e.replace);function s(o,r=!0){r||t.pauseListeners(),history.go(o)}const a=fn({location:"",base:n,go:s,createHref:y0.bind(null,n)},e,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function L0(n){return typeof n=="string"||n&&typeof n=="object"}function Yi(n){return typeof n=="string"||typeof n=="symbol"}const Me={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ji=Symbol("");var Zl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zl||(Zl={}));function qt(n,e){return fn(new Error,{type:n,[Ji]:!0},e)}function Ne(n,e){return n instanceof Error&&Ji in n&&(e==null||!!(n.type&e))}const Yl="[^/]+?",O0={sensitive:!1,strict:!1,start:!0,end:!0},R0=/[.+*?^${}()[\]/\\]/g;function T0(n,e){const t=fn({},O0,e),s=[];let a=t.start?"^":"";const o=[];for(const i of n){const u=i.length?[]:[90];t.strict&&!i.length&&(a+="/");for(let d=0;d<i.length;d++){const h=i[d];let E=40+(t.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(R0,"\\$&"),E+=40;else if(h.type===1){const{value:g,repeatable:y,optional:_,regexp:b}=h;o.push({name:g,repeatable:y,optional:_});const x=b||Yl;if(x!==Yl){E+=10;try{new RegExp(`(${x})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+D.message)}}let v=y?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(v=_&&i.length<2?`(?:/${v})`:"/"+v),_&&(v+="?"),a+=v,E+=20,_&&(E+=-8),y&&(E+=-20),x===".*"&&(E+=-50)}u.push(E)}s.push(u)}if(t.strict&&t.end){const i=s.length-1;s[i][s[i].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const r=new RegExp(a,t.sensitive?"":"i");function l(i){const u=i.match(r),d={};if(!u)return null;for(let h=1;h<u.length;h++){const E=u[h]||"",g=o[h-1];d[g.name]=E&&g.repeatable?E.split("/"):E}return d}function c(i){let u="",d=!1;for(const h of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const E of h)if(E.type===0)u+=E.value;else if(E.type===1){const{value:g,repeatable:y,optional:_}=E,b=g in i?i[g]:"";if(ye(b)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=ye(b)?b.join("/"):b;if(!x)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:r,score:s,keys:o,parse:l,stringify:c}}function F0(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function I0(n,e){let t=0;const s=n.score,a=e.score;for(;t<s.length&&t<a.length;){const o=F0(s[t],a[t]);if(o)return o;t++}if(Math.abs(a.length-s.length)===1){if(Jl(s))return 1;if(Jl(a))return-1}return a.length-s.length}function Jl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const N0={type:0,value:""},V0=/[a-zA-Z0-9_]/;function M0(n){if(!n)return[[]];if(n==="/")return[[N0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(E){throw new Error(`ERR (${t})/"${i}": ${E}`)}let t=0,s=t;const a=[];let o;function r(){o&&a.push(o),o=[]}let l=0,c,i="",u="";function d(){i&&(t===0?o.push({type:0,value:i}):t===1||t===2||t===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:i,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),i="")}function h(){i+=c}for(;l<n.length;){if(c=n[l++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(i&&d(),r()):c===":"?(d(),t=1):h();break;case 4:h(),t=s;break;case 1:c==="("?t=2:V0.test(c)?h():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${i}"`),d(),r(),a}function $0(n,e,t){const s=T0(M0(n.path),t),a=fn(s,{record:n,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function U0(n,e){const t=[],s=new Map;e=ep({strict:!1,end:!0,sensitive:!1},e);function a(u){return s.get(u)}function o(u,d,h){const E=!h,g=H0(u);g.aliasOf=h&&h.record;const y=ep(e,u),_=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of v)_.push(fn({},g,{components:h?h.record.components:g.components,path:D,aliasOf:h?h.record:g}))}let b,x;for(const v of _){const{path:D}=v;if(d&&D[0]!=="/"){const N=d.record.path,w=N[N.length-1]==="/"?"":"/";v.path=d.record.path+(D&&w+D)}if(b=$0(v,d,y),h?h.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),E&&u.name&&!np(b)&&r(u.name)),g.children){const N=g.children;for(let w=0;w<N.length;w++)o(N[w],b,h&&h.children[w])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return x?()=>{r(x)}:hs}function r(u){if(Yi(u)){const d=s.get(u);d&&(s.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function l(){return t}function c(u){let d=0;for(;d<t.length&&I0(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Xi(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!np(u)&&s.set(u.record.name,u)}function i(u,d){let h,E={},g,y;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw qt(1,{location:u});y=h.record.name,E=fn(Xl(d.params,h.keys.filter(x=>!x.optional).concat(h.parent?h.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&Xl(u.params,h.keys.map(x=>x.name))),g=h.stringify(E)}else if(u.path!=null)g=u.path,h=t.find(x=>x.re.test(g)),h&&(E=h.parse(g),y=h.record.name);else{if(h=d.name?s.get(d.name):t.find(x=>x.re.test(d.path)),!h)throw qt(1,{location:u,currentLocation:d});y=h.record.name,E=fn({},d.params,u.params),g=h.stringify(E)}const _=[];let b=h;for(;b;)_.unshift(b.record),b=b.parent;return{name:y,path:g,params:E,matched:_,meta:G0(_)}}return n.forEach(u=>o(u)),{addRoute:o,resolve:i,removeRoute:r,getRoutes:l,getRecordMatcher:a}}function Xl(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function H0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:z0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function z0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function np(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function G0(n){return n.reduce((e,t)=>fn(e,t.meta),{})}function ep(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function Xi(n,e){return e.children.some(t=>t===n||Xi(n,t))}function j0(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<s.length;++a){const o=s[a].replace(ji," "),r=o.indexOf("="),l=ws(r<0?o:o.slice(0,r)),c=r<0?null:ws(o.slice(r+1));if(l in e){let i=e[l];ye(i)||(i=e[l]=[i]),i.push(c)}else e[l]=c}return e}function tp(n){let e="";for(let t in n){const s=n[t];if(t=u0(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(ye(s)?s.map(o=>o&&Lo(o)):[s&&Lo(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function K0(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=ye(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return e}const W0=Symbol(""),sp=Symbol(""),Ia=Symbol(""),fr=Symbol(""),Ro=Symbol("");function os(){let n=[];function e(s){return n.push(s),()=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function st(n,e,t,s,a,o=r=>r()){const r=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((l,c)=>{const i=h=>{h===!1?c(qt(4,{from:t,to:e})):h instanceof Error?c(h):L0(h)?c(qt(2,{from:e,to:h})):(r&&s.enterCallbacks[a]===r&&typeof h=="function"&&r.push(h),l())},u=o(()=>n.call(s&&s.instances[a],e,t,i));let d=Promise.resolve(u);n.length<3&&(d=d.then(i)),d.catch(h=>c(h))})}function oo(n,e,t,s,a=o=>o()){const o=[];for(const r of n)for(const l in r.components){let c=r.components[l];if(!(e!=="beforeRouteEnter"&&!r.instances[l]))if(q0(c)){const u=(c.__vccOpts||c)[e];u&&o.push(st(u,t,s,r,l,a))}else{let i=c();o.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));const d=n0(u)?u.default:u;r.components[l]=d;const E=(d.__vccOpts||d)[e];return E&&st(E,t,s,r,l,a)()}))}}return o}function q0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ap(n){const e=kn(Ia),t=kn(fr),s=A(()=>e.resolve(ve(n.to))),a=A(()=>{const{matched:c}=s.value,{length:i}=c,u=c[i-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(Wt.bind(null,u));if(h>-1)return h;const E=op(c[i-2]);return i>1&&op(u)===E&&d[d.length-1].path!==E?d.findIndex(Wt.bind(null,c[i-2])):h}),o=A(()=>a.value>-1&&J0(t.params,s.value.params)),r=A(()=>a.value>-1&&a.value===t.matched.length-1&&Qi(t.params,s.value.params));function l(c={}){return Y0(c)?e[ve(n.replace)?"replace":"push"](ve(n.to)).catch(hs):Promise.resolve()}return{route:s,href:A(()=>s.value.href),isActive:o,isExactActive:r,navigate:l}}const Q0=R({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ap,setup(n,{slots:e}){const t=Ts(ap(n)),{options:s}=kn(Ia),a=A(()=>({[rp(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[rp(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&e.default(t);return n.custom?o:p("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},o)}}}),Z0=Q0;function Y0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function J0(n,e){for(const t in e){const s=e[t],a=n[t];if(typeof s=="string"){if(s!==a)return!1}else if(!ye(a)||a.length!==s.length||s.some((o,r)=>o!==a[r]))return!1}return!0}function op(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const rp=(n,e,t)=>n??e??t,X0=R({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=kn(Ro),a=A(()=>n.route||s.value),o=kn(sp,0),r=A(()=>{let i=ve(o);const{matched:u}=a.value;let d;for(;(d=u[i])&&!d.components;)i++;return i}),l=A(()=>a.value.matched[r.value]);me(sp,A(()=>r.value+1)),me(W0,l),me(Ro,a);const c=K();return on(()=>[c.value,l.value,n.name],([i,u,d],[h,E,g])=>{u&&(u.instances[d]=i,E&&E!==u&&i&&i===h&&(u.leaveGuards.size||(u.leaveGuards=E.leaveGuards),u.updateGuards.size||(u.updateGuards=E.updateGuards))),i&&u&&(!E||!Wt(u,E)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(i))},{flush:"post"}),()=>{const i=a.value,u=n.name,d=l.value,h=d&&d.components[u];if(!h)return lp(t.default,{Component:h,route:i});const E=d.props[u],g=E?E===!0?i.params:typeof E=="function"?E(i):E:null,_=p(h,fn({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return lp(t.default,{Component:_,route:i})||_}}});function lp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const n8=X0;function e8(n){const e=U0(n.routes,n),t=n.parseQuery||j0,s=n.stringifyQuery||tp,a=n.history,o=os(),r=os(),l=os(),c=En(Me);let i=Me;Pt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=so.bind(null,C=>""+C),d=so.bind(null,m0),h=so.bind(null,ws);function E(C,G){let H,Q;return Yi(C)?(H=e.getRecordMatcher(C),Q=G):Q=C,e.addRoute(Q,H)}function g(C){const G=e.getRecordMatcher(C);G&&e.removeRoute(G)}function y(){return e.getRoutes().map(C=>C.record)}function _(C){return!!e.getRecordMatcher(C)}function b(C,G){if(G=fn({},G||c.value),typeof C=="string"){const f=ao(t,C,G.path),B=e.resolve({path:f.path},G),P=a.createHref(f.fullPath);return fn(f,B,{params:h(B.params),hash:ws(f.hash),redirectedFrom:void 0,href:P})}let H;if(C.path!=null)H=fn({},C,{path:ao(t,C.path,G.path).path});else{const f=fn({},C.params);for(const B in f)f[B]==null&&delete f[B];H=fn({},C,{params:d(f)}),G.params=d(G.params)}const Q=e.resolve(H,G),cn=C.hash||"";Q.params=u(h(Q.params));const Bn=k0(s,fn({},C,{hash:c0(cn),path:Q.path})),k=a.createHref(Bn);return fn({fullPath:Bn,hash:cn,query:s===tp?K0(C.query):C.query||{}},Q,{redirectedFrom:void 0,href:k})}function x(C){return typeof C=="string"?ao(t,C,c.value.path):fn({},C)}function v(C,G){if(i!==C)return qt(8,{from:G,to:C})}function D(C){return F(C)}function N(C){return D(fn(x(C),{replace:!0}))}function w(C){const G=C.matched[C.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let Q=typeof H=="function"?H(C):H;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=x(Q):{path:Q},Q.params={}),fn({query:C.query,hash:C.hash,params:Q.path!=null?{}:C.params},Q)}}function F(C,G){const H=i=b(C),Q=c.value,cn=C.state,Bn=C.force,k=C.replace===!0,f=w(H);if(f)return F(fn(x(f),{state:typeof f=="object"?fn({},cn,f.state):cn,force:Bn,replace:k}),G||H);const B=H;B.redirectedFrom=G;let P;return!Bn&&f0(s,Q,H)&&(P=qt(16,{to:B,from:Q}),le(Q,Q,!0,!1)),(P?Promise.resolve(P):U(B,Q)).catch(S=>Ne(S)?Ne(S,2)?S:De(S):q(S,B,Q)).then(S=>{if(S){if(Ne(S,2))return F(fn({replace:k},x(S.to),{state:typeof S.to=="object"?fn({},cn,S.to.state):cn,force:Bn}),G||B)}else S=M(B,Q,!0,k,cn);return Z(B,Q,S),S})}function O(C,G){const H=v(C,G);return H?Promise.reject(H):Promise.resolve()}function I(C){const G=Ie.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(C):C()}function U(C,G){let H;const[Q,cn,Bn]=t8(C,G);H=oo(Q.reverse(),"beforeRouteLeave",C,G);for(const f of Q)f.leaveGuards.forEach(B=>{H.push(st(B,C,G))});const k=O.bind(null,C,G);return H.push(k),Fn(H).then(()=>{H=[];for(const f of o.list())H.push(st(f,C,G));return H.push(k),Fn(H)}).then(()=>{H=oo(cn,"beforeRouteUpdate",C,G);for(const f of cn)f.updateGuards.forEach(B=>{H.push(st(B,C,G))});return H.push(k),Fn(H)}).then(()=>{H=[];for(const f of Bn)if(f.beforeEnter)if(ye(f.beforeEnter))for(const B of f.beforeEnter)H.push(st(B,C,G));else H.push(st(f.beforeEnter,C,G));return H.push(k),Fn(H)}).then(()=>(C.matched.forEach(f=>f.enterCallbacks={}),H=oo(Bn,"beforeRouteEnter",C,G,I),H.push(k),Fn(H))).then(()=>{H=[];for(const f of r.list())H.push(st(f,C,G));return H.push(k),Fn(H)}).catch(f=>Ne(f,8)?f:Promise.reject(f))}function Z(C,G,H){l.list().forEach(Q=>I(()=>Q(C,G,H)))}function M(C,G,H,Q,cn){const Bn=v(C,G);if(Bn)return Bn;const k=G===Me,f=Pt?history.state:{};H&&(Q||k?a.replace(C.fullPath,fn({scroll:k&&f&&f.scroll},cn)):a.push(C.fullPath,cn)),c.value=C,le(C,G,H,k),De()}let nn;function Ln(){nn||(nn=a.listen((C,G,H)=>{if(!Ce.listening)return;const Q=b(C),cn=w(Q);if(cn){F(fn(cn,{replace:!0}),Q).catch(hs);return}i=Q;const Bn=c.value;Pt&&w0(ql(Bn.fullPath,H.delta),Fa()),U(Q,Bn).catch(k=>Ne(k,12)?k:Ne(k,2)?(F(k.to,Q).then(f=>{Ne(f,20)&&!H.delta&&H.type===xs.pop&&a.go(-1,!1)}).catch(hs),Promise.reject()):(H.delta&&a.go(-H.delta,!1),q(k,Q,Bn))).then(k=>{k=k||M(Q,Bn,!1),k&&(H.delta&&!Ne(k,8)?a.go(-H.delta,!1):H.type===xs.pop&&Ne(k,20)&&a.go(-1,!1)),Z(Q,Bn,k)}).catch(hs)}))}let Sn=os(),W=os(),en;function q(C,G,H){De(C);const Q=W.list();return Q.length?Q.forEach(cn=>cn(C,G,H)):console.error(C),Promise.reject(C)}function Tn(){return en&&c.value!==Me?Promise.resolve():new Promise((C,G)=>{Sn.add([C,G])})}function De(C){return en||(en=!C,Ln(),Sn.list().forEach(([G,H])=>C?H(C):G()),Sn.reset()),C}function le(C,G,H,Q){const{scrollBehavior:cn}=n;if(!Pt||!cn)return Promise.resolve();const Bn=!H&&x0(ql(C.fullPath,0))||(Q||!H)&&history.state&&history.state.scroll||null;return Be().then(()=>cn(C,G,Bn)).then(k=>k&&B0(k)).catch(k=>q(k,C,G))}const Un=C=>a.go(C);let Xn;const Ie=new Set,Ce={currentRoute:c,listening:!0,addRoute:E,removeRoute:g,hasRoute:_,getRoutes:y,resolve:b,options:n,push:D,replace:N,go:Un,back:()=>Un(-1),forward:()=>Un(1),beforeEach:o.add,beforeResolve:r.add,afterEach:l.add,onError:W.add,isReady:Tn,install(C){const G=this;C.component("RouterLink",Z0),C.component("RouterView",n8),C.config.globalProperties.$router=G,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(c)}),Pt&&!Xn&&c.value===Me&&(Xn=!0,D(a.location).catch(cn=>{}));const H={};for(const cn in Me)Object.defineProperty(H,cn,{get:()=>c.value[cn],enumerable:!0});C.provide(Ia,G),C.provide(fr,qp(H)),C.provide(Ro,c);const Q=C.unmount;Ie.add(C),C.unmount=function(){Ie.delete(C),Ie.size<1&&(i=Me,nn&&nn(),nn=null,c.value=Me,Xn=!1,en=!1),Q()}}};function Fn(C){return C.reduce((G,H)=>G.then(()=>I(H)),Promise.resolve())}return Ce}function t8(n,e){const t=[],s=[],a=[],o=Math.max(e.matched.length,n.matched.length);for(let r=0;r<o;r++){const l=e.matched[r];l&&(n.matched.find(i=>Wt(i,l))?s.push(l):t.push(l));const c=n.matched[r];c&&(e.matched.find(i=>Wt(i,c))||a.push(c))}return[t,s,a]}function je(){return kn(Ia)}function we(){return kn(fr)}var gr=Symbol(""),Te=()=>{const n=kn(gr);if(!n)throw new Error("useClientData() is called without provider.");return n},s8=()=>Te().pageComponent,gn=()=>Te().pageData,bn=()=>Te().pageFrontmatter,a8=()=>Te().pageHead,br=()=>Te().pageLang,o8=()=>Te().pageLayout,Fe=()=>Te().routeLocale,r8=()=>Te().routes,nc=()=>Te().siteData,Jt=()=>Te().siteLocaleData,l8=Symbol(""),ec=En(J1),Ds=En(X1),tc=n=>{const e=q1(n);if(Ds.value[e])return e;const t=encodeURI(e);return Ds.value[t]?t:ec.value[e]||e},Xt=n=>{const e=tc(n),t=Ds.value[e]??{...Ds.value["/404.html"],notFound:!0};return{path:e,notFound:!1,...t}},Na=R({name:"ClientOnly",setup(n,e){const t=K(!1);return mn(()=>{t.value=!0}),()=>{var s,a;return t.value?(a=(s=e.slots).default)==null?void 0:a.call(s):null}}}),sc=R({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const e=s8(),t=A(()=>{if(!n.path)return e.value;const s=Xt(n.path);return cr(()=>s.loader().then(({comp:a})=>a))});return()=>p(t.value)}}),wn=n=>Ge(n)?n:`/${zi(n)}`,p8=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const e=n.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},Rn=({active:n=!1,activeClass:e="route-link-active",to:t,...s},{slots:a})=>{var l;const o=je(),r=wn(tc(t));return p("a",{...s,class:["route-link",{[e]:n}],href:r,onClick:(c={})=>{p8(c)?o.push(t).catch():Promise.resolve()}},(l=a.default)==null?void 0:l.call(a))};Rn.displayName="RouteLink";Rn.props={active:Boolean,activeClass:String,to:String};var i8="Layout",c8="en-US",kt=Ts({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(n,e,t)=>{const s=Dn(e.description)?e.description:t.description,a=[...Array.isArray(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:s}]];return j1(a)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||c8,resolvePageLayout:(n,e)=>{const t=Dn(n.frontmatter.layout)?n.frontmatter.layout:i8;if(!e[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return e[t]},resolveRouteLocale:(n,e)=>Q1(n,e),resolveSiteLocaleData:(n,e)=>{var t;return{...n,...n.locales[e],head:[...((t=n.locales[e])==null?void 0:t.head)??[],...n.head??[]]}}});const u8={};var re=(n={})=>n;const xe=n=>{const e=Fe();return A(()=>n[e.value]??{})};var qn=Uint8Array,Lt=Uint16Array,d8=Int32Array,ac=new qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),oc=new qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m8=new qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rc=function(n,e){for(var t=new Lt(31),s=0;s<31;++s)t[s]=e+=1<<n[s-1];for(var a=new d8(t[30]),s=1;s<30;++s)for(var o=t[s];o<t[s+1];++o)a[o]=o-t[s]<<5|s;return{b:t,r:a}},lc=rc(ac,2),pc=lc.b,h8=lc.r;pc[28]=258,h8[258]=28;var E8=rc(oc,0),k8=E8.b,To=new Lt(32768);for(var Cn=0;Cn<32768;++Cn){var Ye=(Cn&43690)>>1|(Cn&21845)<<1;Ye=(Ye&52428)>>2|(Ye&13107)<<2,Ye=(Ye&61680)>>4|(Ye&3855)<<4,To[Cn]=((Ye&65280)>>8|(Ye&255)<<8)>>1}var ks=function(n,e,t){for(var s=n.length,a=0,o=new Lt(e);a<s;++a)n[a]&&++o[n[a]-1];var r=new Lt(e);for(a=1;a<e;++a)r[a]=r[a-1]+o[a-1]<<1;var l;if(t){l=new Lt(1<<e);var c=15-e;for(a=0;a<s;++a)if(n[a])for(var i=a<<4|n[a],u=e-n[a],d=r[n[a]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)l[To[d]>>c]=i}else for(l=new Lt(s),a=0;a<s;++a)n[a]&&(l[a]=To[r[n[a]-1]++]>>15-n[a]);return l},Ms=new qn(288);for(var Cn=0;Cn<144;++Cn)Ms[Cn]=8;for(var Cn=144;Cn<256;++Cn)Ms[Cn]=9;for(var Cn=256;Cn<280;++Cn)Ms[Cn]=7;for(var Cn=280;Cn<288;++Cn)Ms[Cn]=8;var ic=new qn(32);for(var Cn=0;Cn<32;++Cn)ic[Cn]=5;var f8=ks(Ms,9,1),g8=ks(ic,5,1),ro=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},ge=function(n,e,t){var s=e/8|0;return(n[s]|n[s+1]<<8)>>(e&7)&t},lo=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},b8=function(n){return(n+7)/8|0},vr=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new qn(n.subarray(e,t))},v8=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ce=function(n,e,t){var s=new Error(e||v8[n]);if(s.code=n,Error.captureStackTrace&&Error.captureStackTrace(s,ce),!t)throw s;return s},A8=function(n,e,t,s){var a=n.length,o=s?s.length:0;if(!a||e.f&&!e.l)return t||new qn(0);var r=!t,l=r||e.i!=2,c=e.i;r&&(t=new qn(a*3));var i=function(cn){var Bn=t.length;if(cn>Bn){var k=new qn(Math.max(Bn*2,cn));k.set(t),t=k}},u=e.f||0,d=e.p||0,h=e.b||0,E=e.l,g=e.d,y=e.m,_=e.n,b=a*8;do{if(!E){u=ge(n,d,1);var x=ge(n,d+1,3);if(d+=3,x)if(x==1)E=f8,g=g8,y=9,_=5;else if(x==2){var w=ge(n,d,31)+257,F=ge(n,d+10,15)+4,O=w+ge(n,d+5,31)+1;d+=14;for(var I=new qn(O),U=new qn(19),Z=0;Z<F;++Z)U[m8[Z]]=ge(n,d+Z*3,7);d+=F*3;for(var M=ro(U),nn=(1<<M)-1,Ln=ks(U,M,1),Z=0;Z<O;){var Sn=Ln[ge(n,d,nn)];d+=Sn&15;var v=Sn>>4;if(v<16)I[Z++]=v;else{var W=0,en=0;for(v==16?(en=3+ge(n,d,3),d+=2,W=I[Z-1]):v==17?(en=3+ge(n,d,7),d+=3):v==18&&(en=11+ge(n,d,127),d+=7);en--;)I[Z++]=W}}var q=I.subarray(0,w),Tn=I.subarray(w);y=ro(q),_=ro(Tn),E=ks(q,y,1),g=ks(Tn,_,1)}else ce(1);else{var v=b8(d)+4,D=n[v-4]|n[v-3]<<8,N=v+D;if(N>a){c&&ce(0);break}l&&i(h+D),t.set(n.subarray(v,N),h),e.b=h+=D,e.p=d=N*8,e.f=u;continue}if(d>b){c&&ce(0);break}}l&&i(h+131072);for(var De=(1<<y)-1,le=(1<<_)-1,Un=d;;Un=d){var W=E[lo(n,d)&De],Xn=W>>4;if(d+=W&15,d>b){c&&ce(0);break}if(W||ce(2),Xn<256)t[h++]=Xn;else if(Xn==256){Un=d,E=null;break}else{var Ie=Xn-254;if(Xn>264){var Z=Xn-257,Ce=ac[Z];Ie=ge(n,d,(1<<Ce)-1)+pc[Z],d+=Ce}var Fn=g[lo(n,d)&le],C=Fn>>4;Fn||ce(3),d+=Fn&15;var Tn=k8[C];if(C>3){var Ce=oc[C];Tn+=lo(n,d)&(1<<Ce)-1,d+=Ce}if(d>b){c&&ce(0);break}l&&i(h+131072);var G=h+Ie;if(h<Tn){var H=o-Tn,Q=Math.min(Tn,G);for(H+h<0&&ce(3);h<Q;++h)t[h]=s[H+h]}for(;h<G;++h)t[h]=t[h-Tn]}}e.l=E,e.p=Un,e.b=h,e.f=u,E&&(u=1,e.m=y,e.d=g,e.n=_)}while(!u);return h!=t.length&&r?vr(t,0,h):t.subarray(0,h)},y8=new qn(0),_8=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&ce(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&ce(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function B8(n,e){return A8(n.subarray(_8(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var pp=typeof TextEncoder<"u"&&new TextEncoder,Fo=typeof TextDecoder<"u"&&new TextDecoder,w8=0;try{Fo.decode(y8,{stream:!0}),w8=1}catch{}var x8=function(n){for(var e="",t=0;;){var s=n[t++],a=(s>127)+(s>223)+(s>239);if(t+a>n.length)return{s:e,r:vr(n,t-1)};a?a==3?(s=((s&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|s>>10,56320|s&1023)):a&1?e+=String.fromCharCode((s&31)<<6|n[t++]&63):e+=String.fromCharCode((s&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(s)}};function D8(n,e){if(e){for(var t=new qn(n.length),s=0;s<n.length;++s)t[s]=n.charCodeAt(s);return t}if(pp)return pp.encode(n);for(var a=n.length,o=new qn(n.length+(n.length>>1)),r=0,l=function(u){o[r++]=u},s=0;s<a;++s){if(r+5>o.length){var c=new qn(r+8+(a-s<<1));c.set(o),o=c}var i=n.charCodeAt(s);i<128||e?l(i):i<2048?(l(192|i>>6),l(128|i&63)):i>55295&&i<57344?(i=65536+(i&1047552)|n.charCodeAt(++s)&1023,l(240|i>>18),l(128|i>>12&63),l(128|i>>6&63),l(128|i&63)):(l(224|i>>12),l(128|i>>6&63),l(128|i&63))}return vr(o,0,r)}function C8(n,e){if(e){for(var t="",s=0;s<n.length;s+=16384)t+=String.fromCharCode.apply(null,n.subarray(s,s+16384));return t}else{if(Fo)return Fo.decode(n);var a=x8(n),o=a.s,t=a.r;return t.length&&ce(8),o}}const ya=n=>{const e=atob(n);return C8(B8(D8(e,!0)))},te=(n,e)=>{var s;const t=(s=(e==null?void 0:e._instance)||Dt())==null?void 0:s.appContext.components;return t?n in t||oe(n)in t||Rs(oe(n))in t:!1},cc=n=>new Promise(e=>setTimeout(e,n)),Ar=n=>typeof n<"u",po=n=>typeof n=="number",_a=Array.isArray,Cs=(n,e)=>Dn(n)&&n.startsWith(e),S8=(n,e)=>Dn(n)&&n.endsWith(e),Ke=Object.entries,P8=Object.fromEntries,Ee=Object.keys,Io=(n,...e)=>{if(e.length===0)return n;const t=e.shift()||null;return t&&Ke(t).forEach(([s,a])=>{s==="__proto__"||s==="constructor"||(rt(n[s])&&rt(a)?Io(n[s],a):_a(a)?n[s]=[...a]:rt(a)?n[s]={...a}:n[s]=t[s])}),Io(n,...e)},yr=n=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},Va=n=>Cs(n,"/");function uc(n,e){let t,s,a;const o=K(!0),r=()=>{o.value=!0,a()};on(n,r,{flush:"sync"});const l=typeof e=="function"?e:e.get,c=typeof e=="function"?void 0:e.set,i=Da((u,d)=>(s=u,a=d,{get(){return o.value&&(t=l(),o.value=!1),s(),t},set(h){c==null||c(h)}}));return Object.isExtensible(i)&&(i.trigger=r),i}function _e(n){return Ip()?(bd(n),!0):!1}function $n(n){return typeof n=="function"?n():ve(n)}const Bt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const L8=n=>n!=null,O8=Object.prototype.toString,R8=n=>O8.call(n)==="[object Object]",Oe=()=>{},No=T8();function T8(){var n,e;return Bt&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function _r(n,e){function t(...s){return new Promise((a,o)=>{Promise.resolve(n(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(a).catch(o)})}return t}const dc=n=>n();function F8(n,e={}){let t,s,a=Oe;const o=l=>{clearTimeout(l),a(),a=Oe};return l=>{const c=$n(n),i=$n(e.maxWait);return t&&o(t),c<=0||i!==void 0&&i<=0?(s&&(o(s),s=null),Promise.resolve(l())):new Promise((u,d)=>{a=e.rejectOnCancel?d:u,i&&!s&&(s=setTimeout(()=>{t&&o(t),s=null,u(l())},i)),t=setTimeout(()=>{s&&o(s),s=null,u(l())},c)})}}function I8(...n){let e=0,t,s=!0,a=Oe,o,r,l,c,i;!Vn(n[0])&&typeof n[0]=="object"?{delay:r,trailing:l=!0,leading:c=!0,rejectOnCancel:i=!1}=n[0]:[r,l=!0,c=!0,i=!1]=n;const u=()=>{t&&(clearTimeout(t),t=void 0,a(),a=Oe)};return h=>{const E=$n(r),g=Date.now()-e,y=()=>o=h();return u(),E<=0?(e=Date.now(),y()):(g>E&&(c||!s)?(e=Date.now(),y()):l&&(o=new Promise((_,b)=>{a=i?b:_,t=setTimeout(()=>{e=Date.now(),s=!0,_(y()),u()},Math.max(0,E-g))})),!c&&!t&&(t=setTimeout(()=>s=!0,E)),s=!1,o)}}function N8(n=dc){const e=K(!0);function t(){e.value=!1}function s(){e.value=!0}const a=(...o)=>{e.value&&n(...o)};return{isActive:He(e),pause:t,resume:s,eventFilter:a}}function V8(n){let e;function t(){return e||(e=n()),e}return t.reset=async()=>{const s=e;e=void 0,s&&await s},t}function mc(n){return n||Dt()}function M8(...n){if(n.length!==1)return Yt(...n);const e=n[0];return typeof e=="function"?He(Da(()=>({get:e,set:Oe}))):K(e)}function Br(n,e=200,t={}){return _r(F8(e,t),n)}function $8(n,e=200,t=!1,s=!0,a=!1){return _r(I8(e,t,s,a),n)}function U8(n,e,t={}){const{eventFilter:s=dc,...a}=t;return on(n,_r(s,e),a)}function H8(n,e,t={}){const{eventFilter:s,...a}=t,{eventFilter:o,pause:r,resume:l,isActive:c}=N8(s);return{stop:U8(n,e,{...a,eventFilter:o}),pause:r,resume:l,isActive:c}}function $s(n,e=!0,t){mc()?mn(n,t):e?n():Be(n)}function z8(n,e){mc(e)&&dt(n,e)}function G8(n,e=1e3,t={}){const{immediate:s=!0,immediateCallback:a=!1}=t;let o=null;const r=K(!1);function l(){o&&(clearInterval(o),o=null)}function c(){r.value=!1,l()}function i(){const u=$n(e);u<=0||(r.value=!0,a&&n(),l(),o=setInterval(n,u))}if(s&&Bt&&i(),Vn(e)||typeof e=="function"){const u=on(e,()=>{r.value&&Bt&&i()});_e(u)}return _e(c),{isActive:r,pause:c,resume:i}}function j8(n,e,t={}){const{immediate:s=!0}=t,a=K(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,r()}function c(...i){r(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,n(...i)},$n(e))}return s&&(a.value=!0,Bt&&c()),_e(l),{isPending:He(a),start:c,stop:l}}function Ba(n=!1,e={}){const{truthyValue:t=!0,falsyValue:s=!1}=e,a=Vn(n),o=K(n);function r(l){if(arguments.length)return o.value=l,o.value;{const c=$n(t);return o.value=o.value===c?$n(s):c,o.value}}return a?r:[o,r]}function Zn(n){var e;const t=$n(n);return(e=t==null?void 0:t.$el)!=null?e:t}const ke=Bt?window:void 0,wr=Bt?window.document:void 0,hc=Bt?window.navigator:void 0;function yn(...n){let e,t,s,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,s,a]=n,e=ke):[e,t,s,a]=n,!e)return Oe;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const o=[],r=()=>{o.forEach(u=>u()),o.length=0},l=(u,d,h,E)=>(u.addEventListener(d,h,E),()=>u.removeEventListener(d,h,E)),c=on(()=>[Zn(e),$n(a)],([u,d])=>{if(r(),!u)return;const h=R8(d)?{...d}:d;o.push(...t.flatMap(E=>s.map(g=>l(u,E,g,h))))},{immediate:!0,flush:"post"}),i=()=>{c(),r()};return _e(i),i}let ip=!1;function K8(n,e,t={}){const{window:s=ke,ignore:a=[],capture:o=!0,detectIframe:r=!1}=t;if(!s)return Oe;No&&!ip&&(ip=!0,Array.from(s.document.body.children).forEach(h=>h.addEventListener("click",Oe)),s.document.documentElement.addEventListener("click",Oe));let l=!0;const c=h=>a.some(E=>{if(typeof E=="string")return Array.from(s.document.querySelectorAll(E)).some(g=>g===h.target||h.composedPath().includes(g));{const g=Zn(E);return g&&(h.target===g||h.composedPath().includes(g))}}),u=[yn(s,"click",h=>{const E=Zn(n);if(!(!E||E===h.target||h.composedPath().includes(E))){if(h.detail===0&&(l=!c(h)),!l){l=!0;return}e(h)}},{passive:!0,capture:o}),yn(s,"pointerdown",h=>{const E=Zn(n);l=!c(h)&&!!(E&&!h.composedPath().includes(E))},{passive:!0}),r&&yn(s,"blur",h=>{setTimeout(()=>{var E;const g=Zn(n);((E=s.document.activeElement)==null?void 0:E.tagName)==="IFRAME"&&!(g!=null&&g.contains(s.document.activeElement))&&e(h)},0)})].filter(Boolean);return()=>u.forEach(h=>h())}function W8(){const n=K(!1),e=Dt();return e&&mn(()=>{n.value=!0},e),n}function ns(n){const e=W8();return A(()=>(e.value,!!n()))}function q8(n,e={}){const{immediate:t=!0,fpsLimit:s=void 0,window:a=ke}=e,o=K(!1),r=s?1e3/s:null;let l=0,c=null;function i(h){if(!o.value||!a)return;l||(l=h);const E=h-l;if(r&&E<r){c=a.requestAnimationFrame(i);return}l=h,n({delta:E,timestamp:h}),c=a.requestAnimationFrame(i)}function u(){!o.value&&a&&(o.value=!0,l=0,c=a.requestAnimationFrame(i))}function d(){o.value=!1,c!=null&&a&&(a.cancelAnimationFrame(c),c=null)}return t&&u(),_e(d),{isActive:He(o),pause:d,resume:u}}function Ec(n,e={}){const{window:t=ke}=e,s=ns(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=K(!1),r=i=>{o.value=i.matches},l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",r):a.removeListener(r))},c=ri(()=>{s.value&&(l(),a=t.matchMedia($n(n)),"addEventListener"in a?a.addEventListener("change",r):a.addListener(r),o.value=a.matches)});return _e(()=>{c(),l(),a=void 0}),o}function cp(n,e={}){const{controls:t=!1,navigator:s=hc}=e,a=ns(()=>s&&"permissions"in s);let o;const r=typeof n=="string"?{name:n}:n,l=K(),c=()=>{o&&(l.value=o.state)},i=V8(async()=>{if(a.value){if(!o)try{o=await s.permissions.query(r),yn(o,"change",c),c()}catch{l.value="prompt"}return o}});return i(),t?{state:l,isSupported:a,query:i}:l}function Q8(n={}){const{navigator:e=hc,read:t=!1,source:s,copiedDuring:a=1500,legacy:o=!1}=n,r=ns(()=>e&&"clipboard"in e),l=cp("clipboard-read"),c=cp("clipboard-write"),i=A(()=>r.value||o),u=K(""),d=K(!1),h=j8(()=>d.value=!1,a);function E(){r.value&&l.value!=="denied"?e.clipboard.readText().then(b=>{u.value=b}):u.value=_()}i.value&&t&&yn(["copy","cut"],E);async function g(b=$n(s)){i.value&&b!=null&&(r.value&&c.value!=="denied"?await e.clipboard.writeText(b):y(b),u.value=b,d.value=!0,h.start())}function y(b){const x=document.createElement("textarea");x.value=b??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function _(){var b,x,v;return(v=(x=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:x.toString())!=null?v:""}return{isSupported:i,text:u,copied:d,copy:g}}const aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oa="__vueuse_ssr_handlers__",Z8=Y8();function Y8(){return oa in aa||(aa[oa]=aa[oa]||{}),aa[oa]}function J8(n,e){return Z8[n]||e}function X8(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const nh={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},up="vueuse-storage";function Ma(n,e,t,s={}){var a;const{flush:o="pre",deep:r=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:i=!1,shallow:u,window:d=ke,eventFilter:h,onError:E=I=>{console.error(I)},initOnMounted:g}=s,y=(u?En:K)(typeof e=="function"?e():e);if(!t)try{t=J8("getDefaultStorage",()=>{var I;return(I=ke)==null?void 0:I.localStorage})()}catch(I){E(I)}if(!t)return y;const _=$n(e),b=X8(_),x=(a=s.serializer)!=null?a:nh[b],{pause:v,resume:D}=H8(y,()=>N(y.value),{flush:o,deep:r,eventFilter:h});return d&&l&&$s(()=>{yn(d,"storage",O),yn(d,up,F),g&&O()}),g||O(),y;function N(I){try{const U=t.getItem(n),Z=M=>{d&&d.dispatchEvent(new CustomEvent(up,{detail:{key:n,oldValue:U,newValue:M,storageArea:t}}))};if(I==null)Z(null),t.removeItem(n);else{const M=x.write(I);U!==M&&(t.setItem(n,M),Z(M))}}catch(U){E(U)}}function w(I){const U=I?I.newValue:t.getItem(n);if(U==null)return c&&_!=null&&t.setItem(n,x.write(_)),_;if(!I&&i){const Z=x.read(U);return typeof i=="function"?i(Z,_):b==="object"&&!Array.isArray(Z)?{..._,...Z}:Z}else return typeof U!="string"?U:x.read(U)}function F(I){O(I.detail)}function O(I){if(!(I&&I.storageArea!==t)){if(I&&I.key==null){y.value=_;return}if(!(I&&I.key!==n)){v();try{(I==null?void 0:I.newValue)!==x.write(y.value)&&(y.value=w(I))}catch(U){E(U)}finally{I?Be(D):D()}}}}}function eh(n){return Ec("(prefers-color-scheme: dark)",n)}function th(n,e,t={}){const{window:s=ke,...a}=t;let o;const r=ns(()=>s&&"MutationObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},c=A(()=>{const h=$n(n),E=(Array.isArray(h)?h:[h]).map(Zn).filter(L8);return new Set(E)}),i=on(()=>c.value,h=>{l(),r.value&&s&&h.size&&(o=new MutationObserver(e),h.forEach(E=>o.observe(E,a)))},{immediate:!0,flush:"post"}),u=()=>o==null?void 0:o.takeRecords(),d=()=>{l(),i()};return _e(d),{isSupported:r,stop:d,takeRecords:u}}function sh(n,e,t={}){const{window:s=ke,...a}=t;let o;const r=ns(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},c=A(()=>Array.isArray(n)?n.map(d=>Zn(d)):[Zn(n)]),i=on(c,d=>{if(l(),r.value&&s){o=new ResizeObserver(e);for(const h of d)h&&o.observe(h,a)}},{immediate:!0,flush:"post"}),u=()=>{l(),i()};return _e(u),{isSupported:r,stop:u}}function ah(n,e={width:0,height:0},t={}){const{window:s=ke,box:a="content-box"}=t,o=A(()=>{var d,h;return(h=(d=Zn(n))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),r=K(e.width),l=K(e.height),{stop:c}=sh(n,([d])=>{const h=a==="border-box"?d.borderBoxSize:a==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(s&&o.value){const E=Zn(n);if(E){const g=s.getComputedStyle(E);r.value=Number.parseFloat(g.width),l.value=Number.parseFloat(g.height)}}else if(h){const E=Array.isArray(h)?h:[h];r.value=E.reduce((g,{inlineSize:y})=>g+y,0),l.value=E.reduce((g,{blockSize:y})=>g+y,0)}else r.value=d.contentRect.width,l.value=d.contentRect.height},t);$s(()=>{const d=Zn(n);d&&(r.value="offsetWidth"in d?d.offsetWidth:e.width,l.value="offsetHeight"in d?d.offsetHeight:e.height)});const i=on(()=>Zn(n),d=>{r.value=d?e.width:0,l.value=d?e.height:0});function u(){c(),i()}return{width:r,height:l,stop:u}}const dp=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function xr(n,e={}){const{document:t=wr,autoExit:s=!1}=e,a=A(()=>{var b;return(b=Zn(n))!=null?b:t==null?void 0:t.querySelector("html")}),o=K(!1),r=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>t&&b in t||a.value&&b in a.value)),l=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>t&&b in t||a.value&&b in a.value)),c=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>t&&b in t||a.value&&b in a.value)),i=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>t&&b in t),u=ns(()=>a.value&&t&&r.value!==void 0&&l.value!==void 0&&c.value!==void 0),d=()=>i?(t==null?void 0:t[i])===a.value:!1,h=()=>{if(c.value){if(t&&t[c.value]!=null)return t[c.value];{const b=a.value;if((b==null?void 0:b[c.value])!=null)return!!b[c.value]}}return!1};async function E(){if(!(!u.value||!o.value)){if(l.value)if((t==null?void 0:t[l.value])!=null)await t[l.value]();else{const b=a.value;(b==null?void 0:b[l.value])!=null&&await b[l.value]()}o.value=!1}}async function g(){if(!u.value||o.value)return;h()&&await E();const b=a.value;r.value&&(b==null?void 0:b[r.value])!=null&&(await b[r.value](),o.value=!0)}async function y(){await(o.value?E():g())}const _=()=>{const b=h();(!b||b&&d())&&(o.value=b)};return yn(t,dp,_,!1),yn(()=>Zn(a),dp,_,!1),s&&_e(E),{isSupported:u,isFullscreen:o,enter:g,exit:E,toggle:y}}function io(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function _f(n,e,t={}){const{window:s=ke}=t;return Ma(n,e,s==null?void 0:s.localStorage,t)}function Bf(n={}){const{controls:e=!1,interval:t="requestAnimationFrame"}=n,s=K(new Date),a=()=>s.value=new Date,o=t==="requestAnimationFrame"?q8(a,{immediate:!0}):G8(a,t,{immediate:!0});return e?{now:s,...o}:s}function co(n,e=Oe,t={}){const{immediate:s=!0,manual:a=!1,type:o="text/javascript",async:r=!0,crossOrigin:l,referrerPolicy:c,noModule:i,defer:u,document:d=wr,attrs:h={}}=t,E=K(null);let g=null;const y=x=>new Promise((v,D)=>{const N=O=>(E.value=O,v(O),O);if(!d){v(!1);return}let w=!1,F=d.querySelector(`script[src="${$n(n)}"]`);F?F.hasAttribute("data-loaded")&&N(F):(F=d.createElement("script"),F.type=o,F.async=r,F.src=$n(n),u&&(F.defer=u),l&&(F.crossOrigin=l),i&&(F.noModule=i),c&&(F.referrerPolicy=c),Object.entries(h).forEach(([O,I])=>F==null?void 0:F.setAttribute(O,I)),w=!0),F.addEventListener("error",O=>D(O)),F.addEventListener("abort",O=>D(O)),F.addEventListener("load",()=>{F.setAttribute("data-loaded","true"),e(F),N(F)}),w&&(F=d.head.appendChild(F)),x||N(F)}),_=(x=!0)=>(g||(g=y(x)),g),b=()=>{if(!d)return;g=null,E.value&&(E.value=null);const x=d.querySelector(`script[src="${$n(n)}"]`);x&&d.head.removeChild(x)};return s&&!a&&$s(_),a||z8(b),{scriptTag:E,load:_,unload:b}}function kc(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!t||t.tagName==="BODY"?!1:kc(t)}}function oh(n){const e=n||window.event,t=e.target;return kc(t)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const ra=new WeakMap;function Dr(n,e=!1){const t=K(e);let s=null,a;on(M8(n),l=>{const c=io($n(l));if(c){const i=c;ra.get(i)||ra.set(i,a),t.value&&(i.style.overflow="hidden")}},{immediate:!0});const o=()=>{const l=io($n(n));!l||t.value||(No&&(s=yn(l,"touchmove",c=>{oh(c)},{passive:!1})),l.style.overflow="hidden",t.value=!0)},r=()=>{var l;const c=io($n(n));!c||!t.value||(No&&(s==null||s()),c.style.overflow=(l=ra.get(c))!=null?l:"",ra.delete(c),t.value=!1)};return _e(r),A({get(){return t.value},set(l){l?o():r()}})}let rh=0;function wf(n,e={}){const t=K(!1),{document:s=wr,immediate:a=!0,manual:o=!1,id:r=`vueuse_styletag_${++rh}`}=e,l=K(n);let c=()=>{};const i=()=>{if(!s)return;const d=s.getElementById(r)||s.createElement("style");d.isConnected||(d.id=r,e.media&&(d.media=e.media),s.head.appendChild(d)),!t.value&&(c=on(l,h=>{d.textContent=h},{immediate:!0}),t.value=!0)},u=()=>{!s||!t.value||(c(),s.head.removeChild(s.getElementById(r)),t.value=!1)};return a&&!o&&$s(i),o||_e(u),{id:r,css:l,unload:u,load:i,isLoaded:He(t)}}function lh(n={}){const{window:e=ke,behavior:t="auto"}=n;if(!e)return{x:K(0),y:K(0)};const s=K(e.scrollX),a=K(e.scrollY),o=A({get(){return s.value},set(l){scrollTo({left:l,behavior:t})}}),r=A({get(){return a.value},set(l){scrollTo({top:l,behavior:t})}});return yn(e,"scroll",()=>{s.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:r}}function ph(n={}){const{window:e=ke,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:o=!0}=n,r=K(t),l=K(s),c=()=>{e&&(o?(r.value=e.innerWidth,l.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight))};if(c(),$s(c),yn("resize",c,{passive:!0}),a){const i=Ec("(orientation: portrait)");on(i,()=>c())}return{width:r,height:l}}var ih=R({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=A(()=>{const s=["font-icon icon"],a=`fas fa-${n.icon}`;return s.push("fa-fw fa-sm"),s.push(n.icon.includes(" ")?n.icon:a),s}),t=A(()=>{const s={};return n.color&&(s.color=n.color),n.size&&(s["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),Ee(s).length?s:null});return()=>n.icon?p("span",{key:n.icon,class:e.value,style:t.value}):null}});const an=({name:n="",color:e="currentColor"},{slots:t})=>{var s;return p("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(s=t.default)==null?void 0:s.call(t))};an.displayName="IconBase";const es=({size:n=48,stroke:e=4,wrapper:t=!0,height:s=2*n})=>{const a=p("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[p("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),p("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[p("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),p("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?p("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},a):a};es.displayName="LoadingIcon";const fc=(n,{slots:e})=>{var t;return(t=e.default)==null?void 0:t.call(e)},Cr=()=>p(an,{name:"github"},()=>p("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Cr.displayName="GitHubIcon";const Sr=()=>p(an,{name:"gitlab"},()=>p("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Sr.displayName="GitLabIcon";const Pr=()=>p(an,{name:"gitee"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Pr.displayName="GiteeIcon";const Lr=()=>p(an,{name:"bitbucket"},()=>p("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Lr.displayName="BitbucketIcon";const Or=()=>p(an,{name:"source"},()=>p("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Or.displayName="SourceIcon";function ch(){const n=K(!1),e=Dt();return e&&mn(()=>{n.value=!0},e),n}function uh(n){return ch(),A(()=>!!n())}const dh=()=>uh(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),mh=()=>{const n=dh();return A(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},hh=n=>/\b(?:Android|iPhone)/i.test(n),Eh=n=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(n),gc=n=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(e=>e.test(n)),kh=n=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(e=>e.test(n)),fh=n=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(e=>e.test(n)),$a=(n,e)=>{let t=1;for(let s=0;s<n.length;s++)t+=n.charCodeAt(s),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%e};let gh=class{constructor(){this.messageElements={};const e="message-container",t=document.getElementById(e);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,t=2e3){const s=document.createElement("div"),a=Date.now();return s.className="message move-in",s.innerHTML=e,this.containerElement.appendChild(s),this.messageElements[a]=s,t>0&&setTimeout(()=>{this.close(a)},t),a}close(e){if(e){const t=this.messageElements[e];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[e]})}else Ee(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const bc=/#.*$/u,bh=n=>{const e=bc.exec(n);return e?e[0]:""},mp=n=>decodeURI(n).replace(bc,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),vc=(n,e)=>{if(!Ar(e))return!1;const t=mp(n.path),s=mp(e),a=bh(e);return a?a===n.hash&&(!s||t===s):t===s},vh=n=>Ge(n)?n:`https://github.com/${n}`,Rr=n=>!Ge(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null;var Ah=n=>Object.prototype.toString.call(n)==="[object Object]",Ss=n=>typeof n=="string";const Ac=Array.isArray,hp=n=>Ah(n)&&Ss(n.name),Ps=(n,e=!1)=>n?Ac(n)?n.map(t=>Ss(t)?{name:t}:hp(t)?t:null).filter(t=>t!==null):Ss(n)?[{name:n}]:hp(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],yc=(n,e)=>{if(n){if(Ac(n)&&n.every(Ss))return n;if(Ss(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},_c=n=>yc(n,"category"),Bc=n=>yc(n,"tag"),Ep=n=>Dn(n)?n:`${n}px`,yh=(n,e=0)=>{const t=En(),s=A(()=>Ep(ve(n.width)||"100%")),a=K("auto"),o=c=>{if(Dn(c)){const[i,u]=c.split(":"),d=Number(i)/Number(u);if(!Number.isNaN(d))return d}return typeof c=="number"?c:16/9},r=c=>{const i=ve(n.height),u=o(ve(n.ratio));return i?Ep(i):`${Number(c)/u+ve(e)}px`},l=()=>{t.value&&(a.value=r(t.value.clientWidth))};return mn(()=>{l(),Vn(e)&&on(e,l),yn("orientationchange",l),yn("resize",l)}),{el:t,width:s,height:a,resize:l}},_h=n=>Ge(n)?n:wn(n);var Bh={"/":{hint:"<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>"}};const uo=n=>{console.error(`[PDF]: ${n}`)},wh=n=>{for(;n.firstChild;)n.removeChild(n.firstChild)},xh=n=>n==="string"?document.querySelector(n):n instanceof HTMLElement?n:document.body,Dh=n=>{let e="";return n&&(e+=Ke(n).map(([t,s])=>t==="noToolbar"?`toolbar=${s?0:1}`:`${encodeURIComponent(t)}=${encodeURIComponent(s)}`).join("&"),e&&(e=`#${e.slice(0,e.length-1)}`)),e},Ch=(n,e,t,s,a)=>{wh(e);const o=`${n==="pdfjs"?`${hr(wn(null))}web/viewer.html?file=${encodeURIComponent(t)}`:t}${Dh(s)}`,r=n==="pdfjs"||n==="iframe"?"iframe":"embed",l=document.createElement(r);return l.className="pdf-viewer",l.type="application/pdf",l.title=a,l.src=o,l instanceof HTMLIFrameElement&&(l.allow="fullscreen"),e.classList.add("pdf-viewer-container"),e.appendChild(l),e.getElementsByTagName(r)[0]},Sh=(n,e,{title:t,hint:s,options:a={}})=>{var g,y;if(typeof window>"u"||!((g=window==null?void 0:window.navigator)!=null&&g.userAgent))return null;const{navigator:o}=window,{userAgent:r}=o,l=Ar(window.Promise),c=gc(r)||hh(r),i=!c&&Eh(r),u=!c&&/firefox/iu.test(r)&&r.split("rv:").length>1?parseInt(r.split("rv:")[1].split(".")[0],10)>18:!1,d=!c&&(l||u);if(!Dn(n))return uo("URL is not valid"),null;const h=xh(e);if(!h)return uo("Target element cannot be determined"),null;const E=t||((y=/\/([^/]+).pdf/.exec(n))==null?void 0:y[1])||"PDF Viewer";return d||!c?Ch(i?"iframe":"embed",h,n,a,E):(h.innerHTML=s.replace(/\[url\]/g,n),uo("This browser does not support embedded PDFs"),null)};var Ph=R({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(n){const{el:e,width:t,height:s,resize:a}=yh(n),o=xe(Bh);return mn(()=>{Sh(_h(n.url),e.value,{title:n.title,hint:o.value.hint,options:{page:n.page,noToolbar:n.noToolbar,zoom:n.zoom}}),a()}),()=>p("div",{class:"pdf-viewer-wrapper",ref:e,style:{width:t.value,height:s.value}})}}),Lh={"/":{source:"源代码"}},Oh=R({name:"SiteInfo",components:{BitbucketIcon:Lr,GiteeIcon:Pr,GitHubIcon:Cr,GitLabIcon:Sr,SourceIcon:Or},props:{name:{type:String,required:!0},desc:{type:String,default:""},logo:{type:String,default:""},url:{type:String,required:!0},preview:{type:String,required:!0},repo:{type:String,default:""}},setup(n){const e=xe(Lh),t=A(()=>n.repo?Rr(n.repo):null);return()=>p("div",{class:"vp-site-info","data-name":n.name},[p("a",{class:"vp-site-info-navigator",title:n.name,href:n.url,target:"_blank"}),p("div",{class:"vp-site-info-preview",style:{background:`url(${wn(n.preview)}) center/cover no-repeat`}}),p("div",{class:"vp-site-info-detail"},[n.logo?p("img",{class:"vp-site-info-logo",src:n.logo,alt:"",loading:"lazy","no-view":""}):null,p("div",{class:"vp-site-info-name"},n.name),p("div",{class:"vp-site-info-desc"},n.desc)]),n.repo?p("div",{class:"vp-site-info-source-wrapper"},p("a",{class:"vp-site-info-source",href:n.repo,"aria-label":e.value.source,"data-balloon-pos":"left",title:e.value.source,target:"_blank"},p(se(`${t.value}Icon`)))):null])}});const wc=({title:n,desc:e="",logo:t,background:s,color:a,link:o})=>{const r=[t?p("img",{class:"vp-card-logo",src:wn(t),loading:"lazy","no-view":""}):null,p("div",{class:"vp-card-content"},[p("div",{class:"vp-card-title",innerHTML:n}),p("hr"),p("div",{class:"vp-card-desc",innerHTML:e})])],l={};return s&&(l.background=s),a&&(l.color=a),o?Kt(o)?p("a",{class:"vp-card",href:o,target:"_blank",style:l},r):p(Rn,{to:o,class:"vp-card",style:l},()=>r):p("div",{class:"vp-card",style:l},r)};wc.displayName="VPCard";const Rh=re({enhance:({app:n})=>{te("FontIcon")||n.component("FontIcon",ih),te("PDF")||n.component("PDF",Ph),te("SiteInfo")||n.component("SiteInfo",Oh),te("VPCard")||n.component("VPCard",wc)},setup:()=>{co("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),co("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),co("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[]}),kp=async(n,e)=>{const{path:t,query:s}=n.currentRoute.value,{scrollBehavior:a}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:t,query:s,hash:e}),n.options.scrollBehavior=a},Th=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:s=5})=>{const a=je();yn("scroll",Br(()=>{var g,y;const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r-0)<s){kp(a,"");return}const c=window.innerHeight+r,i=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(i-c)<s,d=Array.from(document.querySelectorAll(n)),E=Array.from(document.querySelectorAll(e)).filter(_=>d.some(b=>b.hash===_.hash));for(let _=0;_<E.length;_++){const b=E[_],x=E[_+1],v=r>=(((g=b.parentElement)==null?void 0:g.offsetTop)??0)-s,D=!x||r<(((y=x.parentElement)==null?void 0:y.offsetTop)??0)-s;if(!(v&&D))continue;const w=decodeURIComponent(a.currentRoute.value.hash),F=decodeURIComponent(b.hash);if(w===F)return;if(u){for(let O=_+1;O<E.length;O++)if(w===decodeURIComponent(E[O].hash))return}kp(a,F);return}},t))},Fh=".vp-sidebar-link, .toc-link",Ih=".header-anchor",Nh=200,Vh=5,Mh=re({setup(){Th({headerLinkSelector:Fh,headerAnchorSelector:Ih,delay:Nh,offset:Vh})}});let xc=n=>Dn(n.title)?{title:n.title}:null;const Dc=Symbol(""),$h=n=>{xc=n},Uh=()=>kn(Dc),Hh=n=>{n.provide(Dc,xc)};var zh={"/":{title:"目录",empty:"暂无目录"}};const Gh=R({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(n){const e=Uh(),t=xe(zh),s=gn(),a=r8(),o=nc(),l=En(Ke(a.value).map(([i,{meta:u}])=>{const d=e(u);if(!d)return null;const h=i.split("/").length;return{level:S8(i,"/")?h-2:h-1,base:i.replace(/\/[^/]+\/?$/,"/"),path:i,...d}}).filter(i=>rt(i)&&Dn(i.title))),c=A(()=>{const i=n.base?K1(hr(n.base)):s.value.path.replace(/\/[^/]+$/,"/"),u=i.split("/").length-2,d=[];return l.value.filter(({level:h,path:E})=>{if(!Cs(E,i)||E===i)return!1;if(i==="/"){const g=Ee(o.value.locales).filter(y=>y!=="/");if(E==="/404.html"||g.some(y=>Cs(E,y)))return!1}return h-u<=n.level}).sort(({title:h,level:E,order:g},{title:y,level:_,order:b})=>{const x=E-_;return x||(po(g)?po(b)?g>0?b>0?g-b:-1:b<0?g-b:1:g:po(b)?b:h.localeCompare(y))}).forEach(h=>{var y;const{base:E,level:g}=h;switch(g-u){case 1:{d.push(h);break}case 2:{const _=d.find(b=>b.path===E);_&&(_.children??(_.children=[])).push(h);break}default:{const _=d.find(b=>b.path===E.replace(/\/[^/]+\/$/,"/"));if(_){const b=(y=_.children)==null?void 0:y.find(x=>x.path===E);b&&(b.children??(b.children=[])).push(h)}}}}),d});return()=>{const i=c.value.some(u=>u.children);return p("div",{class:["vp-catalog-wrapper",{index:n.index}]},[n.hideHeading?null:p("h2",{class:"vp-catalog-main-title"},t.value.title),c.value.length?p(n.index?"ol":"ul",{class:["vp-catalogs",{deep:i}]},c.value.map(({children:u=[],title:d,path:h,content:E})=>{const g=p(Rn,{class:"vp-catalog-title",to:h},()=>E?p(E):d);return p("li",{class:"vp-catalog"},i?[p("h3",{id:d,class:["vp-catalog-child-title",{"has-children":u.length}]},[p("a",{href:`#${d}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),g]),u.length?p(n.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:y=[],content:_,path:b,title:x})=>p("li",{class:"vp-child-catalog"},[p("div",{class:["vp-catalog-sub-title",{"has-children":y.length}]},[p("a",{href:`#${x}`,class:"vp-catalog-header-anchor"},"#"),p(Rn,{class:"vp-catalog-title",to:b},()=>_?p(_):x)]),y.length?p(n.index?"ol":"div",{class:n.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},y.map(({content:v,path:D,title:N})=>n.index?p("li",{class:"vp-sub-catalog"},p(Rn,{to:D},()=>v?p(v):N)):p(Rn,{class:"vp-sub-catalog-link",to:D},()=>v?p(v):N))):null]))):null]:p("div",{class:"vp-catalog-child-title"},g))})):p("p",{class:"vp-empty-catalog"},t.value.empty)])}}}),jh=re({enhance:({app:n})=>{Hh(n),te("Catalog",n)||n.component("Catalog",Gh)}});var Kh={"/":{backToTop:"返回顶部"}};const Wh=R({name:"BackToTop",setup(n){const e=bn(),t=xe(Kh),s=En(),{height:a}=ah(s),{height:o}=ph(),{y:r}=lh(),l=A(()=>e.value.backToTop!==!1&&r.value>100),c=A(()=>r.value/(a.value-o.value)*100);return mn(()=>{s.value=document.body}),()=>p(it,{name:"back-to-top"},()=>l.value?p("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[p("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":c.value},p("svg",p("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),p("div",{class:"back-to-top-icon"})]):null)}}),qh=re({rootComponents:[Wh]}),Qh=p("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[p("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),p("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Cc=R({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=Fe(),t=A(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>p("span",[Qh,p("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}});var Zh={};const Yh=Zh,Jh=re({enhance({app:n}){n.component("ExternalLinkIcon",p(Cc,{locales:Yh}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const un={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=un.isStarted();n=mo(n,un.settings.minimum,1),un.status=n===1?null:n;const t=un.render(!e),s=t.querySelector(un.settings.barSelector),a=un.settings.speed,o=un.settings.easing;return t.offsetWidth,Xh(r=>{la(s,{transform:"translate3d("+fp(n)+"%,0,0)",transition:"all "+a+"ms "+o}),n===1?(la(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){la(t,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){un.remove(),r()},a)},a)):setTimeout(()=>r(),a)}),un},isStarted:()=>typeof un.status=="number",start:()=>{un.status||un.set(0);const n=()=>{setTimeout(()=>{un.status&&(un.trickle(),n())},un.settings.trickleSpeed)};return un.settings.trickle&&n(),un},done:n=>!n&&!un.status?un:un.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=un.status;return e?(typeof n!="number"&&(n=(1-e)*mo(Math.random()*e,.1,.95)),e=mo(e+n,0,.994),un.set(e)):un.start()},trickle:()=>un.inc(Math.random()*un.settings.trickleRate),render:n=>{if(un.isRendered())return document.getElementById("nprogress");gp(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=un.settings.template;const t=e.querySelector(un.settings.barSelector),s=n?"-100":fp(un.status||0),a=document.querySelector(un.settings.parent);return la(t,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),a!==document.body&&gp(a,"nprogress-custom-parent"),a==null||a.appendChild(e),e},remove:()=>{bp(document.documentElement,"nprogress-busy"),bp(document.querySelector(un.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&nE(n)},isRendered:()=>!!document.getElementById("nprogress")},mo=(n,e,t)=>n<e?e:n>t?t:n,fp=n=>(-1+n)*100,Xh=function(){const n=[];function e(){const t=n.shift();t&&t(e)}return function(t){n.push(t),n.length===1&&e()}}(),la=function(){const n=["Webkit","O","Moz","ms"],e={};function t(r){return r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,c){return c.toUpperCase()})}function s(r){const l=document.body.style;if(r in l)return r;let c=n.length;const i=r.charAt(0).toUpperCase()+r.slice(1);let u;for(;c--;)if(u=n[c]+i,u in l)return u;return r}function a(r){return r=t(r),e[r]??(e[r]=s(r))}function o(r,l,c){l=a(l),r.style[l]=c}return function(r,l){for(const c in l){const i=l[c];i!==void 0&&Object.prototype.hasOwnProperty.call(l,c)&&o(r,c,i)}}}(),Sc=(n,e)=>(typeof n=="string"?n:Tr(n)).indexOf(" "+e+" ")>=0,gp=(n,e)=>{const t=Tr(n),s=t+e;Sc(t,e)||(n.className=s.substring(1))},bp=(n,e)=>{const t=Tr(n);if(!Sc(n,e))return;const s=t.replace(" "+e+" "," ");n.className=s.substring(1,s.length-1)},Tr=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),nE=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)},eE=()=>{mn(()=>{const n=je(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(t=>{e.has(t.path)||un.start()}),n.afterEach(t=>{e.add(t.path),un.done()})})},tE=re({setup(){eE()}}),sE=JSON.parse('{"encrypt":{},"fullscreen":true,"author":{"name":"PaperDragon","url":"https://github.com/Paper-Dragon","email":"2678885646@qq.com"},"logo":"/logo.svg","repo":"https://github.com/Paper-Dragon/paper-dragon.github.io","docsDir":"src","docsBranch":"main","footer":"运维开发绿皮书","copyright":"copyleft 2023-至今 PaperDragon","displayFooter":true,"blog":{"timeline":"红了樱桃，绿了芭蕉"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 Github 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"使用指南","icon":"book","link":"/note-book/"},{"text":"免费服务","icon":"splotch","children":["/free-service/tools.md","/free-service/docker-hub-mirror.md","/free-service/cloudflare-warp.md","/free-service/github-direct.md"]},{"text":"时间线","icon":"history","link":"/timeline/"},{"text":"友链","icon":"link","link":"/about/friend.md","ariaLabel":"友链"},{"text":"博客联盟","icon":"circle-nodes","children":[{"text":"开往","icon":"subway","link":"https://www.travellings.cn/go.html","ariaLabel":"开往"}]},{"text":"关于我","icon":"address-card","link":"/about/me.md","ariaLabel":"关于我"}],"sidebar":{"/free-service/":["/",{"collapsible":true,"text":"本站免费服务","icon":"dollar-sign","children":"structure"}],"/PyQt5快速上手-王铭东/":["/note-book/",{"text":"PyQt5快速上手-王铭东","icon":"book","collapsible":true,"children":"structure"}],"/":["",{"text":"note-book","icon":"book","collapsible":true,"prefix":"note-book/","link":"note-book/","children":"structure"},{"text":"PyQt5快速上手-王铭东","icon":"book","collapsible":true,"prefix":"PyQt5快速上手-王铭东/","link":"PyQt5快速上手-王铭东/","children":"structure"}]}}}}'),aE=K(sE),Pc=()=>aE,Lc=Symbol(""),oE=()=>{const n=kn(Lc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},rE=(n,e)=>{const{locales:t,...s}=n;return{...s,...t==null?void 0:t[e]}},lE=re({enhance({app:n}){const e=Pc(),t=n._context.provides[gr],s=A(()=>rE(e.value,t.routeLocale.value));n.provide(Lc,s),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return s.value}}})}}),pE="3.1.2",iE={"Content-Type":"application/json"},Oc=n=>`${n.replace(/\/?$/,"/")}api/`,Rc=(n,e="")=>{if(typeof n=="object"&&n.errno)throw new TypeError(`${e} failed with ${n.errno}: ${n.errmsg}`);return n},cE=({serverURL:n,lang:e,paths:t,type:s,signal:a})=>fetch(`${Oc(n)}article?path=${encodeURIComponent(t.join(","))}&type=${encodeURIComponent(s.join(","))}&lang=${e}`,{signal:a}).then(o=>o.json()).then(o=>Rc(o,"Get counter").data),uE=({serverURL:n,lang:e,path:t,type:s,action:a})=>fetch(`${Oc(n)}article?lang=${e}`,{method:"POST",headers:iE,body:JSON.stringify({path:t,type:s,action:a})}).then(o=>o.json()).then(o=>Rc(o,"Update counter").data),dE=({serverURL:n,lang:e,paths:t,signal:s})=>cE({serverURL:n,lang:e,paths:t,type:["time"],signal:s}),mE=n=>uE({...n,type:"time",action:"inc"}),hE=(n="")=>n.replace(/\/$/u,""),EE=n=>/^(https?:)?\/\//.test(n),vp=n=>{const e=hE(n);return EE(e)?e:`https://${e}`},kE=n=>{n.name!=="AbortError"&&console.error(n.message)},Ap=n=>n.dataset.path||null,yp=(n,e)=>{e.forEach((t,s)=>{const a=n[s].time;typeof a=="number"&&(t.innerText=a.toString())})},Tc=({serverURL:n,path:e=window.location.pathname,selector:t=".waline-pageview-count",update:s=!0,lang:a=navigator.language})=>{const o=new AbortController,r=Array.from(document.querySelectorAll(t)),l=i=>{const u=Ap(i);return u!==null&&e!==u},c=i=>dE({serverURL:vp(n),paths:i.map(u=>Ap(u)||e),lang:a,signal:o.signal}).then(u=>yp(u,i)).catch(kE);if(s){const i=r.filter(d=>!l(d)),u=r.filter(l);mE({serverURL:vp(n),path:e,lang:a}).then(d=>yp(d,i)),u.length&&c(u)}else c(r);return o.abort.bind(o)},Df=Object.freeze(Object.defineProperty({__proto__:null,pageviewCount:Tc,version:pE},Symbol.toStringTag,{value:"Module"}));var fE={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.geekery.cn/"};const gE=fE;let bE=gE;const Fc=Symbol(""),Ic=()=>kn(Fc),vE=Ic,AE=n=>{n.provide(Fc,bE)};var yE={"/":{placeholder:"请留言。(填写邮箱可在被回复时收到邮件提醒)"}};const _E=yE;m(()=>import("./waline-meta-l0sNRNKZ.js"),__vite__mapDeps([]));var BE=R({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(n){const e=vE(),t=bn(),s=br(),a=xe(_E);let o;const r=!!e.serverURL,l=A(()=>{if(!r)return!1;const i=e.pageview!==!1,u=t.value.pageview;return!!u||i!==!1&&u!==!1}),c=A(()=>({lang:s.value==="zh-CN"?"zh-CN":"en",locale:a.value,dark:"html.dark",...e,path:n.identifier}));return mn(()=>{on(()=>n.identifier,()=>{o==null||o(),l.value&&Be().then(()=>{setTimeout(()=>{o=Tc({serverURL:e.serverURL,path:n.identifier})},e.delay||800)})},{immediate:!0})}),()=>r?p("div",{id:"comment",class:"waline-wrapper"},p(cr({loader:async()=>(await m(()=>import("./component-Bl2q1iWq.js"),__vite__mapDeps([]))).Waline,loadingComponent:es}),c.value)):null}}),wE=R({name:"CommentService",props:{darkmode:Boolean},setup(n){const e=Ic(),t=gn(),s=bn(),a=e.comment!==!1,o=A(()=>s.value.comment||a&&s.value.comment!==!1);return()=>p(BE,{identifier:s.value.commentID||t.value.path,darkmode:n.darkmode,style:{display:o.value?"block":"none"}})}}),xE=re({enhance:({app:n})=>{AE(n),n.component("CommentService",wE)}});const DE=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,CE=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&DE.test(navigator.userAgent),ho=new Map,SE=({delay:n=500,duration:e=2e3,locales:t,selector:s,showInMobile:a})=>{const{copy:o}=Q8({legacy:!0}),r=xe(t),l=gn(),c=d=>{if(!d.hasAttribute("copy-code-registered")){const h=document.createElement("button");h.type="button",h.classList.add("vp-copy-code-button"),h.innerHTML='<div class="vp-copy-icon" />',h.setAttribute("aria-label",r.value.copy),h.setAttribute("data-copied",r.value.copied),d.parentElement&&d.parentElement.insertBefore(h,d),d.setAttribute("copy-code-registered","")}},i=()=>{Be().then(()=>cc(n)).then(()=>{s.forEach(d=>{document.querySelectorAll(d).forEach(c)})})},u=(d,h,E)=>{let{innerText:g=""}=h;/language-(shellscript|shell|bash|sh|zsh)/.test(d.classList.toString())&&(g=g.replace(/^ *(\$|>) /gm,"")),o(g).then(()=>{E.classList.add("copied"),clearTimeout(ho.get(E));const y=setTimeout(()=>{E.classList.remove("copied"),E.blur(),ho.delete(E)},e);ho.set(E,y)})};mn(()=>{const d=!CE()||a;d&&i(),yn("click",h=>{const E=h.target;if(E.matches('div[class*="language-"] > button.copy')){const g=E.parentElement,y=E.nextElementSibling;y&&u(g,y,E)}else if(E.matches('div[class*="language-"] div.vp-copy-icon')){const g=E.parentElement,y=g.parentElement,_=g.nextElementSibling;_&&u(y,_,g)}}),on(()=>l.value.path,()=>{d&&i()})})};var PE={"/":{copy:"复制代码",copied:"已复制"}},LE=['.theme-hope-content div[class*="language-"] pre'];const OE=500,RE=2e3,TE=PE,FE=LE,IE=!1,NE=re({setup:()=>{SE({selector:FE,locales:TE,duration:RE,delay:OE,showInMobile:IE})}}),pa=Ma("VUEPRESS_CODE_TAB_STORE",{});var VE=R({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const t=K(n.active),s=En([]),a=()=>{n.tabId&&(pa.value[n.tabId]=n.data[t.value].id)},o=(i=t.value)=>{t.value=i<s.value.length-1?i+1:0,s.value[t.value].focus()},r=(i=t.value)=>{t.value=i>0?i-1:s.value.length-1,s.value[t.value].focus()},l=(i,u)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),t.value=u):i.key==="ArrowRight"?(i.preventDefault(),o()):i.key==="ArrowLeft"&&(i.preventDefault(),r()),n.tabId&&(pa.value[n.tabId]=n.data[t.value].id)},c=()=>{if(n.tabId){const i=n.data.findIndex(({id:u})=>pa.value[n.tabId]===u);if(i!==-1)return i}return n.active};return mn(()=>{t.value=c(),on(()=>pa.value[n.tabId],(i,u)=>{if(n.tabId&&i!==u){const d=n.data.findIndex(({id:h})=>h===i);d!==-1&&(t.value=d)}})}),()=>n.data.length?p("div",{class:"vp-code-tabs"},[p("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:i},u)=>{const d=u===t.value;return p("button",{type:"button",ref:h=>{h&&(s.value[u]=h)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${n.id}-${u}`,"aria-selected":d,onClick:()=>{t.value=u,a()},onKeydown:h=>l(h,u)},e[`title${u}`]({value:i,isActive:d}))})),n.data.map(({id:i},u)=>{const d=u===t.value;return p("div",{class:["vp-code-tab",{active:d}],id:`codetab-${n.id}-${u}`,role:"tabpanel","aria-expanded":d},[p("div",{class:"vp-code-tab-title"},e[`title${u}`]({value:i,isActive:d})),e[`tab${u}`]({value:i,isActive:d})])})]):null}});const Nc=({active:n=!1},{slots:e})=>{var t;return p("div",{class:["code-group-item",{active:n}],"aria-selected":n},(t=e.default)==null?void 0:t.call(e))};Nc.displayName="CodeGroupItem";const ME=R({name:"CodeGroup",slots:Object,setup(n,{slots:e}){const t=K(-1),s=En([]),a=(l=t.value)=>{t.value=l<s.value.length-1?l+1:0,s.value[t.value].focus()},o=(l=t.value)=>{t.value=l>0?l-1:s.value.length-1,s.value[t.value].focus()},r=(l,c)=>{l.key===" "||l.key==="Enter"?(l.preventDefault(),t.value=c):l.key==="ArrowRight"?(l.preventDefault(),a(c)):l.key==="ArrowLeft"&&(l.preventDefault(),o(c))};return()=>{var c;const l=(((c=e.default)==null?void 0:c.call(e))||[]).filter(i=>i.type.name==="CodeGroupItem").map(i=>(i.props===null&&(i.props={}),i));return l.length===0?null:(t.value<0||t.value>l.length-1?(t.value=l.findIndex(i=>"active"in i.props),t.value===-1&&(t.value=0)):l.forEach((i,u)=>{i.props.active=u===t.value}),p("div",{class:"code-group"},[p("div",{class:"code-group-nav"},l.map((i,u)=>{const d=u===t.value;return p("button",{type:"button",ref:h=>{h&&(s.value[u]=h)},class:["code-group-nav-tab",{active:d}],"aria-pressed":d,"aria-expanded":d,onClick:()=>{t.value=u},onKeydown:h=>r(h,u)},i.props.title)})),l]))}}}),$E='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',UE='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',HE='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var zE={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const Eo=zE,_p={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},GE=(n,e,t)=>{const s=document.createElement(n);return rt(e)&&Ee(e).forEach(a=>{if(a.indexOf("data"))s[a]=e[a];else{const o=a.replace("data","");s.dataset[o]=e[a]}}),t&&t.forEach(a=>{s.appendChild(a)}),s},Fr=n=>({...Eo,...n,jsLib:Array.from(new Set([...Eo.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...Eo.cssLib||[],...n.cssLib||[]]))}),Vt=(n,e)=>{if(Ar(n[e]))return n[e];const t=new Promise(s=>{var o;const a=document.createElement("script");a.src=e,(o=document.querySelector("body"))==null||o.appendChild(a),a.onload=()=>{s()}});return n[e]=t,t},jE=(n,e)=>{if(e.css&&Array.from(n.childNodes).every(t=>t.nodeName!=="STYLE")){const t=GE("style",{innerHTML:e.css});n.appendChild(t)}},KE=(n,e,t)=>{const s=t.getScript();if(s&&Array.from(e.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${n} .vp-code-demo-display').shadowRoot;
${s}}`)),e.appendChild(a)}},WE=n=>{const e=Ee(n),t={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(s=>{const a=e.filter(o=>_p[s].types.includes(o));if(a.length){const o=a[0];t[s]=[n[o].replace(/^\n|\n$/g,""),_p[s].map[o]||o]}}),t.isLegal=(!t.html.length||t.html[1]==="none")&&(!t.js.length||t.js[1]==="none")&&(!t.css.length||t.css[1]==="none"),t},Vc=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Mc=n=>`<div id="app">
${Vc(n)}
</div>`,qE=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,QE=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),$c=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,ZE=(n,e)=>{const t=Fr(e),s=n.js[0]||"";return{...t,html:Vc(n.html[0]||""),js:s,css:n.css[0]||"",isLegal:n.isLegal,getScript:()=>{var a;return t.useBabel?((a=window.Babel.transform(s,{presets:["es2015"]}))==null?void 0:a.code)||"":s}}},YE=/<template>([\s\S]+)<\/template>/u,JE=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,XE=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,nk=(n,e)=>{const t=Fr(e),s=n.html[0]||"",a=YE.exec(s),o=JE.exec(s),r=XE.exec(s),l=a?a[1].replace(/^\n|\n$/g,""):"",[c="",i=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[u="",d=""]=r?[r[4].replace(/^\n|\n$/g,""),r[3]]:[],h=i===""&&(d===""||d==="css");return{...t,html:Mc(l),js:QE(c),css:u,isLegal:h,jsLib:[t.vue,...t.jsLib],getScript:()=>{var g,y;const E=e.useBabel?((y=(g=window.Babel)==null?void 0:g.transform(c,{presets:["es2015"]}))==null?void 0:y.code)||"":c.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${$c(E)};appOptions.template=\`${l.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},ek=(n,e)=>{const t=Fr(e);return{...t,html:Mc(""),js:qE(n.js[0]||""),css:n.css[0]||(n.js[0]?n.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:n.isLegal,jsLib:[t.react,t.reactDOM,...t.jsLib],jsx:!0,getScript:()=>{var a,o;const s=((o=(a=window.Babel)==null?void 0:a.transform(n.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${$c(s)}))`}}},Mt={},tk=n=>Promise.all([Vt(Mt,n.babel),Vt(Mt,n.react),Vt(Mt,n.reactDOM)]),sk=n=>{const e=[Vt(Mt,n.vue)];return n.useBabel&&e.push(Vt(Mt,n.babel)),Promise.all(e)},ak=n=>n.useBabel?Vt(Mt,n.babel):Promise.resolve();var ok=R({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const[t,s]=Ba(!1),a=En(),o=En(),r=K("0"),l=K(!1),c=A(()=>JSON.parse(n.config?ya(n.config):"{}")),i=A(()=>{const g=JSON.parse(ya(n.code));return WE(g)}),u=A(()=>n.type==="react"?ek(i.value,c.value):n.type==="vue"?nk(i.value,c.value):ZE(i.value,c.value)),d=A(()=>u.value.isLegal),h=(g=!1)=>{const y=a.value.attachShadow({mode:"open"}),_=document.createElement("div");_.classList.add("code-demo-app"),y.appendChild(_),d.value?(g&&(_.innerHTML=u.value.html),jE(y,u.value),KE(n.id,y,u.value),r.value="0"):r.value="auto",l.value=!0},E=()=>{switch(n.type){case"react":return tk(u.value).then(()=>h());case"vue":return sk(u.value).then(()=>h());default:return ak(u.value).then(()=>h(!0))}};return yn("beforeprint",()=>{s(!0)}),mn(()=>{setTimeout(()=>{E()},800)}),()=>{var g;return p("div",{class:"vp-code-demo",id:n.id},[p("div",{class:"vp-code-demo-header"},[u.value.isLegal?p("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",t.value?"down":"end"],onClick:()=>{r.value=t.value?"0":`${o.value.clientHeight+13.8}px`,s()}}):null,n.title?p("span",{class:"vp-code-demo-title"},decodeURIComponent(n.title)):null,u.value.isLegal&&u.value.jsfiddle!==!1?p("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[p("input",{type:"hidden",name:"html",value:u.value.html}),p("input",{type:"hidden",name:"js",value:u.value.js}),p("input",{type:"hidden",name:"css",value:u.value.css}),p("input",{type:"hidden",name:"wrap",value:"1"}),p("input",{type:"hidden",name:"panel_js",value:"3"}),p("input",{type:"hidden",name:"resources",value:[...u.value.cssLib,...u.value.jsLib].join(",")}),p("button",{type:"submit",class:"jsfiddle-button",innerHTML:UE,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!u.value.isLegal||u.value.codepen!==!1?p("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[p("input",{type:"hidden",name:"data",value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(";"),css_external:u.value.cssLib.join(";"),layout:u.value.codepenLayout,html_pre_processor:i.value?i.value.html[1]:"none",js_pre_processor:i.value?i.value.js[1]:u.value.jsx?"babel":"none",css_pre_processor:i.value?i.value.css[1]:"none",editors:u.value.codepenEditors})}),p("button",{type:"submit",innerHTML:$E,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),l.value?null:p(es,{class:"vp-code-demo-loading"}),p("div",{ref:a,class:"vp-code-demo-display",style:{display:d.value&&l.value?"block":"none"}}),p("div",{class:"vp-code-demo-code-wrapper",style:{height:r.value}},p("div",{ref:o,class:"vp-code-demo-codes"},(g=e.default)==null?void 0:g.call(e)))])}}}),rk=R({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const[t,s]=Ba(!1),a=En(),o=K("0");return yn("beforeprint",()=>{s(!0)}),()=>{var r,l;return p("div",{class:"vp-md-demo",id:n.id},[p("div",{class:"vp-md-demo-header"},[p("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",t.value?"down":"end"],onClick:()=>{o.value=t.value?"0":`${a.value.clientHeight+13.8}px`,s()}}),n.title?decodeURIComponent(n.title):null]),p("div",{class:"vp-md-demo-display"},(r=e.default)==null?void 0:r.call(e)),p("div",{class:"vp-md-demo-code-wrapper",style:{height:o.value}},p("div",{ref:a,class:"vp-md-demo-codes"},(l=e.code)==null?void 0:l.call(e)))])}}});let Uc={};const Hc=Symbol(""),lk=n=>{Uc=n},pk=()=>kn(Hc),ik=n=>{n.provide(Hc,Uc)},ck=(async()=>{}).constructor,uk=(n,e,t)=>e==="js"?ck("myChart",`let width,height,option,__echarts_config__;
{
${n}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(t):Promise.resolve({option:JSON.parse(n)});var dk=R({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const e=pk(),t=K(!0),s=En();let a;return yn("resize",Br(()=>a==null?void 0:a.resize(),100)),mn(()=>{Promise.all([m(()=>import("./index-BPciVx7c.js"),__vite__mapDeps([409,410])),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{var c;await((c=e.setup)==null?void 0:c.call(e)),a=o.init(s.value);const{option:r,...l}=await uk(ya(n.config),n.type,a);a.resize(l),a.setOption({...e.option,...r}),t.value=!1})}),dt(()=>{a==null||a.dispose()}),()=>[n.title?p("div",{class:"echarts-title"},decodeURIComponent(n.title)):null,p("div",{class:"echarts-wrapper"},[p("div",{ref:s,class:"echarts-container",id:n.id}),t.value?p(es,{class:"echarts-loading",height:360}):null])]}}),Ir={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},mk={...Ir,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},hk={...Ir,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},Ek={...Ir,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const Bp={ant:mk,vue:Ek,pie:hk},kk={autoResize:!0,showCompileOutput:!1,clearConsole:!1,layout:"horizontal",ssr:!1};let fk=kk;const zc=Symbol(""),gk=()=>kn(zc),bk=n=>{n.provide(zc,fk)};var vk=R({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(n){let e=null;const t=En(),s=K(!0),a=K(1),o=A(()=>Bp[n.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${n.preset}`),Bp.vue)),r=l=>l<419?.8:l>1280?1:.9;return mn(()=>{Promise.all([m(()=>import("./flowchart-966sEcGG.js"),__vite__mapDeps([])),new Promise(l=>setTimeout(l,800))]).then(([{parse:l}])=>{e=l(ya(n.code)),a.value=r(window.innerWidth),s.value=!1,e.draw(n.id,{...o.value,scale:a.value})}),yn("resize",Br(()=>{if(e){const l=r(window.innerWidth);a.value!==l&&(a.value=l,e.draw(n.id,{...o.value,scale:l}))}},100))}),()=>[s.value?p(es,{class:"flowchart-loading",height:192}):null,p("div",{ref:t,class:["flowchart-wrapper",n.preset],id:n.id,style:{display:s.value?"none":"block"}})]}});const Ak=()=>{yn("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})})},Gc=({title:n="",link:e})=>p("div",{class:"vp-playground"},[p("div",{class:"vp-playground-header"},[n?p("div",{class:"vp-playground-title"},decodeURIComponent(n)):null,p("div",{class:"vp-playground-actions"},[p("a",{class:"vp-playground-action",href:decodeURIComponent(e),target:"_blank",innerHTML:HE})])]),p("div",{class:"vp-playground-container"},p("iframe",{src:decodeURIComponent(e)}))]);Gc.displayName="Playground";const ko=Ma("VUEPRESS_TAB_STORE",{});var yk=R({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const t=K(n.active),s=En([]),a=()=>{n.tabId&&(ko.value[n.tabId]=n.data[t.value].id)},o=(i=t.value)=>{t.value=i<s.value.length-1?i+1:0,s.value[t.value].focus()},r=(i=t.value)=>{t.value=i>0?i-1:s.value.length-1,s.value[t.value].focus()},l=(i,u)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),t.value=u):i.key==="ArrowRight"?(i.preventDefault(),o()):i.key==="ArrowLeft"&&(i.preventDefault(),r()),a()},c=()=>{if(n.tabId){const i=n.data.findIndex(({id:u})=>ko.value[n.tabId]===u);if(i!==-1)return i}return n.active};return mn(()=>{t.value=c(),on(()=>ko.value[n.tabId],(i,u)=>{if(n.tabId&&i!==u){const d=n.data.findIndex(({id:h})=>h===i);d!==-1&&(t.value=d)}})}),()=>n.data.length?p("div",{class:"vp-tabs"},[p("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:i},u)=>{const d=u===t.value;return p("button",{type:"button",ref:h=>{h&&(s.value[u]=h)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${n.id}-${u}`,"aria-selected":d,onClick:()=>{t.value=u,a()},onKeydown:h=>l(h,u)},e[`title${u}`]({value:i,isActive:d}))})),n.data.map(({id:i},u)=>{const d=u===t.value;return p("div",{class:["vp-tab",{active:d}],id:`tab-${n.id}-${u}`,role:"tabpanel","aria-expanded":d},[p("div",{class:"vp-tab-title"},e[`title${u}`]({value:i,isActive:d})),e[`tab${u}`]({value:i,isActive:d})])})]):null}});const _k=n=>JSON.parse(decodeURIComponent(n));var Bk=R({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(n){const{vueVersion:e=Ri,vueRuntimeDevUrl:t=`https://unpkg.com/@vue/runtime-dom@${e}/dist/runtime-dom.esm-browser.js`,vueRuntimeProdUrl:s=`https://unpkg.com/@vue/runtime-dom@${e}/dist/runtime-dom.esm-browser.prod.js`,vueServerRendererUrl:a=`https://unpkg.com/@vue/server-renderer@${e}/dist/server-renderer.esm-browser.js`,...o}=gk(),r=K(!0),l=En(),c=En(),i=En(),u=A(()=>Io({},o,_k(n.settings))),d=async()=>{const[{useStore:h,useVueImportMap:E,Repl:g},{default:y}]=await Promise.all([m(()=>import("./vue-repl-Cbg9mBoi.js"),__vite__mapDeps([411,412])),m(()=>import("./codemirror-editor-Bm2nXh5i.js"),__vite__mapDeps([413,412]))]);l.value=g,i.value=y;const{importMap:_,vueVersion:b}=E({runtimeDev:t,runtimeProd:s,serverRenderer:a});c.value=h({builtinImportMap:_,vueVersion:b},decodeURIComponent(n.files))};return mn(async()=>{await d(),r.value=!1}),()=>[p("div",{class:"vue-playground-wrapper"},[n.title?p("div",{class:"header"},decodeURIComponent(n.title)):null,p("div",{class:"repl-container"},[r.value?p(es,{class:"preview-loading",height:192}):null,l.value?p(l.value,{...u.value,editor:i.value,store:c.value}):null])])]}});const wk=re({enhance:({app:n})=>{n.component("CodeTabs",VE),te("CodeGroup",n)||n.component("CodeGroup",ME),te("CodeGroupItem",n)||n.component("CodeGroupItem",Nc),n.component("CodeDemo",ok),n.component("MdDemo",rk),n.component("ECharts",dk),ik(n),n.component("FlowChart",vk),n.component("Playground",Gc),n.component("Tabs",yk),bk(n),n.component("VuePlayground",Bk)},setup:()=>{Ak()}});let xk={};const jc=Symbol(""),Dk=()=>kn(jc),Ck=n=>{n.provide(jc,xk)},Sk='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',Pk=n=>Dn(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),Kc=n=>new Promise((e,t)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(Kc(n)),n.onerror=s=>t(s))}),Lk=n=>{const{isSupported:e,toggle:t}=xr();n.on("uiRegister",()=>{e.value&&n.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),n.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(s,a)=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),a.on("change",()=>{s.setAttribute("href",a.currSlide.data.src)})}}),n.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(s,a)=>{const o=[];let r=-1;for(let l=0;l<a.getNumItems();l++){const c=document.createElement("div");c.className="photo-swipe-bullet",c.onclick=i=>{a.goTo(o.indexOf(i.target))},o.push(c),s.appendChild(c)}a.on("change",()=>{r>=0&&o[r].classList.remove("active"),o[a.currIndex].classList.add("active"),r=a.currIndex})}})})},Ok=(n,e,t=!0)=>m(()=>import("./photoswipe.esm-SzV8tJDW.js"),__vite__mapDeps([])).then(({default:s})=>{let a=null;const o=n.map(r=>({html:Sk,element:r,msrc:r.src}));return n.forEach((r,l)=>{const c=()=>{a==null||a.destroy(),a=new s({preloaderDelay:0,showHideAnimationType:"zoom",...e,dataSource:o,index:l,...t?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),Lk(a),a.addFilter("thumbEl",()=>r),a.addFilter("placeholderSrc",()=>r.src),a.init()};r.getAttribute("photo-swipe")||(r.style.cursor="zoom-in",r.addEventListener("click",()=>{c()}),r.addEventListener("keypress",({key:i})=>{i==="Enter"&&c()}),r.setAttribute("photo-swipe","")),Kc(r).then(i=>{o.splice(l,1,i),a==null||a.refreshSlideContent(l)})}),t?yn("wheel",()=>{a==null||a.close()}):()=>{}}),Rk=({selector:n,locales:e,delay:t=500,scrollToClose:s=!0})=>{const a=Dk(),o=xe(e),r=gn(),l=bn();let c=null;const i=()=>{const{photoSwipe:u}=l.value;u!==!1&&Be().then(()=>cc(t)).then(async()=>{const d=Dn(u)?u:n;c=await Ok(Pk(d),{...a,...o.value},s)})};mn(()=>{i(),on(()=>r.value.path,()=>{c==null||c(),i()})}),dt(()=>{c==null||c()})};var Tk={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const Fk=".theme-hope-content :not(a) > img:not([no-view])",Ik=Tk,Nk=800,Vk=!0,Mk=re({enhance:({app:n})=>{Ck(n)},setup:()=>{Rk({selector:Fk,delay:Nk,locales:Ik,scrollToClose:Vk})}}),$k=()=>p(an,{name:"heading"},()=>p("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));$k.displayName="HeadingIcon";const Uk=()=>p(an,{name:"heart"},()=>p("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Uk.displayName="HeartIcon";const Hk=()=>p(an,{name:"history"},()=>p("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));Hk.displayName="HistoryIcon";const zk=()=>p(an,{name:"title"},()=>p("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));zk.displayName="TitleIcon";const Nr=()=>p(an,{name:"search"},()=>p("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));Nr.displayName="SearchIcon";const Wc=()=>p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[p("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},p("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),p("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},p("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),p("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},p("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Wc.displayName="LoadingIcon";const qc=({hint:n})=>p("div",{class:"search-pro-result-wrapper loading"},[p(Wc),n]);qc.displayName="SearchLoading";const Gk='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';var jk={0:"分类: $content"},Kk={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",searching:"搜索中",defaultTitle:"文档",select:"选择",navigate:"切换",autocomplete:"自动补全",exit:"关闭",queryHistory:"搜索历史",resultHistory:"历史结果",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Wk={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro.worker.js"};const Qc=Wk,Cf=jk,Zc=Qc.hotKeys,Vr=Kk;new URL("data:text/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBPLGdldFN0b3JlZEZpZWxkcyBhcyBDLGF1dG9TdWdnZXN0IGFzIFQsbG9hZEpTT05JbmRleCBhcyAkfWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0IGIgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4LmpzIjtpbXBvcnR7ZW50cmllcyBhcyB3fWZyb20iQHZ1ZXByZXNzL2hlbHBlci9jbGllbnQiO2NvbnN0IFM9KGksZSk9Pntjb25zdCBsPWkudG9Mb3dlckNhc2UoKSxzPWUudG9Mb3dlckNhc2UoKSxuPVtdO2xldCB0PTAsYz0wO2NvbnN0IGE9KG8sZz0hMSk9PntsZXQgdT0iIjtjPT09MD91PW8ubGVuZ3RoPjIwP2DigKYgJHtvLnNsaWNlKC0yMCl9YDpvOmc/dT1vLmxlbmd0aCtjPjEwMD9gJHtvLnNsaWNlKDAsMTAwLWMpfeKApiBgOm86dT1vLmxlbmd0aD4yMD9gJHtvLnNsaWNlKDAsMjApfSDigKYgJHtvLnNsaWNlKC0yMCl9YDpvLHUmJm4ucHVzaCh1KSxjKz11Lmxlbmd0aCxnfHwobi5wdXNoKFsibWFyayIsZV0pLGMrPWUubGVuZ3RoLGM+PTEwMCYmbi5wdXNoKCIg4oCmIikpfTtsZXQgcD1sLmluZGV4T2Yocyx0KTtpZihwPT09LTEpcmV0dXJuIG51bGw7Zm9yKDtwPj0wOyl7Y29uc3Qgbz1wK3MubGVuZ3RoO2lmKGEoaS5zbGljZSh0LHApKSx0PW8sYz4xMDApYnJlYWs7cD1sLmluZGV4T2Yocyx0KX1yZXR1cm4gYzwxMDAmJmEoaS5zbGljZSh0KSwhMCksbn0sRT0oaSxlKT0+ZS5jb250ZW50cy5yZWR1Y2UoKGwsWyxzXSk9PmwrcywwKS1pLmNvbnRlbnRzLnJlZHVjZSgobCxbLHNdKT0+bCtzLDApLEY9KGksZSk9Pk1hdGgubWF4KC4uLmUuY29udGVudHMubWFwKChbLGxdKT0+bCkpLU1hdGgubWF4KC4uLmkuY29udGVudHMubWFwKChbLGxdKT0+bCkpLE09KGksZSxsPXt9KT0+e2NvbnN0IHM9e307cmV0dXJuIE8oZSxpLHtib29zdDp7aDoyLHQ6MSxjOjR9LHByZWZpeDohMCwuLi5sfSkuZm9yRWFjaChuPT57Y29uc3R7aWQ6dCx0ZXJtczpjLHNjb3JlOmF9PW4scD10LmluY2x1ZGVzKCJAIiksbz10LmluY2x1ZGVzKCIjIiksW2csdV09dC5zcGxpdCgvWyNAXS8pLGY9TnVtYmVyKGcpLG09Yy5zb3J0KChoLHIpPT5oLmxlbmd0aC1yLmxlbmd0aCkuZmlsdGVyKChoLHIpPT5jLnNsaWNlKHIrMSkuZXZlcnkoZD0+IWQuaW5jbHVkZXMoaCkpKSx7Y29udGVudHM6eX09c1tmXT8/PXt0aXRsZToiIixjb250ZW50czpbXX07aWYocCl5LnB1c2goW3t0eXBlOiJjdXN0b21GaWVsZCIsaWQ6ZixpbmRleDp1LGRpc3BsYXk6bS5tYXAoaD0+bi5jLm1hcChyPT5TKHIsaCkpKS5mbGF0KCkuZmlsdGVyKGg9PmghPT1udWxsKX0sYV0pO2Vsc2V7Y29uc3QgaD1tLm1hcChyPT5TKG4uaCxyKSkuZmlsdGVyKHI9PnIhPT1udWxsKTtpZihoLmxlbmd0aCYmeS5wdXNoKFt7dHlwZTpvPyJoZWFkaW5nIjoidGl0bGUiLGlkOmYsLi4ubyYme2FuY2hvcjp1fSxkaXNwbGF5Omh9LGFdKSwidCJpbiBuKWZvcihjb25zdCByIG9mIG4udCl7Y29uc3QgZD1tLm1hcCh4PT5TKHIseCkpLmZpbHRlcih4PT54IT09bnVsbCk7ZC5sZW5ndGgmJnkucHVzaChbe3R5cGU6InRleHQiLGlkOmYsLi4ubyYme2FuY2hvcjp1fSxkaXNwbGF5OmR9LGFdKX19fSksdyhzKS5zb3J0KChbLG5dLFssdF0pPT5TRUFSQ0hfUFJPX1NPUlRfU1RSQVRFR1k9PT0idG90YWwiP0Uobix0KTpGKG4sdCkpLm1hcCgoW24se3RpdGxlOnQsY29udGVudHM6Y31dKT0+e2lmKCF0KXtjb25zdCBhPUMoZSxuKTthJiYodD1hLmgpfXJldHVybnt0aXRsZTp0LGNvbnRlbnRzOmMubWFwKChbYV0pPT5hKX19KX0sUj0oaSxlLGw9e30pPT5UKGUsaSx7ZnV6enk6LjIsLi4ubH0pLm1hcCgoe3N1Z2dlc3Rpb246c30pPT5zKTtzZWxmLm9ubWVzc2FnZT1hc3luYyh7ZGF0YTp7dHlwZTppPSJhbGwiLHF1ZXJ5OmUsbG9jYWxlOmwsb3B0aW9uczpzfX0pPT57Y29uc3R7ZGVmYXVsdDpufT1hd2FpdCBiW2xdKCksdD0kKG4se2ZpZWxkczpbImgiLCJ0IiwiYyJdLHN0b3JlRmllbGRzOlsiaCIsInQiLCJjIl19KTtpPT09InN1Z2dlc3QiP3NlbGYucG9zdE1lc3NhZ2UoUihlLHQscykpOmk9PT0ic2VhcmNoIj9zZWxmLnBvc3RNZXNzYWdlKE0oZSx0LHMpKTpzZWxmLnBvc3RNZXNzYWdlKHtzdWdnZXN0aW9uczpSKGUsdCxzKSxyZXN1bHRzOk0oZSx0LHMpfSl9OwovLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAK",import.meta.url);const Sf=()=>{const n=new Worker(`/${Qc.worker}`,{}),e=[];return n.addEventListener("message",({data:t})=>{const{resolve:s}=e.shift();s(t)}),{search:t=>new Promise((s,a)=>{n.postMessage(t),e.push({resolve:s,reject:a})}),terminate:()=>{n.terminate(),e.forEach(({reject:t})=>t(new Error("Worker has been terminated.")))}}};let qk={};const Yc=Symbol(""),Pf=()=>{const n=Fe(),{locales:e={},...t}=kn(Yc);return A(()=>({...t,...e[n.value]||{}}))},Qk=n=>{n.provide(Yc,qk)},Zk=(n,e=!1)=>{const t=K(0),s=A(()=>n.value[t.value]),a=()=>{t.value=t.value>0?t.value-1:n.value.length-1},o=()=>{t.value=t.value<n.value.length-1?t.value+1:0};return on(n,()=>{e||(t.value=0)}),{index:t,item:s,prev:a,next:o}},Yk=n=>n instanceof Element?document.activeElement===n&&(["TEXTAREA","SELECT","INPUT"].includes(n.tagName)||n.hasAttribute("contenteditable")):!1,Jk=n=>Zc.some(e=>{const{key:t,ctrl:s=!1,shift:a=!1,alt:o=!1,meta:r=!1}=e;return t===n.key&&s===n.ctrlKey&&a===n.shiftKey&&o===n.altKey&&r===n.metaKey}),Xk='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',n9='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',e9='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',t9='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',Mr=Symbol(""),s9=()=>{const n=K(!1);me(Mr,n)},a9=n=>({suggestions:K([])}),fo=Zc[0];var o9=R({name:"SearchBox",setup(){const n=xe(Vr),e=kn(Mr),t=K(!1),s=A(()=>fo?[(t.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((a,o)=>fo[["ctrl","shift","alt","meta"][o]]),fo.key.toUpperCase()]:null);return yn("keydown",a=>{!e.value&&Jk(a)&&!Yk(a.target)&&(a.preventDefault(),e.value=!0)}),mn(()=>{const{userAgent:a}=navigator;t.value=fh(a)||kh(a)||gc(a)}),()=>[p("button",{type:"button",class:"search-pro-button","aria-label":n.value.search,onClick:()=>{e.value=!0}},[p(Nr),p("div",{class:"search-pro-placeholder"},n.value.search),s.value?p("div",{class:"search-pro-key-hints"},s.value.map(a=>p("kbd",{class:"search-pro-key"},a))):null])]}});const r9=cr({loader:()=>m(()=>import("./SearchResult-D0QnqF81.js"),__vite__mapDeps([])),loadingComponent:()=>{const n=xe(Vr);return p(qc,{hint:n.value.loading})}});var l9=R({name:"SearchModal",setup(){const n=kn(Mr),e=Jt(),t=mh(),s=xe(Vr),a=K(""),{suggestions:o}=a9(),r=K(!1),{index:l,prev:c,next:i}=Zk(o),u=En(),d=En(),h=(E=l.value)=>{a.value=o.value[E],r.value=!1};return yn("keydown",E=>{r.value?E.key==="ArrowUp"?c():E.key==="ArrowDown"?i():E.key==="Enter"?h():E.key==="Escape"&&(r.value=!1):E.key==="Escape"&&(n.value=!1)}),mn(()=>{const E=Dr(document.body);on(n,async g=>{var y;E.value=g,g&&(await Be(),(y=u.value)==null||y.focus())}),K8(d,()=>{r.value=!1}),dt(()=>{E.value=!1})}),()=>n.value?p("div",{class:"search-pro-modal-wrapper"},[p("div",{class:"search-pro-mask",onClick:()=>{n.value=!1,a.value=""}}),p("div",{class:"search-pro-modal"},[p("div",{class:"search-pro-box"},[p("form",[p("label",{for:"search-pro","aria-label":s.value.search},p(Nr)),p("input",{ref:u,type:"search",class:"search-pro-input",id:"search-pro",placeholder:s.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${e.value.title}-search`,value:a.value,"aria-controls":"search-pro-results",onKeydown:E=>{const{key:g}=E;o.value.length&&(g==="Tab"?(h(),E.preventDefault()):(g==="ArrowDown"||g==="ArrowUp"||g==="Escape")&&E.preventDefault())},onInput:({target:E})=>{a.value=E.value,r.value=!0,l.value=0}}),a.value?p("button",{type:"reset",class:"search-pro-clear-button",innerHTML:Gk,onClick:()=>{a.value=""}}):null,null]),p("button",{type:"button",class:"search-pro-close-button",onClick:()=>{n.value=!1,a.value=""}},s.value.cancel)]),p(r9,{query:a.value,isFocusing:!r.value,onClose:()=>{n.value=!1},onUpdateQuery:E=>{a.value=E}}),t.value?null:p("div",{class:"search-pro-hints"},[p("span",{class:"search-pro-hint"},[p("kbd",{innerHTML:Xk}),s.value.select]),p("span",{class:"search-pro-hint"},[p("kbd",{innerHTML:e9}),p("kbd",{innerHTML:n9}),s.value.navigate]),p("span",{class:"search-pro-hint"},[p("kbd",{innerHTML:t9}),s.value.exit])])])]):null}}),p9=re({enhance({app:n}){Qk(n),n.component("SearchBox",o9)},setup(){s9()},rootComponents:[l9]});const Jc=()=>{const n=gn();return A(()=>n.value.readingTime??null)},Xc=(n,e)=>{const{minutes:t,words:s}=n,{less1Minute:a,word:o,time:r}=e;return{time:t<1?a:r.replace("$time",Math.round(t).toString()),words:o.replace("$word",s.toString())}};var wp={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const xp={words:"",time:""},Vo=typeof wp>"u"?null:wp,nu=()=>Vo?xe(Vo):A(()=>null),i9=()=>{if(typeof Vo>"u")return A(()=>xp);const n=Jc(),e=nu();return A(()=>n.value&&e.value?Xc(n.value,e.value):xp)},mt=()=>Pc(),ln=()=>oE(),Ct=()=>{const n=mt();return A(()=>!!n.value.pure)},go=()=>null,c9="719px",u9="1440px",d9="true",$r={mobileBreakPoint:c9,pcBreakPoint:u9,enableThemeColor:d9,"theme-1":"#2196f3","theme-2":"#f26d6d","theme-3":"#3eaf7c","theme-4":"#fb9b5f"},Ur={"/free-service/":["cloudflare-warp","docker-hub-mirror","github-direct","tools"],"/PyQt5快速上手-王铭东/":["001-PyQt介绍与安装","002-PyQt基本UI","003-布局","004-布局2","005-窗口","006-信号与槽","007-Qt Designer","008-PyQt多线程","009-打包为可执行程序"],"/note-book/":[{text:"AI Training",prefix:"AI-Training/",collapsible:!0,children:["torch 环境","Windows_WSL2安装nvidia-cuda驱动","英伟达开源驱动和闭源驱动冲突问题"]},{text:"Android",prefix:"Android/",collapsible:!0,children:["Ubuntu命令行安装Android SDK"]},{text:"CoreDNS",prefix:"CoreDNS/",collapsible:!0,icon:"laptop-code",children:["ext-plugin-redis","理解CoreDNS"]},{text:"CVE",prefix:"CVE/",collapsible:!0,children:["CVE-2023-32233","CVE-2024-21626利用场景"]},{text:"Database System",prefix:"DatabaseSystem/",collapsible:!0,children:[{text:"Etcd",prefix:"Etcd/",collapsible:!0,children:["etcd安装etcdkeeper"]},{text:"My SQL",prefix:"MySQL/",collapsible:!0,children:["国内源","查看Mysql数据量大小"]}]},{text:"Distributed System",prefix:"DistributedSystem/",collapsible:!0,children:[{text:"Ansible",prefix:"Ansible/",collapsible:!0,children:["ansible自动化运维","Centos7.x 安装Python3.9.7  Ansible4.5"]},{text:"JumperServer Insight",prefix:"JumperServer/",collapsible:!0,children:["","JumperServerDockerDeploy","HA_Deploy"]},{text:"Open Stack",prefix:"OpenStack/",collapsible:!0,children:["OpenStack-Queens版搭建详解"]}]},{text:"DNS",prefix:"DNS/",collapsible:!0,children:["Bind9的使用","NamedManager"]},{text:"Docker",prefix:"Docker/",collapsible:!0,children:["Docker 2375攻击和解决方案","Docker 的daemon.json","Docker日志选项配置上去对已运行容器不生效","docker pull push","docker run 命令所有的选项","Docker环境清理","Docker不死进程","docker容器集合","docker报错bridge-nf-call-iptables内核修整","Docker逃逸漏洞案例","docker学习笔记-PDF","一次构建出x86及arm镜像","RockyLinux安装Docker","一键运行web版本vscode","在Dockerfile里调整时区","把容器做成物理机","只使用操作系统创建容器-扫描","手撕Docker容器命令行版","手撕docker网络","更改docker服务网段分配地址","手撕docker容器","跨宿主机通信overlay和macvlay"]},{text:"Ebook",prefix:"ebook/",collapsible:!0,children:["ebook"]},{text:"ELK",prefix:"ELK/",collapsible:!0,children:["EFK8.4.3部署","ELK"]},{text:"Esxi",prefix:"Esxi/",collapsible:!0,children:["ESXI中的网络"]},{text:"Gawk",prefix:"Gawk/",collapsible:!0,children:["awk 入门教程","awk 学习  高级输出  02","AWK案例入门看这一篇就够了","awk语言学习笔记  01","匹配特定字符并输出其后的若干行","Shell文本处理三剑客-AWK"]},{text:"git-tips",prefix:"Git/",collapsible:!0,children:["","git 拉取全部远程分支","git更新远程分支","Git识别项目的语言类型，及文件占比","git远程仓库回退到指定版本","命令行显示gitmoji","git基础命令","Git 的代理配置","Git分支管理合并与删除命令","git统计项目代码行数","Git高级操作和练习网站"]},{text:"Gitlab",prefix:"Gitlab/",collapsible:!0,children:[{text:"CI",prefix:"CI/",collapsible:!0,children:["gitlab ci 编写","部署Kubernetes类型的gitlab-runner","gitlab ci 部署"]},"Gitlab二开从而自定义权限系统","Gitlab备份和恢复","Gitlab安装部署","Gitlab配置邮件服务器","Gitlab的一些问题"]},{text:"Goaccess",prefix:"goaccess/",collapsible:!0,children:["goaccess给ftp生成分析图"]},{text:"GRUB",prefix:"GRUB/",collapsible:!0,children:["配置案例"]},{text:"HA LVS Keepalived",prefix:"HA-LVS-Keepalived/",collapsible:!0,children:["keepalived","haproxy","ha-lvs-keepalived"]},{text:"Harbor",prefix:"Harbor/",collapsible:!0,children:["Harbor离线搭建"]},{text:"Iptables",prefix:"Iptables/",collapsible:!0,children:["iptables拦截内网奇虎软件病毒上报","iptables详解-朱光印","linux下IPTABLES配置详解","Linux内核子系统 - 网络 netfilter","内核参数ip_forward"]},{text:"Jenkins",prefix:"Jenkins/",collapsible:!0,children:["jenkins的docker部署文档","jenkins构建持续化集成平台","jenkins备份","修改Jenkins插件为国内源"]},{text:"Kafka",prefix:"Kafka/",collapsible:!0,children:[{text:"ELK+kafka构建高并发分布式日志收集系统",prefix:"ELK_kafka构建高并发分布式日志收集系统/",collapsible:!0,children:["/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html"]}]},{text:"Kubernetes",prefix:"Kubernetes/",collapsible:!0,children:["Kubernetes最小高可用架构图","kubernetes进阶（三）服务发现-coredns","kubernetes进阶（二）核心网络插件Flannel","kubernetes进阶（五）dashboard--WEB管理","kubernetes进阶（六）k8s平滑升级","kubernetes进阶（四）服务暴露-ingress控制器之traefik","SSL证书签发","二进制安装kubernetes（七） 部署知识点总结","二进制安装kubernetes（三） kube-controller-manager组件安装","二进制安装kubernetes（二） kube-apiserver组件安装","二进制安装kubernetes（六） kube-proxy组件安装","什么是Name和NameSpace","Kubernetes Api Endpoint","crictl登录dockerhub","k8s删除Terminating状态ns","kubeadm部署Kubernetes 1.24步骤","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html","Kubernetes Service Account如何生成Token","什么是Label和Label选择器","NameSpace 资源隔离隔离了什么","Request和Limit","一次kubeadm添加节点出现etcd检查错误","常用优化","什么是Pod和Pod控制器","什么是Service和Ingress","Kubernetes crictl管理命令详解","二进制安装kubernetes（四） kube-scheduler组件安装","etcd 二进制三节点集群部署","记一次异常断电造成kubernetes故障","二进制部署Kubernetes","二进制安装kubernetes（五） kubelet组件安装","使用 vmagent 代替 Prometheus 采集监控指标","Kubernetes的NetworkPlicy","kubernetes进阶（一）kubectl工具使用详解","Kubernetes有哪些组件"]},{text:"Linux From Scratch",prefix:"LinuxFromScratch/",collapsible:!0,children:["LFS-NoteBook"]},{text:"Linux Opera System",prefix:"LinuxOperaSystem/",collapsible:!0,children:["bash利用扩展字符集实现rm",{text:"Git",prefix:"Git/",collapsible:!0,children:["Centos7 yum install git2.x 较新版本"]},"grub2手动命令引导教程",{text:"history命令详解",prefix:"history/",collapsible:!0,children:[""]},{text:"Linux三剑客",prefix:"Linux三剑客/",collapsible:!0,children:["AWK中的字符串操作函数"]},{text:"Nvidia",prefix:"Nvidia/",collapsible:!0,children:["安装Nvidia Runtime","安装Nvidia驱动"]},{text:"Samba",prefix:"Samba/",collapsible:!0,children:["Samba共享文件时文件属性nobody","Linux挂载cifs文件系统","Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法","Samba配置举例"]},"shell脚本加密解密工具shc","shell通过函数隐藏命令","ssh把远程端口映射到本地","tcpdump抓包命令","按电源软关机要等待60秒设置更短的时间",{text:"Vim",prefix:"Vim/",collapsible:!0,children:["vi编辑器"]},{text:"VNC",prefix:"VNC/",collapsible:!0,children:["Ubuntu 20.04 安装VNC Server"]},"ssh 设置反向代理","Linux备份为liveOS","命令创建虚拟镜像文件","用shell生成包含大写、小写、数字、特殊字符的随机字符串","让某个命令不输出"]},{text:"Linux 文件系统的未来 btrfs",prefix:"Btrfs/",collapsible:!0,children:["","some device missing方法","btrfs的使用","Snapper玩转btrfs文件系统"]},{text:"Memcache Redis",prefix:"memcache-redis/",collapsible:!0,children:["memcache-redis"]},{text:"Misc",prefix:"misc/",collapsible:!0,children:["中国建设银行u盾使用教程"]},{text:"Nginx&& Open Resty",prefix:"Nginx__OpenResty/",collapsible:!0,children:["/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html","/note-book/Nginx__OpenResty/nginx03.html","/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/note-book/Nginx__OpenResty/nginx01.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html","/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html","/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html","/note-book/Nginx__OpenResty/nginx02.html","/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html","/note-book/Nginx__OpenResty/nginx-plus-module-lua.html"]},{text:"Open SSH Server",prefix:"OpenSSH-Server/",collapsible:!0,children:["ssh日志记录登陆密码"]},{text:"Opera Systems",prefix:"OperaSystems/",collapsible:!0,children:["proc-sysrq-trigger详解","proc详解","CPU和内存的架构 UMA和NUMA","date命令","grep命令","Journal日志服务详解","Linux升级内核的两种方法","sed","Linux下的ASLR（PIE）内存保护机制和绕过","Linux排查哪个进程和IP在占用网速","Linux普通用户免密码sudo","Linux虚拟网络设备之bridge","macvlan详解",{text:"Operating System Principle",prefix:"OperatingSystemPrinciple/",collapsible:!0,children:["CPU的虚拟化","操作系统介绍",{text:"操作系统相关 Operating Systems: Three Easy Pieces 学习笔记",prefix:"ostep-note/",collapsible:!0,children:["",{text:"1virtualization",prefix:"1virtualization/",collapsible:!0,children:["22 Swapping Policies","23 Complete VM Systems","4 Processes","5 Process API","6 Direct Execution","7 CPU Scheduling","8 Multi-level Feedback","10 Multi-CPU Scheduling","13 Address Spaces","14 Memory API","15 Address Translation","16 Segmentation","17 Free Space Management","18 Introduction to Paging","19 Translation Lookaside Buffers","20 Advanced Page Tables","21 Swapping Mechanisms"]},{text:"2concurrency",prefix:"2concurrency/",collapsible:!0,children:["26 Concurrency and Threads","27 Thread API","28 Locks","29 Locked Data Structures","30 Condition Variables","31 Semaphores","32 Concurrency Bugs","33 Event-based Concurrency"]},{text:"3persistent",prefix:"3persistent/",collapsible:!0,children:["36 IO Devices","37 Hard Disk Drives","39 Files and Directories","40 File System Implementation"]}]}]},{text:"Red Hat Enterprise Linux",prefix:"RedHatEnterpriseLinux/",collapsible:!0,children:["CentOS_7用户账户配置","Centos8重启网卡的方法","CentOS7配置支持AUFS文件系统","制作CenOS操作系统","配置SSH免密码验证","firewalld配置"]},"Shell快捷键","大量使用swap导致无法切换",{text:"Ubtuntu",prefix:"Ubtuntu/",collapsible:!0,children:["apt查询某个软件有哪些版本","Linux 终端命令格式","linux关闭地址空间随机化（ASLR）","ubuntu14.04 忘记了普通用户密码和root密码","Ubuntu_20.04_Server使用命令行设置IP地址","Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案","ubuntu安装nfs","Ubuntu更改为24小时制","ubuntu查看intel-GPU使用情况","Ubuntu的系统防火墙ufw和docker并存端口策略无效bug","Ubuntu软件包文件管理","VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容"]},"使用curl实现邮件发送","使用dev下的tcp-udp实现socket","备份Linux系统","常见乱码产生原因","更换系统和命令行语言","环境变量PATH","ip命令","sysstat Linux状态工具包","Linux网络内核参数优化秘籍","进程","逻辑卷无法删除"]},{text:"Photo Shop",prefix:"PhotoShop/",collapsible:!0,children:["ps如何去水印的4个方法"]},{text:"Physical Server",prefix:"Physical_server/",collapsible:!0,children:["Huawei x288系列风扇转速调速"]},{text:"Portainer",prefix:"Portainer/",collapsible:!0,children:["Portainer 单机部署"]},{text:"Prometheus",prefix:"Prometheus/",collapsible:!0,children:["Prometheus监控Windows主机"]},{text:"Rabbit MQ",prefix:"RabbitMQ/",collapsible:!0,children:["rabbitmq"]},{text:"Research& Develop",prefix:"Research_Develop/",collapsible:!0,children:[{text:"C语言学习 翁恺教程",prefix:"C/",collapsible:!0,children:["/note-book/Research_Develop/C/","/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html",{text:"ACLLib",prefix:"ACLLib/",collapsible:!0,children:["/note-book/Research_Develop/C/ACLLib/ACLLib.html"]},"/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html"]},{text:"Python",prefix:"Python/",collapsible:!0,children:["/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html",{text:"Python面向对象",prefix:"python面向对象/",collapsible:!0,children:["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html"]},"/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research_Develop/Python/python%20re.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html"]},{text:"Shell",prefix:"Shell/",collapsible:!0,children:["/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html"]},{text:"算法说明",prefix:"Algorithm/",collapsible:!0,children:["/note-book/Research_Develop/Algorithm/","/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html"]}]},{text:"Router OS",prefix:"RouterOS/",collapsible:!0,children:["Azure刷写ROS教程","RouterOS利用（L2TP）实现多方异地组网","用ros路由作为中转教程"]},{text:"S3 Simple Storage Service",prefix:"S3-SimpleStorageService/",collapsible:!0,children:["Minio挂载到nfs不成功","MiniO_Docker_Deploy"]},{text:"Tomcat",prefix:"Tomcat/",collapsible:!0,children:["tomcat"]},{text:"Traefik",prefix:"Traefik/",collapsible:!0,children:["","traefik作为docker边缘路由"]},{text:"Virtual Private Network",prefix:"VirtualPrivateNetwork/",collapsible:!0,children:[{text:"广义 Virtual Private Network",prefix:"广义VirtualPrivateNetwork/",collapsible:!0,children:["基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"]},{text:"狭义 Virtual Private Network",prefix:"狭义VirtualPrivateNetwork/",collapsible:!0,children:["Docker一键部署Clash服务与管理面板","优秀的落地框架 XrayR","连接WARP为服务器添加IPv4IPv6网络","cfw-cdn-ssl-ws-tls"]}]},{text:"VMware",prefix:"VMware/",collapsible:!0,children:["各个版本的激活密钥","虚拟化物理机"]},{text:"Windows Opera System",prefix:"WindowsOperaSystem/",collapsible:!0,children:["PowerShell 打印环境变量","PowerShell 操作系统禁止运行脚本","Windows系统更改迁移用户目录"]},{text:"Zabbix",prefix:"Zabbix/",collapsible:!0,children:["zabbix","Zabbix-Agent主动模式自动注册","Zabbix-Agent被动模式自动注册","zabbix-docker","zabbix的VMwareGuest补充缺陷",{text:"ZCS认证",prefix:"ebook/",collapsible:!0,children:[""]}]},"杀不死的进程",{text:"洋垃圾主机",prefix:"洋垃圾主机/",collapsible:!0,children:["CPU鸡血BIOS","GPU矿卡体质检测"]}]},eu=n=>{const{icon:e="",color:t,size:s}=n,a=t||s?{}:null;return t&&(a.color=t),s&&(a.height=Number.isNaN(Number(s))?s:`${s}px`),Ge(e)?p("img",{class:"icon",src:e,alt:"","no-view":"",style:a}):Va(e)?p("img",{class:"icon",src:wn(e),alt:"","aria-hidden":"","no-view":"",style:a}):p(se("FontIcon"),n)};eu.displayName="HopeIcon";var jn=eu;const Us=()=>{const n=je(),e=we();return t=>{if(t)if(Va(t))e.path!==t&&n.push(t);else if(Hi(t))window&&window.open(t);else{const s=e.path.slice(0,e.path.lastIndexOf("/"));n.push(`${s}/${encodeURI(t)}`)}}},tu=()=>{const n=ln(),e=bn();return A(()=>{const{author:t}=e.value;return t?Ps(t):t===!1?[]:Ps(n.value.author,!1)})},m9=()=>{const n=bn(),e=kn(Symbol.for("categoryMap"));return A(()=>_c(n.value.category).map(t=>{var s;return{name:t,path:((s=e==null?void 0:e.value.map[t])==null?void 0:s.path)||""}}))},h9=()=>{const n=bn(),e=kn(Symbol.for("tagMap"));return A(()=>Bc(n.value.tag).map(t=>{var s;return{name:t,path:((s=e==null?void 0:e.value.map[t])==null?void 0:s.path)||""}}))},E9=()=>{const n=bn(),e=gn();return A(()=>{const t=yr(n.value.date);if(t)return t;const{createdTime:s}=e.value.git||{};return s?new Date(s):null})},k9=()=>{const n=ln(),e=gn(),t=bn(),s=tu(),a=m9(),o=h9(),r=E9(),l=Jc(),c=i9(),i=A(()=>({author:s.value,category:a.value,date:r.value,localizedDate:e.value.localizedDate,tag:o.value,isOriginal:t.value.isOriginal||!1,readingTime:l.value,readingTimeLocale:c.value,pageview:"pageview"in t.value?t.value.pageview:!0})),u=A(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:i,items:u}},{mobileBreakPoint:f9,pcBreakPoint:g9}=$r,Dp=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,Hs=()=>{const n=K(!1),e=K(!1),t=()=>{n.value=window.innerWidth<=(Dp(f9)??719),e.value=window.innerWidth>=(Dp(g9)??1440)};return mn(()=>{t(),yn("resize",t,!1),yn("orientationchange",t,!1)}),{isMobile:n,isPC:e}},su=Symbol(""),zs=()=>{const n=kn(su);if(!n)throw new Error("useDarkmode() is called without provider.");return n},b9=n=>{const e=mt(),t=eh(),s=A(()=>e.value.darkmode||"switch"),a=Ma("vuepress-theme-hope-scheme","auto"),o=A(()=>{const l=s.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?t.value:l==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&t.value}),r=A(()=>{const l=s.value;return l==="switch"||l==="toggle"});n.provide(su,{canToggle:r,config:s,isDarkmode:o,status:a}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},v9=()=>{const{config:n,isDarkmode:e,status:t}=zs();ri(()=>{n.value==="disable"?t.value="light":n.value==="enable"?t.value="dark":n.value==="toggle"&&t.value==="auto"&&(t.value="light")}),mn(()=>{on(e,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var Yn=R({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:t,slots:s}){const a=we(),o=nc(),r=Yt(n,"config"),l=A(()=>Ge(r.value.link)),c=A(()=>!l.value&&Hi(r.value.link)),i=A(()=>r.value.target||(l.value?"_blank":void 0)),u=A(()=>i.value==="_blank"),d=A(()=>!l.value&&!c.value&&!u.value),h=A(()=>r.value.rel||(u.value?"noopener noreferrer":null)),E=A(()=>r.value.ariaLabel||r.value.text),g=A(()=>{if(n.exact)return!1;const _=Ee(o.value.locales);return _.length?_.every(b=>b!==r.value.link):r.value.link!=="/"}),y=A(()=>d.value?r.value.activeMatch?new RegExp(r.value.activeMatch,"u").test(a.path):g.value?Cs(a.path,r.value.link):a.path===r.value.link:!1);return()=>{const{before:_,after:b,default:x}=s,{text:v,icon:D,link:N}=r.value;return d.value?p(Rn,{to:N,"aria-label":E.value,...e,class:["nav-link",{active:y.value},e.class],onFocusout:()=>t("focusout")},()=>x?x():[_?_():p(jn,{icon:D}),v,b==null?void 0:b()]):p("a",{href:N,rel:h.value,target:i.value,"aria-label":E.value,...e,class:["nav-link",e.class],onFocusout:()=>t("focusout")},x?x():[_?_():p(jn,{icon:D}),v,n.noExternalLinkIcon?null:p(Cc),b==null?void 0:b()])}}});const Qt=(n,e,t=!1)=>"activeMatch"in e?new RegExp(e.activeMatch,"u").test(n.path):vc(n,e.link)?!0:e.children&&!t?e.children.some(s=>Qt(n,s)):!1,au=(n,e)=>e.type==="group"?e.children.some(t=>t.type==="group"?au(n,t):t.type==="page"&&Qt(n,t,!0))||"prefix"in e&&vc(n,e.prefix):!1,ou=(n,e)=>Dn(n.link)?p(Yn,{...e,config:n}):p("p",e,[p(jn,{icon:n.icon}),n.text]),ru=n=>{const e=we();return n?p("ul",{class:"vp-sidebar-sub-headers"},n.map(t=>p("li",{class:"vp-sidebar-sub-header"},[ou(t,{class:["vp-sidebar-link","vp-heading",{active:Qt(e,t,!0)}]}),ru(t.children)]))):null};var An=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(An||{}),lu=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(lu||{});const vt=(n="",e="")=>Va(e)?e:`${hr(n)}${e}`,$t=(n,e=!1)=>{const{meta:t,path:s}=Xt(n);return t?{text:!e&&t[An.shortTitle]?t[An.shortTitle]:t[An.title]||s,link:s,...t[An.icon]?{icon:t[An.icon]}:{}}:{text:s,link:s}},Ua=(n,e,t)=>t>0?e.map(s=>({type:"heading",text:s.title,link:`${n.path}#${s.slug}`,children:Ua(n,s.children,t-1)})):[],Mo=({config:n,page:e,headerDepth:t,prefix:s=""})=>{const a=(o,r=s)=>{var c;const l=Dn(o)?$t(vt(r,o)):o.link?{...o,...Kt(o.link)?{}:{link:$t(vt(r,o.link)).link}}:o;if("children"in l){const i=vt(r,l.prefix),u=l.children==="structure"?Ur[i]:l.children;return{type:"group",...l,prefix:i,children:u.map(d=>a(d,i))}}return{type:"page",...l,children:l.link===e.path?Ua(e,((c=e.headers[0])==null?void 0:c.level)===1?e.headers[0].children:e.headers,t):[]}};return n.map(o=>a(o))},A9=({config:n,page:e,headerDepth:t})=>{const s=Ee(n).sort((a,o)=>o.length-a.length);for(const a of s)if(Cs(decodeURI(e.path),a)){const o=n[a];return o?Mo({config:o==="structure"?Ur[a]:o==="heading"?Ua(e,e.headers,t):o,page:e,headerDepth:t,prefix:a}):[]}return console.warn(`${e.path} is missing sidebar config.`),[]},y9=({config:n,routeLocale:e,page:t,headerDepth:s})=>n==="heading"?Ua(t,t.headers,s):n==="structure"?Mo({config:Ur[e],page:t,headerDepth:s,prefix:e}):_a(n)?Mo({config:n,page:t,headerDepth:s}):rt(n)?A9({config:n,page:t,headerDepth:s}):[],pu=Symbol(""),_9=()=>{const n=bn(),e=ln(),t=gn(),s=Fe(),a=A(()=>n.value.home?!1:n.value.sidebar??e.value.sidebar??"structure"),o=A(()=>n.value.headerDepth??e.value.headerDepth??2),r=uc(()=>[a.value,o.value,t.value.path,null],()=>y9({config:a.value,routeLocale:s.value,page:t.value,headerDepth:o.value}));me(pu,r)},Hr=()=>{const n=kn(pu);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var B9=R({name:"PageFooter",setup(){const n=mt(),e=ln(),t=bn(),s=tu(),a=A(()=>{const{copyright:i,footer:u}=t.value;return u!==!1&&!!(i||u||e.value.displayFooter)}),o=A(()=>{const{footer:i}=t.value;return i===!1?!1:Dn(i)?i:e.value.footer||""}),r=A(()=>s.value.map(({name:i})=>i).join(", ")),l=i=>`Copyright © ${new Date().getFullYear()} ${r.value} ${i?`${i} Licensed`:""}`,c=A(()=>{const{copyright:i,license:u=""}=t.value,{license:d}=n.value,{copyright:h}=e.value;return i??(u?l(u):Dn(h)?h:r.value||d?l(d):!1)});return()=>a.value?p("footer",{class:"vp-footer-wrapper"},[o.value?p("div",{class:"vp-footer",innerHTML:o.value}):null,c.value?p("div",{class:"vp-copyright",innerHTML:c.value}):null]):null}}),w9=R({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const t=gn(),s=Yt(n,"config"),a=A(()=>s.value.ariaLabel||s.value.text),o=K(!1);on(()=>t.value.path,()=>{o.value=!1});const r=l=>{l.detail===0&&(o.value=!o.value)};return()=>{var l;return p("div",{class:["dropdown-wrapper",{open:o.value}]},[p("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:r},[((l=e.title)==null?void 0:l.call(e))||p("span",{class:"title"},[p(jn,{icon:s.value.icon}),n.config.text]),p("span",{class:"arrow"}),p("ul",{class:"nav-dropdown"},s.value.children.map((c,i)=>{const u=i===s.value.children.length-1;return p("li",{class:"dropdown-item"},"children"in c?[p("h4",{class:"dropdown-subtitle"},c.link?p(Yn,{config:c,onFocusout:()=>{c.children.length===0&&u&&(o.value=!1)}}):p("span",c.text)),p("ul",{class:"dropdown-subitem-wrapper"},c.children.map((d,h)=>p("li",{class:"dropdown-subitem"},p(Yn,{config:d,onFocusout:()=>{h===c.children.length-1&&u&&(o.value=!1)}}))))]:p(Yn,{config:c,onFocusout:()=>{u&&(o.value=!1)}}))}))])])}}});const iu=(n,e="")=>Dn(n)?$t(vt(e,n)):"children"in n?{...n,...n.link&&!Kt(n.link)?$t(vt(e,n.link)):{},children:n.children.map(t=>iu(t,vt(e,n.prefix)))}:{...n,link:Kt(n.link)?n.link:$t(vt(e,n.link)).link},cu=()=>{const n=ln(),e=()=>(n.value.navbar||[]).map(t=>iu(t));return uc(()=>n.value.navbar,()=>e())},x9=()=>{const n=ln(),e=A(()=>n.value.repo||null),t=A(()=>e.value?vh(e.value):null),s=A(()=>e.value?Rr(e.value):null),a=A(()=>t.value?n.value.repoLabel??(s.value===null?"Source":s.value):null);return A(()=>!t.value||!a.value||n.value.repoDisplay===!1?null:{type:s.value||"Source",label:a.value,link:t.value})};var D9=R({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=gn(),t=Yt(n,"config"),s=A(()=>t.value.ariaLabel||t.value.text),a=K(!1);on(()=>e.value.path,()=>{a.value=!1});const o=(r,l)=>l[l.length-1]===r;return()=>[p("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[p("span",{class:"title"},[p(jn,{icon:t.value.icon}),n.config.text]),p("span",{class:["arrow",a.value?"down":"end"]})]),p("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},t.value.children.map(r=>p("li",{class:"dropdown-item"},"children"in r?[p("h4",{class:"dropdown-subtitle"},r.link?p(Yn,{config:r,onFocusout:()=>{o(r,t.value.children)&&r.children.length===0&&(a.value=!1)}}):p("span",r.text)),p("ul",{class:"dropdown-subitem-wrapper"},r.children.map(l=>p("li",{class:"dropdown-subitem"},p(Yn,{config:l,onFocusout:()=>{o(l,r.children)&&o(r,t.value.children)&&(a.value=!1)}}))))]:p(Yn,{config:r,onFocusout:()=>{o(r,t.value.children)&&(a.value=!1)}}))))]}}),C9=R({name:"NavScreenLinks",setup(){const n=cu();return()=>n.value.length?p("nav",{class:"nav-screen-links"},n.value.map(e=>p("div",{class:"navbar-links-item"},"children"in e?p(D9,{config:e}):p(Yn,{config:e})))):null}});const uu=()=>p(an,{name:"dark"},()=>p("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));uu.displayName="DarkIcon";const du=()=>p(an,{name:"light"},()=>p("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));du.displayName="LightIcon";const mu=()=>p(an,{name:"auto"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));mu.displayName="AutoIcon";const hu=()=>p(an,{name:"enter-fullscreen"},()=>p("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));hu.displayName="EnterFullScreenIcon";const Eu=()=>p(an,{name:"cancel-fullscreen"},()=>p("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Eu.displayName="CancelFullScreenIcon";const ku=()=>p(an,{name:"outlook"},()=>[p("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);ku.displayName="OutlookIcon";var fu=R({name:"AppearanceSwitch",setup(){const{config:n,isDarkmode:e,status:t}=zs(),s=Ct(),a=()=>{n.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"},o=async r=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!r){a();return}const l=r.clientX,c=r.clientY,i=Math.hypot(Math.max(l,innerWidth-l),Math.max(c,innerHeight-c)),u=e.value;await document.startViewTransition(async()=>{a(),await Be()}).ready,e.value!==u&&document.documentElement.animate({clipPath:e.value?[`circle(${i}px at ${l}px ${c}px)`,`circle(0px at ${l}px ${c}px)`]:[`circle(0px at ${l}px ${c}px)`,`circle(${i}px at ${l}px ${c}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>p("button",{type:"button",id:"appearance-switch",onClick:o},[p(mu,{style:{display:t.value==="auto"?"block":"none"}}),p(uu,{style:{display:t.value==="dark"?"block":"none"}}),p(du,{style:{display:t.value==="light"?"block":"none"}})])}}),S9=R({name:"AppearanceMode",setup(){const n=ln(),{canToggle:e}=zs(),t=A(()=>n.value.outlookLocales.darkmode);return()=>e.value?p("div",{class:"appearance-wrapper"},[p("label",{class:"appearance-title",for:"appearance-switch"},t.value),p(fu)]):null}});const bo="VUEPRESS_THEME_COLOR";var P9=R({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const e=(t="")=>{const s=document.documentElement.classList,a=Ee(n.themeColor);if(!t){localStorage.removeItem(bo),s.remove(...a);return}s.remove(...a.filter(o=>o!==t)),s.add(t),localStorage.setItem(bo,t)};return mn(()=>{const t=localStorage.getItem(bo);t&&e(t)}),()=>p("ul",{id:"theme-color-picker"},[p("li",p("span",{class:"theme-color",onClick:()=>e()})),Ke(n.themeColor).map(([t,s])=>p("li",p("span",{style:{background:s},onClick:()=>e(t)})))])}});const Ut=$r.enableThemeColor==="true",L9=Ut?P8(Ke($r).filter(([n])=>n.startsWith("theme-"))):{};var O9=R({name:"ThemeColor",setup(){const n=ln(),e=A(()=>n.value.outlookLocales.themeColor);return()=>Ut?p("div",{class:"theme-color-wrapper"},[p("label",{class:"theme-color-title",for:"theme-color-picker"},e.value),p(P9,{themeColor:L9})]):null}}),gu=R({name:"ToggleFullScreenButton",setup(){const n=ln(),{isSupported:e,isFullscreen:t,toggle:s}=xr(),a=A(()=>n.value.outlookLocales.fullscreen);return()=>e?p("div",{class:"full-screen-wrapper"},[p("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),p("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>s()},t.value?p(Eu):p(hu))]):null}}),bu=R({name:"OutlookSettings",setup(){const n=mt(),e=Ct(),t=A(()=>!e.value&&n.value.fullscreen);return()=>p(Na,()=>[Ut?p(O9):null,p(S9),t.value?p(gu):null])}}),R9=R({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:t}){const s=gn(),{isMobile:a}=Hs(),o=En(),r=Dr(o);return mn(()=>{o.value=document.body,on(a,l=>{!l&&n.show&&(r.value=!1,e("close"))}),on(()=>s.value.path,()=>{r.value=!1,e("close")})}),dt(()=>{r.value=!1}),()=>p(it,{name:"fade",onEnter:()=>{r.value=!0},onAfterLeave:()=>{r.value=!1}},()=>{var l,c;return n.show?p("div",{id:"nav-screen"},p("div",{class:"vp-nav-screen-container"},[(l=t.before)==null?void 0:l.call(t),p(C9),p("div",{class:"vp-outlook-wrapper"},p(bu)),(c=t.after)==null?void 0:c.call(t)])):null})}}),T9=R({name:"NavbarBrand",setup(){const n=Fe(),e=Jt(),t=ln(),s=A(()=>t.value.home||n.value),a=A(()=>e.value.title),o=A(()=>t.value.navTitle??a.value),r=A(()=>t.value.logo?wn(t.value.logo):null),l=A(()=>t.value.logoDark?wn(t.value.logoDark):null);return()=>p(Rn,{to:s.value,class:"vp-brand"},()=>[r.value?p("img",{class:["vp-nav-logo",{light:!!l.value}],src:r.value,alt:""}):null,l.value?p("img",{class:["vp-nav-logo dark"],src:l.value,alt:""}):null,o.value?p("span",{class:["vp-site-name",{"hide-in-pad":r.value&&t.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),F9=R({name:"NavbarLinks",setup(){const n=cu();return()=>n.value.length?p("nav",{class:"vp-nav-links"},n.value.map(e=>p("div",{class:"nav-item hide-in-mobile"},"children"in e?p(w9,{config:e}):p(Yn,{config:e})))):null}}),I9=R({name:"RepoLink",components:{BitbucketIcon:Lr,GiteeIcon:Pr,GitHubIcon:Cr,GitLabIcon:Sr,SourceIcon:Or},setup(){const n=x9();return()=>n.value?p("div",{class:"nav-item vp-repo"},p("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},p(se(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const vu=({active:n=!1},{emit:e})=>p("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},p("span",[p("span",{class:"vp-top"}),p("span",{class:"vp-middle"}),p("span",{class:"vp-bottom"})]));vu.displayName="ToggleNavbarButton";var N9=vu;const $o=(n,{emit:e})=>p("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},p("span",{class:"icon"}));$o.displayName="ToggleSidebarButton",$o.emits=["toggle"];var V9=$o,M9=R({name:"OutlookButton",setup(){const{isSupported:n}=xr(),e=mt(),t=Ct(),s=gn(),{canToggle:a}=zs(),o=K(!1),r=A(()=>!t.value&&e.value.fullscreen&&n);return on(()=>s.value.path,()=>{o.value=!1}),()=>a.value||r.value||Ut?p("div",{class:"nav-item hide-in-mobile"},a.value&&!r.value&&!Ut?p(fu):r.value&&!a.value&&!Ut?p(gu):p("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[p(ku),p("div",{class:"outlook-dropdown"},p(bu))])):null}}),$9=R({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:t}){const s=ln(),{isMobile:a}=Hs(),o=K(!1),r=A(()=>{const{navbarAutoHide:u="mobile"}=s.value;return u!=="none"&&(u==="always"||a.value)}),l=A(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:T9,Language:go,Links:F9,Repo:I9,Outlook:M9,Search:te("Docsearch")?se("Docsearch"):te("SearchBox")?se("SearchBox"):go},i=u=>c[u]??(te(u)?se(u):go);return()=>{var u,d,h,E,g,y;return[p("header",{id:"navbar",class:["vp-navbar",{"auto-hide":r.value,"hide-icon":s.value.navbarIcon===!1}]},[p("div",{class:"vp-navbar-start"},[p(V9,{onToggle:()=>{o.value&&(o.value=!1),e("toggleSidebar")}}),(u=t.startBefore)==null?void 0:u.call(t),(l.value.start||[]).map(_=>p(i(_))),(d=t.startAfter)==null?void 0:d.call(t)]),p("div",{class:"vp-navbar-center"},[(h=t.centerBefore)==null?void 0:h.call(t),(l.value.center||[]).map(_=>p(i(_))),(E=t.centerAfter)==null?void 0:E.call(t)]),p("div",{class:"vp-navbar-end"},[(g=t.endBefore)==null?void 0:g.call(t),(l.value.end||[]).map(_=>p(i(_))),(y=t.endAfter)==null?void 0:y.call(t),p(N9,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),p(R9,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var _;return(_=t.screenTop)==null?void 0:_.call(t)},after:()=>{var _;return(_=t.screenBottom)==null?void 0:_.call(t)}})]}}}),U9=R({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=we();return()=>[ou(n.config,{class:["vp-sidebar-link",`vp-sidebar-${n.config.type}`,{active:Qt(e,n.config,!0)}],exact:!0}),ru(n.config.children)]}}),H9=R({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const t=we(),s=A(()=>Qt(t,n.config)),a=A(()=>Qt(t,n.config,!0));return()=>{const{collapsible:o,children:r=[],icon:l,prefix:c,link:i,text:u}=n.config;return p("section",{class:"vp-sidebar-group"},[p(o?"button":"p",{class:["vp-sidebar-heading",{clickable:o||i,exact:a.value,active:s.value}],...o?{type:"button",onClick:()=>e("toggle"),onKeydown:d=>{d.key==="Enter"&&e("toggle")}}:{}},[p(jn,{icon:l}),i?p(Yn,{class:"vp-sidebar-title",config:{text:u,link:i},noExternalLinkIcon:!0}):p("span",{class:"vp-sidebar-title"},u),o?p("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!o?p(Au,{key:c,config:r}):null])}}}),Au=R({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=we(),t=K(-1),s=a=>{t.value=a===t.value?-1:a};return on(()=>e.path,()=>{const a=n.config.findIndex(o=>au(e,o));t.value=a},{immediate:!0,flush:"post"}),()=>p("ul",{class:"vp-sidebar-links"},n.config.map((a,o)=>p("li",a.type==="group"?p(H9,{config:a,open:o===t.value,onToggle:()=>s(o)}):p(U9,{config:a}))))}}),z9=R({name:"SideBar",slots:Object,setup(n,{slots:e}){const t=we(),s=ln(),a=Hr(),o=En();return mn(()=>{on(()=>t.hash,r=>{const l=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${r}"]`);if(!l)return;const{top:c,height:i}=o.value.getBoundingClientRect(),{top:u,height:d}=l.getBoundingClientRect();u<c?l.scrollIntoView(!0):u+d>c+i&&l.scrollIntoView(!1)},{immediate:!0})}),()=>{var r,l,c;return p("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}]},[(r=e.top)==null?void 0:r.call(e),((l=e.default)==null?void 0:l.call(e))||p(Au,{config:a.value}),(c=e.bottom)==null?void 0:c.call(e)])}}}),zr=R({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const t=je(),s=gn(),a=bn(),o=ln(),{isMobile:r,isPC:l}=Hs(),[c,i]=Ba(!1),[u,d]=Ba(!1),h=Hr(),E=K(!1),g=A(()=>n.noNavbar||a.value.navbar===!1||o.value.navbar===!1?!1:!!(s.value.title||o.value.logo||o.value.repo||o.value.navbar)),y=A(()=>n.noSidebar?!1:a.value.sidebar!==!1&&h.value.length!==0&&!a.value.home),_=A(()=>n.noToc||a.value.home?!1:a.value.toc||o.value.toc!==!1&&a.value.toc!==!1),b={x:0,y:0},x=w=>{b.x=w.changedTouches[0].clientX,b.y=w.changedTouches[0].clientY},v=w=>{const F=w.changedTouches[0].clientX-b.x,O=w.changedTouches[0].clientY-b.y;Math.abs(F)>Math.abs(O)*1.5&&Math.abs(F)>40&&(F>0&&b.x<=80?i(!0):i(!1))},D=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let N=0;return yn("scroll",$8(()=>{const w=D();w<=58||w<N?E.value=!1:N+200<w&&!c.value&&(E.value=!0),N=w},300,!0)),on(r,w=>{w||i(!1)}),mn(()=>{const w=Dr(document.body);on(c,O=>{w.value=O});const F=t.afterEach(()=>{i(!1)});dt(()=>{w.value=!1,F()})}),()=>p(te("GlobalEncrypt")?se("GlobalEncrypt"):fc,()=>p("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!y.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":_.value,"hide-navbar":E.value,"sidebar-collapsed":!r.value&&!l.value&&u.value,"sidebar-open":r.value&&c.value},n.containerClass,a.value.containerClass||""],onTouchStart:x,onTouchEnd:v},[g.value?p($9,{onToggleSidebar:()=>i()},{startBefore:()=>{var w;return(w=e.navbarStartBefore)==null?void 0:w.call(e)},startAfter:()=>{var w;return(w=e.navbarStartAfter)==null?void 0:w.call(e)},centerBefore:()=>{var w;return(w=e.navbarCenterBefore)==null?void 0:w.call(e)},centerAfter:()=>{var w;return(w=e.navbarCenterAfter)==null?void 0:w.call(e)},endBefore:()=>{var w;return(w=e.navbarEndBefore)==null?void 0:w.call(e)},endAfter:()=>{var w;return(w=e.navbarEndAfter)==null?void 0:w.call(e)},screenTop:()=>{var w;return(w=e.navScreenTop)==null?void 0:w.call(e)},screenBottom:()=>{var w;return(w=e.navScreenBottom)==null?void 0:w.call(e)}}):null,p(it,{name:"fade"},()=>c.value?p("div",{class:"vp-sidebar-mask",onClick:()=>i(!1)}):null),p(it,{name:"fade"},()=>r.value?null:p("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},p("span",{class:["arrow",u.value?"end":"start"]}))),p(z9,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var w;return(w=e.sidebarTop)==null?void 0:w.call(e)},bottom:()=>{var w;return(w=e.sidebarBottom)==null?void 0:w.call(e)}}),e.default(),p(B9)]))}}),hn=R({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const t=a=>{a.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},s=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>p(n.type==="single"?it:B1,{name:"drop",appear:n.appear,onAppear:t,onAfterAppear:s,onEnter:t,onAfterEnter:s,onBeforeLeave:t},()=>e.default())}});const Uo=({custom:n})=>p(sc,{class:["theme-hope-content",{custom:n}]});Uo.displayName="MarkdownContent",Uo.props={custom:Boolean};var Gr=Uo;const yu=()=>p(an,{name:"author"},()=>p("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));yu.displayName="AuthorIcon";const _u=()=>p(an,{name:"calendar"},()=>p("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));_u.displayName="CalendarIcon";const Bu=()=>p(an,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Bu.displayName="CategoryIcon";const wu=()=>p(an,{name:"eye"},()=>p("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));wu.displayName="EyeIcon";const xu=()=>p(an,{name:"fire"},()=>p("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));xu.displayName="FireIcon";const Du=()=>p(an,{name:"print"},()=>p("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Du.displayName="PrintIcon";const Cu=()=>p(an,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Cu.displayName="TagIcon";const Su=()=>p(an,{name:"timer"},()=>p("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Su.displayName="TimerIcon";const Pu=()=>p(an,{name:"word"},()=>[p("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),p("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Pu.displayName="WordIcon";const We=()=>{const n=ln();return A(()=>n.value.metaLocales)};var G9=R({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=We();return()=>n.author.length?p("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(yu),p("span",n.author.map(t=>t.url?p("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):p("span",{class:"page-author-item"},t.name))),p("span",{property:"author",content:n.author.map(t=>t.name).join(", ")})]):null}}),j9=R({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=je(),t=gn(),s=We(),a=(o,r="")=>{r&&t.value.path!==r&&(o.preventDefault(),e.push(r))};return()=>n.category.length?p("span",{class:"page-category-info","aria-label":`${s.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(Bu),n.category.map(({name:o,path:r})=>p("span",{class:["page-category-item",{[`category${$a(o,9)}`]:!n.pure,clickable:r}],role:r?"navigation":"",onClick:l=>a(l,r)},o)),p("meta",{property:"articleSection",content:n.category.map(({name:o})=>o).join(",")})]):null}}),K9=R({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=br(),t=We();return()=>n.date?p("span",{class:"page-date-info","aria-label":`${t.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(_u),p("span",p(Na,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),p("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),W9=R({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=We();return()=>n.isOriginal?p("span",{class:"page-original-info"},e.value.origin):null}}),q9=R({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(n){const e=we(),t=We(),s=En(),a=K(0);return th(s,()=>{const o=s.value.textContent;o&&!isNaN(Number(o))&&(a.value=Number(o))},{childList:!0}),()=>n.pageview?p("span",{class:"page-pageview-info","aria-label":`${t.value.views}${n.pure?"":"🔢"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(a.value<1e3?wu:xu),p("span",{ref:s,id:"ArtalkPV",class:"waline-pageview-count","data-path":Dn(n.pageview)?n.pageview:e.path},"...")]):null}}),Q9=R({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=We(),t=A(()=>{if(!n.readingTime)return null;const{minutes:s}=n.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,a;return(s=n.readingTimeLocale)!=null&&s.time?p("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(Su),p("span",(a=n.readingTimeLocale)==null?void 0:a.time),p("meta",{property:"timeRequired",content:t.value})]):null}}}),Z9=R({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=je(),t=gn(),s=We(),a=(o,r="")=>{r&&t.value.path!==r&&(o.preventDefault(),e.push(r))};return()=>n.tag.length?p("span",{class:"page-tag-info","aria-label":`${s.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(Cu),n.tag.map(({name:o,path:r})=>p("span",{class:["page-tag-item",{[`tag${$a(o,9)}`]:!n.pure,clickable:r}],role:r?"navigation":"",onClick:l=>a(l,r)},o)),p("meta",{property:"keywords",content:n.tag.map(({name:o})=>o).join(",")})]):null}}),Y9=R({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=We();return()=>{var t,s,a;return(t=n.readingTimeLocale)!=null&&t.words?p("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[p(Pu),p("span",(s=n.readingTimeLocale)==null?void 0:s.words),p("meta",{property:"wordCount",content:(a=n.readingTime)==null?void 0:a.words})]):null}}}),Lu=R({name:"PageInfo",components:{AuthorInfo:G9,CategoryInfo:j9,DateInfo:K9,OriginalInfo:W9,PageViewInfo:q9,ReadingTimeInfo:Q9,TagInfo:Z9,WordInfo:Y9},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=Ct();return()=>n.items?p("div",{class:"page-info"},n.items.map(t=>p(se(`${t}Info`),{...n.info,pure:e.value}))):null}}),J9=R({name:"PrintButton",setup(){const n=mt(),e=ln();return()=>n.value.print===!1?null:p("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},p(Du))}});const X9=({title:n,level:e,slug:t})=>p(Rn,{to:`#${t}`,class:["toc-link",`level${e}`]},()=>n),Ho=(n,e)=>{const t=we();return n.length&&e>0?p("ul",{class:"toc-list"},n.map(s=>{const a=Ho(s.children,e-1);return[p("li",{class:["toc-item",{active:t.hash===`#${s.slug}`}]},X9(s)),a?p("li",a):null]})):null};var Ou=R({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const t=we(),s=gn(),a=We(),o=En(),r=K("-1.7rem"),l=i=>{var u;(u=o.value)==null||u.scrollTo({top:i,behavior:"smooth"})},c=()=>{if(o.value){const i=document.querySelector(".toc-item.active");i?r.value=`${i.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:r.value="-1.7rem"}else r.value="-1.7rem"};return mn(()=>{on(()=>t.hash,i=>{if(o.value){const u=document.querySelector(`#toc a.toc-link[href$="${i}"]`);if(!u)return;const{top:d,height:h}=o.value.getBoundingClientRect(),{top:E,height:g}=u.getBoundingClientRect();E<d?l(o.value.scrollTop+E-d):E+g>d+h&&l(o.value.scrollTop+E+g-d-h)}}),on(()=>t.fullPath,c,{flush:"post",immediate:!0})}),()=>{var u,d;const i=n.items.length?Ho(n.items,n.headerDepth):s.value.headers?Ho(s.value.headers,n.headerDepth):null;return i?p("div",{class:"toc-place-holder"},[p("aside",{id:"toc"},[(u=e.before)==null?void 0:u.call(e),p("div",{class:"toc-header"},[a.value.toc,p(J9)]),p("div",{class:"toc-wrapper",ref:o},[i,p("div",{class:"toc-marker",style:{top:r.value}})]),(d=e.after)==null?void 0:d.call(e)])]):null}}}),jr=R({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=gn(),t=ln(),s=En(),a=({target:o})=>{const r=document.querySelector(o.hash);if(r){const l=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",l)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",l),r.focus(),window.scrollTo(0,0)}};return mn(()=>{on(()=>e.value.path,()=>s.value.focus())}),()=>[p("span",{ref:s,tabindex:"-1"}),p("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:a},t.value.routeLocales.skipToContent)]}});let vo=null,rs=null;const n2={wait:()=>vo,pending:()=>{vo=new Promise(n=>{rs=n})},resolve:()=>{rs==null||rs(),vo=null,rs=null}},Ru=()=>n2;var e2=R({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:t,pending:s}=Ru();return()=>p(it,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:s},()=>{var a;return(a=e.default)==null?void 0:a.call(e)})}});const t2=(n,e)=>{const t=n.replace(e,"/").split("/"),s=[];let a=Er(e);return t.forEach((o,r)=>{r!==t.length-1?(a+=`${o}/`,s.push({link:a,name:o||"Home"})):o!==""&&(a+=o,s.push({link:a,name:o}))}),s},Tu=(n,{slots:e})=>{var d,h;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:o,description:r,image:l,imageDark:c,header:i,features:u=[]}=n;return p("div",{class:"vp-feature-wrapper"},[t?p("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?p("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},a]}):null,p("div",{class:"vp-feature",style:o?{color:o}:{}},[((d=e.image)==null?void 0:d.call(e,n))||[l?p("img",{class:["vp-feature-image",{light:c}],src:wn(l),alt:""}):null,c?p("img",{class:"vp-feature-image dark",src:wn(c),alt:""}):null],((h=e.info)==null?void 0:h.call(e,n))||[i?p("h2",{class:"vp-feature-header"},i):null,r?p("p",{class:"vp-feature-description",innerHTML:r}):null],u.length?p("div",{class:"vp-features"},u.map(({icon:E,title:g,details:y,link:_})=>{const b=[p("h3",{class:"vp-feature-title"},[p(jn,{icon:E}),p("span",{innerHTML:g})]),p("p",{class:"vp-feature-details",innerHTML:y})];return _?Kt(_)?p("a",{class:"vp-feature-item link",href:_,"aria-label":g,target:"_blank"},b):p(Rn,{class:"vp-feature-item link",to:_,"aria-label":g},()=>b):p("div",{class:"vp-feature-item"},b)})):null])])};Tu.displayName="FeaturePanel";var Cp=Tu,s2=R({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const t=bn(),s=Jt(),a=A(()=>t.value.heroFullScreen??!1),o=A(()=>{const{heroText:i,tagline:u}=t.value;return{text:i??s.value.title??"Hello",tagline:u??s.value.description??"",isFullScreen:a.value}}),r=A(()=>{const{heroText:i,heroImage:u,heroImageDark:d,heroAlt:h,heroImageStyle:E}=t.value;return{image:u?wn(u):null,imageDark:d?wn(d):null,heroStyle:E,alt:h||i||"",isFullScreen:a.value}}),l=A(()=>{const{bgImage:i,bgImageDark:u,bgImageStyle:d}=t.value;return{image:Dn(i)?wn(i):null,imageDark:Dn(u)?wn(u):null,bgStyle:d,isFullScreen:a.value}}),c=A(()=>t.value.actions??[]);return()=>{var i,u,d;return p("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((i=e.heroBg)==null?void 0:i.call(e,l.value))||[l.value.image?p("div",{class:["vp-hero-mask",{light:l.value.imageDark}],style:[{"background-image":`url(${l.value.image})`},l.value.bgStyle]}):null,l.value.imageDark?p("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${l.value.imageDark})`},l.value.bgStyle]}):null],p("div",{class:"vp-hero-info"},[((u=e.heroImage)==null?void 0:u.call(e,r.value))||p(hn,{appear:!0,type:"group"},()=>[r.value.image?p("img",{key:"light",class:["vp-hero-image",{light:r.value.imageDark}],style:r.value.heroStyle,src:r.value.image,alt:r.value.alt}):null,r.value.imageDark?p("img",{key:"dark",class:"vp-hero-image dark",style:r.value.heroStyle,src:r.value.imageDark,alt:r.value.alt}):null]),((d=e.heroInfo)==null?void 0:d.call(e,o.value))??p("div",{class:"vp-hero-infos"},[o.value.text?p(hn,{appear:!0,delay:.04},()=>p("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?p(hn,{appear:!0,delay:.08},()=>p("p",{id:"main-description",innerHTML:o.value.tagline})):null,c.value.length?p(hn,{appear:!0,delay:.12},()=>p("p",{class:"vp-hero-actions"},c.value.map(h=>p(Yn,{class:["vp-hero-action",h.type||"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>p(jn,{icon:h.icon})}:{})))):null])])])}}});const Fu=(n,{slots:e})=>{var h,E,g;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:o,description:r,image:l,imageDark:c,header:i,highlights:u=[],type:d="un-order"}=n;return p("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[t?p("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?p("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},a]}):null,p("div",{class:"vp-highlight"},[((h=e.image)==null?void 0:h.call(e,n))||[l?p("img",{class:["vp-highlight-image",{light:c}],src:wn(l),alt:""}):null,c?p("img",{class:"vp-highlight-image dark",src:wn(c),alt:""}):null],((E=e.info)==null?void 0:E.call(e,n))||[p("div",{class:"vp-highlight-info-wrapper"},p("div",{class:"vp-highlight-info"},[i?p("h2",{class:"vp-highlight-header",innerHTML:i}):null,r?p("p",{class:"vp-highlight-description",innerHTML:r}):null,((g=e.highlights)==null?void 0:g.call(e,u))||p(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},u.map(({icon:y,title:_,details:b,link:x})=>{const v=[p(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[y?p(jn,{class:"vp-highlight-icon",icon:y}):null,p("span",{innerHTML:_})]),b?p(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:b}):null];return p(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:x}]},x?Kt(x)?p("a",{class:"vp-highlight-item link",href:x,"aria-label":_,target:"_blank"},v):p(Rn,{class:"vp-highlight-item link",to:x,"aria-label":_},()=>v):p("div",{class:"vp-highlight-item"},v))}))]))]])])};Fu.displayName="HighlightPanel";var a2=Fu,o2=R({name:"HomePage",slots:Object,setup(n,{slots:e}){const t=Ct(),s=bn(),a=A(()=>{const{features:r}=s.value;return _a(r)?r:null}),o=A(()=>{const{highlights:r}=s.value;return _a(r)?r:null});return()=>{var r,l,c,i;return p("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(r=e.top)==null?void 0:r.call(e),p(s2),((l=o.value)==null?void 0:l.map(u=>"features"in u?p(Cp,u):p(a2,u)))||(a.value?p(hn,{appear:!0,delay:.24},()=>p(Cp,{features:a.value})):null),(c=e.center)==null?void 0:c.call(e),p(hn,{appear:!0,delay:.32},()=>p(Gr)),(i=e.bottom)==null?void 0:i.call(e)])}}}),r2=R({name:"BreadCrumb",setup(){const n=gn(),e=Fe(),t=bn(),s=ln(),a=En([]),o=A(()=>(t.value.breadcrumb||t.value.breadcrumb!==!1&&s.value.breadcrumb!==!1)&&a.value.length>1),r=A(()=>t.value.breadcrumbIcon||t.value.breadcrumbIcon!==!1&&s.value.breadcrumbIcon!==!1),l=()=>{const c=t2(n.value.path,e.value).map(({link:i,name:u})=>{const{path:d,meta:h}=Xt(i);return h?{title:h[An.shortTitle]||h[An.title]||u,icon:h[An.icon],path:d}:null}).filter(i=>i!==null);c.length>1&&(a.value=c)};return mn(()=>{on(()=>n.value.path,l,{immediate:!0})}),()=>p("nav",{class:["vp-breadcrumb",{disable:!o.value}]},o.value?p("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((c,i)=>p("li",{class:{"is-active":a.value.length-1===i},property:"itemListElement",typeof:"ListItem"},[p(Rn,{to:c.path,property:"item",typeof:"WebPage"},()=>[r.value?p(jn,{icon:c.icon}):null,p("span",{property:"name"},c.title||"Unknown")]),p("meta",{property:"position",content:i+1})]))):[])}});const Sp=n=>n===!1||rt(n)?n:Dn(n)?$t(n,!0):null,zo=(n,e,t)=>{const s=n.findIndex(a=>a.link===e);if(s!==-1){const a=n[s+t];return a!=null&&a.link?a:null}for(const a of n)if(a.children){const o=zo(a.children,e,t);if(o)return o}return null};var l2=R({name:"PageNav",setup(){const n=ln(),e=bn(),t=Hr(),s=gn(),a=Us(),o=A(()=>{const l=Sp(e.value.prev);return l===!1?null:l||(n.value.prevLink===!1?null:zo(t.value,s.value.path,-1))}),r=A(()=>{const l=Sp(e.value.next);return l===!1?null:l||(n.value.nextLink===!1?null:zo(t.value,s.value.path,1))});return yn("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?r.value&&(a(r.value.link),l.preventDefault()):l.key==="ArrowLeft"&&o.value&&(a(o.value.link),l.preventDefault()))}),()=>o.value||r.value?p("nav",{class:"vp-page-nav"},[o.value?p(Yn,{class:"prev",config:o.value},()=>{var l,c;return[p("div",{class:"hint"},[p("span",{class:"arrow start"}),n.value.metaLocales.prev]),p("div",{class:"link"},[p(jn,{icon:(l=o.value)==null?void 0:l.icon}),(c=o.value)==null?void 0:c.text])]}):null,r.value?p(Yn,{class:"next",config:r.value},()=>{var l,c;return[p("div",{class:"hint"},[n.value.metaLocales.next,p("span",{class:"arrow end"})]),p("div",{class:"link"},[(l=r.value)==null?void 0:l.text,p(jn,{icon:(c=r.value)==null?void 0:c.icon})])]}):null]):null}});const p2={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},i2=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const o=Rr(n);let r;return a?r=a:o!==null&&(r=p2[o]),r?r.replace(/:repo/u,Ge(n)?n:`https://github.com/${n}`).replace(/:branch/u,e).replace(/:path/u,zi(`${Er(t)}/${s}`)):null},c2=()=>{const n=ln(),e=gn(),t=bn();return A(()=>{const{repo:s,docsRepo:a=s,docsBranch:o="main",docsDir:r="",editLink:l,editLinkPattern:c=""}=n.value;if(!(t.value.editLink??l??!0)||!a)return null;const i=i2({docsRepo:a,docsBranch:o,docsDir:r,editLinkPattern:c,filePathRelative:e.value.filePathRelative});return i?{text:n.value.metaLocales.editLink,link:i}:null})},u2=()=>{const n=Jt(),e=ln(),t=gn(),s=bn();return A(()=>{var a,o;return!(s.value.lastUpdated??e.value.lastUpdated??!0)||!((a=t.value.git)!=null&&a.updatedTime)?null:new Date((o=t.value.git)==null?void 0:o.updatedTime).toLocaleString(n.value.lang)})},d2=()=>{const n=ln(),e=gn(),t=bn();return A(()=>{var s;return t.value.contributors??n.value.contributors??!0?((s=e.value.git)==null?void 0:s.contributors)??null:null})};var m2=R({name:"PageTitle",setup(){const n=gn(),e=bn(),t=ln(),{info:s,items:a}=k9();return()=>p("div",{class:"vp-page-title"},[p("h1",[t.value.titleIcon===!1?null:p(jn,{icon:e.value.icon}),n.value.title]),p(Lu,{info:s.value,...a.value===null?{}:{items:a.value}}),p("hr")])}});const Iu=()=>p(an,{name:"edit"},()=>[p("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),p("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Iu.displayName="EditIcon";var h2=R({name:"PageMeta",setup(){const n=ln(),e=c2(),t=u2(),s=d2();return()=>{const{metaLocales:a}=n.value;return p("footer",{class:"page-meta"},[e.value?p("div",{class:"meta-item edit-link"},p(Yn,{class:"label",config:e.value},{before:()=>p(Iu)})):null,p("div",{class:"meta-item git-info"},[t.value?p("div",{class:"update-time"},[p("span",{class:"label"},`${a.lastUpdated}: `),p(Na,()=>p("span",{class:"info"},t.value))]):null,s.value&&s.value.length?p("div",{class:"contributors"},[p("span",{class:"label"},`${a.contributors}: `),s.value.map(({email:o,name:r},l)=>[p("span",{class:"contributor",title:`email: ${o}`},r),l!==s.value.length-1?",":""])]):null])])}}}),E2=R({name:"NormalPage",slots:Object,setup(n,{slots:e}){const t=bn(),{isDarkmode:s}=zs(),a=ln(),o=A(()=>t.value.toc||t.value.toc!==!1&&a.value.toc!==!1);return()=>p("main",{id:"main-content",class:"vp-page"},p(te("LocalEncrypt")?se("LocalEncrypt"):fc,()=>{var r,l,c,i;return[(r=e.top)==null?void 0:r.call(e),t.value.cover?p("div",{class:"page-cover"},p("img",{src:wn(t.value.cover),alt:"","no-view":""})):null,p(r2),p(m2),o.value?p(Ou,{headerDepth:t.value.headerDepth??a.value.headerDepth??2},{before:()=>{var u;return(u=e.tocBefore)==null?void 0:u.call(e)},after:()=>{var u;return(u=e.tocAfter)==null?void 0:u.call(e)}}):null,(l=e.contentBefore)==null?void 0:l.call(e),p(Gr),(c=e.contentAfter)==null?void 0:c.call(e),p(h2),p(l2),te("CommentService")?p(se("CommentService"),{darkmode:s.value}):null,(i=e.bottom)==null?void 0:i.call(e)]}))}}),k2=R({name:"Layout",slots:Object,setup(n,{slots:e}){const t=mt(),s=ln(),a=gn(),o=bn(),{isMobile:r}=Hs(),l=A(()=>{var c,i;return((c=s.value.blog)==null?void 0:c.sidebarDisplay)||((i=t.value.blog)==null?void 0:i.sidebarDisplay)||"mobile"});return()=>[p(jr),p(zr,{},{default:()=>{var c;return((c=e.default)==null?void 0:c.call(e))||(o.value.home?p(o2):p(e2,()=>p(E2,{key:a.value.path},{top:()=>{var i;return(i=e.top)==null?void 0:i.call(e)},bottom:()=>{var i;return(i=e.bottom)==null?void 0:i.call(e)},contentBefore:()=>{var i;return(i=e.contentBefore)==null?void 0:i.call(e)},contentAfter:()=>{var i;return(i=e.contentAfter)==null?void 0:i.call(e)},tocBefore:()=>{var i;return(i=e.tocBefore)==null?void 0:i.call(e)},tocAfter:()=>{var i;return(i=e.tocAfter)==null?void 0:i.call(e)}})))},...l.value==="none"?{}:{navScreenBottom:()=>p(se("BloggerInfo"))},...!r.value&&l.value==="always"?{sidebar:()=>p(se("BloggerInfo"))}:{}})]}}),f2=R({name:"NotFoundHint",setup(){const n=ln(),e=()=>{const t=n.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>p("div",{class:"not-found-hint"},[p("p",{class:"error-code"},"404"),p("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),p("p",{class:"error-hint"},e())])}}),g2=R({name:"NotFound",slots:Object,setup(n,{slots:e}){const t=je(),s=Fe(),a=ln();return()=>[p(jr),p(zr,{noSidebar:!0},()=>{var o;return p("main",{id:"main-content",class:"vp-page not-found"},((o=e.default)==null?void 0:o.call(e))||[p(f2),p("div",{class:"actions"},[p("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),p("button",{type:"button",class:"action-button",onClick:()=>{t.push(a.value.home??s.value)}},a.value.routeLocales.home)])])})]}});const b2={},v2={category:{"/":{path:"/category/",map:{笔记:{path:"/category/笔记/",indexes:[0]},网络安全:{path:"/category/网络安全/",indexes:[1,2]},CoreDNS:{path:"/category/coredns/",indexes:[3]},iptables:{path:"/category/iptables/",indexes:[1]},Network:{path:"/category/network/",indexes:[1]},Linux:{path:"/category/linux/",indexes:[4]},Shell:{path:"/category/shell/",indexes:[4]},神操作:{path:"/category/神操作/",indexes:[4]},Nginx:{path:"/category/nginx/",indexes:[5]},数据库:{path:"/category/数据库/",indexes:[6]},VirtualPrivateNetwork:{path:"/category/virtualprivatenetwork/",indexes:[7]}}}},tag:{"/":{path:"/tag/",map:{}}}},Nu=["/note-book/","/note-book/Iptables/iptables%E6%8B%A6%E6%88%AA%E5%86%85%E7%BD%91%E5%A5%87%E8%99%8E%E8%BD%AF%E4%BB%B6%E7%97%85%E6%AF%92%E4%B8%8A%E6%8A%A5.html","/note-book/%E6%9D%80%E4%B8%8D%E6%AD%BB%E7%9A%84%E8%BF%9B%E7%A8%8B.html","/note-book/CoreDNS/","/note-book/LinuxOperaSystem/shell%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E9%9A%90%E8%97%8F%E5%91%BD%E4%BB%A4.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html","/note-book/DatabaseSystem/MySQL/%E5%9B%BD%E5%86%85%E6%BA%90.html","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/cfw-cdn-ssl-ws-tls.html","/free-service/github-direct.html","/note-book/Nginx__OpenResty/Nginx%E4%BD%9C%E4%B8%BA%E6%8E%A8%E6%B5%81%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/free-service/docker-hub-mirror.html","/note-book/CVE/CVE-2023-32233.html","/note-book/CVE/CVE-2024-21626%E5%88%A9%E7%94%A8%E5%9C%BA%E6%99%AF.html","/note-book/DNS/Bind9%E7%9A%84%E4%BD%BF%E7%94%A8.html","/note-book/DNS/NamedManager.html","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS_7%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E9%85%8D%E7%BD%AE.html","/note-book/Nginx__OpenResty/apt%E5%AE%89%E8%A3%85OpenResty%E6%95%99%E7%A8%8B.html","/note-book/Nginx__OpenResty/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/Nginx__OpenResty/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html","/note-book/Nginx__OpenResty/Nginx%E7%9A%84url%E8%BF%87%E9%95%BF%E5%AF%BC%E8%87%B4fastcgi%E5%8D%8F%E8%AE%AE%E5%B4%A9%E6%BA%83.html","/note-book/Nginx__OpenResty/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html","/note-book/Nginx__OpenResty/nginx-plus-module-lua.html","/note-book/Nginx__OpenResty/nginx01.html","/note-book/Nginx__OpenResty/nginx02.html","/note-book/Nginx__OpenResty/nginx03.html","/note-book/Nginx__OpenResty/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html","/note-book/Nginx__OpenResty/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html","/note-book/Nginx__OpenResty/ngx_stream_ssl_preread_module.html","/note-book/OperaSystems/Ubtuntu/Ubuntu%E7%9A%84%E7%B3%BB%E7%BB%9F%E9%98%B2%E7%81%AB%E5%A2%99ufw%E5%92%8Cdocker%E5%B9%B6%E5%AD%98%E7%AB%AF%E5%8F%A3%E7%AD%96%E7%95%A5%E6%97%A0%E6%95%88bug.html","/note-book/AI-Training/Windows_WSL2%E5%AE%89%E8%A3%85nvidia-cuda%E9%A9%B1%E5%8A%A8.html","/note-book/Research_Develop/Python/Python%E4%BB%A3%E7%A0%81%E8%97%8F%E6%AF%92.html","/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04_Server%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AE%BE%E7%BD%AEIP%E5%9C%B0%E5%9D%80.html","/note-book/OperaSystems/Ubtuntu/Ubuntu_20.04%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E7%BD%91%E7%BB%9C%EF%BC%88%E7%BD%91%E7%BB%9C%E5%9B%BE%E6%A0%87%E4%B8%A2%E5%A4%B1%EF%BC%89%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html","/note-book/LinuxOperaSystem/%E7%94%A8shell%E7%94%9F%E6%88%90%E5%8C%85%E5%90%AB%E5%A4%A7%E5%86%99%E3%80%81%E5%B0%8F%E5%86%99%E3%80%81%E6%95%B0%E5%AD%97%E3%80%81%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E7%9A%84%E9%9A%8F%E6%9C%BA%E5%AD%97%E7%AC%A6%E4%B8%B2.html","/note-book/Docker/docker%E6%8A%A5%E9%94%99bridge-nf-call-iptables%E5%86%85%E6%A0%B8%E4%BF%AE%E6%95%B4.html","/note-book/misc/%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8Cu%E7%9B%BE%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B.html","/note-book/Zabbix/Zabbix-Agent%E4%B8%BB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C.html","/note-book/Zabbix/Zabbix-Agent%E8%A2%AB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C.html","/note-book/Zabbix/zabbix-docker.html","/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/CPU%E9%B8%A1%E8%A1%80BIOS.html","/note-book/%E6%B4%8B%E5%9E%83%E5%9C%BE%E4%B8%BB%E6%9C%BA/GPU%E7%9F%BF%E5%8D%A1%E4%BD%93%E8%B4%A8%E6%A3%80%E6%B5%8B.html","/note-book/S3-SimpleStorageService/Minio%E6%8C%82%E8%BD%BD%E5%88%B0nfs%E4%B8%8D%E6%88%90%E5%8A%9F.html","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E8%BF%9E%E6%8E%A5WARP%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B7%BB%E5%8A%A0IPv4IPv6%E7%BD%91%E7%BB%9C.html","/note-book/OperaSystems/Ubtuntu/ubuntu%E6%9F%A5%E7%9C%8Bintel-GPU%E4%BD%BF%E7%94%A8%E6%83%85%E5%86%B5.html","/note-book/Docker/Docker%E9%80%83%E9%80%B8%E6%BC%8F%E6%B4%9E%E6%A1%88%E4%BE%8B.html","/note-book/LinuxOperaSystem/bash%E5%88%A9%E7%94%A8%E6%89%A9%E5%B1%95%E5%AD%97%E7%AC%A6%E9%9B%86%E5%AE%9E%E7%8E%B0rm.html","/note-book/OperaSystems/%E4%BD%BF%E7%94%A8dev%E4%B8%8B%E7%9A%84tcp-udp%E5%AE%9E%E7%8E%B0socket.html","/about/friend.html","/about/me.html","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/Docker%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2Clash%E6%9C%8D%E5%8A%A1%E4%B8%8E%E7%AE%A1%E7%90%86%E9%9D%A2%E6%9D%BF.html","/note-book/AI-Training/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%BC%80%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%92%8C%E9%97%AD%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98.html","/note-book/LinuxOperaSystem/Linux%E5%A4%87%E4%BB%BD%E4%B8%BAliveOS.html","/note-book/LinuxOperaSystem/grub2%E6%89%8B%E5%8A%A8%E5%91%BD%E4%BB%A4%E5%BC%95%E5%AF%BC%E6%95%99%E7%A8%8B.html","/note-book/LinuxOperaSystem/shell%E8%84%9A%E6%9C%AC%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%B7%A5%E5%85%B7shc.html","/note-book/LinuxOperaSystem/ssh%20%E8%AE%BE%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html","/note-book/LinuxOperaSystem/ssh%E6%8A%8A%E8%BF%9C%E7%A8%8B%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%88%B0%E6%9C%AC%E5%9C%B0.html","/note-book/LinuxOperaSystem/tcpdump%E6%8A%93%E5%8C%85%E5%91%BD%E4%BB%A4.html","/note-book/LinuxOperaSystem/%E5%91%BD%E4%BB%A4%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9F%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html","/note-book/LinuxOperaSystem/%E6%8C%89%E7%94%B5%E6%BA%90%E8%BD%AF%E5%85%B3%E6%9C%BA%E8%A6%81%E7%AD%89%E5%BE%8560%E7%A7%92%E8%AE%BE%E7%BD%AE%E6%9B%B4%E7%9F%AD%E7%9A%84%E6%97%B6%E9%97%B4.html","/note-book/LinuxOperaSystem/%E8%AE%A9%E6%9F%90%E4%B8%AA%E5%91%BD%E4%BB%A4%E4%B8%8D%E8%BE%93%E5%87%BA.html","/note-book/LinuxOperaSystem/Git/Centos7%20yum%20install%20git2.x%20%E8%BE%83%E6%96%B0%E7%89%88%E6%9C%AC.html","/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/AWK%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0.html","/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%20Runtime.html","/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%E9%A9%B1%E5%8A%A8.html","/note-book/LinuxOperaSystem/Samba/Linux%E4%BA%8EWindows%E4%BD%BF%E7%94%A8Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody%20nogroup%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","/note-book/LinuxOperaSystem/Samba/Linux%E6%8C%82%E8%BD%BDcifs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html","/note-book/LinuxOperaSystem/Samba/Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody.html","/note-book/LinuxOperaSystem/Samba/Samba%E9%85%8D%E7%BD%AE%E4%B8%BE%E4%BE%8B.html","/note-book/LinuxOperaSystem/VNC/Ubuntu%2020.04%20%E5%AE%89%E8%A3%85VNC%20Server.html","/note-book/LinuxOperaSystem/Vim/vi%E7%BC%96%E8%BE%91%E5%99%A8.html","/note-book/LinuxOperaSystem/history/","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/001-PyQt%E4%BB%8B%E7%BB%8D%E4%B8%8E%E5%AE%89%E8%A3%85.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/002-PyQt%E5%9F%BA%E6%9C%ACUI.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/003-%E5%B8%83%E5%B1%80.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/004-%E5%B8%83%E5%B1%802.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/005-%E7%AA%97%E5%8F%A3.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/006-%E4%BF%A1%E5%8F%B7%E4%B8%8E%E6%A7%BD.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/007-Qt%20Designer.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/008-PyQt%E5%A4%9A%E7%BA%BF%E7%A8%8B.html","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/009-%E6%89%93%E5%8C%85%E4%B8%BA%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F.html","/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/goaccess/goaccess%E7%BB%99ftp%E7%94%9F%E6%88%90%E5%88%86%E6%9E%90%E5%9B%BE.html","/note-book/DatabaseSystem/MySQL/%E6%9F%A5%E7%9C%8BMysql%E6%95%B0%E6%8D%AE%E9%87%8F%E5%A4%A7%E5%B0%8F.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html","/note-book/Esxi/ESXI%E4%B8%AD%E7%9A%84%E7%BD%91%E7%BB%9C.html","/note-book/Kubernetes/kubeadm%E9%83%A8%E7%BD%B2Kubernetes%201.24%E6%AD%A5%E9%AA%A4.html","/note-book/Docker/%E8%B7%A8%E5%AE%BF%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1overlay%E5%92%8Cmacvlay.html","/note-book/Zabbix/zabbix%E7%9A%84VMwareGuest%E8%A1%A5%E5%85%85%E7%BC%BA%E9%99%B7.html","/note-book/Kubernetes/crictl%E7%99%BB%E5%BD%95dockerhub.html","/note-book/Kubernetes/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%BC%82%E5%B8%B8%E6%96%AD%E7%94%B5%E9%80%A0%E6%88%90kubernetes%E6%95%85%E9%9A%9C.html","/note-book/DistributedSystem/JumperServer/JumperServerDockerDeploy.html","/note-book/WindowsOperaSystem/PowerShell%20%E6%89%93%E5%8D%B0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html","/note-book/WindowsOperaSystem/PowerShell%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html","/note-book/WindowsOperaSystem/Windows%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%94%B9%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7%E7%9B%AE%E5%BD%95.html","/note-book/Docker/Docker%E4%B8%8D%E6%AD%BB%E8%BF%9B%E7%A8%8B.html","/note-book/AI-Training/torch%20%E7%8E%AF%E5%A2%83.html","/note-book/Android/Ubuntu%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85Android%20SDK.html","/note-book/Btrfs/","/note-book/Btrfs/Snapper%E7%8E%A9%E8%BD%ACbtrfs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html","/note-book/Btrfs/btrfs%E7%9A%84%E4%BD%BF%E7%94%A8.html","/note-book/Btrfs/some%20device%20missing%E6%96%B9%E6%B3%95.html","/note-book/CoreDNS/ext-plugin-redis.html","/note-book/CoreDNS/%E7%90%86%E8%A7%A3CoreDNS.html","/note-book/Docker/Docker%202375%E6%94%BB%E5%87%BB%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html","/note-book/Docker/Docker%20%E7%9A%84daemon.json.html","/note-book/Docker/Docker%E6%97%A5%E5%BF%97%E9%80%89%E9%A1%B9%E9%85%8D%E7%BD%AE%E4%B8%8A%E5%8E%BB%E5%AF%B9%E5%B7%B2%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E4%B8%8D%E7%94%9F%E6%95%88.html","/note-book/Docker/Docker%E7%8E%AF%E5%A2%83%E6%B8%85%E7%90%86.html","/note-book/Docker/RockyLinux%E5%AE%89%E8%A3%85Docker.html","/note-book/Docker/docker%20pull%20push.html","/note-book/Docker/docker%20run%20%E5%91%BD%E4%BB%A4%E6%89%80%E6%9C%89%E7%9A%84%E9%80%89%E9%A1%B9.html","/note-book/Docker/docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-PDF.html","/note-book/Docker/docker%E5%AE%B9%E5%99%A8%E9%9B%86%E5%90%88.html","/note-book/Docker/%E4%B8%80%E6%AC%A1%E6%9E%84%E5%BB%BA%E5%87%BAx86%E5%8F%8Aarm%E9%95%9C%E5%83%8F.html","/note-book/Docker/%E4%B8%80%E9%94%AE%E8%BF%90%E8%A1%8Cweb%E7%89%88%E6%9C%ACvscode.html","/note-book/Docker/%E5%8F%AA%E4%BD%BF%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9B%E5%BB%BA%E5%AE%B9%E5%99%A8-%E6%89%AB%E6%8F%8F.html","/note-book/Docker/%E5%9C%A8Dockerfile%E9%87%8C%E8%B0%83%E6%95%B4%E6%97%B6%E5%8C%BA.html","/note-book/Docker/%E6%89%8B%E6%92%95Docker%E5%AE%B9%E5%99%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%89%88.html","/note-book/Docker/%E6%89%8B%E6%92%95docker%E5%AE%B9%E5%99%A8.html","/note-book/Docker/%E6%89%8B%E6%92%95docker%E7%BD%91%E7%BB%9C.html","/note-book/Docker/%E6%8A%8A%E5%AE%B9%E5%99%A8%E5%81%9A%E6%88%90%E7%89%A9%E7%90%86%E6%9C%BA.html","/note-book/Docker/%E6%9B%B4%E6%94%B9docker%E6%9C%8D%E5%8A%A1%E7%BD%91%E6%AE%B5%E5%88%86%E9%85%8D%E5%9C%B0%E5%9D%80.html","/note-book/ELK/EFK8.4.3%E9%83%A8%E7%BD%B2.html","/note-book/ELK/ELK.html","/note-book/GRUB/%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B.html","/note-book/Gawk/AWK%E6%A1%88%E4%BE%8B%E5%85%A5%E9%97%A8%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86.html","/note-book/Gawk/Shell%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E4%B8%89%E5%89%91%E5%AE%A2-AWK.html","/note-book/Gawk/awk%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html","/note-book/Gawk/awk%20%E5%AD%A6%E4%B9%A0%20%20%E9%AB%98%E7%BA%A7%E8%BE%93%E5%87%BA%20%2002.html","/note-book/Gawk/awk%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%20%2001.html","/note-book/Gawk/%E5%8C%B9%E9%85%8D%E7%89%B9%E5%AE%9A%E5%AD%97%E7%AC%A6%E5%B9%B6%E8%BE%93%E5%87%BA%E5%85%B6%E5%90%8E%E7%9A%84%E8%8B%A5%E5%B9%B2%E8%A1%8C.html","/note-book/Git/Git%20%E7%9A%84%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE.html","/note-book/Git/Git%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86%E5%90%88%E5%B9%B6%E4%B8%8E%E5%88%A0%E9%99%A4%E5%91%BD%E4%BB%A4.html","/note-book/Git/Git%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%AF%AD%E8%A8%80%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%8F%8A%E6%96%87%E4%BB%B6%E5%8D%A0%E6%AF%94.html","/note-book/Git/Git%E9%AB%98%E7%BA%A7%E6%93%8D%E4%BD%9C%E5%92%8C%E7%BB%83%E4%B9%A0%E7%BD%91%E7%AB%99.html","/note-book/Git/","/note-book/Git/git%20%E6%8B%89%E5%8F%96%E5%85%A8%E9%83%A8%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html","/note-book/Git/git%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4.html","/note-book/Git/git%E6%9B%B4%E6%96%B0%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html","/note-book/Git/git%E7%BB%9F%E8%AE%A1%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81%E8%A1%8C%E6%95%B0.html","/note-book/Git/git%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9B%9E%E9%80%80%E5%88%B0%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC.html","/note-book/Git/%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%98%BE%E7%A4%BAgitmoji.html","/note-book/Gitlab/Gitlab%E4%BA%8C%E5%BC%80%E4%BB%8E%E8%80%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F.html","/note-book/Gitlab/Gitlab%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D.html","/note-book/Gitlab/Gitlab%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2.html","/note-book/Gitlab/Gitlab%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html","/note-book/Gitlab/Gitlab%E9%85%8D%E7%BD%AE%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/note-book/HA-LVS-Keepalived/ha-lvs-keepalived.html","/note-book/HA-LVS-Keepalived/haproxy.html","/note-book/HA-LVS-Keepalived/keepalived.html","/note-book/Harbor/Harbor%E7%A6%BB%E7%BA%BF%E6%90%AD%E5%BB%BA.html","/note-book/Iptables/Linux%E5%86%85%E6%A0%B8%E5%AD%90%E7%B3%BB%E7%BB%9F%20-%20%E7%BD%91%E7%BB%9C%20netfilter.html","/note-book/Iptables/iptables%E8%AF%A6%E8%A7%A3-%E6%9C%B1%E5%85%89%E5%8D%B0.html","/note-book/Iptables/linux%E4%B8%8BIPTABLES%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3.html","/note-book/Iptables/%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0ip_forward.html","/note-book/Jenkins/jenkins%E5%A4%87%E4%BB%BD.html","/note-book/Jenkins/jenkins%E6%9E%84%E5%BB%BA%E6%8C%81%E7%BB%AD%E5%8C%96%E9%9B%86%E6%88%90%E5%B9%B3%E5%8F%B0.html","/note-book/Jenkins/jenkins%E7%9A%84docker%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.html","/note-book/Jenkins/%E4%BF%AE%E6%94%B9Jenkins%E6%8F%92%E4%BB%B6%E4%B8%BA%E5%9B%BD%E5%86%85%E6%BA%90.html","/note-book/Kubernetes/Kubernetes%20Api%20Endpoint.html","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html","/note-book/Kubernetes/Kubernetes%20Service%20Account%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90Token.html","/note-book/Kubernetes/Kubernetes%20crictl%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3.html","/note-book/Kubernetes/Kubernetes%E6%9C%80%E5%B0%8F%E9%AB%98%E5%8F%AF%E7%94%A8%E6%9E%B6%E6%9E%84%E5%9B%BE.html","/note-book/Kubernetes/Kubernetes%E6%9C%89%E5%93%AA%E4%BA%9B%E7%BB%84%E4%BB%B6.html","/note-book/Kubernetes/Kubernetes%E7%9A%84NetworkPlicy.html","/note-book/Kubernetes/NameSpace%20%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB%E9%9A%94%E7%A6%BB%E4%BA%86%E4%BB%80%E4%B9%88.html","/note-book/Kubernetes/Request%E5%92%8CLimit.html","/note-book/Kubernetes/SSL%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%8F%91.html","/note-book/Kubernetes/etcd%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%89%E8%8A%82%E7%82%B9%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2.html","/note-book/Kubernetes/k8s%E5%88%A0%E9%99%A4Terminating%E7%8A%B6%E6%80%81ns.html","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%80%EF%BC%89kubectl%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%BA%8C%EF%BC%89%E6%A0%B8%E5%BF%83%E7%BD%91%E7%BB%9C%E6%8F%92%E4%BB%B6Flannel.html","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%BA%94%EF%BC%89dashboard--WEB%E7%AE%A1%E7%90%86.html","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%85%AD%EF%BC%89k8s%E5%B9%B3%E6%BB%91%E5%8D%87%E7%BA%A7.html","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%9B%9B%EF%BC%89%E6%9C%8D%E5%8A%A1%E6%9A%B4%E9%9C%B2-ingress%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B9%8Btraefik.html","/note-book/Kubernetes/%E4%B8%80%E6%AC%A1kubeadm%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9%E5%87%BA%E7%8E%B0etcd%E6%A3%80%E6%9F%A5%E9%94%99%E8%AF%AF.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%83%EF%BC%89%20%E9%83%A8%E7%BD%B2%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%89%EF%BC%89%20kube-controller-manager%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%8C%EF%BC%89%20kube-apiserver%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%94%EF%BC%89%20kubelet%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%85%AD%EF%BC%89%20kube-proxy%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%9B%9B%EF%BC%89%20kube-scheduler%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E9%83%A8%E7%BD%B2Kubernetes.html","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFLabel%E5%92%8CLabel%E9%80%89%E6%8B%A9%E5%99%A8.html","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFName%E5%92%8CNameSpace.html","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFPod%E5%92%8CPod%E6%8E%A7%E5%88%B6%E5%99%A8.html","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFService%E5%92%8CIngress.html","/note-book/Kubernetes/%E4%BD%BF%E7%94%A8%20vmagent%20%E4%BB%A3%E6%9B%BF%20Prometheus%20%E9%87%87%E9%9B%86%E7%9B%91%E6%8E%A7%E6%8C%87%E6%A0%87.html","/note-book/Kubernetes/%E5%B8%B8%E7%94%A8%E4%BC%98%E5%8C%96.html","/note-book/LinuxFromScratch/LFS-NoteBook.html","/note-book/OpenSSH-Server/ssh%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E7%99%BB%E9%99%86%E5%AF%86%E7%A0%81.html","/note-book/OperaSystems/CPU%E5%92%8C%E5%86%85%E5%AD%98%E7%9A%84%E6%9E%B6%E6%9E%84%20UMA%E5%92%8CNUMA.html","/note-book/OperaSystems/Journal%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1%E8%AF%A6%E8%A7%A3.html","/note-book/OperaSystems/Linux%E4%B8%8B%E7%9A%84ASLR%EF%BC%88PIE%EF%BC%89%E5%86%85%E5%AD%98%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6%E5%92%8C%E7%BB%95%E8%BF%87.html","/note-book/OperaSystems/Linux%E5%8D%87%E7%BA%A7%E5%86%85%E6%A0%B8%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95.html","/note-book/OperaSystems/Linux%E6%8E%92%E6%9F%A5%E5%93%AA%E4%B8%AA%E8%BF%9B%E7%A8%8B%E5%92%8CIP%E5%9C%A8%E5%8D%A0%E7%94%A8%E7%BD%91%E9%80%9F.html","/note-book/OperaSystems/Linux%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%85%8D%E5%AF%86%E7%A0%81sudo.html","/note-book/OperaSystems/Linux%E7%BD%91%E7%BB%9C%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96%E7%A7%98%E7%B1%8D.html","/note-book/OperaSystems/Linux%E8%99%9A%E6%8B%9F%E7%BD%91%E7%BB%9C%E8%AE%BE%E5%A4%87%E4%B9%8Bbridge.html","/note-book/OperaSystems/Shell%E5%BF%AB%E6%8D%B7%E9%94%AE.html","/note-book/OperaSystems/date%E5%91%BD%E4%BB%A4.html","/note-book/OperaSystems/grep%E5%91%BD%E4%BB%A4.html","/note-book/OperaSystems/ip%E5%91%BD%E4%BB%A4.html","/note-book/OperaSystems/macvlan%E8%AF%A6%E8%A7%A3.html","/note-book/OperaSystems/proc-sysrq-trigger%E8%AF%A6%E8%A7%A3.html","/note-book/OperaSystems/proc%E8%AF%A6%E8%A7%A3.html","/note-book/OperaSystems/sed.html","/note-book/OperaSystems/sysstat%20Linux%E7%8A%B6%E6%80%81%E5%B7%A5%E5%85%B7%E5%8C%85.html","/note-book/OperaSystems/%E4%BD%BF%E7%94%A8curl%E5%AE%9E%E7%8E%B0%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81.html","/note-book/OperaSystems/%E5%A4%87%E4%BB%BDLinux%E7%B3%BB%E7%BB%9F.html","/note-book/OperaSystems/%E5%A4%A7%E9%87%8F%E4%BD%BF%E7%94%A8swap%E5%AF%BC%E8%87%B4%E6%97%A0%E6%B3%95%E5%88%87%E6%8D%A2.html","/note-book/OperaSystems/%E5%B8%B8%E8%A7%81%E4%B9%B1%E7%A0%81%E4%BA%A7%E7%94%9F%E5%8E%9F%E5%9B%A0.html","/note-book/OperaSystems/%E6%9B%B4%E6%8D%A2%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AF%AD%E8%A8%80.html","/note-book/OperaSystems/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8FPATH.html","/note-book/OperaSystems/%E8%BF%9B%E7%A8%8B.html","/note-book/OperaSystems/%E9%80%BB%E8%BE%91%E5%8D%B7%E6%97%A0%E6%B3%95%E5%88%A0%E9%99%A4.html","/note-book/PhotoShop/ps%E5%A6%82%E4%BD%95%E5%8E%BB%E6%B0%B4%E5%8D%B0%E7%9A%844%E4%B8%AA%E6%96%B9%E6%B3%95.html","/note-book/Physical_server/Huawei%20x288%E7%B3%BB%E5%88%97%E9%A3%8E%E6%89%87%E8%BD%AC%E9%80%9F%E8%B0%83%E9%80%9F.html","/note-book/Portainer/Portainer%20%E5%8D%95%E6%9C%BA%E9%83%A8%E7%BD%B2.html","/note-book/Prometheus/Prometheus%E7%9B%91%E6%8E%A7Windows%E4%B8%BB%E6%9C%BA.html","/note-book/RabbitMQ/rabbitmq.html","/note-book/RouterOS/Azure%E5%88%B7%E5%86%99ROS%E6%95%99%E7%A8%8B.html","/note-book/RouterOS/RouterOS%E5%88%A9%E7%94%A8%EF%BC%88L2TP%EF%BC%89%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%96%B9%E5%BC%82%E5%9C%B0%E7%BB%84%E7%BD%91.html","/note-book/RouterOS/%E7%94%A8ros%E8%B7%AF%E7%94%B1%E4%BD%9C%E4%B8%BA%E4%B8%AD%E8%BD%AC%E6%95%99%E7%A8%8B.html","/note-book/S3-SimpleStorageService/MiniO_Docker_Deploy.html","/note-book/Tomcat/tomcat.html","/note-book/Traefik/","/note-book/Traefik/traefik%E4%BD%9C%E4%B8%BAdocker%E8%BE%B9%E7%BC%98%E8%B7%AF%E7%94%B1.html","/note-book/VMware/%E5%90%84%E4%B8%AA%E7%89%88%E6%9C%AC%E7%9A%84%E6%BF%80%E6%B4%BB%E5%AF%86%E9%92%A5.html","/note-book/VMware/%E8%99%9A%E6%8B%9F%E5%8C%96%E7%89%A9%E7%90%86%E6%9C%BA.html","/note-book/Zabbix/zabbix.html","/note-book/ebook/ebook.html","/note-book/memcache-redis/memcache-redis.html","/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html","/note-book/DistributedSystem/Ansible/Centos7.x%20%E5%AE%89%E8%A3%85Python3.9.7%20%20Ansible4.5.html","/note-book/DistributedSystem/Ansible/ansible%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%90%E7%BB%B4.html","/note-book/DistributedSystem/JumperServer/HA_Deploy.html","/note-book/DistributedSystem/JumperServer/","/note-book/DistributedSystem/OpenStack/OpenStack-Queens%E7%89%88%E6%90%AD%E5%BB%BA%E8%AF%A6%E8%A7%A3.html","/note-book/Gitlab/CI/gitlab%20ci%20%E7%BC%96%E5%86%99.html","/note-book/Gitlab/CI/gitlab%20ci%20%E9%83%A8%E7%BD%B2.html","/note-book/Gitlab/CI/%E9%83%A8%E7%BD%B2Kubernetes%E7%B1%BB%E5%9E%8B%E7%9A%84gitlab-runner.html","/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html","/note-book/OperaSystems/OperatingSystemPrinciple/CPU%E7%9A%84%E8%99%9A%E6%8B%9F%E5%8C%96.html","/note-book/OperaSystems/OperatingSystemPrinciple/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%BB%8B%E7%BB%8D.html","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7%E9%85%8D%E7%BD%AE%E6%94%AF%E6%8C%81AUFS%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html","/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8%E9%87%8D%E5%90%AF%E7%BD%91%E5%8D%A1%E7%9A%84%E6%96%B9%E6%B3%95.html","/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld%E9%85%8D%E7%BD%AE.html","/note-book/OperaSystems/RedHatEnterpriseLinux/%E5%88%B6%E4%BD%9CCenOS%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html","/note-book/OperaSystems/RedHatEnterpriseLinux/%E9%85%8D%E7%BD%AESSH%E5%85%8D%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81.html","/note-book/OperaSystems/Ubtuntu/Linux%20%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E6%A0%BC%E5%BC%8F.html","/note-book/OperaSystems/Ubtuntu/Ubuntu%E6%9B%B4%E6%94%B9%E4%B8%BA24%E5%B0%8F%E6%97%B6%E5%88%B6.html","/note-book/OperaSystems/Ubtuntu/Ubuntu%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html","/note-book/OperaSystems/Ubtuntu/VMware%E8%99%9A%E6%8B%9F%E6%9C%BA%20Linux%E7%B3%BB%E7%BB%9F%20Ubuntu%2020.04%20%E7%A1%AC%E7%9B%98-%E7%A3%81%E7%9B%98%E6%89%A9%E5%AE%B9.html","/note-book/OperaSystems/Ubtuntu/apt%E6%9F%A5%E8%AF%A2%E6%9F%90%E4%B8%AA%E8%BD%AF%E4%BB%B6%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%88%E6%9C%AC.html","/note-book/OperaSystems/Ubtuntu/linux%E5%85%B3%E9%97%AD%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4%E9%9A%8F%E6%9C%BA%E5%8C%96%EF%BC%88ASLR%EF%BC%89.html","/note-book/OperaSystems/Ubtuntu/ubuntu14.04%20%E5%BF%98%E8%AE%B0%E4%BA%86%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%AF%86%E7%A0%81%E5%92%8Croot%E5%AF%86%E7%A0%81.html","/note-book/OperaSystems/Ubtuntu/ubuntu%E5%AE%89%E8%A3%85nfs.html","/note-book/Research_Develop/Algorithm/","/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html","/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html","/note-book/Research_Develop/C/","/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html","/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research_Develop/Python/python%20re.html","/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html","/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html","/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/%E5%9F%BA%E4%BA%8EWireguard%E6%8A%80%E6%9C%AF%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E6%90%AD%E5%BB%BA%EF%BC%88%E5%9F%BA%E4%BA%8ELighthouse%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%89.html","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E4%BC%98%E7%A7%80%E7%9A%84%E8%90%BD%E5%9C%B0%E6%A1%86%E6%9E%B6%20XrayR.html","/note-book/Zabbix/ebook/","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/","/note-book/Research_Develop/C/ACLLib/ACLLib.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10%20Multi-CPU%20Scheduling.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13%20Address%20Spaces.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14%20Memory%20API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15%20Address%20Translation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16%20Segmentation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17%20Free%20Space%20Management.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18%20Introduction%20to%20Paging.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19%20Translation%20Lookaside%20Buffers.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20%20Advanced%20Page%20Tables.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/21%20Swapping%20Mechanisms.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/22%20Swapping%20Policies.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23%20Complete%20VM%20Systems.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4%20Processes.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5%20Process%20API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6%20Direct%20Execution.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7%20CPU%20Scheduling.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8%20Multi-level%20Feedback.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26%20Concurrency%20and%20Threads.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27%20Thread%20API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28%20Locks.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29%20Locked%20Data%20Structures.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30%20Condition%20Variables.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31%20Semaphores.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32%20Concurrency%20Bugs.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33%20Event-based%20Concurrency.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36%20IO%20Devices.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37%20Hard%20Disk%20Drives.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39%20Files%20and%20Directories.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40%20File%20System%20Implementation.html"],Go=En(v2);He(Go);const Vu=n=>{const e=gn(),t=bn(),s=Fe();return A(()=>{var l;const a=n??((l=t.value.blog)==null?void 0:l.key)??"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!Go.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const o=Go.value[a][s.value],r={path:o.path,map:{}};for(const c in o.map){const i=o.map[c];r.map[c]={path:i.path,items:[]};for(const u of i.indexes){const{path:d,meta:h}=Xt(Nu[u]);r.map[c].items.push({path:d,info:h})}e.value.path===i.path&&(r.currentItems=r.map[c].items)}return r})},A2={article:{"/":{path:"/article/",indexes:[8,9,10,11,12,13,14,15,16,17,18,5,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,4,40,41,42,7,43,44,45,46,47,1,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,96,97,98,99,100,101,3,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,6,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,2]}},star:{"/":{path:"/star/",indexes:[]}},timeline:{"/":{path:"/timeline/",indexes:[8,9,10,11,12,13,14,15,16,17,18,5,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,4,40,41,42,7,43,44,45,46,47,1,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,96,97,98,99,100,101,3,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,6,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,2]}}},jo=En(A2);He(jo);const Ha=n=>{const e=bn(),t=Fe();return A(()=>{var r;const s=n??((r=e.value.blog)==null?void 0:r.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!jo.value[s])throw new Error(`useBlogType: key ${n} is invalid`);const a=jo.value[s][t.value],o={path:a.path,items:[]};for(const l of a.indexes){const{path:c,meta:i}=Xt(Nu[l]);o.items.push({path:c,info:i})}return o})},Mu=()=>p(an,{name:"lock"},()=>p("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Mu.displayName="LockIcon";var y2=[];const $u=Symbol.for("categoryMap"),Gs=()=>{const n=kn($u);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},_2=()=>{const n=Vu("category");me($u,n)},js=()=>{const n=mt(),e=ln();return A(()=>({...n.value.blog,...e.value.blog}))},Uu=Symbol.for("tagMap"),Ks=()=>{const n=kn(Uu);if(!n)throw new Error("useTagMap() is called without provider.");return n},B2=()=>{const n=Vu("tag");me(Uu,n)},w2=n=>{const e=ln();return A(()=>{const{[An.author]:t}=n.value;return t?Ps(t):t===!1?[]:Ps(e.value.author,!1)})},x2=n=>{const e=Gs();return A(()=>_c(n.value[An.category]).map(t=>({name:t,path:e.value.map[t].path})))},D2=n=>{const e=Ks();return A(()=>Bc(n.value[An.tag]).map(t=>({name:t,path:e.value.map[t].path})))},C2=n=>A(()=>{const{[An.date]:e}=n.value;return yr(e)}),S2=n=>{const e=Yt(n,"info"),t=js(),s=w2(e),a=x2(e),o=D2(e),r=C2(e),l=nu(),c=A(()=>({author:s.value,category:a.value,date:r.value,localizedDate:e.value[An.localizedDate]||"",tag:o.value,isOriginal:e.value[An.isOriginal]||!1,readingTime:e.value[An.readingTime]||null,readingTimeLocale:e.value[An.readingTime]&&l.value?Xc(e.value[An.readingTime],l.value):null,pageview:n.path})),i=A(()=>t.value.articleInfo);return{info:c,items:i}},Hu=Symbol(""),Ws=()=>{const n=kn(Hu);if(!n)throw new Error("useArticles() is called without provider.");return n},P2=()=>{const n=Ha("article");me(Hu,n)},zu=Symbol(""),Kr=()=>{const n=kn(zu);if(!n)throw new Error("useStars() is called without provider.");return n},L2=()=>{const n=Ha("star");me(zu,n)},Gu=Symbol(""),Wr=()=>{const n=kn(Gu);if(!n)throw new Error("useTimelines() is called without provider.");return n},O2=()=>{const n=Ha("timeline"),e=A(()=>{const t=[];return n.value.items.forEach(({info:s,path:a})=>{const o=yr(s[An.date]);if(o){const r=o.getFullYear(),l=o.getMonth()+1,c=o.getDate();(!t[0]||t[0].year!==r)&&t.unshift({year:r,items:[]}),t[0].items.push({date:`${l}/${c}`,info:s,path:a})}}),{...n.value,config:t.reverse()}});me(Gu,e)},R2=()=>{P2(),_2(),L2(),B2(),O2()};var T2=R({name:"SocialMedia",setup(){const n=js(),e=Ct(),t=A(()=>{const s=n.value.medias;return s?Ke(s).map(([a,o])=>({name:a,icon:b2[a],url:o})):[]});return()=>t.value.length?p("div",{class:"vp-social-medias"},t.value.map(({name:s,icon:a,url:o})=>p("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":s,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),qr=R({name:"BloggerInfo",setup(){const n=js(),e=Jt(),t=ln(),s=Ws(),a=Gs(),o=Ks(),r=Wr(),l=Us(),c=A(()=>{var h;return n.value.name||((h=Ps(t.value.author)[0])==null?void 0:h.name)||e.value.title}),i=A(()=>n.value.avatar||t.value.logo),u=A(()=>t.value.blogLocales),d=A(()=>n.value.intro);return()=>{const{article:h,category:E,tag:g,timeline:y}=u.value,_=[[s.value.path,s.value.items.length,h],[a.value.path,Ee(a.value.map).length,E],[o.value.path,Ee(o.value.map).length,g],[r.value.path,r.value.items.length,y]];return p("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[p("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":u.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>l(d.value)}:{}},[i.value?p("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:wn(i.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,c.value?p("div",{class:"vp-blogger-name",property:"name"},c.value):null,n.value.description?p("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,d.value?p("meta",{property:"url",content:wn(d.value)}):null]),p("div",{class:"vp-blog-counts"},_.map(([b,x,v])=>p(Rn,{class:"vp-blog-count",to:b},()=>[p("div",{class:"count"},x),p("div",v)]))),p(T2)])}}});const Qr=()=>p(an,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Qr.displayName="CategoryIcon";const Zr=()=>p(an,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Zr.displayName="TagIcon";const Yr=()=>p(an,{name:"timeline"},()=>p("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Yr.displayName="TimelineIcon";const ju=()=>p(an,{name:"slides"},()=>p("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));ju.displayName="SlideIcon";const Ku=()=>p(an,{name:"sticky"},()=>[p("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Ku.displayName="StickyIcon";const za=()=>p(an,{name:"article"},()=>p("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));za.displayName="ArticleIcon";const Wu=()=>p(an,{name:"book"},()=>p("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Wu.displayName="BookIcon";const qu=()=>p(an,{name:"link"},()=>p("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));qu.displayName="LinkIcon";const Qu=()=>p(an,{name:"project"},()=>p("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Qu.displayName="ProjectIcon";const Zu=()=>p(an,{name:"friend"},()=>p("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Zu.displayName="FriendIcon";const Ko=()=>p(an,{name:"slide-down"},()=>p("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ko.displayName="SlideDownIcon";const Yu=()=>p("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Yu.displayName="EmptyIcon";var F2=R({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const t=Yt(n,"info"),{info:s,items:a}=S2(n);return()=>{var h,E,g;const{[An.title]:o,[An.type]:r,[An.isEncrypted]:l=!1,[An.cover]:c,[An.excerpt]:i,[An.sticky]:u}=t.value,d=s.value;return p("div",{class:"vp-article-wrapper"},p("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=e.cover)==null?void 0:h.call(e,{cover:c}))||(c?[p("img",{class:"vp-article-cover",src:wn(c),loading:"lazy"}),p("meta",{property:"image",content:wn(c)})]:[]),u?p(Ku):null,p(Rn,{to:n.path},()=>{var y;return((y=e.title)==null?void 0:y.call(e,{title:o,isEncrypted:l,type:r}))||p("header",{class:"vp-article-title"},[l?p(Mu):null,r===lu.slide?p(ju):null,p("span",{property:"headline"},o)])}),((E=e.excerpt)==null?void 0:E.call(e,{excerpt:i}))||(i?p("div",{class:"vp-article-excerpt",innerHTML:i}):null),p("hr",{class:"vp-article-hr"}),((g=e.info)==null?void 0:g.call(e,{info:d}))||p(Lu,{info:d,...a.value?{items:a.value}:{}})]))}}}),I2=R({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let t;const s=ln(),a=K(""),o=A(()=>s.value.paginationLocales),r=A(()=>Math.ceil(n.total/n.perPage)),l=A(()=>!!r.value&&r.value!==1),c=A(()=>r.value<7?!1:n.current>4),i=A(()=>r.value<7?!1:n.current<r.value-3),u=A(()=>{const{current:E}=n;let g=1,y=r.value;const _=[];r.value>=7&&(E<=4&&E<r.value-3?(g=1,y=5):E>4&&E>=r.value-3?(y=r.value,g=r.value-4):r.value>7&&(g=E-2,y=E+2));for(let b=g;b<=y;b++)_.push(b);return _}),d=E=>e("updateCurrentPage",E),h=E=>{const g=parseInt(E,10);g<=r.value&&g>0?d(g):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/gu,r.value.toString())}`)};return mn(()=>{t=new gh}),()=>p("div",{class:"vp-pagination"},l.value?p("nav",{class:"vp-pagination-list"},[p("div",{class:"vp-pagination-number "},[n.current>1?p("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(n.current-1)},o.value.prev):null,c.value?[p("div",{role:"navigation",onClick:()=>d(1)},1),p("div",{class:"ellipsis"},"...")]:null,u.value.map(E=>p("div",{key:E,class:{active:n.current===E},role:"navigation",onClick:()=>d(E)},E)),i.value?[p("div",{class:"ellipsis"},"..."),p("div",{role:"navigation",onClick:()=>d(r.value)},r.value)]:null,n.current<r.value?p("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(n.current+1)},o.value.next):null]),p("div",{class:"vp-pagination-nav"},[p("label",{for:"navigation-text"},`${o.value.navigate}: `),p("input",{id:"navigation-text",value:a.value,onInput:({target:E})=>{a.value=E.value},onKeydown:E=>{E.key==="Enter"&&(E.preventDefault(),h(a.value))}}),p("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>h(a.value)},o.value.action)])]):[])}}),Jr=R({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=we(),t=je(),s=js(),a=K(1),o=A(()=>s.value.articlePerPage||10),r=A(()=>n.items.slice((a.value-1)*o.value,a.value*o.value)),l=async c=>{a.value=c;const i={...e.query};!(i.page===c.toString()||c===1&&!i.page)&&(c===1?delete i.page:i.page=c.toString(),await t.push({path:e.path,query:i}));{await Be();const{updatePageview:u}=await m(()=>import("./pageview-DDEpa5cg.js"),__vite__mapDeps([]));await u()}};return mn(()=>{const{page:c}=e.query;l(c?Number(c):1),on(a,()=>{const i=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,i)},100)})}),()=>p("div",{id:"article-list",class:"vp-article-list",role:"feed"},r.value.length?[...r.value.map(({info:c,path:i},u)=>p(hn,{appear:!0,delay:u*.04},()=>p(F2,{key:i,info:c,path:i}))),p(I2,{current:a.value,perPage:o.value,total:n.items.length,onUpdateCurrentPage:l})]:p(Yu))}}),Ju=R({name:"CategoryList",setup(){const n=gn(),e=Gs();return()=>p("ul",{class:"vp-category-list"},Ke(e.value.map).sort(([,t],[,s])=>s.items.length-t.items.length).map(([t,{path:s,items:a}])=>p("li",{class:["vp-category",`vp-category${$a(t,9)}`,{active:s===n.value.path}]},p(Rn,{to:s},()=>[t,p("span",{class:"count"},a.length)]))))}}),Xu=R({name:"TagList",setup(){const n=bn(),e=Ks(),t=s=>{var a;return s===((a=n.value.blog)==null?void 0:a.name)};return()=>p("ul",{class:"tag-list-wrapper"},Ke(e.value.map).sort(([,s],[,a])=>a.items.length-s.items.length).map(([s,{path:a,items:o}])=>p("li",{class:["tag",`tag${$a(s,9)}`,{active:t(s)}]},p(Rn,{to:a},()=>[s,p("span",{class:"tag-num"},o.length)]))))}}),N2=R({name:"TimelineList",setup(){const n=ln(),e=Wr(),t=Us(),s=A(()=>n.value.blogLocales.timeline);return()=>p("div",{class:"timeline-list-wrapper"},[p("div",{class:"timeline-list-title",onClick:()=>t(e.value.path)},[p(Yr),p("span",{class:"num"},e.value.items.length),s.value]),p("hr"),p("div",{class:"timeline-content"},p("ul",{class:"timeline-list"},e.value.config.map(({year:a,items:o},r)=>p(hn,{appear:!0,delay:.08*(r+1)},()=>p("li",[p("h3",{class:"timeline-year"},a),p("ul",{class:"timeline-year-wrapper"},o.map(({date:l,info:c,path:i})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},l),p(Rn,{class:"timeline-title",to:i},()=>c[An.title])])))])))))])}});const V2={article:za,category:Qr,tag:Zr,timeline:Yr};var nd=R({name:"InfoList",setup(){const n=ln(),e=Ws(),t=Gs(),s=A(()=>Ee(t.value.map).length),a=Kr(),o=Ks(),r=A(()=>Ee(o.value.map).length),l=Us(),c=K("article"),i=A(()=>n.value.blogLocales);return()=>p("div",{class:"vp-blog-infos"},[p("div",{class:"vp-blog-type-switcher"},Ke(V2).map(([u,d])=>p("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=u}},p("div",{class:["icon-wrapper",{active:c.value===u}],"aria-label":i.value[u],"data-balloon-pos":"up"},p(d))))),p(hn,()=>c.value==="article"?p("div",{class:"vp-star-article-wrapper"},[p("div",{class:"title",onClick:()=>l(e.value.path)},[p(za),p("span",{class:"num"},e.value.items.length),i.value.article]),p("hr"),a.value.items.length?p("ul",{class:"vp-star-articles"},a.value.items.map(({info:u,path:d},h)=>p(hn,{appear:!0,delay:.08*(h+1)},()=>p("li",{class:"vp-star-article"},p(Rn,{to:d},()=>u[An.title]))))):p("div",{class:"vp-star-article-empty"},i.value.empty.replace("$text",i.value.star))]):c.value==="category"?p("div",{class:"vp-category-wrapper"},[s.value?[p("div",{class:"title",onClick:()=>l(t.value.path)},[p(Qr),p("span",{class:"num"},s.value),i.value.category]),p("hr"),p(hn,{delay:.04},()=>p(Ju))]:p("div",{class:"vp-category-empty"},i.value.empty.replace("$text",i.value.category))]):c.value==="tag"?p("div",{class:"vp-tag-wrapper"},[r.value?[p("div",{class:"title",onClick:()=>l(o.value.path)},[p(Zr),p("span",{class:"num"},r.value),i.value.tag]),p("hr"),p(hn,{delay:.04},()=>p(Xu))]:p("div",{class:"vp-tag-empty"},i.value.empty.replace("$text",i.value.tag))]):p(hn,()=>p(N2)))])}}),Ga=R({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:t}=Hs();return()=>[p(jr),p(zr,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>p(qr),...t.value?{sidebar:()=>p(nd)}:{}})]}});const ed=()=>p("aside",{class:"vp-blog-info-wrapper"},[p(hn,()=>p(qr)),p(hn,{delay:.04},()=>p(nd))]);ed.displayName="InfoPanel";var ja=ed,M2=R({name:"BlogPage",setup(){const n=gn(),e=bn(),t=Gs(),s=Ks();return()=>{const{key:a="",name:o=""}=e.value.blog||{},r=o?a==="category"?t.value.map[o].items:a==="tag"?s.value.map[o].items:[]:[];return p(Ga,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(hn,()=>a==="category"?p(Ju):a==="tag"?p(Xu):null),o?p(hn,{appear:!0,delay:.24},()=>p(Jr,{key:n.value.path,items:r})):null]),p(hn,{delay:.16},()=>p(ja,{key:"blog"}))])))}}});const $2="//theme-hope-assets.vuejs.press/hero/default.jpg";var U2=R({name:"BlogHero",slots:Object,setup(n,{slots:e}){const t=bn(),s=Jt(),a=En(),o=A(()=>t.value.heroFullScreen??!1),r=A(()=>{const{heroText:c,heroImage:i,heroImageDark:u,heroAlt:d,heroImageStyle:h,tagline:E}=t.value;return{text:c??s.value.title??"Hello",image:i?wn(i):null,imageDark:u?wn(u):null,heroStyle:h,alt:d||c||"",tagline:E??"",isFullScreen:o.value}}),l=A(()=>{const{bgImage:c,bgImageDark:i,bgImageStyle:u}=t.value;return{image:Dn(c)?wn(c):c===!1?null:$2,imageDark:Dn(i)?wn(i):null,bgStyle:u,isFullScreen:o.value}});return()=>{var c,i;return t.value.hero===!1?null:p("div",{ref:a,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!l.value.image}]},[((c=e.heroBg)==null?void 0:c.call(e,l.value))||[l.value.image?p("div",{class:["vp-blog-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?p("div",{class:"vp-blog-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((i=e.heroInfo)==null?void 0:i.call(e,r.value))||[p(hn,{appear:!0,type:"group",delay:.04},()=>[r.value.image?p("img",{key:"light",class:["vp-blog-hero-image",{light:r.value.imageDark}],style:r.value.heroStyle,src:r.value.image,alt:r.value.alt}):null,r.value.imageDark?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:r.value.heroStyle,src:r.value.imageDark,alt:r.value.alt}):null]),p(hn,{appear:!0,delay:.08},()=>r.value.text?p("h1",{class:"vp-blog-hero-title"},r.value.text):null),p(hn,{appear:!0,delay:.12},()=>r.value.tagline?p("p",{class:"vp-blog-hero-description",innerHTML:r.value.tagline}):null)],r.value.isFullScreen?p("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[p(Ko),p(Ko)]):null])}}});const H2=["link","article","book","project","friend"];var z2=R({name:"ProjectPanel",components:{ArticleIcon:za,BookIcon:Wu,FriendIcon:Zu,LinkIcon:qu,ProjectIcon:Qu},props:{items:{type:Array,required:!0}},setup(n){const e=Ct(),t=Us(),s=(a="",o="icon")=>H2.includes(a)?p(se(`${a}-icon`)):Ge(a)?p("img",{class:"vp-project-image",src:a,alt:o}):Va(a)?p("img",{class:"vp-project-image",src:wn(a),alt:o}):p(jn,{icon:a});return()=>p("div",{class:"vp-project-panel"},n.items.map(({icon:a,link:o,name:r,desc:l},c)=>p("div",{class:["vp-project-card",{[`project${c%9}`]:!e.value}],onClick:()=>t(o)},[s(a,r),p("div",{class:"vp-project-name"},r),p("div",{class:"vp-project-desc"},l)])))}}),G2=R({name:"BlogHome",setup(){const n=Ws(),e=bn(),t=A(()=>e.value.projects??[]);return()=>p("div",{class:"vp-page vp-blog"},[p(U2),p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[t.value.length?p(hn,{appear:!0,delay:.16},()=>p(z2,{items:t.value})):null,p(hn,{appear:!0,delay:.24},()=>p(Jr,{items:n.value.items}))]),p(hn,{appear:!0,delay:.16},()=>p(ja,{key:"blog"}))]),p(hn,{appear:!0,delay:.28},()=>p(Gr))])}});const td=()=>p(Ga,()=>p(G2));td.displayName="BlogHomeLayout";var j2=td,K2=R({name:"ArticleType",setup(){const n=gn(),e=Fe(),t=ln(),s=Ws(),a=Kr(),o=A(()=>{const r=t.value.blogLocales;return[{text:r.all,path:s.value.path},{text:r.star,path:a.value.path},...y2.map(({key:l,path:c})=>({text:r[l],path:c.replace(/^\//,e.value)}))]});return()=>p("ul",{class:"vp-article-type-wrapper"},o.value.map(r=>p("li",{class:["vp-article-type",{active:r.path===n.value.path}]},p(Rn,{to:r.path},()=>r.text))))}}),W2=R({name:"BlogPage",setup(){const n=Ha(),e=bn(),t=gn(),s=Ws(),a=Kr(),o=A(()=>{const{key:r="",type:l}=e.value.blog||{};return r==="star"?a.value.items:l==="type"&&r?n.value.items:s.value.items});return()=>p(Ga,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(hn,()=>p(K2)),p(hn,{appear:!0,delay:.24},()=>p(Jr,{key:t.value.path,items:o.value}))]),p(hn,{delay:.16},()=>p(ja,{key:"blog"}))])))}}),q2=R({name:"TimelineItems",setup(){const n=js(),e=ln(),t=Wr(),s=A(()=>n.value.timeline||e.value.blogLocales.timelineTitle),a=A(()=>t.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>p("div",{class:"timeline-wrapper"},p("ul",{class:"timeline-content"},[p(hn,()=>p("li",{class:"motto"},s.value)),p(Ou,{items:a.value}),t.value.config.map(({year:o,items:r},l)=>p(hn,{appear:!0,delay:.08*(l+1),type:"group"},()=>[p("h3",{key:"title",id:o,class:"timeline-year-title"},p("span",o)),p("li",{key:"content",class:"timeline-year-list"},[p("ul",{class:"timeline-year-wrapper"},r.map(({date:c,info:i,path:u})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},c),p(Rn,{class:"timeline-title",to:u},()=>i[An.title])])))])]))]))}});const sd=()=>p(Ga,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(hn,{appear:!0,delay:.24},()=>p(q2))]),p(hn,{delay:.16},()=>p(ja,{key:"blog"}))])));sd.displayName="Timeline";var Q2=sd;$h(n=>{const e=n.t,t=n.I!==!1,s=n.i;return t?{title:e,content:s?()=>[p(jn,{icon:s}),e]:null,order:n.O,index:n.I}:null});const Z2=re({enhance:({app:n,router:e})=>{const{scrollBehavior:t}=e.options;e.options.scrollBehavior=async(...s)=>(await Ru().wait(),t(...s)),b9(n),n.component("HopeIcon",jn),n.component("BloggerInfo",qr)},setup:()=>{v9(),_9(),R2()},layouts:{Layout:k2,NotFound:g2,BlogCategory:M2,BlogHome:j2,BlogType:W2,Timeline:Q2}});lk({setup:async()=>{await m(()=>import("./index-suf8jImJ.js"),__vite__mapDeps([414,410]))}});const Y2={},ia=[u8,Rh,Mh,jh,qh,Jh,tE,lE,xE,NE,wk,Mk,p9,Z2,Y2],J2=JSON.parse(`{"base":"/","lang":"zh-CN","title":"运维开发绿皮书","description":"运维开发绿皮书,放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重。","head":[["script",{},"\\n      /*禁用F12*/\\n      document.onkeydown = function(){\\n          if(window.event.keyCode==123) {\\n              var x;\\n              var r=confirm('大佬，别扒了！不妨加个友链？\\\\n点击确认键跳转到友链！\\\\n\\\\n执意要做？亦或是再按下F12可调出控制台\\\\n');\\n              if (r==true){\\n                //x=\\"你按下的是\\\\\\"确定\\\\\\"按钮。\\";\\n                window.location.replace(\\"/友链/友链.html\\");\\n              }\\n              else{\\n                x=\\"你按下的是\\\\\\"取消\\\\\\"按钮。\\";\\n              }\\n              // document.write(x)\\n              event.preventDefault(); // 阻止默认事件行为\\n              event.keyCode=0;\\n              event.returnValue=false;\\n          }\\n      }\\n      "]],"locales":{}}`);var ps=En(J2),X2=P0,nf=()=>{const n=e8({history:X2(Er("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,t,s)=>s||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===Me){const s=Xt(e.path);if(s.path!==e.path)return s.path;const a=await s.loader();e.meta={...s.meta,_pageChunk:a}}else e.path===t.path&&(e.meta=t.meta)}),n},ef=n=>{n.component("ClientOnly",Na),n.component("Content",sc),n.component("RouteLink",Rn)},tf=(n,e,t)=>{const s=A(()=>e.currentRoute.value.path),a=Da((_,b)=>({get(){return _(),e.currentRoute.value.meta._pageChunk},set(x){e.currentRoute.value.meta._pageChunk=x,b()}})),o=A(()=>kt.resolveLayouts(t)),r=A(()=>kt.resolveRouteLocale(ps.value.locales,s.value)),l=A(()=>kt.resolveSiteLocaleData(ps.value,r.value)),c=A(()=>a.value.comp),i=A(()=>a.value.data),u=A(()=>i.value.frontmatter),d=A(()=>kt.resolvePageHeadTitle(i.value,l.value)),h=A(()=>kt.resolvePageHead(d.value,u.value,l.value)),E=A(()=>kt.resolvePageLang(i.value,l.value)),g=A(()=>kt.resolvePageLayout(i.value,o.value)),y={layouts:o,pageData:i,pageComponent:c,pageFrontmatter:u,pageHead:h,pageHeadTitle:d,pageLang:E,pageLayout:g,redirects:ec,routeLocale:r,routePath:s,routes:Ds,siteData:ps,siteLocaleData:l};return n.provide(gr,y),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>h.value},$headTitle:{get:()=>d.value},$lang:{get:()=>E.value},$page:{get:()=>i.value},$routeLocale:{get:()=>r.value},$site:{get:()=>ps.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>wn}}),y},sf=()=>{const n=a8(),e=br();let t=[];const s=()=>{n.value.forEach(r=>{const l=af(r);l&&t.push(l)})},a=()=>{const r=[];return n.value.forEach(l=>{const c=of(l);c&&r.push(c)}),r},o=()=>{document.documentElement.lang=e.value;const r=a();t.forEach((l,c)=>{const i=r.findIndex(u=>l.isEqualNode(u));i===-1?(l.remove(),delete t[c]):r.splice(i,1)}),r.forEach(l=>document.head.appendChild(l)),t=[...t.filter(l=>!!l),...r]};me(l8,o),mn(()=>{s(),on(n,o,{immediate:!1})})},af=([n,e,t=""])=>{const s=Object.entries(e).map(([l,c])=>Dn(c)?`[${l}=${JSON.stringify(c)}]`:c===!0?`[${l}]`:"").join(""),a=`head > ${n}${s}`;return Array.from(document.querySelectorAll(a)).find(l=>l.innerText===t)||null},of=([n,e,t])=>{if(!Dn(n))return null;const s=document.createElement(n);return rt(e)&&Object.entries(e).forEach(([a,o])=>{Dn(o)?s.setAttribute(a,o):o===!0&&s.setAttribute(a,"")}),Dn(t)&&s.appendChild(document.createTextNode(t)),s},rf=M1,lf=async()=>{var t;const n=rf({name:"Vuepress",setup(){var o;sf();for(const r of ia)(o=r.setup)==null||o.call(r);const s=ia.flatMap(({rootComponents:r=[]})=>r.map(l=>p(l))),a=o8();return()=>[p(a.value),s]}}),e=nf();ef(n),tf(n,e,ia);for(const s of ia)await((t=s.enhance)==null?void 0:t.call(s,{app:n,router:e,siteData:ps}));return n.use(e),{app:n,router:e}};lf().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{Bf as $,Uk as A,En as B,mn as C,dt as D,Dn as E,Cf as F,rt as G,Br as H,Qc as I,kn as J,pf as K,Wn as L,mf as M,Jo as N,Pf as O,Sf as P,Di as Q,Rn as R,ve as S,ff as T,mi as U,Yo as V,df as W,vf as X,Ul as Y,Vn as Z,bf as _,On as a,wf as a0,me as a1,Ma as a2,co as a3,Be as a4,Ri as a5,ri as a6,m as a7,hf as a8,Af as a9,it as aa,yf as ab,gf as ac,cf as ad,uf as ae,Df as af,Si as b,Ef as c,lf as createVueApp,kf as d,Pi as e,R as f,je as g,Fe as h,xe as i,Vr as j,Ts as k,K as l,A as m,yn as n,wi as o,on as p,p as q,se as r,Hk as s,Yt as t,_f as u,Gk as v,Xd as w,qc as x,zk as y,$k as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-DWG_Hdhq.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/001-PyQt介绍与安装.html-BAIki6Gp.js","assets/002-PyQt基本UI.html-uJU2pVLU.js","assets/003-布局.html-DhpcVPJu.js","assets/004-布局2.html-Dt-8n1l_.js","assets/005-窗口.html-D9jhbKvB.js","assets/006-信号与槽.html-D18wrSTR.js","assets/007-Qt Designer.html-D-FSdb1W.js","assets/008-PyQt多线程.html-CP5Pnwxp.js","assets/009-打包为可执行程序.html-B5wHI2MU.js","assets/friend.html-BR2VFHF8.js","assets/me.html-DfQ_yREt.js","assets/cloudflare-warp.html-BzW2cB-E.js","assets/docker-hub-mirror.html-CcWJPZ6S.js","assets/github-direct.html-DdBjmRE_.js","assets/tools.html-C9Q6f7uY.js","assets/index.html-CZOsG3N9.js","assets/杀不死的进程.html-C2jZg6pi.js","assets/Windows_WSL2安装nvidia-cuda驱动.html-BWdRHr8q.js","assets/torch 环境.html-C9-DrVuX.js","assets/英伟达开源驱动和闭源驱动冲突问题.html-BVvO2Np3.js","assets/Ubuntu命令行安装Android SDK.html-lvwNHtfR.js","assets/index.html-GrFDHNvD.js","assets/Snapper玩转btrfs文件系统.html-Bsv-V-J8.js","assets/btrfs的使用.html-B6bL1jyO.js","assets/some device missing方法.html-B2WFJhC3.js","assets/CVE-2023-32233.html-CwD-rnUp.js","assets/CVE-2024-21626利用场景.html-DsTNTM6o.js","assets/index.html-8YStyZ1Z.js","assets/ext-plugin-redis.html-DQTAltUZ.js","assets/理解CoreDNS.html-Qx5_7csB.js","assets/Bind9的使用.html-ClP0vOVS.js","assets/NamedManager.html-DT9AF_4K.js","assets/Docker 2375攻击和解决方案.html-VMTD1kV3.js","assets/Docker 的daemon.json.html-B5h_tZjH.js","assets/Docker不死进程.html-KEYbStZD.js","assets/Docker日志选项配置上去对已运行容器不生效.html-j6OsrJOo.js","assets/Docker环境清理.html-CiG0QmNA.js","assets/Docker逃逸漏洞案例.html-cyWUUjY4.js","assets/RockyLinux安装Docker.html-VyZPhjid.js","assets/docker pull push.html-C54Yaun-.js","assets/docker run 命令所有的选项.html-B3xawU38.js","assets/docker学习笔记-PDF.html-CjZUiJ3A.js","assets/docker容器集合.html-kWW67hyc.js","assets/docker报错bridge-nf-call-iptables内核修整.html-BMZzAy7t.js","assets/一次构建出x86及arm镜像.html-DXoArO9w.js","assets/一键运行web版本vscode.html-BwawqiYs.js","assets/只使用操作系统创建容器-扫描.html-BG4198JQ.js","assets/在Dockerfile里调整时区.html-DoQXcwxr.js","assets/手撕Docker容器命令行版.html-D98C_d6v.js","assets/手撕docker容器.html-BvhiA7FW.js","assets/手撕docker网络.html-KKokU1SU.js","assets/把容器做成物理机.html-CNTGgIBU.js","assets/更改docker服务网段分配地址.html-DpM4zpsU.js","assets/跨宿主机通信overlay和macvlay.html-DO9AFLgi.js","assets/EFK8.4.3部署.html-Di8OGOFM.js","assets/ELK.html-BnexSrUI.js","assets/ESXI中的网络.html-BLJgm94W.js","assets/配置案例.html-Cyeh8s4_.js","assets/AWK案例入门看这一篇就够了.html-BRkwbW2O.js","assets/Shell文本处理三剑客-AWK.html-CgkAeYDa.js","assets/awk 入门教程.html-Bpc9zIWx.js","assets/awk 学习  高级输出  02.html-DDlAsgdC.js","assets/awk语言学习笔记  01.html-TgwpaHya.js","assets/匹配特定字符并输出其后的若干行.html-DQ0dVc2A.js","assets/Git 的代理配置.html-X8-_ensB.js","assets/Git分支管理合并与删除命令.html-BOJ-YYag.js","assets/Git识别项目的语言类型，及文件占比.html-DKJ8eqlE.js","assets/Git高级操作和练习网站.html-CoKd_vJ7.js","assets/index.html-DvrII0O9.js","assets/git 拉取全部远程分支.html-CtFk0Vjx.js","assets/git基础命令.html-DhTsMSoB.js","assets/git更新远程分支.html-DjV_t42G.js","assets/git统计项目代码行数.html-Dwfbjo2a.js","assets/git远程仓库回退到指定版本.html-CGVQiCP6.js","assets/命令行显示gitmoji.html-CwHLD3eD.js","assets/Gitlab二开从而自定义权限系统.html-ColIkFNJ.js","assets/Gitlab备份和恢复.html-DxyuBe_V.js","assets/Gitlab安装部署.html-B5ljP5Yb.js","assets/Gitlab的一些问题.html-DXFmAgEH.js","assets/Gitlab配置邮件服务器.html-UQEZWsGp.js","assets/ha-lvs-keepalived.html-BfleGCL3.js","assets/haproxy.html-Bg6YwfF-.js","assets/keepalived.html-CEwxGedF.js","assets/Harbor离线搭建.html-CDJuI9nQ.js","assets/Linux内核子系统 - 网络 netfilter.html-CskGVFjG.js","assets/iptables拦截内网奇虎软件病毒上报.html-CdAZSda4.js","assets/iptables详解-朱光印.html-DCCAHX71.js","assets/linux下IPTABLES配置详解.html-CjpssTIE.js","assets/内核参数ip_forward.html-DAGctXWW.js","assets/jenkins备份.html-BmOwXkyN.js","assets/jenkins构建持续化集成平台.html-DKEYjSTF.js","assets/jenkins的docker部署文档.html-DPfbSwIq.js","assets/修改Jenkins插件为国内源.html-d9Etvnrp.js","assets/Kubernetes Api Endpoint.html-DES812D6.js","assets/Kubernetes Make Prometheus_Grafana.html-BNT1U_cl.js","assets/Kubernetes Service Account如何生成Token.html-DV6cT6Sw.js","assets/Kubernetes crictl管理命令详解.html-Bc1-sKDy.js","assets/Kubernetes最小高可用架构图.html-Dv4BKfjl.js","assets/Kubernetes有哪些组件.html-D78dapt2.js","assets/Kubernetes的NetworkPlicy.html-wL6nr2j1.js","assets/NameSpace 资源隔离隔离了什么.html-4mH5VbvS.js","assets/Request和Limit.html-BeXdei_h.js","assets/SSL证书签发.html-CZnbnuxQ.js","assets/crictl登录dockerhub.html-CtU45GAc.js","assets/etcd 二进制三节点集群部署.html-B1H-SFGF.js","assets/k8s删除Terminating状态ns.html-w38YZc3V.js","assets/kubeadm部署Kubernetes 1.24步骤.html-HaaKZWrd.js","assets/kubernetes进阶（一）kubectl工具使用详解.html-DEr5SNFN.js","assets/kubernetes进阶（三）服务发现-coredns.html-CUOC7dZn.js","assets/kubernetes进阶（二）核心网络插件Flannel.html-BN_UEK4J.js","assets/kubernetes进阶（五）dashboard--WEB管理.html-DckF2Jer.js","assets/kubernetes进阶（六）k8s平滑升级.html-CcpHFXur.js","assets/kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-ULpYh6I2.js","assets/一次kubeadm添加节点出现etcd检查错误.html-DMiF06xh.js","assets/二进制安装kubernetes（七） 部署知识点总结.html-4HKeAxvj.js","assets/二进制安装kubernetes（三） kube-controller-manager组件安装.html-D9qznKuR.js","assets/二进制安装kubernetes（二） kube-apiserver组件安装.html-Bk7OcMrk.js","assets/二进制安装kubernetes（五） kubelet组件安装.html-EIb_QaWs.js","assets/二进制安装kubernetes（六） kube-proxy组件安装.html-DNqMifCu.js","assets/二进制安装kubernetes（四） kube-scheduler组件安装.html-RfgAB5u4.js","assets/二进制部署Kubernetes.html-Dj-h6V00.js","assets/什么是Label和Label选择器.html-BoAbFm2j.js","assets/什么是Name和NameSpace.html-BELP5S6g.js","assets/什么是Pod和Pod控制器.html-C6esP71V.js","assets/什么是Service和Ingress.html-CU1wcGTL.js","assets/使用 vmagent 代替 Prometheus 采集监控指标.html-Dsd4iG8b.js","assets/常用优化.html-C2Hs02md.js","assets/记一次异常断电造成kubernetes故障.html-Df4BxGto.js","assets/LFS-NoteBook.html-BreNUzyn.js","assets/Linux备份为liveOS.html-Df9qS4MB.js","assets/bash利用扩展字符集实现rm.html-eviwE-Nm.js","assets/grub2手动命令引导教程.html-CfilCHDr.js","assets/shell脚本加密解密工具shc.html-BOY_OpiV.js","assets/shell通过函数隐藏命令.html-CazQLBxY.js","assets/ssh 设置反向代理.html-DEsuqXbQ.js","assets/ssh把远程端口映射到本地.html-BiQ20V8c.js","assets/tcpdump抓包命令.html-C5Sx1h9Q.js","assets/命令创建虚拟镜像文件.html-Dq279hk8.js","assets/按电源软关机要等待60秒设置更短的时间.html-CX0awZxe.js","assets/用shell生成包含大写、小写、数字、特殊字符的随机字符串.html-Bcsja8_y.js","assets/让某个命令不输出.html-Dc5ci2GN.js","assets/Nginx作为推流服务器.html-B8baz2c0.js","assets/Nginx变量大全.html-CmvViy01.js","assets/Nginx正向代理.html-DrSFnz0z.js","assets/Nginx正向代理支持https.html-D3P_mYNy.js","assets/Nginx正向代理高并发.html-BOSDWO9b.js","assets/Nginx的url过长导致fastcgi协议崩溃.html-BHqU_e5m.js","assets/Nginx的负载均衡和故障转移.html-B8T_C8iH.js","assets/apt安装OpenResty教程.html-BcofEukK.js","assets/nginx-plus-module-lua.html-D1aPGEua.js","assets/nginx01.html-BUwxjVtH.js","assets/nginx02.html-DKdKGFF_.js","assets/nginx03.html-eH8nWPjv.js","assets/nginx单机百万并发.html-BFpa9RiP.js","assets/nginx配置示例.html-CwuEhHPm.js","assets/ngx_stream_ssl_preread_module.html-COyXRyQc.js","assets/ssh日志记录登陆密码.html-f96bInSw.js","assets/CPU和内存的架构 UMA和NUMA.html-CvjcHRXd.js","assets/Journal日志服务详解.html-Bc9jzqPl.js","assets/Linux下的ASLR（PIE）内存保护机制和绕过.html-Ua6zp-Hj.js","assets/Linux升级内核的两种方法.html-Hgf87R79.js","assets/Linux排查哪个进程和IP在占用网速.html-DdFcF_yQ.js","assets/Linux普通用户免密码sudo.html-kpwBociD.js","assets/Linux网络内核参数优化秘籍.html-DIdUUUbu.js","assets/Linux虚拟网络设备之bridge.html-DnsMN218.js","assets/Shell快捷键.html-Jc2qSF03.js","assets/date命令.html-C8xi4Ljw.js","assets/grep命令.html-B888QbPg.js","assets/ip命令.html-CA0FqYkg.js","assets/macvlan详解.html-DHDu5rim.js","assets/proc-sysrq-trigger详解.html-BTp6LlSt.js","assets/proc详解.html-B7IJngJo.js","assets/sed.html-BhVvXyZS.js","assets/sysstat Linux状态工具包.html-BgGzQH15.js","assets/使用curl实现邮件发送.html-B0EpjANS.js","assets/使用dev下的tcp-udp实现socket.html-C0-7nvzf.js","assets/备份Linux系统.html-CqdfO9sF.js","assets/大量使用swap导致无法切换.html-JH4WYVy_.js","assets/常见乱码产生原因.html-Cp-M6cP6.js","assets/更换系统和命令行语言.html-CDNSf6Vo.js","assets/环境变量PATH.html-B7jgWhEa.js","assets/进程.html-ZBVdBoAf.js","assets/逻辑卷无法删除.html-CusKKRWx.js","assets/ps如何去水印的4个方法.html-WrwWqDyM.js","assets/Huawei x288系列风扇转速调速.html-CD6QZuZ8.js","assets/Portainer 单机部署.html-C2WTDONC.js","assets/Prometheus监控Windows主机.html-DwIWl68-.js","assets/rabbitmq.html-DKCJfBVR.js","assets/Azure刷写ROS教程.html-Bc82IMY3.js","assets/RouterOS利用（L2TP）实现多方异地组网.html-CkWf7xm9.js","assets/用ros路由作为中转教程.html-B_x7Q6_i.js","assets/MiniO_Docker_Deploy.html-CuzvIXhH.js","assets/Minio挂载到nfs不成功.html-D4vIiii3.js","assets/tomcat.html-C19mM003.js","assets/index.html-DRLodwxY.js","assets/traefik作为docker边缘路由.html-DnMIRp3q.js","assets/各个版本的激活密钥.html-DNMIgKUO.js","assets/虚拟化物理机.html-D-Rxy0tX.js","assets/PowerShell 打印环境变量.html-DM-2-WMm.js","assets/PowerShell 操作系统禁止运行脚本.html-B8Yq85uO.js","assets/Windows系统更改迁移用户目录.html-DKHgW7m8.js","assets/Zabbix-Agent主动模式自动注册.html-B5UMs8yZ.js","assets/Zabbix-Agent被动模式自动注册.html-DyJMcC-w.js","assets/zabbix-docker.html-BbWJlElF.js","assets/zabbix.html-X0zsQzP9.js","assets/zabbix的VMwareGuest补充缺陷.html-7Fqqoza4.js","assets/ebook.html-BnsY9Mkp.js","assets/goaccess给ftp生成分析图.html-uPkAGQfG.js","assets/memcache-redis.html-Cf2O0-UK.js","assets/中国建设银行u盾使用教程.html-Diez_kSe.js","assets/CPU鸡血BIOS.html-DkyEeOP4.js","assets/GPU矿卡体质检测.html-DKA5I5Ww.js","assets/etcd安装etcdkeeper.html-Dm5P27if.js","assets/国内源.html-WfXmt1gb.js","assets/查看Mysql数据量大小.html-D7pzy_oI.js","assets/Centos7.x 安装Python3.9.7  Ansible4.5.html-7UP3p_fn.js","assets/ansible自动化运维.html-WZHEI7zR.js","assets/HA_Deploy.html-DbsvelcQ.js","assets/JumperServerDockerDeploy.html-BYVblXkf.js","assets/index.html-AW07m5AW.js","assets/OpenStack-Queens版搭建详解.html-CuecMbwP.js","assets/gitlab ci 编写.html-DmMKWBkU.js","assets/gitlab ci 部署.html-zUQ9R4jr.js","assets/部署Kubernetes类型的gitlab-runner.html-DPYg-Ssu.js","assets/elk_kfaka.html-CCeoEMZH.js","assets/Centos7 yum install git2.x 较新版本.html-Rgf_WXIV.js","assets/AWK中的字符串操作函数.html-BoP-SEhb.js","assets/安装Nvidia Runtime.html-BFsPvmCp.js","assets/安装Nvidia驱动.html-CoejJmy1.js","assets/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-pkhmkN9g.js","assets/Linux挂载cifs文件系统.html-1LLqeMHw.js","assets/Samba共享文件时文件属性nobody.html-nwlDmQZc.js","assets/Samba配置举例.html-Bjk0exvP.js","assets/Ubuntu 20.04 安装VNC Server.html-1_RnbCwD.js","assets/vi编辑器.html-B13oQH0j.js","assets/index.html-kpqoMS8N.js","assets/CPU的虚拟化.html-3BYlfDYo.js","assets/操作系统介绍.html-CWl8H0ef.js","assets/CentOS7配置支持AUFS文件系统.html-Bru3a3yP.js","assets/CentOS_7用户账户配置.html-rTciE6IQ.js","assets/Centos8重启网卡的方法.html-zuLsG7Vs.js","assets/firewalld配置.html-Cd8otIgI.js","assets/制作CenOS操作系统.html-BkIpGCtL.js","assets/配置SSH免密码验证.html-B9TfeWZ0.js","assets/Linux 终端命令格式.html-B5PF-rwN.js","assets/Ubuntu_20.04_Server使用命令行设置IP地址.html-BgROzks2.js","assets/Ubuntu_20.04无法连接网络（网络图标丢失）的解决方案.html-D12aD8qd.js","assets/Ubuntu更改为24小时制.html-Dc6R3qmv.js","assets/Ubuntu的系统防火墙ufw和docker并存端口策略无效bug.html-BqEjz3FD.js","assets/Ubuntu软件包文件管理.html-BjVZYJbG.js","assets/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-DcT0OwVz.js","assets/apt查询某个软件有哪些版本.html-C8b7kXNP.js","assets/linux关闭地址空间随机化（ASLR）.html-UHmJiOhP.js","assets/ubuntu14.04 忘记了普通用户密码和root密码.html-HD5adKCC.js","assets/ubuntu安装nfs.html-fMuvoIm0.js","assets/ubuntu查看intel-GPU使用情况.html-xcusR1dp.js","assets/index.html-DHsXpTtl.js","assets/数据结构与算法哔哩哔哩比特就业课.html-fjw0YF9d.js","assets/C语言volatile关键字详解.html-nnqVwgr6.js","assets/index.html-Ce4WTErU.js","assets/二分查找.html-CPA9_N8i.js","assets/FastAPI-Python高性能web框架.html-BCnp-6f2.js","assets/PyInstaller带静态依赖文件打包教程.html-Cq_KBrIG.js","assets/Python之正则表达式细讲.html-BT7qE2er.js","assets/Python代码藏毒.html-BpGkvAXk.js","assets/Python数据切片例子.html-D2m6rgnC.js","assets/Python数据格式化format.html-CB_IkPI-.js","assets/python re.Match object的说明.html-Ds0SCP-o.js","assets/python re.html-Ca8NRehD.js","assets/新版VSCode中Python设置自动补全函数括号.html-sCHdxmKz.js","assets/shell脚本bad substitution.html-VT9A9wGv.js","assets/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-CYw7_JAX.js","assets/Docker一键部署Clash服务与管理面板.html-DnBjNaZM.js","assets/cfw-cdn-ssl-ws-tls.html-CKcGYEr1.js","assets/优秀的落地框架 XrayR.html-wpr-EWmF.js","assets/连接WARP为服务器添加IPv4IPv6网络.html-HKqjq-Wd.js","assets/index.html-CrR8GjHW.js","assets/index.html-ajgf1ymS.js","assets/ACLLib.html-BYKCw3ip.js","assets/01_面向对象（OOP）基本概念.html-aTNLhIjH.js","assets/02_类和对象.html-BmoVtUuI.js","assets/03_面相对象基础语法.html-BRSPJV3I.js","assets/04_面向对象封装案例.html-tVxB2DtP.js","assets/05_面向对象封装案例 II.html-CNJdnsga.js","assets/06_私有属性和私有方法.html-q0pyEI8a.js","assets/07_单例.html-LWLne3vV.js","assets/08_多态.html-B8kCh1An.js","assets/09_继承.html-DFyfJqR9.js","assets/10_类属性和类方法.html-Beva7kSC.js","assets/11_eval函数.html-CGDRHcX9.js","assets/12_模块和包.html-gb5Vo8Xu.js","assets/13_文件.html-Cm4iqDT4.js","assets/14_异常.html-DE8gIJog.js","assets/10 Multi-CPU Scheduling.html-BLNvEJw7.js","assets/13 Address Spaces.html-6YHipUdD.js","assets/14 Memory API.html-SUewis0Z.js","assets/15 Address Translation.html-DJkyy6Fg.js","assets/16 Segmentation.html-COeXKOFF.js","assets/17 Free Space Management.html-ClQx_YJw.js","assets/18 Introduction to Paging.html-EiDEurnM.js","assets/19 Translation Lookaside Buffers.html-DtnPifoE.js","assets/20 Advanced Page Tables.html-wGf30Idj.js","assets/21 Swapping Mechanisms.html-CEMaZsCn.js","assets/22 Swapping Policies.html-BQ-nKpGR.js","assets/23 Complete VM Systems.html-C8DXkrQ_.js","assets/4 Processes.html-qNt80zKX.js","assets/5 Process API.html-DJclMt92.js","assets/6 Direct Execution.html-DVIGxZHm.js","assets/7 CPU Scheduling.html-DeYa-PXb.js","assets/8 Multi-level Feedback.html-BGxoqqir.js","assets/26 Concurrency and Threads.html-2UfKxHMi.js","assets/27 Thread API.html-Djs3VfBK.js","assets/28 Locks.html-Bjz8dKRU.js","assets/29 Locked Data Structures.html-DgVjaK_q.js","assets/30 Condition Variables.html-Ledr9CBz.js","assets/31 Semaphores.html-BM47iBmQ.js","assets/32 Concurrency Bugs.html-nbjEL8NL.js","assets/33 Event-based Concurrency.html-CvJ2MHkU.js","assets/36 IO Devices.html-CSTkbQah.js","assets/37 Hard Disk Drives.html-DDGR-LyS.js","assets/39 Files and Directories.html-DEiHoUji.js","assets/40 File System Implementation.html-CXxTzHYf.js","assets/404.html-DAa5KxEE.js","assets/index.html-BMUOTUz3.js","assets/index.html-BVvzlfgX.js","assets/index.html-D0xYA2a_.js","assets/index.html-CZMBDlvF.js","assets/index.html-Csk8tTPL.js","assets/index.html-DxJtn_Ql.js","assets/index.html-D9JykAf9.js","assets/index.html-BAC0S7EZ.js","assets/index.html-BuNNQQTy.js","assets/index.html-CJRr0dsk.js","assets/index.html-CAwhwWES.js","assets/index.html-Cdw2iWfm.js","assets/index.html-X-QJW60n.js","assets/index.html-Bvqbe14k.js","assets/index.html-IXEEnU0-.js","assets/index.html-Dwc1K6Gn.js","assets/index.html-BHRPLgfb.js","assets/index.html-PjewX3s2.js","assets/index.html-B4z7pElC.js","assets/index.html-DPJVqOAP.js","assets/index.html-gw8Feo6d.js","assets/index.html-CY2Qg8wJ.js","assets/index.html-D8wi6bQI.js","assets/index.html-CENt7woN.js","assets/index.html-C-1ppk-b.js","assets/index.html-Dd--a1nR.js","assets/index.html-CuDVnpqG.js","assets/index.html-beuMr60M.js","assets/index.html-D_WVGkK-.js","assets/index.html-DZnQ2rQ8.js","assets/index.html-CxvPBNpb.js","assets/index.html-R7DEa5Vp.js","assets/index.html-DfxxHJEo.js","assets/index.html-Bh8CrmAM.js","assets/index.html-CSPAQNkL.js","assets/index.html-K8kjWfFJ.js","assets/index.html-DozymOjx.js","assets/index.html-BJYa_Lrt.js","assets/index.html-CIZ4iSuP.js","assets/index.html-C58OdHtY.js","assets/index.html-CJXZwnAB.js","assets/index.html-ClClCtqB.js","assets/index.html-PFdw3_Ya.js","assets/index.html-DOgW7wiW.js","assets/index.html-BDjjmcQG.js","assets/index.html-z0zjAguY.js","assets/index.html-B9Arr7hI.js","assets/index.html-D0dB2soE.js","assets/index.html-3xhBxM7I.js","assets/index.html-DNEHt6lr.js","assets/index.html-CIyx2ZvU.js","assets/index.html-BA2dqLpZ.js","assets/index.html-DVc-oZYc.js","assets/index.html-UcPKTOFa.js","assets/index.html-oBGS5MQU.js","assets/index.html-DP_jfwzd.js","assets/index.html-BhheJRTT.js","assets/index.html-DSMzhjk-.js","assets/index.html-BTGBltxb.js","assets/index.html-CP-7hb5w.js","assets/index.html-BN7BtKLe.js","assets/index.html-JUnXO4q8.js","assets/index.html-Bd5fin-1.js","assets/index.html-D-Bw0921.js","assets/index.html-DDT2HwiH.js","assets/index.html-BMTw0zGB.js","assets/index.html-CgM7ywey.js","assets/index.html-CWeVXB3T.js","assets/index.html-C6VZkbj2.js","assets/index.html-BNmxrH8l.js","assets/index.html-qzszmAVf.js","assets/index.html-CbEJbKh4.js","assets/index.html-7zBxjboi.js","assets/index.html-B9Hq7DaQ.js","assets/index.html-CfqEqvAM.js","assets/index.html-BinwPNnr.js","assets/index.html-BxwpsqPo.js","assets/index.html-2in5Ye0G.js","assets/index.html-BvLpk1xD.js","assets/index.html-sHKZlNif.js","assets/index.html-DWmnh7Pf.js","assets/index.html-BTT-1k8I.js","assets/index.html-B59MAFVw.js","assets/index.html-D3KUhjgb.js","assets/index-BPciVx7c.js","assets/install-MfpI6XVB.js","assets/vue-repl-Cbg9mBoi.js","assets/utils-B8VQ4rym-D7HXbP0h.js","assets/codemirror-editor-Bm2nXh5i.js","assets/index-suf8jImJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
