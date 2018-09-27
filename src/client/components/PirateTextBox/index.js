import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
class PirateTextBox extends PureComponent {
  render() {
    const { update, history, userID } = this.props;

    const selfUpdate = update[userID]
    ? <CSSTransition timeout={500} classNames="fastFade">
        <SpeachBubble text={translate(update[userID])} classnames={'right'} />
      </CSSTransition>
    : null;

    let otherUpdate = null;
    for(var propt in update){
      if(propt !== userID && update[propt] !== '') {
        otherUpdate = <CSSTransition timeout={500} classNames="fastFade">
          <SpeachBubble text={'...'} classnames={'left update'}/>
        </CSSTransition>;
        break;
      }
    }

    return (
      <TransitionGroup className='pirate-text-box'>
        {
          history.map((val, key) => (
            <CSSTransition key={key} timeout={1000} classNames="fade">
                <SpeachBubble key={key} text={translate(val.text)} classnames={`${val.userID === userID ? 'right' : 'left'} final`} />
            </CSSTransition>
          ))
        }

        { selfUpdate }
        { otherUpdate}
      </TransitionGroup>
    );
  }
}

export default PirateTextBox;
