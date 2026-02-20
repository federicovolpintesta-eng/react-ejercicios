import { useState } from "react";

export default function Ejercicio8() {
  const [texto, setTexto] = useState("");

  const palabras = texto.trim()
    ? texto.trim().split(/\s+/).length
    : 0;

  const caracteres = texto.replace(/\s/g, "").length;

  return (
    <div>
      <h2>Ejercicio 8 - Contador de Texto</h2>

      <textarea
        rows="5"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un párrafo..."
      />

      <p>Palabras: {palabras}</p>
      <p>Caracteres (sin espacios): {caracteres}</p>
    </div>
  );
}