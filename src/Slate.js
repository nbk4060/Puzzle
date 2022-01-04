import React,{useState,useEffect} from 'react'
import Subdiv from './Subdiv';
function Slate(props) {

    const {st1,st2} = props;
    const [shuffle1,setSuffle] = useState([]);
    const [arrayvalue,setArrayvalue] = useState([]);

    const content = [];

            const result = st1 * st2;// props values
          
          
            const newarray = [];
        function create () {
              for(let i=1;i<=result;i++)
            {
                // console.log(i);
                 newarray.push(i);
            }
            // console.log(newarray);
            // setArrayvalue(newarray);
           
            shuffle(newarray);
      
        }
        
           useEffect(()=>{
              create();
             
              // console.log(props.st1);
           },[props.st1]);

            function shuffle(array) {
              // setArrayvalue(newarray);
                let currentIndex = array.length,  randomIndex;
                while (currentIndex !== 0) {
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
               setSuffle(array);
                return array;
                  
              }
    
    // console.log(arrayvalue);
  return (
  <>
      <Subdiv row={shuffle1} org={result}/>   
  </>
  );
}

export default Slate