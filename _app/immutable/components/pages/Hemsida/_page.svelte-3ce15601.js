import{S as H,i as N,s as O,k as g,q as m,a as L,l as _,m as p,r as d,h as i,c as A,n as v,J as z,p as $,b as y,G as l,u as F,B as D,o as K}from"../../../chunks/index-8887cf81.js";function Q(u){let e,s;return{c(){e=g("a"),s=m("Logga in"),this.h()},l(a){e=_(a,"A",{href:!0});var r=p(e);s=d(r,"Logga in"),r.forEach(i),this.h()},h(){v(e,"href","/Loggain")},m(a,r){y(a,e,r),l(e,s)},d(a){a&&i(e)}}}function T(u){let e,s;return{c(){e=g("a"),s=m("Logga ut"),this.h()},l(a){e=_(a,"A",{href:!0});var r=p(e);s=d(r,"Logga ut"),r.forEach(i),this.h()},h(){v(e,"href","Loggaut")},m(a,r){y(a,e,r),l(e,s)},d(a){a&&i(e)}}}function W(u){let e,s,a=(u[0]?u[0]:"")+"",r,q,I,o,M,k,V,w,b,x,G,E,J,S,f,R;function U(t,n){return t[0]?T:Q}let P=U(u),h=P(u);return{c(){e=g("h1"),s=m("Välkommen "),r=m(a),q=m("!"),I=L(),o=g("div"),h.c(),M=L(),k=g("a"),V=m("Övningar"),w=L(),b=g("a"),x=m("Registrera mig"),G=L(),E=g("a"),J=m("Mitt Program"),S=L(),f=g("img"),this.h()},l(t){e=_(t,"H1",{});var n=p(e);s=d(n,"Välkommen "),r=d(n,a),q=d(n,"!"),n.forEach(i),I=A(t),o=_(t,"DIV",{});var c=p(o);h.l(c),M=A(c),k=_(c,"A",{href:!0});var j=p(k);V=d(j,"Övningar"),j.forEach(i),w=A(c),b=_(c,"A",{href:!0});var B=p(b);x=d(B,"Registrera mig"),B.forEach(i),G=A(c),E=_(c,"A",{href:!0});var C=p(E);J=d(C,"Mitt Program"),C.forEach(i),c.forEach(i),S=A(t),f=_(t,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){v(k,"href","/Övningar"),v(b,"href","/registrera-mig"),v(E,"href","/MittProgram"),z(f.src,R="gym.jpg")||v(f,"src",R),v(f,"alt","Stor bild"),$(f,"display","flex"),$(f,"margin-top","20px"),$(f,"width","vw"),$(f,"height","auto")},m(t,n){y(t,e,n),l(e,s),l(e,r),l(e,q),y(t,I,n),y(t,o,n),h.m(o,null),l(o,M),l(o,k),l(k,V),l(o,w),l(o,b),l(b,x),l(o,G),l(o,E),l(E,J),y(t,S,n),y(t,f,n)},p(t,[n]){n&1&&a!==(a=(t[0]?t[0]:"")+"")&&F(r,a),P!==(P=U(t))&&(h.d(1),h=P(t),h&&(h.c(),h.m(o,M)))},i:D,o:D,d(t){t&&i(e),t&&i(I),t&&i(o),h.d(),t&&i(S),t&&i(f)}}}function X(u,e,s){let a;return K(()=>{s(0,a=JSON.parse(localStorage.getItem("loggedInUser"))||null)}),[a]}class Z extends H{constructor(e){super(),N(this,e,X,W,O,{})}}export{Z as default};
