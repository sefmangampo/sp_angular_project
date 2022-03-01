import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map | any;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor() { }

  /*
  1.3 MT nuclear bomb
  2km fireball vaporizes
  7 km widespread deaths
  13 km 3rd degree burns from thermal pulse
  21 kms shockwave breaks all windows
   
  */

  ngOnInit() {

    navigator.geolocation.getCurrentPosition(position => {
      this.lng = 125.512137//121.057582//position.coords.latitude;
      this.lat = 7.029903//14.583589// position.coords.longitude;
      this.map.flyTo({
        center: [
          this.lng,
          this.lat
        ],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });

      this.map.addSource("polygon", this.createGeoJSONCircle([this.lng, this.lat], 8.5, 64));

      this.map.addLayer({
        "id": "polygon",
        "type": "fill",
        "source": "polygon",
        "layout": {},
        "paint": {
          "fill-color": "red",
          "fill-opacity": 0.3
        }
      });
    });

    this.map = new mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl())
  }

  // createColoredCirle = function (center, radiusInKm, )

  createGeoJSONCircle = function (center, radiusInKm, points) {
    if (!points) points = 64;

    var coords = {
      latitude: center[1],
      longitude: center[0]
    } as any;

    var km = radiusInKm;

    var ret = [] as any;
    var distanceX = km / (111.320 * Math.cos(coords.latitude * Math.PI / 180));
    var distanceY = km / 110.574;

    var theta, x, y;
    for (var i = 0; i < points; i++) {
      theta = (i / points) * (2 * Math.PI);
      x = distanceX * Math.cos(theta);
      y = distanceY * Math.sin(theta);

      ret.push([coords.longitude + x, coords.latitude + y]);
    }
    ret.push(ret[0]);

    return {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [ret]
          }
        }]
      }
    };
  };


}
