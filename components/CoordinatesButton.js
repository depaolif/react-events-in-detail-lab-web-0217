import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }

  render() {
    return(
      <button onClick={this.handleClick}>Coords</button>
    )
  }
}

module.exports = CoordinatesButton
