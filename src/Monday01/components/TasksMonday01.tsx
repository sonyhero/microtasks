import React from 'react';

type TasksMonday01Type = {
    data: PropsType
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}

type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}
export const TasksMonday01 = (props: TasksMonday01Type) => {

    const listTasks = props.data.tasks.map(el => {
        return (
            <li key={el.taskId}>
                <input type="checkbox" checked/>
                <span>{el.title}</span>
            </li>
        )
    })

    const listStudents = props.data.students.map((el,i)=>{
     return   (
         <li key={1+i}><span>{el}</span></li>
     )
    })

    return (
        <div>
            {props.data.title}
            <ul>
                {listTasks}
                {listStudents}
            </ul>
        </div>

    )
}