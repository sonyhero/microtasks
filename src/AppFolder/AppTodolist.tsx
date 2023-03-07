import React from 'react';
import '../AppFolder/AppCSS/AppTodolist.css';
import {Todolist} from '../components/Todolist';

function App() {

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} />
        </div>
    );
}

export default App;
