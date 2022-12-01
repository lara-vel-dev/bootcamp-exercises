import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
      <Card
        name="Katsuko Saruhashi"
        img="https://mujeresconciencia.com/app/uploads/2017/03/ksaru.jpg"
        profession="Geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery="A method for measuring carbon dioxide in seawater"
        link="https://massivesci.com/articles/katsuko-saruhashi-geochemistry-seawater-japan/"
      ></Card>
      <Card
        name="Maria Curie"
        img="https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg"
        profession="Physicist and Chemist"
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
        discovery="Polonium (chemical element)"
        link="https://massivesci.com/articles/katsuko-saruhashi-geochemistry-seawater-japan/"
      ></Card>
      </div>
    </>
  );
}

export default App;
