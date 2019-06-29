import { Consumer } from './context';

// Todo, use react context vs map when we add other inspector controls :)

const Editor = ({ children }) => (
  <Consumer>
    {data =>
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          attributes: data.attributes,
          onChange: (name, value) => data.setAttributes({ [name]: value }),
        })
      )
    }
  </Consumer>
);

export default Editor;