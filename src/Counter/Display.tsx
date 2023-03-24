import React from 'react';
import s from './Counter.module.css';

type DisplayType = {
    className: string
    number: number
}
const Display: React.FC<DisplayType> = (props) => {
    const {className, number} = props
    return (
        <div className={s.display}>
            <div className={className}>{number}</div>
        </div>
    );
};

export default Display;