import{S as he,i as Ee,s as Te,k as n,a as i,q as x,l as t,c as a,m as r,r as g,h as o,n as d,p as me,b as oe,D as e,B as re}from"../../../chunks/index-2bb69101.js";function ve(ue){let f,B,p,s,H,Y,b,S,I,U,q,_,z,N,C,u,w,X,R,h,l,k,j,G,D,J,y,Q,L,W,Z,m,O,$,ee,M,ne,K,te;return{c(){f=n("!DOCTYPE"),B=i(),p=n("html"),s=n("head"),H=n("meta"),Y=i(),b=n("meta"),S=i(),I=n("title"),U=x("Todo List"),q=i(),_=n("style"),z=x(`.container {\r
            background-color: lightgreen;\r
            width: 100vw;\r
            height: 80vh;\r
            border: 10px dashed blue;\r
            border-radius: 2px;\r
            padding: 40px;\r
        }\r
\r
        .layout {\r
            display: grid;\r
            width: 100%;\r
            grid-template-columns: 50% 50%;\r
        }\r
\r
        .completed-container {\r
            margin-left: 80px;\r
            position: relative;\r
        }\r
\r
        .completed-item {\r
            cursor: pointer;\r
            margin-bottom: 5px;\r
            position:relative;\r
        }\r
\r
        .delete-knapp {\r
            position:absolute;\r
            top: 0;\r
            right: 0;\r
            background-color:red;\r
            color:white;\r
            border:none;\r
            padding:3px;\r
            font-size:30px;\r
            border-radius:50%;\r
            transition:opacity 0.3s ease;\r
            opacity: 0;\r
        }\r
\r
        .completed-item:hover .delete-knapp {\r
            opacity: 1;\r
        }`),N=i(),C=n("body"),u=n("div"),w=n("h1"),X=x("Todo List"),R=i(),h=n("div"),l=n("div"),k=n("h1"),j=x("Todo⬇️"),G=i(),D=n("div"),J=i(),y=n("input"),Q=i(),L=n("button"),W=x("Add"),Z=i(),m=n("div"),O=n("h1"),$=x("COMPLETED⬇️"),ee=i(),M=n("div"),ne=i(),K=n("script"),te=x(`let todos = [];\r
    let completedTodos = [];\r
\r
    document.addEventListener("DOMContentLoaded", renderTodos);\r
\r
    function addTodo() {\r
        const input = document.getElementById("newTodoInput");\r
        const newTodo = input.value.trim();\r
        if (newTodo !== "") {\r
            todos.push(newTodo);\r
            input.value = "";\r
            renderTodos();\r
        }\r
    }\r
\r
    function renderTodos() {\r
        const todoContainer = document.getElementById("todoContainer");\r
        todoContainer.innerHTML = "";\r
        todos.forEach(todo => {\r
            const todoElement = document.createElement("p");\r
            todoElement.textContent = todo;\r
            todoElement.addEventListener("click", () => completeTodoFromList(todo));\r
            todoContainer.appendChild(todoElement);\r
        });\r
    }\r
\r
    function completeTodoFromList(todo) {\r
        const index = todos.indexOf(todo);\r
        if (index > -1) {\r
            const completedTodo = todos.splice(index, 1)[0];\r
            completedTodos.push(completedTodo);\r
            renderTodos();\r
            renderCompletedTodos();\r
        }\r
    }\r
\r
    function renderCompletedTodos() {\r
        const completedContainer = document.getElementById("completedContainer");\r
        completedContainer.innerHTML = "";\r
        completedTodos.forEach(todo => {\r
            const todoElement = document.createElement("p");\r
            todoElement.textContent = todo;\r
            todoElement.classList.add("completed-item");\r
            todoElement.addEventListener("click", () => removeCompletedItem(todo));\r
            completedContainer.appendChild(todoElement);\r
\r
            const deleteKnapp = document.createElement("button");\r
            deleteKnapp.textContent = "X";\r
            deleteKnapp.classList.add("delete-knapp");\r
            deleteKnapp.addEventListener("click", () => removeCompletedItem(todo));\r
            todoElement.appendChild(deleteKnapp);\r
        });\r
    }\r
\r
    function removeCompletedItem(todo) {\r
        const index = completedTodos.indexOf(todo);\r
        if (index > -1) {\r
            completedTodos.splice(index, 1);\r
            renderCompletedTodos();\r
        }\r
    }`),this.h()},l(c){f=t(c,"!DOCTYPE",{html:!0}),B=a(c),p=t(c,"HTML",{lang:!0});var E=r(p);s=t(E,"HEAD",{});var T=r(s);H=t(T,"META",{charset:!0}),Y=a(T),b=t(T,"META",{name:!0,content:!0}),S=a(T),I=t(T,"TITLE",{});var de=r(I);U=g(de,"Todo List"),de.forEach(o),q=a(T),_=t(T,"STYLE",{});var le=r(_);z=g(le,`.container {\r
            background-color: lightgreen;\r
            width: 100vw;\r
            height: 80vh;\r
            border: 10px dashed blue;\r
            border-radius: 2px;\r
            padding: 40px;\r
        }\r
\r
        .layout {\r
            display: grid;\r
            width: 100%;\r
            grid-template-columns: 50% 50%;\r
        }\r
\r
        .completed-container {\r
            margin-left: 80px;\r
            position: relative;\r
        }\r
\r
        .completed-item {\r
            cursor: pointer;\r
            margin-bottom: 5px;\r
            position:relative;\r
        }\r
\r
        .delete-knapp {\r
            position:absolute;\r
            top: 0;\r
            right: 0;\r
            background-color:red;\r
            color:white;\r
            border:none;\r
            padding:3px;\r
            font-size:30px;\r
            border-radius:50%;\r
            transition:opacity 0.3s ease;\r
            opacity: 0;\r
        }\r
\r
        .completed-item:hover .delete-knapp {\r
            opacity: 1;\r
        }`),le.forEach(o),T.forEach(o),N=a(E),C=t(E,"BODY",{});var P=r(C);u=t(P,"DIV",{class:!0});var A=r(u);w=t(A,"H1",{});var ie=r(w);X=g(ie,"Todo List"),ie.forEach(o),R=a(A),h=t(A,"DIV",{class:!0});var V=r(h);l=t(V,"DIV",{style:!0});var v=r(l);k=t(v,"H1",{});var ae=r(k);j=g(ae,"Todo⬇️"),ae.forEach(o),G=a(v),D=t(v,"DIV",{id:!0}),r(D).forEach(o),J=a(v),y=t(v,"INPUT",{type:!0,id:!0,placeholder:!0}),Q=a(v),L=t(v,"BUTTON",{onclick:!0});var se=r(L);W=g(se,"Add"),se.forEach(o),v.forEach(o),Z=a(V),m=t(V,"DIV",{style:!0,class:!0});var F=r(m);O=t(F,"H1",{});var ce=r(O);$=g(ce,"COMPLETED⬇️"),ce.forEach(o),ee=a(F),M=t(F,"DIV",{id:!0}),r(M).forEach(o),F.forEach(o),V.forEach(o),A.forEach(o),ne=a(P),K=t(P,"SCRIPT",{});var pe=r(K);te=g(pe,`let todos = [];\r
    let completedTodos = [];\r
\r
    document.addEventListener("DOMContentLoaded", renderTodos);\r
\r
    function addTodo() {\r
        const input = document.getElementById("newTodoInput");\r
        const newTodo = input.value.trim();\r
        if (newTodo !== "") {\r
            todos.push(newTodo);\r
            input.value = "";\r
            renderTodos();\r
        }\r
    }\r
\r
    function renderTodos() {\r
        const todoContainer = document.getElementById("todoContainer");\r
        todoContainer.innerHTML = "";\r
        todos.forEach(todo => {\r
            const todoElement = document.createElement("p");\r
            todoElement.textContent = todo;\r
            todoElement.addEventListener("click", () => completeTodoFromList(todo));\r
            todoContainer.appendChild(todoElement);\r
        });\r
    }\r
\r
    function completeTodoFromList(todo) {\r
        const index = todos.indexOf(todo);\r
        if (index > -1) {\r
            const completedTodo = todos.splice(index, 1)[0];\r
            completedTodos.push(completedTodo);\r
            renderTodos();\r
            renderCompletedTodos();\r
        }\r
    }\r
\r
    function renderCompletedTodos() {\r
        const completedContainer = document.getElementById("completedContainer");\r
        completedContainer.innerHTML = "";\r
        completedTodos.forEach(todo => {\r
            const todoElement = document.createElement("p");\r
            todoElement.textContent = todo;\r
            todoElement.classList.add("completed-item");\r
            todoElement.addEventListener("click", () => removeCompletedItem(todo));\r
            completedContainer.appendChild(todoElement);\r
\r
            const deleteKnapp = document.createElement("button");\r
            deleteKnapp.textContent = "X";\r
            deleteKnapp.classList.add("delete-knapp");\r
            deleteKnapp.addEventListener("click", () => removeCompletedItem(todo));\r
            todoElement.appendChild(deleteKnapp);\r
        });\r
    }\r
\r
    function removeCompletedItem(todo) {\r
        const index = completedTodos.indexOf(todo);\r
        if (index > -1) {\r
            completedTodos.splice(index, 1);\r
            renderCompletedTodos();\r
        }\r
    }`),pe.forEach(o),P.forEach(o),E.forEach(o),this.h()},h(){d(f,"html",""),d(H,"charset","UTF-8"),d(b,"name","viewport"),d(b,"content","width=device-width, initial-scale=1.0"),d(D,"id","todoContainer"),d(y,"type","text"),d(y,"id","newTodoInput"),d(y,"placeholder","Add to do"),d(L,"onclick","addTodo()"),me(l,"display","grid"),d(M,"id","completedContainer"),me(m,"display","grid"),d(m,"class","completed-container"),d(h,"class","layout"),d(u,"class","container"),d(p,"lang","en")},m(c,E){oe(c,f,E),oe(c,B,E),oe(c,p,E),e(p,s),e(s,H),e(s,Y),e(s,b),e(s,S),e(s,I),e(I,U),e(s,q),e(s,_),e(_,z),e(p,N),e(p,C),e(C,u),e(u,w),e(w,X),e(u,R),e(u,h),e(h,l),e(l,k),e(k,j),e(l,G),e(l,D),e(l,J),e(l,y),e(l,Q),e(l,L),e(L,W),e(h,Z),e(h,m),e(m,O),e(O,$),e(m,ee),e(m,M),e(C,ne),e(C,K),e(K,te)},p:re,i:re,o:re,d(c){c&&o(f),c&&o(B),c&&o(p)}}}class Ce extends he{constructor(f){super(),Ee(this,f,null,ve,Te,{})}}export{Ce as default};
