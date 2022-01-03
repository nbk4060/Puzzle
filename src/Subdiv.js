import React,{useState,useEffect,useRef} from 'react'

function Subdiv(props) {

    const {row} = props;
    const [ditem,setDitem] = useState(row);
  
    const content = [];
    const dragItem = useRef();
    const dragOverItem = useRef();
   
    useEffect(()=>{
       setDitem(row);
    },[row])

    const dragStart = (e, position) => {
        dragItem.current = position;
      //   console.log(e.target.innerHTML);
    }

    const dragEnter = (e,position) => {
        dragOverItem.current = position;
      //   console.log(e.target.innerHTML);
    }
    
     const drop = (e) => {
        const copydiv = [...ditem];
        const dragItemContent = copydiv[dragItem.current];
        copydiv.splice(dragItem.current,1);
        copydiv.splice(dragOverItem.current,0,dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setDitem(copydiv);
     }
    
     
    
     const comparsion = (a,b) => {
      //   console.log(a);
      //   console.log(b);
         a.length === b.length && a.every((v,i)=> v===b[i]);
     }
   //   console.log('---');
   //    console.log(row);
   //    console.log(ditem);
   //   console.log(comparsion(a,b));
   // console.log(ditem);
 
  return (<>
    {/* <h1>hhh</h1> */}
    
     {ditem.map((data,index) =>
        <div key={index} 
             draggable
             onDragStart={(e)=>dragStart(e,index)}
             onDragEnter={(e)=>dragEnter(e, index)}
             onDragEnd={drop}
             onDragOver={(e) => e.preventDefault()}
            >{data}</div>
        // console.log(data+1)
     )}
  </>);
}

export default Subdiv