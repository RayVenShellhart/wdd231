// footer content

export function lastModifiedTime() {
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
}
// hamburger

export function hamburgerButton() {
    const mainnav = document.querySelector('#animate-me')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hambutton.classList.toggle('open');
    });
}