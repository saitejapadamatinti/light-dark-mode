import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  buttonEl = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  getContainerColor = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'container-3' : 'container-2'
  }

  buttonColor = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'button-1' : 'button'
  }

  render() {
    const buttonText = this.getButtonText()
    const className = this.getContainerColor()
    const buttonColor = this.buttonColor()

    return (
      <div className="main-container">
        <div className={className}>
          <h1 id="headingEl">Click To Change Mode</h1>
          <button
            type="button"
            className={buttonColor}
            onClick={this.buttonEl}
            id="btnEl"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

/* import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  buttonEl = () => {
    const btnEl = document.getElementById('btnEl')
    const container = document.getElementById('container')
    const heading = document.getElementById('heading')

    if (btnEl.textContent === 'Light Mode') {
      //   container.classList.add('container-3')
      //   heading.classList.add('heading-1')
      btnEl.classList.add('button-1')
    }
  }

  render() {
    const {text, container, heading, button} = this.state

    return (
      <div className="main-container">
        <div id="container">
          <h1 id="heading">Click To Change Mode</h1>
          <button id="btnEl" onClick={this.buttonEl}>
            Light Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
*/
