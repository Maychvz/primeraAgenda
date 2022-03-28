document.getElementById('formTask').addEventListener("submit", saveTask);

function saveTask(e) {

let title = document.getElementById("title").value;
let title2 = document.getElementById("title2").value;
let descripcion = document.getElementById("descripcion").value;

const task = {
    title,
    title2,
    descripcion
};

if (localStorage.getItem("tasks") === null)
{
  let tasks = [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
else
{
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}



function getTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {
      let title = tasks[i].title;
      let title2 = tasks[i].title2;
      let descripcion = tasks[i].descripcion;

      tasksView.innerHTML += `<div class="card mt-2">
      <div class="card-body">
      <p>${title} - ${title2} - ${descripcion}</p>
      <button type="button" class="btn btn-danger" onclick="deleteTasks('${title}')">Terminada</button>
      </div>
      </div>`
    }}

function deleteTasks(title) {
let tasks = JSON.parse(localStorage.getItem("tasks"));
for (let i = 0; i < tasks.length; i++){
  if (tasks[i].title == title) {
    tasks.splice(i, 1);
  }
}
localStorage.setItem("tasks", JSON.stringify(tasks));
getTasks()
}


 getTasks()
