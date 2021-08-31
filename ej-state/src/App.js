/* import logo from './logo.svg'; */
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1') // hacemos la petición get
      /* .then(res => res.json()) */ // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(res => {
        console.log(res.data)
        setName(res.data.name)
      }); // cuando hayamos terminado (then) actualizamos el estado nombre
  }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
  
  const [numero,setNumero]= useState(8)
    
  const volverNumero = ()=> {
    setNumero(4);
  }
  useEffect(() => {
    alert('Cambio todo')
  }, [numero])

  return <div>
    <h1>{name}</h1>
    <p>{numero}</p>
    <button onClick={()=> volverNumero()}>Apreta</button>
  </div>
}












/* function App() {

  const [caca, setCaca] = useState(0)

  const incrementar = () => {
    setCaca(caca + 1);
  }
  const decrementar = () => {
    setCaca(caca -1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {caca}
        </p>
        <button className= "btn-primary" onClick={incrementar}>Incrementar</button>

        <button className= "btn-primary" onClick={decrementar}>Decrementar</button>
      </header>
    </div>
  );
} */

export default App;
