import React, { PureComponent } from 'react';
import PirateTextBox from './../PirateTextBox';

class Monitor extends PureComponent {
  state = {
    text: 'Cash rules everything around me C.R.E.A.M. get the money!',
  };
  updateText = (event) => this.setState({ text: event.target.value });
  render() {
    const userID = this.props.userID;

    const text = this.state.text;
    return (
      <div id={userID} className='Monitor'>
        <h1 className="header"/>

        <PirateTextBox
          text={text}
        />

        <div className="top-box">
          <textarea value={text} onChange={this.updateText}/>
        </div>
        
      </div>
    );
  }
}

export default Monitor;
