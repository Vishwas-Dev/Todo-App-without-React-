console.log("welcome to Todos");
let getTodoSection = document.getElementById("todo-data");
let saveButton = document.getElementById("saveBtn");
let todoInputBar = document.getElementById("todo-input-bar");
let todos = [];


//  this fun is for save button if txt == 0 then disabled or >= 0 then enabled
todoInputBar.addEventListener('keyup', function toggleSaveButton(){
    let todoText = todoInputBar.value;
    if(todoText.length == 0){
        if(saveButton.classList.contains("disabled")) return;
            saveButton.classList.add("disabled");
    }

    else if(saveButton.classList.contains("disabled")){
        saveButton.classList.remove("disabled");
    }

})

//  this fun is for if there is txt then add todo
saveButton.addEventListener('click', function getTextAndAddTodo(){
    let todoText = todoInputBar.value;
    if(todoText.length == 0) return;
    todos.push(todoText);  // adding todos in an arr
    addTodo(todoText, todos.length );
    todoInputBar.value = ''; // to make bar empty after adding todo
})

    function removeTodo(){
        console.log("clicked");
    }

//  adding todo
function addTodo(todoData, todoCount){
let rowData = document.createElement("div");
let todoItem = document.createElement("div");
let todoNumber = document.createElement("div");
let todoDetails = document.createElement("div");
let todoStatus = document.createElement("div");
let todoActions = document.createElement("div");
let DeleteButtom = document.createElement("button");
let FinishedButton = document.createElement("button");
let hrTag = document.createElement("hr");

    // adding classes 
    todoItem.classList.add("list-todo-data", "d-flex" );
    todoNumber.classList.add("todo-no-data");
    todoDetails.classList.add("todo-detail-data");
    todoStatus.classList.add("todo-status-data"); 
    todoActions.classList.add("todo-actions-data", "d-flex");
    DeleteButtom.classList.add("btn", "btn-danger", "fw-medium", "mx-2", "delete-todo");   // button space dena h kal jab ayega 21 ko
    FinishedButton.classList.add("btn", "btn-success", "fw-medium", "finish-todo");
   
    DeleteButtom.onclick = removeTodo;

// ----------------------------------------------------------
    // conent 
    todoNumber.textContent = `${todoCount}`;
    todoDetails.textContent = todoData;     //sets todo text sent from input field
    todoStatus.textContent = "in Progress...";
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