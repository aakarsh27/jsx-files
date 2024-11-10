
function Food(){

    const food1 = "roti sabzi"
    const food2 = "daal chawal"
    return(
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li><a href="https://www.zomato.com/">Your Choice</a></li>
        </ul>
    );
}

export default Food