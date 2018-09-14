import React, { PureComponent } from 'react';
import PirateTextBox from './PirateTextBox';

class App extends PureComponent {
  state = {
    text: 'Cash rules everything around me C.R.E.A.M. get the money!',
  };
  updateText = (event) => this.setState({ text: event.target.value });
  render() {
    const text = this.state.text;
    return (
      <div className="App">
        <h1 className="header"/>
        <div className="top-box">
          <textarea value={text} onChange={this.updateText}/>
        </div>
        <PirateTextBox
          text={text}
        />
      </div>
    );
  }
}

export default App;
