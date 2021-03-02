import { Switch, Route } from "react-router-dom";
import  Home  from "../components/Home";

import Register from "./Register/Register";

const Routes = () => (
  <Switch>
    
    <Route  component={Register} path="/Register" />
    <Route  component={Home} path="/" />
    
  </Switch>
);

export default Routes;