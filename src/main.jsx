import React from 'react';
import ReactDOM from 'react/react-dom';
import Map from 'esri/Map';
// NOTE - adding the mapvidew as JSX was odd
// Because I need to pass the view around to
// components.
// I'll revisit this later
//import MapView from 'app/components/mapview';
import MapView from 'esri/views/MapView';
import Zoom from 'app/components/zoom';
import Attribution from 'app/components/attribution';
import BasemapToggle from 'app/components/basemaptoggle';
import 'dojo/domReady!';

const map = new Map({ basemap: 'streets'});

const view = new MapView({
  container: document.getElementById('viewDiv'),
  map,
  center: [-100.33, 25.69],
  zoom: 10,
  ui: {
    components: [] // empty the UI
  }
});

ReactDOM.render(
  <div>
    <Zoom view={view}/>
    <Attribution view={view}/>
    <BasemapToggle view={view} secondaryBasemap={'dark-gray'}/>
  </div>,
  document.getElementById('appDiv')
);
