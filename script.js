const hora = document.querySelector('.hora');
const min = document.querySelector('.min');
const seg = document.querySelector('.seg');


function reloj() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hora.innerText = hour;
    min.innerText = minutes;
    seg.innerText = seconds;
    setTimeout('reloj()',1000);
}

