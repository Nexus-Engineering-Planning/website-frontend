import React from "react";
import Index from "./Components/index/index"
import About from "./Components/about/about"
import Contact from "./Components/contact/contact"
import { Route, Switch } from "react-router-dom";
import FAQ from "./Components/faq/index";
import Register from "./Components/authentication/register"
import Login from "./Components/authentication/login"

const App = () => {

  return ( 
    <React.Fragment> 
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Index} />
      </Switch>
    </React.Fragment>
   );
}
 
export default App;
