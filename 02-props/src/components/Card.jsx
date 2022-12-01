import "../css/card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="circle"></div>
        <div className="profile">
          <img src={props.img} alt={props.name} />
        </div>
      </div>
      <div className="card__about">
        <div className="person">
          <h1>{props.name}</h1>
          <h2>{props.profession}</h2>
        </div>
        <br />
        <h3>Awards ({props.awards.length})</h3>
        <ul>
          {props.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
        <h3>Discovery</h3>
        <p>{props.discovery}</p>
      </div>
    </div>
  );
}

export default Card;
