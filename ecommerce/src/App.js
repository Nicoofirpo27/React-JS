
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer  greeting={'ENVIOS A TODO EL PAIS'}/>
    </div>
  );
}

export default App;
