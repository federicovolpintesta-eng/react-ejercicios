import { useState } from "react";

export default function Ejercicio7() {
  const [longitud, setLongitud] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generar = () => {
    const len = parseInt(longitud);

    if (!len || len < 4) {
      setError("La longitud debe ser mayor o igual a 4");
      setPassword("");
      return;
    }

    setError("");

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let nueva = "";
    for (let i = 0; i < len; i++) {
      nueva += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    setPassword(nueva);
  };

  return (
    <div>
      <h2>Ejercicio 7 - Generador de Contraseña</h2>

      <input
        type="number"
        placeholder="Longitud"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
      />

      <button onClick={generar}>Generar contraseña</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {password && <p>Contraseña: {password}</p>}
    </div>
  );
}