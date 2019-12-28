const getId = document.getElementById;
let table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let choice = "X";

// function checkHorizontal() {
//   if (document.getElementById(1).innerText === "X" && document.getElementById(2).innerText === "X" && document.getElementById(3).innerText === "X" || document.getElementById(4).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(6).innerText === "X" || document.getElementById(7).innerText === "X" && document.getElementById(8).innerText === "X" && document.getElementById(9).innerText === "X") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#1EBCE0"
//     }
//     document.getElementById("hello").innerHTML = "X win last game, try one more time";
//     document.getElementById("hello").style.color = "#1EBCE0";
//   }

//   if (document.getElementById(1).innerText === "O" && document.getElementById(2).innerText === "O" && document.getElementById(3).innerText === "O" || document.getElementById(4).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(6).innerText === "O" || document.getElementById(7).innerText === "O" && document.getElementById(8).innerText === "O" && document.getElementById(9).innerText === "O") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#E12163"
//     }
//     document.getElementById("hello").innerHTML = "O win last game, try one more time";
//     document.getElementById("hello").style.color = "#E12163";

//   }
// }

// function checkVertical() {
//   if (document.getElementById(1).innerText === "X" && document.getElementById(4).innerText === "X" && document.getElementById(7).innerText === "X" || document.getElementById(8).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(2).innerText === "X" || document.getElementById(9).innerText === "X" && document.getElementById(6).innerText === "X" && document.getElementById(3).innerText === "X") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#1EBCE0"

//     }
//     document.getElementById("hello").innerHTML = "X win last game, try one more time";
//     document.getElementById("hello").style.color = "#1EBCE0";
//   }

//   if (document.getElementById(1).innerText === "O" && document.getElementById(4).innerText === "O" && document.getElementById(1).innerText === "O" || document.getElementById(8).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(2).innerText === "O" || document.getElementById(9).innerText === "O" && document.getElementById(6).innerText === "O" && document.getElementById(3).innerText === "O") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#E12163"

//     }
//     document.getElementById("hello").innerHTML = "O win last game, try one more time";
//     document.getElementById("hello").style.color = "#E12163";
//   }
// }

// function majordiagnol() {
//   if (document.getElementById(7).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(3).innerText === "X") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#1EBCE0"

//     }
//     document.getElementById("hello").innerHTML = "X win last game, try one more time";
//     document.getElementById("hello").style.color = "#1EBCE0";
//   }

//   if (document.getElementById(7).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(3).innerText === "O") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#E12163"

//     }
//     document.getElementById("hello").innerHTML = "O win last game, try one more time";
//     document.getElementById("hello").style.color = "#E12163";
//   }
// }

// function minordiagnol() {
//   if (document.getElementById(1).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(9).innerText === "X") {
//     for (let i = 1; i < 10; i++) {

//       document.getElementById(i).style.color = "#1EBCE0"

//     }
//     document.getElementById("hello").innerHTML = "X win last game, try one more time";
//     document.getElementById("hello").style.color = "#1EBCE0";
//   }

//   if (document.getElementById(1).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(9).innerText === "O") {
//     for (let i = 1; i < 10; i++) {
//       document.getElementById(i).style.color = "#E12163"

//     }
//     document.getElementById("hello").innerHTML = "O win last game, try one more time";
//     document.getElementById("hello").style.color = "#E12163";
//   }
// }

// ====================================================
// REFACTOR
function checkHorizontal() {
  let result = 0;
  for (let i = 0; i < table[0].length; i++) {
    result += table[0][i];
    result += table[1][i];
    result += table[2][i];
    if (result === 3 && choice === 'X') {
      for (let i = 1; i < 10; i++) {

        document.getElementById(i).style.color = "#1EBCE0"
      }
      document.getElementById("hello").innerHTML = "X win last game, try one more time";
      document.getElementById("hello").style.color = "#1EBCE0";
    }

    if (result === 30 && choice === 'O') {
      for (let i = 1; i < 10; i++) {

        document.getElementById(i).style.color = "#E12163"
      }
      document.getElementById("hello").innerHTML = "O win last game, try one more time";
      document.getElementById("hello").style.color = "#E12163";
    }
  }

}

