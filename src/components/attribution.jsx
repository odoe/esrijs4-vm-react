import React from 'react';
import watchUtils from 'esri/core/watchUtils';
import AttributionViewModel from 'esri/widgets/Attribution/AttributionViewModel';

const Attribution = React.createClass({

  getInitialState() {
    return {
      vm: new AttributionViewModel(),
      attribution: '',
      updating: false
    };
  },

  getDefaultProps() {
    return {
      view: {}
    }
  },

  componentDidMount() {
    this.props.view.then(view => {
      this.state.vm.view = view;
      watchUtils.watch(this.state.vm, 'attributionText', (attribution) => {
        this.setState({ attribution });
      });
      watchUtils.init(view, 'stationary', (updating) => {
        this.setState({ updating });
      });
    });
  },

  render() {

    let style = this.state.updating ? 'attribution' : 'attribution view-busy';

    return (

      <span className={style} ref='mainNode'>{this.state.attribution}</span>

    );

  }

});

export default Attribution;