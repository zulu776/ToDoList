import React, {useContext} from 'react'
import FilterContext from '../Context/FilterContext'
import CompletedItems from '../Components/Completed/CompletedItems'

//CSS
import "../Components/AllTasks/AllTask.style.css"

const Completed = () => {

    const {completed} = useContext(FilterContext);

    return (
        <div className="container">
            { completed?.length > 0 && 
                completed.map((task,index) => (
                    <CompletedItems
                    title={task.title}
                    status={task.status}
                    index={index}
                    key={index}
                    />
                ))}
        </div>
    )
}

export default Completed
