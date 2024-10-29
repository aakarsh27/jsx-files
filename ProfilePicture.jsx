
function ProfilePicture(){

    const url1 = './src/assets/photo.jpg'


    const handleclick = (e) => e.target.style.display = "none";

    return(<img onClick={(e)=> handleclick(e)} src={url1}></img>);

}

export default ProfilePicture