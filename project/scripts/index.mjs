

import { hamburgerButton,  lastModifiedTime} from "./common.mjs";

hamburgerButton();
lastModifiedTime();


// module

const extra = document.querySelector("#extra")

function displayOledExtra() {

    document.querySelector("#oled").addEventListener('click', () => {
        displayOledExtraDetails();
    })
}
displayOledExtra();

function displayLedExtra() {
    document.querySelector("#led").addEventListener('click', () => {
        displayLedExtraDetails();
    })
}
displayLedExtra();

function displayLcdExtra() {
    document.querySelector("#lcd").addEventListener('click', () => {
        displayLcdExtraDetails();
    })
}
displayLcdExtra();

function displayOledExtraDetails() {
    extra.innerHTML = '';
    extra.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>KeyFeatures</h2>
        <p>Perfect black levels</p>
        <p>Superior contrast</p>
        <p>Fast response time</p>
        <p>Vivid colors</p>
        <p>Energy effiecent due to lack of backlight</p>
    `;
    extra.showModal()

    closeModal.addEventListener("click", () => {
        extra.close();
    })

};

function displayLedExtraDetails() {
    extra.innerHTML = '';
    extra.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>KeyFeatures</h2>
        <p>Thinner and more energy efficient compared to other LCDs</p>
        <p>Good brightness and contrast</p>
        <p>Better color</p>
    `;
    extra.showModal()

    closeModal.addEventListener("click", () => {
        extra.close();
    })
};

function displayLcdExtraDetails() {
    extra.innerHTML = '';
    extra.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>KeyFeatures</h2>
        <p>Slim</p>
        <p>Light</p>
        <p>Energy efficent</p>
        <p>Affordable</p>
    `;
    extra.showModal()

    closeModal.addEventListener("click", () => {
        extra.close();
    })



};