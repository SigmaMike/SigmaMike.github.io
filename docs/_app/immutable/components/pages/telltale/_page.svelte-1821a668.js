import{S as F,i as z,s as W,k as g,l as v,m as b,h as u,n as p,b as d,G as w,t as E,d as A,f as O,H as C,Q as J,R as L,T as Q,g as U,B as X,V as Z,q as I,r as S,u as T,a as j,c as R,J as K,M as N,W as $,e as D,X as x,O as ee}from"../../../chunks/index-85e73adc.js";import{w as Y}from"../../../chunks/index-c177836a.js";import{f as M}from"../../../chunks/index-559bc2f2.js";const te=(window==null?void 0:window.localStorage.getItem("chat"))??" ",q=Y(te);q.subscribe(r=>{window==null||window.localStorage.setItem("story_id",r),console.log(r)});const le=(window==null?void 0:window.localStorage.getItem("chat"))??" ",ie=Y(le);ie.subscribe(r=>{window==null||window.localStorage.setItem("chat",r),console.log(r)});let se=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"🤣🤣🤣🤣🤣",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function P(r,e,i){const s=r.slice();return s[4]=e[i],s}function ae(r){let e,i,s,t;return{c(){e=g("p"),i=I("STORY FOR ID "),s=I(r[0]),t=I(" MISSING")},l(l){e=v(l,"P",{});var c=b(e);i=S(c,"STORY FOR ID "),s=S(c,r[0]),t=S(c," MISSING"),c.forEach(u)},m(l,c){d(l,e,c),w(e,i),w(e,s),w(e,t)},p(l,c){c&1&&T(s,l[0])},d(l){l&&u(e)}}}function re(r){let e,i,s,t=r[1].message+"",l,c,n,o=r[1].img&&V(r),f=r[1].html&&B(r),k=r[1].choices,h=[];for(let a=0;a<k.length;a+=1)h[a]=G(P(r,k,a));return{c(){o&&o.c(),e=j(),f&&f.c(),i=j(),s=g("p"),l=I(t),c=j(),n=g("div");for(let a=0;a<h.length;a+=1)h[a].c();this.h()},l(a){o&&o.l(a),e=R(a),f&&f.l(a),i=R(a),s=v(a,"P",{});var m=b(s);l=S(m,t),m.forEach(u),c=R(a),n=v(a,"DIV",{class:!0});var _=b(n);for(let y=0;y<h.length;y+=1)h[y].l(_);_.forEach(u),this.h()},h(){p(n,"class","row svelte-1qejnfu")},m(a,m){o&&o.m(a,m),d(a,e,m),f&&f.m(a,m),d(a,i,m),d(a,s,m),w(s,l),d(a,c,m),d(a,n,m);for(let _=0;_<h.length;_+=1)h[_].m(n,null)},p(a,m){if(a[1].img?o?o.p(a,m):(o=V(a),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),a[1].html?f?f.p(a,m):(f=B(a),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),m&2&&t!==(t=a[1].message+"")&&T(l,t),m&6){k=a[1].choices;let _;for(_=0;_<k.length;_+=1){const y=P(a,k,_);h[_]?h[_].p(y,m):(h[_]=G(y),h[_].c(),h[_].m(n,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=k.length}},d(a){o&&o.d(a),a&&u(e),f&&f.d(a),a&&u(i),a&&u(s),a&&u(c),a&&u(n),K(h,a)}}}function V(r){let e,i,s;return{c(){e=g("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){N(e.src,i=r[1].img)||p(e,"src",i),p(e,"alt",s=r[1].message),p(e,"class","svelte-1qejnfu")},m(t,l){d(t,e,l)},p(t,l){l&2&&!N(e.src,i=t[1].img)&&p(e,"src",i),l&2&&s!==(s=t[1].message)&&p(e,"alt",s)},d(t){t&&u(e)}}}function B(r){let e,i=r[1].html+"",s;return{c(){e=new $(!1),s=D(),this.h()},l(t){e=x(t,!1),s=D(),this.h()},h(){e.a=s},m(t,l){e.m(i,t,l),d(t,s,l)},p(t,l){l&2&&i!==(i=t[1].html+"")&&e.p(i)},d(t){t&&u(s),t&&e.d()}}}function G(r){let e,i=r[4].text+"",s,t,l;function c(){return r[3](r[4])}return{c(){e=g("button"),s=I(i)},l(n){e=v(n,"BUTTON",{});var o=b(e);s=S(o,i),o.forEach(u)},m(n,o){d(n,e,o),w(e,s),t||(l=ee(e,"click",c),t=!0)},p(n,o){r=n,o&2&&i!==(i=r[4].text+"")&&T(s,i)},d(n){n&&u(e),t=!1,l()}}}function H(r){let e,i,s,t;function l(o,f){return o[1]?re:ae}let c=l(r),n=c(r);return{c(){e=g("div"),n.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var f=b(e);n.l(f),f.forEach(u),this.h()},h(){p(e,"class","container svelte-1qejnfu")},m(o,f){d(o,e,f),n.m(e,null),t=!0},p(o,f){c===(c=l(o))&&n?n.p(o,f):(n.d(1),n=c(o),n&&(n.c(),n.m(e,null)))},i(o){t||(o&&J(()=>{s&&s.end(1),i=L(e,M,{x:800,duration:750}),i.start()}),t=!0)},o(o){i&&i.invalidate(),o&&(s=Q(e,M,{x:-800,duration:750})),t=!1},d(o){o&&u(e),n.d(),o&&s&&s.end()}}}function oe(r){let e,i,s=r[0],t=H(r);return{c(){e=g("main"),i=g("div"),t.c(),this.h()},l(l){e=v(l,"MAIN",{class:!0});var c=b(e);i=v(c,"DIV",{class:!0});var n=b(i);t.l(n),n.forEach(u),c.forEach(u),this.h()},h(){p(i,"class","grid svelte-1qejnfu"),p(e,"class","svelte-1qejnfu")},m(l,c){d(l,e,c),w(e,i),t.m(i,null)},p(l,[c]){c&1&&W(s,s=l[0])?(U(),E(t,1,1,X),A(),t=H(l),t.c(),O(t,1),t.m(i,null)):t.p(l,c)},i(l){O(t)},o(l){E(t)},d(l){l&&u(e),t.d(l)}}}function ne(r,e,i){let s,t,l;C(r,q,n=>i(2,l=n));const c=n=>{Z(q,l=n.id,l)};return r.$$.update=()=>{r.$$.dirty&4&&i(0,s=l),r.$$.dirty&1&&i(1,t=se.find(n=>n.id==s))},[s,t,l,c]}class ue extends F{constructor(e){super(),z(this,e,ne,oe,W,{})}}export{ue as default};
