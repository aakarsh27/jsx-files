import React, {useState} from 'react';
function Counter(){

    const [count, setCount] = useState(0);
    
    const increment = ()=>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const resetCount = () =>{
        setCount(0);
    }

    return(
        <div>
            <p>Increment</p>
            <button onClick={increment}>Increase</button>

            <p>Decrease</p>
            <button onClick={decrement}>Decrease</button>

            <p>Reset</p>
            <button onClick={resetCount}>Reset</button>


            <h1>{count}</h1>
            


        </div>
    );

}

export default Counter