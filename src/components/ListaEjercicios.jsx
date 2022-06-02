import React, { useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import Ejercicio1 from "./ejercicios/Ejercicio1";
import Ejercicio4 from "./ejercicios/Ejercicio4";
import { CalcularCongruencial } from "../functions/FuncGeneral";
import Ejercicio6 from "./ejercicios/Ejercicio6";
import Ejercicio5 from "./ejercicios/Ejercicio5";
import { GlobalContext } from "../context/GlobalContext";
import Ejercicio7 from "./ejercicios/Ejercicio7";
import Ejercicio3 from "./ejercicios/Ejercicio3";
import Ejercicio2 from "./ejercicios/Ejercicio2";

const ListaEjercicios = () => {
  const {
    seed,
    cteC,
    cteMult,
    module,
    iteraciones,
    click,
    setClick,
    setArrayResultado,
    arrayUniforme,
    setArrayUniforme,
  } = useContext(GlobalContext);
  const [listaEjercicios, setListaEjercicios] = useState(true);
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
                  console.log("click");
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
                  setClick(click + 1);
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
            nombre="Ejercicio 2 - Verificación de stock demandado y, si hay faltante o si corresponde el nivel de stock, realización de pedido al proveedor y seguimiento del producto hasta la recepción del mismo."
            eID="2"
            setEj={setEj2}
            listaEj={setListaEjercicios}
            info="El 95% de las veces se encuentra el producto en stock y las restantes hay que pedirlo al proveedor. Si encuentra el producto el tiempo es 3 minutos pero cuando realiza el pedido al proveedor tiene una distribución exponencial con media (1/mu)=120 minutos porque hay que esperar el pedido del proveedor. Simular si se encuentra en stock o no, simular el tiempo de esta actividad y calcular el tiempo promedio."
          />
          <AccordionItem
            nombre="Ejercicio 3 - Procesamiento y preparación del pedido del cliente"
            eID="3"
            setEj={setEj3}
            listaEj={setListaEjercicios}
            info="Según la distancia a su ubicación: está cerca 50% de las veces, con distancia media 30% de las veces y gran distancia las restantes veces. Si está cerca el tiempo de proceso es 2 minutos, con una distancia media 4 minutos y se está a gran distancia 6 minutos. Simular la distancia a que se encuentra cada producto o pedido, simular el tiempo de procesamiento de esta actividad y calcular el tiempo promedio"
          />
          <AccordionItem
            nombre="Ejercicio 4 - Verificación de estado de camiones"
            eID="4"
            setEj={setEj4}
            listaEj={setListaEjercicios}
            info="La duración de esta tarea tiene Uniforme entre 0 y 55 minutos. Simular el tiempo de esta actividad y calcular el tiempo promedio."
          />
          <AccordionItem
            nombre="Ejercicio 5 - Tareas de picking (Carga de los pedidos o bultos)"
            eID="5"
            setEj={setEj5}
            listaEj={setListaEjercicios}
            info="La duración de estas tareas tiene distribución exponencial media 4 minutos. Simular el tiempo de esta actividad y calcular el tiempo promedio."
          />
          <AccordionItem
            nombre="Ejercicio 6 - Tareas de Despacho Verificación de cantidad de carga necesaria"
            eID="6"
            setEj={setEj6}
            listaEj={setListaEjercicios}
            info="La duración de estas tareas tiene distribución uniforme entre 10 y 35 minutos. Simular el tiempo de esta actividad y calcular el tiempo promedio."
          />
          <AccordionItem
            nombre="Ejercicio 7 - Transporte y distribución y entrega de pedidos y bultos"
            eID="7"
            setEj={setEj7}
            listaEj={setListaEjercicios}
            info="La duración de estas tareas varia si el camion va con una carga inferior al 70% es de 30 minutos pero si es 70% o superior 55 minutos. Simular el tamaño de la carga del camión, dimular el tiempo de esta actividad y calcular el tiempo promedio."
          />
        </div>
      )}
      {ej1 && <Ejercicio1 />}
      {ej2 && <Ejercicio2 />}
      {ej3 && <Ejercicio3 />}
      {ej4 && <Ejercicio4 />}
      {ej5 && <Ejercicio5 />}
      {ej6 && <Ejercicio6 />}
      {ej7 && <Ejercicio7 />}
    </>
  );
};

export default ListaEjercicios;
