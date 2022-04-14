import React from "react";

const TodoItem = (props) => {
  const { item, removeTodo, completeTodo } = props;
    return (
        <li key={item.id} className='card' >
          <div className="btns" >
          <button onClick={() => completeTodo(item.id)}>completed</button>
            <button onClick={() => removeTodo(item.id)} >Delete</button>

          </div>
          {item.completed && <span className="completed">done</span>}
        </li>
    )
}

export default TodoItem;