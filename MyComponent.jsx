//these are primarily used for form elements

import React, {useState} from "react";
function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayement] = useState("");
    const [shipping, setShipping] = useState("Choose");

    function handlequantityChange(event){
        setQuantity(event.target.value);
    }

    function handlenameChange(event){
        setName(event.target.value);
    }

    function handlecommentChange(event){
        setComment(event.target.value);
    }

    function handlepayementChange(event){
        setPayement(event.target.value);
    }

    function handleshippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handlenameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handlequantityChange} type="number "/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handlecommentChange}
            placeholder="enter delivery instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlepayementChange}>
                <option value="">select an option</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
                <option value="GooglePay">GooglePay</option>
            </select>
            <p>Payement: {payment}</p>

            <label>
                <input type="radio" value="Pick up"
                checked={shipping === "Pick up"} 
                onChange={handleshippingChange}/>
                Pick up
            </label><br/>
            <label>
            <input type="radio" value="Delivery"
                checked={shipping === "Delivery"} 
                onChange={handleshippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>


        </div>
    );

}

export default MyComponent