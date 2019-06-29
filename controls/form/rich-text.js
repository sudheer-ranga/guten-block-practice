import { Consumer } from '../base/context';
const { RichText } = wp.editor;

const RichTextWrapper = ({ name, tagName, attributes = {}, ...props }) => (
  <Consumer>
    {data => (
      <RichText
        {...props}
        tagName={tagName}
        value={data.attributes[name]}
        onChange={value => data.setAttributes({ [name]: value })}
      />
    )}
  </Consumer>
);

export default RichTextWrapper;
