import { useState } from "react";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";
import Ejercicio5 from "./Ejercicio5";
import Ejercicio6 from "./Ejercicio6";
import Ejercicio7 from "./Ejercicio7";
import Ejercicio8 from "./Ejercicio8";
import Ejercicio9 from "./Ejercicio9";

export default function App() {
  const [ejercicio, setEjercicio] = useState(null);

  const volver = () => setEjercicio(null);

  if (ejercicio)
    return (
      <div style={{ padding: "20px" }}>
        <button onClick={volver}>⬅ Volver</button>
        {ejercicio}
      </div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Entrega ReactJS - Ejercicios</h1>

      <button onClick={() => setEjercicio(<Ejercicio1 />)}>1. Cambiador de color</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio2 />)}>2. Contador de clics</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio3 />)}>3. Lista dinámica</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio4 />)}>4. Filtro en tiempo real</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio5 />)}>5. Calculadora</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio6 />)}>6. Temporizador</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio7 />)}>7. Generador contraseña</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio8 />)}>8. Contador texto</button>
      <br /><br />
      <button onClick={() => setEjercicio(<Ejercicio9 />)}>9. Lista con LocalStorage</button>
    </div>
  );
}