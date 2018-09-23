import React, { PureComponent } from 'react';
import PirateTextBox from './../PirateTextBox';

class SpeachBubble extends PureComponent {
  render() {
    const text = this.props.text;
    const classnames = this.props.classnames;
    return (
      <div className={`SpeachBubble ${classnames}`}>
        { text }
      </div>
    );
  }
}

export default SpeachBubble;
