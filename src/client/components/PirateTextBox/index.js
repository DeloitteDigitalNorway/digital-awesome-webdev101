import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';

class PirateTextBox extends PureComponent {
  render() {
    const { update, history, userID } = this.props;
    // const othersID = userID === left ? 'right' : 'left';

    const selfUpdate = update[userID]
    ? <SpeachBubble text={translate(update[userID])} classnames={'right'} />
    : null;

    let otherUpdate = null;

    for(var propt in update){
      if(propt !== userID && update[propt] !== '') {
        otherUpdate = <SpeachBubble text={translate('...')} classnames={'left update'}/>;
        break;
      }
    }

    return (
      <div className="pirate-text-box">

        {
          history.map(val => <SpeachBubble text={translate(val.text)} classnames={val.userID === userID ? 'left' : 'right'} />)
        }

        {
          selfUpdate
        }

        {
          otherUpdate
        }
      </div>
    );
  }
}

export default PirateTextBox;
