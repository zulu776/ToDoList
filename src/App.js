
import React from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";

import { FilterProvider } from "./Context/FilterContext";

import LayoutContext from "./Layout/LayoutContext"


const App = () => {
  return (
    <>
    <FilterProvider>
      <Router>
        <Switch>
          <LayoutContext />
        </Switch>
      </Router>
    </FilterProvider>
    </>
  );
}

export default App;
