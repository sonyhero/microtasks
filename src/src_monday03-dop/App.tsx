import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from './Components/SuperButton';
import Input from './Components/Input';

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [title, setTitle]=useState('')

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, [])

    const showMeTodos = () => fetchFoo()

    const deleteTodos = () => {
        setTodos([])
    }

    const addNewItem = (title: string) => {
        const newItem = {
            userId: 1,
            id: todos.length,
            title: title,
            completed: false
        }
        setTodos([newItem, ...todos])
        setTitle('')
    }

    const setTitleNameAddName = () => {
        addNewItem(title)
    }

    return (
        <div className="App">
            <button onClick={showMeTodos}>Show me list</button>
            <button onClick={deleteTodos}>Delete list</button>
            <div>
                <Input title={title} setTitle={setTitle}/>
                <SuperButton name={'+'} callBack={setTitleNameAddName}/>
            </div>
            <ul>
                {
                    todos.map(el => {
                        return (
                            <li>
                                <input type="checkbox" checked={el.completed}/>
                                <span>{el.id}</span>
                                <span>{el.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;
