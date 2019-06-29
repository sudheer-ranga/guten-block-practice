import React from 'react';
import { Provider } from './context';

class Import extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let comp = await this.props.load();

    this.setState({ component: comp.default });
  }
  
  render() {
    let { component } = this.state;
    let { load, ...props } = this.props;
    if (!component) return '';
    
    return (
      <Provider value={props}>
        {React.createElement(component, { ...props })}
      </Provider>
    );
  }
}

export default Import;