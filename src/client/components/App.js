import React, { PureComponent } from 'react';
import Monitor from './Monitor';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      update: {},
      history: [],
    }
  }

  onUpdate = (text, userID) => {
    const update = Object.assign({}, this.state.update);
    update[userID] = text;

    this.setState({
      update,
    })
  }

  onSave = (text, userID) => {
    const { history } = this.state;
    history.push({userID, text});

    this.setState({
      history,
    })
  }

  render() {
    const { update, history } = this.state;

    return (
      <div className="App">
        <Monitor
          userID='user_01'
          update={update}
          history={history}
          onUpdate={(val, userID) => this.onUpdate(val, userID)}
          onSave={ pos => this.onSave(pos)}
        />
        <Monitor
          userID='user_02'
          update={update}
          history={history}
          onUpdate={(text, userID) => this.onUpdate(text, userID)}
          onSave={ (text, userID) => this.onSave(text, userID)}
        />
      </div>
    );
  }
}

export default App;
