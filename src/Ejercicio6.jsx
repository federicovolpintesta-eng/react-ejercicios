import { useState, useRef } from "react";

export default function Ejercicio6() {
  const [segundos, setSegundos] = useState(0);
  const intervalo = useRef(null);

  const iniciar = () => {
    if (intervalo.current) return;

    intervalo.current = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
  };

  const pausar = () => {
    clearInterval(intervalo.current);
    intervalo.current = null;
  };

  const reiniciar = () => {
    pausar();
    setSegundos(0);
  };

  const formatear = () => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div>
      <h2>Ejercicio 6 - Temporizador</h2>

      <h3>{formatear()}</h3>

      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}