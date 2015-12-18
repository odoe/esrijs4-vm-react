import React from 'react';
import ReactDOM from 'react/react-dom';
import MapView from 'esri/views/MapView';

const Map = React.createClass({
  componentDidMount: function() {
    var node = ReactDOM.findDOMNode(this.refs.mapView);
    var view = new MapView({
      container: node,
      map: this.props.map,
      center: [-100.33, 25.69],
      zoom: 10,
      ui: {
        components: []
      }
    });
  },

  render: function() {

    return (
      <div className='mapView' ref='mapView'>
      </div>
    );

  }
});

export default Map;
