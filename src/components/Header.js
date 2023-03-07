import globe from "../globe.png";

export default function Header() {
  return (
    <div className="header">
      <img src={globe} alt="globe" className="headerEl"></img>
      <h1 className="headerEl">my travel journal</h1>
    </div>
  );
}
