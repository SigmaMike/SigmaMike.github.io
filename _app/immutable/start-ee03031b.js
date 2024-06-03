import{S as nt,i as at,s as rt,a as ot,e as j,c as it,b as M,g as Z,t as U,d as Q,f as V,h as C,j as st,o as Oe,k as lt,l as ct,m as ft,n as Ee,p as J,q as ut,r as pt,u as dt,v as H,w as G,x as oe,y as K,z,A as pe}from"./chunks/index-8887cf81.js";import{S as et,I as W,g as ze,f as Je,a as ke,b as de,s as X,i as We,c as _e,P as Ye,d as _t,e as mt,h as ht}from"./chunks/singletons-72910696.js";import{_ as P}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Ae}from"./chunks/control-f5b05b5f.js";function gt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function yt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(r,e){const n=new URL(r);for(const i of bt){let a=n[i];Object.defineProperty(n,i,{get(){return e(),a},enumerable:!0,configurable:!0})}return Et(n),n}function Et(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Rt(r){return r.replace(/\/$/,"")+kt}function Lt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Te(r)),me(r,e));const ae=new Map;function $t(r,e){const n=Te(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:a,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:a,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,d))}return me(r,e)}function It(r,e,n){if(ae.size>0){const i=Te(r,n),a=ae.get(i);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ae.delete(i)}}return me(e,n)}function Te(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${St(r).map(i=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return Re(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Re(String.fromCharCode(...u.slice(2).split("-").map(S=>parseInt(S,16))));const g=Ot.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,T,k,F]=g;return e.push({name:k,matcher:F,optional:!!v,rest:!!T,chained:T?p===1&&t[0]==="":!1}),T?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Re(u)}).join("")}).join("")}/?$`),params:e}}function Pt(r){return!/^\([^)]+\)$/.test(r)}function St(r){return r.slice(1).split("/").filter(Pt)}function Tt(r,e,n){const i={},a=r.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=a[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}i[f.name]=u}}if(!d)return i}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,i){const a=new Set(e);return Object.entries(n).map(([f,[u,p,g]])=>{const{pattern:v,params:T}=At(f),k={id:f,exec:F=>{const S=v.exec(F);if(S)return Tt(S,T,i)},errors:[1,...g||[]].map(F=>r[F]),layouts:[0,...p||[]].map(t),leaf:d(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(f){const u=f<0;return u&&(f=~f),[u,r[f]]}function t(f){return f===void 0?f:[a.has(f),r[f]]}}function Nt(r){let e,n,i;var a=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=H(a,d(r))),{c(){e&&G(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=H(a,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function jt(r){let e,n,i;var a=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return a&&(e=H(a,d(r))),{c(){e&&G(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][0])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=H(a,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Ut(r){let e,n,i;var a=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=H(a,d(r))),{c(){e&&G(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=H(a,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Vt(r){let e,n,i;var a=r[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return a&&(e=H(a,d(r))),{c(){e&&G(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][1])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=H(a,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function qt(r){let e,n,i;var a=r[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=H(a,d(r))),{c(){e&&G(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,f){e&&K(e,t,f),M(t,n,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Z();const p=e;U(p.$$.fragment,1,0,()=>{z(p,1)}),Q()}a?(e=H(a,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&z(e,t)}}}function Ct(r){let e,n,i,a;const d=[Vt,Ut],t=[];function f(u,p){return u[0][2]?0:1}return e=f(r),n=t[e]=d[e](r),{c(){n.c(),i=j()},l(u){n.l(u),i=j()},m(u,p){t[e].m(u,p),M(u,i,p),a=!0},p(u,p){let g=e;e=f(u),e===g?t[e].p(u,p):(Z(),U(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),V(n,1),n.m(i.parentNode,i))},i(u){a||(V(n),a=!0)},o(u){U(n),a=!1},d(u){t[e].d(u),u&&C(i)}}}function Ze(r){let e,n=r[6]&&Qe(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ft(e);n&&n.l(a),a.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),J(e,"position","absolute"),J(e,"left","0"),J(e,"top","0"),J(e,"clip","rect(0 0 0 0)"),J(e,"clip-path","inset(50%)"),J(e,"overflow","hidden"),J(e,"white-space","nowrap"),J(e,"width","1px"),J(e,"height","1px")},m(i,a){M(i,e,a),n&&n.m(e,null)},p(i,a){i[6]?n?n.p(i,a):(n=Qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&C(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=ut(r[7])},l(n){e=pt(n,r[7])},m(n,i){M(n,e,i)},p(n,i){i&128&&dt(e,n[7])},d(n){n&&C(e)}}}function Ft(r){let e,n,i,a,d;const t=[jt,Nt],f=[];function u(g,v){return g[0][1]?0:1}e=u(r),n=f[e]=t[e](r);let p=r[5]&&Ze(r);return{c(){n.c(),i=ot(),p&&p.c(),a=j()},l(g){n.l(g),i=it(g),p&&p.l(g),a=j()},m(g,v){f[e].m(g,v),M(g,i,v),p&&p.m(g,v),M(g,a,v),d=!0},p(g,[v]){let T=e;e=u(g),e===T?f[e].p(g,v):(Z(),U(f[T],1,1,()=>{f[T]=null}),Q(),n=f[e],n?n.p(g,v):(n=f[e]=t[e](g),n.c()),V(n,1),n.m(i.parentNode,i)),g[5]?p?p.p(g,v):(p=Ze(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){d||(V(n),d=!0)},o(g){U(n),d=!1},d(g){f[e].d(g),g&&C(i),p&&p.d(g),g&&C(a)}}}function Bt(r,e,n){let{stores:i}=e,{page:a}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;st(i.page.notify);let g=!1,v=!1,T=null;return Oe(()=>{const k=i.page.subscribe(()=>{g&&(n(6,v=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,i=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,d=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,p=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(a)},[d,t,f,u,p,g,v,T,i,a]}class Mt extends nt{constructor(e){super(),at(this,e,Bt,Ft,rt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ht={},he=[()=>P(()=>import("./chunks/0-f2980251.js"),["./chunks/0-f2980251.js","./chunks/_layout-da46b06b.js","./components/layout.svelte-bef49e12.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/1-38ee9474.js"),["./chunks/1-38ee9474.js","./components/error.svelte-7b653605.js","./chunks/index-8887cf81.js","./chunks/stores-51e45b63.js","./chunks/singletons-72910696.js","./chunks/index-22539224.js"],import.meta.url),()=>P(()=>import("./chunks/2-96f72d52.js"),["./chunks/2-96f72d52.js","./components/pages/blog/_layout.svelte-e1db190d.js","./chunks/index-8887cf81.js","./assets/_layout-7c4e76ed.css"],import.meta.url),()=>P(()=>import("./chunks/3-137d7b81.js"),["./chunks/3-137d7b81.js","./components/pages/search/_layout.svelte-9c18039b.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/4-6ca2fc01.js"),["./chunks/4-6ca2fc01.js","./components/pages/search/_category_/_error.svelte-f08fead4.js","./chunks/index-8887cf81.js","./chunks/stores-51e45b63.js","./chunks/singletons-72910696.js","./chunks/index-22539224.js"],import.meta.url),()=>P(()=>import("./chunks/5-55eaa8bc.js"),["./chunks/5-55eaa8bc.js","./components/pages/Hemsida/_page.svelte-3ce15601.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/6-b6505ede.js"),["./chunks/6-b6505ede.js","./components/pages/Loggain/_page.svelte-105158d8.js","./chunks/index-8887cf81.js","./chunks/navigation-4ec388ec.js","./chunks/singletons-72910696.js","./chunks/index-22539224.js","./assets/_page-ccdfb118.css"],import.meta.url),()=>P(()=>import("./chunks/7-ea915bd8.js"),["./chunks/7-ea915bd8.js","./components/pages/Loggaut/_page.svelte-6c69c3ed.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/8-08cd4349.js"),["./chunks/8-08cd4349.js","./components/pages/MittProgram/_page.svelte-4401261d.js","./chunks/index-8887cf81.js","./chunks/navigation-4ec388ec.js","./chunks/singletons-72910696.js","./chunks/index-22539224.js","./assets/_page-af303ebd.css"],import.meta.url),()=>P(()=>import("./chunks/9-0569a2bc.js"),["./chunks/9-0569a2bc.js","./chunks/_page-80848ead.js","./components/pages/blog/_page.svelte-65719169.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/10-586767f7.js"),["./chunks/10-586767f7.js","./chunks/_page-244f301e.js","./chunks/preload-helper-41c905a7.js","./components/pages/blog/_path_/_page.svelte-682bded4.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/11-861a93a4.js"),["./chunks/11-861a93a4.js","./components/pages/photoapp/_page.svelte-ecb5bd3f.js","./chunks/index-8887cf81.js","./assets/_page-7c4bfb30.css"],import.meta.url),()=>P(()=>import("./chunks/12-b3716211.js"),["./chunks/12-b3716211.js","./components/pages/registrera-mig/_page.svelte-3eb5c242.js","./chunks/index-8887cf81.js","./chunks/navigation-4ec388ec.js","./chunks/singletons-72910696.js","./chunks/index-22539224.js","./assets/_page-a911fa4d.css"],import.meta.url),()=>P(()=>import("./chunks/13-b8a8b0c7.js"),["./chunks/13-b8a8b0c7.js","./components/pages/scroll/_page.svelte-cce6d11f.js","./chunks/index-8887cf81.js","./chunks/index-2c4677ab.js","./assets/_page-1258dfd5.css"],import.meta.url),()=>P(()=>import("./chunks/14-050f5473.js"),["./chunks/14-050f5473.js","./components/pages/search/_page.svelte-a8b29586.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/15-53578f32.js"),["./chunks/15-53578f32.js","./chunks/_page-f8406e2a.js","./chunks/control-f5b05b5f.js","./components/pages/search/_category_/_page.svelte-e8242f32.js","./chunks/index-8887cf81.js"],import.meta.url),()=>P(()=>import("./chunks/16-109fcacd.js"),["./chunks/16-109fcacd.js","./components/pages/telltale/_page.svelte-7bfaf1fe.js","./chunks/index-8887cf81.js","./chunks/index-22539224.js","./chunks/index-2c4677ab.js","./assets/_page-e52d8411.css"],import.meta.url),()=>P(()=>import("./chunks/17-5f784649.js"),["./chunks/17-5f784649.js","./components/pages/Övningar/_page.svelte-93af02cf.js","./chunks/index-8887cf81.js","./chunks/navigation-4ec388ec.js","./chunks/singletons-72910696.js","./chunks/index-22539224.js","./assets/_page-f68aa136.css"],import.meta.url)],Gt=[],Kt={"/Hemsida":[5],"/Loggain":[6],"/Loggaut":[7],"/MittProgram":[8],"/blog":[9,[2]],"/blog/[path]":[10,[2]],"/photoapp":[11],"/registrera-mig":[12],"/scroll":[13],"/search":[14,[3]],"/search/[category]":[15,[3],[,4]],"/telltale":[16],"/Övningar":[17]},zt={handleError:({error:r})=>{console.error(r)}};async function Jt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,a])=>[i,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(a,d=!1){if(a===Wt)return;if(a===Xt)return NaN;if(a===Zt)return 1/0;if(a===Qt)return-1/0;if(a===xt)return-0;if(d)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let v=1;v<t.length;v+=1)u.add(i(t[v]));break;case"Map":const p=new Map;n[a]=p;for(let v=1;v<t.length;v+=2)p.set(i(t[v]),i(t[v+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let v=1;v<t.length;v+=2)g[t[v]]=i(t[v+1]);break}else{const f=new Array(t.length);n[a]=f;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Yt&&(f[u]=i(p))}}else{const f={};n[a]=f;for(const u in t){const p=t[u];f[u]=i(p)}}return n[a]}return i(0)}const Le=Dt(he,Gt,Kt,Ht),Pe=he[0],Se=he[1];Pe();Se();let re={};try{re=JSON.parse(sessionStorage[et])}catch{}function $e(r){re[r]=_e()}function tn({target:r,base:e}){var He;const n=document.documentElement,i=[];let a=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,p=!0,g=!1,v=!1,T=!1,k=!1,F,S=(He=history.state)==null?void 0:He[W];S||(S=Date.now(),history.replaceState({...history.state,[W]:S},"",location.href));const ge=re[S];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Y,De,ie;async function Ne(){ie=ie||Promise.resolve(),await ie,ie=null;const o=new URL(location.href),s=ce(o,!0);a=null,await Ue(s,o,[])}async function we(o,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:_={},invalidateAll:m=!1},h,b){return typeof o=="string"&&(o=new URL(o,ze(document))),fe({url:o,scroll:s?_e():null,keepfocus:l,redirect_chain:h,details:{state:_,replaceState:c},nav_token:b,accepted:()=>{m&&(k=!0)},blocked:()=>{},type:"goto"})}async function je(o){const s=ce(o,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return a={id:s.id,promise:Ce(s).then(c=>(c.type==="loaded"&&c.state.error&&(a=null),c))},a.promise}async function se(...o){const c=Le.filter(l=>o.some(_=>l.exec(_))).map(l=>Promise.all([...l.layouts,l.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(c)}async function Ue(o,s,c,l,_={},m){var b,y;De=_;let h=o&&await Ce(o);if(h||(h=await Me(s,{id:null},await ne(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(o==null?void 0:o.url)||s,De!==_)return!1;if(h.type==="redirect")if(c.length>10||c.includes(s.pathname))h=await le({status:500,error:await ne(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(h.location,s).href,{},[...c,s.pathname],_),!1;else((y=(b=h.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(s);if(i.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,L=w.replaceState?0:1;w.state[W]=S+=L,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(a=null,u?(t=h.state,h.props.page&&(h.props.page.url=s),F.$set(h.props)):Ve(h),l){const{scroll:w,keepfocus:L}=l;if(L||Ie(),await pe(),p){const $=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):$?$.scrollIntoView():scrollTo(0,0)}}else await pe();p=!0,h.props.page&&(Y=h.props.page),m&&m(),g=!1}function Ve(o){var l;t=o.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=o.props.page,F=new Mt({target:r,props:{...o.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(_=>_(c)),u=!0}async function ee({url:o,params:s,branch:c,status:l,error:_,route:m,form:h}){const b=c.filter(Boolean);let y="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(y=I.slash);o.pathname=gt(o.pathname,y),o.search=o.search;const w={type:"loaded",state:{url:o,params:s,branch:c,error:_,route:m},props:{components:b.map(I=>I.node.component)}};h!==void 0&&(w.props.form=h);let L={},$=!Y;for(let I=0;I<b.length;I+=1){const E=b[I];L={...L,...E.data},($||!t.branch.some(N=>N===E))&&(w.props[`data_${I}`]=L,$=$||Object.keys(E.data??{}).length>0)}return $||($=Object.keys(Y.data).length!==Object.keys(L).length),(!t.url||o.href!==t.url.href||t.error!==_||h!==void 0||$)&&(w.props.page={error:_,params:s,route:m,status:l,url:new URL(o),form:h??null,data:$?L:Y.data}),w}async function ye({loader:o,parent:s,url:c,params:l,route:_,server_data_node:m}){var w,L,$;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await o();if((w=y.universal)!=null&&w.load){let B=function(...E){for(const N of E){const{href:q}=new URL(N,c);b.dependencies.add(q)}};const I={route:{get id(){return b.route=!0,_.id}},params:new Proxy(l,{get:(E,N)=>(b.params.add(N),E[N])}),data:(m==null?void 0:m.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,N){let q;E instanceof Request?(q=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):q=E;const R=new URL(q,c).href;return B(R),u?It(q,R,N):$t(q,N)},setHeaders:()=>{},depends:B,parent(){return b.parent=!0,s()}};h=await y.universal.load.call(null,I)??null,h=h?await Jt(h):null}return{node:y,loader:o,server:m,universal:(L=y.universal)!=null&&L.load?{type:"data",data:h,uses:b}:null,data:h??(m==null?void 0:m.data)??null,slash:(($=y.universal)==null?void 0:$.trailingSlash)??(m==null?void 0:m.slash)}}function qe(o,s,c,l,_){if(k)return!0;if(!l)return!1;if(l.parent&&o||l.route&&s||l.url&&c)return!0;for(const m of l.params)if(_[m]!==t.params[m])return!0;for(const m of l.dependencies)if(i.some(h=>h(new URL(m))))return!0;return!1}function be(o,s){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?s??null:null}async function Ce({id:o,invalidating:s,url:c,params:l,route:_}){if((a==null?void 0:a.id)===o)return a.promise;const{errors:m,layouts:h,leaf:b}=_,y=[...h,b];m.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const L=t.url?o!==t.url.pathname+t.url.search:!1,$=t.route?o!==t.route.id:!1,B=y.reduce((R,A,D)=>{var te;const O=t.branch[D],x=!!(A!=null&&A[0])&&((O==null?void 0:O.loader)!==A[1]||qe(R.some(Boolean),$,L,(te=O.server)==null?void 0:te.uses,l));return R.push(x),R},[]);if(B.some(Boolean)){try{w=await xe(c,B)}catch(R){return le({status:500,error:await ne(R,{url:c,params:l,route:{id:_.id}}),url:c,route:_})}if(w.type==="redirect")return w}const I=w==null?void 0:w.nodes;let E=!1;const N=y.map(async(R,A)=>{var te;if(!R)return;const D=t.branch[A],O=I==null?void 0:I[A];if((!O||O.type==="skip")&&R[1]===(D==null?void 0:D.loader)&&!qe(E,$,L,(te=D.universal)==null?void 0:te.uses,l))return D;if(E=!0,(O==null?void 0:O.type)==="error")throw O;return ye({loader:R[1],url:c,params:l,route:_,parent:async()=>{var Ke;const Ge={};for(let ve=0;ve<A;ve+=1)Object.assign(Ge,(Ke=await N[ve])==null?void 0:Ke.data);return Ge},server_data_node:be(O===void 0&&R[0]?{type:"skip"}:O??null,D==null?void 0:D.server)})});for(const R of N)R.catch(()=>{});const q=[];for(let R=0;R<y.length;R+=1)if(y[R])try{q.push(await N[R])}catch(A){if(A instanceof Xe)return{type:"redirect",location:A.location};let D=500,O;I!=null&&I.includes(A)?(D=A.status??D,O=A.error):A instanceof Ae?(D=A.status,O=A.body):O=await ne(A,{params:l,url:c,route:{id:_.id}});const x=await Fe(R,q,m);return x?await ee({url:c,params:l,branch:q.slice(0,x.idx).concat(x.node),status:D,error:O,route:_}):await Me(c,{id:_.id},O,D)}else q.push(void 0);return await ee({url:c,params:l,branch:q,status:200,error:null,route:_,form:s?void 0:null})}async function Fe(o,s,c){for(;o--;)if(c[o]){let l=o;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[o](),loader:c[o],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:o,error:s,url:c,route:l}){const _={},m=await Pe();let h=null;if(m.server)try{const w=await xe(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;h=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const b=await ye({loader:Pe,url:c,params:_,route:l,parent:()=>Promise.resolve({}),server_data_node:be(h)}),y={node:await Se(),loader:Se,universal:null,server:null,data:null};return await ee({url:c,params:_,branch:[b,y],status:o,error:s,route:null})}function ce(o,s){if(We(o,e))return;const c=wt(o.pathname.slice(e.length)||"/");for(const l of Le){const _=l.exec(c);if(_)return{id:o.pathname+o.search,invalidating:s,route:l,params:yt(_),url:o}}}function Be({url:o,type:s,intent:c,delta:l}){var b,y;let _=!1;const m={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:o},willUnload:!c,type:s};l!==void 0&&(m.delta=l);const h={...m,cancel:()=>{_=!0}};return v||d.before_navigate.forEach(w=>w(h)),_?null:m}async function fe({url:o,scroll:s,keepfocus:c,redirect_chain:l,details:_,type:m,delta:h,nav_token:b,accepted:y,blocked:w}){const L=ce(o,!1),$=Be({url:o,type:m,delta:h,intent:L});if(!$){w();return}$e(S),y(),v=!0,u&&X.navigating.set($),await Ue(L,o,l,{scroll:s,keepfocus:c,details:_},b,()=>{v=!1,d.after_navigate.forEach(B=>B($)),X.navigating.set(null)})}async function Me(o,s,c,l){return o.origin===location.origin&&o.pathname===location.pathname&&!f?await le({status:l,error:c,url:o,route:s}):await ue(o)}function ue(o){return location.href=o.href,new Promise(()=>{})}function tt(){let o;n.addEventListener("mousemove",m=>{const h=m.target;clearTimeout(o),o=setTimeout(()=>{l(h,2)},20)});function s(m){l(m.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(m=>{for(const h of m)h.isIntersecting&&(se(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function l(m,h){const b=Je(m,n);if(!b)return;const{url:y,external:w}=ke(b,e);if(w)return;const L=de(b);L.reload||(h<=L.preload_data?je(y):h<=L.preload_code&&se(y.pathname))}function _(){c.disconnect();for(const m of n.querySelectorAll("a")){const{url:h,external:b}=ke(m,e);if(b)continue;const y=de(m);y.reload||(y.preload_code===Ye.viewport&&c.observe(m),y.preload_code===Ye.eager&&se(h.pathname))}}d.after_navigate.push(_),_()}return{after_navigate:o=>{Oe(()=>(d.after_navigate.push(o),()=>{const s=d.after_navigate.indexOf(o);d.after_navigate.splice(s,1)}))},before_navigate:o=>{Oe(()=>(d.before_navigate.push(o),()=>{const s=d.before_navigate.indexOf(o);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(o,s={})=>we(o,s,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:s}=new URL(o,location.href);i.push(c=>c.href===s)}return Ne()},invalidateAll:()=>(k=!0,Ne()),preload_data:async o=>{const s=new URL(o,ze(document));await je(s)},preload_code:se,apply_action:async o=>{if(o.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const _=await Fe(t.branch.length,c,l.errors);if(_){const m=await ee({url:s,params:t.params,branch:c.slice(0,_.idx).concat(_.node),status:o.status??500,error:o.error,route:l});t=m.state,F.$set(m.props),pe().then(Ie)}}else if(o.type==="redirect")we(o.location,{invalidateAll:!0},[]);else{const s={form:o.data,page:{...Y,form:o.data,status:o.status}};F.$set(s),o.type==="success"&&pe().then(Ie)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!v){const _={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(m=>m(_))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(S);try{sessionStorage[et]=JSON.stringify(re)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||tt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Je(s.composedPath()[0],n);if(!c)return;const{url:l,external:_,has:m}=ke(c,e),h=de(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||m.download)return;if(_||h.reload){Be({url:l,type:"link"})||s.preventDefault(),v=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){T=!0,$e(S),t.url=l,X.page.set({...Y,url:l}),X.page.notify();return}fe({url:l,scroll:h.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{var y;if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const m=new URL(((y=s.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(m,e))return;const{noscroll:h,reload:b}=de(s.target);b||(s.preventDefault(),s.stopPropagation(),m.search=new URLSearchParams(new FormData(s.target)).toString(),fe({url:m,scroll:h?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[W]){if(s.state[W]===S)return;const l=s.state[W]-S;fe({url:new URL(location.href),scroll:re[s.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{S=s.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[W]:++S},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&X.navigating.set(null)})},_hydrate:async({status:o=200,error:s,node_ids:c,params:l,route:_,data:m,form:h})=>{f=!0;const b=new URL(location.href);({params:l={},route:_={id:null}}=ce(b,!1)||{});let y;try{const w=c.map(async(L,$)=>{const B=m[$];return ye({loader:he[L],url:b,params:l,route:_,parent:async()=>{const I={};for(let E=0;E<$;E+=1)Object.assign(I,(await w[E]).data);return I},server_data_node:be(B)})});y=await ee({url:b,params:l,branch:await Promise.all(w),status:o,error:s,form:h,route:Le.find(({id:L})=>L===_.id)??null})}catch(w){if(w instanceof Xe){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Ae?w.status:500,error:await ne(w,{url:b,params:l,route:_}),url:b,route:_})}Ve(y)}}}async function xe(r,e){var d;const n=new URL(r);n.pathname=Rt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),a=await i.json();if(!i.ok)throw new Error(a);return(d=a.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function ne(r,e){return r instanceof Ae?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:n,target:i,version:a}){_t(n),ht(a);const d=tn({target:i,base:n.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{sn as start};