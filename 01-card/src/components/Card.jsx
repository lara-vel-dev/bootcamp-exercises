import Greetings from "./Greetings"; 
import "../css/card.css"

function Card() {
    return (<div className="card">
        <Greetings className></Greetings>
        <img className="profile-pic" src="src/img/profile.jpg" alt="Profile picture" />
        <Greetings></Greetings>
        <br />
        <h3>I'm learning React!! :D </h3>
    </div>);
}

export default Card;
