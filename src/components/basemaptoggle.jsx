import React from 'react';
import watchUtils from 'esri/core/watchUtils';
import BasemapToggleViewModel from 'esri/widgets/BasemapToggle/BasemapToggleViewModel';

function bgImage(url) {
  return {
    backgroundImage: 'url(' + url + ')'
  };
}

const BasemapToggle = React.createClass({

  getInitialState() {
    return {
      vm: new BasemapToggleViewModel(),
      secondaryThumbnailUrl: ''
    };
  },

  getDefaultProps() {
    return {
      view: {},
      secondaryThumbnailUrl: '',
      currentThumbnailUrl: '',
      updating: false
    }
  },

  componentDidMount() {
    this.props.view.then(view => {

      this.state.vm.view = view;
      this.state.vm.secondaryBasemap = this.props.secondaryBasemap;

      let { secondaryBasemap, currentBasemap } = this.state.vm;

      let info = this.state.vm.getBasemapInfo(this.props.secondaryBasemap || 'topo');

      this.setState({
        secondaryThumbnailUrl: info.thumbnailUrl,
        currentThumbnailUrl: this.state.vm.currentBasemap.thumbnailUrl
      });

      watchUtils.watch(this.state.vm, 'secondaryBasemap', this.updateThumbnails);
      watchUtils.init(view, 'stationary', (updating) => {
        this.setState({ updating });
      });

    });
  },

  updateThumbnails(secondary, current) {
    let secInfo = this.state.vm.getBasemapInfo(secondary);
    let curInfo = this.state.vm.getBasemapInfo(current);
    this.setState({
      secondaryThumbnailUrl: secInfo.thumbnailUrl,
      currentThumbnailUrl: curInfo.thumbnailUrl
    });
  },

  toggle() {
    this.state.vm.toggle();
  },

  render() {

    let currentThumbnailStyle = bgImage(this.state.currentThumbnailUrl);

    let secondaryThumbnailStyle = bgImage(this.state.secondaryThumbnailUrl);

    let style = this.state.updating ? 'basemap-container' : 'basemap-container view-busy';

    return (

      <div className={style}>
        <div className='basemap-item basemap-item-secondary' onClick={this.toggle} style={secondaryThumbnailStyle}></div>
        <div className='basemap-item basemap-item-current' style={currentThumbnailStyle}></div>
      </div>

    );

  }

});

export default BasemapToggle;