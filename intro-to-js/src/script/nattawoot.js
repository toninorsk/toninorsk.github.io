function askMyName() {
    const name = prompt("What is your name?"); 

    if (name != null) {
        document.getElementById("yourName").innerHTML = "My name is " + name;
    }
}

function helloWorld() {
    const h1message =  document.getElementById("yourName").innerHTML;
    alert(h1message + 'โหลด เตี้ย เพราะ เมีย หนัก')
}