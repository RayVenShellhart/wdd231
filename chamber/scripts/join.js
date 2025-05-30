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

// array

const np = document.querySelector("#np-card");
const npDetails = document.querySelector("#np-details");
const bronze = document.querySelector("#bronze-card");
const bronzeDetails = document.querySelector("#bronze-details");
const silver = document.querySelector("#silver-card");
const silverDetails = document.querySelector("#silver-details");
const gold = document.querySelector("#gold-card");
const goldDetails = document.querySelector(("#gold-details"));

function displayNP() {
    let card = document.createElement('section');
    let name = document.createElement('h2');

    name.innerHTML = `<span class="memberLevel">No Payment</span>`

    document.querySelector("#np-card").addEventListener('click', () => {
        displayNpDetails();
    })

    card.append(name);
    document.querySelector("#np-card").appendChild(card)

}
displayNP();

function displayNpDetails() {
    npDetails.innerHTML = '';
    npDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>No Payment</h2>
        <h3>Benifits</h3>
        <p>Community Events</p>
        <p>Advertising</p>
        <p>Weekend Access to Pool</p>
    `;
    npDetails.showModal()

    closeModal.addEventListener("click", () => {
        npDetails.close();
    })



};

function displayBronze() {
    let card = document.createElement('section');
    let name = document.createElement('h2');

    name.innerHTML = `<span class="memberLevel">Bronze</span>`

    document.querySelector("#bronze-card").addEventListener('click', () => {
        displayBronzeDetails();
    })

    card.append(name);
    document.querySelector("#bronze-card").appendChild(card)

}
displayBronze();

function displayBronzeDetails() {
    npDetails.innerHTML = '';
    npDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>Bronze</h2>
        <h3>Benifits</h3>
        <p>Community Events</p>
        <p>Advertising</p>
        <p>Weekend Access to Pool</p>
        <p>Weekend Gym Access</p>
        <p>10.99$ a month</p>
    `;
    npDetails.showModal()

    closeModal.addEventListener("click", () => {
        npDetails.close();
    })



};


function displaySilver() {
    let card = document.createElement('section');
    let name = document.createElement('h2');

    name.innerHTML = `<span class="memberLevel">Silver</span>`

    document.querySelector("#silver-card").addEventListener('click', () => {
        displaySilverDetails();
    })

    card.append(name);
    document.querySelector("#silver-card").appendChild(card)

}
displaySilver();

function displaySilverDetails() {
    npDetails.innerHTML = '';
    npDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>Silver</h2>
        <h3>Benifits</h3>
        <p>Community Events</p>
        <p>Advertising</p>
        <p>Full Week Access to Pool</p>
        <p>Full Week Access to Gym</p>
        <p>24.99$ a month</p>
    `;
    npDetails.showModal()

    closeModal.addEventListener("click", () => {
        npDetails.close();
    })
};

function displayGold() {
    let card = document.createElement('section');
    let name = document.createElement('h2');

    name.innerHTML = `<span class="memberLevel">Gold</span>`

    document.querySelector("#gold-card").addEventListener('click', () => {
        displayGoldDetails();
    })

    card.append(name);
    document.querySelector("#gold-card").appendChild(card)

}
displayGold();


function displayGoldDetails() {
    npDetails.innerHTML = '';
    npDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>Gold</h2>
        <h3>Benifits</h3>
        <p>Community Events</p>
        <p>Advertising</p>
        <p>Full Week Access to Pool</p>
        <p>Full Week Access to Gym</p>
        <p>Access to private Events</p>
        <p>40.00$ a month<p/>
    `;
    npDetails.showModal()

    closeModal.addEventListener("click", () => {
        npDetails.close();
    })
};

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
    let businessName = document.querySelector("#organization-name").value;
    let timestamp = document.querySelector("#timestamp").value;
    localStorage.setItem("emailInfo", email);
    localStorage.setItem("firstInfo", firstName);
    localStorage.setItem("lastInfo", lastName);
    localStorage.setItem("numberInfo", number);
    localStorage.setItem("businessInfo", businessName);
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