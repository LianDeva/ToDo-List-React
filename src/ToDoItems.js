import React from "react";

function ToDoItems (props) {
    const styleChange = {
        fontStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? styleChange: null}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItems;