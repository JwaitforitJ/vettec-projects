import React from "react";

const TodoItem = (props) => {
  const { item, removeTodo, completeTodo } = props;
    return (
        <li key={item.id} className='card' >
          <div className="btns" >
            <textarea defaultValue={item.item}/>
            <button onClick={() => completeTodo(item.id)}>Completed</button>
            <button onClick={() => removeTodo(item.id)} >Delete</button>
          </div>
          {item.completed && <span className="completed">Completed</span>}
        </li>
    )
}

export default TodoItem;