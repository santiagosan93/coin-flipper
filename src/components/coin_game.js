import React, { Component } from 'react'
import Coin from './coin'
import CoinHistory from './coin_history'
import sample from '../helpers/sample'

class CoinGame extends Component {
  static defaultProps = {
    images: [
      {side: 'heads', image: 'heads'},
      {side: 'tails', image: 'tails'}
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      heads: 0,
      tails: 0,
      coin: '',
    }
    this.flipCoin = this.flipCoin.bind(this)
  }

  flipCoin() {
    const coin = sample(this.props.images)
    this.setState((prevState) => {
      return {
        coin: coin,
        heads: prevState.heads + (coin.side === 'heads' ? 1 : 0),
        tails: prevState.tails + (coin.side === 'tails' ? 1 : 0)
      }
    })
  }

  render() {
    return(
      <div className='App'>
        <Coin coinImage={this.state.coin.side}/>
        <button onClick={this.flipCoin}>Flip the coin!</button>
        <CoinHistory heads={this.state.heads} tails={this.state.tails}/>
      </div>
    )
  }
}

export default CoinGame
