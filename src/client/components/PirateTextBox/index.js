import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';

class PirateTextBox extends PureComponent {
  render() {
    return (
      <div className='pirate-text-box'>
        <SpeachBubble />
        <SpeachBubble />
      </div>
    );
  }
}

export default PirateTextBox;
