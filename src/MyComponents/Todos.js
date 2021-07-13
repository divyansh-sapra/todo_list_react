import React from 'react'
import { Todoitem } from './Todoitem';

export const Todos = (props) => {
    let mystyle = {
        minHeight: "57.5vh"
    }
    return (
        <div className="container" style = {mystyle}>
            <h3 className="text-center my-3">{props.heading}</h3>
            {props.todos.length === 0 ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                Add some Task
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> : 
            props.todos.map(todo=>{
                return(
                <Todoitem todo={todo} key={todo.SNO} onDelete={props.onDelete}/>
                )
            })
            }
            
        </div>
    )
}
