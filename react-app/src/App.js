import React, { Component } from "react";
import './App.css';
import ProfileDisp from "./components/ProfileDisp";
import CityDisp from "./components/CityDisp";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'p'
    }
  }

  render() {
    return (
      <div className="App">
        <div>
        <h1 align="center">Learning React is fun</h1>
        </div>
        <div className="menu">
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'p' })}>About me</p>
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 't' })}>My town</p>
        </div>

        {this.state.selectedMenu === 'p' ?
          <ProfileDisp />
          :
           <CityDisp />
        }
      </div>
    );
  }
}


export default App;
