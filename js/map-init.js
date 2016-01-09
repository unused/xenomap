
/* expected image has size 2049x1152 */

var map = L.map('map', {
  maxZoom: 18,
  minZoom: 18,
  crs: L.CRS.Simple
}).setView([0, 0], 18);

/* using pregenerated tiles */
L.tileLayer('map/map_{x}_{y}.png', {
  // attribution: '...',
}).addTo(map);

var southWest = map.unproject([0, 1152], map.getMaxZoom());
var northEast = map.unproject([2049, 0], map.getMaxZoom());
map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

