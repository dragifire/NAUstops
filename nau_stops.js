const map = L.map('map', {zIndex: -1, zoomControl: false, attributionControl: false}).setView([35.18782, -111.6528], 14);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, zIndex: -1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

const marker1 = L.marker([35.18639420920059, -111.65698458227844]).addTo(map);
marker1.bindPopup("Tinsley Hall");

const marker13 = L.marker([35.177156448705965, -111.65408819716697]).bindPopup("Mconnel Hall");
const marker14 = L.marker([35.18013854253613, -111.6507922442267]).bindPopup("San Francisco");
const marker15 = L.marker([35.1885705573119, -111.65414904852096]).bindPopup("Bookstore");
const marker16 = L.marker([35.191440816484686, -111.6531363084861]).bindPopup("Bio Science");
const marker17 = L.marker([35.19367638627814, -111.6532535464701]).bindPopup("Print Shop");
const marker18 = L.marker([35.19254943729683, -111.65673864517328]).bindPopup("Geology");
const marker19 = L.marker([35.18844597170686, -111.65718974330227]).bindPopup("Ardery Auditorium");
const marker20 = L.marker([35.18532150407906, -111.6574424695362]).bindPopup("Applied Research & Development");
const marker21 = L.marker([35.1823840427844, -111.65694220721862]).bindPopup("Gabaldon");
const marker22 = L.marker([35.178587071368476, -111.65818647202283]).bindPopup("SBS");
const marker23 = L.marker([35.17690009265183, -111.65951600604863]).bindPopup("South Commuter");
const marker24 = L.marker([35.17528211188283, -111.656502147603]).bindPopup("South Village");
