import React, { Component } from 'react';
import utils from '../www/js/utils.js';
console.log(utils);
class CraftBoard extends Component {
   render() {
      return (
         <div className="col-md-12">
            <div id="div3" className="col-md-3 comp-list" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
               here
            </div>
            <div id="div1" className="col-md-9 board" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
               LA
               <img id="drag1" src="img_logo.gif" draggable="true"
               onDragStart={utils.drag.bind(utils)} width="336" height="69" />
            </div>
         </div>
      );
   }
}
export default CraftBoard;