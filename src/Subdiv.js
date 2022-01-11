import React, { useState, useEffect, useRef } from 'react'

function Subdiv(props) {

   const { row, org} = props;
   const [ditem, setDitem] = useState(row);
   const [orgStore, setOrgStore] = useState([]);
   const content = [];
   const dragItem = useRef();
   const dragOverItem = useRef();

   useEffect(() => {
      const orginalArray = () => {
         for (let i = 1; i <= org; i++) {
            content.push(i);
         }
         setOrgStore(content);
      }
         setDitem(row);
         orginalArray();
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [row])

 

   const dragStart = (e, position) => {
      dragItem.current = position;
   }

   const dragEnter = (e, position) => {
      dragOverItem.current = position;
   }

   const drop = (e) => {
      const copydiv = [...ditem];
      const dragItemContent = copydiv[dragItem.current];
      copydiv.splice(dragItem.current, 1);
      copydiv.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setDitem(copydiv);
   }



   const comparsion = (arr1, arr2) => {
      // console.log(arr1);
      // console.log(arr2);
      const result = JSON.stringify(arr1) === JSON.stringify(arr2)

      // if result is true
      if (result) {
         alert('Welcome to the Team');
      }
      else {
         alert('You are not in our team');
      }
   }

   // const dynamic_color = (a) => {
   //      const color = '#fafbf'+ a ;
   //      setDcolor(color);
   //      return dcolor;
   // }
  

   return (<>
      {ditem.map((data, index) =>
         <div key={index}
           
            draggable
            // style={{backgroundColor:`rgb(${data * 4}, ${data * 2}, ${data * 8},0.8)`}} // 
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()}
         >{data}</div>
      )}
      <button onClick={() => comparsion(orgStore, ditem)}>Finish</button>
   </>);
}

export default Subdiv