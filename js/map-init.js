/*

...

*/

var xenoMap = {
  init: function() {
    this.map = L.map('map', {
      maxZoom: 18, minZoom: 18,
      crs: L.CRS.Simple
    }).setView([0, 0], 18);

    /* using pregenerated tiles */
    L.tileLayer('map/map_{x}_{y}.png', {
      // attribution: '...',
    }).addTo(this.map);

    /* expected image has size 2049x1152 */
    var southWest = this.map.unproject([0, 1152], this.map.getMaxZoom());
    var northEast = this.map.unproject([2049, 0], this.map.getMaxZoom());
    this.map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
  },

  addLayer: function(label, data) {
    // TODO
  },

  setView: function(coords) {
    this.map.setView(coords);
  }
};


