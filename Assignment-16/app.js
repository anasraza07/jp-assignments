var screen = document.querySelector(".screen");

function showNumber(number) {
    screen.innerText += number;
}

function cut() {
    var strLength = screen.innerText.length;
    screen.innerText = screen.innerText.slice(0, strLength - 1);
}

function allClear() {
    screen.innerText = "";
}

function calculate() {
    var result = eval(screen.innerText);
    screen.innerText = result;
}