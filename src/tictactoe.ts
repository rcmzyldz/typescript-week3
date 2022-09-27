class Game {
  public render() {
    console.log("TIC - TAC - TOE");
  }

  public command(command: string) {
    // Perform game logic
    if (command === PlayerSigns.O) {
      command = "O";
    } else if (command === PlayerSigns.X) {
      command = "X";
    } else {
      command = "You should enter valid expression!";
    }

    const cells: string[][] = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    console.log(
      " | " + cells[0][0] + " | " + cells[0][1] + " | " + cells[0][2] + " | "
    );
    console.log(
      " | " + cells[1][0] + " | " + cells[1][1] + " | " + cells[1][2] + " | "
    );
    console.log(
      " | " + cells[1][0] + " | " + cells[2][1] + " | " + cells[2][2] + " | "
    );

    console.log(command);
  }
}

const game = new Game();

enum PlayerSigns {
  O = "O",
  X = "X",
}

// for (let i = 0; i < cells.length; i++) {
//   for (let j = 0; j < cells[i].length; j++) {
//     console.log(cells[i, j]);
//   }
// }

class Player {}

//get random number
// const getRandomInteger = (min: number, max: number): number => {
//   min = Math.ceil(1);
//   max = Math.floor(9);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

let computer = new Player();
let human = new Player();

export { game };
