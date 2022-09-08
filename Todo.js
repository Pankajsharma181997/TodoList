function randomId(){
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
}

class Todo{
    constructor(){
        this.todos = []
    }

    addTodo(todo){
        this.todos.push({
            id: randomId(),
            name: todo
        })
    }

    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id)
    }

    updateTodo(id,todo){
        this.todos.forEach(item => {
            if(item.id == id){
                item.name = todo
            }
        })
    }

    isEmpty(){
        return this.todos.length == 0
    }

    setTodos(todos){
        this.todos = todos
    }
}
