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

const url = "json/members.json";
const cards = document.querySelector("#cards");

const getCompanyData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.companies);
        displayCompany(data.companies);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getCompanyData();

const displayCompany = (companies) => {
    companies.forEach(company => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let phoneNum = document.createElement("p");
        let compUrl = document.createElement("p");
        let compAddress = document.createElement("p");
        let membershipLevel = document.createElement("p");
        let content = document.createElement("div");

        content.setAttribute('class', 'compInfo');

        name.textContent = `${company.name}`;
        compAddress.innerHTML = `Address ${company.address}`;
        phoneNum.innerHTML = `Phone: ${company.phone}`;
        compUrl.innerHTML = `<a href="${company.url}">Site</a>`;
        membershipLevel.innerHTML = `Member Level: ${company.membership}`;

        portrait.setAttribute('src', company.imageUrl);
        portrait.setAttribute('alt', `company image`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(portrait);
        content.appendChild(phoneNum);
        content.appendChild(compUrl);
        content.appendChild(compAddress);
        content.append(membershipLevel);
        card.append(content);
        cards.appendChild(card);
    });
}

// hamburger

const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// List and grid

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}