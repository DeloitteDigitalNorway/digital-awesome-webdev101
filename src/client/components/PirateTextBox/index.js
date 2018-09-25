import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';

class PirateTextBox extends PureComponent {
  render() {
    const { update, history, userID } = this.props;

    const selfUpdate = update[userID]
    ? <SpeachBubble text={update[userID]} />
    : null;

    let otherUpdate = null;

    for(var propt in update){
      if(propt !== userID && update[propt] !== '') {
        otherUpdate = <SpeachBubble text={translate('...')} classnames={'left update'}/>;
        break;
      }
    }

    return (
      <div className='pirate-text-box'>
        {
          history.map((val, key) => (
            <SpeachBubble key={key} text={val.text} />
          ))
        }

        { selfUpdate
          ? selfUpdate
          : null
        }

        {
          otherUpdate
          ? otherUpdate
          : null
        }
      </div>
    );
  }
}

export default PirateTextBox;
