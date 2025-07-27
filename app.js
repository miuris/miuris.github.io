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

// y-email //
const API_KEY = 'at_Lsjuirp0unQn9NQXImVC4UHMKpgWJ&'; 

//Function that gets the IP information from API//
async function getIpInfo(ipAddress = '') {
  try {
    const url = ipAddress 
      ? `https://geo.ipify.org/api/v2/country,city?apiKey=at_Lsjuirp0unQn9NQXImVC4UHMKpgWJ&ipAddress=8.8.8.8`
      : `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch IP information');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching IP info:', error);
    alert('Error fetching IP information. Please try again.');
    return null;
  }
}
