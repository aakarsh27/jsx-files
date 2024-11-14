

function Button(){

    const handleclick = (e) => e.target.textContent = "ouch";

    return(<button onDoubleClick={(e) => handleclick(e)}>click me</button>);

}

export default Button