import { useState } from "react"
import './style.css'

const Counter = () =>{
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count+1)
    }
    const handleDecrement = () =>{
        if (count >0){
            setCount(count-1)
        }
        else{
            alert ('Cannot go less than 0')
        }
        
    }

    return(
        <>
         <h1>Count:{count}</h1>
         <br/>
        <button onClick={handleIncrement} className="button">Add</button>
        <button onClick={handleDecrement} className="button">Deduct</button>
        <button onClick={() => setCount (0)} className="button">Reset</button>
        </>
    )
}

export default Counter