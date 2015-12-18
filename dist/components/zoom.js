'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Zoom/ZoomViewModel'], function (exports, _react, _watchUtils, _ZoomViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _ZoomViewModel2 = _interopRequireDefault(_ZoomViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Zoom = _react2.default.createClass({
    displayName: 'Zoom',
    getInitialState: function getInitialState() {
      return {
        vm: new _ZoomViewModel2.default(),
        updating: false,
        maxZoomed: false,
        minZoomed: false
      };
    },
    getDefaultProps: function getDefaultProps() {
      return {
        view: {}
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      this.props.view.then(function (view) {
        _this.state.vm.view = view;

        _watchUtils2.default.init(view, 'zoom', function (val) {
          _this.setState({
            maxZoomed: val === view.constraints.maxZoom,
            minZoomed: val === view.constraints.minZoom
          });
        });

        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({
            updating: updating
          });
        });
      });
    },
    zoomIn: function zoomIn() {
      if (!this.state.maxZoomed) {
        this.state.vm.zoomIn();
      }
    },
    zoomOut: function zoomOut() {
      if (!this.state.minZoomed) {
        this.state.vm.zoomOut();
      }
    },
    render: function render() {
      var btnstyle = this.state.updating ? 'zoom-btns' : 'zoom-btns view-busy';
      var maxstate = this.state.maxZoomed ? 'button raised grey narrow disable' : 'button raised grey narrow';
      var minstate = this.state.minZoomed ? 'button raised grey narrow disable' : 'button raised grey narrow';
      return _react2.default.createElement('div', {
        className: btnstyle
      }, _react2.default.createElement('div', {
        className: maxstate,
        onClick: this.zoomIn
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'add'))), _react2.default.createElement('div', {
        className: minstate,
        onClick: this.zoomOut
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'remove'))));
    }
  });

  exports.default = Zoom;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvem9vbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFvRWUsSUFBSSIsImZpbGUiOiJjb21wb25lbnRzL3pvb20uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBab29tVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9ab29tL1pvb21WaWV3TW9kZWwnO1xuXG5jb25zdCBab29tID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdm06IG5ldyBab29tVmlld01vZGVsKCksXG4gICAgICB1cGRhdGluZzogZmFsc2UsXG4gICAgICBtYXhab29tZWQ6IGZhbHNlLFxuICAgICAgbWluWm9vbWVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWV3OiB7fVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIHRoaXMuc3RhdGUudm0udmlldyA9IHZpZXc7XG4gICAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3pvb20nLCAodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1heFpvb21lZDogdmFsID09PSB2aWV3LmNvbnN0cmFpbnRzLm1heFpvb20sXG4gICAgICAgICAgbWluWm9vbWVkOiB2YWwgPT09IHZpZXcuY29uc3RyYWludHMubWluWm9vbVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdzdGF0aW9uYXJ5JywgKHVwZGF0aW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGluZyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubWF4Wm9vbWVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnZtLnpvb21JbigpO1xuICAgIH1cbiAgfSxcblxuICB6b29tT3V0KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5taW5ab29tZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUudm0uem9vbU91dCgpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgYnRuc3R5bGUgPSB0aGlzLnN0YXRlLnVwZGF0aW5nID8gJ3pvb20tYnRucycgOiAnem9vbS1idG5zIHZpZXctYnVzeSc7XG4gICAgbGV0IG1heHN0YXRlID0gdGhpcy5zdGF0ZS5tYXhab29tZWQgPyAnYnV0dG9uIHJhaXNlZCBncmV5IG5hcnJvdyBkaXNhYmxlJyA6ICdidXR0b24gcmFpc2VkIGdyZXkgbmFycm93JztcbiAgICBsZXQgbWluc3RhdGUgPSB0aGlzLnN0YXRlLm1pblpvb21lZCA/ICdidXR0b24gcmFpc2VkIGdyZXkgbmFycm93IGRpc2FibGUnIDogJ2J1dHRvbiByYWlzZWQgZ3JleSBuYXJyb3cnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtidG5zdHlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXhzdGF0ZX0gb25DbGljaz17dGhpcy56b29tSW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWluc3RhdGV9IG9uQ2xpY2s9e3RoaXMuem9vbU91dH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJlbW92ZTwvaT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBab29tO1xuIl19