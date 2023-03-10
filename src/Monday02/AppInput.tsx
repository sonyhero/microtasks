import {useState} from 'react';
import {FullInput} from './Components/FullInput';

export const AppInput = () => {

    let [message, setMessage] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
        ]
    )

    const addMessage = (title: string) => {
        console.log(title)
    }

    return (
        <div className={'App'}>
            <FullInput addMessage={addMessage}/>
            {message.map((el, i) => {
                return (
                    <div key={i}>{el.message}</div>
                )
            })}
        </div>
    )
}