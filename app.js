const map = L.map('map').setView([51.505, -0.09, 13]);
const tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
const firstTile=L.tileLayer(tileLayer,attribution)
firstTile.addTo(map)
let marker = L.marker([51.505, -0.09])
marker.addTo(map)


function showIPInfo(ip = '') {
    const apiKey = 'live_o7ttAKUo3nsruHxzx0rtRwLpBB0D2x6713LJMTwndnwiom17LiHWGfbQWFWaEVBX';
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    
    
const response = fetch(url);
const info = response.json();

console.log(info);
}

function updateDisplayAndMap(data) {
const titles = document.getElementsByClassName('pl-title');
const infos = document.getElementsByClassName('info');



infos[0].textContent = data.ip;
infos[1].textContent = data.location;
infos[2].textContent = data.timezone;
infos[3].textContent = data.isp;

if (data.lat && data.lng) {
    map.setView([data.lat, data.lng], 13);
    marker.setLatLng([data.lat, data.lng]);
}
}



const input = document.querySelector('.ipaddress-input input');
const button = document.querySelector('.arrowBtn');

button.addEventListener('click', function(e) {
    e.preventDefault();
    const ip = input.value.trim();
    if (!ip) return alert('Please enter a valid IP Address.');

    showIPInfo(ip);
});
