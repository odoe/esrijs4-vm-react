'use strict';

define(['react', 'react/react-dom', 'esri/Map', 'esri/views/MapView', 'app/components/zoom', 'app/components/attribution', 'app/components/basemaptoggle', 'dojo/domReady!'], function (_react, _reactDom, _Map, _MapView, _zoom, _attribution, _basemaptoggle) {
  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _Map2 = _interopRequireDefault(_Map);

  var _MapView2 = _interopRequireDefault(_MapView);

  var _zoom2 = _interopRequireDefault(_zoom);

  var _attribution2 = _interopRequireDefault(_attribution);

  var _basemaptoggle2 = _interopRequireDefault(_basemaptoggle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var map = new _Map2.default({
    basemap: 'streets'
  });
  var view = new _MapView2.default({
    container: document.getElementById('viewDiv'),
    map: map,
    center: [-100.33, 25.69],
    zoom: 10,
    ui: {
      components: []
    }
  });

  _reactDom2.default.render(_react2.default.createElement('div', null, _react2.default.createElement(_zoom2.default, {
    view: view
  }), _react2.default.createElement(_attribution2.default, {
    view: view
  }), _react2.default.createElement(_basemaptoggle2.default, {
    view: view,
    secondaryBasemap: 'dark-gray'
  })), document.getElementById('appDiv'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbXX0=