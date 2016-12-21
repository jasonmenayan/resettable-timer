import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {timeStart: this.props.start, timeElapsed: 0, reset: false}
		this.resetTimer = this.resetTimer.bind(this)
		this.increment = this.increment.bind(this)
	}

	increment() {
		let duration = Date.now() - this.state.timeStart
		this.setState({timeElapsed: duration})
	}

	componentDidMount() {
		this.timer = setInterval(this.increment, 100)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	resetTimer() {
		this.setState({reset: true, timeStart: Date.now()})
	}

	render() {
		let text = this.state.reset ? 'resetting the clock.' : 'mounting this React component.'
		return (
			<div className="counter">
				<p className="text">So far <span className="elapsedtime">{(this.state.timeElapsed/1000).toFixed(1)}</span> seconds have passed since {text}</p>
				<button className="resetbutton" onClick={this.resetTimer}>Reset</button>
			</div>
		)
	}

}

ReactDOM.render(<App start={Date.now()} />, document.getElementById('root'))

