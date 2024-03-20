import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0)
  var [number, setNumber] = useState(21)

function increment(){
  setNumber(number+1)
}

function decrement(){
  setNumber(number-1)
}



//useEffect contain a function/callback in it 
useEffect(()=>{
//callback function is setSeconds
const time = setInterval(()=>{
  setSeconds(prevSeconds => prevSeconds + 1);
   
}, 1000)

 
  return ()=> clearInterval(time);
},[]);

  return (
    <div className="App">
      <h1>useState Hook Example</h1>
      <h2>Seconds Elapsed: {seconds}</h2>

      <h3>{number}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
