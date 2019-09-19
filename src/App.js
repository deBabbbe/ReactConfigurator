import React from 'react';
import './App.scss';
import moment from 'moment';


class App extends React.Component {
  getDate() {
    var dings = moment().format('YYYY-MM-DDTHH:mm:ss');
    console.warn(dings)
    return dings;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <tr>
              <td>Common.Imap.Username</td>
              <td>string</td>
              <td><input></input></td>
              <td><button title="Löschen">X</button></td>
            </tr>
            <tr>
              <td>Common.Imap.Password</td>
              <td>string</td>
              <td><input></input></td>
              <td><button title="Löschen">X</button></td>
            </tr>
            <tr>
              <td>Common.Imap.UseSsl</td>
              <td>bool</td>
              <td>
                <select>
                  <option disabled selected value> -- select an option -- </option>
                  <option>true</option>
                  <option>false</option>
                </select>
              </td>
              <td><button title="Löschen">X</button></td>
            </tr>
            <tr>
              <td>Common.Send.Timeout</td>
              <td>DateTime</td>
              <td>
                <input type="datetime-local" defaultValue={this.getDate()}></input>
              </td>
              <td><button title="Löschen">X</button></td>
            </tr>
          </table>
          <button id="addButton">Hinzufügen</button>
        </header>
      </div>
    );
  }
}

export default App