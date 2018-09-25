import React, { PureComponent } from 'react';

class SpeachBubble extends PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div className='SpeachBubble'>
        { text }
      </div>
    );
  }
}

export default SpeachBubble;
