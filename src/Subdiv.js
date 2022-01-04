import React,{useState,useEffect,useRef} from 'react'

function Subdiv(props) {

    const {row,org} = props;
    const [ditem,setDitem] = useState(row);
    const [orgStore,setOrgStore] = useState([]);
    const content = [];
    const dragItem = useRef();
    const dragOverItem = useRef();
   
    useEffect(()=>{
       setDitem(row);
       orginalArray();
    },[row])
     
    const orginalArray = () =>{
       for(let i=1;i<=org;i++)
       {
          content.push(i);
       }
       setOrgStore(content);
    }

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
    
     
    
     const comparsion = (arr1,arr2) => {
      //   console.log(a);
      //   console.log(b);
         // a.length === b.length && a.every((v,i)=> console.log(v===b[i]) );
          // compare arrays
          
          console.log(arr1);
          console.log(arr2);
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        alert('Welcome to the Team');
    }
    else {
        alert('You are not in our team');
    }
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
     <button onClick={()=>comparsion(orgStore,ditem)}>Finish</button>
  </>);
}

export default Subdiv