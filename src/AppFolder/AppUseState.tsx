import '../App.css'
import {useState} from "react";

function App() {
    let [a,setA] = useState(1)


    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerZero = () => {
      setA(a=0)
        console.log(a)
    }

    return (
        <div className='App'>
            <div>{a}</div>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerZero}>zero</button>
        </div>
    )
}

export default App
