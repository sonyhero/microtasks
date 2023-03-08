import React from "react";

type CarComponent = {
    cars: CarsType[]
}

type CarsType = {
    manufacturer: string
    model: string
}

export const CarComponent = (props: CarComponent) => {
    const cars = props.cars.map((el, i) => {
        return (
            <tr key={i}>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
                </tr>
        )
    })

    return (
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
    )
}
