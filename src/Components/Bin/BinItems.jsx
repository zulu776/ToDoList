import React, {useContext} from 'react'
import FilterContext from '../../Context/FilterContext'

//Antd
import { Divider, Button } from 'antd';

const BinItems = ({title,status,index}) => {

    const {
        bin,setBin
    } = useContext(FilterContext);

    const Eliminate = () => {
            const eliminateBin = [...bin];
            eliminateBin.splice(index, 1);
            setBin(eliminateBin);
        
    }

    return (
        <div className="separate">
            <div className="allItems">
                <h1 className="text-all1">{title}</h1> 
                <Button 
                className="text-all2"
                size="big" 
                ghost="true"
                onClick={()=>Eliminate()}>
                    Eliminate
                </Button>
            </div>
            <Divider />
        </div>
    )
}

export default BinItems
