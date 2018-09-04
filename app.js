var clock = document.querySelector('.klocka');


function time () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var time = `The time is ${hours}:${minutes}:${seconds}`;
    clock.innerHTML = time;
};

setInterval(function () {
    time();
}, 1000);