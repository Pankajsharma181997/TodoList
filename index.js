const todoObj = new Todo();

let input = document.querySelector(".input-field");
let submit = document.querySelector(".submit-button");

function handleSubmit() {
  let val = input.value;

  if (val != "") {
    todoObj.addTodo(val);
  }
  else{
    alert("Give a valid input")
  }
  cancelInput();
  renderTodos();
}

function removeDomElements() {
  const todoParent = document.querySelector(".todos-section");

  while (todoParent.firstChild) {
    todoParent.firstChild.remove();
  }
}

function deleteTodo(id){
    todoObj.removeTodo(id)
    renderTodos()
}

function cancelInput(){
    document.querySelector('.input-field').value = ''
}

function updateTodo(e,id,name){
    if(e.keyCode == 13){ //Enter key
        todoObj.updateTodo(id,name)
        renderTodos()
    } 
}

function setLocalStorage(){
    localStorage.setItem('todos',JSON.stringify(obj))
}

function renderTodos() {
  removeDomElements();
  
  localStorage.setItem('todos',JSON.stringify(todoObj.todos))

  for (const item of todoObj.todos) {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");

    div.classList.add("todo");
    input.classList.add("todo-input");

    input.type = "text";
    input.value = item.name;
    input.id = item.id
    input.setAttribute('readonly','true')
    input.setAttribute('ondblclick',"this.readOnly='';")
    input.addEventListener('keyup',(e) => updateTodo(e,item.id,input.value))

    button.innerText = "Delete";
    button.addEventListener('click',() => deleteTodo(item.id))

    document.querySelector(".todos-section").appendChild(div);
    div.append(input, button);
  }
}

(() => {
    const localTodos = localStorage.getItem('todos')

    if(localTodos){
        todoObj.setTodos(JSON.parse(localTodos))
    }
    renderTodos()
})()
