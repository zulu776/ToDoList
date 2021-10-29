import React, {useContext} from 'react'
import FilterContext from '../../Context/FilterContext'

//Antd
import { Divider, Button } from 'antd';

const CompletedItems = ({title,status,index}) => {

    const {
        allItems,setAllItems,
        completed,setCompleted,
        bin,setBin
    } = useContext(FilterContext);

    const Delete = () => {
        if (status) {
            const deleteItems = [...allItems];
            deleteItems.splice(index, 1);
            setAllItems(deleteItems);
            const deleteCompleted = [...completed];
            deleteCompleted.splice( index, 1);
            setCompleted(deleteCompleted);
            const BinItems = [...bin, ...completed.slice(index, (index + 1))];
            setBin(BinItems);
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
                onClick={()=>Delete()}>
                    {!status ? "Completed" : "Delete"}
                </Button>
            </div>
            <Divider />
        </div>
    )
}

export default CompletedItems
