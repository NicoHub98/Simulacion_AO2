function CalcularCongruencial(
  seed,
  cteC,
  cteMult,
  module,
  iteraciones,
  setArrayResultado,
  setArrayUniforme
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

function CongruencialNoParam(iteraciones) {
  let _seed = Math.random() * (10000 - 1 + 1),
    _cteC = Math.random() * (10000 - 1 + 1),
    _cteMult = Math.random() * (10000 - 1 + 1),
    _module = 9999;
  let newArrayU = [{ id: 0, num: 0 }];

  //  Fórmula
  for (let i = 0; i < iteraciones; i++) {
    let calc = _seed * _cteMult + Number(_cteC);
    let calcDiv = (_seed * _cteMult + Number(_cteC)) / _module;
    let total = calc - _module * Math.trunc(calcDiv);

    // debugger;
    if (i === 0) {
      newArrayU = [{ id: i + 1, num: total / _module }];
    } else {
      newArrayU = [...newArrayU, { id: i + 1, num: total / _module }];
    }
    _seed = total;
  }
  // console.log(newArrayU);
  return newArrayU;
}

function CalcEj1(arrayUniforme, setArrayEj, iteraciones) {
  let desvio = 0.8,
    varMU = 3.5;
  let sumatoria = 0;
  let cteA = 0.5,
    cteB = 12;

  let newArray = [],
    arrayID = [],
    arrayTiempo = [],
    arrayProm = [];
  let tiempoAux, tiempoSum, promAux;
  let posAnt, promAnt, tiempoAct, posAct;

  for (let j = 0; j <= arrayUniforme.length; j++) {
    // Cálculo del tiempo
    arrayUniforme.map((item2) => {
      sumatoria += item2.num;
    });
    tiempoSum =
      (sumatoria - cteA * arrayUniforme.length) /
      Math.sqrt(arrayUniforme.length / cteB);

    tiempoAux = tiempoSum * desvio + varMU;
    // CalcularCongruencial(Math.random()*(10000-1)+1,4781,9387,9999)
    arrayTiempo = [...arrayTiempo, { tiempoAux }];

    arrayID = [...arrayID, { id: j }];

    //Generar nuevos números
    arrayUniforme = CongruencialNoParam(iteraciones);
    sumatoria = 0;
  }
  // let iterarTiempo = arrayTiempo.values();
  // for (let element of iterarTiempo) {
  //   console.log(element);
  // }

  //arrayUniforme.map((item, i) => {
  for (let i = 0; i <= arrayUniforme.length; i++) {
    // Cálculo del promedio
    const { tiempoAux } = arrayTiempo[i];
    if (i === 0) {
      promAnt = 0;
      posAnt = 0;
      posAct = 1;
      tiempoAct = tiempoAux;
    } else {
      const { promAux } = arrayProm[i - 1];
      posAnt = i;
      posAct = i + 1;

      // promAnt = aux.map((item) => item.promAux);
      promAnt = promAux;
      tiempoAct = tiempoAux;
    }

    promAux = (promAnt * posAnt + tiempoAct) / posAct;
    arrayProm = [...arrayProm, { promAux }];
  }
  //});
  //Agregar elementos al array principal
  arrayUniforme.map((item, i) => {
    const { id } = arrayID[i];
    const { tiempoAux } = arrayTiempo[i];
    const { promAux } = arrayProm[i];
    newArray = [...newArray, { id, tiempoAux, promAux }];
  });
  setArrayEj(newArray);
}

function CalcEj2(arrayUniforme, setArrayEj) {
  let lambda = 120;

  let newArray = [];
  let tiempoAux, promAux;
  let posAnt, promAnt, tiempoAct, posAct;
  let randomNum;

  arrayUniforme.map((item, i) => {
    // Cálculo del tiempo
    if (item.num <= 0.95) {
      tiempoAux = 3;
    } else {
      randomNum = Math.random();
      tiempoAux = -lambda * Math.log(1 - randomNum);
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
  CalcEj1,
  CalcEj2,
  CalcEj3,
  CalcEj4,
  CalcEj5,
  CalcEj6,
  CalcEj7,
};
