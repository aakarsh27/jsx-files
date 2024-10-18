import React, {useState} from 'react';


function Updater(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset(){
        setCount(c => c = 0);
    }

    return(
    <>

        <h1>{count}</h1>
        <div>
        <h2>increase</h2>
        <button onClick={increment}>+</button>

        <h2>decrease</h2>
        <button onClick={decrement}>-</button>

        <h2>reset</h2>
        <button onClick={reset}>0</button>
        </div>
        
    </>
        
    
    );

}

export default Updater