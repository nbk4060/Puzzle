
import React, { useState, useEffect } from 'react'
import Subdiv from './Subdiv';
function Slate(props) {

  const { st1, st2 } = props;
  const [shuffle1, setSuffle] = useState([]);
  const result = st1 * st2;// props values

//  const width = 35/st1+'px';
//  const height = 35/st1+'px';
//  const padding = 60/st1+'px';
  
  // console.log('width');
  // console.log(width);

  useEffect(() => {
    const create = () => {
      const newarray = [];
      for (let i = 1; i <= result; i++) {
        newarray.push(i);
      }
      shuffle(newarray);
    }
     create();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setSuffle(array);
    return array;

  }
 return (
    <>
      <Subdiv row={shuffle1} org={result} />
    </>
  );
}
export default Slate