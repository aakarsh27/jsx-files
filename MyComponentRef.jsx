import React, {useState, useEffect, useRef} from "react";

function MyComponentRef(){

    const inputRef1 = useRef(null);
    const inputRef2= useRef(null);
    const inputRef3= useRef(null);


    useEffect(()=>{
        console.log("component was rendered");
    
    },)

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }



    return(
    <>
        <button onClick={handleClick1}>
            click me 1
        </button>
        <input ref={inputRef1} onClick={handleClick1}/>

        <button onClick={handleClick2}>
            click me 2
        </button>
        <input ref={inputRef2} onClick={handleClick2}/>

        <button onClick={handleClick3}>
            click me 3
        </button>
        <input ref={inputRef3} onClick={handleClick3}/>
    
    </>);

}

export default MyComponentRef;