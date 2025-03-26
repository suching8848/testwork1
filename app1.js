const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const statusElement = document.getElementById('status');
const sortByNameBtn = document.getElementById('sortByName');
const sortByDataBtn = document.getElementById('sortByData');
let tasks = [
    {text:"ffff4",createdAt:new Date(2025, 2, 14),

    },
    {text:"7767764",createdAt:new Date(2025, 1, 16),}
];
function update(){
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        const dateSpan = document.createElement('span');
        dateSpan.className = 'task-date';
        dateSpan.textContent = task.createdAt.toLocaleDateString();
        li.appendChild(span);
        li.appendChild(dateSpan);
        taskList.appendChild(li);
    })
    statusElement.textContent = `当前任务总数：: ${tasks.length}`;

}
function addTask() {
    if(!taskInput.value){
        alert('请输入任务内容');
        return;
    }
    const newTask = {
        text: taskInput.value,
        createdAt: new Date()
    };
    tasks.push(newTask);
    taskInput.value = '';
    update();
}
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
function sortTaskByName() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    update();
}
function sortTaskByData() {
    tasks.sort((a, b) => a.createdAt - b.createdAt);
    update(); 
}
