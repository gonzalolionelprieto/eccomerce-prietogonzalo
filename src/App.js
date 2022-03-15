import "./styles/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBar from "./components/NavBar/NavBar.js";
import ItemDetaillContainer from "./components/itemDetaillContainer/itemDetaillContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import CartContextProvider from "./context/CartContext";
import Home from "./Home.js";



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
       
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Productos" element={<ItemListContainer/>} />
          <Route
            exact
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/detalle/:id" element={<ItemDetaillContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
