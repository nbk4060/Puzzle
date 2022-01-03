import React,{useState,useEffect} from 'react'
import Subdiv from './Subdiv';
function Slate(props) {

    const {st1,st2} = props;
    const [arrayvalue, setArrayvalue] = useState([]); 
    const [shuffle1,setSuffle] = useState([]);
    const [static1,setStatic1] = useState(['6','8','9','7']);
    const content = [];

            const result = st1 * st2;// props values
          
          
            const newarray = [];
        function create () {
              for(let i=1;i<=result;i++)
            {
                // console.log(i);
                 newarray.push(i);
                
            //    content.push(<div key={i}>{i}</div>) ;
           
            }
            // console.log(newarray);
            setArrayvalue(newarray);
            shuffle(arrayvalue);
            return content;
        }
        
           useEffect(()=>{
              create();
              // console.log('---useEffect---');
              // console.log(st1);
              // console.log('---end---');
           },[st1]);

            function shuffle(array) {
              // setArrayvalue(newarray);
                let currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle...
                while (currentIndex !== 0) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  // And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
               setSuffle(array);
                return array;
                  
              }
     console.log('------------');
      console.log(shuffle1);
      console.log('--------------');
        
  return (
  <>
      <Subdiv row={shuffle1}/>
        {/* {(()=>{
           
            // const style = {
            //     width: width,
            //     height: height,
                
            //   };
            // console.log('loop value i result');
           
            for(let i=1;i<=result;i++)
            {
                // console.log(i);
                 newarray.push(i);
                
            //    content.push(<div key={i}>{i}</div>) ;
           
            }
            // console.log(newarray);
             
            return content;
        })()} */}
        {/* <Subdiv row={newarray}/> */}

        {/* {shuffle1.map((index,shu)=>
            <div key={index}>{shu} </div>
        )} */}
      {/* <button onClick={()=>setArrayvalue(newarray)}>Create</button> 
      <button onClick={()=>shuffle(arrayvalue)}>Shuffle Puzzle</button>      */}
  </>
  );
}

export default Slate