import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CalcEj4 } from "../../functions/FuncGeneral";
import Loading from "../Loading";

const Ejercicio4 = () => {
  const { arrayUniforme, arrayEj, setArrayEj } = useContext(GlobalContext);
  const [load, setLoad] = useState(false);
  let a, b;
  useEffect(() => {
    CalcEj4(arrayUniforme, setArrayEj);
    setLoad(true);
  }, []);

  return (
    <>
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

export default Ejercicio4;
