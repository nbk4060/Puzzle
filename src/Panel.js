import React from "react";
import Slate from './Slate';


function Panel(props) {
    const {sno} = props;

    const style = {
       gridTemplateColumns:`repeat(${sno},90px)` 
      };

  return (
  <div className="App" style={style}>
         <Slate st1={sno} st2={sno}/>
          </div>
          );
}

export default Panel