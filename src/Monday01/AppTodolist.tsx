import React, {useState} from 'react';
import '../AppFolder/AppCSS/AppTodolist.css';
import {TasksType, Todolist} from '../components/Todolist';

export type NameButton = 'All'|'Active'|'Completed'
function App() {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    const deleteTasks = (id: number) => {
        setTasks(tasks.filter(el => id!==el.id))
    }

    const [filter, setFilter] = useState<NameButton>('All')

        let filteredTasks = tasks

        if (filter==='Active') {
            filteredTasks=tasks.filter(el=> !el.isDone)
        }
        if (filter==='Completed') {
            filteredTasks=tasks.filter(el=> el.isDone)
        }

    const filterTasks = (buttonName: NameButton) => {
            setFilter(buttonName)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTasks}
                      deleteTasks={deleteTasks}
                      filterTasks={filterTasks}/>
        </div>
    );
}

export default App;
