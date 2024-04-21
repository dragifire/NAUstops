const map = L.map('map', {zIndex: -1, zoomControl: false, attributionControl: false}).setView([35.18782, -111.6528], 14);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, zIndex: -1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

const marker1 = L.marker([35.18639420920059, -111.65698458227844]).addTo(map);
marker1.bindPopup("Tinsley Hall");