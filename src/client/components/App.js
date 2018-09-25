import React, { PureComponent } from 'react';
import Monitor from './Monitor';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Monitor
          userID='user_01'
        />
        <Monitor
          userID='user_02'
        />
      </div>
    );
  }
}

export default App;
