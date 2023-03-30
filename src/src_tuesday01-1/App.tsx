import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<todolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(id: string, todoListId: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(tl => tl.id != id)})

        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListId]: [task, ...tasks[todoListId]]})

        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(tl => tl.id === taskId ? {...tl, isDone: isDone} : tl)})

        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks([...tasks]);
    }

    function changeFilter(value: FilterValuesType, todoListId: string) {
        setTodolists(todolists.map(tl => tl.id === todoListId ? {...tl, filter: value} : tl))
    }


    return (
        <div className="App">
            {todolists.map(tl => {

                let tasksForTodolist = tasks[tl.id]
                if (tl.filter === 'active') {
                    tasksForTodolist = tasks[tl.id].filter(t => !t.isDone);
                }
                if (tl.filter === 'completed') {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone);
                }

                return (
                    <Todolist
                        key={tl.id}
                        title={tl.title}
                        todoListId={tl.id}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;
