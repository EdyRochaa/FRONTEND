document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskDescription = taskInput.value.trim();

        if (taskDescription) {
            const li = document.createElement('li');
            li.textContent = taskDescription;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = '✖';
            removeBtn.onclick = () => {
                taskList.removeChild(li);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = ''; 
            taskInput.focus(); 
        }
    };

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
