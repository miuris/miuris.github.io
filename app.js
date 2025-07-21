const map = L.map('map').setView([51.505, -0.09], 13);
const tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
const firstTile=L.tileLayer(tileLayer,attribution)
firstTile.addTo(map)
let marker = L.marker([51.505, -0.09])
marker.addTo(map)