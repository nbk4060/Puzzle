import React,{useState} from 'react'
import './App.css';
import Panel from './Panel';

function App() {
  
   const [count, setCount] = useState(0);

   const handleOnChange = () => {
       alert(count);
   }

  return (
    <div className="main">
      <h1>React Puzzle</h1>
      <form onSubmit={handleOnChange}>
      <label>Enter Number for Grid Puzzle:
        <input
          type="number"
          name="count[]" 
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </label>
    
    </form>
     <Panel sno = {count}/>
    </div>
  );
}

export default App;