function checkVertical() {
  let result = 0;
  for (let i = 0; i < table.length; i++) {
    result += table[i][0];
    result += table[i][1];
    result += table[i][2];

    if (result === 3 && choice === 'X') {
      for (let i = 1; i < 10; i++) {

        document.getElementById(i).style.color = "#1EBCE0"
      }
      document.getElementById("hello").innerHTML = "X win last game, try one more time";
      document.getElementById("hello").style.color = "#1EBCE0";
    }

    if (result === 30 && choice === 'O') {
      for (let i = 1; i < 10; i++) {

        document.getElementById(i).style.color = "#E12163"
      }
      document.getElementById("hello").innerHTML = "O win last game, try one more time";
      document.getElementById("hello").style.color = "#E12163";
    }
  }

}

function majordiagnol() {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += table[i][i];
  }

  if (result === 3) {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#1EBCE0"
    }
    document.getElementById("hello").innerHTML = "X win last game, try one more time";
    document.getElementById("hello").style.color = "#1EBCE0";
  }

  if (result === 30) {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#E12163"
    }
    document.getElementById("hello").innerHTML = "O win last game, try one more time";
    document.getElementById("hello").style.color = "#E12163";
  }
}

function minordiagnol() {
  let result = 0;
  for (let i = table[0].length - 1; i >= 0; i--) {
    var j = i == 2 ? 0 : i == 1 ? 1 : 2
    result += table[i][j];
    if (result === 3) {
      for (let i = 1; i < 10; i++) {

        document.getElementById(i).style.color = "#1EBCE0"
      }
      document.getElementById("hello").innerHTML = "X win last game, try one more time";
      document.getElementById("hello").style.color = "#1EBCE0";
    }

    if (result === 30) {
      for (let i = 1; i < 10; i++) {

        document.getElementById(i).style.color = "#E12163"
      }
      document.getElementById("hello").innerHTML = "O win last game, try one more time";
      document.getElementById("hello").style.color = "#E12163";
    }

  }


}



function clicker(div) {
  let id = document.getElementById(div).id;
  if (document.getElementById(div).innerText === "#") {
    document.getElementById(div).innerHTML = choice;
    if (choice === "X") {
      document.getElementById(div).style.color = "#1EBCE0";
    } else if (choice === "O") {
      document.getElementById(div).style.color = "#E12163";
    }

    switch (id) {
      case "1": {
        if (choice === "X") { table[0][0] = 1; }
        if (choice === "O") { table[0][0] = 10; }
        break;
      }

      case "2": {
        if (choice === "X") { table[0][1] = 1; }
        if (choice === "O") { table[0][1] = 10; }
        break;
      }

      case "3": {
        if (choice === "X") { table[0][2] = 1; }
        if (choice === "O") { table[0][2] = 10; }
        break;
      }
      case "4": {
        if (choice === "X") { table[1][0] = 1; }
        if (choice === "O") { table[1][0] = 10; }
        break;
      }

      case "5": {
        if (choice === "X") { table[1][1] = 1; }
        if (choice === "O") { table[1][1] = 10; }
        break;
      }

      case "6": {
        if (choice === "X") { table[1][2] = 1; }
        if (choice === "O") { table[1][2] = 10; }
        break;
      }

      case "7": {
        if (choice === "X") { table[2][0] = 1; }
        if (choice === "O") { table[2][0] = 10; }
        break;
      }
      case "8": {
        if (choice === "X") { table[2][1] = 1; }
        if (choice === "O") { table[2][1] = 10; }
        break;
      }
      case "9": {
        if (choice === "X") { table[2][2] = 1; }
        if (choice === "O") { table[2][2] = 10; }
      }
    }

    console.log(table)

    checkHorizontal();
    checkVertical();
    majordiagnol();
    minordiagnol();

    if (choice === "X") {
      choice = "O";
    } else if (choice === "O") {
      choice = "X";
    }
  }

}

function reset() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).style.color = "gray";
    document.getElementById(i).innerHTML = '#';

  }
  table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  choice = 'X';

}