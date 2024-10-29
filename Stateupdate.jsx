import React, {useState} from "react"

function Stateupdate(){

    const [car, setCar] = useState({year:2024, make:"Ford", model:"Mustang"});

    function handlYearChange(event){

        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));

    }

    function handleModelhange(event){
        setCar(c => ({...c, model: event.target.value}));

    }

    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input  type="number" value={car.year} onChange={handlYearChange}/> <br/>
            <input  type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input  type="text" value={car.model} onChange={handleModelhange}/> <br/>

        </div>
    );
}


export default Stateupdate