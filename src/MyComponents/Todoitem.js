import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.TITLE}</h4>
            <p>{todo.DESC}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>DELETE</button>
        </div>
        <hr/>
        </>
    )
}
