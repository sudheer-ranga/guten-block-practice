import { Consumer } from './context';
const { InspectorControls } = wp.editor;

// Todo, use react context vs map when we add other inspector controls :)

const Inspector = ({ children }) => (
  <Consumer>
    {data =>
      data.isSelected ? (
        <InspectorControls>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              attributes: data.attributes,
              onChange: (name, value) => data.setAttributes({ [name]: value }),
            })
          )}
        </InspectorControls>
      ) : null
    }
  </Consumer>
);

export default Inspector;