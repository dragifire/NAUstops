const map = L.map('map', {zIndex: -1, zoomControl: false, attributionControl: false}).setView([35.18782, -111.6528], 14);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, zIndex: -1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

const marker1 = L.marker([35.17814395416947, -111.65254952946732]).bindPopup("Pine Ridge");
const marker2 = L.marker([35.17553940892971, -111.65634217301437]).bindPopup("Forestry");
const marker3 = L.marker([35.176758374019876, -111.65918924264419]).bindPopup("South Commuter");
const marker4 = L.marker([35.178735877081905, -111.65821828298084]).bindPopup("SBS");
const marker5 = L.marker([35.18287403636424, -111.65694648325938]).bindPopup("Campus Heights");
const marker6 = L.marker([35.18639420920059, -111.65698458227844]).bindPopup("Tinsley Hall");
const marker7 = L.marker([35.18899587749302, -111.65712033616087]).bindPopup("Knoles Union");
const marker8 = L.marker([35.19235402917077, -111.65670191155453]).bindPopup("Old Main");
const marker9 = L.marker([35.19347523316377, -111.65288598717972]).bindPopup("Centennial");
const marker10 = L.marker([35.19128664929352, -111.65327624200957]).bindPopup("Bio Science");
const marker11 = L.marker([35.18822988441976, -111.65441093531864]).bindPopup("Transit Spine Union");
const marker12 = L.marker([35.17997067729946, -111.65097718626353]).bindPopup("Skydome");

const louie = L.layerGroup([marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11, marker12]);
const jacks = L.layerGroup([]);

const overlays = {
    "Louie" : louie,
    "Jacks" : jacks
}

L.control.layers(null, overlays).addTo(map);