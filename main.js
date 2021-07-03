if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}

else {
    ready();
}

function ready() {
        // function for removing tasks
    const removeTaskIcon = document.getElementsByClassName("delete");
    [...removeTaskIcon].forEach(icon => {
        icon.addEventListener('click', removeTaskClicked);
    })

        // function for editing tasks text content, doesn't fully work
    const editTaskIcon = document.getElementsByClassName("edit");
    [...editTaskIcon].forEach(icon => {
        icon.addEventListener('click', editTaskClicked);
    })

        // function for marking tasks as completed
    const completedTaskIcon = document.getElementsByClassName("done");
    [...completedTaskIcon].forEach(icon => {
        icon.addEventListener('click', markAsCompleted);
    })

        // function for deleting every task in list
    const deleteEverythingButton = document.getElementsByClassName("btn-everything")[0];
    deleteEverythingButton.addEventListener('click', deleteEverythingButtonClicked);

        // function for adding tasks to the list
    const addTaskButton = document.getElementsByClassName("btn-add-task")[0];
    addTaskButton.addEventListener('click', addTaskButtonClicked);

        // function for deleting completed tasks
    const deleteCompletedButton = document.getElementsByClassName("btn-completed")[0];
    deleteCompletedButton.addEventListener('click', deleteCompletedTasksClicked);
}

function removeTaskClicked(e) {
    let button = e.target;
    button.parentElement.parentElement.parentElement.remove();
}

function editTaskClicked(e) {
    let button = e.target;
    let editedTask = prompt("Edit the text: ");

    let buttonParentElement = button.parentElement.parentElement.parentElement;

    buttonParentElement.innerHTML = `
    <span class="task-name text-capitalize">${editedTask}</span>
    <div class="task-icons">
        <span class="done"><i class="fa fa-check-circle-o" aria-hidden="true"></i></span>
        <span class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
        <span class="delete"><i class="fa fa-times-circle-o" aria-hidden="true"></i> </span>
    </div>
    `

    buttonParentElement.getElementsByClassName("delete")[0].addEventListener('click', removeTaskClicked);
    buttonParentElement.getElementsByClassName("edit")[0].addEventListener('click', editTaskClicked);
    buttonParentElement.getElementsByClassName("done")[0].addEventListener('click', markAsCompleted);
}

function markAsCompleted(e) {
    let button = e.target;
    let buttonParentElement = button.parentElement;

    if (buttonParentElement.classList.contains("completed"))
    {
        buttonParentElement.classList.remove("completed");
    }

    else {
        button.parentElement.classList.add("completed");
    }
 
}

function deleteEverythingButtonClicked() {
    const tasks = document.getElementsByClassName("items")[0];
    tasks.innerHTML = "";
}

function addTaskButtonClicked() {
    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    let taskItems = document.getElementsByClassName("items")[0];

    let taskText = document.querySelector("input").value;
    if (taskText === "") {
        alert("Please add some text!");
    }

    else {
        let taskItemContent = `
            <span class="task-name text-capitalize">${taskText}</span>
            <div class="task-icons">
                <span class="done"><i class="fa fa-check-circle-o" aria-hidden="true"></i></span>
                <span class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                <span class="delete"><i class="fa fa-times-circle-o" aria-hidden="true"></i> </span>
            </div>
    `
        taskItem.innerHTML = taskItemContent;
        taskItems.append(taskItem);
        taskItem.getElementsByClassName("delete")[0].addEventListener('click', removeTaskClicked);
        taskItem.getElementsByClassName("edit")[0].addEventListener('click', editTaskClicked);
        taskItem.getElementsByClassName("done")[0].addEventListener('click', markAsCompleted);
    }
}


function deleteCompletedTasksClicked() {
    let completedTasks = document.getElementsByClassName("completed");

    [...completedTasks].forEach(task => {
        task.parentElement.parentElement.remove();
    })
}