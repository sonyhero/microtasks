import React from "react";
import {FilterType} from "../App";

type money = {
    banknots: string
    value: number
    number: string
}


type FilterComponentType = {
    currentMoney:Array<money>
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const FilterComponent = (props:FilterComponentType) => {

    return (
        <>
            <ul>
                {
                    props.currentMoney.map((el, i) => {
                        return (
                            <li key={i}>
                                <span> {el.banknots}</span>
                                <span> {el.value}</span>
                                <span> {el.number}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('rubl')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>Dollars</button>
            </div>
        </>
    )

}