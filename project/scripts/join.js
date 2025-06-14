// footer content
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