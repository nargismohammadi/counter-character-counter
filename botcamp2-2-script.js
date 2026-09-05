//  challenge-battle
let count = 0;
const countElement = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const resetBtn = document.getElementById("resetBtn");


increase.addEventListener("click", function () {

    count++;

    countElement.textContent = count;
});


decrease.addEventListener("click", function () {
    count--;
    countElement.textContent = count;

});


resetBtn.addEventListener("click", function () {
    count = 0;
    countElement.textContent = count;

});

const message = document.getElementById("message");

const charCount = document.getElementById("charCount");


message.addEventListener("input", function () {

    charCount.textContent = message.value.length;

});






