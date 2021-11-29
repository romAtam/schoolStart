import React,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
const incr=()=>{
    setCount(count+1)
}
const decr=()=>{
    setCount(count-1)
}

    return (
        <div>
            <h1 style={{color:'red'}}>{count}</h1>
            <button  onClick={incr}>increase</button>
            <button onClick={decr}>decrease</button>
        </div>
    )
}

export default Counter
