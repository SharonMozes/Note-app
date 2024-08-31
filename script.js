let todo = [];
let display = document.getElementById("display");

function loadFromLocalStorage() {
    const allTasks = JSON.parse(localStorage.getItem('localtodo'));
    if (allTasks)
        todo.push(...allTasks);
}

loadFromLocalStorage();

function loadTasks() {
    localStorage.setItem('localtodo', JSON.stringify(todo));

    display.innerHTML = '';
    for (let to of todo) {
        display.innerHTML += `
            <div class="task-item">${to}
                <button class="delete-btn" onclick="deleteTask('${to}')">✖</button>
            </div>`;
    }
}

function deleteTask(to) {
    let taskIndex = todo.indexOf(to);
    if (taskIndex > -1) {
        todo.splice(taskIndex, 1);
        loadTasks();
    }
}

loadTasks();

function taskinput() {
    const input = document.getElementById('task-inp');
    const inputvalue = input.value.trim();
    if (!inputvalue) {
        alert('List cannot be empty?');
        return;
    }
    todo.push(inputvalue);
    loadTasks();
    input.value = '';
}