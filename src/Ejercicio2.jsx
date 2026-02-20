import { useState } from "react";

export default function Ejercicio2() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Ejercicio 2</h2>
      <p>Clics: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Contar clics
      </button>
    </div>
  );
}