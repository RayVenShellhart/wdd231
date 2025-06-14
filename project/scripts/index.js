// basic content

// footer content
const year = document.querySelector("#year")

const today = new Date();
const short = document.querySelector("#short");

currentyear.innerHTML = `<span class="highlight">\u00A9${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<p id="lastModified">Last Modified: ${new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).format(nLastModif)}</p>`;
// hamburger

const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});


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