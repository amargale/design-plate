import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CraftBoard from "./CraftBoard";
class App extends Component {
   render() {
      return (
         <Router>
            <Switch>
               <Route exact path='/' component={CraftBoard} />
            </Switch>
         </Router>
      );
   }
}
export default App;