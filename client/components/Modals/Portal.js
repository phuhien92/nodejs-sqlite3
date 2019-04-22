import React from 'react'
import ReactDOM from 'react-dom'

class Portal extends React.Component {
  componentDidMount () {
    this.element = document.querySelector(this.props.selector)
  }

  render () {
    if (this.element === undefined) {
      return null
    }

    return ReactDOM.createPortal(this.props.children, this.element)
  }
}

export default Portal;