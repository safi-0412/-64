
// let count = 0;
// let displayTag = document.createElement('h1');
// document.body.appendChild(displayTag);

// setInterval(() => {
//     count += 1;
//     console.log(count);
//     displayTag.textContent = count;
// }, 1000);

// const timer = new Date();
// console.log(timer.getHours());
// console.log(timer.getMinutes());
// console.log(timer.getSeconds());

let soat = document.querySelector("#hours");
let daqiqa = document.querySelector("#minutes");
let secund = document.querySelector("#seconds");

function time () {
    let now = new Date();

    soat.textContent = String(now.getHours()).padStart(2 , "0");
    daqiqa.textContent = String(now.getMinutes()).padStart(2 , "0");
    secund.textContent = String(now.getSeconds()).padStart(2 , "0");
}

setInterval(time, 1000);
