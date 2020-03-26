import React from 'react'

const Block = (props) => {
    return (
      <div
        className='block'
        style={{backgroundColor: props.color}}
        onClick={ e => props.changeColor(props.index)}
      >
        hey
      </div>
    )
}

export default Block
