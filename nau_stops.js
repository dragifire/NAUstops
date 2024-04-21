const bounds = [[35.19509477271809, -111.65855721301321], [35.17236999292436, -111.6480326985566]]
const map = L.map('map', {maxBounds: bounds, minZoom: 13, zIndex: -1, zoomControl: false}).setView([35.18782, -111.6528], 14);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, zIndex: -1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

// Jacks line (colored yellow)
var jacksList = [
    marker1 = L.marker([35.17814395416947, -111.65254952946732]).bindPopup("Pine Ridge<br/>Next Bus: 1m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker2 = L.marker([35.17553940892971, -111.65634217301437]).bindPopup("Forestry</br>Next Bus: 1m<br/>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker3 = L.marker([35.176758374019876, -111.65918924264419]).bindPopup("South Commuter<br/>Next Bus: 2m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker4 = L.marker([35.178735877081905, -111.65821828298084]).bindPopup("SBS<br/>Next Bus: 2m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker5 = L.marker([35.18287403636424, -111.65694648325938]).bindPopup("Campus Heights<br/>Next Bus: 4m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker6 = L.marker([35.18639420920059, -111.65698458227844]).bindPopup("Tinsley Hall<br/>Next Bus: 4m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker7 = L.marker([35.18899587749302, -111.65712033616087]).bindPopup("Knoles Union<br/>Next Bus: 5m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker8 = L.marker([35.19235402917077, -111.65670191155453]).bindPopup("Old Main<br/>Next Bus: 6m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker9 = L.marker([35.19347523316377, -111.65288598717972]).bindPopup("Centennial<br/>Next Bus: 6m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker10 = L.marker([35.19128664929352, -111.65327624200957]).bindPopup("Bio Science<br/>Next Bus: 7m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker11 = L.marker([35.18822988441976, -111.65441093531864]).bindPopup("Transit Spine Union<br/>Next Bus: 7m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker12 = L.marker([35.17997067729946, -111.65097718626353]).bindPopup("Skydome<br/>Next Bus: 7m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    path1 = L.geoJSON({"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[-111.65258369039681,35.178039946432875],[-111.65388758015699,35.177446512583685],[-111.65453952503728,35.17698629559639],[-111.65578414708114,35.176059798231734],
    [-111.65643609344632,35.175411848115516],[-111.6568806013191,35.17526045744731],[-111.65727324994033,35.175254401814186],[-111.6577399832065,35.17533918062988],[-111.65804373025281,35.17548451553618],[-111.65964507824428,35.17722843461071],[-111.65963766977954,35.17743432086681],[-111.65948209202399,35.17767653932357],[-111.65936355659136,35.178033810230815],[-111.65942282430767,35.178324470148794],[-111.65825228633953,35.17863934793198],[-111.65768183456939,35.17904505742557],[-111.65835251719253,35.17960655225947],[-111.65850068648372,35.17994564883497],[-111.65841919337359,35.18024235717863],[-111.65820434790174,35.180472456781075],[-111.65716633262704,35.18100702868844],
    [-111.6569366702261,35.181212905373926],[-111.6568181347935,35.18141878153794],[-111.6567509988958,35.181690499182494],[-111.65674359043149,35.18220518558999],[-111.65678063371291,35.1823603333434],[-111.65700288764909,35.182705473508804],[-111.6570028881208,35.18442499726797],[-111.6570320295181,35.18476731604021],[-111.65713574802207,35.1849368537393],[-111.65729873424192,35.18524565363968],[-111.65729589304567,35.18549813103316],[-111.65709586450289,35.18585536755988],[-111.65702901221913,35.186097705668104],[-111.65702160375481,35.1877022184582],[-111.65707821805113,35.188113592136304],[-111.65704117572822,35.18874933050522],[-111.6570777813646,35.190173942399596],[-111.65706296476986,35.19058499709607],
    [-111.65698888012447,35.19083323083436],[-111.6566406822905,35.19132364159985],[-111.65659623238777,35.191626362252904],[-111.65678144400147,35.19212887698288],[-111.6566777254975,35.19239526907373],[-111.65653689275224,35.1926764603632],[-111.65635908960331,35.19283387291598],[-111.65605534255701,35.19341508585288],[-111.65593898668403,35.19355611540924],[-111.65561301424388,35.1943068413286],[-111.65233847378437,35.19329577778633],[-111.65295451870949,35.19194890563334],[-111.65316195571701,35.191488770764664],[-111.6534680579449,35.190722329715314],[-111.65403110125028,35.18965067961177],[-111.65407080989742,35.18939977247497],[-111.65407821836173,35.189012278495866],[-111.65414489454281,35.18877009382099],
    [-111.65433751462082,35.18844919801438],[-111.65439678233712,35.1881767383165],[-111.65439678103033,35.18710505635579],[-111.65413748477123,35.185942536047406],[-111.65416711862939,35.185827494070836],[-111.65300398969568,35.1858517134478],[-111.65301027414885,35.18446017133326],[-111.65293904857877,35.18358786446052],[-111.65299090351554,35.18324790011347],[-111.65299831197987,35.18190367070579],[-111.65289370622375,35.181718160624655],[-111.65244919835095,35.181439623186705],[-111.65107269147968,35.18022347969395],[-111.65091224118507,35.17995717273456],[-111.650897424256,35.17918814821863],[-111.65067517031981,35.178733996464686],[-111.65256432877922,35.17803157008868]],"type":"LineString"}}]}, {style: function (geoJsonFeature) {
        return {color: 'yellow'}}})
];

jacksList.forEach((jacksMarker) => {if (jacksMarker !== path1) {jacksMarker.setIcon(L.divIcon({className: "dot-yellow"}))}});


// Louie line (colored blue)
var louieList = [
    marker13 = L.marker([35.177156448705965, -111.65408819716697]).bindPopup("Mconnell Hall<br/>Next Bus: 1m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker14 = L.marker([35.18013854253613, -111.6507922442267]).bindPopup("San Francisco<br/>Next Bus: 2m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker15 = L.marker([35.1885705573119, -111.65414904852096]).bindPopup("Bookstore<br/>Next Bus: 2m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker16 = L.marker([35.191440816484686, -111.6531363084861]).bindPopup("Bio Science<br/>Next Bus: 4m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker17 = L.marker([35.19367638627814, -111.6532535464701]).bindPopup("Print Shop<br/>Next Bus: 5m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker18 = L.marker([35.19254943729683, -111.65673864517328]).bindPopup("Geology<br/>Next Bus: 5m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker19 = L.marker([35.18844597170686, -111.65718974330227]).bindPopup("Ardery Auditorium<br/>Next Bus: 5m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker20 = L.marker([35.18532150407906, -111.6574424695362]).bindPopup("Applied Research & Development<br/>Next Bus: 6m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker21 = L.marker([35.1823840427844, -111.65694220721862]).bindPopup("Gabaldon<br/>Next Bus: 6m<br/>Traffic Conditions: Medium<br/>There May be Standing Room Only!"),
    marker22 = L.marker([35.178587071368476, -111.65818647202283]).bindPopup("SBS<br/>Next Bus: 6m<br/>Traffic Conditions: Heavy<br/>Standing Room Only<br/>Bus May be Full!"),
    marker23 = L.marker([35.17690009265183, -111.65951600604863]).bindPopup("South Commuter<br/>Next Bus: 7m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
    marker24 = L.marker([35.17528211188283, -111.656502147603]).bindPopup("South Village<br/>Next Bus: 7m</br>Traffic Conditions: Light<br/>Bus is Not Full!"),
];

louieList.forEach((louieMarker) => {if (louieMarker !== path2) {louieMarker.setIcon(L.divIcon({className: "dot-blue"}))}});

const louie = L.layerGroup(louieList);
const jacks = L.layerGroup(jacksList);

const overlays = {
    "Louie" : louie,
    "Jacks" : jacks
};

L.control.layers(null, overlays).addTo(map);