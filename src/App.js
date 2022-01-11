import React,{useState} from 'react'
import './App.css';
import Panel from './Panel';



function App() {
  
   const [count, setCount] = useState(null);

    const handlecount = (e) => {
            setCount(e.target.value)
    }


  return (
    <div className="main">
      <h1 style={{fontSize:'30px',fontFamily:'fantasy'}}>React Puzzle</h1>
     
    <label style={{fontSize:'18px',fontFamily:'fantasy'}}>Enter Number for Grid Puzzle:
        
       
    <input
          type="number"
          name="count" 
          onChange={handlecount}
          className='css-input'
        /> </label>
     <Panel sno={count}/>
    </div>
  );
}

export default App;
