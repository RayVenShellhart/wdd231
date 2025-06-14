

mail = document.querySelector("#mail");
fName = document.querySelector('#first');
lName = document.getElementById('last');
num = document.querySelector('#phone');
timeInfo = document.querySelector('#time');

mail.innerHTML = localStorage.getItem("emailInfo");
fName.innerHTML = localStorage.getItem('firstInfo');
lName.innerHTML = localStorage.getItem('lastInfo');
num.innerHTML = localStorage.getItem('numberInfo');
timeInfo.innerHTML = localStorage.getItem('time');

