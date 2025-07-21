const map = L.map('map').setView([25.7617, 80.1918], 13);
const tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
const firstTile=L.tileLayer(tileLayer,attribution)
firstTile.addTo(map)
let marker = L.marker([25.7617, 80.1918])
marker.addTo(map)