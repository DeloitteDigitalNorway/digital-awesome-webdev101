import React, { PureComponent } from 'react';
import PirateTextBox from './../PirateTextBox';

class Monitor extends PureComponent {
  updateText = (event) => {
    const { onUpdate, userID } = this.props;
    onUpdate(event.target.value, userID);
  }

  render() {
    const { update, userID} = this.props;

    return (
      <div id={userID} className='Monitor'>
        <h1 className="header" />

        <PirateTextBox
          userID={userID}
          update={update}
        />

        <div className="top-box">
          <textarea value={update[userID] ? update[userID] : ''} onChange={this.updateText}/>
        </div>
      </div>
    );
  }
}

export default Monitor;
