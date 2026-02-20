import { useState, useEffect } from "react";

export default function Ejercicio9() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [texto, setTexto] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregar = () => {
    if (!texto.trim()) return;

    setTareas([...tareas, { texto, completada: false }]);
    setTexto("");
  };

  const toggle = (index) => {
    const nuevas = [...tareas];
    nuevas[index].completada = !nuevas[index].completada;
    setTareas(nuevas);
  };

  const limpiarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
  };

  return (
    <div>
      <h2>Ejercicio 9 - Lista con LocalStorage</h2>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregar}>Agregar</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggle(index)}
            />
            <span
              style={{
                textDecoration: tarea.completada
                  ? "line-through"
                  : "none",
              }}
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={limpiarCompletadas}>
        Limpiar completadas
      </button>
    </div>
  );
}