const inputTask = document.querySelector(".inputTask");
const btnCreatetask = document.querySelector(".btnCreatTask");
const ulTask = document.querySelector(".ulTask");

document.addEventListener("click", function(event) {
    element = event.target;

    if(element.classList.contains('deleteTask')) {
        element.parentElement.remove();
        setTaskList();
    }
})

btnCreatetask.addEventListener("click", function() {
    appendNewTask(inputTask.value);
    setTaskList();
    clearInputTask();
});

inputTask.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
        appendNewTask(inputTask.value);
        setTaskList();
        clearInputTask();
    }
})


function createTask(text = null) {
    const li = document.createElement('li');

    if(!text) return li;
    
    li.innerText = text;
    return li;
}

function createDeleteButton() {
    const btn = document.createElement('button');
    btn.classList.add("deleteTask");
    btn.innerHTML = 'Apagar';
    btn.style.marginLeft = '5px'
    return btn;
}

function appendNewTask(text) {
    if(!text) return;

    const task = createTask(text);
    const delButton = createDeleteButton();
    task.appendChild(delButton);
    ulTask.appendChild(task);
}

function clearInputTask() {
    inputTask.value = '';
    inputTask.focus();
}

function setTaskList() {
    const taskLi = ulTask.querySelectorAll('li');
    const taskList = [];

    for(let task of taskLi) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        
        taskList.push(taskText)
    }
    
    const taskListJSON = JSON.stringify(taskList);
    localStorage.setItem("taskList", taskListJSON);
}

function getTaskListStorage() {
    const taskList = localStorage.getItem("taskList");
    const taskListJSON = JSON.parse(taskList);

    for(let task of taskListJSON) {
        appendNewTask(task);
    }
}
getTaskListStorage();