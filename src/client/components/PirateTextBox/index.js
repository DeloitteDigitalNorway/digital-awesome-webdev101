import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';

class PirateTextBox extends PureComponent {
  render() {
    const { update, userID } = this.props;

    const selfUpdate = update[userID]
    ? <SpeachBubble text={update[userID]} />
    : null;

    return (
      <div className='pirate-text-box'>
        { selfUpdate
          ? selfUpdate
          : null
        }
      </div>
    );
  }
}

export default PirateTextBox;
