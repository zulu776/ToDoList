import React, { createContext, useState, useEffect} from 'react'

const FilterContext = createContext();

const FilterProvider = ({children}) => {

    const [addItems, setAddItems] = useState("");
    const [allItems, setAllItems] = useState([]);
    const [toComplete, setToComplete] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [bin, setBin] = useState([]);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("AllTask")) &&
            !JSON.parse(localStorage.getItem("ToComplete")) &&
            !JSON.parse(localStorage.getItem("Completed")) &&
            !JSON.parse(localStorage.getItem("Bin"))) {

              localStorage.setItem("AllTask", JSON.stringify(allItems));
              localStorage.setItem("ToComplete", JSON.stringify(toComplete));
              localStorage.setItem("Completed", JSON.stringify(completed));
              localStorage.setItem("Bin", JSON.stringify(bin));

        } else {

          setAllItems(JSON.parse(localStorage.getItem("AllTask")));
          setToComplete(JSON.parse(localStorage.getItem("ToComplete")));
          setCompleted(JSON.parse(localStorage.getItem("Completed")));
          setBin(JSON.parse(localStorage.getItem("Bin")));
          console.log("No existe");    

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, []);

      useEffect(() => {

        localStorage.setItem("AllTask", JSON.stringify(allItems));
        localStorage.setItem("ToComplete", JSON.stringify(toComplete));
        localStorage.setItem("Completed", JSON.stringify(completed));
        localStorage.setItem("Bin", JSON.stringify(bin));

    },[allItems, completed, toComplete, bin]);


    const handleAddItems = () => {
        setAllItems([...allItems,{title:addItems, status:false}]);
        setToComplete([...allItems,{title:addItems, status:false}]);
        setAddItems("");
    }

    const data = {
        addItems,setAddItems,
        allItems,setAllItems,
        toComplete,setToComplete,
        completed,setCompleted,
        bin,setBin,
        handleAddItems
    }

    return (
       <FilterContext.Provider value={data}>
           {children}
       </FilterContext.Provider>
    )
}

export {FilterProvider};
export default FilterContext
