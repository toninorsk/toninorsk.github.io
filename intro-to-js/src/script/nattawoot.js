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

function calAge() {
    const birthYear = prompt("When is your birth year?");
    const numBirthYear = Number(birthYear);
    const text = "Congrat, you have been here in this country for";
    const age = 2022 - numBirthYear;
    alert(`${text} ${age}` + " years");
}

function loadProfile() {
    const name "Nattawoot";
    const province = "Ratchaburi";

    document.getElementById('my-name').innerHTML = name;
    document.getElementById('my-province').innerHTML = province;
}