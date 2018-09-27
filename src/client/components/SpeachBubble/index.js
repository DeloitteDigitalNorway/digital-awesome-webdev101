import React, { PureComponent } from 'react';

class SpeachBubble extends PureComponent {
  render() {
    const { text, classnames } = this.props;
    return (
      <div className={`SpeachBubble ${classnames}`}>
        { text }
      </div>
    );
  }
}

export default SpeachBubble;
