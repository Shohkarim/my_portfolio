'use strict';
$(document).ready(function () {

    $("#knowMore").click(function () {
        $('.about-content')[0].scrollIntoView({behavior: "smooth", block: "center",});
    });
    $("#arrow").click(function () {
        $('.header')[0].scrollIntoView({behavior: "smooth", block: "center",});
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

});

const text = "Здравствуйте! Меня зовут Шохкарим. Я Frontend - разработчик.";
let i = 0;
const speed = 100; // Milliseconds per character

function typeWriter() {
    if (i < text.length) {
        document.getElementById("test").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
// Run the function on load
window.onload = typeWriter;