import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { CalcularCongruencial } from "../functions/FuncGeneral";

const AccordionItem = ({ nombre, eID, setEj, listaEj, info }) => {
  const {
    seed,
    cteC,
    cteMult,
    module,
    iteraciones,
    setArrayResultado,
    arrayUniforme,
    setArrayUniforme,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`flush-heading${eID}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${eID}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${eID}`}
          >
            {nombre}
          </button>
        </h2>
        <div
          id={`flush-collapse${eID}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${eID}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{info}</div>
          <button
            onClick={() => {
              setEj(true);
              listaEj(false);
              CalcularCongruencial(
                Number(seed),
                cteC,
                cteMult,
                module,
                iteraciones,
                setArrayResultado,
                setArrayUniforme,
                arrayUniforme
              );
            }}
            className="btn btn-primary m-2"
          >
            Ir al Ejercicio
          </button>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
