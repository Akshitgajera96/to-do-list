// Selecting DOM elements
const taskInput = document.getElementById('task');
const addButton = document.getElementById('btn');
const secondDiv = document.querySelector('.second');
const clearButton = document.createElement('button');
clearButton.innerText = 'Clear All';

// Assigning class to the clear button to apply the CSS
clearButton.classList.add('clear-btn');

// Append clear button to the container
secondDiv.appendChild(clearButton);

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear existing task list
    secondDiv.innerHTML = '';

    // Render each task
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `<span>${task}</span><button class="delete-btn" data-index="${index}">Delete</button>`;
        secondDiv.appendChild(taskItem);
    });

    // Re-attach the Clear All button
    secondDiv.appendChild(clearButton);

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            tasks.splice(index, 1);
            renderTasks();
        });
    });
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task!');
    }
}

// Event listener for add task button
addButton.addEventListener('click', addTask);

// Event listener for Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Event listener for clear all button
clearButton.addEventListener('click', () => {
    tasks = [];
    renderTasks();
});

// Initialize by rendering initial tasks (if any)
renderTasks();
