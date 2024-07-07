import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {

  const name = 'Joan Sebastian Durango Suarez';

  return (
    <>
      <div>
        <h1>Practica de Componentes</h1>
        {/* Cargar el primer componente */}
        <MyComponent name = {name}/>
        <hr />
        <h4>Segundo Componente</h4>
        <SecondComponent />
      </div>
    </>
  )
}

export default App
