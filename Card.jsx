import ProfilePic from './assets/photo.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-aakarsh" alt="profile picture" src={ProfilePic}></img>
            <h2 className='card-title'>Aakarsh</h2>
            <p className='card-text'>I am learning react and i will become good at this</p>
        </div>
    );

}

export default Card