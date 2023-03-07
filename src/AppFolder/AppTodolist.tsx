import React, {useState} from 'react';
import '../AppFolder/AppCSS/AppTodolist.css';
import {TasksType, Todolist} from '../components/Todolist';

function App() {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    const deleteTasks = (id: number) => {
       return setTasks(tasks.filter(el => id!==el.id))
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      deleteTasks={deleteTasks} />
        </div>
    );
}

export default App;
