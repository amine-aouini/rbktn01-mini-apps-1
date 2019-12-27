const getId = document.getElementById;
let choice = "X";

function checkHorizontal() {
  if (document.getElementById(1).innerText === "X" && document.getElementById(2).innerText === "X" && document.getElementById(3).innerText === "X" || document.getElementById(4).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(6).innerText === "X" || document.getElementById(7).innerText === "X" && document.getElementById(8).innerText === "X" && document.getElementById(9).innerText === "X") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#1EBCE0"
    }
    document.getElementById("hello").innerHTML = "X win last game, try one more time";
    document.getElementById("hello").style.color = "#1EBCE0";
  }

  if (document.getElementById(1).innerText === "O" && document.getElementById(2).innerText === "O" && document.getElementById(3).innerText === "O" || document.getElementById(4).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(6).innerText === "O" || document.getElementById(7).innerText === "O" && document.getElementById(8).innerText === "O" && document.getElementById(9).innerText === "O") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#E12163"
    }
    document.getElementById("hello").innerHTML = "O win last game, try one more time";
    document.getElementById("hello").style.color = "#E12163";

  }
}

function checkVertical() {
  if (document.getElementById(1).innerText === "X" && document.getElementById(4).innerText === "X" && document.getElementById(7).innerText === "X" || document.getElementById(8).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(2).innerText === "X" || document.getElementById(9).innerText === "X" && document.getElementById(6).innerText === "X" && document.getElementById(3).innerText === "X") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#1EBCE0"

    }
    document.getElementById("hello").innerHTML = "X win last game, try one more time";
    document.getElementById("hello").style.color = "#1EBCE0";
  }

  if (document.getElementById(1).innerText === "O" && document.getElementById(4).innerText === "O" && document.getElementById(1).innerText === "O" || document.getElementById(8).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(2).innerText === "O" || document.getElementById(9).innerText === "O" && document.getElementById(6).innerText === "O" && document.getElementById(3).innerText === "O") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#E12163"

    }
    document.getElementById("hello").innerHTML = "O win last game, try one more time";
    document.getElementById("hello").style.color = "#E12163";
  }
}

function majordiagnol() {
  if (document.getElementById(7).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(3).innerText === "X") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#1EBCE0"

    }
    document.getElementById("hello").innerHTML = "X win last game, try one more time";
    document.getElementById("hello").style.color = "#1EBCE0";
  }

  if (document.getElementById(7).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(3).innerText === "O") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#E12163"

    }
    document.getElementById("hello").innerHTML = "O win last game, try one more time";
    document.getElementById("hello").style.color = "#E12163";
  }
}

function minordiagnol() {
  if (document.getElementById(1).innerText === "X" && document.getElementById(5).innerText === "X" && document.getElementById(9).innerText === "X") {
    for (let i = 1; i < 10; i++) {

      document.getElementById(i).style.color = "#1EBCE0"

    }
    document.getElementById("hello").innerHTML = "X win last game, try one more time";
    document.getElementById("hello").style.color = "#1EBCE0";
  }

  if (document.getElementById(1).innerText === "O" && document.getElementById(5).innerText === "O" && document.getElementById(9).innerText === "O") {
    for (let i = 1; i < 10; i++) {
      document.getElementById(i).style.color = "#E12163"

    }
    document.getElementById("hello").innerHTML = "O win last game, try one more time";
    document.getElementById("hello").style.color = "#E12163";
  }
}


function clicker(div) {
  if (document.getElementById(div).innerText === "#") {
    document.getElementById(div).innerHTML = choice;
    if (choice === "X") {
      document.getElementById(div).style.color = "#1EBCE0";
    } else if (choice === "O") {
      document.getElementById(div).style.color = "#E12163";
    }
    checkHorizontal();
    checkVertical();
    minordiagnol();
    majordiagnol();

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
  choice = 'X';

}