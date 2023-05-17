import { IoIosCloseCircleOutline, IoMdCheckmarkCircle } from 'react-icons/io'

export const Todos = ({task, deleteTask, taskComplete}) =>{


    return(
        <div className='todos'>
            <p onClick={() => taskComplete(task.id) }
            className={`${task.completed ? 'completed' : ""}`}>
            {task.task}</p>
            <div 
            className='todo-icons'>
                <IoIosCloseCircleOutline className='delete-icon'
                onClick={() => deleteTask(task.id)}/>
            </div>
        </div>
    )
}