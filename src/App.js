import React from 'react';  
import './App.scss';
import Entry from './Entry.jsx'
import configType from './ConfigTypes'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <Entry config="Common.Imap.Username" type={configType.STRING}></Entry>
            <Entry config="Common.Imap.Password" type={configType.STRING}></Entry>
            <Entry config="Common.Imap.UseSsl" type={configType.BOOL}></Entry>
            <Entry config="Common.Send.Timeout" type={configType.DATETIME}></Entry>
            <Entry config="Common.Imap.Glubsch" type={configType.STRING}></Entry>
          </table>
          <button id="addButton">Hinzufügen</button>
        </header>
      </div>
    );
  }
}

export default App