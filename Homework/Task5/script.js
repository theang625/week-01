// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Widget 5: My Tasks Logic ---
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const taskCounter = document.getElementById('task-counter');

    let tasks = [];

    const renderTasks = () => {
        taskList.innerHTML = ''; // Clear the list before re-rendering

        tasks.forEach((taskText, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.style.backgroundColor = '#f0f4f8'; // Light grayish-blue background

            // Task text
            li.textContent = taskText;

            // Delete button (using Bootstrap's close icon)
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-close';
            deleteBtn.setAttribute('aria-label', 'Close');
            deleteBtn.onclick = () => {
                deleteTask(index);
            };

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });

        updateCounter();
    };

    const updateCounter = () => {
        taskCounter.textContent = `0 of ${tasks.length} tasks done`;
    };

    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            return;
        }

        tasks.push(taskText);
        renderTasks();

        newTaskInput.value = '';
        newTaskInput.focus();
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };

    if (newTaskInput && addTaskBtn && taskList && taskCounter) {
        addTaskBtn.addEventListener('click', addTask);
        newTaskInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
        // Initial render for the counter
        updateCounter();
    }

});