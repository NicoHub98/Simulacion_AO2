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

function CalcEj2(arrayUniforme, setArrayEj) {
  let lambda = 120;

  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    if (item.num <= 0.95) {
      tiempoAux = 3;
    } else {
      tiempoAux = -lambda * Math.log(1 - item.num);
    }
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

function CalcEj3(arrayUniforme, setArrayEj) {
  let tiempoTotal = 0;
  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    if (item.num < 0.5) {
      tiempoAux = 2;
    } else if (item.num >= 0.5 && item.num < 0.8) {
      tiempoAux = 4;
    } else {
      tiempoAux = 6;
    }
    tiempoTotal += tiempoAux;
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
  return tiempoTotal;
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

function CalcEj7(arrayUniforme, setArrayEj) {
  let tiempoTotal = 0;
  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    if (item.num < 0.7) {
      tiempoAux = 30;
    } else {
      tiempoAux = 55;
    }
    tiempoTotal += tiempoAux;
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
  return tiempoTotal;
}

export {
  CalcularCongruencial,
  CalcEj2,
  CalcEj3,
  CalcEj4,
  CalcEj5,
  CalcEj6,
  CalcEj7,
};
