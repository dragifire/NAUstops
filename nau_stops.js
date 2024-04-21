const bounds = [[35.19509477271809, -111.65855721301321], [35.17236999292436, -111.6480326985566]]
const map = L.map('map', {maxBounds: bounds, minZoom: 13, zIndex: -1, zoomControl: false}).setView([35.18782, -111.6528], 14);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, zIndex: -1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

// Jacks line (colored yellow)
var jacksList = [
    marker1 = L.marker([35.17814395416947, -111.65254952946732]).bindPopup("Pine Ridge<br/>Next Bus: 7m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker2 = L.marker([35.17553940892971, -111.65634217301437]).bindPopup("Forestry</br>Next Bus: 3m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker3 = L.marker([35.176758374019876, -111.65918924264419]).bindPopup("South Commuter<br/>Next Bus: 2m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker4 = L.marker([35.178735877081905, -111.65821828298084]).bindPopup("SBS<br/>Next Bus: 3m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker5 = L.marker([35.18287403636424, -111.65694648325938]).bindPopup("Campus Heights<br/>Next Bus: 4m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker6 = L.marker([35.18639420920059, -111.65698458227844]).bindPopup("Tinsley Hall<br/>Next Bus: 7m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker7 = L.marker([35.18899587749302, -111.65712033616087]).bindPopup("Knoles Union<br/>Next Bus: 3m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker8 = L.marker([35.19235402917077, -111.65670191155453]).bindPopup("Old Main<br/>Next Bus: 5m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker9 = L.marker([35.19347523316377, -111.65288598717972]).bindPopup("Centennial<br/>Next Bus: 4m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker10 = L.marker([35.19128664929352, -111.65327624200957]).bindPopup("Bio Science<br/>Next Bus: 7m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker11 = L.marker([35.18822988441976, -111.65441093531864]).bindPopup("Transit Spine Union<br/>Next Bus: 3m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker12 = L.marker([35.17997067729946, -111.65097718626353]).bindPopup("Skydome<br/>Next Bus: 2m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
];

jacksList.forEach((jacksMarker) => jacksMarker.setIcon(L.divIcon({className: "dot-yellow"})));


// Louie line (colored blue)
var louieList = [
    marker13 = L.marker([35.177156448705965, -111.65408819716697]).bindPopup("Mconnell Hall<br/>Next Bus: 4m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker14 = L.marker([35.18013854253613, -111.6507922442267]).bindPopup("San Francisco<br/>Next Bus: 6m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker15 = L.marker([35.1885705573119, -111.65414904852096]).bindPopup("Bookstore<br/>Next Bus: 3m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker16 = L.marker([35.191440816484686, -111.6531363084861]).bindPopup("Bio Science<br/>Next Bus: 7m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker17 = L.marker([35.19367638627814, -111.6532535464701]).bindPopup("Print Shop<br/>Next Bus: 2m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker18 = L.marker([35.19254943729683, -111.65673864517328]).bindPopup("Geology<br/>Next Bus: 5m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker19 = L.marker([35.18844597170686, -111.65718974330227]).bindPopup("Ardery Auditorium<br/>Next Bus: 7m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker20 = L.marker([35.18532150407906, -111.6574424695362]).bindPopup("Applied Research & Development<br/>Next Bus: 5m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker21 = L.marker([35.1823840427844, -111.65694220721862]).bindPopup("Gabaldon<br/>Next Bus: 2m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker22 = L.marker([35.178587071368476, -111.65818647202283]).bindPopup("SBS<br/>Next Bus: 4m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker23 = L.marker([35.17690009265183, -111.65951600604863]).bindPopup("South Commuter<br/>Next Bus: 7m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker24 = L.marker([35.17528211188283, -111.656502147603]).bindPopup("South Village<br/>Next Bus: 3m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
];

louieList.forEach((louieMarker) => louieMarker.setIcon(L.divIcon({className: "dot-blue"})));

const louie = L.layerGroup(louieList);
const jacks = L.layerGroup(jacksList);

const overlays = {
    "Louie" : louie,
    "Jacks" : jacks
};

L.control.layers(null, overlays).addTo(map);