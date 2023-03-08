import React from "react";

type StudentsType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentsType>
}

export const MapComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const cars = topCars.map((el, i) => {
        return (
            <tr key={i}>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
            </tr>

        )
    })

    /*const students = props.students.map((el, i) => {
        return (
            <li key={i}>
                <span>{el.name}</span><span> age: {el.age}</span>
            </li>
        )
    })*/
    return (
        <div>
            {/*{students}*/}
            <table>
                <thead>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                </thead>
                <tbody>
                {cars}
                </tbody>
            </table>
        </div>
    )
}
