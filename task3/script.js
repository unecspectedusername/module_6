const trafficLights = document.querySelectorAll('.light');
const topLight = document.querySelector('#light__top');
const middleLight = document.querySelector('#light__middle');
const bottomLight = document.querySelector('#light__bottom');

function makeGreen() {
    bottomLight.style.background = ('#3d4b5e');
    topLight.style.background = ('#89dac4');
    changeColor(makeGreen, makeYellow);
}

function makeYellow() {
    topLight.style.background = ('#3d4b5e');
    middleLight.style.background = ('#ffdc7b');
    changeColor(makeYellow, makeRed);
}

function makeRed () {
    middleLight.style.background = ('#3d4b5e');
    bottomLight.style.background = ('#e2725c');
    changeColor(makeRed, makeGreen);
}

function changeColor (currentFunc, nextFunc) {
    trafficLights.forEach(element => {
        element.removeEventListener('click', currentFunc);
        element.addEventListener('click', nextFunc);
    });
}

trafficLights.forEach(element => {
    element.addEventListener('click', makeGreen);
});