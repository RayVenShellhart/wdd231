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

let timeNow = document.querySelector("#timestamp");
let date = new Date
const formatted = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: "numeric",
    hour: '2-digit',
    minute: '2-digit'
})
const fullDate = formatted.format(date);
timeNow.value = fullDate;



function getData() {
    let email = document.getElementById("email").value;
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let number = document.querySelector("#tel").value;
    let timestamp = document.querySelector("#timestamp").value;
    localStorage.setItem("emailInfo", email);
    localStorage.setItem("firstInfo", firstName);
    localStorage.setItem("lastInfo", lastName);
    localStorage.setItem("numberInfo", number);
    localStorage.setItem("time", timestamp);
}

getData();







// hamburger

const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});