import React, {useContext} from 'react'
import FilterContext from '../Context/FilterContext'
import BinItems from '../Components/Bin/BinItems'

//CSS
import "../Components/AllTasks/AllTask.style.css"

const Bin = () => {

    const {bin} = useContext(FilterContext);

    return (
        <div className="container">
            { bin?.length > 0 && 
                bin.map((task,index) => (
                    <BinItems
                    title={task.title}
                    status={task.status}
                    index={index}
                    key={index}
                    />
                ))}
        </div>
    )
}

export default Bin
