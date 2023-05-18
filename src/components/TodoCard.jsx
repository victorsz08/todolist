import { useState } from "react"
import { FormTodo } from "./Form"
import { Todos } from "./Todos"



export const TodoCard = () => {
    
 
    const [tasks, setTasks] = useState([
    ])

    localStorage.getItem(setTasks)

    const addTodo = (task) => {
        
        setTasks([...tasks, 
            {id:Math.random(), task:task}
        ])
        localStorage.setItem(tasks, task)
        
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
            <h2>Lista de tarefas</h2>
            <FormTodo addTodo={addTodo}/>
            {tasks.length > 0 && <h5>tarefas:</h5>}
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