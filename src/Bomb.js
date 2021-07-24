// your Bomb code here!
import React, {Component} from "react"

class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    render() {
        // console.log("Bomb state", this.state);
        if (this.state.secondsLeft === 0) {
            return <p>Boom!</p>
        } else {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>;
        }
    }
}

export default Bomb