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


// array
const url = "json/product.json";
const cards = document.querySelector("#cards");

const all = document.querySelector("#all")
const above = document.querySelector("#a-400");
const below = document.querySelector("#b-400");
const asc = document.querySelector("#asc");
const desc = document.querySelector("#desc");

const getMonitorData = async () => {
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.monitors);
        displayMonitor(data.monitors);
        above.addEventListener("click", () => {
            cards.innerHTML = ""
            displayMonitor(data.monitors.filter(monitor => monitor.price > 400))
        })
        below.addEventListener("click", () => {
            cards.innerHTML = ""
            displayMonitor(data.monitors.filter(monitor => monitor.price <= 400))
        })
        all.addEventListener("click", () => {
            cards.innerHTML = ""
            displayMonitor(data.monitors)
        })
        asc.addEventListener("click", () => {
            cards.innerHTML = ""
            displayMonitor(data.monitors.sort(function (a, b) { return a.price - b.price }))
        })
        desc.addEventListener("click", () => {
            cards.innerHTML = ""
            displayMonitor(data.monitors.sort(function (a, b) { return b.price - a.price }))
        })
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    
}

getMonitorData();

const displayMonitor = (monitors) => {
    monitors.forEach(monitor => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let resultion = document.createElement('p');
        let size = document.createElement('p');
        let refresh = document.createElement('p');
        let rating = document.createElement('p');
        let link = document.createElement('a');
        let price = document.createElement('p')

        name.textContent = `${monitor.name}`;
        resultion.innerHTML = `Resolution: ${monitor.resolution}`;
        size.innerHTML = `Size: ${monitor.size}`;
        refresh.innerHTML = `Refresh: ${monitor.refresh}`;
        rating.innerHTML = `Rating: ${monitor.rating}`;
        link.href = `${monitor.link}`
        link.innerText = `Link`;
        price.innerHTML = `Price: ${monitor.price}`

        card.appendChild(name);
        card.appendChild(resultion);
        card.appendChild(size);
        card.appendChild(refresh);
        card.appendChild(rating);
        card.appendChild(link);
        card.appendChild(price);

        cards.appendChild(card);
    });
}

