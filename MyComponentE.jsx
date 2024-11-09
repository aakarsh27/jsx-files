import React, {useState, useEffect} from 'react'

function MyComponentE(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")


    useEffect(()=>{
        document.title = `count ${count} ${color}`
    }, [color])
    
    function addCount(){
        setCount(c => c + 1)
    }

    function minusCount(){
        setCount(c => c - 1)
    }

    function colorchange(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={minusCount}>Subtract</button><br/>
    <button onClick={colorchange}>Change Color</button>
    </>)
}

export default MyComponentE