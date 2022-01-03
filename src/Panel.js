import React, { useState } from "react";
import Slate from './Slate';


function Panel(props) {
    const {sno} = props;
    const [slates,setSlates] = useState([...Array(sno).keys()]);
    const [isStarted, setIsStarted] = useState(false);
     
    const mul = sno * sno;
    const gwidth = Math.round(50/mul);
    const gheight = Math.round(50/mul);
    const style = {
       gridTemplateColumns:`repeat(${sno},auto)`
        
      };

       
   
    

        

  return (
  <div className="App" style={style}>
           {/* {sno} */}
           {/* {slates.map((slate,index)=>(
               <Slate 
               key={slate}
               index={index}
               width={gwidth}
               height={gheight}
               st1={sno}
               st2={sno}
   
               />
           ))} */}
         <Slate st1={sno} st2={sno} width={gwidth} height={gheight} />
       
          </div>
          );
}

export default Panel