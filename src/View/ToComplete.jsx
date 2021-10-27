import React, {useContext} from 'react'
import FilterContext from '../Context/FilterContext'
import ToCompleteItems from '../Components/ToComplete/ToCompleteItems'


const ToComplete = () => {

    const {toComplete} = useContext(FilterContext);

    return (
        <div>
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
