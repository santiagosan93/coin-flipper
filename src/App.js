import React, { Component } from 'react';
import CoinGame from './components/coin_game'
import ColorsBox from './components/colors_box'
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <CoinGame/>
        <ColorsBox quantity={10}/>
      </div>
    )
  }
}

export default App;
