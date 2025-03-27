import profilePic from './assets/anhthe.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="anh the" width={100} height={100}></img>
            <h2>Ngoc Tuan</h2>
            <p>I am a student</p>
        </div>
    );
}
export default Card