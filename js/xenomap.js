/*

...

*/

var xenoMap = {
  setup: function() {
    this.map = L.map('map', {
      maxZoom: 18, minZoom: 18,
      crs: L.CRS.Simple
    });

    /* using pregenerated tiles */
    L.tileLayer('map/map_{x}_{y}.png', {
      // attribution: '...',
    }).addTo(this.map);

    /* expected image has size 4250x4250 */
    var southWest = this.map.unproject([0, 1152], this.map.getMaxZoom());
    var northEast = this.map.unproject([2049, 0], this.map.getMaxZoom());
    this.map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

    this.controls = L.control.layers({}, {}).addTo(this.map);
  },

  addLayer: function(label, data) {
    data = data.map(function(marker) {
      if(!marker.coords) {
        // console.log('no coords found for '+marker.name);
        marker.coords = [0, 0]; /* TODO log and hide data without coords? */
      }
      var coords = xenoMap.map.unproject(marker.coords, xenoMap.map.getMaxZoom());
      return L.marker(coords, { title: marker.name }).bindPopup(marker.name);
    });
    data = L.layerGroup(data);
    this.controls.addOverlay(data, label);
  }
};


