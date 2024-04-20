const addTaskBtn = document.getElementById("addTaskBtn");
const noteInput = document.getElementById("noteInput");
const taskList = document.getElementById("task-list");

showTask();

addTaskBtn.addEventListener("click",()=>{
    addTask();
})
//Add task
function addTask()
{
    var task = document.getElementById("noteInput").value;

    if(task === "")
    {
        alert("Enter your task!");
    } else {
        const liEl = document.createElement("li");
        liEl.innerHTML = `<p>${task}</p><div class="icons-container"><i class="fa-solid fa-check">
        </i><i class="fa-solid fa-trash"></i></div>`;
        taskList.appendChild(liEl);
    }
    noteInput.value = "";
    saveTask();
}

//Delete and mark finished tasks
taskList.addEventListener("click", (e) => {
const clickedElement = e.target;

    //Delete
    if (clickedElement.classList.contains("fa-trash")) {

        const liElement = clickedElement.parentElement.parentElement;
        liElement.remove(); // Usuń zadanie
        saveTask(); 

    //Mark finished task
    } else if(clickedElement.classList.contains("fa-check")) {
        const p = clickedElement.parentElement.parentElement.querySelector('p');
        p.style.textDecoration = "line-through";
        p.style.color = "darkgreen";
        clickedElement.style.color = "darkgreen";

        saveTask();
    }
});

//Saving tasks in localStorage
function saveTask()
{
    localStorage.setItem('tasks', JSON.stringify(taskList.innerHTML));
}
function showTask()
{
    taskList.innerHTML = JSON.parse(localStorage.getItem("tasks"));
}





