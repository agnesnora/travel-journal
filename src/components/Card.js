import location from "../location.png";

export default function Card(props) {
  return (
    <div className="container">
      <img className="travel--img" src={props.item.imageUrl} alt="pthoto"></img>
      <div className="container--right">
        <div className="travel--location">
          <img src={location} alt="location-sign" />
          <h2 className="travel--location-country">{props.item.location}</h2>
          <a href={props.item.googleMapsUrl}>View on google maps</a>
        </div>
        <h1 className="travel--title">{props.item.title}</h1>
        <h2 className="travel--date">
          {props.item.startDate}-{props.item.endDate}
        </h2>
        <p className="travel--description">{props.item.description}</p>
      </div>
    </div>
  );
}
