let ac = document.getElementById("ac");
let ce = document.getElementById("ce");
let equally = document.getElementById("equally");
let history = document.getElementById("history");
let buttons = document.querySelectorAll("#btn");
let screen = document.getElementById("outputScreen");

for(let btn of buttons) {
    btn.addEventListener('click', () => {
        screen.value += btn.innerHTML;
    });
}

ac.addEventListener('click', () => {
    screen.value = "";
    history.innerHTML = "";
});

ce.addEventListener('click', () => {
    let arr = screen.value;
    arr = arr.split("");
    arr.pop();
    screen.value = arr.join("");
});

equally.addEventListener('click', () => {
    let str = screen.value;
    let reg = /[0-9]+[\+\/\*\-][0-9]+$/;
    if(reg.test(str)){
        history.innerHTML = screen.value;
        screen.value = eval(screen.value);
        history.innerHTML += "=" + screen.value;
    }
    
    
});
