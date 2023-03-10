import {useState} from 'react';
import {Input} from './Components/Input';
import {Button} from './Components/Button';

export const AppInput = () => {

    let [message, setMessage] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, i) => {
                return (
                    <div key={i}>{el.message}</div>
                )
            })}
        </div>
    )
}