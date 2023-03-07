import "./App.css";
import Card from "../src/components/Card.js";
import Header from "../src/components/Header.js";
import data from "./data.js";

function App() {
  console.log(data);
  const dataItem = data.map(function (item) {
    console.log(item);
    return <Card item={item} />;
  });
  return (
    <div className="App">
      <Header />
      {dataItem}
    </div>
  );
}

export default App;
