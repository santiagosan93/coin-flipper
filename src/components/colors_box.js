import React, { Component } from 'react'
import sample from '../helpers/sample'
import Block from './block'

class ColorsBox extends Component {
  static defaultProps = {
    colors: ['pink', 'violet', 'green', 'black']
  }

  constructor(props){
    super(props)

    this.state = {
      boxes: this.makeBoxes()
    }
    this.makeBoxes = this.makeBoxes.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(index) {
    const boxes = [...this.state.boxes]
    const box = {...boxes[index]}
    const oldColor = box.color
    do {
      box.color = sample(this.props.colors)
    } while (oldColor === box.color)
    boxes[index] = box
    this.setState({ boxes: boxes})
  }

  makeBoxes() {
    const blocks = []
    for(var i = 1; i <= this.props.quantity; i += 1 ) {
      blocks.push({key: i, index: i - 1, color: sample(this.props.colors)})
    }
    return blocks
  }


  render() {
    return (
      <div>
        {this.state.boxes.map(box => <Block key={box.key} index={box.index} color={box.color} changeColor={this.changeColor}/>)}
      </div>
    )
  }
}

export default ColorsBox

