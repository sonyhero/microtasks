import React, {useState} from 'react';
import './index.css'

type ValueType = '-'|'+'

const Counter = () => {

    let [n, setN] = useState<number>(0)
    const onClick = (value:ValueType) => {
      (value==='-') ? setN(--n) : setN(++n)
    }

    return (
        <div className='counter'>
            <button onClick={()=>onClick('-')}>minus</button>
            <div>{n}</div>
            <button onClick={()=>onClick('+')}>plus</button>
        </div>
    );
};

export default Counter;