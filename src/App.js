import React from "react";
import { Route,Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Todo from "./Todo";
import Modal1 from "./Modal1";



function App(){
    return(
<>
<Switch>
    <Route exact path="/" component={Login}/>
    <Route  path="/home" component={Home}/>
    <Route  path="/Todo" component={Todo}/>
    <Route  path="/modal1" component={Modal1}/>
</Switch>
</>
  );
}
export default App;