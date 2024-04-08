<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        .container {
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
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Todo List</h1>
    <div class="layout">
        <div style="display: grid">
            <h1>Todo⬇️</h1>
            <div id="todoContainer"></div>
            <input type="text" id="newTodoInput" placeholder="Add to do">
            <button onclick="addTodo()">Add</button>
        </div>
        <div style="display: grid" class="completed-container">
            <h1>COMPLETED⬇️</h1>
            <div id="completedContainer"></div>
        </div>
    </div>
</div>

<script>
    let todos = [];
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
    }
</script>
</body>
</html>