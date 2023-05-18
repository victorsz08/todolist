import { IoIosCloseCircleOutline,IoIosCheckmarkCircleOutline} from 'react-icons/io'

export const Todos = ({task, deleteTask, taskComplete}) =>{


    return(
        <div  className='todos'>
            <p  
            className={`${task.completed ? 'completed' : ""}`}>
            {task.task}</p>
            <div 
            className='todo-icons'>
                <IoIosCheckmarkCircleOutline onClick={() => taskComplete(task.id)}/>
                <IoIosCloseCircleOutline className='delete-icon'
                onClick={() => deleteTask(task.id)}/>
            </div>
        </div>
    )
}