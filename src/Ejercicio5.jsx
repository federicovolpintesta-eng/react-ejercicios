import { useState } from "react";

export default function Ejercicio5() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacion) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado("Ingrese números válidos");
      return;
    }

    if (operacion === "dividir" && b === 0) {
      setResultado("No se puede dividir por cero");
      return;
    }

    switch (operacion) {
      case "sumar":
        setResultado(a + b);
        break;
      case "restar":
        setResultado(a - b);
        break;
      case "multiplicar":
        setResultado(a * b);
        break;
      case "dividir":
        setResultado(a / b);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Ejercicio 5 - Calculadora</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={() => calcular("sumar")}>Sumar</button>
        <button onClick={() => calcular("restar")}>Restar</button>
        <button onClick={() => calcular("multiplicar")}>
          Multiplicar
        </button>
        <button onClick={() => calcular("dividir")}>Dividir</button>
      </div>

      <p>Resultado: {resultado}</p>
    </div>
  );
}