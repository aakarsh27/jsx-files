import React, {useState} from 'react'


function UpdateObject(){
    
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCars(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCars(index){
        setCars(c=> c.filter((_,i) => i !== index))
    }

    function handleYearCars(event){
        setCarYear(event.target.value);
    }

    function handleMaakeCars(event){
        setCarMake(event.target.value);
    }

    function handleModelCars(event){
        setCarModel(event.target.value);
    }

    return(<div>

        <h2>List of cars</h2>
        <ul>
            {cars.map((car, index)=> 
            <li key={index} onClick={()=>handleRemoveCars(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value = {carYear} onChange={handleYearCars}/><br/>
        <input type="text" value = {carMake} onChange={handleMaakeCars}
            placeholder='enter the car make'/><br/>
        <input type="text" value = {carModel} onChange={handleModelCars}
            placeholder='enter the car model'/><br/>        
        <button onClick={handleAddCars}>Add Car</button>
        </div>)

}

export default UpdateObject