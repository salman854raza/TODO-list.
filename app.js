let tasks = [];
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.innerHTML += `<span class="deleteBtn" data-index="${index}">❌</span>`;
        taskList.appendChild(li);
    });
}
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});
taskList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('deleteBtn')) {
        const index = parseInt(target.getAttribute('data-index') || '');
        tasks.splice(index, 1);
        renderTasks();
    }
});
renderTasks();
export {};
