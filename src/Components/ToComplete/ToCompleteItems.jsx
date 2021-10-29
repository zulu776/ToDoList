import React, {useContext} from 'react'
import FilterContext from '../../Context/FilterContext'

//Antd
import { Divider, Button } from 'antd';

//CSS


const ToCompleteItems = ({title,status,index}) => {

    const {
        allItems,setAllItems,
        toComplete,setToComplete,
        completed,setCompleted,
    } = useContext(FilterContext);
    
    const Complete = () => {
        if(!status) {

            const updateItems = [...allItems];
            updateItems[index].status = true;
            setAllItems(updateItems);
            const completedItems = [...completed, ...allItems.slice(index,(index + 1))];
            setCompleted(completedItems);
            const deleteToComplete = [...toComplete];
            deleteToComplete.splice(index, 1);
            setToComplete(deleteToComplete);
        }
    }

    return (
        <div>
            <div className="allItems">
                <h1 className="text-all">{title}</h1> 
                <Button size="small" type="primary" onClick={()=>Complete()}>
                    {!status ? "Completed" : "Delete"}
                </Button>
            </div>
            <Divider />
        </div>
    )
}

export default ToCompleteItems
