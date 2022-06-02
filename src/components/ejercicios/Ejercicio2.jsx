import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CalcEj2 } from "../../functions/FuncGeneral";
import Loading from "../Loading";

const Ejercicio2 = () => {
  const { arrayUniforme, arrayEj, setArrayEj, click } =
    useContext(GlobalContext);
  const [load, setLoad] = useState(false);
  let a, b;
  useEffect(() => {
    CalcEj2(arrayUniforme, setArrayEj);
    setLoad(true);
  }, [, click]);

  return (
    <>
      <div className="container text-center mt-3">
        <h4>
          Ejercicio 2 - Verificación de stock demandado y, si hay faltante o si
          corresponde el nivel de stock, realización de pedido al proveedor y
          seguimiento del producto hasta la recepción del mismo
        </h4>
      </div>
      {load ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Número</th>
              <th>Tiempo</th>
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
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Ejercicio2;
