let screen = document.querySelector(".calculator_screen");
let btnClicks = document.querySelectorAll("#btnClick");
let AC = document.querySelector("#AC");
let CE = document.querySelector("#CE");
let equally = document.querySelector("#equally");
let history = document.querySelector("#history");

for(let i of btnClicks) {
    i.addEventListener('click', () => {
        screen.innerHTML += i.innerHTML;
    });
}

AC.addEventListener('click', () => {
    screen.innerHTML = "";
});

CE.addEventListener('click', () => {
    let str = screen.innerHTML;
    screen.innerHTML = str.substring(0, str.length - 1);
 
});

equally.addEventListener('click', () => {
    if(screen.innerHTML !== "") {
        history.innerHTML += '</br>' + screen.innerHTML;
        screen.innerHTML = eval(screen.innerHTML);
        history.innerHTML += "=" + screen.innerHTML;
    } else {
        alert("данных нет");
    }
});



