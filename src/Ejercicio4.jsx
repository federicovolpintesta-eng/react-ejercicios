import { useState } from "react";

export default function Ejercicio4() {
  const [busqueda, setBusqueda] = useState("");

  const lista = ["Perro", "Gato", "Pez", "Caballo", "Conejo"];

  const filtrados = lista.filter((item) =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Ejercicio 4 - Filtro en Tiempo Real</h2>

      <input
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {filtrados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}