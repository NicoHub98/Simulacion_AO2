import React from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Error from "./Error";

const Formulario = () => {
  const {
    seed,
    setSeed,
    cteC,
    setCteC,
    cteMult,
    setCteMult,
    module,
    setModule,
    iteraciones,
    setIteraciones,
    error,
    ej1,
  } = useContext(GlobalContext);

  // if (ej1 === true) {
  //   const cambiaIteraciones = document.getElementById("iteraciones");
  //   cambiaIteraciones.disabled = true;
  // } else {
  //   const cambiaIteraciones = document.getElementById("iteraciones");
  //   cambiaIteraciones.disabled = false;
  // }

  return (
    <>
      <div className="container sticky-top my-3">
        {/* Seed */}
        <label htmlFor="seed" className="form-label">
          Semilla:
        </label>
        <input
          type="number"
          className="form-control"
          id="seed"
          onChange={(e) => setSeed(e.target.value)}
          value={seed}
        />
        {/* Cte. C */}
        <label htmlFor="cteC" className="form-label mt-3">
          Constante C:
        </label>
        <input
          type="number"
          className="form-control"
          id="cteC"
          onChange={(e) => setCteC(e.target.value)}
          value={cteC}
        />
        {/* Cte. Multiplicadora A */}
        <label htmlFor="cteMult" className="form-label mt-3">
          Constante Multiplicadora A:
        </label>
        <input
          type="number"
          className="form-control "
          id="cteMult"
          onChange={(e) => setCteMult(e.target.value)}
          value={cteMult}
        />
        {/* Módulo M */}
        <label htmlFor="module" className="form-label mt-3">
          Módulo M:
        </label>
        <input
          type="number"
          className="form-control "
          id="module"
          onChange={(e) => setModule(e.target.value)}
          value={module}
        />
        {/* Iteraciones */}
        <label htmlFor="module" className="form-label mt-3">
          Iteraciones:
        </label>
        <input
          disabled
          type="number"
          className="form-control "
          id="iteraciones"
          onChange={(e) => setIteraciones(e.target.value)}
          value={iteraciones}
        />
        {error && <Error />}
      </div>
    </>
  );
};

export default Formulario;
