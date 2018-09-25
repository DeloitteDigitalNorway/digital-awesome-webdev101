import React, { PureComponent } from 'react';

class Monitor extends PureComponent {
  updateText = (event) => {
    console.log(event.target.value)
  }

  render() {
    const userID = this.props.userID;

    return (
      <div id={userID} className='Monitor'>
        <h1 className="header">Pirrrate Chat</h1>

        <div className='pirate-text-box'>

        </div>

        <div className="top-box">
          <textarea onChange={this.updateText}/>
        </div>
      </div>
    );
  }
}

export default Monitor;
