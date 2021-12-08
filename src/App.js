import "./styles/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBar from "./components/NavBar/NavBar.js";

function App() {

 

  return (
    <div className="App text-center">
      <header className="App-header ">
        <NavBar />
      </header>

      <main className="container">
        <div className="row">
          <div className="col-12">
            <ItemListContainer greeting="Ejemplo de item" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
