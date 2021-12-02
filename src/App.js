
import './styles/style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        


       <NavBar/> 
       hola soy app eccomerce

       <ItemListContainer greeting="ejemplo de item" />
          
      </header>
    </div>
  );
}

export default App;
