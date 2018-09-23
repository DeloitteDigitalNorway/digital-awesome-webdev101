import React, { PureComponent } from 'react';
import PirateTextBox from './../PirateTextBox';

class Monitor extends PureComponent {
  updateText = (event) => {
    const { onUpdate, userID } = this.props;
    onUpdate(event.target.value, userID)
  }

  render() {
    const pos = this.props.pos;
    const update = this.props.update;
    const history = this.props.history;
    const userID = this.props.userID;

    return (
      <div id={userID} className='Monitor'>
        <h1 className="header"/>

        <PirateTextBox
          userID={userID}
          update={update}
          history={history}
        />

        <div className="top-box">
          <textarea value={update[userID]} onChange={this.updateText}/>
        </div>

      </div>
    );
  }
}

export default Monitor;
