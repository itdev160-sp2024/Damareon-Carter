var tasks = [];
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task(id, name, status)
{
    this.id = id;
    this.name = name;
    this.status = status;
}
function addTaskElement(task)
{
    var listElement = document.getElementById('active-list');
    var taskElement = document.createElement('li');
    var textElement = document.createTextNode(task.name);

    taskElement.setAttribute('id', task.id);
    taskElement.appendChild(textElement);
    listElement.appendChild(taskElement);
}
function addTask(event)
{
    var inputElement = document.getElementById('input-task');

    if (inputElement.value != '')
    {
        var id = 'item-' + tasks.length;
        var task = new Task(id, inputElement.value, taskStatus.active);

        tasks.push(task);
        addTaskElement(task);
        inputElement.value = '';
    }
}
function completeTask(event)
{
    var taskElement = event.target;
    var id = taskElement.id;

    for (var i = 0; i < tasks.length; i++)
    {
        if (tasks[i].id == id)
        {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    taskElement.remove();
    document.getElementById('completed-list').appendChild(taskElement);
}
function clickButton(event)
{
    if (event.keyCode === 13)
    {
        document.getElementById('add-task');
    }
}
function init()
{
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeydown = clickButton;
}

init();