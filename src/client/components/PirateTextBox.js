import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';

class PirateTextBox extends PureComponent {
  static defaultProps = {
    text: 'Hello default text',
  };
  render() {
    const text = this.props.text;
    return (
      <div className="pirate-text-box">
        {translate(text)}
      </div>
    );
  }
}

export default PirateTextBox;
