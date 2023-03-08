import React from 'react';

type StudentsType={
    id: number
    name: string
    age: number
}

type StudentsComponentType = {
    students: StudentsType[]
}

export const StudentsComponent = (props:StudentsComponentType) => {
    const students = props.students.map((el)=>{
        return (
            <ul key={el.id}>
                <li><span>{el.name}</span><span> age: {el.age}</span></li>
            </ul>
        )
    })
  return (
      <>{students}</>
  )
}