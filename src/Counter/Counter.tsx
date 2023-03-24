import React, {useState} from 'react';
import SuperButton from './SuperButton';
import s from './Counter.module.css'
import Display from './Display';

export const Counter = () => {

    const numberMin = 0
    const numberMax = 5

    const [number, setNumber] = useState<number>(numberMin)

    const onClickHandlerInc = () => setNumber(state => state+1)
    const onClickHandlerReset = () => setNumber(numberMin)

    const nClassName = (number === numberMax) ? s.error : s.normal

    const incButton = number === numberMax

    const resetButton = number === numberMin

    return (
        <div className={s.wrap}>
            <Display className={nClassName} number={number}/>
            <div className={s.buttonWrapper}>
                    <SuperButton className={s.inc} disabled={incButton} name={'inc'} callBack={onClickHandlerInc}/>
                    <SuperButton className={s.reset} disabled={resetButton} name={'reset'} callBack={onClickHandlerReset}/>
            </div>
        </div>
    );
};

