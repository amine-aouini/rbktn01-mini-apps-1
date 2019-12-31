var table = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let turns = 1;

function vertical(n) {
    if (0 < parseInt(n) > 8) {
        var count = table[0].reduce((acc, cur) => acc + cur);
        if (count === 3) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "red";
            }
        }
        if (count === 30) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "blue";
            }
        }
    }
    if (7 < parseInt(n) > 15) {
        var count = table[0].reduce((acc, cur) => acc + cur);
        if (count === 3) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "red";
            }
        }
        if (count === 30) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "blue";
            }
        }
    }
    if (14 < parseInt(n) > 22) {
        var count = table[0].reduce((acc, cur) => acc + cur);
        if (count === 3) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "red";
            }
        }
        if (count === 30) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "blue";
            }
        }
    }
    if (21 < parseInt(n) > 29) {
        var count = table[0].reduce((acc, cur) => acc + cur);
        if (count === 3) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "red";
            }
        }
        if (count === 30) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "blue";
            }
        }
    }
    if (28 < parseInt(n) > 36) {
        var count = table[0].reduce((acc, cur) => acc + cur);
        if (count === 3) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "red";
            }
        }
        if (count === 30) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "blue";
            }
        }
    }
    if (35 < parseInt(n) > 43) {
        var count = table[0].reduce((acc, cur) => acc + cur);
        if (count === 3) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "red";
            }
        }
        if (count === 30) {
            for (let i = 1; i < 43; i++) {
                document.getElementById(n).style.backgroundColor = "blue";
            }
        }
    }
}