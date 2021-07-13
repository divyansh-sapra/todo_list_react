import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        props.addTodo(title,desc);
        setDesc("");
        setTitle("");
    }
    return (
        <div className="container">
            <h3 className="text-center">Add a TODOs</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">ToDo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" required/>
                </div>
                <button type="submit" className="btn btn-small btn-success">Add ToDo</button>
            </form>
        </div>
                    )
}
