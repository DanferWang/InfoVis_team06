var mapOptions = {
    center: [54.54, 29.19],
    zoom: 3.5
  }
  var mymap = L.map('mapid', mapOptions);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFuZmVyd2FuZyIsImEiOiJja2xpN2NndWgyYTI1MndzNDV1bjBrY2d2In0.WdslBmCdgObpqBD0e60C3g'
  }).addTo(mymap);

  L.geoJson(europe).addTo(mymap);

  function getColor(d) {
    return d > 1000000 ? '#0c2c84' :
      d > 500000 ? '#225ea8' :
      d > 200000 ? '#1d91c0' :
      d > 100000 ? '#41b6c4' :
      d > 50000 ? '#7fcdbb' :
      d > 30000 ? '#c7e9b4' :
      d > 20000 ? '#edf8b1' :
      '#ffffcc';
  }
  
  function style(feature) {
    return {
      fillColor: getColor(feature.properties.gdp_md_est),
      weight: 1,
      color: 'white',
      fillOpacity: 0.75
    };
  }
  
  L.geoJson(europe, {style: style}).addTo(mymap);
