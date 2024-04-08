import{S as he,i as Ee,s as Te,k as n,a as r,q as x,l as t,c as a,m as d,r as g,h as o,n as l,p as me,b as oe,D as e,B as de}from"../../../chunks/index-2bb69101.js";function ve(ue){let f,B,p,s,H,Y,b,S,I,U,q,_,z,N,C,u,w,X,R,h,i,k,j,G,D,J,y,Q,L,W,Z,m,O,$,ee,M,ne,K,te;return{c(){f=n("!DOCTYPE"),B=r(),p=n("html"),s=n("head"),H=n("meta"),Y=r(),b=n("meta"),S=r(),I=n("title"),U=x("Todo List"),q=r(),_=n("style"),z=x(`.container {
            background-color: lightgreen;
            width: 100vw;
            height: 80vh;
            border: 10px dashed blue;
            border-radius: 2px;
            padding: 40px;
        }

        .layout {
            display: grid;
            width: 100%;
            grid-template-columns: 50% 50%;
        }

        .completed-container {
            margin-left: 80px;
            position: relative;
        }

        .completed-item {
            cursor: pointer;
            margin-bottom: 5px;
            position:relative;
        }

        .delete-knapp {
            position:absolute;
            top: 0;
            right: 0;
            background-color:red;
            color:white;
            border:none;
            padding:3px;
            font-size:30px;
            border-radius:50%;
            transition:opacity 0.3s ease;
            opacity: 0;
        }

        .completed-item:hover .delete-knapp {
            opacity: 1;
        }`),N=r(),C=n("body"),u=n("div"),w=n("h1"),X=x("Todo List"),R=r(),h=n("div"),i=n("div"),k=n("h1"),j=x("Todo⬇️"),G=r(),D=n("div"),J=r(),y=n("input"),Q=r(),L=n("button"),W=x("Add"),Z=r(),m=n("div"),O=n("h1"),$=x("COMPLETED⬇️"),ee=r(),M=n("div"),ne=r(),K=n("script"),te=x(`let todos = [];
    let completedTodos = [];

    document.addEventListener("DOMContentLoaded", renderTodos);

    function addTodo() {
        const input = document.getElementById("newTodoInput");
        const newTodo = input.value.trim();
        if (newTodo !== "") {
            todos.push(newTodo);
            input.value = "";
            renderTodos();
        }
    }

    function renderTodos() {
        const todoContainer = document.getElementById("todoContainer");
        todoContainer.innerHTML = "";
        todos.forEach(todo => {
            const todoElement = document.createElement("p");
            todoElement.textContent = todo;
            todoElement.addEventListener("click", () => completeTodoFromList(todo));
            todoContainer.appendChild(todoElement);
        });
    }

    function completeTodoFromList(todo) {
        const index = todos.indexOf(todo);
        if (index > -1) {
            const completedTodo = todos.splice(index, 1)[0];
            completedTodos.push(completedTodo);
            renderTodos();
            renderCompletedTodos();
        }
    }

    function renderCompletedTodos() {
        const completedContainer = document.getElementById("completedContainer");
        completedContainer.innerHTML = "";
        completedTodos.forEach(todo => {
            const todoElement = document.createElement("p");
            todoElement.textContent = todo;
            todoElement.classList.add("completed-item");
            todoElement.addEventListener("click", () => removeCompletedItem(todo));
            completedContainer.appendChild(todoElement);

            const deleteKnapp = document.createElement("button");
            deleteKnapp.textContent = "X";
            deleteKnapp.classList.add("delete-knapp");
            deleteKnapp.addEventListener("click", () => removeCompletedItem(todo));
            todoElement.appendChild(deleteKnapp);
        });
    }

    function removeCompletedItem(todo) {
        const index = completedTodos.indexOf(todo);
        if (index > -1) {
            completedTodos.splice(index, 1);
            renderCompletedTodos();
        }
    }`),this.h()},l(c){f=t(c,"!DOCTYPE",{html:!0}),B=a(c),p=t(c,"HTML",{lang:!0});var E=d(p);s=t(E,"HEAD",{});var T=d(s);H=t(T,"META",{charset:!0}),Y=a(T),b=t(T,"META",{name:!0,content:!0}),S=a(T),I=t(T,"TITLE",{});var le=d(I);U=g(le,"Todo List"),le.forEach(o),q=a(T),_=t(T,"STYLE",{});var ie=d(_);z=g(ie,`.container {
            background-color: lightgreen;
            width: 100vw;
            height: 80vh;
            border: 10px dashed blue;
            border-radius: 2px;
            padding: 40px;
        }

        .layout {
            display: grid;
            width: 100%;
            grid-template-columns: 50% 50%;
        }

        .completed-container {
            margin-left: 80px;
            position: relative;
        }

        .completed-item {
            cursor: pointer;
            margin-bottom: 5px;
            position:relative;
        }

        .delete-knapp {
            position:absolute;
            top: 0;
            right: 0;
            background-color:red;
            color:white;
            border:none;
            padding:3px;
            font-size:30px;
            border-radius:50%;
            transition:opacity 0.3s ease;
            opacity: 0;
        }

        .completed-item:hover .delete-knapp {
            opacity: 1;
        }`),ie.forEach(o),T.forEach(o),N=a(E),C=t(E,"BODY",{});var P=d(C);u=t(P,"DIV",{class:!0});var A=d(u);w=t(A,"H1",{});var re=d(w);X=g(re,"Todo List"),re.forEach(o),R=a(A),h=t(A,"DIV",{class:!0});var V=d(h);i=t(V,"DIV",{style:!0});var v=d(i);k=t(v,"H1",{});var ae=d(k);j=g(ae,"Todo⬇️"),ae.forEach(o),G=a(v),D=t(v,"DIV",{id:!0}),d(D).forEach(o),J=a(v),y=t(v,"INPUT",{type:!0,id:!0,placeholder:!0}),Q=a(v),L=t(v,"BUTTON",{onclick:!0});var se=d(L);W=g(se,"Add"),se.forEach(o),v.forEach(o),Z=a(V),m=t(V,"DIV",{style:!0,class:!0});var F=d(m);O=t(F,"H1",{});var ce=d(O);$=g(ce,"COMPLETED⬇️"),ce.forEach(o),ee=a(F),M=t(F,"DIV",{id:!0}),d(M).forEach(o),F.forEach(o),V.forEach(o),A.forEach(o),ne=a(P),K=t(P,"SCRIPT",{});var pe=d(K);te=g(pe,`let todos = [];
    let completedTodos = [];

    document.addEventListener("DOMContentLoaded", renderTodos);

    function addTodo() {
        const input = document.getElementById("newTodoInput");
        const newTodo = input.value.trim();
        if (newTodo !== "") {
            todos.push(newTodo);
            input.value = "";
            renderTodos();
        }
    }

    function renderTodos() {
        const todoContainer = document.getElementById("todoContainer");
        todoContainer.innerHTML = "";
        todos.forEach(todo => {
            const todoElement = document.createElement("p");
            todoElement.textContent = todo;
            todoElement.addEventListener("click", () => completeTodoFromList(todo));
            todoContainer.appendChild(todoElement);
        });
    }

    function completeTodoFromList(todo) {
        const index = todos.indexOf(todo);
        if (index > -1) {
            const completedTodo = todos.splice(index, 1)[0];
            completedTodos.push(completedTodo);
            renderTodos();
            renderCompletedTodos();
        }
    }

    function renderCompletedTodos() {
        const completedContainer = document.getElementById("completedContainer");
        completedContainer.innerHTML = "";
        completedTodos.forEach(todo => {
            const todoElement = document.createElement("p");
            todoElement.textContent = todo;
            todoElement.classList.add("completed-item");
            todoElement.addEventListener("click", () => removeCompletedItem(todo));
            completedContainer.appendChild(todoElement);

            const deleteKnapp = document.createElement("button");
            deleteKnapp.textContent = "X";
            deleteKnapp.classList.add("delete-knapp");
            deleteKnapp.addEventListener("click", () => removeCompletedItem(todo));
            todoElement.appendChild(deleteKnapp);
        });
    }

    function removeCompletedItem(todo) {
        const index = completedTodos.indexOf(todo);
        if (index > -1) {
            completedTodos.splice(index, 1);
            renderCompletedTodos();
        }
    }`),pe.forEach(o),P.forEach(o),E.forEach(o),this.h()},h(){l(f,"html",""),l(H,"charset","UTF-8"),l(b,"name","viewport"),l(b,"content","width=device-width, initial-scale=1.0"),l(D,"id","todoContainer"),l(y,"type","text"),l(y,"id","newTodoInput"),l(y,"placeholder","Add to do"),l(L,"onclick","addTodo()"),me(i,"display","grid"),l(M,"id","completedContainer"),me(m,"display","grid"),l(m,"class","completed-container"),l(h,"class","layout"),l(u,"class","container"),l(p,"lang","en")},m(c,E){oe(c,f,E),oe(c,B,E),oe(c,p,E),e(p,s),e(s,H),e(s,Y),e(s,b),e(s,S),e(s,I),e(I,U),e(s,q),e(s,_),e(_,z),e(p,N),e(p,C),e(C,u),e(u,w),e(w,X),e(u,R),e(u,h),e(h,i),e(i,k),e(k,j),e(i,G),e(i,D),e(i,J),e(i,y),e(i,Q),e(i,L),e(L,W),e(h,Z),e(h,m),e(m,O),e(O,$),e(m,ee),e(m,M),e(C,ne),e(C,K),e(K,te)},p:de,i:de,o:de,d(c){c&&o(f),c&&o(B),c&&o(p)}}}class Ce extends he{constructor(f){super(),Ee(this,f,null,ve,Te,{})}}export{Ce as default};
