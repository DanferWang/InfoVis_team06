/********************************************************/
/*                                                      */
/*  Reference:                                          */
/*  https://leafletjs.com/examples/choropleth/          */
/*                                                      */
/********************************************************/

var mapOptions = {
  center: [54.54, 20],
  zoom: 3.50
}
var mymap = L.map('mapid', mapOptions);
mymap.setMaxBounds([[-8, -80], [83, 80]]);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 8,
  minZoom:3,
  id: 'mapbox/light-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZGFuZmVyd2FuZyIsImEiOiJja2xpN2NndWgyYTI1MndzNDV1bjBrY2d2In0.WdslBmCdgObpqBD0e60C3g'
}).addTo(mymap);


//L.geoJson(europe31).addTo(mymap);

// The color configuration.
function newColor(d) {
  return d > 80 ? '#0c2c84' :
    d > 75 ? '#225ea8' :
      d > 70 ? '#1d91c0' :
        d > 65 ? '#41b6c4' :
          d > 60 ? '#7fcdbb' :
            d > 55 ? '#c7e9b4' :
              d > 50 ? '#edf8b1' :
                '#ffffcc';
}

/* 
Use EPI data for example.
Replace it with data recieved from server later. 
*/

var myArray = [79.6, 73.3, 57, 63.1, 64.8, 71, 82.5, 65.3, 78.9, 80, 77.2, 69.1, 63.7, 72.3, 72.8, 71, 61.6, 62.9, 82.3, 70.7, 75.3, 77.7, 60.9, 67, 64.7, 68.3, 72, 74.3, 78.7, 81.5, 81.3];

for (var i = 0; i < myArray.length; i++) {
  europe31.features[i].scores = myArray[i];
}

function newstyle(feature) {
  return {
    fillColor: newColor(feature.scores),
    weight: 2,
    color: 'white',
    fillOpacity: 0.75
  };
}

// L.geoJson(europe31, {style: newstyle}).addTo(mymap);



// Try to hover and diplay information
var info = L.control();

info.onAdd = function (mymap) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (properties) {
  this._div.innerHTML = '<h4>Score</h4>' + (properties ?
    '<b>' + properties.name + '</b><br />' + properties.scores
    : 'Hover over a country');
};

info.addTo(mymap);



//Try to highlight
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

geojson = L.geoJson(europe31, {
  style: newstyle,
  onEachFeature: onEachFeature
}).addTo(mymap);


// Try to add legend

var legend = L.control({ position: 'bottomleft' });

legend.onAdd = function (mymap) {



  var div = L.DomUtil.create('div', 'info legend'),
    grades = [50, 55, 60, 65, 70, 75, 80],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + newColor(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+'));
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend.addTo(mymap);



function updatePlotMap(array) {
  // remove the former layers for color
  mymap.removeLayer(geojson);

  // The color configuration.
  function newColor(d) {
    return d > 80 ? '#0c2c84' :
      d > 75 ? '#225ea8' :
        d > 70 ? '#1d91c0' :
          d > 65 ? '#41b6c4' :
            d > 60 ? '#7fcdbb' :
              d > 55 ? '#c7e9b4' :
                d > 50 ? '#edf8b1' :
                  '#ffffcc';
  }


  for (var i = 0; i < array.length; i++) {
    europe31.features[i].properties.scores = array[i];
  }

  function newstyle(feature) {
    return {
      fillColor: newColor(feature.properties.scores),
      weight: 2,
      color: 'white',
      fillOpacity: 0.75
    };
  }

  //Try to highlight
  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    info.update(layer.feature.properties);
  }

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
    });
  }

  geojson = L.geoJson(europe31, {
    style: newstyle,
    onEachFeature: onEachFeature
  }).addTo(mymap);

}