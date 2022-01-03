import React,{useState} from 'react'

function Subdiv(props) {

    const {row} = props;
    const content = [];

    console.log('new')
   console.log(row);
  return (<>
    {/* <h1>hhh</h1> */}
     {row.map((data) =>
        <div style={{backgroundColor:'#ff0000'}} key={data+1}>{data}</div>
        // console.log(data+1)
     )}
   {/* {row.map((index,data) =>
        <div key={index+1}>{data+1}</div>
        // console.log(data+1)
     )} */}
  </>);
}

export default Subdiv