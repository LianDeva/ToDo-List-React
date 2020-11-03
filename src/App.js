import React from "react";
import ToDoItems from "./ToDoItems";
import "./index.css";
import todoData from "./todoData";

class App extends React.Component {
    constructor (){
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render(){
           const todoItems = this.state.todos.map(item => <ToDoItems key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
 
}

export default App;