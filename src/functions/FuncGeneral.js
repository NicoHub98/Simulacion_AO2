function CalcularCongruencial(
  seed,
  cteC,
  cteMult,
  module,
  iteraciones,
  setArrayResultado,
  setArrayUniforme,
  arrayUniforme
) {
  let _seed = seed,
    _cteC = cteC,
    _cteMult = cteMult,
    _module = module;
  let newArray = [{ arraySeed: 0, arrayRes: 0 }];
  let newArrayU = [{ id: 0, num: 0 }];

  //  Fórmula
  for (let i = 0; i < iteraciones; i++) {
    let calc = _seed * _cteMult + Number(_cteC);
    let calcDiv = (_seed * _cteMult + Number(_cteC)) / _module;
    let total = calc - _module * Math.trunc(calcDiv);
    if (i === 0) {
      newArray = [{ id: i + 1, arraySeed: _seed, arrayRes: total }];
      newArrayU = [{ id: i + 1, num: total / module }];
    } else {
      newArray = [
        ...newArray,
        { id: i + 1, arraySeed: _seed, arrayRes: total },
      ];
      newArrayU = [...newArrayU, { id: i + 1, num: total / module }];
    }
    _seed = total;
  }
  //   return newArray;
  setArrayResultado(newArray);
  setArrayUniforme(newArrayU);
}

function CalcEj4(arrayUniforme, setArrayEj) {
  let a = 0,
    b = 55; //a+(b-a)*r
  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    tiempoAux = (a + (b - a)) * item.num;
    // Cálculo del promedio
    if (i === 0) {
      promAnt = 0;
      posAnt = 0;
      posAct = 1;
      tiempoAct = tiempoAux;
    } else {
      posAnt = i;
      posAct = i + 1;

      let aux;
      aux = newArray.filter((item) => item.id === i - 1);
      promAnt = aux.map((item) => item.promAux);

      tiempoAct = tiempoAux;
    }
    promAux = (promAnt * posAnt + tiempoAct) / posAct;
    newArray = [...newArray, { id: i, tiempoAux, promAux }];
  });
  setArrayEj(newArray);
}

function CalcEj5(arrayUniforme, setArrayEj) {
  let lambda = 4;

  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    tiempoAux = -lambda * Math.log(1 - item.num);
    // Cálculo del promedio
    if (i === 0) {
      promAnt = 0;
      posAnt = 0;
      posAct = 1;
      tiempoAct = tiempoAux;
    } else {
      posAnt = i;
      posAct = i + 1;

      let aux;
      aux = newArray.filter((item) => item.id === i - 1);
      promAnt = aux.map((item) => item.promAux);

      tiempoAct = tiempoAux;
    }
    promAux = (promAnt * posAnt + tiempoAct) / posAct;
    newArray = [...newArray, { id: i, tiempoAux, promAux }];
  });
  setArrayEj(newArray);
}

function CalcEj6(arrayUniforme, setArrayEj) {
  let a = 10,
    b = 35; //a+(b-a)*r
  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    tiempoAux = (a + (b - a)) * item.num;
    // Cálculo del promedio
    if (i === 0) {
      promAnt = 0;
      posAnt = 0;
      posAct = 1;
      tiempoAct = tiempoAux;
    } else {
      posAnt = i;
      posAct = i + 1;

      let aux;
      aux = newArray.filter((item) => item.id === i - 1);
      promAnt = aux.map((item) => item.promAux);

      tiempoAct = tiempoAux;
    }
    promAux = (promAnt * posAnt + tiempoAct) / posAct;
    newArray = [...newArray, { id: i, tiempoAux, promAux }];
  });
  setArrayEj(newArray);
}

export { CalcularCongruencial, CalcEj4, CalcEj5, CalcEj6 };
