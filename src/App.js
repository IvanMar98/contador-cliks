import './App.css';
import logo from './img/freecodecamp-logo.png'
import  Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numCliks, setNumCliks] = useState(0)

  const manejarClik = () =>{
    setNumCliks(numCliks + 1);
    
  }
  const reiniciarContador = () =>{
    setNumCliks(0);
  }
  return (
    <div className="App">
      <div className='container-logo'>
        <img className='logo' src={logo} />
      </div>
      <div className='container-counter'>
        <Contador numCliks = {numCliks}
        />
      <Boton 
        texto = 'Clik'
        esBotonDeClik = {true}
        manejarClik ={manejarClik}
        />
        <Boton 
        texto = 'Reiniciar'
        esBotonDeClik = {false}
        manejarClik ={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
