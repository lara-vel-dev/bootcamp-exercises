import "./styles.css";

function Card(props) {
  return (
    <div className="content">
      <div className="card">
        <div className="shape">
          <img src={props.img} alt={props.name + " image"} />
        </div>
        <br />
        <h3>{props.name.toUpperCase()}</h3>
        <br />
        <p>
          <strong>Height: </strong>
          {props.height / 10} m
        </p>
        <p>
          <strong>Weight: </strong>
          {props.weight} kg
        </p>
        <p>
          <strong>Type: </strong>
          {props.type}
        </p>
      </div>
    </div>
  );
}

export default Card;
