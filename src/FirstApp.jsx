  import { useState } from 'react'
  import './App.css'
  const FirstApp = ({ value }) => {
    const [counter, setCounter] =useState(value)
    const handleAdd = () => {
      setCounter(counter + 1);
    }
    const handleSubsstract = ()=>{
      setCounter(counter -1)
    }
    const reset = ()=>{
      setCounter(0)
    }

    return (
      <>
        <span>{counter}</span>
        <button onClick={() => handleAdd()}>+1</button>
        <button onClick= {()=> handleSubsstract()}> -1</button>
        <button onClick= {()=> reset()}>0</button>
      </>
    );
  }

  export default FirstApp;