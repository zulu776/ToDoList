import React, {useContext} from 'react'
import FilterContext from '../Context/FilterContext'
import ToCompleteItems from '../Components/ToComplete/ToCompleteItems'

//CSS
import "../Components/AllTasks/AllTask.style.css"

const ToComplete = () => {

    const {toComplete} = useContext(FilterContext);

    return (
        <div className="container">
            { toComplete?.length > 0 && 
                toComplete.map((task,index) => (
                    <ToCompleteItems
                    title={task.title}
                    status={task.status}
                    index={index}
                    key={index}
                    />
                ))}
        </div>
    )
}

export default ToComplete
