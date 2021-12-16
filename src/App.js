import "./styles/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBar from "./components/NavBar/NavBar.js";
import ItemDetaillContainer from "./components/itemDetaillContainer/itemDetaillContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        

        <Route  exact path="/" element={<ItemListContainer />} />
        <Route  exact path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route  exact path="/detalle/:id" element={<ItemDetaillContainer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
