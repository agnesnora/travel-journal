export default function Card(props) {
  return (
    <div>
      <img className="travel--img" src={props.item.imageUrl} alt="pthoto"></img>
      <div>
        <div>
          <h2 className="travel--location">{props.item.location}</h2>
          <a href={props.item.googleMapsUrl}>View on google maps</a>
        </div>
        <h1 className="travel--title">{props.item.title}</h1>
        <h3 className="travel--date">
          {props.item.startDate}-{props.item.endDate}
        </h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
