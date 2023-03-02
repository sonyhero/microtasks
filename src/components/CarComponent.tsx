import React from "react";

type CarsType = {
    manufacturer: string
    model: string
}

type CarComponentType = {
    cars: CarsType[]
}

export const CarComponent = (props: CarComponentType) => {
    const cars = props.cars.map((el, i) => {
        return (
            <tr key={1 + i}>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
            </tr>
        )
    })
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {cars}
        </table>
    )
}