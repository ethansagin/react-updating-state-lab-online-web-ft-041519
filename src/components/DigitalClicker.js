import React, {Component} from 'react'

class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    increment = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return(
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
