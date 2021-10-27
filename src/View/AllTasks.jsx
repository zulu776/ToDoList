import React, {useContext} from 'react'
import FilterContext from '../Context/FilterContext'
import AllItems from "../Components/AllTasks/AllItems"

const AllTasks = () => {

    const {allItems} = useContext(FilterContext);

    return (
        <div>
            { allItems?.length > 0 && 
                allItems.map((task,index) => (
                    <AllItems
                    title={task.title}
                    status={task.status}
                    index={index}
                    key={index}
                    />
                ))}
        </div>
    );
};

export default AllTasks
