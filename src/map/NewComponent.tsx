import React from "react";

type StudentsType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentsType>
}

export const NewComponent = (props: NewComponentType) => {
    const students = props.students.map(el=>{
        return (
            <ul>
            <li>{el.name}</li>
            <li>{el.age}</li>
        </ul>
        )
    })
    return (
        <div>
            {students}
        </div>
    )
}
