import React from 'react';
import './App.scss';
import Entries from './Components/Entries';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <Entries></Entries>
          </table>
          <button id="addButton">Hinzufügen</button>
        </header>
      </div>
    );
  }
}

export default App