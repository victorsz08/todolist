import { IoIosCloseCircleOutline } from 'react-icons/io'

export const Todos = ({task, deleteTask}) =>{


    return(
        <div className='todos'>
            <p>{task.task}</p>
            <IoIosCloseCircleOutline onClick={() => deleteTask(task.id)}/>
        </div>
    )
}