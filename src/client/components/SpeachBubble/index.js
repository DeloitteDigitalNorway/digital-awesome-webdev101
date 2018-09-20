import React, { PureComponent } from 'react';
import PirateTextBox from './../PirateTextBox';

class SpeachBubble extends PureComponent {
  state = {
    text: 'Cash rules everything around me C.R.E.A.M. get the money!',
  };
  updateText = (event) => this.setState({ text: event.target.value });
  render() {
    const text = this.props.text;
    const pos = this.props.pos;
    return (
      <div className={`SpeachBubble ${pos}`}>
        { text }
      </div>
    );
  }
}

export default SpeachBubble;
