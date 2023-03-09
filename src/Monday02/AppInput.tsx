import {useState} from 'react';

export const AppInput = () => {

    let [message, setMessage] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
        ]
    )

    return (
        <div className={'App'}>
            <input/>
            <button>+</button>
            {message.map((el, i)=>{
                return (
                    <div key={i}>{el.message}</div>
                )
            })}
        </div>
    )
}