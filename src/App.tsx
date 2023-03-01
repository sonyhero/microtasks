import React from 'react';
// import logo from './logo.svg';
import './App.css';
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

function App() {
    // /*const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! I am Vasia!')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! I am Ivan!')
    // }*/
    //
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    return (
        <div className='App'>
            {/*<button onClick={(event) => {console.log('Hello!')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={(event) =>onClickHandler('Vasya')}>MyYouTubeChanel-2</button>
            <button onClick={(event) =>onClickHandler('Ivan')}>MyYouTubeChanel-3</button>

        </div>
    )
}

export default App;
