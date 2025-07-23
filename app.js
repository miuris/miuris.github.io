const ipaddressInput = document.querySelector('.ipaddress-input input');
const arrowBtn = document.getElementById('arrowBtn');
const ipText = document.getElementById('ip');
const locationText = document.getElementById('location');
const timezoneText = document.getElementById('Timezone');
const ispText = document.getElementById('isp');

let map = L.map('map').setView([35.2923513, -81.5356463], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);
let marker;
