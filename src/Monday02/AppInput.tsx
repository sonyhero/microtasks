import {useState} from 'react';
import {FullInput} from './Components/FullInput';

type MessageType = {
    message: string
}

type MessageUseState = MessageType[]
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
        let newMessage = {message: title}
        setMessage([newMessage,...message])
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