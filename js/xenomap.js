/*

...

*/

var xenoMap = {
  setup: function() {
    this.map = L.map('map', {
      maxZoom: 18, minZoom: 16,
      crs: L.CRS.Simple
    });

    /* using pregenerated tiles */
    L.tileLayer('map/{z}/map_{x}_{y}.png', {
      // attribution: '...',
    }).addTo(this.map);

    /* expected image has size 4250x4250 */
    var southWest = this.map.unproject([0, 4250], this.map.getMaxZoom());
    var northEast = this.map.unproject([4250, 0], this.map.getMaxZoom());
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
      /* FIXME: quick hack as demonstration, fix to useful content */
      var popup  = marker.name;
      if(marker.link) {
        popup = '<a href="'+marker.link+'">'+popup+'</a>';
      } else {
        popup = '<h4>'+popup+'</h4>';
        popup += '<p style="font-size: smaller;">';
        for(prop in marker) {
          popup += prop+': "'+marker[prop]+'" ';
        }
        popup += '</p>';
      }
      return L.marker(coords, { title: marker.name }).bindPopup(popup);
    });
    data = L.layerGroup(data);
    this.controls.addOverlay(data, label);
  }
};


