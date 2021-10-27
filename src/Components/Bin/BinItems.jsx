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
        <div>
            <div className="allItems">
                <h1 className="text-all">{title}</h1> 
                <Button size="small" type="primary" onClick={()=>Eliminate()}>
                    Eliminate
                </Button>
            </div>
            <Divider />
        </div>
    )
}

export default BinItems
