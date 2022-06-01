import { useState } from "react";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import ListaEjercicios from "./components/ListaEjercicios";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const [seed, setSeed] = useState(7343);
  const [cteC, setCteC] = useState(4781);
  const [cteMult, setCteMult] = useState(9387);
  const [module, setModule] = useState(9999);
  const [iteraciones, setIteraciones] = useState(100);
  const [error, setError] = useState(false);
  const [arrayResultado, setArrayResultado] = useState([
    {
      id: 0,
      arraySeed: 0,
      arrayRes: 0,
    },
  ]);
  const [arrayUniforme, setArrayUniforme] = useState([{ id: 0, num: 0 }]);
  const [arrayEj, setArrayEj] = useState([{ id: 0, tiempoAux: 0, promAux: 0 }]);

  return (
    <GlobalContext.Provider
      value={{
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
        arrayResultado,
        setArrayResultado,
        error,
        setArrayUniforme,
        arrayUniforme,
        arrayEj,
        setArrayEj,
      }}
    >
      <h1 className="text-center my-3">Modelos y Simulación</h1>
      <hr />
      <div className="row justify-content-md-center">
        <div className="col-md-3">
          {/* Form */}
          <Formulario />
        </div>
        <div className="col-md mx-3">
          <ListaEjercicios />
        </div>
        {/* <div className="col-md-4"><Uniformes /></div> */}
      </div>
      {/* Footer */}
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
