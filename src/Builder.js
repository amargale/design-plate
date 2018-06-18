import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CraftBoard from "./CraftBoard";
class App extends Component {
   render() {
      return React.createElement(CraftBoard, {label: "Here is the label prop"});
   }
}
export default App;