const map = L.map('map').setView([51.505, -0.09], 13);
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



/* eventlistenner function */
