function Go(e,n){const s=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)s[t[a]]=!0;return n?a=>!!s[a.toLowerCase()]:a=>!!s[a]}const Pe={},Os=[],Dn=()=>{},dd=()=>!1,vd=/^on[^a-z]/,wt=e=>vd.test(e),Ko=e=>e.startsWith("onUpdate:"),Ve=Object.assign,jo=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},md=Object.prototype.hasOwnProperty,he=(e,n)=>md.call(e,n),ee=Array.isArray,xs=e=>ya(e)==="[object Map]",Il=e=>ya(e)==="[object Set]",ae=e=>typeof e=="function",ie=e=>typeof e=="string",_a=e=>typeof e=="symbol",we=e=>e!==null&&typeof e=="object",Cl=e=>(we(e)||ae(e))&&ae(e.then)&&ae(e.catch),Vl=Object.prototype.toString,ya=e=>Vl.call(e),bd=e=>ya(e).slice(8,-1),Fl=e=>ya(e)==="[object Object]",Wo=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rt=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},hd=/-(\w)/g,vn=Aa(e=>e.replace(hd,(n,s)=>s?s.toUpperCase():"")),kd=/\B([A-Z])/g,hs=Aa(e=>e.replace(kd,"-$1").toLowerCase()),Pt=Aa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ma=Aa(e=>e?`on${Pt(e)}`:""),ms=(e,n)=>!Object.is(e,n),oa=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},ra=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},bo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},fd=e=>{const n=ie(e)?Number(e):NaN;return isNaN(n)?e:n};let er;const ho=()=>er||(er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qo(e){if(ee(e)){const n={};for(let s=0;s<e.length;s++){const t=e[s],a=ie(t)?yd(t):qo(t);if(a)for(const o in a)n[o]=a[o]}return n}else if(ie(e)||we(e))return e}const gd=/;(?![^(]*\))/g,Ed=/:([^]+)/,_d=/\/\*[^]*?\*\//g;function yd(e){const n={};return e.replace(_d,"").split(gd).forEach(s=>{if(s){const t=s.split(Ed);t.length>1&&(n[t[0].trim()]=t[1].trim())}}),n}function Qo(e){let n="";if(ie(e))n=e;else if(ee(e))for(let s=0;s<e.length;s++){const t=Qo(e[s]);t&&(n+=t+" ")}else if(we(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}const Ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bd=Go(Ad);function Nl(e){return!!e||e===""}const X3=e=>ie(e)?e:e==null?"":ee(e)||we(e)&&(e.toString===Vl||!ae(e.toString))?JSON.stringify(e,Ml,2):String(e),Ml=(e,n)=>n&&n.__v_isRef?Ml(e,n.value):xs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[t,a])=>(s[`${t} =>`]=a,s),{})}:Il(n)?{[`Set(${n.size})`]:[...n.values()]}:we(n)&&!ee(n)&&!Fl(n)?String(n):n;let en;class wd{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=en,!n&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=en;try{return en=this,n()}finally{en=s}}}on(){en=this}off(){en=this.parent}stop(n){if(this._active){let s,t;for(s=0,t=this.effects.length;s<t;s++)this.effects[s].stop();for(s=0,t=this.cleanups.length;s<t;s++)this.cleanups[s]();if(this.scopes)for(s=0,t=this.scopes.length;s<t;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Pd(e,n=en){n&&n.active&&n.effects.push(e)}function $l(){return en}function Dd(e){en&&en.cleanups.push(e)}const Zo=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Hl=e=>(e.w&Jn)>0,Ul=e=>(e.n&Jn)>0,Sd=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Jn},Ld=e=>{const{deps:n}=e;if(n.length){let s=0;for(let t=0;t<n.length;t++){const a=n[t];Hl(a)&&!Ul(a)?a.delete(e):n[s++]=a,a.w&=~Jn,a.n&=~Jn}n.length=s}},la=new WeakMap;let ot=0,Jn=1;const ko=30;let kn;const ds=Symbol(""),fo=Symbol("");class Yo{constructor(n,s=null,t){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Pd(this,t)}run(){if(!this.active)return this.fn();let n=kn,s=Zn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=kn,kn=this,Zn=!0,Jn=1<<++ot,ot<=ko?Sd(this):nr(this),this.fn()}finally{ot<=ko&&Ld(this),Jn=1<<--ot,kn=this.parent,Zn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kn===this?this.deferStop=!0:this.active&&(nr(this),this.onStop&&this.onStop(),this.active=!1)}}function nr(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let Zn=!0;const zl=[];function qs(){zl.push(Zn),Zn=!1}function Qs(){const e=zl.pop();Zn=e===void 0?!0:e}function Ye(e,n,s){if(Zn&&kn){let t=la.get(e);t||la.set(e,t=new Map);let a=t.get(s);a||t.set(s,a=Zo()),Gl(a)}}function Gl(e,n){let s=!1;ot<=ko?Ul(e)||(e.n|=Jn,s=!Hl(e)):s=!e.has(kn),s&&(e.add(kn),kn.deps.push(e))}function Vn(e,n,s,t,a,o){const i=la.get(e);if(!i)return;let l=[];if(n==="clear")l=[...i.values()];else if(s==="length"&&ee(e)){const u=Number(t);i.forEach((p,d)=>{(d==="length"||!_a(d)&&d>=u)&&l.push(p)})}else switch(s!==void 0&&l.push(i.get(s)),n){case"add":ee(e)?Wo(s)&&l.push(i.get("length")):(l.push(i.get(ds)),xs(e)&&l.push(i.get(fo)));break;case"delete":ee(e)||(l.push(i.get(ds)),xs(e)&&l.push(i.get(fo)));break;case"set":xs(e)&&l.push(i.get(ds));break}if(l.length===1)l[0]&&go(l[0]);else{const u=[];for(const p of l)p&&u.push(...p);go(Zo(u))}}function go(e,n){const s=ee(e)?e:[...e];for(const t of s)t.computed&&sr(t);for(const t of s)t.computed||sr(t)}function sr(e,n){(e!==kn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Od(e,n){var s;return(s=la.get(e))==null?void 0:s.get(n)}const xd=Go("__proto__,__v_isRef,__isVue"),Kl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_a)),tr=Rd();function Rd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const t=ve(this);for(let o=0,i=this.length;o<i;o++)Ye(t,"get",o+"");const a=t[n](...s);return a===-1||a===!1?t[n](...s.map(ve)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){qs();const t=ve(this)[n].apply(this,s);return Qs(),t}}),e}function Td(e){const n=ve(this);return Ye(n,"has",e),n.hasOwnProperty(e)}class jl{constructor(n=!1,s=!1){this._isReadonly=n,this._shallow=s}get(n,s,t){const a=this._isReadonly,o=this._shallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return o;if(s==="__v_raw"&&t===(a?o?jd:Zl:o?Ql:ql).get(n))return n;const i=ee(n);if(!a){if(i&&he(tr,s))return Reflect.get(tr,s,t);if(s==="hasOwnProperty")return Td}const l=Reflect.get(n,s,t);return(_a(s)?Kl.has(s):xd(s))||(a||Ye(n,"get",s),o)?l:Ce(l)?i&&Wo(s)?l:l.value:we(l)?a?ks(l):Dt(l):l}}class Wl extends jl{constructor(n=!1){super(!1,n)}set(n,s,t,a){let o=n[s];if(Ms(o)&&Ce(o)&&!Ce(t))return!1;if(!this._shallow&&(!ca(t)&&!Ms(t)&&(o=ve(o),t=ve(t)),!ee(n)&&Ce(o)&&!Ce(t)))return o.value=t,!0;const i=ee(n)&&Wo(s)?Number(s)<n.length:he(n,s),l=Reflect.set(n,s,t,a);return n===ve(a)&&(i?ms(t,o)&&Vn(n,"set",s,t):Vn(n,"add",s,t)),l}deleteProperty(n,s){const t=he(n,s);n[s];const a=Reflect.deleteProperty(n,s);return a&&t&&Vn(n,"delete",s,void 0),a}has(n,s){const t=Reflect.has(n,s);return(!_a(s)||!Kl.has(s))&&Ye(n,"has",s),t}ownKeys(n){return Ye(n,"iterate",ee(n)?"length":ds),Reflect.ownKeys(n)}}class Id extends jl{constructor(n=!1){super(!0,n)}set(n,s){return!0}deleteProperty(n,s){return!0}}const Cd=new Wl,Vd=new Id,Fd=new Wl(!0),Jo=e=>e,Ba=e=>Reflect.getPrototypeOf(e);function zt(e,n,s=!1,t=!1){e=e.__v_raw;const a=ve(e),o=ve(n);s||(ms(n,o)&&Ye(a,"get",n),Ye(a,"get",o));const{has:i}=Ba(a),l=t?Jo:s?ni:bt;if(i.call(a,n))return l(e.get(n));if(i.call(a,o))return l(e.get(o));e!==a&&e.get(n)}function Gt(e,n=!1){const s=this.__v_raw,t=ve(s),a=ve(e);return n||(ms(e,a)&&Ye(t,"has",e),Ye(t,"has",a)),e===a?s.has(e):s.has(e)||s.has(a)}function Kt(e,n=!1){return e=e.__v_raw,!n&&Ye(ve(e),"iterate",ds),Reflect.get(e,"size",e)}function ar(e){e=ve(e);const n=ve(this);return Ba(n).has.call(n,e)||(n.add(e),Vn(n,"add",e,e)),this}function or(e,n){n=ve(n);const s=ve(this),{has:t,get:a}=Ba(s);let o=t.call(s,e);o||(e=ve(e),o=t.call(s,e));const i=a.call(s,e);return s.set(e,n),o?ms(n,i)&&Vn(s,"set",e,n):Vn(s,"add",e,n),this}function ir(e){const n=ve(this),{has:s,get:t}=Ba(n);let a=s.call(n,e);a||(e=ve(e),a=s.call(n,e)),t&&t.call(n,e);const o=n.delete(e);return a&&Vn(n,"delete",e,void 0),o}function rr(){const e=ve(this),n=e.size!==0,s=e.clear();return n&&Vn(e,"clear",void 0,void 0),s}function jt(e,n){return function(t,a){const o=this,i=o.__v_raw,l=ve(i),u=n?Jo:e?ni:bt;return!e&&Ye(l,"iterate",ds),i.forEach((p,d)=>t.call(a,u(p),u(d),o))}}function Wt(e,n,s){return function(...t){const a=this.__v_raw,o=ve(a),i=xs(o),l=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,p=a[e](...t),d=s?Jo:n?ni:bt;return!n&&Ye(o,"iterate",u?fo:ds),{next(){const{value:v,done:m}=p.next();return m?{value:v,done:m}:{value:l?[d(v[0]),d(v[1])]:d(v),done:m}},[Symbol.iterator](){return this}}}}function Hn(e){return function(...n){return e==="delete"?!1:this}}function Nd(){const e={get(o){return zt(this,o)},get size(){return Kt(this)},has:Gt,add:ar,set:or,delete:ir,clear:rr,forEach:jt(!1,!1)},n={get(o){return zt(this,o,!1,!0)},get size(){return Kt(this)},has:Gt,add:ar,set:or,delete:ir,clear:rr,forEach:jt(!1,!0)},s={get(o){return zt(this,o,!0)},get size(){return Kt(this,!0)},has(o){return Gt.call(this,o,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:jt(!0,!1)},t={get(o){return zt(this,o,!0,!0)},get size(){return Kt(this,!0)},has(o){return Gt.call(this,o,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:jt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Wt(o,!1,!1),s[o]=Wt(o,!0,!1),n[o]=Wt(o,!1,!0),t[o]=Wt(o,!0,!0)}),[e,s,n,t]}const[Md,$d,Hd,Ud]=Nd();function Xo(e,n){const s=n?e?Ud:Hd:e?$d:Md;return(t,a,o)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(he(s,a)&&a in t?s:t,a,o)}const zd={get:Xo(!1,!1)},Gd={get:Xo(!1,!0)},Kd={get:Xo(!0,!1)},ql=new WeakMap,Ql=new WeakMap,Zl=new WeakMap,jd=new WeakMap;function Wd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(e){return e.__v_skip||!Object.isExtensible(e)?0:Wd(bd(e))}function Dt(e){return Ms(e)?e:ei(e,!1,Cd,zd,ql)}function Yl(e){return ei(e,!1,Fd,Gd,Ql)}function ks(e){return ei(e,!0,Vd,Kd,Zl)}function ei(e,n,s,t,a){if(!we(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=a.get(e);if(o)return o;const i=qd(e);if(i===0)return e;const l=new Proxy(e,i===2?t:s);return a.set(e,l),l}function Rs(e){return Ms(e)?Rs(e.__v_raw):!!(e&&e.__v_isReactive)}function Ms(e){return!!(e&&e.__v_isReadonly)}function ca(e){return!!(e&&e.__v_isShallow)}function Jl(e){return Rs(e)||Ms(e)}function ve(e){const n=e&&e.__v_raw;return n?ve(n):e}function Xl(e){return ra(e,"__v_skip",!0),e}const bt=e=>we(e)?Dt(e):e,ni=e=>we(e)?ks(e):e;function si(e){Zn&&kn&&(e=ve(e),Gl(e.dep||(e.dep=Zo())))}function ti(e,n){e=ve(e);const s=e.dep;s&&go(s)}function Ce(e){return!!(e&&e.__v_isRef===!0)}function K(e){return ec(e,!1)}function xe(e){return ec(e,!0)}function ec(e,n){return Ce(e)?e:new Qd(e,n)}class Qd{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:ve(n),this._value=s?n:bt(n)}get value(){return si(this),this._value}set value(n){const s=this.__v_isShallow||ca(n)||Ms(n);n=s?n:ve(n),ms(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:bt(n),ti(this))}}function fn(e){return Ce(e)?e.value:e}const Zd={get:(e,n,s)=>fn(Reflect.get(e,n,s)),set:(e,n,s,t)=>{const a=e[n];return Ce(a)&&!Ce(s)?(a.value=s,!0):Reflect.set(e,n,s,t)}};function nc(e){return Rs(e)?e:new Proxy(e,Zd)}class Yd{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:t}=n(()=>si(this),()=>ti(this));this._get=s,this._set=t}get value(){return this._get()}set value(n){this._set(n)}}function sc(e){return new Yd(e)}class Jd{constructor(n,s,t){this._object=n,this._key=s,this._defaultValue=t,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Od(ve(this._object),this._key)}}class Xd{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Zs(e,n,s){return Ce(e)?e:ae(e)?new Xd(e):we(e)&&arguments.length>1?ev(e,n,s):K(e)}function ev(e,n,s){const t=e[n];return Ce(t)?t:new Jd(e,n,s)}class nv{constructor(n,s,t,a){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yo(n,()=>{this._dirty||(this._dirty=!0,ti(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const n=ve(this);return si(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function sv(e,n,s=!1){let t,a;const o=ae(e);return o?(t=e,a=Dn):(t=e.get,a=e.set),new nv(t,a,o||!a,s)}function Yn(e,n,s,t){let a;try{a=t?e(...t):e()}catch(o){St(o,n,s)}return a}function un(e,n,s,t){if(ae(e)){const o=Yn(e,n,s,t);return o&&Cl(o)&&o.catch(i=>{St(i,n,s)}),o}const a=[];for(let o=0;o<e.length;o++)a.push(un(e[o],n,s,t));return a}function St(e,n,s,t=!0){const a=n?n.vnode:null;if(n){let o=n.parent;const i=n.proxy,l=s;for(;o;){const p=o.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,i,l)===!1)return}o=o.parent}const u=n.appContext.config.errorHandler;if(u){Yn(u,null,10,[e,i,l]);return}}tv(e,s,a,t)}function tv(e,n,s,t=!0){console.error(e)}let ht=!1,Eo=!1;const Ue=[];let Pn=0;const Ts=[];let Cn=null,ls=0;const tc=Promise.resolve();let ai=null;function ns(e){const n=ai||tc;return e?n.then(this?e.bind(this):e):n}function av(e){let n=Pn+1,s=Ue.length;for(;n<s;){const t=n+s>>>1,a=Ue[t],o=kt(a);o<e||o===e&&a.pre?n=t+1:s=t}return n}function wa(e){(!Ue.length||!Ue.includes(e,ht&&e.allowRecurse?Pn+1:Pn))&&(e.id==null?Ue.push(e):Ue.splice(av(e.id),0,e),ac())}function ac(){!ht&&!Eo&&(Eo=!0,ai=tc.then(oc))}function ov(e){const n=Ue.indexOf(e);n>Pn&&Ue.splice(n,1)}function iv(e){ee(e)?Ts.push(...e):(!Cn||!Cn.includes(e,e.allowRecurse?ls+1:ls))&&Ts.push(e),ac()}function lr(e,n=ht?Pn+1:0){for(;n<Ue.length;n++){const s=Ue[n];s&&s.pre&&(Ue.splice(n,1),n--,s())}}function pa(e){if(Ts.length){const n=[...new Set(Ts)];if(Ts.length=0,Cn){Cn.push(...n);return}for(Cn=n,Cn.sort((s,t)=>kt(s)-kt(t)),ls=0;ls<Cn.length;ls++)Cn[ls]();Cn=null,ls=0}}const kt=e=>e.id==null?1/0:e.id,rv=(e,n)=>{const s=kt(e)-kt(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function oc(e){Eo=!1,ht=!0,Ue.sort(rv);try{for(Pn=0;Pn<Ue.length;Pn++){const n=Ue[Pn];n&&n.active!==!1&&Yn(n,null,14)}}finally{Pn=0,Ue.length=0,pa(),ht=!1,ai=null,(Ue.length||Ts.length)&&oc()}}function lv(e,n,...s){if(e.isUnmounted)return;const t=e.vnode.props||Pe;let a=s;const o=n.startsWith("update:"),i=o&&n.slice(7);if(i&&i in t){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:v,trim:m}=t[d]||Pe;m&&(a=s.map(h=>ie(h)?h.trim():h)),v&&(a=s.map(bo))}let l,u=t[l=Ma(n)]||t[l=Ma(vn(n))];!u&&o&&(u=t[l=Ma(hs(n))]),u&&un(u,e,6,a);const p=t[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,un(p,e,6,a)}}function ic(e,n,s=!1){const t=n.emitsCache,a=t.get(e);if(a!==void 0)return a;const o=e.emits;let i={},l=!1;if(!ae(e)){const u=p=>{const d=ic(p,n,!0);d&&(l=!0,Ve(i,d))};!s&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!o&&!l?(we(e)&&t.set(e,null),null):(ee(o)?o.forEach(u=>i[u]=null):Ve(i,o),we(e)&&t.set(e,i),i)}function Pa(e,n){return!e||!wt(n)?!1:(n=n.slice(2).replace(/Once$/,""),he(e,n[0].toLowerCase()+n.slice(1))||he(e,hs(n))||he(e,n))}let $e=null,Da=null;function ua(e){const n=$e;return $e=e,Da=e&&e.type.__scopeId||null,n}function ek(e){Da=e}function nk(){Da=null}function cv(e,n=$e,s){if(!n||e._n)return e;const t=(...a)=>{t._d&&Er(-1);const o=ua(n);let i;try{i=e(...a)}finally{ua(o),t._d&&Er(1)}return i};return t._n=!0,t._c=!0,t._d=!0,t}function $a(e){const{type:n,vnode:s,proxy:t,withProxy:a,props:o,propsOptions:[i],slots:l,attrs:u,emit:p,render:d,renderCache:v,data:m,setupState:h,ctx:k,inheritAttrs:E}=e;let w,_;const D=ua(e);try{if(s.shapeFlag&4){const P=a||t;w=hn(d.call(P,P,v,o,h,m,k)),_=u}else{const P=n;w=hn(P.length>1?P(o,{attrs:u,slots:l,emit:p}):P(o,null)),_=n.props?u:pv(u)}}catch(P){pt.length=0,St(P,e,1),w=Oe(tn)}let y=w;if(_&&E!==!1){const P=Object.keys(_),{shapeFlag:C}=y;P.length&&C&7&&(i&&P.some(Ko)&&(_=uv(_,i)),y=Xn(y,_))}return s.dirs&&(y=Xn(y),y.dirs=y.dirs?y.dirs.concat(s.dirs):s.dirs),s.transition&&(y.transition=s.transition),w=y,ua(D),w}const pv=e=>{let n;for(const s in e)(s==="class"||s==="style"||wt(s))&&((n||(n={}))[s]=e[s]);return n},uv=(e,n)=>{const s={};for(const t in e)(!Ko(t)||!(t.slice(9)in n))&&(s[t]=e[t]);return s};function dv(e,n,s){const{props:t,children:a,component:o}=e,{props:i,children:l,patchFlag:u}=n,p=o.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return t?cr(t,i,p):!!i;if(u&8){const d=n.dynamicProps;for(let v=0;v<d.length;v++){const m=d[v];if(i[m]!==t[m]&&!Pa(p,m))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:t===i?!1:t?i?cr(t,i,p):!0:!!i;return!1}function cr(e,n,s){const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const o=t[a];if(n[o]!==e[o]&&!Pa(s,o))return!0}return!1}function vv({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const rc="components";function je(e,n){return bv(rc,e,!0,n)||e}const mv=Symbol.for("v-ndc");function bv(e,n,s=!0,t=!1){const a=$e||Fe;if(a){const o=a.type;if(e===rc){const l=am(o,!1);if(l&&(l===n||l===vn(n)||l===Pt(vn(n))))return o}const i=pr(a[e]||o[e],n)||pr(a.appContext[e],n);return!i&&t?o:i}}function pr(e,n){return e&&(e[n]||e[vn(n)]||e[Pt(vn(n))])}const hv=e=>e.__isSuspense;function lc(e,n){n&&n.pendingBranch?ee(e)?n.effects.push(...e):n.effects.push(e):iv(e)}function cc(e,n){return oi(e,null,n)}const qt={};function le(e,n,s){return oi(e,n,s)}function oi(e,n,{immediate:s,deep:t,flush:a,onTrack:o,onTrigger:i}=Pe){var l;const u=$l()===((l=Fe)==null?void 0:l.scope)?Fe:null;let p,d=!1,v=!1;if(Ce(e)?(p=()=>e.value,d=ca(e)):Rs(e)?(p=()=>e,t=!0):ee(e)?(v=!0,d=e.some(P=>Rs(P)||ca(P)),p=()=>e.map(P=>{if(Ce(P))return P.value;if(Rs(P))return us(P);if(ae(P))return Yn(P,u,2)})):ae(e)?n?p=()=>Yn(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return m&&m(),un(e,u,3,[h])}:p=Dn,n&&t){const P=p;p=()=>us(P())}let m,h=P=>{m=D.onStop=()=>{Yn(P,u,4)}},k;if(Us)if(h=Dn,n?s&&un(n,u,3,[p(),v?[]:void 0,h]):p(),a==="sync"){const P=rm();k=P.__watcherHandles||(P.__watcherHandles=[])}else return Dn;let E=v?new Array(e.length).fill(qt):qt;const w=()=>{if(D.active)if(n){const P=D.run();(t||d||(v?P.some((C,O)=>ms(C,E[O])):ms(P,E)))&&(m&&m(),un(n,u,3,[P,E===qt?void 0:v&&E[0]===qt?[]:E,h]),E=P)}else D.run()};w.allowRecurse=!!n;let _;a==="sync"?_=w:a==="post"?_=()=>Qe(w,u&&u.suspense):(w.pre=!0,u&&(w.id=u.uid),_=()=>wa(w));const D=new Yo(p,_);n?s?w():E=D.run():a==="post"?Qe(D.run.bind(D),u&&u.suspense):D.run();const y=()=>{D.stop(),u&&u.scope&&jo(u.scope.effects,D)};return k&&k.push(y),y}function kv(e,n,s){const t=this.proxy,a=ie(e)?e.includes(".")?pc(t,e):()=>t[e]:e.bind(t,t);let o;ae(n)?o=n:(o=n.handler,s=n);const i=Fe;Hs(this);const l=oi(a,o.bind(t),s);return i?Hs(i):vs(),l}function pc(e,n){const s=n.split(".");return()=>{let t=e;for(let a=0;a<s.length&&t;a++)t=t[s[a]];return t}}function us(e,n){if(!we(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ce(e))us(e.value,n);else if(ee(e))for(let s=0;s<e.length;s++)us(e[s],n);else if(Il(e)||xs(e))e.forEach(s=>{us(s,n)});else if(Fl(e))for(const s in e)us(e[s],n);return e}function sk(e,n){const s=$e;if(s===null)return e;const t=Oa(s)||s.proxy,a=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,l,u,p=Pe]=n[o];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&us(l),a.push({dir:i,instance:t,value:l,oldValue:void 0,arg:u,modifiers:p}))}return e}function wn(e,n,s,t){const a=e.dirs,o=n&&n.dirs;for(let i=0;i<a.length;i++){const l=a[i];o&&(l.oldValue=o[i].value);let u=l.dir[t];u&&(qs(),un(u,s,8,[e.el,l,e,n]),Qs())}}const Wn=Symbol("_leaveCb"),Qt=Symbol("_enterCb");function uc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return de(()=>{e.isMounted=!0}),ri(()=>{e.isUnmounting=!0}),e}const ln=[Function,Array],dc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},fv={name:"BaseTransition",props:dc,setup(e,{slots:n}){const s=ss(),t=uc();let a;return()=>{const o=n.default&&ii(n.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const E of o)if(E.type!==tn){i=E;break}}const l=ve(e),{mode:u}=l;if(t.isLeaving)return Ha(i);const p=ur(i);if(!p)return Ha(i);const d=ft(p,l,t,s);gt(p,d);const v=s.subTree,m=v&&ur(v);let h=!1;const{getTransitionKey:k}=p.type;if(k){const E=k();a===void 0?a=E:E!==a&&(a=E,h=!0)}if(m&&m.type!==tn&&(!cs(p,m)||h)){const E=ft(m,l,t,s);if(gt(m,E),u==="out-in")return t.isLeaving=!0,E.afterLeave=()=>{t.isLeaving=!1,s.update.active!==!1&&s.update()},Ha(i);u==="in-out"&&p.type!==tn&&(E.delayLeave=(w,_,D)=>{const y=vc(t,m);y[String(m.key)]=m,w[Wn]=()=>{_(),w[Wn]=void 0,delete d.delayedLeave},d.delayedLeave=D})}return i}}},gv=fv;function vc(e,n){const{leavingVNodes:s}=e;let t=s.get(n.type);return t||(t=Object.create(null),s.set(n.type,t)),t}function ft(e,n,s,t){const{appear:a,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:v,onLeave:m,onAfterLeave:h,onLeaveCancelled:k,onBeforeAppear:E,onAppear:w,onAfterAppear:_,onAppearCancelled:D}=n,y=String(e.key),P=vc(s,e),C=(F,V)=>{F&&un(F,t,9,V)},O=(F,V)=>{const H=V[1];C(F,V),ee(F)?F.every(Y=>Y.length<=1)&&H():F.length<=1&&H()},M={mode:o,persisted:i,beforeEnter(F){let V=l;if(!s.isMounted)if(a)V=E||l;else return;F[Wn]&&F[Wn](!0);const H=P[y];H&&cs(e,H)&&H.el[Wn]&&H.el[Wn](),C(V,[F])},enter(F){let V=u,H=p,Y=d;if(!s.isMounted)if(a)V=w||u,H=_||p,Y=D||d;else return;let z=!1;const ne=F[Qt]=Le=>{z||(z=!0,Le?C(Y,[F]):C(H,[F]),M.delayedLeave&&M.delayedLeave(),F[Qt]=void 0)};V?O(V,[F,ne]):ne()},leave(F,V){const H=String(e.key);if(F[Qt]&&F[Qt](!0),s.isUnmounting)return V();C(v,[F]);let Y=!1;const z=F[Wn]=ne=>{Y||(Y=!0,V(),ne?C(k,[F]):C(h,[F]),F[Wn]=void 0,P[H]===e&&delete P[H])};P[H]=e,m?O(m,[F,z]):z()},clone(F){return ft(F,n,s,t)}};return M}function Ha(e){if(Lt(e))return e=Xn(e),e.children=null,e}function ur(e){return Lt(e)?e.children?e.children[0]:void 0:e}function gt(e,n){e.shapeFlag&6&&e.component?gt(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ii(e,n=!1,s){let t=[],a=0;for(let o=0;o<e.length;o++){let i=e[o];const l=s==null?i.key:String(s)+String(i.key!=null?i.key:o);i.type===Ge?(i.patchFlag&128&&a++,t=t.concat(ii(i.children,n,l))):(n||i.type!==tn)&&t.push(l!=null?Xn(i,{key:l}):i)}if(a>1)for(let o=0;o<t.length;o++)t[o].patchFlag=-2;return t}/*! #__NO_SIDE_EFFECTS__ */function I(e,n){return ae(e)?Ve({name:e.name},n,{setup:e}):e}const Is=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function b(e){ae(e)&&(e={loader:e});const{loader:n,loadingComponent:s,errorComponent:t,delay:a=200,timeout:o,suspensible:i=!0,onError:l}=e;let u=null,p,d=0;const v=()=>(d++,u=null,m()),m=()=>{let h;return u||(h=u=n().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),l)return new Promise((E,w)=>{l(k,()=>E(v()),()=>w(k),d+1)});throw k}).then(k=>h!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),p=k,k)))};return I({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return p},setup(){const h=Fe;if(p)return()=>Ua(p,h);const k=D=>{u=null,St(D,h,13,!t)};if(i&&h.suspense||Us)return m().then(D=>()=>Ua(D,h)).catch(D=>(k(D),()=>t?Oe(t,{error:D}):null));const E=K(!1),w=K(),_=K(!!a);return a&&setTimeout(()=>{_.value=!1},a),o!=null&&setTimeout(()=>{if(!E.value&&!w.value){const D=new Error(`Async component timed out after ${o}ms.`);k(D),w.value=D}},o),m().then(()=>{E.value=!0,h.parent&&Lt(h.parent.vnode)&&wa(h.parent.update)}).catch(D=>{k(D),w.value=D}),()=>{if(E.value&&p)return Ua(p,h);if(w.value&&t)return Oe(t,{error:w.value});if(s&&!_.value)return Oe(s)}}})}function Ua(e,n){const{ref:s,props:t,children:a,ce:o}=n.vnode,i=Oe(e,t,a);return i.ref=s,i.ce=o,delete n.vnode.ce,i}const Lt=e=>e.type.__isKeepAlive;function Ev(e,n){mc(e,"a",n)}function _v(e,n){mc(e,"da",n)}function mc(e,n,s=Fe){const t=e.__wdc||(e.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Sa(n,t,s),s){let a=s.parent;for(;a&&a.parent;)Lt(a.parent.vnode)&&yv(t,n,s,a),a=a.parent}}function yv(e,n,s,t){const a=Sa(n,e,t,!0);fs(()=>{jo(t[n],a)},s)}function Sa(e,n,s=Fe,t=!1){if(s){const a=s[e]||(s[e]=[]),o=n.__weh||(n.__weh=(...i)=>{if(s.isUnmounted)return;qs(),Hs(s);const l=un(n,s,e,i);return vs(),Qs(),l});return t?a.unshift(o):a.push(o),o}}const Mn=e=>(n,s=Fe)=>(!Us||e==="sp")&&Sa(e,(...t)=>n(...t),s),Av=Mn("bm"),de=Mn("m"),Bv=Mn("bu"),bc=Mn("u"),ri=Mn("bum"),fs=Mn("um"),wv=Mn("sp"),Pv=Mn("rtg"),Dv=Mn("rtc");function Sv(e,n=Fe){Sa("ec",e,n)}function tk(e,n,s,t){let a;const o=s&&s[t];if(ee(e)||ie(e)){a=new Array(e.length);for(let i=0,l=e.length;i<l;i++)a[i]=n(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){a=new Array(e);for(let i=0;i<e;i++)a[i]=n(i+1,i,void 0,o&&o[i])}else if(we(e))if(e[Symbol.iterator])a=Array.from(e,(i,l)=>n(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);a=new Array(i.length);for(let l=0,u=i.length;l<u;l++){const p=i[l];a[l]=n(e[p],p,l,o&&o[l])}}else a=[];return s&&(s[t]=a),a}function ak(e,n,s={},t,a){if($e.isCE||$e.parent&&Is($e.parent)&&$e.parent.isCE)return n!=="default"&&(s.name=n),Oe("slot",s,t&&t());let o=e[n];o&&o._c&&(o._d=!1),Pc();const i=o&&hc(o(s)),l=Sc(Ge,{key:s.key||i&&i.key||`_${n}`},i||(t?t():[]),i&&e._===1?64:-2);return!a&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function hc(e){return e.some(n=>ba(n)?!(n.type===tn||n.type===Ge&&!hc(n.children)):!0)?e:null}const _o=e=>e?Rc(e)?Oa(e)||e.proxy:_o(e.parent):null,lt=Ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_o(e.parent),$root:e=>_o(e.root),$emit:e=>e.emit,$options:e=>li(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=ns.bind(e.proxy)),$watch:e=>kv.bind(e)}),za=(e,n)=>e!==Pe&&!e.__isScriptSetup&&he(e,n),Lv={get({_:e},n){const{ctx:s,setupState:t,data:a,props:o,accessCache:i,type:l,appContext:u}=e;let p;if(n[0]!=="$"){const h=i[n];if(h!==void 0)switch(h){case 1:return t[n];case 2:return a[n];case 4:return s[n];case 3:return o[n]}else{if(za(t,n))return i[n]=1,t[n];if(a!==Pe&&he(a,n))return i[n]=2,a[n];if((p=e.propsOptions[0])&&he(p,n))return i[n]=3,o[n];if(s!==Pe&&he(s,n))return i[n]=4,s[n];yo&&(i[n]=0)}}const d=lt[n];let v,m;if(d)return n==="$attrs"&&Ye(e,"get",n),d(e);if((v=l.__cssModules)&&(v=v[n]))return v;if(s!==Pe&&he(s,n))return i[n]=4,s[n];if(m=u.config.globalProperties,he(m,n))return m[n]},set({_:e},n,s){const{data:t,setupState:a,ctx:o}=e;return za(a,n)?(a[n]=s,!0):t!==Pe&&he(t,n)?(t[n]=s,!0):he(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:t,appContext:a,propsOptions:o}},i){let l;return!!s[i]||e!==Pe&&he(e,i)||za(n,i)||(l=o[0])&&he(l,i)||he(t,i)||he(lt,i)||he(a.config.globalProperties,i)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:he(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};function ok(e,n,s){const t=ss();if(s&&s.local){const a=K(e[n]);return le(()=>e[n],o=>a.value=o),le(a,o=>{o!==e[n]&&t.emit(`update:${n}`,o)}),a}else return{__v_isRef:!0,get value(){return e[n]},set value(a){t.emit(`update:${n}`,a)}}}function dr(e){return ee(e)?e.reduce((n,s)=>(n[s]=null,n),{}):e}let yo=!0;function Ov(e){const n=li(e),s=e.proxy,t=e.ctx;yo=!1,n.beforeCreate&&vr(n.beforeCreate,e,"bc");const{data:a,computed:o,methods:i,watch:l,provide:u,inject:p,created:d,beforeMount:v,mounted:m,beforeUpdate:h,updated:k,activated:E,deactivated:w,beforeDestroy:_,beforeUnmount:D,destroyed:y,unmounted:P,render:C,renderTracked:O,renderTriggered:M,errorCaptured:F,serverPrefetch:V,expose:H,inheritAttrs:Y,components:z,directives:ne,filters:Le}=n;if(p&&xv(p,t,null),i)for(const se in i){const Q=i[se];ae(Q)&&(t[se]=Q.bind(s))}if(a){const se=a.call(s,s);we(se)&&(e.data=Dt(se))}if(yo=!0,o)for(const se in o){const Q=o[se],Re=ae(Q)?Q.bind(s,s):ae(Q.get)?Q.get.bind(s,s):Dn,yn=!ae(Q)&&ae(Q.set)?Q.set.bind(s):Dn,rn=A({get:Re,set:yn});Object.defineProperty(t,se,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Ne=>rn.value=Ne})}if(l)for(const se in l)kc(l[se],t,s,se);if(u){const se=ae(u)?u.call(s):u;Reflect.ownKeys(se).forEach(Q=>{dn(Q,se[Q])})}d&&vr(d,e,"c");function W(se,Q){ee(Q)?Q.forEach(Re=>se(Re.bind(s))):Q&&se(Q.bind(s))}if(W(Av,v),W(de,m),W(Bv,h),W(bc,k),W(Ev,E),W(_v,w),W(Sv,F),W(Dv,O),W(Pv,M),W(ri,D),W(fs,P),W(wv,V),ee(H))if(H.length){const se=e.exposed||(e.exposed={});H.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>s[Q],set:Re=>s[Q]=Re})})}else e.exposed||(e.exposed={});C&&e.render===Dn&&(e.render=C),Y!=null&&(e.inheritAttrs=Y),z&&(e.components=z),ne&&(e.directives=ne)}function xv(e,n,s=Dn){ee(e)&&(e=Ao(e));for(const t in e){const a=e[t];let o;we(a)?"default"in a?o=ce(a.from||t,a.default,!0):o=ce(a.from||t):o=ce(a),Ce(o)?Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[t]=o}}function vr(e,n,s){un(ee(e)?e.map(t=>t.bind(n.proxy)):e.bind(n.proxy),n,s)}function kc(e,n,s,t){const a=t.includes(".")?pc(s,t):()=>s[t];if(ie(e)){const o=n[e];ae(o)&&le(a,o)}else if(ae(e))le(a,e.bind(s));else if(we(e))if(ee(e))e.forEach(o=>kc(o,n,s,t));else{const o=ae(e.handler)?e.handler.bind(s):n[e.handler];ae(o)&&le(a,o,e)}}function li(e){const n=e.type,{mixins:s,extends:t}=n,{mixins:a,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(n);let u;return l?u=l:!a.length&&!s&&!t?u=n:(u={},a.length&&a.forEach(p=>da(u,p,i,!0)),da(u,n,i)),we(n)&&o.set(n,u),u}function da(e,n,s,t=!1){const{mixins:a,extends:o}=n;o&&da(e,o,s,!0),a&&a.forEach(i=>da(e,i,s,!0));for(const i in n)if(!(t&&i==="expose")){const l=Rv[i]||s&&s[i];e[i]=l?l(e[i],n[i]):n[i]}return e}const Rv={data:mr,props:br,emits:br,methods:it,computed:it,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:it,directives:it,watch:Iv,provide:mr,inject:Tv};function mr(e,n){return n?e?function(){return Ve(ae(e)?e.call(this,this):e,ae(n)?n.call(this,this):n)}:n:e}function Tv(e,n){return it(Ao(e),Ao(n))}function Ao(e){if(ee(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function ze(e,n){return e?[...new Set([].concat(e,n))]:n}function it(e,n){return e?Ve(Object.create(null),e,n):n}function br(e,n){return e?ee(e)&&ee(n)?[...new Set([...e,...n])]:Ve(Object.create(null),dr(e),dr(n??{})):n}function Iv(e,n){if(!e)return n;if(!n)return e;const s=Ve(Object.create(null),e);for(const t in n)s[t]=ze(e[t],n[t]);return s}function fc(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Vv(e,n){return function(t,a=null){ae(t)||(t=Ve({},t)),a!=null&&!we(a)&&(a=null);const o=fc(),i=new WeakSet;let l=!1;const u=o.app={_uid:Cv++,_component:t,_props:a,_container:null,_context:o,_instance:null,version:lm,get config(){return o.config},set config(p){},use(p,...d){return i.has(p)||(p&&ae(p.install)?(i.add(p),p.install(u,...d)):ae(p)&&(i.add(p),p(u,...d))),u},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),u},component(p,d){return d?(o.components[p]=d,u):o.components[p]},directive(p,d){return d?(o.directives[p]=d,u):o.directives[p]},mount(p,d,v){if(!l){const m=Oe(t,a);return m.appContext=o,d&&n?n(m,p):e(m,p,v),l=!0,u._container=p,p.__vue_app__=u,Oa(m.component)||m.component.proxy}},unmount(){l&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,d){return o.provides[p]=d,u},runWithContext(p){va=u;try{return p()}finally{va=null}}};return u}}let va=null;function dn(e,n){if(Fe){let s=Fe.provides;const t=Fe.parent&&Fe.parent.provides;t===s&&(s=Fe.provides=Object.create(t)),s[e]=n}}function ce(e,n,s=!1){const t=Fe||$e;if(t||va){const a=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:va._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return s&&ae(n)?n.call(t&&t.proxy):n}}function Fv(e,n,s,t=!1){const a={},o={};ra(o,La,1),e.propsDefaults=Object.create(null),gc(e,n,a,o);for(const i in e.propsOptions[0])i in a||(a[i]=void 0);s?e.props=t?a:Yl(a):e.type.props?e.props=a:e.props=o,e.attrs=o}function Nv(e,n,s,t){const{props:a,attrs:o,vnode:{patchFlag:i}}=e,l=ve(a),[u]=e.propsOptions;let p=!1;if((t||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let v=0;v<d.length;v++){let m=d[v];if(Pa(e.emitsOptions,m))continue;const h=n[m];if(u)if(he(o,m))h!==o[m]&&(o[m]=h,p=!0);else{const k=vn(m);a[k]=Bo(u,l,k,h,e,!1)}else h!==o[m]&&(o[m]=h,p=!0)}}}else{gc(e,n,a,o)&&(p=!0);let d;for(const v in l)(!n||!he(n,v)&&((d=hs(v))===v||!he(n,d)))&&(u?s&&(s[v]!==void 0||s[d]!==void 0)&&(a[v]=Bo(u,l,v,void 0,e,!0)):delete a[v]);if(o!==l)for(const v in o)(!n||!he(n,v))&&(delete o[v],p=!0)}p&&Vn(e,"set","$attrs")}function gc(e,n,s,t){const[a,o]=e.propsOptions;let i=!1,l;if(n)for(let u in n){if(rt(u))continue;const p=n[u];let d;a&&he(a,d=vn(u))?!o||!o.includes(d)?s[d]=p:(l||(l={}))[d]=p:Pa(e.emitsOptions,u)||(!(u in t)||p!==t[u])&&(t[u]=p,i=!0)}if(o){const u=ve(s),p=l||Pe;for(let d=0;d<o.length;d++){const v=o[d];s[v]=Bo(a,u,v,p[v],e,!he(p,v))}}return i}function Bo(e,n,s,t,a,o){const i=e[s];if(i!=null){const l=he(i,"default");if(l&&t===void 0){const u=i.default;if(i.type!==Function&&!i.skipFactory&&ae(u)){const{propsDefaults:p}=a;s in p?t=p[s]:(Hs(a),t=p[s]=u.call(null,n),vs())}else t=u}i[0]&&(o&&!l?t=!1:i[1]&&(t===""||t===hs(s))&&(t=!0))}return t}function Ec(e,n,s=!1){const t=n.propsCache,a=t.get(e);if(a)return a;const o=e.props,i={},l=[];let u=!1;if(!ae(e)){const d=v=>{u=!0;const[m,h]=Ec(v,n,!0);Ve(i,m),h&&l.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!u)return we(e)&&t.set(e,Os),Os;if(ee(o))for(let d=0;d<o.length;d++){const v=vn(o[d]);hr(v)&&(i[v]=Pe)}else if(o)for(const d in o){const v=vn(d);if(hr(v)){const m=o[d],h=i[v]=ee(m)||ae(m)?{type:m}:Ve({},m);if(h){const k=gr(Boolean,h.type),E=gr(String,h.type);h[0]=k>-1,h[1]=E<0||k<E,(k>-1||he(h,"default"))&&l.push(v)}}}const p=[i,l];return we(e)&&t.set(e,p),p}function hr(e){return e[0]!=="$"}function kr(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function fr(e,n){return kr(e)===kr(n)}function gr(e,n){return ee(n)?n.findIndex(s=>fr(s,e)):ae(n)&&fr(n,e)?0:-1}const _c=e=>e[0]==="_"||e==="$stable",ci=e=>ee(e)?e.map(hn):[hn(e)],Mv=(e,n,s)=>{if(n._n)return n;const t=cv((...a)=>ci(n(...a)),s);return t._c=!1,t},yc=(e,n,s)=>{const t=e._ctx;for(const a in e){if(_c(a))continue;const o=e[a];if(ae(o))n[a]=Mv(a,o,t);else if(o!=null){const i=ci(o);n[a]=()=>i}}},Ac=(e,n)=>{const s=ci(n);e.slots.default=()=>s},$v=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=ve(n),ra(n,"_",s)):yc(n,e.slots={})}else e.slots={},n&&Ac(e,n);ra(e.slots,La,1)},Hv=(e,n,s)=>{const{vnode:t,slots:a}=e;let o=!0,i=Pe;if(t.shapeFlag&32){const l=n._;l?s&&l===1?o=!1:(Ve(a,n),!s&&l===1&&delete a._):(o=!n.$stable,yc(n,a)),i=n}else n&&(Ac(e,n),i={default:1});if(o)for(const l in a)!_c(l)&&i[l]==null&&delete a[l]};function ma(e,n,s,t,a=!1){if(ee(e)){e.forEach((m,h)=>ma(m,n&&(ee(n)?n[h]:n),s,t,a));return}if(Is(t)&&!a)return;const o=t.shapeFlag&4?Oa(t.component)||t.component.proxy:t.el,i=a?null:o,{i:l,r:u}=e,p=n&&n.r,d=l.refs===Pe?l.refs={}:l.refs,v=l.setupState;if(p!=null&&p!==u&&(ie(p)?(d[p]=null,he(v,p)&&(v[p]=null)):Ce(p)&&(p.value=null)),ae(u))Yn(u,l,12,[i,d]);else{const m=ie(u),h=Ce(u);if(m||h){const k=()=>{if(e.f){const E=m?he(v,u)?v[u]:d[u]:u.value;a?ee(E)&&jo(E,o):ee(E)?E.includes(o)||E.push(o):m?(d[u]=[o],he(v,u)&&(v[u]=d[u])):(u.value=[o],e.k&&(d[e.k]=u.value))}else m?(d[u]=i,he(v,u)&&(v[u]=i)):h&&(u.value=i,e.k&&(d[e.k]=i))};i?(k.id=-1,Qe(k,s)):k()}}}let Un=!1;const Zt=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Yt=e=>e.nodeType===8;function Uv(e){const{mt:n,p:s,o:{patchProp:t,createText:a,nextSibling:o,parentNode:i,remove:l,insert:u,createComment:p}}=e,d=(y,P)=>{if(!P.hasChildNodes()){s(null,y,P),pa(),P._vnode=y;return}Un=!1,v(P.firstChild,y,null,null,null),pa(),P._vnode=y,Un&&console.error("Hydration completed but contains mismatches.")},v=(y,P,C,O,M,F=!1)=>{const V=Yt(y)&&y.data==="[",H=()=>E(y,P,C,O,M,V),{type:Y,ref:z,shapeFlag:ne,patchFlag:Le}=P;let Se=y.nodeType;P.el=y,Le===-2&&(F=!1,P.dynamicChildren=null);let W=null;switch(Y){case $s:Se!==3?P.children===""?(u(P.el=a(""),i(y),y),W=y):W=H():(y.data!==P.children&&(Un=!0,y.data=P.children),W=o(y));break;case tn:D(y)?(W=o(y),_(P.el=y.content.firstChild,y,C)):Se!==8||V?W=H():W=o(y);break;case ct:if(V&&(y=o(y),Se=y.nodeType),Se===1||Se===3){W=y;const se=!P.children.length;for(let Q=0;Q<P.staticCount;Q++)se&&(P.children+=W.nodeType===1?W.outerHTML:W.data),Q===P.staticCount-1&&(P.anchor=W),W=o(W);return V?o(W):W}else H();break;case Ge:V?W=k(y,P,C,O,M,F):W=H();break;default:if(ne&1)(Se!==1||P.type.toLowerCase()!==y.tagName.toLowerCase())&&!D(y)?W=H():W=m(y,P,C,O,M,F);else if(ne&6){P.slotScopeIds=M;const se=i(y);if(V?W=w(y):Yt(y)&&y.data==="teleport start"?W=w(y,y.data,"teleport end"):W=o(y),n(P,se,null,C,O,Zt(se),F),Is(P)){let Q;V?(Q=Oe(Ge),Q.anchor=W?W.previousSibling:se.lastChild):Q=y.nodeType===3?xc(""):Oe("div"),Q.el=y,P.component.subTree=Q}}else ne&64?Se!==8?W=H():W=P.type.hydrate(y,P,C,O,M,F,e,h):ne&128&&(W=P.type.hydrate(y,P,C,O,Zt(i(y)),M,F,e,v))}return z!=null&&ma(z,null,O,P),W},m=(y,P,C,O,M,F)=>{F=F||!!P.dynamicChildren;const{type:V,props:H,patchFlag:Y,shapeFlag:z,dirs:ne,transition:Le}=P,Se=V==="input"&&ne||V==="option";if(Se||Y!==-1){if(ne&&wn(P,null,C,"created"),H)if(Se||!F||Y&48)for(const Q in H)(Se&&Q.endsWith("value")||wt(Q)&&!rt(Q))&&t(y,Q,null,H[Q],!1,void 0,C);else H.onClick&&t(y,"onClick",null,H.onClick,!1,void 0,C);let W;(W=H&&H.onVnodeBeforeMount)&&cn(W,C,P);let se=!1;if(D(y)){se=Bc(O,Le)&&C&&C.vnode.props&&C.vnode.props.appear;const Q=y.content.firstChild;se&&Le.beforeEnter(Q),_(Q,y,C),P.el=y=Q}if(ne&&wn(P,null,C,"beforeMount"),((W=H&&H.onVnodeMounted)||ne||se)&&lc(()=>{W&&cn(W,C,P),se&&Le.enter(y),ne&&wn(P,null,C,"mounted")},O),z&16&&!(H&&(H.innerHTML||H.textContent))){let Q=h(y.firstChild,P,y,C,O,M,F);for(;Q;){Un=!0;const Re=Q;Q=Q.nextSibling,l(Re)}}else z&8&&y.textContent!==P.children&&(Un=!0,y.textContent=P.children)}return y.nextSibling},h=(y,P,C,O,M,F,V)=>{V=V||!!P.dynamicChildren;const H=P.children,Y=H.length;for(let z=0;z<Y;z++){const ne=V?H[z]:H[z]=hn(H[z]);if(y)y=v(y,ne,O,M,F,V);else{if(ne.type===$s&&!ne.children)continue;Un=!0,s(null,ne,C,null,O,M,Zt(C),F)}}return y},k=(y,P,C,O,M,F)=>{const{slotScopeIds:V}=P;V&&(M=M?M.concat(V):V);const H=i(y),Y=h(o(y),P,H,C,O,M,F);return Y&&Yt(Y)&&Y.data==="]"?o(P.anchor=Y):(Un=!0,u(P.anchor=p("]"),H,Y),Y)},E=(y,P,C,O,M,F)=>{if(Un=!0,P.el=null,F){const Y=w(y);for(;;){const z=o(y);if(z&&z!==Y)l(z);else break}}const V=o(y),H=i(y);return l(y),s(null,P,H,V,C,O,Zt(H),M),V},w=(y,P="[",C="]")=>{let O=0;for(;y;)if(y=o(y),y&&Yt(y)&&(y.data===P&&O++,y.data===C)){if(O===0)return o(y);O--}return y},_=(y,P,C)=>{const O=P.parentNode;O&&O.replaceChild(y,P);let M=C;for(;M;)M.vnode.el===P&&(M.vnode.el=M.subTree.el=y),M=M.parent},D=y=>y.nodeType===1&&y.tagName.toLowerCase()==="template";return[d,v]}const Qe=lc;function zv(e){return Gv(e,Uv)}function Gv(e,n){const s=ho();s.__VUE__=!0;const{insert:t,remove:a,patchProp:o,createElement:i,createText:l,createComment:u,setText:p,setElementText:d,parentNode:v,nextSibling:m,setScopeId:h=Dn,insertStaticContent:k}=e,E=(f,g,B,S=null,x=null,R=null,G=!1,N=null,U=!!g.dynamicChildren)=>{if(f===g)return;f&&!cs(f,g)&&(S=L(f),Ne(f,x,R,!0),f=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:T,ref:J,shapeFlag:q}=g;switch(T){case $s:w(f,g,B,S);break;case tn:_(f,g,B,S);break;case ct:f==null&&D(g,B,S,G);break;case Ge:z(f,g,B,S,x,R,G,N,U);break;default:q&1?C(f,g,B,S,x,R,G,N,U):q&6?ne(f,g,B,S,x,R,G,N,U):(q&64||q&128)&&T.process(f,g,B,S,x,R,G,N,U,$)}J!=null&&x&&ma(J,f&&f.ref,R,g||f,!g)},w=(f,g,B,S)=>{if(f==null)t(g.el=l(g.children),B,S);else{const x=g.el=f.el;g.children!==f.children&&p(x,g.children)}},_=(f,g,B,S)=>{f==null?t(g.el=u(g.children||""),B,S):g.el=f.el},D=(f,g,B,S)=>{[f.el,f.anchor]=k(f.children,g,B,S,f.el,f.anchor)},y=({el:f,anchor:g},B,S)=>{let x;for(;f&&f!==g;)x=m(f),t(f,B,S),f=x;t(g,B,S)},P=({el:f,anchor:g})=>{let B;for(;f&&f!==g;)B=m(f),a(f),f=B;a(g)},C=(f,g,B,S,x,R,G,N,U)=>{G=G||g.type==="svg",f==null?O(g,B,S,x,R,G,N,U):V(f,g,x,R,G,N,U)},O=(f,g,B,S,x,R,G,N)=>{let U,T;const{type:J,props:q,shapeFlag:X,transition:te,dirs:re}=f;if(U=f.el=i(f.type,R,q&&q.is,q),X&8?d(U,f.children):X&16&&F(f.children,U,null,S,x,R&&J!=="foreignObject",G,N),re&&wn(f,null,S,"created"),M(U,f,f.scopeId,G,S),q){for(const Ee in q)Ee!=="value"&&!rt(Ee)&&o(U,Ee,null,q[Ee],R,f.children,S,x,Te);"value"in q&&o(U,"value",null,q.value),(T=q.onVnodeBeforeMount)&&cn(T,S,f)}re&&wn(f,null,S,"beforeMount");const Be=Bc(x,te);Be&&te.beforeEnter(U),t(U,g,B),((T=q&&q.onVnodeMounted)||Be||re)&&Qe(()=>{T&&cn(T,S,f),Be&&te.enter(U),re&&wn(f,null,S,"mounted")},x)},M=(f,g,B,S,x)=>{if(B&&h(f,B),S)for(let R=0;R<S.length;R++)h(f,S[R]);if(x){let R=x.subTree;if(g===R){const G=x.vnode;M(f,G,G.scopeId,G.slotScopeIds,x.parent)}}},F=(f,g,B,S,x,R,G,N,U=0)=>{for(let T=U;T<f.length;T++){const J=f[T]=N?qn(f[T]):hn(f[T]);E(null,J,g,B,S,x,R,G,N)}},V=(f,g,B,S,x,R,G)=>{const N=g.el=f.el;let{patchFlag:U,dynamicChildren:T,dirs:J}=g;U|=f.patchFlag&16;const q=f.props||Pe,X=g.props||Pe;let te;B&&is(B,!1),(te=X.onVnodeBeforeUpdate)&&cn(te,B,g,f),J&&wn(g,f,B,"beforeUpdate"),B&&is(B,!0);const re=x&&g.type!=="foreignObject";if(T?H(f.dynamicChildren,T,N,B,S,re,R):G||Q(f,g,N,null,B,S,re,R,!1),U>0){if(U&16)Y(N,g,q,X,B,S,x);else if(U&2&&q.class!==X.class&&o(N,"class",null,X.class,x),U&4&&o(N,"style",q.style,X.style,x),U&8){const Be=g.dynamicProps;for(let Ee=0;Ee<Be.length;Ee++){const Ie=Be[Ee],mn=q[Ie],_s=X[Ie];(_s!==mn||Ie==="value")&&o(N,Ie,mn,_s,x,f.children,B,S,Te)}}U&1&&f.children!==g.children&&d(N,g.children)}else!G&&T==null&&Y(N,g,q,X,B,S,x);((te=X.onVnodeUpdated)||J)&&Qe(()=>{te&&cn(te,B,g,f),J&&wn(g,f,B,"updated")},S)},H=(f,g,B,S,x,R,G)=>{for(let N=0;N<g.length;N++){const U=f[N],T=g[N],J=U.el&&(U.type===Ge||!cs(U,T)||U.shapeFlag&70)?v(U.el):B;E(U,T,J,null,S,x,R,G,!0)}},Y=(f,g,B,S,x,R,G)=>{if(B!==S){if(B!==Pe)for(const N in B)!rt(N)&&!(N in S)&&o(f,N,B[N],null,G,g.children,x,R,Te);for(const N in S){if(rt(N))continue;const U=S[N],T=B[N];U!==T&&N!=="value"&&o(f,N,T,U,G,g.children,x,R,Te)}"value"in S&&o(f,"value",B.value,S.value)}},z=(f,g,B,S,x,R,G,N,U)=>{const T=g.el=f?f.el:l(""),J=g.anchor=f?f.anchor:l("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:te}=g;te&&(N=N?N.concat(te):te),f==null?(t(T,B,S),t(J,B,S),F(g.children,B,J,x,R,G,N,U)):q>0&&q&64&&X&&f.dynamicChildren?(H(f.dynamicChildren,X,B,x,R,G,N),(g.key!=null||x&&g===x.subTree)&&wc(f,g,!0)):Q(f,g,B,J,x,R,G,N,U)},ne=(f,g,B,S,x,R,G,N,U)=>{g.slotScopeIds=N,f==null?g.shapeFlag&512?x.ctx.activate(g,B,S,G,U):Le(g,B,S,x,R,G,U):Se(f,g,U)},Le=(f,g,B,S,x,R,G)=>{const N=f.component=Xv(f,S,x);if(Lt(f)&&(N.ctx.renderer=$),em(N),N.asyncDep){if(x&&x.registerDep(N,W),!f.el){const U=N.subTree=Oe(tn);_(null,U,g,B)}return}W(N,f,g,B,x,R,G)},Se=(f,g,B)=>{const S=g.component=f.component;if(dv(f,g,B))if(S.asyncDep&&!S.asyncResolved){se(S,g,B);return}else S.next=g,ov(S.update),S.update();else g.el=f.el,S.vnode=g},W=(f,g,B,S,x,R,G)=>{const N=()=>{if(f.isMounted){let{next:J,bu:q,u:X,parent:te,vnode:re}=f,Be=J,Ee;is(f,!1),J?(J.el=re.el,se(f,J,G)):J=re,q&&oa(q),(Ee=J.props&&J.props.onVnodeBeforeUpdate)&&cn(Ee,te,J,re),is(f,!0);const Ie=$a(f),mn=f.subTree;f.subTree=Ie,E(mn,Ie,v(mn.el),L(mn),f,x,R),J.el=Ie.el,Be===null&&vv(f,Ie.el),X&&Qe(X,x),(Ee=J.props&&J.props.onVnodeUpdated)&&Qe(()=>cn(Ee,te,J,re),x)}else{let J;const{el:q,props:X}=g,{bm:te,m:re,parent:Be}=f,Ee=Is(g);if(is(f,!1),te&&oa(te),!Ee&&(J=X&&X.onVnodeBeforeMount)&&cn(J,Be,g),is(f,!0),q&&me){const Ie=()=>{f.subTree=$a(f),me(q,f.subTree,f,x,null)};Ee?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=$a(f);E(null,Ie,B,S,f,x,R),g.el=Ie.el}if(re&&Qe(re,x),!Ee&&(J=X&&X.onVnodeMounted)){const Ie=g;Qe(()=>cn(J,Be,Ie),x)}(g.shapeFlag&256||Be&&Is(Be.vnode)&&Be.vnode.shapeFlag&256)&&f.a&&Qe(f.a,x),f.isMounted=!0,g=B=S=null}},U=f.effect=new Yo(N,()=>wa(T),f.scope),T=f.update=()=>U.run();T.id=f.uid,is(f,!0),T()},se=(f,g,B)=>{g.component=f;const S=f.vnode.props;f.vnode=g,f.next=null,Nv(f,g.props,S,B),Hv(f,g.children,B),qs(),lr(),Qs()},Q=(f,g,B,S,x,R,G,N,U=!1)=>{const T=f&&f.children,J=f?f.shapeFlag:0,q=g.children,{patchFlag:X,shapeFlag:te}=g;if(X>0){if(X&128){yn(T,q,B,S,x,R,G,N,U);return}else if(X&256){Re(T,q,B,S,x,R,G,N,U);return}}te&8?(J&16&&Te(T,x,R),q!==T&&d(B,q)):J&16?te&16?yn(T,q,B,S,x,R,G,N,U):Te(T,x,R,!0):(J&8&&d(B,""),te&16&&F(q,B,S,x,R,G,N,U))},Re=(f,g,B,S,x,R,G,N,U)=>{f=f||Os,g=g||Os;const T=f.length,J=g.length,q=Math.min(T,J);let X;for(X=0;X<q;X++){const te=g[X]=U?qn(g[X]):hn(g[X]);E(f[X],te,B,null,x,R,G,N,U)}T>J?Te(f,x,R,!0,!1,q):F(g,B,S,x,R,G,N,U,q)},yn=(f,g,B,S,x,R,G,N,U)=>{let T=0;const J=g.length;let q=f.length-1,X=J-1;for(;T<=q&&T<=X;){const te=f[T],re=g[T]=U?qn(g[T]):hn(g[T]);if(cs(te,re))E(te,re,B,null,x,R,G,N,U);else break;T++}for(;T<=q&&T<=X;){const te=f[q],re=g[X]=U?qn(g[X]):hn(g[X]);if(cs(te,re))E(te,re,B,null,x,R,G,N,U);else break;q--,X--}if(T>q){if(T<=X){const te=X+1,re=te<J?g[te].el:S;for(;T<=X;)E(null,g[T]=U?qn(g[T]):hn(g[T]),B,re,x,R,G,N,U),T++}}else if(T>X)for(;T<=q;)Ne(f[T],x,R,!0),T++;else{const te=T,re=T,Be=new Map;for(T=re;T<=X;T++){const Xe=g[T]=U?qn(g[T]):hn(g[T]);Xe.key!=null&&Be.set(Xe.key,T)}let Ee,Ie=0;const mn=X-re+1;let _s=!1,Yi=0;const et=new Array(mn);for(T=0;T<mn;T++)et[T]=0;for(T=te;T<=q;T++){const Xe=f[T];if(Ie>=mn){Ne(Xe,x,R,!0);continue}let Bn;if(Xe.key!=null)Bn=Be.get(Xe.key);else for(Ee=re;Ee<=X;Ee++)if(et[Ee-re]===0&&cs(Xe,g[Ee])){Bn=Ee;break}Bn===void 0?Ne(Xe,x,R,!0):(et[Bn-re]=T+1,Bn>=Yi?Yi=Bn:_s=!0,E(Xe,g[Bn],B,null,x,R,G,N,U),Ie++)}const Ji=_s?Kv(et):Os;for(Ee=Ji.length-1,T=mn-1;T>=0;T--){const Xe=re+T,Bn=g[Xe],Xi=Xe+1<J?g[Xe+1].el:S;et[T]===0?E(null,Bn,B,Xi,x,R,G,N,U):_s&&(Ee<0||T!==Ji[Ee]?rn(Bn,B,Xi,2):Ee--)}}},rn=(f,g,B,S,x=null)=>{const{el:R,type:G,transition:N,children:U,shapeFlag:T}=f;if(T&6){rn(f.component.subTree,g,B,S);return}if(T&128){f.suspense.move(g,B,S);return}if(T&64){G.move(f,g,B,$);return}if(G===Ge){t(R,g,B);for(let q=0;q<U.length;q++)rn(U[q],g,B,S);t(f.anchor,g,B);return}if(G===ct){y(f,g,B);return}if(S!==2&&T&1&&N)if(S===0)N.beforeEnter(R),t(R,g,B),Qe(()=>N.enter(R),x);else{const{leave:q,delayLeave:X,afterLeave:te}=N,re=()=>t(R,g,B),Be=()=>{q(R,()=>{re(),te&&te()})};X?X(R,re,Be):Be()}else t(R,g,B)},Ne=(f,g,B,S=!1,x=!1)=>{const{type:R,props:G,ref:N,children:U,dynamicChildren:T,shapeFlag:J,patchFlag:q,dirs:X}=f;if(N!=null&&ma(N,null,B,f,!0),J&256){g.ctx.deactivate(f);return}const te=J&1&&X,re=!Is(f);let Be;if(re&&(Be=G&&G.onVnodeBeforeUnmount)&&cn(Be,g,f),J&6)An(f.component,B,S);else{if(J&128){f.suspense.unmount(B,S);return}te&&wn(f,null,g,"beforeUnmount"),J&64?f.type.remove(f,g,B,x,$,S):T&&(R!==Ge||q>0&&q&64)?Te(T,g,B,!1,!0):(R===Ge&&q&384||!x&&J&16)&&Te(U,g,B),S&&Je(f)}(re&&(Be=G&&G.onVnodeUnmounted)||te)&&Qe(()=>{Be&&cn(Be,g,f),te&&wn(f,null,g,"unmounted")},B)},Je=f=>{const{type:g,el:B,anchor:S,transition:x}=f;if(g===Ge){On(B,S);return}if(g===ct){P(f);return}const R=()=>{a(B),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(f.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:N}=x,U=()=>G(B,R);N?N(f.el,R,U):U()}else R()},On=(f,g)=>{let B;for(;f!==g;)B=m(f),a(f),f=B;a(g)},An=(f,g,B)=>{const{bum:S,scope:x,update:R,subTree:G,um:N}=f;S&&oa(S),x.stop(),R&&(R.active=!1,Ne(G,f,g,B)),N&&Qe(N,g),Qe(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Te=(f,g,B,S=!1,x=!1,R=0)=>{for(let G=R;G<f.length;G++)Ne(f[G],g,B,S,x)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),j=(f,g,B)=>{f==null?g._vnode&&Ne(g._vnode,null,null,!0):E(g._vnode||null,f,g,null,null,null,B),lr(),pa(),g._vnode=f},$={p:E,um:Ne,m:rn,r:Je,mt:Le,mc:F,pc:Q,pbc:H,n:L,o:e};let Z,me;return n&&([Z,me]=n($)),{render:j,hydrate:Z,createApp:Vv(j,Z)}}function is({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Bc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function wc(e,n,s=!1){const t=e.children,a=n.children;if(ee(t)&&ee(a))for(let o=0;o<t.length;o++){const i=t[o];let l=a[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[o]=qn(a[o]),l.el=i.el),s||wc(i,l)),l.type===$s&&(l.el=i.el)}}function Kv(e){const n=e.slice(),s=[0];let t,a,o,i,l;const u=e.length;for(t=0;t<u;t++){const p=e[t];if(p!==0){if(a=s[s.length-1],e[a]<p){n[t]=a,s.push(t);continue}for(o=0,i=s.length-1;o<i;)l=o+i>>1,e[s[l]]<p?o=l+1:i=l;p<e[s[o]]&&(o>0&&(n[t]=s[o-1]),s[o]=t)}}for(o=s.length,i=s[o-1];o-- >0;)s[o]=i,i=n[i];return s}const jv=e=>e.__isTeleport,Ge=Symbol.for("v-fgt"),$s=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),ct=Symbol.for("v-stc"),pt=[];let gn=null;function Pc(e=!1){pt.push(gn=e?null:[])}function Wv(){pt.pop(),gn=pt[pt.length-1]||null}let Et=1;function Er(e){Et+=e}function Dc(e){return e.dynamicChildren=Et>0?gn||Os:null,Wv(),Et>0&&gn&&gn.push(e),e}function ik(e,n,s,t,a,o){return Dc(Oc(e,n,s,t,a,o,!0))}function Sc(e,n,s,t,a){return Dc(Oe(e,n,s,t,a,!0))}function ba(e){return e?e.__v_isVNode===!0:!1}function cs(e,n){return e.type===n.type&&e.key===n.key}const La="__vInternal",Lc=({key:e})=>e??null,ia=({ref:e,ref_key:n,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||Ce(e)||ae(e)?{i:$e,r:e,k:n,f:!!s}:e:null);function Oc(e,n=null,s=null,t=0,a=null,o=e===Ge?0:1,i=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Lc(n),ref:n&&ia(n),scopeId:Da,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:$e};return l?(pi(u,s),o&128&&e.normalize(u)):s&&(u.shapeFlag|=ie(s)?8:16),Et>0&&!i&&gn&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&gn.push(u),u}const Oe=qv;function qv(e,n=null,s=null,t=0,a=null,o=!1){if((!e||e===mv)&&(e=tn),ba(e)){const l=Xn(e,n,!0);return s&&pi(l,s),Et>0&&!o&&gn&&(l.shapeFlag&6?gn[gn.indexOf(e)]=l:gn.push(l)),l.patchFlag|=-2,l}if(om(e)&&(e=e.__vccOpts),n){n=Qv(n);let{class:l,style:u}=n;l&&!ie(l)&&(n.class=Qo(l)),we(u)&&(Jl(u)&&!ee(u)&&(u=Ve({},u)),n.style=qo(u))}const i=ie(e)?1:hv(e)?128:jv(e)?64:we(e)?4:ae(e)?2:0;return Oc(e,n,s,t,a,i,o,!0)}function Qv(e){return e?Jl(e)||La in e?Ve({},e):e:null}function Xn(e,n,s=!1){const{props:t,ref:a,patchFlag:o,children:i}=e,l=n?Zv(t||{},n):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Lc(l),ref:n&&n.ref?s&&a?ee(a)?a.concat(ia(n)):[a,ia(n)]:ia(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ge?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xn(e.ssContent),ssFallback:e.ssFallback&&Xn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xc(e=" ",n=0){return Oe($s,null,e,n)}function rk(e,n){const s=Oe(ct,null,e);return s.staticCount=n,s}function lk(e="",n=!1){return n?(Pc(),Sc(tn,null,e)):Oe(tn,null,e)}function hn(e){return e==null||typeof e=="boolean"?Oe(tn):ee(e)?Oe(Ge,null,e.slice()):typeof e=="object"?qn(e):Oe($s,null,String(e))}function qn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xn(e)}function pi(e,n){let s=0;const{shapeFlag:t}=e;if(n==null)n=null;else if(ee(n))s=16;else if(typeof n=="object")if(t&65){const a=n.default;a&&(a._c&&(a._d=!1),pi(e,a()),a._c&&(a._d=!0));return}else{s=32;const a=n._;!a&&!(La in n)?n._ctx=$e:a===3&&$e&&($e.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ae(n)?(n={default:n,_ctx:$e},s=32):(n=String(n),t&64?(s=16,n=[xc(n)]):s=8);e.children=n,e.shapeFlag|=s}function Zv(...e){const n={};for(let s=0;s<e.length;s++){const t=e[s];for(const a in t)if(a==="class")n.class!==t.class&&(n.class=Qo([n.class,t.class]));else if(a==="style")n.style=qo([n.style,t.style]);else if(wt(a)){const o=n[a],i=t[a];i&&o!==i&&!(ee(o)&&o.includes(i))&&(n[a]=o?[].concat(o,i):i)}else a!==""&&(n[a]=t[a])}return n}function cn(e,n,s,t=null){un(e,n,7,[s,t])}const Yv=fc();let Jv=0;function Xv(e,n,s){const t=e.type,a=(n?n.appContext:e.appContext)||Yv,o={uid:Jv++,vnode:e,type:t,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ec(t,a),emitsOptions:ic(t,a),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:t.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=lv.bind(null,o),e.ce&&e.ce(o),o}let Fe=null;const ss=()=>Fe||$e;let ui,ys,_r="__VUE_INSTANCE_SETTERS__";(ys=ho()[_r])||(ys=ho()[_r]=[]),ys.push(e=>Fe=e),ui=e=>{ys.length>1?ys.forEach(n=>n(e)):ys[0](e)};const Hs=e=>{ui(e),e.scope.on()},vs=()=>{Fe&&Fe.scope.off(),ui(null)};function Rc(e){return e.vnode.shapeFlag&4}let Us=!1;function em(e,n=!1){Us=n;const{props:s,children:t}=e.vnode,a=Rc(e);Fv(e,s,a,n),$v(e,t);const o=a?nm(e,n):void 0;return Us=!1,o}function nm(e,n){const s=e.type;e.accessCache=Object.create(null),e.proxy=Xl(new Proxy(e.ctx,Lv));const{setup:t}=s;if(t){const a=e.setupContext=t.length>1?tm(e):null;Hs(e),qs();const o=Yn(t,e,0,[e.props,a]);if(Qs(),vs(),Cl(o)){if(o.then(vs,vs),n)return o.then(i=>{yr(e,i,n)}).catch(i=>{St(i,e,0)});e.asyncDep=o}else yr(e,o,n)}else Tc(e,n)}function yr(e,n,s){ae(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:we(n)&&(e.setupState=nc(n)),Tc(e,s)}let Ar;function Tc(e,n,s){const t=e.type;if(!e.render){if(!n&&Ar&&!t.render){const a=t.template||li(e).template;if(a){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:u}=t,p=Ve(Ve({isCustomElement:o,delimiters:l},i),u);t.render=Ar(a,p)}}e.render=t.render||Dn}{Hs(e),qs();try{Ov(e)}finally{Qs(),vs()}}}function sm(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,s){return Ye(e,"get","$attrs"),n[s]}}))}function tm(e){const n=s=>{e.exposed=s||{}};return{get attrs(){return sm(e)},slots:e.slots,emit:e.emit,expose:n}}function Oa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(nc(Xl(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in lt)return lt[s](e)},has(n,s){return s in n||s in lt}}))}function am(e,n=!0){return ae(e)?e.displayName||e.name:e.name||n&&e.__name}function om(e){return ae(e)&&"__vccOpts"in e}const A=(e,n)=>sv(e,n,Us);function c(e,n,s){const t=arguments.length;return t===2?we(n)&&!ee(n)?ba(n)?Oe(e,null,[n]):Oe(e,n):Oe(e,null,n):(t>3?s=Array.prototype.slice.call(arguments,2):t===3&&ba(s)&&(s=[s]),Oe(e,n,s))}const im=Symbol.for("v-scx"),rm=()=>ce(im),lm="3.3.8",cm="http://www.w3.org/2000/svg",ps=typeof document<"u"?document:null,Br=ps&&ps.createElement("template"),pm={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,t)=>{const a=n?ps.createElementNS(cm,e):ps.createElement(e,s?{is:s}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>ps.createTextNode(e),createComment:e=>ps.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ps.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,t,a,o){const i=s?s.previousSibling:n.lastChild;if(a&&(a===o||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),s),!(a===o||!(a=a.nextSibling)););else{Br.innerHTML=t?`<svg>${e}</svg>`:e;const l=Br.content;if(t){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}n.insertBefore(l,s)}return[i?i.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}},zn="transition",nt="animation",zs=Symbol("_vtc"),es=(e,{slots:n})=>c(gv,Cc(e),n);es.displayName="Transition";const Ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},um=es.props=Ve({},dc,Ic),rs=(e,n=[])=>{ee(e)?e.forEach(s=>s(...n)):e&&e(...n)},wr=e=>e?ee(e)?e.some(n=>n.length>1):e.length>1:!1;function Cc(e){const n={};for(const z in e)z in Ic||(n[z]=e[z]);if(e.css===!1)return n;const{name:s="v",type:t,duration:a,enterFromClass:o=`${s}-enter-from`,enterActiveClass:i=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:u=o,appearActiveClass:p=i,appearToClass:d=l,leaveFromClass:v=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:h=`${s}-leave-to`}=e,k=dm(a),E=k&&k[0],w=k&&k[1],{onBeforeEnter:_,onEnter:D,onEnterCancelled:y,onLeave:P,onLeaveCancelled:C,onBeforeAppear:O=_,onAppear:M=D,onAppearCancelled:F=y}=n,V=(z,ne,Le)=>{jn(z,ne?d:l),jn(z,ne?p:i),Le&&Le()},H=(z,ne)=>{z._isLeaving=!1,jn(z,v),jn(z,h),jn(z,m),ne&&ne()},Y=z=>(ne,Le)=>{const Se=z?M:D,W=()=>V(ne,z,Le);rs(Se,[ne,W]),Pr(()=>{jn(ne,z?u:o),Rn(ne,z?d:l),wr(Se)||Dr(ne,t,E,W)})};return Ve(n,{onBeforeEnter(z){rs(_,[z]),Rn(z,o),Rn(z,i)},onBeforeAppear(z){rs(O,[z]),Rn(z,u),Rn(z,p)},onEnter:Y(!1),onAppear:Y(!0),onLeave(z,ne){z._isLeaving=!0;const Le=()=>H(z,ne);Rn(z,v),Fc(),Rn(z,m),Pr(()=>{z._isLeaving&&(jn(z,v),Rn(z,h),wr(P)||Dr(z,t,w,Le))}),rs(P,[z,Le])},onEnterCancelled(z){V(z,!1),rs(y,[z])},onAppearCancelled(z){V(z,!0),rs(F,[z])},onLeaveCancelled(z){H(z),rs(C,[z])}})}function dm(e){if(e==null)return null;if(we(e))return[Ga(e.enter),Ga(e.leave)];{const n=Ga(e);return[n,n]}}function Ga(e){return fd(e)}function Rn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[zs]||(e[zs]=new Set)).add(n)}function jn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const s=e[zs];s&&(s.delete(n),s.size||(e[zs]=void 0))}function Pr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let vm=0;function Dr(e,n,s,t){const a=e._endId=++vm,o=()=>{a===e._endId&&t()};if(s)return setTimeout(o,s);const{type:i,timeout:l,propCount:u}=Vc(e,n);if(!i)return t();const p=i+"end";let d=0;const v=()=>{e.removeEventListener(p,m),o()},m=h=>{h.target===e&&++d>=u&&v()};setTimeout(()=>{d<u&&v()},l+1),e.addEventListener(p,m)}function Vc(e,n){const s=window.getComputedStyle(e),t=k=>(s[k]||"").split(", "),a=t(`${zn}Delay`),o=t(`${zn}Duration`),i=Sr(a,o),l=t(`${nt}Delay`),u=t(`${nt}Duration`),p=Sr(l,u);let d=null,v=0,m=0;n===zn?i>0&&(d=zn,v=i,m=o.length):n===nt?p>0&&(d=nt,v=p,m=u.length):(v=Math.max(i,p),d=v>0?i>p?zn:nt:null,m=d?d===zn?o.length:u.length:0);const h=d===zn&&/\b(transform|all)(,|$)/.test(t(`${zn}Property`).toString());return{type:d,timeout:v,propCount:m,hasTransform:h}}function Sr(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,t)=>Lr(s)+Lr(e[t])))}function Lr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fc(){return document.body.offsetHeight}function mm(e,n,s){const t=e[zs];t&&(n=(n?[n,...t]:[...t]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}const di=Symbol("_vod"),ck={beforeMount(e,{value:n},{transition:s}){e[di]=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):st(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:t}){!n!=!s&&(t?n?(t.beforeEnter(e),st(e,!0),t.enter(e)):t.leave(e,()=>{st(e,!1)}):st(e,n))},beforeUnmount(e,{value:n}){st(e,n)}};function st(e,n){e.style.display=n?e[di]:"none"}function bm(e,n,s){const t=e.style,a=ie(s);if(s&&!a){if(n&&!ie(n))for(const o in n)s[o]==null&&wo(t,o,"");for(const o in s)wo(t,o,s[o])}else{const o=t.display;a?n!==s&&(t.cssText=s):n&&e.removeAttribute("style"),di in e&&(t.display=o)}}const Or=/\s*!important$/;function wo(e,n,s){if(ee(s))s.forEach(t=>wo(e,n,t));else if(s==null&&(s=""),n.startsWith("--"))e.setProperty(n,s);else{const t=hm(e,n);Or.test(s)?e.setProperty(hs(t),s.replace(Or,""),"important"):e[t]=s}}const xr=["Webkit","Moz","ms"],Ka={};function hm(e,n){const s=Ka[n];if(s)return s;let t=vn(n);if(t!=="filter"&&t in e)return Ka[n]=t;t=Pt(t);for(let a=0;a<xr.length;a++){const o=xr[a]+t;if(o in e)return Ka[n]=o}return n}const Rr="http://www.w3.org/1999/xlink";function km(e,n,s,t,a){if(t&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(Rr,n.slice(6,n.length)):e.setAttributeNS(Rr,n,s);else{const o=Bd(n);s==null||o&&!Nl(s)?e.removeAttribute(n):e.setAttribute(n,o?"":s)}}function fm(e,n,s,t,a,o,i){if(n==="innerHTML"||n==="textContent"){t&&i(t,a,o),e[n]=s??"";return}const l=e.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=s;const p=l==="OPTION"?e.getAttribute("value"):e.value,d=s??"";p!==d&&(e.value=d),s==null&&e.removeAttribute(n);return}let u=!1;if(s===""||s==null){const p=typeof e[n];p==="boolean"?s=Nl(s):s==null&&p==="string"?(s="",u=!0):p==="number"&&(s=0,u=!0)}try{e[n]=s}catch{}u&&e.removeAttribute(n)}function ws(e,n,s,t){e.addEventListener(n,s,t)}function gm(e,n,s,t){e.removeEventListener(n,s,t)}const Tr=Symbol("_vei");function Em(e,n,s,t,a=null){const o=e[Tr]||(e[Tr]={}),i=o[n];if(t&&i)i.value=t;else{const[l,u]=_m(n);if(t){const p=o[n]=Bm(t,a);ws(e,l,p,u)}else i&&(gm(e,l,i,u),o[n]=void 0)}}const Ir=/(?:Once|Passive|Capture)$/;function _m(e){let n;if(Ir.test(e)){n={};let t;for(;t=e.match(Ir);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hs(e.slice(2)),n]}let ja=0;const ym=Promise.resolve(),Am=()=>ja||(ym.then(()=>ja=0),ja=Date.now());function Bm(e,n){const s=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=s.attached)return;un(wm(t,s.value),n,5,[t])};return s.value=e,s.attached=Am(),s}function wm(e,n){if(ee(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(t=>a=>!a._stopped&&t&&t(a))}else return n}const Cr=/^on[a-z]/,Pm=(e,n,s,t,a=!1,o,i,l,u)=>{n==="class"?mm(e,t,a):n==="style"?bm(e,s,t):wt(n)?Ko(n)||Em(e,n,s,t,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Dm(e,n,t,a))?fm(e,n,t,o,i,l,u):(n==="true-value"?e._trueValue=t:n==="false-value"&&(e._falseValue=t),km(e,n,t,a))};function Dm(e,n,s,t){return t?!!(n==="innerHTML"||n==="textContent"||n in e&&Cr.test(n)&&ae(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Cr.test(n)&&ie(s)?!1:n in e}const Nc=new WeakMap,Mc=new WeakMap,ha=Symbol("_moveCb"),Vr=Symbol("_enterCb"),$c={name:"TransitionGroup",props:Ve({},um,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=ss(),t=uc();let a,o;return bc(()=>{if(!a.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Tm(a[0].el,s.vnode.el,i))return;a.forEach(Om),a.forEach(xm);const l=a.filter(Rm);Fc(),l.forEach(u=>{const p=u.el,d=p.style;Rn(p,i),d.transform=d.webkitTransform=d.transitionDuration="";const v=p[ha]=m=>{m&&m.target!==p||(!m||/transform$/.test(m.propertyName))&&(p.removeEventListener("transitionend",v),p[ha]=null,jn(p,i))};p.addEventListener("transitionend",v)})}),()=>{const i=ve(e),l=Cc(i);let u=i.tag||Ge;a=o,o=n.default?ii(n.default()):[];for(let p=0;p<o.length;p++){const d=o[p];d.key!=null&&gt(d,ft(d,l,t,s))}if(a)for(let p=0;p<a.length;p++){const d=a[p];gt(d,ft(d,l,t,s)),Nc.set(d,d.el.getBoundingClientRect())}return Oe(u,null,o)}}},Sm=e=>delete e.mode;$c.props;const Lm=$c;function Om(e){const n=e.el;n[ha]&&n[ha](),n[Vr]&&n[Vr]()}function xm(e){Mc.set(e,e.el.getBoundingClientRect())}function Rm(e){const n=Nc.get(e),s=Mc.get(e),t=n.left-s.left,a=n.top-s.top;if(t||a){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${t}px,${a}px)`,o.transitionDuration="0s",e}}function Tm(e,n,s){const t=e.cloneNode(),a=e[zs];a&&a.forEach(l=>{l.split(/\s+/).forEach(u=>u&&t.classList.remove(u))}),s.split(/\s+/).forEach(l=>l&&t.classList.add(l)),t.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(t);const{hasTransform:i}=Vc(t);return o.removeChild(t),i}const Fr=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ee(n)?s=>oa(n,s):n};function Im(e){e.target.composing=!0}function Nr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Wa=Symbol("_assign"),pk={created(e,{modifiers:{lazy:n,trim:s,number:t}},a){e[Wa]=Fr(a);const o=t||a.props&&a.props.type==="number";ws(e,n?"change":"input",i=>{if(i.target.composing)return;let l=e.value;s&&(l=l.trim()),o&&(l=bo(l)),e[Wa](l)}),s&&ws(e,"change",()=>{e.value=e.value.trim()}),n||(ws(e,"compositionstart",Im),ws(e,"compositionend",Nr),ws(e,"change",Nr))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:t,number:a}},o){if(e[Wa]=Fr(o),e.composing||document.activeElement===e&&e.type!=="range"&&(s||t&&e.value.trim()===n||(a||e.type==="number")&&bo(e.value)===n))return;const i=n??"";e.value!==i&&(e.value=i)}},Cm=["ctrl","shift","alt","meta"],Vm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Cm.some(s=>e[`${s}Key`]&&!n.includes(s))},uk=(e,n)=>(s,...t)=>{for(let a=0;a<n.length;a++){const o=Vm[n[a]];if(o&&o(s,n))return}return e(s,...t)},Fm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dk=(e,n)=>s=>{if(!("key"in s))return;const t=hs(s.key);if(n.some(a=>a===t||Fm[a]===t))return e(s)},Nm=Ve({patchProp:Pm},pm);let qa,Mr=!1;function Mm(){return qa=Mr?qa:zv(Nm),Mr=!0,qa}const $m=(...e)=>{const n=Mm().createApp(...e),{mount:s}=n;return n.mount=t=>{const a=Hm(t);if(a)return s(a,!0,a instanceof SVGElement)},n};function Hm(e){return ie(e)?document.querySelector(e):e}const Um="modulepreload",zm=function(e){return"/"+e},$r={},r=function(n,s,t){if(!s||s.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=zm(o),o in $r)return;$r[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!t)for(let d=a.length-1;d>=0;d--){const v=a[d];if(v.href===o&&(!i||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":Um,i||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),i)return new Promise((d,v)=>{p.addEventListener("load",d),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},Gm={"v-8daa1a0e":()=>r(()=>import("./index.html-gkk7xaGY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-28f7b2e8":()=>r(()=>import("./001-PyQt介绍与安装.html-zMfKbHAn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-736cf379":()=>r(()=>import("./002-PyQt基本UI.html-V2VazEvq.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-548167c6":()=>r(()=>import("./003-布局.html-oMPghaFG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-30bf7f7c":()=>r(()=>import("./004-布局2.html-8L-dQmaZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-48858f42":()=>r(()=>import("./005-窗口.html-UZQw3aPy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6c1110d1":()=>r(()=>import("./006-信号与槽.html-8Nck5gJT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2db1247c":()=>r(()=>import("./007-Qt Designer.html-fOfyoCsJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-580a4400":()=>r(()=>import("./008-PyQt多线程.html-VMttLW9u.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c47f0884":()=>r(()=>import("./009-打包为可执行程序.html-jPjMDOxM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fd1808c0":()=>r(()=>import("./friend.html-HQjhhjA0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-513bdf66":()=>r(()=>import("./me.html-_ZHiaLy2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5491f884":()=>r(()=>import("./index.html-iWGCEDiH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2776dc09":()=>r(()=>import("./杀不死的进程.html-sG7s7WYb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d440f426":()=>r(()=>import("./index.html-F4vZcBs_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01868d8e":()=>r(()=>import("./torch 环境.html-p5wE0JVi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9ef1da18":()=>r(()=>import("./英伟达开源驱动和闭源驱动冲突问题.html-ZaOhdhgk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0300e138":()=>r(()=>import("./Ubuntu命令行安装Android SDK.html-egjuS8gs.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a9b33774":()=>r(()=>import("./index.html-cooT5yh7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1d16fbc1":()=>r(()=>import("./Snapper玩转btrfs文件系统.html-Ma9kHmN3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-47c36178":()=>r(()=>import("./btrfs的使用.html-6GN8tVY-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2f2e2cf4":()=>r(()=>import("./some device missing方法.html-5n2bHB-T.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4b450dee":()=>r(()=>import("./index.html-psmu7wNr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-756d3903":()=>r(()=>import("./ext-plugin-redis.html-PPdSCISM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2ab375a4":()=>r(()=>import("./理解CoreDNS.html-jlsvebV3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c388ee4c":()=>r(()=>import("./Docker 2375攻击和解决方案.html-qSvBiZIp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2f710f9a":()=>r(()=>import("./Docker 的daemon.json.html-RaIx64Xx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7eb73050":()=>r(()=>import("./Docker不死进程.html-icUr8X8s.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-19eea71e":()=>r(()=>import("./Docker日志选项配置上去对已运行容器不生效.html-aiNQnXTl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-74135446":()=>r(()=>import("./Docker环境清理.html-wulaLYWd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-326d43de":()=>r(()=>import("./Docker逃逸漏洞案例.html-Is-Zffrn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1380e8c6":()=>r(()=>import("./RockyLinux安装Docker.html-zE0zJSml.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0451b50e":()=>r(()=>import("./docker pull push.html-0GHYZ9dN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-87a56570":()=>r(()=>import("./docker run 命令所有的选项.html-3WhD5jNi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c790792":()=>r(()=>import("./docker学习笔记-PDF.html-qiGAqFjG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1fd2b10c":()=>r(()=>import("./docker容器集合.html-6GLJMauO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-483c071d":()=>r(()=>import("./docker报错 内核修整.html-KGpKG2ST.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-50885a84":()=>r(()=>import("./一次构建出x86及arm镜像.html-YjaDLlNd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f9b4903c":()=>r(()=>import("./一键运行web版本vscode.html-u6t0HKLV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-10c9e8f1":()=>r(()=>import("./只使用操作系统创建容器-扫描.html-aRQ6Jd0Q.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6f39f683":()=>r(()=>import("./在Dockerfile里调整时区.html-LlqKavml.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c5c0565":()=>r(()=>import("./手撕Docker容器命令行版.html-P9pKaDbP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2df05220":()=>r(()=>import("./手撕docker容器.html-8qfsDi_3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d36c7940":()=>r(()=>import("./手撕docker网络.html-zg2pWa9d.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3b10ae94":()=>r(()=>import("./把容器做成物理机.html-ZoNGm6O6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-688e4fbe":()=>r(()=>import("./更改docker服务网段分配地址.html-EsSOyiog.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7b7916dd":()=>r(()=>import("./跨宿主机通信overlay和macvlay.html-trhFqdBd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6e99be31":()=>r(()=>import("./Bind9的使用.html-apPFUXhj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-28ef74e9":()=>r(()=>import("./NamedManager.html-82DDI7Nx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8e1c3a3e":()=>r(()=>import("./EFK8.4.3部署.html-vR2ctDzf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3487e284":()=>r(()=>import("./ELK.html-RpxrlWfl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c3279e0":()=>r(()=>import("./ESXI中的网络.html-CnSdMjEJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5c84e740":()=>r(()=>import("./配置案例.html-pd_n4jx4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-09de09ac":()=>r(()=>import("./AWK案例入门看这一篇就够了.html-C7DBgSu7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-128301a5":()=>r(()=>import("./Shell文本处理三剑客-AWK.html-Es0Z8PJS.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-03dfed38":()=>r(()=>import("./awk 入门教程.html-BKYDSlrn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8ff08dec":()=>r(()=>import("./awk 学习  高级输出  02.html-59Ghqu7d.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7e12b9a6":()=>r(()=>import("./awk语言学习笔记  01.html-ea7ck7g-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ab5d88e0":()=>r(()=>import("./匹配特定字符并输出其后的若干行.html-7_KY_exN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3f1dde92":()=>r(()=>import("./Git 的代理配置.html-_B_yinBg.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-69ef78cb":()=>r(()=>import("./Git分支管理合并与删除命令.html-FBIoNCi1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9382cbf8":()=>r(()=>import("./Git识别项目的语言类型，及文件占比.html-0IDf_Ya9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bae969ea":()=>r(()=>import("./Git高级操作和练习网站.html-063oz7E6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-523bf541":()=>r(()=>import("./index.html-VTa78rvG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-20b8f0f1":()=>r(()=>import("./git 拉取全部远程分支.html-vgyQ6Tsj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7726c068":()=>r(()=>import("./git基础命令.html-0ul1_I7y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b2f3b07":()=>r(()=>import("./git更新远程分支.html--9rgW8IA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-219bdfe6":()=>r(()=>import("./git统计项目代码行数.html-n3-pw70f.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-08b82cef":()=>r(()=>import("./git远程仓库回退到指定版本.html-eizv_v3f.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-89f58c8e":()=>r(()=>import("./命令行显示gitmoji.html-E_7c26yA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4d6c1094":()=>r(()=>import("./Gitlab二开从而自定义权限系统.html-8lwgpQqz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-736258dc":()=>r(()=>import("./Gitlab备份和恢复.html-E7rio71y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ce8e88a6":()=>r(()=>import("./Gitlab安装部署.html-77FiYhb2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1affebc9":()=>r(()=>import("./Gitlab的一些问题.html-1hKfsaZy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-edc7031c":()=>r(()=>import("./Gitlab配置邮件服务器.html-SANq6uJ6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3251a524":()=>r(()=>import("./ha-lvs-keepalived.html-g5sQznxn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-72564be3":()=>r(()=>import("./haproxy.html-1AQ6SByb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6c105dfe":()=>r(()=>import("./keepalived.html-EIM946jC.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4db786a2":()=>r(()=>import("./Harbor离线搭建.html-xDeLHviF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-77da57a3":()=>r(()=>import("./Linux内核子系统 - 网络 netfilter.html-C8Yf6lxX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4b719180":()=>r(()=>import("./iptables拦截内网奇虎软件病毒上报.html-nbFgN9uI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5df5e696":()=>r(()=>import("./iptables详解-朱光印.html-wjSZpIHo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f32b6d86":()=>r(()=>import("./linux下IPTABLES配置详解.html--dLkC06x.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f8568246":()=>r(()=>import("./内核参数ip_forward.html-vLb06wFP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-dcb1d26a":()=>r(()=>import("./jenkins备份.html-6t6ArPrI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-07b8030a":()=>r(()=>import("./jenkins构建持续化集成平台.html-pGP0EnLU.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-577615d7":()=>r(()=>import("./jenkins的docker部署文档.html-B4C56pXp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-513bda28":()=>r(()=>import("./修改Jenkins插件为国内源.html-6HJMuLSy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-77aac963":()=>r(()=>import("./Kubernetes Api Endpoint.html-HM9sWpHP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c66ad2a6":()=>r(()=>import("./Kubernetes Make Prometheus_Grafana.html-IipRtNJp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e9469f82":()=>r(()=>import("./Kubernetes Service Account如何生成Token.html-vd3sRzyG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2ece8d5e":()=>r(()=>import("./Kubernetes crictl管理命令详解.html-Gr6uyxYF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a0127118":()=>r(()=>import("./Kubernetes最小高可用架构图.html-Ggv1fHEg.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f5f5d002":()=>r(()=>import("./Kubernetes有哪些组件.html-jfTXenbj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01b130a4":()=>r(()=>import("./Kubernetes的NetworkPlicy.html-4E3ECe2i.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7f271bfb":()=>r(()=>import("./NameSpace 资源隔离隔离了什么.html-0RttQtut.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-76d4e7bb":()=>r(()=>import("./Request和Limit.html-qKnb1V0y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3d16ea04":()=>r(()=>import("./SSL证书签发.html-bVw6SP8n.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6cc6b7c2":()=>r(()=>import("./crictl登录dockerhub.html-jJ0HMAoF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-575cf978":()=>r(()=>import("./etcd 二进制三节点集群部署.html-88q5uHZT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ac04e9ec":()=>r(()=>import("./k8s删除Terminating状态ns.html-6UDB8wMf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6b0a0620":()=>r(()=>import("./kubeadm部署Kubernetes 1.24步骤.html-A0tgPCFR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-743045a2":()=>r(()=>import("./kubernetes进阶（一）kubectl工具使用详解.html-cyqKZ0Ay.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-16f9c44f":()=>r(()=>import("./kubernetes进阶（三）服务发现-coredns.html-mDWUZQzA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e9467f60":()=>r(()=>import("./kubernetes进阶（二）核心网络插件Flannel.html-_O11S6IP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-089e219f":()=>r(()=>import("./kubernetes进阶（五）dashboard--WEB管理.html-C3EWpaZu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c63547c":()=>r(()=>import("./kubernetes进阶（六）k8s平滑升级.html-bzyiLIe_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-07fca106":()=>r(()=>import("./kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-W7ivq9et.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4baada5c":()=>r(()=>import("./一次kubeadm添加节点出现etcd检查错误.html-j6JS1oBa.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5b225804":()=>r(()=>import("./二进制安装kubernetes（七） 部署知识点总结.html-6SHuGTis.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-aa3e3ee8":()=>r(()=>import("./二进制安装kubernetes（三） kube-controller-manager组件安装.html-hPhQVtn_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-81834800":()=>r(()=>import("./二进制安装kubernetes（二） kube-apiserver组件安装.html-Z98Kr6xT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7e1d67ea":()=>r(()=>import("./二进制安装kubernetes（五） kubelet组件安装.html-jVHf7TRb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e936c158":()=>r(()=>import("./二进制安装kubernetes（六） kube-proxy组件安装.html-t6taj5hV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-53c4fe8d":()=>r(()=>import("./二进制安装kubernetes（四） kube-scheduler组件安装.html-MJ2-iN-K.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-639f36bc":()=>r(()=>import("./二进制部署Kubernetes.html-NQHadVjY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5823502a":()=>r(()=>import("./什么是Label和Label选择器.html-a-goh_4w.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7544ffb4":()=>r(()=>import("./什么是Name和NameSpace.html-KnVVlR3K.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-95889b98":()=>r(()=>import("./什么是Pod和Pod控制器.html-3GuHMTmT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b33727c8":()=>r(()=>import("./什么是Service和Ingress.html-FiPMl63l.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f01f3b8":()=>r(()=>import("./使用 vmagent 代替 Prometheus 采集监控指标.html-grbKo3DM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-23bf45e1":()=>r(()=>import("./常用优化.html-0ZpS7X3u.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0a8284ed":()=>r(()=>import("./记一次异常断电造成kubernetes故障.html-CbrQzRQZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-788034ca":()=>r(()=>import("./LFS-NoteBook.html-dvxtIFmm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5133ac50":()=>r(()=>import("./Linux备份为liveOS.html-PBurTzIJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c82387b":()=>r(()=>import("./bash利用扩展字符集实现rm.html-oho2mhIu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-759f12ff":()=>r(()=>import("./grub2手动命令引导教程.html--By0Wvqf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-eeb679e4":()=>r(()=>import("./shell脚本加密解密工具shc.html-maSoh-y_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-19869778":()=>r(()=>import("./ssh 设置反向代理.html-aCY1Re6f.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0c50d2dd":()=>r(()=>import("./ssh把远程端口映射到本地.html-xWcGx7xK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e5c7a1ce":()=>r(()=>import("./tcpdump抓包命令.html-wPW-rYvv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-28d01994":()=>r(()=>import("./命令创建虚拟镜像文件.html-50DaqE1p.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-156dfb56":()=>r(()=>import("./按电源软关机要等待60秒设置更短的时间.html-sxUsSjKh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7208e0fe":()=>r(()=>import("./让某个命令不输出.html-P9njtesG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-79d1ae7f":()=>r(()=>import("./Nginx变量大全.html-j5Nh4BtF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0c6b7d0f":()=>r(()=>import("./Nginx正向代理.html-XjM0dZ9M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-72bc3488":()=>r(()=>import("./Nginx正向代理支持https.html-4rY2pAOt.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-384ed63f":()=>r(()=>import("./Nginx正向代理高并发.html-VyLE4NzY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6f000423":()=>r(()=>import("./Nginx的负载均衡和故障转移.html-8Wc09Hw-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-26dd9c7b":()=>r(()=>import("./nginx-plus-module-lua.html-LO8TLb33.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01b8e297":()=>r(()=>import("./nginx01.html-MQZwxTJn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-036dbb36":()=>r(()=>import("./nginx02.html-vMkzD_MF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-052293d5":()=>r(()=>import("./nginx03.html-KePb3IBF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4396c282":()=>r(()=>import("./nginx单机百万并发.html-0fsDHaDy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-30f385af":()=>r(()=>import("./nginx配置示例.html-hOyvV0Fo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-10913ee4":()=>r(()=>import("./ngx_stream_ssl_preread_module.html-ir49qqJM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3eb55632":()=>r(()=>import("./ssh日志记录登陆密码.html-TXnhTEa1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ce601f4c":()=>r(()=>import("./CPU和内存的架构 UMA和NUMA.html-q6EbQXCq.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d982049":()=>r(()=>import("./Journal日志服务详解.html-ytw3IJGf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3e5ab3dc":()=>r(()=>import("./Linux下的ASLR（PIE）内存保护机制和绕过.html-ceMLCI9e.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b1ef3ea":()=>r(()=>import("./Linux升级内核的两种方法.html-zH9HavZn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-31ec57f8":()=>r(()=>import("./Linux排查哪个进程和IP在占用网速.html-um09Oy9a.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-00524e94":()=>r(()=>import("./Linux普通用户免密码sudo.html-ZYDxcxqZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-636408d2":()=>r(()=>import("./Linux网络内核参数优化秘籍.html-K-CHL1F8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4581fe4c":()=>r(()=>import("./Linux虚拟网络设备之bridge.html-JxDOuHgZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c72c74c":()=>r(()=>import("./Shell快捷键.html-0KgqIkTl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-79d954ee":()=>r(()=>import("./date命令.html-phbLmskv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b89ca53e":()=>r(()=>import("./grep命令.html-L_LIc_Yx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4977fd20":()=>r(()=>import("./ip命令.html-jacAJIWw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-966b2156":()=>r(()=>import("./macvlan详解.html-gSjCoIdG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8484bb5a":()=>r(()=>import("./proc-sysrq-trigger详解.html-VmOdflZi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-92954d86":()=>r(()=>import("./proc详解.html-_Lf91wZs.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-00bad121":()=>r(()=>import("./sed.html-l3EgCOZx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bb5b9e90":()=>r(()=>import("./sysstat Linux状态工具包.html-Ntblozju.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-15e0f84a":()=>r(()=>import("./使用curl实现邮件发送.html--stP77Li.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-269af0d2":()=>r(()=>import("./使用dev下的tcp-udp实现socket.html--FYhnkjQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5a559594":()=>r(()=>import("./备份Linux系统.html-gXLowhLa.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-20664f24":()=>r(()=>import("./大量使用swap导致无法切换.html-rHV-u08u.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2741a660":()=>r(()=>import("./常见乱码产生原因.html-b2MpJ1bg.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f71e4004":()=>r(()=>import("./更换系统和命令行语言.html-mKUNf2Ce.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0a501b28":()=>r(()=>import("./环境变量PATH.html-NcFDixn7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-244d585c":()=>r(()=>import("./进程.html-V1SNl542.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-76b130c2":()=>r(()=>import("./逻辑卷无法删除.html-dkLDNfU9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-794ccb14":()=>r(()=>import("./ps如何去水印的4个方法.html-Y-O6Korn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b7e1d682":()=>r(()=>import("./Huawei x288系列风扇转速调速.html-ltw70Tec.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bf89a59e":()=>r(()=>import("./Portainer 单机部署.html-aGEckBoJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-56a71ded":()=>r(()=>import("./Prometheus监控Windows主机.html-t2N6B8Yq.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6fa63cee":()=>r(()=>import("./rabbitmq.html-N97bOovd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5a7f9ef1":()=>r(()=>import("./Azure刷写ROS教程.html-RO5LLvMD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-790a3eba":()=>r(()=>import("./RouterOS利用（L2TP）实现多方异地组网.html-6O7MWTHB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-87713e26":()=>r(()=>import("./用ros路由作为中转教程.html-PoF0AhVO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0dc78858":()=>r(()=>import("./MiniO_Docker_Deploy.html-Sm1M0ZCn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-04e93595":()=>r(()=>import("./bug and Issue.html-hG0JPhkw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b010c524":()=>r(()=>import("./tomcat.html-IgvvRoRX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-42119fed":()=>r(()=>import("./index.html-JUCjwOi9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-69833e9a":()=>r(()=>import("./traefik作为docker边缘路由.html-wRWIVIUI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-454654c1":()=>r(()=>import("./各个版本的激活密钥.html--NzQc4M-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5b263b15":()=>r(()=>import("./虚拟化物理机.html-QwcRmvYh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-46b48e13":()=>r(()=>import("./PowerShell 打印环境变量.html-u6kglUPa.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-24f7c960":()=>r(()=>import("./PowerShell 操作系统禁止运行脚本.html-obxzw1sz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-28c94530":()=>r(()=>import("./Windows系统更改迁移用户目录.html-TM_gZOGX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bf02f4a4":()=>r(()=>import("./zabbix.html-AowFzwty.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8b9d7fba":()=>r(()=>import("./zabbix的VMwareGuest补充缺陷.html-Nq8e6QBs.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5bece530":()=>r(()=>import("./ebook.html-gay4pRGM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-42d1b932":()=>r(()=>import("./goaccess给ftp生成分析图.html-aCbLYmyh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4ae285a4":()=>r(()=>import("./memcache-redis.html-qsMZ_pHo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-04007d38":()=>r(()=>import("./etcd安装etcdkeeper.html-X4B-Q5b3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-350fc342":()=>r(()=>import("./国内源.html-Sadev_3T.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1187c118":()=>r(()=>import("./查看Mysql数据量大小.html-nQDEhkAK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-11c46d82":()=>r(()=>import("./Centos7.x 安装Python3.9.7  Ansible4.5.html-2JNIcfQc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-761ac8fe":()=>r(()=>import("./ansible自动化运维.html-JVoBB7rK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-61515108":()=>r(()=>import("./HA_Deploy.html-4EynifA-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5865d184":()=>r(()=>import("./JumperServerDockerDeploy.html-kDUS2gKb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9174ace0":()=>r(()=>import("./index.html-3kbBphiP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-91b5b3e2":()=>r(()=>import("./OpenStack-Queens版搭建详解.html-A6myKGVO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7c8e6e87":()=>r(()=>import("./gitlab ci 编写.html-aWEpdy_5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-eb33cb0a":()=>r(()=>import("./gitlab ci 部署.html-XWi7Vhwc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-75d6f0c8":()=>r(()=>import("./部署Kubernetes类型的gitlab-runner.html-aDcIg4ET.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c751544":()=>r(()=>import("./elk_kfaka.html-x1rUXl09.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-37a8ebbd":()=>r(()=>import("./Centos7 yum install git2.x 较新版本.html-rwleMx7h.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3b5999cf":()=>r(()=>import("./AWK中的字符串操作函数.html-HxdDpZ2B.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-66a50361":()=>r(()=>import("./安装Nvidia Runtime.html-_I3Wse48.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a467abfa":()=>r(()=>import("./安装Nvidia驱动.html-8i1U4nJX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-80d561d8":()=>r(()=>import("./Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-DOiN9XYY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0e11c102":()=>r(()=>import("./Linux挂载cifs文件系统.html-jS2A4gdO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e966fc72":()=>r(()=>import("./Samba共享文件时文件属性nobody.html-PmJ-Fbhu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-19b6577e":()=>r(()=>import("./Samba配置举例.html-t00xf9hm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-081b1a63":()=>r(()=>import("./Ubuntu 20.04 安装VNC Server.html-g3Eb2DZh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5c90804c":()=>r(()=>import("./vi编辑器.html-OS-mB7bk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3352fc98":()=>r(()=>import("./index.html-IF4Lzw6p.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-22a3c8d7":()=>r(()=>import("./CPU的虚拟化.html-gUk3MhKz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-050e9cf9":()=>r(()=>import("./操作系统介绍.html-_C6EpOYO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7c995a9d":()=>r(()=>import("./CentOS 7 用户账户配置.html-K1YQzh46.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3662114a":()=>r(()=>import("./CentOS7配置支持AUFS文件系统.html-YIs8wNg_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a6eba2dc":()=>r(()=>import("./Centos8重启网卡的方法.html-qUVtmwj5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1d54df78":()=>r(()=>import("./firewalld配置.html-l6hbei4b.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2bec014a":()=>r(()=>import("./制作CenOS操作系统.html-EM4FQjfr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4de8425e":()=>r(()=>import("./配置SSH免密码验证.html-jX4eaU0U.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2a52f0c8":()=>r(()=>import("./Linux 终端命令格式.html-EpqP3HYj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7aabef78":()=>r(()=>import("./Ubuntu 20.04 Server 使用命令行设置 IP 地址.html-vgDgsA5J.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-aab6a77a":()=>r(()=>import("./Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案.html-DjvpPMsp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6e8771f8":()=>r(()=>import("./Ubuntu更改为24小时制.html-Kr2YyDlU.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3215b4ba":()=>r(()=>import("./Ubuntu软件包文件管理.html-ty3Qt8Du.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1a0079da":()=>r(()=>import("./VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-nubm06Cz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-733d9740":()=>r(()=>import("./apt查询某个软件有哪些版本.html-eOjfX9Hi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-48c517e4":()=>r(()=>import("./linux关闭地址空间随机化（ASLR）.html-XLD-4d-B.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1922adf5":()=>r(()=>import("./ubuntu14.04 忘记了普通用户密码和root密码.html-He2s0bgh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7bf7b544":()=>r(()=>import("./ubuntu安装nfs.html-ZAPVm-Tv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f55b6058":()=>r(()=>import("./ubuntu查看intel GPU使用情况.html-M2foDgx3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2e5806d2":()=>r(()=>import("./index.html-VJlWkVPr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c406808":()=>r(()=>import("./数据结构与算法哔哩哔哩比特就业课.html-13_zgoqZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2adac7da":()=>r(()=>import("./C语言volatile关键字详解.html-VjhCyiwp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-cf78e944":()=>r(()=>import("./index.html-J1HYxfgj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4294bd6d":()=>r(()=>import("./二分查找.html-YTv-Acu8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b829e3e":()=>r(()=>import("./FastAPI-Python高性能web框架.html-MtbMXYFE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-66124308":()=>r(()=>import("./PyInstaller带静态依赖文件打包教程.html-y7B7BJOo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9f71a98a":()=>r(()=>import("./Python之正则表达式细讲.html-KAfxUomQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0556e072":()=>r(()=>import("./Python数据切片例子.html-0nHmX5Oe.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3122a850":()=>r(()=>import("./Python数据格式化format.html-NKTD15o3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-54218f21":()=>r(()=>import("./python re.Match object的说明.html-LcPHmjI5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4742da80":()=>r(()=>import("./python re.html-ooFlbzD4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1302838e":()=>r(()=>import("./新版VSCode中Python设置自动补全函数括号.html-8jlVZ8vx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6a7299b5":()=>r(()=>import("./shell脚本bad substitution.html-Ootujn-4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b73f172":()=>r(()=>import("./基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-Uu_I9TJX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c5b2b34":()=>r(()=>import("./Docker一键部署Clash服务与管理面板.html-VUx3GE1V.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2cf74ea8":()=>r(()=>import("./优秀的落地框架 XrayR.html-RAn6DWQk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-64d1e7a6":()=>r(()=>import("./连接CF WARP为服务器添加IPv4IPv6网络.html-DETydI0i.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3ac693d4":()=>r(()=>import("./index.html-D5pO_fgK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-07a67b62":()=>r(()=>import("./index.html-20T4nK_8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2fabe988":()=>r(()=>import("./ACLLib.html-xy0wX7vd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5b349d28":()=>r(()=>import("./01_面向对象（OOP）基本概念.html-mK0c10zr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6111f3f4":()=>r(()=>import("./02_类和对象.html-hxwdKFPK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f6bf42c":()=>r(()=>import("./03_面相对象基础语法.html-KIF-g6SR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d1813c6":()=>r(()=>import("./04_面向对象封装案例.html-1vdz0S4Y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0cb49670":()=>r(()=>import("./05_面向对象封装案例 II.html-c9Jjlh0c.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-451b6bb3":()=>r(()=>import("./06_私有属性和私有方法.html-YEAIeC9N.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7741f6f4":()=>r(()=>import("./07_单例.html-8EMzNZi8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-617feebe":()=>r(()=>import("./08_多态.html-1k4txckb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fc80a980":()=>r(()=>import("./09_继承.html-OJPHxd00.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-69880198":()=>r(()=>import("./10_类属性和类方法.html-taJ6t3Vn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-554537f7":()=>r(()=>import("./11_eval函数.html-ZBW1Omop.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-782c286b":()=>r(()=>import("./12_模块和包.html-bSk6ybeT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d7023b56":()=>r(()=>import("./13_文件.html-a8u9VTNd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7cbbdb02":()=>r(()=>import("./14_异常.html-3K1c3UpI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-65ddef8e":()=>r(()=>import("./10 Multi-CPU Scheduling.html-DVYoGRtk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-508b9403":()=>r(()=>import("./13 Address Spaces.html-2bvCJst_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-06f9c988":()=>r(()=>import("./14 Memory API.html-jsYusriV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b0fbb1a2":()=>r(()=>import("./15 Address Translation.html-zvjoqyx3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-77255d40":()=>r(()=>import("./16 Segmentation.html-psadD4es.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-cf9a1e10":()=>r(()=>import("./17 Free Space Management.html-G6SG8UU3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-247efa59":()=>r(()=>import("./18 Introduction to Paging.html-jKBCbSJp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d9307d94":()=>r(()=>import("./19 Translation Lookaside Buffers.html-dgAfXfOo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5920d9e3":()=>r(()=>import("./20 Advanced Page Tables.html-7kyDLv2e.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-201aa8de":()=>r(()=>import("./21 Swapping Mechanisms.html--n17LmXf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-503a0eb2":()=>r(()=>import("./22 Swapping Policies.html-3e8x9R1r.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5b295232":()=>r(()=>import("./23 Complete VM Systems.html-jSV9FgqB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-319a6cdc":()=>r(()=>import("./4 Processes.html-1j_KrIhf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01969508":()=>r(()=>import("./5 Process API.html-PvaUqpCI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5e65d047":()=>r(()=>import("./6 Direct Execution.html-UK4j8Fft.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3d749c17":()=>r(()=>import("./7 CPU Scheduling.html-rHi2uPVQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-10c4e4cf":()=>r(()=>import("./8 Multi-level Feedback.html-wGPs0jas.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ab459502":()=>r(()=>import("./26 Concurrency and Threads.html-7tzhEt3H.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-afb12a34":()=>r(()=>import("./27 Thread API.html-1Y4f4eZG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c56826bc":()=>r(()=>import("./28 Locks.html-xNy6ysm8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-41728b29":()=>r(()=>import("./29 Locked Data Structures.html-C1qcSnSR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01e792c4":()=>r(()=>import("./30 Condition Variables.html-UTNFWJMz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-187d9e5e":()=>r(()=>import("./31 Semaphores.html-YkZCJoX3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-282c901c":()=>r(()=>import("./32 Concurrency Bugs.html-suGZ0dIM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6773cc80":()=>r(()=>import("./33 Event-based Concurrency.html-c5_AARVX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e1be36c0":()=>r(()=>import("./36 IO Devices.html-Y52EjtIg.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-47854b8a":()=>r(()=>import("./37 Hard Disk Drives.html-qLzcBIU2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-58af6e7c":()=>r(()=>import("./39 Files and Directories.html-5BwWacX7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6305be1a":()=>r(()=>import("./40 File System Implementation.html-kWnq8RCi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3706649a":()=>r(()=>import("./404.html-7Pq5bz1I.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-30ca943e":()=>r(()=>import("./index.html-BYtFGt8-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-74bc627b":()=>r(()=>import("./index.html-oDtpeItD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-16e944d8":()=>r(()=>import("./index.html-rz1XUr3H.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-82c79f78":()=>r(()=>import("./index.html-PyC92PNE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1a1918eb":()=>r(()=>import("./index.html-cW8WMovG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5cb26cc8":()=>r(()=>import("./index.html-PegtS1xB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-523a9aaf":()=>r(()=>import("./index.html-X8qo0IQu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-15a9b468":()=>r(()=>import("./index.html-BjctDJAF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1590671a":()=>r(()=>import("./index.html-JhWT3gqd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1581bac6":()=>r(()=>import("./index.html-WOBfaK80.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a102ac20":()=>r(()=>import("./index.html-DMwrKIYF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2f09dd7f":()=>r(()=>import("./index.html-hX9wEQ4W.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-52c4c802":()=>r(()=>import("./index.html-v9yy3MTT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-91099982":()=>r(()=>import("./index.html-LI0HY_87.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-cbcc4a46":()=>r(()=>import("./index.html-Uv1AUKvz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-39379285":()=>r(()=>import("./index.html-MmnJl3sV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-69ad952f":()=>r(()=>import("./index.html-U7UXVyKY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c771b7d":()=>r(()=>import("./index.html-mnz7y_71.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-82353d0e":()=>r(()=>import("./index.html-l-5ZI2PY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9affc6ce":()=>r(()=>import("./index.html-jOD0bGBa.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5137394c":()=>r(()=>import("./index.html-OlkWqosQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3e4a648b":()=>r(()=>import("./index.html-jwqmoPH8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0b15a2f0":()=>r(()=>import("./index.html-scGwyGuT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6d21b581":()=>r(()=>import("./index.html-ocEN_SiT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-66058961":()=>r(()=>import("./index.html-MzLn3E3k.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-219c108d":()=>r(()=>import("./index.html-l3y0xrmp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-48fe3284":()=>r(()=>import("./index.html-eHoJrZPH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-dd55478c":()=>r(()=>import("./index.html-aJmW6V2o.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-69060647":()=>r(()=>import("./index.html-chNLegWu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-cd4c1012":()=>r(()=>import("./index.html-XQh9bTbl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-760a078c":()=>r(()=>import("./index.html-R6AAXat5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e4278e96":()=>r(()=>import("./index.html-85_TnIE0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-343dc2b6":()=>r(()=>import("./index.html-uYZz04n3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-74051d42":()=>r(()=>import("./index.html-sUoQn8NN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e95f27e0":()=>r(()=>import("./index.html-jUW2NTi9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-864a1ec4":()=>r(()=>import("./index.html-S1ZGyxpW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0814f0c1":()=>r(()=>import("./index.html-H-4blaoc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-272e57e4":()=>r(()=>import("./index.html-5WACWMzV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d8166310":()=>r(()=>import("./index.html-T6F_Jo86.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c2cc361":()=>r(()=>import("./index.html-v6taDsTy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2f8ddbd2":()=>r(()=>import("./index.html-wBWyHN_g.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f5fa56ce":()=>r(()=>import("./index.html-0W94tVZ0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7f7597ac":()=>r(()=>import("./index.html-eQMX0DFX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8d1e4126":()=>r(()=>import("./index.html-ZgdRgDrY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8716188c":()=>r(()=>import("./index.html-tuH0fSel.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-aea9109e":()=>r(()=>import("./index.html-OJbTvRF6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-75d00417":()=>r(()=>import("./index.html-BtUJ8sM9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f1e41524":()=>r(()=>import("./index.html-ky8_DHWy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-87094bfe":()=>r(()=>import("./index.html-B1fHbdGz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8708771c":()=>r(()=>import("./index.html--iMYXxxw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-62a96ae9":()=>r(()=>import("./index.html-Mc3T423v.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-380a8ce0":()=>r(()=>import("./index.html-DU_HYN12.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-54dda6e8":()=>r(()=>import("./index.html-ELJazlUr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-270d1f92":()=>r(()=>import("./index.html-0RfjfJS6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-202e1ae1":()=>r(()=>import("./index.html-kkN1P3nF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ed5a039e":()=>r(()=>import("./index.html-jUK6D7kl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-27e35532":()=>r(()=>import("./index.html-Vpe4_HCT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ad35a506":()=>r(()=>import("./index.html-sqLCs0jR.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6f76dcc4":()=>r(()=>import("./index.html-u07fGC1j.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-738568b6":()=>r(()=>import("./index.html-u8FYJM8W.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-02fff589":()=>r(()=>import("./index.html-0LTm__D3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0f9b9b67":()=>r(()=>import("./index.html-H6geLYVy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5a14fc0c":()=>r(()=>import("./index.html-yKOIZap2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3c38aec7":()=>r(()=>import("./index.html-mqSp7GnQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5bc93818":()=>r(()=>import("./index.html-MgYqZsvg.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-744d024e":()=>r(()=>import("./index.html-eRuDP5uE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e52c881c":()=>r(()=>import("./index.html-pmX2HkU1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-154dc4c4":()=>r(()=>import("./index.html-zrbBSaZ_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01560935":()=>r(()=>import("./index.html-_smBs8c5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-49425445":()=>r(()=>import("./index.html-MatOubHP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-07af4466":()=>r(()=>import("./index.html-5Yldc45b.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-45aa885d":()=>r(()=>import("./index.html-KgdRjFDm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9803cb6a":()=>r(()=>import("./index.html-AwEZHGDd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a074e84e":()=>r(()=>import("./index.html-x1W__GIi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-95b29426":()=>r(()=>import("./index.html-jHvOw3jh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5e0b61bd":()=>r(()=>import("./index.html-DO9C9oCy.js"),__vite__mapDeps([])).then(({data:e})=>e)},Km=JSON.parse(`{"base":"/","lang":"zh-CN","title":"运维开发绿皮书","description":"运维开发绿皮书,放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重。","head":[["script",{},"\\n      /*禁用F12*/\\n      document.onkeydown = function(){\\n          if(window.event.keyCode==123) {\\n              var x; \\n              var r=confirm('大佬，别扒了！不妨加个友链？\\\\n点击确认键跳转到友链！\\\\n\\\\n执意要做？亦或是再按下F12可调出控制台\\\\n');\\n              if (r==true){\\n                //x=\\"你按下的是\\\\\\"确定\\\\\\"按钮。\\";\\n                window.location.replace(\\"/友链/友链.html\\");\\n              }\\n              else{\\n                x=\\"你按下的是\\\\\\"取消\\\\\\"按钮。\\";\\n              }\\n              // document.write(x)\\n              event.preventDefault(); // 阻止默认事件行为\\n              event.keyCode=0;\\n              event.returnValue=false;\\n          }\\n      }\\n      "]],"locales":{}}`);var jm=([e,n,s])=>e==="meta"&&n.name?`${e}.${n.name}`:["title","base"].includes(e)?e:e==="template"&&n.id?`${e}.${n.id}`:JSON.stringify([e,n,s]),Wm=e=>{const n=new Set,s=[];return e.forEach(t=>{const a=jm(t);n.has(a)||(n.add(a),s.push(t))}),s},Hc=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,ts=e=>/^(https?:)?\/\//.test(e),qm=/.md((\?|#).*)?$/,_t=(e,n="/")=>!!(ts(e)||e.startsWith("/")&&!e.startsWith(n)&&!qm.test(e)),Uc=e=>/^[a-z][a-z0-9+.-]*:/.test(e),Ot=e=>Object.prototype.toString.call(e)==="[object Object]",vi=e=>e[e.length-1]==="/"?e.slice(0,-1):e,zc=e=>e[0]==="/"?e.slice(1):e,Qm=(e,n)=>{const s=Object.keys(e).sort((t,a)=>{const o=a.split("/").length-t.split("/").length;return o!==0?o:a.length-t.length});for(const t of s)if(n.startsWith(t))return t;return"/"};const Gc={"v-8daa1a0e":b(()=>r(()=>import("./index.html-LwJbsPzE.js"),__vite__mapDeps([0,1]))),"v-28f7b2e8":b(()=>r(()=>import("./001-PyQt介绍与安装.html-x89Ak-tu.js"),__vite__mapDeps([2,1]))),"v-736cf379":b(()=>r(()=>import("./002-PyQt基本UI.html-yVpkL9G_.js"),__vite__mapDeps([3,1]))),"v-548167c6":b(()=>r(()=>import("./003-布局.html-uia8hZTG.js"),__vite__mapDeps([4,1]))),"v-30bf7f7c":b(()=>r(()=>import("./004-布局2.html-p8YF82hX.js"),__vite__mapDeps([5,1]))),"v-48858f42":b(()=>r(()=>import("./005-窗口.html-Iq0lHqAw.js"),__vite__mapDeps([6,1]))),"v-6c1110d1":b(()=>r(()=>import("./006-信号与槽.html-MT2ZFcwE.js"),__vite__mapDeps([7,1]))),"v-2db1247c":b(()=>r(()=>import("./007-Qt Designer.html-1yFjdRoA.js"),__vite__mapDeps([8,1]))),"v-580a4400":b(()=>r(()=>import("./008-PyQt多线程.html-RDUh_xVC.js"),__vite__mapDeps([9,1]))),"v-c47f0884":b(()=>r(()=>import("./009-打包为可执行程序.html-JZeKX1Sw.js"),__vite__mapDeps([10,1]))),"v-fd1808c0":b(()=>r(()=>import("./friend.html--BGnBcwL.js"),__vite__mapDeps([11,1]))),"v-513bdf66":b(()=>r(()=>import("./me.html-PTxEl-Dl.js"),__vite__mapDeps([12,1]))),"v-5491f884":b(()=>r(()=>import("./index.html-RsYXU6A_.js"),__vite__mapDeps([13,1]))),"v-2776dc09":b(()=>r(()=>import("./杀不死的进程.html-bHjKoaVJ.js"),__vite__mapDeps([14,1]))),"v-d440f426":b(()=>r(()=>import("./index.html-Go2XpXNa.js"),__vite__mapDeps([15,1]))),"v-01868d8e":b(()=>r(()=>import("./torch 环境.html-ybNn8UeK.js"),__vite__mapDeps([16,1]))),"v-9ef1da18":b(()=>r(()=>import("./英伟达开源驱动和闭源驱动冲突问题.html-pqrhtzRd.js"),__vite__mapDeps([17,1]))),"v-0300e138":b(()=>r(()=>import("./Ubuntu命令行安装Android SDK.html-uy2Rpvfv.js"),__vite__mapDeps([18,1]))),"v-a9b33774":b(()=>r(()=>import("./index.html-VjtUUR2a.js"),__vite__mapDeps([19,1]))),"v-1d16fbc1":b(()=>r(()=>import("./Snapper玩转btrfs文件系统.html-p7LqXqCy.js"),__vite__mapDeps([20,1]))),"v-47c36178":b(()=>r(()=>import("./btrfs的使用.html-l9ujuVUn.js"),__vite__mapDeps([21,1]))),"v-2f2e2cf4":b(()=>r(()=>import("./some device missing方法.html-tpgc_8xv.js"),__vite__mapDeps([22,1]))),"v-4b450dee":b(()=>r(()=>import("./index.html-pkM-XZu1.js"),__vite__mapDeps([23,1]))),"v-756d3903":b(()=>r(()=>import("./ext-plugin-redis.html-Awrq8lyg.js"),__vite__mapDeps([24,1]))),"v-2ab375a4":b(()=>r(()=>import("./理解CoreDNS.html-K_szjCdZ.js"),__vite__mapDeps([25,1]))),"v-c388ee4c":b(()=>r(()=>import("./Docker 2375攻击和解决方案.html-v__iIIn0.js"),__vite__mapDeps([26,1]))),"v-2f710f9a":b(()=>r(()=>import("./Docker 的daemon.json.html-bCCVai-n.js"),__vite__mapDeps([27,1]))),"v-7eb73050":b(()=>r(()=>import("./Docker不死进程.html-rvaRQToI.js"),__vite__mapDeps([28,1]))),"v-19eea71e":b(()=>r(()=>import("./Docker日志选项配置上去对已运行容器不生效.html-sEHBRJ0r.js"),__vite__mapDeps([29,1]))),"v-74135446":b(()=>r(()=>import("./Docker环境清理.html-5m5Q4dky.js"),__vite__mapDeps([30,1]))),"v-326d43de":b(()=>r(()=>import("./Docker逃逸漏洞案例.html-iSNbWjyG.js"),__vite__mapDeps([31,1]))),"v-1380e8c6":b(()=>r(()=>import("./RockyLinux安装Docker.html-Lm7z5aWg.js"),__vite__mapDeps([32,1]))),"v-0451b50e":b(()=>r(()=>import("./docker pull push.html-xpSBK-PO.js"),__vite__mapDeps([33,1]))),"v-87a56570":b(()=>r(()=>import("./docker run 命令所有的选项.html-WsDFwl_7.js"),__vite__mapDeps([34,1]))),"v-4c790792":b(()=>r(()=>import("./docker学习笔记-PDF.html-59iWZ0HF.js"),__vite__mapDeps([35,1]))),"v-1fd2b10c":b(()=>r(()=>import("./docker容器集合.html-U5SQ7om4.js"),__vite__mapDeps([36,1]))),"v-483c071d":b(()=>r(()=>import("./docker报错 内核修整.html-W2m1dZVd.js"),__vite__mapDeps([37,1]))),"v-50885a84":b(()=>r(()=>import("./一次构建出x86及arm镜像.html-n9KrYcIo.js"),__vite__mapDeps([38,1]))),"v-f9b4903c":b(()=>r(()=>import("./一键运行web版本vscode.html-RbQ40TZB.js"),__vite__mapDeps([39,1]))),"v-10c9e8f1":b(()=>r(()=>import("./只使用操作系统创建容器-扫描.html-qZLqbyHS.js"),__vite__mapDeps([40,1]))),"v-6f39f683":b(()=>r(()=>import("./在Dockerfile里调整时区.html-jWbyvNVz.js"),__vite__mapDeps([41,1]))),"v-4c5c0565":b(()=>r(()=>import("./手撕Docker容器命令行版.html-G-KN8eOf.js"),__vite__mapDeps([42,1]))),"v-2df05220":b(()=>r(()=>import("./手撕docker容器.html-Whm8Gex9.js"),__vite__mapDeps([43,1]))),"v-d36c7940":b(()=>r(()=>import("./手撕docker网络.html-OZcYP0Oo.js"),__vite__mapDeps([44,1]))),"v-3b10ae94":b(()=>r(()=>import("./把容器做成物理机.html-qhSPIvOg.js"),__vite__mapDeps([45,1]))),"v-688e4fbe":b(()=>r(()=>import("./更改docker服务网段分配地址.html-AHFvZnbC.js"),__vite__mapDeps([46,1]))),"v-7b7916dd":b(()=>r(()=>import("./跨宿主机通信overlay和macvlay.html-imK-mRwZ.js"),__vite__mapDeps([47,1]))),"v-6e99be31":b(()=>r(()=>import("./Bind9的使用.html-QTCDuUD4.js"),__vite__mapDeps([48,1]))),"v-28ef74e9":b(()=>r(()=>import("./NamedManager.html-L40Tz_Fn.js"),__vite__mapDeps([49,1]))),"v-8e1c3a3e":b(()=>r(()=>import("./EFK8.4.3部署.html-lvusNKQ-.js"),__vite__mapDeps([50,1]))),"v-3487e284":b(()=>r(()=>import("./ELK.html-wvDgK8mO.js"),__vite__mapDeps([51,1]))),"v-4c3279e0":b(()=>r(()=>import("./ESXI中的网络.html-99Aou9cN.js"),__vite__mapDeps([52,1]))),"v-5c84e740":b(()=>r(()=>import("./配置案例.html-t4NR7kaB.js"),__vite__mapDeps([53,1]))),"v-09de09ac":b(()=>r(()=>import("./AWK案例入门看这一篇就够了.html--gem4B6r.js"),__vite__mapDeps([54,1]))),"v-128301a5":b(()=>r(()=>import("./Shell文本处理三剑客-AWK.html-fncsmtcT.js"),__vite__mapDeps([55,1]))),"v-03dfed38":b(()=>r(()=>import("./awk 入门教程.html-hzUHi6M1.js"),__vite__mapDeps([56,1]))),"v-8ff08dec":b(()=>r(()=>import("./awk 学习  高级输出  02.html-a0BNaY9j.js"),__vite__mapDeps([57,1]))),"v-7e12b9a6":b(()=>r(()=>import("./awk语言学习笔记  01.html-3nEjzs2C.js"),__vite__mapDeps([58,1]))),"v-ab5d88e0":b(()=>r(()=>import("./匹配特定字符并输出其后的若干行.html-9DURDNmk.js"),__vite__mapDeps([59,1]))),"v-3f1dde92":b(()=>r(()=>import("./Git 的代理配置.html-mS_MC5dm.js"),__vite__mapDeps([60,1]))),"v-69ef78cb":b(()=>r(()=>import("./Git分支管理合并与删除命令.html-RIJ7JsYj.js"),__vite__mapDeps([61,1]))),"v-9382cbf8":b(()=>r(()=>import("./Git识别项目的语言类型，及文件占比.html-6jmIK1rc.js"),__vite__mapDeps([62,1]))),"v-bae969ea":b(()=>r(()=>import("./Git高级操作和练习网站.html-oYdX35h4.js"),__vite__mapDeps([63,1]))),"v-523bf541":b(()=>r(()=>import("./index.html-bKeFoW3c.js"),__vite__mapDeps([64,1]))),"v-20b8f0f1":b(()=>r(()=>import("./git 拉取全部远程分支.html-GGurwckA.js"),__vite__mapDeps([65,1]))),"v-7726c068":b(()=>r(()=>import("./git基础命令.html-KU7Ktl0n.js"),__vite__mapDeps([66,1]))),"v-2b2f3b07":b(()=>r(()=>import("./git更新远程分支.html-2Q7wocaf.js"),__vite__mapDeps([67,1]))),"v-219bdfe6":b(()=>r(()=>import("./git统计项目代码行数.html-AY_tI-42.js"),__vite__mapDeps([68,1]))),"v-08b82cef":b(()=>r(()=>import("./git远程仓库回退到指定版本.html-434hJtK_.js"),__vite__mapDeps([69,1]))),"v-89f58c8e":b(()=>r(()=>import("./命令行显示gitmoji.html-4uh7saLD.js"),__vite__mapDeps([70,1]))),"v-4d6c1094":b(()=>r(()=>import("./Gitlab二开从而自定义权限系统.html-vt1h3Jrc.js"),__vite__mapDeps([71,1]))),"v-736258dc":b(()=>r(()=>import("./Gitlab备份和恢复.html-mEBn571a.js"),__vite__mapDeps([72,1]))),"v-ce8e88a6":b(()=>r(()=>import("./Gitlab安装部署.html-WtLm3B5A.js"),__vite__mapDeps([73,1]))),"v-1affebc9":b(()=>r(()=>import("./Gitlab的一些问题.html-LqPFSEg1.js"),__vite__mapDeps([74,1]))),"v-edc7031c":b(()=>r(()=>import("./Gitlab配置邮件服务器.html-8b-9Wxma.js"),__vite__mapDeps([75,1]))),"v-3251a524":b(()=>r(()=>import("./ha-lvs-keepalived.html-CfzjYcav.js"),__vite__mapDeps([76,1]))),"v-72564be3":b(()=>r(()=>import("./haproxy.html-nGhvO1Ob.js"),__vite__mapDeps([77,1]))),"v-6c105dfe":b(()=>r(()=>import("./keepalived.html-EEdOjFj3.js"),__vite__mapDeps([78,1]))),"v-4db786a2":b(()=>r(()=>import("./Harbor离线搭建.html-bUP5wfqz.js"),__vite__mapDeps([79,1]))),"v-77da57a3":b(()=>r(()=>import("./Linux内核子系统 - 网络 netfilter.html-Dld5x9_G.js"),__vite__mapDeps([80,1]))),"v-4b719180":b(()=>r(()=>import("./iptables拦截内网奇虎软件病毒上报.html-UG0bhd5g.js"),__vite__mapDeps([81,1]))),"v-5df5e696":b(()=>r(()=>import("./iptables详解-朱光印.html-_s6BocQG.js"),__vite__mapDeps([82,1]))),"v-f32b6d86":b(()=>r(()=>import("./linux下IPTABLES配置详解.html-P65t5Wlq.js"),__vite__mapDeps([83,1]))),"v-f8568246":b(()=>r(()=>import("./内核参数ip_forward.html-YqDvHZxJ.js"),__vite__mapDeps([84,1]))),"v-dcb1d26a":b(()=>r(()=>import("./jenkins备份.html-OM9SjEj7.js"),__vite__mapDeps([85,1]))),"v-07b8030a":b(()=>r(()=>import("./jenkins构建持续化集成平台.html-7CfxwoQv.js"),__vite__mapDeps([86,1]))),"v-577615d7":b(()=>r(()=>import("./jenkins的docker部署文档.html-i_ndlZh1.js"),__vite__mapDeps([87,1]))),"v-513bda28":b(()=>r(()=>import("./修改Jenkins插件为国内源.html-Nfu-4WE2.js"),__vite__mapDeps([88,1]))),"v-77aac963":b(()=>r(()=>import("./Kubernetes Api Endpoint.html-q8VW0Rqp.js"),__vite__mapDeps([89,1]))),"v-c66ad2a6":b(()=>r(()=>import("./Kubernetes Make Prometheus_Grafana.html-dG6DXudt.js"),__vite__mapDeps([90,1]))),"v-e9469f82":b(()=>r(()=>import("./Kubernetes Service Account如何生成Token.html-JHvzgHQY.js"),__vite__mapDeps([91,1]))),"v-2ece8d5e":b(()=>r(()=>import("./Kubernetes crictl管理命令详解.html-eQ4gGVel.js"),__vite__mapDeps([92,1]))),"v-a0127118":b(()=>r(()=>import("./Kubernetes最小高可用架构图.html-P9Bz73hh.js"),__vite__mapDeps([93,1]))),"v-f5f5d002":b(()=>r(()=>import("./Kubernetes有哪些组件.html-jFFLyZX-.js"),__vite__mapDeps([94,1]))),"v-01b130a4":b(()=>r(()=>import("./Kubernetes的NetworkPlicy.html-UOg7zSFS.js"),__vite__mapDeps([95,1]))),"v-7f271bfb":b(()=>r(()=>import("./NameSpace 资源隔离隔离了什么.html-RG-BZzom.js"),__vite__mapDeps([96,1]))),"v-76d4e7bb":b(()=>r(()=>import("./Request和Limit.html-dRAQ3x0P.js"),__vite__mapDeps([97,1]))),"v-3d16ea04":b(()=>r(()=>import("./SSL证书签发.html-Q5ezNp8a.js"),__vite__mapDeps([98,1]))),"v-6cc6b7c2":b(()=>r(()=>import("./crictl登录dockerhub.html-6FC_0kq2.js"),__vite__mapDeps([99,1]))),"v-575cf978":b(()=>r(()=>import("./etcd 二进制三节点集群部署.html-waTg6g8M.js"),__vite__mapDeps([100,1]))),"v-ac04e9ec":b(()=>r(()=>import("./k8s删除Terminating状态ns.html-SrRgMlzF.js"),__vite__mapDeps([101,1]))),"v-6b0a0620":b(()=>r(()=>import("./kubeadm部署Kubernetes 1.24步骤.html-tEdQ_w7j.js"),__vite__mapDeps([102,1]))),"v-743045a2":b(()=>r(()=>import("./kubernetes进阶（一）kubectl工具使用详解.html-t21ZDeKe.js"),__vite__mapDeps([103,1]))),"v-16f9c44f":b(()=>r(()=>import("./kubernetes进阶（三）服务发现-coredns.html-vruC9N4g.js"),__vite__mapDeps([104,1]))),"v-e9467f60":b(()=>r(()=>import("./kubernetes进阶（二）核心网络插件Flannel.html-b0z8rYQd.js"),__vite__mapDeps([105,1]))),"v-089e219f":b(()=>r(()=>import("./kubernetes进阶（五）dashboard--WEB管理.html-w_P28Fms.js"),__vite__mapDeps([106,1]))),"v-1c63547c":b(()=>r(()=>import("./kubernetes进阶（六）k8s平滑升级.html-jsYpvEK6.js"),__vite__mapDeps([107,1]))),"v-07fca106":b(()=>r(()=>import("./kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-miXKeB1o.js"),__vite__mapDeps([108,1]))),"v-4baada5c":b(()=>r(()=>import("./一次kubeadm添加节点出现etcd检查错误.html-swSYC1eC.js"),__vite__mapDeps([109,1]))),"v-5b225804":b(()=>r(()=>import("./二进制安装kubernetes（七） 部署知识点总结.html-AaOVD_-w.js"),__vite__mapDeps([110,1]))),"v-aa3e3ee8":b(()=>r(()=>import("./二进制安装kubernetes（三） kube-controller-manager组件安装.html-DjpKci99.js"),__vite__mapDeps([111,1]))),"v-81834800":b(()=>r(()=>import("./二进制安装kubernetes（二） kube-apiserver组件安装.html--kFC846q.js"),__vite__mapDeps([112,1]))),"v-7e1d67ea":b(()=>r(()=>import("./二进制安装kubernetes（五） kubelet组件安装.html-pmKT6W9V.js"),__vite__mapDeps([113,1]))),"v-e936c158":b(()=>r(()=>import("./二进制安装kubernetes（六） kube-proxy组件安装.html-TE-N1gKP.js"),__vite__mapDeps([114,1]))),"v-53c4fe8d":b(()=>r(()=>import("./二进制安装kubernetes（四） kube-scheduler组件安装.html-IwVhw6Ia.js"),__vite__mapDeps([115,1]))),"v-639f36bc":b(()=>r(()=>import("./二进制部署Kubernetes.html-n7OBMBsa.js"),__vite__mapDeps([116,1]))),"v-5823502a":b(()=>r(()=>import("./什么是Label和Label选择器.html-VagUNXQC.js"),__vite__mapDeps([117,1]))),"v-7544ffb4":b(()=>r(()=>import("./什么是Name和NameSpace.html-Ktw4zkr0.js"),__vite__mapDeps([118,1]))),"v-95889b98":b(()=>r(()=>import("./什么是Pod和Pod控制器.html-sfiG6Bzr.js"),__vite__mapDeps([119,1]))),"v-b33727c8":b(()=>r(()=>import("./什么是Service和Ingress.html-98hlt21A.js"),__vite__mapDeps([120,1]))),"v-4f01f3b8":b(()=>r(()=>import("./使用 vmagent 代替 Prometheus 采集监控指标.html-KL2PI9UU.js"),__vite__mapDeps([121,1]))),"v-23bf45e1":b(()=>r(()=>import("./常用优化.html-LnriCD_I.js"),__vite__mapDeps([122,1]))),"v-0a8284ed":b(()=>r(()=>import("./记一次异常断电造成kubernetes故障.html-TRLJZjeo.js"),__vite__mapDeps([123,1]))),"v-788034ca":b(()=>r(()=>import("./LFS-NoteBook.html-OFaNdE-q.js"),__vite__mapDeps([124,1]))),"v-5133ac50":b(()=>r(()=>import("./Linux备份为liveOS.html-Jn7h7O11.js"),__vite__mapDeps([125,1]))),"v-1c82387b":b(()=>r(()=>import("./bash利用扩展字符集实现rm.html-oUt0B36J.js"),__vite__mapDeps([126,1]))),"v-759f12ff":b(()=>r(()=>import("./grub2手动命令引导教程.html-06vU7Ye2.js"),__vite__mapDeps([127,1]))),"v-eeb679e4":b(()=>r(()=>import("./shell脚本加密解密工具shc.html-K0sf1hkq.js"),__vite__mapDeps([128,1]))),"v-19869778":b(()=>r(()=>import("./ssh 设置反向代理.html-1qwRcMBO.js"),__vite__mapDeps([129,1]))),"v-0c50d2dd":b(()=>r(()=>import("./ssh把远程端口映射到本地.html-G3yRum1f.js"),__vite__mapDeps([130,1]))),"v-e5c7a1ce":b(()=>r(()=>import("./tcpdump抓包命令.html-JKn6r5Aq.js"),__vite__mapDeps([131,1]))),"v-28d01994":b(()=>r(()=>import("./命令创建虚拟镜像文件.html-QVmwiPFQ.js"),__vite__mapDeps([132,1]))),"v-156dfb56":b(()=>r(()=>import("./按电源软关机要等待60秒设置更短的时间.html-m9Ax3DeW.js"),__vite__mapDeps([133,1]))),"v-7208e0fe":b(()=>r(()=>import("./让某个命令不输出.html-sQf-Szkh.js"),__vite__mapDeps([134,1]))),"v-79d1ae7f":b(()=>r(()=>import("./Nginx变量大全.html-3sJPPS6x.js"),__vite__mapDeps([135,1]))),"v-0c6b7d0f":b(()=>r(()=>import("./Nginx正向代理.html-k80W557X.js"),__vite__mapDeps([136,1]))),"v-72bc3488":b(()=>r(()=>import("./Nginx正向代理支持https.html-rYWlZKgO.js"),__vite__mapDeps([137,1]))),"v-384ed63f":b(()=>r(()=>import("./Nginx正向代理高并发.html-Cf6zfwiH.js"),__vite__mapDeps([138,1]))),"v-6f000423":b(()=>r(()=>import("./Nginx的负载均衡和故障转移.html-AEEx5ZWa.js"),__vite__mapDeps([139,1]))),"v-26dd9c7b":b(()=>r(()=>import("./nginx-plus-module-lua.html-xlzNuQft.js"),__vite__mapDeps([140,1]))),"v-01b8e297":b(()=>r(()=>import("./nginx01.html-mCbd9kAS.js"),__vite__mapDeps([141,1]))),"v-036dbb36":b(()=>r(()=>import("./nginx02.html-Ybe74lzU.js"),__vite__mapDeps([142,1]))),"v-052293d5":b(()=>r(()=>import("./nginx03.html-gsFU95Qf.js"),__vite__mapDeps([143,1]))),"v-4396c282":b(()=>r(()=>import("./nginx单机百万并发.html-7zpBgBUC.js"),__vite__mapDeps([144,1]))),"v-30f385af":b(()=>r(()=>import("./nginx配置示例.html-UYdkPOHg.js"),__vite__mapDeps([145,1]))),"v-10913ee4":b(()=>r(()=>import("./ngx_stream_ssl_preread_module.html-SLK_Fzqq.js"),__vite__mapDeps([146,1]))),"v-3eb55632":b(()=>r(()=>import("./ssh日志记录登陆密码.html-dAwOS1Eb.js"),__vite__mapDeps([147,1]))),"v-ce601f4c":b(()=>r(()=>import("./CPU和内存的架构 UMA和NUMA.html-V69xNW7t.js"),__vite__mapDeps([148,1]))),"v-5d982049":b(()=>r(()=>import("./Journal日志服务详解.html-AJl49-4i.js"),__vite__mapDeps([149,1]))),"v-3e5ab3dc":b(()=>r(()=>import("./Linux下的ASLR（PIE）内存保护机制和绕过.html-Z5APHVhr.js"),__vite__mapDeps([150,1]))),"v-2b1ef3ea":b(()=>r(()=>import("./Linux升级内核的两种方法.html-2-r8oyAz.js"),__vite__mapDeps([151,1]))),"v-31ec57f8":b(()=>r(()=>import("./Linux排查哪个进程和IP在占用网速.html-aWMGwnEI.js"),__vite__mapDeps([152,1]))),"v-00524e94":b(()=>r(()=>import("./Linux普通用户免密码sudo.html-_njKmjr_.js"),__vite__mapDeps([153,1]))),"v-636408d2":b(()=>r(()=>import("./Linux网络内核参数优化秘籍.html-kZ3LCV5h.js"),__vite__mapDeps([154,1]))),"v-4581fe4c":b(()=>r(()=>import("./Linux虚拟网络设备之bridge.html-Pgb84ziO.js"),__vite__mapDeps([155,1]))),"v-1c72c74c":b(()=>r(()=>import("./Shell快捷键.html-pfWs-YQh.js"),__vite__mapDeps([156,1]))),"v-79d954ee":b(()=>r(()=>import("./date命令.html-TKlxMXvO.js"),__vite__mapDeps([157,1]))),"v-b89ca53e":b(()=>r(()=>import("./grep命令.html-ad780su8.js"),__vite__mapDeps([158,1]))),"v-4977fd20":b(()=>r(()=>import("./ip命令.html-Nv07f30U.js"),__vite__mapDeps([159,1]))),"v-966b2156":b(()=>r(()=>import("./macvlan详解.html-BEaYmue3.js"),__vite__mapDeps([160,1]))),"v-8484bb5a":b(()=>r(()=>import("./proc-sysrq-trigger详解.html-f3UxaWK1.js"),__vite__mapDeps([161,1]))),"v-92954d86":b(()=>r(()=>import("./proc详解.html-eQFIzC9H.js"),__vite__mapDeps([162,1]))),"v-00bad121":b(()=>r(()=>import("./sed.html-dKn1ebwI.js"),__vite__mapDeps([163,1]))),"v-bb5b9e90":b(()=>r(()=>import("./sysstat Linux状态工具包.html-Zldkh6AN.js"),__vite__mapDeps([164,1]))),"v-15e0f84a":b(()=>r(()=>import("./使用curl实现邮件发送.html-4xi5XlN9.js"),__vite__mapDeps([165,1]))),"v-269af0d2":b(()=>r(()=>import("./使用dev下的tcp-udp实现socket.html-oqk-KExw.js"),__vite__mapDeps([166,1]))),"v-5a559594":b(()=>r(()=>import("./备份Linux系统.html-MQcg48DI.js"),__vite__mapDeps([167,1]))),"v-20664f24":b(()=>r(()=>import("./大量使用swap导致无法切换.html-MKxQ4kR8.js"),__vite__mapDeps([168,1]))),"v-2741a660":b(()=>r(()=>import("./常见乱码产生原因.html-4424mDPi.js"),__vite__mapDeps([169,1]))),"v-f71e4004":b(()=>r(()=>import("./更换系统和命令行语言.html-f9wvDL2v.js"),__vite__mapDeps([170,1]))),"v-0a501b28":b(()=>r(()=>import("./环境变量PATH.html-SVWTMArl.js"),__vite__mapDeps([171,1]))),"v-244d585c":b(()=>r(()=>import("./进程.html-ggyl29Ey.js"),__vite__mapDeps([172,1]))),"v-76b130c2":b(()=>r(()=>import("./逻辑卷无法删除.html-c-AQANOp.js"),__vite__mapDeps([173,1]))),"v-794ccb14":b(()=>r(()=>import("./ps如何去水印的4个方法.html-xZAuQWtt.js"),__vite__mapDeps([174,1]))),"v-b7e1d682":b(()=>r(()=>import("./Huawei x288系列风扇转速调速.html-Ev5SwM3j.js"),__vite__mapDeps([175,1]))),"v-bf89a59e":b(()=>r(()=>import("./Portainer 单机部署.html-SeR9UoMA.js"),__vite__mapDeps([176,1]))),"v-56a71ded":b(()=>r(()=>import("./Prometheus监控Windows主机.html-zGGCXEQ9.js"),__vite__mapDeps([177,1]))),"v-6fa63cee":b(()=>r(()=>import("./rabbitmq.html-7FeLHPm3.js"),__vite__mapDeps([178,1]))),"v-5a7f9ef1":b(()=>r(()=>import("./Azure刷写ROS教程.html-LWqf1XJt.js"),__vite__mapDeps([179,1]))),"v-790a3eba":b(()=>r(()=>import("./RouterOS利用（L2TP）实现多方异地组网.html-LILbFzKe.js"),__vite__mapDeps([180,1]))),"v-87713e26":b(()=>r(()=>import("./用ros路由作为中转教程.html-fVHZzAWa.js"),__vite__mapDeps([181,1]))),"v-0dc78858":b(()=>r(()=>import("./MiniO_Docker_Deploy.html-TAHwFZlk.js"),__vite__mapDeps([182,1]))),"v-04e93595":b(()=>r(()=>import("./bug and Issue.html-GIWm56EC.js"),__vite__mapDeps([183,1]))),"v-b010c524":b(()=>r(()=>import("./tomcat.html-OtluNWlj.js"),__vite__mapDeps([184,1]))),"v-42119fed":b(()=>r(()=>import("./index.html-jmvHi77s.js"),__vite__mapDeps([185,1]))),"v-69833e9a":b(()=>r(()=>import("./traefik作为docker边缘路由.html-Mu5Jb27K.js"),__vite__mapDeps([186,1]))),"v-454654c1":b(()=>r(()=>import("./各个版本的激活密钥.html-IJm6F_-6.js"),__vite__mapDeps([187,1]))),"v-5b263b15":b(()=>r(()=>import("./虚拟化物理机.html-TN6unXgn.js"),__vite__mapDeps([188,1]))),"v-46b48e13":b(()=>r(()=>import("./PowerShell 打印环境变量.html-ee9x4ybT.js"),__vite__mapDeps([189,1]))),"v-24f7c960":b(()=>r(()=>import("./PowerShell 操作系统禁止运行脚本.html-rP31ftaK.js"),__vite__mapDeps([190,1]))),"v-28c94530":b(()=>r(()=>import("./Windows系统更改迁移用户目录.html-NW7JiJ3F.js"),__vite__mapDeps([191,1]))),"v-bf02f4a4":b(()=>r(()=>import("./zabbix.html-YZ-LPXnG.js"),__vite__mapDeps([192,1]))),"v-8b9d7fba":b(()=>r(()=>import("./zabbix的VMwareGuest补充缺陷.html-WGY5wSjs.js"),__vite__mapDeps([193,1]))),"v-5bece530":b(()=>r(()=>import("./ebook.html-2_kLMenl.js"),__vite__mapDeps([194,1]))),"v-42d1b932":b(()=>r(()=>import("./goaccess给ftp生成分析图.html-SLeeBU1P.js"),__vite__mapDeps([195,1]))),"v-4ae285a4":b(()=>r(()=>import("./memcache-redis.html-a21cEoo3.js"),__vite__mapDeps([196,1]))),"v-04007d38":b(()=>r(()=>import("./etcd安装etcdkeeper.html-sxMLHXDg.js"),__vite__mapDeps([197,1]))),"v-350fc342":b(()=>r(()=>import("./国内源.html-tBL3hsyV.js"),__vite__mapDeps([198,1]))),"v-1187c118":b(()=>r(()=>import("./查看Mysql数据量大小.html-fkTrOYLO.js"),__vite__mapDeps([199,1]))),"v-11c46d82":b(()=>r(()=>import("./Centos7.x 安装Python3.9.7  Ansible4.5.html--AQ4Iilq.js"),__vite__mapDeps([200,1]))),"v-761ac8fe":b(()=>r(()=>import("./ansible自动化运维.html-eOEqoqf3.js"),__vite__mapDeps([201,1]))),"v-61515108":b(()=>r(()=>import("./HA_Deploy.html-dBbZ4Si5.js"),__vite__mapDeps([202,1]))),"v-5865d184":b(()=>r(()=>import("./JumperServerDockerDeploy.html-CUk-DWuh.js"),__vite__mapDeps([203,1]))),"v-9174ace0":b(()=>r(()=>import("./index.html-EtAVQIro.js"),__vite__mapDeps([204,1]))),"v-91b5b3e2":b(()=>r(()=>import("./OpenStack-Queens版搭建详解.html-xo7WmIBx.js"),__vite__mapDeps([205,1]))),"v-7c8e6e87":b(()=>r(()=>import("./gitlab ci 编写.html-4ZLLhWLh.js"),__vite__mapDeps([206,1]))),"v-eb33cb0a":b(()=>r(()=>import("./gitlab ci 部署.html-EIcrmtPL.js"),__vite__mapDeps([207,1]))),"v-75d6f0c8":b(()=>r(()=>import("./部署Kubernetes类型的gitlab-runner.html-GT8m1t9W.js"),__vite__mapDeps([208,1]))),"v-1c751544":b(()=>r(()=>import("./elk_kfaka.html-j4f7FN8D.js"),__vite__mapDeps([209,1]))),"v-37a8ebbd":b(()=>r(()=>import("./Centos7 yum install git2.x 较新版本.html-lCxJ8MK9.js"),__vite__mapDeps([210,1]))),"v-3b5999cf":b(()=>r(()=>import("./AWK中的字符串操作函数.html-5FAk1zjC.js"),__vite__mapDeps([211,1]))),"v-66a50361":b(()=>r(()=>import("./安装Nvidia Runtime.html-4PDJE7zf.js"),__vite__mapDeps([212,1]))),"v-a467abfa":b(()=>r(()=>import("./安装Nvidia驱动.html-m5kyVILm.js"),__vite__mapDeps([213,1]))),"v-80d561d8":b(()=>r(()=>import("./Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-cxV394W1.js"),__vite__mapDeps([214,1]))),"v-0e11c102":b(()=>r(()=>import("./Linux挂载cifs文件系统.html-rCn7WTCw.js"),__vite__mapDeps([215,1]))),"v-e966fc72":b(()=>r(()=>import("./Samba共享文件时文件属性nobody.html-7Xd4xvGu.js"),__vite__mapDeps([216,1]))),"v-19b6577e":b(()=>r(()=>import("./Samba配置举例.html-A8TMRN_m.js"),__vite__mapDeps([217,1]))),"v-081b1a63":b(()=>r(()=>import("./Ubuntu 20.04 安装VNC Server.html-Np8mT2tC.js"),__vite__mapDeps([218,1]))),"v-5c90804c":b(()=>r(()=>import("./vi编辑器.html-ooBOfLVL.js"),__vite__mapDeps([219,1]))),"v-3352fc98":b(()=>r(()=>import("./index.html-o0DMijQ6.js"),__vite__mapDeps([220,1]))),"v-22a3c8d7":b(()=>r(()=>import("./CPU的虚拟化.html-sxc486Sr.js"),__vite__mapDeps([221,1]))),"v-050e9cf9":b(()=>r(()=>import("./操作系统介绍.html-EOK6-rus.js"),__vite__mapDeps([222,1]))),"v-7c995a9d":b(()=>r(()=>import("./CentOS 7 用户账户配置.html-9S0Hy6-r.js"),__vite__mapDeps([223,1]))),"v-3662114a":b(()=>r(()=>import("./CentOS7配置支持AUFS文件系统.html-PaJdXOQd.js"),__vite__mapDeps([224,1]))),"v-a6eba2dc":b(()=>r(()=>import("./Centos8重启网卡的方法.html-KQY2Opp8.js"),__vite__mapDeps([225,1]))),"v-1d54df78":b(()=>r(()=>import("./firewalld配置.html-qoIvAFS9.js"),__vite__mapDeps([226,1]))),"v-2bec014a":b(()=>r(()=>import("./制作CenOS操作系统.html-LrAordJo.js"),__vite__mapDeps([227,1]))),"v-4de8425e":b(()=>r(()=>import("./配置SSH免密码验证.html-MQkqv-Au.js"),__vite__mapDeps([228,1]))),"v-2a52f0c8":b(()=>r(()=>import("./Linux 终端命令格式.html-lEAZ8zIv.js"),__vite__mapDeps([229,1]))),"v-7aabef78":b(()=>r(()=>import("./Ubuntu 20.04 Server 使用命令行设置 IP 地址.html-F0v031gF.js"),__vite__mapDeps([230,1]))),"v-aab6a77a":b(()=>r(()=>import("./Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案.html-fplyvHxY.js"),__vite__mapDeps([231,1]))),"v-6e8771f8":b(()=>r(()=>import("./Ubuntu更改为24小时制.html-kV3Ps-0x.js"),__vite__mapDeps([232,1]))),"v-3215b4ba":b(()=>r(()=>import("./Ubuntu软件包文件管理.html-jtJWCjrz.js"),__vite__mapDeps([233,1]))),"v-1a0079da":b(()=>r(()=>import("./VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-N7i3ffj7.js"),__vite__mapDeps([234,1]))),"v-733d9740":b(()=>r(()=>import("./apt查询某个软件有哪些版本.html-q0IzhbrD.js"),__vite__mapDeps([235,1]))),"v-48c517e4":b(()=>r(()=>import("./linux关闭地址空间随机化（ASLR）.html-fOWRt_jS.js"),__vite__mapDeps([236,1]))),"v-1922adf5":b(()=>r(()=>import("./ubuntu14.04 忘记了普通用户密码和root密码.html-ytwYMrNH.js"),__vite__mapDeps([237,1]))),"v-7bf7b544":b(()=>r(()=>import("./ubuntu安装nfs.html-9VANz6mk.js"),__vite__mapDeps([238,1]))),"v-f55b6058":b(()=>r(()=>import("./ubuntu查看intel GPU使用情况.html-F0C-Vbnq.js"),__vite__mapDeps([239,1]))),"v-2e5806d2":b(()=>r(()=>import("./index.html-TugKvxEW.js"),__vite__mapDeps([240,1]))),"v-4c406808":b(()=>r(()=>import("./数据结构与算法哔哩哔哩比特就业课.html-bTXSirc7.js"),__vite__mapDeps([241,1]))),"v-2adac7da":b(()=>r(()=>import("./C语言volatile关键字详解.html-6aWeAZ0m.js"),__vite__mapDeps([242,1]))),"v-cf78e944":b(()=>r(()=>import("./index.html-O1RLWqFu.js"),__vite__mapDeps([243,1]))),"v-4294bd6d":b(()=>r(()=>import("./二分查找.html-3sVMlatX.js"),__vite__mapDeps([244,1]))),"v-2b829e3e":b(()=>r(()=>import("./FastAPI-Python高性能web框架.html-DvaCRwT8.js"),__vite__mapDeps([245,1]))),"v-66124308":b(()=>r(()=>import("./PyInstaller带静态依赖文件打包教程.html-d8OGzjLH.js"),__vite__mapDeps([246,1]))),"v-9f71a98a":b(()=>r(()=>import("./Python之正则表达式细讲.html-UBvPLeV5.js"),__vite__mapDeps([247,1]))),"v-0556e072":b(()=>r(()=>import("./Python数据切片例子.html-ll9gs0Td.js"),__vite__mapDeps([248,1]))),"v-3122a850":b(()=>r(()=>import("./Python数据格式化format.html-kz98T3Y7.js"),__vite__mapDeps([249,1]))),"v-54218f21":b(()=>r(()=>import("./python re.Match object的说明.html-khBAIA21.js"),__vite__mapDeps([250,1]))),"v-4742da80":b(()=>r(()=>import("./python re.html-f4Jp6OG0.js"),__vite__mapDeps([251,1]))),"v-1302838e":b(()=>r(()=>import("./新版VSCode中Python设置自动补全函数括号.html-0uyaAFzA.js"),__vite__mapDeps([252,1]))),"v-6a7299b5":b(()=>r(()=>import("./shell脚本bad substitution.html-Uj592YhA.js"),__vite__mapDeps([253,1]))),"v-2b73f172":b(()=>r(()=>import("./基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-IYRE5Q77.js"),__vite__mapDeps([254,1]))),"v-1c5b2b34":b(()=>r(()=>import("./Docker一键部署Clash服务与管理面板.html-B8nBH0ip.js"),__vite__mapDeps([255,1]))),"v-2cf74ea8":b(()=>r(()=>import("./优秀的落地框架 XrayR.html-pquhZ5s_.js"),__vite__mapDeps([256,1]))),"v-64d1e7a6":b(()=>r(()=>import("./连接CF WARP为服务器添加IPv4IPv6网络.html-_vhiozyl.js"),__vite__mapDeps([257,1]))),"v-3ac693d4":b(()=>r(()=>import("./index.html-MIMm8ZgN.js"),__vite__mapDeps([258,1]))),"v-07a67b62":b(()=>r(()=>import("./index.html-t4oDYf70.js"),__vite__mapDeps([259,1]))),"v-2fabe988":b(()=>r(()=>import("./ACLLib.html-sU8xfvlh.js"),__vite__mapDeps([260,1]))),"v-5b349d28":b(()=>r(()=>import("./01_面向对象（OOP）基本概念.html-RtvXyPCI.js"),__vite__mapDeps([261,1]))),"v-6111f3f4":b(()=>r(()=>import("./02_类和对象.html-vK8V9-WK.js"),__vite__mapDeps([262,1]))),"v-4f6bf42c":b(()=>r(()=>import("./03_面相对象基础语法.html-riWqL87o.js"),__vite__mapDeps([263,1]))),"v-5d1813c6":b(()=>r(()=>import("./04_面向对象封装案例.html-yw6G1dnl.js"),__vite__mapDeps([264,1]))),"v-0cb49670":b(()=>r(()=>import("./05_面向对象封装案例 II.html-1_Kcyluz.js"),__vite__mapDeps([265,1]))),"v-451b6bb3":b(()=>r(()=>import("./06_私有属性和私有方法.html-sGdRIe7n.js"),__vite__mapDeps([266,1]))),"v-7741f6f4":b(()=>r(()=>import("./07_单例.html-gVdgfQlP.js"),__vite__mapDeps([267,1]))),"v-617feebe":b(()=>r(()=>import("./08_多态.html-2yG-Ge4W.js"),__vite__mapDeps([268,1]))),"v-fc80a980":b(()=>r(()=>import("./09_继承.html-kptOAT3R.js"),__vite__mapDeps([269,1]))),"v-69880198":b(()=>r(()=>import("./10_类属性和类方法.html-LKcPmS08.js"),__vite__mapDeps([270,1]))),"v-554537f7":b(()=>r(()=>import("./11_eval函数.html-2DQDRUzB.js"),__vite__mapDeps([271,1]))),"v-782c286b":b(()=>r(()=>import("./12_模块和包.html-DP9St6hf.js"),__vite__mapDeps([272,1]))),"v-d7023b56":b(()=>r(()=>import("./13_文件.html-pCAcRE5L.js"),__vite__mapDeps([273,1]))),"v-7cbbdb02":b(()=>r(()=>import("./14_异常.html-2W0fPVYc.js"),__vite__mapDeps([274,1]))),"v-65ddef8e":b(()=>r(()=>import("./10 Multi-CPU Scheduling.html-F6G7Du_W.js"),__vite__mapDeps([275,1]))),"v-508b9403":b(()=>r(()=>import("./13 Address Spaces.html-hMTHFlh_.js"),__vite__mapDeps([276,1]))),"v-06f9c988":b(()=>r(()=>import("./14 Memory API.html-Gg3JamSD.js"),__vite__mapDeps([277,1]))),"v-b0fbb1a2":b(()=>r(()=>import("./15 Address Translation.html-uPYdXZpU.js"),__vite__mapDeps([278,1]))),"v-77255d40":b(()=>r(()=>import("./16 Segmentation.html-HDQzZYmL.js"),__vite__mapDeps([279,1]))),"v-cf9a1e10":b(()=>r(()=>import("./17 Free Space Management.html-ceyQD_9W.js"),__vite__mapDeps([280,1]))),"v-247efa59":b(()=>r(()=>import("./18 Introduction to Paging.html-KAdJfzsy.js"),__vite__mapDeps([281,1]))),"v-d9307d94":b(()=>r(()=>import("./19 Translation Lookaside Buffers.html-fRiivCPe.js"),__vite__mapDeps([282,1]))),"v-5920d9e3":b(()=>r(()=>import("./20 Advanced Page Tables.html-4YA451ly.js"),__vite__mapDeps([283,1]))),"v-201aa8de":b(()=>r(()=>import("./21 Swapping Mechanisms.html-VmKbELC_.js"),__vite__mapDeps([284,1]))),"v-503a0eb2":b(()=>r(()=>import("./22 Swapping Policies.html-PdFto0-a.js"),__vite__mapDeps([285,1]))),"v-5b295232":b(()=>r(()=>import("./23 Complete VM Systems.html-GRftn0oi.js"),__vite__mapDeps([286,1]))),"v-319a6cdc":b(()=>r(()=>import("./4 Processes.html-8ewVFGt6.js"),__vite__mapDeps([287,1]))),"v-01969508":b(()=>r(()=>import("./5 Process API.html-Lk0PQj0a.js"),__vite__mapDeps([288,1]))),"v-5e65d047":b(()=>r(()=>import("./6 Direct Execution.html-gNYgQjQ9.js"),__vite__mapDeps([289,1]))),"v-3d749c17":b(()=>r(()=>import("./7 CPU Scheduling.html-EEsTDUOe.js"),__vite__mapDeps([290,1]))),"v-10c4e4cf":b(()=>r(()=>import("./8 Multi-level Feedback.html-2qQ8UTEW.js"),__vite__mapDeps([291,1]))),"v-ab459502":b(()=>r(()=>import("./26 Concurrency and Threads.html-R1CYmxF6.js"),__vite__mapDeps([292,1]))),"v-afb12a34":b(()=>r(()=>import("./27 Thread API.html-TgF4hV00.js"),__vite__mapDeps([293,1]))),"v-c56826bc":b(()=>r(()=>import("./28 Locks.html-6CIoaICY.js"),__vite__mapDeps([294,1]))),"v-41728b29":b(()=>r(()=>import("./29 Locked Data Structures.html-xcR_s3Sx.js"),__vite__mapDeps([295,1]))),"v-01e792c4":b(()=>r(()=>import("./30 Condition Variables.html-nVZiqaE2.js"),__vite__mapDeps([296,1]))),"v-187d9e5e":b(()=>r(()=>import("./31 Semaphores.html-gyjAhqck.js"),__vite__mapDeps([297,1]))),"v-282c901c":b(()=>r(()=>import("./32 Concurrency Bugs.html-75zmPBnO.js"),__vite__mapDeps([298,1]))),"v-6773cc80":b(()=>r(()=>import("./33 Event-based Concurrency.html-XtApRweM.js"),__vite__mapDeps([299,1]))),"v-e1be36c0":b(()=>r(()=>import("./36 IO Devices.html-nLY1xC9M.js"),__vite__mapDeps([300,1]))),"v-47854b8a":b(()=>r(()=>import("./37 Hard Disk Drives.html-AgNtR4dM.js"),__vite__mapDeps([301,1]))),"v-58af6e7c":b(()=>r(()=>import("./39 Files and Directories.html-oWyZqEc9.js"),__vite__mapDeps([302,1]))),"v-6305be1a":b(()=>r(()=>import("./40 File System Implementation.html-4tfrTTA2.js"),__vite__mapDeps([303,1]))),"v-3706649a":b(()=>r(()=>import("./404.html-WM668loP.js"),__vite__mapDeps([304,1]))),"v-30ca943e":b(()=>r(()=>import("./index.html-WRk-fmWO.js"),__vite__mapDeps([305,1]))),"v-74bc627b":b(()=>r(()=>import("./index.html-0vsM8aUU.js"),__vite__mapDeps([306,1]))),"v-16e944d8":b(()=>r(()=>import("./index.html-3jZhpJZa.js"),__vite__mapDeps([307,1]))),"v-82c79f78":b(()=>r(()=>import("./index.html-a-nw0QDJ.js"),__vite__mapDeps([308,1]))),"v-1a1918eb":b(()=>r(()=>import("./index.html-YyWuYbBz.js"),__vite__mapDeps([309,1]))),"v-5cb26cc8":b(()=>r(()=>import("./index.html-6Bwr8b4L.js"),__vite__mapDeps([310,1]))),"v-523a9aaf":b(()=>r(()=>import("./index.html-EFLj-VSu.js"),__vite__mapDeps([311,1]))),"v-15a9b468":b(()=>r(()=>import("./index.html-hi-EdC-u.js"),__vite__mapDeps([312,1]))),"v-1590671a":b(()=>r(()=>import("./index.html-do-z17fj.js"),__vite__mapDeps([313,1]))),"v-1581bac6":b(()=>r(()=>import("./index.html-rkSDBCsS.js"),__vite__mapDeps([314,1]))),"v-a102ac20":b(()=>r(()=>import("./index.html-09LK6GgP.js"),__vite__mapDeps([315,1]))),"v-2f09dd7f":b(()=>r(()=>import("./index.html-F3N4imz_.js"),__vite__mapDeps([316,1]))),"v-52c4c802":b(()=>r(()=>import("./index.html-MMBcRYK2.js"),__vite__mapDeps([317,1]))),"v-91099982":b(()=>r(()=>import("./index.html-5CNGIW6e.js"),__vite__mapDeps([318,1]))),"v-cbcc4a46":b(()=>r(()=>import("./index.html-457LoWd-.js"),__vite__mapDeps([319,1]))),"v-39379285":b(()=>r(()=>import("./index.html-JvOVQkGA.js"),__vite__mapDeps([320,1]))),"v-69ad952f":b(()=>r(()=>import("./index.html-hC0FNVpf.js"),__vite__mapDeps([321,1]))),"v-4c771b7d":b(()=>r(()=>import("./index.html-fEVGZXtk.js"),__vite__mapDeps([322,1]))),"v-82353d0e":b(()=>r(()=>import("./index.html-xcG3mYJf.js"),__vite__mapDeps([323,1]))),"v-9affc6ce":b(()=>r(()=>import("./index.html-H_fynFyY.js"),__vite__mapDeps([324,1]))),"v-5137394c":b(()=>r(()=>import("./index.html-Y9KXk_6e.js"),__vite__mapDeps([325,1]))),"v-3e4a648b":b(()=>r(()=>import("./index.html-u-XSFpBc.js"),__vite__mapDeps([326,1]))),"v-0b15a2f0":b(()=>r(()=>import("./index.html-BUobjk0e.js"),__vite__mapDeps([327,1]))),"v-6d21b581":b(()=>r(()=>import("./index.html-yVxECuLK.js"),__vite__mapDeps([328,1]))),"v-66058961":b(()=>r(()=>import("./index.html-H7VEYipM.js"),__vite__mapDeps([329,1]))),"v-219c108d":b(()=>r(()=>import("./index.html-UI8R9tOL.js"),__vite__mapDeps([330,1]))),"v-48fe3284":b(()=>r(()=>import("./index.html-P6HF4TqA.js"),__vite__mapDeps([331,1]))),"v-dd55478c":b(()=>r(()=>import("./index.html-qYF6NM8U.js"),__vite__mapDeps([332,1]))),"v-69060647":b(()=>r(()=>import("./index.html-qlwO4a7r.js"),__vite__mapDeps([333,1]))),"v-cd4c1012":b(()=>r(()=>import("./index.html-XsSV1pwt.js"),__vite__mapDeps([334,1]))),"v-760a078c":b(()=>r(()=>import("./index.html-52hWThz0.js"),__vite__mapDeps([335,1]))),"v-e4278e96":b(()=>r(()=>import("./index.html-0DZW9MRP.js"),__vite__mapDeps([336,1]))),"v-343dc2b6":b(()=>r(()=>import("./index.html-ZqG9ittP.js"),__vite__mapDeps([337,1]))),"v-74051d42":b(()=>r(()=>import("./index.html-QF9GLzwQ.js"),__vite__mapDeps([338,1]))),"v-e95f27e0":b(()=>r(()=>import("./index.html-1pDOdu8A.js"),__vite__mapDeps([339,1]))),"v-864a1ec4":b(()=>r(()=>import("./index.html-wy7f1tIw.js"),__vite__mapDeps([340,1]))),"v-0814f0c1":b(()=>r(()=>import("./index.html-mDpj3tl5.js"),__vite__mapDeps([341,1]))),"v-272e57e4":b(()=>r(()=>import("./index.html-D7xr-9i7.js"),__vite__mapDeps([342,1]))),"v-d8166310":b(()=>r(()=>import("./index.html-81yK1lsP.js"),__vite__mapDeps([343,1]))),"v-4c2cc361":b(()=>r(()=>import("./index.html-CsqoSOSB.js"),__vite__mapDeps([344,1]))),"v-2f8ddbd2":b(()=>r(()=>import("./index.html-tE-L57Io.js"),__vite__mapDeps([345,1]))),"v-f5fa56ce":b(()=>r(()=>import("./index.html-60xrE-rz.js"),__vite__mapDeps([346,1]))),"v-7f7597ac":b(()=>r(()=>import("./index.html-qlt49dmX.js"),__vite__mapDeps([347,1]))),"v-8d1e4126":b(()=>r(()=>import("./index.html-56U8WIfQ.js"),__vite__mapDeps([348,1]))),"v-8716188c":b(()=>r(()=>import("./index.html-zICNAl8t.js"),__vite__mapDeps([349,1]))),"v-aea9109e":b(()=>r(()=>import("./index.html-6_5os6CC.js"),__vite__mapDeps([350,1]))),"v-75d00417":b(()=>r(()=>import("./index.html-asvzdB--.js"),__vite__mapDeps([351,1]))),"v-f1e41524":b(()=>r(()=>import("./index.html-oj2i0GMB.js"),__vite__mapDeps([352,1]))),"v-87094bfe":b(()=>r(()=>import("./index.html-6VU-ggRI.js"),__vite__mapDeps([353,1]))),"v-8708771c":b(()=>r(()=>import("./index.html-lde4YzD6.js"),__vite__mapDeps([354,1]))),"v-62a96ae9":b(()=>r(()=>import("./index.html-Na88a-Ph.js"),__vite__mapDeps([355,1]))),"v-380a8ce0":b(()=>r(()=>import("./index.html-WtTEbnFS.js"),__vite__mapDeps([356,1]))),"v-54dda6e8":b(()=>r(()=>import("./index.html-BTBgyZQB.js"),__vite__mapDeps([357,1]))),"v-270d1f92":b(()=>r(()=>import("./index.html-NlBzleXn.js"),__vite__mapDeps([358,1]))),"v-202e1ae1":b(()=>r(()=>import("./index.html-TKvmPpsM.js"),__vite__mapDeps([359,1]))),"v-ed5a039e":b(()=>r(()=>import("./index.html-vV1Si-Rk.js"),__vite__mapDeps([360,1]))),"v-27e35532":b(()=>r(()=>import("./index.html-C7UcZU8e.js"),__vite__mapDeps([361,1]))),"v-ad35a506":b(()=>r(()=>import("./index.html-4SLuhcV9.js"),__vite__mapDeps([362,1]))),"v-6f76dcc4":b(()=>r(()=>import("./index.html-Fj2OKQnj.js"),__vite__mapDeps([363,1]))),"v-738568b6":b(()=>r(()=>import("./index.html-ov-f7Dlo.js"),__vite__mapDeps([364,1]))),"v-02fff589":b(()=>r(()=>import("./index.html-jwjJ9XDP.js"),__vite__mapDeps([365,1]))),"v-0f9b9b67":b(()=>r(()=>import("./index.html-XY0uBcZ1.js"),__vite__mapDeps([366,1]))),"v-5a14fc0c":b(()=>r(()=>import("./index.html-WTeLapFb.js"),__vite__mapDeps([367,1]))),"v-3c38aec7":b(()=>r(()=>import("./index.html-6NUQYZup.js"),__vite__mapDeps([368,1]))),"v-5bc93818":b(()=>r(()=>import("./index.html-XBUEwbMj.js"),__vite__mapDeps([369,1]))),"v-744d024e":b(()=>r(()=>import("./index.html-g5oppk7f.js"),__vite__mapDeps([370,1]))),"v-e52c881c":b(()=>r(()=>import("./index.html-ao4HakOa.js"),__vite__mapDeps([371,1]))),"v-154dc4c4":b(()=>r(()=>import("./index.html-MCpNS1ES.js"),__vite__mapDeps([372,1]))),"v-01560935":b(()=>r(()=>import("./index.html-PoUdQOwK.js"),__vite__mapDeps([373,1]))),"v-49425445":b(()=>r(()=>import("./index.html-jQ8jYxgm.js"),__vite__mapDeps([374,1]))),"v-07af4466":b(()=>r(()=>import("./index.html-WDrlWCQx.js"),__vite__mapDeps([375,1]))),"v-45aa885d":b(()=>r(()=>import("./index.html-cZW1Es6x.js"),__vite__mapDeps([376,1]))),"v-9803cb6a":b(()=>r(()=>import("./index.html-04QtPIfK.js"),__vite__mapDeps([377,1]))),"v-a074e84e":b(()=>r(()=>import("./index.html-ZtvoHK6g.js"),__vite__mapDeps([378,1]))),"v-95b29426":b(()=>r(()=>import("./index.html-OEpCCVJJ.js"),__vite__mapDeps([379,1]))),"v-5e0b61bd":b(()=>r(()=>import("./index.html-8E0CXsox.js"),__vite__mapDeps([380,1])))};var Zm=Symbol(""),Kc=Symbol(""),Ym=ks({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pe=()=>{const e=ce(Kc);if(!e)throw new Error("pageData() is called without provider.");return e},jc=Symbol(""),ge=()=>{const e=ce(jc);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},Wc=Symbol(""),Jm=()=>{const e=ce(Wc);if(!e)throw new Error("usePageHead() is called without provider.");return e},Xm=Symbol(""),qc=Symbol(""),mi=()=>{const e=ce(qc);if(!e)throw new Error("usePageLang() is called without provider.");return e},Qc=Symbol(""),e1=()=>{const e=ce(Qc);if(!e)throw new Error("usePageLayout() is called without provider.");return e},n1=K(Gm),bi=Symbol(""),$n=()=>{const e=ce(bi);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Ss=K(Km),Zc=()=>Ss,Yc=Symbol(""),Ys=()=>{const e=ce(Yc);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},s1=Symbol(""),t1="Layout",a1="NotFound",Tn=Dt({resolveLayouts:e=>e.reduce((n,s)=>({...n,...s.layouts}),{}),resolvePageData:async e=>{const n=n1.value[e];return await(n==null?void 0:n())??Ym},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,n,s)=>{const t=ie(n.description)?n.description:s.description,a=[...ee(n.head)?n.head:[],...s.head,["title",{},e],["meta",{name:"description",content:t}]];return Wm(a)},resolvePageHeadTitle:(e,n)=>[e.title,n.title].filter(s=>!!s).join(" | "),resolvePageLang:(e,n)=>e.lang||n.lang||"en-US",resolvePageLayout:(e,n)=>{let s;if(e.path){const t=e.frontmatter.layout;ie(t)?s=t:s=t1}else s=a1;return n[s]},resolveRouteLocale:(e,n)=>Qm(e,n),resolveSiteLocaleData:(e,n)=>({...e,...e.locales[n]})}),xa=I({name:"ClientOnly",setup(e,n){const s=K(!1);return de(()=>{s.value=!0}),()=>{var t,a;return s.value?(a=(t=n.slots).default)==null?void 0:a.call(t):null}}}),Jc=I({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const n=pe(),s=A(()=>Gc[e.pageKey||n.value.key]);return()=>s.value?c(s.value):c("div","404 Not Found")}}),on=(e={})=>e,ye=e=>ts(e)?e:`/${zc(e)}`;const o1={};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function i1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const fe=Object.assign;function Qa(e,n){const s={};for(const t in n){const a=n[t];s[t]=En(a)?a.map(e):e(a)}return s}const ut=()=>{},En=Array.isArray,r1=/\/$/,l1=e=>e.replace(r1,"");function Za(e,n,s="/"){let t,a={},o="",i="";const l=n.indexOf("#");let u=n.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(t=n.slice(0,u),o=n.slice(u+1,l>-1?l:n.length),a=e(o)),l>-1&&(t=t||n.slice(0,l),i=n.slice(l,n.length)),t=d1(t??n,s),{fullPath:t+(o&&"?")+o+i,path:t,query:a,hash:i}}function c1(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Hr(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function p1(e,n,s){const t=n.matched.length-1,a=s.matched.length-1;return t>-1&&t===a&&Gs(n.matched[t],s.matched[a])&&Xc(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function Gs(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Xc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!u1(e[s],n[s]))return!1;return!0}function u1(e,n){return En(e)?Ur(e,n):En(n)?Ur(n,e):e===n}function Ur(e,n){return En(n)?e.length===n.length&&e.every((s,t)=>s===n[t]):e.length===1&&e[0]===n}function d1(e,n){if(e.startsWith("/"))return e;if(!e)return n;const s=n.split("/"),t=e.split("/"),a=t[t.length-1];(a===".."||a===".")&&t.push("");let o=s.length-1,i,l;for(i=0;i<t.length;i++)if(l=t[i],l!==".")if(l==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+t.slice(i-(i===t.length?1:0)).join("/")}var yt;(function(e){e.pop="pop",e.push="push"})(yt||(yt={}));var dt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(dt||(dt={}));function v1(e){if(!e)if(Ps){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),l1(e)}const m1=/^[^#]+#/;function b1(e,n){return e.replace(m1,"#")+n}function h1(e,n){const s=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:n.behavior,left:t.left-s.left-(n.left||0),top:t.top-s.top-(n.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function k1(e){let n;if("el"in e){const s=e.el,t=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?t?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;n=h1(a,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function zr(e,n){return(history.state?history.state.position-n:-1)+e}const Po=new Map;function f1(e,n){Po.set(e,n)}function g1(e){const n=Po.get(e);return Po.delete(e),n}let E1=()=>location.protocol+"//"+location.host;function ep(e,n){const{pathname:s,search:t,hash:a}=n,o=e.indexOf("#");if(o>-1){let l=a.includes(e.slice(o))?e.slice(o).length:1,u=a.slice(l);return u[0]!=="/"&&(u="/"+u),Hr(u,"")}return Hr(s,e)+t+a}function _1(e,n,s,t){let a=[],o=[],i=null;const l=({state:m})=>{const h=ep(e,location),k=s.value,E=n.value;let w=0;if(m){if(s.value=h,n.value=m,i&&i===k){i=null;return}w=E?m.position-E.position:0}else t(h);a.forEach(_=>{_(s.value,k,{delta:w,type:yt.pop,direction:w?w>0?dt.forward:dt.back:dt.unknown})})};function u(){i=s.value}function p(m){a.push(m);const h=()=>{const k=a.indexOf(m);k>-1&&a.splice(k,1)};return o.push(h),h}function d(){const{history:m}=window;m.state&&m.replaceState(fe({},m.state,{scroll:Ra()}),"")}function v(){for(const m of o)m();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:v}}function Gr(e,n,s,t=!1,a=!1){return{back:e,current:n,forward:s,replaced:t,position:window.history.length,scroll:a?Ra():null}}function y1(e){const{history:n,location:s}=window,t={value:ep(e,s)},a={value:n.state};a.value||o(t.value,{back:null,current:t.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(u,p,d){const v=e.indexOf("#"),m=v>-1?(s.host&&document.querySelector("base")?e:e.slice(v))+u:E1()+e+u;try{n[d?"replaceState":"pushState"](p,"",m),a.value=p}catch(h){console.error(h),s[d?"replace":"assign"](m)}}function i(u,p){const d=fe({},n.state,Gr(a.value.back,u,a.value.forward,!0),p,{position:a.value.position});o(u,d,!0),t.value=u}function l(u,p){const d=fe({},a.value,n.state,{forward:u,scroll:Ra()});o(d.current,d,!0);const v=fe({},Gr(t.value,u,null),{position:d.position+1},p);o(u,v,!1),t.value=u}return{location:t,state:a,push:l,replace:i}}function A1(e){e=v1(e);const n=y1(e),s=_1(e,n.state,n.location,n.replace);function t(o,i=!0){i||s.pauseListeners(),history.go(o)}const a=fe({location:"",base:e,go:t,createHref:b1.bind(null,e)},n,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function B1(e){return typeof e=="string"||e&&typeof e=="object"}function np(e){return typeof e=="string"||typeof e=="symbol"}const In={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sp=Symbol("");var Kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kr||(Kr={}));function Ks(e,n){return fe(new Error,{type:e,[sp]:!0},n)}function xn(e,n){return e instanceof Error&&sp in e&&(n==null||!!(e.type&n))}const jr="[^/]+?",w1={sensitive:!1,strict:!1,start:!0,end:!0},P1=/[.+*?^${}()[\]/\\]/g;function D1(e,n){const s=fe({},w1,n),t=[];let a=s.start?"^":"";const o=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(a+="/");for(let v=0;v<p.length;v++){const m=p[v];let h=40+(s.sensitive?.25:0);if(m.type===0)v||(a+="/"),a+=m.value.replace(P1,"\\$&"),h+=40;else if(m.type===1){const{value:k,repeatable:E,optional:w,regexp:_}=m;o.push({name:k,repeatable:E,optional:w});const D=_||jr;if(D!==jr){h+=10;try{new RegExp(`(${D})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${k}" (${D}): `+P.message)}}let y=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;v||(y=w&&p.length<2?`(?:/${y})`:"/"+y),w&&(y+="?"),a+=y,h+=20,w&&(h+=-8),E&&(h+=-20),D===".*"&&(h+=-50)}d.push(h)}t.push(d)}if(s.strict&&s.end){const p=t.length-1;t[p][t[p].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&(a+="(?:/|$)");const i=new RegExp(a,s.sensitive?"":"i");function l(p){const d=p.match(i),v={};if(!d)return null;for(let m=1;m<d.length;m++){const h=d[m]||"",k=o[m-1];v[k.name]=h&&k.repeatable?h.split("/"):h}return v}function u(p){let d="",v=!1;for(const m of e){(!v||!d.endsWith("/"))&&(d+="/"),v=!1;for(const h of m)if(h.type===0)d+=h.value;else if(h.type===1){const{value:k,repeatable:E,optional:w}=h,_=k in p?p[k]:"";if(En(_)&&!E)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const D=En(_)?_.join("/"):_;if(!D)if(w)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):v=!0);else throw new Error(`Missing required param "${k}"`);d+=D}}return d||"/"}return{re:i,score:t,keys:o,parse:l,stringify:u}}function S1(e,n){let s=0;for(;s<e.length&&s<n.length;){const t=n[s]-e[s];if(t)return t;s++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function L1(e,n){let s=0;const t=e.score,a=n.score;for(;s<t.length&&s<a.length;){const o=S1(t[s],a[s]);if(o)return o;s++}if(Math.abs(a.length-t.length)===1){if(Wr(t))return 1;if(Wr(a))return-1}return a.length-t.length}function Wr(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const O1={type:0,value:""},x1=/[a-zA-Z0-9_]/;function R1(e){if(!e)return[[]];if(e==="/")return[[O1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${s})/"${p}": ${h}`)}let s=0,t=s;const a=[];let o;function i(){o&&a.push(o),o=[]}let l=0,u,p="",d="";function v(){p&&(s===0?o.push({type:0,value:p}):s===1||s===2||s===3?(o.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),p="")}function m(){p+=u}for(;l<e.length;){if(u=e[l++],u==="\\"&&s!==2){t=s,s=4;continue}switch(s){case 0:u==="/"?(p&&v(),i()):u===":"?(v(),s=1):m();break;case 4:m(),s=t;break;case 1:u==="("?s=2:x1.test(u)?m():(v(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:v(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),v(),i(),a}function T1(e,n,s){const t=D1(R1(e.path),s),a=fe(t,{record:e,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function I1(e,n){const s=[],t=new Map;n=Zr({strict:!1,end:!0,sensitive:!1},n);function a(d){return t.get(d)}function o(d,v,m){const h=!m,k=C1(d);k.aliasOf=m&&m.record;const E=Zr(n,d),w=[k];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of y)w.push(fe({},k,{components:m?m.record.components:k.components,path:P,aliasOf:m?m.record:k}))}let _,D;for(const y of w){const{path:P}=y;if(v&&P[0]!=="/"){const C=v.record.path,O=C[C.length-1]==="/"?"":"/";y.path=v.record.path+(P&&O+P)}if(_=T1(y,v,E),m?m.alias.push(_):(D=D||_,D!==_&&D.alias.push(_),h&&d.name&&!Qr(_)&&i(d.name)),k.children){const C=k.children;for(let O=0;O<C.length;O++)o(C[O],_,m&&m.children[O])}m=m||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&u(_)}return D?()=>{i(D)}:ut}function i(d){if(np(d)){const v=t.get(d);v&&(t.delete(d),s.splice(s.indexOf(v),1),v.children.forEach(i),v.alias.forEach(i))}else{const v=s.indexOf(d);v>-1&&(s.splice(v,1),d.record.name&&t.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return s}function u(d){let v=0;for(;v<s.length&&L1(d,s[v])>=0&&(d.record.path!==s[v].record.path||!tp(d,s[v]));)v++;s.splice(v,0,d),d.record.name&&!Qr(d)&&t.set(d.record.name,d)}function p(d,v){let m,h={},k,E;if("name"in d&&d.name){if(m=t.get(d.name),!m)throw Ks(1,{location:d});E=m.record.name,h=fe(qr(v.params,m.keys.filter(D=>!D.optional).map(D=>D.name)),d.params&&qr(d.params,m.keys.map(D=>D.name))),k=m.stringify(h)}else if("path"in d)k=d.path,m=s.find(D=>D.re.test(k)),m&&(h=m.parse(k),E=m.record.name);else{if(m=v.name?t.get(v.name):s.find(D=>D.re.test(v.path)),!m)throw Ks(1,{location:d,currentLocation:v});E=m.record.name,h=fe({},v.params,d.params),k=m.stringify(h)}const w=[];let _=m;for(;_;)w.unshift(_.record),_=_.parent;return{name:E,path:k,params:h,matched:w,meta:F1(w)}}return e.forEach(d=>o(d)),{addRoute:o,resolve:p,removeRoute:i,getRoutes:l,getRecordMatcher:a}}function qr(e,n){const s={};for(const t of n)t in e&&(s[t]=e[t]);return s}function C1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:V1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function V1(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const t in e.components)n[t]=typeof s=="object"?s[t]:s;return n}function Qr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function F1(e){return e.reduce((n,s)=>fe(n,s.meta),{})}function Zr(e,n){const s={};for(const t in e)s[t]=t in n?n[t]:e[t];return s}function tp(e,n){return n.children.some(s=>s===e||tp(e,s))}const ap=/#/g,N1=/&/g,M1=/\//g,$1=/=/g,H1=/\?/g,op=/\+/g,U1=/%5B/g,z1=/%5D/g,ip=/%5E/g,G1=/%60/g,rp=/%7B/g,K1=/%7C/g,lp=/%7D/g,j1=/%20/g;function hi(e){return encodeURI(""+e).replace(K1,"|").replace(U1,"[").replace(z1,"]")}function W1(e){return hi(e).replace(rp,"{").replace(lp,"}").replace(ip,"^")}function Do(e){return hi(e).replace(op,"%2B").replace(j1,"+").replace(ap,"%23").replace(N1,"%26").replace(G1,"`").replace(rp,"{").replace(lp,"}").replace(ip,"^")}function q1(e){return Do(e).replace($1,"%3D")}function Q1(e){return hi(e).replace(ap,"%23").replace(H1,"%3F")}function Z1(e){return e==null?"":Q1(e).replace(M1,"%2F")}function ka(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Y1(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const o=t[a].replace(op," "),i=o.indexOf("="),l=ka(i<0?o:o.slice(0,i)),u=i<0?null:ka(o.slice(i+1));if(l in n){let p=n[l];En(p)||(p=n[l]=[p]),p.push(u)}else n[l]=u}return n}function Yr(e){let n="";for(let s in e){const t=e[s];if(s=q1(s),t==null){t!==void 0&&(n+=(n.length?"&":"")+s);continue}(En(t)?t.map(o=>o&&Do(o)):[t&&Do(t)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+s,o!=null&&(n+="="+o))})}return n}function J1(e){const n={};for(const s in e){const t=e[s];t!==void 0&&(n[s]=En(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return n}const X1=Symbol(""),Jr=Symbol(""),Ta=Symbol(""),ki=Symbol(""),So=Symbol("");function tt(){let e=[];function n(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function s(){e=[]}return{add:n,list:()=>e.slice(),reset:s}}function Qn(e,n,s,t,a){const o=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const u=v=>{v===!1?l(Ks(4,{from:s,to:n})):v instanceof Error?l(v):B1(v)?l(Ks(2,{from:n,to:v})):(o&&t.enterCallbacks[a]===o&&typeof v=="function"&&o.push(v),i())},p=e.call(t&&t.instances[a],n,s,u);let d=Promise.resolve(p);e.length<3&&(d=d.then(u)),d.catch(v=>l(v))})}function Ya(e,n,s,t){const a=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(e0(l)){const p=(l.__vccOpts||l)[n];p&&a.push(Qn(p,s,t,o,i))}else{let u=l();a.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const d=i1(p)?p.default:p;o.components[i]=d;const m=(d.__vccOpts||d)[n];return m&&Qn(m,s,t,o,i)()}))}}return a}function e0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lo(e){const n=ce(Ta),s=ce(ki),t=A(()=>n.resolve(fn(e.to))),a=A(()=>{const{matched:u}=t.value,{length:p}=u,d=u[p-1],v=s.matched;if(!d||!v.length)return-1;const m=v.findIndex(Gs.bind(null,d));if(m>-1)return m;const h=Xr(u[p-2]);return p>1&&Xr(d)===h&&v[v.length-1].path!==h?v.findIndex(Gs.bind(null,u[p-2])):m}),o=A(()=>a.value>-1&&a0(s.params,t.value.params)),i=A(()=>a.value>-1&&a.value===s.matched.length-1&&Xc(s.params,t.value.params));function l(u={}){return t0(u)?n[fn(e.replace)?"replace":"push"](fn(e.to)).catch(ut):Promise.resolve()}return{route:t,href:A(()=>t.value.href),isActive:o,isExactActive:i,navigate:l}}const n0=I({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lo,setup(e,{slots:n}){const s=Dt(Lo(e)),{options:t}=ce(Ta),a=A(()=>({[el(e.activeClass,t.linkActiveClass,"router-link-active")]:s.isActive,[el(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=n.default&&n.default(s);return e.custom?o:c("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},o)}}}),s0=n0;function t0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function a0(e,n){for(const s in n){const t=n[s],a=e[s];if(typeof t=="string"){if(t!==a)return!1}else if(!En(a)||a.length!==t.length||t.some((o,i)=>o!==a[i]))return!1}return!0}function Xr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const el=(e,n,s)=>e??n??s,o0=I({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){const t=ce(So),a=A(()=>e.route||t.value),o=ce(Jr,0),i=A(()=>{let p=fn(o);const{matched:d}=a.value;let v;for(;(v=d[p])&&!v.components;)p++;return p}),l=A(()=>a.value.matched[i.value]);dn(Jr,A(()=>i.value+1)),dn(X1,l),dn(So,a);const u=K();return le(()=>[u.value,l.value,e.name],([p,d,v],[m,h,k])=>{d&&(d.instances[v]=p,h&&h!==d&&p&&p===m&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Gs(d,h)||!m)&&(d.enterCallbacks[v]||[]).forEach(E=>E(p))},{flush:"post"}),()=>{const p=a.value,d=e.name,v=l.value,m=v&&v.components[d];if(!m)return nl(s.default,{Component:m,route:p});const h=v.props[d],k=h?h===!0?p.params:typeof h=="function"?h(p):h:null,w=c(m,fe({},k,n,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(v.instances[d]=null)},ref:u}));return nl(s.default,{Component:w,route:p})||w}}});function nl(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const cp=o0;function i0(e){const n=I1(e.routes,e),s=e.parseQuery||Y1,t=e.stringifyQuery||Yr,a=e.history,o=tt(),i=tt(),l=tt(),u=xe(In);let p=In;Ps&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Qa.bind(null,L=>""+L),v=Qa.bind(null,Z1),m=Qa.bind(null,ka);function h(L,j){let $,Z;return np(L)?($=n.getRecordMatcher(L),Z=j):Z=L,n.addRoute(Z,$)}function k(L){const j=n.getRecordMatcher(L);j&&n.removeRoute(j)}function E(){return n.getRoutes().map(L=>L.record)}function w(L){return!!n.getRecordMatcher(L)}function _(L,j){if(j=fe({},j||u.value),typeof L=="string"){const B=Za(s,L,j.path),S=n.resolve({path:B.path},j),x=a.createHref(B.fullPath);return fe(B,S,{params:m(S.params),hash:ka(B.hash),redirectedFrom:void 0,href:x})}let $;if("path"in L)$=fe({},L,{path:Za(s,L.path,j.path).path});else{const B=fe({},L.params);for(const S in B)B[S]==null&&delete B[S];$=fe({},L,{params:v(B)}),j.params=v(j.params)}const Z=n.resolve($,j),me=L.hash||"";Z.params=d(m(Z.params));const f=c1(t,fe({},L,{hash:W1(me),path:Z.path})),g=a.createHref(f);return fe({fullPath:f,hash:me,query:t===Yr?J1(L.query):L.query||{}},Z,{redirectedFrom:void 0,href:g})}function D(L){return typeof L=="string"?Za(s,L,u.value.path):fe({},L)}function y(L,j){if(p!==L)return Ks(8,{from:j,to:L})}function P(L){return M(L)}function C(L){return P(fe(D(L),{replace:!0}))}function O(L){const j=L.matched[L.matched.length-1];if(j&&j.redirect){const{redirect:$}=j;let Z=typeof $=="function"?$(L):$;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=D(Z):{path:Z},Z.params={}),fe({query:L.query,hash:L.hash,params:"path"in Z?{}:L.params},Z)}}function M(L,j){const $=p=_(L),Z=u.value,me=L.state,f=L.force,g=L.replace===!0,B=O($);if(B)return M(fe(D(B),{state:typeof B=="object"?fe({},me,B.state):me,force:f,replace:g}),j||$);const S=$;S.redirectedFrom=j;let x;return!f&&p1(t,Z,$)&&(x=Ks(16,{to:S,from:Z}),rn(Z,Z,!0,!1)),(x?Promise.resolve(x):H(S,Z)).catch(R=>xn(R)?xn(R,2)?R:yn(R):Q(R,S,Z)).then(R=>{if(R){if(xn(R,2))return M(fe({replace:g},D(R.to),{state:typeof R.to=="object"?fe({},me,R.to.state):me,force:f}),j||S)}else R=z(S,Z,!0,g,me);return Y(S,Z,R),R})}function F(L,j){const $=y(L,j);return $?Promise.reject($):Promise.resolve()}function V(L){const j=On.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(L):L()}function H(L,j){let $;const[Z,me,f]=r0(L,j);$=Ya(Z.reverse(),"beforeRouteLeave",L,j);for(const B of Z)B.leaveGuards.forEach(S=>{$.push(Qn(S,L,j))});const g=F.bind(null,L,j);return $.push(g),Te($).then(()=>{$=[];for(const B of o.list())$.push(Qn(B,L,j));return $.push(g),Te($)}).then(()=>{$=Ya(me,"beforeRouteUpdate",L,j);for(const B of me)B.updateGuards.forEach(S=>{$.push(Qn(S,L,j))});return $.push(g),Te($)}).then(()=>{$=[];for(const B of f)if(B.beforeEnter)if(En(B.beforeEnter))for(const S of B.beforeEnter)$.push(Qn(S,L,j));else $.push(Qn(B.beforeEnter,L,j));return $.push(g),Te($)}).then(()=>(L.matched.forEach(B=>B.enterCallbacks={}),$=Ya(f,"beforeRouteEnter",L,j),$.push(g),Te($))).then(()=>{$=[];for(const B of i.list())$.push(Qn(B,L,j));return $.push(g),Te($)}).catch(B=>xn(B,8)?B:Promise.reject(B))}function Y(L,j,$){l.list().forEach(Z=>V(()=>Z(L,j,$)))}function z(L,j,$,Z,me){const f=y(L,j);if(f)return f;const g=j===In,B=Ps?history.state:{};$&&(Z||g?a.replace(L.fullPath,fe({scroll:g&&B&&B.scroll},me)):a.push(L.fullPath,me)),u.value=L,rn(L,j,$,g),yn()}let ne;function Le(){ne||(ne=a.listen((L,j,$)=>{if(!An.listening)return;const Z=_(L),me=O(Z);if(me){M(fe(me,{replace:!0}),Z).catch(ut);return}p=Z;const f=u.value;Ps&&f1(zr(f.fullPath,$.delta),Ra()),H(Z,f).catch(g=>xn(g,12)?g:xn(g,2)?(M(g.to,Z).then(B=>{xn(B,20)&&!$.delta&&$.type===yt.pop&&a.go(-1,!1)}).catch(ut),Promise.reject()):($.delta&&a.go(-$.delta,!1),Q(g,Z,f))).then(g=>{g=g||z(Z,f,!1),g&&($.delta&&!xn(g,8)?a.go(-$.delta,!1):$.type===yt.pop&&xn(g,20)&&a.go(-1,!1)),Y(Z,f,g)}).catch(ut)}))}let Se=tt(),W=tt(),se;function Q(L,j,$){yn(L);const Z=W.list();return Z.length?Z.forEach(me=>me(L,j,$)):console.error(L),Promise.reject(L)}function Re(){return se&&u.value!==In?Promise.resolve():new Promise((L,j)=>{Se.add([L,j])})}function yn(L){return se||(se=!L,Le(),Se.list().forEach(([j,$])=>L?$(L):j()),Se.reset()),L}function rn(L,j,$,Z){const{scrollBehavior:me}=e;if(!Ps||!me)return Promise.resolve();const f=!$&&g1(zr(L.fullPath,0))||(Z||!$)&&history.state&&history.state.scroll||null;return ns().then(()=>me(L,j,f)).then(g=>g&&k1(g)).catch(g=>Q(g,L,j))}const Ne=L=>a.go(L);let Je;const On=new Set,An={currentRoute:u,listening:!0,addRoute:h,removeRoute:k,hasRoute:w,getRoutes:E,resolve:_,options:e,push:P,replace:C,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:W.add,isReady:Re,install(L){const j=this;L.component("RouterLink",s0),L.component("RouterView",cp),L.config.globalProperties.$router=j,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>fn(u)}),Ps&&!Je&&u.value===In&&(Je=!0,P(a.location).catch(me=>{}));const $={};for(const me in In)Object.defineProperty($,me,{get:()=>u.value[me],enumerable:!0});L.provide(Ta,j),L.provide(ki,Yl($)),L.provide(So,u);const Z=L.unmount;On.add(L),L.unmount=function(){On.delete(L),On.size<1&&(p=In,ne&&ne(),ne=null,u.value=In,Je=!1,se=!1),Z()}}};function Te(L){return L.reduce((j,$)=>j.then(()=>V($)),Promise.resolve())}return An}function r0(e,n){const s=[],t=[],a=[],o=Math.max(n.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=n.matched[i];l&&(e.matched.find(p=>Gs(p,l))?t.push(l):s.push(l));const u=e.matched[i];u&&(n.matched.find(p=>Gs(p,u))||a.push(u))}return[s,t,a]}function qe(){return ce(Ta)}function Sn(){return ce(ki)}var Ke=Uint8Array,Ls=Uint16Array,l0=Int32Array,pp=new Ke([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),up=new Ke([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),c0=new Ke([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dp=function(e,n){for(var s=new Ls(31),t=0;t<31;++t)s[t]=n+=1<<e[t-1];for(var a=new l0(s[30]),t=1;t<30;++t)for(var o=s[t];o<s[t+1];++o)a[o]=o-s[t]<<5|t;return{b:s,r:a}},vp=dp(pp,2),mp=vp.b,p0=vp.r;mp[28]=258,p0[258]=28;var u0=dp(up,0),d0=u0.b,Oo=new Ls(32768);for(var De=0;De<32768;++De){var Gn=(De&43690)>>1|(De&21845)<<1;Gn=(Gn&52428)>>2|(Gn&13107)<<2,Gn=(Gn&61680)>>4|(Gn&3855)<<4,Oo[De]=((Gn&65280)>>8|(Gn&255)<<8)>>1}var vt=function(e,n,s){for(var t=e.length,a=0,o=new Ls(n);a<t;++a)e[a]&&++o[e[a]-1];var i=new Ls(n);for(a=1;a<n;++a)i[a]=i[a-1]+o[a-1]<<1;var l;if(s){l=new Ls(1<<n);var u=15-n;for(a=0;a<t;++a)if(e[a])for(var p=a<<4|e[a],d=n-e[a],v=i[e[a]-1]++<<d,m=v|(1<<d)-1;v<=m;++v)l[Oo[v]>>u]=p}else for(l=new Ls(t),a=0;a<t;++a)e[a]&&(l[a]=Oo[i[e[a]-1]++]>>15-e[a]);return l},xt=new Ke(288);for(var De=0;De<144;++De)xt[De]=8;for(var De=144;De<256;++De)xt[De]=9;for(var De=256;De<280;++De)xt[De]=7;for(var De=280;De<288;++De)xt[De]=8;var bp=new Ke(32);for(var De=0;De<32;++De)bp[De]=5;var v0=vt(xt,9,1),m0=vt(bp,5,1),Ja=function(e){for(var n=e[0],s=1;s<e.length;++s)e[s]>n&&(n=e[s]);return n},bn=function(e,n,s){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&s},Xa=function(e,n){var s=n/8|0;return(e[s]|e[s+1]<<8|e[s+2]<<16)>>(n&7)},b0=function(e){return(e+7)/8|0},fi=function(e,n,s){return(n==null||n<0)&&(n=0),(s==null||s>e.length)&&(s=e.length),new Ke(e.subarray(n,s))},h0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pn=function(e,n,s){var t=new Error(n||h0[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,pn),!s)throw t;return t},k0=function(e,n,s,t){var a=e.length,o=t?t.length:0;if(!a||n.f&&!n.l)return s||new Ke(0);var i=!s,l=i||n.i!=2,u=n.i;i&&(s=new Ke(a*3));var p=function(me){var f=s.length;if(me>f){var g=new Ke(Math.max(f*2,me));g.set(s),s=g}},d=n.f||0,v=n.p||0,m=n.b||0,h=n.l,k=n.d,E=n.m,w=n.n,_=a*8;do{if(!h){d=bn(e,v,1);var D=bn(e,v+1,3);if(v+=3,D)if(D==1)h=v0,k=m0,E=9,w=5;else if(D==2){var O=bn(e,v,31)+257,M=bn(e,v+10,15)+4,F=O+bn(e,v+5,31)+1;v+=14;for(var V=new Ke(F),H=new Ke(19),Y=0;Y<M;++Y)H[c0[Y]]=bn(e,v+Y*3,7);v+=M*3;for(var z=Ja(H),ne=(1<<z)-1,Le=vt(H,z,1),Y=0;Y<F;){var Se=Le[bn(e,v,ne)];v+=Se&15;var y=Se>>4;if(y<16)V[Y++]=y;else{var W=0,se=0;for(y==16?(se=3+bn(e,v,3),v+=2,W=V[Y-1]):y==17?(se=3+bn(e,v,7),v+=3):y==18&&(se=11+bn(e,v,127),v+=7);se--;)V[Y++]=W}}var Q=V.subarray(0,O),Re=V.subarray(O);E=Ja(Q),w=Ja(Re),h=vt(Q,E,1),k=vt(Re,w,1)}else pn(1);else{var y=b0(v)+4,P=e[y-4]|e[y-3]<<8,C=y+P;if(C>a){u&&pn(0);break}l&&p(m+P),s.set(e.subarray(y,C),m),n.b=m+=P,n.p=v=C*8,n.f=d;continue}if(v>_){u&&pn(0);break}}l&&p(m+131072);for(var yn=(1<<E)-1,rn=(1<<w)-1,Ne=v;;Ne=v){var W=h[Xa(e,v)&yn],Je=W>>4;if(v+=W&15,v>_){u&&pn(0);break}if(W||pn(2),Je<256)s[m++]=Je;else if(Je==256){Ne=v,h=null;break}else{var On=Je-254;if(Je>264){var Y=Je-257,An=pp[Y];On=bn(e,v,(1<<An)-1)+mp[Y],v+=An}var Te=k[Xa(e,v)&rn],L=Te>>4;Te||pn(3),v+=Te&15;var Re=d0[L];if(L>3){var An=up[L];Re+=Xa(e,v)&(1<<An)-1,v+=An}if(v>_){u&&pn(0);break}l&&p(m+131072);var j=m+On;if(m<Re){var $=o-Re,Z=Math.min(Re,j);for($+m<0&&pn(3);m<Z;++m)s[m]=t[$+m]}for(;m<j;++m)s[m]=s[m-Re]}}n.l=h,n.p=Ne,n.b=m,n.f=d,h&&(d=1,n.m=E,n.d=k,n.n=w)}while(!d);return m!=s.length&&i?fi(s,0,m):s.subarray(0,m)},f0=new Ke(0),g0=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&pn(6,"invalid zlib data"),(e[1]>>5&1)==+!n&&pn(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function E0(e,n){return k0(e.subarray(g0(e,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var sl=typeof TextEncoder<"u"&&new TextEncoder,xo=typeof TextDecoder<"u"&&new TextDecoder,_0=0;try{xo.decode(f0,{stream:!0}),_0=1}catch{}var y0=function(e){for(var n="",s=0;;){var t=e[s++],a=(t>127)+(t>223)+(t>239);if(s+a>e.length)return{s:n,r:fi(e,s-1)};a?a==3?(t=((t&15)<<18|(e[s++]&63)<<12|(e[s++]&63)<<6|e[s++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):a&1?n+=String.fromCharCode((t&31)<<6|e[s++]&63):n+=String.fromCharCode((t&15)<<12|(e[s++]&63)<<6|e[s++]&63):n+=String.fromCharCode(t)}};function A0(e,n){if(n){for(var s=new Ke(e.length),t=0;t<e.length;++t)s[t]=e.charCodeAt(t);return s}if(sl)return sl.encode(e);for(var a=e.length,o=new Ke(e.length+(e.length>>1)),i=0,l=function(d){o[i++]=d},t=0;t<a;++t){if(i+5>o.length){var u=new Ke(i+8+(a-t<<1));u.set(o),o=u}var p=e.charCodeAt(t);p<128||n?l(p):p<2048?(l(192|p>>6),l(128|p&63)):p>55295&&p<57344?(p=65536+(p&1047552)|e.charCodeAt(++t)&1023,l(240|p>>18),l(128|p>>12&63),l(128|p>>6&63),l(128|p&63)):(l(224|p>>12),l(128|p>>6&63),l(128|p&63))}return fi(o,0,i)}function B0(e,n){if(n){for(var s="",t=0;t<e.length;t+=16384)s+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return s}else{if(xo)return xo.decode(e);var a=y0(e),o=a.s,s=a.r;return s.length&&pn(8),o}}const oe=({name:e="",color:n="currentColor"},{slots:s})=>{var t;return c("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:n,"aria-label":`${e} icon`},(t=s.default)==null?void 0:t.call(s))};oe.displayName="IconBase";const Rt=({size:e=48,stroke:n=4,wrapper:s=!0,height:t=2*e})=>{const a=c("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[c("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),c("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round"},[c("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),c("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return s?c("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${t}px`},a):a};Rt.displayName="LoadingIcon";const hp=(e,{slots:n})=>{var s;return(s=n.default)==null?void 0:s.call(n)},w0=e=>/\b(?:Android|iPhone)/i.test(e),P0=e=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e),kp=e=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(n=>n.test(e)),D0=e=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(n=>n.test(e)),S0=e=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(n=>n.test(e)),gi=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const n=Date.parse(e.toString());if(!Number.isNaN(n))return new Date(n)}return null},Ia=(e,n)=>{let s=1;for(let t=0;t<e.length;t++)s+=e.charCodeAt(t),s+=s<<10,s^=s>>6;return s+=s<<3,s^=s>>11,s%n},Ei=Array.isArray,L0=e=>typeof e=="function",O0=e=>typeof e=="string";var _i=e=>/^(https?:)?\/\//.test(e),x0=/.md((\?|#).*)?$/,R0=(e,n="/")=>!!(_i(e)||e.startsWith("/")&&!e.startsWith(n)&&!x0.test(e)),mt=e=>Object.prototype.toString.call(e)==="[object Object]";function T0(){const e=K(!1);return ss()&&de(()=>{e.value=!0}),e}function I0(e){return T0(),A(()=>!!e())}const Fn=e=>typeof e=="string",bs=(e,n)=>Fn(e)&&e.startsWith(n),As=(e,n)=>Fn(e)&&e.endsWith(n),gs=Object.entries,C0=Object.fromEntries,an=Object.keys,tl=(e,...n)=>{if(n.length===0)return e;const s=n.shift()||null;return s&&gs(s).forEach(([t,a])=>{t==="__proto__"||t==="constructor"||(mt(e[t])&&mt(a)?tl(e[t],a):Ei(a)?e[t]=[...a]:mt(a)?e[t]={...a}:e[t]=s[t])}),tl(e,...n)},V0=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),fp=e=>{const[n,s=""]=e.split("#");return n?`${V0(n)}${s?`#${s}`:""}`:e},al=e=>mt(e)&&Fn(e.name),At=(e,n=!1)=>e?Ei(e)?e.map(s=>Fn(s)?{name:s}:al(s)?s:null).filter(s=>s!==null):Fn(e)?[{name:e}]:al(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n?"":"| false"} | undefined\`, but got`,e),[]):[],gp=(e,n)=>{if(e){if(Ei(e)&&e.every(Fn))return e;if(Fn(e))return[e];console.error(`Expect ${n||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},Ep=e=>gp(e,"category"),_p=e=>gp(e,"tag"),Tt=e=>bs(e,"/");let F0=class{constructor(){this.messageElements={};const n="message-container",s=document.getElementById(n);s?this.containerElement=s:(this.containerElement=document.createElement("div"),this.containerElement.id=n,document.body.appendChild(this.containerElement))}pop(n,s=2e3){const t=document.createElement("div"),a=Date.now();return t.className="message move-in",t.innerHTML=n,this.containerElement.appendChild(t),this.messageElements[a]=t,s>0&&setTimeout(()=>{this.close(a)},s),a}close(n){if(n){const s=this.messageElements[n];s.classList.remove("move-in"),s.classList.add("move-out"),s.addEventListener("animationend",()=>{s.remove(),delete this.messageElements[n]})}else an(this.messageElements).forEach(s=>this.close(Number(s)))}destroy(){document.body.removeChild(this.containerElement)}};const yp=/#.*$/u,N0=e=>{const n=yp.exec(e);return n?n[0]:""},ol=e=>decodeURI(e).replace(yp,"").replace(/(index)?\.(md|html)$/,""),yi=(e,n)=>{if(n===void 0)return!1;const s=ol(e.path),t=ol(n),a=N0(n);return a?a===e.hash&&(!t||s===t):s===t},fa=e=>{const n=atob(e);return B0(E0(A0(n,!0)))},M0=e=>_i(e)?e:`https://github.com/${e}`,Ai=e=>!_i(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,js=(e,...n)=>{const s=e.resolve(...n),t=s.matched[s.matched.length-1];if(!(t!=null&&t.redirect))return s;const{redirect:a}=t,o=L0(a)?a(s):a,i=O0(o)?{path:o}:o;return js(e,{hash:s.hash,query:s.query,params:s.params,...i})},$0=e=>{var n;if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&((n=e.currentTarget.getAttribute("target"))!=null&&n.match(/\b_blank\b/i))))return e.preventDefault(),!0},Me=({to:e="",class:n="",...s},{slots:t})=>{var l;const a=qe(),o=fp(e),i=(u={})=>$0(u)?a.push(e).catch():Promise.resolve();return c("a",{...s,class:["vp-link",n],href:bs(o,"/")?ye(o):o,onClick:i},(l=t.default)==null?void 0:l.call(t))};Me.displayName="VPLink";const Bi=()=>c(oe,{name:"github"},()=>c("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Bi.displayName="GitHubIcon";const wi=()=>c(oe,{name:"gitlab"},()=>c("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));wi.displayName="GitLabIcon";const Pi=()=>c(oe,{name:"gitee"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Pi.displayName="GiteeIcon";const Di=()=>c(oe,{name:"bitbucket"},()=>c("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Di.displayName="BitbucketIcon";const Si=()=>c(oe,{name:"source"},()=>c("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Si.displayName="SourceIcon";const nn=(e,n)=>{const s=n?n._instance:ss();return mt(s==null?void 0:s.appContext.components)&&(e in s.appContext.components||vn(e)in s.appContext.components||Pt(vn(e))in s.appContext.components)},H0=()=>I0(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Ap=()=>{const e=H0();return A(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Ln=e=>{const n=$n();return A(()=>e[n.value])};function il(e,n){var s;const t=xe();return cc(()=>{t.value=e()},{...n,flush:(s=n==null?void 0:n.flush)!=null?s:"sync"}),ks(t)}function Li(e,n){let s,t,a;const o=K(!0),i=()=>{o.value=!0,a()};le(e,i,{flush:"sync"});const l=typeof n=="function"?n:n.get,u=typeof n=="function"?void 0:n.set,p=sc((d,v)=>(t=d,a=v,{get(){return o.value&&(s=l(),o.value=!1),t(),s},set(m){u==null||u(m)}}));return Object.isExtensible(p)&&(p.trigger=i),p}function Js(e){return $l()?(Dd(e),!0):!1}function He(e){return typeof e=="function"?e():fn(e)}const It=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const U0=Object.prototype.toString,z0=e=>U0.call(e)==="[object Object]",Nn=()=>{},Ro=G0();function G0(){var e;return It&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Oi(e,n){function s(...t){return new Promise((a,o)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(a).catch(o)})}return s}const Bp=e=>e();function K0(e,n={}){let s,t,a=Nn;const o=l=>{clearTimeout(l),a(),a=Nn};return l=>{const u=He(e),p=He(n.maxWait);return s&&o(s),u<=0||p!==void 0&&p<=0?(t&&(o(t),t=null),Promise.resolve(l())):new Promise((d,v)=>{a=n.rejectOnCancel?v:d,p&&!t&&(t=setTimeout(()=>{s&&o(s),t=null,d(l())},p)),s=setTimeout(()=>{t&&o(t),t=null,d(l())},u)})}}function j0(e,n=!0,s=!0,t=!1){let a=0,o,i=!0,l=Nn,u;const p=()=>{o&&(clearTimeout(o),o=void 0,l(),l=Nn)};return v=>{const m=He(e),h=Date.now()-a,k=()=>u=v();return p(),m<=0?(a=Date.now(),k()):(h>m&&(s||!i)?(a=Date.now(),k()):n&&(u=new Promise((E,w)=>{l=t?w:E,o=setTimeout(()=>{a=Date.now(),i=!0,E(k()),p()},Math.max(0,m-h))})),!s&&!o&&(o=setTimeout(()=>i=!0,m)),i=!1,u)}}function W0(e=Bp){const n=K(!0);function s(){n.value=!1}function t(){n.value=!0}const a=(...o)=>{n.value&&e(...o)};return{isActive:ks(n),pause:s,resume:t,eventFilter:a}}function q0(e){let n;function s(){return n||(n=e()),n}return s.reset=async()=>{const t=n;n=void 0,t&&await t},s}function Q0(...e){if(e.length!==1)return Zs(...e);const n=e[0];return typeof n=="function"?ks(sc(()=>({get:n,set:Nn}))):K(n)}function wp(e,n=200,s={}){return Oi(K0(n,s),e)}function Z0(e,n=200,s=!1,t=!0,a=!1){return Oi(j0(n,s,t,a),e)}function Y0(e,n,s={}){const{eventFilter:t=Bp,...a}=s;return le(e,Oi(t,n),a)}function J0(e,n,s={}){const{eventFilter:t,...a}=s,{eventFilter:o,pause:i,resume:l,isActive:u}=W0(t);return{stop:Y0(e,n,{...a,eventFilter:o}),pause:i,resume:l,isActive:u}}function Ca(e,n=!0){ss()?de(e):n?e():ns(e)}function X0(e){ss()&&fs(e)}function eb(e,n,s={}){const{immediate:t=!0}=s,a=K(!1);let o=null;function i(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,i()}function u(...p){i(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...p)},He(n))}return t&&(a.value=!0,It&&u()),Js(l),{isPending:ks(a),start:u,stop:l}}function ga(e=!1,n={}){const{truthyValue:s=!0,falsyValue:t=!1}=n,a=Ce(e),o=K(e);function i(l){if(arguments.length)return o.value=l,o.value;{const u=He(s);return o.value=o.value===u?He(t):u,o.value}}return a?i:[o,i]}function sn(e){var n;const s=He(e);return(n=s==null?void 0:s.$el)!=null?n:s}const _n=It?window:void 0,Pp=It?window.document:void 0,Dp=It?window.navigator:void 0;function Ae(...e){let n,s,t,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,a]=e,n=_n):[n,s,t,a]=e,!n)return Nn;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const o=[],i=()=>{o.forEach(d=>d()),o.length=0},l=(d,v,m,h)=>(d.addEventListener(v,m,h),()=>d.removeEventListener(v,m,h)),u=le(()=>[sn(n),He(a)],([d,v])=>{if(i(),!d)return;const m=z0(v)?{...v}:v;o.push(...s.flatMap(h=>t.map(k=>l(d,h,k,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),i()};return Js(p),p}let rl=!1;function nb(e,n,s={}){const{window:t=_n,ignore:a=[],capture:o=!0,detectIframe:i=!1}=s;if(!t)return;Ro&&!rl&&(rl=!0,Array.from(t.document.body.children).forEach(m=>m.addEventListener("click",Nn)),t.document.documentElement.addEventListener("click",Nn));let l=!0;const u=m=>a.some(h=>{if(typeof h=="string")return Array.from(t.document.querySelectorAll(h)).some(k=>k===m.target||m.composedPath().includes(k));{const k=sn(h);return k&&(m.target===k||m.composedPath().includes(k))}}),d=[Ae(t,"click",m=>{const h=sn(e);if(!(!h||h===m.target||m.composedPath().includes(h))){if(m.detail===0&&(l=!u(m)),!l){l=!0;return}n(m)}},{passive:!0,capture:o}),Ae(t,"pointerdown",m=>{const h=sn(e);l=!u(m)&&!!(h&&!m.composedPath().includes(h))},{passive:!0}),i&&Ae(t,"blur",m=>{setTimeout(()=>{var h;const k=sn(e);((h=t.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(k!=null&&k.contains(t.document.activeElement))&&n(m)},0)})].filter(Boolean);return()=>d.forEach(m=>m())}function sb(){const e=K(!1);return ss()&&de(()=>{e.value=!0}),e}function Ct(e){const n=sb();return A(()=>(n.value,!!e()))}function Sp(e,n={}){const{window:s=_n}=n,t=Ct(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const o=K(!1),i=p=>{o.value=p.matches},l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},u=cc(()=>{t.value&&(l(),a=s.matchMedia(He(e)),"addEventListener"in a?a.addEventListener("change",i):a.addListener(i),o.value=a.matches)});return Js(()=>{u(),l(),a=void 0}),o}function ll(e,n={}){const{controls:s=!1,navigator:t=Dp}=n,a=Ct(()=>t&&"permissions"in t);let o;const i=typeof e=="string"?{name:e}:e,l=K(),u=()=>{o&&(l.value=o.state)},p=q0(async()=>{if(a.value){if(!o)try{o=await t.permissions.query(i),Ae(o,"change",u),u()}catch{l.value="prompt"}return o}});return p(),s?{state:l,isSupported:a,query:p}:l}function tb(e={}){const{navigator:n=Dp,read:s=!1,source:t,copiedDuring:a=1500,legacy:o=!1}=e,i=Ct(()=>n&&"clipboard"in n),l=ll("clipboard-read"),u=ll("clipboard-write"),p=A(()=>i.value||o),d=K(""),v=K(!1),m=eb(()=>v.value=!1,a);function h(){i.value&&l.value!=="denied"?n.clipboard.readText().then(_=>{d.value=_}):d.value=w()}p.value&&s&&Ae(["copy","cut"],h);async function k(_=He(t)){p.value&&_!=null&&(i.value&&u.value!=="denied"?await n.clipboard.writeText(_):E(_),d.value=_,v.value=!0,m.start())}function E(_){const D=document.createElement("textarea");D.value=_??"",D.style.position="absolute",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),D.remove()}function w(){var _,D,y;return(y=(D=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:D.toString())!=null?y:""}return{isSupported:p,text:d,copied:v,copy:k}}const Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xt="__vueuse_ssr_handlers__",ab=ob();function ob(){return Xt in Jt||(Jt[Xt]=Jt[Xt]||{}),Jt[Xt]}function ib(e,n){return ab[e]||n}function rb(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const lb={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},cl="vueuse-storage";function Es(e,n,s,t={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:v=_n,eventFilter:m,onError:h=V=>{console.error(V)},initOnMounted:k}=t,E=(d?xe:K)(typeof n=="function"?n():n);if(!s)try{s=ib("getDefaultStorage",()=>{var V;return(V=_n)==null?void 0:V.localStorage})()}catch(V){h(V)}if(!s)return E;const w=He(n),_=rb(w),D=(a=t.serializer)!=null?a:lb[_],{pause:y,resume:P}=J0(E,()=>C(E.value),{flush:o,deep:i,eventFilter:m});return v&&l&&Ca(()=>{Ae(v,"storage",F),Ae(v,cl,M),k&&F()}),k||F(),E;function C(V){try{if(V==null)s.removeItem(e);else{const H=D.write(V),Y=s.getItem(e);Y!==H&&(s.setItem(e,H),v&&v.dispatchEvent(new CustomEvent(cl,{detail:{key:e,oldValue:Y,newValue:H,storageArea:s}})))}}catch(H){h(H)}}function O(V){const H=V?V.newValue:s.getItem(e);if(H==null)return u&&w!==null&&s.setItem(e,D.write(w)),w;if(!V&&p){const Y=D.read(H);return typeof p=="function"?p(Y,w):_==="object"&&!Array.isArray(Y)?{...w,...Y}:Y}else return typeof H!="string"?H:D.read(H)}function M(V){F(V.detail)}function F(V){if(!(V&&V.storageArea!==s)){if(V&&V.key==null){E.value=w;return}if(!(V&&V.key!==e)){y();try{(V==null?void 0:V.newValue)!==D.write(E.value)&&(E.value=O(V))}catch(H){h(H)}finally{V?ns(P):P()}}}}}function cb(e){return Sp("(prefers-color-scheme: dark)",e)}function pb(e,n,s={}){const{window:t=_n,...a}=s;let o;const i=Ct(()=>t&&"ResizeObserver"in t),l=()=>{o&&(o.disconnect(),o=void 0)},u=A(()=>Array.isArray(e)?e.map(v=>sn(v)):[sn(e)]),p=le(u,v=>{if(l(),i.value&&t){o=new ResizeObserver(n);for(const m of v)m&&o.observe(m,a)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{l(),p()};return Js(d),{isSupported:i,stop:d}}function ub(e,n={width:0,height:0},s={}){const{window:t=_n,box:a="content-box"}=s,o=A(()=>{var v,m;return(m=(v=sn(e))==null?void 0:v.namespaceURI)==null?void 0:m.includes("svg")}),i=K(n.width),l=K(n.height),{stop:u}=pb(e,([v])=>{const m=a==="border-box"?v.borderBoxSize:a==="content-box"?v.contentBoxSize:v.devicePixelContentBoxSize;if(t&&o.value){const h=sn(e);if(h){const k=t.getComputedStyle(h);i.value=Number.parseFloat(k.width),l.value=Number.parseFloat(k.height)}}else if(m){const h=Array.isArray(m)?m:[m];i.value=h.reduce((k,{inlineSize:E})=>k+E,0),l.value=h.reduce((k,{blockSize:E})=>k+E,0)}else i.value=v.contentRect.width,l.value=v.contentRect.height},s);Ca(()=>{const v=sn(e);v&&(i.value="offsetWidth"in v?v.offsetWidth:n.width,l.value="offsetHeight"in v?v.offsetHeight:n.height)});const p=le(()=>sn(e),v=>{i.value=v?n.width:0,l.value=v?n.height:0});function d(){u(),p()}return{width:i,height:l,stop:d}}const pl=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function xi(e,n={}){const{document:s=Pp,autoExit:t=!1}=n,a=A(()=>{var _;return(_=sn(e))!=null?_:s==null?void 0:s.querySelector("html")}),o=K(!1),i=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(_=>s&&_ in s||a.value&&_ in a.value)),l=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(_=>s&&_ in s||a.value&&_ in a.value)),u=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(_=>s&&_ in s||a.value&&_ in a.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(_=>s&&_ in s),d=Ct(()=>a.value&&s&&i.value!==void 0&&l.value!==void 0&&u.value!==void 0),v=()=>p?(s==null?void 0:s[p])===a.value:!1,m=()=>{if(u.value){if(s&&s[u.value]!=null)return s[u.value];{const _=a.value;if((_==null?void 0:_[u.value])!=null)return!!_[u.value]}}return!1};async function h(){if(!(!d.value||!o.value)){if(l.value)if((s==null?void 0:s[l.value])!=null)await s[l.value]();else{const _=a.value;(_==null?void 0:_[l.value])!=null&&await _[l.value]()}o.value=!1}}async function k(){if(!d.value||o.value)return;m()&&await h();const _=a.value;i.value&&(_==null?void 0:_[i.value])!=null&&(await _[i.value](),o.value=!0)}async function E(){await(o.value?h():k())}const w=()=>{const _=m();(!_||_&&v())&&(o.value=_)};return Ae(s,pl,w,!1),Ae(()=>sn(a),pl,w,!1),t&&Js(h),{isSupported:d,isFullscreen:o,enter:k,exit:h,toggle:E}}function eo(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function mk(e,n,s={}){const{window:t=_n}=s;return Es(e,n,t==null?void 0:t.localStorage,s)}function no(e,n=Nn,s={}){const{immediate:t=!0,manual:a=!1,type:o="text/javascript",async:i=!0,crossOrigin:l,referrerPolicy:u,noModule:p,defer:d,document:v=Pp,attrs:m={}}=s,h=K(null);let k=null;const E=D=>new Promise((y,P)=>{const C=F=>(h.value=F,y(F),F);if(!v){y(!1);return}let O=!1,M=v.querySelector(`script[src="${He(e)}"]`);M?M.hasAttribute("data-loaded")&&C(M):(M=v.createElement("script"),M.type=o,M.async=i,M.src=He(e),d&&(M.defer=d),l&&(M.crossOrigin=l),p&&(M.noModule=p),u&&(M.referrerPolicy=u),Object.entries(m).forEach(([F,V])=>M==null?void 0:M.setAttribute(F,V)),O=!0),M.addEventListener("error",F=>P(F)),M.addEventListener("abort",F=>P(F)),M.addEventListener("load",()=>{M.setAttribute("data-loaded","true"),n(M),C(M)}),O&&(M=v.head.appendChild(M)),D||C(M)}),w=(D=!0)=>(k||(k=E(D)),k),_=()=>{if(!v)return;k=null,h.value&&(h.value=null);const D=v.querySelector(`script[src="${He(e)}"]`);D&&v.head.removeChild(D)};return t&&!a&&Ca(w),a||X0(_),{scriptTag:h,load:w,unload:_}}function Lp(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientWidth<e.scrollWidth||n.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const s=e.parentNode;return!s||s.tagName==="BODY"?!1:Lp(s)}}function db(e){const n=e||window.event,s=n.target;return Lp(s)?!1:n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)}const ea=new WeakMap;function Ri(e,n=!1){const s=K(n);let t=null,a;le(Q0(e),l=>{const u=eo(He(l));if(u){const p=u;ea.get(p)||ea.set(p,a),s.value&&(p.style.overflow="hidden")}},{immediate:!0});const o=()=>{const l=eo(He(e));!l||s.value||(Ro&&(t=Ae(l,"touchmove",u=>{db(u)},{passive:!1})),l.style.overflow="hidden",s.value=!0)},i=()=>{var l;const u=eo(He(e));!u||!s.value||(Ro&&(t==null||t()),u.style.overflow=(l=ea.get(u))!=null?l:"",ea.delete(u),s.value=!1)};return Js(i),A({get(){return s.value},set(l){l?o():i()}})}function Op(e,n,s={}){const{window:t=_n}=s;return Es(e,n,t==null?void 0:t.sessionStorage,s)}function vb(e={}){const{window:n=_n,behavior:s="auto"}=e;if(!n)return{x:K(0),y:K(0)};const t=K(n.scrollX),a=K(n.scrollY),o=A({get(){return t.value},set(l){scrollTo({left:l,behavior:s})}}),i=A({get(){return a.value},set(l){scrollTo({top:l,behavior:s})}});return Ae(n,"scroll",()=>{t.value=n.scrollX,a.value=n.scrollY},{capture:!1,passive:!0}),{x:o,y:i}}function mb(e={}){const{window:n=_n,initialWidth:s=Number.POSITIVE_INFINITY,initialHeight:t=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:o=!0}=e,i=K(s),l=K(t),u=()=>{n&&(o?(i.value=n.innerWidth,l.value=n.innerHeight):(i.value=n.document.documentElement.clientWidth,l.value=n.document.documentElement.clientHeight))};if(u(),Ca(u),Ae("resize",u,{passive:!0}),a){const p=Sp("(orientation: portrait)");le(p,()=>u())}return{width:i,height:l}}var bb=I({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const n=A(()=>{const t=["font-icon icon"],a=`fas fa-${e.icon}`;return t.push("fa-fw fa-sm"),t.push(e.icon.includes(" ")?e.icon:a),t}),s=A(()=>{const t={};return e.color&&(t.color=e.color),e.size&&(t["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),an(t).length?t:null});return()=>e.icon?c("span",{key:e.icon,class:n.value,style:s.value}):null}});const ul=e=>ie(e)?e:`${e}px`,hb=(e,n=0)=>{const s=xe(),t=A(()=>ul(fn(e.width)||"100%")),a=K("auto"),o=u=>{if(ie(u)){const[p,d]=u.split(":"),v=Number(p)/Number(d);if(!Number.isNaN(v))return v}return typeof u=="number"?u:16/9},i=u=>{const p=fn(e.height),d=o(fn(e.ratio));return p?ul(p):`${Number(u)/d+fn(n)}px`},l=()=>{s.value&&(a.value=i(s.value.clientWidth))};return de(()=>{l(),Ce(n)&&le(n,()=>l()),Ae("orientationchange",()=>l()),Ae("resize",()=>l())}),{el:s,width:t,height:a,resize:l}},kb=e=>ts(e)?e:ye(e);var fb={"/":{hint:"<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>"}};const so=e=>{console.error("[PDF]: "+e)},gb=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},Eb=e=>e==="string"?document.querySelector(e):e instanceof HTMLElement?e:document.body,_b=e=>{let n="";return e&&(n+=gs(e).map(([s,t])=>s==="noToolbar"?`toolbar=${t?0:1}`:`${encodeURIComponent(s)}=${encodeURIComponent(t)}`).join("&"),n&&(n=`#${n.slice(0,n.length-1)}`)),n},yb=(e,n,s,t,a)=>{gb(n);const o=`${e==="pdfjs"?`${Hc(ye(null))}web/viewer.html?file=${encodeURIComponent(s)}`:s}${_b(t)}`,i=e==="pdfjs"||e==="iframe"?"iframe":"embed",l=document.createElement(i);return l.className="pdf-viewer",l.type="application/pdf",l.title=a,l.src=o,l instanceof HTMLIFrameElement&&(l.allow="fullscreen"),n.classList.add("pdf-viewer-container"),n.appendChild(l),n.getElementsByTagName(i)[0]},Ab=(e,n=null,{title:s,hint:t,options:a={}})=>{var k,E;if(typeof window>"u"||!((k=window==null?void 0:window.navigator)!=null&&k.userAgent))return null;const{navigator:o}=window,{userAgent:i}=o,l=window.Promise!==void 0,u=kp(i)||w0(i),p=!u&&P0(i),d=!u&&/firefox/i.test(i)&&i.split("rv:").length>1?parseInt(i.split("rv:")[1].split(".")[0],10)>18:!1,v=!u&&(l||d);if(!ie(e))return so("URL is not valid"),null;const m=Eb(n);if(!m)return so("Target element cannot be determined"),null;const h=s||((E=/\/([^/]+).pdf/.exec(e))==null?void 0:E[1])||"PDF Viewer";return v||!u?yb(p?"iframe":"embed",m,e,a,h):(m.innerHTML=t.replace(/\[url\]/g,e),so("This browser does not support embedded PDFs"),null)};var Bb=I({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(e){const{el:n,width:s,height:t,resize:a}=hb(e),o=Ln(fb);return de(()=>{Ab(kb(e.url),n.value,{title:e.title,hint:o.value.hint,options:{page:e.page,noToolbar:e.noToolbar,zoom:e.zoom}}),a()}),()=>c("div",{class:"pdf-viewer-wrapper",ref:n,style:{width:s.value,height:t.value}})}}),wb={"/":{source:"源代码"}},Pb=I({name:"SiteInfo",components:{BitbucketIcon:Di,GiteeIcon:Pi,GitHubIcon:Bi,GitLabIcon:wi,SourceIcon:Si},props:{name:{type:String,required:!0},desc:{type:String,default:""},logo:{type:String,default:""},url:{type:String,required:!0},preview:{type:String,required:!0},repo:{type:String,default:""}},setup(e){const n=Ln(wb),s=A(()=>e.repo?Ai(e.repo):null);return()=>c("div",{class:"vp-site-info"},[c("a",{class:"vp-site-info-navigator",title:e.name,href:e.url,target:"_blank"}),c("div",{class:"vp-site-info-preview",style:{background:`url(${ye(e.preview)}) center/cover no-repeat`}}),c("div",{class:"vp-site-info-detail"},[e.logo?c("img",{class:"vp-site-info-logo",src:e.logo,alt:e.name,loading:"lazy","no-view":""}):null,c("div",{class:"vp-site-info-name"},e.name),c("div",{class:"vp-site-info-desc"},e.desc)]),e.repo?c("div",{class:"vp-site-info-source-wrapper"},c("a",{class:"vp-site-info-source",href:e.repo,"aria-label":n.value.source,"data-balloon-pos":"left",title:n.value.source,target:"_blank"},c(je(`${s.value}Icon`)))):null])}});const xp=({title:e,desc:n="",logo:s,background:t,color:a,link:o})=>{const i=[s?c("img",{class:"vp-card-logo",src:ye(s),loading:"lazy","no-view":""}):null,c("div",{class:"vp-card-content"},[c("div",{class:"vp-card-title",innerHTML:e}),c("hr"),c("div",{class:"vp-card-desc",innerHTML:n})])],l={};return t&&(l.background=t),a&&(l.color=a),o?_t(o)?c("a",{class:"vp-card",href:o,target:"_blank",style:l},i):c(Me,{to:o,class:"vp-card",style:l},()=>i):c("div",{class:"vp-card",style:l},i)};xp.displayName="VPCard";const Rp=()=>c(oe,{name:"back-to-top"},()=>[c("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),c("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Rp.displayName="BackToTopIcon";var Db={"/":{backToTop:"返回顶部"}},Sb=I({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const n=ge(),s=Ln(Db),t=xe(),{height:a}=ub(t),{height:o}=mb(),{y:i}=vb(),l=A(()=>n.value.backToTop!==!1&&i.value>e.threshold),u=A(()=>i.value/(a.value-o.value));return de(()=>{t.value=document.body}),()=>c(es,{name:"fade"},()=>l.value?c("button",{type:"button",class:"vp-back-to-top-button","aria-label":s.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:c("svg",{class:"vp-scroll-progress"},c("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*u.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),c(Rp)]):null)}});const Lb=on({enhance:({app:e})=>{nn("FontIcon")||e.component("FontIcon",bb),nn("PDF")||e.component("PDF",Bb),nn("SiteInfo")||e.component("SiteInfo",Pb),nn("VPCard")||e.component("VPCard",xp)},setup:()=>{no("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),no("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),no("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>c(Sb,{})]});function Ob(e,n,s){var t,a,o;n===void 0&&(n=50),s===void 0&&(s={});var i=(t=s.isImmediate)!=null&&t,l=(a=s.callback)!=null&&a,u=s.maxWait,p=Date.now(),d=[];function v(){if(u!==void 0){var h=Date.now()-p;if(h+n>=u)return u-h}return n}var m=function(){var h=[].slice.call(arguments),k=this;return new Promise(function(E,w){var _=i&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,p=Date.now(),!i){var y=e.apply(k,h);l&&l(y),d.forEach(function(P){return(0,P.resolve)(y)}),d=[]}},v()),_){var D=e.apply(k,h);return l&&l(D),E(D)}d.push({resolve:E,reject:w})})};return m.cancel=function(h){o!==void 0&&clearTimeout(o),d.forEach(function(k){return(0,k.reject)(h)}),d=[]},m}const xb=({headerLinkSelector:e,headerAnchorSelector:n,delay:s,offset:t=5})=>{const a=qe(),i=Ob(()=>{var E,w;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<t){dl(a,"");return}const p=window.innerHeight+l,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),v=Math.abs(d-p)<t,m=Array.from(document.querySelectorAll(e)),k=Array.from(document.querySelectorAll(n)).filter(_=>m.some(D=>D.hash===_.hash));for(let _=0;_<k.length;_++){const D=k[_],y=k[_+1],P=l>=(((E=D.parentElement)==null?void 0:E.offsetTop)??0)-t,C=!y||l<(((w=y.parentElement)==null?void 0:w.offsetTop)??0)-t;if(!(P&&C))continue;const M=decodeURIComponent(a.currentRoute.value.hash),F=decodeURIComponent(D.hash);if(M===F)return;if(v){for(let V=_+1;V<k.length;V++)if(M===decodeURIComponent(k[V].hash))return}dl(a,F);return}},s);de(()=>{window.addEventListener("scroll",i)}),ri(()=>{window.removeEventListener("scroll",i)})},dl=async(e,n)=>{const{scrollBehavior:s}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:n}).finally(()=>e.options.scrollBehavior=s)},Rb=".vp-sidebar-link, .toc-link",Tb=".header-anchor",Ib=200,Cb=5,Vb=on({setup(){xb({headerLinkSelector:Rb,headerAnchorSelector:Tb,delay:Ib,offset:Cb})}});let Tp=()=>null;const Ip=Symbol(""),Fb=e=>{Tp=e},Nb=()=>ce(Ip),Mb=e=>{e.provide(Ip,Tp)};var $b={"/":{title:"目录",empty:"暂无目录"}},Hb=I({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const n=Nb(),s=Ln($b),t=pe(),a=qe(),o=Zc(),i=v=>v?c(n,{icon:v}):null,l=({title:v,path:m,icon:h,class:k})=>c(Me,{class:k,to:m},()=>[i(h),v||m]),u=v=>{const m=v.I;return typeof m>"u"||m},p=()=>{const v=e.base||t.value.path.replace(/\/[^/]+$/,"/"),m=a.getRoutes(),h=[];return m.filter(({meta:k,path:E})=>{if(!bs(E,v)||E===v)return!1;if(v==="/"){const w=an(o.value.locales).filter(_=>_!=="/");if(E==="/404.html"||w.some(_=>bs(E,_)))return!1}return(As(E,".html")&&!As(E,"/index.html")||As(E,"/"))&&u(k)}).map(({path:k,meta:E})=>{const w=k.substring(v.length).split("/").length;return{title:E.t||"",icon:E.i||null,base:k.replace(/\/[^/]+\/?$/,"/"),order:E.O||null,level:As(k,"/")?w-1:w,path:k}}).filter(({title:k,level:E})=>k&&E<=e.level).sort(({title:k,level:E,path:w,order:_},{title:D,level:y,path:P,order:C})=>E-y||(As(w,"/index.html")?-1:As(P,"/index.html")?1:_===null?C===null?k.localeCompare(D):C:C===null?_:_>0?C>0?_-C:-1:C<0?_-C:1)).forEach(k=>{var _;const{base:E,level:w}=k;switch(w){case 1:h.push(k);break;case 2:{const D=h.find(y=>y.path===E);D&&(D.children??(D.children=[])).push(k);break}default:{const D=h.find(y=>y.path===E.replace(/\/[^/]+\/$/,"/"));if(D){const y=(_=D.children)==null?void 0:_.find(P=>P.path===E);y&&(y.children??(y.children=[])).push(k)}}}}),h},d=A(()=>p());return()=>{const v=d.value.some(m=>m.children);return c("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:c("h2",{class:"vp-catalog-main-title"},s.value.title),d.value.length?c(e.index?"ol":"ul",{class:["vp-catalogs",{deep:v}]},d.value.map(({children:m=[],icon:h,path:k,title:E})=>{const w=l({title:E,path:k,icon:h,class:"vp-catalog-title"});return c("li",{class:"vp-catalog"},v?[c("h3",{id:E,class:["vp-catalog-child-title",{"has-children":m.length}]},[c("a",{href:`#${E}`,class:"header-anchor","aria-hidden":!0},"#"),w]),m.length?c(e.index?"ol":"ul",{class:"vp-child-catalogs"},m.map(({children:_=[],icon:D,path:y,title:P})=>c("li",{class:"vp-child-catalog"},[c("div",{class:["vp-catalog-sub-title",{"has-children":_.length}]},[c("a",{href:`#${P}`,class:"header-anchor"},"#"),c(l,{title:P,path:y,icon:D,class:"vp-catalog-title"})]),_.length?c(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},_.map(({icon:C,path:O,title:M})=>{const F=c(l,{title:M,path:O,icon:C,class:""});return e.index?c("li",{class:"vp-sub-catalog"},F):c(l,{title:M,path:O,icon:C,class:"vp-sub-catalog-link"})})):null]))):null]:c("div",{class:"vp-catalog-child-title"},w))})):c("p",{class:"vp-empty-catalog"},s.value.empty)])}}}),Ub=on({enhance:({app:e})=>{Mb(e),nn("AutoCatalog",e)||e.component("AutoCatalog",Hb)}});const zb=c("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[c("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),c("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Cp=I({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const n=$n(),s=A(()=>e.locales[n.value]??{openInNewWindow:"open in new window"});return()=>c("span",[zb,c("span",{class:"external-link-icon-sr-only"},s.value.openInNewWindow)])}});var Gb={};const Kb=Gb,jb=on({enhance({app:e}){e.component("ExternalLinkIcon",c(Cp,{locales:Kb}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const be={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const n=be.isStarted();e=to(e,be.settings.minimum,1),be.status=e===1?null:e;const s=be.render(!n),t=s.querySelector(be.settings.barSelector),a=be.settings.speed,o=be.settings.easing;return s.offsetWidth,Wb(i=>{na(t,{transform:"translate3d("+vl(e)+"%,0,0)",transition:"all "+a+"ms "+o}),e===1?(na(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(function(){na(s,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){be.remove(),i()},a)},a)):setTimeout(()=>i(),a)}),be},isStarted:()=>typeof be.status=="number",start:()=>{be.status||be.set(0);const e=()=>{setTimeout(()=>{be.status&&(be.trickle(),e())},be.settings.trickleSpeed)};return be.settings.trickle&&e(),be},done:e=>!e&&!be.status?be:be.inc(.3+.5*Math.random()).set(1),inc:e=>{let n=be.status;return n?(typeof e!="number"&&(e=(1-n)*to(Math.random()*n,.1,.95)),n=to(n+e,0,.994),be.set(n)):be.start()},trickle:()=>be.inc(Math.random()*be.settings.trickleRate),render:e=>{if(be.isRendered())return document.getElementById("nprogress");ml(document.documentElement,"nprogress-busy");const n=document.createElement("div");n.id="nprogress",n.innerHTML=be.settings.template;const s=n.querySelector(be.settings.barSelector),t=e?"-100":vl(be.status||0),a=document.querySelector(be.settings.parent);return na(s,{transition:"all 0 linear",transform:"translate3d("+t+"%,0,0)"}),a!==document.body&&ml(a,"nprogress-custom-parent"),a==null||a.appendChild(n),n},remove:()=>{bl(document.documentElement,"nprogress-busy"),bl(document.querySelector(be.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&qb(e)},isRendered:()=>!!document.getElementById("nprogress")},to=(e,n,s)=>e<n?n:e>s?s:e,vl=e=>(-1+e)*100,Wb=function(){const e=[];function n(){const s=e.shift();s&&s(n)}return function(s){e.push(s),e.length===1&&n()}}(),na=function(){const e=["Webkit","O","Moz","ms"],n={};function s(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,u){return u.toUpperCase()})}function t(i){const l=document.body.style;if(i in l)return i;let u=e.length;const p=i.charAt(0).toUpperCase()+i.slice(1);let d;for(;u--;)if(d=e[u]+p,d in l)return d;return i}function a(i){return i=s(i),n[i]??(n[i]=t(i))}function o(i,l,u){l=a(l),i.style[l]=u}return function(i,l){for(const u in l){const p=l[u];p!==void 0&&Object.prototype.hasOwnProperty.call(l,u)&&o(i,u,p)}}}(),Vp=(e,n)=>(typeof e=="string"?e:Ti(e)).indexOf(" "+n+" ")>=0,ml=(e,n)=>{const s=Ti(e),t=s+n;Vp(s,n)||(e.className=t.substring(1))},bl=(e,n)=>{const s=Ti(e);if(!Vp(e,n))return;const t=s.replace(" "+n+" "," ");e.className=t.substring(1,t.length-1)},Ti=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),qb=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},Qb=()=>{de(()=>{const e=qe(),n=new Set;n.add(e.currentRoute.value.path),e.beforeEach(s=>{n.has(s.path)||be.start()}),e.afterEach(s=>{n.add(s.path),be.done()})})},Zb=on({setup(){Qb()}}),Yb=JSON.parse('{"encrypt":{"config":{"/notebook/":["$2a$10$emjL9RnNsMpBf/ndynFS9.GQ2I2UEFeM5CQ/NIeZDBhdAiQr93tI2"]}},"fullscreen":true,"author":{"name":"PaperDragon","url":"https://github.com/Paper-Dragon","email":"2678885646@qq.com"},"logo":"/logo.svg","repo":"https://github.com/Paper-Dragon/paper-dragon.github.io","docsDir":"src","docsBranch":"main","footer":"运维开发绿皮书","copyright":"copyleft 2023-至今 PaperDragon","displayFooter":true,"blog":{"timeline":"红了樱桃，绿了芭蕉"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 Github 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"使用指南","icon":"book","link":"/note-book"},{"text":"时间线","icon":"history","link":"/timeline"},{"text":"工具","icon":"splotch","link":"/tools/README.md","ariaLabel":"工具"},{"text":"友链","icon":"link","link":"/about/friend.md","ariaLabel":"友链"},{"text":"开往","icon":"subway","link":"https://www.travellings.cn/go.html","ariaLabel":"开往"},{"text":"实时访客","icon":"chart-simple","link":"https://analytics.umami.is/share/pvHcnC9eaFEzXn99/DevOps-Book"},{"text":"关于我","icon":"address-card","link":"/about/me.md","ariaLabel":"关于我"}],"sidebar":{"/":["",{"text":"note-book","icon":"book","collapsible":true,"prefix":"note-book/","link":"note-book/","children":"structure"},{"text":"PyQt5快速上手-王铭东","icon":"book","collapsible":true,"prefix":"PyQt5快速上手-王铭东/","link":"PyQt5快速上手-王铭东/","children":"structure"}]}}}}'),Jb=K(Yb),Fp=()=>Jb,Np=Symbol(""),Xb=()=>{const e=ce(Np);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},e2=(e,n)=>{const{locales:s,...t}=e;return{...t,...s==null?void 0:s[n]}},n2=on({enhance({app:e}){const n=Fp(),s=e._context.provides[bi],t=A(()=>e2(n.value,s.value));e.provide(Np,t),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return t.value}}})}});var s2={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.0/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.0/templates/giscus/dark.css",repo:"Paper-Dragon/paper-dragon.github.io",repoId:"R_kgDOKGpjZw",category:"blog",categoryId:"DIC_kwDOKGpjZ84CauNO"};const t2=s2;let a2=t2;const Mp=Symbol(""),$p=()=>ce(Mp),o2=$p,i2=e=>{e.provide(Mp,a2)},hl=["ar","ca","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var r2=I({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(e){const n=o2(),s=!!(n.repo&&n.repoId&&n.category&&n.categoryId),{repo:t,repoId:a,category:o,categoryId:i}=n,l=K(!1),u=A(()=>{const d=mi().value;if(hl.includes(d))return d;const v=d.split("-")[0];return hl.includes(v)?v:"en"}),p=A(()=>({repo:t,repoId:a,category:o,categoryId:i,lang:u.value,theme:e.darkmode?n.darkTheme||"dark":n.lightTheme||"light",mapping:n.mapping||"pathname",term:e.identifier,inputPosition:n.inputPosition||"top",reactionsEnabled:n.reactionsEnabled===!1?"0":"1",strict:n.strict===!1?"0":"1",loading:n.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return de(async()=>{await r(()=>import("./giscus-unEZQsJ0.js"),__vite__mapDeps([])),l.value=!0}),()=>s?c("div",{id:"comment",class:["giscus-wrapper",{"input-top":n.inputPosition!=="bottom"}]},l.value?c("giscus-widget",p.value):c(Rt)):null}}),l2=I({name:"CommentService",props:{darkmode:Boolean},setup(e){const n=$p(),s=pe(),t=ge(),a=n.comment!==!1,o=A(()=>t.value.comment||a&&t.value.comment!==!1);return()=>c(r2,{identifier:t.value.commentID||s.value.path,darkmode:e.darkmode,style:{display:o.value?"block":"none"}})}}),c2=on({enhance:({app:e})=>{i2(e),e.component("CommentService",l2)}}),p2={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},u2=['.theme-hope-content div[class*="language-"] pre'];const d2=800,v2=2e3,m2=p2,b2=!1,h2=u2,kl=!1,ao=new Map,k2=()=>{const{copy:e}=tb({legacy:!0}),n=Ln(m2),s=pe(),t=Ap(),a=l=>{if(!l.hasAttribute("copy-code-registered")){const u=document.createElement("button");u.type="button",u.classList.add("copy-code-button"),u.innerHTML='<div class="copy-icon" />',u.setAttribute("aria-label",n.value.copy),u.setAttribute("data-copied",n.value.copied),l.parentElement&&l.parentElement.insertBefore(u,l),l.setAttribute("copy-code-registered","")}},o=()=>ns().then(()=>new Promise(l=>{setTimeout(()=>{h2.forEach(u=>{document.querySelectorAll(u).forEach(a)}),l()},d2)})),i=(l,u,p)=>{let{innerText:d=""}=u;/language-(shellscript|shell|bash|sh|zsh)/.test(l.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),e(d).then(()=>{p.classList.add("copied"),clearTimeout(ao.get(p));const v=setTimeout(()=>{p.classList.remove("copied"),p.blur(),ao.delete(p)},v2);ao.set(p,v)})};de(()=>{(!t.value||kl)&&o(),Ae("click",l=>{const u=l.target;if(u.matches('div[class*="language-"] > button.copy')){const p=u.parentElement,d=u.nextElementSibling;d&&i(p,d,u)}else if(u.matches('div[class*="language-"] div.copy-icon')){const p=u.parentElement,d=p.parentElement,v=p.nextElementSibling;v&&i(d,v,p)}}),le(()=>s.value.path,()=>{(!t.value||kl)&&o()})})};var f2=on({setup:()=>{k2()}});const sa=Es("VUEPRESS_CODE_TAB_STORE",{});var g2=I({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:n}){const s=K(e.active),t=xe([]),a=()=>{e.tabId&&(sa.value[e.tabId]=e.data[s.value].id)},o=(p=s.value)=>{s.value=p<t.value.length-1?p+1:0,t.value[s.value].focus()},i=(p=s.value)=>{s.value=p>0?p-1:t.value.length-1,t.value[s.value].focus()},l=(p,d)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),s.value=d):p.key==="ArrowRight"?(p.preventDefault(),o()):p.key==="ArrowLeft"&&(p.preventDefault(),i()),e.tabId&&(sa.value[e.tabId]=e.data[s.value].id)},u=()=>{if(e.tabId){const p=e.data.findIndex(({id:d})=>sa.value[e.tabId]===d);if(p!==-1)return p}return e.active};return de(()=>{s.value=u(),le(()=>sa.value[e.tabId],(p,d)=>{if(e.tabId&&p!==d){const v=e.data.findIndex(({id:m})=>m===p);v!==-1&&(s.value=v)}})}),()=>e.data.length?c("div",{class:"vp-code-tabs"},[c("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:p},d)=>{const v=d===s.value;return c("button",{type:"button",ref:m=>{m&&(t.value[d]=m)},class:["vp-code-tab-nav",{active:v}],role:"tab","aria-controls":`codetab-${e.id}-${d}`,"aria-selected":v,onClick:()=>{s.value=d,a()},onKeydown:m=>l(m,d)},n[`title${d}`]({value:p,isActive:v}))})),e.data.map(({id:p},d)=>{const v=d===s.value;return c("div",{class:["vp-code-tab",{active:v}],id:`codetab-${e.id}-${d}`,role:"tabpanel","aria-expanded":v},[c("div",{class:"vp-code-tab-title"},n[`title${d}`]({value:p,isActive:v})),n[`tab${d}`]({value:p,isActive:v})])})]):null}});const Hp=({active:e=!1},{slots:n})=>{var s;return c("div",{class:["code-group-item",{active:e}],"aria-selected":e},(s=n.default)==null?void 0:s.call(n))};Hp.displayName="CodeGroupItem";const E2=I({name:"CodeGroup",slots:Object,setup(e,{slots:n}){const s=K(-1),t=xe([]),a=(l=s.value)=>{s.value=l<t.value.length-1?l+1:0,t.value[s.value].focus()},o=(l=s.value)=>{s.value=l>0?l-1:t.value.length-1,t.value[s.value].focus()},i=(l,u)=>{l.key===" "||l.key==="Enter"?(l.preventDefault(),s.value=u):l.key==="ArrowRight"?(l.preventDefault(),a(u)):l.key==="ArrowLeft"&&(l.preventDefault(),o(u))};return()=>{var u;const l=(((u=n.default)==null?void 0:u.call(n))||[]).filter(p=>p.type.name==="CodeGroupItem").map(p=>(p.props===null&&(p.props={}),p));return l.length===0?null:(s.value<0||s.value>l.length-1?(s.value=l.findIndex(p=>"active"in p.props),s.value===-1&&(s.value=0)):l.forEach((p,d)=>{p.props.active=d===s.value}),c("div",{class:"code-group"},[c("div",{class:"code-group-nav"},l.map((p,d)=>{const v=d===s.value;return c("button",{type:"button",ref:m=>{m&&(t.value[d]=m)},class:["code-group-nav-tab",{active:v}],"aria-pressed":v,"aria-expanded":v,onClick:()=>{s.value=d},onKeydown:m=>i(m,d)},p.props.title)})),l]))}}}),_2=()=>{Ae("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})},y2='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',A2='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',B2='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var w2={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const oo=w2,fl={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},P2=(e,n,s)=>{const t=document.createElement(e);return Ot(n)&&an(n).forEach(a=>{if(a.indexOf("data"))t[a]=n[a];else{const o=a.replace("data","");t.dataset[o]=n[a]}}),s&&s.forEach(a=>{t.appendChild(a)}),t},Ii=e=>({...oo,...e,jsLib:Array.from(new Set([...oo.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...oo.cssLib||[],...e.cssLib||[]]))}),Cs=(e,n)=>{if(e[n]!==void 0)return e[n];const s=new Promise(t=>{var o;const a=document.createElement("script");a.src=n,(o=document.querySelector("body"))==null||o.appendChild(a),a.onload=()=>{t()}});return e[n]=s,s},D2=(e,n)=>{if(n.css&&Array.from(e.childNodes).every(s=>s.nodeName!=="STYLE")){const s=P2("style",{innerHTML:n.css});e.appendChild(s)}},S2=(e,n,s)=>{const t=s.getScript();if(t&&Array.from(n.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${t}}`)),n.appendChild(a)}},L2=e=>{const n=an(e),s={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(t=>{const a=n.filter(o=>fl[t].types.includes(o));if(a.length){const o=a[0];s[t]=[e[o].replace(/^\n|\n$/g,""),fl[t].map[o]||o]}}),s.isLegal=(!s.html.length||s.html[1]==="none")&&(!s.js.length||s.js[1]==="none")&&(!s.css.length||s.css[1]==="none"),s},Up=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),zp=e=>`<div id="app">
${Up(e)}
</div>`,O2=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,x2=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Gp=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,R2=(e,n)=>{const s=Ii(n),t=e.js[0]||"";return{...s,html:Up(e.html[0]||""),js:t,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var a;return s.useBabel?((a=window.Babel.transform(t,{presets:["es2015"]}))==null?void 0:a.code)||"":t}}},T2=/<template>([\s\S]+)<\/template>/u,I2=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,C2=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,V2=(e,n)=>{const s=Ii(n),t=e.html[0]||"",a=T2.exec(t),o=I2.exec(t),i=C2.exec(t),l=a?a[1].replace(/^\n|\n$/g,""):"",[u="",p=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[d="",v=""]=i?[i[4].replace(/^\n|\n$/g,""),i[3]]:[],m=p===""&&(v===""||v==="css");return{...s,html:zp(l),js:x2(u),css:d,isLegal:m,jsLib:[s.vue,...s.jsLib],getScript:()=>{var k,E;const h=n.useBabel?((E=(k=window.Babel)==null?void 0:k.transform(u,{presets:["es2015"]}))==null?void 0:E.code)||"":u.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Gp(h)};appOptions.template=\`${l.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},F2=(e,n)=>{const s=Ii(n);return{...s,html:zp(""),js:O2(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[s.react,s.reactDOM,...s.jsLib],jsx:!0,getScript:()=>{var a,o;const t=((o=(a=window.Babel)==null?void 0:a.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Gp(t)}))`}}},Vs={},N2=e=>Promise.all([Cs(Vs,e.babel),Cs(Vs,e.react),Cs(Vs,e.reactDOM)]),M2=e=>{const n=[Cs(Vs,e.vue)];return e.useBabel&&n.push(Cs(Vs,e.babel)),Promise.all(n)},$2=e=>e.useBabel?Cs(Vs,e.babel):Promise.resolve();var H2=I({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:n}){const[s,t]=ga(!1),a=xe(),o=xe(),i=K("0"),l=K(!1),u=A(()=>JSON.parse(e.config?fa(e.config):"{}")),p=A(()=>{const k=JSON.parse(fa(e.code));return L2(k)}),d=A(()=>e.type==="react"?F2(p.value,u.value):e.type==="vue"?V2(p.value,u.value):R2(p.value,u.value)),v=A(()=>d.value.isLegal),m=(k=!1)=>{const E=a.value.attachShadow({mode:"open"}),w=document.createElement("div");w.classList.add("code-demo-app"),E.appendChild(w),v.value?(k&&(w.innerHTML=d.value.html),D2(E,d.value),S2(e.id,E,d.value),i.value="0"):i.value="auto",l.value=!0},h=()=>{switch(e.type){case"react":return N2(d.value).then(()=>m());case"vue":return M2(d.value).then(()=>m());default:return $2(d.value).then(()=>m(!0))}};return Ae("beforeprint",()=>{t(!0)}),de(()=>{setTimeout(()=>{h()},800)}),()=>{var k;return c("div",{class:"vp-code-demo",id:e.id},[c("div",{class:"vp-code-demo-header"},[d.value.isLegal?c("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",s.value?"down":"end"],onClick:()=>{i.value=s.value?"0":`${o.value.clientHeight+13.8}px`,t()}}):null,e.title?c("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?c("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[c("input",{type:"hidden",name:"html",value:d.value.html}),c("input",{type:"hidden",name:"js",value:d.value.js}),c("input",{type:"hidden",name:"css",value:d.value.css}),c("input",{type:"hidden",name:"wrap",value:"1"}),c("input",{type:"hidden",name:"panel_js",value:"3"}),c("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),c("button",{type:"submit",class:"jsfiddle-button",innerHTML:A2,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?c("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[c("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:p.value?p.value.html[1]:"none",js_pre_processor:p.value?p.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:p.value?p.value.css[1]:"none",editors:d.value.codepenEditors})}),c("button",{type:"submit",innerHTML:y2,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),l.value?null:c(Rt,{class:"vp-code-demo-loading"}),c("div",{ref:a,class:"vp-code-demo-display",style:{display:v.value&&l.value?"block":"none"}}),c("div",{class:"vp-code-demo-code-wrapper",style:{height:i.value}},c("div",{ref:o,class:"vp-code-demo-codes"},(k=n.default)==null?void 0:k.call(n)))])}}}),U2=I({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(e,{slots:n}){const[s,t]=ga(!1),a=xe(),o=K("0");return Ae("beforeprint",()=>{t(!0)}),()=>{var i,l;return c("div",{class:"vp-md-demo",id:e.id},[c("div",{class:"vp-md-demo-header"},[c("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",s.value?"down":"end"],onClick:()=>{o.value=s.value?"0":`${a.value.clientHeight+13.8}px`,t()}}),e.title?decodeURIComponent(e.title):null]),c("div",{class:"vp-md-demo-display"},(i=n.default)==null?void 0:i.call(n)),c("div",{class:"vp-md-demo-code-wrapper",style:{height:o.value}},c("div",{ref:a,class:"vp-md-demo-codes"},(l=n.code)==null?void 0:l.call(n)))])}}});let Kp={};const jp=Symbol(""),z2=e=>{Kp=e},G2=()=>ce(jp),K2=e=>{e.provide(jp,Kp)},j2=(async()=>{}).constructor,W2=(e,n,s)=>n==="js"?j2("myChart",`let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(s):Promise.resolve({option:JSON.parse(e)});var q2=I({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const n=G2(),s=K(!0),t=xe();let a;return Ae("resize",wp(()=>a==null?void 0:a.resize(),100)),de(()=>{Promise.all([r(()=>import("./index-cZvFWBs6.js"),__vite__mapDeps([381,382])),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{var u;await((u=n.setup)==null?void 0:u.call(n)),a=o.init(t.value);const{option:i,...l}=await W2(fa(e.config),e.type,a);a.resize(l),a.setOption({...n.option,...i}),s.value=!1})}),fs(()=>{a==null||a.dispose()}),()=>[e.title?c("div",{class:"echarts-title"},decodeURIComponent(e.title)):null,c("div",{class:"echarts-wrapper"},[c("div",{ref:t,class:"echarts-container",id:e.id}),s.value?c(Rt,{class:"echarts-loading",height:360}):null])]}}),Ci={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},Q2={...Ci,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},Z2={...Ci,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},Y2={...Ci,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const gl={ant:Q2,vue:Y2,pie:Z2},J2={showCompileOutput:!1,clearConsole:!1,ssr:!1};let X2=J2;const Wp=Symbol(""),bk=()=>ce(Wp),eh=e=>{e.provide(Wp,X2)};var nh=I({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(e){let n=null;const s=xe(),t=K(!0),a=K(1),o=A(()=>gl[e.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`),gl.vue)),i=l=>l<419?.8:l>1280?1:.9;return de(()=>{Promise.all([r(()=>import("./flowchart-loQwkp6e.js"),__vite__mapDeps([])),new Promise(l=>setTimeout(l,800))]).then(([{parse:l}])=>{n=l(fa(e.code)),a.value=i(window.innerWidth),t.value=!1,n.draw(e.id,{...o.value,scale:a.value})}),Ae("resize",wp(()=>{if(n){const l=i(window.innerWidth);a.value!==l&&(a.value=l,n.draw(e.id,{...o.value,scale:l}))}},100))}),()=>[t.value?c(Rt,{class:"flowchart-loading",height:192}):null,c("div",{ref:s,class:["flowchart-wrapper",e.preset],id:e.id,style:{display:t.value?"none":"block"}})]}});const qp=({title:e="",link:n})=>c("div",{class:"vp-playground"},[c("div",{class:"vp-playground-header"},[e?c("div",{class:"vp-playground-title"},decodeURIComponent(e)):null,c("div",{class:"vp-playground-actions"},[c("a",{class:"vp-playground-action",href:decodeURIComponent(n),target:"_blank",innerHTML:B2})])]),c("div",{class:"vp-playground-container"},c("iframe",{src:decodeURIComponent(n)}))]);qp.displayName="Playground";const io=Es("VUEPRESS_TAB_STORE",{});var sh=I({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:n}){const s=K(e.active),t=xe([]),a=()=>{e.tabId&&(io.value[e.tabId]=e.data[s.value].id)},o=(p=s.value)=>{s.value=p<t.value.length-1?p+1:0,t.value[s.value].focus()},i=(p=s.value)=>{s.value=p>0?p-1:t.value.length-1,t.value[s.value].focus()},l=(p,d)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),s.value=d):p.key==="ArrowRight"?(p.preventDefault(),o()):p.key==="ArrowLeft"&&(p.preventDefault(),i()),a()},u=()=>{if(e.tabId){const p=e.data.findIndex(({id:d})=>io.value[e.tabId]===d);if(p!==-1)return p}return e.active};return de(()=>{s.value=u(),le(()=>io.value[e.tabId],(p,d)=>{if(e.tabId&&p!==d){const v=e.data.findIndex(({id:m})=>m===p);v!==-1&&(s.value=v)}})}),()=>e.data.length?c("div",{class:"vp-tabs"},[c("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:p},d)=>{const v=d===s.value;return c("button",{type:"button",ref:m=>{m&&(t.value[d]=m)},class:["vp-tab-nav",{active:v}],role:"tab","aria-controls":`tab-${e.id}-${d}`,"aria-selected":v,onClick:()=>{s.value=d,a()},onKeydown:m=>l(m,d)},n[`title${d}`]({value:p,isActive:v}))})),e.data.map(({id:p},d)=>{const v=d===s.value;return c("div",{class:["vp-tab",{active:v}],id:`tab-${e.id}-${d}`,role:"tabpanel","aria-expanded":v},[c("div",{class:"vp-tab-title"},n[`title${d}`]({value:p,isActive:v})),n[`tab${d}`]({value:p,isActive:v})])})]):null}});const th=on({enhance:({app:e})=>{e.component("CodeTabs",g2),nn("CodeGroup",e)||e.component("CodeGroup",E2),nn("CodeGroupItem",e)||e.component("CodeGroupItem",Hp),e.component("CodeDemo",H2),e.component("MdDemo",U2),e.component("ECharts",q2),K2(e),e.component("FlowChart",nh),e.component("Playground",qp),e.component("Tabs",sh),eh(e),e.component("VuePlayground",b(()=>r(()=>import("./VuePlayground-kpoeBTXm.js"),__vite__mapDeps([]))))},setup:()=>{_2()}});let ah={};const Qp=Symbol(""),oh=()=>ce(Qp),ih=e=>{e.provide(Qp,ah)};var rh={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const lh=".theme-hope-content :not(a) > img:not([no-view])",ch=rh,ph=800,uh='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',dh=e=>ie(e)?Array.from(document.querySelectorAll(e)):e.map(n=>Array.from(document.querySelectorAll(n))).flat(),Zp=e=>new Promise((n,s)=>{e.complete?n({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>n(Zp(e)),e.onerror=t=>s(t))}),vh=()=>{const e=Ln(ch),n=ge(),s=pe(),{isSupported:t,toggle:a}=xi(),o=oh();let i;const l=A(()=>n.value.photoSwipe===!1?!1:n.value.photoSwipe||lh),u=d=>{d.on("uiRegister",()=>{t&&d.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}}),d.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(v,m)=>{v.setAttribute("download",""),v.setAttribute("target","_blank"),v.setAttribute("rel","noopener"),m.on("change",()=>{v.setAttribute("href",m.currSlide.data.src)})}}),d.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(v,m)=>{const h=[];let k=-1;for(let E=0;E<m.getNumItems();E++){const w=document.createElement("div");w.className="photo-swipe-bullet",w.onclick=_=>{m.goTo(h.indexOf(_.target))},h.push(w),v.appendChild(w)}m.on("change",()=>{k>=0&&h[k].classList.remove("active"),h[m.currIndex].classList.add("active"),k=m.currIndex})}})})},p=async()=>{if(l.value)return Promise.all([r(()=>import("./photoswipe.esm-mC0Qcr12.js"),__vite__mapDeps([])),ns().then(()=>new Promise(d=>setTimeout(d,ph)).then(()=>dh(l.value)))]).then(([{default:d},v])=>{const m=v.map(h=>({html:uh,element:h,msrc:h.src}));v.forEach((h,k)=>{const E=()=>{i=new d({preloaderDelay:0,showHideAnimationType:"zoom",...e.value,...o,dataSource:m,index:k,closeOnVerticalDrag:!0,wheelToZoom:!1}),u(i),i.addFilter("thumbEl",()=>h),i.addFilter("placeholderSrc",()=>h.src),i.init()};h.style.cursor="zoom-in",h.addEventListener("click",()=>{E()}),h.addEventListener("keypress",({key:w})=>{w==="Enter"&&E()})}),v.forEach((h,k)=>{Zp(h).then(E=>{m.splice(k,1,E),i==null||i.refreshSlideContent(k)})})})};de(()=>{Ae("wheel",()=>{i==null||i.close()}),le(()=>s.value.path,p,{immediate:!0})})};var mh=on({enhance:({app:e})=>{ih(e)},setup:()=>{vh()}}),El={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const Yp=()=>{const e=pe();return A(()=>e.value.readingTime??null)},To=typeof El>"u"?null:El,Jp=(e,n)=>{const{minutes:s,words:t}=e,{less1Minute:a,word:o,time:i}=n;return{time:s<1?a:i.replace("$time",Math.round(s).toString()),words:o.replace("$word",t.toString())}},_l={words:"",time:""},Xp=()=>To?Ln(To):A(()=>null),bh=()=>{if(typeof To>"u")return A(()=>_l);const e=Yp(),n=Xp();return A(()=>e.value&&n.value?Jp(e.value,n.value):_l)},as=()=>Fp(),ue=()=>Xb(),Xs=()=>A(()=>!!as().value.pure);var ro=I({name:"EmptyComponent",setup:()=>()=>null});const hh="719px",kh="1440px",fh="true",Vi={mobileBreakPoint:hh,pcBreakPoint:kh,enableThemeColor:fh,"theme-1":"#2196f3","theme-2":"#f26d6d","theme-3":"#3eaf7c","theme-4":"#fb9b5f"},Fi={"/note-book/":[{text:"A I Training",prefix:"AI-Training/",collapsible:!0,children:["torch 环境","英伟达开源驱动和闭源驱动冲突问题"]},{text:"Android",prefix:"Android/",collapsible:!0,children:["Ubuntu命令行安装Android SDK"]},{text:"CoreDNS",prefix:"CoreDNS/",collapsible:!0,icon:"laptop-code",children:["ext-plugin-redis","理解CoreDNS"]},{text:"Database System",prefix:"DatabaseSystem/",collapsible:!0,children:[{text:"Etcd",prefix:"Etcd/",collapsible:!0,children:["etcd安装etcdkeeper"]},{text:"My S Q L",prefix:"MySQL/",collapsible:!0,children:["国内源","查看Mysql数据量大小"]}]},{text:"Distributed System",prefix:"DistributedSystem/",collapsible:!0,children:[{text:"Ansible",prefix:"Ansible/",collapsible:!0,children:["ansible自动化运维","Centos7.x 安装Python3.9.7  Ansible4.5"]},{text:"JumperServer Insight",prefix:"JumperServer/",collapsible:!0,children:["","JumperServerDockerDeploy","HA_Deploy"]},{text:"Open Stack",prefix:"OpenStack/",collapsible:!0,children:["OpenStack-Queens版搭建详解"]}]},{text:"Docker",prefix:"Docker/",collapsible:!0,children:["Docker 2375攻击和解决方案","docker报错 内核修整","Docker 的daemon.json","Docker日志选项配置上去对已运行容器不生效","docker pull push","docker run 命令所有的选项","Docker环境清理","Docker不死进程","docker容器集合","Docker逃逸漏洞案例","docker学习笔记-PDF","一次构建出x86及arm镜像","RockyLinux安装Docker","一键运行web版本vscode","在Dockerfile里调整时区","把容器做成物理机","只使用操作系统创建容器-扫描","手撕Docker容器命令行版","手撕docker网络","更改docker服务网段分配地址","手撕docker容器","跨宿主机通信overlay和macvlay"]},{text:"Domain Network System",prefix:"Domain-Network-System/",collapsible:!0,children:["Bind9的使用","NamedManager"]},{text:"E L K",prefix:"ELK/",collapsible:!0,children:["EFK8.4.3部署","ELK"]},{text:"Ebook",prefix:"ebook/",collapsible:!0,children:["ebook"]},{text:"Esxi",prefix:"Esxi/",collapsible:!0,children:["ESXI中的网络"]},{text:"G R U B",prefix:"GRUB/",collapsible:!0,children:["配置案例"]},{text:"Gawk",prefix:"Gawk/",collapsible:!0,children:["awk 入门教程","awk 学习  高级输出  02","AWK案例入门看这一篇就够了","awk语言学习笔记  01","匹配特定字符并输出其后的若干行","Shell文本处理三剑客-AWK"]},{text:"git-tips",prefix:"Git/",collapsible:!0,children:["","git 拉取全部远程分支","git更新远程分支","Git识别项目的语言类型，及文件占比","git远程仓库回退到指定版本","命令行显示gitmoji","git基础命令","Git 的代理配置","Git分支管理合并与删除命令","git统计项目代码行数","Git高级操作和练习网站"]},{text:"Gitlab",prefix:"Gitlab/",collapsible:!0,children:[{text:"C I",prefix:"CI/",collapsible:!0,children:["gitlab ci 编写","部署Kubernetes类型的gitlab-runner","gitlab ci 部署"]},"Gitlab二开从而自定义权限系统","Gitlab备份和恢复","Gitlab安装部署","Gitlab配置邮件服务器","Gitlab的一些问题"]},{text:"Goaccess",prefix:"goaccess/",collapsible:!0,children:["goaccess给ftp生成分析图"]},{text:"H A L V S Keepalived",prefix:"HA-LVS-Keepalived/",collapsible:!0,children:["keepalived","haproxy","ha-lvs-keepalived"]},{text:"Harbor",prefix:"Harbor/",collapsible:!0,children:["Harbor离线搭建"]},{text:"Iptables",prefix:"Iptables/",collapsible:!0,children:["iptables拦截内网奇虎软件病毒上报","iptables详解-朱光印","linux下IPTABLES配置详解","Linux内核子系统 - 网络 netfilter","内核参数ip_forward"]},{text:"Jenkins",prefix:"Jenkins/",collapsible:!0,children:["jenkins的docker部署文档","jenkins构建持续化集成平台","jenkins备份","修改Jenkins插件为国内源"]},{text:"Kafka",prefix:"Kafka/",collapsible:!0,children:[{text:"E L K+kafka构建高并发分布式日志收集系统",prefix:"ELK_kafka构建高并发分布式日志收集系统/",collapsible:!0,children:["/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html"]}]},{text:"Kubernetes",prefix:"Kubernetes/",collapsible:!0,children:["Kubernetes最小高可用架构图","kubernetes进阶（三）服务发现-coredns","kubernetes进阶（二）核心网络插件Flannel","kubernetes进阶（五）dashboard--WEB管理","kubernetes进阶（六）k8s平滑升级","kubernetes进阶（四）服务暴露-ingress控制器之traefik","SSL证书签发","二进制安装kubernetes（七） 部署知识点总结","二进制安装kubernetes（三） kube-controller-manager组件安装","二进制安装kubernetes（二） kube-apiserver组件安装","二进制安装kubernetes（六） kube-proxy组件安装","什么是Name和NameSpace","Kubernetes Api Endpoint","crictl登录dockerhub","k8s删除Terminating状态ns","kubeadm部署Kubernetes 1.24步骤","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html","Kubernetes Service Account如何生成Token","什么是Label和Label选择器","NameSpace 资源隔离隔离了什么","Request和Limit","一次kubeadm添加节点出现etcd检查错误","常用优化","什么是Pod和Pod控制器","什么是Service和Ingress","Kubernetes crictl管理命令详解","二进制安装kubernetes（四） kube-scheduler组件安装","etcd 二进制三节点集群部署","记一次异常断电造成kubernetes故障","二进制部署Kubernetes","二进制安装kubernetes（五） kubelet组件安装","使用 vmagent 代替 Prometheus 采集监控指标","Kubernetes的NetworkPlicy","kubernetes进阶（一）kubectl工具使用详解","Kubernetes有哪些组件"]},{text:"Linux From Scratch",prefix:"LinuxFromScratch/",collapsible:!0,children:["LFS-NoteBook"]},{text:"Linux Opera System",prefix:"LinuxOperaSystem/",collapsible:!0,children:["bash利用扩展字符集实现rm",{text:"Git",prefix:"Git/",collapsible:!0,children:["Centos7 yum install git2.x 较新版本"]},"grub2手动命令引导教程",{text:"history命令详解",prefix:"history/",collapsible:!0,children:[""]},{text:"Linux三剑客",prefix:"Linux三剑客/",collapsible:!0,children:["AWK中的字符串操作函数"]},{text:"Nvidia",prefix:"Nvidia/",collapsible:!0,children:["安装Nvidia Runtime","安装Nvidia驱动"]},{text:"Samba",prefix:"Samba/",collapsible:!0,children:["Samba共享文件时文件属性nobody","Linux挂载cifs文件系统","Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法","Samba配置举例"]},"shell脚本加密解密工具shc","ssh把远程端口映射到本地","tcpdump抓包命令","按电源软关机要等待60秒设置更短的时间",{text:"V N C",prefix:"VNC/",collapsible:!0,children:["Ubuntu 20.04 安装VNC Server"]},{text:"Vim",prefix:"Vim/",collapsible:!0,children:["vi编辑器"]},"ssh 设置反向代理","Linux备份为liveOS","命令创建虚拟镜像文件","让某个命令不输出"]},{text:"Linux 文件系统的未来 btrfs",prefix:"Btrfs/",collapsible:!0,children:["","some device missing方法","btrfs的使用","Snapper玩转btrfs文件系统"]},{text:"Memcache Redis",prefix:"memcache-redis/",collapsible:!0,children:["memcache-redis"]},{text:"Nginx",prefix:"Nginx/",collapsible:!0,children:["nginx03","nginx单机百万并发","Nginx正向代理","nginx01","Nginx正向代理支持https","Nginx正向代理高并发","Nginx变量大全","Nginx的负载均衡和故障转移","nginx配置示例","nginx02","ngx_stream_ssl_preread_module","nginx-plus-module-lua"]},{text:"Open S S H Server",prefix:"OpenSSH-Server/",collapsible:!0,children:["ssh日志记录登陆密码"]},{text:"Opera Systems",prefix:"OperaSystems/",collapsible:!0,children:["Linux下的ASLR（PIE）内存保护机制和绕过","proc-sysrq-trigger详解","proc详解","CPU和内存的架构 UMA和NUMA","date命令","grep命令","Journal日志服务详解","Linux升级内核的两种方法","sed","Linux排查哪个进程和IP在占用网速","Linux普通用户免密码sudo","Linux虚拟网络设备之bridge","macvlan详解",{text:"Operating System Principle",prefix:"OperatingSystemPrinciple/",collapsible:!0,children:["CPU的虚拟化","操作系统介绍",{text:"操作系统相关 Operating Systems: Three Easy Pieces 学习笔记",prefix:"ostep-note/",collapsible:!0,children:["",{text:"1virtualization",prefix:"1virtualization/",collapsible:!0,children:["22 Swapping Policies","23 Complete VM Systems","4 Processes","5 Process API","6 Direct Execution","7 CPU Scheduling","8 Multi-level Feedback","10 Multi-CPU Scheduling","13 Address Spaces","14 Memory API","15 Address Translation","16 Segmentation","17 Free Space Management","18 Introduction to Paging","19 Translation Lookaside Buffers","20 Advanced Page Tables","21 Swapping Mechanisms"]},{text:"2concurrency",prefix:"2concurrency/",collapsible:!0,children:["26 Concurrency and Threads","27 Thread API","28 Locks","29 Locked Data Structures","30 Condition Variables","31 Semaphores","32 Concurrency Bugs","33 Event-based Concurrency"]},{text:"3persistent",prefix:"3persistent/",collapsible:!0,children:["36 IO Devices","37 Hard Disk Drives","39 Files and Directories","40 File System Implementation"]}]}]},{text:"Red Hat Enterprise Linux",prefix:"RedHatEnterpriseLinux/",collapsible:!0,children:["CentOS 7 用户账户配置","Centos8重启网卡的方法","CentOS7配置支持AUFS文件系统","制作CenOS操作系统","配置SSH免密码验证","firewalld配置"]},"Shell快捷键","大量使用swap导致无法切换",{text:"Ubtuntu",prefix:"Ubtuntu/",collapsible:!0,children:["linux关闭地址空间随机化（ASLR）","apt查询某个软件有哪些版本","Linux 终端命令格式","ubuntu14.04 忘记了普通用户密码和root密码","Ubuntu 20.04 Server 使用命令行设置 IP 地址","Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案","ubuntu安装nfs","Ubuntu更改为24小时制","ubuntu查看intel GPU使用情况","Ubuntu软件包文件管理","VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容"]},"使用curl实现邮件发送","使用dev下的tcp-udp实现socket","备份Linux系统","常见乱码产生原因","更换系统和命令行语言","环境变量PATH","ip命令","sysstat Linux状态工具包","Linux网络内核参数优化秘籍","进程","逻辑卷无法删除"]},{text:"Photo Shop",prefix:"PhotoShop/",collapsible:!0,children:["ps如何去水印的4个方法"]},{text:"Physical Server",prefix:"Physical_server/",collapsible:!0,children:["Huawei x288系列风扇转速调速"]},{text:"Portainer",prefix:"Portainer/",collapsible:!0,children:["Portainer 单机部署"]},{text:"Prometheus",prefix:"Prometheus/",collapsible:!0,children:["Prometheus监控Windows主机"]},{text:"Rabbit M Q",prefix:"RabbitMQ/",collapsible:!0,children:["rabbitmq"]},{text:"Research& Develop",prefix:"Research_Develop/",collapsible:!0,children:[{text:"C语言学习 翁恺教程",prefix:"C/",collapsible:!0,children:["/note-book/Research_Develop/C/","/note-book/Research_Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html",{text:"A C L Lib",prefix:"ACLLib/",collapsible:!0,children:["/note-book/Research_Develop/C/ACLLib/ACLLib.html"]},"/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html"]},{text:"Python",prefix:"Python/",collapsible:!0,children:["/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html",{text:"Python面向对象",prefix:"python面向对象/",collapsible:!0,children:["/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html"]},"/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research_Develop/Python/python%20re.html","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html"]},{text:"Shell",prefix:"Shell/",collapsible:!0,children:["/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html"]},{text:"算法说明",prefix:"Algorithm/",collapsible:!0,children:["/note-book/Research_Develop/Algorithm/","/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html"]}]},{text:"Router O S",prefix:"RouterOS/",collapsible:!0,children:["RouterOS利用（L2TP）实现多方异地组网","Azure刷写ROS教程","用ros路由作为中转教程"]},{text:"S3 Simple Storage Service",prefix:"S3-SimpleStorageService/",collapsible:!0,children:["bug and Issue","MiniO_Docker_Deploy"]},{text:"Tomcat",prefix:"Tomcat/",collapsible:!0,children:["tomcat"]},{text:"Traefik",prefix:"Traefik/",collapsible:!0,children:["","traefik作为docker边缘路由"]},{text:"V Mware",prefix:"VMware/",collapsible:!0,children:["各个版本的激活密钥","虚拟化物理机"]},{text:"Virtual Private Network",prefix:"VirtualPrivateNetwork/",collapsible:!0,children:[{text:"广义 Virtual Private Network",prefix:"广义VirtualPrivateNetwork/",collapsible:!0,children:["基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"]},{text:"狭义 Virtual Private Network",prefix:"狭义VirtualPrivateNetwork/",collapsible:!0,children:["Docker一键部署Clash服务与管理面板","优秀的落地框架 XrayR","连接CF WARP为服务器添加IPv4IPv6网络"]}]},{text:"Windows Opera System",prefix:"WindowsOperaSystem/",collapsible:!0,children:["PowerShell 打印环境变量","PowerShell 操作系统禁止运行脚本","Windows系统更改迁移用户目录"]},{text:"Zabbix",prefix:"Zabbix/",collapsible:!0,children:["zabbix","zabbix的VMwareGuest补充缺陷",{text:"ZCS认证",prefix:"ebook/",collapsible:!0,children:[""]}]},"杀不死的进程"],"/PyQt5快速上手-王铭东/":["001-PyQt介绍与安装","002-PyQt基本UI","003-布局","004-布局2","005-窗口","006-信号与槽","007-Qt Designer","008-PyQt多线程","009-打包为可执行程序"]},eu=e=>{const{icon:n="",color:s,size:t}=e,a={};return s&&(a.color=s),t&&(a.height=Number.isNaN(Number(t))?t:`${t}px`),ts(n)?c("img",{class:"icon",src:n,"no-view":"",style:a}):Tt(n)?c("img",{class:"icon",src:ye(n),"no-view":"",style:a}):c(je("FontIcon"),e)};eu.displayName="HopeIcon";var We=eu,_e=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(_e||{}),nu=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(nu||{});const Fs=(e,n,s=!1)=>{let t=js(e,fp(encodeURI(n)));t.name==="404"&&(t=js(e,n));const{fullPath:a,meta:o,name:i}=t;return{text:!s&&o[_e.shortTitle]?o[_e.shortTitle]:o[_e.title]||n,link:i==="404"?n:a,...o[_e.icon]?{icon:o[_e.icon]}:{}}},Vt=()=>{const e=qe(),n=Sn();return s=>{if(s)if(Tt(s))n.path!==s&&e.push(s);else if(Uc(s))window&&window.open(s);else{const t=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${t}/${encodeURI(s)}`)}}},su=()=>{const e=ue(),n=ge();return A(()=>{const{author:s}=n.value;return s?At(s):s===!1?[]:At(e.value.author,!1)})},gh=()=>{const e=ge();return A(()=>Ep(e.value.category).map(n=>{var s,t;return{name:n,path:((t=(s=ce(Symbol.for("categoryMap")))==null?void 0:s.value.map[n])==null?void 0:t.path)||""}}))},Eh=()=>{const e=ge();return A(()=>_p(e.value.tag).map(n=>{var s,t;return{name:n,path:((t=(s=ce(Symbol.for("tagMap")))==null?void 0:s.value.map[n])==null?void 0:t.path)||""}}))},_h=()=>{const e=ge(),n=pe();return A(()=>{const s=gi(e.value.date);if(s)return s;const{createdTime:t}=n.value.git||{};return t?new Date(t):null})},yh=()=>{const e=ue(),n=pe(),s=ge(),t=su(),a=gh(),o=Eh(),i=_h(),l=Yp(),u=bh(),p=A(()=>({author:t.value,category:a.value,date:i.value,localizedDate:n.value.localizedDate,tag:o.value,isOriginal:s.value.isOriginal||!1,readingTime:l.value,readingTimeLocale:u.value,pageview:"pageview"in s.value?s.value.pageview:!0})),d=A(()=>"pageInfo"in s.value?s.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:p,items:d}},{mobileBreakPoint:Ah,pcBreakPoint:Bh}=Vi,yl=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Ft=()=>{const e=K(!1),n=K(!1),s=()=>{e.value=window.innerWidth<=(yl(Ah)??719),n.value=window.innerWidth>=(yl(Bh)??1440)};return de(()=>{s(),Ae("resize",s,!1),Ae("orientationchange",s,!1)}),{isMobile:e,isPC:n}},tu=Symbol(""),Nt=()=>{const e=ce(tu);if(!e)throw new Error("useDarkmode() is called without provider.");return e},wh=e=>{const n=as(),s=cb(),t=Es("vuepress-theme-hope-scheme","auto"),a=A(()=>n.value.darkmode||"switch"),o=A(()=>{const l=a.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?s.value:l==="toggle"?t.value==="dark":t.value==="dark"||t.value==="auto"&&s.value}),i=A(()=>{const l=a.value;return l==="switch"||l==="toggle"});e.provide(tu,{canToggle:i,config:a,isDarkmode:o,status:t}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},Ph=()=>{const{isDarkmode:e}=Nt(),n=(s=e.value)=>document.documentElement.setAttribute("data-theme",s?"dark":"light");de(()=>{le(e,n,{immediate:!0})})};var Ze=I({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:n,emit:s,slots:t}){const a=Sn(),o=Zc(),i=Zs(e,"config"),l=A(()=>ts(i.value.link)),u=A(()=>!l.value&&Uc(i.value.link)),p=A(()=>i.value.target||(l.value?"_blank":void 0)),d=A(()=>p.value==="_blank"),v=A(()=>!l.value&&!u.value&&!d.value),m=A(()=>i.value.rel||(d.value?"noopener noreferrer":void 0)),h=A(()=>i.value.ariaLabel||i.value.text),k=A(()=>{if(e.exact)return!1;const w=an(o.value.locales);return w.length?w.every(_=>_!==i.value.link):i.value.link!=="/"}),E=A(()=>v.value?i.value.activeMatch?new RegExp(i.value.activeMatch).test(a.path):k.value?bs(a.path,i.value.link):a.path===i.value.link:!1);return()=>{const{before:w,after:_,default:D}=t,{text:y,icon:P,link:C}=i.value;return v.value?c(Me,{to:C,"aria-label":h.value,...n,class:["nav-link",{active:E.value},n.class],onFocusout:()=>s("focusout")},()=>D?D():[w?w():c(We,{icon:P}),y,_==null?void 0:_()]):c("a",{href:C,rel:m.value,target:p.value,"aria-label":h.value,...n,class:["nav-link",n.class],onFocusout:()=>s("focusout")},D?D():[w?w():c(We,{icon:P}),y,e.noExternalLinkIcon?null:c(Cp),_==null?void 0:_()])}}});const Ws=(e,n,s=!1)=>"activeMatch"in n?new RegExp(n.activeMatch).test(e.path):yi(e,n.link)?!0:n.children&&!s?n.children.some(t=>Ws(e,t)):!1,au=(e,n)=>n.type==="group"?n.children.some(s=>s.type==="group"?au(e,s):s.type==="page"&&Ws(e,s,!0))||"prefix"in n&&yi(e,n.prefix):!1,ou=(e,n)=>ie(e.link)?c(Ze,{...n,config:e}):c("p",n,[c(We,{icon:e.icon}),e.text]),iu=e=>{const n=Sn();return e?c("ul",{class:"vp-sidebar-sub-headers"},e.map(s=>{const t=Ws(n,s,!0);return c("li",{class:"vp-sidebar-sub-header"},[ou(s,{class:["vp-sidebar-link","vp-heading",{active:t}]}),iu(s.children)])})):null},lo=(e="",n="")=>Tt(n)?n:`${Hc(e)}${n}`,Dh=(e,n)=>{const s=pe();return{type:"heading",text:e.title,link:`${s.value.path}#${e.slug}`,children:Ni(e.children,n)}},Ni=(e,n)=>n>0?e.map(s=>Dh(s,n-1)):[],ru=e=>{const n=pe();return Ni(n.value.headers,e)},Io=(e,n,s="")=>{const t=qe(),a=pe(),o=(i,l=s)=>{var p;const u=ie(i)?Fs(t,lo(l,i)):i.link?{...i,..._t(i.link)?{}:{link:Fs(t,lo(l,i.link)).link}}:i;if("children"in u){const d=lo(l,u.prefix),v=u.children==="structure"?Fi[d]:u.children;return{type:"group",...u,prefix:d,children:v.map(m=>o(m,d))}}return{type:"page",...u,children:u.link===a.value.path?Ni(((p=a.value.headers[0])==null?void 0:p.level)===1?a.value.headers[0].children:a.value.headers,n):[]}};return e.map(i=>o(i))},Sh=(e,n)=>{const s=pe(),t=an(e).sort((a,o)=>o.length-a.length);for(const a of t)if(bs(decodeURI(s.value.path),a)){const o=e[a];return o?Io(o==="structure"?Fi[a]:o==="heading"?ru(n):o,n,a):[]}return console.warn(`${s.value.path} is missing sidebar config.`),[]},Lh=(e,n)=>{const s=$n();return e===!1?[]:e==="heading"?ru(n):e==="structure"?Io(Fi[s.value],n,s.value):ee(e)?Io(e,n):Ot(e)?Sh(e,n):[]},lu=Symbol(""),Oh=()=>{const e=ge(),n=ue(),s=pe(),t=A(()=>e.value.home?!1:e.value.sidebar??n.value.sidebar??"structure"),a=A(()=>e.value.headerDepth??n.value.headerDepth??2),o=Li(()=>[t.value,a.value,s.value.path,null],()=>Lh(t.value,a.value));dn(lu,o)},Mi=()=>{const e=ce(lu);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var xh=I({name:"PageFooter",setup(){const e=ge(),n=ue(),s=su(),t=A(()=>{const{copyright:i,footer:l}=e.value;return l!==!1&&!!(i||l||n.value.displayFooter)}),a=A(()=>{const{footer:i}=e.value;return i===!1?!1:ie(i)?i:n.value.footer||""}),o=A(()=>"copyright"in e.value?e.value.copyright:"copyright"in n.value?n.value.copyright:s.value.length?`Copyright © ${new Date().getFullYear()} ${s.value[0].name}`:!1);return()=>t.value?c("footer",{class:"vp-footer-wrapper"},[a.value?c("div",{class:"vp-footer",innerHTML:a.value}):null,o.value?c("div",{class:"vp-copyright",innerHTML:o.value}):null]):null}}),Rh=I({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:n}){const s=pe(),t=Zs(e,"config"),a=A(()=>t.value.ariaLabel||t.value.text),o=K(!1);le(()=>s.value.path,()=>{o.value=!1});const i=l=>{l.detail===0&&(o.value=!o.value)};return()=>{var l;return c("div",{class:["dropdown-wrapper",{open:o.value}]},[c("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:i},[((l=n.title)==null?void 0:l.call(n))||c("span",{class:"title"},[c(We,{icon:t.value.icon}),e.config.text]),c("span",{class:"arrow"}),c("ul",{class:"nav-dropdown"},t.value.children.map((u,p)=>{const d=p===t.value.children.length-1;return c("li",{class:"dropdown-item"},"children"in u?[c("h4",{class:"dropdown-subtitle"},u.link?c(Ze,{config:u,onFocusout:()=>{u.children.length===0&&d&&(o.value=!1)}}):c("span",u.text)),c("ul",{class:"dropdown-subitem-wrapper"},u.children.map((v,m)=>c("li",{class:"dropdown-subitem"},c(Ze,{config:v,onFocusout:()=>{m===u.children.length-1&&d&&(o.value=!1)}}))))]:c(Ze,{config:u,onFocusout:()=>{d&&(o.value=!1)}}))}))])])}}});const cu=(e,n,s="")=>ie(n)?Fs(e,`${s}${n}`):"children"in n?{...n,...n.link&&!_t(n.link)?Fs(e,`${s}${n.link}`):{},children:n.children.map(t=>cu(e,t,`${s}${n.prefix||""}`))}:{...n,link:_t(n.link)?n.link:Fs(e,`${s}${n.link}`).link},pu=()=>{const e=ue(),n=qe(),s=()=>(e.value.navbar||[]).map(t=>cu(n,t));return Li(()=>e.value.navbar,()=>s())},Th=()=>{const e=ue(),n=A(()=>e.value.repo||null),s=A(()=>n.value?M0(n.value):null),t=A(()=>n.value?Ai(n.value):null),a=A(()=>s.value?e.value.repoLabel??(t.value===null?"Source":t.value):null);return A(()=>!s.value||!a.value||e.value.repoDisplay===!1?null:{type:t.value||"Source",label:a.value,link:s.value})};var Ih=I({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const n=pe(),s=Zs(e,"config"),t=A(()=>s.value.ariaLabel||s.value.text),a=K(!1);le(()=>n.value.path,()=>{a.value=!1});const o=(i,l)=>l[l.length-1]===i;return()=>[c("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":t.value,onClick:()=>{a.value=!a.value}},[c("span",{class:"title"},[c(We,{icon:s.value.icon}),e.config.text]),c("span",{class:["arrow",a.value?"down":"end"]})]),c("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},s.value.children.map(i=>c("li",{class:"dropdown-item"},"children"in i?[c("h4",{class:"dropdown-subtitle"},i.link?c(Ze,{config:i,onFocusout:()=>{o(i,s.value.children)&&i.children.length===0&&(a.value=!1)}}):c("span",i.text)),c("ul",{class:"dropdown-subitem-wrapper"},i.children.map(l=>c("li",{class:"dropdown-subitem"},c(Ze,{config:l,onFocusout:()=>{o(l,i.children)&&o(i,s.value.children)&&(a.value=!1)}}))))]:c(Ze,{config:i,onFocusout:()=>{o(i,s.value.children)&&(a.value=!1)}}))))]}}),Ch=I({name:"NavScreenLinks",setup(){const e=pu();return()=>e.value.length?c("nav",{class:"nav-screen-links"},e.value.map(n=>c("div",{class:"navbar-links-item"},"children"in n?c(Ih,{config:n}):c(Ze,{config:n})))):null}});const uu=()=>c(oe,{name:"dark"},()=>c("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));uu.displayName="DarkIcon";const du=()=>c(oe,{name:"light"},()=>c("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));du.displayName="LightIcon";const vu=()=>c(oe,{name:"auto"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));vu.displayName="AutoIcon";const mu=()=>c(oe,{name:"enter-fullscreen"},()=>c("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));mu.displayName="EnterFullScreenIcon";const bu=()=>c(oe,{name:"cancel-fullscreen"},()=>c("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));bu.displayName="CancelFullScreenIcon";const hu=()=>c(oe,{name:"outlook"},()=>[c("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);hu.displayName="OutlookIcon";var ku=I({name:"AppearanceSwitch",setup(){const{config:e,status:n}=Nt(),s=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"};return()=>c("button",{type:"button",id:"appearance-switch",onClick:()=>s()},[c(vu,{style:{display:n.value==="auto"?"block":"none"}}),c(uu,{style:{display:n.value==="dark"?"block":"none"}}),c(du,{style:{display:n.value==="light"?"block":"none"}})])}}),Vh=I({name:"AppearanceMode",setup(){const e=ue(),{canToggle:n}=Nt(),s=A(()=>e.value.outlookLocales.darkmode);return()=>n.value?c("div",{class:"appearance-wrapper"},[c("label",{class:"appearance-title",for:"appearance-switch"},s.value),c(ku)]):null}});const co="VUEPRESS_THEME_COLOR";var Fh=I({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const n=(s="")=>{const t=document.documentElement.classList,a=an(e.themeColor);if(!s){localStorage.removeItem(co),t.remove(...a);return}t.remove(...a.filter(o=>o!==s)),t.add(s),localStorage.setItem(co,s)};return de(()=>{const s=localStorage.getItem(co);s&&n(s)}),()=>c("ul",{id:"theme-color-picker"},[c("li",c("span",{class:"theme-color",onClick:()=>n()})),gs(e.themeColor).map(([s,t])=>c("li",c("span",{style:{background:t},onClick:()=>n(s)})))])}});const Ns=Vi.enableThemeColor==="true",Nh=Ns?C0(gs(Vi).filter(([e])=>e.startsWith("theme-"))):{};var Mh=I({name:"ThemeColor",setup(){const e=ue(),n=A(()=>e.value.outlookLocales.themeColor);return()=>Ns?c("div",{class:"theme-color-wrapper"},[c("label",{class:"theme-color-title",for:"theme-color-picker"},n.value),c(Fh,{themeColor:Nh})]):null}}),fu=I({name:"ToggleFullScreenButton",setup(){const e=ue(),{isSupported:n,isFullscreen:s,toggle:t}=xi(),a=A(()=>e.value.outlookLocales.fullscreen);return()=>n?c("div",{class:"full-screen-wrapper"},[c("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),c("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:s.value,onClick:()=>t()},s.value?c(bu):c(mu))]):null}}),gu=I({name:"OutlookSettings",setup(){const e=as(),n=Xs(),s=A(()=>!n.value&&e.value.fullscreen);return()=>c(xa,()=>[Ns?c(Mh):null,c(Vh),s.value?c(fu):null])}}),$h=I({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:n,slots:s}){const t=pe(),{isMobile:a}=Ft(),o=xe(),i=Ri(o);return de(()=>{o.value=document.body,le(a,l=>{!l&&e.show&&(i.value=!1,n("close"))}),le(()=>t.value.path,()=>{i.value=!1,n("close")})}),fs(()=>{i.value=!1}),()=>c(es,{name:"fade",onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>{var l,u;return e.show?c("div",{id:"nav-screen"},c("div",{class:"vp-nav-screen-container"},[(l=s.before)==null?void 0:l.call(s),c(Ch),c("div",{class:"vp-outlook-wrapper"},c(gu)),(u=s.after)==null?void 0:u.call(s)])):null})}}),Hh=I({name:"NavbarBrand",setup(){const e=$n(),n=Ys(),s=ue(),t=A(()=>s.value.home||e.value),a=A(()=>n.value.title),o=A(()=>s.value.navTitle??a.value),i=A(()=>s.value.logo?ye(s.value.logo):null),l=A(()=>s.value.logoDark?ye(s.value.logoDark):null);return()=>c(Me,{to:t.value,class:"vp-brand"},()=>[i.value?c("img",{class:["vp-nav-logo",{light:!!l.value}],src:i.value,alt:a.value}):null,l.value?c("img",{class:["vp-nav-logo dark"],src:l.value,alt:a.value}):null,o.value?c("span",{class:["vp-site-name",{"hide-in-pad":i.value&&s.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),Uh=I({name:"NavbarLinks",setup(){const e=pu();return()=>e.value.length?c("nav",{class:"vp-nav-links"},e.value.map(n=>c("div",{class:"nav-item hide-in-mobile"},"children"in n?c(Rh,{config:n}):c(Ze,{config:n})))):null}}),zh=I({name:"RepoLink",components:{BitbucketIcon:Di,GiteeIcon:Pi,GitHubIcon:Bi,GitLabIcon:wi,SourceIcon:Si},setup(){const e=Th();return()=>e.value?c("div",{class:"nav-item vp-repo"},c("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},c(je(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Eu=({active:e=!1},{emit:n})=>c("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>n("toggle")},c("span",[c("span",{class:"vp-top"}),c("span",{class:"vp-middle"}),c("span",{class:"vp-bottom"})]));Eu.displayName="ToggleNavbarButton";var Gh=Eu;const Co=(e,{emit:n})=>c("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>n("toggle")},c("span",{class:"icon"}));Co.displayName="ToggleSidebarButton",Co.emits=["toggle"];var Kh=Co,jh=I({name:"OutlookButton",setup(){const{isSupported:e}=xi(),n=as(),s=Xs(),t=pe(),{canToggle:a}=Nt(),o=K(!1),i=A(()=>!s.value&&n.value.fullscreen&&e);return le(()=>t.value.path,()=>{o.value=!1}),()=>a.value||i.value||Ns?c("div",{class:"nav-item hide-in-mobile"},a.value&&!i.value&&!Ns?c(ku):i.value&&!a.value&&!Ns?c(fu):c("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[c(hu),c("div",{class:"outlook-dropdown"},c(gu))])):null}}),Wh=I({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:n,slots:s}){const t=ue(),{isMobile:a}=Ft(),o=K(!1),i=A(()=>{const{navbarAutoHide:d="mobile"}=t.value;return d!=="none"&&(d==="always"||a.value)}),l=A(()=>t.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),u={Brand:Hh,Language:ro,Links:Uh,Repo:zh,Outlook:jh,Search:nn("Docsearch")?je("Docsearch"):nn("SearchBox")?je("SearchBox"):ro},p=d=>u[d]??(nn(d)?je(d):ro);return()=>{var d,v,m,h,k,E;return[c("header",{id:"navbar",class:["vp-navbar",{"auto-hide":i.value,"hide-icon":t.value.navbarIcon===!1}]},[c("div",{class:"vp-navbar-start"},[c(Kh,{onToggle:()=>{o.value&&(o.value=!1),n("toggleSidebar")}}),(d=s.startBefore)==null?void 0:d.call(s),(l.value.start||[]).map(w=>c(p(w))),(v=s.startAfter)==null?void 0:v.call(s)]),c("div",{class:"vp-navbar-center"},[(m=s.centerBefore)==null?void 0:m.call(s),(l.value.center||[]).map(w=>c(p(w))),(h=s.centerAfter)==null?void 0:h.call(s)]),c("div",{class:"vp-navbar-end"},[(k=s.endBefore)==null?void 0:k.call(s),(l.value.end||[]).map(w=>c(p(w))),(E=s.endAfter)==null?void 0:E.call(s),c(Gh,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),c($h,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var w;return(w=s.screenTop)==null?void 0:w.call(s)},after:()=>{var w;return(w=s.screenBottom)==null?void 0:w.call(s)}})]}}}),qh=I({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const n=Sn();return()=>[ou(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Ws(n,e.config,!0)}],exact:!0}),iu(e.config.children)]}}),Qh=I({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:n}){const s=Sn(),t=A(()=>Ws(s,e.config)),a=A(()=>Ws(s,e.config,!0));return()=>{const{collapsible:o,children:i=[],icon:l,prefix:u,link:p,text:d}=e.config;return c("section",{class:"vp-sidebar-group"},[c(o?"button":"p",{class:["vp-sidebar-heading",{clickable:o||p,exact:a.value,active:t.value}],...o?{type:"button",onClick:()=>n("toggle"),onKeydown:v=>{v.key==="Enter"&&n("toggle")}}:{}},[c(We,{icon:l}),p?c(Ze,{class:"vp-sidebar-title",config:{text:d,link:p},noExternalLinkIcon:!0}):c("span",{class:"vp-sidebar-title"},d),o?c("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!o?c(_u,{key:u,config:i}):null])}}}),_u=I({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const n=Sn(),s=K(-1),t=a=>{s.value=a===s.value?-1:a};return le(()=>n.path,()=>{const a=e.config.findIndex(o=>au(n,o));s.value=a},{immediate:!0,flush:"post"}),()=>c("ul",{class:"vp-sidebar-links"},e.config.map((a,o)=>c("li",a.type==="group"?c(Qh,{config:a,open:o===s.value,onToggle:()=>t(o)}):c(qh,{config:a}))))}}),Zh=I({name:"SideBar",slots:Object,setup(e,{slots:n}){const s=Sn(),t=ue(),a=Mi(),o=xe();return de(()=>{le(()=>s.hash,i=>{const l=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${s.path}${i}"]`);if(!l)return;const{top:u,height:p}=o.value.getBoundingClientRect(),{top:d,height:v}=l.getBoundingClientRect();d<u?l.scrollIntoView(!0):d+v>u+p&&l.scrollIntoView(!1)},{immediate:!0})}),()=>{var i,l,u;return c("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":t.value.sidebarIcon===!1}]},[(i=n.top)==null?void 0:i.call(n),((l=n.default)==null?void 0:l.call(n))||c(_u,{config:a.value}),(u=n.bottom)==null?void 0:u.call(n)])}}}),$i=I({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:n}){const s=qe(),t=pe(),a=ge(),o=ue(),{isMobile:i,isPC:l}=Ft(),[u,p]=ga(!1),[d,v]=ga(!1),m=Mi(),h=K(!1),k=A(()=>e.noNavbar||a.value.navbar===!1||o.value.navbar===!1?!1:!!(t.value.title||o.value.logo||o.value.repo||o.value.navbar)),E=A(()=>e.noSidebar?!1:a.value.sidebar!==!1&&m.value.length!==0&&!a.value.home),w=A(()=>e.noToc||a.value.home?!1:a.value.toc||o.value.toc!==!1&&a.value.toc!==!1),_={x:0,y:0},D=O=>{_.x=O.changedTouches[0].clientX,_.y=O.changedTouches[0].clientY},y=O=>{const M=O.changedTouches[0].clientX-_.x,F=O.changedTouches[0].clientY-_.y;Math.abs(M)>Math.abs(F)*1.5&&Math.abs(M)>40&&(M>0&&_.x<=80?p(!0):p(!1))},P=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let C=0;return Ae("scroll",Z0(()=>{const O=P();O<=58||O<C?h.value=!1:C+200<O&&!u.value&&(h.value=!0),C=O},300,!0)),le(i,O=>{O||p(!1)}),de(()=>{const O=Ri(document.body);le(u,F=>{O.value=F});const M=s.afterEach(()=>{p(!1)});fs(()=>{O.value=!1,M()})}),()=>c(nn("GlobalEncrypt")?je("GlobalEncrypt"):hp,()=>c("div",{class:["theme-container",{"no-navbar":!k.value,"no-sidebar":!E.value&&!(n.sidebar||n.sidebarTop||n.sidebarBottom),"has-toc":w.value,"hide-navbar":h.value,"sidebar-collapsed":!i.value&&!l.value&&d.value,"sidebar-open":i.value&&u.value},e.containerClass,a.value.containerClass||""],onTouchStart:D,onTouchEnd:y},[k.value?c(Wh,{onToggleSidebar:()=>p()},{startBefore:()=>{var O;return(O=n.navbarStartBefore)==null?void 0:O.call(n)},startAfter:()=>{var O;return(O=n.navbarStartAfter)==null?void 0:O.call(n)},centerBefore:()=>{var O;return(O=n.navbarCenterBefore)==null?void 0:O.call(n)},centerAfter:()=>{var O;return(O=n.navbarCenterAfter)==null?void 0:O.call(n)},endBefore:()=>{var O;return(O=n.navbarEndBefore)==null?void 0:O.call(n)},endAfter:()=>{var O;return(O=n.navbarEndAfter)==null?void 0:O.call(n)},screenTop:()=>{var O;return(O=n.navScreenTop)==null?void 0:O.call(n)},screenBottom:()=>{var O;return(O=n.navScreenBottom)==null?void 0:O.call(n)}}):null,c(es,{name:"fade"},()=>u.value?c("div",{class:"vp-sidebar-mask",onClick:()=>p(!1)}):null),c(es,{name:"fade"},()=>i.value?null:c("div",{class:"toggle-sidebar-wrapper",onClick:()=>v()},c("span",{class:["arrow",d.value?"end":"start"]}))),c(Zh,{},{...n.sidebar?{default:()=>n.sidebar()}:{},top:()=>{var O;return(O=n.sidebarTop)==null?void 0:O.call(n)},bottom:()=>{var O;return(O=n.sidebarBottom)==null?void 0:O.call(n)}}),n.default(),c(xh)]))}}),ke=I({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:n}){const s=a=>{a.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},t=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>c(e.type==="single"?es:Lm,{name:"drop",appear:e.appear,onAppear:s,onAfterAppear:t,onEnter:s,onAfterEnter:t,onBeforeLeave:s},()=>n.default())}});const Vo=({custom:e})=>c(Jc,{class:["theme-hope-content",{custom:e}]});Vo.displayName="MarkdownContent",Vo.props={custom:Boolean};var Hi=Vo;const yu=()=>c(oe,{name:"author"},()=>c("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));yu.displayName="AuthorIcon";const Au=()=>c(oe,{name:"calendar"},()=>c("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Au.displayName="CalendarIcon";const Bu=()=>c(oe,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Bu.displayName="CategoryIcon";const wu=()=>c(oe,{name:"print"},()=>c("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));wu.displayName="PrintIcon";const Pu=()=>c(oe,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Pu.displayName="TagIcon";const Du=()=>c(oe,{name:"timer"},()=>c("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Du.displayName="TimerIcon";const Su=()=>c(oe,{name:"word"},()=>[c("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),c("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Su.displayName="WordIcon";const os=()=>{const e=ue();return A(()=>e.value.metaLocales)};var Yh=I({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const n=os();return()=>e.author.length?c("span",{class:"page-author-info","aria-label":`${n.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[c(yu),c("span",e.author.map(s=>s.url?c("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):c("span",{class:"page-author-item"},s.name))),c("span",{property:"author",content:e.author.map(s=>s.name).join(", ")})]):null}}),Jh=I({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const n=qe(),s=pe(),t=os(),a=(o,i="")=>{i&&s.value.path!==i&&(o.preventDefault(),n.push(i))};return()=>e.category.length?c("span",{class:"page-category-info","aria-label":`${t.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[c(Bu),e.category.map(({name:o,path:i})=>c("span",{class:["page-category-item",{[`category${Ia(o,9)}`]:!e.pure,clickable:i}],role:i?"navigation":"",onClick:l=>a(l,i)},o)),c("meta",{property:"articleSection",content:e.category.map(({name:o})=>o).join(",")})]):null}}),Xh=I({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const n=mi(),s=os();return()=>e.date?c("span",{class:"page-date-info","aria-label":`${s.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[c(Au),c("span",c(xa,()=>e.localizedDate||e.date.toLocaleDateString(n.value))),c("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),e8=I({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const n=os();return()=>e.isOriginal?c("span",{class:"page-original-info"},n.value.origin):null}}),n8=I({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=os(),s=A(()=>{if(!e.readingTime)return null;const{minutes:t}=e.readingTime;return t<1?"PT1M":`PT${Math.round(t)}M`});return()=>{var t,a;return(t=e.readingTimeLocale)!=null&&t.time?c("span",{class:"page-reading-time-info","aria-label":`${n.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[c(Du),c("span",(a=e.readingTimeLocale)==null?void 0:a.time),c("meta",{property:"timeRequired",content:s.value})]):null}}}),s8=I({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const n=qe(),s=pe(),t=os(),a=(o,i="")=>{i&&s.value.path!==i&&(o.preventDefault(),n.push(i))};return()=>e.tag.length?c("span",{class:"page-tag-info","aria-label":`${t.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[c(Pu),e.tag.map(({name:o,path:i})=>c("span",{class:["page-tag-item",{[`tag${Ia(o,9)}`]:!e.pure,clickable:i}],role:i?"navigation":"",onClick:l=>a(l,i)},o)),c("meta",{property:"keywords",content:e.tag.map(({name:o})=>o).join(",")})]):null}}),t8=I({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=os();return()=>{var s,t,a;return(s=e.readingTimeLocale)!=null&&s.words?c("span",{class:"page-word-info","aria-label":`${n.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[c(Su),c("span",(t=e.readingTimeLocale)==null?void 0:t.words),c("meta",{property:"wordCount",content:(a=e.readingTime)==null?void 0:a.words})]):null}}}),Lu=I({name:"PageInfo",components:{AuthorInfo:Yh,CategoryInfo:Jh,DateInfo:Xh,OriginalInfo:e8,PageViewInfo:()=>null,ReadingTimeInfo:n8,TagInfo:s8,WordInfo:t8},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const n=Xs();return()=>e.items?c("div",{class:"page-info"},e.items.map(s=>c(je(`${s}Info`),{...e.info,pure:n.value}))):null}}),a8=I({name:"PrintButton",setup(){const e=as(),n=ue();return()=>e.value.print===!1?null:c("button",{type:"button",class:"print-button",title:n.value.metaLocales.print,onClick:()=>{window.print()}},c(wu))}});const o8=({title:e,level:n,slug:s})=>c(Me,{to:`#${s}`,class:["toc-link",`level${n}`]},()=>e),Fo=(e,n)=>{const s=Sn();return e.length&&n>0?c("ul",{class:"toc-list"},e.map(t=>{const a=Fo(t.children,n-1);return[c("li",{class:["toc-item",{active:yi(s,`#${t.slug}`)}]},o8(t)),a?c("li",a):null]})):null};var Ou=I({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:n}){const s=Sn(),t=pe(),a=os(),o=xe(),i=K("-1.7rem"),l=p=>{var d;(d=o.value)==null||d.scrollTo({top:p,behavior:"smooth"})},u=()=>{if(o.value){const p=document.querySelector(".toc-item.active");p?i.value=`${p.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:i.value="-1.7rem"}else i.value="-1.7rem"};return de(()=>{le(()=>s.hash,p=>{if(o.value){const d=document.querySelector(`#toc a.toc-link[href$="${p}"]`);if(!d)return;const{top:v,height:m}=o.value.getBoundingClientRect(),{top:h,height:k}=d.getBoundingClientRect();h<v?l(o.value.scrollTop+h-v):h+k>v+m&&l(o.value.scrollTop+h+k-v-m)}}),le(()=>s.fullPath,u,{flush:"post",immediate:!0})}),()=>{var d,v;const p=e.items.length?Fo(e.items,e.headerDepth):t.value.headers?Fo(t.value.headers,e.headerDepth):null;return p?c("div",{class:"toc-place-holder"},[c("aside",{id:"toc"},[(d=n.before)==null?void 0:d.call(n),c("div",{class:"toc-header"},[a.value.toc,c(a8)]),c("div",{class:"toc-wrapper",ref:o},[p,c("div",{class:"toc-marker",style:{top:i.value}})]),(v=n.after)==null?void 0:v.call(n)])]):null}}}),Ui=I({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const n=pe(),s=ue(),t=xe(),a=({target:o})=>{const i=document.querySelector(o.hash);if(i){const l=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",l)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",l),i.focus(),window.scrollTo(0,0)}};return de(()=>{le(()=>n.value.path,()=>t.value.focus())}),()=>[c("span",{ref:t,tabindex:"-1"}),c("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:a},s.value.routeLocales.skipToContent)]}});let po=null,at=null;const i8={wait:()=>po,pending:()=>{po=new Promise(e=>at=e)},resolve:()=>{at==null||at(),po=null,at=null}},xu=()=>i8;var Ru=I({name:"FadeSlideY",slots:Object,setup(e,{slots:n}){const{resolve:s,pending:t}=xu();return()=>c(es,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:t},()=>{var a;return(a=n.default)==null?void 0:a.call(n)})}});const r8=(e,n)=>{const s=e.replace(n,"/").split("/"),t=[];let a=vi(n);return s.forEach((o,i)=>{i!==s.length-1?(a+=`${o}/`,t.push({link:a,name:o||"Home"})):o!==""&&(a+=o,t.push({link:a,name:o}))}),t},Tu=(e,{slots:n})=>{var v,m;const{bgImage:s,bgImageDark:t,bgImageStyle:a,color:o,description:i,image:l,imageDark:u,header:p,features:d=[]}=e;return c("div",{class:"vp-feature-wrapper"},[s?c("div",{class:["vp-feature-bg",{light:t}],style:[{"background-image":`url(${s})`},a]}):null,t?c("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${t})`},a]}):null,c("div",{class:"vp-feature",style:o?{color:o}:{}},[((v=n.image)==null?void 0:v.call(n,e))||[l?c("img",{class:["vp-feature-image",{light:u}],src:ye(l),alt:p}):null,u?c("img",{class:"vp-feature-image dark",src:ye(u),alt:p}):null],((m=n.info)==null?void 0:m.call(n,e))||[p?c("h2",{class:"vp-feature-header"},p):null,i?c("p",{class:"vp-feature-description",innerHTML:i}):null],d.length?c("div",{class:"vp-features"},d.map(({icon:h,title:k,details:E,link:w})=>{const _=[c("h3",{class:"vp-feature-title"},[c(We,{icon:h}),c("span",{innerHTML:k})]),c("p",{class:"vp-feature-details",innerHTML:E})];return w?_t(w)?c("a",{class:"vp-feature-item link",href:w,role:"navigation","aria-label":k,target:"_blank"},_):c(Me,{class:"vp-feature-item link",to:w,role:"navigation","aria-label":k},()=>_):c("div",{class:"vp-feature-item"},_)})):null])])};Tu.displayName="FeaturePanel";var Al=Tu;const Iu=e=>{const{icon:n="",color:s,size:t}=e,a={};return s&&(a.color=s),t&&(a.height=Number.isNaN(Number(t))?t:`${t}px`),ts(n)?c("img",{class:"icon",src:n,"no-view":"",style:a}):Tt(n)?c("img",{class:"icon",src:ye(n),"no-view":"",style:a}):c(je("FontIcon"),e)};Iu.displayName="HopeIcon";var l8=Iu,c8=I({name:"HeroInfo",slots:Object,setup(e,{slots:n}){const s=ge(),t=Ys(),a=A(()=>s.value.heroFullScreen??!1),o=A(()=>{const{heroText:p,tagline:d}=s.value;return{text:p??t.value.title??"Hello",tagline:d??t.value.description??"",isFullScreen:a.value}}),i=A(()=>{const{heroText:p,heroImage:d,heroImageDark:v,heroAlt:m,heroImageStyle:h}=s.value;return{image:d?ye(d):null,imageDark:v?ye(v):null,heroStyle:h,alt:m||p||"hero image",isFullScreen:a.value}}),l=A(()=>{const{bgImage:p,bgImageDark:d,bgImageStyle:v}=s.value;return{image:Fn(p)?ye(p):null,imageDark:Fn(d)?ye(d):null,bgStyle:v,isFullScreen:a.value}}),u=A(()=>s.value.actions??[]);return()=>{var p,d,v;return c("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((p=n.heroBg)==null?void 0:p.call(n,l.value))||[l.value.image?c("div",{class:["vp-hero-mask",{light:l.value.imageDark}],style:[{"background-image":`url(${l.value.image})`},l.value.bgStyle]}):null,l.value.imageDark?c("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${l.value.imageDark})`},l.value.bgStyle]}):null],c("div",{class:"vp-hero-info"},[((d=n.heroImage)==null?void 0:d.call(n,i.value))||c(ke,{appear:!0,type:"group"},()=>[i.value.image?c("img",{key:"light",class:["vp-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?c("img",{key:"dark",class:"vp-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),((v=n.heroInfo)==null?void 0:v.call(n,o.value))??c("div",{class:"vp-hero-infos"},[o.value.text?c(ke,{appear:!0,delay:.04},()=>c("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?c(ke,{appear:!0,delay:.08},()=>c("p",{id:"main-description",innerHTML:o.value.tagline})):null,u.value.length?c(ke,{appear:!0,delay:.12},()=>c("p",{class:"vp-hero-actions"},u.value.map(m=>c(Ze,{class:["vp-hero-action",m.type||"default"],config:m,noExternalLinkIcon:!0},m.icon?{before:()=>c(l8,{icon:m.icon})}:{})))):null])])])}}});const Cu=(e,{slots:n})=>{var m,h,k;const{bgImage:s,bgImageDark:t,bgImageStyle:a,color:o,description:i,image:l,imageDark:u,header:p,highlights:d=[],type:v="un-order"}=e;return c("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[s?c("div",{class:["vp-highlight-bg",{light:t}],style:[{"background-image":`url(${s})`},a]}):null,t?c("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${t})`},a]}):null,c("div",{class:"vp-highlight"},[((m=n.image)==null?void 0:m.call(n,e))||[l?c("img",{class:["vp-highlight-image",{light:u}],src:ye(l),alt:p}):null,u?c("img",{class:"vp-highlight-image dark",src:ye(u),alt:p}):null],((h=n.info)==null?void 0:h.call(n,e))||[c("div",{class:"vp-highlight-info-wrapper"},c("div",{class:"vp-highlight-info"},[p?c("h2",{class:"vp-highlight-header",innerHTML:p}):null,i?c("p",{class:"vp-highlight-description",innerHTML:i}):null,((k=n.highlights)==null?void 0:k.call(n,d))||c(v==="order"?"ol":v==="no-order"?"dl":"ul",{class:"vp-highlights"},d.map(({icon:E,title:w,details:_,link:D})=>{const y=[c(v==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[E?c(We,{class:"vp-highlight-icon",icon:E}):null,c("span",{innerHTML:w})]),_?c(v==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:_}):null];return c(v==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:D}]},D?R0(D)?c("a",{class:"vp-highlight-item link",href:D,role:"navigation","aria-label":w,target:"_blank"},y):c(Me,{class:"vp-highlight-item link",to:D,role:"navigation","aria-label":w},()=>y):c("div",{class:"vp-highlight-item"},y))}))]))]])])};Cu.displayName="HighlightPanel";var p8=Cu,u8=I({name:"HomePage",slots:Object,setup(e,{slots:n}){const s=Xs(),t=ge(),a=A(()=>{const{features:i}=t.value;return ee(i)?i:null}),o=A(()=>{const{highlights:i}=t.value;return ee(i)?i:null});return()=>{var i,l,u,p;return c("main",{id:"main-content",class:["vp-project-home ",{pure:s.value}],"aria-labelledby":t.value.heroText===null?"":"main-title"},[(i=n.top)==null?void 0:i.call(n),c(c8),((l=o.value)==null?void 0:l.map(d=>"features"in d?c(Al,d):c(p8,d)))||(a.value?c(ke,{appear:!0,delay:.24},()=>c(Al,{features:a.value})):null),(u=n.center)==null?void 0:u.call(n),c(ke,{appear:!0,delay:.32},()=>c(Hi)),(p=n.bottom)==null?void 0:p.call(n)])}}}),d8=I({name:"BreadCrumb",setup(){const e=qe(),n=pe(),s=$n(),t=ge(),a=ue(),o=xe([]),i=A(()=>(t.value.breadcrumb||t.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&o.value.length>1),l=A(()=>t.value.breadcrumbIcon||t.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),u=()=>{const p=e.getRoutes(),d=r8(n.value.path,s.value).map(({link:v,name:m})=>{const h=p.find(k=>k.path===v);if(h){const{meta:k,path:E}=js(e,h.path);return{title:k[_e.shortTitle]||k[_e.title]||m,icon:k[_e.icon],path:E}}return null}).filter(v=>v!==null);d.length>1&&(o.value=d)};return de(()=>{le(()=>n.value.path,u,{immediate:!0})}),()=>c("nav",{class:["vp-breadcrumb",{disable:!i.value}]},i.value?c("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},o.value.map((p,d)=>c("li",{class:{"is-active":o.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[c(Me,{to:p.path,property:"item",typeof:"WebPage"},()=>[l.value?c(We,{icon:p.icon}):null,c("span",{property:"name"},p.title||"Unknown")]),c("meta",{property:"position",content:d+1})]))):[])}});const Bl=e=>{const n=qe();return e===!1?!1:ie(e)?Fs(n,e,!0):Ot(e)?e:null},No=(e,n,s)=>{const t=e.findIndex(a=>a.link===n);if(t!==-1){const a=e[t+s];return a!=null&&a.link?a:null}for(const a of e)if(a.children){const o=No(a.children,n,s);if(o)return o}return null};var v8=I({name:"PageNav",setup(){const e=ue(),n=ge(),s=Mi(),t=pe(),a=Vt(),o=A(()=>{const l=Bl(n.value.prev);return l===!1?null:l||(e.value.prevLink===!1?null:No(s.value,t.value.path,-1))}),i=A(()=>{const l=Bl(n.value.next);return l===!1?null:l||(e.value.nextLink===!1?null:No(s.value,t.value.path,1))});return Ae("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?i.value&&(a(i.value.link),l.preventDefault()):l.key==="ArrowLeft"&&o.value&&(a(o.value.link),l.preventDefault()))}),()=>o.value||i.value?c("nav",{class:"vp-page-nav"},[o.value?c(Ze,{class:"prev",config:o.value},()=>{var l,u;return[c("div",{class:"hint"},[c("span",{class:"arrow start"}),e.value.metaLocales.prev]),c("div",{class:"link"},[c(We,{icon:(l=o.value)==null?void 0:l.icon}),(u=o.value)==null?void 0:u.text])]}):null,i.value?c(Ze,{class:"next",config:i.value},()=>{var l,u;return[c("div",{class:"hint"},[e.value.metaLocales.next,c("span",{class:"arrow end"})]),c("div",{class:"link"},[(l=i.value)==null?void 0:l.text,c(We,{icon:(u=i.value)==null?void 0:u.icon})])]}):null]):null}});const m8={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},b8=({docsRepo:e,docsBranch:n,docsDir:s,filePathRelative:t,editLinkPattern:a})=>{if(!t)return null;const o=Ai(e);let i;return a?i=a:o!==null&&(i=m8[o]),i?i.replace(/:repo/,ts(e)?e:`https://github.com/${e}`).replace(/:branch/,n).replace(/:path/,zc(`${vi(s)}/${t}`)):null},h8=()=>{const e=ue(),n=pe(),s=ge();return A(()=>{const{repo:t,docsRepo:a=t,docsBranch:o="main",docsDir:i="",editLink:l,editLinkPattern:u=""}=e.value;if(!(s.value.editLink??l??!0)||!a)return null;const p=b8({docsRepo:a,docsBranch:o,docsDir:i,editLinkPattern:u,filePathRelative:n.value.filePathRelative});return p?{text:e.value.metaLocales.editLink,link:p}:null})},k8=()=>{const e=Ys(),n=ue(),s=pe(),t=ge();return A(()=>{var a,o;return!(t.value.lastUpdated??n.value.lastUpdated??!0)||!((a=s.value.git)!=null&&a.updatedTime)?null:new Date((o=s.value.git)==null?void 0:o.updatedTime).toLocaleString(e.value.lang)})},f8=()=>{const e=ue(),n=pe(),s=ge();return A(()=>{var t;return s.value.contributors??e.value.contributors??!0?((t=n.value.git)==null?void 0:t.contributors)??null:null})};var g8=I({name:"PageTitle",setup(){const e=pe(),n=ge(),s=ue(),{info:t,items:a}=yh();return()=>c("div",{class:"vp-page-title"},[c("h1",[s.value.titleIcon===!1?null:c(We,{icon:n.value.icon}),e.value.title]),c(Lu,{info:t.value,...a.value===null?{}:{items:a.value}}),c("hr")])}});const Vu=()=>c(oe,{name:"edit"},()=>[c("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),c("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Vu.displayName="EditIcon";var E8=I({name:"PageMeta",setup(){const e=ue(),n=h8(),s=k8(),t=f8();return()=>{const{metaLocales:a}=e.value;return c("footer",{class:"page-meta"},[n.value?c("div",{class:"meta-item edit-link"},c(Ze,{class:"label",config:n.value},{before:()=>c(Vu)})):null,c("div",{class:"meta-item git-info"},[s.value?c("div",{class:"update-time"},[c("span",{class:"label"},`${a.lastUpdated}: `),c(xa,()=>c("span",{class:"info"},s.value))]):null,t.value&&t.value.length?c("div",{class:"contributors"},[c("span",{class:"label"},`${a.contributors}: `),t.value.map(({email:o,name:i},l)=>[c("span",{class:"contributor",title:`email: ${o}`},i),l!==t.value.length-1?",":""])]):null])])}}}),_8=I({name:"NormalPage",slots:Object,setup(e,{slots:n}){const s=ge(),t=pe(),{isDarkmode:a}=Nt(),o=ue(),i=A(()=>s.value.toc||s.value.toc!==!1&&o.value.toc!==!1);return()=>c("main",{id:"main-content",class:"vp-page"},c(nn("LocalEncrypt")?je("LocalEncrypt"):hp,()=>{var l,u,p,d;return[(l=n.top)==null?void 0:l.call(n),s.value.cover?c("img",{class:"page-cover",src:ye(s.value.cover),alt:t.value.title,"no-view":""}):null,c(d8),c(g8),i.value?c(Ou,{headerDepth:s.value.headerDepth??o.value.headerDepth??2},{before:()=>{var v;return(v=n.tocBefore)==null?void 0:v.call(n)},after:()=>{var v;return(v=n.tocAfter)==null?void 0:v.call(n)}}):null,(u=n.contentBefore)==null?void 0:u.call(n),c(Hi),(p=n.contentAfter)==null?void 0:p.call(n),c(E8),c(v8),nn("CommentService")?c(je("CommentService"),{darkmode:a.value}):null,(d=n.bottom)==null?void 0:d.call(n)]}))}}),y8=I({name:"Layout",slots:Object,setup(e,{slots:n}){const s=as(),t=ue(),a=pe(),o=ge(),{isMobile:i}=Ft(),l=A(()=>{var u,p;return((u=t.value.blog)==null?void 0:u.sidebarDisplay)||((p=s.value.blog)==null?void 0:p.sidebarDisplay)||"mobile"});return()=>[c(Ui),c($i,{},{default:()=>{var u;return((u=n.default)==null?void 0:u.call(n))||(o.value.home?c(u8):c(Ru,()=>c(_8,{key:a.value.path},{top:()=>{var p;return(p=n.top)==null?void 0:p.call(n)},bottom:()=>{var p;return(p=n.bottom)==null?void 0:p.call(n)},contentBefore:()=>{var p;return(p=n.contentBefore)==null?void 0:p.call(n)},contentAfter:()=>{var p;return(p=n.contentAfter)==null?void 0:p.call(n)},tocBefore:()=>{var p;return(p=n.tocBefore)==null?void 0:p.call(n)},tocAfter:()=>{var p;return(p=n.tocAfter)==null?void 0:p.call(n)}})))},...l.value!=="none"?{navScreenBottom:()=>c(je("BloggerInfo"))}:{},...!i.value&&l.value==="always"?{sidebar:()=>c(je("BloggerInfo"))}:{}})]}}),A8=I({name:"NotFoundHint",setup(){const e=ue(),n=()=>{const s=e.value.routeLocales.notFoundMsg;return s[Math.floor(Math.random()*s.length)]};return()=>c("div",{class:"not-found-hint"},[c("p",{class:"error-code"},"404"),c("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),c("p",{class:"error-hint"},n())])}}),B8=I({name:"NotFound",slots:Object,setup(e,{slots:n}){const s=$n(),t=ue(),{navigate:a}=Lo({to:t.value.home??s.value});return()=>[c(Ui),c($i,{noSidebar:!0},()=>{var o;return c("main",{id:"main-content",class:"vp-page not-found"},((o=n.default)==null?void 0:o.call(n))||[c(A8),c("div",{class:"actions"},[c("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},t.value.routeLocales.back),c("button",{type:"button",class:"action-button",onClick:()=>a()},t.value.routeLocales.home)])])})]}});const w8={},P8={category:{"/":{path:"/category/",map:{笔记:{path:"/category/%E7%AC%94%E8%AE%B0/",keys:["v-5491f884"]},网络安全:{path:"/category/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/",keys:["v-4b719180","v-2776dc09"]},CoreDNS:{path:"/category/coredns/",keys:["v-4b450dee"]},iptables:{path:"/category/iptables/",keys:["v-4b719180"]},Network:{path:"/category/network/",keys:["v-4b719180"]},Nginx:{path:"/category/nginx/",keys:["v-72bc3488"]},数据库:{path:"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-350fc342"]}}}},tag:{"/":{path:"/tag/",map:{}}}},D8={article:{"/":{path:"/article/",keys:["v-326d43de","v-1c82387b","v-269af0d2","v-4b719180","v-fd1808c0","v-513bdf66","v-1c5b2b34","v-9ef1da18","v-5133ac50","v-759f12ff","v-eeb679e4","v-19869778","v-0c50d2dd","v-e5c7a1ce","v-28d01994","v-156dfb56","v-7208e0fe","v-37a8ebbd","v-3b5999cf","v-66a50361","v-a467abfa","v-80d561d8","v-0e11c102","v-e966fc72","v-19b6577e","v-081b1a63","v-5c90804c","v-3352fc98","v-28f7b2e8","v-736cf379","v-548167c6","v-30bf7f7c","v-48858f42","v-6c1110d1","v-2db1247c","v-580a4400","v-c47f0884","v-66124308","v-42d1b932","v-72bc3488","v-1187c118","v-384ed63f","v-3122a850","v-4c3279e0","v-6b0a0620","v-7b7916dd","v-8b9d7fba","v-6cc6b7c2","v-0a8284ed","v-5865d184","v-46b48e13","v-24f7c960","v-28c94530","v-7eb73050","v-5491f884","v-01868d8e","v-0300e138","v-a9b33774","v-1d16fbc1","v-47c36178","v-2f2e2cf4","v-4b450dee","v-756d3903","v-2ab375a4","v-c388ee4c","v-2f710f9a","v-19eea71e","v-74135446","v-1380e8c6","v-0451b50e","v-87a56570","v-4c790792","v-1fd2b10c","v-483c071d","v-50885a84","v-f9b4903c","v-10c9e8f1","v-6f39f683","v-4c5c0565","v-2df05220","v-d36c7940","v-3b10ae94","v-688e4fbe","v-6e99be31","v-28ef74e9","v-8e1c3a3e","v-3487e284","v-5c84e740","v-09de09ac","v-128301a5","v-03dfed38","v-8ff08dec","v-7e12b9a6","v-ab5d88e0","v-3f1dde92","v-69ef78cb","v-9382cbf8","v-bae969ea","v-523bf541","v-20b8f0f1","v-7726c068","v-2b2f3b07","v-219bdfe6","v-08b82cef","v-89f58c8e","v-4d6c1094","v-736258dc","v-ce8e88a6","v-1affebc9","v-edc7031c","v-3251a524","v-72564be3","v-6c105dfe","v-4db786a2","v-77da57a3","v-5df5e696","v-f32b6d86","v-f8568246","v-dcb1d26a","v-07b8030a","v-577615d7","v-513bda28","v-77aac963","v-c66ad2a6","v-e9469f82","v-2ece8d5e","v-a0127118","v-f5f5d002","v-01b130a4","v-7f271bfb","v-76d4e7bb","v-3d16ea04","v-575cf978","v-ac04e9ec","v-743045a2","v-16f9c44f","v-e9467f60","v-089e219f","v-1c63547c","v-07fca106","v-4baada5c","v-5b225804","v-aa3e3ee8","v-81834800","v-7e1d67ea","v-e936c158","v-53c4fe8d","v-639f36bc","v-5823502a","v-7544ffb4","v-95889b98","v-b33727c8","v-4f01f3b8","v-23bf45e1","v-788034ca","v-79d1ae7f","v-0c6b7d0f","v-6f000423","v-26dd9c7b","v-01b8e297","v-036dbb36","v-052293d5","v-4396c282","v-30f385af","v-10913ee4","v-3eb55632","v-ce601f4c","v-5d982049","v-3e5ab3dc","v-2b1ef3ea","v-31ec57f8","v-00524e94","v-636408d2","v-4581fe4c","v-1c72c74c","v-79d954ee","v-b89ca53e","v-4977fd20","v-966b2156","v-8484bb5a","v-92954d86","v-00bad121","v-bb5b9e90","v-15e0f84a","v-5a559594","v-20664f24","v-2741a660","v-f71e4004","v-0a501b28","v-244d585c","v-76b130c2","v-794ccb14","v-b7e1d682","v-bf89a59e","v-56a71ded","v-6fa63cee","v-5a7f9ef1","v-790a3eba","v-87713e26","v-0dc78858","v-04e93595","v-b010c524","v-42119fed","v-69833e9a","v-454654c1","v-5b263b15","v-bf02f4a4","v-5bece530","v-4ae285a4","v-04007d38","v-350fc342","v-11c46d82","v-761ac8fe","v-61515108","v-9174ace0","v-91b5b3e2","v-7c8e6e87","v-eb33cb0a","v-75d6f0c8","v-1c751544","v-22a3c8d7","v-050e9cf9","v-7c995a9d","v-3662114a","v-a6eba2dc","v-1d54df78","v-2bec014a","v-4de8425e","v-2a52f0c8","v-7aabef78","v-aab6a77a","v-6e8771f8","v-3215b4ba","v-1a0079da","v-733d9740","v-48c517e4","v-1922adf5","v-7bf7b544","v-f55b6058","v-2e5806d2","v-4c406808","v-2adac7da","v-cf78e944","v-4294bd6d","v-2b829e3e","v-9f71a98a","v-0556e072","v-54218f21","v-4742da80","v-1302838e","v-6a7299b5","v-2b73f172","v-2cf74ea8","v-64d1e7a6","v-3ac693d4","v-07a67b62","v-2fabe988","v-5b349d28","v-6111f3f4","v-4f6bf42c","v-5d1813c6","v-0cb49670","v-451b6bb3","v-7741f6f4","v-617feebe","v-fc80a980","v-69880198","v-554537f7","v-782c286b","v-d7023b56","v-7cbbdb02","v-65ddef8e","v-508b9403","v-06f9c988","v-b0fbb1a2","v-77255d40","v-cf9a1e10","v-247efa59","v-d9307d94","v-5920d9e3","v-201aa8de","v-503a0eb2","v-5b295232","v-319a6cdc","v-01969508","v-5e65d047","v-3d749c17","v-10c4e4cf","v-ab459502","v-afb12a34","v-c56826bc","v-41728b29","v-01e792c4","v-187d9e5e","v-282c901c","v-6773cc80","v-e1be36c0","v-47854b8a","v-58af6e7c","v-6305be1a","v-2776dc09"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-326d43de","v-1c82387b","v-269af0d2","v-4b719180","v-fd1808c0","v-513bdf66","v-1c5b2b34","v-9ef1da18","v-5133ac50","v-759f12ff","v-eeb679e4","v-19869778","v-0c50d2dd","v-e5c7a1ce","v-28d01994","v-156dfb56","v-7208e0fe","v-37a8ebbd","v-3b5999cf","v-66a50361","v-a467abfa","v-80d561d8","v-0e11c102","v-e966fc72","v-19b6577e","v-081b1a63","v-5c90804c","v-3352fc98","v-28f7b2e8","v-736cf379","v-548167c6","v-30bf7f7c","v-48858f42","v-6c1110d1","v-2db1247c","v-580a4400","v-c47f0884","v-66124308","v-42d1b932","v-72bc3488","v-1187c118","v-384ed63f","v-3122a850","v-4c3279e0","v-6b0a0620","v-7b7916dd","v-8b9d7fba","v-6cc6b7c2","v-0a8284ed","v-5865d184","v-46b48e13","v-24f7c960","v-28c94530","v-7eb73050","v-5491f884","v-01868d8e","v-0300e138","v-a9b33774","v-1d16fbc1","v-47c36178","v-2f2e2cf4","v-4b450dee","v-756d3903","v-2ab375a4","v-c388ee4c","v-2f710f9a","v-19eea71e","v-74135446","v-1380e8c6","v-0451b50e","v-87a56570","v-4c790792","v-1fd2b10c","v-483c071d","v-50885a84","v-f9b4903c","v-10c9e8f1","v-6f39f683","v-4c5c0565","v-2df05220","v-d36c7940","v-3b10ae94","v-688e4fbe","v-6e99be31","v-28ef74e9","v-8e1c3a3e","v-3487e284","v-5c84e740","v-09de09ac","v-128301a5","v-03dfed38","v-8ff08dec","v-7e12b9a6","v-ab5d88e0","v-3f1dde92","v-69ef78cb","v-9382cbf8","v-bae969ea","v-523bf541","v-20b8f0f1","v-7726c068","v-2b2f3b07","v-219bdfe6","v-08b82cef","v-89f58c8e","v-4d6c1094","v-736258dc","v-ce8e88a6","v-1affebc9","v-edc7031c","v-3251a524","v-72564be3","v-6c105dfe","v-4db786a2","v-77da57a3","v-5df5e696","v-f32b6d86","v-f8568246","v-dcb1d26a","v-07b8030a","v-577615d7","v-513bda28","v-77aac963","v-c66ad2a6","v-e9469f82","v-2ece8d5e","v-a0127118","v-f5f5d002","v-01b130a4","v-7f271bfb","v-76d4e7bb","v-3d16ea04","v-575cf978","v-ac04e9ec","v-743045a2","v-16f9c44f","v-e9467f60","v-089e219f","v-1c63547c","v-07fca106","v-4baada5c","v-5b225804","v-aa3e3ee8","v-81834800","v-7e1d67ea","v-e936c158","v-53c4fe8d","v-639f36bc","v-5823502a","v-7544ffb4","v-95889b98","v-b33727c8","v-4f01f3b8","v-23bf45e1","v-788034ca","v-79d1ae7f","v-0c6b7d0f","v-6f000423","v-26dd9c7b","v-01b8e297","v-036dbb36","v-052293d5","v-4396c282","v-30f385af","v-10913ee4","v-3eb55632","v-ce601f4c","v-5d982049","v-3e5ab3dc","v-2b1ef3ea","v-31ec57f8","v-00524e94","v-636408d2","v-4581fe4c","v-1c72c74c","v-79d954ee","v-b89ca53e","v-4977fd20","v-966b2156","v-8484bb5a","v-92954d86","v-00bad121","v-bb5b9e90","v-15e0f84a","v-5a559594","v-20664f24","v-2741a660","v-f71e4004","v-0a501b28","v-244d585c","v-76b130c2","v-794ccb14","v-b7e1d682","v-bf89a59e","v-56a71ded","v-6fa63cee","v-5a7f9ef1","v-790a3eba","v-87713e26","v-0dc78858","v-04e93595","v-b010c524","v-42119fed","v-69833e9a","v-454654c1","v-5b263b15","v-bf02f4a4","v-5bece530","v-4ae285a4","v-04007d38","v-350fc342","v-11c46d82","v-761ac8fe","v-61515108","v-9174ace0","v-91b5b3e2","v-7c8e6e87","v-eb33cb0a","v-75d6f0c8","v-1c751544","v-22a3c8d7","v-050e9cf9","v-7c995a9d","v-3662114a","v-a6eba2dc","v-1d54df78","v-2bec014a","v-4de8425e","v-2a52f0c8","v-7aabef78","v-aab6a77a","v-6e8771f8","v-3215b4ba","v-1a0079da","v-733d9740","v-48c517e4","v-1922adf5","v-7bf7b544","v-f55b6058","v-2e5806d2","v-4c406808","v-2adac7da","v-cf78e944","v-4294bd6d","v-2b829e3e","v-9f71a98a","v-0556e072","v-54218f21","v-4742da80","v-1302838e","v-6a7299b5","v-2b73f172","v-2cf74ea8","v-64d1e7a6","v-3ac693d4","v-07a67b62","v-2fabe988","v-5b349d28","v-6111f3f4","v-4f6bf42c","v-5d1813c6","v-0cb49670","v-451b6bb3","v-7741f6f4","v-617feebe","v-fc80a980","v-69880198","v-554537f7","v-782c286b","v-d7023b56","v-7cbbdb02","v-65ddef8e","v-508b9403","v-06f9c988","v-b0fbb1a2","v-77255d40","v-cf9a1e10","v-247efa59","v-d9307d94","v-5920d9e3","v-201aa8de","v-503a0eb2","v-5b295232","v-319a6cdc","v-01969508","v-5e65d047","v-3d749c17","v-10c4e4cf","v-ab459502","v-afb12a34","v-c56826bc","v-41728b29","v-01e792c4","v-187d9e5e","v-282c901c","v-6773cc80","v-e1be36c0","v-47854b8a","v-58af6e7c","v-6305be1a","v-2776dc09"]}}},wl=K(P8),Fu=(e="")=>{const n=pe(),s=qe(),t=$n();return A(()=>{var u;const a=e||((u=ge().value.blog)==null?void 0:u.key)||"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const o=s.getRoutes();if(!wl.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const i=wl.value[a][t.value],l={path:i.path,map:{}};for(const p in i.map){const d=i.map[p];l.map[p]={path:d.path,items:[]};for(const v of d.keys){const m=o.find(({name:h})=>h===v);if(m){const h=js(s,m.path);l.map[p].items.push({path:h.path,info:h.meta})}}n.value.path===d.path&&(l.currentItems=l.map[p].items)}return l})},Pl=K(D8),Va=(e="")=>{const n=qe(),s=$n();return A(()=>{var l;const t=e||((l=ge().value.blog)==null?void 0:l.key)||"";if(!t)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Pl.value[t])throw new Error(`useBlogType: key ${e} is invalid`);const a=n.getRoutes(),o=Pl.value[t][s.value],i={path:o.path,items:[]};for(const u of o.keys){const p=a.find(({name:d})=>d===u);if(p){const d=js(n,p.path);i.items.push({path:d.path,info:d.meta})}}return i})};var S8=[];const Nu=Symbol.for("categoryMap"),Mt=()=>{const e=ce(Nu);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},L8=()=>{const e=Fu("category");dn(Nu,e)},$t=()=>{const e=as(),n=ue();return A(()=>({...e.value.blog,...n.value.blog}))},Mu=Symbol.for("tagMap"),Ht=()=>{const e=ce(Mu);if(!e)throw new Error("useTagMap() is called without provider.");return e},O8=()=>{const e=Fu("tag");dn(Mu,e)},x8=e=>{const n=ue();return A(()=>{const{[_e.author]:s}=e.value;return s?At(s):s===!1?[]:At(n.value.author,!1)})},R8=e=>{const n=Mt();return A(()=>Ep(e.value[_e.category]).map(s=>({name:s,path:n.value.map[s].path})))},T8=e=>{const n=Ht();return A(()=>_p(e.value[_e.tag]).map(s=>({name:s,path:n.value.map[s].path})))},I8=e=>A(()=>{const{[_e.date]:n}=e.value;return gi(n)}),C8=e=>{const n=Zs(e,"info"),s=$t(),t=x8(n),a=R8(n),o=T8(n),i=I8(n),l=Xp(),u=A(()=>({author:t.value,category:a.value,date:i.value,localizedDate:n.value[_e.localizedDate]||"",tag:o.value,isOriginal:n.value[_e.isOriginal]||!1,readingTime:n.value[_e.readingTime]||null,readingTimeLocale:n.value[_e.readingTime]&&l.value?Jp(n.value[_e.readingTime],l.value):null,pageview:e.path})),p=A(()=>s.value.articleInfo);return{info:u,items:p}},$u=Symbol(""),Ut=()=>{const e=ce($u);if(!e)throw new Error("useArticles() is called without provider.");return e},V8=()=>{const e=Va("article");dn($u,e)},Hu=Symbol(""),zi=()=>{const e=ce(Hu);if(!e)throw new Error("useStars() is called without provider.");return e},F8=()=>{const e=Va("star");dn(Hu,e)},Uu=Symbol(""),Gi=()=>{const e=ce(Uu);if(!e)throw new Error("useTimelines() is called without provider.");return e},N8=()=>{const e=Va("timeline"),n=A(()=>{const s=[];return e.value.items.forEach(({info:t,path:a})=>{const o=gi(t[_e.date]),i=o==null?void 0:o.getFullYear(),l=o?o.getMonth()+1:null,u=o==null?void 0:o.getDate();i&&l&&u&&((!s[0]||s[0].year!==i)&&s.unshift({year:i,items:[]}),s[0].items.push({date:`${l}/${u}`,info:t,path:a}))}),{...e.value,config:s.reverse()}});dn(Uu,n)},M8=()=>{V8(),L8(),F8(),O8(),N8()};var $8=I({name:"SocialMedia",setup(){const e=$t(),n=Xs(),s=A(()=>{const t=e.value.medias;return t?gs(t).map(([a,o])=>({name:a,icon:w8[a],url:o})):[]});return()=>s.value.length?c("div",{class:"vp-social-medias"},s.value.map(({name:t,icon:a,url:o})=>c("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":t,...n.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),Ki=I({name:"BloggerInfo",setup(){const e=$t(),n=Ys(),s=ue(),t=Ut(),a=Mt(),o=Ht(),i=Gi(),l=Vt(),u=A(()=>{var m;return e.value.name||((m=At(s.value.author)[0])==null?void 0:m.name)||n.value.title}),p=A(()=>e.value.avatar||s.value.logo),d=A(()=>s.value.blogLocales),v=A(()=>e.value.intro);return()=>{const{article:m,category:h,tag:k,timeline:E}=d.value,w=[[t.value.path,t.value.items.length,m],[a.value.path,an(a.value.map).length,h],[o.value.path,an(o.value.map).length,k],[i.value.path,i.value.items.length,E]];return c("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[c("div",{class:"vp-blogger",...v.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>l(v.value)}:{}},[p.value?c("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:ye(p.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,u.value?c("div",{class:"vp-blogger-name",property:"name"},u.value):null,e.value.description?c("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,v.value?c("meta",{property:"url",content:ye(v.value)}):null]),c("div",{class:"vp-blog-counts"},w.map(([_,D,y])=>c(Me,{class:"vp-blog-count",to:_},()=>[c("div",{class:"count"},D),c("div",y)]))),c($8)])}}});const Mo=()=>c(oe,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Mo.displayName="CategoryIcon";const $o=()=>c(oe,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));$o.displayName="TagIcon";const ji=()=>c(oe,{name:"timeline"},()=>c("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));ji.displayName="TimelineIcon";const zu=()=>c(oe,{name:"slides"},()=>c("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));zu.displayName="SlideIcon";const Gu=()=>c(oe,{name:"sticky"},()=>[c("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Gu.displayName="StickyIcon";const Ea=()=>c(oe,{name:"article"},()=>c("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Ea.displayName="ArticleIcon";const Ku=()=>c(oe,{name:"book"},()=>c("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Ku.displayName="BookIcon";const ju=()=>c(oe,{name:"link"},()=>c("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));ju.displayName="LinkIcon";const Wu=()=>c(oe,{name:"project"},()=>c("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Wu.displayName="ProjectIcon";const qu=()=>c(oe,{name:"friend"},()=>c("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));qu.displayName="FriendIcon";const Ho=()=>c(oe,{name:"slide-down"},()=>c("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ho.displayName="SlideDownIcon";const Qu=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Qu.displayName="EmptyIcon";const Zu=()=>c(oe,{name:"lock"},()=>c("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Zu.displayName="LockIcon";var H8=I({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:n}){const s=Zs(e,"info"),{info:t,items:a}=C8(e);return()=>{var m,h,k;const{[_e.title]:o,[_e.type]:i,[_e.isEncrypted]:l=!1,[_e.cover]:u,[_e.excerpt]:p,[_e.sticky]:d}=s.value,v=t.value;return c("div",{class:"vp-article-wrapper"},c("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((m=n.cover)==null?void 0:m.call(n,{cover:u}))||(u?[c("img",{class:"vp-article-cover",src:ye(u),loading:"lazy"}),c("meta",{property:"image",content:ye(u)})]:[]),d?c(Gu):null,c(Me,{to:e.path},()=>{var E;return((E=n.title)==null?void 0:E.call(n,{title:o,isEncrypted:l,type:i}))||c("header",{class:"vp-article-title"},[l?c(Zu):null,i===nu.slide?c(zu):null,c("span",{property:"headline"},o)])}),((h=n.excerpt)==null?void 0:h.call(n,{excerpt:p}))||(p?c("div",{class:"vp-article-excerpt",innerHTML:p}):null),c("hr",{class:"vp-article-hr"}),((k=n.info)==null?void 0:k.call(n,{info:v}))||c(Lu,{info:v,...a.value?{items:a.value}:{}})]))}}}),U8=I({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:n}){let s;const t=ue(),a=K(""),o=A(()=>t.value.paginationLocales),i=A(()=>Math.ceil(e.total/e.perPage)),l=A(()=>!!i.value&&i.value!==1),u=A(()=>i.value<7?!1:e.current>4),p=A(()=>i.value<7?!1:e.current<i.value-3),d=A(()=>{const{current:h}=e;let k=1,E=i.value;const w=[];i.value>=7&&(h<=4&&h<i.value-3?(k=1,E=5):h>4&&h>=i.value-3?(E=i.value,k=i.value-4):i.value>7&&(k=h-2,E=h+2));for(let _=k;_<=E;_++)w.push(_);return w}),v=h=>n("updateCurrentPage",h),m=h=>{const k=parseInt(h);k<=i.value&&k>0?v(k):s.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/g,i.value.toString())}`)};return de(()=>{s=new F0}),()=>c("div",{class:"vp-pagination"},l.value?c("div",{class:"vp-pagination-list"},[c("div",{class:"vp-pagination-number "},[e.current>1?c("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>v(e.current-1)},o.value.prev):null,u.value?[c("div",{role:"navigation",onClick:()=>v(1)},1),c("div",{class:"ellipsis"},"...")]:null,d.value.map(h=>c("div",{key:h,class:{active:e.current===h},role:"navigation",onClick:()=>v(h)},h)),p.value?[c("div",{class:"ellipsis"},"..."),c("div",{role:"navigation",onClick:()=>v(i.value)},i.value)]:null,e.current<i.value?c("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>v(e.current+1)},o.value.next):null]),c("div",{class:"vp-pagination-nav"},[c("label",{for:"navigation-text"},`${o.value.navigate}: `),c("input",{id:"navigation-text",value:a.value,onInput:({target:h})=>{a.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),m(a.value))}}),c("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>m(a.value)},o.value.action)])]):[])}}),Wi=I({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const n=Sn(),s=qe(),t=$t(),a=K(1),o=A(()=>t.value.articlePerPage||10),i=A(()=>e.items.slice((a.value-1)*o.value,a.value*o.value)),l=async u=>{a.value=u;const p={...n.query};!(p.page===u.toString()||u===1&&!p.page)&&(u===1?delete p.page:p.page=u.toString(),await s.push({path:n.path,query:p}))};return de(()=>{const{page:u}=n.query;console.log("mounted"),l(u?Number(u):1),le(a,()=>{const p=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,p)},100)})}),()=>c("div",{id:"article-list",class:"vp-article-list"},i.value.length?[...i.value.map(({info:u,path:p},d)=>c(ke,{appear:!0,delay:d*.04},()=>c(H8,{key:p,info:u,path:p}))),c(U8,{current:a.value,perPage:o.value,total:e.items.length,onUpdateCurrentPage:l})]:c(Qu))}}),Yu=I({name:"CategoryList",setup(){const e=pe(),n=Mt();return()=>c("ul",{class:"vp-category-list"},gs(n.value.map).sort(([,s],[,t])=>t.items.length-s.items.length).map(([s,{path:t,items:a}])=>c("li",{class:["vp-category",`vp-category${Ia(s,9)}`,{active:t===e.value.path}]},c(Me,{to:t},()=>[s,c("span",{class:"count"},a.length)]))))}}),Ju=I({name:"TagList",setup(){const e=ge(),n=Ht(),s=t=>{var a;return t===((a=e.value.blog)==null?void 0:a.name)};return()=>c("ul",{class:"tag-list-wrapper"},gs(n.value.map).sort(([,t],[,a])=>a.items.length-t.items.length).map(([t,{path:a,items:o}])=>c("li",{class:["tag",`tag${Ia(t,9)}`,{active:s(t)}]},c(Me,{to:a},()=>[t,c("span",{class:"tag-num"},o.length)]))))}}),z8=I({name:"TimelineList",setup(){const e=ue(),n=Gi(),s=Vt(),t=A(()=>e.value.blogLocales.timeline);return()=>c("div",{class:"timeline-list-wrapper"},[c("div",{class:"timeline-list-title",onClick:()=>s(n.value.path)},[c(ji),c("span",{class:"num"},n.value.items.length),t.value]),c("hr"),c("div",{class:"timeline-content"},c("ul",{class:"timeline-list"},n.value.config.map(({year:a,items:o},i)=>c(ke,{appear:!0,delay:.08*(i+1)},()=>c("li",[c("h3",{class:"timeline-year"},a),c("ul",{class:"timeline-year-wrapper"},o.map(({date:l,info:u,path:p})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},l),c(Me,{class:"timeline-title",to:p},()=>u[_e.title])])))])))))])}}),Xu=I({name:"InfoList",setup(){const e=ue(),n=Ut(),s=Mt(),t=A(()=>an(s.value.map).length),a=zi(),o=Ht(),i=A(()=>an(o.value.map).length),l=Vt(),u=K("article"),p=A(()=>e.value.blogLocales),d=[["article",Ea],["category",Mo],["tag",$o],["timeline",ji]];return()=>c("div",{class:"vp-blog-infos"},[c("div",{class:"vp-blog-type-switcher"},d.map(([v,m])=>c("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{u.value=v}},c("div",{class:["icon-wrapper",{active:u.value===v}],"aria-label":p.value[v],"data-balloon-pos":"up"},c(m))))),c(ke,()=>u.value==="article"?c("div",{class:"vp-sticky-article-wrapper"},[c("div",{class:"title",onClick:()=>l(n.value.path)},[c(Ea),c("span",{class:"num"},n.value.items.length),p.value.article]),c("hr"),c("ul",{class:"vp-sticky-articles"},a.value.items.map(({info:v,path:m},h)=>c(ke,{appear:!0,delay:.08*(h+1)},()=>c("li",{class:"vp-sticky-article"},c(Me,{to:m},()=>v[_e.title])))))]):u.value==="category"?c("div",{class:"vp-category-wrapper"},[t.value?c("div",{class:"title",onClick:()=>l(s.value.path)},[c(Mo),c("span",{class:"num"},t.value),p.value.category]):null,c("hr"),c(ke,{delay:.04},()=>c(Yu))]):u.value==="tag"?c("div",{class:"vp-tag-wrapper"},[i.value?c("div",{class:"title",onClick:()=>l(o.value.path)},[c($o),c("span",{class:"num"},i.value),p.value.tag]):null,c("hr"),c(ke,{delay:.04},()=>c(Ju))]):c(ke,()=>c(z8)))])}}),Fa=I({name:"BlogWrapper",slots:Object,setup(e,{slots:n}){const{isMobile:s}=Ft();return()=>[c(Ui),c($i,{noSidebar:!0,noToc:!0},{default:()=>n.default(),navScreenBottom:()=>c(Ki),...s.value?{sidebar:()=>c(Xu)}:{}})]}});const ed=()=>c("aside",{class:"vp-blog-info-wrapper"},[c(ke,()=>c(Ki)),c(ke,{delay:.04},()=>c(Xu))]);ed.displayName="InfoPanel";var Na=ed,G8=I({name:"BlogPage",components:{CategoryList:Yu,TagList:Ju},setup(){const e=pe(),n=ge(),s=Mt(),t=Ht(),a=A(()=>n.value.blog||{}),o=A(()=>{const{key:l=""}=a.value;return l==="category"?"CategoryList":l==="tag"?"TagList":null}),i=A(()=>{const{name:l="",key:u=""}=a.value;return u==="category"?l?s.value.map[l].items:[]:u==="tag"?l?t.value.map[l].items:[]:[]});return()=>c(Fa,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(ke,()=>o.value?c(je(o.value)):null),a.value.name?c(ke,{appear:!0,delay:.24},()=>c(Wi,{key:e.value.path,items:i.value})):null]),c(ke,{delay:.16},()=>c(Na,{key:"blog"}))])))}});const K8="//theme-hope-assets.vuejs.press/hero/default.jpg";var j8=I({name:"BlogHero",slots:Object,setup(e,{slots:n}){const s=ge(),t=Ys(),a=xe(),o=A(()=>s.value.heroFullScreen??!1),i=A(()=>{const{heroText:u,heroImage:p,heroImageDark:d,heroAlt:v,heroImageStyle:m,tagline:h}=s.value;return{text:u??t.value.title??"Hello",image:p?ye(p):null,imageDark:d?ye(d):null,heroStyle:m,alt:v||u||"hero image",tagline:h??"",isFullScreen:o.value}}),l=A(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:d}=s.value;return{image:ie(u)?ye(u):u===!1?null:K8,imageDark:ie(p)?ye(p):null,bgStyle:d,isFullScreen:o.value}});return()=>{var u,p;return s.value.hero===!1?null:c("div",{ref:a,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!l.value.image}]},[((u=n.heroBg)==null?void 0:u.call(n,l.value))||[l.value.image?c("div",{class:["vp-blog-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?c("div",{class:"vp-blog-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((p=n.heroInfo)==null?void 0:p.call(n,i.value))||[c(ke,{appear:!0,type:"group",delay:.04},()=>[i.value.image?c("img",{key:"light",class:["vp-blog-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?c("img",{key:"dark",class:"vp-blog-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),c(ke,{appear:!0,delay:.08},()=>i.value.text?c("h1",{class:"vp-blog-hero-title"},i.value.text):null),c(ke,{appear:!0,delay:.12},()=>i.value.tagline?c("p",{class:"vp-blog-hero-description",innerHTML:i.value.tagline}):null)],i.value.isFullScreen?c("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[c(Ho),c(Ho)]):null])}}});const W8=["link","article","book","project","friend"];var q8=I({name:"ProjectPanel",components:{ArticleIcon:Ea,BookIcon:Ku,FriendIcon:qu,LinkIcon:ju,ProjectIcon:Wu},setup(){const e=ge(),n=Xs(),s=Vt(),t=(a="",o="icon")=>W8.includes(a)?c(je(`${a}-icon`)):ts(a)?c("img",{class:"vp-project-image",src:a,alt:o}):Tt(a)?c("img",{class:"vp-project-image",src:ye(a),alt:o}):c(We,{icon:a});return()=>{var a;return(a=e.value.projects)!=null&&a.length?c("div",{class:"vp-project-panel"},e.value.projects.map(({icon:o,link:i,name:l,desc:u},p)=>c("div",{class:["vp-project-card",{[`project${p%9}`]:!n.value}],onClick:()=>s(i)},[t(o,l),c("div",{class:"vp-project-name"},l),c("div",{class:"vp-project-desc"},u)]))):null}}}),Q8=I({name:"BlogHome",setup(){const e=Ut();return()=>c("div",{class:"vp-page vp-blog"},[c(j8),c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(ke,{appear:!0,delay:.16},()=>c(q8)),c(ke,{appear:!0,delay:.24},()=>c(Wi,{items:e.value.items}))]),c(ke,{appear:!0,delay:.16},()=>c(Na,{key:"blog"}))]),c(ke,{appear:!0,delay:.28},()=>c(Hi))])}});const nd=()=>c(Fa,()=>c(Q8));nd.displayName="BlogHomeLayout";var Z8=nd,Y8=I({name:"ArticleType",setup(){const e=pe(),n=$n(),s=ue(),t=Ut(),a=zi(),o=A(()=>{const i=s.value.blogLocales;return[{text:i.all,path:t.value.path},{text:i.star,path:a.value.path},...S8.map(({key:l,path:u})=>({text:i[l],path:u.replace(/^\//,n.value)}))]});return()=>c("ul",{class:"vp-article-type-wrapper"},o.value.map(i=>c("li",{class:["vp-article-type",{active:i.path===e.value.path}]},c(Me,{to:i.path},()=>i.text))))}}),J8=I({name:"BlogPage",setup(){const e=Va(),n=ge(),s=pe(),t=Ut(),a=zi(),o=A(()=>{const{key:i="",type:l}=n.value.blog||{};return i==="star"?a.value.items:l==="type"&&i?e.value.items:t.value.items});return()=>c(Fa,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(ke,()=>c(Y8)),c(ke,{appear:!0,delay:.24},()=>c(Wi,{key:s.value.path,items:o.value}))]),c(ke,{delay:.16},()=>c(Na,{key:"blog"}))])))}}),X8=I({name:"TimelineItems",setup(){const e=$t(),n=ue(),s=Gi(),t=A(()=>e.value.timeline||n.value.blogLocales.timelineTitle),a=A(()=>s.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>c("div",{class:"timeline-wrapper"},c("ul",{class:"timeline-content"},[c(ke,()=>c("li",{class:"motto"},t.value)),c(Ou,{items:a.value}),s.value.config.map(({year:o,items:i},l)=>c(ke,{appear:!0,delay:.08*(l+1),type:"group"},()=>[c("h3",{key:"title",id:o,class:"timeline-year-title"},c("span",o)),c("li",{key:"content",class:"timeline-year-list"},[c("ul",{class:"timeline-year-wrapper"},i.map(({date:u,info:p,path:d})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},u),c(Me,{class:"timeline-title",to:d},()=>p[_e.title])])))])]))]))}});const sd=()=>c(Fa,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(ke,{appear:!0,delay:.24},()=>c(X8))]),c(ke,{delay:.16},()=>c(Na,{key:"blog"}))])));sd.displayName="Timeline";var e3=sd;const Bs="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),uo=Array.from({length:64},(e,n)=>n),ta=e=>Array(e).fill(-1),Kn=[...ta(46),0,1,...uo.slice(54,64),...ta(7),...uo.slice(2,28),...ta(6),...uo.slice(28,54),...ta(5)],Dl=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Sl=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],td=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Uo=(e,n)=>{if(n<=0||n>e.length)throw Error(`Illegal len: ${n}`);let s=0,t,a;const o=[];for(;s<n;){if(t=e[s++]&255,o.push(Bs[t>>2&63]),t=(t&3)<<4,s>=n){o.push(Bs[t&63]);break}if(a=e[s++]&255,t|=a>>4&15,o.push(Bs[t&63]),t=(a&15)<<2,s>=n){o.push(Bs[t&63]);break}a=e[s++]&255,t|=a>>6&3,o.push(Bs[t&63]),o.push(Bs[a&63])}return o.join("")},n3=(e,n)=>{if(n<=0)throw Error(`Illegal len: ${n}`);const s=e.length;let t=0,a=0,o,i,l,u,p,d;const v=[];for(;t<s-1&&a<n&&(d=e.charCodeAt(t++),o=d<Kn.length?Kn[d]:-1,d=e.charCodeAt(t++),i=d<Kn.length?Kn[d]:-1,!(o==-1||i==-1||(p=o<<2>>>0,p|=(i&48)>>4,v.push(String.fromCharCode(p)),++a>=n||t>=s)||(d=e.charCodeAt(t++),l=d<Kn.length?Kn[d]:-1,l==-1)||(p=(i&15)<<4>>>0,p|=(l&60)>>2,v.push(String.fromCharCode(p)),++a>=n||t>=s)));)d=e.charCodeAt(t++),u=d<Kn.length?Kn[d]:-1,p=(l&3)<<6>>>0,p|=u,v.push(String.fromCharCode(p)),++a;return v.map(m=>m.charCodeAt(0))},s3=(e,n)=>{let s=null;for(typeof e=="number"&&(s=e,e=()=>null);s!==null||(s=e())!==null;)s<128?n(s&127):s<2048?(n(s>>6&31|192),n(s&63|128)):s<65536?(n(s>>12&15|224),n(s>>6&63|128),n(s&63|128)):(n(s>>18&7|240),n(s>>12&63|128),n(s>>6&63|128),n(s&63|128)),s=null},t3=(e,n)=>{let s,t=null;for(;(s=t!==null?t:e())!==null;){if(s>=55296&&s<=57343&&(t=e())!==null&&t>=56320&&t<=57343){n((s-55296)*1024+t-56320+65536),t=null;continue}n(s)}t!==null&&n(t)},a3=(e,n)=>{t3(e,function(s){s3(s,n)})},o3=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,i3=e=>{const n=[];let s=0;return a3(()=>s>=e.length?null:e.charCodeAt(s++),t=>{n.push(t)}),n},Bt=(e,n,s,t)=>{let a,o=e[n],i=e[n+1];return o^=s[0],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[1],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[2],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[3],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[4],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[5],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[6],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[7],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[8],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[9],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[10],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[11],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[12],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[13],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[14],a=t[o>>>24],a+=t[256|o>>16&255],a^=t[512|o>>8&255],a+=t[768|o&255],i^=a^s[15],a=t[i>>>24],a+=t[256|i>>16&255],a^=t[512|i>>8&255],a+=t[768|i&255],o^=a^s[16],e[n]=i^s[17],e[n+1]=o,e},Ds=(e,n)=>{let s=0;for(let t=0;t<4;++t)s=s<<8|e[n]&255,n=(n+1)%e.length;return{key:s,offp:n}},Ll=(e,n,s)=>{const t=n.length,a=s.length;let o=0,i=[0,0],l;for(let u=0;u<t;u++)l=Ds(e,o),o=l.offp,n[u]=n[u]^l.key;for(let u=0;u<t;u+=2)i=Bt(i,0,n,s),n[u]=i[0],n[u+1]=i[1];for(let u=0;u<a;u+=2)i=Bt(i,0,n,s),s[u]=i[0],s[u+1]=i[1]},r3=(e,n,s,t)=>{const a=s.length,o=t.length;let i=0,l=[0,0],u;for(let p=0;p<a;p++)u=Ds(n,i),i=u.offp,s[p]=s[p]^u.key;i=0;for(let p=0;p<a;p+=2)u=Ds(e,i),i=u.offp,l[0]^=u.key,u=Ds(e,i),i=u.offp,l[1]^=u.key,l=Bt(l,0,s,t),s[p]=l[0],s[p+1]=l[1];for(let p=0;p<o;p+=2)u=Ds(e,i),i=u.offp,l[0]^=u.key,u=Ds(e,i),i=u.offp,l[1]^=u.key,l=Bt(l,0,s,t),t[p]=l[0],t[p+1]=l[1]},Ol=(e,n,s,t,a)=>{const o=td.slice(),i=o.length;if(s<4||s>31){const m=new Error(`Illegal number of rounds (4-31): ${s}`);if(t===!1)return Promise.reject(m);throw m}if(n.length!==16){const m=new Error(`Illegal salt length: ${n.length} != 16`);if(t===!1)return Promise.reject(m);throw m}s=1<<s>>>0;let l,u,p=0,d;Int32Array?(l=new Int32Array(Dl),u=new Int32Array(Sl)):(l=Dl.slice(),u=Sl.slice()),r3(n,e,l,u);const v=()=>{if(a&&a(p/s),p<s){const m=Date.now();for(;p<s&&(p=p+1,Ll(e,l,u),Ll(n,l,u),!(Date.now()-m>100)););}else{for(p=0;p<64;p++)for(d=0;d<i>>1;d++)Bt(o,d<<1,l,u);const m=[];for(p=0;p<i;p++)m.push((o[p]>>24&255)>>>0),m.push((o[p]>>16&255)>>>0),m.push((o[p]>>8&255)>>>0),m.push((o[p]&255)>>>0);return t===!1?Promise.resolve(m):m}if(t===!1)return new Promise(m=>o3(()=>{v().then(m)}))};if(t===!1)return v();{let m;for(;;)if(typeof(m=v())<"u")return m||[]}},l3=e=>{var n;try{const{crypto:s,msCrypto:t}=window,a=new Uint32Array(e);return(n=s||t)==null||n.getRandomValues(a),Array.from(a)}catch{throw Error("WebCryptoAPI is not available")}},c3=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const n=[];return n.push("$2a$"),e<10&&n.push("0"),n.push(e.toString()),n.push("$"),n.push(Uo(l3(16),16)),n.join("")};function p3(e,n,s,t){if(typeof e!="string"||typeof n!="string"){const h=new Error("Invalid string / salt: Not a string");if(s===!1)return Promise.reject(h);throw h}let a,o;if(n.charAt(0)!=="$"||n.charAt(1)!=="2"){const h=new Error("Invalid salt version: "+n.substring(0,2));if(s===!1)return Promise.reject(h);throw h}if(n.charAt(2)==="$")a="\0",o=3;else{if(a=n.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||n.charAt(3)!=="$"){const h=Error("Invalid salt revision: "+n.substring(2,4));if(s===!1)return Promise.reject(h);throw h}o=4}if(n.charAt(o+2)>"$"){const h=new Error("Missing salt rounds");if(s===!1)return Promise.reject(h);throw h}const i=parseInt(n.substring(o,o+1),10)*10,l=parseInt(n.substring(o+1,o+2),10),u=i+l,p=n.substring(o+3,o+25);e+=a>="a"?"\0":"";const d=i3(e),v=n3(p,16),m=h=>{const k=[];return k.push("$2"),a>="a"&&k.push(a),k.push("$"),u<10&&k.push("0"),k.push(u.toString()),k.push("$"),k.push(Uo(v,v.length)),k.push(Uo(h,td.length*4-1)),k.join("")};return s===!1?Ol(d,v,u,!1,t).then(h=>m(h)):m(Ol(d,v,u,!0,t))}const u3=(e,n=10)=>{if(typeof n=="number"&&(n=c3(n)),typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return p3(e,n,!0)},zo=(e,n)=>{if(typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return n.length!==60?!1:u3(e,n.substring(0,n.length-31))===n},ad=()=>c(oe,{name:"lock"},()=>c("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));ad.displayName="LockIcon";var od=I({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:n}){const s=ge(),t=ue(),a=K(""),o=K(!1),i=K(!1),l=A(()=>t.value.encryptLocales);let u=null;const p=()=>{u&&clearTimeout(u),o.value=!1,n("verify",a.value,i.value),ns().then(()=>{o.value=!0,u=setTimeout(()=>{o.value=!1},1e3)})};return()=>c("div",{class:["vp-decrypt-layer",{expand:e.full||s.value.home}]},c("div",{class:"vp-decrypt-modal"},[c("div",{class:["vp-decrypt-hint",{tried:o.value}]},o.value?l.value.errorHint:c(ad,{"aria-label":l.value.iconLabel})),c("div",{class:"vp-decrypt-input"},[c("input",{type:"password",value:a.value,placeholder:l.value.placeholder,onInput:({target:d})=>{a.value=d.value},onKeydown:({key:d})=>{d==="Enter"&&p()}})]),c("div",{class:"vp-remember-password"},[c("input",{type:"checkbox",value:i.value,onChange:()=>i.value=!i.value}),l.value.remember]),c("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>p()},"OK")]))}});const id=()=>{const e=as();return A(()=>e.value.encrypt||{})},xl="VUEPRESS_HOPE_GLOBAL_TOKEN",d3=()=>{const e=id(),n=Es(xl,""),s=Op(xl,""),t=A(()=>{const{global:o=!1,admin:i=[]}=e.value;return o&&i.length>0}),a=A(()=>{if(t.value){if(n.value)return e.value.admin.some(o=>zo(n.value,o));if(s.value)return e.value.admin.some(o=>zo(s.value,o))}return!1});return{isEncrypted:t,isDecrypted:a,validate:(o,i=!1)=>{(i?n:s).value=o}}},vo=(e="",n)=>!!e&&zo(e,n),Rl="VUEPRESS_HOPE_PATH_TOKEN",v3=()=>{const e=pe(),n=id(),s=Es(Rl,{}),t=Op(Rl,{}),a=i=>Ot(n.value.config)?an(n.value.config).filter(l=>bs(decodeURI(i),l)).sort((l,u)=>u.length-l.length):[],o=i=>{const l=a(i);if(l.length>0){const{config:u={}}=n.value;return{isEncrypted:!0,isDecrypted:l.some(p=>s.value[p]&&u[p].some(d=>vo(s.value[p],d))||t.value[p]&&u[p].some(d=>vo(t.value[p],d)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:A(()=>o(e.value.path)),getStatus:o,validate:(i,l=!1)=>{const{config:u={}}=n.value,p=a(e.value.path);for(const d of p)if(u[d].filter(v=>vo(i,v))){(l?s:t).value[d]=i;break}}}};var m3=I({name:"GlobalEncrypt",slots:Object,setup(e,{slots:n}){const{isDecrypted:s,isEncrypted:t,validate:a}=d3(),o=K(!1);return de(()=>{o.value=!0}),()=>c(Ru,()=>t.value?o.value?s.value?n.default():c(od,{full:!0,onVerify:a}):null:n.default())}}),b3=I({name:"LocalEncrypt",slots:Object,setup(e,{slots:n}){const{status:s,validate:t}=v3(),a=K(!1);return de(()=>{a.value=!0}),()=>{const{isEncrypted:o,isDecrypted:i}=s.value;return o?a.value?i?n.default():c(od,{full:!0,onVerify:t}):null:n.default()}}});Fb(We);const h3=on({enhance:({app:e,router:n})=>{const{scrollBehavior:s}=n.options;n.options.scrollBehavior=async(...t)=>(await xu().wait(),s(...t)),wh(e),e.component("HopeIcon",We),e.component("VPLink",Me),e.component("BloggerInfo",Ki),e.component("GlobalEncrypt",m3),e.component("LocalEncrypt",b3)},setup:()=>{Ph(),Oh(),M8()},layouts:{Layout:y8,NotFound:B8,BlogCategory:G8,BlogHome:Z8,BlogType:J8,Timeline:e3}}),k3=()=>c(oe,{name:"heading"},()=>c("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));k3.displayName="HeadingIcon";const f3=()=>c(oe,{name:"heart"},()=>c("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));f3.displayName="HeartIcon";const g3=()=>c(oe,{name:"history"},()=>c("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));g3.displayName="HistoryIcon";const E3=()=>c(oe,{name:"title"},()=>c("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));E3.displayName="TitleIcon";const qi=()=>c(oe,{name:"search"},()=>c("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));qi.displayName="SearchIcon";const rd=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[c("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},c("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),c("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},c("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),c("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},c("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);rd.displayName="LoadingIcon";const ld=({hint:e})=>c("div",{class:"search-pro-result-wrapper loading"},[c(rd),e]);ld.displayName="SearchLoading";const _3='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';var y3={},A3={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",searching:"搜索中",defaultTitle:"文档",select:"选择",navigate:"切换",autocomplete:"自动补全",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},B3={searchDelay:150,suggestDelay:60,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro-worker-XPathResult.js"};const cd=B3,hk=y3,pd=cd.hotKeys,Qi=A3;new URL("data:application/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBDLGdldFN0b3JlZEZpZWxkcyBhcyBSLGF1dG9TdWdnZXN0IGFzIFQsbG9hZEpTT05JbmRleCBhcyB3fWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0ICQgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4IjtpbXBvcnR7ZW50cmllcyBhcyBFfWZyb20idnVlcHJlc3Mtc2hhcmVkL2NsaWVudCI7Y29uc3QgeD0obCxlKT0+e2NvbnN0IG49bC50b0xvd2VyQ2FzZSgpLHM9ZS50b0xvd2VyQ2FzZSgpLG89W107bGV0IHQ9MCxyPTA7Y29uc3QgaT0oYyxnPSExKT0+e2xldCBwPSIiO3I9PT0wP3A9Yy5sZW5ndGg+MjA/YOKApiAke2Muc2xpY2UoLTIwKX1gOmM6Zz9wPWMubGVuZ3RoK3I+MTAwP2Ake2Muc2xpY2UoMCwxMDAtcil94oCmIGA6YzpwPWMubGVuZ3RoPjIwP2Ake2Muc2xpY2UoMCwyMCl9IOKApiAke2Muc2xpY2UoLTIwKX1gOmMscCYmby5wdXNoKHApLHIrPXAubGVuZ3RoLGd8fChvLnB1c2goWyJtYXJrIixlXSkscis9ZS5sZW5ndGgscj49MTAwJiZvLnB1c2goIiDigKYiKSl9O2xldCBoPW4uaW5kZXhPZihzLHQpO2lmKGg9PT0tMSlyZXR1cm4gbnVsbDtmb3IoO2g+PTA7KXtjb25zdCBjPWgrcy5sZW5ndGg7aWYoaShsLnNsaWNlKHQsaCkpLHQ9YyxyPjEwMClicmVhaztoPW4uaW5kZXhPZihzLHQpfXJldHVybiByPDEwMCYmaShsLnNsaWNlKHQpLCEwKSxvfSxTPS9bXHU0ZTAwLVx1OWZhNV0vZyxNPShsPXt9KT0+KHtmdXp6eTouMixwcmVmaXg6ITAscHJvY2Vzc1Rlcm06ZT0+e2NvbnN0IG49ZS5tYXRjaChTKXx8W10scz1lLnJlcGxhY2UoUywiIikudG9Mb3dlckNhc2UoKTtyZXR1cm4gcz9bcywuLi5uXTpbLi4ubl19LC4uLmx9KSxGPShsLGUpPT5lLmNvbnRlbnRzLnJlZHVjZSgobixbLHNdKT0+bitzLDApLWwuY29udGVudHMucmVkdWNlKChuLFssc10pPT5uK3MsMCksXz0obCxlKT0+TWF0aC5tYXgoLi4uZS5jb250ZW50cy5tYXAoKFssbl0pPT5uKSktTWF0aC5tYXgoLi4ubC5jb250ZW50cy5tYXAoKFssbl0pPT5uKSksTz0obCxlLG49e30pPT57Y29uc3Qgcz17fTtyZXR1cm4gQyhlLGwsTSh7Ym9vc3Q6e2g6Mix0OjEsYzo0fSwuLi5ufSkpLmZvckVhY2gobz0+e2NvbnN0e2lkOnQsdGVybXM6cixzY29yZTppfT1vLGg9dC5pbmNsdWRlcygiQCIpLGM9dC5pbmNsdWRlcygiIyIpLFtnLHBdPXQuc3BsaXQoL1sjQF0vKSxtPXIuc29ydCgodSxhKT0+dS5sZW5ndGgtYS5sZW5ndGgpLmZpbHRlcigodSxhKT0+ci5zbGljZShhKzEpLmV2ZXJ5KGY9PiFmLmluY2x1ZGVzKHUpKSkse2NvbnRlbnRzOmR9PXNbZ10/Pz17dGl0bGU6IiIsY29udGVudHM6W119O2lmKGgpZC5wdXNoKFt7dHlwZToiY3VzdG9tRmllbGQiLGtleTpnLGluZGV4OnAsZGlzcGxheTptLm1hcCh1PT5vLmMubWFwKGE9PngoYSx1KSkpLmZsYXQoKS5maWx0ZXIodT0+dSE9PW51bGwpfSxpXSk7ZWxzZXtjb25zdCB1PW0ubWFwKGE9Pngoby5oLGEpKS5maWx0ZXIoYT0+YSE9PW51bGwpO2lmKHUubGVuZ3RoJiZkLnB1c2goW3t0eXBlOmM/ImhlYWRpbmciOiJ0aXRsZSIsa2V5OmcsLi4uYyYme2FuY2hvcjpwfSxkaXNwbGF5OnV9LGldKSwidCJpbiBvKWZvcihjb25zdCBhIG9mIG8udCl7Y29uc3QgZj1tLm1hcCh5PT54KGEseSkpLmZpbHRlcih5PT55IT09bnVsbCk7Zi5sZW5ndGgmJmQucHVzaChbe3R5cGU6InRleHQiLGtleTpnLC4uLmMmJnthbmNob3I6cH0sZGlzcGxheTpmfSxpXSl9fX0pLEUocykuc29ydCgoWyxvXSxbLHRdKT0+U0VBUkNIX1BST19TT1JUX1NUUkFURUdZPT09InRvdGFsIj9GKG8sdCk6XyhvLHQpKS5tYXAoKFtvLHt0aXRsZTp0LGNvbnRlbnRzOnJ9XSk9PntpZighdCl7Y29uc3QgaT1SKGUsbyk7aSYmKHQ9aS5oKX1yZXR1cm57dGl0bGU6dCxjb250ZW50czpyLm1hcCgoW2ldKT0+aSl9fSl9LGs9KGwsZSxuPXt9KT0+VChlLGwsTShuKSkubWFwKCh7c3VnZ2VzdGlvbjpzfSk9PnMpO3NlbGYub25tZXNzYWdlPWFzeW5jKHtkYXRhOnt0eXBlOmw9ImFsbCIscXVlcnk6ZSxsb2NhbGU6bixvcHRpb25zOnN9fSk9Pntjb25zdHtkZWZhdWx0Om99PWF3YWl0ICRbbl0oKSx0PXcobyx7ZmllbGRzOlsiaCIsInQiLCJjIl0sc3RvcmVGaWVsZHM6WyJoIiwidCIsImMiXX0pO2w9PT0ic3VnZ2VzdCI/c2VsZi5wb3N0TWVzc2FnZShrKGUsdCxzKSk6bD09PSJzZWFyY2giP3NlbGYucG9zdE1lc3NhZ2UoTyhlLHQscykpOnNlbGYucG9zdE1lc3NhZ2Uoe3N1Z2dlc3Rpb25zOmsoZSx0LHMpLHJlc3VsdHM6TyhlLHQscyl9KX07Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcAo=",import.meta.url);let w3={};const ud=Symbol(""),kk=()=>ce(ud),P3=e=>{e.provide(ud,w3)},fk=()=>{const e=new Worker(`/${cd.worker}`,{}),n=[];return e.addEventListener("message",({data:s})=>{const{resolve:t}=n.shift();t(s)}),{search:s=>new Promise((t,a)=>{e.postMessage(s),n.push({resolve:t,reject:a})}),terminate:()=>{e.terminate(),n.forEach(({reject:s})=>s(new Error("Worker has been terminated.")))}}},D3=(e,n=!1)=>{const s=K(0),t=A(()=>e.value[s.value]),a=()=>{s.value=s.value>0?s.value-1:e.value.length-1},o=()=>{s.value=s.value<e.value.length-1?s.value+1:0};return le(e,()=>{n||(s.value=0)}),{index:s,item:t,prev:a,next:o}},Zi=Symbol(""),S3=()=>{const e=K(!1);dn(Zi,e)},L3=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,O3=e=>pd.some(n=>{const{key:s,ctrl:t=!1,shift:a=!1,alt:o=!1,meta:i=!1}=n;return s===e.key&&t===e.ctrlKey&&a===e.shiftKey&&o===e.altKey&&i===e.metaKey}),x3='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',R3='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',T3='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',I3='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',C3=e=>({suggestions:K([])}),mo=pd[0];var V3=I({name:"SearchBox",setup(){const e=Ln(Qi),n=ce(Zi),s=K(!1),t=A(()=>mo?[(s.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((a,o)=>mo[["ctrl","shift","alt","meta"][o]]),mo.key.toUpperCase()]:null);return Ae("keydown",a=>{!n.value&&O3(a)&&!L3(a.target)&&(a.preventDefault(),n.value=!0)}),de(()=>{const{userAgent:a}=navigator;s.value=S0(a)||D0(a)||kp(a)}),()=>[c("button",{type:"button",class:"search-pro-button",role:"search","aria-label":e.value.search,onClick:()=>{n.value=!0}},[c(qi),c("div",{class:"search-pro-placeholder"},e.value.search),t.value?c("div",{class:"search-pro-key-hints"},t.value.map(a=>c("kbd",{class:"search-pro-key"},a))):null])]}});const F3=b({loader:()=>r(()=>import("./SearchResult-vBGzz242.js"),__vite__mapDeps([])),loadingComponent:()=>{const e=Ln(Qi);return c(ld,{hint:e.value.loading})}});var N3=I({name:"SearchModal",setup(){const e=ce(Zi),n=Ys(),s=Ap(),t=Ln(Qi),a=K(""),{suggestions:o}=C3(),i=K(!1),{index:l,prev:u,next:p}=D3(o),d=xe(),v=xe(),m=(h=l.value)=>{a.value=o.value[h],i.value=!1};return Ae("keydown",h=>{i.value?h.key==="ArrowUp"?u():h.key==="ArrowDown"?p():h.key==="Enter"?m():h.key==="Escape"&&(i.value=!1):h.key==="Escape"&&(e.value=!1)}),de(()=>{const h=Ri(document.body);le(e,async k=>{var E;h.value=k,k&&(await ns(),(E=d.value)==null||E.focus())}),nb(v,()=>{i.value=!1}),fs(()=>{h.value=!1})}),()=>e.value?c("div",{class:"search-pro-modal-wrapper"},[c("div",{class:"search-pro-mask",onClick:()=>{e.value=!1,a.value=""}}),c("div",{class:"search-pro-modal"},[c("div",{class:"search-pro-box"},[c("form",[c("label",{for:"search-pro","aria-label":t.value.search},c(qi)),c("input",{ref:d,type:"search",class:"search-pro-input",id:"search-pro",placeholder:t.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${n.value.title}-search`,value:a.value,"aria-controls":"search-pro-results",onKeydown:h=>{const{key:k}=h;o.value.length&&(k==="Tab"?(m(),h.preventDefault()):(k==="ArrowDown"||k==="ArrowUp"||k==="Escape")&&h.preventDefault())},onInput:({target:h})=>{a.value=h.value,i.value=!0,l.value=0}}),a.value?c("button",{type:"reset",class:"search-pro-clear-button",innerHTML:_3,onClick:()=>{a.value=""}}):null,null]),c("button",{type:"button",class:"search-pro-close-button",onClick:()=>{e.value=!1,a.value=""}},t.value.cancel)]),c(F3,{query:a.value,isFocusing:!i.value,onClose:()=>{e.value=!1},onUpdateQuery:h=>{a.value=h}}),s.value?null:c("div",{class:"search-pro-hints"},[c("span",{class:"search-pro-hint"},[c("kbd",{innerHTML:x3}),t.value.select]),c("span",{class:"search-pro-hint"},[c("kbd",{innerHTML:T3}),c("kbd",{innerHTML:R3}),t.value.navigate]),c("span",{class:"search-pro-hint"},[c("kbd",{innerHTML:I3}),t.value.exit])])])]):null}}),M3=on({enhance({app:e}){P3(e),e.component("SearchBox",V3)},setup(){S3()},rootComponents:[N3]});const $3=on({enhance:()=>{let e=document.createElement("script");e.async=!0,e.src="https://analytics.umami.is/script.js",e.setAttribute("data-website-id","eecd3f56-5668-4c9e-b123-b2853b91a310"),document.body.appendChild(e)}});z2({setup:async()=>{await r(()=>import("./index-3VcEt7fa.js"),__vite__mapDeps([383,382]))}});const H3={},aa=[o1,Lb,Vb,Ub,jb,Zb,n2,c2,f2,th,mh,h3,M3,$3,H3],U3=[["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/README.md"]],["v-28f7b2e8","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/001-PyQt%E4%BB%8B%E7%BB%8D%E4%B8%8E%E5%AE%89%E8%A3%85.html",{d:1698580921e3,e:`<h1> 001-PyQt介绍与安装</h1>
<h2> 一、介绍</h2>
<h3> 1. Qt</h3>
<figure><figcaption>Qt 是什么</figcaption></figure>
<p>Qt（官方发音 <code>[kju:t]</code>）是一个跨平台的C++开发库，主要用来开发图形用户界面（Graphical User Interface，GUI）程序</p>
<p>Qt 是纯 C++ 开发的，正常情况下需要先学习C语言、然后在学习C++然后才能使用Qt开发带界面的程序</p>
<p>多亏了开源社区使得<strong>Qt 还可以用Python、Ruby、Perl 等脚本语言进行开发。</strong></p>`,r:{minutes:2.75,words:824},y:"a",t:"001-PyQt介绍与安装"},["/PyQt5快速上手-王铭东/001-PyQt介绍与安装.html","/PyQt5快速上手-王铭东/001-PyQt介绍与安装.md",":md"]],["v-736cf379","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/002-PyQt%E5%9F%BA%E6%9C%ACUI.html",{d:1698580921e3,e:`<h1> 002-PyQt基本UI</h1>
<h2> 一、第一个PyQt程序</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.42,words:1027},y:"a",t:"002-PyQt基本UI"},["/PyQt5快速上手-王铭东/002-PyQt基本UI.html","/PyQt5快速上手-王铭东/002-PyQt基本UI.md",":md"]],["v-548167c6","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/003-%E5%B8%83%E5%B1%80.html",{d:1698580921e3,e:`<h1> 003-布局</h1>
<p>在Qt里面布局分为四个大类 ：</p>
<ul>
<li>QBoxLayout</li>
<li>QGridLayout</li>
<li>QFormLayout</li>
<li>QStackedLayout</li>
</ul>
<h2> 一、QBoxLayout</h2>
<p>直译为：盒子布局</p>
<p>一般使用它的两个子类<code>QHBoxLayout</code>  和  <code>QVBoxLayout</code> 负责水平和垂直布局</p>
<p>垂直布局示例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.53,words:759},y:"a",t:"003-布局"},["/PyQt5快速上手-王铭东/003-布局.html","/PyQt5快速上手-王铭东/003-布局.md",":md"]],["v-30bf7f7c","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/004-%E5%B8%83%E5%B1%802.html",{d:1698580921e3,e:`<h1> 004-布局2</h1>
<h2> 一、QFormLayout</h2>
<p>一般适用于提交数据<strong>form表单</strong>。比如： 登录，注册类似的场景</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.01,words:603},y:"a",t:"004-布局2"},["/PyQt5快速上手-王铭东/004-布局2.html","/PyQt5快速上手-王铭东/004-布局2.md",":md"]],["v-48858f42","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/005-%E7%AA%97%E5%8F%A3.html",{d:1698580921e3,e:`<h1> 005-窗口</h1>
<h2> 一、分类</h2>
<p>在Qt中，生成窗口有三种方式：  <code>QWidget</code>  |  <code>QMainWindow</code> | <code>QDialog</code></p>
<h3> 1. QWidget</h3>
<p>控件和窗口的父类 ，自由度高（什么都东西都没有），没有划分菜单、工具栏、状态栏、主窗口 等区域</p>
<h3> 2. QMainWindow</h3>
<p>是<code> QWidget</code>的子类，包含菜单栏，工具栏，状态栏，标题栏等，中间部分则为主窗口区域</p>
<h3> 3. QDialog</h3>`,r:{minutes:1.66,words:498},y:"a",t:"005-窗口"},["/PyQt5快速上手-王铭东/005-窗口.html","/PyQt5快速上手-王铭东/005-窗口.md",":md"]],["v-6c1110d1","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/006-%E4%BF%A1%E5%8F%B7%E4%B8%8E%E6%A7%BD.html",{d:1698580921e3,e:`<h1> 006-信号与槽</h1>
<h2> 一、说明</h2>
<p><code>信号</code>和<code>槽</code>是 Qt的核心内容</p>
<h3> 1. 信号(signal)</h3>
<p>其实就是事件（按钮点击 、内容发生改变 、窗口的关闭事件） 或者是 状态 （check选中了， togglebutton 切换。）</p>
<p>当程序触发了某种状态或者发生了某种事件（比如：按钮被点击了, 内容改变等等），那么即可发射出来一个<code>信号</code>。</p>
<h3> 2. 槽( slot)</h3>
<p>若想捕获这个信号，然后执行相应的逻辑代码，那么就需要使用到 <code>槽</code> ， <code>槽</code>实际上是一个函数， 当<code>信号</code>发射出来后，会执行与之绑定的<code>槽</code>函数</p>`,r:{minutes:3.25,words:976},y:"a",t:"006-信号与槽"},["/PyQt5快速上手-王铭东/006-信号与槽.html","/PyQt5快速上手-王铭东/006-信号与槽.md",":md"]],["v-2db1247c","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/007-Qt%20Designer.html",{d:1698580921e3,e:`<h1> 007-Qt Designer</h1>
<h2> 一、介绍</h2>
<p>纯靠代码来编写界面，效率属实是有点底，今天我们用另外一个辅助设计图形化的软件 <code>QT Designer</code></p>
<h3> 1. 下载</h3>
<p>Mac版本：[http://download.codetutor.top/software/Mac/Qt%20Designer.dmg](http://download.codetutor.top/software/Mac/Qt Designer.dmg)</p>
<p>Windows版本：[http://download.codetutor.top/software/win/Qt%20Designer%20Setup.exe](http://download.codetutor.top/software/win/Qt Designer Setup.exe)</p>`,r:{minutes:2.98,words:895},y:"a",t:"007-Qt Designer"},["/PyQt5快速上手-王铭东/007-Qt Designer.html","/PyQt5快速上手-王铭东/007-Qt Designer.md",":md"]],["v-580a4400","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/008-PyQt%E5%A4%9A%E7%BA%BF%E7%A8%8B.html",{d:1698580921e3,e:`<h1> 008-PyQt多线程</h1>
<h2> 1. 引入</h2>
<p>将上一节课讲解的最后一个FeiQQ登录的按钮，适当修改代码，详细如下</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.17,words:652},y:"a",t:"008-PyQt多线程"},["/PyQt5快速上手-王铭东/008-PyQt多线程.html","/PyQt5快速上手-王铭东/008-PyQt多线程.md",":md"]],["v-c47f0884","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/009-%E6%89%93%E5%8C%85%E4%B8%BA%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%A8%8B%E5%BA%8F.html",{d:1698580921e3,e:`<h1> 009-Mac下，发布PyQT为app程序</h1>
<h2> 方式1：使用pyinstaller发布(推荐)</h2>
<h4> 1. 安装</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.98,words:294},y:"a",t:"009-Mac下，发布PyQT为app程序"},["/PyQt5快速上手-王铭东/009-打包为可执行程序.html","/PyQt5快速上手-王铭东/009-打包为可执行程序.md",":md"]],["v-fd1808c0","/about/friend.html",{d:1699861302e3,e:`<h1> 友情链接</h1>
<h3> 一个模板</h3>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>&lt;VPCard
  title="运维开发绿皮书"
  desc="放置我的笔记、搜集、摘录、实践，保持好奇心。看文需谨慎，后果很严重<span class="token tag">!</span>"
  logo="https<span class="token punctuation">:</span>//paper<span class="token punctuation">-</span>dragon.github.io/logo.svg"
  link="https<span class="token punctuation">:</span>//paper<span class="token punctuation">-</span>dragon.github.io/"
  background="rgba(253<span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> 0.15)"
/<span class="token punctuation">&gt;</span>

<span class="token comment"># 友链申请 https://paper-dragon.github.io/about/friend.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.26,words:379},y:"a",t:"友情链接"},[":md"]],["v-513bdf66","/about/me.html",{d:1699861302e3,e:`<h1> 我</h1>

`,r:{minutes:.81,words:243},y:"a",t:"我"},[":md"]],["v-5491f884","/note-book/",{d:1691939318e3,c:["笔记"],e:`<h1> 运维开发绿皮书</h1>
<h1> 写在最前面的</h1>
<blockquote>
<p>如果你对我的文档有什么看法或者想把自己的文档加进来一起编辑，请点击左上角的编辑此页面编辑，可以在代码仓库直接修改，由作者审核后公布。
本网站使用 git 工具管理的<strong>分布式</strong>笔记，不必担心数据丢失，欢迎各位大佬添加自己的笔记到分布式仓库！！ 顺手可以点一下 <a href="https://gitee.com/PaperDragon/note-book/star" target="_blank" rel="noopener noreferrer">star⭐</a>，这个是对作者的支持！</p>
</blockquote>`,r:{minutes:1.97,words:592},y:"a",t:"笔记",i:"laptop-code"},["/note-book/README.md"]],["v-2776dc09","/note-book/%E6%9D%80%E4%B8%8D%E6%AD%BB%E7%9A%84%E8%BF%9B%E7%A8%8B.html",{d:1688688e6,l:"2023年7月7日",c:"网络安全",e:`<h1> 杀不死的进程</h1>
<h2> 架构图</h2>
<figure><figcaption>无标题</figcaption></figure>
<h2> 从概念上分析</h2>
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
</blockquote>`,r:{minutes:8.06,words:2419},y:"a",t:"杀不死的进程",i:"computer"},["/note-book/杀不死的进程.html","/note-book/杀不死的进程.md",":md"]],["v-d440f426","/tools/",{y:"p",t:"工具集合",i:"splotch"},["/tools/README.md"]],["v-01868d8e","/note-book/AI-Training/torch%20%E7%8E%AF%E5%A2%83.html",{d:1691939318e3,e:`<h1> Torch部署</h1>
<h1> 安装Anaconda</h1>
<p>推荐直接上官网下载
<a href="https://www.anaconda.com/products/individual" target="_blank" rel="noopener noreferrer">https://www.anaconda.com/products/individua</a></p>
<h1> 安装CUDA和cuDNN</h1>
<h2> 安装显卡驱动</h2>
<p>首先需要下载和安装显卡驱动，进入下面网址选择合适的显卡驱动下载并按照提示安装。如果已安装此处略过。
<a href="https://www.nvidia.cn/geforce/drivers/" target="_blank" rel="noopener noreferrer">https://www.nvidia.cn/geforce/drivers/</a></p>`,r:{minutes:1.95,words:585},y:"a",t:"Torch部署"},["/note-book/AI-Training/torch 环境.html","/note-book/AI-Training/torch 环境.md",":md"]],["v-9ef1da18","/note-book/AI-Training/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%BC%80%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%92%8C%E9%97%AD%E6%BA%90%E9%A9%B1%E5%8A%A8%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98.html",{d:1699592127e3,e:`<h1> 英伟达开源驱动和闭源驱动冲突问题</h1>
<h2> 起因</h2>
<p>今天朋友安装驱动遇到了一些问题，给了一张日志图片问我怎么办，我看着显示报错最后一行显示 PCI-E xxx.xxxx.xxx
nouveau。就是nvidia显卡驱动的问题八九不离十了。</p>
<p>nvidia给了不同类型的驱动多种版本，开源驱动对Linux支持较差，在切换闭源官方驱动的时候经常出现各种问题。</p>
<figure><figcaption>image-20231110113058910</figcaption></figure>
<p>下面是安装步骤的总结</p>
<h2> 正常安装步骤</h2>`,r:{minutes:1.47,words:440},y:"a",t:"英伟达开源驱动和闭源驱动冲突问题"},["/note-book/AI-Training/英伟达开源驱动和闭源驱动冲突问题.html","/note-book/AI-Training/英伟达开源驱动和闭源驱动冲突问题.md",":md"]],["v-0300e138","/note-book/Android/Ubuntu%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85Android%20SDK.html",{d:1691939318e3,e:`<h1> Ubuntu命令行安装Android SDK</h1>
<h2> 安装步骤</h2>
<ol>
<li>新建 <strong>android-sdk</strong> 作为工作目录。</li>
<li>下载命令行工具 <a href="https://www.jb51.cc/tag/sdkman/" target="_blank" rel="noopener noreferrer">sdkman</a>ager: <code>wget https://dl.google.com/android/repository/commandlinetools-linux-7302050_latest.zip</code></li>
<li>解压：<code>unzip commandlinetools-linux-7302050_latest.zip</code>，进入目录如下所示</li>
<li>![image-20230620102354072](Ubuntu命令行安装Android SDK.assets/image-20230620102354072.png)</li>
<li>进入 <strong>cmdline-tools</strong> 目录，执行 <code>./bin/sdkmanager</code> 报错 “Error: <a href="https://www.jb51.cc/tag/Could/" target="_blank" rel="noopener noreferrer">Could</a> not deter<a href="https://www.jb51.cc/tag/mine/" target="_blank" rel="noopener noreferrer">mine</a> SDK root.”</li>
<li>在当前目录新建 <strong>latest</strong> 目录，并将原 <strong>cmdline-tools</strong> 下的所有<a href="https://www.jb51.cc/tag/wenjian/" target="_blank" rel="noopener noreferrer">文件</a>移至 <strong>latest</strong>下，操作如下：</li>
</ol>`,r:{minutes:.64,words:192},y:"a",t:"Ubuntu命令行安装Android SDK"},["/note-book/Android/Ubuntu命令行安装Android SDK.html","/note-book/Android/Ubuntu命令行安装Android SDK.md",":md"]],["v-a9b33774","/note-book/Btrfs/",{d:1691939318e3,e:`<h1> Linux 文件系统的未来 btrfs</h1>
<h2> Btrfs 简介</h2>
<p>文件系统似乎是内核中比较稳定的部分，多年来，人们一直使用 ext2/3，ext 文件系统以其卓越的稳定性成为了事实上的 Linux 标准文件系统。近年来 ext2/3  暴露出了一些扩展性问题，于是便催生了 ext4 。在 2008 年发布的 Linux2.6.19 内核中集成了 ext4 的 dev 版本。  2.6.28 内核发布时，ext4 结束了开发版，开始接受用户的使用。似乎 ext 就将成为 Linux 文件系统的代名词。然而当您阅读很多有关 ext4 的文章时，会发现都不约而同地提到了 btrfs，并认为 ext4 将是一个过渡的文件系统。 ext4 的作者 Theodore  Tso 也盛赞 btrfs 并认为 btrfs 将成为下一代 Linux 标准文件系统。 Oracle，IBM， Intel 等厂商也对  btrfs 表现出了极大的关注，投入了资金和人力。为什么 btrfs 如此受人瞩目呢。这便是本文首先想探讨的问题。</p>`,r:{minutes:24.2,words:7260},y:"a",t:"Linux 文件系统的未来 btrfs"},["/note-book/Btrfs/README.md"]],["v-1d16fbc1","/note-book/Btrfs/Snapper%E7%8E%A9%E8%BD%ACbtrfs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`<h1> Snapper玩转btrfs文件系统</h1>
<blockquote>
<p>https://zhuanlan.zhihu.com/p/31082518</p>
</blockquote>
<h2> <strong>配置 snapper</strong></h2>
<p>在 Btrfs 中，snapper 是以子卷为单位管理快照的。我们要先为子卷建立配置文件才能管理快照。</p>
<p>这里我们不另外划分子卷，直接以 Btrfs 挂载点的根目录来进行操作（根目录也算是一个子卷）。</p>
<h3> 4.1 创建配置文件</h3>
<p>命令基本用法</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>snapper -c &lt;配置名称&gt; create-config &lt;子卷路径&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.89,words:1467},y:"a",t:"Snapper玩转btrfs文件系统"},["/note-book/Btrfs/Snapper玩转btrfs文件系统.html","/note-book/Btrfs/Snapper玩转btrfs文件系统.md",":md"]],["v-47c36178","/note-book/Btrfs/btrfs%E7%9A%84%E4%BD%BF%E7%94%A8.html",{d:1691939318e3,e:`<h1> BTRFS 使用简介</h1>
<p>了解了 btrfs 的特性，想必您一定想亲身体验一下 btrfs 的使用。本章将简要介绍如何使用 btrfs 。</p>
<h2> 创建文件系统</h2>
<p>mkfs.btrfs 命令建立一个 btrfs 格式的文件系统。可以用如下命令在设备 nvme0n2,nvme0n3上建立一个 btrfs 文件系统，并将其挂载到 /mnt 目录下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># mkfs.btrfs -f -L mydata /dev/nvme0n2 /dev/nvme0n3</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.08,words:3623},y:"a",t:"BTRFS 使用简介"},["/note-book/Btrfs/btrfs的使用.html","/note-book/Btrfs/btrfs的使用.md",":md"]],["v-2f2e2cf4","/note-book/Btrfs/some%20device%20missing%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`<h1> *** Some devices missing</h1>
<h2> 问题原因：</h2>
<p>因为创建btrfs时使用了-f，所以硬盘被另一个btrfs抢走了，blkid改变</p>
<h2> 问题描述</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fedora ~<span class="token punctuation">]</span><span class="token comment"># btrfs fi show</span>
warning, device <span class="token number">2</span> is missing
warning, device <span class="token number">1</span> is missing
WARNING: could not setup csum tree, skipping it
Label: <span class="token string">'mydata'</span>  uuid: b2daf230-bd04-4ca5-ac2f-2b7c4a8f1ac4
        Total devices <span class="token number">3</span> FS bytes used <span class="token number">256</span>.00KiB
        devid    <span class="token number">3</span> size <span class="token number">20</span>.00GiB used <span class="token number">144</span>.00MiB path /dev/nvme0n4
        *** Some devices missing

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.61,words:182},y:"a",t:"*** Some devices missing"},["/note-book/Btrfs/some device missing方法.html","/note-book/Btrfs/some device missing方法.md",":md"]],["v-4b450dee","/note-book/CoreDNS/",{d:1691939318e3,c:["CoreDNS"],r:{minutes:.03,words:9},y:"a",t:"CoreDNS",i:"laptop-code"},["/note-book/CoreDNS/README.md"]],["v-756d3903","/note-book/CoreDNS/ext-plugin-redis.html",{d:1691939318e3,e:`<h1> 使用Redis插件</h1>
<h2> Description</h2>
<p><em>redis</em> enables reading zone data from redis database.
this plugin should be located right next to <em>etcd</em> in <em>plugins.cfg</em></p>
<h2> Syntax</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.57,words:472},y:"a",t:"使用Redis插件"},[":md"]],["v-2ab375a4","/note-book/CoreDNS/%E7%90%86%E8%A7%A3CoreDNS.html",{d:1691939318e3,e:`<h1> 理解CoreDNS</h1>
<h2> 什么是CoreDNS【官方解释】</h2>
<p>CoreDNS 是一个 DNS 服务器。它是用<a href="https://golang.org/" target="_blank" rel="noopener noreferrer">Go</a>编写的。</p>
<p>CoreDNS 不同于其他 DNS 服务器，例如（所有优秀的） <a href="https://www.isc.org/bind/" target="_blank" rel="noopener noreferrer">BIND</a>、 <a href="https://www.knot-dns.cz/" target="_blank" rel="noopener noreferrer">Knot</a>、 <a href="https://www.powerdns.com/" target="_blank" rel="noopener noreferrer">PowerDNS</a>和 <a href="https://www.unbound.net/" target="_blank" rel="noopener noreferrer">Unbound</a>（技术上是解析器，但仍然值得一提），因为它非常灵活，几乎所有功能都外包到插件中。</p>`,r:{minutes:11.54,words:3462},y:"a",t:"理解CoreDNS"},["/note-book/CoreDNS/理解CoreDNS.html","/note-book/CoreDNS/理解CoreDNS.md",":md"]],["v-c388ee4c","/note-book/Docker/Docker%202375%E6%94%BB%E5%87%BB%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{d:1691939318e3,e:`<h1> 2375攻击</h1>
<p>相信了解过<a href="https://so.csdn.net/so/search?q=docker&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">docker</a> remote API的同学对2375端口都不陌生了，2375是docker远程操控的默认端口，通过这个端口可以直接对远程的docker daemon进行操作。</p>
<p>当$HOST主机以**<code>docker daemon -H=0.0.0.0:2375</code>**方式启动daemon时，可以在外部机器对 $HOST 的docker daemon进行直接操作：</p>`,r:{minutes:5.82,words:1747},y:"a",t:"2375攻击"},["/note-book/Docker/Docker 2375攻击和解决方案.html","/note-book/Docker/Docker 2375攻击和解决方案.md",":md"]],["v-2f710f9a","/note-book/Docker/Docker%20%E7%9A%84daemon.json.html",{d:1691939318e3,e:`<h1> Deamon.json Simple</h1>
<h2> All</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.46,words:738},y:"a",t:"Deamon.json Simple"},["/note-book/Docker/Docker 的daemon.json.html","/note-book/Docker/Docker 的daemon.json.md",":md"]],["v-7eb73050","/note-book/Docker/Docker%E4%B8%8D%E6%AD%BB%E8%BF%9B%E7%A8%8B.html",{d:1691989632e3,e:`<h1> Docker不死进程</h1>
<h2> 问题描述</h2>
<p>执行docker run image-id bash后，容器退出</p>
<h2> 解决方法</h2>
<p>docker容器的主线程（dockfile中CMD执行的命令）结束，容器会退出</p>
<p>有以下几种解决方法：</p>
<p>使主进程无法结束</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos /bin/bash <span class="token parameter variable">-c</span> <span class="token string">"while true;do echo hello docker;sleep 1;done"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.37,words:111},y:"a",t:"Docker不死进程"},["/note-book/Docker/Docker不死进程.html","/note-book/Docker/Docker不死进程.md",":md"]],["v-19eea71e","/note-book/Docker/Docker%E6%97%A5%E5%BF%97%E9%80%89%E9%A1%B9%E9%85%8D%E7%BD%AE%E4%B8%8A%E5%8E%BB%E5%AF%B9%E5%B7%B2%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E4%B8%8D%E7%94%9F%E6%95%88.html",{d:1691939318e3,e:`<h1> docker log配置不生效</h1>
<h2> 在/etc/docker/daemon.json中修改或添加log-opts参数</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">"log-driver"</span><span class="token builtin class-name">:</span><span class="token string">"json-file"</span>,
  <span class="token string">"log-opts"</span>:<span class="token punctuation">{</span> <span class="token string">"max-size"</span> <span class="token builtin class-name">:</span><span class="token string">"50m"</span>,<span class="token string">"max-file"</span><span class="token builtin class-name">:</span><span class="token string">"1"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.35,words:104},y:"a",t:"docker log配置不生效"},["/note-book/Docker/Docker日志选项配置上去对已运行容器不生效.html","/note-book/Docker/Docker日志选项配置上去对已运行容器不生效.md",":md"]],["v-74135446","/note-book/Docker/Docker%E7%8E%AF%E5%A2%83%E6%B8%85%E7%90%86.html",{d:1691939318e3,e:`<h1> Docker 清理环境操作</h1>
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
</blockquote>`,r:{minutes:1.84,words:553},y:"a",t:"Docker 清理环境操作"},["/note-book/Docker/Docker环境清理.html","/note-book/Docker/Docker环境清理.md",":md"]],["v-326d43de","/note-book/Docker/Docker%E9%80%83%E9%80%B8%E6%BC%8F%E6%B4%9E%E6%A1%88%E4%BE%8B.html",{d:1700560048e3,e:`<h1> Docker逃逸漏洞案例漏洞案例</h1>
<blockquote>
<p>https://zhuanlan.zhihu.com/p/588513910</p>
</blockquote>
<h2> <strong>什么是Docker</strong></h2>
<p>Docker是一个开源的引擎,可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署,包括VMs(虚拟机)、bare metal、OpenStack 集群和其他的基础应用平台。</p>
<h3> <strong>判断当前是否为docker环境</strong></h3>`,r:{minutes:14.3,words:4290},y:"a",t:"Docker逃逸漏洞案例漏洞案例"},["/note-book/Docker/Docker逃逸漏洞案例.html","/note-book/Docker/Docker逃逸漏洞案例.md",":md"]],["v-1380e8c6","/note-book/Docker/RockyLinux%E5%AE%89%E8%A3%85Docker.html",{d:1691939318e3,e:`<h1> 一键安装docker</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum makecache <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span> <span class="token punctuation">\\</span>
  <span class="token operator">&amp;&amp;</span> systemctl status <span class="token function">docker</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.66,words:198},y:"a",t:"一键安装docker"},["/note-book/Docker/RockyLinux安装Docker.html","/note-book/Docker/RockyLinux安装Docker.md",":md"]],["v-0451b50e","/note-book/Docker/docker%20pull%20push.html",{d:1691939318e3,e:`<h1> docker pull</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> pull <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token operator">|</span>@DIGEST<span class="token punctuation">]</span>
  
  从注册表中拉取镜像或镜像仓库

选项：
   -a, --all-tags 下载存储库中所有标记的镜像
       --disable-content-trust 跳过镜像验证（默认为 true）
       <span class="token parameter variable">--platform</span> string 如果服务器支持多平台则设置平台
   -q, <span class="token parameter variable">--quiet</span> 抑制详细输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1,words:300},y:"a",t:"docker pull"},["/note-book/Docker/docker pull push.html","/note-book/Docker/docker pull push.md",":md"]],["v-87a56570","/note-book/Docker/docker%20run%20%E5%91%BD%E4%BB%A4%E6%89%80%E6%9C%89%E7%9A%84%E9%80%89%E9%A1%B9.html",{d:1691939318e3,e:`<h1> docker run --help</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.45,words:1336},y:"a",t:"docker run --help"},["/note-book/Docker/docker run 命令所有的选项.html","/note-book/Docker/docker run 命令所有的选项.md",":md"]],["v-4c790792","/note-book/Docker/docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-PDF.html",{d:1691939318e3,e:`<h1> PDF</h1>
<p><a href="./docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.pdf">Docker学习笔记</a></p>
`,r:{minutes:.04,words:12},y:"a",t:"PDF"},["/note-book/Docker/docker学习笔记-PDF.html","/note-book/Docker/docker学习笔记-PDF.md",":md"]],["v-1fd2b10c","/note-book/Docker/docker%E5%AE%B9%E5%99%A8%E9%9B%86%E5%90%88.html",{d:1691939318e3,e:`<h1> docker容器集合</h1>
<h2> docker 部署和镜像仓库优化</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com  <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">sh</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
EOF</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.85,words:1154},y:"a",t:"docker容器集合"},["/note-book/Docker/docker容器集合.html","/note-book/Docker/docker容器集合.md",":md"]],["v-483c071d","/note-book/Docker/docker%E6%8A%A5%E9%94%99%20%E5%86%85%E6%A0%B8%E4%BF%AE%E6%95%B4.html",{d:1691939318e3,e:`<h1> bridge-nf-call-iptables</h1>
<p>1）警告信息如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>WARNING: bridge-nf-call-iptables is disabled

WARNING: bridge-nf-call-ip6tables is disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.6,words:180},y:"a",t:"bridge-nf-call-iptables"},["/note-book/Docker/docker报错 内核修整.html","/note-book/Docker/docker报错 内核修整.md",":md"]],["v-50885a84","/note-book/Docker/%E4%B8%80%E6%AC%A1%E6%9E%84%E5%BB%BA%E5%87%BAx86%E5%8F%8Aarm%E9%95%9C%E5%83%8F.html",{d:1691939318e3,e:`<h1> 一次构建出x86及arm镜像</h1>
<h2> CPU指令集介绍及不同的指令集的使用场景</h2>
<figure><figcaption>image-20230220093413271</figcaption></figure>
<figure><figcaption>image-20230220093440387</figcaption></figure>
<figure><figcaption>image-20230220093458512</figcaption></figure>
<figure><figcaption>image-20230220093511276</figcaption></figure>`,r:{minutes:.91,words:272},y:"a",t:"一次构建出x86及arm镜像"},["/note-book/Docker/一次构建出x86及arm镜像.html","/note-book/Docker/一次构建出x86及arm镜像.md",":md"]],["v-f9b4903c","/note-book/Docker/%E4%B8%80%E9%94%AE%E8%BF%90%E8%A1%8Cweb%E7%89%88%E6%9C%ACvscode.html",{d:1691939318e3,e:`<h1> 一键运行web版本的vscode</h1>
<h2> 安装docker-compose</h2>
<p>以centos上可以直接用yum安装docker-compose的，在rocky linux上有冲突，只好手动安装了。 手工安装的这个docker-compose版本，交互效果更好看些，不过也有问题“会多出一些莫名的空容器，状态为Created”。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">docker_compose_version</span><span class="token operator">=</span>v2.2.2 <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">"https://github.com/docker/compose/releases/download/<span class="token variable">\${docker_compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>"</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.69,words:208},y:"a",t:"一键运行web版本的vscode"},["/note-book/Docker/一键运行web版本vscode.html","/note-book/Docker/一键运行web版本vscode.md",":md"]],["v-10c9e8f1","/note-book/Docker/%E5%8F%AA%E4%BD%BF%E7%94%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9B%E5%BB%BA%E5%AE%B9%E5%99%A8-%E6%89%AB%E6%8F%8F.html",{d:1691939318e3,e:`<h1> 手写笔记</h1>
<figure><figcaption>docker</figcaption></figure>
`,r:{minutes:.06,words:17},y:"a",t:"手写笔记"},["/note-book/Docker/只使用操作系统创建容器-扫描.html","/note-book/Docker/只使用操作系统创建容器-扫描.md",":md"]],["v-6f39f683","/note-book/Docker/%E5%9C%A8Dockerfile%E9%87%8C%E8%B0%83%E6%95%B4%E6%97%B6%E5%8C%BA.html",{d:1691939318e3,e:`<h1> 在Dockerfile里调整时区</h1>
<h2> docker已运行容器里的时区修改</h2>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>ln <span class="token punctuation">-</span>sf /usr/share/zoneinfo/Asia/Shanghai    /etc/localtime
或者
cp /usr/share/zoneinfo/Asia/Shanghai    /etc/localtime
重启容器即可 <span class="token comment"># 创建并运行容器，通过 -e TZ="Asia/Shanghai" 设置时区 docker run -e TZ="Asia/Shanghai" -d -p 80:80 --name nginx nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.91,words:272},y:"a",t:"在Dockerfile里调整时区"},["/note-book/Docker/在Dockerfile里调整时区.html","/note-book/Docker/在Dockerfile里调整时区.md",":md"]],["v-4c5c0565","/note-book/Docker/%E6%89%8B%E6%92%95Docker%E5%AE%B9%E5%99%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%89%88.html",{d:1691939318e3,e:`<h1> 手撕Docker容器</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 宿主机</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.71,words:213},y:"a",t:"手撕Docker容器"},["/note-book/Docker/手撕Docker容器命令行版.html","/note-book/Docker/手撕Docker容器命令行版.md",":md"]],["v-2df05220","/note-book/Docker/%E6%89%8B%E6%92%95docker%E5%AE%B9%E5%99%A8.html",{d:1691939318e3,e:`<h1> 纯手工制作容器【Docker原理】</h1>
<h2> 前提</h2>
<div class="language-bsah line-numbers-mode" data-ext="bsah"><pre class="language-bsah"><code># 删除share选项防止mnt共享
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime shared:1 - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
[root@out-container ~]# mount --make-rprivate /
[root@out-container ~]# grep root /proc/self/mountinfo
40 0 253:0 / / rw,relatime - xfs /dev/mapper/centos_monther-root rw,seclabel,attr2,inode64,noquota
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.32,words:2795},y:"a",t:"纯手工制作容器【Docker原理】"},["/note-book/Docker/手撕docker容器.html","/note-book/Docker/手撕docker容器.md",":md"]],["v-d36c7940","/note-book/Docker/%E6%89%8B%E6%92%95docker%E7%BD%91%E7%BB%9C.html",{d:1691939318e3,e:`<h1> 手撕docker网络</h1>
<blockquote>
<p>docker网络使用的是iptables实现</p>
<p>docker0是个网桥</p>
<p>veth-pair技术绑定和跨越netns</p>
</blockquote>
<h1> 前提</h1>
<blockquote>
<p>本文并非小白所看懂的,有一定的门槛，如果不熟悉以下的前提，你可能看不懂本文，如果有什么困难请巩固基础，前提如下：</p>
</blockquote>
<ul>
<li>熟练使用iptables基本模块</li>
<li>熟练使用docker命令</li>
<li>熟练使用基本的docker网络</li>
<li>懂基本的docker网络</li>
<li>对net - namespace有一定的了解</li>
</ul>`,r:{minutes:17.16,words:5149},y:"a",t:"手撕docker网络"},["/note-book/Docker/手撕docker网络.html","/note-book/Docker/手撕docker网络.md",":md"]],["v-3b10ae94","/note-book/Docker/%E6%8A%8A%E5%AE%B9%E5%99%A8%E5%81%9A%E6%88%90%E7%89%A9%E7%90%86%E6%9C%BA.html",{d:1691939318e3,e:`<h1> 如何把容器变成物理机</h1>
<p>本文的主题是把容器变成物理机，根据所学的知识。以及通过各种搜索引擎。他们都告诉我们，这是不可能的。这真的是不可能的吗？我不信，那我就要创造奇迹。请继续往下看。本文将教你如何把容器变成物理机。</p>
<p>这里只讲硬货，不废话！！！</p>
<h2> 什么是容器</h2>
<figure><figcaption>img</figcaption></figure>
<p>​    简单来说，容器是一个隔离的操作系统沙盒，目的是<a href="https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504" target="_blank" rel="noopener noreferrer">隔离所有操作系统的进程</a>，那么我们也可以称容器的名称为<strong>被隔离的进程</strong>，在不同维度隔离级别有6个。隔离进程的名称空间是内核提供的功能，必须内核支持才可以。也就是说容器的内核跟宿主机的是同一个内核。Docker官方把它称作集装箱，我觉得这非常的形象，他们都工作在Linux 内核这条船上。</p>`,r:{minutes:11.96,words:3587},y:"a",t:"如何把容器变成物理机"},["/note-book/Docker/把容器做成物理机.html","/note-book/Docker/把容器做成物理机.md",":md"]],["v-688e4fbe","/note-book/Docker/%E6%9B%B4%E6%94%B9docker%E6%9C%8D%E5%8A%A1%E7%BD%91%E6%AE%B5%E5%88%86%E9%85%8D%E5%9C%B0%E5%9D%80.html",{d:1691939318e3,e:`<h1> 更改docker服务网段分配地址</h1>
<h2> 在docker配置文件中追加参数</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
<span class="token string">"bip"</span><span class="token builtin class-name">:</span> <span class="token string">"172.66.1.1/24"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.9,words:271},y:"a",t:"更改docker服务网段分配地址"},["/note-book/Docker/更改docker服务网段分配地址.html","/note-book/Docker/更改docker服务网段分配地址.md",":md"]],["v-7b7916dd","/note-book/Docker/%E8%B7%A8%E5%AE%BF%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1overlay%E5%92%8Cmacvlay.html",{d:1693036275e3,e:`<h1> 跨宿主机通信overlay和macvlay</h1>
<h1> 前言</h1>
<blockquote>
<p>本讲是从Docker系列讲解课程，单独抽离出来的一个小节，带你一起 深入了解在编排工具出现前，跨宿主机通信的两大得力干将overlay、macvlay，这也会后期学好K8s做好基本功铺垫，打下一个坚实的基础。</p>
</blockquote>
<h1> 一、overlay</h1>
<blockquote>
<p>Overlay网络模式相比于桥接模式的特别之处在于，它可以自定多个--subnet子网网段，只有同一网络/段中的容器才可以相互交换信息（相互通信）。</p>
<p>需要注意的是如果设置了多个--subnet，也需要同步设定对应个数的--gateway网关，需要确保各子网网段不重叠。</p>
<p>如何查看容器的子网网段，docker insect contain_name即可，当然在docker run 容器时，也可以通过--subnet 指定子网网段 。</p>
<p>示例（了解范畴）：</p>
</blockquote>`,r:{minutes:13.94,words:4182},y:"a",t:"跨宿主机通信overlay和macvlay"},["/note-book/Docker/跨宿主机通信overlay和macvlay.html","/note-book/Docker/跨宿主机通信overlay和macvlay.md",":md"]],["v-6e99be31","/note-book/Domain-Network-System/Bind9%E7%9A%84%E4%BD%BF%E7%94%A8.html",{d:1691939318e3,e:`<p>CentOS下， yum install bind安装bind软件来实现DNS服务, yum info bind可以查看到描述：</p>
<pre><code>Description : BIND (Berkeley Internet Name Domain) is an implementation of the DNS
            : (Domain Name System) protocols. BIND includes a DNS server (named),
            : which resolves host names to IP addresses; a resolver library
            : (routines for applications to use when interfacing with DNS); and
            : tools for verifying that the DNS server is operating properly.
</code></pre>`,r:{minutes:5.79,words:1736},y:"a",t:""},["/note-book/Domain-Network-System/Bind9的使用.html","/note-book/Domain-Network-System/Bind9的使用.md",":md"]],["v-28ef74e9","/note-book/Domain-Network-System/NamedManager.html",{d:1691939318e3,e:`<h1> Linux下DNS服务(Bind9)之Web管理利器-NamedManager部署说明</h1>
<p>NamedManager 是一个基于Web的DNS管理系统，**可用来添加、调整和删除DNS的zones/records数据。**它使用Bind作为底层DNS服务，提供一个现代Ajax的Web界面，支持 IPv4和IPv6。该应用程序很稳定，在生产环境中使用没有任何问题。过多的介绍在此就不做说明了，下面说下NamedManager环境部署过程：</p>
<h2> <strong>1）下载NamedManager的rpm安装包</strong></h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dns ~<span class="token punctuation">]</span><span class="token comment"># hostname</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.31,words:2492},y:"a",t:"Linux下DNS服务(Bind9)之Web管理利器-NamedManager部署说明"},[":md"]],["v-8e1c3a3e","/note-book/ELK/EFK8.4.3%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`<h1> EFK安装过程记录，监听netflow</h1>
<h2> 说明</h2>
<p>一般我们需要进行日志分析场景：直接在日志文件中 grep、awk 就可以获得自己想要的信息。但在规模较大也就是日志量多而复杂的场景中，此方法效率低下，面临问题包括日志量太大如何归档、文本搜索太慢怎么办、如何多维度查询。需要集中化的日志管理，所有服务器上的日志收集汇总。常见解决思路是建立集中式日志收集系统，将所有节点上的日志统一收集，管理，访问。
Elastic Stack包含：</p>
<ul>
<li>Elasticsearch 是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有：分布式，零配置，自动发现，索引自动分片，索引副本机制，restful风格接口，多数据源，自动搜索负载等。详细可参考Elasticsearch权威指南</li>
<li>Logstash 主要是用来日志的搜集、分析、过滤日志的工具，支持大量的数据获取方式。一般工作方式为c/s架构，client端安装在需要收集日志的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch上去。
Kibana 也是一个开源和免费的工具，Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助汇总、分析和搜索重要数据日志。</li>
<li>Beats在这里是一个轻量级日志采集器，其实Beats家族有6个成员，早期的ELK架构中使用Logstash收集、解析日志，但是Logstash对内存、cpu、io等资源消耗比较高。相比</li>
<li>Logstash，Beats所占系统的CPU和内存几乎可以忽略不计</li>
</ul>`,r:{minutes:5.16,words:1549},y:"a",t:"EFK安装过程记录，监听netflow"},["/note-book/ELK/EFK8.4.3部署.html","/note-book/ELK/EFK8.4.3部署.md",":md"]],["v-3487e284","/note-book/ELK/ELK.html",{d:1691939318e3,e:`<h1> ELK日志分析系统</h1>
<figure><figcaption>image-20211116145510909</figcaption></figure>
<figure><figcaption>image-20211116145621627</figcaption></figure>
<h1> E Elasticsearch</h1>
<p>弹性搜索，日志<strong>存储</strong></p>
<h1> L Logstash</h1>
<p>日志收集</p>
<h1> K Kibana</h1>
<p>日志展示</p>
<figure><figcaption></figcaption></figure>`,r:{minutes:6.02,words:1806},y:"a",t:"ELK日志分析系统"},[":md"]],["v-4c3279e0","/note-book/Esxi/ESXI%E4%B8%AD%E7%9A%84%E7%BD%91%E7%BB%9C.html",{d:1697001346e3,e:`<h1> ESXI中的网络</h1>
<h3> VLAN常识：</h3>
<p>vlan的范围: 一共有4096个vlan,vlan 1为默认vlan.
但其中vlan 0 和 vlan 4095是保留的,故用户真正可以创建的vlan数为4094。
vlan 0：不携带VLAN ID
vlan 4095：保留的；在北电交换机中，CPU内部使用VLAN 4095来表示无效的VLAN</p>
<h3> ESXI的网络配置：</h3>
<p><strong>虚拟交换机</strong> &gt;&gt;绑定&gt;&gt; 物理网卡
<strong>端口组</strong> &gt;&gt;绑定&gt;&gt; 虚拟交换机
<strong>虚拟机的网卡</strong> &gt;&gt;绑定&gt;&gt; 端口组</p>`,r:{minutes:.57,words:172},y:"a",t:"ESXI中的网络"},["/note-book/Esxi/ESXI中的网络.html","/note-book/Esxi/ESXI中的网络.md",":md"]],["v-5c84e740","/note-book/GRUB/%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B.html",{d:1691939318e3,e:`<h1> 开机显示菜单</h1>
<h2> 开机显示菜单</h2>
<p>/etc/default/grub</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>GRUB_DEFAULT<span class="token operator">=</span><span class="token number">0</span>
GRUB_TIMEOUT_STYLE<span class="token operator">=</span>menu # <span class="token keyword">default</span><span class="token operator">:</span>menu config hidden
GRUB_TIMEOUT<span class="token operator">=</span><span class="token number">6</span> # <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">0</span>
GRUB_DISTRIBUTOR<span class="token operator">=</span>\`lsb_release <span class="token operator">-</span>i <span class="token operator">-</span>s <span class="token number">2</span><span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span>null <span class="token operator">||</span> echo Debian\`
GRUB_CMDLINE_LINUX_DEFAULT<span class="token operator">=</span><span class="token string">""</span>
GRUB_CMDLINE_LINUX<span class="token operator">=</span><span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.24,words:72},y:"a",t:"开机显示菜单"},["/note-book/GRUB/配置案例.html","/note-book/GRUB/配置案例.md",":md"]],["v-09de09ac","/note-book/Gawk/AWK%E6%A1%88%E4%BE%8B%E5%85%A5%E9%97%A8%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86.html",{d:1691939318e3,e:`<h2> 简介</h2>
<ul>
<li>awk 擅长对列进行操作/进行数据信息操作</li>
<li>awk 的基本使用（高级使用在shell)</li>
<li>awk把文本文档看作是数据库，每一行看作一条数据库中的记录，可以指定数据列的分隔符，默认的分隔符是”\\t”,即Tab。</li>
<li>awk工作流程是这样的：读入有’\\n’换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，$0则表示所有域, 1 表 示</li>
<li>第 一 个 域 , 1表示第一个域, 1表示第一个域,n表示第n个域。默认域分隔符是”空白键” 或 “[tab]键”</li>
<li>awk的执行模式是： awk '{pattern + action}' {filenames}</li>
</ul>`,r:{minutes:24.81,words:7444},y:"a",t:""},["/note-book/Gawk/AWK案例入门看这一篇就够了.html","/note-book/Gawk/AWK案例入门看这一篇就够了.md",":md"]],["v-128301a5","/note-book/Gawk/Shell%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E4%B8%89%E5%89%91%E5%AE%A2-AWK.html",{d:1691939318e3,e:`<h1> 文本处理 awk</h1>
<h2> <strong>2.1awk简介</strong></h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk 是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:7.29,words:2186},y:"a",t:"文本处理 awk"},["/note-book/Gawk/Shell文本处理三剑客-AWK.html","/note-book/Gawk/Shell文本处理三剑客-AWK.md",":md"]],["v-03dfed38","/note-book/Gawk/awk%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html",{d:1691939318e3,e:`<h2> 一、基本用法</h2>
<p>作者： <a href="http://www.ruanyifeng.com" target="_blank" rel="noopener noreferrer">阮一峰</a></p>
<p><code>awk</code>的基本用法就是下面的形式。</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式</span>
$ <span class="token function">awk</span> 动作 文件名

<span class="token comment"># 示例</span>
$ <span class="token function">awk</span> <span class="token string">'{print $0}'</span> demo.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,r:{minutes:3.45,words:1035},y:"a",t:""},["/note-book/Gawk/awk 入门教程.html","/note-book/Gawk/awk 入门教程.md",":md"]],["v-8ff08dec","/note-book/Gawk/awk%20%E5%AD%A6%E4%B9%A0%20%20%E9%AB%98%E7%BA%A7%E8%BE%93%E5%87%BA%20%2002.html",{d:1691939318e3,e:`<h2> awk高级输入输出 读取下一条记录</h2>
<p>awk中<code>next</code>语句使用：在循环逐行匹配，如果遇到next，就会跳过当前行，直接忽略下面语句。而进行下一行匹配。net语句一般用于多行合并：</p>
<div class="language-abap line-numbers-mode" data-ext="abap"><pre class="language-abap"><code>cat <span class="token keyword">text</span><span class="token punctuation">.</span>txt
a
b
<span class="token keyword">c</span>
d
<span class="token keyword">e</span>

awk <span class="token string">'NR%2==1{next}{print NR,$0;}'</span> <span class="token keyword">text</span><span class="token punctuation">.</span>txt
<span class="token number">2</span> b
<span class="token number">4</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.52,words:1956},y:"a",t:""},["/note-book/Gawk/awk 学习  高级输出  02.html","/note-book/Gawk/awk 学习  高级输出  02.md",":md"]],["v-7e12b9a6","/note-book/Gawk/awk%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%20%2001.html",{d:1691939318e3,e:`<p><strong>awk</strong>是一种编程语言，用于在linux/unix下对文本和数据进行处理。数据可以来自标准输入(stdin)、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk有很多内建的功能，比如数组、函数等，这是它和C语言的相同之处，灵活性是awk最大的优势。</p>
<h2> awk命令格式和选项</h2>
<p><strong>语法形式</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk [options] 'script' var=value file(s)
awk [options] -f scriptfile var=value file(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.28,words:2483},y:"a",t:""},["/note-book/Gawk/awk语言学习笔记  01.html","/note-book/Gawk/awk语言学习笔记  01.md",":md"]],["v-ab5d88e0","/note-book/Gawk/%E5%8C%B9%E9%85%8D%E7%89%B9%E5%AE%9A%E5%AD%97%E7%AC%A6%E5%B9%B6%E8%BE%93%E5%87%BA%E5%85%B6%E5%90%8E%E7%9A%84%E8%8B%A5%E5%B9%B2%E8%A1%8C.html",{d:1691939318e3,e:`<h1> awk 输出配行及匹配下面的三行</h1>
<h2> 用法：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'/xxoo/{p=4}p--&gt;0'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.46,words:139},y:"a",t:"awk 输出配行及匹配下面的三行"},["/note-book/Gawk/匹配特定字符并输出其后的若干行.html","/note-book/Gawk/匹配特定字符并输出其后的若干行.md",":md"]],["v-3f1dde92","/note-book/Git/Git%20%E7%9A%84%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE.html",{d:1691939318e3,e:`<h1> Git 的代理配置</h1>
<p>Git 是我经常用的软件。出于某些原因我经常要从 GitHub 这些网站上下载文件。但是 Git 不会从终端中继承代理设置。所以我平时用 export 设置的代理就用不上了。之后在网上找了几种给 Git 设置代理的方法。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">'http://192.168.0.1:1080'</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">'http://192.168.0.1:1080'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.73,words:218},y:"a",t:"Git 的代理配置"},["/note-book/Git/Git 的代理配置.html","/note-book/Git/Git 的代理配置.md",":md"]],["v-69ef78cb","/note-book/Git/Git%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86%E5%90%88%E5%B9%B6%E4%B8%8E%E5%88%A0%E9%99%A4%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`<h1> Git分支</h1>
<p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。 在很多版本控制系统中，这是一个略微低效的过程——常常需要完全创建一个源代码目录的副本。对于大项目来说，这样的过程会耗费很多时间。而Git的分支模型则别具一格，创建分支非常的快，在不同分支之间切换也十分的快，这一优势也使得Git鼓励人们更多地使用分支。</p>
<h3> Git保存数据的方式</h3>
<p>在了解分支之前，让我们先来看看Git是如何保存数据的。我的理解是我们每次提交到Git的文件，它并不是只保存每次文件中的差异，而是类似于照片那样将整个文件都在重新保存一份</p>`,r:{minutes:3.99,words:1198},y:"a",t:"Git分支"},["/note-book/Git/Git分支管理合并与删除命令.html","/note-book/Git/Git分支管理合并与删除命令.md",":md"]],["v-9382cbf8","/note-book/Git/Git%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%AF%AD%E8%A8%80%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%8F%8A%E6%96%87%E4%BB%B6%E5%8D%A0%E6%AF%94.html",{d:1691939318e3,e:`<p>最近在做代码分析，想知道一个git仓库的语言类型，相信大家都见过这个：

图中列出了不同的文件类型在代码仓中的占比，那如何实现这个功能呢？</p>
<p>结果研究，我写了一个脚本如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git查询文件后缀的数量，用以区分项目使用的语言。</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1,words:300},y:"a",t:""},["/note-book/Git/Git识别项目的语言类型，及文件占比.html","/note-book/Git/Git识别项目的语言类型，及文件占比.md",":md"]],["v-bae969ea","/note-book/Git/Git%E9%AB%98%E7%BA%A7%E6%93%8D%E4%BD%9C%E5%92%8C%E7%BB%83%E4%B9%A0%E7%BD%91%E7%AB%99.html",{d:1691939318e3,e:`<h1> Git高级操作和练习网站</h1>
<h2> 动画练习网站</h2>
<p>https://learngitbranching.js.org/?locale=zh_CN</p>
<h2> 操作和答案</h2>
<p><a href="https://www.zhihu.com/column/c_1561431080028381184" target="_blank" rel="noopener noreferrer">git学习笔记 - 知乎 (zhihu.com)</a></p>
`,r:{minutes:.12,words:35},y:"a",t:"Git高级操作和练习网站"},["/note-book/Git/Git高级操作和练习网站.html","/note-book/Git/Git高级操作和练习网站.md",":md"]],["v-523bf541","/note-book/Git/",{d:1691939318e3,e:`<h1> git-tips</h1>
<hr>
<p>这里是我的笔记，记录一些 git 常用和一些记不住的命令，这个笔记原本是基于 <a href="http://yanhaijing.com/git/2014/11/01/my-git-note" target="_blank" rel="noopener noreferrer">颜海镜的文章</a>增加的，后面慢慢增加了许多内容，独立一个仓库维护，方便查询和使用。</p>
<h2> 安装卸载</h2>
<p><a href="https://git-scm.com/download/linux" target="_blank" rel="noopener noreferrer">官方教程</a>，在 Linux/Unix 系统中，通过工具在中安装 <code>git</code>,这种方式比较简单，便于升级卸载工具。</p>`,r:{minutes:26.12,words:7835},y:"a",t:"git-tips"},["/note-book/Git/README.md"]],["v-20b8f0f1","/note-book/Git/git%20%E6%8B%89%E5%8F%96%E5%85%A8%E9%83%A8%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html",{d:1691939318e3,e:`<p>for i in <code>git branch -r</code>; do git checkout <code>basename $i</code> &amp;&amp; git pull --all; done</p>
`,r:{minutes:.05,words:15},y:"a",t:""},["/note-book/Git/git 拉取全部远程分支.html","/note-book/Git/git 拉取全部远程分支.md",":md"]],["v-7726c068","/note-book/Git/git%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`<h1> git 基础命令</h1>
<h1> Git 基本操作</h1>
<p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。</p>
<p>本章将对有关创建与提交你的项目快照的命令作介绍。</p>
<p>Git 常用的是以下 6 个命令：<strong>git clone</strong>、<strong>git push</strong>、<strong>git add</strong> 、<strong>git commit</strong>、<strong>git checkout</strong>、<strong>git pull</strong>，后面我们会详细介绍。</p>`,r:{minutes:15.59,words:4677},y:"a",t:"git 基础命令"},["/note-book/Git/git基础命令.html","/note-book/Git/git基础命令.md",":md"]],["v-2b2f3b07","/note-book/Git/git%E6%9B%B4%E6%96%B0%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html",{d:1691939318e3,e:`<p>同事创建出新的分支后，我这边用sourcetree刷新，始终看不到最新的。上网查了一下，可以用命令刷新，刷新之后就可以看到新创建的分支了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote update origin <span class="token parameter variable">--prune</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.26,words:78},y:"a",t:""},["/note-book/Git/git更新远程分支.html","/note-book/Git/git更新远程分支.md",":md"]],["v-219bdfe6","/note-book/Git/git%E7%BB%9F%E8%AE%A1%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81%E8%A1%8C%E6%95%B0.html",{d:1691939318e3,e:`<h1> git统计项目代码行数</h1>
<h2> 只统计项目代码的总行数</h2>
<div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>git ls<span class="token operator">-</span>files <span class="token operator">|</span> xargs cat <span class="token operator">|</span> wc <span class="token operator">-</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.2,words:60},y:"a",t:"git统计项目代码行数"},["/note-book/Git/git统计项目代码行数.html","/note-book/Git/git统计项目代码行数.md",":md"]],["v-08b82cef","/note-book/Git/git%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9B%9E%E9%80%80%E5%88%B0%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC.html",{d:1691939318e3,e:`<h2> step1：查看提交记录，获得版本号</h2>
<p><code>git log</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commit 36cc122f5a2218d2b2d4109593a4ec5de589f807
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.44,words:133},y:"a",t:""},["/note-book/Git/git远程仓库回退到指定版本.html","/note-book/Git/git远程仓库回退到指定版本.md",":md"]],["v-89f58c8e","/note-book/Git/%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%98%BE%E7%A4%BAgitmoji.html",{d:1691939318e3,e:`<h1> emojify</h1>
<h2> <a href="https://www.mianshigee.com/project/emojify/#emoji-on-the-command-line-scream" target="_blank" rel="noopener noreferrer">Emoji on the command line    😱 </a></h2>
<p>THIS IS A VERY USEFUL SCRIPT. IT WILL ABSOLUTELY BOOST YOUR PRODUCTIVITY AND HELP YOU IN YOUR DAILY WORK.</p>`,r:{minutes:1.24,words:371},y:"a",t:"emojify"},["/note-book/Git/命令行显示gitmoji.html","/note-book/Git/命令行显示gitmoji.md",":md"]],["v-4d6c1094","/note-book/Gitlab/Gitlab%E4%BA%8C%E5%BC%80%E4%BB%8E%E8%80%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`<h1> Gitlab二开从而自定义权限系统</h1>
<blockquote>
<p>Gitlab所给的权限太少了，因为业务需要，二开gitlab，自定义权限系统。</p>
<p>下面给guest角色删除源码访问权限。并保留提出issue的权限。查看label的权限</p>
</blockquote>
<h2> 前言</h2>
<p>我们都知道gitlab社区版和商业版本的内核是相同的，所以说社区版本的功能是企业版本的全部。只是部分配置没有放到web界面，需要命令行去修改</p>
<h2> 修改</h2>
<p>经过查询，gitlab的权限以文本文件的形式存储在目录中,下面是权限系统的配置文件。</p>`,r:{minutes:4.77,words:1430},y:"a",t:"Gitlab二开从而自定义权限系统"},["/note-book/Gitlab/Gitlab二开从而自定义权限系统.html","/note-book/Gitlab/Gitlab二开从而自定义权限系统.md",":md"]],["v-736258dc","/note-book/Gitlab/Gitlab%E5%A4%87%E4%BB%BD%E5%92%8C%E6%81%A2%E5%A4%8D.html",{d:1691939318e3,e:`<h1> Gitlab备份和恢复</h1>
<h2> 配置备份</h2>
<blockquote>
<p>参考链接 https://docs.gitlab.com/omnibus/settings/backups.html</p>
</blockquote>
<p>编辑用户根目录的 cron 表</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">crontab</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.83,words:249},y:"a",t:"Gitlab备份和恢复"},["/note-book/Gitlab/Gitlab备份和恢复.html","/note-book/Gitlab/Gitlab备份和恢复.md",":md"]],["v-ce8e88a6","/note-book/Gitlab/Gitlab%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`<h1> Gitlab安装部署</h1>
<h2> 安装部署</h2>
<blockquote>
<p>参考链接</p>
<ul>
<li>https://blog.csdn.net/qq_35844177/article/details/106876923</li>
<li>官网 https://docs.gitlab.com/omnibus/installation/</li>
<li></li>
</ul>
</blockquote>
<h2> 优化过程</h2>
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
</ul>`,r:{minutes:.23,words:68},y:"a",t:"Gitlab安装部署"},["/note-book/Gitlab/Gitlab安装部署.html","/note-book/Gitlab/Gitlab安装部署.md",":md"]],["v-1affebc9","/note-book/Gitlab/Gitlab%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html",{d:1691939318e3,e:`<h1> 第一次使用gitlab登陆网页没有提示更改密码</h1>
<p>破案了,新版本从命令行看：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/gitlab/init_xxx  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.53,words:758},y:"a",t:"第一次使用gitlab登陆网页没有提示更改密码"},["/note-book/Gitlab/Gitlab的一些问题.html","/note-book/Gitlab/Gitlab的一些问题.md",":md"]],["v-edc7031c","/note-book/Gitlab/Gitlab%E9%85%8D%E7%BD%AE%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8.html",{d:1691939318e3,e:`<h1> Gitlab配置邮件服务器</h1>
<h2> outlook</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### Email Settings</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.85,words:255},y:"a",t:"Gitlab配置邮件服务器"},["/note-book/Gitlab/Gitlab配置邮件服务器.html","/note-book/Gitlab/Gitlab配置邮件服务器.md",":md"]],["v-3251a524","/note-book/HA-LVS-Keepalived/ha-lvs-keepalived.html",{d:1691939318e3,e:`<h1> 大型网站高并发解决方案LVS</h1>
<h1> 负载均衡</h1>
<h2> 集群功能分类：</h2>
<h3> LB： Load Balance</h3>
<p>有一定的高可用能力，但不是高可用集群，是以提高服务的并发处理能力为根本着眼点</p>
<p>负载均衡产品分类</p>
<figure><figcaption>image-20211113162334546</figcaption></figure>
<p>软件负载均衡设备： lvs（4层路由设备，ip、端口号）、haproxy、nginx、</p>
<p>对比：</p>
<p>软件负载均衡设备（廉价解决方案）：</p>
`,r:{minutes:3.72,words:1116},y:"a",t:"大型网站高并发解决方案LVS"},[":md"]],["v-72564be3","/note-book/HA-LVS-Keepalived/haproxy.html",{d:1691939318e3,e:`<h1> HAproxy 七层负载均衡</h1>
<h2> 概述</h2>
<figure><figcaption>image-20211115094625216</figcaption></figure>
<h2> 特点</h2>
<figure><figcaption>image-20211115103530945</figcaption></figure>
<h2> 实例1</h2>
<p>环境</p>
<figure><figcaption>image-20211115110133707</figcaption></figure>
<div class="language-hosts line-numbers-mode" data-ext="hosts"><pre class="language-hosts"><code>172.16.100.14 web1
172.16.100.15 web2
172.16.100.21 haproxy

172.16.100.13 windows client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.89,words:866},y:"a",t:"HAproxy 七层负载均衡"},[":md"]],["v-6c105dfe","/note-book/HA-LVS-Keepalived/keepalived.html",{d:1691939318e3,e:`<h1> HA</h1>
<figure><figcaption>image-20211114172234554</figcaption></figure>
<h2> 什么是高可用集群HA</h2>
<figure><figcaption>image-20211114172407050</figcaption></figure>
<h2> 高可用集群衡量标准</h2>
<figure><figcaption>image-20211114172435055</figcaption></figure>
<h3> 具体衡量标准</h3>
<figure><figcaption>image-20211114172601221</figcaption></figure>`,r:{minutes:6.28,words:1883},y:"a",t:"HA"},[":md"]],["v-4db786a2","/note-book/Harbor/Harbor%E7%A6%BB%E7%BA%BF%E6%90%AD%E5%BB%BA.html",{d:1691939318e3,e:`<h1> 先要条件</h1>
<h2> 1.下载haobor安装包和docker-compose安装包</h2>
<p>harbor载地址：http://harbor.orientsoft.cn/</p>
<p>本次下载后放入的目录是/home/carter，解压安装包</p>
<pre><code>tar xf harbor-offline-installer-v1.10.10.tgz
</code></pre>
<p>下载docker-composer，存放到/usr/local/bin目录下。</p>
<pre><code># 这个是官方地址，可能比较慢，推荐使用下面的国内镜像地址
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 国内镜像地址
curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose

# 下载完之后可以看下 /usr/local/bin 这个目录有没有 docker-compose 这个文件
</code></pre>`,r:{minutes:4.97,words:1492},y:"a",t:"先要条件"},["/note-book/Harbor/Harbor离线搭建.html","/note-book/Harbor/Harbor离线搭建.md",":md"]],["v-77da57a3","/note-book/Iptables/Linux%E5%86%85%E6%A0%B8%E5%AD%90%E7%B3%BB%E7%BB%9F%20-%20%E7%BD%91%E7%BB%9C%20netfilter.html",{d:1691939318e3,e:`<h1> Linux内核子系统 - 网络</h1>
<blockquote>
<p>某教育内核讨论区：https://kernel.0voice.com/forum.php?mod=guide&amp;view=newthread</p>
<p>netfilter参数详解： https://www.kernel.org/doc/html/latest/networking/nf_conntrack-sysctl.html#proc-sys-net-netfilter-nf-conntrack-variables 已经摘录部分</p>
<p>部分来源： https://zhuanlan.zhihu.com/p/561781463</p>
<p>致谢： https://www.zhihu.com/people/linuxwang-xian-sheng</p>
<p>源地址： https://juejin.cn/post/6993124663878484005</p>
</blockquote>`,r:{minutes:11.5,words:3449},y:"a",t:"Linux内核子系统 - 网络"},["/note-book/Iptables/Linux内核子系统 - 网络 netfilter.html","/note-book/Iptables/Linux内核子系统 - 网络 netfilter.md",":md"]],["v-4b719180","/note-book/Iptables/iptables%E6%8B%A6%E6%88%AA%E5%86%85%E7%BD%91%E5%A5%87%E8%99%8E%E8%BD%AF%E4%BB%B6%E7%97%85%E6%AF%92%E4%B8%8A%E6%8A%A5.html",{d:1700469858e3,c:["iptables","Network","网络安全"],e:`<h1> iptables拦截内网奇虎软件病毒上报</h1>
<h2> 案例初衷</h2>
<p>整理旧的项目，手里的内容实在太多了，整理一下这个案例。</p>
<p>这个东西开始是别人介绍的一个小项目，作用是要从中间流量阻止来自客户机 <strong>奇虎360</strong>的查毒软件向主服务器病毒上报。</p>
<figure><figcaption>image-20231120150307670</figcaption></figure>
<p>具体是这样的流程</p>
<p>经过<code>tcpdump</code>抓包显示<strong>奇虎360</strong>客户机向服务器上报病毒的渠道是http协议，</p>`,r:{minutes:10.3,words:3090},y:"a",t:"iptables拦截内网奇虎软件病毒上报"},["/note-book/Iptables/iptables拦截内网奇虎软件病毒上报.html","/note-book/Iptables/iptables拦截内网奇虎软件病毒上报.md",":md"]],["v-5df5e696","/note-book/Iptables/iptables%E8%AF%A6%E8%A7%A3-%E6%9C%B1%E5%85%89%E5%8D%B0.html",{d:1691939318e3,e:`<h1> iptables详解-朱光印</h1>
<p><a href="https://www.zsythink.net/archives/category/%e8%bf%90%e7%bb%b4%e7%9b%b8%e5%85%b3/iptables" target="_blank" rel="noopener noreferrer">IPtables</a></p>
<p>https://www.zsythink.net/archives/category/%e8%bf%90%e7%bb%b4%e7%9b%b8%e5%85%b3/iptables</p>
`,r:{minutes:.12,words:35},y:"a",t:"iptables详解-朱光印"},["/note-book/Iptables/iptables详解-朱光印.html","/note-book/Iptables/iptables详解-朱光印.md",":md"]],["v-f32b6d86","/note-book/Iptables/linux%E4%B8%8BIPTABLES%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> linux下IPTABLES配置详解</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>**-A RH-Firewall-1-INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">24000</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token parameter variable">-A</span> RH-Firewall-1-INPUT <span class="token parameter variable">-s</span> <span class="token number">121.10</span>.120.24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">18612</span> <span class="token parameter variable">-j</span> ACCEPT**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:10.92,words:3277},y:"a",t:"linux下IPTABLES配置详解"},["/note-book/Iptables/linux下IPTABLES配置详解.html","/note-book/Iptables/linux下IPTABLES配置详解.md",":md"]],["v-f8568246","/note-book/Iptables/%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0ip_forward.html",{d:1691939318e3,e:`<h1> <a href="https://www.jianshu.com/p/aa838288b33f" target="_blank" rel="noopener noreferrer">内核参数ip_forward刨根问底</a></h1>
<figure><figcaption>image-20221025095802270</figcaption></figure>
`,r:{minutes:.06,words:19},y:"a",t:"内核参数ip_forward刨根问底"},["/note-book/Iptables/内核参数ip_forward.html","/note-book/Iptables/内核参数ip_forward.md",":md"]],["v-dcb1d26a","/note-book/Jenkins/jenkins%E5%A4%87%E4%BB%BD.html",{d:1691939318e3,e:`<h1> Jenkins备份</h1>
<p><strong>1.手动备份</strong></p>
<p>比较简单就像上述迁移步骤那样，把原始机器上的数据打包。打包后有两种选择，第一种是在原始机器上，其他路径下创建一个文件夹，把数据丢进去。例如原始机器上的数据是存储在/home/jenkins，我们打包后可以放到/home/backups，这样做的好处是如果误删了jenkins，我们可以到backups下找回原始数据；第二种是将打包的文件拷贝到另外一台物理机上，这样做的好处是如果原始机器宕机了，我们可以在另外一台机器上找到备份文件，在最短的时间内恢复工作。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.35,words:1006},y:"a",t:"Jenkins备份"},["/note-book/Jenkins/jenkins备份.html","/note-book/Jenkins/jenkins备份.md",":md"]],["v-07b8030a","/note-book/Jenkins/jenkins%E6%9E%84%E5%BB%BA%E6%8C%81%E7%BB%AD%E5%8C%96%E9%9B%86%E6%88%90%E5%B9%B3%E5%8F%B0.html",{d:1691939318e3,e:`<h1> CICD-jenkins构建持续化集成平台</h1>
<h1> 一、CI/CD持续集成/持续发布</h1>
<p>开发(git) --&gt;git主库–&gt;jenkins(git+jdk+tomcat+maven打包+测试）–&gt;发布到tomcat服务器
英文全称：Continuous Integration
　　CI：中文全称：持续集成工具
　　持续集成是一种软件开发实践。在持续集成中，团队成员频繁集成他们的工作成果，一般每人每天至少集成一次，也可以多次。每次集成会经过自动构建（包括自动测试）的检验，以尽快发现集成错误。</p>
<h1> 二、Jenkins</h1>
<h2> １、Jenkins概述</h2>`,r:{minutes:14.44,words:4333},y:"a",t:"CICD-jenkins构建持续化集成平台"},["/note-book/Jenkins/jenkins构建持续化集成平台.html","/note-book/Jenkins/jenkins构建持续化集成平台.md",":md"]],["v-577615d7","/note-book/Jenkins/jenkins%E7%9A%84docker%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.html",{d:1691939318e3,e:`<p>起一个 jenkins</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-u</span> root  <span class="token parameter variable">-it</span>   <span class="token parameter variable">-d</span>  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token parameter variable">-v</span> jenkins-data:/var/jenkins_home <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.27,words:382},y:"a",t:""},["/note-book/Jenkins/jenkins的docker部署文档.html","/note-book/Jenkins/jenkins的docker部署文档.md",":md"]],["v-513bda28","/note-book/Jenkins/%E4%BF%AE%E6%94%B9Jenkins%E6%8F%92%E4%BB%B6%E4%B8%BA%E5%9B%BD%E5%86%85%E6%BA%90.html",{d:1691939318e3,e:`<h1> 修改Jenkins插件为国内</h1>
<p>首页 --&gt; configure --&gt; Manage Jenkins --&gt; Advanced --&gt; Update Site（页面最下方‘升级站点’）替换URL为
清华大学仓库地址：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://updates.jenkins.io/update-center.json
改为
https://mirror.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.15,words:45},y:"a",t:"修改Jenkins插件为国内"},["/note-book/Jenkins/修改Jenkins插件为国内源.html","/note-book/Jenkins/修改Jenkins插件为国内源.md",":md"]],["v-77aac963","/note-book/Kubernetes/Kubernetes%20Api%20Endpoint.html",{d:1691939318e3,e:`<h1> API规范</h1>
<h2> 总体检查</h2>
<h3> /livez?verbose 存活检查</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:6443/livez?verbose <span class="token parameter variable">-k</span>

<span class="token comment">#--cacert /etc/kubernetes/pki/ca.pem </span>
<span class="token comment">#--cert /etc/kubernetes/pki/apiserver.pem </span>
<span class="token comment">#--key /etc/kubernetes/pki/apiserver-key.pem</span>

<span class="token comment"># 不加verbose只会打印OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.3,words:691},y:"a",t:"API规范"},["/note-book/Kubernetes/Kubernetes Api Endpoint.html","/note-book/Kubernetes/Kubernetes Api Endpoint.md",":md"]],["v-c66ad2a6","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus_Grafana.html",{d:1691939318e3,e:`<h1> Kubernetes Make Prometheus+Grafana</h1>
<h3> Kubernetes Create Prometheus+Grafana</h3>
<h4> 一、背景</h4>
<p>Prometheus作为一个采用tidb时序数据库为数据存储的监控软件，因为嵌合当前主流容器化，所以一直处于广泛使用的状态，常用监控面板grafana，可以接收多种dataresource，结合数据源支持的语法可以对数据进行分析，实时展示监控值。</p>
<h4> 二、准备工作</h4>
<h5> 1、主机分布</h5>
192.168.52.135(master)nfs-server
`,r:{minutes:14.92,words:4477},y:"a",t:"Kubernetes Make Prometheus+Grafana"},["/note-book/Kubernetes/Kubernetes Make Prometheus_Grafana.html","/note-book/Kubernetes/Kubernetes Make Prometheus+Grafana.html","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus+Grafana.html","/note-book/Kubernetes/Kubernetes Make Prometheus+Grafana.md","/note-book/Kubernetes/Kubernetes%20Make%20Prometheus+Grafana.md"]],["v-e9469f82","/note-book/Kubernetes/Kubernetes%20Service%20Account%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90Token.html",{d:1691939318e3,e:`<h1> Kubernetes Service Account如何生成Token</h1>
<p>果然两天不看就跟不上了，我的集群版本是 1.25.3，今天需要用 token 来做些事情，创建 serviceAccount 的时候发现没有生成 secret，查了一下发现从 1.24 开始就不会自动生成 secret 了，<a href="https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.24.md#urgent-upgrade-notes" target="_blank" rel="noopener noreferrer">chanagelog 在这里.</a></p>`,r:{minutes:1.07,words:321},y:"a",t:"Kubernetes Service Account如何生成Token"},["/note-book/Kubernetes/Kubernetes Service Account如何生成Token.html","/note-book/Kubernetes/Kubernetes Service Account如何生成Token.md",":md"]],["v-2ece8d5e","/note-book/Kubernetes/Kubernetes%20crictl%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<ol>
<li>
<h1> 介绍</h1>
</li>
</ol>
<p>crictl 是 CRI 兼容的容器运行时命令行接口。 你可以使用它来检查和调试 Kubernetes 节点上的容器运行时和应用程序。 crictl 和它的源代码在 cri-tools 代码库。
2. # 安装 crictl</p>
<p>下载：https://github.com/kubernetes-sigs/cri-tools/releases
3. # 配置</p>
<p>crictl 命令有几个子命令和运行时参数。 有关详细信息，请使用 crictl help 或 crictl help 获取帮助信息。</p>`,r:{minutes:3.22,words:966},y:"a",t:"介绍"},["/note-book/Kubernetes/Kubernetes crictl管理命令详解.html","/note-book/Kubernetes/Kubernetes crictl管理命令详解.md",":md"]],["v-a0127118","/note-book/Kubernetes/Kubernetes%E6%9C%80%E5%B0%8F%E9%AB%98%E5%8F%AF%E7%94%A8%E6%9E%B6%E6%9E%84%E5%9B%BE.html",{d:1691939318e3,e:`<figure><figcaption>image-20220516192554705</figcaption></figure>
`,r:{minutes:.04,words:13},y:"a",t:""},["/note-book/Kubernetes/Kubernetes最小高可用架构图.html","/note-book/Kubernetes/Kubernetes最小高可用架构图.md",":md"]],["v-f5f5d002","/note-book/Kubernetes/Kubernetes%E6%9C%89%E5%93%AA%E4%BA%9B%E7%BB%84%E4%BB%B6.html",{d:1691939318e3,e:`<h1> 组件汇总</h1>
<figure><figcaption>image-20220516192342353</figcaption></figure>
<h1> Kube-scheduler</h1>
<figure><figcaption>image-20220516192353808</figcaption></figure>
<h1> Kube-kubelet</h1>
<figure><figcaption>image-20220516192411578</figcaption></figure>
<h1> Kube-proxy</h1>
<figure><figcaption>image-20220516192431476</figcaption></figure>`,r:{minutes:.32,words:96},y:"a",t:"组件汇总"},["/note-book/Kubernetes/Kubernetes有哪些组件.html","/note-book/Kubernetes/Kubernetes有哪些组件.md",":md"]],["v-01b130a4","/note-book/Kubernetes/Kubernetes%E7%9A%84NetworkPlicy.html",{d:1691939318e3,e:`<h1> 简介</h1>
<p>网络策略（NetworkPolicy）是一种关于 Pod 间及与其他网络端点间所允许的通信规则的规范。</p>
<p>NetworkPolicy 资源使用 标签 选择 Pod，并定义选定 Pod 所允许的通信规则。</p>
<h1> 语法</h1>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.01,words:4803},y:"a",t:"简介"},["/note-book/Kubernetes/Kubernetes的NetworkPlicy.html","/note-book/Kubernetes/Kubernetes的NetworkPlicy.md",":md"]],["v-7f271bfb","/note-book/Kubernetes/NameSpace%20%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB%E9%9A%94%E7%A6%BB%E4%BA%86%E4%BB%80%E4%B9%88.html",{d:1691939318e3,e:`<h1> NameSpace 资源隔离</h1>
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
</table>`,r:{minutes:.49,words:146},y:"a",t:"NameSpace 资源隔离"},["/note-book/Kubernetes/NameSpace 资源隔离隔离了什么.html","/note-book/Kubernetes/NameSpace 资源隔离隔离了什么.md",":md"]],["v-76d4e7bb","/note-book/Kubernetes/Request%E5%92%8CLimit.html",{d:1691939318e3,e:`<h1> <strong>Requests和Limits</strong></h1>
<p>一个问题是K8s里在定义容器资源时候的Request和Limit有啥联系和区别。</p>
<p>就是字面上的意思，request里定义的是k8s必须要保证的启动资源，limit是将来容器运行可能使用的资源上限。</p>
<p>Kube-scheduler通过request的定义来寻找一个可以满足需求的node，从而在node上启动对应的pod里所用的容器；但是容器运行之后因为业务的增长是可以使用超过request的资源的，但是最高只能用到limit里定义的资源，但是limit里定义的资源k8s是不能给确保提供的。</p>`,r:{minutes:.59,words:178},y:"a",t:"Requests和Limits"},["/note-book/Kubernetes/Request和Limit.html","/note-book/Kubernetes/Request和Limit.md",":md"]],["v-3d16ea04","/note-book/Kubernetes/SSL%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%8F%91.html",{d:1691939318e3,e:`<p>按照架构设计，在hdss7-12，hdss7-21, hdss7-22三台上部署etcd服务：</p>
<p>首先创建etcd用户：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># useradd -s /sbin/nologin -M etcd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.13,words:639},y:"a",t:""},["/note-book/Kubernetes/SSL证书签发.html","/note-book/Kubernetes/SSL证书签发.md",":md"]],["v-6cc6b7c2","/note-book/Kubernetes/crictl%E7%99%BB%E5%BD%95dockerhub.html",{d:1692599091e3,e:`<h1> crictl登录dockerhub</h1>
<h2> 例子</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>crictl pull <span class="token parameter variable">--creds</span> jockerdragon:xxxxxxx  eipwork/kuboard:v3


<span class="token parameter variable">--cert</span> username<span class="token punctuation">[</span>:password<span class="token punctuation">]</span> lai's
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.06,words:19},y:"a",t:"crictl登录dockerhub"},["/note-book/Kubernetes/crictl登录dockerhub.html","/note-book/Kubernetes/crictl登录dockerhub.md",":md"]],["v-575cf978","/note-book/Kubernetes/etcd%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%89%E8%8A%82%E7%82%B9%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`<h1> 在200的运维主机上创建生成CA证书的JSON配置文件</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /opt/certs/ca-config.json
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.63,words:789},y:"a",t:"在200的运维主机上创建生成CA证书的JSON配置文件"},["/note-book/Kubernetes/etcd 二进制三节点集群部署.html","/note-book/Kubernetes/etcd 二进制三节点集群部署.md",":md"]],["v-ac04e9ec","/note-book/Kubernetes/k8s%E5%88%A0%E9%99%A4Terminating%E7%8A%B6%E6%80%81ns.html",{d:1691939318e3,e:`<h1> k8s删除Terminating状态ns</h1>
<h1> 假设你要删掉ns资源，发现一直删不了处于terminating状态</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kubectl get ns</span>
NAME              STATUS        AGE
default           Active        7h11m
kube-flannel      Terminating   6h41m
kube-node-lease   Active        7h11m
kube-public       Active        7h11m
kube-system       Active        7h11m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.35,words:406},y:"a",t:"k8s删除Terminating状态ns"},["/note-book/Kubernetes/k8s删除Terminating状态ns.html","/note-book/Kubernetes/k8s删除Terminating状态ns.md",":md"]],["v-6b0a0620","/note-book/Kubernetes/kubeadm%E9%83%A8%E7%BD%B2Kubernetes%201.24%E6%AD%A5%E9%AA%A4.html",{d:1693278768e3,e:`<h1> kubeadm部署Kubernetes 1.24步骤</h1>
<h1> 前言</h1>
<p>kubeadm 是 Kubernetes 官方提供的用于快速安部署 Kubernetes 集群的工具，伴随 Kubernetes 每个版本的发布都会同步更新，kubeadm 会对集群配置方面的一些实践做调整，通过实验 kubeadm 可以学习到 Kubernetes 官方在集群配置上一些新的最佳实践。</p>
<h1> 一、准备</h1>
<h2> 1.1、系统配置</h2>
<p>在安装之前，需要先做好如下准备。3 台 CentOS 7.9 主机如下：</p>
<pre><code>cat /etc/hosts
192.168.96.151    node1
192.168.96.152    node2
192.168.96.153    node3
</code></pre>`,r:{minutes:13.8,words:4140},y:"a",t:"kubeadm部署Kubernetes 1.24步骤"},["/note-book/Kubernetes/kubeadm部署Kubernetes 1.24步骤.html","/note-book/Kubernetes/kubeadm部署Kubernetes 1.24步骤.md",":md"]],["v-743045a2","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%80%EF%BC%89kubectl%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> <strong>管理k8s核心资源的三种基本方法：</strong></h1>
<h2> 陈述式-主要依赖命令行工具</h2>
<p>--可以满足90%以上的使用场景，但是缺点也很明显：</p>
<p>命令冗长，复杂，难以记忆</p>
<p>特定场景下，无法实现管理需求</p>
<p>对资源的增、删、查操作比较容易，改比较麻烦，需要patch来使用json串来更改。</p>
<p><strong>1.1 查看名称空间</strong> 查询时，为了避免重名，需要指定名称空间。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kubectl get namespace
简写：
# kubectl get ns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.68,words:1405},y:"a",t:"管理k8s核心资源的三种基本方法："},["/note-book/Kubernetes/kubernetes进阶（一）kubectl工具使用详解.html","/note-book/Kubernetes/kubernetes进阶（一）kubectl工具使用详解.md",":md"]],["v-16f9c44f","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E4%B8%89%EF%BC%89%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0-coredns.html",{d:1691939318e3,e:`<p>服务发现，说白了就是服务(应用)之间相互定位的过程。</p>
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
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker pull k8scn/kubernetes-dashboard-amd64:v1.8.3
# docker tag fcac9aa03fd6 harbor.od.com/public/dashboard:v1.8.3
# docker push harbor.od.com/public/dashboard:v1.8.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.43,words:1029},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（五）dashboard--WEB管理.html","/note-book/Kubernetes/kubernetes进阶（五）dashboard--WEB管理.md",":md"]],["v-1c63547c","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%85%AD%EF%BC%89k8s%E5%B9%B3%E6%BB%91%E5%8D%87%E7%BA%A7.html",{d:1691939318e3,e:`<p>当我们遇到K8S有漏洞的时候，或者为了满足需求，有时候可能会需要升级或者降级版本，</p>
<p>为了减少对业务的影响，尽量选择在业务低谷的时候来升级：</p>
<p>首先准备好文件：我这里选择的是内网文件服务器上下载的，请自行下载所需的k8s源文件：3</p>
<p>这里演示更换一个节点：7-21</p>
<p>查看版本：将7-21更换成1.15.2</p>
<figure><figcaption>img</figcaption></figure>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cd /opt/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.54,words:463},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（六）k8s平滑升级.html","/note-book/Kubernetes/kubernetes进阶（六）k8s平滑升级.md",":md"]],["v-07fca106","/note-book/Kubernetes/kubernetes%E8%BF%9B%E9%98%B6%EF%BC%88%E5%9B%9B%EF%BC%89%E6%9C%8D%E5%8A%A1%E6%9A%B4%E9%9C%B2-ingress%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B9%8Btraefik.html",{d:1691939318e3,e:`<p>上一章我们测试了在集群内部解析service名称，</p>
<p>下面我们测试在集群外部解析：</p>
<figure><figcaption>img</figcaption></figure>
<p>根本解析不到，因为我们外部用的dns是10.4.7.11，也就是我们的自建bind dns，这个DNS服务器上也没有响应的搜索域。</p>
<p>如何能让集群外部访问nginx-dp？</p>
<p>这里有两种服务暴露方式：修改工作模式，在kube-proxy中修改，并重启</p>
<p>1、使用nodeport方式，但是这种方式不能使用ipvs，只能使用iptables，iptables只能使用rr调度方式。原理相当于端口映射，将容器内的端口映射到宿主机上的某个端口。</p>`,r:{minutes:2.51,words:753},y:"a",t:""},["/note-book/Kubernetes/kubernetes进阶（四）服务暴露-ingress控制器之traefik.html","/note-book/Kubernetes/kubernetes进阶（四）服务暴露-ingress控制器之traefik.md",":md"]],["v-4baada5c","/note-book/Kubernetes/%E4%B8%80%E6%AC%A1kubeadm%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9%E5%87%BA%E7%8E%B0etcd%E6%A3%80%E6%9F%A5%E9%94%99%E8%AF%AF.html",{d:1691939318e3,e:`<h1> 一次kubeadm添加节点出现etcd检查错误</h1>
<blockquote>
<p>错误关键字</p>
<p>执行 kubeadm join... 时</p>
<p>[check-etcd] Checking that the etcd cluster is healthy</p>
<p>error execution phase check-etcd: etcd cluster is not healthy: failed to dial endpoint https://10.8.18.105:2379 with maintenance client: context deadline exceeded To see the stack trace of this error execute with --v=5 or higher</p>
</blockquote>`,r:{minutes:3.92,words:1175},y:"a",t:"一次kubeadm添加节点出现etcd检查错误"},["/note-book/Kubernetes/一次kubeadm添加节点出现etcd检查错误.html","/note-book/Kubernetes/一次kubeadm添加节点出现etcd检查错误.md",":md"]],["v-5b225804","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%83%EF%BC%89%20%E9%83%A8%E7%BD%B2%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.html",{d:1691939318e3,e:`<p>1、k8s各个组件之间通信，在高版本中，基本都是使用TSL通信，所以申请证书，是必不可少的，而且建议使用二进制安装，或者在接手一套K8S集群的时候，第一件事情是检查证书有效期，证书过期或者TSL通信问题会报x509相关错误。</p>
<p>可以从k8s kubelet-kuberconfig 使用 echo '证书' | base64 -d 反解获得k8s证书(比如阿里云)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cfssl-certinfo -domain=ca.pem -cert=client.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.62,words:485},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（七） 部署知识点总结.html","/note-book/Kubernetes/二进制安装kubernetes（七） 部署知识点总结.md",":md"]],["v-aa3e3ee8","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%B8%89%EF%BC%89%20kube-controller-manager%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<h3> Controller Manager简介</h3>
<p>详细介绍请参考链接：<a href="https://blog.csdn.net/bbwangj/article/details/82557705" target="_blank" rel="noopener noreferrer">Kubernetes组件之kube-controller-manager</a></p>
<p>Controller  Manager作为集群内部的管理控制中心，负责集群内的Node、Pod副本、服务端点（Endpoint）、命名空间（Namespace）、服务账号（ServiceAccount）、资源定额（ResourceQuota）的管理，当某个Node意外宕机时，Controller Manager会及时发现并执行自动化修复流程，确保集群始终处于预期的工作状态。</p>`,r:{minutes:1.17,words:352},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（三） kube-controller-manager组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（三） kube-controller-manager组件安装.md",":md"]],["v-81834800","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%8C%EF%BC%89%20kube-apiserver%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<p>根据架构图，我们的apiserver部署在hdss7-21和hdss7-22上：</p>
<p>首先在hdss7-200上申请证书并拷贝到21和22上：</p>
<p>创建证书文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cd /opt/certs
# vi client-csr.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.15,words:1544},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（二） kube-apiserver组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（二） kube-apiserver组件安装.md",":md"]],["v-7e1d67ea","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E4%BA%94%EF%BC%89%20kubelet%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<h1> 概述资料地址：https://blog.csdn.net/bbwangj/article/details/81904350</h1>
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
</ul>`,r:{minutes:2.4,words:720},y:"a",t:""},["/note-book/Kubernetes/二进制安装kubernetes（六） kube-proxy组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（六） kube-proxy组件安装.md",":md"]],["v-53c4fe8d","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85kubernetes%EF%BC%88%E5%9B%9B%EF%BC%89%20kube-scheduler%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85.html",{d:1691939318e3,e:`<h1> 介绍资料转载地址：https://www.jianshu.com/p/c4c60ccda8d0</h1>
<h1> kube-scheduler在集群中的作用</h1>
<p>kube-scheduler是以插件形式存在的组件，正因为以插件形式存在，所以其具有可扩展可定制的特性。kube-scheduler相当于整个集群的调度决策者，其通过预选和优选两个过程决定容器的最佳调度位置。</p>
<h1> kube-scheduler源码中的关键性调用链</h1>
<p>![img](二进制安装kubernetes（四） kube-scheduler组件安装.assets/webp-16918409243531.webp)</p>`,r:{minutes:1.45,words:436},y:"a",t:"介绍资料转载地址：https://www.jianshu.com/p/c4c60ccda8d0"},["/note-book/Kubernetes/二进制安装kubernetes（四） kube-scheduler组件安装.html","/note-book/Kubernetes/二进制安装kubernetes（四） kube-scheduler组件安装.md",":md"]],["v-639f36bc","/note-book/Kubernetes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E9%83%A8%E7%BD%B2Kubernetes.html",{d:1691939318e3,e:`<h1> 架构</h1>
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
<h1> Label：</h1>
<ul>
<li>Label value 最多63个字节</li>
<li>并且只能是字母和数字开头</li>
</ul>
<h1> Label Select：</h1>
<ul>
<li>有两种选择方式</li>
</ul>
`,r:{minutes:.15,words:44},y:"a",t:"Label："},["/note-book/Kubernetes/什么是Label和Label选择器.html","/note-book/Kubernetes/什么是Label和Label选择器.md",":md"]],["v-7544ffb4","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFName%E5%92%8CNameSpace.html",{d:1691939318e3,e:`<figure><figcaption>image-20220516192028904</figcaption></figure>
`,r:{minutes:.03,words:10},y:"a",t:""},["/note-book/Kubernetes/什么是Name和NameSpace.html","/note-book/Kubernetes/什么是Name和NameSpace.md",":md"]],["v-95889b98","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFPod%E5%92%8CPod%E6%8E%A7%E5%88%B6%E5%99%A8.html",{d:1691939318e3,e:`<h1> 什么是Pod和Pod控制器</h1>
<figure><figcaption>image-20220516191925621</figcaption></figure>
<h1> Deployment 部署</h1>
<h1> DaemonSet 每个运算节点都起一份</h1>
<h1> ReplicaSet -管理-&gt; DaemonSet -管理-&gt; Pod</h1>
<h1> StatefulSet 管理有状态应用</h1>
<h1> Job 任务</h1>
<h1> Cronjob 定时周期任务</h1>
`,r:{minutes:.21,words:62},y:"a",t:"什么是Pod和Pod控制器"},["/note-book/Kubernetes/什么是Pod和Pod控制器.html","/note-book/Kubernetes/什么是Pod和Pod控制器.md",":md"]],["v-b33727c8","/note-book/Kubernetes/%E4%BB%80%E4%B9%88%E6%98%AFService%E5%92%8CIngress.html",{d:1691939318e3,e:`<h1> 什么是Service和Ingress</h1>
<figure><figcaption>image-20220516192235849</figcaption></figure>
<h1> 流量调度</h1>
<p>4层和7层  业务域流量调度</p>
`,r:{minutes:.11,words:32},y:"a",t:"什么是Service和Ingress"},["/note-book/Kubernetes/什么是Service和Ingress.html","/note-book/Kubernetes/什么是Service和Ingress.md",":md"]],["v-4f01f3b8","/note-book/Kubernetes/%E4%BD%BF%E7%94%A8%20vmagent%20%E4%BB%A3%E6%9B%BF%20Prometheus%20%E9%87%87%E9%9B%86%E7%9B%91%E6%8E%A7%E6%8C%87%E6%A0%87.html",{d:1691939318e3,e:`<p>vmagent 可以帮助我们从各种来源收集指标并将它们存储在 VM 或者任何其他支持 remote write 协议的 Prometheus 兼容的存储系统中。</p>
<h1> 特性</h1>
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
</ul>`,r:{minutes:8.74,words:2623},y:"a",t:"特性"},["/note-book/Kubernetes/使用 vmagent 代替 Prometheus 采集监控指标.html","/note-book/Kubernetes/使用 vmagent 代替 Prometheus 采集监控指标.md",":md"]],["v-23bf45e1","/note-book/Kubernetes/%E5%B8%B8%E7%94%A8%E4%BC%98%E5%8C%96.html",{d:1691939318e3,e:`<h1> 主机系统优化</h1>
<pre><code>limit优化

ulimit -SHn 65535
</code></pre>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf

* soft nofile <span class="token number">655360</span>
* hard nofile <span class="token number">131072</span>
* soft nproc <span class="token number">655350</span>
* hard nproc <span class="token number">655350</span>
* soft memlock unlimited
* hard memlock unlimited
  EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.13,words:340},y:"a",t:"主机系统优化"},["/note-book/Kubernetes/常用优化.html","/note-book/Kubernetes/常用优化.md",":md"]],["v-0a8284ed","/note-book/Kubernetes/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%BC%82%E5%B8%B8%E6%96%AD%E7%94%B5%E9%80%A0%E6%88%90kubernetes%E6%95%85%E9%9A%9C.html",{d:1692346453e3,e:`<h1> 断电造成kubernetes故障</h1>
<blockquote>
<p>http://31mwww.linuxea.com/2580.html
https://blog.csdn.net/liuyij3430448/article/details/130406844
因为宿主机系统 esxi 的内存条老化，导致esxi异常关机。内部虚拟机全部断电。总共30几台吧。</p>
<p>经过检查和擦拭内存金手指，服务器正常开机。</p>
<p>老家伙你不能倒下啊。你不run了我就得run啊。。。</p>
</blockquote>
<h2> 服务器显示状态</h2>
<figure><figcaption>image-20230818150814096</figcaption></figure>`,r:{minutes:5.26,words:1579},y:"a",t:"断电造成kubernetes故障"},["/note-book/Kubernetes/记一次异常断电造成kubernetes故障.html","/note-book/Kubernetes/记一次异常断电造成kubernetes故障.md",":md"]],["v-788034ca","/note-book/LinuxFromScratch/LFS-NoteBook.html",{d:1691939318e3,e:`<h1> LFS编译笔记以深入了解Linux</h1>
<h2> LF规定的包</h2>
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
</table>`,r:{minutes:62.75,words:18824},y:"a",t:"LFS编译笔记以深入了解Linux"},[":md"]],["v-5133ac50","/note-book/LinuxOperaSystem/Linux%E5%A4%87%E4%BB%BD%E4%B8%BAliveOS.html",{d:1698989873e3,e:`<h1> 使用Systemback克隆Ubuntu系统</h1>
<blockquote>
<p>https://zhuanlan.zhihu.com/p/375912899</p>
</blockquote>
<p>#基于Systemback⼯具实现ubuntu系统的镜像归档、复制和克隆安装#</p>
<h2> ⼀、准备⼯作</h2>
<ol>
<li>待克隆的ubuntu系统主机</li>
<li>U盘，≥8G</li>
<li>新的主机（什么操作系统⽆限制）</li>
</ol>
<h2> ⼆、注意事项</h2>
<p>⾃主程序不要安装在系统根⽬录“/”下，否则可能导致程序克隆不成功，建议安装在/opt⽬录下三、步骤：安装systemback⼯具 -&gt; 制作镜像 -&gt; 刻录U盘 -&gt; U盘启动安装</p>`,r:{minutes:3.39,words:1017},y:"a",t:"使用Systemback克隆Ubuntu系统"},["/note-book/LinuxOperaSystem/Linux备份为liveOS.html","/note-book/LinuxOperaSystem/Linux备份为liveOS.md",":md"]],["v-1c82387b","/note-book/LinuxOperaSystem/bash%E5%88%A9%E7%94%A8%E6%89%A9%E5%B1%95%E5%AD%97%E7%AC%A6%E9%9B%86%E5%AE%9E%E7%8E%B0rm.html",{d:1700560048e3,e:`<h1> bash利用扩展字符集实现rm</h1>
<h2> 事出有因</h2>
<p>昨天在群里看到一个暴躁老哥遇到了一个恶搞教程,使用一段特殊的代码删除了自己的/home目录。气的他直骂自己是傻逼。</p>
<p>果然，自己的快乐是建立在别人的痛苦之上的，不好意思我笑出声来了。</p>
<figure><figcaption>image-20231121165908477</figcaption></figure>
<figure><figcaption>5FEC69FE77FFF255977FC97C31C2E6D7</figcaption></figure>
<p>这个是什么意思呢？我这边查了一些资料然后把过程记录下来。</p>`,r:{minutes:6.5,words:1949},y:"a",t:"bash利用扩展字符集实现rm"},["/note-book/LinuxOperaSystem/bash利用扩展字符集实现rm.html","/note-book/LinuxOperaSystem/bash利用扩展字符集实现rm.md",":md"]],["v-759f12ff","/note-book/LinuxOperaSystem/grub2%E6%89%8B%E5%8A%A8%E5%91%BD%E4%BB%A4%E5%BC%95%E5%AF%BC%E6%95%99%E7%A8%8B.html",{d:1698989873e3,e:`<h1> grub2各种手动命令引导教程</h1>
<h2> 手动引导ubuntu的iso镜像文件</h2>
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
</code></pre>`,r:{minutes:2.96,words:889},y:"a",t:"grub2各种手动命令引导教程"},["/note-book/LinuxOperaSystem/grub2手动命令引导教程.html","/note-book/LinuxOperaSystem/grub2手动命令引导教程.md",":md"]],["v-eeb679e4","/note-book/LinuxOperaSystem/shell%E8%84%9A%E6%9C%AC%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%B7%A5%E5%85%B7shc.html",{d:1698989873e3,e:`<h1> shc 脚本加密解密工具</h1>
<h1> 一.简单介绍</h1>
<p>shc是linux的一款加密脚本的插件，将shc放到系统的可执行目录下我们可以直接运行shc命令</p>
<h1> 二.shc的安装</h1>
<div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>[root<span class="token variable">@disk</span> ~]#yum install gcc <span class="token operator">-</span>y
[root<span class="token variable">@disk</span> ~]#curl <span class="token operator">-</span>fsSl <span class="token property">http</span><span class="token punctuation">:</span><span class="token comment">//www.datsi.fi.upm.es/~frosal/sources/shc-3.8.9.tgz &gt; shc-3.8.9.tgz</span>
[root<span class="token variable">@disk</span> ~]#tar zxf shc<span class="token operator">-</span>3.8.9.tgz
[root<span class="token variable">@disk</span> ~]#cd shc<span class="token operator">-</span>3.8.9
[root<span class="token variable">@disk</span> ~]#make
[root<span class="token variable">@disk</span> ~]#mv shc <span class="token operator">/</span>bin<span class="token operator">/</span>
[root<span class="token variable">@disk</span> ~]#cd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.81,words:544},y:"a",t:"shc 脚本加密解密工具"},["/note-book/LinuxOperaSystem/shell脚本加密解密工具shc.html","/note-book/LinuxOperaSystem/shell脚本加密解密工具shc.md",":md"]],["v-19869778","/note-book/LinuxOperaSystem/ssh%20%E8%AE%BE%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html",{d:1698989873e3,e:`<h1> 使用SSH -R将私有服务器上网</h1>
<blockquote>
<p>SSH -R是一种SSH远程端口转发技术，它可以将本地端口转发到远程服务器上，从而实现远程访问本地服务的功能。具体来说，SSH  -R会在远程服务器上启动一个监听指定端口的进程，并将所有传入的连接转发到本地主机的指定端口。这样，您就可以在远程服务器上访问本地主机上运行的服务，而无需将服务直接暴露在公共网络中。</p>
</blockquote>
<h2> 什么是ssh -R</h2>
<p>SSH -R是一种远程端口转发技术，它可以将本地端口转发到远程服务器上，从而实现远程访问本地服务的功能。</p>
<h2> 目标</h2>`,r:{minutes:2.09,words:628},y:"a",t:"使用SSH -R将私有服务器上网"},["/note-book/LinuxOperaSystem/ssh 设置反向代理.html","/note-book/LinuxOperaSystem/ssh 设置反向代理.md",":md"]],["v-0c50d2dd","/note-book/LinuxOperaSystem/ssh%E6%8A%8A%E8%BF%9C%E7%A8%8B%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%88%B0%E6%9C%AC%E5%9C%B0.html",{d:1698989873e3,e:`<h1> ssh把远程端口映射到本地</h1>
<h2> 应用场景1： docker容器端口映射到本地</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">80</span>:172.18.0.3:80 root@43.136.116.195
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.33,words:398},y:"a",t:"ssh把远程端口映射到本地"},["/note-book/LinuxOperaSystem/ssh把远程端口映射到本地.html","/note-book/LinuxOperaSystem/ssh把远程端口映射到本地.md",":md"]],["v-e5c7a1ce","/note-book/LinuxOperaSystem/tcpdump%E6%8A%93%E5%8C%85%E5%91%BD%E4%BB%A4.html",{d:1698989873e3,e:`<h1> tcpdump抓包命令</h1>
<blockquote>
<p>简介：tcpdump是一个可以根据需求来抓取网络上传输的数据包的工具</p>
</blockquote>
<h1> 常用的命令选项有：</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-c：设定抓取的数量
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.91,words:273},y:"a",t:"tcpdump抓包命令"},["/note-book/LinuxOperaSystem/tcpdump抓包命令.html","/note-book/LinuxOperaSystem/tcpdump抓包命令.md",":md"]],["v-28d01994","/note-book/LinuxOperaSystem/%E5%91%BD%E4%BB%A4%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9F%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html",{d:1698989873e3,e:`<h1> 使用命令创建虚拟镜像文件</h1>
<blockquote>
<p>https://zhuanlan.zhihu.com/p/81767176</p>
</blockquote>
<h2> 1.使用 dd 命令创建虚拟镜像文件</h2>
<figure><figcaption>img</figcaption></figure>
<h2> 2.使用 mkfs 命令格式化磁盘（我们这里是自己创建的虚拟磁盘镜像）</h2>
<figure><figcaption>img</figcaption></figure>
<p>查看Linux 支持哪些文件系统</p>
<figure><figcaption>img</figcaption></figure>`,r:{minutes:1.42,words:427},y:"a",t:"使用命令创建虚拟镜像文件"},["/note-book/LinuxOperaSystem/命令创建虚拟镜像文件.html","/note-book/LinuxOperaSystem/命令创建虚拟镜像文件.md",":md"]],["v-156dfb56","/note-book/LinuxOperaSystem/%E6%8C%89%E7%94%B5%E6%BA%90%E8%BD%AF%E5%85%B3%E6%9C%BA%E8%A6%81%E7%AD%89%E5%BE%8560%E7%A7%92%E8%AE%BE%E7%BD%AE%E6%9B%B4%E7%9F%AD%E7%9A%84%E6%97%B6%E9%97%B4.html",{d:1698989873e3,e:`<h1> Ubuntu20.04按电源软关机要等待60秒，可以设置更短的时间吗?</h1>
<p>Ubuntu 20.04默认情况下按电源键软关机会等待60秒，但是你可以通过修改系统配置文件来更改这个时间。具体步骤如下：</p>
<h2> 打开终端（快捷键：Ctrl+Alt+T）。</h2>
<h2> 输入以下命令打开配置文件：</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo nano /etc/systemd/system.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.67,words:201},y:"a",t:"Ubuntu20.04按电源软关机要等待60秒，可以设置更短的时间吗?"},["/note-book/LinuxOperaSystem/按电源软关机要等待60秒设置更短的时间.html","/note-book/LinuxOperaSystem/按电源软关机要等待60秒设置更短的时间.md",":md"]],["v-7208e0fe","/note-book/LinuxOperaSystem/%E8%AE%A9%E6%9F%90%E4%B8%AA%E5%91%BD%E4%BB%A4%E4%B8%8D%E8%BE%93%E5%87%BA.html",{d:1698989873e3,e:`<h1> 让某个命令不输出</h1>
<p>假如让ls命令不输出</p>
<p>正常情况下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token operator">&amp;&gt;</span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.5,words:149},y:"a",t:"让某个命令不输出"},["/note-book/LinuxOperaSystem/让某个命令不输出.html","/note-book/LinuxOperaSystem/让某个命令不输出.md",":md"]],["v-79d1ae7f","/note-book/Nginx/Nginx%E5%8F%98%E9%87%8F%E5%A4%A7%E5%85%A8.html",{d:1691939318e3,e:`<h1> Nginx的变量参数 详解</h1>
<h2> 参数</h2>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>$args                    <span class="token comment">#请求中的参数值</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.17,words:1251},y:"a",t:"Nginx的变量参数 详解"},["/note-book/Nginx/Nginx变量大全.html","/note-book/Nginx/Nginx变量大全.md",":md"]],["v-0c6b7d0f","/note-book/Nginx/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86.html",{d:1691939318e3,e:`<h1> nginx代理</h1>
<blockquote>
<p>nginx本身是不支持https协议请求转发，为了让nginx能达到这一效果需要借助第三方模块ngx_http_proxy_connect_module</p>
</blockquote>
<h2> 配置</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.81,words:242},y:"a",t:"nginx代理"},["/note-book/Nginx/Nginx正向代理.html","/note-book/Nginx/Nginx正向代理.md",":md"]],["v-72bc3488","/note-book/Nginx/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E6%94%AF%E6%8C%81https.html",{d:1697693514e3,c:"Nginx",e:`<h1> Nginx正向代理支持https</h1>
<blockquote>
<p><a href="/nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86https.zip">脚本中用到的文件压缩包</a></p>
<p>模块：https://github.com/chobits/ngx_http_proxy_connect_module</p>
<p>nginx源码： http://nginx.org/download/</p>
<p>tcp优化文档： https://blog.csdn.net/guyue35/article/details/131465652</p>
</blockquote>`,r:{minutes:4.53,words:1358},y:"a",t:"Nginx正向代理支持https"},["/note-book/Nginx/Nginx正向代理支持https.html","/note-book/Nginx/Nginx正向代理支持https.md",":md"]],["v-384ed63f","/note-book/Nginx/Nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E9%AB%98%E5%B9%B6%E5%8F%91.html",{d:1697509682e3,e:`<h1> Nginx正向代理高并发</h1>
<h2> Proxy</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.96,words:289},y:"a",t:"Nginx正向代理高并发"},["/note-book/Nginx/Nginx正向代理高并发.html","/note-book/Nginx/Nginx正向代理高并发.md",":md"]],["v-6f000423","/note-book/Nginx/Nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%92%8C%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html",{d:1691939318e3,e:`<h1> Nginx的负载均衡和故障转移</h1>
<h2> 1、轮询（默认）</h2>
<p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> tomcatserver</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.79,words:1737},y:"a",t:"Nginx的负载均衡和故障转移"},["/note-book/Nginx/Nginx的负载均衡和故障转移.html","/note-book/Nginx/Nginx的负载均衡和故障转移.md",":md"]],["v-26dd9c7b","/note-book/Nginx/nginx-plus-module-lua.html",{d:1691939318e3,e:`<h1> 动态模块Lua</h1>
<blockquote>
<p>将Lua联合例程集成到NGINX事件处理模型中，使用由NGINX,Inc。编写和支持的Lua动态模块。</p>
<p>http://openresty.org</p>
<p>这个开源 Web 平台主要由章亦春（<a href="http://agentzh.org" target="_blank" rel="noopener noreferrer">agentzh</a>）维护。在 2011 年之前曾由雅虎中国和<a href="http://www.taobao.com" target="_blank" rel="noopener noreferrer">淘宝网</a>赞助，在后来的 2012 ~ 2016 年间主要由美国的 <a href="http://www.cloudflare.com" target="_blank" rel="noopener noreferrer">CloudFlare 公司</a> 提供支持。目前，OpenResty® 主要由 OpenResty 软件基金会和 OpenResty Inc. 公司提供支持。</p>
<p>2009年，agentzh &amp; chaoslawful一起基于Nginx用C语言开发OpenResty
2011年，agentzh离职专心维护OpenResty
2012-2016年，Cloudflare赞助支持agentzh专心开发OpenResty，快速发展
2016年，锤子科技赞助OpenResty软件基金会（发布会的门票收入100万元）以支持OpenResty开发</p>
<p>https://blog.csdn.net/shasharoman/article/details/120069206</p>
</blockquote>`,r:{minutes:3.05,words:914},y:"a",t:"动态模块Lua"},[":md"]],["v-01b8e297","/note-book/Nginx/nginx01.html",{d:1691939318e3,e:`<h1> Nginx初级篇</h1>
<h1> 1、Nginx 的优势</h1>
<p>Nginx (engine x) 是一个高性能的HTTP(解决C10k的问题)和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。反代图示</p>
<p>nginx的web优势</p>
<h2> 1、io多路复用</h2>
<p>理论方法</p>
<h3> 第一种方法：</h3>
<p>最传统的多进程并发模型 (每进来一个新的I/O流会分配一个新的进程管理）。</p>
<h3> 第二种方法：</h3>
<p>I/O多路复用 (单个线程，通过记录跟踪每个I/O流(sock)的状态，来同时管理多个I/O流 。)发明它的原因，是尽量多的提高服务器的吞吐能力。在同一个线程里面， 通过拨开关的方式，来同时传输多个I/O流</p>`,r:{minutes:32.95,words:9886},y:"a",t:"Nginx初级篇"},[":md"]],["v-036dbb36","/note-book/Nginx/nginx02.html",{d:1691939318e3,e:`<h1> Nginx高级进阶篇</h1>
<h2> Nginx Web服务器</h2>
<h2> Nginx Proxy 服务器</h2>
<h3> 原理</h3>
<h4> 正向代理</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>内网客户机通过代理访问互联网，通常需要设置代理服务器的地址和端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:7.09,words:2126},y:"a",t:"Nginx高级进阶篇"},[":md"]],["v-052293d5","/note-book/Nginx/nginx03.html",{d:1691939318e3,e:`<h1> Nginx Web架构实战</h1>
<h2> 动态网站架构</h2>
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
</table>`,r:{minutes:22.1,words:6630},y:"a",t:"Nginx Web架构实战"},[":md"]],["v-4396c282","/note-book/Nginx/nginx%E5%8D%95%E6%9C%BA%E7%99%BE%E4%B8%87%E5%B9%B6%E5%8F%91.html",{d:1691939318e3,e:`<h1> Nginx 单机百万QPS环境搭建</h1>
<p>https://www.freesion.com/article/18981262639/</p>
`,r:{minutes:.04,words:12},y:"a",t:"Nginx 单机百万QPS环境搭建"},["/note-book/Nginx/nginx单机百万并发.html","/note-book/Nginx/nginx单机百万并发.md",":md"]],["v-30f385af","/note-book/Nginx/nginx%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B.html",{d:1691939318e3,e:`<h1> Nginx配置示例</h1>
<h2> book.itrusts.top.conf</h2>
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
</code></pre>`,r:{minutes:9.06,words:2717},y:"a",t:"Nginx配置示例"},["/note-book/Nginx/nginx配置示例.html","/note-book/Nginx/nginx配置示例.md",":md"]],["v-10913ee4","/note-book/Nginx/ngx_stream_ssl_preread_module.html",{d:1691939318e3,e:`<h1> ngx_stream_ssl_preread_module</h1>
<blockquote>
<p>https://docshome.gitbook.io/nginx-docs/he-xin-gong-neng/stream/ngx_stream_ssl_preread_module</p>
</blockquote>
<p>允许从clienthello中提取信息，而不会终止SSL/TLS,例如通过sni请求的服务器名称</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">map</span> <span class="token variable">$ssl_preread_server_name</span> <span class="token variable">$name</span></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.22,words:66},y:"a",t:"ngx_stream_ssl_preread_module"},[":md"]],["v-3eb55632","/note-book/OpenSSH-Server/ssh%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E7%99%BB%E9%99%86%E5%AF%86%E7%A0%81.html",{d:1691939318e3,e:`<h1> ssh日志记录登陆密码</h1>
<h1> ssh记录登陆密码</h1>
<p>了解到ssh自身不记录登陆的用户名密码</p>
<p>但我们可以通过修改ssh源码或者打补丁的方式来实现对远程登陆用户密码的记录</p>
<p>只需修改ssh源码或者打补丁重新编译，安装</p>
<p>即可获得一个新的ssh用户端</p>
<h2> 过程</h2>
<h3> 1、准备环境</h3>
<p>安装对应的openssh源码包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://mirror.leaseweb.com/pub/OpenBSD/OpenSSH/portable/openssh-7.5p1.tar.gz


<span class="token comment"># 各个版本源码下载</span>
<span class="token comment"># https://mirror.leaseweb.com/pub/OpenBSD/OpenSSH/portable/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.83,words:848},y:"a",t:"ssh日志记录登陆密码"},["/note-book/OpenSSH-Server/ssh日志记录登陆密码.html","/note-book/OpenSSH-Server/ssh日志记录登陆密码.md",":md"]],["v-ce601f4c","/note-book/OperaSystems/CPU%E5%92%8C%E5%86%85%E5%AD%98%E7%9A%84%E6%9E%B6%E6%9E%84%20UMA%E5%92%8CNUMA.html",{d:1691939318e3,e:`<h1> CPU和内存之间的架构分为两种：</h1>
<h2> 1、UMA</h2>
<p>UMA全称为 Uniform Memory Access，叫做一致性内存访问</p>
<p>多个CPU通过同一根总线来访问内存。无论多个CPU是访问内存的不同内存单元还是相同的内存单元，同一时刻，只有一个CPU能够访问内存。</p>
<p>CPU之间通过总线串行的访问内存，所以会出现访问瓶颈！
![在这里插入图片描述](CPU和内存的架构 UMA和NUMA.assets/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5byg5a2f5rWpX2pheQ==,size_20,color_FFFFFF,t_70,g_se,x_16-16918414601881.png)</p>`,r:{minutes:1.4,words:421},y:"a",t:"CPU和内存之间的架构分为两种："},["/note-book/OperaSystems/CPU和内存的架构 UMA和NUMA.html","/note-book/OperaSystems/CPU和内存的架构 UMA和NUMA.md",":md"]],["v-5d982049","/note-book/OperaSystems/Journal%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> Journal日志服务详解</h1>
<h2> Journal日志服务</h2>
<blockquote>
<p>journalctl 用来查询 systemd-journald 服务收集到的日志。systemd-journald 服务是 systemd init 系统提供的收集系统日志的服务。</p>
</blockquote>
<p>常用命令行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>journalctl 查看所有日志

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.99,words:897},y:"a",t:"Journal日志服务详解"},["/note-book/OperaSystems/Journal日志服务详解.html","/note-book/OperaSystems/Journal日志服务详解.md",":md"]],["v-3e5ab3dc","/note-book/OperaSystems/Linux%E4%B8%8B%E7%9A%84ASLR%EF%BC%88PIE%EF%BC%89%E5%86%85%E5%AD%98%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6%E5%92%8C%E7%BB%95%E8%BF%87.html",{d:1691939318e3,e:`<h3> 1.1  Linux下的ASLR内存保护机制</h3>
<h4> 1.1.1  Linux下的ASLR工作原理</h4>
<p>工作原理与window下的aslr类似</p>
<figure><figcaption>img</figcaption></figure>
<h4> 1.1.2 Linux下利用内存地址泄露绕过ASLR</h4>
<h5> ⑴. 原理分析：</h5>
<p>那么如何解决地址随机化的问题呢？</p>
<p>思路是：我们需要先泄漏出libc.so某些函数在内存中的地址，然后再利用泄漏出的函数地址根据偏移量计算出system()函数和/bin/sh字符串在内存中的地址，然后再执行我们的ret2libc的shellcode。既然栈，libc，heap的地址都是随机的。我们怎么才能泄露出libc.so的地址呢？方法还是有的，因为程序本身在内存中的地址并不是随机的，所以我们只要把返回值设置到程序本身就可执行我们期望的指令了。</p>`,r:{minutes:3.63,words:1090},y:"a",t:""},["/note-book/OperaSystems/Linux下的ASLR（PIE）内存保护机制和绕过.html","/note-book/OperaSystems/Linux下的ASLR（PIE）内存保护机制和绕过.md",":md"]],["v-2b1ef3ea","/note-book/OperaSystems/Linux%E5%8D%87%E7%BA%A7%E5%86%85%E6%A0%B8%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`<h1> Linux centos7升级内核 两种方法</h1>
<p>Linux的内核概念不用说大家也很清楚，正是内核版本的不同，才有Linux发行版本的说法，现在主流的centos应该都是centos7了，从centos7.2开始，内核版本为3.10，越往后内核版本越高。高版本的内核修复了许多的低版本内核的bug，因此，系统是需要提高内核版本的，从而提高安全性，稳定性，并增加更多的功能。</p>
<p>通常来说，Linux是支持多版本内核共存的，无非是系统启动的时候应用哪个版本内核而已。
关于内核：</p>
<p>Linux 内核分两种：官方内核（通常是内核开发人员用）和各大 Linux 发行版内核（一般用户常用）。
关于Linux内核版本号：</p>`,r:{minutes:7.97,words:2391},y:"a",t:"Linux centos7升级内核 两种方法"},["/note-book/OperaSystems/Linux升级内核的两种方法.html","/note-book/OperaSystems/Linux升级内核的两种方法.md",":md"]],["v-31ec57f8","/note-book/OperaSystems/Linux%E6%8E%92%E6%9F%A5%E5%93%AA%E4%B8%AA%E8%BF%9B%E7%A8%8B%E5%92%8CIP%E5%9C%A8%E5%8D%A0%E7%94%A8%E7%BD%91%E9%80%9F.html",{d:1691939318e3,e:`<h1> Linux排查哪个进程在占用网速</h1>
<p>本教程适用于Centos7,Centos8</p>
<h2> 使用NetHogs定位哪个进程在占用流量</h2>
<h3> 安装NetHogs</h3>
<pre><code># 安装NetHogs。
yum install nethogs -y   
</code></pre>
<h3> 查看进程流量</h3>
<pre><code># 执行以下命令，查看占用内网带宽的进程。
nethogs eth0

# 查询间隔(-d)5秒
nethogs eth1 -d 5
</code></pre>
<figure><figcaption></figcaption></figure>`,r:{minutes:2.14,words:642},y:"a",t:"Linux排查哪个进程在占用网速"},["/note-book/OperaSystems/Linux排查哪个进程和IP在占用网速.html","/note-book/OperaSystems/Linux排查哪个进程和IP在占用网速.md",":md"]],["v-00524e94","/note-book/OperaSystems/Linux%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%85%8D%E5%AF%86%E7%A0%81sudo.html",{d:1691939318e3,e:`<h1> Linux普通用户免密码sudo</h1>
<blockquote>
<p>该操作为越权操作，仅适用于个人单用户操作系统</p>
</blockquote>
<h2> 进入root身份</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.35,words:105},y:"a",t:"Linux普通用户免密码sudo"},["/note-book/OperaSystems/Linux普通用户免密码sudo.html","/note-book/OperaSystems/Linux普通用户免密码sudo.md",":md"]],["v-636408d2","/note-book/OperaSystems/Linux%E7%BD%91%E7%BB%9C%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96%E7%A7%98%E7%B1%8D.html",{d:1691939318e3,e:`<h1> 超全Linux网络内核参数优化秘籍</h1>
<p>最近很多使用Linux系统的小伙伴在后台提问，老师呀，我好烦恼！</p>
<p><strong>你说企业服务器在进行网络通讯过程中，为了避免网络性能瓶颈对网络通讯的影响，我该如何对系统内核中网络参数进行优化调整从而提高网络的安全性和并发性！</strong></p>
<p><strong>具体来说是这样的要求：</strong></p>
<ul>
<li>**提高安全性：**避免恶意的网络攻击行为对系统网络资源造成影响；</li>
<li>**提高并发性：**使服务器设备可以承载更多的客户端主机的访问；</li>
</ul>
<p>从而提升网络性能，增加服务器中网络服务的稳定性与高效性。</p>`,r:{minutes:8.85,words:2654},y:"a",t:"超全Linux网络内核参数优化秘籍"},["/note-book/OperaSystems/Linux网络内核参数优化秘籍.html","/note-book/OperaSystems/Linux网络内核参数优化秘籍.md",":md"]],["v-4581fe4c","/note-book/OperaSystems/Linux%E8%99%9A%E6%8B%9F%E7%BD%91%E7%BB%9C%E8%AE%BE%E5%A4%87%E4%B9%8Bbridge.html",{d:1691939318e3,e:`<h1> <a href="https://segmentfault.com/a/1190000009491002" target="_blank" rel="noopener noreferrer">Linux虚拟网络设备之bridge(桥)</a></h1>
<p>转自：https://segmentfault.com/a/1190000009491002</p>
<p>继前两篇介绍了<a href="https://segmentfault.com/a/1190000009249039" target="_blank" rel="noopener noreferrer">tun/tap</a>和<a href="https://segmentfault.com/a/1190000009251098" target="_blank" rel="noopener noreferrer">veth</a>之后，本篇将介绍Linux下常用的一种虚拟网络设备，那就是bridge(桥)。</p>`,r:{minutes:13.42,words:4025},y:"a",t:"Linux虚拟网络设备之bridge(桥)"},["/note-book/OperaSystems/Linux虚拟网络设备之bridge.html","/note-book/OperaSystems/Linux虚拟网络设备之bridge.md",":md"]],["v-1c72c74c","/note-book/OperaSystems/Shell%E5%BF%AB%E6%8D%B7%E9%94%AE.html",{d:1691939318e3,e:`<h1> shell快捷键总结</h1>
<h2> 光标移动</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Ctrl + <span class="token operator">&lt;</span> 移动到前一个单词开头
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.35,words:406},y:"a",t:"shell快捷键总结"},["/note-book/OperaSystems/Shell快捷键.html","/note-book/OperaSystems/Shell快捷键.md",":md"]],["v-79d954ee","/note-book/OperaSystems/date%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`<h1> date 显示或设置时间</h1>
<h2> 显示时间</h2>
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
</code></pre>`,r:{minutes:1,words:301},y:"a",t:"date 显示或设置时间"},["/note-book/OperaSystems/date命令.html","/note-book/OperaSystems/date命令.md",":md"]],["v-b89ca53e","/note-book/OperaSystems/grep%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`<h1> grep 中级</h1>
<h2> 开始结束符号</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@oldboyedu59 ~<span class="token punctuation">]</span><span class="token comment"># #在 /etc/services 文件中过滤出包含3306的行</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.4,words:1020},y:"a",t:"grep 中级"},["/note-book/OperaSystems/grep命令.html","/note-book/OperaSystems/grep命令.md",":md"]],["v-4977fd20","/note-book/OperaSystems/ip%E5%91%BD%E4%BB%A4.html",{d:1691939318e3,e:`<h1> 用IP命令管理网桥bridge</h1>
<h2> link</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ip link add name bridge_name type bridge 也可以简化 ip link add bridge_name type bridge</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.97,words:292},y:"a",t:"用IP命令管理网桥bridge"},["/note-book/OperaSystems/ip命令.html","/note-book/OperaSystems/ip命令.md",":md"]],["v-966b2156","/note-book/OperaSystems/macvlan%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> macvlan</h1>
<p>https://blog.csdn.net/hzj_001/article/details/100182686    macvlan 详解</p>
<p>https://cloud.tencent.com/developer/article/1432601    Docker 网络模型之 macvlan 详解，图解，实验完整</p>
<p>https://www.cnblogs.com/4a8a08f09d37b73795649038408b5f33/p/12200769.html     <a href="https://www.cnblogs.com/4a8a08f09d37b73795649038408b5f33/p/12200769.html" target="_blank" rel="noopener noreferrer">macvlan几种模式</a></p>`,r:{minutes:.16,words:49},y:"a",t:"macvlan"},["/note-book/OperaSystems/macvlan详解.html","/note-book/OperaSystems/macvlan详解.md",":md"]],["v-8484bb5a","/note-book/OperaSystems/proc-sysrq-trigger%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> /proc/sysrq-trigger详解</h1>
<h2> 立即重新启动计算机</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> b <span class="token operator">&gt;</span> /proc/sysrq-trigger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.45,words:136},y:"a",t:"/proc/sysrq-trigger详解"},["/note-book/OperaSystems/proc-sysrq-trigger详解.html","/note-book/OperaSystems/proc-sysrq-trigger详解.md",":md"]],["v-92954d86","/note-book/OperaSystems/proc%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> /proc详解</h1>
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
</blockquote>`,r:{minutes:42.71,words:12813},y:"a",t:"/proc详解"},["/note-book/OperaSystems/proc详解.html","/note-book/OperaSystems/proc详解.md",":md"]],["v-00bad121","/note-book/OperaSystems/sed.html",{d:1691939318e3,e:`<h1> Linux三剑客-sed</h1>
<pre><code>19999,9999,9999,9999
[root@handsome-man ~]# 
</code></pre>
<h2> sed命令执行过程</h2>
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
</code></pre>`,r:{minutes:2.17,words:651},y:"a",t:"Linux三剑客-sed"},[":md"]],["v-bb5b9e90","/note-book/OperaSystems/sysstat%20Linux%E7%8A%B6%E6%80%81%E5%B7%A5%E5%85%B7%E5%8C%85.html",{d:1691939318e3,e:`<h1> 简介</h1>
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
sysstat功能强大，功能也在不断的增强，每个版本提供了不同的功能，用户可以到sysstat官网了解工具最先发展情况和获得相应的帮助手册。官网地址： http://sebastien.godard.pagesperso-orange.fr/</p>`,r:{minutes:2.56,words:769},y:"a",t:"简介"},["/note-book/OperaSystems/sysstat Linux状态工具包.html","/note-book/OperaSystems/sysstat Linux状态工具包.md",":md"]],["v-15e0f84a","/note-book/OperaSystems/%E4%BD%BF%E7%94%A8curl%E5%AE%9E%E7%8E%B0%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81.html",{d:1691939318e3,e:`<h1> 使用curl实现邮件发送</h1>
<h1> 概述</h1>
<p>本文讲解如何通过curl实现邮件发送功能，通过此功能，可以将一些配置信息自动发送到指定邮箱，满足自动运维要求。
测试发件邮箱：sina
测试收件邮箱：qq</p>
<h1> 脚本实例</h1>
<p>curl_send_mail.bat</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.87,words:261},y:"a",t:"使用curl实现邮件发送"},["/note-book/OperaSystems/使用curl实现邮件发送.html","/note-book/OperaSystems/使用curl实现邮件发送.md",":md"]],["v-269af0d2","/note-book/OperaSystems/%E4%BD%BF%E7%94%A8dev%E4%B8%8B%E7%9A%84tcp-udp%E5%AE%9E%E7%8E%B0socket.html",{d:1700537497e3,e:`<h1> 关于 /dev/(tcp|udp)/\${HOST}/\${PORT}</h1>
<h1> 一、背景</h1>
<p>Linux中的一个特殊文件： /dev/tcp  打开这个文件就类似于发出了一个socket调用，建立一个socket连接，读写这个文件就相当于在这个socket连接中传输数据。</p>
<p>我们可以通过重定向实现基于tcp/udp协议的软件通讯，/dev/tcp/host/port  只要读取或者写入这个文件，相当于系统会尝试连接:host 这台机器，对应port端口。</p>
<p>如果主机以及端口存在，就建立一个socket 连接，将在 /proc/self/fd 目录下面，有对应的文件出现。</p>`,r:{minutes:4.76,words:1429},y:"a",t:"关于 /dev/(tcp|udp)/${HOST}/${PORT}"},["/note-book/OperaSystems/使用dev下的tcp-udp实现socket.html","/note-book/OperaSystems/使用dev下的tcp-udp实现socket.md",":md"]],["v-5a559594","/note-book/OperaSystems/%E5%A4%87%E4%BB%BDLinux%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`<h1> 备份Linux系统</h1>
<p>在前面的一些文章中，我反复提到经常会把Linux系统搞崩溃，所以备份系统就是一件不容忽视的事情。由于Linux系统本身的优越性，系统的备份和还原还是比较容易的。主要表现在以下方面：</p>
<ul>
<li>Linux系统所有的数据都以文件的形式存在，所以备份就是直接拷贝文件；硬盘分区也被当成文件，所以可以直接克隆硬盘数据。</li>
<li>Linux系统自带很多实用工具，比如tar、dd、rsync等，备份还原系统不需要购买或下载第三方软件。</li>
<li>Linux系统在运行时其硬盘上的文件可以直接被覆盖，所以还原系统的时候不需要另外的引导盘。（当然，系统完全挂掉到无法启动这种情况还是需要另外的引导盘的。）</li>
</ul>`,r:{minutes:3.38,words:1014},y:"a",t:"备份Linux系统"},["/note-book/OperaSystems/备份Linux系统.html","/note-book/OperaSystems/备份Linux系统.md",":md"]],["v-20664f24","/note-book/OperaSystems/%E5%A4%A7%E9%87%8F%E4%BD%BF%E7%94%A8swap%E5%AF%BC%E8%87%B4%E6%97%A0%E6%B3%95%E5%88%87%E6%8D%A2.html",{d:1691939318e3,e:`<h1> swapoff failed: Cannot allocate memory</h1>
<h2> 一、报错：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span> <span class="token parameter variable">-v</span>
swapoff /www/swap
swapoff: /www/swap: swapoff failed: Cannot allocate memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.27,words:81},y:"a",t:"swapoff failed: Cannot allocate memory"},["/note-book/OperaSystems/大量使用swap导致无法切换.html","/note-book/OperaSystems/大量使用swap导致无法切换.md",":md"]],["v-2741a660","/note-book/OperaSystems/%E5%B8%B8%E8%A7%81%E4%B9%B1%E7%A0%81%E4%BA%A7%E7%94%9F%E5%8E%9F%E5%9B%A0.html",{d:1691939318e3,e:`<h1> 常见乱码产生原因</h1>
<h2> 常见乱码产生原因</h2>
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
</table>`,r:{minutes:1.37,words:412},y:"a",t:"常见乱码产生原因"},["/note-book/OperaSystems/常见乱码产生原因.html","/note-book/OperaSystems/常见乱码产生原因.md",":md"]],["v-f71e4004","/note-book/OperaSystems/%E6%9B%B4%E6%8D%A2%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AF%AD%E8%A8%80.html",{d:1691939318e3,e:`<h1> 更换系统和命令行语言</h1>
<h1> 一.背景信息</h1>
<p>在安装完 kali linux 2020.1 时，其操作系统默认语言为英文的，我们操作起来比较麻烦，为了以后操作方便起见，这边将其操作系统默认语言更改为中文。本篇文章将带领各位小伙伴们一起去将操作系统默认语言更改为中文</p>
<h1> 二.操作步骤</h1>
<pre><code>打开Terminal Emulator 界面，查看当前系统语言为默认英文



在Terminal Emulator 中执行dpkg-reconfigure locales命令

注意：如果是root用户可直接执行dpkg-reconfigure locales命令，如果是kali用户则需先切换成root用户登陆再进行执行
具体切换成root用户登陆请参考下列链接地址：https://blog.csdn.net/weixin_46192679/article/details/104474829
</code></pre>`,r:{minutes:1.45,words:436},y:"a",t:"更换系统和命令行语言"},["/note-book/OperaSystems/更换系统和命令行语言.html","/note-book/OperaSystems/更换系统和命令行语言.md",":md"]],["v-0a501b28","/note-book/OperaSystems/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8FPATH.html",{d:1691939318e3,e:`<h1> 环境变量</h1>
<h2> 修改环境变量</h2>
<p>export PS1="[[\\e[34;1m]\\u@[\\e[0m][\\e[32;1m]\\H[\\e[0m] [\\e[31;1m]\\w[\\e[0m]]$ " 基本优化命令行 颜色</p>
<h3> 1、临时-重新登录系统后失效。</h3>
<p>export PS1="[[\\e[34;1m]\\u@[\\e[0m][\\e[32;1m]\\H[\\e[0m] [\\e[31;1m]\\w[\\e[0m]]\\$ "</p>
<h3> 2、永久-写入文件/etc/profile 与生效</h3>
<pre><code>[root@VM-4-4-centos ~]# tail -1  /etc/profile
export PS1="[\\[\\e[34;1m\\]\\u@\\[\\e[0m\\]\\[\\e[32;1m\\]\\H\\[\\e[0m\\] \\[\\e[31;1m\\]\\w\\[\\e[0m\\]]\\\\$ "
[root@VM-4-4-centos ~]# source  /etc/profile
</code></pre>`,r:{minutes:.47,words:142},y:"a",t:"环境变量"},["/note-book/OperaSystems/环境变量PATH.html","/note-book/OperaSystems/环境变量PATH.md",":md"]],["v-244d585c","/note-book/OperaSystems/%E8%BF%9B%E7%A8%8B.html",{d:1691939318e3,e:`<h1> 进程</h1>
<h2> 什么是进程:</h2>
<p>进程:</p>
<p>​		运行中的程序的一个副本，是被载入内存的一个指令集合，是资源分配的单位
​		进程ID（Process ID，PID）号码被用来标记各个进程
​		UID、GID、和SELinux语境决定对文件系统的存取和访问权限
​		通常从执行进程的用户来继承
​		存在生命周期</p>
<h2> 进程创建：</h2>
<p>​		init：第一个进程，从 CentOS7 以后为systemd
​		进程：都由其父进程创建，fork()，父子关系，CoW：Copy On Write
​		刚创建时，共用父进程的内存，有新数据像刚创建的子进程写入时，单独开辟一个内存空间，把父进程内存复制一份给子进程做数据修改
​</p>`,r:{minutes:8.16,words:2449},y:"a",t:"进程"},["/note-book/OperaSystems/进程.html","/note-book/OperaSystems/进程.md",":md"]],["v-76b130c2","/note-book/OperaSystems/%E9%80%BB%E8%BE%91%E5%8D%B7%E6%97%A0%E6%B3%95%E5%88%A0%E9%99%A4.html",{d:1691939318e3,e:`<h1> 逻辑卷删除问题</h1>
<p>存储池名称：fs2
逻辑卷名称：fs2
逻辑卷文件系统被占用(Logical volume /dev/<em>/</em> contains a filesystem in use.)</p>
<p>[root@f1s2001 ldnas]# lvremove -f /dev/fs2/fs2
Logical volume fs2/fs2 contains a filesystem in use.</p>
<h1> 逻辑卷可能被挂载了</h1>
<p>​        df 查看挂载详情，找到对应逻辑卷进行卸载操作后，再执行删除
​        若挂载信息为：
​            /dev/fs2/fs2   1038336    32996   1005340   4% /mnt
​        执行 umount /dev/fs2/fs2 或 umount /mnt 进行卸载</p>`,r:{minutes:1.38,words:415},y:"a",t:"逻辑卷删除问题"},["/note-book/OperaSystems/逻辑卷无法删除.html","/note-book/OperaSystems/逻辑卷无法删除.md",":md"]],["v-794ccb14","/note-book/PhotoShop/ps%E5%A6%82%E4%BD%95%E5%8E%BB%E6%B0%B4%E5%8D%B0%E7%9A%844%E4%B8%AA%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`<h1> PhotoShop如何去水印的4个方法</h1>
<h2> 方法一：</h2>
<p>1、 双击打开photoshop软件，导入含有水印的图片</p>
<figure><figcaption>1-导入含有水印的图片</figcaption></figure>
<p>2、 然后，在左侧工具栏中选择矩形选框工具，如图所示，框中水印部分</p>
<figure><figcaption>2-1选择矩形选框工具</figcaption></figure>
<figure><figcaption>2-2框中水印部分</figcaption></figure>
<p>3、 接着，执行编辑-填充，也可以直接按下Shift+F5，选择内容识别</p>`,r:{minutes:2.39,words:718},y:"a",t:"PhotoShop如何去水印的4个方法"},["/note-book/PhotoShop/ps如何去水印的4个方法.html","/note-book/PhotoShop/ps如何去水印的4个方法.md",":md"]],["v-b7e1d682","/note-book/Physical_server/Huawei%20x288%E7%B3%BB%E5%88%97%E9%A3%8E%E6%89%87%E8%BD%AC%E9%80%9F%E8%B0%83%E9%80%9F.html",{d:1691939318e3,e:`<h1> 华为服务器2288H V2的IPMI设置风扇转速和工作模式的命令</h1>
<p>登录web imana--实时监控---部件---风扇--控制模式</p>
<p>首先用ssh登录服务器的idrac</p>
<p>原文：</p>
<p>设置风扇的官方命令
https://support.huawei.com/enterprise/zh/doc/EDOC1000038841/688375b5</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>设置风扇的工作模式为手动，并设置手动的时间为1亿秒，大概3年多
ipmcset <span class="token parameter variable">-d</span> fanmode <span class="token parameter variable">-v</span> <span class="token number">1</span> <span class="token number">100000000</span>
设置风扇转速是百分之多少，默认是20%，设置必须设置最少30。。。。。所以敲上面的命令即可。
ipmcset <span class="token parameter variable">-d</span> fanlevel <span class="token parameter variable">-v</span> <span class="token number">20</span>

获取风扇的当前模式，自动还是手动，手动剩余多少秒，风扇当前？%
ipmcget <span class="token parameter variable">-d</span> fanmode

获取风扇的当前模式，自动还是手动，手动剩余多少秒，风扇当前？%
ipmcget <span class="token parameter variable">-d</span> fanlevel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.66,words:197},y:"a",t:"华为服务器2288H V2的IPMI设置风扇转速和工作模式的命令"},["/note-book/Physical_server/Huawei x288系列风扇转速调速.html","/note-book/Physical_server/Huawei x288系列风扇转速调速.md",":md"]],["v-bf89a59e","/note-book/Portainer/Portainer%20%E5%8D%95%E6%9C%BA%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`<h1> 一、介绍</h1>
<p>Portainer是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面，基本能满足中小型单位对容器管理的全部需求。</p>
<h1> 二、本地模式部署</h1>
<h2> 1、查询当前有哪些Portainer镜像</h2>
<pre><code>docker search portainer
</code></pre>
<p>![image-20220512153403266](Portainer 单机部署.assets/image-20220512153403266-16918417647751.png)</p>`,r:{minutes:1.05,words:316},y:"a",t:"一、介绍"},["/note-book/Portainer/Portainer 单机部署.html","/note-book/Portainer/Portainer 单机部署.md",":md"]],["v-56a71ded","/note-book/Prometheus/Prometheus%E7%9B%91%E6%8E%A7Windows%E4%B8%BB%E6%9C%BA.html",{d:1691939318e3,e:`<h1> [Prometheus监控Windows主机]</h1>
<p><strong>1. 基本说明</strong></p>
<p>使用Prometheus监控Windows主机和Linux主机并无太大区别，都是使用社区的Exporter进行采集数据，之后暴露一个接口，可以让Prometheus采集到主机的数据。</p>
<p>其中监控Linux的Exporter是：https://github.com/prometheus/node_exporter</p>
<p>监控Windows主机的Exporter是：https://github.com/prometheus-community/windows_exporter</p>`,r:{minutes:1.16,words:348},y:"a",t:"[Prometheus监控Windows主机]"},["/note-book/Prometheus/Prometheus监控Windows主机.html","/note-book/Prometheus/Prometheus监控Windows主机.md",":md"]],["v-6fa63cee","/note-book/RabbitMQ/rabbitmq.html",{d:1691939318e3,e:`<h1> 大型网站高并发架构-RabbitMQ消息队列</h1>
<h2> 消息队列/中间件</h2>
<figure><figcaption>image-20211120102031495</figcaption></figure>
<h2> RabbitMQ详解</h2>
<h3> 传递模式</h3>
<p>消息队列中间件有<strong>两种传递模式</strong>：【点对点 安全】 和 【发布/订阅(Pub/Sub)分支模式 并发】
点对点依靠队列的原理；发布/订阅则可以用于一对多的广播</p>
<h3> 中间件作用</h3>
<p>消息中间件的作用：解耦、冗余(存储)、扩展性、削峰、可恢复性、顺序保证、缓冲、异步通信</p>`,r:{minutes:9.77,words:2931},y:"a",t:"大型网站高并发架构-RabbitMQ消息队列"},[":md"]],["v-5a7f9ef1","/note-book/RouterOS/Azure%E5%88%B7%E5%86%99ROS%E6%95%99%E7%A8%8B.html",{d:1691939318e3,e:`<h1> Azure刷写ROS教程</h1>
<h2> ①先决条件</h2>
<ul>
<li>必须为root身份</li>
<li>必须使用第一代VM虚拟机</li>
<li>必须使用 chr-7.0beta5.img 这个镜像（新版 chr-7.4.img 因为文件格式更改，刷写难度较高）</li>
</ul>
<h2> ②刷写过程</h2>
<h3> 1. 首先准备一个可以使用的Azure账户,创建虚拟机</h3>
<figure><figcaption>image-20220805194541186</figcaption></figure>
<h3> 2.在如图位置点击配置生成按钮，选择第一代（重要）</h3>`,r:{minutes:1.71,words:512},y:"a",t:"Azure刷写ROS教程"},["/note-book/RouterOS/Azure刷写ROS教程.html","/note-book/RouterOS/Azure刷写ROS教程.md",":md"]],["v-790a3eba","/note-book/RouterOS/RouterOS%E5%88%A9%E7%94%A8%EF%BC%88L2TP%EF%BC%89%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%96%B9%E5%BC%82%E5%9C%B0%E7%BB%84%E7%BD%91.html",{d:1691939318e3,e:`<h2> RouterOS利用V-P-N（L2TP）实现多方异地组网</h2>
<p>去年一个做网商的朋友找到我要搞定多方异地组网实现互通，还要实现在家办公。</p>
<p>当前环境是</p>
<p>A总部，RouterOS（ROS-A）当作主路由，使用的是CCR1009，100M专线；</p>
<p>B工厂，RouterOS（ROS-B）主路由，使用的是J1900软路由，200M商宽；</p>
<p>C办事处，RouterOS（ROS-C）主路由，使用的是J1900软路由，200M商宽，各自上网不互通。</p>
<h3> 一、新网络规划</h3>
<p>经过和朋友的商量，需要不花钱的方案，对安全性也没太多的要求，只求能组网能用。</p>`,r:{minutes:5.3,words:1589},y:"a",t:""},["/note-book/RouterOS/RouterOS利用（L2TP）实现多方异地组网.html","/note-book/RouterOS/RouterOS利用（L2TP）实现多方异地组网.md",":md"]],["v-87713e26","/note-book/RouterOS/%E7%94%A8ros%E8%B7%AF%E7%94%B1%E4%BD%9C%E4%B8%BA%E4%B8%AD%E8%BD%AC%E6%95%99%E7%A8%8B.html",{d:1691939318e3,e:`<h1> 用ros路由作为中转教程</h1>
<blockquote>
<p>ros路由相信对大佬级别很简单，对我们这群小白还是有点难度的，接触ros路由也有1年了，基本都是作为国内NAT小鸡中转用的，今天看有人需要就简单的说明一下，供MJJ们也能用上，减少折腾吧。</p>
</blockquote>
<h2> 步骤一：注册试用账号</h2>
<p>去ros官网注册个试用账号，不登录的话会被限速带宽1M，虽然试用一个月，但是到期后还是维持试用时期设置的配置。</p>
<p>ROS路由官网:https://mikrotik.com/client</p>
<h2> 步骤二：国内小鸡DD成ROS路由</h2>`,r:{minutes:4.4,words:1320},y:"a",t:"用ros路由作为中转教程"},["/note-book/RouterOS/用ros路由作为中转教程.html","/note-book/RouterOS/用ros路由作为中转教程.md",":md"]],["v-0dc78858","/note-book/S3-SimpleStorageService/MiniO_Docker_Deploy.html",{d:1691939318e3,e:`<h1> 使用Docker部署minio</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>docker
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
    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.21,words:63},y:"a",t:"使用Docker部署minio"},[":md"]],["v-04e93595","/note-book/S3-SimpleStorageService/bug%20and%20Issue.html",{d:1691939318e3,e:`<h1> ERROR Unable to initialize backend: no locks available.</h1>
<p>![001.png](bug and Issue.assets/b390fb7d1ac006cf10b52294210348ab-16918418773061.png)</p>
<p>服务器做了nas共享存储后，修改minio的数据目录为nas共享目录，启动minio服务失败，报错信息如上图所示：</p>
<p>从这个日志来看，应该是minio拿不到nfs文件系统的锁。
解决方案</p>
<pre><code>nfs挂载时加nolock参数

使用nfsv4,而不是用nfsv3
</code></pre>`,r:{minutes:.63,words:188},y:"a",t:"ERROR Unable to initialize backend: no locks available."},["/note-book/S3-SimpleStorageService/bug and Issue.html","/note-book/S3-SimpleStorageService/bug and Issue.md",":md"]],["v-b010c524","/note-book/Tomcat/tomcat.html",{d:1691939318e3,e:`<h1> TOMCAT构建企业级高负载服务器</h1>
<h2> 前言</h2>
<h3> 什么是JAVA虚拟机</h3>
<pre><code>所谓虚拟机，就是一台虚拟的计算机。他是一款软件，用来执行一系列虚拟计算机指令。大体上，虚拟机可以分为系统虚拟机和程序虚拟机。大名鼎鼎的VisualBox、VMware就属于系统虚拟机。他们完全是对物理计算机的仿真。提供了一个可以运行完整操作系统的软件平台。
程序虚拟机的典型代表就是Java虚拟机，它专门为执行单个计算机程序而设计，在Java虚拟机中执行的指令我们称为Java字节码指令。无论是系统虚拟机还是程序虚拟机，在上面运行的软件都呗限制于虚拟机提供的资源中。
</code></pre>`,r:{minutes:12.14,words:3643},y:"a",t:"TOMCAT构建企业级高负载服务器"},[":md"]],["v-42119fed","/note-book/Traefik/",{d:1691939318e3,e:`<h1> Traefik</h1>
<h2> 概览</h2>
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
</ul>`,r:{minutes:.59,words:177},y:"a",t:"Traefik"},["/note-book/Traefik/README.md"]],["v-69833e9a","/note-book/Traefik/traefik%E4%BD%9C%E4%B8%BAdocker%E8%BE%B9%E7%BC%98%E8%B7%AF%E7%94%B1.html",{d:1691939318e3,e:`<h1> Traefik作为docker的边缘路由</h1>
<blockquote>
<p>即： provider为docker</p>
</blockquote>
<h2> 方案设计</h2>
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
</ul>`,r:{minutes:3.24,words:972},y:"a",t:"Traefik作为docker的边缘路由"},["/note-book/Traefik/traefik作为docker边缘路由.html","/note-book/Traefik/traefik作为docker边缘路由.md",":md"]],["v-454654c1","/note-book/VMware/%E5%90%84%E4%B8%AA%E7%89%88%E6%9C%AC%E7%9A%84%E6%BF%80%E6%B4%BB%E5%AF%86%E9%92%A5.html",{d:1691939318e3,e:`<h1> VMware各个版本的激活密钥</h1>
<p>注：如果是WinXP或32位系统请用 10.0 版本；11.0 版本之后支持Win7或更高版64位系统。</p>
<p>VMware 所有版本永久许可证激活密钥：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>VMware Workstation v17 <span class="token keyword">for</span> Windows
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.27,words:382},y:"a",t:"VMware各个版本的激活密钥"},["/note-book/VMware/各个版本的激活密钥.html","/note-book/VMware/各个版本的激活密钥.md",":md"]],["v-5b263b15","/note-book/VMware/%E8%99%9A%E6%8B%9F%E5%8C%96%E7%89%A9%E7%90%86%E6%9C%BA.html",{d:1691939318e3,e:`<h1> 虚拟化物理机</h1>
<h2> 一、工具介绍</h2>
<p>使用vmware公司提供的一款软件“vmware converter standalone”，有以下优点：</p>
<p>1、该过程对物理机无损</p>
<p>2、4.3以上的版本仅支持热克隆，保证在原来物理机运行的同时，尽可能保证数据的一致性</p>
<p>3、转换完成后，若物理机与虚机在同一网络需要修改其中一台机器的IP、机器名等信息</p>
<p>4、转换windows xp和windows server2008以上的版本（server 2003不确定是否可以）</p>
<h2> 二、转换原理</h2>
<figure><a href="https://img2018.cnblogs.com/blog/1489604/201906/1489604-20190627165200680-1510240940.png" target="_blank" rel="noopener noreferrer"></a><figcaption>img</figcaption></figure>`,r:{minutes:3.55,words:1065},y:"a",t:"虚拟化物理机"},["/note-book/VMware/虚拟化物理机.html","/note-book/VMware/虚拟化物理机.md",":md"]],["v-46b48e13","/note-book/WindowsOperaSystem/PowerShell%20%E6%89%93%E5%8D%B0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html",{d:169199284e4,e:`<h1> PowerShell 打印环境变量</h1>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">PS</span> C:\\Users\\IT-Desktop&gt; <span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Path Env:

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.77,words:231},y:"a",t:"PowerShell 打印环境变量"},["/note-book/WindowsOperaSystem/PowerShell 打印环境变量.html","/note-book/WindowsOperaSystem/PowerShell 打印环境变量.md",":md"]],["v-24f7c960","/note-book/WindowsOperaSystem/PowerShell%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html",{d:169199284e4,e:`<h1> PowerShell 操作系统禁止运行脚本</h1>
<blockquote>
<p>在使用 VS code 自带终端的时会报出"系统禁止脚本运行的错误"，原因是因为 PowerShell 执行策略的问题。</p>
</blockquote>
<h2> 解决方法：</h2>
<pre><code>管理员身份运行 PowerShell
执行：get-ExecutionPolicy，若显示 Restricted 表示状态是禁止的
执行：set-ExecutionPolicy，会提示输入参数
输入 RemoteSigned 会提示进行选择
输入：Y，回车
</code></pre>
`,r:{minutes:.34,words:103},y:"a",t:"PowerShell 操作系统禁止运行脚本"},["/note-book/WindowsOperaSystem/PowerShell 操作系统禁止运行脚本.html","/note-book/WindowsOperaSystem/PowerShell 操作系统禁止运行脚本.md",":md"]],["v-28c94530","/note-book/WindowsOperaSystem/Windows%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%94%B9%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7%E7%9B%AE%E5%BD%95.html",{d:169199284e4,e:`<h1> Windows系统更改/迁移用户目录</h1>
<p>系统盘为C盘，C盘空间不足，C盘太满了，C盘清理时查看发现<code>C:\\Users</code>目录占用几十个GB，以下方法可将<code>Users</code>目录大部分空间转移。</p>
<h3> 1. 准备工作</h3>
<p>更改/迁移用户目录之前先自行备份当前用户的资料（下载目录、桌面文件等），以免数据丢失！！！</p>
<h3> 2. 修改注册表</h3>
<p>更改默认用户目录路径，快捷键<code>Win+R</code>输入<code>regedit</code>打开系统注册表，切换至如下路径：</p>
<div class="language-BAT line-numbers-mode" data-ext="BAT"><pre class="language-BAT"><code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.91,words:572},y:"a",t:"Windows系统更改/迁移用户目录"},["/note-book/WindowsOperaSystem/Windows系统更改迁移用户目录.html","/note-book/WindowsOperaSystem/Windows系统更改迁移用户目录.md",":md"]],["v-bf02f4a4","/note-book/Zabbix/zabbix.html",{d:1691939318e3,e:`<h1> Zabbix 构建企业级监控告警平台</h1>
<h2> Zabbix 构建企业级监控告警平台</h2>
<h3> 一. 简介</h3>
<p>Zabbix 是一个基于 WEB 界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。它能监视各种网络参数，保证服务器系统的安全运营；并提供灵活的通知机制以让系统管理员快速定位/解决存在的各种问题。</p>
<h3> 二.监控对象</h3>
<hr>
<p>源代码: *.html *.jsp *.php *.py
数据库： MySQL,MariaDB,Oracle,SQL Server,DB2
应用软件：Nginx,Apache,PHP,Tomcat agent</p>`,r:{minutes:11.94,words:3582},y:"a",t:"Zabbix 构建企业级监控告警平台"},[":md"]],["v-8b9d7fba","/note-book/Zabbix/zabbix%E7%9A%84VMwareGuest%E8%A1%A5%E5%85%85%E7%BC%BA%E9%99%B7.html",{d:1692674203e3,e:`<h1> zabbix的VMwareGuest补充缺陷</h1>
<h2> 主机丢失</h2>
<p><strong>删除</strong>powerstate的自动删除机制，删除这个</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Discard unchanged with heartbeat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.41,words:123},y:"a",t:"zabbix的VMwareGuest补充缺陷"},["/note-book/Zabbix/zabbix的VMwareGuest补充缺陷.html","/note-book/Zabbix/zabbix的VMwareGuest补充缺陷.md",":md"]],["v-5bece530","/note-book/ebook/ebook.html",{d:1691939318e3,e:`<h1> 目录</h1>
<ul>
<li>
<p><a href="Linux%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98%E6%8C%87%E5%8D%97.pdf">Linux性能调优指南.pdf</a></p>
</li>
<li>
<p><a href="28%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AFdocker.pdf">28企业级容器技术docker.pdf</a></p>
</li>
</ul>
<h2> 面试经典</h2>
<ul>
<li><a href="Q%E6%8A%80%E8%83%BD.pdf">Q技能.pdf</a></li>
<li><a href="W%E6%8A%80%E8%83%BD.pdf">W技能.pdf</a></li>
<li><a href="E%E6%8A%80%E8%83%BD.pdf">E技能.pdf</a></li>
<li><a href="%E7%BB%88%E6%9E%81%E5%A4%A7%E6%8B%9BR.pdf">终极大招R.pdf</a></li>
</ul>`,r:{minutes:.25,words:74},y:"a",t:"目录"},[":md"]],["v-42d1b932","/note-book/goaccess/goaccess%E7%BB%99ftp%E7%94%9F%E6%88%90%E5%88%86%E6%9E%90%E5%9B%BE.html",{d:1697698698e3,e:`<h1> goaccess给ftp生成分析图</h1>
<blockquote>
<p>官网：https://goaccess.io/</p>
<p>源码： https://github.com/allinurl/goaccess</p>
</blockquote>
<h2> 日志格式</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Sat Oct <span class="token number">7</span> <span class="token number">2023</span> <span class="token number">14</span>:41:57 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">61</span> /catfish.txt b _ POST g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:20:24 <span class="token number">24</span> <span class="token number">113.57</span>.80.113 <span class="token number">62537788</span> /textbook/ppts/L4-数据集成技术基础.pptx b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:19:15 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">137039</span> /textbook/works/作业3_catfish.pdf b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:18:09 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">137039</span> /textbook/works/作业3_catfish.pdf b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Wed Oct <span class="token number">4</span> <span class="token number">2023</span> <span class="token number">16</span>:16:45 <span class="token number">1</span> <span class="token number">113.57</span>.80.113 <span class="token number">267</span> /salmon_score.txt b _ GET g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>
Sat Sep <span class="token number">23</span> <span class="token number">2023</span> <span class="token number">17</span>:57:18 <span class="token number">1</span> <span class="token number">113.57</span>.80.8 <span class="token number">61</span> /salmon.txt b _ POST g LiuDanYi <span class="token function">ftp</span> <span class="token number">0</span> * <span class="token number">200</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.43,words:1030},y:"a",t:"goaccess给ftp生成分析图"},["/note-book/goaccess/goaccess给ftp生成分析图.html","/note-book/goaccess/goaccess给ftp生成分析图.md",":md"]],["v-4ae285a4","/note-book/memcache-redis/memcache-redis.html",{d:1691939318e3,e:`<h1> Memcache-Redis缓解数据库压力</h1>
<h1> 前言</h1>
<figure><figcaption>image-20211117093651109</figcaption></figure>
<h1> 简介</h1>
<h2> 缓存服务器作用</h2>
<p>加快访问速度，缓解数据库压力</p>
<h2> NoSQL</h2>
<p>net only sql</p>
<figure><figcaption>image-20211117094009409</figcaption></figure>
<h2> nosql产品</h2>
<p>redis</p>
<p>memcached</p>`,r:{minutes:16.86,words:5057},y:"a",t:"Memcache-Redis缓解数据库压力"},[":md"]],["v-04007d38","/note-book/DatabaseSystem/Etcd/etcd%E5%AE%89%E8%A3%85etcdkeeper.html",{d:1691939318e3,e:`<h1> etcd安装dashboard-etcdkeeper</h1>
<h2> 安装etcd keeper</h2>
<p>github地址：https://github.com/evildecay/etcdkeeper</p>
<p>安装简单，步骤简短。</p>
<h2> 获取安装包</h2>
<p>wget https://github.com/evildecay/etcdkeeper/releases/download/v0.7.6/etcdkeeper-v0.7.6-linux_x86_64.zip</p>
<h2> 解压安装包</h2>
<pre><code>unzip etcdkeeper-v0.7.6-linux_x86_64.zip 
mv etcdkeeper /usr/local/ 
cd /usr/local/etcdkeeper 
chmod +x etcdkeeper
</code></pre>`,r:{minutes:.92,words:275},y:"a",t:"etcd安装dashboard-etcdkeeper"},["/note-book/DatabaseSystem/Etcd/etcd安装etcdkeeper.html","/note-book/DatabaseSystem/Etcd/etcd安装etcdkeeper.md",":md"]],["v-350fc342","/note-book/DatabaseSystem/MySQL/%E5%9B%BD%E5%86%85%E6%BA%90.html",{d:1691939318e3,c:"数据库",e:`<h1> 国内源</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> localinstall http://mirrors.ustc.edu.cn/mysql-repo/mysql57-community-release-el7.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.22,words:67},y:"a",t:"国内源"},["/note-book/DatabaseSystem/MySQL/国内源.html","/note-book/DatabaseSystem/MySQL/国内源.md",":md"]],["v-1187c118","/note-book/DatabaseSystem/MySQL/%E6%9F%A5%E7%9C%8BMysql%E6%95%B0%E6%8D%AE%E9%87%8F%E5%A4%A7%E5%B0%8F.html",{d:1697513393e3,e:`<h1> 查看Mysql数据量大小</h1>
<p>以MB为单位统计，查询当前全部数据库的数据量大小。</p>
<p>data_length：数据大小
index_length：索引大小</p>
<p>括号被转义了，记得转回来</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SELECT table_schema <span class="token string">"Data Base Name"</span>,
    sum<span class="token punctuation">\\</span><span class="token punctuation">(</span>data_length+index_length<span class="token punctuation">\\</span><span class="token punctuation">)</span>/1024/1024 <span class="token string">"Data Base Size in MB"</span>
FROM information_schema.TABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.23,words:68},y:"a",t:"查看Mysql数据量大小"},["/note-book/DatabaseSystem/MySQL/查看Mysql数据量大小.html","/note-book/DatabaseSystem/MySQL/查看Mysql数据量大小.md",":md"]],["v-11c46d82","/note-book/DistributedSystem/Ansible/Centos7.x%20%E5%AE%89%E8%A3%85Python3.9.7%20%20Ansible4.5.html",{d:1691939318e3,e:`<h1> Centos7.x 安装Python3.9.7 &amp; Ansible4.5 （已验证）</h1>
<h2> 1、环境信息</h2>
<p>前期安装Ansible失败报"Failed to validate the SSL certificate"，可能前期安装python3时有问题，后索性升级SSH/SSL后再重新安装Python3,然后再升级pip,最后再安装Ansible</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装环境： 　Centos7.9
SSH/SSL:　　OpenSSH_8.7p1, OpenSSL <span class="token number">1.1</span>.1l  <span class="token number">24</span> Aug <span class="token number">2021</span>

<span class="token comment">#Python版本(3.9.7为此文章第2步安装后的版本信息)：</span>

<span class="token comment"># python --version</span>

Python <span class="token number">2.7</span>.5

<span class="token comment"># python3 --version</span>

Python <span class="token number">3.9</span>.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.38,words:415},y:"a",t:"Centos7.x 安装Python3.9.7 & Ansible4.5 （已验证）"},["/note-book/DistributedSystem/Ansible/Centos7.x 安装Python3.9.7  Ansible4.5.html","/note-book/DistributedSystem/Ansible/Centos7.x 安装Python3.9.7  Ansible4.5.md",":md"]],["v-761ac8fe","/note-book/DistributedSystem/Ansible/ansible%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%90%E7%BB%B4.html",{d:1691939318e3,e:`<h1> ansible自动化运维</h1>
<h1> 1-简介</h1>
<h2> <strong>Logo</strong></h2>
<figure><figcaption>image-20211106190344512</figcaption></figure>
<h2> 介绍</h2>
<p>ansible是新出现的自动化运维工具，基于<strong>Python</strong>开发，集合了众多运维工具（puppet、cfengine、chef、func、fabric）的优点，
实现了批量系统配置、批量程序部署、批量运行命令等功能。
无客户端。</p>
<p>我们要学一些Ansible的安装和一些基本概念,然后我们会开始研究一些真正有意思的东西 – <strong>playbook</strong>,配置管理,部署以及语法编排.我们将会学习如何使用/usr/bin/ansible执行ad-hoc并行命令,我们还会学习ansible的核心有什么样的模块可供使用.当然以后你也可以写你自己的模块,我们会在后期讲到.</p>`,r:{minutes:16.88,words:5065},y:"a",t:"ansible自动化运维"},["/note-book/DistributedSystem/Ansible/ansible自动化运维.html","/note-book/DistributedSystem/Ansible/ansible自动化运维.md",":md"]],["v-61515108","/note-book/DistributedSystem/JumperServer/HA_Deploy.html",{d:1691939318e3,e:`<h1> 负载均衡</h1>
<p>环境说明</p>
<ul>
<li>除 JumpServer 自身组件外，其他组件的高可用请参考对应的官方文档进行部署</li>
<li>按照此方式部署后，后续只需要根据需要扩容 JumpServer 节点然后添加节点到 HAProxy 即可</li>
<li>如果已经有 HLB 或者 SLB 可以跳过 HAProxy 部署，第三方 LB 要注意 session 和 websocket 问题</li>
<li>如果已经有 云存储 (* S3/Ceph/Swift/OSS/Azure) 可以跳过 MinIO 部署，MySQL Redis 也一样</li>
<li>生产环境中，应该使用 Ceph 等替代 NFS，或者部署高可用的 NFS 防止单点故障</li>
<li><a href="https://github.com/wojiushixiaobai/redis-sentinel" target="_blank" rel="noopener noreferrer">Redis 高可用快速部署可以参考此项目</a></li>
</ul>`,r:{minutes:16.87,words:5062},y:"a",t:"负载均衡"},[":md"]],["v-5865d184","/note-book/DistributedSystem/JumperServer/JumperServerDockerDeploy.html",{d:169215496e4,e:`<h1> JumperServer Docker容器部署</h1>
<h2> 环境展示和配置如下</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.08,words:1823},y:"a",t:"JumperServer Docker容器部署"},[":md"]],["v-9174ace0","/note-book/DistributedSystem/JumperServer/",{d:1691939318e3,e:`<h1> JumperServer Insight</h1>
<figure><figcaption>!界面展示</figcaption></figure>
<h2> Over View</h2>
<ul>
<li>开源：零门槛，线上快速获取和安装；</li>
<li>分布式：轻松支持大规模并发访问；</li>
<li>无插件：仅需浏览器，极致的 Web Terminal 使用体验；</li>
<li>多云支持：一套系统，同时管理不同云上面的资产；</li>
<li>云端存储：审计录像云端存储，永不丢失；</li>
<li>多租户：一套系统，多个子公司和部门同时使用；</li>
<li>多应用支持：数据库，Windows远程应用，Kubernetes。</li>
</ul>`,r:{minutes:3.9,words:1170},y:"a",t:"JumperServer Insight"},["/note-book/DistributedSystem/JumperServer/README.md"]],["v-91b5b3e2","/note-book/DistributedSystem/OpenStack/OpenStack-Queens%E7%89%88%E6%90%AD%E5%BB%BA%E8%AF%A6%E8%A7%A3.html",{d:1691939318e3,e:`<h1> OpenStack-Queens版搭建详解</h1>
<h1> 1.基础环境配置</h1>
<h2> 1.1 节点硬件规划</h2>
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
</table>`,r:{minutes:93.18,words:27955},y:"a",t:"OpenStack-Queens版搭建详解"},["/note-book/DistributedSystem/OpenStack/OpenStack-Queens版搭建详解.html","/note-book/DistributedSystem/OpenStack/OpenStack-Queens版搭建详解.md",":md"]],["v-7c8e6e87","/note-book/Gitlab/CI/gitlab%20ci%20%E7%BC%96%E5%86%99.html",{d:1691939318e3,e:`<h1> gitlab ci/cd 的两大要素</h1>
<ul>
<li>gitlab runner</li>
<li>gitlab-ci.yml</li>
</ul>
<p>.gitlab-ci.yml 基本关键词的使用</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>before_script
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:32.42,words:9726},y:"a",t:"gitlab ci/cd 的两大要素"},["/note-book/Gitlab/CI/gitlab ci 编写.html","/note-book/Gitlab/CI/gitlab ci 编写.md",":md"]],["v-eb33cb0a","/note-book/Gitlab/CI/gitlab%20ci%20%E9%83%A8%E7%BD%B2.html",{d:1691939318e3,e:`<figure><figcaption>Gitlab-ci:从零开始的前端自动化部署</figcaption></figure>
<p>官方文档url：https://docs.gitlab.com/ee/ci</p>
<h1> <strong>一.</strong> 概念介绍</h1>
<h2> <strong>0.</strong>   <strong>Gitlab</strong> <strong>触发</strong> <strong>CI</strong> 流程图</h2>
<figure><figcaption>img</figcaption></figure>
<h2> 1.1 gitlab-ci &amp;&amp; 自动化部署工具的运行机制</h2>`,r:{minutes:4.6,words:1379},y:"a",t:"一. 概念介绍"},["/note-book/Gitlab/CI/gitlab ci 部署.html","/note-book/Gitlab/CI/gitlab ci 部署.md",":md"]],["v-75d6f0c8","/note-book/Gitlab/CI/%E9%83%A8%E7%BD%B2Kubernetes%E7%B1%BB%E5%9E%8B%E7%9A%84gitlab-runner.html",{d:1691939318e3,e:`<h1> 一、安装helm工具</h1>
<h2> （1）下载软件包</h2>
<pre><code>wget https://get.helm.sh/helm-v3.8.0-linux-amd64.tar.gz
</code></pre>
<h2> （2）解压并拷贝文件位置</h2>
<pre><code>tar -zxvf helm-v3.8.0-linux-amd64.tar.gz

mv linux-amd64/helm /usr/local/bin/helm
</code></pre>
<p>这里需要注意的是将 /usr/local/bin 添加到环境变量中</p>
<h1> 二、配置chart存储库</h1>`,r:{minutes:10.08,words:3025},y:"a",t:"一、安装helm工具"},["/note-book/Gitlab/CI/部署Kubernetes类型的gitlab-runner.html","/note-book/Gitlab/CI/部署Kubernetes类型的gitlab-runner.md",":md"]],["v-1c751544","/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk_kfaka.html",{d:1691939318e3,e:`<h1> ELK+kafka构建高并发分布式日志收集系统</h1>
<h1> ELK+Kafka集群</h1>
<h2> 前言</h2>
<h3> 前言</h3>
<p>业务层可以直接写入到kafka队列中，不用担心elasticsearch的写入效率问题。
图示</p>
<figure><figcaption>在这里插入图片描述</figcaption></figure>
<h1> Kafka</h1>
<p>Apache kafka是消息中间件的一种，是一种分布式的，基于发布/订阅的消息系统。能实现一个为处理实时数据提供一个统一、高吞吐、低延迟的平台，且拥有分布式的，可划分的，冗余备份的持久性的日志服务等特点。</p>`,r:{minutes:15.02,words:4507},y:"a",t:"ELK+kafka构建高并发分布式日志收集系统"},["/note-book/Kafka/ELK_kafka构建高并发分布式日志收集系统/elk_kfaka.html","/note-book/Kafka/ELK+kafka构建高并发分布式日志收集系统/elk+kfaka.html","/note-book/Kafka/ELK+kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk+kfaka.html","/note-book/Kafka/ELK+kafka构建高并发分布式日志收集系统/elk+kfaka.md","/note-book/Kafka/ELK+kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/elk+kfaka.md"]],["v-37a8ebbd","/note-book/LinuxOperaSystem/Git/Centos7%20yum%20install%20git2.x%20%E8%BE%83%E6%96%B0%E7%89%88%E6%9C%AC.html",{d:1698989873e3,e:`<h1> Centos7 yum install git2.x(较新版本)</h1>
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
Git第三方仓库安装方式（IUS）</p>`,r:{minutes:.84,words:253},y:"a",t:"Centos7 yum install git2.x(较新版本)"},["/note-book/LinuxOperaSystem/Git/Centos7 yum install git2.x 较新版本.html","/note-book/LinuxOperaSystem/Git/Centos7 yum install git2.x 较新版本.md",":md"]],["v-3b5999cf","/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/AWK%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%87%BD%E6%95%B0.html",{d:1698989873e3,e:`<h1> AWK中的字符串操作函数</h1>
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
</ul>`,r:{minutes:.19,words:57},y:"a",t:"AWK中的字符串操作函数"},["/note-book/LinuxOperaSystem/Linux三剑客/AWK中的字符串操作函数.html","/note-book/LinuxOperaSystem/Linux三剑客/AWK中的字符串操作函数.md",":md"]],["v-66a50361","/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%20Runtime.html",{d:1698989873e3,e:`<h1> 安装Nvidia Runtime</h1>
<blockquote>
<p>参考链接</p>
<ul>
<li>https://nvidia.github.io/nvidia-container-runtime/</li>
<li>https://github.com/NVIDIA/nvidia-container-runtime</li>
</ul>
</blockquote>
<h2> 导入软件库</h2>
<h3> 根据操作系统分类导入</h3>
<h4> 基于Debian的操作系统</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -s -L https://nvidia.github.io/nvidia-container-runtime/gpgkey | \\
  sudo apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-container-runtime/$distribution/nvidia-container-runtime.list | \\
  sudo tee /etc/apt/sources.list.d/nvidia-container-runtime.list
sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.76,words:527},y:"a",t:"安装Nvidia Runtime"},["/note-book/LinuxOperaSystem/Nvidia/安装Nvidia Runtime.html","/note-book/LinuxOperaSystem/Nvidia/安装Nvidia Runtime.md",":md"]],["v-a467abfa","/note-book/LinuxOperaSystem/Nvidia/%E5%AE%89%E8%A3%85Nvidia%E9%A9%B1%E5%8A%A8.html",{d:1698989873e3,e:`<h1> 安装Nvidia驱动</h1>
<h2> 安装驱动依赖</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> gcc g++ <span class="token function">make</span> <span class="token parameter variable">-y</span>

<span class="token comment"># 删除原有开源驱动包</span>
<span class="token function">apt-get</span> remove <span class="token parameter variable">--purge</span> nvidia*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.54,words:162},y:"a",t:"安装Nvidia驱动"},["/note-book/LinuxOperaSystem/Nvidia/安装Nvidia驱动.html","/note-book/LinuxOperaSystem/Nvidia/安装Nvidia驱动.md",":md"]],["v-80d561d8","/note-book/LinuxOperaSystem/Samba/Linux%E4%BA%8EWindows%E4%BD%BF%E7%94%A8Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody%20nogroup%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html",{d:1698989873e3,e:`<h1> Samba共享文件时文件属性nobody</h1>
<p>Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/samba/smb.conf修改配置文件如下:
在 <span class="token punctuation">[</span>global<span class="token punctuation">]</span> 放入以下内容
force user <span class="token operator">=</span> 帐号
force group <span class="token operator">=</span> 群组
create mask <span class="token operator">=</span> 0664
directory mask <span class="token operator">=</span> 0775
存档，重启smbd
<span class="token function">sudo</span> <span class="token function">service</span> smbd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.25,words:75},y:"a",t:"Samba共享文件时文件属性nobody"},["/note-book/LinuxOperaSystem/Samba/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html","/note-book/LinuxOperaSystem/Samba/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.md",":md"]],["v-0e11c102","/note-book/LinuxOperaSystem/Samba/Linux%E6%8C%82%E8%BD%BDcifs%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{d:1698989873e3,e:`<h1> Linux挂载cifs共享存储</h1>
<p><strong>1、挂载方法</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mount -t cifc "windows共享文件夹" "Linux /mnt路径"


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.1,words:331},y:"a",t:"Linux挂载cifs共享存储"},["/note-book/LinuxOperaSystem/Samba/Linux挂载cifs文件系统.html","/note-book/LinuxOperaSystem/Samba/Linux挂载cifs文件系统.md",":md"]],["v-e966fc72","/note-book/LinuxOperaSystem/Samba/Samba%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E6%97%B6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7nobody.html",{d:1698989873e3,e:`<h1> Linux samba服务器设置简单匿名共享</h1>
<p>inux下面的samba非常的好用，很多人拿它来作共享文件服务器，</p>
<p>缺省配置下，samba必须提供用户名密码来访问，如果是所有人都可以访问的内容，那么是比较麻烦的，其实通过一个设置，即可实现不用输入用户名密码的匿名访问</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@linux-01 ~<span class="token punctuation">]</span><span class="token comment">#mkdir /home/myshare //建立共享文件夹share</span>
<span class="token punctuation">[</span>root@linux-01 ~<span class="token punctuation">]</span><span class="token comment">#vi /etc/samba/smb.conf //打开smb.conf配置文件</span>
workgroup <span class="token operator">=</span> WORKGROUP //修改为与windows主机同一个默认工作组
security <span class="token operator">=</span> share //将安全级别修改为“share”然后按PageDown键到文件末尾添加如下配置内容：<span class="token punctuation">[</span>myshare<span class="token punctuation">]</span>comment <span class="token operator">=</span> This is myshare //文件夹注释信息
path <span class="token operator">=</span> /home/myshare //设置共享文件夹在服务器重的路径
browseable <span class="token operator">=</span> <span class="token function">yes</span> //设置该共享文件夹在“网上邻居”中是否可见，设置为no时相当于隐藏共享文件夹。
guest ok <span class="token operator">=</span> <span class="token function">yes</span> //设置该共享文件夹是否所有人都可以访问，同public配置项
<span class="token builtin class-name">read</span> only <span class="token operator">=</span> <span class="token function">yes</span> //设置该共享文件夹权限为只读
writeable <span class="token operator">=</span> <span class="token function">yes</span>  //设置匿名用户可写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.13,words:340},y:"a",t:"Linux samba服务器设置简单匿名共享"},["/note-book/LinuxOperaSystem/Samba/Samba共享文件时文件属性nobody.html","/note-book/LinuxOperaSystem/Samba/Samba共享文件时文件属性nobody.md",":md"]],["v-19b6577e","/note-book/LinuxOperaSystem/Samba/Samba%E9%85%8D%E7%BD%AE%E4%B8%BE%E4%BE%8B.html",{d:1698989873e3,e:`<h1> Samba配置举例</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>YOUR-SHARE-NAME<span class="token punctuation">]</span>
        path <span class="token operator">=</span> /home/NAME/
        available <span class="token operator">=</span> <span class="token function">yes</span>
        browsable <span class="token operator">=</span> <span class="token function">yes</span>
        public    <span class="token operator">=</span> <span class="token function">yes</span>
        writable  <span class="token operator">=</span> <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.47,words:141},y:"a",t:"Samba配置举例"},["/note-book/LinuxOperaSystem/Samba/Samba配置举例.html","/note-book/LinuxOperaSystem/Samba/Samba配置举例.md",":md"]],["v-081b1a63","/note-book/LinuxOperaSystem/VNC/Ubuntu%2020.04%20%E5%AE%89%E8%A3%85VNC%20Server.html",{d:1698989873e3,e:`<h1> Ubuntu 20.04 安装VNC Server超简单教程</h1>
<h2> 1.确保安装了GNOME DESKTOP</h2>
<p>对于桌面版是不用说了，服务器版操作系统需要安装一下桌面</p>
<pre><code># apt install ubuntu-gnome-desktop
 
# systemctl set-default multi-user.target
 
$ startx
</code></pre>
<h2> 2.Installing VNC</h2>
<p>不要安装tigervncserver</p>
<p>一定要安装这个 standalone的，会有一点区别（不识别 下面的 -localhost no)</p>`,r:{minutes:1.23,words:370},y:"a",t:"Ubuntu 20.04 安装VNC Server超简单教程"},["/note-book/LinuxOperaSystem/VNC/Ubuntu 20.04 安装VNC Server.html","/note-book/LinuxOperaSystem/VNC/Ubuntu 20.04 安装VNC Server.md",":md"]],["v-5c90804c","/note-book/LinuxOperaSystem/Vim/vi%E7%BC%96%E8%BE%91%E5%99%A8.html",{d:1698989873e3,e:`<h1> vi编辑器</h1>
<h1> <code>vi</code> —— 终端中的编辑器</h1>
<h2> 目标</h2>
<ul>
<li><code>vi</code> 简介</li>
<li>打开和新建文件</li>
<li>三种工作模式</li>
<li>常用命令</li>
<li>分屏命令</li>
<li>常用命令速查图</li>
</ul>
<h2> 01. <code>vi</code> 简介</h2>
<h3> 1.1 学习 <code>vi</code> 的目的</h3>
<ul>
<li>在工作中，要对 <strong>服务器</strong> 上的文件进行 <strong>简单</strong> 的修改，可以使用 <code>ssh</code> 远程登录到服务器上，并且使用 <code>vi</code> 进行快速的编辑即可</li>
<li>常见需要修改的文件包括：
<ul>
<li><strong>源程序</strong></li>
<li><strong>配置文件</strong>，例如 <code>ssh</code> 的配置文件 <code>~/.ssh/config</code></li>
</ul>
</li>
</ul>`,r:{minutes:14,words:4200},y:"a",t:"vi编辑器"},["/note-book/LinuxOperaSystem/Vim/vi编辑器.html","/note-book/LinuxOperaSystem/Vim/vi编辑器.md",":md"]],["v-3352fc98","/note-book/LinuxOperaSystem/history/",{d:1698989873e3,e:`<h1> history命令详解</h1>
<p>https://blog.csdn.net/qq_42623156/article/details/110184465</p>
`,r:{minutes:.02,words:7},y:"a",t:"history命令详解"},["/note-book/LinuxOperaSystem/history/README.md"]],["v-22a3c8d7","/note-book/OperaSystems/OperatingSystemPrinciple/CPU%E7%9A%84%E8%99%9A%E6%8B%9F%E5%8C%96.html",{d:1691939318e3,e:`<h1> 4 CPU虚拟化</h1>
<p>CPU虚拟化的技术目标就是产生一种存在无限多CPU的假象，这一目标主要通过<strong>时分共享</strong>（time sharing）实现。时分共享中的执行单位/调度单位就是进程。</p>
<blockquote>
<p>（摘自MIT6.S081课）进程本身不是CPU，但是它们对应了CPU，它们使得你可以在CPU上运行计算任务。应用程序不能直接与CPU交互，只能与进程交互。操作系统内核会完成不同进程在CPU上的切换。所以，操作系统不是直接将CPU提供给应用程序，而是向应用程序提供“进程”，进程抽象了CPU，这样操作系统才能在多个应用程序之间复用一个或者多个CPU。</p>
</blockquote>`,r:{minutes:12.28,words:3684},y:"a",t:"4 CPU虚拟化"},["/note-book/OperaSystems/OperatingSystemPrinciple/CPU的虚拟化.html","/note-book/OperaSystems/OperatingSystemPrinciple/CPU的虚拟化.md",":md"]],["v-050e9cf9","/note-book/OperaSystems/OperatingSystemPrinciple/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%BB%8B%E7%BB%8D.html",{d:1691939318e3,e:`<h1> 操作系统介绍</h1>
<p>在冯诺伊曼体系中，程序对机器码读取并执行，而在现代的操作系统设计中（意味着需要考虑到多程序同时运行），程序并不直接访问硬件（需要保护硬件资源），这时就需要一个软件来协调二者：通过受保护的方式分配资源给各个程序；这一软件就是操作系统，因此操作系统也可以看作硬件与应用程序间的抽象层。</p>
<p>操作系统这一抽象（abstraction）的设计原则也是计算机科学中的常用手法。本节开头引述的David  Wheeler的这句名言超前地预言了计算机科学的现状。这句名言中的‘level of  indirection’也会被故意错误地被引用为‘layer of  abstraction’（后者的说法更接近当下流行的语言）。实际上，抽象使得构建一个更大型的系统更加容易，例如在使用高级语言编程的时候不用去关心下层的汇编、数字电路或者晶体管的细节；在网络栈中传输应用数据的时候不需考虑物理电缆是否可靠；在操作系统中运行程序的时候也不用去关心硬件资源的使用和保护。</p>`,r:{minutes:4.77,words:1432},y:"a",t:"操作系统介绍"},["/note-book/OperaSystems/OperatingSystemPrinciple/操作系统介绍.html","/note-book/OperaSystems/OperatingSystemPrinciple/操作系统介绍.md",":md"]],["v-7c995a9d","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS%207%20%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E9%85%8D%E7%BD%AE.html",{d:1691939318e3,e:`<h1> CentOS 7 用户账户配置</h1>
<p><strong>说明：</strong></p>
<p>1、这篇博文记录的是CentOS 7 用户账户的配置，包括添加用户、添加用户组、删除用户、删除用户组等。其中包括分析用户的配置文件、目录以及对安全的思考。</p>
<p>2、用户配置方面CentOS 7与以往版本感觉没有差别。</p>
<h2> <strong>第一部分 认识用户</strong></h2>
<p>Centos 7 系统最小化安装，默认配置，是没有创建其他用户的。作为服务器操作系统，为了安全起见，一般是使用一般用户。这就牵涉到用户、用户组的创建以及删除。</p>
<p>此外，CentOS 7 和其他版本的Linux一样，都具有相应用户的配置文件及目录，如下：</p>`,r:{minutes:7.77,words:2332},y:"a",t:"CentOS 7 用户账户配置"},["/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS 7 用户账户配置.html","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS 7 用户账户配置.md",":md"]],["v-3662114a","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7%E9%85%8D%E7%BD%AE%E6%94%AF%E6%8C%81AUFS%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`<h1> 使得内核支持AUFS</h1>
<p>CentOS7 默认不支持<code>aufs</code>文件系统, 有时候我们需要使用, 就必须自己去安装内核了</p>
<ol>
<li>添加<code>yum</code>源</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入repo目录</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/
yum <span class="token function">install</span> <span class="token function">wget</span> <span class="token parameter variable">-y</span>
<span class="token comment"># 下载文件</span>
<span class="token function">wget</span> https://yum.spaceduck.org/kernel-ml-aufs/kernel-ml-aufs.repo
<span class="token comment"># 安装</span>
yum <span class="token function">install</span> kernel-ml-aufs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.6,words:180},y:"a",t:"使得内核支持AUFS"},["/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7配置支持AUFS文件系统.html","/note-book/OperaSystems/RedHatEnterpriseLinux/CentOS7配置支持AUFS文件系统.md",":md"]],["v-a6eba2dc","/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8%E9%87%8D%E5%90%AF%E7%BD%91%E5%8D%A1%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`<h1> Centos8 重启网卡方法</h1>
<h2> 问题情况：</h2>
<p>1、虚机centos8 修改为静态ip后，由于网卡网段变更，无法上网</p>
<p>2、最小化安装，没有ifconfig</p>
<p>3、firewalld，selinux关闭</p>
<p>4、ping 不通物理机</p>
<p>根本原因：</p>
<p>静态路由配置错误</p>
<h2> 解决方案：</h2>
<p>1、linux命令==&gt; ip:ip addr　　查看网络配置</p>
<p>nmcli:　　　查看网络配置</p>
<p>2、修改为DHCP或修改默认路由为正确的默认路由地址</p>`,r:{minutes:.93,words:280},y:"a",t:"Centos8 重启网卡方法"},["/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8重启网卡的方法.html","/note-book/OperaSystems/RedHatEnterpriseLinux/Centos8重启网卡的方法.md",":md"]],["v-1d54df78","/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld%E9%85%8D%E7%BD%AE.html",{d:1691939318e3,e:`<h1> <strong>防火墙状态及规则</strong></h1>
<p>1、查看防火墙状态：<code>firewall-cmd --state</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --state </span>
running
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.45,words:1035},y:"a",t:"防火墙状态及规则"},["/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld配置.html","/note-book/OperaSystems/RedHatEnterpriseLinux/firewalld配置.md",":md"]],["v-2bec014a","/note-book/OperaSystems/RedHatEnterpriseLinux/%E5%88%B6%E4%BD%9CCenOS%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{d:1691939318e3,e:`<h1> 制作CentOS操作系统RootFS</h1>
<h2> 基础安装</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@monther ~<span class="token punctuation">]</span><span class="token comment"># mkdir mkRootfs</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.91,words:273},y:"a",t:"制作CentOS操作系统RootFS"},["/note-book/OperaSystems/RedHatEnterpriseLinux/制作CenOS操作系统.html","/note-book/OperaSystems/RedHatEnterpriseLinux/制作CenOS操作系统.md",":md"]],["v-4de8425e","/note-book/OperaSystems/RedHatEnterpriseLinux/%E9%85%8D%E7%BD%AESSH%E5%85%8D%E5%AF%86%E7%A0%81%E9%AA%8C%E8%AF%81.html",{d:1691939318e3,e:`<h1> 生成ssh密钥：</h1>
<p>ssh-keygen -t rsa&nbsp;（然后接四个回车）</p>
<p>例：输入生成ssh命令后，接着按四个回车即可。</p>
<figure><figcaption>wps5B4.tmp[4]</figcaption></figure>
<p>执行完这个命令后，linux会自动创建~/.ssh目录，</p>
<p>其中包含了成两个文件：id_rsa（私钥）、id_rsa.pub（公钥)</p>
<p>进入到.ssh目录中：</p>
<p>cd ~/.ssh</p>
<figure><figcaption>wps5D4.tmp[4]</figcaption></figure>`,r:{minutes:.55,words:165},y:"a",t:"生成ssh密钥："},["/note-book/OperaSystems/RedHatEnterpriseLinux/配置SSH免密码验证.html","/note-book/OperaSystems/RedHatEnterpriseLinux/配置SSH免密码验证.md",":md"]],["v-2a52f0c8","/note-book/OperaSystems/Ubtuntu/Linux%20%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E6%A0%BC%E5%BC%8F.html",{d:1691939318e3,e:`<h1> Linux 终端命令格式</h1>
<h2> 目标</h2>
<ul>
<li>了解终端命令格式</li>
<li>知道如何查阅终端命令帮助信息</li>
</ul>
<h2> 01. 终端命令格式</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>parameter<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.01,words:303},y:"a",t:"Linux 终端命令格式"},["/note-book/OperaSystems/Ubtuntu/Linux 终端命令格式.html","/note-book/OperaSystems/Ubtuntu/Linux 终端命令格式.md",":md"]],["v-7aabef78","/note-book/OperaSystems/Ubtuntu/Ubuntu%2020.04%20Server%20%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%AE%BE%E7%BD%AE%20IP%20%E5%9C%B0%E5%9D%80.html",{d:1691939318e3,e:`<h1> Ubuntu 20.04 Server 使用命令行设置 IP 地址</h1>
<blockquote>
<p>转载From ： https://blog.csdn.net/justidle/article/details/114372558</p>
</blockquote>
<h2> 确认 IP 文件</h2>
<p>我们只需要使用命令行来配置修改 IP 配置即可。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token operator">~</span>$ ls <span class="token operator">/</span>etc<span class="token operator">/</span>netplan
<span class="token number">00</span><span class="token operator">-</span>installer<span class="token operator">-</span>config<span class="token punctuation">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.87,words:262},y:"a",t:"Ubuntu 20.04 Server 使用命令行设置 IP 地址"},["/note-book/OperaSystems/Ubtuntu/Ubuntu 20.04 Server 使用命令行设置 IP 地址.html","/note-book/OperaSystems/Ubtuntu/Ubuntu 20.04 Server 使用命令行设置 IP 地址.md",":md"]],["v-aab6a77a","/note-book/OperaSystems/Ubtuntu/Ubuntu%2020.04%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E7%BD%91%E7%BB%9C%EF%BC%88%E7%BD%91%E7%BB%9C%E5%9B%BE%E6%A0%87%E4%B8%A2%E5%A4%B1%EF%BC%89%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{d:1691939318e3,e:`<h1> Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案</h1>
<h2> 问题复述：</h2>
<p>Ubuntu 20.04无法连接到网络，网络连接图标丢失，网络设置中无网络设置选项。
![image-20221124112138202](Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案.assets/image-20221124112138202.png)</p>
<h2> 解决方案</h2>
<pre><code>sudo service network-manager stop

sudo rm /var/lib/NetworkManager/NetworkManager.state

sudo service network-manager start
</code></pre>`,r:{minutes:.41,words:123},y:"a",t:"Ubuntu 20.04无法连接网络(网络图标丢失)的解决方案"},["/note-book/OperaSystems/Ubtuntu/Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案.html","/note-book/OperaSystems/Ubtuntu/Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案.md",":md"]],["v-6e8771f8","/note-book/OperaSystems/Ubtuntu/Ubuntu%E6%9B%B4%E6%94%B9%E4%B8%BA24%E5%B0%8F%E6%97%B6%E5%88%B6.html",{d:1691939318e3,e:`<h1> Ubuntu更改为24小时制</h1>
<p>https://blog.csdn.net/weixin_43824829/article/details/126978600</p>
`,r:{minutes:.03,words:10},y:"a",t:"Ubuntu更改为24小时制"},["/note-book/OperaSystems/Ubtuntu/Ubuntu更改为24小时制.html","/note-book/OperaSystems/Ubtuntu/Ubuntu更改为24小时制.md",":md"]],["v-3215b4ba","/note-book/OperaSystems/Ubtuntu/Ubuntu%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html",{d:1691939318e3,e:`<h1> Ubuntu软件包文件管理</h1>
<h2> Debian/Ubuntu Linux 如何查看文件属于哪个软件包</h2>
<p>如何查找哪个软件包提供了/bin/ifconfig命令？
在Debian或Ubuntu Linux中，如何搜索某个命令所属的软件包？</p>
<p>在Red Hat CentOS Linux中，我们可以使用 <code>rpm -qf /bin/ls</code> 找出命令所在的软件包名称。</p>
<p>在Ubuntu中，
dpkg是一个命令行工具，可用于安装，构建，删除和管理Debian软件包。
dpkg维护有关可用软件包的一些可用信息。
dpkg-query是用于查看dpkg数据库中列出的软件包的信息的命令行工具。
apt-file是用于在APT软件包管理系统的软件包中搜索文件的命令行工具。</p>`,r:{minutes:5.07,words:1521},y:"a",t:"Ubuntu软件包文件管理"},["/note-book/OperaSystems/Ubtuntu/Ubuntu软件包文件管理.html","/note-book/OperaSystems/Ubtuntu/Ubuntu软件包文件管理.md",":md"]],["v-1a0079da","/note-book/OperaSystems/Ubtuntu/VMware%E8%99%9A%E6%8B%9F%E6%9C%BA%20Linux%E7%B3%BB%E7%BB%9F%20Ubuntu%2020.04%20%E7%A1%AC%E7%9B%98-%E7%A3%81%E7%9B%98%E6%89%A9%E5%AE%B9.html",{d:1691939318e3,e:`<h1> 配置</h1>
<pre><code>虚拟机 – VMware Workstation Pro 16
Linux系统 – Ubuntu 20.04 LTS
</code></pre>
<h1> 目的</h1>
<pre><code>硬盘扩容
硬盘容量从40G 扩容到 100G
</code></pre>
<p>效果</p>
<p>查看硬盘大小及使用情况</p>
<pre><code>终端：df -h
</code></pre>
<p>没有扩容前：
![image-20221119125553250](VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.assets/image-20221119125553250.png)
成功扩容后：</p>`,r:{minutes:5.13,words:1539},y:"a",t:"配置"},["/note-book/OperaSystems/Ubtuntu/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html","/note-book/OperaSystems/Ubtuntu/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.md",":md"]],["v-733d9740","/note-book/OperaSystems/Ubtuntu/apt%E6%9F%A5%E8%AF%A2%E6%9F%90%E4%B8%AA%E8%BD%AF%E4%BB%B6%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%88%E6%9C%AC.html",{d:1691939318e3,e:`<h1> apt查询某个软件有哪些版本</h1>
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
</code></pre>`,r:{minutes:.55,words:165},y:"a",t:"apt查询某个软件有哪些版本"},["/note-book/OperaSystems/Ubtuntu/apt查询某个软件有哪些版本.html","/note-book/OperaSystems/Ubtuntu/apt查询某个软件有哪些版本.md",":md"]],["v-48c517e4","/note-book/OperaSystems/Ubtuntu/linux%E5%85%B3%E9%97%AD%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4%E9%9A%8F%E6%9C%BA%E5%8C%96%EF%BC%88ASLR%EF%BC%89.html",{d:1691939318e3,e:`<h1> 0x00 背景知识</h1>
<p>ASLR(Address Space Layout Randomization)在2005年被引入到Linux的内核 kernel 2.6.12 中，当然早在2004年就以patch的形式被引入。随着内存地址的随机化，使得响应的应用变得随机。这意味着同一应用多次执行所使用内存空间完全不同，也意味着简单的缓冲区溢出攻击无法达到目的。</p>
<p>GDB从版本7开始，第一次在Ubuntu 9.10（Karmic）上，被调试的程序可以被关闭ASLR（通过标记位ADDR_NO_RANDOMIZE ）。</p>
<p>此处有坑，笔者有一个Ubuntu 9.10的虚拟机，用了下面将要介绍的全部姿势，死活关闭不了ASLR，后来换成Ubuntu 10.04就没问题了，说明Ubuntu 9.10的版本控制ASLR的方法还不成熟，需要重源码层面确认是否可以关闭开启，真是坑到家了。</p>`,r:{minutes:3.8,words:1140},y:"a",t:"0x00 背景知识"},["/note-book/OperaSystems/Ubtuntu/linux关闭地址空间随机化（ASLR）.html","/note-book/OperaSystems/Ubtuntu/linux关闭地址空间随机化（ASLR）.md",":md"]],["v-1922adf5","/note-book/OperaSystems/Ubtuntu/ubuntu14.04%20%E5%BF%98%E8%AE%B0%E4%BA%86%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E5%AF%86%E7%A0%81%E5%92%8Croot%E5%AF%86%E7%A0%81.html",{d:1691939318e3,e:`<h1> <a href="https://www.cnblogs.com/z-l-m/p/8004972.html" target="_blank" rel="noopener noreferrer">ubuntu 14.04 忘记用户登录密码</a></h1>
<p>1.在VMware Workstatiom中点击“开启此虚拟机”，注意，进入系统自启时随即先点击一下屏幕，目的是让鼠标从VM切换到ubuntu启动（否则下面长按shift时可能不会进入GNU GRUN界面）；</p>
<p>2.点击屏幕后随即长按shift，系统会进入GUN GRUB界面（对此界面的操作可看界面下面的说明），如图 1所示；如果进入图 2 所示的界面则此步骤的操作失败，不要着急再试一下。</p>`,r:{minutes:1.53,words:458},y:"a",t:"ubuntu 14.04 忘记用户登录密码"},["/note-book/OperaSystems/Ubtuntu/ubuntu14.04 忘记了普通用户密码和root密码.html","/note-book/OperaSystems/Ubtuntu/ubuntu14.04 忘记了普通用户密码和root密码.md",":md"]],["v-7bf7b544","/note-book/OperaSystems/Ubtuntu/ubuntu%E5%AE%89%E8%A3%85nfs.html",{d:1691939318e3,e:`<h1> ubuntu安装nfs</h1>
<ol>
<li>
<h2> 安装</h2>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装nfs服务端
apt-get install nfs-kernel-server -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.38,words:115},y:"a",t:"ubuntu安装nfs"},["/note-book/OperaSystems/Ubtuntu/ubuntu安装nfs.html","/note-book/OperaSystems/Ubtuntu/ubuntu安装nfs.md",":md"]],["v-f55b6058","/note-book/OperaSystems/Ubtuntu/ubuntu%E6%9F%A5%E7%9C%8Bintel%20GPU%E4%BD%BF%E7%94%A8%E6%83%85%E5%86%B5.html",{d:1691939318e3,e:`<h1> ubuntu查看intel GPU使用情况</h1>
<p>最近搞个东西，涉及到intel核显的问题，因此需要知道核显目前运行情况如何。在ubuntu下，可以直接安装intel-gpu-tools来查看核显的运行情况。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install intel-gpu-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.58,words:174},y:"a",t:"ubuntu查看intel GPU使用情况"},["/note-book/OperaSystems/Ubtuntu/ubuntu查看intel GPU使用情况.html","/note-book/OperaSystems/Ubtuntu/ubuntu查看intel GPU使用情况.md",":md"]],["v-2e5806d2","/note-book/Research_Develop/Algorithm/",{d:1691939318e3,e:`<h1> 算法说明</h1>
<p>本章节所有练习过程中所使用的例子在这个仓库 <a href="https://gitee.com/PaperDragon/clang-struct-and-algorithm" target="_blank" rel="noopener noreferrer">https://gitee.com/PaperDragon/clang-struct-and-algorithm</a></p>
<p>欢迎给我纠错！！</p>
<p>2022年8月14日</p>
`,r:{minutes:.16,words:47},y:"a",t:"算法说明"},["/note-book/Research&Develop/Algorithm/","/note-book/Research&Develop/Algorithm/README.md"]],["v-4c406808","/note-book/Research_Develop/Algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E6%AF%94%E7%89%B9%E5%B0%B1%E4%B8%9A%E8%AF%BE.html",{d:1691939318e3,e:`<h1> 数据结构考研数据结构算法与基础</h1>
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
</code></pre>`,r:{minutes:6.7,words:2009},y:"a",t:""},["/note-book/Research_Develop/C/C语言volatile关键字详解.html","/note-book/Research&Develop/C/C语言volatile关键字详解.html","/note-book/Research&Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.html","/note-book/Research&Develop/C/C语言volatile关键字详解.md","/note-book/Research&Develop/C/C%E8%AF%AD%E8%A8%80volatile%E5%85%B3%E9%94%AE%E5%AD%97%E8%AF%A6%E8%A7%A3.md"]],["v-cf78e944","/note-book/Research_Develop/C/",{d:1691939318e3,e:`<h1> C语言学习 翁恺教程</h1>
<h2> 目录和文件说明</h2>
<h3> note-1</h3>
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
</ul>`,r:{minutes:21.13,words:6338},y:"a",t:"C语言学习 翁恺教程"},["/note-book/Research&Develop/C/","/note-book/Research&Develop/C/README.md"]],["v-4294bd6d","/note-book/Research_Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",{d:1691939318e3,e:`<h1> Source Code</h1>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.09,words:327},y:"a",t:"Source Code"},["/note-book/Research_Develop/C/二分查找.html","/note-book/Research&Develop/C/二分查找.html","/note-book/Research&Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html","/note-book/Research&Develop/C/二分查找.md","/note-book/Research&Develop/C/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md"]],["v-2b829e3e","/note-book/Research_Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html",{d:1691939318e3,e:`<h1> FastAPI--python高性能web框架</h1>
<blockquote>
<p>https://github.com/Paper-Dragon/learn-fastapi</p>
<p>https://www.bilibili.com/video/BV1iN411X72b</p>
</blockquote>
<h2> 第2章 FastAPI介绍和项目准备</h2>
<h3> 2.1 Starlette，Pydantic 与 FastAPI 框架是什么关系？</h3>
<p>python的类型提示，基于类型提示type hints</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
from typing import List
def func(name:str,age:int,l:List):
    
    print(name,age)
    print(l)    
# Python的类型提示使用方法，使用的好能够提高代码的健壮性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:21.43,words:6430},y:"a",t:"FastAPI--python高性能web框架"},["/note-book/Research_Develop/Python/FastAPI-Python高性能web框架.html","/note-book/Research&Develop/Python/FastAPI-Python高性能web框架.html","/note-book/Research&Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.html","/note-book/Research&Develop/Python/FastAPI-Python高性能web框架.md","/note-book/Research&Develop/Python/FastAPI-Python%E9%AB%98%E6%80%A7%E8%83%BDweb%E6%A1%86%E6%9E%B6.md"]],["v-66124308","/note-book/Research_Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html",{d:1698482265e3,e:`<h1> PyInstaller 带静态依赖文件打包教程</h1>
<h2> 方法一：通过命令行参数</h2>
<pre><code>--add-data "欲打包的源文件路径（可以是相对路径，也可以是绝对路径）;.（打包后对应的程序内的路径，一个.代表打包至程序运行时根目录）"

--add-data 参数 可以多次使用，注意格式为引号里面有一个文件名，有一个分号，一个点。

例： pyinstaller -F --add-data '.\\32x32.ico;.' '.\\main.py'
</code></pre>
<h2> 方法二：通过修改 spec 打包配置脚本文件</h2>
<h3> 通过命令生成 spec 文件</h3>`,r:{minutes:1.73,words:518},y:"a",t:"PyInstaller 带静态依赖文件打包教程"},["/note-book/Research_Develop/Python/PyInstaller带静态依赖文件打包教程.html","/note-book/Research&Develop/Python/PyInstaller带静态依赖文件打包教程.html","/note-book/Research&Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.html","/note-book/Research&Develop/Python/PyInstaller带静态依赖文件打包教程.md","/note-book/Research&Develop/Python/PyInstaller%E5%B8%A6%E9%9D%99%E6%80%81%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B.md"]],["v-9f71a98a","/note-book/Research_Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html",{d:1691939318e3,e:`<h1> Python之正则表达式细讲</h1>
<h2> 一、行定位符</h2>
<p>行定位符就是用来描述字符串的边界，“^” 表示行的开始，“$” 表示行的结尾。比如：</p>
<pre><code>^Ha
</code></pre>
<p>该表达式表示要匹配字符串的开头位置是 Ha，如 “Hangzhou is a very beautiful city” 可以匹配，而 “Your words are very funny, Ha” 则不匹配。但如果使用：</p>
<pre><code>Ha$
</code></pre>
<p>后者可以匹配而前者不能匹配。如果要匹配的字符串可以出现在字符串的任意部分，那么可以写成下面的格式，这样两个字符串都能匹配上。</p>`,r:{minutes:12.21,words:3663},y:"a",t:"Python之正则表达式细讲"},["/note-book/Research_Develop/Python/Python之正则表达式细讲.html","/note-book/Research&Develop/Python/Python之正则表达式细讲.html","/note-book/Research&Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.html","/note-book/Research&Develop/Python/Python之正则表达式细讲.md","/note-book/Research&Develop/Python/Python%E4%B9%8B%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%BB%86%E8%AE%B2.md"]],["v-0556e072","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html",{d:1691939318e3,e:`<h1> 数据切片</h1>
<h2> 字符串切片</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">'Hello World'</span>

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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.42,words:1927},y:"a",t:"数据切片"},["/note-book/Research_Develop/Python/Python数据切片例子.html","/note-book/Research&Develop/Python/Python数据切片例子.html","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.html","/note-book/Research&Develop/Python/Python数据切片例子.md","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E4%BE%8B%E5%AD%90.md"]],["v-3122a850","/note-book/Research_Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html",{d:1697097494e3,e:`<h1> Python数据格式化format</h1>
<p>format从python 2.6开始支持</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"name {}, age {}, occupatical {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">"lucy"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"developer"</span><span class="token punctuation">)</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.76,words:227},y:"a",t:"Python数据格式化format"},["/note-book/Research_Develop/Python/Python数据格式化format.html","/note-book/Research&Develop/Python/Python数据格式化format.html","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.html","/note-book/Research&Develop/Python/Python数据格式化format.md","/note-book/Research&Develop/Python/Python%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8C%96format.md"]],["v-54218f21","/note-book/Research_Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html",{d:1691939318e3,e:`<h1> re.match()到底会返回什么?</h1>
<h2> re.match()到底会返回什么?</h2>
<p>现在我们通过python编程实验来看看到底会返回什么：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'www'</span><span class="token punctuation">,</span> <span class="token string">'www.runoob.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 在起始位置匹配</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'com'</span><span class="token punctuation">,</span> <span class="token string">'www.runoob.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 不在起始位置匹配</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.28,words:383},y:"a",t:"re.match()到底会返回什么?"},["/note-book/Research_Develop/Python/python re.Match object的说明.html","/note-book/Research&Develop/Python/python re.Match object的说明.html","/note-book/Research&Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.html","/note-book/Research&Develop/Python/python re.Match object的说明.md","/note-book/Research&Develop/Python/python%20re.Match%20object%E7%9A%84%E8%AF%B4%E6%98%8E.md"]],["v-4742da80","/note-book/Research_Develop/Python/python%20re.html",{d:1691939318e3,e:`<h1> re库用法细讲</h1>
<blockquote>
<p>原文地址： https://blog.csdn.net/2201_75641637/article/details/129319151</p>
</blockquote>
<h2> 使用 re 模块匹配字符串</h2>
<p>re 模块中提供了 match()、search() 和 findall() 等方法专门用来匹配字符串，可以从海量数据中精确筛选出需要的对象，我们逐一来看看每种方法的具体实现。</p>
<h3> 使用 match() 方法进行匹配</h3>
<p>match() 方法用于从字符串的开始处进行匹配，如果在起始位置匹配成功，则返回 Match 对象，否则返回 None。其语法格式如下：</p>`,r:{minutes:7.56,words:2269},y:"a",t:"re库用法细讲"},["/note-book/Research_Develop/Python/python re.html","/note-book/Research&Develop/Python/python re.html","/note-book/Research&Develop/Python/python%20re.html","/note-book/Research&Develop/Python/python re.md","/note-book/Research&Develop/Python/python%20re.md"]],["v-1302838e","/note-book/Research_Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html",{d:1691939318e3,e:`<h1> 新版VSCode中Python设置自动补全函数括号</h1>
<blockquote>
<p>https://blog.csdn.net/w11231/article/details/123586558</p>
</blockquote>
<h1> 前言</h1>
<p>在网上能找到的关于如何让VSCode中Python自动补全函数括号的方法都是同样的，但基本上都是几年前的方法了，在VSCode更新后引入了Pylance，使得之前的设置项不存在了。在自己摸索了很久后终于发现了相同功能的选项👇</p>
<p>如果不确定自己用的哪种，可以都试一下，在Settings.json中如果有不存在的设置项会报错</p>`,r:{minutes:.87,words:260},y:"a",t:"新版VSCode中Python设置自动补全函数括号"},["/note-book/Research_Develop/Python/新版VSCode中Python设置自动补全函数括号.html","/note-book/Research&Develop/Python/新版VSCode中Python设置自动补全函数括号.html","/note-book/Research&Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.html","/note-book/Research&Develop/Python/新版VSCode中Python设置自动补全函数括号.md","/note-book/Research&Develop/Python/%E6%96%B0%E7%89%88VSCode%E4%B8%ADPython%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E5%87%BD%E6%95%B0%E6%8B%AC%E5%8F%B7.md"]],["v-6a7299b5","/note-book/Research_Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html",{d:1691939318e3,e:`<h1> bad substitution</h1>
<p>初接触shell脚本，在vim中写代码，出现了好几次 Bad substitution。</p>
<p>我的错误有两种：</p>
<pre><code>开始的的指定脚本环境 应该是#!/bin/bash
在编译运行时 也应该用 bash
\${}的使用错误，$() 是引用（）中运行的结果。
\${} 仅仅是用{}中的内容，是参数，不执行
</code></pre>
`,r:{minutes:.27,words:82},y:"a",t:"bad substitution"},["/note-book/Research_Develop/Shell/shell脚本bad substitution.html","/note-book/Research&Develop/Shell/shell脚本bad substitution.html","/note-book/Research&Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.html","/note-book/Research&Develop/Shell/shell脚本bad substitution.md","/note-book/Research&Develop/Shell/shell%E8%84%9A%E6%9C%ACbad%20substitution.md"]],["v-2b73f172","/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/%E5%9F%BA%E4%BA%8EWireguard%E6%8A%80%E6%9C%AF%E7%9A%84%E8%99%9A%E6%8B%9F%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E6%90%AD%E5%BB%BA%EF%BC%88%E5%9F%BA%E4%BA%8ELighthouse%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%89.html",{d:1691939318e3,e:`<h1> 基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）</h1>
<h2> 服务端安装 （强烈推荐 docker 安装）</h2>
<h2> Docker安装Wireguard  (更简单更方便)</h2>
<h3> 通过容器安装wg-easy</h3>
<p>括号里面的的是你需要修改的，修改完删掉就可以了</p>
<h4> 关于CentOS7 模块安装</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> epel-release elrepo-release
$ <span class="token function">sudo</span> yum <span class="token function">install</span> yum-plugin-elrepo
$ <span class="token function">sudo</span> yum <span class="token function">install</span> kmod-wireguard wireguard-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.29,words:686},y:"a",t:"基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）"},["/note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html","/note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.md",":md"]],["v-1c5b2b34","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/Docker%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2Clash%E6%9C%8D%E5%8A%A1%E4%B8%8E%E7%AE%A1%E7%90%86%E9%9D%A2%E6%9D%BF.html",{d:1699694698e3,e:`<h1> Docker一键部署Clash服务与管理面板</h1>
<blockquote>
<p>转载自： https://blog.laoyutang.cn/linux/clash.html</p>
</blockquote>
<p>官方Clash部署需要采用两个镜像分别启动服务和面板，博主使用官方server镜像和官方管理面板前端代码，重新修改打包构建，使用一个镜像可以直接启动服务和管理面板，简单轻量。</p>
<h2> 镜像地址</h2>
<p><a href="https://hub.docker.com/r/laoyutang/clash-and-dashboard" target="_blank" rel="noopener noreferrer">laoyutang/clash-and-dashboard</a></p>`,r:{minutes:1.34,words:402},y:"a",t:"Docker一键部署Clash服务与管理面板"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/Docker一键部署Clash服务与管理面板.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/Docker一键部署Clash服务与管理面板.md",":md"]],["v-2cf74ea8","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E4%BC%98%E7%A7%80%E7%9A%84%E8%90%BD%E5%9C%B0%E6%A1%86%E6%9E%B6%20XrayR.html",{d:1691939318e3,e:`<h1> 一个优秀的流量落地框架XrayR</h1>
<blockquote>
<p>原项目地址 https://github.com/XrayR-project</p>
<p>因为一个月前有人骂作者广告有问题，作者直接删库跑路了，这里找到几个接盘侠替代</p>
<p>找了个克隆仓库 https://github.com/Misaka-blog/XrayR-script</p>
<p>一键脚本 https://github.com/Misaka-blog/XrayR-script</p>
<p>文档 https://github.com/ximliu/XrayR-doc</p>
</blockquote>`,r:{minutes:12.86,words:3858},y:"a",t:"一个优秀的流量落地框架XrayR"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/优秀的落地框架 XrayR.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/优秀的落地框架 XrayR.md",":md"]],["v-64d1e7a6","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/%E8%BF%9E%E6%8E%A5CF%20WARP%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B7%BB%E5%8A%A0IPv4IPv6%E7%BD%91%E7%BB%9C.html",{d:1691939318e3,e:`<h1> 连接CF WARP为服务器添加IPv4/IPv6网络</h1>
<blockquote>
<p>通常ip被污染之后使用 WARP进行增加ip复活</p>
<p>使用warp有概率刷出原生ip</p>
<p>开源地址 https://github.com/fscarmen/warp</p>
</blockquote>
<h2> 脚本特点</h2>
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
</ul>`,r:{minutes:8.24,words:2471},y:"a",t:"连接CF WARP为服务器添加IPv4/IPv6网络"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/连接CF WARP为服务器添加IPv4IPv6网络.html","/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/连接CF WARP为服务器添加IPv4IPv6网络.md",":md"]],["v-3ac693d4","/note-book/Zabbix/ebook/",{d:1691939318e3,e:`<h1> ZCS认证</h1>
<ul>
<li><a href="ZCS5_Day_1.pdf">ZCS5_Day_1.pdf</a></li>
</ul>
`,r:{minutes:.3,words:90},y:"a",t:"ZCS认证"},["/note-book/Zabbix/ebook/README.md"]],["v-07a67b62","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/",{d:1691939318e3,e:`<h1> 操作系统相关 Operating Systems: Three Easy Pieces 学习笔记</h1>
<p>作者地址  https://github.com/koihuang/ostep-note</p>
<p>Operating Systems: Three Easy Pieces这本书从 虚拟化(virtualization), 并发(concurrency), 持久化(persistent) 三方面对操作系统在抽象层面上做了很好的分析介绍.
此书能让读者对操作系统有一个综合的感性认识,特别是在抽象层面上,关键还免费,免费,免费!!!.
感兴趣的读者可以读一下 http://pages.cs.wisc.edu/~remzi/OSTEP/</p>`,r:{minutes:1.85,words:555},y:"a",t:"操作系统相关 Operating Systems: Three Easy Pieces 学习笔记"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/README.md"]],["v-2fabe988","/note-book/Research_Develop/C/ACLLib/ACLLib.html",{d:1691939318e3,e:`<h1> ACLLIb</h1>
<ul>
<li>是一个基于Win32API的函数库，提供了相对较为简单的方式来做Windows程序</li>
<li>实际提供了一个c和两个h文件，可以在msvc和dev c++（MingGW）中使用</li>
<li>以GPL的方式开源放在了github中</li>
<li>纯教学用途，但是变成模型和思想开源借鉴</li>
</ul>
<h2> main()?</h2>
<ul>
<li>main() 成为c语言的入口函数其实和c语言本身无关，你的代码是被一小段叫做启动代码的程序所调用的，它需要一个叫main的地方</li>
<li>操作系统把你的可执行程序装载到内存里，启动运行，然后调用你的main函数</li>
</ul>`,r:{minutes:.99,words:298},y:"a",t:"ACLLIb"},["/note-book/Research&Develop/C/ACLLib/ACLLib.html","/note-book/Research&Develop/C/ACLLib/ACLLib.md"]],["v-5b349d28","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",{d:1691939318e3,e:`<h1> 面向对象(OOP)基本概念</h1>
<p><strong>面向对象编程</strong> —— <code>Object Oriented Programming</code> 简写 <code>OOP</code></p>
<h2> 目标</h2>
<ul>
<li>了解 <strong>面向对象</strong> 基本概念</li>
</ul>
<h2> 01. 面向对象基本概念</h2>
<ul>
<li>我们之前学习的编程方式就是 <strong>面向过程</strong> 的</li>
<li><strong>面相过程</strong> 和 <strong>面相对象</strong>，是两种不同的 <strong>编程方式</strong></li>
<li>对比 <strong>面向过程</strong> 的特点，可以更好地了解什么是 <strong>面向对象</strong></li>
</ul>`,r:{minutes:1.78,words:533},y:"a",t:"面向对象(OOP)基本概念"},["/note-book/Research_Develop/Python/python面向对象/01_面向对象（OOP）基本概念.html","/note-book/Research&Develop/Python/python面向对象/01_面向对象（OOP）基本概念.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/note-book/Research&Develop/Python/python面向对象/01_面向对象（OOP）基本概念.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/01_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88OOP%EF%BC%89%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md"]],["v-6111f3f4","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html",{d:1691939318e3,e:`<h1> 类和对象</h1>
<h2> 目标</h2>
<ul>
<li>类和对象的概念</li>
<li>类和对象的关系</li>
<li>类的设计</li>
</ul>
<h2> 01. 类和对象的概念</h2>
<p><strong>类</strong> 和 <strong>对象</strong> 是 <strong>面向对象编程的 两个 核心概念</strong></p>
<h3> 1.1 类</h3>
<ul>
<li><strong>类</strong> 是对一群具有 <strong>相同 特征</strong> 或者 <strong>行为</strong> 的事物的一个统称，是抽象的，<strong>不能直接使用</strong>
<ul>
<li><strong>特征</strong> 被称为 <strong>属性</strong></li>
<li><strong>行为</strong> 被称为 <strong>方法</strong></li>
</ul>
</li>
<li><strong>类</strong> 就相当于制造飞机时的<strong>图纸</strong>，是一个 <strong>模板</strong>，是 <strong>负责创建对象的</strong></li>
</ul>`,r:{minutes:2.27,words:681},y:"a",t:"类和对象"},["/note-book/Research_Develop/Python/python面向对象/02_类和对象.html","/note-book/Research&Develop/Python/python面向对象/02_类和对象.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.html","/note-book/Research&Develop/Python/python面向对象/02_类和对象.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/02_%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1.md"]],["v-4f6bf42c","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html",{d:1691939318e3,e:`<h1> 面相对象基础语法</h1>
<h2> 目标</h2>
<ul>
<li><code>dir</code> 内置函数</li>
<li>定义简单的类（只包含方法）</li>
<li>方法中的 <code>self</code> 参数</li>
<li>初始化方法</li>
<li>内置方法和属性</li>
</ul>
<h2> 01. <code>dir</code> 内置函数（知道）</h2>
<ul>
<li>在 <code>Python</code> 中 <strong>对象几乎是无所不在的</strong>，我们之前学习的 <strong>变量</strong>、<strong>数据</strong>、<strong>函数</strong> 都是对象</li>
</ul>`,r:{minutes:7.27,words:2180},y:"a",t:"面相对象基础语法"},["/note-book/Research_Develop/Python/python面向对象/03_面相对象基础语法.html","/note-book/Research&Develop/Python/python面向对象/03_面相对象基础语法.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/03_面相对象基础语法.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/03_%E9%9D%A2%E7%9B%B8%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.md"]],["v-5d1813c6","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html",{d:1691939318e3,e:`<h1> 面向对象封装案例</h1>
<h2> 目标</h2>
<ul>
<li>封装</li>
<li>小明爱跑步</li>
<li>存放家具</li>
</ul>
<h3> 01. 封装</h3>
<ol>
<li><strong>封装</strong> 是面向对象编程的一大特点</li>
<li>面向对象编程的 <strong>第一步</strong> —— 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li>
<li><strong>外界</strong> 使用 <strong>类</strong> 创建 <strong>对象</strong>，然后 <strong>让对象调用方法</strong></li>
<li><strong>对象方法的细节</strong> 都被 <strong>封装</strong> 在 <strong>类的内部</strong></li>
</ol>`,r:{minutes:3.85,words:1154},y:"a",t:"面向对象封装案例"},["/note-book/Research_Develop/Python/python面向对象/04_面向对象封装案例.html","/note-book/Research&Develop/Python/python面向对象/04_面向对象封装案例.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/04_面向对象封装案例.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/04_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B.md"]],["v-0cb49670","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html",{d:1691939318e3,e:`<h1> 面向对象封装案例 II</h1>
<h2> 目标</h2>
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
</ol>`,r:{minutes:2.57,words:770},y:"a",t:"面向对象封装案例 II"},["/note-book/Research_Develop/Python/python面向对象/05_面向对象封装案例 II.html","/note-book/Research&Develop/Python/python面向对象/05_面向对象封装案例 II.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.html","/note-book/Research&Develop/Python/python面向对象/05_面向对象封装案例 II.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/05_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%B0%81%E8%A3%85%E6%A1%88%E4%BE%8B%20II.md"]],["v-451b6bb3","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`<h1> 私有属性和私有方法</h1>
<h2> 01. 应用场景及定义方式</h2>
<p><strong>应用场景</strong></p>
<ul>
<li>在实际开发中，<strong>对象</strong> 的 <strong>某些属性或方法</strong> 可能只希望 <strong>在对象的内部被使用</strong>，而 <strong>不希望在外部被访问到</strong></li>
<li><strong>私有属性</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>属性</strong></li>
<li><strong>私有方法</strong> 就是 <strong>对象</strong> 不希望公开的 <strong>方法</strong></li>
</ul>`,r:{minutes:1.17,words:352},y:"a",t:"私有属性和私有方法"},["/note-book/Research_Develop/Python/python面向对象/06_私有属性和私有方法.html","/note-book/Research&Develop/Python/python面向对象/06_私有属性和私有方法.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/06_私有属性和私有方法.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/06_%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%92%8C%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95.md"]],["v-7741f6f4","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html",{d:1691939318e3,e:`<h1> 单例</h1>
<h2> 目标</h2>
<ul>
<li>单例设计模式</li>
<li><code>__new__</code> 方法</li>
<li>Python 中的单例</li>
</ul>
<h2> 01. 单例设计模式</h2>
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
</ul>`,r:{minutes:3.07,words:920},y:"a",t:"单例"},["/note-book/Research_Develop/Python/python面向对象/07_单例.html","/note-book/Research&Develop/Python/python面向对象/07_单例.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.html","/note-book/Research&Develop/Python/python面向对象/07_单例.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/07_%E5%8D%95%E4%BE%8B.md"]],["v-617feebe","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html",{d:1691939318e3,e:`<h1> 多态</h1>
<h2> 目标</h2>
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
</ol>`,r:{minutes:1.61,words:483},y:"a",t:"多态"},["/note-book/Research_Develop/Python/python面向对象/08_多态.html","/note-book/Research&Develop/Python/python面向对象/08_多态.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.html","/note-book/Research&Develop/Python/python面向对象/08_多态.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/08_%E5%A4%9A%E6%80%81.md"]],["v-fc80a980","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html",{d:1691939318e3,e:`<h1> 继承</h1>
<h2> 目标</h2>
<ul>
<li>单继承</li>
<li>多继承</li>
</ul>
<p><strong>面向对象三大特性</strong></p>
<ol>
<li><strong>封装</strong> 根据 <strong>职责</strong> 将 <strong>属性</strong> 和 <strong>方法</strong> <strong>封装</strong> 到一个抽象的 <strong>类</strong> 中</li>
<li><strong>继承</strong> <strong>实现代码的重用</strong>，相同的代码不需要重复的编写</li>
<li><strong>多态</strong> 不同的对象调用相同的方法，产生不同的执行结果，<strong>增加代码的灵活度</strong></li>
</ol>`,r:{minutes:5.79,words:1736},y:"a",t:"继承"},["/note-book/Research_Develop/Python/python面向对象/09_继承.html","/note-book/Research&Develop/Python/python面向对象/09_继承.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.html","/note-book/Research&Develop/Python/python面向对象/09_继承.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/09_%E7%BB%A7%E6%89%BF.md"]],["v-69880198","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html",{d:1691939318e3,e:`<h1> 类属性和类方法</h1>
<h2> 目标</h2>
<ul>
<li>类的结构</li>
<li>类属性和实例属性</li>
<li>类方法和静态方法</li>
</ul>
<h2> 01. 类的结构</h2>
<h3> 1.1 术语 —— 实例</h3>
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
</ol>`,r:{minutes:5.97,words:1790},y:"a",t:"类属性和类方法"},["/note-book/Research_Develop/Python/python面向对象/10_类属性和类方法.html","/note-book/Research&Develop/Python/python面向对象/10_类属性和类方法.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.html","/note-book/Research&Develop/Python/python面向对象/10_类属性和类方法.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/10_%E7%B1%BB%E5%B1%9E%E6%80%A7%E5%92%8C%E7%B1%BB%E6%96%B9%E6%B3%95.md"]],["v-554537f7","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html",{d:1691939318e3,e:`<h1> <code>eval</code> 函数</h1>
<p><code>eval()</code> 函数十分强大 —— <strong>将字符串</strong> 当成 <strong>有效的表达式</strong> 来求值 并 <strong>返回计算结果</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 基本的数学计算</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.68,words:203},y:"a",t:"eval 函数"},["/note-book/Research_Develop/Python/python面向对象/11_eval函数.html","/note-book/Research&Develop/Python/python面向对象/11_eval函数.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.html","/note-book/Research&Develop/Python/python面向对象/11_eval函数.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/11_eval%E5%87%BD%E6%95%B0.md"]],["v-782c286b","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html",{d:1691939318e3,e:`<h1> 模块和包</h1>
<h2> 目标</h2>
<ul>
<li>模块</li>
<li>包</li>
<li>发布模块</li>
</ul>
<h2> 01. 模块</h2>
<h3> 1.1 模块的概念</h3>
<blockquote>
<p><strong>模块是 Python 程序架构的一个核心概念</strong></p>
</blockquote>
<ul>
<li>每一个以扩展名 <code>py</code> 结尾的 <code>Python</code> 源代码文件都是一个 <strong>模块</strong></li>
<li><strong>模块名</strong> 同样也是一个 <strong>标识符</strong>，需要符合标识符的命名规则</li>
<li>在模块中定义的 <strong>全局变量</strong> 、<strong>函数</strong>、<strong>类</strong> 都是提供给外界直接使用的 <strong>工具</strong></li>
<li><strong>模块</strong> 就好比是 <strong>工具包</strong>，要想使用这个工具包中的工具，就需要先 <strong>导入</strong> 这个模块</li>
</ul>`,r:{minutes:5.32,words:1597},y:"a",t:"模块和包"},["/note-book/Research_Develop/Python/python面向对象/12_模块和包.html","/note-book/Research&Develop/Python/python面向对象/12_模块和包.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.html","/note-book/Research&Develop/Python/python面向对象/12_模块和包.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/12_%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85.md"]],["v-d7023b56","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html",{d:1691939318e3,e:`<h1> 文件</h1>
<h2> 目标</h2>
<ul>
<li>文件的概念</li>
<li>文件的基本操作</li>
<li>文件/文件夹的常用操作</li>
<li>文本文件的编码方式</li>
</ul>
<h2> 01. 文件的概念</h2>
<h3> 1.1 文件的概念和作用</h3>
<ul>
<li>计算机的 <strong>文件</strong>，就是存储在某种 <strong>长期储存设备</strong> 上的一段 <strong>数据</strong></li>
<li>长期存储设备包括：硬盘、U 盘、移动硬盘、光盘...</li>
</ul>
<p><strong>文件的作用</strong></p>`,r:{minutes:7.37,words:2210},y:"a",t:"文件"},["/note-book/Research_Develop/Python/python面向对象/13_文件.html","/note-book/Research&Develop/Python/python面向对象/13_文件.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.html","/note-book/Research&Develop/Python/python面向对象/13_文件.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/13_%E6%96%87%E4%BB%B6.md"]],["v-7cbbdb02","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html",{d:1691939318e3,e:`<h1> 异常</h1>
<h2> 目标</h2>
<ul>
<li>异常的概念</li>
<li>捕获异常</li>
<li>异常的传递</li>
<li>抛出异常</li>
</ul>
<h2> 01. 异常的概念</h2>
<ul>
<li>程序在运行时，如果 <code>Python 解释器</code> <strong>遇到</strong> 到一个错误，<strong>会停止程序的执行，并且提示一些错误信息</strong>，这就是 <strong>异常</strong></li>
<li><strong>程序停止执行并且提示错误信息</strong> 这个动作，我们通常称之为：<strong>抛出(raise)异常</strong></li>
</ul>`,r:{minutes:5.27,words:1582},y:"a",t:"异常"},["/note-book/Research_Develop/Python/python面向对象/14_异常.html","/note-book/Research&Develop/Python/python面向对象/14_异常.html","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.html","/note-book/Research&Develop/Python/python面向对象/14_异常.md","/note-book/Research&Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/14_%E5%BC%82%E5%B8%B8.md"]],["v-65ddef8e","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10%20Multi-CPU%20Scheduling.html",{d:1691939318e3,e:`<h1> 10 多处理器调度</h1>
<p><strong>概述</strong><br>
当有多个cpu时,进程调度不可避免就会有并发问题出现.目前大概有两种调度策略,一种是单队列调度,一种是多队列调度.二者各有利弊,都有系统采用.</p>
<p><strong>概念解释</strong></p>
<ul>
<li>缓存:<br>
为了加快cpu对内存的访问,每个cpu都有自己的缓存cache,第一次访问内存的数据会拷贝一份到缓存中,第二次访问时直接从缓存中取<br>
</li>
<li>缓存一致性
假设多个cpu缓存都有同一份数据,某一cpu更改该数据时,更改之前会将其它cpu缓存的该数据缓存置为无效,然后再更新.在硬件层面保证共享内存的唯一性</li>
</ul>`,r:{minutes:2.05,words:616},y:"a",t:"10 多处理器调度"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10 Multi-CPU Scheduling.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/10 Multi-CPU Scheduling.md",":md"]],["v-508b9403","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13%20Address%20Spaces.html",{d:1691939318e3,e:`<h1> 13 抽象:地址空间</h1>
<p><strong>概述:</strong><br>
内存memory可以看作是一个长长的数组(i.e.,4GB,8GB或更多),为了让每个进程都有自己独立的内存空间.操作系统给每个进程都分配了物理内存空间,但只提供给进程虚拟地址,用户能看到的都是虚拟地址,至于虚拟地址和真实物理地址的映射则由操作系统完成,这部分对用户是透明的,用户其实也不用关心简单的分配方式如下图所示,可以看出物理层面,内存都隔离开了.
</p>
<ol>
<li><strong>地址空间</strong><br>
地址空间包含运行的程序的所有内存状态.包括程序代码,堆,栈.代码是静态的,不会动态增加会减少,直接放在最上面.堆和栈会动态变化,放在上面和下面,可以往中间动态增加.栈用来保存当前的函数调用信息,局部变量,方法参数和返回值.堆用于动态分配的,用户管理的内存.比如c语言的molloc()或Java的new 对象创建等.
</li>
</ol>`,r:{minutes:1.02,words:305},y:"a",t:"13 抽象:地址空间"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13 Address Spaces.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/13 Address Spaces.md",":md"]],["v-06f9c988","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14%20Memory%20API.html",{d:1691939318e3,e:`<h1> 14 内存操作接口 Memory API</h1>
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
</ol>`,r:{minutes:.93,words:279},y:"a",t:"14 内存操作接口 Memory API"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14 Memory API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/14 Memory API.md",":md"]],["v-b0fbb1a2","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15%20Address%20Translation.html",{d:1691939318e3,e:`<h1> 15 地址转换 Address Translation</h1>
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
</ol>`,r:{minutes:1.4,words:419},y:"a",t:"15 地址转换 Address Translation"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15 Address Translation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/15 Address Translation.md",":md"]],["v-77255d40","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16%20Segmentation.html",{d:1691939318e3,e:`<h1> 16 Segmentation 分段</h1>
<p><strong>概述:</strong><br>
假设每个进程的内存空间都占用的是一整段连续的内存,容易造成内存空间的浪费,比如heap和stack中间那一段.为了避免大量的内存浪费,采用分段机制,将进程的内存切分为三个逻辑段:代码段,heap段,stack段.同时也可以方便内存共享,进一步节省内存,尤其是代码共享. 将代码段设置成只可读,则可以在不同进程间共享. 当然这样做也有缺点,比如可能会造成很多未使用的内存碎片造成浪费,称为外部碎片问题.解决这个问题的一种方法是终止运行的进程,将它们的数据复制到连续的内存去,紧凑使用内存.</p>`,r:{minutes:.76,words:227},y:"a",t:"16 Segmentation 分段"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16 Segmentation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/16 Segmentation.md",":md"]],["v-cf9a1e10","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17%20Free%20Space%20Management.html",{d:1691939318e3,e:`<h1> 17 Free Space Management 空闲空间管理</h1>
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
</ol>`,r:{minutes:1.66,words:497},y:"a",t:"17 Free Space Management 空闲空间管理"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17 Free Space Management.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/17 Free Space Management.md",":md"]],["v-247efa59","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18%20Introduction%20to%20Paging.html",{d:1691939318e3,e:`<h1> 18 Introduction to Paging 分页介绍</h1>
<p><strong>概述:</strong><br>
前面说到的分段管理空闲空间的方式是非常灵活方便的,但同时也容易造成内存碎片问题. 采用内存分页,则可以解决这个问题. 分页是把内存分成很多固定大小(一般比较小)的分片. 通过分片组合来分配内存,可有效降低内存碎片化的问题. 但同时也会带来运行速度慢,分页映射表(即页表)占用内存过大的问题.为了记录地址空间的每个虚拟页放在物理内存中的位置，操作系统为每个进程保存一个数据结构，称为页表（page table),用于虚拟地址到真实地址的转化,因为每个进程都有一个页表管理,所以所有进程的页表加起来会占用不少的内存,接下来的两章节会介绍怎么解决这方面的问题.
</p>`,r:{minutes:.87,words:260},y:"a",t:"18 Introduction to Paging 分页介绍"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18 Introduction to Paging.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/18 Introduction to Paging.md",":md"]],["v-d9307d94","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19%20Translation%20Lookaside%20Buffers.html",{d:1691939318e3,e:`<h1> 19 Translation Lookaside Buffers 快速地址转化(TLB)</h1>
<p><strong>概述:</strong><br>
类似内存缓存cache,为了加速分页地址转化,在硬件cpu的管理内存单元(MMU)增加地址转换旁路缓冲存储器即TLB,缓存分页虚拟地址映射. 当内存访问时,先访问tlb是否已经缓存,如果有则转化(很快),没有则访问页表(page table)将其缓存在tlb中重新快速获取.TLB也利用时间空间局部性原理,会同时缓存邻近的分页映射.</p>
`,r:{minutes:.47,words:140},y:"a",t:"19 Translation Lookaside Buffers 快速地址转化(TLB)"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19 Translation Lookaside Buffers.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/19 Translation Lookaside Buffers.md",":md"]],["v-5920d9e3","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20%20Advanced%20Page%20Tables.html",{d:1691939318e3,e:`<h1> 20 Advanced Page Tables 分页:较小的表</h1>
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
</ol>`,r:{minutes:1.34,words:401},y:"a",t:"20 Advanced Page Tables 分页:较小的表"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20 Advanced Page Tables.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/20 Advanced Page Tables.md",":md"]],["v-201aa8de","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/21%20Swapping%20Mechanisms.html",{d:1691939318e3,e:`<h1> 21 Swapping Mechanisms 超越物理内存:交换机制</h1>
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
</ol>`,r:{minutes:1.83,words:549},y:"a",t:""},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23 Complete VM Systems.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/23 Complete VM Systems.md",":md"]],["v-319a6cdc","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4%20Processes.html",{d:1691939318e3,e:`<h1> 4 抽象:进程</h1>
<p>=
<strong>概述</strong>:<br>
进程的定义:运行的程序<br>
我们知道程序的运行都需要靠CPU运行,但是我们平时用电脑都是很多个程序同时(至少给人感觉)在运行,难道计算机有很多很多CPU? 当然我们知道计算机只有一个或几个有限的CPU,计算机通过虚拟化CPU,来回迅速的切换运行不同的进程,从而达到同时运行多个任务的目的.<br>
为了实现这个目的,操作系统需要底层的机器机制和上层的策略.<br>
底层的机器机制举例:环境切换(context switch),分时机制(time sharing)...<br>
上层策略: 调度策略...</p>`,r:{minutes:1.75,words:526},y:"a",t:"4 抽象:进程"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4 Processes.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/4 Processes.md",":md"]],["v-01969508","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5%20Process%20API.html",{d:1691939318e3,e:`<h1> 5 进程接口</h1>
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
</ol>`,r:{minutes:1.25,words:376},y:"a",t:"5 进程接口"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5 Process API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/5 Process API.md",":md"]],["v-5e65d047","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6%20Direct%20Execution.html",{d:1691939318e3,e:`<h1> 6 受限直接执行</h1>
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
</ol>`,r:{minutes:1.72,words:516},y:"a",t:"6 受限直接执行"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6 Direct Execution.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/6 Direct Execution.md",":md"]],["v-3d749c17","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7%20CPU%20Scheduling.html",{d:1691939318e3,e:`<h1> 7 调度策略</h1>
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
</ol>`,r:{minutes:1.73,words:518},y:"a",t:"7 调度策略"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7 CPU Scheduling.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/7 CPU Scheduling.md",":md"]],["v-10c4e4cf","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8%20Multi-level%20Feedback.html",{d:1691939318e3,e:`<h1> 8 调度:多级反馈队</h1>
<p><strong>概述</strong><br>
上一章介绍了几种调度策略,每一种都多多少少有一些缺陷,多级反馈队列是一种比较可行的调度策略,能友好兼顾响应时间和周转时间.他的关键在于优先级,每个优先级都有响应的队列存储相应的进程,它的调度规则如下:</p>
<ol>
<li>规则1: 如果任务A的优先级&gt;B的优先级,则执行A</li>
<li>规则2: 如果任务A的优先级别=B的优先级,则轮转执行A和B</li>
<li>规则3: 任务进入系统时,放在最高优先级</li>
<li>规则4: 一旦任务用完了其在所属级别队列的时间配额,则降低其优先级</li>
<li>规则5: 经过一段时间后,所有任务都放在最高优先级队列(避免任务饥饿)</li>
</ol>`,r:{minutes:.89,words:268},y:"a",t:"8 调度:多级反馈队"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8 Multi-level Feedback.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/8 Multi-level Feedback.md",":md"]],["v-ab459502","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26%20Concurrency%20and%20Threads.html",{d:1691939318e3,e:`<h1> 26 Concurrency and Threads 并发和线程</h1>
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
</ol>`,r:{minutes:1.99,words:596},y:"a",t:"26 Concurrency and Threads 并发和线程"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26 Concurrency and Threads.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/26 Concurrency and Threads.md",":md"]],["v-afb12a34","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27%20Thread%20API.html",{d:1691939318e3,e:`<h1> 27 Thread API 线程API</h1>
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
</ol>`,r:{minutes:1.49,words:448},y:"a",t:"27 Thread API 线程API"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27 Thread API.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/27 Thread API.md",":md"]],["v-c56826bc","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28%20Locks.html",{d:1691939318e3,e:`<h1> 28 Locks 锁</h1>
<p><strong>概述:</strong><br>
单纯的锁一般有自旋锁和互斥锁.自旋锁和互斥锁都可以达到锁的目的.区别在于自旋锁并不将没有获得锁的线程陷入沉睡,互斥锁一般(也可能等待一段时间再让其睡眠)会让没有获得锁的线程陷入沉睡,放入等待队列中,当有锁释放时,再唤醒其中一个.二者各有利弊,自旋锁不会陷入沉睡但是如果等待的线程比较多,且等待时间比较长,会浪费cpu资源,比较适用于多数线程占用锁时间比较短的场景.互斥锁则相反.不论哪种锁都需要硬件提供支持,即需要硬件提供类似能原子性更改变量操作的指令.不同的锁则利用这些原子指令来实现不同的策略.</p>`,r:{minutes:2.07,words:620},y:"a",t:"28 Locks 锁"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28 Locks.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/28 Locks.md",":md"]],["v-41728b29","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29%20Locked%20Data%20Structures.html",{d:1691939318e3,e:`<h1> 29 Locked Data Structures 基于锁的并发数据结构</h1>
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
</ol>`,r:{minutes:2.36,words:709},y:"a",t:"29 Locked Data Structures 基于锁的并发数据结构"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29 Locked Data Structures.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/29 Locked Data Structures.md",":md"]],["v-01e792c4","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30%20Condition%20Variables.html",{d:1691939318e3,e:`<h1> 30 Condition Variables 条件变量</h1>
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
</ol>`,r:{minutes:3.3,words:990},y:"a",t:"30 Condition Variables 条件变量"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30 Condition Variables.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/30 Condition Variables.md",":md"]],["v-187d9e5e","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31%20Semaphores.html",{d:1691939318e3,e:`<h1> 31 Semaphores 信号</h1>
<p><strong>概述:</strong><br>
根据前面章节的介绍,我们往往需要锁(lock)和条件变量(condition variable)的结合使用来应付多种并发问题,对于开发者而言,多少还是有点复杂的.信号(Semaphore)是一种可替代的并发问题的解决手段.比起锁和条件变量的组合复杂使用,信号只对一种变量进行操作,相对而言可能对于开发者来说更简单一些.信号是一个带有整数的对象,它的定义与初始化如下:</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">sem_t</span> s<span class="token punctuation">;</span>
<span class="token function">sem_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.47,words:1340},y:"a",t:"31 Semaphores 信号"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31 Semaphores.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/31 Semaphores.md",":md"]],["v-282c901c","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32%20Concurrency%20Bugs.html",{d:1691939318e3,e:`<h1> 32 Concurrency Bugs 并发bug</h1>
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
</ol>`,r:{minutes:1.08,words:323},y:"a",t:"32 Concurrency Bugs 并发bug"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32 Concurrency Bugs.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/32 Concurrency Bugs.md",":md"]],["v-6773cc80","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33%20Event-based%20Concurrency.html",{d:1691939318e3,e:`<h1> 33 Event-based Concurrency 基于事件的并发</h1>
<p><strong>概述:</strong><br>
基于线程开发的多线程有两个问题.一是比较容易出错,死锁,阻塞,资源浪费等问题需要特别小心处理;二是多线程的调度是由操作管理的,可能不会按照开发者期望的调度方式运行,因此不能精细控制程序的运行.基于事件并发是一种替代方案.它的思路是等待某些事件发生,然后判断事件类型,使用相应的代码处理.基于事件的并发有一个非常重要的架构:eventLoop().典型的基于事件的服务器的伪代码如下:</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    events <span class="token operator">=</span> <span class="token function">getEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>e in events<span class="token punctuation">)</span> 
        <span class="token function">processEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.35,words:1305},y:"a",t:"33 Event-based Concurrency 基于事件的并发"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33 Event-based Concurrency.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/33 Event-based Concurrency.md",":md"]],["v-e1be36c0","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36%20IO%20Devices.html",{d:1691939318e3,e:`<h1> 36 IO Devices IO设备</h1>
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
</ol>`,r:{minutes:3,words:899},y:"a",t:"36 IO Devices IO设备"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36 IO Devices.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/36 IO Devices.md",":md"]],["v-47854b8a","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37%20Hard%20Disk%20Drives.html",{d:1691939318e3,e:`<h1> 37 Hard Disk Drives 磁盘驱动器</h1>
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
</ol>`,r:{minutes:2.38,words:713},y:"a",t:"37 Hard Disk Drives 磁盘驱动器"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37 Hard Disk Drives.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/37 Hard Disk Drives.md",":md"]],["v-58af6e7c","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39%20Files%20and%20Directories.html",{d:1691939318e3,e:`<h1> 39 Files and Directories 文件和目录</h1>
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
</ol>`,r:{minutes:4.03,words:1209},y:"a",t:"39 Files and Directories 文件和目录"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39 Files and Directories.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/39 Files and Directories.md",":md"]],["v-6305be1a","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40%20File%20System%20Implementation.html",{d:1691939318e3,e:`<h1> 40 File System Implementation 文件系统实现</h1>
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
</ol>`,r:{minutes:3.15,words:944},y:"a",t:"40 File System Implementation 文件系统实现"},["/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40 File System Implementation.html","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/40 File System Implementation.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-30ca943e","/PyQt5%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E7%8E%8B%E9%93%AD%E4%B8%9C/",{y:"p",t:"Py Qt5快速上手 王铭东"},["/PyQt5快速上手-王铭东/"]],["v-74bc627b","/about/",{y:"p",t:"About"},[]],["v-16e944d8","/note-book/AI-Training/",{y:"p",t:"A I Training"},[]],["v-82c79f78","/note-book/Android/",{y:"p",t:"Android"},[]],["v-1a1918eb","/note-book/Docker/",{y:"p",t:"Docker"},[]],["v-5cb26cc8","/note-book/Domain-Network-System/",{y:"p",t:"Domain Network System"},[]],["v-523a9aaf","/note-book/ELK/",{y:"p",t:"E L K"},[]],["v-15a9b468","/note-book/Esxi/",{y:"p",t:"Esxi"},[]],["v-1590671a","/note-book/GRUB/",{y:"p",t:"G R U B"},[]],["v-1581bac6","/note-book/Gawk/",{y:"p",t:"Gawk"},[]],["v-a102ac20","/note-book/Gitlab/",{y:"p",t:"Gitlab"},[]],["v-2f09dd7f","/note-book/HA-LVS-Keepalived/",{y:"p",t:"H A L V S Keepalived"},[]],["v-52c4c802","/note-book/Harbor/",{y:"p",t:"Harbor"},[]],["v-91099982","/note-book/Iptables/",{y:"p",t:"Iptables"},[]],["v-cbcc4a46","/note-book/Jenkins/",{y:"p",t:"Jenkins"},[]],["v-39379285","/note-book/Kubernetes/",{y:"p",t:"Kubernetes"},[]],["v-69ad952f","/note-book/LinuxFromScratch/",{y:"p",t:"Linux From Scratch"},[]],["v-4c771b7d","/note-book/LinuxOperaSystem/",{y:"p",t:"Linux Opera System"},[]],["v-82353d0e","/note-book/Nginx/",{y:"p",t:"Nginx"},[]],["v-9affc6ce","/note-book/OpenSSH-Server/",{y:"p",t:"Open S S H Server"},[]],["v-5137394c","/note-book/OperaSystems/",{y:"p",t:"Opera Systems"},[]],["v-3e4a648b","/note-book/PhotoShop/",{y:"p",t:"Photo Shop"},[]],["v-0b15a2f0","/note-book/Physical_server/",{y:"p",t:"Physical Server"},[]],["v-6d21b581","/note-book/Portainer/",{y:"p",t:"Portainer"},[]],["v-66058961","/note-book/Prometheus/",{y:"p",t:"Prometheus"},[]],["v-219c108d","/note-book/RabbitMQ/",{y:"p",t:"Rabbit M Q"},[]],["v-48fe3284","/note-book/RouterOS/",{y:"p",t:"Router O S"},[]],["v-dd55478c","/note-book/S3-SimpleStorageService/",{y:"p",t:"S3 Simple Storage Service"},[]],["v-69060647","/note-book/Tomcat/",{y:"p",t:"Tomcat"},[]],["v-cd4c1012","/note-book/VMware/",{y:"p",t:"V Mware"},[]],["v-760a078c","/note-book/WindowsOperaSystem/",{y:"p",t:"Windows Opera System"},[]],["v-e4278e96","/note-book/Zabbix/",{y:"p",t:"Zabbix"},[]],["v-343dc2b6","/note-book/ebook/",{y:"p",t:"Ebook"},[]],["v-74051d42","/note-book/goaccess/",{y:"p",t:"Goaccess"},[]],["v-e95f27e0","/note-book/memcache-redis/",{y:"p",t:"Memcache Redis"},[]],["v-864a1ec4","/note-book/DatabaseSystem/Etcd/",{y:"p",t:"Etcd"},[]],["v-0814f0c1","/note-book/DatabaseSystem/",{y:"p",t:"Database System"},[]],["v-272e57e4","/note-book/DatabaseSystem/MySQL/",{y:"p",t:"My S Q L"},[]],["v-d8166310","/note-book/DistributedSystem/Ansible/",{y:"p",t:"Ansible"},[]],["v-4c2cc361","/note-book/DistributedSystem/",{y:"p",t:"Distributed System"},[]],["v-2f8ddbd2","/note-book/DistributedSystem/OpenStack/",{y:"p",t:"Open Stack"},[]],["v-f5fa56ce","/note-book/Gitlab/CI/",{y:"p",t:"C I"},[]],["v-7f7597ac","/note-book/Kafka/ELK_kafka%E6%9E%84%E5%BB%BA%E9%AB%98%E5%B9%B6%E5%8F%91%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E7%B3%BB%E7%BB%9F/",{y:"p",t:"E L K Kafka构建高并发分布式日志收集系统"},["/note-book/Kafka/ELK_kafka构建高并发分布式日志收集系统/"]],["v-8d1e4126","/note-book/Kafka/",{y:"p",t:"Kafka"},[]],["v-8716188c","/note-book/LinuxOperaSystem/Git/",{y:"p",t:"Git"},[]],["v-aea9109e","/note-book/LinuxOperaSystem/Linux%E4%B8%89%E5%89%91%E5%AE%A2/",{y:"p",t:"Linux三剑客"},["/note-book/LinuxOperaSystem/Linux三剑客/"]],["v-75d00417","/note-book/LinuxOperaSystem/Nvidia/",{y:"p",t:"Nvidia"},[]],["v-f1e41524","/note-book/LinuxOperaSystem/Samba/",{y:"p",t:"Samba"},[]],["v-87094bfe","/note-book/LinuxOperaSystem/VNC/",{y:"p",t:"V N C"},[]],["v-8708771c","/note-book/LinuxOperaSystem/Vim/",{y:"p",t:"Vim"},[]],["v-62a96ae9","/note-book/OperaSystems/OperatingSystemPrinciple/",{y:"p",t:"Operating System Principle"},[]],["v-380a8ce0","/note-book/OperaSystems/RedHatEnterpriseLinux/",{y:"p",t:"Red Hat Enterprise Linux"},[]],["v-54dda6e8","/note-book/OperaSystems/Ubtuntu/",{y:"p",t:"Ubtuntu"},[]],["v-270d1f92","/note-book/Research_Develop/",{y:"p",t:"Research Develop"},[]],["v-202e1ae1","/note-book/Research_Develop/Python/",{y:"p",t:"Python"},[]],["v-ed5a039e","/note-book/Research_Develop/Shell/",{y:"p",t:"Shell"},[]],["v-27e35532","/note-book/VirtualPrivateNetwork/%E5%B9%BF%E4%B9%89VirtualPrivateNetwork/",{y:"p",t:"广义 Virtual Private Network"},["/note-book/VirtualPrivateNetwork/广义VirtualPrivateNetwork/"]],["v-ad35a506","/note-book/VirtualPrivateNetwork/",{y:"p",t:"Virtual Private Network"},[]],["v-6f76dcc4","/note-book/VirtualPrivateNetwork/%E7%8B%AD%E4%B9%89VirtualPrivateNetwork/",{y:"p",t:"狭义 Virtual Private Network"},["/note-book/VirtualPrivateNetwork/狭义VirtualPrivateNetwork/"]],["v-738568b6","/note-book/Research_Develop/C/ACLLib/",{y:"p",t:"A C L Lib"},[]],["v-02fff589","/note-book/Research_Develop/Python/python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/",{y:"p",t:"Python面向对象"},["/note-book/Research_Develop/Python/python面向对象/"]],["v-0f9b9b67","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/1virtualization/",{y:"p",t:"1virtualization"},[]],["v-5a14fc0c","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/2concurrency/",{y:"p",t:"2concurrency"},[]],["v-3c38aec7","/note-book/OperaSystems/OperatingSystemPrinciple/ostep-note/3persistent/",{y:"p",t:"3persistent"},[]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},[]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},[]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},[]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},[]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},[]],["v-49425445","/category/%E7%AC%94%E8%AE%B0/",{y:"p",t:"笔记 分类",I:0},["/category/笔记/"]],["v-07af4466","/category/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/",{y:"p",t:"网络安全 分类",I:0},["/category/网络安全/"]],["v-45aa885d","/category/coredns/",{y:"p",t:"CoreDNS 分类",I:0},[]],["v-9803cb6a","/category/iptables/",{y:"p",t:"iptables 分类",I:0},[]],["v-a074e84e","/category/network/",{y:"p",t:"Network 分类",I:0},[]],["v-95b29426","/category/nginx/",{y:"p",t:"Nginx 分类",I:0},[]],["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",t:"数据库 分类",I:0},["/category/数据库/"]]];var Tl=I({name:"Vuepress",setup(){const e=e1();return()=>c(e.value)}}),z3=()=>U3.reduce((e,[n,s,t,a])=>(e.push({name:n,path:s,component:Tl,meta:t},{path:s.endsWith("/")?s+"index.html":s.substring(0,s.length-5),redirect:s},...a.map(o=>({path:o===":md"?s.substring(0,s.length-5)+".md":o,redirect:s}))),e),[{name:"404",path:"/:catchAll(.*)",component:Tl}]),G3=A1,K3=()=>{const e=i0({history:G3(vi("/")),routes:z3(),scrollBehavior:(n,s,t)=>t||(n.hash?{el:n.hash}:{top:0})});return e.beforeResolve(async(n,s)=>{var t;(n.path!==s.path||s===In)&&([n.meta._data]=await Promise.all([Tn.resolvePageData(n.name),(t=Gc[n.name])==null?void 0:t.__asyncLoader()]))}),e},j3=e=>{e.component("ClientOnly",xa),e.component("Content",Jc)},W3=(e,n,s)=>{const t=il(()=>n.currentRoute.value.path),a=il(()=>Tn.resolveRouteLocale(Ss.value.locales,t.value)),o=Li(t,()=>n.currentRoute.value.meta._data),i=A(()=>Tn.resolveLayouts(s)),l=A(()=>Tn.resolveSiteLocaleData(Ss.value,a.value)),u=A(()=>Tn.resolvePageFrontmatter(o.value)),p=A(()=>Tn.resolvePageHeadTitle(o.value,l.value)),d=A(()=>Tn.resolvePageHead(p.value,u.value,l.value)),v=A(()=>Tn.resolvePageLang(o.value,l.value)),m=A(()=>Tn.resolvePageLayout(o.value,i.value));return e.provide(Zm,i),e.provide(Kc,o),e.provide(jc,u),e.provide(Xm,p),e.provide(Wc,d),e.provide(qc,v),e.provide(Qc,m),e.provide(bi,a),e.provide(Yc,l),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>d.value},$headTitle:{get:()=>p.value},$lang:{get:()=>v.value},$page:{get:()=>o.value},$routeLocale:{get:()=>a.value},$site:{get:()=>Ss.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>ye}}),{layouts:i,pageData:o,pageFrontmatter:u,pageHead:d,pageHeadTitle:p,pageLang:v,pageLayout:m,routeLocale:a,siteData:Ss,siteLocaleData:l}},q3=()=>{const e=Jm(),n=mi(),s=K([]),t=()=>{e.value.forEach(o=>{const i=Q3(o);i&&s.value.push(i)})},a=()=>{document.documentElement.lang=n.value,s.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),s.value.splice(0,s.value.length),e.value.forEach(o=>{const i=Z3(o);i!==null&&(document.head.appendChild(i),s.value.push(i))})};dn(s1,a),de(()=>{t(),a(),le(()=>e.value,a)})},Q3=([e,n,s=""])=>{const t=Object.entries(n).map(([l,u])=>ie(u)?`[${l}=${JSON.stringify(u)}]`:u===!0?`[${l}]`:"").join(""),a=`head > ${e}${t}`;return Array.from(document.querySelectorAll(a)).find(l=>l.innerText===s)||null},Z3=([e,n,s])=>{if(!ie(e))return null;const t=document.createElement(e);return Ot(n)&&Object.entries(n).forEach(([a,o])=>{ie(o)?t.setAttribute(a,o):o===!0&&t.setAttribute(a,"")}),ie(s)&&t.appendChild(document.createTextNode(s)),t},Y3=$m,J3=async()=>{var s;const e=Y3({name:"VuepressApp",setup(){var t;q3();for(const a of aa)(t=a.setup)==null||t.call(a);return()=>[c(cp),...aa.flatMap(({rootComponents:a=[]})=>a.map(o=>c(o)))]}}),n=K3();j3(e),W3(e,n,aa);for(const t of aa)await((s=t.enhance)==null?void 0:s.call(t,{app:e,router:n,siteData:Ss}));return e.use(n),{app:e,router:n}};J3().then(({app:e,router:n})=>{n.isReady().then(()=>{e.mount("#app")})});export{Rt as $,ld as A,E3 as B,k3 as C,f3 as D,fs as E,ie as F,hk as G,Ot as H,cd as I,Ln as J,wp as K,Dt as L,lm as M,cc as N,fk as O,ce as P,sk as Q,kk as R,ck as S,Sc as T,lk as U,Ge as V,dn as W,ak as X,uk as Y,qo as Z,r as _,Oe as a,X3 as a0,Qo as a1,es as a2,tk as a3,fn as a4,pk as a5,dk as a6,ok as a7,ek as a8,nk as a9,Oc as b,ik as c,J3 as createVueApp,xc as d,rk as e,I as f,bk as g,K as h,A as i,de as j,c as k,qe as l,$n as m,Qi as n,Pc as o,Ae as p,le as q,je as r,xe as s,Zs as t,mk as u,tl as v,cv as w,g3 as x,_3 as y,Me as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-LwJbsPzE.js","assets/plugin-vue_export-helper-x3n3nnut.js","assets/001-PyQt介绍与安装.html-x89Ak-tu.js","assets/002-PyQt基本UI.html-yVpkL9G_.js","assets/003-布局.html-uia8hZTG.js","assets/004-布局2.html-p8YF82hX.js","assets/005-窗口.html-Iq0lHqAw.js","assets/006-信号与槽.html-MT2ZFcwE.js","assets/007-Qt Designer.html-1yFjdRoA.js","assets/008-PyQt多线程.html-RDUh_xVC.js","assets/009-打包为可执行程序.html-JZeKX1Sw.js","assets/friend.html--BGnBcwL.js","assets/me.html-PTxEl-Dl.js","assets/index.html-RsYXU6A_.js","assets/杀不死的进程.html-bHjKoaVJ.js","assets/index.html-Go2XpXNa.js","assets/torch 环境.html-ybNn8UeK.js","assets/英伟达开源驱动和闭源驱动冲突问题.html-pqrhtzRd.js","assets/Ubuntu命令行安装Android SDK.html-uy2Rpvfv.js","assets/index.html-VjtUUR2a.js","assets/Snapper玩转btrfs文件系统.html-p7LqXqCy.js","assets/btrfs的使用.html-l9ujuVUn.js","assets/some device missing方法.html-tpgc_8xv.js","assets/index.html-pkM-XZu1.js","assets/ext-plugin-redis.html-Awrq8lyg.js","assets/理解CoreDNS.html-K_szjCdZ.js","assets/Docker 2375攻击和解决方案.html-v__iIIn0.js","assets/Docker 的daemon.json.html-bCCVai-n.js","assets/Docker不死进程.html-rvaRQToI.js","assets/Docker日志选项配置上去对已运行容器不生效.html-sEHBRJ0r.js","assets/Docker环境清理.html-5m5Q4dky.js","assets/Docker逃逸漏洞案例.html-iSNbWjyG.js","assets/RockyLinux安装Docker.html-Lm7z5aWg.js","assets/docker pull push.html-xpSBK-PO.js","assets/docker run 命令所有的选项.html-WsDFwl_7.js","assets/docker学习笔记-PDF.html-59iWZ0HF.js","assets/docker容器集合.html-U5SQ7om4.js","assets/docker报错 内核修整.html-W2m1dZVd.js","assets/一次构建出x86及arm镜像.html-n9KrYcIo.js","assets/一键运行web版本vscode.html-RbQ40TZB.js","assets/只使用操作系统创建容器-扫描.html-qZLqbyHS.js","assets/在Dockerfile里调整时区.html-jWbyvNVz.js","assets/手撕Docker容器命令行版.html-G-KN8eOf.js","assets/手撕docker容器.html-Whm8Gex9.js","assets/手撕docker网络.html-OZcYP0Oo.js","assets/把容器做成物理机.html-qhSPIvOg.js","assets/更改docker服务网段分配地址.html-AHFvZnbC.js","assets/跨宿主机通信overlay和macvlay.html-imK-mRwZ.js","assets/Bind9的使用.html-QTCDuUD4.js","assets/NamedManager.html-L40Tz_Fn.js","assets/EFK8.4.3部署.html-lvusNKQ-.js","assets/ELK.html-wvDgK8mO.js","assets/ESXI中的网络.html-99Aou9cN.js","assets/配置案例.html-t4NR7kaB.js","assets/AWK案例入门看这一篇就够了.html--gem4B6r.js","assets/Shell文本处理三剑客-AWK.html-fncsmtcT.js","assets/awk 入门教程.html-hzUHi6M1.js","assets/awk 学习  高级输出  02.html-a0BNaY9j.js","assets/awk语言学习笔记  01.html-3nEjzs2C.js","assets/匹配特定字符并输出其后的若干行.html-9DURDNmk.js","assets/Git 的代理配置.html-mS_MC5dm.js","assets/Git分支管理合并与删除命令.html-RIJ7JsYj.js","assets/Git识别项目的语言类型，及文件占比.html-6jmIK1rc.js","assets/Git高级操作和练习网站.html-oYdX35h4.js","assets/index.html-bKeFoW3c.js","assets/git 拉取全部远程分支.html-GGurwckA.js","assets/git基础命令.html-KU7Ktl0n.js","assets/git更新远程分支.html-2Q7wocaf.js","assets/git统计项目代码行数.html-AY_tI-42.js","assets/git远程仓库回退到指定版本.html-434hJtK_.js","assets/命令行显示gitmoji.html-4uh7saLD.js","assets/Gitlab二开从而自定义权限系统.html-vt1h3Jrc.js","assets/Gitlab备份和恢复.html-mEBn571a.js","assets/Gitlab安装部署.html-WtLm3B5A.js","assets/Gitlab的一些问题.html-LqPFSEg1.js","assets/Gitlab配置邮件服务器.html-8b-9Wxma.js","assets/ha-lvs-keepalived.html-CfzjYcav.js","assets/haproxy.html-nGhvO1Ob.js","assets/keepalived.html-EEdOjFj3.js","assets/Harbor离线搭建.html-bUP5wfqz.js","assets/Linux内核子系统 - 网络 netfilter.html-Dld5x9_G.js","assets/iptables拦截内网奇虎软件病毒上报.html-UG0bhd5g.js","assets/iptables详解-朱光印.html-_s6BocQG.js","assets/linux下IPTABLES配置详解.html-P65t5Wlq.js","assets/内核参数ip_forward.html-YqDvHZxJ.js","assets/jenkins备份.html-OM9SjEj7.js","assets/jenkins构建持续化集成平台.html-7CfxwoQv.js","assets/jenkins的docker部署文档.html-i_ndlZh1.js","assets/修改Jenkins插件为国内源.html-Nfu-4WE2.js","assets/Kubernetes Api Endpoint.html-q8VW0Rqp.js","assets/Kubernetes Make Prometheus_Grafana.html-dG6DXudt.js","assets/Kubernetes Service Account如何生成Token.html-JHvzgHQY.js","assets/Kubernetes crictl管理命令详解.html-eQ4gGVel.js","assets/Kubernetes最小高可用架构图.html-P9Bz73hh.js","assets/Kubernetes有哪些组件.html-jFFLyZX-.js","assets/Kubernetes的NetworkPlicy.html-UOg7zSFS.js","assets/NameSpace 资源隔离隔离了什么.html-RG-BZzom.js","assets/Request和Limit.html-dRAQ3x0P.js","assets/SSL证书签发.html-Q5ezNp8a.js","assets/crictl登录dockerhub.html-6FC_0kq2.js","assets/etcd 二进制三节点集群部署.html-waTg6g8M.js","assets/k8s删除Terminating状态ns.html-SrRgMlzF.js","assets/kubeadm部署Kubernetes 1.24步骤.html-tEdQ_w7j.js","assets/kubernetes进阶（一）kubectl工具使用详解.html-t21ZDeKe.js","assets/kubernetes进阶（三）服务发现-coredns.html-vruC9N4g.js","assets/kubernetes进阶（二）核心网络插件Flannel.html-b0z8rYQd.js","assets/kubernetes进阶（五）dashboard--WEB管理.html-w_P28Fms.js","assets/kubernetes进阶（六）k8s平滑升级.html-jsYpvEK6.js","assets/kubernetes进阶（四）服务暴露-ingress控制器之traefik.html-miXKeB1o.js","assets/一次kubeadm添加节点出现etcd检查错误.html-swSYC1eC.js","assets/二进制安装kubernetes（七） 部署知识点总结.html-AaOVD_-w.js","assets/二进制安装kubernetes（三） kube-controller-manager组件安装.html-DjpKci99.js","assets/二进制安装kubernetes（二） kube-apiserver组件安装.html--kFC846q.js","assets/二进制安装kubernetes（五） kubelet组件安装.html-pmKT6W9V.js","assets/二进制安装kubernetes（六） kube-proxy组件安装.html-TE-N1gKP.js","assets/二进制安装kubernetes（四） kube-scheduler组件安装.html-IwVhw6Ia.js","assets/二进制部署Kubernetes.html-n7OBMBsa.js","assets/什么是Label和Label选择器.html-VagUNXQC.js","assets/什么是Name和NameSpace.html-Ktw4zkr0.js","assets/什么是Pod和Pod控制器.html-sfiG6Bzr.js","assets/什么是Service和Ingress.html-98hlt21A.js","assets/使用 vmagent 代替 Prometheus 采集监控指标.html-KL2PI9UU.js","assets/常用优化.html-LnriCD_I.js","assets/记一次异常断电造成kubernetes故障.html-TRLJZjeo.js","assets/LFS-NoteBook.html-OFaNdE-q.js","assets/Linux备份为liveOS.html-Jn7h7O11.js","assets/bash利用扩展字符集实现rm.html-oUt0B36J.js","assets/grub2手动命令引导教程.html-06vU7Ye2.js","assets/shell脚本加密解密工具shc.html-K0sf1hkq.js","assets/ssh 设置反向代理.html-1qwRcMBO.js","assets/ssh把远程端口映射到本地.html-G3yRum1f.js","assets/tcpdump抓包命令.html-JKn6r5Aq.js","assets/命令创建虚拟镜像文件.html-QVmwiPFQ.js","assets/按电源软关机要等待60秒设置更短的时间.html-m9Ax3DeW.js","assets/让某个命令不输出.html-sQf-Szkh.js","assets/Nginx变量大全.html-3sJPPS6x.js","assets/Nginx正向代理.html-k80W557X.js","assets/Nginx正向代理支持https.html-rYWlZKgO.js","assets/Nginx正向代理高并发.html-Cf6zfwiH.js","assets/Nginx的负载均衡和故障转移.html-AEEx5ZWa.js","assets/nginx-plus-module-lua.html-xlzNuQft.js","assets/nginx01.html-mCbd9kAS.js","assets/nginx02.html-Ybe74lzU.js","assets/nginx03.html-gsFU95Qf.js","assets/nginx单机百万并发.html-7zpBgBUC.js","assets/nginx配置示例.html-UYdkPOHg.js","assets/ngx_stream_ssl_preread_module.html-SLK_Fzqq.js","assets/ssh日志记录登陆密码.html-dAwOS1Eb.js","assets/CPU和内存的架构 UMA和NUMA.html-V69xNW7t.js","assets/Journal日志服务详解.html-AJl49-4i.js","assets/Linux下的ASLR（PIE）内存保护机制和绕过.html-Z5APHVhr.js","assets/Linux升级内核的两种方法.html-2-r8oyAz.js","assets/Linux排查哪个进程和IP在占用网速.html-aWMGwnEI.js","assets/Linux普通用户免密码sudo.html-_njKmjr_.js","assets/Linux网络内核参数优化秘籍.html-kZ3LCV5h.js","assets/Linux虚拟网络设备之bridge.html-Pgb84ziO.js","assets/Shell快捷键.html-pfWs-YQh.js","assets/date命令.html-TKlxMXvO.js","assets/grep命令.html-ad780su8.js","assets/ip命令.html-Nv07f30U.js","assets/macvlan详解.html-BEaYmue3.js","assets/proc-sysrq-trigger详解.html-f3UxaWK1.js","assets/proc详解.html-eQFIzC9H.js","assets/sed.html-dKn1ebwI.js","assets/sysstat Linux状态工具包.html-Zldkh6AN.js","assets/使用curl实现邮件发送.html-4xi5XlN9.js","assets/使用dev下的tcp-udp实现socket.html-oqk-KExw.js","assets/备份Linux系统.html-MQcg48DI.js","assets/大量使用swap导致无法切换.html-MKxQ4kR8.js","assets/常见乱码产生原因.html-4424mDPi.js","assets/更换系统和命令行语言.html-f9wvDL2v.js","assets/环境变量PATH.html-SVWTMArl.js","assets/进程.html-ggyl29Ey.js","assets/逻辑卷无法删除.html-c-AQANOp.js","assets/ps如何去水印的4个方法.html-xZAuQWtt.js","assets/Huawei x288系列风扇转速调速.html-Ev5SwM3j.js","assets/Portainer 单机部署.html-SeR9UoMA.js","assets/Prometheus监控Windows主机.html-zGGCXEQ9.js","assets/rabbitmq.html-7FeLHPm3.js","assets/Azure刷写ROS教程.html-LWqf1XJt.js","assets/RouterOS利用（L2TP）实现多方异地组网.html-LILbFzKe.js","assets/用ros路由作为中转教程.html-fVHZzAWa.js","assets/MiniO_Docker_Deploy.html-TAHwFZlk.js","assets/bug and Issue.html-GIWm56EC.js","assets/tomcat.html-OtluNWlj.js","assets/index.html-jmvHi77s.js","assets/traefik作为docker边缘路由.html-Mu5Jb27K.js","assets/各个版本的激活密钥.html-IJm6F_-6.js","assets/虚拟化物理机.html-TN6unXgn.js","assets/PowerShell 打印环境变量.html-ee9x4ybT.js","assets/PowerShell 操作系统禁止运行脚本.html-rP31ftaK.js","assets/Windows系统更改迁移用户目录.html-NW7JiJ3F.js","assets/zabbix.html-YZ-LPXnG.js","assets/zabbix的VMwareGuest补充缺陷.html-WGY5wSjs.js","assets/ebook.html-2_kLMenl.js","assets/goaccess给ftp生成分析图.html-SLeeBU1P.js","assets/memcache-redis.html-a21cEoo3.js","assets/etcd安装etcdkeeper.html-sxMLHXDg.js","assets/国内源.html-tBL3hsyV.js","assets/查看Mysql数据量大小.html-fkTrOYLO.js","assets/Centos7.x 安装Python3.9.7  Ansible4.5.html--AQ4Iilq.js","assets/ansible自动化运维.html-eOEqoqf3.js","assets/HA_Deploy.html-dBbZ4Si5.js","assets/JumperServerDockerDeploy.html-CUk-DWuh.js","assets/index.html-EtAVQIro.js","assets/OpenStack-Queens版搭建详解.html-xo7WmIBx.js","assets/gitlab ci 编写.html-4ZLLhWLh.js","assets/gitlab ci 部署.html-EIcrmtPL.js","assets/部署Kubernetes类型的gitlab-runner.html-GT8m1t9W.js","assets/elk_kfaka.html-j4f7FN8D.js","assets/Centos7 yum install git2.x 较新版本.html-lCxJ8MK9.js","assets/AWK中的字符串操作函数.html-5FAk1zjC.js","assets/安装Nvidia Runtime.html-4PDJE7zf.js","assets/安装Nvidia驱动.html-m5kyVILm.js","assets/Linux于Windows使用Samba共享文件时文件属性nobody nogroup的解决办法.html-cxV394W1.js","assets/Linux挂载cifs文件系统.html-rCn7WTCw.js","assets/Samba共享文件时文件属性nobody.html-7Xd4xvGu.js","assets/Samba配置举例.html-A8TMRN_m.js","assets/Ubuntu 20.04 安装VNC Server.html-Np8mT2tC.js","assets/vi编辑器.html-ooBOfLVL.js","assets/index.html-o0DMijQ6.js","assets/CPU的虚拟化.html-sxc486Sr.js","assets/操作系统介绍.html-EOK6-rus.js","assets/CentOS 7 用户账户配置.html-9S0Hy6-r.js","assets/CentOS7配置支持AUFS文件系统.html-PaJdXOQd.js","assets/Centos8重启网卡的方法.html-KQY2Opp8.js","assets/firewalld配置.html-qoIvAFS9.js","assets/制作CenOS操作系统.html-LrAordJo.js","assets/配置SSH免密码验证.html-MQkqv-Au.js","assets/Linux 终端命令格式.html-lEAZ8zIv.js","assets/Ubuntu 20.04 Server 使用命令行设置 IP 地址.html-F0v031gF.js","assets/Ubuntu 20.04无法连接网络（网络图标丢失）的解决方案.html-fplyvHxY.js","assets/Ubuntu更改为24小时制.html-kV3Ps-0x.js","assets/Ubuntu软件包文件管理.html-jtJWCjrz.js","assets/VMware虚拟机 Linux系统 Ubuntu 20.04 硬盘-磁盘扩容.html-N7i3ffj7.js","assets/apt查询某个软件有哪些版本.html-q0IzhbrD.js","assets/linux关闭地址空间随机化（ASLR）.html-fOWRt_jS.js","assets/ubuntu14.04 忘记了普通用户密码和root密码.html-ytwYMrNH.js","assets/ubuntu安装nfs.html-9VANz6mk.js","assets/ubuntu查看intel GPU使用情况.html-F0C-Vbnq.js","assets/index.html-TugKvxEW.js","assets/数据结构与算法哔哩哔哩比特就业课.html-bTXSirc7.js","assets/C语言volatile关键字详解.html-6aWeAZ0m.js","assets/index.html-O1RLWqFu.js","assets/二分查找.html-3sVMlatX.js","assets/FastAPI-Python高性能web框架.html-DvaCRwT8.js","assets/PyInstaller带静态依赖文件打包教程.html-d8OGzjLH.js","assets/Python之正则表达式细讲.html-UBvPLeV5.js","assets/Python数据切片例子.html-ll9gs0Td.js","assets/Python数据格式化format.html-kz98T3Y7.js","assets/python re.Match object的说明.html-khBAIA21.js","assets/python re.html-f4Jp6OG0.js","assets/新版VSCode中Python设置自动补全函数括号.html-0uyaAFzA.js","assets/shell脚本bad substitution.html-Uj592YhA.js","assets/基于Wireguard技术的虚拟个人网络搭建（基于Lighthouse服务器）.html-IYRE5Q77.js","assets/Docker一键部署Clash服务与管理面板.html-B8nBH0ip.js","assets/优秀的落地框架 XrayR.html-pquhZ5s_.js","assets/连接CF WARP为服务器添加IPv4IPv6网络.html-_vhiozyl.js","assets/index.html-MIMm8ZgN.js","assets/index.html-t4oDYf70.js","assets/ACLLib.html-sU8xfvlh.js","assets/01_面向对象（OOP）基本概念.html-RtvXyPCI.js","assets/02_类和对象.html-vK8V9-WK.js","assets/03_面相对象基础语法.html-riWqL87o.js","assets/04_面向对象封装案例.html-yw6G1dnl.js","assets/05_面向对象封装案例 II.html-1_Kcyluz.js","assets/06_私有属性和私有方法.html-sGdRIe7n.js","assets/07_单例.html-gVdgfQlP.js","assets/08_多态.html-2yG-Ge4W.js","assets/09_继承.html-kptOAT3R.js","assets/10_类属性和类方法.html-LKcPmS08.js","assets/11_eval函数.html-2DQDRUzB.js","assets/12_模块和包.html-DP9St6hf.js","assets/13_文件.html-pCAcRE5L.js","assets/14_异常.html-2W0fPVYc.js","assets/10 Multi-CPU Scheduling.html-F6G7Du_W.js","assets/13 Address Spaces.html-hMTHFlh_.js","assets/14 Memory API.html-Gg3JamSD.js","assets/15 Address Translation.html-uPYdXZpU.js","assets/16 Segmentation.html-HDQzZYmL.js","assets/17 Free Space Management.html-ceyQD_9W.js","assets/18 Introduction to Paging.html-KAdJfzsy.js","assets/19 Translation Lookaside Buffers.html-fRiivCPe.js","assets/20 Advanced Page Tables.html-4YA451ly.js","assets/21 Swapping Mechanisms.html-VmKbELC_.js","assets/22 Swapping Policies.html-PdFto0-a.js","assets/23 Complete VM Systems.html-GRftn0oi.js","assets/4 Processes.html-8ewVFGt6.js","assets/5 Process API.html-Lk0PQj0a.js","assets/6 Direct Execution.html-gNYgQjQ9.js","assets/7 CPU Scheduling.html-EEsTDUOe.js","assets/8 Multi-level Feedback.html-2qQ8UTEW.js","assets/26 Concurrency and Threads.html-R1CYmxF6.js","assets/27 Thread API.html-TgF4hV00.js","assets/28 Locks.html-6CIoaICY.js","assets/29 Locked Data Structures.html-xcR_s3Sx.js","assets/30 Condition Variables.html-nVZiqaE2.js","assets/31 Semaphores.html-gyjAhqck.js","assets/32 Concurrency Bugs.html-75zmPBnO.js","assets/33 Event-based Concurrency.html-XtApRweM.js","assets/36 IO Devices.html-nLY1xC9M.js","assets/37 Hard Disk Drives.html-AgNtR4dM.js","assets/39 Files and Directories.html-oWyZqEc9.js","assets/40 File System Implementation.html-4tfrTTA2.js","assets/404.html-WM668loP.js","assets/index.html-WRk-fmWO.js","assets/index.html-0vsM8aUU.js","assets/index.html-3jZhpJZa.js","assets/index.html-a-nw0QDJ.js","assets/index.html-YyWuYbBz.js","assets/index.html-6Bwr8b4L.js","assets/index.html-EFLj-VSu.js","assets/index.html-hi-EdC-u.js","assets/index.html-do-z17fj.js","assets/index.html-rkSDBCsS.js","assets/index.html-09LK6GgP.js","assets/index.html-F3N4imz_.js","assets/index.html-MMBcRYK2.js","assets/index.html-5CNGIW6e.js","assets/index.html-457LoWd-.js","assets/index.html-JvOVQkGA.js","assets/index.html-hC0FNVpf.js","assets/index.html-fEVGZXtk.js","assets/index.html-xcG3mYJf.js","assets/index.html-H_fynFyY.js","assets/index.html-Y9KXk_6e.js","assets/index.html-u-XSFpBc.js","assets/index.html-BUobjk0e.js","assets/index.html-yVxECuLK.js","assets/index.html-H7VEYipM.js","assets/index.html-UI8R9tOL.js","assets/index.html-P6HF4TqA.js","assets/index.html-qYF6NM8U.js","assets/index.html-qlwO4a7r.js","assets/index.html-XsSV1pwt.js","assets/index.html-52hWThz0.js","assets/index.html-0DZW9MRP.js","assets/index.html-ZqG9ittP.js","assets/index.html-QF9GLzwQ.js","assets/index.html-1pDOdu8A.js","assets/index.html-wy7f1tIw.js","assets/index.html-mDpj3tl5.js","assets/index.html-D7xr-9i7.js","assets/index.html-81yK1lsP.js","assets/index.html-CsqoSOSB.js","assets/index.html-tE-L57Io.js","assets/index.html-60xrE-rz.js","assets/index.html-qlt49dmX.js","assets/index.html-56U8WIfQ.js","assets/index.html-zICNAl8t.js","assets/index.html-6_5os6CC.js","assets/index.html-asvzdB--.js","assets/index.html-oj2i0GMB.js","assets/index.html-6VU-ggRI.js","assets/index.html-lde4YzD6.js","assets/index.html-Na88a-Ph.js","assets/index.html-WtTEbnFS.js","assets/index.html-BTBgyZQB.js","assets/index.html-NlBzleXn.js","assets/index.html-TKvmPpsM.js","assets/index.html-vV1Si-Rk.js","assets/index.html-C7UcZU8e.js","assets/index.html-4SLuhcV9.js","assets/index.html-Fj2OKQnj.js","assets/index.html-ov-f7Dlo.js","assets/index.html-jwjJ9XDP.js","assets/index.html-XY0uBcZ1.js","assets/index.html-WTeLapFb.js","assets/index.html-6NUQYZup.js","assets/index.html-XBUEwbMj.js","assets/index.html-g5oppk7f.js","assets/index.html-ao4HakOa.js","assets/index.html-MCpNS1ES.js","assets/index.html-PoUdQOwK.js","assets/index.html-jQ8jYxgm.js","assets/index.html-WDrlWCQx.js","assets/index.html-cZW1Es6x.js","assets/index.html-04QtPIfK.js","assets/index.html-ZtvoHK6g.js","assets/index.html-OEpCCVJJ.js","assets/index.html-8E0CXsox.js","assets/index-cZvFWBs6.js","assets/install-HOOcSpEn.js","assets/index-3VcEt7fa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}