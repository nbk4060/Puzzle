import React, { useState } from "react";
import Slate from './Slate';
import { canSwap, shuffle, swap, isSolved } from "./reuseable"

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

       
      const shuffleTiles = () => {
        const shuffledTiles = shuffle(slates)
        setSlates(shuffledTiles);
      }
    
//       const swapTiles = (tileIndex) => {
//         if (canSwap(tileIndex, slates.indexOf(slates.length - 1))) {
//           const swappedTiles = swap(slates, tileIndex, slates.indexOf(slates.length - 1))
//           setSlates(swappedTiles)
//         }
//       }
      
//   const handleTileClick = (index) => {
//     swapTiles(index)
//   }
      const handleShuffleClick = () => {
        shuffleTiles()
      }
    
      const handleStartClick = () => {
        shuffleTiles()
        setIsStarted(true)
      }   

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