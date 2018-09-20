import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';

class PirateTextBox extends PureComponent {
  static defaultProps = {
    text: 'Hello default text',
  };
  render() {
    const text = this.props.text;
    return (
      <div className="pirate-text-box">
        <SpeachBubble text={translate(text)} pos={'left'}/>
        <SpeachBubble text={translate(text)} pos={'right'}/>
      </div>
    );
  }
}

export default PirateTextBox;
