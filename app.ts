let tasks: string[] = [];

const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

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
    const target = event.target as HTMLElement;
    if (target.classList.contains('deleteBtn')) {
        const index = parseInt(target.getAttribute('data-index') || '');
        tasks.splice(index, 1);
        renderTasks();
    }
});

renderTasks();
