import React from 'react'

const CoinHistory = (props) => {
  const totalFlips = props.heads + props.tails
  return(
    <div className='coin-history'>
      <h3>Out of {totalFlips} flips, head: {props.heads}, tails: {props.tails}</h3>
    </div>
  )
}

export default CoinHistory
