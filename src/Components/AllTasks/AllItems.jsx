import React, {useContext} from 'react'
import FilterContext from '../../Context/FilterContext'

//Antd
import { Divider, Button } from 'antd';

//CSS
import "./AllItems.style.css"

const AllItems = ({title,status,index}) => {

    const {
        allItems,setAllItems,
        toComplete,setToComplete,
        completed,setCompleted,
        bin,setBin
    } = useContext(FilterContext);

    const CompleteOrDeleteItems = () => {
        if(status) {
            const deleteItems = [...allItems];
            deleteItems.splice(index,1);
            setAllItems(deleteItems);
            const deleteCompleted = [...completed];
            deleteCompleted.splice(index,1);
            setCompleted(deleteCompleted);
            const BinItems = [...bin, ...allItems.slice(index,(index + 1))];
            setBin(BinItems);
        }else{
            const updateItems = [...allItems];
            updateItems[index].status = true;
            setAllItems(updateItems);
            const completedItems = [...completed,...allItems.slice(index,(index + 1))];
            setCompleted(completedItems);
            const deleteToComplete = [...toComplete];
            deleteToComplete.splice(index,1);
            setToComplete(deleteToComplete);
        }
    }

    return (
        <div className="separate">
            <div className="allItems">
                <h1 className="text-all1">{title}</h1> 
                <Button 
                className="text-all2"
                size="big" 
                ghost="true"
                onClick={()=>CompleteOrDeleteItems()}>
                    {!status ? "Completed" : "Delete"}
                </Button>
            </div>
            <Divider />
        </div>
    )
}

export default AllItems
