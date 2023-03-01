import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
//import {Button} from "./components/Button";
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
// import {NewComponent} from "./map/NewComponent";

/*const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]*/

/*<button>MyYouTubeChanel-2</button>
<button>MyYouTubeChanel-3</button>
<Button name={'MyYouTubeChanel-1'} callBack={()=>ButtonFoo1('I am Anton', 21, 'Minsk')}/>
<Button name={'MyYouTubeChanel-2'} callBack={()=>ButtonFoo2('I am Ivan')}/>
<Button name={'Stupid Button'} callBack={Stupid}/>*/

/*const ButtonFoo1=(subs: string, age: number, address: string)=>{
    console.log(subs, age, address)
}
const ButtonFoo2=(subs: string)=>{
    console.log(subs)
}
const Stupid=()=>{
    console.log('Stupid Button')
    }*/

/*function App() {

    //let a = 1
    let[a, setA]=useState(1)
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
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerZero}>0</button>
        </div>
    )
}*/

type FilterType = 'all'|'rubl'|'dollar'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameButton, setNameButton] = useState<FilterType>('all')

    let currentMoney = money
    if (nameButton === 'rubl') {
        currentMoney = money.filter((el) => el.banknots === 'RUBLS')
    }
    if (nameButton === 'dollar') {
        currentMoney = money.filter((el) => el.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setNameButton(nameButton)
    }

    return (
        <>
            <ul>
                {
                    currentMoney.map((el, i) => {
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
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('rubl')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('dollar')}>Dollars</button>
            </div>
        </>

    )
}

export default App;
