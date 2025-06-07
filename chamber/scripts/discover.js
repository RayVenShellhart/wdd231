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
const url = "json/olympia.json"
const cards = document.querySelector('#cards')

const getInterest = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.olympia);
        displayInterest(data.olympia);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getInterest();

const displayInterest = (olympia) => {
    olympia.forEach(oly => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let desc = document.createElement('p');
        let location = document.createElement('div');
        let button = document.createElement('button');
        let img = document.createElement('img');

        name.textContent = `${oly.name}`;
        desc.innerHTML = `${oly.description}`;
        location.innerHTML = `${oly.address}`;
        button.innerHTML = `Learn More`;

        img.setAttribute('src', oly.imageUrl);
        img.setAttribute('alt', oly.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300px');
        img.setAttribute('height', '200px');

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(desc);
        card.appendChild(location);
        card.appendChild(button);

        cards.appendChild(card);
    })
    
}









// hamburger

const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// visits

const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

if (numVisits !== 1) {
    visitsDisplay.textContent = `You have visited ${numVisits} times`;
} else {
    visitsDisplay.textContent = `This is your first visit. YAY!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


//
const daysSince = document.querySelector('#timestamp')
const lastVisit = localStorage.getItem('lastVisit')

function lastDay() {
    if (!lastVisit) {
        localStorage.setItem('lastVisit', new Date(Date.now()));
        console.log("no date yet")
        return;
    }
    const lastDate = new Date(lastVisit);
    const current = new Date(Date.now);

    const difference = ((Date.now() - lastDate) / 86400000).toFixed(0);

    if (difference < 1) {
        daysSince.innerHTML = `Back so soon! Awesome!`;
        console.log(difference);
    }
    else if (difference < 2) {
        daysSince.innerHTML = `You visited ${difference} day ago`;
        console.log(difference);
    }
    else if (difference > 1) {
        daysSince.innerHTML = `You visted ${difference} days ago`;
        console.log(difference);
    }
}

lastDay();