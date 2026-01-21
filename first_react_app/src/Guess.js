import { useState } from "react";
import './Guess.css'

function Guess() {
  const [number, setNumber] = useState(null);

  function generateNumber() {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumber(newNumber);
    console.log("Número generado:", newNumber);
  }

  function inputNum() {
    if (number === null) {
      console.log("Primero genera un número");
    }

    const numIn = Number(prompt("Ingrese un número"));

    if (numIn === number) {
      console.log("Adivinaste el número");
    } else {
      console.log("Inténtalo de nuevo");
    }
  }

  return (
    <div className="buttons">
      <button onClick={generateNumber}>
        Generar nuevo número
      </button>

      <button onClick={inputNum}>
        Ingresar número
      </button>
    </div>
  );
}

export default Guess;
