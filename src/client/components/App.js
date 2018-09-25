import React, { PureComponent } from 'react';
import Monitor from './Monitor';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      update: {},
      history: [],
      currentUserTyping: null,
    }
  }

  componentDidMount = () => {
    document.addEventListener( 'keyup', this.onKeyUp);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.onKeyDown);
  }

  onKeyUp = (e) => {
    if ( e.keyCode == 13 ) {
      const { update, history, currentUserTyping } = this.state;
      const prevUpdate = Object.assign({}, update);

      if (currentUserTyping && prevUpdate[currentUserTyping]) {
        if (prevUpdate[currentUserTyping].trim().length > 0) {
          history.push({
            userID: currentUserTyping,
            text: prevUpdate[currentUserTyping],
          });
          delete prevUpdate[currentUserTyping];

          this.setState({
            history,
            update: prevUpdate,
          })
        }
      }
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
    const { update, history } = this.state;

    return (
      <div className="App">
        <Monitor
          userID='user_01'
          update={update}
          history={history}
          onUpdate={(text, userID) => this.onUpdate(text, userID)}
        />
        <Monitor
          userID='user_02'
          update={update}
          history={history}
          onUpdate={(val, userID) => this.onUpdate(val, userID)}
        />
      </div>
    );
  }
}

export default App;
