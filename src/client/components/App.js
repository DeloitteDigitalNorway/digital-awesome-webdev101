import React, { PureComponent } from 'react';
import Monitor from './Monitor';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      update: {},
    }
  }

  onUpdate = (text, userID) => {
    const update = Object.assign({}, this.state.update);
    update[userID] = text;

    this.setState({
      update,
      currentUserTyping: userID,
    })
  }

  render() {
    const { update } = this.state;

    return (
      <div className="App">
        <Monitor
          userID='user_01'
          update={update}
          onUpdate={(text, userID) => this.onUpdate(text, userID)}
        />
        <Monitor
          userID='user_02'
          update={update}
          onUpdate={(val, userID) => this.onUpdate(val, userID)}
        />
      </div>
    );
  }
}

export default App;
