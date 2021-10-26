const mazeData = [
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1,
    0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
    0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 3,
  ],
  [
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
    0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
  ],
  [
    4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
  ],
  [
    1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
];

const directions = {
  360: {
    left: ["y", -1],
    forward: ["x", -1],
    right: ["y", 1],
    backward: ["x", 1],
  },
  270: {
    left: ["x", 1],
    forward: ["y", -1],
    right: ["x", -1],
    backward: ["y", 1],
  },
  180: {
    left: ["y", 1],
    forward: ["x", 1],
    right: ["y", -1],
    backward: ["x", -1],
  },
  90: {
    left: ["x", -1],
    forward: ["y", 1],
    right: ["x", 1],
    backward: ["y", -1],
  },
};

const updatePointPosition = (el, x, y) => {
  el.style.top = `${x + 1 - 0.375}em`;
  el.style.left = `${y + 1 - 0.375}em`;
};

const updatePointRotation = (el, angle) => {
  el.style.transform = `rotate(${angle}deg)`;
};

const updatePointTransition = (el, time) => {
  el.style.transition = `all ${time - time * 0.25}ms ease-in`;
};

window.addEventListener("load", () => {
  const container = document.getElementsByClassName("wsti__maze")[0];

  mazeData.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("class", "wsti__maze-row");
    row.forEach((cell) => {
      const cellElement = document.createElement("div");
      cellElement.setAttribute(
        "class",
        ["wsti__maze-cell", cell === 1 ? "wsti__maze-cell--wall" : ""].join(" ")
      );
      rowElement.appendChild(cellElement);
    });
    container.appendChild(rowElement);
  });

  const { entrance } = (() => {
    const results = {};
    mazeData.forEach((row, x) => {
      row.forEach((coordinate, y) => {
        if (coordinate === 3) {
          results.entrance = { x, y };
        }
      });
    });
    return results;
  })();

  const point = document.getElementsByClassName("wsti__point")[0];
  updatePointPosition(point, entrance.x, entrance.y, 0);

  let currentPosition = { x: entrance.x, y: entrance.y };
  const step = (angle, rotationNumber, positionToSet) => {
    if (positionToSet) {
      currentPosition = { ...positionToSet };
      updatePointPosition(point, currentPosition.x, currentPosition.y);

      const currentPositionData =
        mazeData[currentPosition.x][currentPosition.y];
      if (currentPositionData === 4) {
        alert("Koniec labiryntu!");
      } else {
        setTimeout(() => step(angle, rotationNumber), window.time);
      }
      return;
    }

    // jesli obraca sie poraz pierwszy to w lewo jesli nie to w prawo
    const turn = rotationNumber === 1 ? 90 : -90;
    const nextAngle = angle - turn;
    /*
     * zdefiniowane sa 4 wartosci kierunkow jako wartosci kątu
     * 360 - góra
     * 270 - lewo
     * 180 - dół
     * 90 - prawo
     * trzeba skorygowac wartosc kolejnego kąta tak, zeby jego wartosc wynosila
     * maksymalnie 360 a minimalnie 90
     *
     * wiec jesli mamy kat 360 a przesuwamy sie w prawo to mamy kat 450
     * takiej wartosci nie ma w stalej definiujacej kierunki wiec trzeba ja skorygowac o 360
     * taka sama sytuacja z wartoscia ponizej 90 - trzeba dodac 360
     */
    const resolvedAngle =
      nextAngle > 360
        ? nextAngle - 360
        : nextAngle === 0
        ? nextAngle + 360
        : nextAngle;
    const currentDirection = directions[resolvedAngle];
    updatePointRotation(point, nextAngle);

    const nextPosition = {
      ...currentPosition,
      [currentDirection.forward[0]]:
        currentPosition[currentDirection.forward[0]] +
        currentDirection.forward[1],
    };

    const nextForwardPosition = mazeData[nextPosition.x][nextPosition.y];

    // jesli sciana
    if (nextForwardPosition === 1) {
      const nextFun = () => step(nextAngle, rotationNumber + 1);
      setTimeout(nextFun, window.time);
      // jesli wyjscie
    } else {
      const positionToSet = {
        ...currentPosition,
        [currentDirection.forward[0]]:
          currentPosition[currentDirection.forward[0]] +
          currentDirection.forward[1],
      };
      const nextFun = () => step(resolvedAngle, 1, positionToSet);
      setTimeout(nextFun, window.time);
    }
  };

  const startButton = document.getElementById("start");
  startButton.addEventListener("click", (ev) => {
    step(360, 1);
    ev.target.disabled = true;
  });

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", () => {
    const timeInput = document.getElementById("step-time");
    window.time = Number(timeInput.value);
    updatePointTransition(point, window.time);
  });

  const timeInput = document.getElementById("step-time");
  window.time = Number(timeInput.value);
  updatePointTransition(point, window.time);
});
