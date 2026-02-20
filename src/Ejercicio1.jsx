import { useState, useEffect } from "react";

export default function Ejercicio1() {
  const [color, setColor] = useState("#ffffff");

  const cambiarColor = () => {
    const nuevoColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nuevoColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, [color]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ejercicio 1 - Cambiador de Color</h2>
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
}