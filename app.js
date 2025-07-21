const map = L.map('map').setView([51.505, -0.09, 13]);
const tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
const firstTile=L.tileLayer(tileLayer,attribution)
firstTile.addTo(map)
let marker = L.marker([51.505, -0.09])
marker.addTo(map)

/* fetch function*/
function showIPInfo(ip = '') {
    const apiKey = 'live_o7ttAKUo3nsruHxzx0rtRwLpBB0D2x6713LJMTwndnwiom17LiHWGfbQWFWaEVBX';
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    
    
const response = fetch(url);
const info = response.json();

console.log(info);
}



/* display function */
function updateDisplayAndMap(data) {
const titles = document.getElementsByClassName('pl-title');
const infos = document.getElementsByClassName('info');

/* this section takes the indexes and updates info displayed*/

infos[0].textContent = data.ip;
infos[1].textContent = data.location;
infos[2].textContent = data.timezone;
infos[3].textContent = data.isp;

if (data.lat && data.lng) {
    map.setView([data.lat, data.lng], 13);
    marker.setLatLng([data.lat, data.lng]);
}
}


/* eventlistenner function */
const input = document.querySelector('.ipaddress-input input');
const button = document.querySelector('.arrowBtn');

button.addEventListener('click', function(e) {
    e.preventDefault();
    const ip = input.value.trim();
    if (!ip) return alert('Please enter a valid IP Address.');

    showIPInfo(ip);
});

/* this code didn't execute. 
document.getElementsByClassName('ipaddress-input').addEventListener(onclick, e)
    e.preventDefault();
    const ip = document.getElementsByClassName('icon-arrow').value.trim();
    if (!ip) return alert('Please enter valid IP Address.');
    const info = fetchshowIPInfo(ip);
    if (info) updateDisplayAndMap(info);
;

showIPInfo(ip);