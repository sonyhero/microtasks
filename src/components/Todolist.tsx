import React from 'react';

type TodolistType = {
    title: string
    tasks: Array<TasksType>
    deleteTasks: (id: number)=>void
}

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistType) {

    const list = props.tasks.map(el => {
        return (
            <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                <button onClick={()=>props.deleteTasks(el.id)}>X</button>
                <span>{el.title}</span>
            </li>
        )
    })

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {list}
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
