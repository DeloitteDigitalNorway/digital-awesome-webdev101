import React, { PureComponent } from 'react';
import Monitor from './Monitor';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Monitor userID='user_left'/>
        <Monitor userID='user_right'/>
      </div>
    );
  }
}

export default App;
