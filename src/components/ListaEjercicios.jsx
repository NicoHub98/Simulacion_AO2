import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Ejercicio1 from "./ejercicios/Ejercicio1";
import Ejercicio4 from "./ejercicios/Ejercicio4";
import { CalcEj4 } from "../functions/FuncGeneral";
import Ejercicio6 from "./ejercicios/Ejercicio6";
import Ejercicio5 from "./ejercicios/Ejercicio5";

const ListaEjercicios = () => {
  const [listaEjercicios, setListaEjercicios] = useState(true);
  const [refresh, setRefresh] = useState("N");
  const [ej1, setEj1] = useState(false);
  const [ej2, setEj2] = useState(false);
  const [ej3, setEj3] = useState(false);
  const [ej4, setEj4] = useState(false);
  const [ej5, setEj5] = useState(false);
  const [ej6, setEj6] = useState(false);
  const [ej7, setEj7] = useState(false);

  const handleBack = () => {
    setListaEjercicios(true);
    setEj1(false);
    setEj2(false);
    setEj3(false);
    setEj4(false);
    setEj5(false);
    setEj6(false);
    setEj7(false);
  };

  return (
    <>
      {!listaEjercicios && (
        <>
          <div className="row justify-content-evenly">
            <div className="col-4">
              <button className="btn btn-primary" onClick={handleBack}>
                Volver
              </button>
            </div>
            <div className="col-4">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  setRefresh("Y");
                  console.log(refresh);
                }}
              >
                Recargar
              </button>
            </div>
          </div>
        </>
      )}
      {listaEjercicios && (
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <AccordionItem
            nombre="Ejercicio 1"
            eID="1"
            setEj={setEj1}
            listaEj={setListaEjercicios}
            info=""
          />
          <AccordionItem
            nombre="Ejercicio 2"
            eID="2"
            setEj={setEj2}
            listaEj={setListaEjercicios}
            info=""
          />
          <AccordionItem
            nombre="Ejercicio 3"
            eID="3"
            setEj={setEj3}
            listaEj={setListaEjercicios}
            info=""
          />
          <AccordionItem
            nombre="Ejercicio 4 - Verificación de estado de camiones"
            eID="4"
            setEj={setEj4}
            listaEj={setListaEjercicios}
            info="La duración de esta tarea tiene Uniforme entre 0 y 55 minutos. Simular el tiempo de esta actividad y calcular el tiempo promedio."
            func={CalcEj4}
          />
          <AccordionItem
            nombre="Ejercicio 5"
            eID="5"
            setEj={setEj5}
            listaEj={setListaEjercicios}
            info=""
          />
          <AccordionItem
            nombre="Ejercicio 6 - Tareas de Despacho Verificación de cantidad de carga necesaria"
            eID="6"
            setEj={setEj6}
            listaEj={setListaEjercicios}
            info="La duración de estas tareas tiene distribución uniforme entre 10 y 35 minutos. Simular el tiempo de esta actividad y calcular el tiempo promedio."
          />
          <AccordionItem
            nombre="Ejercicio 7"
            eID="7"
            setEj={setEj7}
            listaEj={setListaEjercicios}
            info=""
          />
        </div>
      )}
      {ej1 && <Ejercicio1 refresh={refresh} setRefresh={setRefresh} />}
      {ej2 && <h1>Ejercicio 2</h1>}
      {ej3 && <h1>Ejercicio 3</h1>}
      {ej4 && <Ejercicio4 refresh={refresh} setRefresh={setRefresh} />}
      {ej5 && <Ejercicio5 refresh={refresh} setRefresh={setRefresh} />}
      {ej6 && <Ejercicio6 refresh={refresh} setRefresh={setRefresh} />}
      {ej7 && <h1>Ejercicio 7</h1>}
    </>
  );
};

export default ListaEjercicios;
