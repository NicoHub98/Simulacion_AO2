import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CalcEj3 } from "../../functions/FuncGeneral";
import Loading from "../Loading";

const Ejercicio3 = () => {
  const { arrayUniforme, arrayEj, setArrayEj, click } =
    useContext(GlobalContext);
  const [load, setLoad] = useState(false);
  const [tiempoTotal, setTiempoTotal] = useState(0);
  let a, b;
  useEffect(() => {
    setTiempoTotal(CalcEj3(arrayUniforme, setArrayEj));
    setLoad(true);
  }, [, click]);

  return (
    <>
      <div className="container text-center mt-3">
        <h4>
          Ejercicio 3 - Procesamiento y preparación del pedido del cliente.
        </h4>
      </div>
      {load ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Número</th>
              <th>Tiempo (min)</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {React.Children.toArray(
              arrayUniforme.map(({ id, num }) => {
                const { tiempoAux, promAux } = arrayEj[id - 1];
                return (
                  <tr key={id}>
                    <th>{id}</th>
                    <td>
                      {
                        (num =
                          Math.trunc(num * Math.pow(10, 5)) / Math.pow(10, 5))
                      }
                    </td>
                    <td>
                      {
                        (a =
                          Math.trunc(tiempoAux * Math.pow(10, 5)) /
                          Math.pow(10, 5))
                      }
                    </td>
                    <td>
                      {
                        (b =
                          Math.trunc(promAux * Math.pow(10, 5)) /
                          Math.pow(10, 5))
                      }
                    </td>
                  </tr>
                );
              })
            )}
            <tr>
              <th>Total:</th>
              <th></th>
              <th>{tiempoTotal}</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Ejercicio3;
