import React,{useState} from 'react'
import './App.css';
import Panel from './Panel';

function App() {
  
   const [count, setCount] = useState(0);

    const handlecount = (e) => {
            setCount(e.target.value)
    }
  //  const handleOnChange = (e) => {
  //   e.preventDefault();
  
  //  }

  return (
    <div className="main">
      <h1>React Puzzle</h1>
      <form >
      <label>Enter Number for Grid Puzzle:
        <input
          type="number"
          name="count[]" 
          value={count}
          onChange={handlecount}
        />
      </label>
      {/* <input type="submit" value="Submit"/> */}
      
    </form>
     <Panel sno = {count}/>
    </div>
  );
}

export default App;
