import React from "react";
import {FilterType} from '../AppFilter';

type ButtonFilterType = {
    currentMoney: Money[]
    onClickFilterHandler: (nameButton: FilterType) => void
}

type Money = {
    banknots: string
    value: number
    number: string
}

export const ButtonFilter = (props: ButtonFilterType) => {

    return (
        <>
            <ul>
                {props.currentMoney.map((el, i) => {
                    return (
                        <li key={i}>
                            <span>{el.banknots}</span>
                            <span> {el.value}</span>
                            <span> {el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '70px'}}>
                <button onClick={()=>props.onClickFilterHandler('all')}>all</button>
                <button onClick={()=>props.onClickFilterHandler('usd')}>usd</button>
                <button onClick={()=>props.onClickFilterHandler('rub')}>rub</button>
            </div>

        </>
    )
}