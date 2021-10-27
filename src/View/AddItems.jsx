import React,{useContext} from 'react'
import FilterContext from '../Context/FilterContext'

//CSS
import "../Components/AddItems/AddItems.style.css"

const AddItems = () => {

    const {addItems,setAddItems,handleAddItems} = useContext(FilterContext);


    return (
        <>
            <div className="containerAddItems">
                <input 
                type="text" 
                className="inputItems" 
                onChange={e => setAddItems(e.target.value)}
                value={addItems}
                />

                <button className="buttonItems" onClick={handleAddItems}>
                    ADD
                </button>
            </div>
      </>
    )
}

export default AddItems
