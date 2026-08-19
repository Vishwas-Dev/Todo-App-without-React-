console.log("welcome to Todos");
let getTodoSection = document.getElementById("todo-data");
function addTodo(todoData){
let rowData = document.createElement("div");
let todoItem = document.createElement("div");
let todoNumber = document.createElement("div");
let todoDetails = document.createElement("div");
let todoStatus = document.createElement("div");
let todoActions = document.createElement("div");
let DeleteButtom = document.createElement("button");
let FinishedButton = document.createElement("button");
let hrTag = document.createElement("hr");

    todoNumber.textContent = "1";
    todoDetails.textContent = todoData;
    todoStatus.textContent = "in progess";
    DeleteButtom.textContent = "Delete";
    FinishedButton.textContent = "Finished";

    todoActions.appendChild(DeleteButtom);
    todoActions.appendChild(FinishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetails);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);
    
    rowData.appendChild(todoItem);
    rowData.appendChild(hrTag);

    getTodoSection.appendChild(rowData);

}





// let getTodo = document.querySelector(".btn-gettasks");


// getTodo.addEventListener('click', ()=>{
//     console.log("clicked");
// })

// getTodo.onclick = ()=>{
//     console.log("hatt");
// }