import React, { PureComponent } from 'react';
import { translate } from 'pirate-speak';
import SpeachBubble from './../SpeachBubble';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import * as ReactDOM from 'react-dom'
class PirateTextBox extends PureComponent {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      ReactDOM.findDOMNode(this.ref.current).scrollTo(0, 0);
    }
  }

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
      <TransitionGroup className='pirate-text-box' ref={this.ref}>
        {
          history.map((val, key) => (
            <CSSTransition key={key} timeout={1000} classNames="fade">
                <SpeachBubble key={key} text={translate(val.text)} classnames={`${val.userID === this.props.userID ? 'right' : 'left'} final`} />
            </CSSTransition>
          ))
        }

        { otherUpdate}
      </TransitionGroup>
    );
  }
}

export default PirateTextBox;
