import { useState } from "react"
import { FormTodo } from "./Form"
import { Todos } from "./Todos"



export const TodoCard = () => {
 
    const [tasks, setTasks] = useState([
    ])


    const addTodo = (task) => {
        setTasks([...tasks, 
            {id:Math.random(), task:task}
        ])
        console.log(tasks)
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const taskComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, completed: !task.completed} : task))
    }

    return (
        <div className='todo-card'>
            <h1>Lista de tarefas</h1>
            <FormTodo addTodo={addTodo}/>
            {tasks.map((task, index) => (
                <Todos 
                task={task} 
                key={index}
                deleteTask={deleteTask}
                taskComplete={taskComplete}
                />
            ))}
        </div>
    )
}