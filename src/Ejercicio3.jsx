import { useState } from "react";

export default function Ejercicio3() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  const agregar = () => {
    if (!texto.trim()) return;
    setLista([...lista, texto]);
    setTexto("");
  };

  const eliminar = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Ejercicio 3 - Lista Dinámica</h2>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribir..."
      />
      <button onClick={agregar}>Agregar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => eliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}